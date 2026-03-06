module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const connectionString = process.env.DATABASE_URL;
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
    connectionString
});
const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaPg"](pool);
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]({
    adapter,
    log: ("TURBOPACK compile-time truthy", 1) ? [
        "error",
        "warn"
    ] : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/gemini.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AI_CONFIG",
    ()=>AI_CONFIG,
    "MODEL_INFO",
    ()=>MODEL_INFO,
    "createEmbeddingTextForJob",
    ()=>createEmbeddingTextForJob,
    "createEmbeddingTextForProfile",
    ()=>createEmbeddingTextForProfile,
    "genAI",
    ()=>genAI,
    "generateStructuredText",
    ()=>generateStructuredText,
    "generateText",
    ()=>generateText,
    "getEmbedding",
    ()=>getEmbedding,
    "setChatModel",
    ()=>setChatModel,
    "setEmbeddingModel",
    ()=>setEmbeddingModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
;
const globalForGemini = globalThis;
const genAI = globalForGemini.genAI ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY || "");
if ("TURBOPACK compile-time truthy", 1) globalForGemini.genAI = genAI;
const AI_CONFIG = {
    chatModel: process.env.GEMINI_CHAT_MODEL || "gemini-2.0-flash",
    embeddingModel: process.env.GEMINI_EMBEDDING_MODEL || "gemini-embedding-001"
};
function setChatModel(model) {
    AI_CONFIG.chatModel = model;
}
function setEmbeddingModel(model) {
    AI_CONFIG.embeddingModel = model;
}
async function getEmbedding(text, model) {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not set");
    }
    const modelName = model || AI_CONFIG.embeddingModel;
    try {
        const geminiModel = genAI.getGenerativeModel({
            model: modelName
        });
        const result = await geminiModel.embedContent(text);
        const embedding = result.embedding;
        if (!embedding.values || embedding.values.length === 0) {
            throw new Error("Failed to generate embedding: empty result");
        }
        return embedding.values;
    } catch (error) {
        console.error("Embedding error:", error);
        if (error.status === 403 || error.message?.includes("403")) {
            throw new Error("API key không có quyền truy cập embedding API. Vui lòng kiểm tra API key trong Google AI Studio.");
        }
        throw error;
    }
}
async function generateText(prompt, model) {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not set");
    }
    const modelName = model || AI_CONFIG.chatModel;
    const geminiModel = genAI.getGenerativeModel({
        model: modelName
    });
    const result = await geminiModel.generateContent(prompt);
    const response = result.response;
    return response.text();
}
async function generateStructuredText(prompt, systemInstruction, model) {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not set");
    }
    const modelName = model || AI_CONFIG.chatModel;
    const geminiModel = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: systemInstruction || "Bạn là một trợ lý AI hỗ trợ tìm việc làm. Hãy trả lời bằng tiếng Việt."
    });
    const result = await geminiModel.generateContent(prompt);
    return result.response.text();
}
function createEmbeddingTextForJob(job) {
    const parts = [
        `Job Title: ${job.title}`,
        `Description: ${job.description}`
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
    parts.push(`Location: ${job.location}`);
    parts.push(`Job Type: ${job.jobType}`);
    return parts.join(". ");
}
function createEmbeddingTextForProfile(profile) {
    const parts = [];
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
        const expStr = profile.experience.map((e)=>`${e.position} at ${e.company}: ${e.description}`).join(". ");
        if (expStr) {
            parts.push(`Experience: ${expStr}`);
        }
    }
    if (profile.education && Array.isArray(profile.education)) {
        const eduStr = profile.education.map((e)=>`${e.degree} in ${e.field} at ${e.school}`).join(". ");
        if (eduStr) {
            parts.push(`Education: ${eduStr}`);
        }
    }
    return parts.join(". ");
}
const MODEL_INFO = {
    chat: {
        "gemini-2.0-flash": {
            name: "Gemini 2.0 Flash",
            description: "Nhanh và hiệu quả, phù hợp cho hầu hết tác vụ",
            bestFor: "Tìm kiếm, gợi ý, tạo nội dung"
        },
        "gemini-2.0-flash-lite": {
            name: "Gemini 2.0 Flash Lite",
            description: "Nhẹ hơn, tiết kiệm chi phí",
            bestFor: "Tác vụ đơn giản, tần suất cao"
        },
        "gemini-1.5-pro": {
            name: "Gemini 1.5 Pro",
            description: "Mạnh nhất, hiểu ngữ cảnh tốt",
            bestFor: "Phân tích phức tạp, cover letter chi tiết"
        },
        "gemini-1.5-flash": {
            name: "Gemini 1.5 Flash",
            description: "Cân bằng giữa tốc độ và chất lượng",
            bestFor: "Tìm kiếm, resume parsing"
        },
        "gemini-1.5-flash-8b": {
            name: "Gemini 1.5 Flash 8B",
            description: "Rất nhanh, ít tokens",
            bestFor: "Tác vụ đơn giản"
        }
    },
    embedding: {
        "text-embedding-004": {
            name: "Text Embedding 004",
            description: "Embedding tiêu chuẩn cho tìm kiếm vector",
            dimensions: 1536
        },
        "gemini-embedding-001": {
            name: "Gemini Embedding 001",
            description: "Embedding từ Gemini",
            dimensions: 768
        }
    }
};
}),
"[project]/app/api/admin/keywords/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gemini.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
// Common base keywords for seeding
const COMMON_BASE_KEYWORDS = [
    "marketing",
    "developer",
    "designer",
    "engineer",
    "manager",
    "sales",
    "accountant",
    "hr",
    "it",
    "data",
    "content",
    "product",
    "project",
    "operation",
    "admin",
    "customer service",
    "finance",
    "legal",
    "consultant",
    " analyst"
];
// Common keyword suffixes
const KEYWORD_SUFFIXES = [
    "online",
    "intern",
    "thực tập sinh",
    "leader",
    "manager",
    "senior",
    "junior",
    "assistant",
    "coordinator",
    "specialist",
    "director",
    "executive"
];
async function GET() {
    try {
        const keywords = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].searchKeyword.findMany({
            orderBy: {
                createdAt: "desc"
            },
            take: 200
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            keywords
        });
    } catch (error) {
        console.error("Error fetching keywords:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Lỗi server"
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const { baseKeyword } = await request.json();
        if (!baseKeyword || !baseKeyword.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Thiếu từ khoá cơ sở"
            }, {
                status: 400
            });
        }
        const keyword = baseKeyword.toLowerCase().trim();
        let createdCount = 0;
        // Generate keyword suggestions using AI
        const keywordPrompt = `
Dựa vào từ khoá tìm kiếm: "${keyword}"

Hãy tạo ra 10 từ khoá gợi ý bằng cách thêm các hậu tố phổ biến vào từ khoá trên.
Các hậu tố có thể dùng: online, intern, thực tập sinh, leader, manager, senior, junior, assistant, coordinator, specialist, director, executive, trưởng nhóm, trưởng phòng.

Ví dụ nếu input là "marketing": output là ["marketing online", "marketing intern", "marketing leader", "marketing manager", "senior marketing", "chuyên viên marketing", "trưởng nhóm marketing", "thực tập sinh marketing", "marketing coordinator", "marketing specialist"]

Chỉ trả lời bằng một mảng JSON array các từ khoá, không giải thích gì thêm.
`;
        const keywordResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateText"])(keywordPrompt);
        const keywordSuggestions = parseAIResponse(keywordResult);
        // Save keyword suggestions with embeddings
        for (const suggestion of keywordSuggestions){
            try {
                // Generate embedding for the keyword
                const embedding = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEmbedding"])(suggestion);
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].searchKeyword.upsert({
                    where: {
                        baseKeyword_keywordSuggestion_keywordType: {
                            baseKeyword: keyword,
                            keywordSuggestion: suggestion,
                            keywordType: "keyword_suggestion"
                        }
                    },
                    update: {
                        embedding
                    },
                    create: {
                        baseKeyword: keyword,
                        keywordSuggestion: suggestion,
                        keywordType: "keyword_suggestion",
                        embedding
                    }
                });
                createdCount++;
            } catch (e) {
                console.error("Error saving keyword:", e);
            }
        }
        // Generate related keywords using AI
        const relatedPrompt = `
Dựa vào từ khoá tìm kiếm: "${keyword}"

Hãy tạo ra 10 từ khoá liên quan thường được tìm kiếm cùng với từ khoá trên.
Các từ khoá liên quan có thể là: các vị trí công việc liên quan, ngành nghề liên quan, các combination phổ biến.

Ví dụ nếu input là "marketing": output là ["content marketing", "digital marketing", "email marketing", "social media marketing", "seo marketing", "brand marketing", "marketing communications", "marketing automation", "marketing strategy", "marketing analytics"]

Chỉ trả lời bằng một mảng JSON array các từ khoá, không giải thích gì thêm.
`;
        const relatedResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateText"])(relatedPrompt);
        const relatedKeywords = parseAIResponse(relatedResult);
        // Save related keywords with embeddings
        for (const suggestion of relatedKeywords){
            try {
                const embedding = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEmbedding"])(suggestion);
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].searchKeyword.upsert({
                    where: {
                        baseKeyword_keywordSuggestion_keywordType: {
                            baseKeyword: keyword,
                            keywordSuggestion: suggestion,
                            keywordType: "related_keyword"
                        }
                    },
                    update: {
                        embedding
                    },
                    create: {
                        baseKeyword: keyword,
                        keywordSuggestion: suggestion,
                        keywordType: "related_keyword",
                        embedding
                    }
                });
                createdCount++;
            } catch (e) {
                console.error("Error saving related keyword:", e);
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Tạo từ khoá thành công",
            createdCount
        });
    } catch (error) {
        console.error("Error generating keywords:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Lỗi khi tạo từ khoá"
        }, {
            status: 500
        });
    }
}
// Parse AI response to extract array of keywords
function parseAIResponse(response) {
    try {
        const jsonMatch = response.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);
            if (Array.isArray(parsed)) {
                return parsed.map((item)=>item.trim()).filter((item)=>item.length > 0);
            }
        }
        return response.split(/[\n,]/).map((item)=>item.trim().replace(/^["']|["']$/g, "")).filter((item)=>item.length > 0);
    } catch  {
        return [];
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6ea161bf._.js.map