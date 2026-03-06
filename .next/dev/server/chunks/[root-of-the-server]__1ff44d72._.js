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
"[project]/app/api/ai/suggestions/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET
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
async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get("q")?.toLowerCase().trim() || "";
        if (query.length < 2) {
            const popularSearches = await getPopularSearches();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                suggestions: popularSearches
            });
        }
        const suggestions = [];
        // 1. Search job titles từ database (ưu tiên cao nhất)
        const matchingJobs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].job.findMany({
            where: {
                status: "ACTIVE",
                title: {
                    contains: query,
                    mode: "insensitive"
                }
            },
            select: {
                title: true,
                company: {
                    select: {
                        name: true
                    }
                },
                location: true
            },
            distinct: [
                "title"
            ],
            take: 5,
            orderBy: {
                viewCount: "desc"
            }
        });
        matchingJobs.forEach((job)=>{
            if (!suggestions.find((s)=>s.value === job.title)) {
                suggestions.push({
                    type: "job_title",
                    value: job.title,
                    label: job.title,
                    extra: job.company.name,
                    score: 1.0
                });
            }
        });
        // 2. Search company names
        const matchingCompanies = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].company.findMany({
            where: {
                name: {
                    contains: query,
                    mode: "insensitive"
                }
            },
            select: {
                name: true,
                industry: true
            },
            take: 3
        });
        matchingCompanies.forEach((company)=>{
            if (!suggestions.find((s)=>s.value === company.name)) {
                suggestions.push({
                    type: "company",
                    value: company.name,
                    label: company.name,
                    extra: company.industry || undefined,
                    score: 0.95
                });
            }
        });
        // 3. Search keywords từ bảng SearchKeyword (exact base match)
        const exactBaseKeywordMatch = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].searchKeyword.findMany({
            where: {
                isActive: true,
                baseKeyword: {
                    equals: query,
                    mode: "insensitive"
                }
            },
            take: 20
        });
        if (exactBaseKeywordMatch.length > 0) {
            exactBaseKeywordMatch.filter((k)=>k.keywordType === "keyword_suggestion").slice(0, 6).forEach((kw)=>{
                if (!suggestions.find((s)=>s.value === kw.keywordSuggestion)) {
                    suggestions.push({
                        type: "keyword_suggestion",
                        value: kw.keywordSuggestion,
                        label: kw.keywordSuggestion,
                        score: 0.9
                    });
                }
            });
            exactBaseKeywordMatch.filter((k)=>k.keywordType === "related_keyword").slice(0, 6).forEach((kw)=>{
                if (!suggestions.find((s)=>s.value === kw.keywordSuggestion)) {
                    suggestions.push({
                        type: "related_keyword",
                        value: kw.keywordSuggestion,
                        label: kw.keywordSuggestion,
                        score: 0.85
                    });
                }
            });
        }
        // 4. Prefix match trên keywordSuggestion
        if (exactBaseKeywordMatch.length === 0) {
            const prefixMatchKeywords = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].searchKeyword.findMany({
                where: {
                    isActive: true,
                    keywordSuggestion: {
                        startsWith: query,
                        mode: "insensitive"
                    }
                },
                take: 10
            });
            prefixMatchKeywords.forEach((kw)=>{
                if (!suggestions.find((s)=>s.value === kw.keywordSuggestion)) {
                    suggestions.push({
                        type: kw.keywordType,
                        value: kw.keywordSuggestion,
                        label: kw.keywordSuggestion,
                        score: 0.8
                    });
                }
            });
        }
        // 5. Contains match
        if (suggestions.length < 6) {
            const textMatchedKeywords = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].searchKeyword.findMany({
                where: {
                    isActive: true,
                    keywordSuggestion: {
                        contains: query,
                        mode: "insensitive"
                    }
                },
                take: 10
            });
            textMatchedKeywords.forEach((kw)=>{
                if (!suggestions.find((s)=>s.value === kw.keywordSuggestion)) {
                    suggestions.push({
                        type: kw.keywordType,
                        value: kw.keywordSuggestion,
                        label: kw.keywordSuggestion,
                        score: 0.7
                    });
                }
            });
        }
        // 6. Nếu chưa đủ gợi ý, dùng AI generate (context tìm việc)
        if (suggestions.length < 8) {
            try {
                const aiSuggestions = await generateJobKeywords(query);
                aiSuggestions.forEach((s)=>{
                    if (!suggestions.find((existing)=>existing.value === s.value)) {
                        suggestions.push(s);
                    }
                });
            } catch (aiError) {
                console.error("Error generating AI suggestions:", aiError);
            }
        }
        // 7. Search skills & industries
        const [skills, industries] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].skill.findMany({
                where: {
                    name: {
                        contains: query,
                        mode: "insensitive"
                    }
                },
                select: {
                    name: true,
                    category: true
                },
                take: 3
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].industry.findMany({
                where: {
                    name: {
                        contains: query,
                        mode: "insensitive"
                    }
                },
                select: {
                    name: true
                },
                take: 2
            })
        ]);
        skills.forEach((skill)=>{
            if (!suggestions.find((s)=>s.value === skill.name)) {
                suggestions.push({
                    type: "skill",
                    value: skill.name,
                    label: skill.name,
                    extra: skill.category,
                    score: 0.6
                });
            }
        });
        industries.forEach((industry)=>{
            if (!suggestions.find((s)=>s.value === industry.name)) {
                suggestions.push({
                    type: "industry",
                    value: industry.name,
                    label: industry.name,
                    score: 0.5
                });
            }
        });
        // Sort và giới hạn
        const sortedSuggestions = suggestions.sort((a, b)=>(b.score || 0) - (a.score || 0)).slice(0, 15).map(({ score, ...rest })=>rest);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            suggestions: sortedSuggestions
        });
    } catch (error) {
        console.error("Suggestions API error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            suggestions: [],
            error: "Lỗi server"
        }, {
            status: 500
        });
    }
}
// Generate keywords bằng AI - context tìm việc làm
async function generateJobKeywords(query) {
    const suggestions = [];
    const keyword = query.toLowerCase().trim();
    // Prompt cho keyword suggestions - context tuyển dụng
    const keywordPrompt = `Bạn là hệ thống gợi ý tìm kiếm của website tuyển dụng việc làm tại Việt Nam.

Người dùng đang gõ: "${keyword}"

Hãy tạo 6 từ khóa tìm việc gợi ý mà người dùng có thể muốn tìm. Ví dụ:
- Nếu gõ "lập trình" → "lập trình viên Java", "lập trình web", "lập trình mobile", "lập trình viên Python"
- Nếu gõ "marketing" → "marketing online", "marketing manager", "digital marketing", "content marketing"
- Nếu gõ "kế toán" → "kế toán tổng hợp", "kế toán trưởng", "kế toán thuế", "kế toán nội bộ"

Chỉ trả lời bằng JSON array các string. Không giải thích.`;
    try {
        const keywordResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateText"])(keywordPrompt);
        const keywordSuggestions = parseAIResponse(keywordResult);
        for (const suggestion of keywordSuggestions.slice(0, 6)){
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].searchKeyword.upsert({
                    where: {
                        baseKeyword_keywordSuggestion_keywordType: {
                            baseKeyword: keyword,
                            keywordSuggestion: suggestion,
                            keywordType: "keyword_suggestion"
                        }
                    },
                    update: {},
                    create: {
                        baseKeyword: keyword,
                        keywordSuggestion: suggestion,
                        keywordType: "keyword_suggestion",
                        embedding: []
                    }
                });
                suggestions.push({
                    type: "keyword_suggestion",
                    value: suggestion,
                    label: suggestion,
                    score: 0.65
                });
            } catch (e) {
                console.error("Error saving keyword:", e);
            }
        }
    } catch (e) {
        console.error("Error generating keyword suggestions:", e);
    }
    // Prompt cho related keywords - vị trí/ngành liên quan
    const relatedPrompt = `Bạn là hệ thống gợi ý tìm kiếm của website tuyển dụng việc làm tại Việt Nam.

Người dùng tìm: "${keyword}"

Hãy gợi ý 4 từ khóa việc làm LIÊN QUAN mà người tìm "${keyword}" cũng hay tìm. Ví dụ:
- "frontend developer" → "React developer", "UI/UX designer", "fullstack developer"  
- "nhân viên kinh doanh" → "sales executive", "account manager", "business development"
- "graphic design" → "UI designer", "creative director", "brand designer"

Chỉ trả lời bằng JSON array các string. Không giải thích.`;
    try {
        const relatedResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateText"])(relatedPrompt);
        const relatedKeywords = parseAIResponse(relatedResult);
        for (const suggestion of relatedKeywords.slice(0, 4)){
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].searchKeyword.upsert({
                    where: {
                        baseKeyword_keywordSuggestion_keywordType: {
                            baseKeyword: keyword,
                            keywordSuggestion: suggestion,
                            keywordType: "related_keyword"
                        }
                    },
                    update: {},
                    create: {
                        baseKeyword: keyword,
                        keywordSuggestion: suggestion,
                        keywordType: "related_keyword",
                        embedding: []
                    }
                });
                suggestions.push({
                    type: "related_keyword",
                    value: suggestion,
                    label: suggestion,
                    score: 0.55
                });
            } catch (e) {
                console.error("Error saving related keyword:", e);
            }
        }
    } catch (e) {
        console.error("Error generating related keywords:", e);
    }
    return suggestions;
}
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
async function getPopularSearches() {
    try {
        const [popularJobs, popularCompanies, popularIndustries] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].job.findMany({
                where: {
                    status: "ACTIVE"
                },
                select: {
                    title: true
                },
                distinct: [
                    "title"
                ],
                take: 5,
                orderBy: {
                    viewCount: "desc"
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].company.findMany({
                where: {
                    verified: true
                },
                select: {
                    name: true
                },
                take: 3,
                orderBy: {
                    createdAt: "desc"
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].industry.findMany({
                take: 3
            })
        ]);
        const suggestions = [];
        popularJobs.forEach((job)=>{
            suggestions.push({
                type: "job_title",
                value: job.title,
                label: job.title
            });
        });
        popularCompanies.forEach((company)=>{
            suggestions.push({
                type: "company",
                value: company.name,
                label: company.name
            });
        });
        popularIndustries.forEach((industry)=>{
            suggestions.push({
                type: "industry",
                value: industry.name,
                label: industry.name
            });
        });
        return suggestions.slice(0, 10);
    } catch (error) {
        console.error("Error getting popular searches:", error);
        return [];
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1ff44d72._.js.map