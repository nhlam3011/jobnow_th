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
"[project]/app/actions/profile.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00a7702647c2d0c5c1a5f8ca41c50bf579188aa376":"getDashboardStats","00bf796ff6f92065bdfcfaf5c738b0371c161514a3":"getCandidateProfile","00c284496e66852b76ef1aa78b101e9f3f8abd5f8f":"getEmployerProfile","40105b66b4410c3cf0ff316a6148f851ca44c3b807":"upsertCompany","40a458d024dd3f0e60304eb6ca0a29c63e8369ce69":"updateCandidateProfile"},"",""] */ __turbopack_context__.s([
    "getCandidateProfile",
    ()=>getCandidateProfile,
    "getDashboardStats",
    ()=>getDashboardStats,
    "getEmployerProfile",
    ()=>getEmployerProfile,
    "updateCandidateProfile",
    ()=>updateCandidateProfile,
    "upsertCompany",
    ()=>upsertCompany
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
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
async function getCandidateProfile() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].candidateProfile.findUnique({
        where: {
            userId: session.user.id
        }
    });
}
async function updateCandidateProfile(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) return {
        error: "Chưa đăng nhập"
    };
    const skillsRaw = formData.get("skills");
    const skills = skillsRaw ? skillsRaw.split(",").map((s)=>s.trim()).filter(Boolean) : [];
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].candidateProfile.upsert({
        where: {
            userId: session.user.id
        },
        update: {
            phone: formData.get("phone"),
            location: formData.get("location"),
            bio: formData.get("bio"),
            yearsExp: parseInt(formData.get("yearsExp")) || 0,
            desiredSalary: parseInt(formData.get("desiredSalary")) || null,
            desiredJobType: formData.get("desiredJobType"),
            skills
        },
        create: {
            userId: session.user.id,
            phone: formData.get("phone"),
            location: formData.get("location"),
            bio: formData.get("bio"),
            yearsExp: parseInt(formData.get("yearsExp")) || 0,
            desiredSalary: parseInt(formData.get("desiredSalary")) || null,
            desiredJobType: formData.get("desiredJobType"),
            skills
        }
    });
    // Update user name
    const name = formData.get("name");
    if (name) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.update({
            where: {
                id: session.user.id
            },
            data: {
                name
            }
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/candidate/profile");
    return {
        success: true
    };
}
async function getEmployerProfile() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].employerProfile.findUnique({
        where: {
            userId: session.user.id
        },
        include: {
            company: true
        }
    });
}
async function upsertCompany(formData) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user || session.user.role !== "EMPLOYER") return {
        error: "Không có quyền"
    };
    const name = formData.get("name");
    const slug = name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    const position = formData.get("position");
    const employer = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].employerProfile.findUnique({
        where: {
            userId: session.user.id
        }
    });
    let companyId = employer?.companyId;
    if (companyId) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company.update({
            where: {
                id: companyId
            },
            data: {
                name,
                website: formData.get("website"),
                description: formData.get("description"),
                industry: formData.get("industry"),
                size: formData.get("size"),
                location: formData.get("location")
            }
        });
        // Update position
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].employerProfile.update({
            where: {
                userId: session.user.id
            },
            data: {
                position
            }
        });
    } else {
        const company = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company.create({
            data: {
                name,
                slug: slug + "-" + Date.now(),
                website: formData.get("website"),
                description: formData.get("description"),
                industry: formData.get("industry"),
                size: formData.get("size"),
                location: formData.get("location")
            }
        });
        companyId = company.id;
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].employerProfile.update({
            where: {
                userId: session.user.id
            },
            data: {
                companyId,
                position
            }
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/employer/company");
    return {
        success: true
    };
}
async function getDashboardStats() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
    if (session.user.role === "CANDIDATE") {
        const [applications, profile, jobs] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.count({
                where: {
                    candidateId: session.user.id
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].candidateProfile.findUnique({
                where: {
                    userId: session.user.id
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.count({
                where: {
                    status: "ACTIVE"
                }
            })
        ]);
        return {
            applications,
            profileComplete: !!profile?.bio,
            totalJobs: jobs
        };
    }
    if (session.user.role === "EMPLOYER") {
        const employer = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].employerProfile.findUnique({
            where: {
                userId: session.user.id
            }
        });
        if (!employer?.companyId) return {
            jobs: 0,
            applicants: 0,
            activeJobs: 0
        };
        const [jobs, activeJobs, applicants] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.count({
                where: {
                    companyId: employer.companyId
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.count({
                where: {
                    companyId: employer.companyId,
                    status: "ACTIVE"
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.count({
                where: {
                    job: {
                        companyId: employer.companyId
                    }
                }
            })
        ]);
        return {
            jobs,
            activeJobs,
            applicants
        };
    }
    if (session.user.role === "ADMIN") {
        const [users, jobs, applications, pendingJobs] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.count(),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.count(),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.count(),
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.count({
                where: {
                    status: "PENDING"
                }
            })
        ]);
        return {
            users,
            jobs,
            applications,
            pendingJobs
        };
    }
    return {};
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCandidateProfile,
    updateCandidateProfile,
    getEmployerProfile,
    upsertCompany,
    getDashboardStats
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCandidateProfile, "00bf796ff6f92065bdfcfaf5c738b0371c161514a3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCandidateProfile, "40a458d024dd3f0e60304eb6ca0a29c63e8369ce69", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployerProfile, "00c284496e66852b76ef1aa78b101e9f3f8abd5f8f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(upsertCompany, "40105b66b4410c3cf0ff316a6148f851ca44c3b807", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDashboardStats, "00a7702647c2d0c5c1a5f8ca41c50bf579188aa376", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/actions/applications.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00b68804122cfb97f20372940d6d36c61bec4fa75d":"getMyApplications","00ff317dd8499164d6e8a1cf3bc33358e110e2b377":"getMyNotifications","4093774672f8e2b1e0485d14df85c42ab02fae6f23":"markNotificationRead","40f6882b09a07aaf21612dfcf29c39ccb05c78f828":"getJobApplicants","60d08cc6520f641a25d6125c20fe5bf708c7fc4360":"applyToJob","7082d357b0fb44409145e6e71d33222f098ac8ddcd":"updateApplicationStatus"},"",""] */ __turbopack_context__.s([
    "applyToJob",
    ()=>applyToJob,
    "getJobApplicants",
    ()=>getJobApplicants,
    "getMyApplications",
    ()=>getMyApplications,
    "getMyNotifications",
    ()=>getMyNotifications,
    "markNotificationRead",
    ()=>markNotificationRead,
    "updateApplicationStatus",
    ()=>updateApplicationStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
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
async function applyToJob(jobId, coverLetter) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user || session.user.role !== "CANDIDATE") {
        return {
            error: "Bạn cần đăng nhập với tư cách Ứng viên"
        };
    }
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.findUnique({
        where: {
            jobId_candidateId: {
                jobId,
                candidateId: session.user.id
            }
        }
    });
    if (existing) return {
        error: "Bạn đã ứng tuyển vị trí này rồi"
    };
    const application = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.create({
        data: {
            jobId,
            candidateId: session.user.id,
            coverLetter,
            status: "PENDING"
        },
        include: {
            job: {
                select: {
                    postedById: true,
                    title: true
                }
            }
        }
    });
    // Create notification for employer
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].notification.create({
            data: {
                userId: application.job.postedById,
                type: "NEW_APPLICATION",
                title: "Có ứng viên mới",
                message: `${session.user.name} vừa ứng tuyển vào "${application.job.title}"`,
                link: `/employer/jobs`
            }
        });
    } catch (_) {
    // ignore notification error
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/candidate/applications");
    return {
        success: true
    };
}
async function getMyApplications() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.findMany({
        where: {
            candidateId: session.user.id
        },
        include: {
            job: {
                include: {
                    company: {
                        select: {
                            name: true,
                            logo: true
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
async function updateApplicationStatus(applicationId, status, notes) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user || session.user.role !== "EMPLOYER") {
        return {
            error: "Không có quyền"
        };
    }
    const application = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.update({
        where: {
            id: applicationId
        },
        data: {
            status: status,
            notes
        },
        include: {
            job: {
                select: {
                    title: true
                }
            }
        }
    });
    // Notify candidate
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].notification.create({
        data: {
            userId: application.candidateId,
            type: "APPLICATION_STATUS",
            title: "Cập nhật đơn ứng tuyển",
            message: `Đơn ứng tuyển "${application.job.title}" của bạn đã được cập nhật thành: ${status}`,
            link: "/candidate/applications"
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/employer/jobs");
    return {
        success: true
    };
}
async function getJobApplicants(jobId) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user || session.user.role !== "EMPLOYER") (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].application.findMany({
        where: {
            jobId
        },
        include: {
            candidate: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    image: true,
                    candidateProfile: true
                }
            }
        },
        orderBy: {
            createdAt: "desc"
        }
    });
}
async function getMyNotifications() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) return [];
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].notification.findMany({
        where: {
            userId: session.user.id
        },
        orderBy: {
            createdAt: "desc"
        },
        take: 20
    });
}
async function markNotificationRead(id) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].notification.update({
        where: {
            id
        },
        data: {
            isRead: true
        }
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    applyToJob,
    getMyApplications,
    updateApplicationStatus,
    getJobApplicants,
    getMyNotifications,
    markNotificationRead
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(applyToJob, "60d08cc6520f641a25d6125c20fe5bf708c7fc4360", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMyApplications, "00b68804122cfb97f20372940d6d36c61bec4fa75d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateApplicationStatus, "7082d357b0fb44409145e6e71d33222f098ac8ddcd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getJobApplicants, "40f6882b09a07aaf21612dfcf29c39ccb05c78f828", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getMyNotifications, "00ff317dd8499164d6e8a1cf3bc33358e110e2b377", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(markNotificationRead, "4093774672f8e2b1e0485d14df85c42ab02fae6f23", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/actions/jobs.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00224f11441e675c5b3522a3fd480060e4f366fa76":"getSavedJobs","0058643d0f29418568c8238ea5a57c7771456597d1":"getEmployerJobs","0093aa74813cb000553169de8dc72cb31dcabdeb89":"getJobFilters","00bbed9864cd7c08ed300bc4c2a9e24657e5376aa9":"getAllJobsForAdmin","00cb9cede009da617c31e137e69dc0fd966ea96c0d":"getIndustries","00eae5274380d25b61b6402c08c8cb8b165107724b":"getJobLocations","4016bfa22123dad3d3aaeee262b4ebf7358de34cb8":"unsaveJob","4074008fc079c221c63f168f8c403e5a556b09450a":"saveJob","4075cdaad048ff9d0b78527b798678780daff1d456":"isJobSaved","409873f3b6c306239b1795e77009c479d8815fc51f":"deleteJob","4098c9e81be5fcaaa602abcfd4834700a2970ffbea":"getJobBySlug","4099e4737f909665d78f0e0807e6ff8b1705fee95b":"getJobById","40c7dd443a340e62bc3691c22671451c4f35a94697":"getJobs","40dc614e97b330026d966988413fca692d8852a426":"createJob","6002477e38c017ee90de72bc3bc93d48b09b18629d":"updateJobStatus"},"",""] */ __turbopack_context__.s([
    "createJob",
    ()=>createJob,
    "deleteJob",
    ()=>deleteJob,
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
    "getSavedJobs",
    ()=>getSavedJobs,
    "isJobSaved",
    ()=>isJobSaved,
    "saveJob",
    ()=>saveJob,
    "unsaveJob",
    ()=>unsaveJob,
    "updateJobStatus",
    ()=>updateJobStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
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
    if (params?.q) {
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
                    slug: true
                }
            }
        },
        orderBy: {
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
            company: true,
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
            company: true,
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].job.update({
        where: {
            id: jobId
        },
        data: {
            status: status
        }
    });
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
                            slug: true
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
    getAllJobsForAdmin,
    getIndustries,
    getJobLocations,
    getJobFilters,
    saveJob,
    unsaveJob,
    getSavedJobs,
    isJobSaved
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getJobs, "40c7dd443a340e62bc3691c22671451c4f35a94697", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getJobBySlug, "4098c9e81be5fcaaa602abcfd4834700a2970ffbea", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getJobById, "4099e4737f909665d78f0e0807e6ff8b1705fee95b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createJob, "40dc614e97b330026d966988413fca692d8852a426", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateJobStatus, "6002477e38c017ee90de72bc3bc93d48b09b18629d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getEmployerJobs, "0058643d0f29418568c8238ea5a57c7771456597d1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteJob, "409873f3b6c306239b1795e77009c479d8815fc51f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllJobsForAdmin, "00bbed9864cd7c08ed300bc4c2a9e24657e5376aa9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getIndustries, "00cb9cede009da617c31e137e69dc0fd966ea96c0d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getJobLocations, "00eae5274380d25b61b6402c08c8cb8b165107724b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getJobFilters, "0093aa74813cb000553169de8dc72cb31dcabdeb89", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveJob, "4074008fc079c221c63f168f8c403e5a556b09450a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(unsaveJob, "4016bfa22123dad3d3aaeee262b4ebf7358de34cb8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSavedJobs, "00224f11441e675c5b3522a3fd480060e4f366fa76", null);
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
"[project]/.next-internal/server/app/candidate/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/profile.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/applications.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/actions/jobs.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/profile.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$applications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/applications.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/jobs.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/auth.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$applications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$applications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/candidate/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/profile.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/applications.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/actions/jobs.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "00224f11441e675c5b3522a3fd480060e4f366fa76",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSavedJobs"],
    "0058643d0f29418568c8238ea5a57c7771456597d1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployerJobs"],
    "005c26bb90fcabb33e6171a1743f7c7fab53ede09f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logoutUser"],
    "0093aa74813cb000553169de8dc72cb31dcabdeb89",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getJobFilters"],
    "00a7702647c2d0c5c1a5f8ca41c50bf579188aa376",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDashboardStats"],
    "00b68804122cfb97f20372940d6d36c61bec4fa75d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$applications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMyApplications"],
    "00bbed9864cd7c08ed300bc4c2a9e24657e5376aa9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllJobsForAdmin"],
    "00bf796ff6f92065bdfcfaf5c738b0371c161514a3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCandidateProfile"],
    "00c284496e66852b76ef1aa78b101e9f3f8abd5f8f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEmployerProfile"],
    "00cb9cede009da617c31e137e69dc0fd966ea96c0d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIndustries"],
    "00eae5274380d25b61b6402c08c8cb8b165107724b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getJobLocations"],
    "00ff317dd8499164d6e8a1cf3bc33358e110e2b377",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$applications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMyNotifications"],
    "40105b66b4410c3cf0ff316a6148f851ca44c3b807",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertCompany"],
    "4016bfa22123dad3d3aaeee262b4ebf7358de34cb8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsaveJob"],
    "4074008fc079c221c63f168f8c403e5a556b09450a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveJob"],
    "4075cdaad048ff9d0b78527b798678780daff1d456",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isJobSaved"],
    "4093774672f8e2b1e0485d14df85c42ab02fae6f23",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$applications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markNotificationRead"],
    "409873f3b6c306239b1795e77009c479d8815fc51f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteJob"],
    "4098c9e81be5fcaaa602abcfd4834700a2970ffbea",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getJobBySlug"],
    "4099e4737f909665d78f0e0807e6ff8b1705fee95b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getJobById"],
    "40a458d024dd3f0e60304eb6ca0a29c63e8369ce69",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCandidateProfile"],
    "40c7dd443a340e62bc3691c22671451c4f35a94697",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getJobs"],
    "40dc614e97b330026d966988413fca692d8852a426",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createJob"],
    "40f6882b09a07aaf21612dfcf29c39ccb05c78f828",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$applications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getJobApplicants"],
    "6002477e38c017ee90de72bc3bc93d48b09b18629d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateJobStatus"],
    "60d08cc6520f641a25d6125c20fe5bf708c7fc4360",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$applications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applyToJob"],
    "7082d357b0fb44409145e6e71d33222f098ac8ddcd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$applications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateApplicationStatus"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$candidate$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$applications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/candidate/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/profile.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/actions/applications.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/app/actions/jobs.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/app/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/profile.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$applications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/applications.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/jobs.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/auth.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$candidate$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$applications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$applications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$candidate$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$applications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$applications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$jobs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__75cf66a3._.js.map