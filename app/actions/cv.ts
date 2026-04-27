"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "path";

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
 * Xóa CV của người dùng
 */
export async function deleteUserCV(cvId: string) {
    const session = await auth();
    if (!session?.user) {
        return { error: "Vui lòng đăng nhập" };
    }

    try {
        await prisma.cV.delete({
            where: { id: cvId, userId: session.user.id },
        });
        revalidatePath("/candidate/resume");
        revalidatePath("/candidate/cv-builder");
        return { success: true };
    } catch (error) {
        console.error("Error deleting CV:", error);
        return { error: "Xóa CV thất bại" };
    }
}

/**
 * Lấy danh sách CV và Resume của người dùng
 */
export async function getUserResumesAndCVs() {
    const session = await auth();
    if (!session?.user) {
        return { error: "Vui lòng đăng nhập" };
    }

    try {
        const [resumes, cvs] = await Promise.all([
            prisma.resume.findMany({
                where: { userId: session.user.id },
                orderBy: { createdAt: "desc" },
            }),
            prisma.cV.findMany({
                where: { userId: session.user.id },
                include: { template: true },
                orderBy: { updatedAt: "desc" },
            })
        ]);

        return { success: true, resumes, cvs };
    } catch (error) {
        console.error("Error fetching resumes and CVs:", error);
        return { error: "Không thể lấy danh sách" };
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


/**
 * Lấy chi tiết CV theo ID
 */
export async function getCVById(id: string) {
    const session = await auth();
    if (!session?.user) {
        return { error: "Vui lòng đăng nhập" };
    }

    try {
        const cv = await prisma.cV.findUnique({
            where: { id, userId: session.user.id },
            include: { template: true },
        });
        if (!cv) return { error: "Không tìm thấy CV" };
        return { success: true, cv };
    } catch (error) {
        console.error("Error fetching CV by ID:", error);
        return { error: "Không thể lấy thông tin CV" };
    }
}

// ============================================================
// ADMIN: CRUD Template
// ============================================================

/**
 * Lấy tất cả templates (admin - bao gồm inactive)
 */
export async function getAllTemplatesAdmin() {
    const session = await auth();
    if (!session?.user || (session.user as any).role !== "ADMIN") {
        return { error: "Không có quyền truy cập" };
    }

    try {
        const templates = await prisma.template.findMany({
            orderBy: { createdAt: "desc" },
            include: { _count: { select: { cvs: true } } },
        });
        return { success: true, templates };
    } catch (error) {
        console.error("Error fetching all templates:", error);
        return { error: "Lỗi khi tải danh sách mẫu CV" };
    }
}

/**
 * Lấy chi tiết template theo ID
 */
export async function getTemplateById(id: string) {
    try {
        const template = await prisma.template.findUnique({ where: { id } });
        if (!template) return { error: "Không tìm thấy template" };
        return { success: true, template };
    } catch (error) {
        console.error("Error fetching template:", error);
        return { error: "Lỗi khi tải template" };
    }
}

/**
 * Tạo template mới (admin)
 */
export async function createTemplate(data: {
    name: string;
    description?: string;
    category: string;
    thumbnailUrl?: string;
    layoutConfig: any;
    styleConfig: any;
}) {
    const session = await auth();
    if (!session?.user || (session.user as any).role !== "ADMIN") {
        return { error: "Không có quyền truy cập" };
    }

    try {
        const template = await prisma.template.create({ data });
        revalidatePath("/admin/cv-templates");
        return { success: true, template };
    } catch (error) {
        console.error("Error creating template:", error);
        return { error: "Lỗi khi tạo mẫu CV" };
    }
}

/**
 * Cập nhật template (admin)
 */
export async function updateTemplate(id: string, data: {
    name?: string;
    description?: string;
    category?: string;
    thumbnailUrl?: string;
    layoutConfig?: any;
    styleConfig?: any;
    isActive?: boolean;
}) {
    const session = await auth();
    if (!session?.user || (session.user as any).role !== "ADMIN") {
        return { error: "Không có quyền truy cập" };
    }

    try {
        const template = await prisma.template.update({ where: { id }, data });
        revalidatePath("/admin/cv-templates");
        return { success: true, template };
    } catch (error) {
        console.error("Error updating template:", error);
        return { error: "Lỗi khi cập nhật mẫu CV" };
    }
}

/**
 * Xoá template (admin)
 */
export async function deleteTemplate(id: string) {
    const session = await auth();
    if (!session?.user || (session.user as any).role !== "ADMIN") {
        return { error: "Không có quyền truy cập" };
    }

    try {
        // Kiểm tra có CV nào đang dùng template này không
        const cvCount = await prisma.cV.count({ where: { templateId: id } });
        if (cvCount > 0) {
            return { error: `Không thể xoá! Có ${cvCount} CV đang sử dụng mẫu này. Hãy ẩn (deactivate) thay vì xoá.` };
        }
        await prisma.template.delete({ where: { id } });
        revalidatePath("/admin/cv-templates");
        return { success: true };
    } catch (error) {
        console.error("Error deleting template:", error);
        return { error: "Lỗi khi xoá mẫu CV" };
    }
}

/**
 * Xóa Resume (file tải lên) của người dùng
 */
export async function deleteResume(resumeId: string) {
    const session = await auth();
    if (!session?.user) {
        return { error: "Vui lòng đăng nhập" };
    }

    try {
        const resume = await prisma.resume.findUnique({
            where: { id: resumeId, userId: session.user.id },
        });

        if (!resume) {
            return { error: "Không tìm thấy hồ sơ" };
        }

        // Delete from database
        await prisma.resume.delete({
            where: { id: resumeId },
        });

        // Check and clear CandidateProfile.resumeUrl if it matches the deleted resume
        const profile = await prisma.candidateProfile.findUnique({
            where: { userId: session.user.id },
        });

        if (profile?.resumeUrl === resume.fileUrl) {
            await prisma.candidateProfile.update({
                where: { userId: session.user.id },
                data: { resumeUrl: null },
            });
        }

        // Delete from filesystem
        if (resume.fileUrl.startsWith("/uploads/resumes/")) {
            const filePath = path.join(process.cwd(), "public", resume.fileUrl);
            try {
                await fs.unlink(filePath);
            } catch (err) {
                console.error("Error deleting file from disk:", err);
                // Even if file deletion fails, we've already deleted the DB record
            }
        }

        // If this was the active resume, we might want to clear CandidateProfile.resumeUrl
        // But for now, let's just revalidate
        revalidatePath("/candidate/resume");
        return { success: true };
    } catch (error) {
        console.error("Error deleting resume:", error);
        return { error: "Xóa hồ sơ thất bại" };
    }
}

