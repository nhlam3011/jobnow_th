import { GoogleGenerativeAI } from "@google/generative-ai";

const globalForGemini = globalThis as unknown as {
    genAI: GoogleGenerativeAI | undefined;
};

export const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

if (process.env.NODE_ENV !== "production") globalForGemini.genAI = genAI;

export const AI_CONFIG = {
    chatModel: process.env.GEMINI_CHAT_MODEL || "gemini-2.0-flash",
    embeddingModel: process.env.GEMINI_EMBEDDING_MODEL || "text-embedding-004",
} as const;

export type ChatModel =
    | "gemini-2.0-flash"
    | "gemini-2.0-flash-lite"
    | "gemini-1.5-pro"
    | "gemini-1.5-flash"
    | "gemini-1.5-flash-8b"
    | "gemini-pro-vision";

export type EmbeddingModel =
    | "text-embedding-004"
    | "gemini-embedding-001";

export function setChatModel(model: ChatModel) {
    (AI_CONFIG as any).chatModel = model;
}

export function setEmbeddingModel(model: EmbeddingModel) {
    (AI_CONFIG as any).embeddingModel = model;
}

export async function getEmbedding(text: string, model?: EmbeddingModel): Promise<number[]> {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not set");
    }

    const modelName = model || AI_CONFIG.embeddingModel;

    try {
        const geminiModel = genAI.getGenerativeModel({ model: modelName });
        const result = await geminiModel.embedContent(text);

        const embedding = result.embedding;
        if (!embedding.values || embedding.values.length === 0) {
            throw new Error("Failed to generate embedding: empty result");
        }

        return embedding.values;
    } catch (error: any) {
        console.error("Embedding error:", error);
        if (error.status === 403 || error.message?.includes("403")) {
            throw new Error("API key không có quyền truy cập embedding API. Vui lòng kiểm tra API key trong Google AI Studio.");
        }
        throw error;
    }
}

export async function generateText(prompt: string, model?: ChatModel): Promise<string> {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not set");
    }

    const modelName = model || AI_CONFIG.chatModel;
    const geminiModel = genAI.getGenerativeModel({ model: modelName });
    const result = await geminiModel.generateContent(prompt);
    const response = result.response;

    return response.text();
}

export async function generateStructuredText(
    prompt: string,
    systemInstruction?: string,
    model?: ChatModel
): Promise<string> {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not set");
    }

    const modelName = model || AI_CONFIG.chatModel;
    const geminiModel = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: systemInstruction || "Bạn là một trợ lý AI hỗ trợ tìm việc làm. Hãy trả lời bằng tiếng Việt.",
    });

    const result = await geminiModel.generateContent(prompt);
    return result.response.text();
}

export function createEmbeddingTextForJob(job: {
    title: string;
    description: string;
    requirements?: string | null;
    benefits?: string | null;
    skills: string[];
    location: string;
    jobType: string;
}): string {
    const parts = [
        `Job Title: ${job.title}`,
        `Description: ${job.description}`,
    ];

    if (job.requirements) {
        parts.push(`Requirements: ${job.requirements}`);
    }

    if (job.benefits) {
        parts.push(`Benefits: ${job.benefits}`);
    }

    if (job.skills && job.skills.length > 0) {
        parts.push(`Skills: ${job.skills.join(", ")}`);
    }

    parts.push(`Location: ${job.location || "N/A"}`);
    parts.push(`Job Type: ${job.jobType}`);

    return parts.join(". ");
}

export function createEmbeddingTextForProfile(profile: {
    bio?: string | null;
    skills: string[];
    desiredJobType?: string | null;
    desiredSalary?: number | null;
    yearsExp?: number | null;
    experience?: unknown;
    education?: unknown;
}): string {
    const parts: string[] = [];

    if (profile.bio) {
        parts.push(`Bio: ${profile.bio}`);
    }

    if (profile.skills && profile.skills.length > 0) {
        parts.push(`Skills: ${profile.skills.join(", ")}`);
    }

    if (profile.desiredJobType) {
        parts.push(`Desired Job Type: ${profile.desiredJobType}`);
    }

    if (profile.desiredSalary) {
        parts.push(`Desired Salary: ${profile.desiredSalary} VND`);
    }

    if (profile.yearsExp !== undefined && profile.yearsExp !== null) {
        parts.push(`Years of Experience: ${profile.yearsExp}`);
    }

    if (profile.experience && Array.isArray(profile.experience)) {
        const expStr = (profile.experience as Array<{ company?: string; position?: string; description?: string }>)
            .map(e => `${e.position} at ${e.company}: ${e.description}`)
            .join(". ");
        if (expStr) {
            parts.push(`Experience: ${expStr}`);
        }
    }

    if (profile.education && Array.isArray(profile.education)) {
        const eduStr = (profile.education as Array<{ school?: string; degree?: string; field?: string }>)
            .map(e => `${e.degree} in ${e.field} at ${e.school}`)
            .join(". ");
        if (eduStr) {
            parts.push(`Education: ${eduStr}`);
        }
    }

    return parts.join(". ");
}

export const MODEL_INFO = {
    chat: {
        "gemini-2.5-flash": {
            name: "Gemini 2.5 Flash",
            description: "Nhanh và hiệu quả, phù hợp cho hầu hết tác vụ",
            bestFor: "Tìm kiếm, gợi ý, tạo nội dung",
        },
    },
    embedding: {
        "text-embedding-004": {
            name: "Text Embedding 004",
            description: "Embedding tiêu chuẩn mạnh mẽ nhất hiện nay",
            dimensions: 1536,
        },
        "gemini-embedding-001": {
            name: "Gemini Embedding 001",
            description: "Embedding từ Gemini (Cũ hơn)",
            dimensions: 768,
        },
    },
} as const;
