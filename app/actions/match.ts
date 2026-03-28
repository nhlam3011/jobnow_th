"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function calculateMatchData(jobId: string) {
    const session = await auth();
    if (!session?.user) return { status: "UNAUTHENTICATED" };

    try {
        // 1. Check if profile exists
        const profile = await prisma.candidateProfile.findUnique({
            where: { userId: session.user.id },
            select: { id: true, skills: true, yearsExp: true, desiredSalary: true, location: true }
        });

        if (!profile) return { status: "PROFILE_INCOMPLETE" };

        // 2. Fetch job info
        const job = await prisma.job.findUnique({
            where: { id: jobId },
            select: { id: true, title: true, skills: true, salaryMin: true, salaryMax: true, experienceYears: true, location: true }
        });

        if (!job) return null;

        // 3. AI Similarity match (using queryRaw only for the math)
        // We use coalesce to handle null embeddings without breaking the whole query
        const similarityResult = await prisma.$queryRaw<any[]>`
            SELECT 
                (1 - (j.embedding <=> cp.embedding)) as similarity
            FROM "Job" j, "CandidateProfile" cp
            WHERE j.id = ${jobId} 
              AND cp."userId" = ${session.user.id}
              AND j.embedding IS NOT NULL
              AND cp.embedding IS NOT NULL
        `;

        const similarity = similarityResult[0]?.similarity || null;
        
        // If no embedding was found, we still want to show a match based on other factors
        const aiScore = similarity !== null ? Math.round(similarity * 100) : 0;
        const hasAI = similarity !== null;

        // 4. Calculate other factors manually in JS to avoid raw SQL complexities
        const jSkills = (job.skills || []) as string[];
        const cpSkills = (profile.skills || []) as string[];
        const commonSkills = jSkills.filter(s => cpSkills.some(ps => ps.toLowerCase() === s.toLowerCase()));
        const skillScore = jSkills.length > 0 ? (commonSkills.length / jSkills.length) * 100 : 100;

        let salaryScore = 100;
        if (profile.desiredSalary && (job.salaryMin || job.salaryMax)) {
            if (job.salaryMax && profile.desiredSalary > job.salaryMax) {
                salaryScore = Math.max(0, 100 - ((profile.desiredSalary - job.salaryMax) / job.salaryMax) * 100);
            }
        }

        const expScore = job.experienceYears != null 
            ? (profile.yearsExp >= job.experienceYears ? 100 : (profile.yearsExp / job.experienceYears) * 100) 
            : 100;

        const locationScore = (job.location?.toLowerCase() === profile.location?.toLowerCase()) ? 100 : 40;

        // Re-weight if no AI embedding
        const compositeScore = hasAI 
            ? Math.round((aiScore * 0.4) + (skillScore * 0.2) + (salaryScore * 0.2) + (expScore * 0.1) + (locationScore * 0.1))
            : Math.round((skillScore * 0.4) + (salaryScore * 0.3) + (expScore * 0.15) + (locationScore * 0.15));

        return {
            status: "SUCCESS",
            score: compositeScore,
            factors: [
                { label: "AI Match", value: aiScore },
                { label: "Kỹ năng", value: Math.round(skillScore) },
                { label: "Lương", value: Math.round(salaryScore) },
                { label: "Kinh nghiệm", value: Math.round(expScore) },
                { label: "Vị trí", value: Math.round(locationScore) },
            ]
        };
    } catch (e) {
        console.error("Match calculation error:", e);
        // Explicitly return a status that the UI can handle without crashing
        return { status: "SERVER_ERROR" };
    }
}
