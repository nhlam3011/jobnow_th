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
"[project]/app/api/ai/suggestions/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
// Common job title patterns for generating keyword suggestions (pre-computed for speed)
const JOB_TITLE_PREFIXES = [
    "nhân viên",
    "chuyên viên",
    "trưởng phòng",
    "phó trưởng phòng",
    "trưởng nhóm",
    "senior",
    "junior",
    "lead",
    "head",
    "director",
    "manager",
    "executive",
    "intern",
    "thực tập sinh",
    "assistant",
    "coordinator",
    "specialist",
    "supervisor"
];
const JOB_TITLE_SUFFIXES = [
    "online",
    "digital",
    "content",
    "social media",
    "email",
    "seo",
    "brand",
    "mobile",
    "web",
    "frontend",
    "backend",
    "fullstack",
    "devops",
    "data",
    "business",
    "sales",
    "marketing",
    "it",
    "hr",
    "finance",
    "accounting",
    "customer service",
    "operation",
    "project",
    "product",
    "design",
    "engineer"
];
// Common related keywords mapping (pre-computed for speed)
const RELATED_KEYWORDS_MAP = {
    "dev": [
        "frontend developer",
        "backend developer",
        "fullstack developer",
        "mobile developer",
        "web developer",
        "react developer",
        "nodejs developer"
    ],
    "developer": [
        "frontend developer",
        "backend developer",
        "fullstack developer",
        "mobile developer",
        "web developer",
        "react developer",
        "vue developer"
    ],
    "design": [
        "ui designer",
        "ux designer",
        "graphic designer",
        "web designer",
        "product designer",
        "motion designer",
        "visual designer"
    ],
    "market": [
        "digital marketing",
        "content marketing",
        "social media marketing",
        "email marketing",
        "seo marketing",
        "marketing online"
    ],
    "marketing": [
        "digital marketing",
        "content marketing",
        "social media marketing",
        "email marketing",
        "seo marketing",
        "brand marketing"
    ],
    "sale": [
        "sales executive",
        "sales manager",
        "sales representative",
        "business development",
        "account executive",
        "sales coordinator"
    ],
    "sales": [
        "sales executive",
        "sales manager",
        "sales representative",
        "business development",
        "account executive",
        "sales coordinator"
    ],
    "it": [
        "it support",
        "it administrator",
        "it manager",
        "it security",
        "it project",
        "system administrator"
    ],
    "hr": [
        "hr manager",
        "hr specialist",
        "hr coordinator",
        "recruiter",
        "nhân sự",
        "tuyển dụng"
    ],
    "account": [
        "kế toán",
        "tài chính",
        "accountant",
        "finance manager",
        "accounting staff"
    ],
    "ke toán": [
        "kế toán tổng hợp",
        "kế toán thanh toán",
        "kế toán kho",
        "kế toán công nợ"
    ],
    "tai chính": [
        "tài chính doanh nghiệp",
        "tài chính kế toán",
        "finance manager",
        "financial analyst"
    ],
    "customer": [
        "customer service",
        "chăm sóc khách hàng",
        "customer support",
        "tư vấn",
        "sales"
    ],
    "project": [
        "project manager",
        "project coordinator",
        "quản lý dự án",
        "project executive"
    ],
    "product": [
        "product manager",
        "product owner",
        "quản lý sản phẩm",
        "product marketing"
    ],
    "content": [
        "content writer",
        "content marketing",
        "content creator",
        "copywriter",
        "biên tập viên"
    ],
    "data": [
        "data analyst",
        "data scientist",
        "data engineer",
        "business analyst",
        "phân tích dữ liệu"
    ],
    "operation": [
        "vận hành",
        "operation manager",
        "operations coordinator",
        "quản lý vận hành"
    ],
    "admin": [
        "admin staff",
        "nhân viên hành chính",
        "admin assistant",
        "hành chính văn phòng"
    ],
    "engineer": [
        "software engineer",
        "mechanical engineer",
        "electrical engineer",
        "civil engineer",
        "qa engineer"
    ],
    "manager": [
        "project manager",
        "product manager",
        "sales manager",
        "marketing manager",
        "hr manager",
        "finance manager"
    ]
};
async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get("q")?.toLowerCase().trim() || "";
        if (query.length < 2) {
            // Return popular searches when query is empty or too short
            const popularSearches = await getPopularSearches();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                suggestions: popularSearches
            });
        }
        const suggestions = [];
        // 1. Generate keyword suggestions (từ khoá gợi ý) - fast local computation
        const keywordSuggestions = generateKeywordSuggestionsFast(query);
        keywordSuggestions.forEach((keyword)=>{
            suggestions.push({
                type: "keyword_suggestion",
                value: keyword,
                label: keyword
            });
        });
        // 2. Generate related keywords (từ khoá liên quan) - fast local computation
        const relatedKeywords = generateRelatedKeywordsFast(query);
        relatedKeywords.forEach((keyword)=>{
            suggestions.push({
                type: "related_keyword",
                value: keyword,
                label: keyword
            });
        });
        // 3. Search for matching job titles from database (very fast with index)
        const jobs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].job.findMany({
            where: {
                status: "ACTIVE",
                title: {
                    contains: query,
                    mode: "insensitive"
                }
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
        });
        jobs.forEach((job)=>{
            suggestions.push({
                type: "job_title",
                value: job.title,
                label: job.title
            });
        });
        // 4. Search for matching skills from database (very fast with index)
        const skills = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].skill.findMany({
            where: {
                name: {
                    contains: query,
                    mode: "insensitive"
                }
            },
            select: {
                name: true
            },
            take: 5
        });
        skills.forEach((skill)=>{
            suggestions.push({
                type: "skill",
                value: skill.name,
                label: skill.name
            });
        });
        // 5. Search for matching industries from database (very fast with index)
        const industries = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].industry.findMany({
            where: {
                name: {
                    contains: query,
                    mode: "insensitive"
                }
            },
            select: {
                name: true
            },
            take: 3
        });
        industries.forEach((industry)=>{
            suggestions.push({
                type: "industry",
                value: industry.name,
                label: industry.name
            });
        });
        // Limit total suggestions
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            suggestions: suggestions.slice(0, 20)
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
// Fast keyword suggestions generation using pre-computed patterns
function generateKeywordSuggestionsFast(query) {
    const suggestions = [];
    // Add prefix + query (e.g., "senior" + "marketing" = "senior marketing")
    JOB_TITLE_PREFIXES.forEach((prefix)=>{
        suggestions.push(`${prefix} ${query}`);
    });
    // Add query + suffix (e.g., "marketing" + "online" = "marketing online")
    JOB_TITLE_SUFFIXES.forEach((suffix)=>{
        suggestions.push(`${query} ${suffix}`);
    });
    // Deduplicate and return
    return [
        ...new Set(suggestions)
    ].slice(0, 8);
}
// Fast related keywords generation using pre-computed mapping
function generateRelatedKeywordsFast(query) {
    const suggestions = [];
    const queryWords = query.split(/\s+/);
    // Check if any word in query matches our map keys
    for (const word of queryWords){
        if (RELATED_KEYWORDS_MAP[word]) {
            suggestions.push(...RELATED_KEYWORDS_MAP[word]);
        }
        // Also check for partial matches
        for (const [key, values] of Object.entries(RELATED_KEYWORDS_MAP)){
            if (word.includes(key) || key.includes(word)) {
                suggestions.push(...values);
            }
        }
    }
    // If no matches, generate common patterns
    if (suggestions.length === 0) {
        suggestions.push(`${query} manager`, `${query} specialist`, `${query} coordinator`, `content ${query}`, `digital ${query}`, `${query} assistant`, `${query} executive`, `${query} lead`);
    }
    return [
        ...new Set(suggestions)
    ].slice(0, 8);
}
// Get popular searches based on job view counts
async function getPopularSearches() {
    try {
        // Get most viewed job titles as popular searches
        const popularJobs = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].job.findMany({
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
        });
        const suggestions = [];
        popularJobs.forEach((job)=>{
            suggestions.push({
                type: "keyword_suggestion",
                value: job.title,
                label: job.title
            });
        });
        // Add popular industries
        const popularIndustries = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].industry.findMany({
            take: 3
        });
        popularIndustries.forEach((industry)=>{
            suggestions.push({
                type: "industry",
                value: industry.name,
                label: industry.name
            });
        });
        return suggestions.slice(0, 8);
    } catch (error) {
        console.error("Error getting popular searches:", error);
        return [];
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5017059c._.js.map