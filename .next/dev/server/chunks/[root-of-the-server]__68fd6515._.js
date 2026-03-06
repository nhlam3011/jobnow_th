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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/credentials.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const { handlers, auth, signIn, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/login",
        newUser: "/register"
    },
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                if (!credentials?.email || !credentials?.password) return null;
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                if (!user || !user.password) return null;
                const valid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(credentials.password, user.password);
                if (!valid) return null;
                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    image: user.image,
                    role: user.role
                };
            }
        })
    ],
    callbacks: {
        jwt ({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
        session ({ session, token }) {
            if (session.user) {
                session.user.id = token.id;
                session.user.role = token.role;
            }
            return session;
        }
    }
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/actions/cover-letter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"40aed406cd6755c76ca474828f2308d30f1d33fa5d":"generateCoverLetter","60640ba07e3eb7df47f4bbdcedcc8ef4e08c647c80":"generateCoverLetterWithContext"},"",""] */ __turbopack_context__.s([
    "generateCoverLetter",
    ()=>generateCoverLetter,
    "generateCoverLetterWithContext",
    ()=>generateCoverLetterWithContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gemini.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function generateCoverLetter(jobId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Vui lòng đăng nhập"
        };
    }
    try {
        const job = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].job.findUnique({
            where: {
                id: jobId
            },
            include: {
                company: true
            }
        });
        if (!job) {
            return {
                error: "Không tìm thấy việc làm"
            };
        }
        const profile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].candidateProfile.findUnique({
            where: {
                userId: session.user.id
            }
        });
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                id: session.user.id
            }
        });
        if (!profile) {
            return {
                error: "Vui lòng cập nhật hồ sơ trước"
            };
        }
        const prompt = `
Bạn là một chuyên gia viết thư xin việc. Hãy viết một thư xin việc (cover letter) bằng tiếng Việt theo các yêu cầu sau:

**Thông tin ứng viên:**
- Tên: ${user?.name || "Ứng viên"}
- Kỹ năng: ${profile.skills?.join(", ") || "Chưa cập nhật"}
- Kinh nghiệm: ${profile.yearsExp || 0} năm
- Mô tả bản thân: ${profile.bio || "Chưa cập nhật"}

**Thông tin công việc:**
- Vị trí: ${job.title}
- Công ty: ${job.company.name}
- Mô tả: ${job.description}
- Yêu cầu: ${job.requirements || "Không có"}
- Địa điểm: ${job.location}

**Yêu cầu:**
1. Viết thư xin việc chuyên nghiệp, ngắn gọn (300-400 từ)
2. Giới thiệu bản thân và nêu rõ lý do phù hợp với vị trí
3. Liên kết kỹ năng của ứng viên với yêu cầu công việc
4. Thể hiện sự quan tâm và mong muốn được phỏng vấn
5. Kết thúc bằng lời cảm ơn

Viết thư xin việc ngay bây giờ:
        `.trim();
        const coverLetter = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateStructuredText"])(prompt, "Bạn là một chuyên gia HR với nhiều năm kinh nghiệm trong việc đánh giá hồ sơ và viết thư xin việc. Hãy viết thư xin việc thuyết phục và chuyên nghiệp.");
        return {
            success: true,
            coverLetter,
            job: {
                title: job.title,
                company: job.company.name
            }
        };
    } catch (error) {
        console.error("Cover letter generation error:", error);
        return {
            error: "Tạo thư xin việc thất bại. Vui lòng thử lại."
        };
    }
}
async function generateCoverLetterWithContext(jobId, additionalInfo) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Vui lòng đăng nhập"
        };
    }
    try {
        const job = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].job.findUnique({
            where: {
                id: jobId
            },
            include: {
                company: true
            }
        });
        if (!job) {
            return {
                error: "Không tìm thấy việc làm"
            };
        }
        const profile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].candidateProfile.findUnique({
            where: {
                userId: session.user.id
            }
        });
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
            where: {
                id: session.user.id
            }
        });
        const prompt = `
Bạn là một chuyên gia viết thư xin việc. Hãy viết một thư xin việc (cover letter) bằng tiếng Việt theo các yêu cầu sau:

**Thông tin ứng viên:**
- Tên: ${user?.name || "Ứng viên"}
- Kỹ năng: ${profile?.skills?.join(", ") || "Chưa cập nhật"}
- Kinh nghiệm: ${profile?.yearsExp || 0} năm
- Mô tả bản thân: ${profile?.bio || "Chưa cập nhật"}

**Thông tin công việc:**
- Vị trí: ${job.title}
- Công ty: ${job.company.name}
- Mô tả: ${job.description}
- Yêu cầu: ${job.requirements || "Không có"}
- Địa điểm: ${job.location}

**Thông tin bổ sung từ ứng viên:**
${additionalInfo || "Không có"}

**Yêu cầu:**
1. Viết thư xin việc chuyên nghiệp, ngắn gọn (300-400 từ)
2. Giới thiệu bản thân và nêu rõ lý do phù hợp với vị trí
3. Liên kết kỹ năng của ứng viên với yêu cầu công việc
4. Thể hiện sự quan tâm và mong muốn được phỏng vấn
5. Kết thúc bằng lời cảm ơn

Viết thư xin việc ngay bây giờ:
        `.trim();
        const coverLetter = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateStructuredText"])(prompt, "Bạn là một chuyên gia HR với nhiều năm kinh nghiệm trong việc đánh giá hồ sơ và viết thư xin việc. Hãy viết thư xin việc thuyết phục và chuyên nghiệp.");
        return {
            success: true,
            coverLetter,
            job: {
                title: job.title,
                company: job.company.name
            }
        };
    } catch (error) {
        console.error("Cover letter generation error:", error);
        return {
            error: "Tạo thư xin việc thất bại. Vui lòng thử lại."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generateCoverLetter,
    generateCoverLetterWithContext
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(generateCoverLetter, "40aed406cd6755c76ca474828f2308d30f1d33fa5d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerServerReference"])(generateCoverLetterWithContext, "60640ba07e3eb7df47f4bbdcedcc8ef4e08c647c80", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/api/ai/cover-letter/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$cover$2d$letter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/cover-letter.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$cover$2d$letter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$cover$2d$letter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { jobId, additionalInfo } = body;
        if (!jobId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Thiếu ID công việc"
            }, {
                status: 400
            });
        }
        const result = additionalInfo ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$cover$2d$letter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateCoverLetterWithContext"])(jobId, additionalInfo) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$cover$2d$letter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateCoverLetter"])(jobId);
        if (result.error) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: result.error
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
    } catch (error) {
        console.error("Cover letter API error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Tạo thư xin việc thất bại"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__68fd6515._.js.map