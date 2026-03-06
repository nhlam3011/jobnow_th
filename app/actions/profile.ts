"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function getCandidateProfile() {
    const session = await auth();
    if (!session?.user) redirect("/login");

    return prisma.candidateProfile.findUnique({
        where: { userId: session.user.id },
    });
}

export async function updateCandidateProfile(formData: FormData) {
    const session = await auth();
    if (!session?.user) return { error: "Chưa đăng nhập" };

    const skillsRaw = formData.get("skills") as string;
    const skills = skillsRaw ? skillsRaw.split(",").map((s) => s.trim()).filter(Boolean) : [];

    await prisma.candidateProfile.upsert({
        where: { userId: session.user.id },
        update: {
            phone: formData.get("phone") as string,
            location: formData.get("location") as string,
            bio: formData.get("bio") as string,
            yearsExp: parseInt(formData.get("yearsExp") as string) || 0,
            desiredSalary: parseInt(formData.get("desiredSalary") as string) || null,
            desiredJobType: formData.get("desiredJobType") as string,
            skills,
        },
        create: {
            userId: session.user.id,
            phone: formData.get("phone") as string,
            location: formData.get("location") as string,
            bio: formData.get("bio") as string,
            yearsExp: parseInt(formData.get("yearsExp") as string) || 0,
            desiredSalary: parseInt(formData.get("desiredSalary") as string) || null,
            desiredJobType: formData.get("desiredJobType") as string,
            skills,
        },
    });

    // Update user name
    const name = formData.get("name") as string;
    if (name) {
        await prisma.user.update({ where: { id: session.user.id }, data: { name } });
    }

    try {
        const { generateProfileEmbedding } = await import("@/lib/ai");
        await generateProfileEmbedding(session.user.id);
    } catch (e) {
        console.error("Failed to generate profile embedding:", e);
    }

    revalidatePath("/candidate/profile");
    return { success: true };
}

export async function getEmployerProfile() {
    const session = await auth();
    if (!session?.user) redirect("/login");

    return prisma.employerProfile.findUnique({
        where: { userId: session.user.id },
        include: { company: true },
    });
}

export async function getEmployerCompany() {
    const session = await auth();
    if (!session?.user) return null;

    const employer = await prisma.employerProfile.findUnique({
        where: { userId: session.user.id },
        include: { company: { select: { id: true, name: true, logo: true, slug: true, verified: true } } },
    });

    return employer?.company || null;
}

export async function upsertCompany(formData: FormData) {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") return { error: "Không có quyền" };

    const name = formData.get("name") as string;
    const slug = name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const position = formData.get("position") as string;

    const employer = await prisma.employerProfile.findUnique({
        where: { userId: session.user.id },
    });

    let companyId = employer?.companyId;

    if (companyId) {
        await prisma.company.update({
            where: { id: companyId },
            data: {
                name,
                website: formData.get("website") as string,
                description: formData.get("description") as string,
                industry: formData.get("industry") as string,
                size: formData.get("size") as string,
                location: formData.get("location") as string,
            },
        });
        // Update position
        await prisma.employerProfile.update({
            where: { userId: session.user.id },
            data: { position },
        });
    } else {
        const company = await prisma.company.create({
            data: {
                name,
                slug: slug + "-" + Date.now(),
                website: formData.get("website") as string,
                description: formData.get("description") as string,
                industry: formData.get("industry") as string,
                size: formData.get("size") as string,
                location: formData.get("location") as string,
            },
        });
        companyId = company.id;
        await prisma.employerProfile.update({
            where: { userId: session.user.id },
            data: { companyId, position },
        });
    }

    revalidatePath("/employer/company");
    return { success: true };
}

export async function getDashboardStats() {
    const session = await auth();
    if (!session?.user) redirect("/login");

    if (session.user.role === "CANDIDATE") {
        const [applications, profile, jobs] = await Promise.all([
            prisma.application.count({ where: { candidateId: session.user.id } }),
            prisma.candidateProfile.findUnique({ where: { userId: session.user.id } }),
            prisma.job.count({ where: { status: "ACTIVE" } }),
        ]);
        return { applications, profileComplete: !!profile?.bio, totalJobs: jobs };
    }

    if (session.user.role === "EMPLOYER") {
        const employer = await prisma.employerProfile.findUnique({ where: { userId: session.user.id } });
        if (!employer?.companyId) return { jobs: 0, applicants: 0, activeJobs: 0 };
        const [jobs, activeJobs, applicants] = await Promise.all([
            prisma.job.count({ where: { companyId: employer.companyId } }),
            prisma.job.count({ where: { companyId: employer.companyId, status: "ACTIVE" } }),
            prisma.application.count({
                where: { job: { companyId: employer.companyId } },
            }),
        ]);
        return { jobs, activeJobs, applicants };
    }

    if (session.user.role === "ADMIN") {
        const [users, jobs, applications, pendingJobs] = await Promise.all([
            prisma.user.count(),
            prisma.job.count(),
            prisma.application.count(),
            prisma.job.count({ where: { status: "PENDING" } }),
        ]);
        return { users, jobs, applications, pendingJobs };
    }

    return {};
}
