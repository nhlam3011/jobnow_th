(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SunIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SunIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/SunIcon.js [app-client] (ecmascript) <export default as SunIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MoonIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MoonIcon.js [app-client] (ecmascript) <export default as MoonIcon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThemeToggle() {
    _s();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        "aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            border: "1.5px solid var(--border)",
            background: "var(--bg-card)",
            color: "var(--text)",
            cursor: "pointer",
            transition: "all 180ms ease"
        },
        onMouseEnter: (e)=>{
            e.currentTarget.style.background = "var(--tag-bg)";
            e.currentTarget.style.borderColor = "var(--primary-light)";
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.background = "var(--bg-card)";
            e.currentTarget.style.borderColor = "var(--border)";
        },
        children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SunIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SunIcon$3e$__["SunIcon"], {
            style: {
                width: "20px",
                height: "20px"
            }
        }, void 0, false, {
            fileName: "[project]/app/components/ThemeToggle.tsx",
            lineNumber: 36,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MoonIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonIcon$3e$__["MoonIcon"], {
            style: {
                width: "20px",
                height: "20px"
            }
        }, void 0, false, {
            fileName: "[project]/app/components/ThemeToggle.tsx",
            lineNumber: 38,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ThemeToggle.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "Q4eAjrIZ0CuRuhycs6byifK2KBk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/components/Navbar.tsx'\n\nUnexpected token. Did you mean `{'}'}` or `&rbrace;`?");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: "var(--bg)",
            color: "#E0F2FE",
            marginTop: "auto"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-xl",
            style: {
                paddingTop: "3.5rem",
                paddingBottom: "3.5rem"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "3rem",
                        marginBottom: "3rem"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        marginBottom: "0.875rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "28",
                                            height: "28",
                                            viewBox: "0 0 32 32",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "32",
                                                    height: "32",
                                                    rx: "8",
                                                    fill: "var(--cta)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 21,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M8 22V14l8-6 8 6v8",
                                                    stroke: "#fff",
                                                    strokeWidth: "2",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 22,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "12",
                                                    y: "18",
                                                    width: "8",
                                                    height: "8",
                                                    rx: "1",
                                                    fill: "#fff"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 23,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 20,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontWeight: 800,
                                                fontSize: "1.2rem",
                                                color: "#fff"
                                            },
                                            children: [
                                                "Job",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "var(--cta)"
                                                    },
                                                    children: "Now"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 25,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 19,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "0.9rem",
                                        color: "#94A3B8",
                                        lineHeight: 1.7,
                                        maxWidth: "220px"
                                    },
                                    children: "Nền tảng tuyển dụng hàng đầu Việt Nam - Kết nối ứng viên với hàng ngàn công ty đa ngành nghề."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 29,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "0.75rem",
                                        marginTop: "1.25rem"
                                    },
                                    children: [
                                        {
                                            label: "Facebook",
                                            path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                                        },
                                        {
                                            label: "LinkedIn",
                                            path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                        }
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            "aria-label": s.label,
                                            style: {
                                                width: "36px",
                                                height: "36px",
                                                borderRadius: "8px",
                                                background: "rgba(255,255,255,0.08)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "background 180ms",
                                                cursor: "pointer"
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.background = "rgba(255,255,255,0.18)",
                                            onMouseLeave: (e)=>e.currentTarget.style.background = "rgba(255,255,255,0.08)",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                fill: "none",
                                                stroke: "#94A3B8",
                                                strokeWidth: "2",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: s.path
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 66,
                                                columnNumber: 37
                                            }, this)
                                        }, s.label, false, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 44,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 33,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 18,
                            columnNumber: 21
                        }, this),
                        [
                            {
                                title: "Ứng viên",
                                links: [
                                    {
                                        label: "Tìm việc làm",
                                        href: "/jobs"
                                    },
                                    {
                                        label: "Tải CV lên",
                                        href: "/candidate/resume"
                                    },
                                    {
                                        label: "Việc làm theo ngành",
                                        href: "/jobs"
                                    },
                                    {
                                        label: "Theo dõi ứng tuyển",
                                        href: "/candidate/applications"
                                    }
                                ]
                            },
                            {
                                title: "Nhà tuyển dụng",
                                links: [
                                    {
                                        label: "Đăng tin tuyển dụng",
                                        href: "/employer/jobs/new"
                                    },
                                    {
                                        label: "Tìm ứng viên",
                                        href: "/companies"
                                    },
                                    {
                                        label: "Quản lý tin",
                                        href: "/employer/jobs"
                                    },
                                    {
                                        label: "Trang thương hiệu",
                                        href: "/employer/company"
                                    }
                                ]
                            },
                            {
                                title: "Ngành nghề",
                                links: [
                                    {
                                        label: "Côngnghệ Thông tin",
                                        href: "/jobs?industry=cong-nghe-thong-tin"
                                    },
                                    {
                                        label: "Tài chính - Ngân hàng",
                                        href: "/jobs?industry=tai-chinh-ngan-hang"
                                    },
                                    {
                                        label: "Marketing - Truyền thông",
                                        href: "/jobs?industry=marketing-truyen-thong"
                                    },
                                    {
                                        label: "Du lịch - Khách sạn",
                                        href: "/jobs?industry=du-lich-khach-san"
                                    }
                                ]
                            },
                            {
                                title: "Công ty",
                                links: [
                                    {
                                        label: "Về chúng tôi",
                                        href: "#"
                                    },
                                    {
                                        label: "Liên hệ",
                                        href: "#"
                                    },
                                    {
                                        label: "Điều khoản sử dụng",
                                        href: "#"
                                    },
                                    {
                                        label: "Chính sách bảo mật",
                                        href: "#"
                                    }
                                ]
                            }
                        ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontSize: "0.8125rem",
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.08em",
                                            color: "var(--text-muted)",
                                            marginBottom: "1rem"
                                        },
                                        children: col.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 114,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: {
                                            listStyle: "none",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.625rem"
                                        },
                                        children: col.links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: l.href,
                                                    style: {
                                                        color: "#94A3B8",
                                                        textDecoration: "none",
                                                        fontSize: "0.9375rem",
                                                        transition: "color 180ms"
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.color = "#E0F2FE",
                                                    onMouseLeave: (e)=>e.currentTarget.style.color = "#94A3B8",
                                                    children: l.label
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 41
                                                }, this)
                                            }, l.label, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 128,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 126,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, col.title, true, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 113,
                                columnNumber: 25
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 9,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        paddingTop: "1.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "0.75rem"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "0.875rem",
                                color: "#64748B"
                            },
                            children: "© 2025 JobNow. Nền tảng tuyển dụng đa ngành nghề hàng đầu Việt Nam."
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 161,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "0.875rem",
                                color: "#64748B"
                            },
                            children: [
                                "Powered by",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "var(--cta)",
                                        fontWeight: 600
                                    },
                                    children: "Next.js + Prisma + PostgreSQL"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 166,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 164,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 150,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 7,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Footer.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SearchBar({ size = "lg", defaultAI = false }) {
    _s();
    const [keyword, setKeyword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [useAI, setUseAI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultAI);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSearch = async (e)=>{
        e.preventDefault();
        if (useAI && keyword) {
            setIsLoading(true);
            try {
                const response = await fetch("/api/ai/search", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        query: keyword,
                        limit: 20
                    })
                });
                const data = await response.json();
                if (data.success && data.jobs) {
                    const params = new URLSearchParams();
                    params.set("q", keyword);
                    params.set("ai", "true");
                    if (location) params.set("loc", location);
                    router.push(`/jobs?${params.toString()}`);
                } else {
                    const params = new URLSearchParams();
                    params.set("q", keyword);
                    if (location) params.set("loc", location);
                    router.push(`/jobs?${params.toString()}`);
                }
            } catch (error) {
                console.error("AI search failed:", error);
                const params = new URLSearchParams();
                params.set("q", keyword);
                if (location) params.set("loc", location);
                router.push(`/jobs?${params.toString()}`);
            } finally{
                setIsLoading(false);
            }
        } else {
            const params = new URLSearchParams();
            if (keyword) params.set("q", keyword);
            if (location) params.set("loc", location);
            router.push(`/jobs?${params.toString()}`);
        }
    };
    const isLg = size === "lg";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSearch,
        style: {
            display: "flex",
            gap: isLg ? "0" : "0.5rem",
            background: "var(--bg-card)",
            borderRadius: isLg ? "12px" : "8px",
            border: "2px solid var(--border)",
            boxShadow: "var(--shadow-md)",
            overflow: isLg ? "hidden" : "visible",
            flexWrap: isLg ? undefined : "wrap",
            transition: "border-color 200ms",
            flexDirection: isLg ? "row" : "column"
        },
        onFocus: (e)=>e.currentTarget.style.borderColor = "var(--primary)",
        onBlur: (e)=>e.currentTarget.style.borderColor = "var(--border)",
        className: "jsx-f70379b68a78a819",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    flex: 2,
                    padding: isLg ? "0 1.25rem" : "0.75rem",
                    minWidth: 0
                },
                className: "jsx-f70379b68a78a819",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "18",
                        height: "18",
                        fill: "none",
                        stroke: "var(--primary)",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        style: {
                            flexShrink: 0,
                            marginRight: "0.5rem"
                        },
                        className: "jsx-f70379b68a78a819",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "11",
                                cy: "11",
                                r: "8",
                                className: "jsx-f70379b68a78a819"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                d: "M21 21l-4.35-4.35",
                                className: "jsx-f70379b68a78a819"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Tên công việc, kỹ năng, công ty...",
                        value: keyword,
                        onChange: (e)=>setKeyword(e.target.value),
                        disabled: isLoading,
                        style: {
                            border: "none",
                            outline: "none",
                            background: "transparent",
                            fontFamily: "inherit",
                            fontSize: isLg ? "0.9375rem" : "0.875rem",
                            color: "var(--text)",
                            width: "100%",
                            padding: isLg ? "1rem 0" : "0.5rem 0"
                        },
                        className: "jsx-f70379b68a78a819"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 93,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SearchBar.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this),
            isLg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "1.5px",
                    background: "var(--border)",
                    margin: "0.75rem 0"
                },
                className: "jsx-f70379b68a78a819"
            }, void 0, false, {
                fileName: "[project]/app/components/SearchBar.tsx",
                lineNumber: 114,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    flex: 1,
                    padding: isLg ? "0 1.25rem" : "0.75rem",
                    minWidth: 0
                },
                className: "jsx-f70379b68a78a819",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "18",
                        height: "18",
                        fill: "none",
                        stroke: "var(--primary)",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        style: {
                            flexShrink: 0,
                            marginRight: "0.5rem"
                        },
                        className: "jsx-f70379b68a78a819",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z",
                                className: "jsx-f70379b68a78a819"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
                                className: "jsx-f70379b68a78a819"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 133,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 119,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Địa điểm: Hà Nội, TP.HCM...",
                        value: location,
                        onChange: (e)=>setLocation(e.target.value),
                        disabled: isLoading,
                        style: {
                            border: "none",
                            outline: "none",
                            background: "transparent",
                            fontFamily: "inherit",
                            fontSize: isLg ? "0.9375rem" : "0.875rem",
                            color: "var(--text)",
                            width: "100%",
                            padding: isLg ? "1rem 0" : "0.5rem 0"
                        },
                        className: "jsx-f70379b68a78a819"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SearchBar.tsx",
                lineNumber: 118,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: isLg ? "0 1rem" : "0.5rem",
                    cursor: "pointer",
                    userSelect: "none",
                    borderLeft: isLg ? "1px solid var(--border)" : "none"
                },
                title: "Tìm kiếm AI thông minh",
                className: "jsx-f70379b68a78a819",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        checked: useAI,
                        onChange: (e)=>setUseAI(e.target.checked),
                        style: {
                            display: "none"
                        },
                        className: "jsx-f70379b68a78a819"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 167,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "36px",
                            height: "20px",
                            borderRadius: "10px",
                            background: useAI ? "var(--primary)" : "var(--border)",
                            position: "relative",
                            transition: "background 200ms"
                        },
                        className: "jsx-f70379b68a78a819",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "16px",
                                height: "16px",
                                borderRadius: "50%",
                                background: "#fff",
                                position: "absolute",
                                top: "2px",
                                left: useAI ? "18px" : "2px",
                                transition: "left 200ms"
                            },
                            className: "jsx-f70379b68a78a819"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SearchBar.tsx",
                            lineNumber: 183,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 173,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "16",
                        height: "16",
                        fill: "none",
                        stroke: useAI ? "var(--primary)" : "var(--text-muted)",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        className: "jsx-f70379b68a78a819",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
                                className: "jsx-f70379b68a78a819"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 204,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 6v6l4 2",
                                className: "jsx-f70379b68a78a819"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 205,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 196,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "0.8125rem",
                            color: useAI ? "var(--primary)" : "var(--text-muted)"
                        },
                        className: "jsx-f70379b68a78a819",
                        children: "AI"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 207,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SearchBar.tsx",
                lineNumber: 155,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: isLoading,
                style: {
                    borderRadius: isLg ? "0 10px 10px 0" : "8px",
                    padding: isLg ? "1rem 2rem" : "0.75rem 1.25rem",
                    fontSize: "0.9375rem",
                    margin: isLg ? "0" : "0.5rem 0",
                    opacity: isLoading ? 0.7 : 1,
                    cursor: isLoading ? "wait" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem"
                },
                className: "jsx-f70379b68a78a819" + " " + "btn-primary",
                children: [
                    isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "18",
                        height: "18",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        style: {
                            animation: "spin 1s linear infinite"
                        },
                        className: "jsx-f70379b68a78a819",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83",
                            className: "jsx-f70379b68a78a819"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SearchBar.tsx",
                            lineNumber: 231,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 230,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "18",
                        height: "18",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        className: "jsx-f70379b68a78a819",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "11",
                                cy: "11",
                                r: "8",
                                className: "jsx-f70379b68a78a819"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 235,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                d: "M21 21l-4.35-4.35",
                                className: "jsx-f70379b68a78a819"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 236,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 234,
                        columnNumber: 21
                    }, this),
                    isLoading ? "Đang tìm..." : "Tìm kiếm"
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SearchBar.tsx",
                lineNumber: 213,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "f70379b68a78a819",
                children: "@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SearchBar.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, this);
}
_s(SearchBar, "OEAW5TvHuyxCxOqPW2FDeWY7QFQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:50de64 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveJob",
    ()=>$$RSC_SERVER_ACTION_12
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4074008fc079c221c63f168f8c403e5a556b09450a":"saveJob"},"app/actions/jobs.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4074008fc079c221c63f168f8c403e5a556b09450a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveJob");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vam9icy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgc2VtYW50aWNKb2JTZWFyY2ggfSBmcm9tIFwiQC9saWIvYWlcIjtcblxuZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGV4dFxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvW15hLXowLTlcXHMtXS9nLCBcIlwiKVxuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIi1cIilcbiAgICAgICAgLnJlcGxhY2UoLy0rL2csIFwiLVwiKVxuICAgICAgICAudHJpbSgpICsgXCItXCIgKyBEYXRlLm5vdygpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Sm9icyhwYXJhbXM/OiB7XG4gICAgcT86IHN0cmluZztcbiAgICBsb2M/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBzdGF0dXM/OiBzdHJpbmc7XG4gICAgaW5kdXN0cnlJZD86IHN0cmluZztcbiAgICBzYWxhcnk/OiBzdHJpbmc7XG4gICAgdXNlQUk/OiBib29sZWFuO1xufSkge1xuICAgIGNvbnN0IHdoZXJlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuXG4gICAgaWYgKHBhcmFtcz8uc3RhdHVzKSB7XG4gICAgICAgIHdoZXJlLnN0YXR1cyA9IHBhcmFtcy5zdGF0dXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hlcmUuc3RhdHVzID0gXCJBQ1RJVkVcIjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zPy5xICYmIHBhcmFtcy51c2VBSSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWlKb2JzID0gYXdhaXQgc2VtYW50aWNKb2JTZWFyY2gocGFyYW1zLnEsIDUwKTtcbiAgICAgICAgICAgIGlmIChhaUpvYnMgJiYgQXJyYXkuaXNBcnJheShhaUpvYnMpICYmIGFpSm9icy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFpSm9icy5tYXAoKGpvYjogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBpZDogam9iLmlkLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogam9iLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzbHVnOiBqb2Iuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGpvYi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZW1lbnRzOiBqb2IucmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBiZW5lZml0czogam9iLmJlbmVmaXRzLFxuICAgICAgICAgICAgICAgICAgICBzYWxhcnlNaW46IGpvYi5zYWxhcnlNaW4sXG4gICAgICAgICAgICAgICAgICAgIHNhbGFyeU1heDogam9iLnNhbGFyeU1heCxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGpvYi5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgam9iVHlwZTogam9iLmpvYlR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHNraWxsczogam9iLnNraWxscyxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBqb2IuY3JlYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICBjb21wYW55OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBqb2IuY29tcGFueU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBqb2IuY29tcGFueUxvZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiBqb2IuY29tcGFueVNsdWcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNpbWlsYXJpdHk6IGpvYi5zaW1pbGFyaXR5LFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFJIHNlYXJjaCBmYWlsZWQsIGZhbGxpbmcgYmFjayB0byB0ZXh0IHNlYXJjaDpcIiwgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zPy5xICYmICFwYXJhbXMudXNlQUkpIHtcbiAgICAgICAgd2hlcmUuT1IgPSBbXG4gICAgICAgICAgICB7IHRpdGxlOiB7IGNvbnRhaW5zOiBwYXJhbXMucSwgbW9kZTogXCJpbnNlbnNpdGl2ZVwiIH0gfSxcbiAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IHsgY29udGFpbnM6IHBhcmFtcy5xLCBtb2RlOiBcImluc2Vuc2l0aXZlXCIgfSB9LFxuICAgICAgICAgICAgeyBza2lsbHM6IHsgaGFzU29tZTogW3BhcmFtcy5xXSB9IH0sXG4gICAgICAgIF07XG4gICAgfVxuICAgIGlmIChwYXJhbXM/LmxvYykge1xuICAgICAgICB3aGVyZS5sb2NhdGlvbiA9IHsgY29udGFpbnM6IHBhcmFtcy5sb2MsIG1vZGU6IFwiaW5zZW5zaXRpdmVcIiB9O1xuICAgIH1cbiAgICBpZiAocGFyYW1zPy50eXBlKSB3aGVyZS5qb2JUeXBlID0gcGFyYW1zLnR5cGU7XG4gICAgaWYgKHBhcmFtcz8uaW5kdXN0cnlJZCkgd2hlcmUuaW5kdXN0cnlJZCA9IHBhcmFtcy5pbmR1c3RyeUlkO1xuXG4gICAgLy8gU2FsYXJ5IHJhbmdlIGZpbHRlclxuICAgIGlmIChwYXJhbXM/LnNhbGFyeSkge1xuICAgICAgICBjb25zdCBbbWluU2FsYXJ5LCBtYXhTYWxhcnldID0gcGFyYW1zLnNhbGFyeS5zcGxpdChcIi1cIikubWFwKE51bWJlcik7XG4gICAgICAgIHdoZXJlLkFORCA9IFtcbiAgICAgICAgICAgIHsgc2FsYXJ5TWluOiB7IGd0ZTogbWluU2FsYXJ5IH0gfSxcbiAgICAgICAgICAgIHsgT1I6IFt7IHNhbGFyeU1heDogeyBsdGU6IG1heFNhbGFyeSB9IH0sIHsgc2FsYXJ5TWF4OiB7IGd0ZTogbWluU2FsYXJ5IH0gfV0gfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmUsXG4gICAgICAgIGluY2x1ZGU6IHsgY29tcGFueTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgbG9nbzogdHJ1ZSwgc2x1ZzogdHJ1ZSB9IH0gfSxcbiAgICAgICAgb3JkZXJCeTogcGFyYW1zPy5xID8gdW5kZWZpbmVkIDogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgICAgIHRha2U6IDUwLFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Sm9iQnlTbHVnKHNsdWc6IHN0cmluZykge1xuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyBzbHVnIH0sXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgIGNvbXBhbnk6IHRydWUsXG4gICAgICAgICAgICBpbmR1c3RyeTogdHJ1ZSxcbiAgICAgICAgICAgIF9jb3VudDogeyBzZWxlY3Q6IHsgYXBwbGljYXRpb25zOiB0cnVlIH0gfVxuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Sm9iQnlJZChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHByaXNtYS5qb2IuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICAgIGluY2x1ZGU6IHsgY29tcGFueTogdHJ1ZSwgYXBwbGljYXRpb25zOiB7IGluY2x1ZGU6IHsgY2FuZGlkYXRlOiB7IHNlbGVjdDogeyBuYW1lOiB0cnVlLCBlbWFpbDogdHJ1ZSwgaW1hZ2U6IHRydWUsIGNhbmRpZGF0ZVByb2ZpbGU6IHRydWUgfSB9IH0gfSwgX2NvdW50OiB7IHNlbGVjdDogeyBhcHBsaWNhdGlvbnM6IHRydWUgfSB9IH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVKb2IoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXIgfHwgc2Vzc2lvbi51c2VyLnJvbGUgIT09IFwiRU1QTE9ZRVJcIikge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJLaMO0bmcgY8OzIHF1eeG7gW4gdHJ1eSBj4bqtcFwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgcmVxdWlyZW1lbnRzID0gZm9ybURhdGEuZ2V0KFwicmVxdWlyZW1lbnRzXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBiZW5lZml0cyA9IGZvcm1EYXRhLmdldChcImJlbmVmaXRzXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBsb2NhdGlvbiA9IGZvcm1EYXRhLmdldChcImxvY2F0aW9uXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBqb2JUeXBlID0gZm9ybURhdGEuZ2V0KFwiam9iVHlwZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc2FsYXJ5TWluID0gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwic2FsYXJ5TWluXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBzYWxhcnlNYXggPSBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJzYWxhcnlNYXhcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHNraWxsc1JhdyA9IGZvcm1EYXRhLmdldChcInNraWxsc1wiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc2tpbGxzID0gc2tpbGxzUmF3ID8gc2tpbGxzUmF3LnNwbGl0KFwiLFwiKS5tYXAoKHMpID0+IHMudHJpbSgpKS5maWx0ZXIoQm9vbGVhbikgOiBbXTtcbiAgICBjb25zdCBpbmR1c3RyeVNsdWcgPSBmb3JtRGF0YS5nZXQoXCJpbmR1c3RyeUlkXCIpIGFzIHN0cmluZztcblxuICAgIC8vIEdldCBlbXBsb3llcidzIGNvbXBhbnlcbiAgICBjb25zdCBlbXBsb3llciA9IGF3YWl0IHByaXNtYS5lbXBsb3llclByb2ZpbGUuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWVtcGxveWVyPy5jb21wYW55SWQpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiQuG6oW4gY2jGsGEgY8OzIHRow7RuZyB0aW4gY8O0bmcgdHkuIFZ1aSBsw7JuZyBj4bqtcCBuaOG6rXQgdHJhbmcgQ8O0bmcgdHkgdHLGsOG7m2MuXCIgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgaW5kdXN0cnkgYnkgc2x1ZyBpZiBwcm92aWRlZFxuICAgIGxldCBpbmR1c3RyeUlkID0gbnVsbDtcbiAgICBpZiAoaW5kdXN0cnlTbHVnKSB7XG4gICAgICAgIGNvbnN0IGluZHVzdHJ5ID0gYXdhaXQgcHJpc21hLmluZHVzdHJ5LmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgc2x1ZzogaW5kdXN0cnlTbHVnIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbmR1c3RyeSkge1xuICAgICAgICAgICAgaW5kdXN0cnlJZCA9IGluZHVzdHJ5LmlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgam9iID0gYXdhaXQgcHJpc21hLmpvYi5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjb21wYW55SWQ6IGVtcGxveWVyLmNvbXBhbnlJZCxcbiAgICAgICAgICAgIHBvc3RlZEJ5SWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgc2x1Zzogc2x1Z2lmeSh0aXRsZSksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJlcXVpcmVtZW50cyxcbiAgICAgICAgICAgIGJlbmVmaXRzLFxuICAgICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgICBqb2JUeXBlOiBqb2JUeXBlIGFzIFwiRlVMTF9USU1FXCIgfCBcIlBBUlRfVElNRVwiIHwgXCJSRU1PVEVcIiB8IFwiSU5URVJOU0hJUFwiIHwgXCJDT05UUkFDVFwiLFxuICAgICAgICAgICAgc2FsYXJ5TWluLFxuICAgICAgICAgICAgc2FsYXJ5TWF4LFxuICAgICAgICAgICAgc2tpbGxzLFxuICAgICAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcbiAgICAgICAgICAgIGluZHVzdHJ5SWQsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGdlbmVyYXRlSm9iRW1iZWRkaW5nIH0gPSBhd2FpdCBpbXBvcnQoXCJAL2xpYi9haVwiKTtcbiAgICAgICAgYXdhaXQgZ2VuZXJhdGVKb2JFbWJlZGRpbmcoam9iLmlkKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2VuZXJhdGUgZW1iZWRkaW5nIGZvciBuZXcgam9iOlwiLCBlKTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9lbXBsb3llci9qb2JzXCIpO1xuICAgIHJlZGlyZWN0KFwiL2VtcGxveWVyL2pvYnNcIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaWQ6IGpvYi5pZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSm9iU3RhdHVzKGpvYklkOiBzdHJpbmcsIHN0YXR1czogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXIgfHwgc2Vzc2lvbi51c2VyLnJvbGUgIT09IFwiQURNSU5cIikge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJLaMO0bmcgY8OzIHF1eeG7gW5cIiB9O1xuICAgIH1cbiAgICBhd2FpdCBwcmlzbWEuam9iLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBqb2JJZCB9LCBkYXRhOiB7IHN0YXR1czogc3RhdHVzIGFzIFwiQUNUSVZFXCIgfCBcIlJFSkVDVEVEXCIgfCBcIkNMT1NFRFwiIH0gfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vam9ic1wiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llckpvYnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXIpIHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXG4gICAgY29uc3QgZW1wbG95ZXIgPSBhd2FpdCBwcmlzbWEuZW1wbG95ZXJQcm9maWxlLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9LFxuICAgIH0pO1xuICAgIGlmICghZW1wbG95ZXI/LmNvbXBhbnlJZCkgcmV0dXJuIFtdO1xuXG4gICAgcmV0dXJuIHByaXNtYS5qb2IuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyBjb21wYW55SWQ6IGVtcGxveWVyLmNvbXBhbnlJZCB9LFxuICAgICAgICBpbmNsdWRlOiB7IF9jb3VudDogeyBzZWxlY3Q6IHsgYXBwbGljYXRpb25zOiB0cnVlIH0gfSB9LFxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUpvYihqb2JJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXIgfHwgc2Vzc2lvbi51c2VyLnJvbGUgIT09IFwiRU1QTE9ZRVJcIikgcmV0dXJuIHsgZXJyb3I6IFwiS2jDtG5nIGPDsyBxdXnhu4FuXCIgfTtcbiAgICBhd2FpdCBwcmlzbWEuam9iLmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiBqb2JJZCB9IH0pO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2VtcGxveWVyL2pvYnNcIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsSm9ic0ZvckFkbWluKCkge1xuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRNYW55KHtcbiAgICAgICAgaW5jbHVkZTogeyBjb21wYW55OiB7IHNlbGVjdDogeyBuYW1lOiB0cnVlIH0gfSwgX2NvdW50OiB7IHNlbGVjdDogeyBhcHBsaWNhdGlvbnM6IHRydWUgfSB9IH0sXG4gICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5kdXN0cmllcygpIHtcbiAgICByZXR1cm4gcHJpc21hLmluZHVzdHJ5LmZpbmRNYW55KHtcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxJbmR1c3RyaWVzKCkge1xuICAgIHJldHVybiBwcmlzbWEuaW5kdXN0cnkuZmluZE1hbnkoe1xuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6IFwiYXNjXCIgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEpvYkxvY2F0aW9ucygpIHtcbiAgICBjb25zdCBqb2JzID0gYXdhaXQgcHJpc21hLmpvYi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHN0YXR1czogXCJBQ1RJVkVcIiB9LFxuICAgICAgICBzZWxlY3Q6IHsgbG9jYXRpb246IHRydWUgfSxcbiAgICAgICAgZGlzdGluY3Q6IFtcImxvY2F0aW9uXCJdLFxuICAgIH0pO1xuICAgIHJldHVybiBqb2JzLm1hcChqID0+IGoubG9jYXRpb24pLmZpbHRlcihCb29sZWFuKS5zb3J0KCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JGaWx0ZXJzKCkge1xuICAgIGNvbnN0IFtpbmR1c3RyaWVzLCBsb2NhdGlvbnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBwcmlzbWEuaW5kdXN0cnkuZmluZE1hbnkoeyBvcmRlckJ5OiB7IG5hbWU6IFwiYXNjXCIgfSB9KSxcbiAgICAgICAgcHJpc21hLmpvYi5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBzdGF0dXM6IFwiQUNUSVZFXCIgfSxcbiAgICAgICAgICAgIHNlbGVjdDogeyBsb2NhdGlvbjogdHJ1ZSB9LFxuICAgICAgICAgICAgZGlzdGluY3Q6IFtcImxvY2F0aW9uXCJdLFxuICAgICAgICB9KS50aGVuKGpvYnMgPT4gam9icy5tYXAoaiA9PiBqLmxvY2F0aW9uKS5maWx0ZXIoQm9vbGVhbikuc29ydCgpKVxuICAgIF0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5kdXN0cmllcyxcbiAgICAgICAgbG9jYXRpb25zLFxuICAgICAgICBqb2JUeXBlczogW1wiRlVMTF9USU1FXCIsIFwiUEFSVF9USU1FXCIsIFwiUkVNT1RFXCIsIFwiSU5URVJOU0hJUFwiLCBcIkNPTlRSQUNUXCJdLFxuICAgICAgICBleHBlcmllbmNlTGV2ZWxzOiBbXCJFbnRyeVwiLCBcIkp1bmlvclwiLCBcIk1pZC1MZXZlbFwiLCBcIlNlbmlvclwiLCBcIk1hbmFnZXJcIl0sXG4gICAgICAgIHNhbGFyeVJhbmdlczogW1xuICAgICAgICAgICAgeyB2YWx1ZTogXCIwLTUwMDAwMDBcIiwgbGFiZWw6IFwiRMaw4bubaSA1IHRyaeG7h3VcIiB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogXCI1MDAwMDAwLTEwMDAwMDAwXCIsIGxhYmVsOiBcIjUgLSAxMCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMTAwMDAwMDAtMjAwMDAwMDBcIiwgbGFiZWw6IFwiMTAgLSAyMCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMjAwMDAwMDAtMzAwMDAwMDBcIiwgbGFiZWw6IFwiMjAgLSAzMCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMzAwMDAwMDAtNTAwMDAwMDBcIiwgbGFiZWw6IFwiMzAgLSA1MCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiNTAwMDAwMDAtOTk5OTk5OTk5XCIsIGxhYmVsOiBcIlRyw6puIDUwIHRyaeG7h3VcIiB9LFxuICAgICAgICBdXG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVKb2Ioam9iSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlZ1aSBsw7JuZyDEkcSDbmcgbmjhuq1wIMSR4buDIGzGsHUgdmnhu4djIGzDoG1cIiB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS5zYXZlZEpvYi5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuICAgICAgICAgICAgICAgIGpvYklkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9qb2JzXCIpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJWaeG7h2MgbMOgbSBuw6B5IMSRw6MgxJHGsOG7o2MgbMawdSB0csaw4bubYyDEkcOzXCIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bnNhdmVKb2Ioam9iSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlZ1aSBsw7JuZyDEkcSDbmcgbmjhuq1wXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuZGVsZXRlTWFueSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgIGpvYklkXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9qb2JzXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNhdmVkSm9icygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIFtdO1xuXG4gICAgcmV0dXJuIHByaXNtYS5zYXZlZEpvYi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH0sXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgIGpvYjoge1xuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFueTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgbG9nbzogdHJ1ZSwgc2x1ZzogdHJ1ZSB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0pvYlNhdmVkKGpvYklkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3Qgc2F2ZWQgPSBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VySWRfam9iSWQ6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgICAgICBqb2JJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuICEhc2F2ZWQ7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitRQTZRc0Isc0xBQUEifQ==
}),
"[project]/app/actions/data:3d1f4b [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unsaveJob",
    ()=>$$RSC_SERVER_ACTION_13
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4016bfa22123dad3d3aaeee262b4ebf7358de34cb8":"unsaveJob"},"app/actions/jobs.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4016bfa22123dad3d3aaeee262b4ebf7358de34cb8", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "unsaveJob");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vam9icy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgc2VtYW50aWNKb2JTZWFyY2ggfSBmcm9tIFwiQC9saWIvYWlcIjtcblxuZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGV4dFxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvW15hLXowLTlcXHMtXS9nLCBcIlwiKVxuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIi1cIilcbiAgICAgICAgLnJlcGxhY2UoLy0rL2csIFwiLVwiKVxuICAgICAgICAudHJpbSgpICsgXCItXCIgKyBEYXRlLm5vdygpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Sm9icyhwYXJhbXM/OiB7XG4gICAgcT86IHN0cmluZztcbiAgICBsb2M/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBzdGF0dXM/OiBzdHJpbmc7XG4gICAgaW5kdXN0cnlJZD86IHN0cmluZztcbiAgICBzYWxhcnk/OiBzdHJpbmc7XG4gICAgdXNlQUk/OiBib29sZWFuO1xufSkge1xuICAgIGNvbnN0IHdoZXJlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuXG4gICAgaWYgKHBhcmFtcz8uc3RhdHVzKSB7XG4gICAgICAgIHdoZXJlLnN0YXR1cyA9IHBhcmFtcy5zdGF0dXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hlcmUuc3RhdHVzID0gXCJBQ1RJVkVcIjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zPy5xICYmIHBhcmFtcy51c2VBSSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWlKb2JzID0gYXdhaXQgc2VtYW50aWNKb2JTZWFyY2gocGFyYW1zLnEsIDUwKTtcbiAgICAgICAgICAgIGlmIChhaUpvYnMgJiYgQXJyYXkuaXNBcnJheShhaUpvYnMpICYmIGFpSm9icy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFpSm9icy5tYXAoKGpvYjogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBpZDogam9iLmlkLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogam9iLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzbHVnOiBqb2Iuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGpvYi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZW1lbnRzOiBqb2IucmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBiZW5lZml0czogam9iLmJlbmVmaXRzLFxuICAgICAgICAgICAgICAgICAgICBzYWxhcnlNaW46IGpvYi5zYWxhcnlNaW4sXG4gICAgICAgICAgICAgICAgICAgIHNhbGFyeU1heDogam9iLnNhbGFyeU1heCxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGpvYi5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgam9iVHlwZTogam9iLmpvYlR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHNraWxsczogam9iLnNraWxscyxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBqb2IuY3JlYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICBjb21wYW55OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBqb2IuY29tcGFueU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBqb2IuY29tcGFueUxvZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiBqb2IuY29tcGFueVNsdWcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNpbWlsYXJpdHk6IGpvYi5zaW1pbGFyaXR5LFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFJIHNlYXJjaCBmYWlsZWQsIGZhbGxpbmcgYmFjayB0byB0ZXh0IHNlYXJjaDpcIiwgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zPy5xICYmICFwYXJhbXMudXNlQUkpIHtcbiAgICAgICAgd2hlcmUuT1IgPSBbXG4gICAgICAgICAgICB7IHRpdGxlOiB7IGNvbnRhaW5zOiBwYXJhbXMucSwgbW9kZTogXCJpbnNlbnNpdGl2ZVwiIH0gfSxcbiAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IHsgY29udGFpbnM6IHBhcmFtcy5xLCBtb2RlOiBcImluc2Vuc2l0aXZlXCIgfSB9LFxuICAgICAgICAgICAgeyBza2lsbHM6IHsgaGFzU29tZTogW3BhcmFtcy5xXSB9IH0sXG4gICAgICAgIF07XG4gICAgfVxuICAgIGlmIChwYXJhbXM/LmxvYykge1xuICAgICAgICB3aGVyZS5sb2NhdGlvbiA9IHsgY29udGFpbnM6IHBhcmFtcy5sb2MsIG1vZGU6IFwiaW5zZW5zaXRpdmVcIiB9O1xuICAgIH1cbiAgICBpZiAocGFyYW1zPy50eXBlKSB3aGVyZS5qb2JUeXBlID0gcGFyYW1zLnR5cGU7XG4gICAgaWYgKHBhcmFtcz8uaW5kdXN0cnlJZCkgd2hlcmUuaW5kdXN0cnlJZCA9IHBhcmFtcy5pbmR1c3RyeUlkO1xuXG4gICAgLy8gU2FsYXJ5IHJhbmdlIGZpbHRlclxuICAgIGlmIChwYXJhbXM/LnNhbGFyeSkge1xuICAgICAgICBjb25zdCBbbWluU2FsYXJ5LCBtYXhTYWxhcnldID0gcGFyYW1zLnNhbGFyeS5zcGxpdChcIi1cIikubWFwKE51bWJlcik7XG4gICAgICAgIHdoZXJlLkFORCA9IFtcbiAgICAgICAgICAgIHsgc2FsYXJ5TWluOiB7IGd0ZTogbWluU2FsYXJ5IH0gfSxcbiAgICAgICAgICAgIHsgT1I6IFt7IHNhbGFyeU1heDogeyBsdGU6IG1heFNhbGFyeSB9IH0sIHsgc2FsYXJ5TWF4OiB7IGd0ZTogbWluU2FsYXJ5IH0gfV0gfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmUsXG4gICAgICAgIGluY2x1ZGU6IHsgY29tcGFueTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgbG9nbzogdHJ1ZSwgc2x1ZzogdHJ1ZSB9IH0gfSxcbiAgICAgICAgb3JkZXJCeTogcGFyYW1zPy5xID8gdW5kZWZpbmVkIDogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgICAgIHRha2U6IDUwLFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Sm9iQnlTbHVnKHNsdWc6IHN0cmluZykge1xuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyBzbHVnIH0sXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgIGNvbXBhbnk6IHRydWUsXG4gICAgICAgICAgICBpbmR1c3RyeTogdHJ1ZSxcbiAgICAgICAgICAgIF9jb3VudDogeyBzZWxlY3Q6IHsgYXBwbGljYXRpb25zOiB0cnVlIH0gfVxuICAgICAgICB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Sm9iQnlJZChpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHByaXNtYS5qb2IuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICAgIGluY2x1ZGU6IHsgY29tcGFueTogdHJ1ZSwgYXBwbGljYXRpb25zOiB7IGluY2x1ZGU6IHsgY2FuZGlkYXRlOiB7IHNlbGVjdDogeyBuYW1lOiB0cnVlLCBlbWFpbDogdHJ1ZSwgaW1hZ2U6IHRydWUsIGNhbmRpZGF0ZVByb2ZpbGU6IHRydWUgfSB9IH0gfSwgX2NvdW50OiB7IHNlbGVjdDogeyBhcHBsaWNhdGlvbnM6IHRydWUgfSB9IH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVKb2IoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXIgfHwgc2Vzc2lvbi51c2VyLnJvbGUgIT09IFwiRU1QTE9ZRVJcIikge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJLaMO0bmcgY8OzIHF1eeG7gW4gdHJ1eSBj4bqtcFwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgcmVxdWlyZW1lbnRzID0gZm9ybURhdGEuZ2V0KFwicmVxdWlyZW1lbnRzXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBiZW5lZml0cyA9IGZvcm1EYXRhLmdldChcImJlbmVmaXRzXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBsb2NhdGlvbiA9IGZvcm1EYXRhLmdldChcImxvY2F0aW9uXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBqb2JUeXBlID0gZm9ybURhdGEuZ2V0KFwiam9iVHlwZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc2FsYXJ5TWluID0gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwic2FsYXJ5TWluXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBzYWxhcnlNYXggPSBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJzYWxhcnlNYXhcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHNraWxsc1JhdyA9IGZvcm1EYXRhLmdldChcInNraWxsc1wiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc2tpbGxzID0gc2tpbGxzUmF3ID8gc2tpbGxzUmF3LnNwbGl0KFwiLFwiKS5tYXAoKHMpID0+IHMudHJpbSgpKS5maWx0ZXIoQm9vbGVhbikgOiBbXTtcbiAgICBjb25zdCBpbmR1c3RyeVNsdWcgPSBmb3JtRGF0YS5nZXQoXCJpbmR1c3RyeUlkXCIpIGFzIHN0cmluZztcblxuICAgIC8vIEdldCBlbXBsb3llcidzIGNvbXBhbnlcbiAgICBjb25zdCBlbXBsb3llciA9IGF3YWl0IHByaXNtYS5lbXBsb3llclByb2ZpbGUuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWVtcGxveWVyPy5jb21wYW55SWQpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiQuG6oW4gY2jGsGEgY8OzIHRow7RuZyB0aW4gY8O0bmcgdHkuIFZ1aSBsw7JuZyBj4bqtcCBuaOG6rXQgdHJhbmcgQ8O0bmcgdHkgdHLGsOG7m2MuXCIgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgaW5kdXN0cnkgYnkgc2x1ZyBpZiBwcm92aWRlZFxuICAgIGxldCBpbmR1c3RyeUlkID0gbnVsbDtcbiAgICBpZiAoaW5kdXN0cnlTbHVnKSB7XG4gICAgICAgIGNvbnN0IGluZHVzdHJ5ID0gYXdhaXQgcHJpc21hLmluZHVzdHJ5LmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgc2x1ZzogaW5kdXN0cnlTbHVnIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbmR1c3RyeSkge1xuICAgICAgICAgICAgaW5kdXN0cnlJZCA9IGluZHVzdHJ5LmlkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgam9iID0gYXdhaXQgcHJpc21hLmpvYi5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjb21wYW55SWQ6IGVtcGxveWVyLmNvbXBhbnlJZCxcbiAgICAgICAgICAgIHBvc3RlZEJ5SWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgc2x1Zzogc2x1Z2lmeSh0aXRsZSksXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHJlcXVpcmVtZW50cyxcbiAgICAgICAgICAgIGJlbmVmaXRzLFxuICAgICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgICBqb2JUeXBlOiBqb2JUeXBlIGFzIFwiRlVMTF9USU1FXCIgfCBcIlBBUlRfVElNRVwiIHwgXCJSRU1PVEVcIiB8IFwiSU5URVJOU0hJUFwiIHwgXCJDT05UUkFDVFwiLFxuICAgICAgICAgICAgc2FsYXJ5TWluLFxuICAgICAgICAgICAgc2FsYXJ5TWF4LFxuICAgICAgICAgICAgc2tpbGxzLFxuICAgICAgICAgICAgc3RhdHVzOiBcIlBFTkRJTkdcIixcbiAgICAgICAgICAgIGluZHVzdHJ5SWQsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGdlbmVyYXRlSm9iRW1iZWRkaW5nIH0gPSBhd2FpdCBpbXBvcnQoXCJAL2xpYi9haVwiKTtcbiAgICAgICAgYXdhaXQgZ2VuZXJhdGVKb2JFbWJlZGRpbmcoam9iLmlkKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZ2VuZXJhdGUgZW1iZWRkaW5nIGZvciBuZXcgam9iOlwiLCBlKTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9lbXBsb3llci9qb2JzXCIpO1xuICAgIHJlZGlyZWN0KFwiL2VtcGxveWVyL2pvYnNcIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgaWQ6IGpvYi5pZCB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSm9iU3RhdHVzKGpvYklkOiBzdHJpbmcsIHN0YXR1czogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXIgfHwgc2Vzc2lvbi51c2VyLnJvbGUgIT09IFwiQURNSU5cIikge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJLaMO0bmcgY8OzIHF1eeG7gW5cIiB9O1xuICAgIH1cbiAgICBhd2FpdCBwcmlzbWEuam9iLnVwZGF0ZSh7IHdoZXJlOiB7IGlkOiBqb2JJZCB9LCBkYXRhOiB7IHN0YXR1czogc3RhdHVzIGFzIFwiQUNUSVZFXCIgfCBcIlJFSkVDVEVEXCIgfCBcIkNMT1NFRFwiIH0gfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvYWRtaW4vam9ic1wiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbXBsb3llckpvYnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXIpIHJlZGlyZWN0KFwiL2xvZ2luXCIpO1xuXG4gICAgY29uc3QgZW1wbG95ZXIgPSBhd2FpdCBwcmlzbWEuZW1wbG95ZXJQcm9maWxlLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9LFxuICAgIH0pO1xuICAgIGlmICghZW1wbG95ZXI/LmNvbXBhbnlJZCkgcmV0dXJuIFtdO1xuXG4gICAgcmV0dXJuIHByaXNtYS5qb2IuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyBjb21wYW55SWQ6IGVtcGxveWVyLmNvbXBhbnlJZCB9LFxuICAgICAgICBpbmNsdWRlOiB7IF9jb3VudDogeyBzZWxlY3Q6IHsgYXBwbGljYXRpb25zOiB0cnVlIH0gfSB9LFxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUpvYihqb2JJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXIgfHwgc2Vzc2lvbi51c2VyLnJvbGUgIT09IFwiRU1QTE9ZRVJcIikgcmV0dXJuIHsgZXJyb3I6IFwiS2jDtG5nIGPDsyBxdXnhu4FuXCIgfTtcbiAgICBhd2FpdCBwcmlzbWEuam9iLmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiBqb2JJZCB9IH0pO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2VtcGxveWVyL2pvYnNcIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsSm9ic0ZvckFkbWluKCkge1xuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRNYW55KHtcbiAgICAgICAgaW5jbHVkZTogeyBjb21wYW55OiB7IHNlbGVjdDogeyBuYW1lOiB0cnVlIH0gfSwgX2NvdW50OiB7IHNlbGVjdDogeyBhcHBsaWNhdGlvbnM6IHRydWUgfSB9IH0sXG4gICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW5kdXN0cmllcygpIHtcbiAgICByZXR1cm4gcHJpc21hLmluZHVzdHJ5LmZpbmRNYW55KHtcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxJbmR1c3RyaWVzKCkge1xuICAgIHJldHVybiBwcmlzbWEuaW5kdXN0cnkuZmluZE1hbnkoe1xuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6IFwiYXNjXCIgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEpvYkxvY2F0aW9ucygpIHtcbiAgICBjb25zdCBqb2JzID0gYXdhaXQgcHJpc21hLmpvYi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHN0YXR1czogXCJBQ1RJVkVcIiB9LFxuICAgICAgICBzZWxlY3Q6IHsgbG9jYXRpb246IHRydWUgfSxcbiAgICAgICAgZGlzdGluY3Q6IFtcImxvY2F0aW9uXCJdLFxuICAgIH0pO1xuICAgIHJldHVybiBqb2JzLm1hcChqID0+IGoubG9jYXRpb24pLmZpbHRlcihCb29sZWFuKS5zb3J0KCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JGaWx0ZXJzKCkge1xuICAgIGNvbnN0IFtpbmR1c3RyaWVzLCBsb2NhdGlvbnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBwcmlzbWEuaW5kdXN0cnkuZmluZE1hbnkoeyBvcmRlckJ5OiB7IG5hbWU6IFwiYXNjXCIgfSB9KSxcbiAgICAgICAgcHJpc21hLmpvYi5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBzdGF0dXM6IFwiQUNUSVZFXCIgfSxcbiAgICAgICAgICAgIHNlbGVjdDogeyBsb2NhdGlvbjogdHJ1ZSB9LFxuICAgICAgICAgICAgZGlzdGluY3Q6IFtcImxvY2F0aW9uXCJdLFxuICAgICAgICB9KS50aGVuKGpvYnMgPT4gam9icy5tYXAoaiA9PiBqLmxvY2F0aW9uKS5maWx0ZXIoQm9vbGVhbikuc29ydCgpKVxuICAgIF0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5kdXN0cmllcyxcbiAgICAgICAgbG9jYXRpb25zLFxuICAgICAgICBqb2JUeXBlczogW1wiRlVMTF9USU1FXCIsIFwiUEFSVF9USU1FXCIsIFwiUkVNT1RFXCIsIFwiSU5URVJOU0hJUFwiLCBcIkNPTlRSQUNUXCJdLFxuICAgICAgICBleHBlcmllbmNlTGV2ZWxzOiBbXCJFbnRyeVwiLCBcIkp1bmlvclwiLCBcIk1pZC1MZXZlbFwiLCBcIlNlbmlvclwiLCBcIk1hbmFnZXJcIl0sXG4gICAgICAgIHNhbGFyeVJhbmdlczogW1xuICAgICAgICAgICAgeyB2YWx1ZTogXCIwLTUwMDAwMDBcIiwgbGFiZWw6IFwiRMaw4bubaSA1IHRyaeG7h3VcIiB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogXCI1MDAwMDAwLTEwMDAwMDAwXCIsIGxhYmVsOiBcIjUgLSAxMCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMTAwMDAwMDAtMjAwMDAwMDBcIiwgbGFiZWw6IFwiMTAgLSAyMCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMjAwMDAwMDAtMzAwMDAwMDBcIiwgbGFiZWw6IFwiMjAgLSAzMCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMzAwMDAwMDAtNTAwMDAwMDBcIiwgbGFiZWw6IFwiMzAgLSA1MCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiNTAwMDAwMDAtOTk5OTk5OTk5XCIsIGxhYmVsOiBcIlRyw6puIDUwIHRyaeG7h3VcIiB9LFxuICAgICAgICBdXG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVKb2Ioam9iSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlZ1aSBsw7JuZyDEkcSDbmcgbmjhuq1wIMSR4buDIGzGsHUgdmnhu4djIGzDoG1cIiB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS5zYXZlZEpvYi5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuICAgICAgICAgICAgICAgIGpvYklkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9qb2JzXCIpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJWaeG7h2MgbMOgbSBuw6B5IMSRw6MgxJHGsOG7o2MgbMawdSB0csaw4bubYyDEkcOzXCIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bnNhdmVKb2Ioam9iSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlZ1aSBsw7JuZyDEkcSDbmcgbmjhuq1wXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuZGVsZXRlTWFueSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgIGpvYklkXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9qb2JzXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNhdmVkSm9icygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIFtdO1xuXG4gICAgcmV0dXJuIHByaXNtYS5zYXZlZEpvYi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH0sXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgIGpvYjoge1xuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFueTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgbG9nbzogdHJ1ZSwgc2x1ZzogdHJ1ZSB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0pvYlNhdmVkKGpvYklkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3Qgc2F2ZWQgPSBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VySWRfam9iSWQ6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgICAgICBqb2JJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuICEhc2F2ZWQ7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlSQWlTc0Isd0xBQUEifQ==
}),
"[project]/app/components/SaveJobButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SaveJobButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$50de64__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:50de64 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$3d1f4b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:3d1f4b [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SaveJobButton({ jobId, initialSaved = false }) {
    _s();
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialSaved);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleToggle = async ()=>{
        setLoading(true);
        try {
            if (saved) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$3d1f4b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["unsaveJob"])(jobId);
                setSaved(false);
            } else {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$50de64__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveJob"])(jobId);
                if (result.success) {
                    setSaved(true);
                } else if (result.error?.includes("đăng nhập")) {
                    router.push("/login");
                    return;
                }
            }
        } catch (error) {
            console.error("Error toggling save:", error);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleToggle,
        disabled: loading,
        style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: saved ? "2px solid var(--primary)" : "1.5px solid var(--border)",
            background: saved ? "var(--primary)" : "transparent",
            color: saved ? "#fff" : "var(--text-muted)",
            cursor: loading ? "not-allowed" : "pointer",
            transition: "all 0.2s ease",
            opacity: loading ? 0.7 : 1
        },
        title: saved ? "Bỏ lưu việc làm" : "Lưu việc làm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            fill: saved ? "currentColor" : "none",
            stroke: "currentColor",
            strokeWidth: "2",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            }, void 0, false, {
                fileName: "[project]/app/components/SaveJobButton.tsx",
                lineNumber: 67,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/SaveJobButton.tsx",
            lineNumber: 59,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/SaveJobButton.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_s(SaveJobButton, "4gzUq8dJTHH4/i/eqzY777U6QjY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SaveJobButton;
var _c;
__turbopack_context__.k.register(_c, "SaveJobButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/JobFilters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const JOB_TYPE_LABELS = {
    FULL_TIME: "Toàn thời gian",
    PART_TIME: "Bán thời gian",
    REMOTE: "Remote",
    INTERNSHIP: "Thực tập",
    CONTRACT: "Hợp đồng"
};
function JobFilters({ industries, locations, jobTypes, salaryRanges }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const industry = searchParams.get("industry") || "";
    const loc = searchParams.get("loc") || "";
    const type = searchParams.get("type") || "";
    const salary = searchParams.get("salary") || "";
    const exp = searchParams.get("exp") || "";
    const handleFilterChange = (key, value)=>{
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        router.push(`/jobs?${params.toString()}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    padding: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontSize: "0.9375rem",
                            fontWeight: 700,
                            marginBottom: "1rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                fill: "none",
                                stroke: "var(--primary)",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/JobFilters.tsx",
                                    lineNumber: 57,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobFilters.tsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this),
                            "Ngành nghề"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobFilters.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.25rem",
                            maxHeight: "300px",
                            overflowY: "auto"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    cursor: "pointer",
                                    padding: "0.4rem 0"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "industry",
                                        checked: !industry,
                                        onChange: ()=>handleFilterChange("industry", ""),
                                        style: {
                                            accentColor: "var(--primary)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobFilters.tsx",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "0.9rem",
                                            color: "var(--text)"
                                        },
                                        children: "Tất cả ngành"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobFilters.tsx",
                                        lineNumber: 70,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobFilters.tsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this),
                            industries.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        cursor: "pointer",
                                        padding: "0.4rem 0"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: "industry",
                                            checked: industry === cat.slug,
                                            onChange: ()=>handleFilterChange("industry", cat.slug),
                                            style: {
                                                accentColor: "var(--primary)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/JobFilters.tsx",
                                            lineNumber: 74,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "0.9rem",
                                                color: "var(--text)"
                                            },
                                            children: cat.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/JobFilters.tsx",
                                            lineNumber: 81,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, cat.id, true, {
                                    fileName: "[project]/app/components/JobFilters.tsx",
                                    lineNumber: 73,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobFilters.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/JobFilters.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    padding: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontSize: "0.9375rem",
                            fontWeight: 700,
                            marginBottom: "1rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                fill: "none",
                                stroke: "var(--primary)",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobFilters.tsx",
                                        lineNumber: 91,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobFilters.tsx",
                                        lineNumber: 92,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobFilters.tsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this),
                            "Địa điểm"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobFilters.tsx",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.25rem",
                            maxHeight: "250px",
                            overflowY: "auto"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    cursor: "pointer",
                                    padding: "0.4rem 0"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "location",
                                        checked: !loc,
                                        onChange: ()=>handleFilterChange("loc", ""),
                                        style: {
                                            accentColor: "var(--primary)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobFilters.tsx",
                                        lineNumber: 98,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "0.9rem",
                                            color: "var(--text)"
                                        },
                                        children: "Tất cả địa điểm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobFilters.tsx",
                                        lineNumber: 105,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobFilters.tsx",
                                lineNumber: 97,
                                columnNumber: 21
                            }, this),
                            locations.map((location)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        cursor: "pointer",
                                        padding: "0.4rem 0"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: "location",
                                            checked: loc === location,
                                            onChange: ()=>handleFilterChange("loc", location),
                                            style: {
                                                accentColor: "var(--primary)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/JobFilters.tsx",
                                            lineNumber: 109,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "0.9rem",
                                                color: "var(--text)"
                                            },
                                            children: location
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/JobFilters.tsx",
                                            lineNumber: 116,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, location, true, {
                                    fileName: "[project]/app/components/JobFilters.tsx",
                                    lineNumber: 108,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobFilters.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/JobFilters.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    padding: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontSize: "0.9375rem",
                            fontWeight: 700,
                            marginBottom: "1rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                fill: "none",
                                stroke: "var(--primary)",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/JobFilters.tsx",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobFilters.tsx",
                                lineNumber: 125,
                                columnNumber: 21
                            }, this),
                            "Loại hình"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobFilters.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.25rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    cursor: "pointer",
                                    padding: "0.4rem 0"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "type",
                                        checked: !type,
                                        onChange: ()=>handleFilterChange("type", ""),
                                        style: {
                                            accentColor: "var(--primary)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobFilters.tsx",
                                        lineNumber: 132,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "0.9rem",
                                            color: "var(--text)"
                                        },
                                        children: "Tất cả loại hình"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobFilters.tsx",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobFilters.tsx",
                                lineNumber: 131,
                                columnNumber: 21
                            }, this),
                            jobTypes.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        cursor: "pointer",
                                        padding: "0.4rem 0"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: "type",
                                            checked: type === t,
                                            onChange: ()=>handleFilterChange("type", t),
                                            style: {
                                                accentColor: "var(--primary)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/JobFilters.tsx",
                                            lineNumber: 143,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "0.9rem",
                                                color: "var(--text)"
                                            },
                                            children: JOB_TYPE_LABELS[t] || t
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/JobFilters.tsx",
                                            lineNumber: 150,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, t, true, {
                                    fileName: "[project]/app/components/JobFilters.tsx",
                                    lineNumber: 142,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobFilters.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/JobFilters.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card",
                style: {
                    padding: "1.5rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontSize: "0.9375rem",
                            fontWeight: 700,
                            marginBottom: "1rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                fill: "none",
                                stroke: "var(--primary)",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/JobFilters.tsx",
                                    lineNumber: 160,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobFilters.tsx",
                                lineNumber: 159,
                                columnNumber: 21
                            }, this),
                            "Mức lương"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobFilters.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.25rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    cursor: "pointer",
                                    padding: "0.4rem 0"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "salary",
                                        checked: !salary,
                                        onChange: ()=>handleFilterChange("salary", ""),
                                        style: {
                                            accentColor: "var(--primary)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobFilters.tsx",
                                        lineNumber: 166,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "0.9rem",
                                            color: "var(--text)"
                                        },
                                        children: "Tất cả mức lương"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobFilters.tsx",
                                        lineNumber: 173,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobFilters.tsx",
                                lineNumber: 165,
                                columnNumber: 21
                            }, this),
                            salaryRanges.map((range)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        cursor: "pointer",
                                        padding: "0.4rem 0"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: "salary",
                                            checked: salary === range.value,
                                            onChange: ()=>handleFilterChange("salary", range.value),
                                            style: {
                                                accentColor: "var(--primary)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/JobFilters.tsx",
                                            lineNumber: 177,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "0.9rem",
                                                color: "var(--text)"
                                            },
                                            children: range.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/JobFilters.tsx",
                                            lineNumber: 184,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, range.value, true, {
                                    fileName: "[project]/app/components/JobFilters.tsx",
                                    lineNumber: 176,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobFilters.tsx",
                        lineNumber: 164,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/JobFilters.tsx",
                lineNumber: 157,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/JobFilters.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
_s(JobFilters, "A57ZQKsSKoH4xi482IWIv7kTTfs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = JobFilters;
var _c;
__turbopack_context__.k.register(_c, "JobFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_73b0bdb5._.js.map