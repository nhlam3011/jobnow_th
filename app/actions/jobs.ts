"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { semanticJobSearch } from "@/lib/ai";

function slugify(text: string) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim() + "-" + Date.now();
}

export async function getJobs(params?: {
    q?: string;
    loc?: string;
    type?: string;
    status?: string;
    industryId?: string;
    salary?: string;
    useAI?: boolean;
}) {
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
                return aiJobs.map((job: any) => ({
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
                    company: {
                        name: job.companyName,
                        logo: job.companyLogo,
                        slug: job.companySlug,
                        verified: false,
                    },
                    similarity: job.similarity,
                }));
            }
        } catch (e) {
            console.error("AI search failed, falling back to text search:", e);
        }
    }

    if (params?.q && !params.useAI) {
        where.OR = [
            { title: { contains: params.q, mode: "insensitive" } },
            { description: { contains: params.q, mode: "insensitive" } },
            { skills: { hasSome: [params.q] } },
        ];
    }
    if (params?.loc) {
        where.location = { contains: params.loc, mode: "insensitive" };
    }
    if (params?.type) where.jobType = params.type;
    if (params?.industryId) where.industryId = params.industryId;

    // Salary range filter
    if (params?.salary) {
        const [minSalary, maxSalary] = params.salary.split("-").map(Number);
        where.AND = [
            { salaryMin: { gte: minSalary } },
            { OR: [{ salaryMax: { lte: maxSalary } }, { salaryMax: { gte: minSalary } }] }
        ];
    }

    return prisma.job.findMany({
        where,
        include: { company: { select: { name: true, logo: true, slug: true, verified: true } } },
        orderBy: params?.q ? undefined : { createdAt: "desc" },
        take: 50,
    });
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
    const location = formData.get("location") as string;
    const jobType = formData.get("jobType") as string;
    const salaryMin = parseInt(formData.get("salaryMin") as string) || null;
    const salaryMax = parseInt(formData.get("salaryMax") as string) || null;
    const skillsRaw = formData.get("skills") as string;
    const skills = skillsRaw ? skillsRaw.split(",").map((s) => s.trim()).filter(Boolean) : [];
    const industrySlug = formData.get("industryId") as string;

    // Get employer's company
    const employer = await prisma.employerProfile.findUnique({
        where: { userId: session.user.id },
    });

    if (!employer?.companyId) {
        return { error: "Bạn chưa có thông tin công ty. Vui lòng cập nhật trang Công ty trước." };
    }

    // Get industry by slug if provided
    let industryId = null;
    if (industrySlug) {
        const industry = await prisma.industry.findUnique({
            where: { slug: industrySlug }
        });
        if (industry) {
            industryId = industry.id;
        }
    }

    const job = await prisma.job.create({
        data: {
            companyId: employer.companyId,
            postedById: session.user.id,
            title,
            slug: slugify(title),
            description,
            requirements,
            benefits,
            location,
            jobType: jobType as "FULL_TIME" | "PART_TIME" | "REMOTE" | "INTERNSHIP" | "CONTRACT",
            salaryMin,
            salaryMax,
            skills,
            status: "PENDING",
            industryId,
        },
    });

    try {
        const { generateJobEmbedding } = await import("@/lib/ai");
        await generateJobEmbedding(job.id);
    } catch (e) {
        console.error("Failed to generate embedding for new job:", e);
    }

    revalidatePath("/employer/jobs");
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
    const isEmployer = job.company.employers.some((e: Prisma.EmployerProfileGetPayload<{}>) => e.userId === session.user.id);
    if (!isEmployer) {
        return { error: "Bạn không có quyền sửa tin này" };
    }

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const requirements = formData.get("requirements") as string;
    const benefits = formData.get("benefits") as string;
    const location = formData.get("location") as string;
    const jobType = formData.get("jobType") as string;
    const salaryMin = parseInt(formData.get("salaryMin") as string) || null;
    const salaryMax = parseInt(formData.get("salaryMax") as string) || null;
    const skillsRaw = formData.get("skills") as string;
    const skills = skillsRaw ? skillsRaw.split(",").map((s) => s.trim()).filter(Boolean) : [];
    const industrySlug = formData.get("industryId") as string;

    // Get industry by slug if provided
    let industryId = null;
    if (industrySlug) {
        const industry = await prisma.industry.findUnique({
            where: { slug: industrySlug }
        });
        if (industry) {
            industryId = industry.id;
        }
    }

    await prisma.job.update({
        where: { id: jobId },
        data: {
            title,
            description,
            requirements,
            benefits,
            location,
            jobType: jobType as "FULL_TIME" | "PART_TIME" | "REMOTE" | "INTERNSHIP" | "CONTRACT",
            salaryMin,
            salaryMax,
            skills,
            industryId,
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
    return jobs.map(j => j.location).filter(Boolean).sort();
}

export async function getJobFilters() {
    const [industries, locations] = await Promise.all([
        prisma.industry.findMany({ orderBy: { name: "asc" } }),
        prisma.job.findMany({
            where: { status: "ACTIVE" },
            select: { location: true },
            distinct: ["location"],
        }).then(jobs => jobs.map(j => j.location).filter(Boolean).sort())
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

    return saved.map(s => s.jobId);
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
