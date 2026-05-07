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
// Hardcoded common industry aliases for instant and 100% reliable mapping
const COMMON_ALIASES: Record<string, string[]> = {
    "it": ["Công nghệ thông tin", "Kỹ sư phần mềm", "Lập trình viên", "IT", "Phần mềm", "Developer"],
    "cntt": ["Công nghệ thông tin", "Kỹ sư phần mềm", "Lập trình viên"],
    "hr": ["Nhân sự", "Human Resources", "Tuyển dụng"],
    "nhân sự": ["HR", "Tuyển dụng", "Human Resources"],
    "pr": ["Marketing", "Báo chí / Truyền thông", "Public Relations", "Truyền thông"],
    "marketing": ["Kinh doanh / Marketing", "PR", "Truyền thông"],
    "kế toán": ["Kế toán / Kiểm toán", "Kế toán", "Kiểm toán"],
    "kiểm toán": ["Kế toán / Kiểm toán", "Kế toán", "Kiểm toán", "Auditing"],
    "sale": ["Kinh doanh / Marketing", "Kinh doanh", "Bán hàng", "Sales"],
    "sales": ["Kinh doanh / Marketing", "Kinh doanh", "Bán hàng", "Sale"],
    "ngân hàng": ["Tài chính / Ngân hàng", "Tài chính", "Bank"],
    "tài chính": ["Tài chính / Ngân hàng", "Ngân hàng", "Finance"],
    "du lịch": ["Du lịch / Khách sạn", "Khách sạn", "Tour"],
    "khách sạn": ["Du lịch / Khách sạn", "Du lịch", "Hotel"],
    "nhà hàng": ["F&B / Nhà hàng", "Khách sạn", "F&B", "Restaurant"],
    "f&b": ["F&B / Nhà hàng", "Nhà hàng", "Food & Beverage"],
    "logistics": ["Vận tải / Logistics", "Vận tải", "Supply Chain"],
    "vận tải": ["Vận tải / Logistics", "Logistics", "Giao nhận"],
    "y tế": ["Y tế / Dược phẩm", "Dược phẩm", "Bác sĩ", "Y tá"],
    "dược": ["Y tế / Dược phẩm", "Y tế", "Dược phẩm", "Pharmacist"],
    "giáo dục": ["Giáo dục / Đào tạo", "Đào tạo", "Giáo viên", "Education"],
    "thiết kế": ["Thiết kế", "Design", "UI/UX", "Graphic"],
    "luật": ["Luật", "Legal", "Luật sư"],
    "bds": ["Bất động sản", "Real Estate", "Nhà đất"],
    "bđs": ["Bất động sản", "Real Estate", "Nhà đất"],
    "bất động sản": ["Real Estate", "BĐS", "Nhà đất"],
    "kỹ thuật": ["Kỹ thuật", "Engineering", "Kỹ sư"],
    "sản xuất": ["Sản xuất", "Manufacturing", "Nhà máy"]
};

async function expandQueryWithAI(query: string): Promise<string[]> {
    const cacheKey = query.toLowerCase().trim();
    
    // 1. Instant return for hardcoded common aliases
    if (COMMON_ALIASES[cacheKey]) {
        return COMMON_ALIASES[cacheKey];
    }
    
    // 2. Return from in-memory cache
    if (queryExpansionCache.has(cacheKey)) {
        return queryExpansionCache.get(cacheKey)!;
    }

    try {
        const prompt = `Bạn là hệ thống tìm kiếm việc làm. Người dùng tìm: "${query}"

Trả về TÊN VỊ TRÍ CÔNG VIỆC và TÊN NGÀNH NGHỀ **trực tiếp liên quan**.

QUY TẮC:
- CHỈ trả về tên vị trí công việc cụ thể hoặc tên ngành
- KHÔNG trả về tên công nghệ/kỹ năng đơn lẻ (React, Python, SQL, Docker...)
- KHÔNG trả về vị trí quá rộng hoặc không liên quan trực tiếp
- Tối đa 5 kết quả

Ví dụ:
- "frontend" → ["Frontend Developer", "UI Developer", "Lập trình giao diện"]
- "kế toán" → ["Kế toán tổng hợp", "Kế toán trưởng", "Kế toán / Kiểm toán"]
- "IT" → ["Công nghệ thông tin", "Developer", "Lập trình viên"]

CHỈ trả về JSON array. KHÔNG giải thích.`;

        const result = await generateText(prompt);
        const jsonMatch = result.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            const keywords: string[] = JSON.parse(jsonMatch[0]);
            const expanded = keywords.filter(k => typeof k === "string" && k.trim().length > 0).slice(0, 5);
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
    let expandedKeywords: string[] = [];
    
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
            // Filter by minimum similarity and require enough results
            const goodMatches = Array.isArray(aiJobs) 
                ? aiJobs.filter((job: any) => Number(job.similarity) >= 0.5)
                : [];
            
            if (goodMatches.length >= 3) {
                return {
                    jobs: goodMatches.map((job: any) => ({
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
                    total: goodMatches.length
                };
            }
            // Not enough good AI results, fall through to keyword search
        } catch (e) {
            console.error("AI search failed, falling back to text search:", e);
        }
    }
    // Text-based search fallback (runs when AI search fails or is disabled)
    if (params?.q) {
        const orConditions: Record<string, unknown>[] = [];

        // Direct query matches (highest relevance)
        const isShortQuery = params.q.trim().length <= 3;

        if (isShortQuery) {
            const qSpace = " " + params.q;
            const spaceQ = params.q + " ";
            const spaceQSpace = " " + params.q + " ";
            
            orConditions.push(
                // Pseudo-word-boundary for Title
                { title: { startsWith: spaceQ, mode: "insensitive" } },
                { title: { endsWith: qSpace, mode: "insensitive" } },
                { title: { contains: spaceQSpace, mode: "insensitive" } },
                { title: { equals: params.q, mode: "insensitive" } },
                { title: { startsWith: params.q, mode: "insensitive" } }, // e.g. "IT Support"
                // Skills exact match
                { skills: { hasSome: [params.q, params.q.toUpperCase()] } },
                // Pseudo-word-boundary for Company
                { company: { name: { startsWith: spaceQ, mode: "insensitive" } } },
                { company: { name: { endsWith: qSpace, mode: "insensitive" } } },
                { company: { name: { contains: spaceQSpace, mode: "insensitive" } } },
                { company: { name: { equals: params.q, mode: "insensitive" } } },
                { company: { name: { startsWith: params.q, mode: "insensitive" } } }, // e.g. "FPT Software"
                // Pseudo-word-boundary for Industry
                { industry: { name: { startsWith: spaceQ, mode: "insensitive" } } },
                { industry: { name: { endsWith: qSpace, mode: "insensitive" } } },
                { industry: { name: { contains: spaceQSpace, mode: "insensitive" } } },
                { industry: { name: { equals: params.q, mode: "insensitive" } } }
            );
        } else {
            orConditions.push(
                { title: { contains: params.q, mode: "insensitive" } },
                { skills: { hasSome: [params.q] } },
                { industry: { name: { contains: params.q, mode: "insensitive" } } },
                { company: { name: { contains: params.q, mode: "insensitive" } } },
            );
        }

        // Individual words of the query (only for long queries)
        if (!isShortQuery) {
            const queryWords = params.q.split(/\s+/).filter(w => w.length > 3);
            for (const word of queryWords) {
                if (word.toLowerCase() !== params.q.toLowerCase()) {
                    orConditions.push(
                        { title: { contains: word, mode: "insensitive" } },
                        { skills: { hasSome: [word] } },
                    );
                }
            }
        }

        // Helper for whole word matching
        const isWordMatch = (text: string, query: string) => {
            if (!text || !query) return false;
            const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`(^|[^a-zA-Z0-9À-ỹ])(${escapedQuery})([^a-zA-Z0-9À-ỹ]|$)`, 'i');
            return regex.test(text);
        };

        // Check if query matches a company name — if so, skip AI expansion to avoid noise
        const matchedCompanies = await prisma.company.findMany({
            where: { name: { contains: params.q, mode: "insensitive" } },
            select: { name: true },
            take: 10,
        });
        
        // Only consider it a company search if the query is an actual word in the company name (e.g. "FPT" in "FPT Software"), not just a random substring (e.g. "it" in "Deloitte")
        const isCompanySearch = matchedCompanies.some(c => isWordMatch(c.name, params.q));

        // AI expansion — only when NOT searching for a company name
        if (!isCompanySearch) {
            try {
                expandedKeywords = await expandQueryWithAI(params.q);
                console.log("AI Expansion returned:", expandedKeywords);
                for (const kw of expandedKeywords) {
                    if (kw.toLowerCase() === params.q.toLowerCase()) continue;
                    orConditions.push(
                        { title: { contains: kw, mode: "insensitive" } },
                        { industry: { name: { contains: kw, mode: "insensitive" } } },
                    );
                }
            } catch (e) {
                console.error("AI query expansion failed, using basic search:", e);
            }
        }

        where.OR = orConditions;
    }
    if (params?.loc) {
        where.location = { contains: params.loc, mode: "insensitive" };
    }
    if (params?.type) where.jobType = params.type;

    // Advanced search conditions
    const andConditions: Record<string, unknown>[] = [];

    if (params?.industryId) {
        andConditions.push({
            OR: [
                { industryId: params.industryId },
                { industry: { slug: params.industryId } }
            ]
        });
    }
    
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

    if (params?.q) {
        // When searching: fetch more results, score & rank them, then paginate
        const fetchLimit = Math.max(limit * 3, 50); // fetch extra to score
        const allJobs = await prisma.job.findMany({
            where,
            include: { company: { select: { name: true, logo: true, slug: true, verified: true } }, industry: { select: { name: true } } },
            take: fetchLimit,
        });

        const queryLower = params.q.toLowerCase();
        const expandedLower = expandedKeywords.map(k => k.toLowerCase());
        const allSearchTerms = [queryLower, ...expandedLower];

        const scoredJobs = allJobs.map((job: any) => {
            let score = 0;

            // Helper for whole word matching
            const isWordMatch = (text: string, query: string) => {
                if (!text || !query) return false;
                const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                // Word boundary that works with Vietnamese chars
                const regex = new RegExp(`(^|[^a-zA-Z0-9À-ỹ])(${escapedQuery})([^a-zA-Z0-9À-ỹ]|$)`, 'i');
                return regex.test(text);
            };

            const titleLower = job.title.toLowerCase();
            
            for (const term of allSearchTerms) {
                const isMainQuery = term === queryLower;
                const multiplier = isMainQuery ? 1 : 0.6; // AI expanded terms give less points

                // Title match
                if (titleLower === term) {
                    score += 300 * multiplier;
                } else if (titleLower.startsWith(term)) {
                    score += 150 * multiplier;
                } else if (isWordMatch(titleLower, term)) {
                    score += 100 * multiplier;
                } else if (titleLower.includes(term) && term.length > 3) {
                    score += 50 * multiplier; 
                }

                // Skills match
                for (const skill of job.skills) {
                    const skillLower = skill.toLowerCase();
                    if (skillLower === term) {
                        score += 100 * multiplier;
                    } else if (isWordMatch(skillLower, term)) {
                        score += 60 * multiplier;
                    } else if (skillLower.includes(term) && term.length > 3) {
                        score += 20 * multiplier;
                    }
                }

                // Company match (only for main query)
                if (isMainQuery) {
                    const companyLower = job.company.name.toLowerCase();
                    if (companyLower === term) {
                        score += 180;
                    } else if (isWordMatch(companyLower, term)) {
                        score += 120;
                    } else if (companyLower.includes(term) && term.length > 3) {
                        score += 40;
                    }
                }

                // Industry match
                if (job.industry?.name) {
                    const industryLower = job.industry.name.toLowerCase();
                    if (industryLower === term) {
                        score += 100 * multiplier;
                    } else if (isWordMatch(industryLower, term)) {
                        score += 60 * multiplier;
                    } else if (industryLower.includes(term) && term.length > 3) {
                        score += 20 * multiplier;
                    }
                }
            }

            // VIP bonus
            if (job.isVip) score += 10;

            return { ...job, _relevance: score };
        });

        // Filter out jobs that got 0 score (meaning they were false-positive substring matches from DB)
        const relevantJobs = scoredJobs.filter((job: any) => job._relevance > 0);

        // Sort by relevance, then by sort preference
        relevantJobs.sort((a: any, b: any) => {
            if (b._relevance !== a._relevance) return b._relevance - a._relevance;
            if (params?.sort === "salary_high") return (b.salaryMax || 0) - (a.salaryMax || 0);
            if (params?.sort === "salary_low") return (a.salaryMin || 0) - (b.salaryMin || 0);
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });

        // Remove internal score field and paginate
        const paginatedJobs = relevantJobs.slice(skip, skip + limit).map(({ _relevance, industry: _ind, ...rest }: any) => rest);
        const total = relevantJobs.length;

        return { jobs: paginatedJobs, total };
    }

    const [jobs, total] = await Promise.all([
        prisma.job.findMany({
            where,
            include: { company: { select: { name: true, logo: true, slug: true, verified: true } } },
            orderBy,
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
