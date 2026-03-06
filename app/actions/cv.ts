"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

/**
 * Lấy danh sách các mẫu CV có sẵn
 */
export async function getCVTemplates() {
    try {
        const templates = await prisma.template.findMany({
            where: { isActive: true },
        });
        return { success: true, templates };
    } catch (error) {
        console.error("Error fetching templates:", error);
        return { error: "Không thể lấy danh sách mẫu CV" };
    }
}

/**
 * Lưu CV của người dùng
 */
export async function saveUserCV(data: {
    templateId: string;
    title: string;
    content: any;
    cvId?: string;
}) {
    const session = await auth();
    if (!session?.user) {
        return { error: "Vui lòng đăng nhập" };
    }

    try {
        if (data.cvId) {
            const cv = await prisma.cV.update({
                where: { id: data.cvId, userId: session.user.id },
                data: {
                    templateId: data.templateId,
                    title: data.title,
                    content: data.content,
                },
            });
            revalidatePath("/candidate/cv-builder");
            return { success: true, cv };
        } else {
            const cv = await prisma.cV.create({
                data: {
                    userId: session.user.id,
                    templateId: data.templateId,
                    title: data.title,
                    content: data.content,
                },
            });
            revalidatePath("/candidate/cv-builder");
            return { success: true, cv };
        }
    } catch (error) {
        console.error("Error saving CV:", error);
        return { error: "Lưu CV thất bại" };
    }
}

/**
 * Lấy danh sách CV của người dùng hiện tại
 */
export async function getUserCVs() {
    const session = await auth();
    if (!session?.user) {
        return { error: "Vui lòng đăng nhập" };
    }

    try {
        const cvs = await prisma.cV.findMany({
            where: { userId: session.user.id },
            include: { template: true },
            orderBy: { updatedAt: "desc" },
        });
        return { success: true, cvs };
    } catch (error) {
        console.error("Error fetching user CVs:", error);
        return { error: "Không thể lấy danh sách CV của bạn" };
    }
}
