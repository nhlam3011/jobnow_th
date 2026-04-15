import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/admin/employers - List all employers
export async function GET() {
    try {
        const employers = await prisma.employerProfile.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        name: true,
                        role: true,
                        createdAt: true,
                    },
                },
                company: {
                    select: {
                        id: true,
                        name: true,
                        verified: true,
                    },
                },
            },
            orderBy: { createdAt: "desc" },
            take: 100,
        });

        return NextResponse.json({ employers });
    } catch (error) {
        console.error("Error fetching employers:", error);
        return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
    }
}
