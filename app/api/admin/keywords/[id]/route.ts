import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PATCH /api/admin/keywords/[id] - Toggle keyword status
export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const { isActive } = await request.json();

        const keyword = await prisma.searchKeyword.update({
            where: { id },
            data: { isActive },
        });

        return NextResponse.json({ keyword });
    } catch (error) {
        console.error("Error updating keyword:", error);
        return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
    }
}

// DELETE /api/admin/keywords/[id] - Delete keyword
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        await prisma.searchKeyword.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Đã xoá từ khoá" });
    } catch (error) {
        console.error("Error deleting keyword:", error);
        return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
    }
}
