module.exports = [
"[project]/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const connectionString = process.env.DATABASE_URL;
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
    connectionString
});
const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PrismaPg"](pool);
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
"[project]/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/credentials.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const { handlers, auth, signIn, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/login",
        newUser: "/register"
    },
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
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
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                if (!user || !user.password) return null;
                const valid = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(credentials.password, user.password);
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
"[project]/lib/gemini.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)");
;
const globalForGemini = globalThis;
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY);
if ("TURBOPACK compile-time truthy", 1) globalForGemini.genAI = genAI;
const AI_CONFIG = {
    chatModel: process.env.GEMINI_CHAT_MODEL || "gemini-2.0-flash",
    embeddingModel: process.env.GEMINI_EMBEDDING_MODEL || "text-embedding-004"
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
        "gemini-2.5-flash": {
            name: "Gemini 2.5 Flash",
            description: "Nhanh và hiệu quả, phù hợp cho hầu hết tác vụ",
            bestFor: "Tìm kiếm, gợi ý, tạo nội dung"
        }
    },
    embedding: {
        "text-embedding-004": {
            name: "Text Embedding 004",
            description: "Embedding tiêu chuẩn mạnh mẽ nhất hiện nay",
            dimensions: 1536
        },
        "gemini-embedding-001": {
            name: "Gemini Embedding 001",
            description: "Embedding từ Gemini (Cũ hơn)",
            dimensions: 768
        }
    }
};
}),
"[project]/lib/ai.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"4072f243bb5500c021bcff18b4d24d79f652d254d1":"generateProfileEmbedding","40a83d6e62199fe1e0287a27bf774108e5da966b71":"generateJobEmbedding","40d5d52eb905018b24fa4ba8f8ae53ae9440bd47d9":"generateEmbeddingForAllJobs","60884262ba84c553abe771218755495ff6aa2cae85":"semanticJobSearch","60e11703cb6437504f1f4607a12dbd06a7e0b64cf6":"getRecommendedJobs"},"",""] */ __turbopack_context__.s([
    "generateEmbeddingForAllJobs",
    ()=>generateEmbeddingForAllJobs,
    "generateJobEmbedding",
    ()=>generateJobEmbedding,
    "generateProfileEmbedding",
    ()=>generateProfileEmbedding,
    "getRecommendedJobs",
    ()=>getRecommendedJobs,
    "semanticJobSearch",
    ()=>semanticJobSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gemini.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function generateJobEmbedding(jobId) {
    const job = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.findUnique({
        where: {
            id: jobId
        },
        include: {
            company: true,
            industry: true
        }
    });
    if (!job) {
        throw new Error("Job not found");
    }
    const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEmbeddingTextForJob"])({
        title: job.title,
        description: job.description,
        requirements: job.requirements,
        benefits: job.benefits,
        skills: job.skills,
        location: job.location,
        jobType: job.jobType
    });
    const embedding = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmbedding"])(text);
    const embeddingString = `[${embedding.join(',')}]`;
    // Lưu vector vào database sử dụng pgvector extension
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$executeRaw`
        UPDATE "Job"
        SET embedding = ${embeddingString}::vector
        WHERE id = ${jobId}
    `;
    return {
        success: true
    };
}
async function generateProfileEmbedding(userId) {
    const profile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].candidateProfile.findUnique({
        where: {
            userId
        }
    });
    if (!profile) {
        throw new Error("Profile not found");
    }
    const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEmbeddingTextForProfile"])({
        bio: profile.bio,
        skills: profile.skills,
        desiredJobType: profile.desiredJobType,
        desiredSalary: profile.desiredSalary,
        yearsExp: profile.yearsExp,
        experience: profile.experience,
        education: profile.education
    });
    const embedding = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmbedding"])(text);
    const embeddingString = `[${embedding.join(',')}]`;
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$executeRaw`
        UPDATE "CandidateProfile"
        SET embedding = ${embeddingString}::vector
        WHERE "userId" = ${userId}
    `;
    return {
        success: true
    };
}
async function semanticJobSearch(query, limit = 20) {
    const embedding = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gemini$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmbedding"])(query);
    const embeddingString = `[${embedding.join(',')}]`;
    const jobs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`
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
async function getRecommendedJobs(userId, limit = 10) {
    const profile = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].candidateProfile.findUnique({
        where: {
            userId
        }
    });
    if (!profile) {
        return [];
    }
    // Kiểm tra xem ứng viên đã có vector embedding chưa
    const hasEmbedding = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`
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
    const jobs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`
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
async function generateEmbeddingForAllJobs(batchSize = 10) {
    const jobs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.findMany({
        where: {
            status: "ACTIVE"
        },
        take: batchSize
    });
    let processed = 0;
    for (const job of jobs){
        try {
            await generateJobEmbedding(job.id);
            processed++;
        } catch (e) {
            console.error(`Failed to generate embedding for job ${job.id}:`, e);
        }
    }
    return {
        processed
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generateJobEmbedding,
    generateProfileEmbedding,
    semanticJobSearch,
    getRecommendedJobs,
    generateEmbeddingForAllJobs
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateJobEmbedding, "40a83d6e62199fe1e0287a27bf774108e5da966b71", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateProfileEmbedding, "4072f243bb5500c021bcff18b4d24d79f652d254d1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(semanticJobSearch, "60884262ba84c553abe771218755495ff6aa2cae85", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getRecommendedJobs, "60e11703cb6437504f1f4607a12dbd06a7e0b64cf6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateEmbeddingForAllJobs, "40d5d52eb905018b24fa4ba8f8ae53ae9440bd47d9", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/actions/jobs.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00224f11441e675c5b3522a3fd480060e4f366fa76":"getSavedJobs","0058643d0f29418568c8238ea5a57c7771456597d1":"getEmployerJobs","0093aa74813cb000553169de8dc72cb31dcabdeb89":"getJobFilters","00a70cf1fec7b617f646ec35d545707736f811df1b":"getAllIndustries","00a80d882e5497d7436a7dc0616e0c1ddb2994413b":"getSavedJobIds","00bbed9864cd7c08ed300bc4c2a9e24657e5376aa9":"getAllJobsForAdmin","00cb9cede009da617c31e137e69dc0fd966ea96c0d":"getIndustries","00eae5274380d25b61b6402c08c8cb8b165107724b":"getJobLocations","4016bfa22123dad3d3aaeee262b4ebf7358de34cb8":"unsaveJob","4074008fc079c221c63f168f8c403e5a556b09450a":"saveJob","4075cdaad048ff9d0b78527b798678780daff1d456":"isJobSaved","409873f3b6c306239b1795e77009c479d8815fc51f":"deleteJob","4098c9e81be5fcaaa602abcfd4834700a2970ffbea":"getJobBySlug","4099e4737f909665d78f0e0807e6ff8b1705fee95b":"getJobById","40c7dd443a340e62bc3691c22671451c4f35a94697":"getJobs","40dc614e97b330026d966988413fca692d8852a426":"createJob","6002477e38c017ee90de72bc3bc93d48b09b18629d":"updateJobStatus","605a75f377383c32584961671679d66f6a5b516abc":"updateJob"},"",""] */ __turbopack_context__.s([
    "createJob",
    ()=>createJob,
    "deleteJob",
    ()=>deleteJob,
    "getAllIndustries",
    ()=>getAllIndustries,
    "getAllJobsForAdmin",
    ()=>getAllJobsForAdmin,
    "getEmployerJobs",
    ()=>getEmployerJobs,
    "getIndustries",
    ()=>getIndustries,
    "getJobById",
    ()=>getJobById,
    "getJobBySlug",
    ()=>getJobBySlug,
    "getJobFilters",
    ()=>getJobFilters,
    "getJobLocations",
    ()=>getJobLocations,
    "getJobs",
    ()=>getJobs,
    "getSavedJobIds",
    ()=>getSavedJobIds,
    "getSavedJobs",
    ()=>getSavedJobs,
    "isJobSaved",
    ()=>isJobSaved,
    "saveJob",
    ()=>saveJob,
    "unsaveJob",
    ()=>unsaveJob,
    "updateJob",
    ()=>updateJob,
    "updateJobStatus",
    ()=>updateJobStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ai.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim() + "-" + Date.now();
}
async function getJobs(params) {
    const where = {};
    if (params?.status) {
        where.status = params.status;
    } else {
        where.status = "ACTIVE";
    }
    if (params?.q && params.useAI) {
        try {
            const aiJobs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ai$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["semanticJobSearch"])(params.q, 50);
            if (aiJobs && Array.isArray(aiJobs) && aiJobs.length > 0) {
                return aiJobs.map((job)=>({
                        id: job.id,
                        title: job.title,
                        slug: job.slug,
                        description: job.description,
                        requirements: job.requirements,
                        benefits: job.benefits,
                        salaryMin: job.salaryMin,
                        salaryMax: job.salaryMax,
                        location: job.location,
                        jobType: job.jobType,
                        skills: job.skills,
                        createdAt: job.createdAt,
                        company: {
                            name: job.companyName,
                            logo: job.companyLogo,
                            slug: job.companySlug,
                            verified: false
                        },
                        similarity: job.similarity
                    }));
            }
        } catch (e) {
            console.error("AI search failed, falling back to text search:", e);
        }
    }
    if (params?.q && !params.useAI) {
        where.OR = [
            {
                title: {
                    contains: params.q,
                    mode: "insensitive"
                }
            },
            {
                description: {
                    contains: params.q,
                    mode: "insensitive"
                }
            },
            {
                skills: {
                    hasSome: [
                        params.q
                    ]
                }
            }
        ];
    }
    if (params?.loc) {
        where.location = {
            contains: params.loc,
            mode: "insensitive"
        };
    }
    if (params?.type) where.jobType = params.type;
    if (params?.industryId) where.industryId = params.industryId;
    // Salary range filter
    if (params?.salary) {
        const [minSalary, maxSalary] = params.salary.split("-").map(Number);
        where.AND = [
            {
                salaryMin: {
                    gte: minSalary
                }
            },
            {
                OR: [
                    {
                        salaryMax: {
                            lte: maxSalary
                        }
                    },
                    {
                        salaryMax: {
                            gte: minSalary
                        }
                    }
                ]
            }
        ];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.findMany({
        where,
        include: {
            company: {
                select: {
                    name: true,
                    logo: true,
                    slug: true,
                    verified: true
                }
            }
        },
        orderBy: params?.q ? undefined : {
            createdAt: "desc"
        },
        take: 50
    });
}
async function getJobBySlug(slug) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.findUnique({
        where: {
            slug
        },
        include: {
            company: {
                select: {
                    name: true,
                    logo: true,
                    slug: true,
                    website: true,
                    verified: true
                }
            },
            industry: true,
            _count: {
                select: {
                    applications: true
                }
            }
        }
    });
}
async function getJobById(id) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.findUnique({
        where: {
            id
        },
        include: {
            company: {
                select: {
                    name: true,
                    logo: true,
                    slug: true,
                    website: true,
                    verified: true
                }
            },
            applications: {
                include: {
                    candidate: {
                        select: {
                            name: true,
                            email: true,
                            image: true,
                            candidateProfile: true
                        }
                    }
                }
            },
            _count: {
                select: {
                    applications: true
                }
            }
        }
    });
}
async function createJob(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user || session.user.role !== "EMPLOYER") {
        return {
            error: "Không có quyền truy cập"
        };
    }
    const title = formData.get("title");
    const description = formData.get("description");
    const requirements = formData.get("requirements");
    const benefits = formData.get("benefits");
    const location = formData.get("location");
    const jobType = formData.get("jobType");
    const salaryMin = parseInt(formData.get("salaryMin")) || null;
    const salaryMax = parseInt(formData.get("salaryMax")) || null;
    const skillsRaw = formData.get("skills");
    const skills = skillsRaw ? skillsRaw.split(",").map((s)=>s.trim()).filter(Boolean) : [];
    const industrySlug = formData.get("industryId");
    // Get employer's company
    const employer = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].employerProfile.findUnique({
        where: {
            userId: session.user.id
        }
    });
    if (!employer?.companyId) {
        return {
            error: "Bạn chưa có thông tin công ty. Vui lòng cập nhật trang Công ty trước."
        };
    }
    // Get industry by slug if provided
    let industryId = null;
    if (industrySlug) {
        const industry = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].industry.findUnique({
            where: {
                slug: industrySlug
            }
        });
        if (industry) {
            industryId = industry.id;
        }
    }
    const job = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.create({
        data: {
            companyId: employer.companyId,
            postedById: session.user.id,
            title,
            slug: slugify(title),
            description,
            requirements,
            benefits,
            location,
            jobType: jobType,
            salaryMin,
            salaryMax,
            skills,
            status: "PENDING",
            industryId
        }
    });
    try {
        const { generateJobEmbedding } = await __turbopack_context__.A("[project]/lib/ai.ts [app-rsc] (ecmascript, async loader)");
        await generateJobEmbedding(job.id);
    } catch (e) {
        console.error("Failed to generate embedding for new job:", e);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/employer/jobs");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/employer/jobs");
    return {
        success: true,
        id: job.id
    };
}
async function updateJobStatus(jobId, status) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user || session.user.role !== "ADMIN") {
        return {
            error: "Không có quyền"
        };
    }
    const job = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.update({
        where: {
            id: jobId
        },
        data: {
            status: status
        },
        select: {
            title: true,
            postedById: true
        }
    });
    if (status === "ACTIVE") {
        try {
            const { generateJobEmbedding } = await __turbopack_context__.A("[project]/lib/ai.ts [app-rsc] (ecmascript, async loader)");
            await generateJobEmbedding(jobId);
        } catch (e) {
            console.error("Failed to generate embedding for job:", e);
        }
    }
    // Notify employer about job status
    if (job.postedById) {
        const statusMsg = status === "ACTIVE" ? "đã được duyệt" : status === "REJECTED" ? "đã bị từ chối" : "đã được đóng";
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].notification.create({
                data: {
                    userId: job.postedById,
                    type: status === "ACTIVE" ? "JOB_APPROVED" : status === "REJECTED" ? "JOB_REJECTED" : "APPLICATION_STATUS",
                    title: `Tin tuyển dụng ${statusMsg}`,
                    message: `Tin "${job.title}" ${statusMsg} bởi quản trị viên.`,
                    link: "/employer/jobs"
                }
            });
        } catch (_) {}
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/jobs");
    return {
        success: true
    };
}
async function getEmployerJobs() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
    const employer = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].employerProfile.findUnique({
        where: {
            userId: session.user.id
        }
    });
    if (!employer?.companyId) return [];
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.findMany({
        where: {
            companyId: employer.companyId
        },
        include: {
            _count: {
                select: {
                    applications: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    });
}
async function deleteJob(jobId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user || session.user.role !== "EMPLOYER") return {
        error: "Không có quyền"
    };
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.delete({
        where: {
            id: jobId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/employer/jobs");
    return {
        success: true
    };
}
async function updateJob(jobId, formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user || session.user.role !== "EMPLOYER") {
        return {
            error: "Không có quyền truy cập"
        };
    }
    // Verify job belongs to employer
    const job = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.findUnique({
        where: {
            id: jobId
        },
        include: {
            company: {
                include: {
                    employers: true
                }
            }
        }
    });
    if (!job) {
        return {
            error: "Không tìm thấy tin tuyển dụng"
        };
    }
    // Check if user is employer of this job's company
    const isEmployer = job.company.employers.some((e)=>e.userId === session.user.id);
    if (!isEmployer) {
        return {
            error: "Bạn không có quyền sửa tin này"
        };
    }
    const title = formData.get("title");
    const description = formData.get("description");
    const requirements = formData.get("requirements");
    const benefits = formData.get("benefits");
    const location = formData.get("location");
    const jobType = formData.get("jobType");
    const salaryMin = parseInt(formData.get("salaryMin")) || null;
    const salaryMax = parseInt(formData.get("salaryMax")) || null;
    const skillsRaw = formData.get("skills");
    const skills = skillsRaw ? skillsRaw.split(",").map((s)=>s.trim()).filter(Boolean) : [];
    const industrySlug = formData.get("industryId");
    // Get industry by slug if provided
    let industryId = null;
    if (industrySlug) {
        const industry = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].industry.findUnique({
            where: {
                slug: industrySlug
            }
        });
        if (industry) {
            industryId = industry.id;
        }
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.update({
        where: {
            id: jobId
        },
        data: {
            title,
            description,
            requirements,
            benefits,
            location,
            jobType: jobType,
            salaryMin,
            salaryMax,
            skills,
            industryId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/employer/jobs");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/jobs");
    return {
        success: true
    };
}
async function getAllJobsForAdmin() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.findMany({
        include: {
            company: {
                select: {
                    name: true
                }
            },
            _count: {
                select: {
                    applications: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    });
}
async function getIndustries() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].industry.findMany({
        orderBy: {
            name: "asc"
        }
    });
}
async function getAllIndustries() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].industry.findMany({
        orderBy: {
            name: "asc"
        }
    });
}
async function getJobLocations() {
    const jobs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.findMany({
        where: {
            status: "ACTIVE"
        },
        select: {
            location: true
        },
        distinct: [
            "location"
        ]
    });
    return jobs.map((j)=>j.location).filter(Boolean).sort();
}
async function getJobFilters() {
    const [industries, locations] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].industry.findMany({
            orderBy: {
                name: "asc"
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.findMany({
            where: {
                status: "ACTIVE"
            },
            select: {
                location: true
            },
            distinct: [
                "location"
            ]
        }).then((jobs)=>jobs.map((j)=>j.location).filter(Boolean).sort())
    ]);
    return {
        industries,
        locations,
        jobTypes: [
            "FULL_TIME",
            "PART_TIME",
            "REMOTE",
            "INTERNSHIP",
            "CONTRACT"
        ],
        experienceLevels: [
            "Entry",
            "Junior",
            "Mid-Level",
            "Senior",
            "Manager"
        ],
        salaryRanges: [
            {
                value: "0-5000000",
                label: "Dưới 5 triệu"
            },
            {
                value: "5000000-10000000",
                label: "5 - 10 triệu"
            },
            {
                value: "10000000-20000000",
                label: "10 - 20 triệu"
            },
            {
                value: "20000000-30000000",
                label: "20 - 30 triệu"
            },
            {
                value: "30000000-50000000",
                label: "30 - 50 triệu"
            },
            {
                value: "50000000-999999999",
                label: "Trên 50 triệu"
            }
        ]
    };
}
async function saveJob(jobId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Vui lòng đăng nhập để lưu việc làm"
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].savedJob.create({
            data: {
                userId: session.user.id,
                jobId
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/jobs");
        return {
            success: true
        };
    } catch (e) {
        return {
            error: "Việc làm này đã được lưu trước đó"
        };
    }
}
async function unsaveJob(jobId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return {
            error: "Vui lòng đăng nhập"
        };
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].savedJob.deleteMany({
        where: {
            userId: session.user.id,
            jobId
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/jobs");
    return {
        success: true
    };
}
async function getSavedJobs() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) return [];
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].savedJob.findMany({
        where: {
            userId: session.user.id
        },
        include: {
            job: {
                include: {
                    company: {
                        select: {
                            name: true,
                            logo: true,
                            slug: true,
                            verified: true
                        }
                    }
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    });
}
async function getSavedJobIds() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) return [];
    const saved = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].savedJob.findMany({
        where: {
            userId: session.user.id
        },
        select: {
            jobId: true
        }
    });
    return saved.map((s)=>s.jobId);
}
async function isJobSaved(jobId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) return false;
    const saved = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].savedJob.findUnique({
        where: {
            userId_jobId: {
                userId: session.user.id,
                jobId
            }
        }
    });
    return !!saved;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getJobs,
    getJobBySlug,
    getJobById,
    createJob,
    updateJobStatus,
    getEmployerJobs,
    deleteJob,
    updateJob,
    getAllJobsForAdmin,
    getIndustries,
    getAllIndustries,
    getJobLocations,
    getJobFilters,
    saveJob,
    unsaveJob,
    getSavedJobs,
    getSavedJobIds,
    isJobSaved
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getJobs, "40c7dd443a340e62bc3691c22671451c4f35a94697", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getJobBySlug, "4098c9e81be5fcaaa602abcfd4834700a2970ffbea", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getJobById, "4099e4737f909665d78f0e0807e6ff8b1705fee95b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createJob, "40dc614e97b330026d966988413fca692d8852a426", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateJobStatus, "6002477e38c017ee90de72bc3bc93d48b09b18629d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployerJobs, "0058643d0f29418568c8238ea5a57c7771456597d1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteJob, "409873f3b6c306239b1795e77009c479d8815fc51f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateJob, "605a75f377383c32584961671679d66f6a5b516abc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllJobsForAdmin, "00bbed9864cd7c08ed300bc4c2a9e24657e5376aa9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getIndustries, "00cb9cede009da617c31e137e69dc0fd966ea96c0d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllIndustries, "00a70cf1fec7b617f646ec35d545707736f811df1b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getJobLocations, "00eae5274380d25b61b6402c08c8cb8b165107724b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getJobFilters, "0093aa74813cb000553169de8dc72cb31dcabdeb89", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveJob, "4074008fc079c221c63f168f8c403e5a556b09450a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(unsaveJob, "4016bfa22123dad3d3aaeee262b4ebf7358de34cb8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSavedJobs, "00224f11441e675c5b3522a3fd480060e4f366fa76", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSavedJobIds, "00a80d882e5497d7436a7dc0616e0c1ddb2994413b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(isJobSaved, "4075cdaad048ff9d0b78527b798678780daff1d456", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/actions/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"005c26bb90fcabb33e6171a1743f7c7fab53ede09f":"logoutUser","409a62aca4bb98714c861e5949aaccf1ff6b692454":"registerUser","40c4de21e7f05d91b8f201987744918924b3d6f2eb":"loginUser"},"",""] */ __turbopack_context__.s([
    "loginUser",
    ()=>loginUser,
    "logoutUser",
    ()=>logoutUser,
    "registerUser",
    ()=>registerUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function registerUser(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    const role = formData.get("role");
    if (!email || !password || !name || !role) {
        return {
            error: "Vui lòng điền đầy đủ thông tin"
        };
    }
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
        where: {
            email
        }
    });
    if (existing) return {
        error: "Email đã được sử dụng"
    };
    const passwordHash = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(password, 12);
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.create({
        data: {
            email,
            password: passwordHash,
            name,
            role
        }
    });
    // Create profile
    if (role === "CANDIDATE") {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].candidateProfile.create({
            data: {
                userId: user.id
            }
        });
    } else if (role === "EMPLOYER") {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].employerProfile.create({
            data: {
                userId: user.id
            }
        });
    }
    return {
        success: true
    };
}
async function loginUser(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signIn"])("credentials", {
            email,
            password,
            redirect: false
        });
        return {
            success: true
        };
    } catch  {
        return {
            error: "Email hoặc mật khẩu không đúng"
        };
    }
}
async function logoutUser() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    registerUser,
    loginUser,
    logoutUser
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(registerUser, "409a62aca4bb98714c861e5949aaccf1ff6b692454", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(loginUser, "40c4de21e7f05d91b8f201987744918924b3d6f2eb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logoutUser, "005c26bb90fcabb33e6171a1743f7c7fab53ede09f", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/employer/jobs/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/jobs.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/jobs.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/auth.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/employer/jobs/new/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/jobs.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "005c26bb90fcabb33e6171a1743f7c7fab53ede09f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logoutUser"],
    "40dc614e97b330026d966988413fca692d8852a426",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createJob"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$jobs$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/employer/jobs/new/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/jobs.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/jobs.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/auth.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$jobs$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$employer$2f$jobs$2f$new$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9698332e._.js.map