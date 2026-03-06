"use server";

import { prisma } from "@/lib/prisma";
import { getEmbedding, createEmbeddingTextForJob, createEmbeddingTextForProfile } from "@/lib/gemini";
import { auth } from "@/auth";

/**
 * Tạo vector embedding cho một công việc cụ thể.
 * Dữ liệu text được tổng hợp từ Tiêu đề, Mô tả, Yêu cầu và Kỹ năng.
 */
export async function generateJobEmbedding(jobId: string) {
    const job = await prisma.job.findUnique({
        where: { id: jobId },
        include: { company: true, industry: true },
    });

    if (!job) {
        throw new Error("Job not found");
    }

    const text = createEmbeddingTextForJob({
        title: job.title,
        description: job.description,
        requirements: job.requirements,
        benefits: job.benefits,
        skills: job.skills,
        location: job.location,
        jobType: job.jobType,
    });

    const embedding = await getEmbedding(text);
    const embeddingString = `[${embedding.join(',')}]`;

    // Lưu vector vào database sử dụng pgvector extension
    await prisma.$executeRaw`
        UPDATE "Job"
        SET embedding = ${embeddingString}::vector
        WHERE id = ${jobId}
    `;

    return { success: true };
}

/**
 * Tạo vector embedding cho hồ sơ ứng viên.
 * Giúp thực hiện tìm kiếm ngữ nghĩa (semantic search) và gợi ý việc làm.
 */
export async function generateProfileEmbedding(userId: string) {
    const profile = await prisma.candidateProfile.findUnique({
        where: { userId },
    });

    if (!profile) {
        throw new Error("Profile not found");
    }

    const text = createEmbeddingTextForProfile({
        bio: profile.bio,
        skills: profile.skills,
        desiredJobType: profile.desiredJobType,
        desiredSalary: profile.desiredSalary,
        yearsExp: profile.yearsExp,
        experience: profile.experience,
        education: profile.education,
    });

    const embedding = await getEmbedding(text);
    const embeddingString = `[${embedding.join(',')}]`;

    await prisma.$executeRaw`
        UPDATE "CandidateProfile"
        SET embedding = ${embeddingString}::vector
        WHERE "userId" = ${userId}
    `;

    return { success: true };
}

/**
 * Tìm kiếm việc làm bằng ngôn ngữ tự nhiên (Semantic Search).
 * Sử dụng toán tử <=> (cosine distance) của pgvector để tìm các vector gần nhất.
 */
export async function semanticJobSearch(query: string, limit = 20) {
    const embedding = await getEmbedding(query);
    const embeddingString = `[${embedding.join(',')}]`;

    const jobs = await prisma.$queryRaw`
        SELECT 
            j.*,
            c.name as "companyName",
            c.logo as "companyLogo",
            c.slug as "companySlug",
            1 - (j.embedding <=> ${embeddingString}::vector) as similarity
        FROM "Job" j
        JOIN "Company" c ON j."companyId" = c.id
        WHERE j.status = 'ACTIVE'
            AND j.embedding IS NOT NULL
        ORDER BY j.embedding <=> ${embeddingString}::vector
        LIMIT ${limit}
    `;

    return jobs;
}

/**
 * Lấy danh sách việc làm gợi ý dựa trên hồ sơ AI của người dùng.
 * Tính toán độ tương đồng giữa vector ứng viên và vector các công việc.
 */
export async function getRecommendedJobs(userId: string, limit = 10) {
    const profile = await prisma.candidateProfile.findUnique({
        where: { userId },
    });

    if (!profile) {
        return [];
    }

    // Kiểm tra xem ứng viên đã có vector embedding chưa
    const hasEmbedding = await prisma.$queryRaw<Array<{ exists: boolean }>>`
        SELECT EXISTS(
            SELECT 1 FROM "CandidateProfile" 
            WHERE "userId" = ${userId} 
            AND embedding IS NOT NULL
        ) as exists
    `;

    if (!hasEmbedding[0]?.exists) {
        await generateProfileEmbedding(userId);
    }

    // Thực hiện truy vấn vector để tìm top các công việc phù hợp nhất
    const jobs = await prisma.$queryRaw`
        SELECT 
            j.*,
            c.name as "companyName",
            c.logo as "companyLogo",
            c.slug as "companySlug",
            1 - (j.embedding <=> (SELECT embedding FROM "CandidateProfile" WHERE "userId" = ${userId})::vector) as similarity
        FROM "Job" j
        JOIN "Company" c ON j."companyId" = c.id
        WHERE j.status = 'ACTIVE'
            AND j.embedding IS NOT NULL
            AND j."companyId" != COALESCE((SELECT "companyId" FROM "EmployerProfile" WHERE "userId" = ${userId}), '')
        ORDER BY j.embedding <=> (SELECT embedding FROM "CandidateProfile" WHERE "userId" = ${userId})::vector
        LIMIT ${limit}
    `;

    return jobs;
}

/**
 * Chạy batch để tạo embedding cho tất cả công việc chưa có (phục vụ initialization).
 */
export async function generateEmbeddingForAllJobs(batchSize = 10) {
    const jobs = await prisma.job.findMany({
        where: {
            status: "ACTIVE",
        },
        take: batchSize,
    });

    let processed = 0;
    for (const job of jobs) {
        try {
            await generateJobEmbedding(job.id);
            processed++;
        } catch (e) {
            console.error(`Failed to generate embedding for job ${job.id}:`, e);
        }
    }

    return { processed };
}
