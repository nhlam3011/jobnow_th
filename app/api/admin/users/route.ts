import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/admin/users - List all users
export async function GET() {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                createdAt: true,
            },
            orderBy: { createdAt: "desc" },
            take: 100,
        });

        return NextResponse.json({ users });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
    }
}
