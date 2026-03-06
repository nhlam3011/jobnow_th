import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PATCH /api/admin/users/[id] - Update user role
export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const { role } = await request.json();

        const user = await prisma.user.update({
            where: { id },
            data: { role },
        });

        return NextResponse.json({ user });
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
    }
}

// DELETE /api/admin/users/[id] - Delete user
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        // Delete related records first
        await prisma.application.deleteMany({
            where: { candidateId: id },
        });

        await prisma.savedJob.deleteMany({
            where: { userId: id },
        });

        await prisma.notification.deleteMany({
            where: { userId: id },
        });

        await prisma.resume.deleteMany({
            where: { userId: id },
        });

        await prisma.candidateProfile.deleteMany({
            where: { userId: id },
        });

        await prisma.employerProfile.deleteMany({
            where: { userId: id },
        });

        await prisma.user.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Đã xoá người dùng" });
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
    }
}
