(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/EditorWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditorWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// import "react-quill-new/dist/quill.bubble.css"; // if you want the bubble theme
const ReactQuill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-quill-new/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-quill-new/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = ReactQuill;
function EditorWrapper({ value, onChange }) {
    _s();
    const modules = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditorWrapper.useMemo[modules]": ()=>({
                toolbar: [
                    [
                        {
                            'header': [
                                1,
                                2,
                                3,
                                4,
                                5,
                                6,
                                false
                            ]
                        }
                    ],
                    [
                        'bold',
                        'italic',
                        'underline',
                        'strike'
                    ],
                    [
                        {
                            'color': []
                        },
                        {
                            'background': []
                        }
                    ],
                    [
                        {
                            'list': 'ordered'
                        },
                        {
                            'list': 'bullet'
                        }
                    ],
                    [
                        {
                            'align': []
                        }
                    ],
                    [
                        'link',
                        'image',
                        'video'
                    ],
                    [
                        'clean'
                    ]
                ]
            })
    }["EditorWrapper.useMemo[modules]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactQuill, {
        theme: "snow",
        value: value,
        onChange: onChange,
        modules: modules,
        className: "blog-editor"
    }, void 0, false, {
        fileName: "[project]/app/components/EditorWrapper.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
_s(EditorWrapper, "LwcoRcgB/Wj17Lodge/OkWgwi4E=");
_c1 = EditorWrapper;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReactQuill");
__turbopack_context__.k.register(_c1, "EditorWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/EditorWrapper.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/components/EditorWrapper.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=app_components_EditorWrapper_tsx_309e8db7._.js.map