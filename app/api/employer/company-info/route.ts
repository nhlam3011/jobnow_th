import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const session = await auth();

    if (!session?.user || session.user.role !== "EMPLOYER") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const employerProfile = await prisma.employerProfile.findUnique({
        where: { userId: session.user.id },
        include: {
            company: {
                select: {
                    id: true,
                    name: true,
                    logo: true,
                    slug: true,
                    verified: true
                }
            }
        }
    });

    if (!employerProfile?.company) {
        return NextResponse.json(null);
    }

    return NextResponse.json(employerProfile.company);
}
