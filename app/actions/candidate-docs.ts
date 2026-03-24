"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function getCandidateDocuments() {
    const session = await auth();
    if (!session?.user || session.user.role !== "CANDIDATE") return { cvs: [], resumes: [] };

    const [cvs, resumes] = await Promise.all([
        prisma.cV.findMany({
            where: { userId: session.user.id },
            select: { id: true, title: true, updatedAt: true }
        }),
        prisma.resume.findMany({
            where: { userId: session.user.id },
            select: { id: true, fileName: true, createdAt: true }
        })
    ]);

    return { cvs, resumes };
}
