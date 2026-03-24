"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function applyToJob(jobId: string, cvId?: string, resumeId?: string, coverLetter?: string) {
    const session = await auth();
    if (!session?.user || session.user.role !== "CANDIDATE") {
        return { error: "Bạn cần đăng nhập với tư cách Ứng viên" };
    }

    const existing = await prisma.application.findUnique({
        where: { jobId_candidateId: { jobId, candidateId: session.user.id } },
    });
    if (existing) return { error: "Bạn đã ứng tuyển vị trí này rồi" };

    const application = await (prisma.application as any).create({
        data: {
            jobId,
            candidateId: session.user.id,
            cvId: cvId || null,
            resumeId: resumeId || null,
            coverLetter,
            status: "PENDING",
        },
        include: { job: { select: { postedById: true, title: true } } },
    });

    // Create notification for employer
    try {
        await prisma.notification.create({
            data: {
                userId: (application as any).job.postedById!,
                type: "NEW_APPLICATION",
                title: "Có ứng viên mới",
                message: `${session.user.name} vừa ứng tuyển vào "${(application as any).job.title}"`,
                link: `/employer/jobs`,
            },
        });
    } catch (_) {
        // ignore notification error
    }

    revalidatePath("/candidate/applications");
    return { success: true };
}

export async function getMyApplications() {
    const session = await auth();
    if (!session?.user) redirect("/login");

    return prisma.application.findMany({
        where: { candidateId: session.user.id },
        include: {
            job: {
                include: { company: { select: { name: true, logo: true } } },
            },
        },
        orderBy: { createdAt: "desc" },
    });
}

export async function updateApplicationStatus(
    applicationId: string,
    status: string,
    notes?: string
) {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") {
        return { error: "Không có quyền" };
    }

    const application = await prisma.application.update({
        where: { id: applicationId },
        data: { status: status as "REVIEWING" | "INTERVIEW" | "ACCEPTED" | "REJECTED", notes },
        include: { job: { select: { title: true } } },
    });

    // Notify candidate
    await prisma.notification.create({
        data: {
            userId: application.candidateId,
            type: "APPLICATION_STATUS",
            title: "Cập nhật đơn ứng tuyển",
            message: `Đơn ứng tuyển "${application.job.title}" của bạn đã được cập nhật thành: ${status}`,
            link: "/candidate/applications",
        },
    });

    revalidatePath("/employer/jobs");
    return { success: true };
}

export async function getJobApplicants(jobId: string) {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") redirect("/login");

    return prisma.application.findMany({
        where: { jobId },
        include: {
            candidate: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    image: true,
                    candidateProfile: true,
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });
}

export async function getMyNotifications() {
    const session = await auth();
    if (!session?.user) return [];

    // For EMPLOYER role, filter notifications to only show their company's job applications
    if (session.user.role === "EMPLOYER") {
        const employer = await prisma.employerProfile.findUnique({
            where: { userId: session.user.id },
            select: { companyId: true }
        });

        if (!employer?.companyId) return [];

        // Get job titles belonging to this company
        const companyJobs = await prisma.job.findMany({
            where: { companyId: employer.companyId },
            select: { title: true }
        });

        const companyJobTitles = companyJobs.map(j => j.title);

        if (companyJobTitles.length === 0) return [];

        // Get all notifications for this user
        const allNotifications = await prisma.notification.findMany({
            where: { userId: session.user.id },
            orderBy: { createdAt: "desc" },
            take: 50,
        });

        // Filter to only include notifications related to company's jobs
        const filteredNotifications = allNotifications.filter(notif => {
            if (notif.type === "SYSTEM") return true;
            if (notif.type === "NEW_APPLICATION") {
                return companyJobTitles.some(title => notif.message.includes(title));
            }
            if (notif.type === "JOB_APPROVED" || notif.type === "JOB_REJECTED") {
                return true;
            }
            return false;
        });

        return filteredNotifications;
    }

    return prisma.notification.findMany({
        where: { userId: session.user.id },
        orderBy: { createdAt: "desc" },
        take: 20,
    });
}

export async function markNotificationRead(id: string) {
    await prisma.notification.update({ where: { id }, data: { isRead: true } });
}
