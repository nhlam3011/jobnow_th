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
        include: { company: true }
    });

    if (!employerProfile?.company) {
        return NextResponse.json(null);
    }

    const company = employerProfile.company;
    return NextResponse.json({
        name: company.name,
        logo: company.logo,
        website: company.website,
        description: company.description,
        industry: company.industry,
        size: company.size,
        location: company.location,
        position: employerProfile.position
    });
}
