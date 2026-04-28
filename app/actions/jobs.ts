"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { semanticJobSearch } from "@/lib/ai";
import { generateText } from "@/lib/gemini";

function slugify(text: string) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim() + "-" + Date.now();
}

// In-memory cache for AI query expansion (lasts until server restart)
const queryExpansionCache = new Map<string, string[]>();

/**
 * Use Gemini AI to expand a search query into related Vietnamese job keywords.
 * E.g., "IT" → ["Công nghệ thông tin", "CNTT", "developer", "lập trình", "phần mềm"]
 */
async function expandQueryWithAI(query: string): Promise<string[]> {
    const cacheKey = query.toLowerCase().trim();
    if (queryExpansionCache.has(cacheKey)) {
        return queryExpansionCache.get(cacheKey)!;
    }

    try {
        const prompt = `Bạn là hệ thống tìm kiếm việc làm. Người dùng tìm: "${query}"

Trả về TÊN NGÀNH NGHỀ và TÊN VỊ TRÍ CÔNG VIỆC liên quan. KHÔNG trả về từ chung chung như "phần mềm", "công cụ", "kỹ năng".

Ví dụ:
- "IT" → ["Công nghệ thông tin", "Developer", "Backend Engineer", "Frontend Developer", "DevOps"]
- "HR" → ["Nhân sự", "Tuyển dụng", "HR Manager", "Recruitment"]
- "ngân hàng" → ["Tài chính / Ngân hàng", "Tín dụng", "Giao dịch viên", "Banking"]

CHỈ trả về JSON array. KHÔNG giải thích.`;

        const result = await generateText(prompt);
        const jsonMatch = result.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            const keywords: string[] = JSON.parse(jsonMatch[0]);
            const expanded = keywords.filter(k => typeof k === "string" && k.trim().length > 0).slice(0, 8);
            queryExpansionCache.set(cacheKey, expanded);
            return expanded;
        }
    } catch (e) {
        console.error("AI query expansion failed:", e);
    }

    return [query]; // fallback to original query
}

export async function getJobs(params?: {
    q?: string;
    loc?: string;
    type?: string;
    status?: string;
    industryId?: string;
    salary?: string;
    exp?: string;
    age?: string;
    sort?: string;
    useAI?: boolean;
    page?: number;
    limit?: number;
}) {
    // Tự động gỡ VIP các tin đã hết hạn
    await prisma.job.updateMany({
        where: { isVip: true, vipUntil: { lt: new Date() } },
        data: { isVip: false }
    });

    const where: Record<string, unknown> = {};

    if (params?.status) {
        where.status = params.status;
    } else {
        where.status = "ACTIVE";
    }

    if (params?.q && params.useAI) {
        try {
            const aiJobs = await semanticJobSearch(params.q, 50);
            if (aiJobs && Array.isArray(aiJobs) && aiJobs.length > 0) {
                return {
                    jobs: aiJobs.map((job: any) => ({
                        id: job.id,
                        title: job.title,
                        slug: job.slug,
                        description: job.description,
                        requirements: job.requirements,
                        benefits: job.benefits,
                        salaryMin: job.salaryMin,
                        salaryMax: job.salaryMax,
                        location: job.location,
                        jobType: job.jobType,
                        skills: job.skills,
                        createdAt: job.createdAt,
                        expiresAt: job.expiresAt,
                        isVip: job.isVip || false,
                        vipUntil: job.vipUntil,
                        company: {
                            name: job.companyName,
                            logo: job.companyLogo,
                            slug: job.companySlug,
                            verified: false,
                        },
                        similarity: job.similarity,
                    })),
                    total: aiJobs.length
                };
            }
        } catch (e) {
            console.error("AI search failed, falling back to text search:", e);
        }
    }
    // Text-based search fallback (runs when AI search fails or is disabled)
    if (params?.q) {
        // Use AI to expand the query into related keywords
        const expandedKeywords = await expandQueryWithAI(params.q);

        // Build OR conditions — only search precise fields (title, skills, industry)
        // DO NOT search description: templates contain generic words that cause false matches
        const orConditions: Record<string, unknown>[] = [];

        for (const kw of expandedKeywords) {
            orConditions.push(
                { title: { contains: kw, mode: "insensitive" } },
                { skills: { hasSome: [kw] } },
                { company: { industry: { contains: kw, mode: "insensitive" } } },
                { industry: { name: { contains: kw, mode: "insensitive" } } },
            );
        }

        // Also search original query in company name
        orConditions.push(
            { company: { name: { contains: params.q, mode: "insensitive" } } },
        );

        where.OR = orConditions;
    }
    if (params?.loc) {
        where.location = { contains: params.loc, mode: "insensitive" };
    }
    if (params?.type) where.jobType = params.type;
    if (params?.industryId) {
        // Handle slug or ID
        if (params.industryId.length > 15) {
            where.industryId = params.industryId;
        } else {
            where.industry = { slug: params.industryId };
        }
    }

    // Advanced search conditions
    const andConditions: Record<string, unknown>[] = [];
    
    // Salary range filter: Overlap logic
    if (params?.salary) {
        const [minSalary, maxSalary] = params.salary.split("-").map(Number);
        andConditions.push({
            AND: [
                { OR: [{ salaryMin: { lte: maxSalary } }, { salaryMin: null }] },
                { OR: [{ salaryMax: { gte: minSalary } }, { salaryMax: null }] }
            ]
        });
    }

    // Experience filter
    if (params?.exp) {
        const [minExp, maxExp] = params.exp.split("-").map(Number);
        andConditions.push({
            OR: [
                { experienceYears: { gte: minExp, lte: maxExp } },
                { experienceYears: null }
            ]
        });
    }

    // Age filter
    if (params?.age) {
        const [minAge, maxAge] = params.age.split("-").map(Number);
        andConditions.push({
            AND: [
                { OR: [{ ageMin: { lte: maxAge } }, { ageMin: null }] },
                { OR: [{ ageMax: { gte: minAge } }, { ageMax: null }] }
            ]
        });
    }

    if (andConditions.length > 0) {
        where.AND = andConditions;
    }

    const limit = params?.limit || 12;
    const page = params?.page || 1;
    const skip = (page - 1) * limit;

    // Sorting logic
    let secondaryOrderBy: any = { createdAt: "desc" };
    if (params?.sort === "salary_high") secondaryOrderBy = { salaryMax: "desc" };
    if (params?.sort === "salary_low") secondaryOrderBy = { salaryMin: "asc" };

    const orderBy = [{ isVip: "desc" }, secondaryOrderBy];

    const [jobs, total] = await Promise.all([
        prisma.job.findMany({
            where,
            include: { company: { select: { name: true, logo: true, slug: true, verified: true } } },
            orderBy: params?.q ? undefined : orderBy,
            take: limit,
            skip,
        }),
        prisma.job.count({ where })
    ]);

    return { jobs, total };
}

export async function getJobBySlug(slug: string) {
    return prisma.job.findUnique({
        where: { slug },
        include: {
            company: { select: { name: true, logo: true, slug: true, website: true, verified: true } },
            industry: true,
            _count: { select: { applications: true } }
        },
    });
}

export async function getJobById(id: string) {
    return prisma.job.findUnique({
        where: { id },
        include: {
            company: { select: { name: true, logo: true, slug: true, website: true, verified: true } },
            applications: { include: { candidate: { select: { name: true, email: true, image: true, candidateProfile: true } } } },
            _count: { select: { applications: true } }
        },
    });
}

export async function createJob(formData: FormData) {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") {
        return { error: "Không có quyền truy cập" };
    }

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const requirements = formData.get("requirements") as string;
    const benefits = formData.get("benefits") as string;
    const province = formData.get("province") as string;
    const location = province; // Backwards compatibility if needed, or just use province
    const jobType = formData.get("jobType") as string;
    const salaryMin = parseInt(formData.get("salaryMin") as string) || null;
    const salaryMax = parseInt(formData.get("salaryMax") as string) || null;
    const skillsRaw = formData.get("skills") as string;
    const skills = skillsRaw ? skillsRaw.split(",").map((s) => s.trim()).filter(Boolean) : [];
    const industryId = formData.get("industry") as string; // Already using slug in industries list
    const ageMin = parseInt(formData.get("ageMin") as string) || null;
    const ageMax = parseInt(formData.get("ageMax") as string) || null;
    const experienceYears = parseInt(formData.get("experienceYears") as string) || null;

    // Get employer's company
    const employer = await prisma.employerProfile.findUnique({
        where: { userId: session.user.id },
    });

    if (!employer?.companyId) {
        return { error: "Bạn chưa có thông tin công ty. Vui lòng cập nhật trang Công ty trước." };
    }

    let finalIndustryId = industryId ? await prisma.industry.findFirst({
        where: { OR: [{ id: industryId }, { slug: industryId }] },
        select: { id: true }
    }).then(r => r?.id || null) : null;

    const job = await (prisma.job as any).create({
        data: {
            companyId: employer.companyId,
            postedById: session.user.id,
            title,
            slug: slugify(title) + "-" + Date.now(),
            description,
            requirements,
            benefits,
            location,
            province,
            jobType: jobType as "FULL_TIME" | "PART_TIME" | "REMOTE" | "INTERNSHIP" | "CONTRACT",
            salaryMin,
            salaryMax,
            skills,
            ageMin,
            ageMax,
            experienceYears,
            industryId: finalIndustryId,
        },
    });
    try {
        const { generateJobEmbedding } = await import("@/lib/ai");
        await generateJobEmbedding(job.id);
    } catch (e) {
        console.error("Failed to generate embedding for new job:", e);
    }

    revalidatePath("/employer/jobs");
    revalidatePath("/jobs");
    redirect("/employer/jobs");
    return { success: true, id: job.id };
}

export async function updateJobStatus(jobId: string, status: string) {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") {
        return { error: "Không có quyền" };
    }
    const job = await prisma.job.update({
        where: { id: jobId },
        data: { status: status as "ACTIVE" | "REJECTED" | "CLOSED" },
        select: { title: true, postedById: true },
    });

    if (status === "ACTIVE") {
        try {
            const { generateJobEmbedding } = await import("@/lib/ai");
            await generateJobEmbedding(jobId);
        } catch (e) {
            console.error("Failed to generate embedding for job:", e);
        }
    }

    // Notify employer about job status
    if (job.postedById) {
        const statusMsg = status === "ACTIVE" ? "đã được duyệt" : status === "REJECTED" ? "đã bị từ chối" : "đã được đóng";
        try {
            await prisma.notification.create({
                data: {
                    userId: job.postedById,
                    type: status === "ACTIVE" ? "JOB_APPROVED" : status === "REJECTED" ? "JOB_REJECTED" : "APPLICATION_STATUS",
                    title: `Tin tuyển dụng ${statusMsg}`,
                    message: `Tin "${job.title}" ${statusMsg} bởi quản trị viên.`,
                    link: "/employer/jobs",
                },
            });
        } catch (_) { /* ignore */ }
    }

    revalidatePath("/admin/jobs");
    return { success: true };
}

export async function getEmployerJobs() {
    const session = await auth();
    if (!session?.user) redirect("/login");

    const employer = await prisma.employerProfile.findUnique({
        where: { userId: session.user.id },
    });
    if (!employer?.companyId) return [];

    return prisma.job.findMany({
        where: { companyId: employer.companyId },
        include: { _count: { select: { applications: true } } },
        orderBy: { createdAt: "desc" },
    });
}

export async function deleteJob(jobId: string) {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") return { error: "Không có quyền" };
    await prisma.job.delete({ where: { id: jobId } });
    revalidatePath("/employer/jobs");
    return { success: true };
}

export async function updateJob(jobId: string, formData: FormData) {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") {
        return { error: "Không có quyền truy cập" };
    }

    // Verify job belongs to employer
    const job = await prisma.job.findUnique({
        where: { id: jobId },
        include: { company: { include: { employers: true } } }
    });

    if (!job) {
        return { error: "Không tìm thấy tin tuyển dụng" };
    }

    // Check if user is employer of this job's company
    const isEmployer = job.company.employers.some((e: any) => e.userId === session.user.id);
    if (!isEmployer) {
        return { error: "Bạn không có quyền sửa tin này" };
    }

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const requirements = formData.get("requirements") as string;
    const benefits = formData.get("benefits") as string;
    const province = formData.get("province") as string;
    const location = province; 
    const jobType = formData.get("jobType") as string;
    const salaryMin = parseInt(formData.get("salaryMin") as string) || null;
    const salaryMax = parseInt(formData.get("salaryMax") as string) || null;
    const skillsRaw = formData.get("skills") as string;
    const skills = skillsRaw ? skillsRaw.split(",").map((s) => s.trim()).filter(Boolean) : [];
    const industryId = formData.get("industry") as string;
    const ageMin = parseInt(formData.get("ageMin") as string) || null;
    const ageMax = parseInt(formData.get("ageMax") as string) || null;
    const experienceYears = parseInt(formData.get("experienceYears") as string) || null;

    await (prisma.job as any).update({
        where: { id: jobId },
        data: {
            title,
            description,
            requirements,
            benefits,
            location,
            province,
            jobType: jobType as "FULL_TIME" | "PART_TIME" | "REMOTE" | "INTERNSHIP" | "CONTRACT",
            salaryMin,
            salaryMax,
            skills,
            industryId,
            ageMin,
            ageMax,
            experienceYears,
        },
    });

    revalidatePath("/employer/jobs");
    revalidatePath("/jobs");
    return { success: true };
}

export async function getAllJobsForAdmin() {
    return prisma.job.findMany({
        include: { company: { select: { name: true } }, _count: { select: { applications: true } } },
        orderBy: { createdAt: "desc" },
    });
}

export async function getIndustries() {
    return prisma.industry.findMany({
        orderBy: { name: "asc" },
    });
}

export async function getAllIndustries() {
    return prisma.industry.findMany({
        orderBy: { name: "asc" },
    });
}

export async function getJobLocations() {
    const jobs = await prisma.job.findMany({
        where: { status: "ACTIVE" },
        select: { location: true },
        distinct: ["location"],
    });
    return jobs.map((j: any) => j.location).filter(Boolean).sort();
}

export async function getJobFilters() {
    const [industries, locations] = await Promise.all([
        prisma.industry.findMany({ orderBy: { name: "asc" } }),
        prisma.job.findMany({
            where: { status: "ACTIVE" },
            select: { location: true },
            distinct: ["location"],
        }).then((jobs: any) => jobs.map((j: any) => j.location).filter(Boolean).sort())
    ]);

    return {
        industries,
        locations,
        jobTypes: ["FULL_TIME", "PART_TIME", "REMOTE", "INTERNSHIP", "CONTRACT"],
        experienceLevels: ["Entry", "Junior", "Mid-Level", "Senior", "Manager"],
        salaryRanges: [
            { value: "0-5000000", label: "Dưới 5 triệu" },
            { value: "5000000-10000000", label: "5 - 10 triệu" },
            { value: "10000000-20000000", label: "10 - 20 triệu" },
            { value: "20000000-30000000", label: "20 - 30 triệu" },
            { value: "30000000-50000000", label: "30 - 50 triệu" },
            { value: "50000000-999999999", label: "Trên 50 triệu" },
        ]
    };
}

export async function saveJob(jobId: string) {
    const session = await auth();
    if (!session?.user) {
        return { error: "Vui lòng đăng nhập để lưu việc làm" };
    }

    try {
        await prisma.savedJob.create({
            data: {
                userId: session.user.id,
                jobId
            }
        });
        revalidatePath("/jobs");
        return { success: true };
    } catch (e) {
        return { error: "Việc làm này đã được lưu trước đó" };
    }
}

export async function unsaveJob(jobId: string) {
    const session = await auth();
    if (!session?.user) {
        return { error: "Vui lòng đăng nhập" };
    }

    await prisma.savedJob.deleteMany({
        where: {
            userId: session.user.id,
            jobId
        }
    });
    revalidatePath("/jobs");
    return { success: true };
}

export async function getSavedJobs() {
    const session = await auth();
    if (!session?.user) return [];

    return prisma.savedJob.findMany({
        where: { userId: session.user.id },
        include: {
            job: {
                include: {
                    company: { select: { name: true, logo: true, slug: true, verified: true } }
                }
            }
        },
        orderBy: { createdAt: "desc" }
    });
}

export async function getSavedJobIds(): Promise<string[]> {
    const session = await auth();
    if (!session?.user) return [];

    const saved = await prisma.savedJob.findMany({
        where: { userId: session.user.id },
        select: { jobId: true }
    });

    return saved.map((s: any) => s.jobId);
}

export async function isJobSaved(jobId: string): Promise<boolean> {
    const session = await auth();
    if (!session?.user) return false;

    const saved = await prisma.savedJob.findUnique({
        where: {
            userId_jobId: {
                userId: session.user.id,
                jobId
            }
        }
    });
    return !!saved;
}
