"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export async function getAccountInfo() {
    const session = await auth();
    if (!session?.user) return null;

    return prisma.user.findUnique({
        where: { id: session.user.id },
        select: {
            id: true,
            name: true,
            email: true,
            image: true,
            role: true,
            createdAt: true,
        },
    });
}

export async function updateAccountInfo(formData: FormData) {
    const session = await auth();
    if (!session?.user) return { error: "Chưa đăng nhập" };

    const name = formData.get("name") as string;
    const image = formData.get("image") as string;

    await prisma.user.update({
        where: { id: session.user.id },
        data: {
            ...(name && { name }),
            ...(image !== null && { image: image || null }),
        },
    });

    revalidatePath("/");
    return { success: true };
}

export async function changePassword(formData: FormData) {
    const session = await auth();
    if (!session?.user) return { error: "Chưa đăng nhập" };

    const currentPassword = formData.get("currentPassword") as string;
    const newPassword = formData.get("newPassword") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!newPassword || newPassword.length < 6) {
        return { error: "Mật khẩu mới phải có ít nhất 6 ký tự" };
    }

    if (newPassword !== confirmPassword) {
        return { error: "Mật khẩu xác nhận không khớp" };
    }

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { password: true },
    });

    if (!user) return { error: "Không tìm thấy tài khoản" };

    // If user has password (credentials login), verify current password
    if (user.password) {
        if (!currentPassword) return { error: "Vui lòng nhập mật khẩu hiện tại" };
        const isValid = await bcrypt.compare(currentPassword, user.password);
        if (!isValid) return { error: "Mật khẩu hiện tại không đúng" };
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);
    await prisma.user.update({
        where: { id: session.user.id },
        data: { password: hashedPassword },
    });

    return { success: true };
}

// Notification actions
export async function getNotifications(limit = 50) {
    const session = await auth();
    if (!session?.user) return [];

    return prisma.notification.findMany({
        where: { userId: session.user.id },
        orderBy: { createdAt: "desc" },
        take: limit,
    });
}

export async function getUnreadNotificationCount() {
    const session = await auth();
    if (!session?.user) return 0;

    return prisma.notification.count({
        where: { userId: session.user.id, isRead: false },
    });
}

export async function markNotificationAsRead(id: string) {
    const session = await auth();
    if (!session?.user) return { error: "Chưa đăng nhập" };

    await prisma.notification.update({
        where: { id, userId: session.user.id },
        data: { isRead: true },
    });

    return { success: true };
}

export async function markAllNotificationsAsRead() {
    const session = await auth();
    if (!session?.user) return { error: "Chưa đăng nhập" };

    await prisma.notification.updateMany({
        where: { userId: session.user.id, isRead: false },
        data: { isRead: true },
    });

    revalidatePath("/");
    return { success: true };
}

export async function createNotification(
    userId: string,
    type: string,
    title: string,
    message: string,
    link?: string
) {
    return prisma.notification.create({
        data: { userId, type, title, message, link },
    });
}
