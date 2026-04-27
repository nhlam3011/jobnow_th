import { GoogleGenerativeAI } from "@google/generative-ai";

// Ensure we are reading the environment variable directly on each call if needed, 
// though global initialization is standard.
const getApiKey = () => process.env.GEMINI_API_KEY || "";

export const genAI = new GoogleGenerativeAI(getApiKey());

export const AI_CONFIG = {
    chatModel: process.env.GEMINI_CHAT_MODEL || "gemini-1.5-flash",
    embeddingModel: process.env.GEMINI_EMBEDDING_MODEL || "text-embedding-004",
} as const;

export type ChatModel =
    | "gemini-1.5-flash"
    | "gemini-1.5-pro"
    | "gemini-2.0-flash"
    | "gemini-pro";

export async function generateText(prompt: string, model?: ChatModel): Promise<string> {
    const key = getApiKey();
    if (!key) throw new Error("GEMINI_API_KEY is not set in environment");

    const modelName = model || AI_CONFIG.chatModel || "gemini-1.5-flash";
    try {
        const client = new GoogleGenerativeAI(key);
        const geminiModel = client.getGenerativeModel({ model: modelName });
        const result = await geminiModel.generateContent(prompt);
        return result.response.text();
    } catch (error: any) {
        console.error(`Gemini [${modelName}] Error:`, error.status, error.message);
        
        // If 404, try a generic "gemini-pro" as a last resort
        if (error.status === 404 && modelName !== "gemini-pro") {
            return generateText(prompt, "gemini-pro");
        }
        
        if (error.status === 429) {
            throw new Error("Hệ thống AI đang bận (Quá nhiều yêu cầu). Vui lòng thử lại sau 1 phút.");
        }
        
        if (error.status === 403 || error.status === 401) {
            throw new Error("Lỗi xác thực: API Key không hợp lệ hoặc đã hết hạn.");
        }
        
        throw new Error(`AI tạm thời không phản hồi (Mã lỗi: ${error.status || 'Unknown'}).`);
    }
}

export async function generateStructuredText(
    prompt: string,
    systemInstruction?: string,
    model?: ChatModel,
    fileData?: { data: string; mimeType: string }
): Promise<string> {
    const key = getApiKey();
    if (!key) throw new Error("GEMINI_API_KEY is not set in environment");

    const modelName = model || AI_CONFIG.chatModel || "gemini-1.5-flash";
    try {
        const client = new GoogleGenerativeAI(key);
        const geminiModel = client.getGenerativeModel({ model: modelName });
        
        const contents: any[] = [];
        if (fileData) {
            contents.push({
                inlineData: {
                    data: fileData.data,
                    mimeType: fileData.mimeType
                }
            });
        }
        contents.push({ text: systemInstruction ? `CONG VIEC: ${systemInstruction}\n\nYEU CAU: ${prompt}` : prompt });

        const result = await geminiModel.generateContent(contents);
        return result.response.text();
    } catch (error: any) {
        console.error(`Gemini Structured [${modelName}] Error:`, error.status, error.message);
        
        if (error.status === 429) {
            throw new Error("Hệ thống AI đang bận (Quá nhiều yêu cầu). Vui lòng thử lại sau 1 phút.");
        }
        
        throw error;
    }
}

export async function getEmbedding(text: string, model?: string): Promise<number[]> {
    const key = getApiKey();
    if (!key) throw new Error("GEMINI_API_KEY is not set");

    const modelName = model || AI_CONFIG.embeddingModel || "text-embedding-004";
    try {
        const client = new GoogleGenerativeAI(key);
        const geminiModel = client.getGenerativeModel({ model: modelName });
        const result = await geminiModel.embedContent(text);
        return result.embedding.values || [];
    } catch (error) {
        console.error("Embedding Error:", error);
        throw error;
    }
}

// Helper formatting
export function createEmbeddingTextForJob(job: any): string {
    return `${job.title} - ${job.description}`.substring(0, 1000);
}

export function createEmbeddingTextForProfile(profile: any): string {
    return `${profile.bio} - Skills: ${profile.skills?.join(", ")}`.substring(0, 1000);
}
