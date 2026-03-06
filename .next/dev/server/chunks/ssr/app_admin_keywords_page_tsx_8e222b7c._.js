module.exports = [
"[project]/app/admin/keywords/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KeywordsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function KeywordsPage() {
    const [baseKeyword, setBaseKeyword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [keywords, setKeywords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGenerating, setIsGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Load keywords from database
    const loadKeywords = async ()=>{
        setIsLoading(true);
        try {
            const response = await fetch("/api/admin/keywords");
            const data = await response.json();
            setKeywords(data.keywords || []);
        } catch (error) {
            console.error("Failed to load keywords:", error);
            setMessage("Lỗi khi tải danh sách từ khoá");
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadKeywords();
    }, []);
    // Generate keywords using AI
    const generateKeywords = async ()=>{
        if (!baseKeyword.trim()) {
            setMessage("Vui lòng nhập từ khoá cơ sở");
            return;
        }
        setIsGenerating(true);
        setMessage("Đang tạo từ khoá bằng AI...");
        try {
            const response = await fetch("/api/admin/keywords/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    baseKeyword: baseKeyword.trim()
                })
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(`Đã tạo ${data.createdCount} từ khoá!`);
                loadKeywords();
                setBaseKeyword("");
            } else {
                setMessage(data.error || "Lỗi khi tạo từ khoá");
            }
        } catch (error) {
            console.error("Failed to generate keywords:", error);
            setMessage("Lỗi khi tạo từ khoá");
        } finally{
            setIsGenerating(false);
        }
    };
    // Delete keyword
    const deleteKeyword = async (id)=>{
        try {
            const response = await fetch(`/api/admin/keywords/${id}`, {
                method: "DELETE"
            });
            if (response.ok) {
                setKeywords(keywords.filter((k)=>k.id !== id));
                setMessage("Đã xoá từ khoá");
            }
        } catch (error) {
            console.error("Failed to delete keyword:", error);
        }
    };
    // Toggle active status
    const toggleKeyword = async (id, currentStatus)=>{
        try {
            const response = await fetch(`/api/admin/keywords/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    isActive: !currentStatus
                })
            });
            if (response.ok) {
                setKeywords(keywords.map((k)=>k.id === id ? {
                        ...k,
                        isActive: !currentStatus
                    } : k));
            }
        } catch (error) {
            console.error("Failed to toggle keyword:", error);
        }
    };
    // Seed common keywords
    const seedCommonKeywords = async ()=>{
        setIsGenerating(true);
        setMessage("Đang thêm từ khoá phổ biến...");
        try {
            const response = await fetch("/api/admin/keywords/seed", {
                method: "POST"
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(`Đã thêm ${data.createdCount} từ khoá phổ biến!`);
                loadKeywords();
            } else {
                setMessage(data.error || "Lỗi khi thêm từ khoá");
            }
        } catch (error) {
            console.error("Failed to seed keywords:", error);
            setMessage("Lỗi khi thêm từ khoá");
        } finally{
            setIsGenerating(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "2rem",
            maxWidth: "1200px",
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Quản lý từ khoá tìm kiếm"
            }, void 0, false, {
                fileName: "[project]/app/admin/keywords/page.tsx",
                lineNumber: 139,
                columnNumber: 13
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "1rem",
                    marginBottom: "1rem",
                    background: message.includes("Lỗi") ? "#fee" : "#efe",
                    borderRadius: "8px",
                    color: message.includes("Lỗi") ? "#c00" : "#050"
                },
                children: message
            }, void 0, false, {
                fileName: "[project]/app/admin/keywords/page.tsx",
                lineNumber: 142,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "var(--bg-card)",
                    padding: "1.5rem",
                    borderRadius: "12px",
                    marginBottom: "2rem",
                    border: "1px solid var(--border)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Tạo từ khoá mới bằng AI"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/keywords/page.tsx",
                        lineNumber: 164,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "var(--text-muted)",
                            marginBottom: "1rem"
                        },
                        children: "Nhập từ khoá cơ sở (ví dụ: marketing, developer, design...), AI sẽ tự động tạo các từ khoá gợi ý và từ khoá liên quan."
                    }, void 0, false, {
                        fileName: "[project]/app/admin/keywords/page.tsx",
                        lineNumber: 165,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "1rem",
                            marginBottom: "1rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Nhập từ khoá cơ sở...",
                                value: baseKeyword,
                                onChange: (e)=>setBaseKeyword(e.target.value),
                                style: {
                                    flex: 1,
                                    padding: "0.75rem",
                                    borderRadius: "8px",
                                    border: "1px solid var(--border)",
                                    fontSize: "1rem"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/admin/keywords/page.tsx",
                                lineNumber: 170,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: generateKeywords,
                                disabled: isGenerating || !baseKeyword.trim(),
                                style: {
                                    padding: "0.75rem 1.5rem",
                                    background: "var(--primary)",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: isGenerating ? "not-allowed" : "pointer",
                                    opacity: isGenerating ? 0.7 : 1
                                },
                                children: isGenerating ? "Đang tạo..." : "Tạo bằng AI"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/keywords/page.tsx",
                                lineNumber: 183,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/keywords/page.tsx",
                        lineNumber: 169,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: seedCommonKeywords,
                        disabled: isGenerating,
                        style: {
                            padding: "0.5rem 1rem",
                            background: "var(--bg)",
                            color: "var(--text)",
                            border: "1px solid var(--border)",
                            borderRadius: "8px",
                            cursor: isGenerating ? "not-allowed" : "pointer"
                        },
                        children: "+ Thêm từ khoá phổ biến có sẵn"
                    }, void 0, false, {
                        fileName: "[project]/app/admin/keywords/page.tsx",
                        lineNumber: 199,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/keywords/page.tsx",
                lineNumber: 155,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "var(--bg-card)",
                    padding: "1.5rem",
                    borderRadius: "12px",
                    border: "1px solid var(--border)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "1rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "Danh sách từ khoá (",
                                    keywords.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/keywords/page.tsx",
                                lineNumber: 231,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: loadKeywords,
                                disabled: isLoading,
                                style: {
                                    padding: "0.5rem 1rem",
                                    background: "var(--bg)",
                                    color: "var(--text)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "8px",
                                    cursor: isLoading ? "not-allowed" : "pointer"
                                },
                                children: isLoading ? "Đang tải..." : "Tải lại"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/keywords/page.tsx",
                                lineNumber: 232,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/keywords/page.tsx",
                        lineNumber: 223,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        style: {
                            width: "100%",
                            borderCollapse: "collapse"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    style: {
                                        borderBottom: "1px solid var(--border)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                textAlign: "left",
                                                padding: "0.75rem"
                                            },
                                            children: "Từ khoá cơ sở"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/keywords/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                textAlign: "left",
                                                padding: "0.75rem"
                                            },
                                            children: "Từ khoá gợi ý"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/keywords/page.tsx",
                                            lineNumber: 252,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                textAlign: "left",
                                                padding: "0.75rem"
                                            },
                                            children: "Loại"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/keywords/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                textAlign: "center",
                                                padding: "0.75rem"
                                            },
                                            children: "Trạng thái"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/keywords/page.tsx",
                                            lineNumber: 254,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            style: {
                                                textAlign: "right",
                                                padding: "0.75rem"
                                            },
                                            children: "Hành động"
                                        }, void 0, false, {
                                            fileName: "[project]/app/admin/keywords/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/keywords/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/admin/keywords/page.tsx",
                                lineNumber: 249,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: keywords.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: 5,
                                        style: {
                                            textAlign: "center",
                                            padding: "2rem",
                                            color: "var(--text-muted)"
                                        },
                                        children: "Chưa có từ khoá nào. Hãy tạo mới!"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/keywords/page.tsx",
                                        lineNumber: 261,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/keywords/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 29
                                }, this) : keywords.map((keyword)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: "1px solid var(--border)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "0.75rem"
                                                },
                                                children: keyword.baseKeyword
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/keywords/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "0.75rem"
                                                },
                                                children: keyword.keywordSuggestion
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/keywords/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "0.75rem"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        padding: "0.25rem 0.5rem",
                                                        borderRadius: "4px",
                                                        fontSize: "0.75rem",
                                                        background: keyword.keywordType === "keyword_suggestion" ? "#e0f2fe" : "#f3e8ff",
                                                        color: keyword.keywordType === "keyword_suggestion" ? "#0369a1" : "#7c3aed"
                                                    },
                                                    children: keyword.keywordType === "keyword_suggestion" ? "Gợi ý" : "Liên quan"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/keywords/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/keywords/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "0.75rem",
                                                    textAlign: "center"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleKeyword(keyword.id, keyword.isActive),
                                                    style: {
                                                        padding: "0.25rem 0.75rem",
                                                        borderRadius: "4px",
                                                        border: "none",
                                                        cursor: "pointer",
                                                        background: keyword.isActive ? "#dcfce7" : "#fee",
                                                        color: keyword.isActive ? "#166534" : "#991b1b"
                                                    },
                                                    children: keyword.isActive ? "Hoạt động" : "Bị tắt"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/keywords/page.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/keywords/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: "0.75rem",
                                                    textAlign: "right"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>deleteKeyword(keyword.id),
                                                    style: {
                                                        padding: "0.25rem 0.5rem",
                                                        background: "#fee",
                                                        color: "#991b1b",
                                                        border: "none",
                                                        borderRadius: "4px",
                                                        cursor: "pointer"
                                                    },
                                                    children: "Xoá"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/keywords/page.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/keywords/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, keyword.id, true, {
                                        fileName: "[project]/app/admin/keywords/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/admin/keywords/page.tsx",
                                lineNumber: 258,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/keywords/page.tsx",
                        lineNumber: 248,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/keywords/page.tsx",
                lineNumber: 215,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/keywords/page.tsx",
        lineNumber: 138,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=app_admin_keywords_page_tsx_8e222b7c._.js.map