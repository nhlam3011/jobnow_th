"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function applyToJob(jobId: string, coverLetter?: string) {
    const session = await auth();
    if (!session?.user || session.user.role !== "CANDIDATE") {
        return { error: "Bạn cần đăng nhập với tư cách Ứng viên" };
    }

    const existing = await prisma.application.findUnique({
        where: { jobId_candidateId: { jobId, candidateId: session.user.id } },
    });
    if (existing) return { error: "Bạn đã ứng tuyển vị trí này rồi" };

    const application = await prisma.application.create({
        data: {
            jobId,
            candidateId: session.user.id,
            coverLetter,
            status: "PENDING",
        },
        include: { job: { select: { postedById: true, title: true } } },
    });

    // Create notification for employer
    try {
        await prisma.notification.create({
            data: {
                userId: application.job.postedById!,
                type: "NEW_APPLICATION",
                title: "Có ứng viên mới",
                message: `${session.user.name} vừa ứng tuyển vào "${application.job.title}"`,
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

    return prisma.notification.findMany({
        where: { userId: session.user.id },
        orderBy: { createdAt: "desc" },
        take: 20,
    });
}

export async function markNotificationRead(id: string) {
    await prisma.notification.update({ where: { id }, data: { isRead: true } });
}
