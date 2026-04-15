import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    // Get employer's company
    const employer = await prisma.employerProfile.findUnique({
        where: { userId: session.user.id },
    });

    if (!employer?.companyId) {
        return NextResponse.json({ error: "No company" }, { status: 404 });
    }

    // Get job
    const job = await prisma.job.findFirst({
        where: {
            id,
            companyId: employer.companyId,
        },
        include: {
            industry: true,
        },
    });

    if (!job) {
        return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json({
        id: job.id,
        title: job.title,
        description: job.description,
        requirements: job.requirements,
        benefits: job.benefits,
        location: job.location,
        jobType: job.jobType,
        salaryMin: job.salaryMin,
        salaryMax: job.salaryMax,
        skills: job.skills,
        industryId: job.industryId,
        industry: job.industry,
        experienceYears: (job as any).experienceYears,
        ageMin: (job as any).ageMin,
        ageMax: (job as any).ageMax,
    });
}
