"use server";

import { semanticJobSearch, getRecommendedJobs, generateJobEmbedding, generateProfileEmbedding, generateEmbeddingForAllJobs } from "@/lib/ai";
import { auth } from "@/auth";

export async function searchJobsWithAI(query: string, limit = 20) {
    if (!query || query.trim().length === 0) {
        return { error: "Vui lòng nhập từ khóa tìm kiếm" };
    }

    try {
        const jobs = await semanticJobSearch(query, limit);
        return { success: true, jobs };
    } catch (error) {
        console.error("AI search error:", error);
        return { error: "Tìm kiếm thất bại. Vui lòng thử lại." };
    }
}

export async function getAIRecommendations(limit = 10) {
    const session = await auth();
    if (!session?.user) {
        return { error: "Vui lòng đăng nhập" };
    }

    try {
        const jobs = await getRecommendedJobs(session.user.id, limit);
        return { success: true, jobs };
    } catch (error) {
        console.error("AI recommendations error:", error);
        return { error: "Không thể lấy gợi ý. Vui lòng thử lại." };
    }
}

export async function updateJobEmbedding(jobId: string) {
    try {
        await generateJobEmbedding(jobId);
        return { success: true };
    } catch (error) {
        console.error("Update job embedding error:", error);
        return { error: "Cập nhật embedding thất bại" };
    }
}

export async function updateProfileEmbedding() {
    const session = await auth();
    if (!session?.user) {
        return { error: "Vui lòng đăng nhập" };
    }

    try {
        await generateProfileEmbedding(session.user.id);
        return { success: true };
    } catch (error) {
        console.error("Update profile embedding error:", error);
        return { error: "Cập nhật embedding thất bại" };
    }
}

export async function generateEmbeddingsForAllJobs() {
    try {
        const result = await generateEmbeddingForAllJobs(50);
        return { success: true, ...result };
    } catch (error) {
        console.error("Generate all embeddings error:", error);
        return { error: "Tạo embedding thất bại" };
    }
}
