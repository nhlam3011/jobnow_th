import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// PATCH /api/admin/companies/[id] - Verify/unverify company
export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const { verified } = await request.json();

        const company = await prisma.company.update({
            where: { id },
            data: { verified },
        });

        return NextResponse.json({ company });
    } catch (error) {
        console.error("Error updating company:", error);
        return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
    }
}
