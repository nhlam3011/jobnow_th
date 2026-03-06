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
"[project]/app/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ComputerDesktopIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerDesktopIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ComputerDesktopIcon.js [app-client] (ecmascript) <export default as ComputerDesktopIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingLibraryIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingLibraryIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BuildingLibraryIcon.js [app-client] (ecmascript) <export default as BuildingLibraryIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ShoppingBagIcon.js [app-client] (ecmascript) <export default as ShoppingBagIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SpeakerWaveIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SpeakerWaveIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/SpeakerWaveIcon.js [app-client] (ecmascript) <export default as SpeakerWaveIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UsersIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/UsersIcon.js [app-client] (ecmascript) <export default as UsersIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChartBarIcon.js [app-client] (ecmascript) <export default as ChartBarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingStorefrontIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingStorefrontIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BuildingStorefrontIcon.js [app-client] (ecmascript) <export default as BuildingStorefrontIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$WrenchScrewdriverIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WrenchScrewdriverIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/WrenchScrewdriverIcon.js [app-client] (ecmascript) <export default as WrenchScrewdriverIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOffice2Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOffice2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BuildingOffice2Icon.js [app-client] (ecmascript) <export default as BuildingOffice2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/HeartIcon.js [app-client] (ecmascript) <export default as HeartIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HomeModernIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeModernIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/HomeModernIcon.js [app-client] (ecmascript) <export default as HomeModernIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AcademicCapIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AcademicCapIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/AcademicCapIcon.js [app-client] (ecmascript) <export default as AcademicCapIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaintBrushIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaintBrushIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PaintBrushIcon.js [app-client] (ecmascript) <export default as PaintBrushIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ScaleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScaleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ScaleIcon.js [app-client] (ecmascript) <export default as ScaleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/TruckIcon.js [app-client] (ecmascript) <export default as TruckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BriefcaseIcon.js [app-client] (ecmascript) <export default as BriefcaseIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js [app-client] (ecmascript) <export default as DocumentTextIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/SparklesIcon.js [app-client] (ecmascript) <export default as SparklesIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BuildingOfficeIcon.js [app-client] (ecmascript) <export default as BuildingOfficeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CalculatorIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalculatorIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/CalculatorIcon.js [app-client] (ecmascript) <export default as CalculatorIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LightBulbIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LightBulbIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/LightBulbIcon.js [app-client] (ecmascript) <export default as LightBulbIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BookOpenIcon.js [app-client] (ecmascript) <export default as BookOpenIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClipboardIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ClipboardIcon.js [app-client] (ecmascript) <export default as ClipboardIcon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const INDUSTRY_ICONS = {
    "cong-nghe-thong-tin": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ComputerDesktopIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerDesktopIcon$3e$__["ComputerDesktopIcon"],
    "tai-chinh-ngan-hang": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingLibraryIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingLibraryIcon$3e$__["BuildingLibraryIcon"],
    "thuong-mai-dien-tu": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__["ShoppingBagIcon"],
    "marketing-truyen-thong": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SpeakerWaveIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SpeakerWaveIcon$3e$__["SpeakerWaveIcon"],
    "nhan-su": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UsersIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__["UsersIcon"],
    "ke-toan-tai-chinh": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__["ChartBarIcon"],
    "ban-le-dich-vu": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingStorefrontIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingStorefrontIcon$3e$__["BuildingStorefrontIcon"],
    "san-xuat-che-bien": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$WrenchScrewdriverIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WrenchScrewdriverIcon$3e$__["WrenchScrewdriverIcon"],
    "xay-dung": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOffice2Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOffice2Icon$3e$__["BuildingOffice2Icon"],
    "y-te-cham-soc-suc-khoe": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__["HeartIcon"],
    "du-lich-khach-san": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HomeModernIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeModernIcon$3e$__["HomeModernIcon"],
    "gd-dao-tao": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AcademicCapIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AcademicCapIcon$3e$__["AcademicCapIcon"],
    "kien-truc-thiet-ke": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaintBrushIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PaintBrushIcon$3e$__["PaintBrushIcon"],
    "phap-luat": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ScaleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScaleIcon$3e$__["ScaleIcon"],
    "van-tai-logistics": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__["TruckIcon"]
};
const DEFAULT_INDUSTRIES = [
    {
        name: "Công nghệ Thông tin",
        slug: "cong-nghe-thong-tin"
    },
    {
        name: "Tài chính - Ngân hàng",
        slug: "tai-chinh-ngan-hang"
    },
    {
        name: "Thương mại điện tử",
        slug: "thuong-mai-dien-tu"
    },
    {
        name: "Marketing - Truyền thông",
        slug: "marketing-truyen-thong"
    },
    {
        name: "Nhân sự",
        slug: "nhan-su"
    },
    {
        name: "Kế toán - Tài chính",
        slug: "ke-toan-tai-chinh"
    },
    {
        name: "Bán lẻ - Dịch vụ",
        slug: "ban-le-dich-vu"
    },
    {
        name: "Sản xuất - Chế biến",
        slug: "san-xuat-che-bien"
    },
    {
        name: "Xây dựng",
        slug: "xay-dung"
    },
    {
        name: "Y tế - Chăm sóc sức khỏe",
        slug: "y-te-cham-soc-suc-khoe"
    },
    {
        name: "Du lịch - Khách sạn",
        slug: "du-lich-khach-san"
    },
    {
        name: "Giáo dục - Đào tạo",
        slug: "gd-dao-tao"
    },
    {
        name: "Kiến trúc - Thiết kế",
        slug: "kien-truc-thiet-ke"
    },
    {
        name: "Pháp lý",
        slug: "phap-luat"
    },
    {
        name: "Vận tải - Logistics",
        slug: "van-tai-logistics"
    }
];
function Navbar({ industries }) {
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const closeTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const industryList = industries && industries.length > 0 ? industries : DEFAULT_INDUSTRIES;
    const isLoggedIn = status === "authenticated";
    const getDashboardLink = ()=>{
        if (!session?.user?.role) return "/login";
        switch(session.user.role){
            case "CANDIDATE":
                return "/candidate/dashboard";
            case "EMPLOYER":
                return "/employer/dashboard";
            case "ADMIN":
                return "/admin/dashboard";
            default:
                return "/login";
        }
    };
    const handleMouseEnter = (dropdown)=>{
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setActiveDropdown(dropdown);
    };
    const handleMouseLeave = ()=>{
        closeTimeoutRef.current = setTimeout(()=>{
            setActiveDropdown(null);
        }, 200); // 200ms delay before closing
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: "var(--navbar-bg)",
            backdropFilter: "blur(12px)",
            borderBottom: "1.5px solid var(--border)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-xl",
                style: {
                    display: "flex",
                    alignItems: "center",
                    height: "68px",
                    gap: "2rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            textDecoration: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "32",
                                        height: "32",
                                        rx: "8",
                                        fill: "var(--primary)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 127,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 22V14l8-6 8 6v8",
                                        stroke: "#fff",
                                        strokeWidth: "2",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 128,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "12",
                                        y: "18",
                                        width: "8",
                                        height: "8",
                                        rx: "1",
                                        fill: "#fff"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 129,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 126,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontWeight: 800,
                                    fontSize: "1.25rem",
                                    color: "var(--primary)"
                                },
                                children: [
                                    "Job",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "var(--cta)"
                                        },
                                        children: "Now"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 132,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 131,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 125,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "0.25rem",
                            marginLeft: "0.5rem",
                            flex: 1
                        },
                        className: "nav-links",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                onMouseEnter: ()=>handleMouseEnter("jobs"),
                                onMouseLeave: handleMouseLeave,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/jobs",
                                        style: {
                                            padding: "0.5rem 0.875rem",
                                            borderRadius: "6px",
                                            fontSize: "0.9375rem",
                                            fontWeight: 500,
                                            color: activeDropdown === "jobs" ? "var(--primary)" : "var(--text-muted)",
                                            textDecoration: "none",
                                            transition: "color 180ms, background 180ms",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.375rem"
                                        },
                                        children: [
                                            "Việc làm",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "12",
                                                height: "12",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M19 9l-7 7-7-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 160,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 144,
                                        columnNumber: 25
                                    }, this),
                                    activeDropdown === "jobs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: "100%",
                                            left: 0,
                                            paddingTop: "0.5rem",
                                            background: "transparent",
                                            zIndex: 1000
                                        },
                                        onMouseEnter: ()=>handleMouseEnter("jobs"),
                                        onMouseLeave: handleMouseLeave,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "var(--bg-card)",
                                                border: "1.5px solid var(--border)",
                                                borderRadius: "12px",
                                                boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                                padding: "0.75rem",
                                                width: "700px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gap: "1rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRight: "1px solid var(--border)",
                                                            paddingRight: "1rem"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/jobs",
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.75rem",
                                                                    padding: "0.6rem 0.75rem",
                                                                    borderRadius: "8px",
                                                                    textDecoration: "none",
                                                                    color: "var(--text)",
                                                                    marginBottom: "0.25rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__["BriefcaseIcon"], {
                                                                        className: "w-5 h-5",
                                                                        style: {
                                                                            color: "var(--primary)"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: "Tìm việc làm"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 195,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: "0.8125rem",
                                                                                    color: "var(--text-muted)"
                                                                                },
                                                                                children: "Tìm kiếm việc làm mới"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 196,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/candidate/saved",
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.75rem",
                                                                    padding: "0.6rem 0.75rem",
                                                                    borderRadius: "8px",
                                                                    textDecoration: "none",
                                                                    color: "var(--text)",
                                                                    marginBottom: "0.25rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__["HeartIcon"], {
                                                                        className: "w-5 h-5",
                                                                        style: {
                                                                            color: "var(--primary)"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: "Việc đã lưu"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 203,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: "0.8125rem",
                                                                                    color: "var(--text-muted)"
                                                                                },
                                                                                children: "Việc đã lưu theo dõi"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 204,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 202,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/candidate/applications",
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.75rem",
                                                                    padding: "0.6rem 0.75rem",
                                                                    borderRadius: "8px",
                                                                    textDecoration: "none",
                                                                    color: "var(--text)",
                                                                    marginBottom: "0.25rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"], {
                                                                        className: "w-5 h-5",
                                                                        style: {
                                                                            color: "var(--primary)"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 209,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: "Việc đã ứng tuyển"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 211,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: "0.8125rem",
                                                                                    color: "var(--text-muted)"
                                                                                },
                                                                                children: "Theo dõi đơn ứng tuyển"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 212,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 210,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/candidate/recommended",
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.75rem",
                                                                    padding: "0.6rem 0.75rem",
                                                                    borderRadius: "8px",
                                                                    textDecoration: "none",
                                                                    color: "var(--text)",
                                                                    marginBottom: "0.25rem"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"], {
                                                                        className: "w-5 h-5",
                                                                        style: {
                                                                            color: "var(--primary)"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 217,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: "Việc làm phù hợp"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 219,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: "0.8125rem",
                                                                                    color: "var(--text-muted)"
                                                                                },
                                                                                children: "Gợi ý việc cho bạn"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 220,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 218,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/companies",
                                                                style: {
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    gap: "0.75rem",
                                                                    padding: "0.6rem 0.75rem",
                                                                    borderRadius: "8px",
                                                                    textDecoration: "none",
                                                                    color: "var(--text)"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__["BuildingOfficeIcon"], {
                                                                        className: "w-5 h-5",
                                                                        style: {
                                                                            color: "var(--primary)"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: "Danh sách công ty"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 227,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontSize: "0.8125rem",
                                                                                    color: "var(--text-muted)"
                                                                                },
                                                                                children: "Khám phá công ty"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 228,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 226,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: "0.5rem 0.75rem",
                                                                    marginBottom: "0.5rem"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: "0.8125rem",
                                                                        fontWeight: 700,
                                                                        color: "var(--text-muted)",
                                                                        textTransform: "uppercase",
                                                                        letterSpacing: "0.05em"
                                                                    },
                                                                    children: "Ngành nghề"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "grid",
                                                                    gridTemplateColumns: "1fr",
                                                                    gap: "0.125rem",
                                                                    maxHeight: "280px",
                                                                    overflowY: "auto"
                                                                },
                                                                children: industryList.map((industry)=>{
                                                                    const IconComponent = INDUSTRY_ICONS[industry.slug] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__["BriefcaseIcon"];
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: `/jobs?industry=${industry.slug}`,
                                                                        style: {
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            gap: "0.5rem",
                                                                            padding: "0.4rem 0.75rem",
                                                                            borderRadius: "6px",
                                                                            textDecoration: "none",
                                                                            color: "var(--text)",
                                                                            fontSize: "0.875rem"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: "var(--primary)",
                                                                                    flexShrink: 0,
                                                                                    display: "flex"
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                                    lineNumber: 259,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 258,
                                                                                columnNumber: 61
                                                                            }, this),
                                                                            industry.name
                                                                        ]
                                                                    }, industry.slug, true, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 244,
                                                                        columnNumber: 57
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 188,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 178,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 166,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 139,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                onMouseEnter: ()=>handleMouseEnter("cv"),
                                onMouseLeave: handleMouseLeave,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        onClick: (e)=>e.preventDefault(),
                                        style: {
                                            padding: "0.5rem 0.875rem",
                                            borderRadius: "6px",
                                            fontSize: "0.9375rem",
                                            fontWeight: 500,
                                            color: activeDropdown === "cv" ? "var(--primary)" : "var(--text-muted)",
                                            textDecoration: "none",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.375rem"
                                        },
                                        children: [
                                            "Tạo CV",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "12",
                                                height: "12",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M19 9l-7 7-7-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 295,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 279,
                                        columnNumber: 25
                                    }, this),
                                    activeDropdown === "cv" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: "100%",
                                            left: 0,
                                            paddingTop: "0.5rem",
                                            background: "transparent",
                                            zIndex: 1000
                                        },
                                        onMouseEnter: ()=>handleMouseEnter("cv"),
                                        onMouseLeave: handleMouseLeave,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "var(--bg-card)",
                                                border: "1.5px solid var(--border)",
                                                borderRadius: "12px",
                                                boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                                padding: "0.5rem",
                                                minWidth: "260px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/candidate/resume",
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.75rem",
                                                        padding: "0.75rem",
                                                        borderRadius: "8px",
                                                        textDecoration: "none",
                                                        color: "var(--text)",
                                                        marginBottom: "0.25rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Quản lý CV"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 325,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: "0.8125rem",
                                                                        color: "var(--text-muted)"
                                                                    },
                                                                    children: "Xem và tải CV của bạn"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 325,
                                                                    columnNumber: 95
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/candidate/cv-builder",
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.75rem",
                                                        padding: "0.75rem",
                                                        borderRadius: "8px",
                                                        textDecoration: "none",
                                                        color: "var(--text)",
                                                        marginBottom: "0.25rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Tạo CV mới"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 329,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: "0.8125rem",
                                                                        color: "var(--text-muted)"
                                                                    },
                                                                    children: "Tạo CV chuyên nghiệp"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 329,
                                                                    columnNumber: 95
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/blogs/cv-guide",
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.75rem",
                                                        padding: "0.75rem",
                                                        borderRadius: "8px",
                                                        textDecoration: "none",
                                                        color: "var(--text)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__["BookOpenIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 332,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Hướng dẫn viết CV"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: "0.8125rem",
                                                                        color: "var(--text-muted)"
                                                                    },
                                                                    children: "Mẹo viết CV ấn tượng"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 102
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 333,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 313,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 301,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 274,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                onMouseEnter: ()=>handleMouseEnter("tools"),
                                onMouseLeave: handleMouseLeave,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        onClick: (e)=>e.preventDefault(),
                                        style: {
                                            padding: "0.5rem 0.875rem",
                                            borderRadius: "6px",
                                            fontSize: "0.9375rem",
                                            fontWeight: 500,
                                            color: activeDropdown === "tools" ? "var(--primary)" : "var(--text-muted)",
                                            textDecoration: "none",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.375rem"
                                        },
                                        children: [
                                            "Công cụ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "12",
                                                height: "12",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M19 9l-7 7-7-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 362,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 346,
                                        columnNumber: 25
                                    }, this),
                                    activeDropdown === "tools" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: "100%",
                                            left: 0,
                                            paddingTop: "0.5rem",
                                            background: "transparent",
                                            zIndex: 1000
                                        },
                                        onMouseEnter: ()=>handleMouseEnter("tools"),
                                        onMouseLeave: handleMouseLeave,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "var(--bg-card)",
                                                border: "1.5px solid var(--border)",
                                                borderRadius: "12px",
                                                boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                                padding: "0.5rem",
                                                minWidth: "260px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/tools/salary-calculator",
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.75rem",
                                                        padding: "0.75rem",
                                                        borderRadius: "8px",
                                                        textDecoration: "none",
                                                        color: "var(--text)",
                                                        marginBottom: "0.25rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CalculatorIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalculatorIcon$3e$__["CalculatorIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Tính lương"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 392,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: "0.8125rem",
                                                                        color: "var(--text-muted)"
                                                                    },
                                                                    children: "Tính lương Net/Gross"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 392,
                                                                    columnNumber: 95
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/tools/cv-checker",
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.75rem",
                                                        padding: "0.75rem",
                                                        borderRadius: "8px",
                                                        textDecoration: "none",
                                                        color: "var(--text)",
                                                        marginBottom: "0.25rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClipboardIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardIcon$3e$__["ClipboardIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Kiểm tra CV"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 396,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: "0.8125rem",
                                                                        color: "var(--text-muted)"
                                                                    },
                                                                    children: "Chấm điểm CV của bạn"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 396,
                                                                    columnNumber: 96
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/tools/interview-tips",
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.75rem",
                                                        padding: "0.75rem",
                                                        borderRadius: "8px",
                                                        textDecoration: "none",
                                                        color: "var(--text)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LightBulbIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LightBulbIcon$3e$__["LightBulbIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Mẹo phỏng vấn"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: "0.8125rem",
                                                                        color: "var(--text-muted)"
                                                                    },
                                                                    children: "Chuẩn bị phỏng vấn"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 98
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 380,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 368,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 341,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                onMouseEnter: ()=>handleMouseEnter("blog"),
                                onMouseLeave: handleMouseLeave,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "#",
                                        onClick: (e)=>e.preventDefault(),
                                        style: {
                                            padding: "0.5rem 0.875rem",
                                            borderRadius: "6px",
                                            fontSize: "0.9375rem",
                                            fontWeight: 500,
                                            color: activeDropdown === "blog" ? "var(--primary)" : "var(--text-muted)",
                                            textDecoration: "none",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.375rem"
                                        },
                                        children: [
                                            "Cẩm nang",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "12",
                                                height: "12",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M19 9l-7 7-7-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 430,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 429,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 413,
                                        columnNumber: 25
                                    }, this),
                                    activeDropdown === "blog" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: "100%",
                                            left: 0,
                                            paddingTop: "0.5rem",
                                            background: "transparent",
                                            zIndex: 1000
                                        },
                                        onMouseEnter: ()=>handleMouseEnter("blog"),
                                        onMouseLeave: handleMouseLeave,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "var(--bg-card)",
                                                border: "1.5px solid var(--border)",
                                                borderRadius: "12px",
                                                boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                                padding: "0.5rem",
                                                minWidth: "260px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/blogs",
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.75rem",
                                                        padding: "0.75rem",
                                                        borderRadius: "8px",
                                                        textDecoration: "none",
                                                        color: "var(--text)",
                                                        marginBottom: "0.25rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__["BookOpenIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Tất cả bài viết"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 459,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: "0.8125rem",
                                                                        color: "var(--text-muted)"
                                                                    },
                                                                    children: "Tin tức và xu hướng"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 459,
                                                                    columnNumber: 100
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 459,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/blogs/career",
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.75rem",
                                                        padding: "0.75rem",
                                                        borderRadius: "8px",
                                                        textDecoration: "none",
                                                        color: "var(--text)",
                                                        marginBottom: "0.25rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Phát triển sự nghiệp"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 463,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: "0.8125rem",
                                                                        color: "var(--text-muted)"
                                                                    },
                                                                    children: "Lời khuyên nghề nghiệp"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 463,
                                                                    columnNumber: 105
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 461,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/blogs/interview",
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.75rem",
                                                        padding: "0.75rem",
                                                        borderRadius: "8px",
                                                        textDecoration: "none",
                                                        color: "var(--text)",
                                                        marginBottom: "0.25rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Hướng dẫn phỏng vấn"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: "0.8125rem",
                                                                        color: "var(--text-muted)"
                                                                    },
                                                                    children: "Kinh nghiệm phỏng vấn"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 104
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 465,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/blogs/salary",
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.75rem",
                                                        padding: "0.75rem",
                                                        borderRadius: "8px",
                                                        textDecoration: "none",
                                                        color: "var(--text)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 470,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Bảng lương"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 471,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: "0.8125rem",
                                                                        color: "var(--text-muted)"
                                                                    },
                                                                    children: "Lương ngành nghề"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 471,
                                                                    columnNumber: 95
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 471,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 447,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 435,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 408,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 137,
                        columnNumber: 17
                    }, this),
                    !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "0.75rem",
                            alignItems: "center"
                        },
                        className: "nav-cta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: "btn-outline",
                                style: {
                                    padding: "0.5rem 1.125rem",
                                    fontSize: "0.9rem"
                                },
                                children: "Đăng nhập"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 482,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/register",
                                className: "btn-primary",
                                style: {
                                    padding: "0.5rem 1.125rem",
                                    fontSize: "0.9rem"
                                },
                                children: "Đăng ký"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 483,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 481,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            marginLeft: isLoggedIn ? "auto" : "0"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hide-mobile",
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 490,
                                        columnNumber: 25
                                    }, this),
                                    isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        onMouseEnter: ()=>handleMouseEnter("user"),
                                        onMouseLeave: handleMouseLeave,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setActiveDropdown(activeDropdown === "user" ? null : "user"),
                                                style: {
                                                    display: "block",
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: "50%",
                                                    overflow: "hidden",
                                                    cursor: "pointer",
                                                    background: "var(--bg-card)",
                                                    flexShrink: 0
                                                },
                                                children: session?.user?.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: session.user.image,
                                                    alt: "Avatar",
                                                    style: {
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "cover"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 500,
                                                    columnNumber: 41
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: "100%",
                                                        height: "100%",
                                                        background: "var(--primary-light)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        color: "#fff",
                                                        fontWeight: "bold",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: session?.user?.name?.charAt(0)?.toUpperCase() || "U"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 502,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 495,
                                                columnNumber: 33
                                            }, this),
                                            activeDropdown === "user" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "absolute",
                                                    top: "100%",
                                                    right: 0,
                                                    paddingTop: "0.5rem",
                                                    zIndex: 1000
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: "var(--bg-card)",
                                                        border: "1.5px solid var(--border)",
                                                        borderRadius: "12px",
                                                        boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                                        padding: "0.5rem",
                                                        minWidth: "220px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: "0.5rem 0.75rem",
                                                                borderBottom: "1px solid var(--border)",
                                                                marginBottom: "0.5rem"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600,
                                                                        color: "var(--text)"
                                                                    },
                                                                    children: session?.user?.name || "Người dùng"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 521,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: "0.8125rem",
                                                                        color: "var(--text-muted)",
                                                                        wordBreak: "break-all"
                                                                    },
                                                                    children: session?.user?.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 522,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 520,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: getDashboardLink(),
                                                            onClick: ()=>setActiveDropdown(null),
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "0.75rem",
                                                                padding: "0.6rem 0.75rem",
                                                                borderRadius: "8px",
                                                                textDecoration: "none",
                                                                color: "var(--text)",
                                                                marginBottom: "0.25rem",
                                                                transition: "background 0.2s"
                                                            },
                                                            onMouseEnter: (e)=>{
                                                                e.currentTarget.style.background = "var(--tag-bg)";
                                                            },
                                                            onMouseLeave: (e)=>{
                                                                e.currentTarget.style.background = "transparent";
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ComputerDesktopIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerDesktopIcon$3e$__["ComputerDesktopIcon"], {
                                                                    className: "w-5 h-5",
                                                                    style: {
                                                                        color: "var(--text-muted)"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 525,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Dashboard"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 526,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 524,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                                                    callbackUrl: "/"
                                                                }),
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "0.75rem",
                                                                padding: "0.6rem 0.75rem",
                                                                borderRadius: "8px",
                                                                textDecoration: "none",
                                                                color: "var(--danger, #EF4444)",
                                                                background: "transparent",
                                                                border: "none",
                                                                width: "100%",
                                                                cursor: "pointer",
                                                                textAlign: "left",
                                                                fontSize: "0.9375rem",
                                                                transition: "background 0.2s"
                                                            },
                                                            onMouseEnter: (e)=>{
                                                                e.currentTarget.style.background = "var(--tag-bg)";
                                                            },
                                                            onMouseLeave: (e)=>{
                                                                e.currentTarget.style.background = "transparent";
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 529,
                                                                        columnNumber: 147
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 529,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Đăng xuất"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 530,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 528,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 510,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 494,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 489,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpen(!open),
                                style: {
                                    display: "none",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: "0.5rem",
                                    color: "var(--text)"
                                },
                                className: "nav-hamburger",
                                "aria-label": "Mở menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "24",
                                    height: "24",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 541,
                                        columnNumber: 37
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 541,
                                        columnNumber: 118
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 540,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 539,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 488,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "var(--bg-card)",
                    borderTop: "1px solid var(--border)",
                    padding: "0.75rem 1rem 1rem",
                    maxHeight: "calc(100vh - 68px)",
                    overflowY: "auto"
                },
                className: "nav-mobile-menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderBottom: "1px solid var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveDropdown(activeDropdown === "m-jobs" ? null : "m-jobs"),
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    padding: "0.875rem 0.5rem",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    color: "var(--text)",
                                    fontWeight: 600,
                                    fontSize: "0.9375rem"
                                },
                                children: [
                                    "Việc làm",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        viewBox: "0 0 24 24",
                                        style: {
                                            transition: "transform 200ms",
                                            transform: activeDropdown === "m-jobs" ? "rotate(180deg)" : "rotate(0)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M19 9l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 557,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 556,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 551,
                                columnNumber: 25
                            }, this),
                            activeDropdown === "m-jobs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingBottom: "0.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/jobs",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            color: "var(--text)",
                                            fontSize: "0.875rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__["BriefcaseIcon"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: "var(--primary)",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 563,
                                                columnNumber: 37
                                            }, this),
                                            "Tìm việc làm"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 562,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/candidate/saved",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            color: "var(--text)",
                                            fontSize: "0.875rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__["HeartIcon"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: "var(--primary)",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 567,
                                                columnNumber: 37
                                            }, this),
                                            "Việc đã lưu"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 566,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/candidate/applications",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            color: "var(--text)",
                                            fontSize: "0.875rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: "var(--primary)",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 571,
                                                columnNumber: 37
                                            }, this),
                                            "Việc đã ứng tuyển"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 570,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/candidate/recommended",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            color: "var(--text)",
                                            fontSize: "0.875rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: "var(--primary)",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 575,
                                                columnNumber: 37
                                            }, this),
                                            "Việc làm phù hợp"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 574,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/companies",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            color: "var(--text)",
                                            fontSize: "0.875rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__["BuildingOfficeIcon"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: "var(--primary)",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 579,
                                                columnNumber: 37
                                            }, this),
                                            "Danh sách công ty"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 578,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "0.5rem 0.75rem 0.25rem",
                                            marginTop: "0.25rem"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "0.75rem",
                                                fontWeight: 700,
                                                color: "var(--text-muted)",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.05em"
                                            },
                                            children: "Ngành nghề"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 584,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 583,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            gap: "0.125rem"
                                        },
                                        children: industryList.map((industry)=>{
                                            const IconComponent = INDUSTRY_ICONS[industry.slug] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__["BriefcaseIcon"];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/jobs?industry=${industry.slug}`,
                                                onClick: ()=>setOpen(false),
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.375rem",
                                                    padding: "0.375rem 0.75rem",
                                                    borderRadius: "6px",
                                                    textDecoration: "none",
                                                    color: "var(--text)",
                                                    fontSize: "0.8125rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--primary)",
                                                            flexShrink: 0,
                                                            display: "flex"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 591,
                                                            columnNumber: 123
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                        lineNumber: 591,
                                                        columnNumber: 49
                                                    }, this),
                                                    industry.name
                                                ]
                                            }, industry.slug, true, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 590,
                                                columnNumber: 45
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 586,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 561,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 550,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderBottom: "1px solid var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveDropdown(activeDropdown === "m-cv" ? null : "m-cv"),
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    padding: "0.875rem 0.5rem",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    color: "var(--text)",
                                    fontWeight: 600,
                                    fontSize: "0.9375rem"
                                },
                                children: [
                                    "Tạo CV",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        viewBox: "0 0 24 24",
                                        style: {
                                            transition: "transform 200ms",
                                            transform: activeDropdown === "m-cv" ? "rotate(180deg)" : "rotate(0)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M19 9l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 609,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 608,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 603,
                                columnNumber: 25
                            }, this),
                            activeDropdown === "m-cv" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingBottom: "0.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/candidate/resume",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            color: "var(--text)",
                                            fontSize: "0.875rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: "var(--primary)",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 615,
                                                columnNumber: 37
                                            }, this),
                                            "Quản lý CV"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 614,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/candidate/cv-builder",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            color: "var(--text)",
                                            fontSize: "0.875rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: "var(--primary)",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 619,
                                                columnNumber: 37
                                            }, this),
                                            "Tạo CV mới"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 618,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/blogs/cv-guide",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            color: "var(--text)",
                                            fontSize: "0.875rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__["BookOpenIcon"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: "var(--primary)",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 623,
                                                columnNumber: 37
                                            }, this),
                                            "Hướng dẫn viết CV"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 622,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 613,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 602,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderBottom: "1px solid var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveDropdown(activeDropdown === "m-tools" ? null : "m-tools"),
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    padding: "0.875rem 0.5rem",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    color: "var(--text)",
                                    fontWeight: 600,
                                    fontSize: "0.9375rem"
                                },
                                children: [
                                    "Công cụ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        viewBox: "0 0 24 24",
                                        style: {
                                            transition: "transform 200ms",
                                            transform: activeDropdown === "m-tools" ? "rotate(180deg)" : "rotate(0)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M19 9l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 638,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 637,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 632,
                                columnNumber: 25
                            }, this),
                            activeDropdown === "m-tools" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingBottom: "0.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/tools/salary-calculator",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            color: "var(--text)",
                                            fontSize: "0.875rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CalculatorIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalculatorIcon$3e$__["CalculatorIcon"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: "var(--primary)",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 644,
                                                columnNumber: 37
                                            }, this),
                                            "Tính lương"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 643,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/tools/cv-checker",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            color: "var(--text)",
                                            fontSize: "0.875rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClipboardIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardIcon$3e$__["ClipboardIcon"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: "var(--primary)",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 648,
                                                columnNumber: 37
                                            }, this),
                                            "Kiểm tra CV"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 647,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/tools/interview-tips",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            color: "var(--text)",
                                            fontSize: "0.875rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LightBulbIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LightBulbIcon$3e$__["LightBulbIcon"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: "var(--primary)",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 652,
                                                columnNumber: 37
                                            }, this),
                                            "Mẹo phỏng vấn"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 651,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 642,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 631,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderBottom: "1px solid var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveDropdown(activeDropdown === "m-blog" ? null : "m-blog"),
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    padding: "0.875rem 0.5rem",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    color: "var(--text)",
                                    fontWeight: 600,
                                    fontSize: "0.9375rem"
                                },
                                children: [
                                    "Cẩm nang",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "16",
                                        height: "16",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        viewBox: "0 0 24 24",
                                        style: {
                                            transition: "transform 200ms",
                                            transform: activeDropdown === "m-blog" ? "rotate(180deg)" : "rotate(0)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M19 9l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 667,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 666,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 661,
                                columnNumber: 25
                            }, this),
                            activeDropdown === "m-blog" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingBottom: "0.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/blogs",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            color: "var(--text)",
                                            fontSize: "0.875rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__["BookOpenIcon"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: "var(--primary)",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 673,
                                                columnNumber: 37
                                            }, this),
                                            "Tất cả bài viết"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 672,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/blogs/career",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            color: "var(--text)",
                                            fontSize: "0.875rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: "var(--primary)",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 677,
                                                columnNumber: 37
                                            }, this),
                                            "Phát triển sự nghiệp"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 676,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/blogs/interview",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            color: "var(--text)",
                                            fontSize: "0.875rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: "var(--primary)",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 681,
                                                columnNumber: 37
                                            }, this),
                                            "Hướng dẫn phỏng vấn"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 680,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/blogs/salary",
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.625rem",
                                            padding: "0.5rem 0.75rem",
                                            borderRadius: "8px",
                                            textDecoration: "none",
                                            color: "var(--text)",
                                            fontSize: "0.875rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: "var(--primary)",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 685,
                                                columnNumber: 37
                                            }, this),
                                            "Bảng lương"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 684,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 671,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 660,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "0.875rem 0.5rem",
                            borderBottom: "1px solid var(--border)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontWeight: 600,
                                    fontSize: "0.9375rem",
                                    color: "var(--text)"
                                },
                                children: "Giao diện Sáng / Tối"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 694,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 695,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 693,
                        columnNumber: 21
                    }, this),
                    isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "1rem 0.5rem",
                            borderBottom: "1px solid var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    marginBottom: "1rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "block",
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                            background: "var(--bg-card)",
                                            flexShrink: 0
                                        },
                                        children: session?.user?.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: session.user.image,
                                            alt: "Avatar",
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 704,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "100%",
                                                height: "100%",
                                                background: "var(--primary-light)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#fff",
                                                fontWeight: "bold",
                                                fontSize: "1.1rem"
                                            },
                                            children: session?.user?.name?.charAt(0)?.toUpperCase() || "U"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 706,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 702,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            overflow: "hidden"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 600,
                                                    color: "var(--text)",
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis"
                                                },
                                                children: session?.user?.name || "Người dùng"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 712,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "0.8125rem",
                                                    color: "var(--text-muted)",
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis"
                                                },
                                                children: session?.user?.email
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 713,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 711,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 701,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: getDashboardLink(),
                                onClick: ()=>setOpen(false),
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    padding: "0.6rem 0.75rem",
                                    borderRadius: "8px",
                                    textDecoration: "none",
                                    color: "var(--text)",
                                    marginBottom: "0.25rem",
                                    background: "var(--tag-bg)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ComputerDesktopIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerDesktopIcon$3e$__["ComputerDesktopIcon"], {
                                        className: "w-5 h-5",
                                        style: {
                                            color: "var(--text-muted)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 718,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 500
                                        },
                                        children: "Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 719,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 717,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                        callbackUrl: "/"
                                    }),
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    padding: "0.6rem 0.75rem",
                                    borderRadius: "8px",
                                    textDecoration: "none",
                                    color: "var(--danger, #EF4444)",
                                    background: "transparent",
                                    border: "none",
                                    width: "100%",
                                    cursor: "pointer",
                                    textAlign: "left",
                                    fontSize: "0.9375rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "20",
                                        height: "20",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 722,
                                            columnNumber: 131
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 722,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontWeight: 500
                                        },
                                        children: "Đăng xuất"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 723,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 721,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 700,
                        columnNumber: 25
                    }, this),
                    !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "0.75rem",
                            marginTop: "1rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                onClick: ()=>setOpen(false),
                                className: "btn-outline",
                                style: {
                                    flex: 1,
                                    justifyContent: "center"
                                },
                                children: "Đăng nhập"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 731,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/register",
                                onClick: ()=>setOpen(false),
                                className: "btn-primary",
                                style: {
                                    flex: 1,
                                    justifyContent: "center"
                                },
                                children: "Đăng ký"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 732,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 730,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 548,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Navbar.tsx",
        lineNumber: 113,
        columnNumber: 9
    }, this);
}
_s(Navbar, "FXZXrzPmem6Fo4FuwX3Tt4a6BVY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const FOOTER_LINKS = [
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
                label: "Tạo CV mới",
                href: "/candidate/cv-builder"
            },
            {
                label: "Việc đã lưu",
                href: "/candidate/saved"
            },
            {
                label: "Theo dõi ứng tuyển",
                href: "/candidate/applications"
            },
            {
                label: "Việc làm phù hợp",
                href: "/candidate/recommended"
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
                label: "Quản lý tin",
                href: "/employer/jobs"
            },
            {
                label: "Trang thương hiệu",
                href: "/employer/company"
            },
            {
                label: "Dashboard",
                href: "/employer/dashboard"
            }
        ]
    },
    {
        title: "Ngành nghề",
        links: [
            {
                label: "Công nghệ Thông tin",
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
            },
            {
                label: "Xem tất cả ngành",
                href: "/jobs"
            }
        ]
    },
    {
        title: "Công cụ & Tài nguyên",
        links: [
            {
                label: "Tính lương",
                href: "/tools/salary-calculator"
            },
            {
                label: "Kiểm tra CV",
                href: "/tools/cv-checker"
            },
            {
                label: "Mẹo phỏng vấn",
                href: "/tools/interview-tips"
            },
            {
                label: "Cẩm nang nghề nghiệp",
                href: "/blogs"
            },
            {
                label: "Danh sách công ty",
                href: "/companies"
            }
        ]
    }
];
const SOCIALS = [
    {
        label: "Facebook",
        path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    },
    {
        label: "LinkedIn",
        path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
    },
    {
        label: "YouTube",
        path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z"
    }
];
function Footer() {
    _s();
    const [openSection, setOpenSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: "var(--bg-card)",
            borderTop: "1.5px solid var(--border)",
            marginTop: "auto"
        },
        className: "jsx-6a6afad8755480e5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    paddingTop: "3rem",
                    paddingBottom: "2rem"
                },
                className: "jsx-6a6afad8755480e5" + " " + "container-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "1.25fr repeat(4, 1fr)",
                            gap: "2.5rem",
                            marginBottom: "2.5rem"
                        },
                        className: "jsx-6a6afad8755480e5" + " " + "footer-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6a6afad8755480e5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            marginBottom: "0.875rem"
                                        },
                                        className: "jsx-6a6afad8755480e5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "28",
                                                height: "28",
                                                viewBox: "0 0 32 32",
                                                fill: "none",
                                                className: "jsx-6a6afad8755480e5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        width: "32",
                                                        height: "32",
                                                        rx: "8",
                                                        fill: "var(--primary)",
                                                        className: "jsx-6a6afad8755480e5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M8 22V14l8-6 8 6v8",
                                                        stroke: "#fff",
                                                        strokeWidth: "2",
                                                        strokeLinejoin: "round",
                                                        className: "jsx-6a6afad8755480e5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "12",
                                                        y: "18",
                                                        width: "8",
                                                        height: "8",
                                                        rx: "1",
                                                        fill: "#fff",
                                                        className: "jsx-6a6afad8755480e5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 81,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 800,
                                                    fontSize: "1.2rem",
                                                    color: "var(--text)"
                                                },
                                                className: "jsx-6a6afad8755480e5",
                                                children: [
                                                    "Job",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--cta)"
                                                        },
                                                        className: "jsx-6a6afad8755480e5",
                                                        children: "Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 86,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 80,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "0.875rem",
                                            color: "var(--text-muted)",
                                            lineHeight: 1.7,
                                            maxWidth: "240px",
                                            marginBottom: "1.25rem"
                                        },
                                        className: "jsx-6a6afad8755480e5",
                                        children: "Nền tảng tuyển dụng đa ngành nghề hàng đầu Việt Nam. Kết nối ứng viên với công ty uy tín."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 90,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "0.625rem"
                                        },
                                        className: "jsx-6a6afad8755480e5",
                                        children: SOCIALS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                "aria-label": s.label,
                                                style: {
                                                    width: "36px",
                                                    height: "36px",
                                                    borderRadius: "8px",
                                                    background: "var(--tag-bg)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    transition: "all 200ms",
                                                    cursor: "pointer",
                                                    border: "1px solid var(--border)"
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.borderColor = "var(--primary-light)";
                                                    e.currentTarget.style.background = "var(--bg)";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.borderColor = "var(--border)";
                                                    e.currentTarget.style.background = "var(--tag-bg)";
                                                },
                                                className: "jsx-6a6afad8755480e5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "15",
                                                    height: "15",
                                                    fill: "none",
                                                    stroke: "var(--text-muted)",
                                                    strokeWidth: "1.5",
                                                    viewBox: "0 0 24 24",
                                                    className: "jsx-6a6afad8755480e5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: s.path,
                                                        className: "jsx-6a6afad8755480e5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 37
                                                }, this)
                                            }, s.label, false, {
                                                fileName: "[project]/app/components/Footer.tsx",
                                                lineNumber: 97,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Footer.tsx",
                                        lineNumber: 95,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this),
                            FOOTER_LINKS.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6a6afad8755480e5" + " " + "footer-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            onClick: ()=>setOpenSection(openSection === col.title ? null : col.title),
                                            className: "jsx-6a6afad8755480e5" + " " + `footer-col-title ${openSection === col.title ? 'open' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6a6afad8755480e5",
                                                    children: col.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6a6afad8755480e5" + " " + "footer-icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "18",
                                                        height: "18",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        className: "jsx-6a6afad8755480e5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "6 9 12 15 18 9",
                                                            className: "jsx-6a6afad8755480e5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Footer.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 121,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "jsx-6a6afad8755480e5" + " " + `footer-links-list ${openSection === col.title ? 'open' : ''}`,
                                            children: col.links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-6a6afad8755480e5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: l.href,
                                                        style: {
                                                            color: "var(--text-muted)",
                                                            textDecoration: "none",
                                                            fontSize: "0.875rem",
                                                            transition: "color 180ms"
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.color = "var(--primary)";
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.color = "var(--text-muted)";
                                                        },
                                                        children: l.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/Footer.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 41
                                                    }, this)
                                                }, l.label, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 37
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 132,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, col.title, true, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 120,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Footer.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderTop: "1px solid var(--border)",
                            paddingTop: "1.5rem"
                        },
                        className: "jsx-6a6afad8755480e5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: "0.75rem"
                            },
                            className: "jsx-6a6afad8755480e5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "0.8125rem",
                                        color: "var(--text-muted)"
                                    },
                                    className: "jsx-6a6afad8755480e5",
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " JobNow. Nền tảng tuyển dụng đa ngành nghề hàng đầu Việt Nam."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 157,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "1.5rem"
                                    },
                                    className: "jsx-6a6afad8755480e5",
                                    children: [
                                        {
                                            label: "Điều khoản",
                                            href: "#"
                                        },
                                        {
                                            label: "Bảo mật",
                                            href: "#"
                                        },
                                        {
                                            label: "Liên hệ",
                                            href: "#"
                                        }
                                    ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: l.href,
                                            style: {
                                                fontSize: "0.8125rem",
                                                color: "var(--text-muted)",
                                                textDecoration: "none",
                                                transition: "color 180ms"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.color = "var(--primary)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.color = "var(--text-muted)";
                                            },
                                            children: l.label
                                        }, l.label, false, {
                                            fileName: "[project]/app/components/Footer.tsx",
                                            lineNumber: 166,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Footer.tsx",
                                    lineNumber: 160,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 153,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Footer.tsx",
                        lineNumber: 152,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Footer.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "6a6afad8755480e5",
                children: ".footer-col-title.jsx-6a6afad8755480e5{text-transform:uppercase;letter-spacing:.06em;color:var(--text);justify-content:space-between;align-items:center;margin-bottom:1rem;font-size:.8125rem;font-weight:700;transition:color .2s;display:flex}.footer-icon.jsx-6a6afad8755480e5{color:var(--text-muted);display:none}.footer-links-list.jsx-6a6afad8755480e5{flex-direction:column;gap:.5rem;list-style:none;display:flex}@media (width<=768px){.footer-grid.jsx-6a6afad8755480e5{grid-template-columns:1fr 1fr!important;gap:2rem!important}}@media (width<=576px){.footer-grid.jsx-6a6afad8755480e5{grid-template-columns:1fr!important;gap:1.5rem!important}.footer-col.jsx-6a6afad8755480e5{border-bottom:1px solid var(--border);padding-bottom:.5rem}.footer-col.jsx-6a6afad8755480e5:last-child{border-bottom:none}.footer-col-title.jsx-6a6afad8755480e5{cursor:pointer;margin-bottom:0;padding:.75rem 0}.footer-icon.jsx-6a6afad8755480e5{transition:transform .2s;display:block}.footer-col-title.open.jsx-6a6afad8755480e5 .footer-icon.jsx-6a6afad8755480e5{color:var(--primary);transform:rotate(180deg)}.footer-col-title.open.jsx-6a6afad8755480e5{color:var(--primary)}.footer-links-list.jsx-6a6afad8755480e5{padding-top:.5rem;padding-bottom:1rem;display:none}.footer-links-list.open.jsx-6a6afad8755480e5{animation:.3s ease-out slideDown;display:flex}}@keyframes slideDown{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Footer.tsx",
        lineNumber: 67,
        columnNumber: 9
    }, this);
}
_s(Footer, "GqUF/tUA3fcnmm7TlBjyhF0/iLs=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:9c2b3f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vam9icy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgc2VtYW50aWNKb2JTZWFyY2ggfSBmcm9tIFwiQC9saWIvYWlcIjtcblxuZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGV4dFxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvW15hLXowLTlcXHMtXS9nLCBcIlwiKVxuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIi1cIilcbiAgICAgICAgLnJlcGxhY2UoLy0rL2csIFwiLVwiKVxuICAgICAgICAudHJpbSgpICsgXCItXCIgKyBEYXRlLm5vdygpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Sm9icyhwYXJhbXM/OiB7XG4gICAgcT86IHN0cmluZztcbiAgICBsb2M/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBzdGF0dXM/OiBzdHJpbmc7XG4gICAgaW5kdXN0cnlJZD86IHN0cmluZztcbiAgICBzYWxhcnk/OiBzdHJpbmc7XG4gICAgdXNlQUk/OiBib29sZWFuO1xufSkge1xuICAgIGNvbnN0IHdoZXJlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuXG4gICAgaWYgKHBhcmFtcz8uc3RhdHVzKSB7XG4gICAgICAgIHdoZXJlLnN0YXR1cyA9IHBhcmFtcy5zdGF0dXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hlcmUuc3RhdHVzID0gXCJBQ1RJVkVcIjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zPy5xICYmIHBhcmFtcy51c2VBSSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWlKb2JzID0gYXdhaXQgc2VtYW50aWNKb2JTZWFyY2gocGFyYW1zLnEsIDUwKTtcbiAgICAgICAgICAgIGlmIChhaUpvYnMgJiYgQXJyYXkuaXNBcnJheShhaUpvYnMpICYmIGFpSm9icy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFpSm9icy5tYXAoKGpvYjogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBpZDogam9iLmlkLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogam9iLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzbHVnOiBqb2Iuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGpvYi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZW1lbnRzOiBqb2IucmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBiZW5lZml0czogam9iLmJlbmVmaXRzLFxuICAgICAgICAgICAgICAgICAgICBzYWxhcnlNaW46IGpvYi5zYWxhcnlNaW4sXG4gICAgICAgICAgICAgICAgICAgIHNhbGFyeU1heDogam9iLnNhbGFyeU1heCxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGpvYi5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgam9iVHlwZTogam9iLmpvYlR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHNraWxsczogam9iLnNraWxscyxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBqb2IuY3JlYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICBjb21wYW55OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBqb2IuY29tcGFueU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBqb2IuY29tcGFueUxvZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiBqb2IuY29tcGFueVNsdWcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJpZmllZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNpbWlsYXJpdHk6IGpvYi5zaW1pbGFyaXR5LFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFJIHNlYXJjaCBmYWlsZWQsIGZhbGxpbmcgYmFjayB0byB0ZXh0IHNlYXJjaDpcIiwgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zPy5xICYmICFwYXJhbXMudXNlQUkpIHtcbiAgICAgICAgd2hlcmUuT1IgPSBbXG4gICAgICAgICAgICB7IHRpdGxlOiB7IGNvbnRhaW5zOiBwYXJhbXMucSwgbW9kZTogXCJpbnNlbnNpdGl2ZVwiIH0gfSxcbiAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IHsgY29udGFpbnM6IHBhcmFtcy5xLCBtb2RlOiBcImluc2Vuc2l0aXZlXCIgfSB9LFxuICAgICAgICAgICAgeyBza2lsbHM6IHsgaGFzU29tZTogW3BhcmFtcy5xXSB9IH0sXG4gICAgICAgIF07XG4gICAgfVxuICAgIGlmIChwYXJhbXM/LmxvYykge1xuICAgICAgICB3aGVyZS5sb2NhdGlvbiA9IHsgY29udGFpbnM6IHBhcmFtcy5sb2MsIG1vZGU6IFwiaW5zZW5zaXRpdmVcIiB9O1xuICAgIH1cbiAgICBpZiAocGFyYW1zPy50eXBlKSB3aGVyZS5qb2JUeXBlID0gcGFyYW1zLnR5cGU7XG4gICAgaWYgKHBhcmFtcz8uaW5kdXN0cnlJZCkgd2hlcmUuaW5kdXN0cnlJZCA9IHBhcmFtcy5pbmR1c3RyeUlkO1xuXG4gICAgLy8gU2FsYXJ5IHJhbmdlIGZpbHRlclxuICAgIGlmIChwYXJhbXM/LnNhbGFyeSkge1xuICAgICAgICBjb25zdCBbbWluU2FsYXJ5LCBtYXhTYWxhcnldID0gcGFyYW1zLnNhbGFyeS5zcGxpdChcIi1cIikubWFwKE51bWJlcik7XG4gICAgICAgIHdoZXJlLkFORCA9IFtcbiAgICAgICAgICAgIHsgc2FsYXJ5TWluOiB7IGd0ZTogbWluU2FsYXJ5IH0gfSxcbiAgICAgICAgICAgIHsgT1I6IFt7IHNhbGFyeU1heDogeyBsdGU6IG1heFNhbGFyeSB9IH0sIHsgc2FsYXJ5TWF4OiB7IGd0ZTogbWluU2FsYXJ5IH0gfV0gfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmUsXG4gICAgICAgIGluY2x1ZGU6IHsgY29tcGFueTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgbG9nbzogdHJ1ZSwgc2x1ZzogdHJ1ZSwgdmVyaWZpZWQ6IHRydWUgfSB9IH0sXG4gICAgICAgIG9yZGVyQnk6IHBhcmFtcz8ucSA/IHVuZGVmaW5lZCA6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICB0YWtlOiA1MCxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEpvYkJ5U2x1ZyhzbHVnOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gcHJpc21hLmpvYi5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgc2x1ZyB9LFxuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICBjb21wYW55OiB0cnVlLFxuICAgICAgICAgICAgaW5kdXN0cnk6IHRydWUsXG4gICAgICAgICAgICBfY291bnQ6IHsgc2VsZWN0OiB7IGFwcGxpY2F0aW9uczogdHJ1ZSB9IH1cbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEpvYkJ5SWQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgICBpbmNsdWRlOiB7IGNvbXBhbnk6IHRydWUsIGFwcGxpY2F0aW9uczogeyBpbmNsdWRlOiB7IGNhbmRpZGF0ZTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgZW1haWw6IHRydWUsIGltYWdlOiB0cnVlLCBjYW5kaWRhdGVQcm9maWxlOiB0cnVlIH0gfSB9IH0sIF9jb3VudDogeyBzZWxlY3Q6IHsgYXBwbGljYXRpb25zOiB0cnVlIH0gfSB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSm9iKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyIHx8IHNlc3Npb24udXNlci5yb2xlICE9PSBcIkVNUExPWUVSXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiS2jDtG5nIGPDsyBxdXnhu4FuIHRydXkgY+G6rXBcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHJlcXVpcmVtZW50cyA9IGZvcm1EYXRhLmdldChcInJlcXVpcmVtZW50c1wiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgYmVuZWZpdHMgPSBmb3JtRGF0YS5nZXQoXCJiZW5lZml0c1wiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgbG9jYXRpb24gPSBmb3JtRGF0YS5nZXQoXCJsb2NhdGlvblwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgam9iVHlwZSA9IGZvcm1EYXRhLmdldChcImpvYlR5cGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHNhbGFyeU1pbiA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcInNhbGFyeU1pblwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3Qgc2FsYXJ5TWF4ID0gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwic2FsYXJ5TWF4XCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBza2lsbHNSYXcgPSBmb3JtRGF0YS5nZXQoXCJza2lsbHNcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHNraWxscyA9IHNraWxsc1JhdyA/IHNraWxsc1Jhdy5zcGxpdChcIixcIikubWFwKChzKSA9PiBzLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pIDogW107XG4gICAgY29uc3QgaW5kdXN0cnlTbHVnID0gZm9ybURhdGEuZ2V0KFwiaW5kdXN0cnlJZFwiKSBhcyBzdHJpbmc7XG5cbiAgICAvLyBHZXQgZW1wbG95ZXIncyBjb21wYW55XG4gICAgY29uc3QgZW1wbG95ZXIgPSBhd2FpdCBwcmlzbWEuZW1wbG95ZXJQcm9maWxlLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFlbXBsb3llcj8uY29tcGFueUlkKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkLhuqFuIGNoxrBhIGPDsyB0aMO0bmcgdGluIGPDtG5nIHR5LiBWdWkgbMOybmcgY+G6rXAgbmjhuq10IHRyYW5nIEPDtG5nIHR5IHRyxrDhu5tjLlwiIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IGluZHVzdHJ5IGJ5IHNsdWcgaWYgcHJvdmlkZWRcbiAgICBsZXQgaW5kdXN0cnlJZCA9IG51bGw7XG4gICAgaWYgKGluZHVzdHJ5U2x1Zykge1xuICAgICAgICBjb25zdCBpbmR1c3RyeSA9IGF3YWl0IHByaXNtYS5pbmR1c3RyeS5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IHNsdWc6IGluZHVzdHJ5U2x1ZyB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kdXN0cnkpIHtcbiAgICAgICAgICAgIGluZHVzdHJ5SWQgPSBpbmR1c3RyeS5pZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGpvYiA9IGF3YWl0IHByaXNtYS5qb2IuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29tcGFueUlkOiBlbXBsb3llci5jb21wYW55SWQsXG4gICAgICAgICAgICBwb3N0ZWRCeUlkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIHNsdWc6IHNsdWdpZnkodGl0bGUpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZXF1aXJlbWVudHMsXG4gICAgICAgICAgICBiZW5lZml0cyxcbiAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgICAgam9iVHlwZTogam9iVHlwZSBhcyBcIkZVTExfVElNRVwiIHwgXCJQQVJUX1RJTUVcIiB8IFwiUkVNT1RFXCIgfCBcIklOVEVSTlNISVBcIiB8IFwiQ09OVFJBQ1RcIixcbiAgICAgICAgICAgIHNhbGFyeU1pbixcbiAgICAgICAgICAgIHNhbGFyeU1heCxcbiAgICAgICAgICAgIHNraWxscyxcbiAgICAgICAgICAgIHN0YXR1czogXCJQRU5ESU5HXCIsXG4gICAgICAgICAgICBpbmR1c3RyeUlkLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBnZW5lcmF0ZUpvYkVtYmVkZGluZyB9ID0gYXdhaXQgaW1wb3J0KFwiQC9saWIvYWlcIik7XG4gICAgICAgIGF3YWl0IGdlbmVyYXRlSm9iRW1iZWRkaW5nKGpvYi5pZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGdlbmVyYXRlIGVtYmVkZGluZyBmb3IgbmV3IGpvYjpcIiwgZSk7XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZW1wbG95ZXIvam9ic1wiKTtcbiAgICByZWRpcmVjdChcIi9lbXBsb3llci9qb2JzXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGlkOiBqb2IuaWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUpvYlN0YXR1cyhqb2JJZDogc3RyaW5nLCBzdGF0dXM6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyIHx8IHNlc3Npb24udXNlci5yb2xlICE9PSBcIkFETUlOXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiS2jDtG5nIGPDsyBxdXnhu4FuXCIgfTtcbiAgICB9XG4gICAgY29uc3Qgam9iID0gYXdhaXQgcHJpc21hLmpvYi51cGRhdGUoe1xuICAgICAgICB3aGVyZTogeyBpZDogam9iSWQgfSxcbiAgICAgICAgZGF0YTogeyBzdGF0dXM6IHN0YXR1cyBhcyBcIkFDVElWRVwiIHwgXCJSRUpFQ1RFRFwiIHwgXCJDTE9TRURcIiB9LFxuICAgICAgICBzZWxlY3Q6IHsgdGl0bGU6IHRydWUsIHBvc3RlZEJ5SWQ6IHRydWUgfSxcbiAgICB9KTtcblxuICAgIGlmIChzdGF0dXMgPT09IFwiQUNUSVZFXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZ2VuZXJhdGVKb2JFbWJlZGRpbmcgfSA9IGF3YWl0IGltcG9ydChcIkAvbGliL2FpXCIpO1xuICAgICAgICAgICAgYXdhaXQgZ2VuZXJhdGVKb2JFbWJlZGRpbmcoam9iSWQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGdlbmVyYXRlIGVtYmVkZGluZyBmb3Igam9iOlwiLCBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdGlmeSBlbXBsb3llciBhYm91dCBqb2Igc3RhdHVzXG4gICAgaWYgKGpvYi5wb3N0ZWRCeUlkKSB7XG4gICAgICAgIGNvbnN0IHN0YXR1c01zZyA9IHN0YXR1cyA9PT0gXCJBQ1RJVkVcIiA/IFwixJHDoyDEkcaw4bujYyBkdXnhu4d0XCIgOiBzdGF0dXMgPT09IFwiUkVKRUNURURcIiA/IFwixJHDoyBi4buLIHThu6sgY2jhu5FpXCIgOiBcIsSRw6MgxJHGsOG7o2MgxJHDs25nXCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGpvYi5wb3N0ZWRCeUlkLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBzdGF0dXMgPT09IFwiQUNUSVZFXCIgPyBcIkpPQl9BUFBST1ZFRFwiIDogc3RhdHVzID09PSBcIlJFSkVDVEVEXCIgPyBcIkpPQl9SRUpFQ1RFRFwiIDogXCJBUFBMSUNBVElPTl9TVEFUVVNcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGBUaW4gdHV54buDbiBk4bulbmcgJHtzdGF0dXNNc2d9YCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYFRpbiBcIiR7am9iLnRpdGxlfVwiICR7c3RhdHVzTXNnfSBi4bufaSBxdeG6o24gdHLhu4sgdmnDqm4uYCxcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZW1wbG95ZXIvam9ic1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoXykgeyAvKiBpZ25vcmUgKi8gfVxuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2pvYnNcIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZXJKb2JzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZWRpcmVjdChcIi9sb2dpblwiKTtcblxuICAgIGNvbnN0IGVtcGxveWVyID0gYXdhaXQgcHJpc21hLmVtcGxveWVyUHJvZmlsZS5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQgfSxcbiAgICB9KTtcbiAgICBpZiAoIWVtcGxveWVyPy5jb21wYW55SWQpIHJldHVybiBbXTtcblxuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgY29tcGFueUlkOiBlbXBsb3llci5jb21wYW55SWQgfSxcbiAgICAgICAgaW5jbHVkZTogeyBfY291bnQ6IHsgc2VsZWN0OiB7IGFwcGxpY2F0aW9uczogdHJ1ZSB9IH0gfSxcbiAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVKb2Ioam9iSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyIHx8IHNlc3Npb24udXNlci5yb2xlICE9PSBcIkVNUExPWUVSXCIpIHJldHVybiB7IGVycm9yOiBcIktow7RuZyBjw7MgcXV54buBblwiIH07XG4gICAgYXdhaXQgcHJpc21hLmpvYi5kZWxldGUoeyB3aGVyZTogeyBpZDogam9iSWQgfSB9KTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9lbXBsb3llci9qb2JzXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEpvYnNGb3JBZG1pbigpIHtcbiAgICByZXR1cm4gcHJpc21hLmpvYi5maW5kTWFueSh7XG4gICAgICAgIGluY2x1ZGU6IHsgY29tcGFueTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSB9IH0sIF9jb3VudDogeyBzZWxlY3Q6IHsgYXBwbGljYXRpb25zOiB0cnVlIH0gfSB9LFxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEluZHVzdHJpZXMoKSB7XG4gICAgcmV0dXJuIHByaXNtYS5pbmR1c3RyeS5maW5kTWFueSh7XG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogXCJhc2NcIiB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsSW5kdXN0cmllcygpIHtcbiAgICByZXR1cm4gcHJpc21hLmluZHVzdHJ5LmZpbmRNYW55KHtcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JMb2NhdGlvbnMoKSB7XG4gICAgY29uc3Qgam9icyA9IGF3YWl0IHByaXNtYS5qb2IuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyBzdGF0dXM6IFwiQUNUSVZFXCIgfSxcbiAgICAgICAgc2VsZWN0OiB7IGxvY2F0aW9uOiB0cnVlIH0sXG4gICAgICAgIGRpc3RpbmN0OiBbXCJsb2NhdGlvblwiXSxcbiAgICB9KTtcbiAgICByZXR1cm4gam9icy5tYXAoaiA9PiBqLmxvY2F0aW9uKS5maWx0ZXIoQm9vbGVhbikuc29ydCgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Sm9iRmlsdGVycygpIHtcbiAgICBjb25zdCBbaW5kdXN0cmllcywgbG9jYXRpb25zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJpc21hLmluZHVzdHJ5LmZpbmRNYW55KHsgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0gfSksXG4gICAgICAgIHByaXNtYS5qb2IuZmluZE1hbnkoe1xuICAgICAgICAgICAgd2hlcmU6IHsgc3RhdHVzOiBcIkFDVElWRVwiIH0sXG4gICAgICAgICAgICBzZWxlY3Q6IHsgbG9jYXRpb246IHRydWUgfSxcbiAgICAgICAgICAgIGRpc3RpbmN0OiBbXCJsb2NhdGlvblwiXSxcbiAgICAgICAgfSkudGhlbihqb2JzID0+IGpvYnMubWFwKGogPT4gai5sb2NhdGlvbikuZmlsdGVyKEJvb2xlYW4pLnNvcnQoKSlcbiAgICBdKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluZHVzdHJpZXMsXG4gICAgICAgIGxvY2F0aW9ucyxcbiAgICAgICAgam9iVHlwZXM6IFtcIkZVTExfVElNRVwiLCBcIlBBUlRfVElNRVwiLCBcIlJFTU9URVwiLCBcIklOVEVSTlNISVBcIiwgXCJDT05UUkFDVFwiXSxcbiAgICAgICAgZXhwZXJpZW5jZUxldmVsczogW1wiRW50cnlcIiwgXCJKdW5pb3JcIiwgXCJNaWQtTGV2ZWxcIiwgXCJTZW5pb3JcIiwgXCJNYW5hZ2VyXCJdLFxuICAgICAgICBzYWxhcnlSYW5nZXM6IFtcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMC01MDAwMDAwXCIsIGxhYmVsOiBcIkTGsOG7m2kgNSB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiNTAwMDAwMC0xMDAwMDAwMFwiLCBsYWJlbDogXCI1IC0gMTAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjEwMDAwMDAwLTIwMDAwMDAwXCIsIGxhYmVsOiBcIjEwIC0gMjAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjIwMDAwMDAwLTMwMDAwMDAwXCIsIGxhYmVsOiBcIjIwIC0gMzAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjMwMDAwMDAwLTUwMDAwMDAwXCIsIGxhYmVsOiBcIjMwIC0gNTAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjUwMDAwMDAwLTk5OTk5OTk5OVwiLCBsYWJlbDogXCJUcsOqbiA1MCB0cmnhu4d1XCIgfSxcbiAgICAgICAgXVxuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSm9iKGpvYklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJWdWkgbMOybmcgxJHEg25nIG5o4bqtcCDEkeG7gyBsxrB1IHZp4buHYyBsw6BtXCIgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgICAgICBqb2JJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvam9ic1wiKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiVmnhu4djIGzDoG0gbsOgeSDEkcOjIMSRxrDhu6NjIGzGsHUgdHLGsOG7m2MgxJHDs1wiIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdW5zYXZlSm9iKGpvYklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJWdWkgbMOybmcgxJHEg25nIG5o4bqtcFwiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgcHJpc21hLnNhdmVkSm9iLmRlbGV0ZU1hbnkoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICAgICAgICBqb2JJZFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvam9ic1wiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTYXZlZEpvYnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXIpIHJldHVybiBbXTtcblxuICAgIHJldHVybiBwcmlzbWEuc2F2ZWRKb2IuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9LFxuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICBqb2I6IHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbnk6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGxvZ286IHRydWUsIHNsdWc6IHRydWUsIHZlcmlmaWVkOiB0cnVlIH0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNhdmVkSm9iSWRzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIFtdO1xuXG4gICAgY29uc3Qgc2F2ZWQgPSBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9LFxuICAgICAgICBzZWxlY3Q6IHsgam9iSWQ6IHRydWUgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNhdmVkLm1hcChzID0+IHMuam9iSWQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNKb2JTYXZlZChqb2JJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXIpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNhdmVkID0gYXdhaXQgcHJpc21hLnNhdmVkSm9iLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdXNlcklkX2pvYklkOiB7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICAgICAgICAgICAgam9iSWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAhIXNhdmVkO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUUE0U3NCLHNMQUFBIn0=
}),
"[project]/app/actions/data:931495 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vam9icy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgc2VtYW50aWNKb2JTZWFyY2ggfSBmcm9tIFwiQC9saWIvYWlcIjtcblxuZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGV4dFxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvW15hLXowLTlcXHMtXS9nLCBcIlwiKVxuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIi1cIilcbiAgICAgICAgLnJlcGxhY2UoLy0rL2csIFwiLVwiKVxuICAgICAgICAudHJpbSgpICsgXCItXCIgKyBEYXRlLm5vdygpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Sm9icyhwYXJhbXM/OiB7XG4gICAgcT86IHN0cmluZztcbiAgICBsb2M/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBzdGF0dXM/OiBzdHJpbmc7XG4gICAgaW5kdXN0cnlJZD86IHN0cmluZztcbiAgICBzYWxhcnk/OiBzdHJpbmc7XG4gICAgdXNlQUk/OiBib29sZWFuO1xufSkge1xuICAgIGNvbnN0IHdoZXJlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuXG4gICAgaWYgKHBhcmFtcz8uc3RhdHVzKSB7XG4gICAgICAgIHdoZXJlLnN0YXR1cyA9IHBhcmFtcy5zdGF0dXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hlcmUuc3RhdHVzID0gXCJBQ1RJVkVcIjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zPy5xICYmIHBhcmFtcy51c2VBSSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWlKb2JzID0gYXdhaXQgc2VtYW50aWNKb2JTZWFyY2gocGFyYW1zLnEsIDUwKTtcbiAgICAgICAgICAgIGlmIChhaUpvYnMgJiYgQXJyYXkuaXNBcnJheShhaUpvYnMpICYmIGFpSm9icy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFpSm9icy5tYXAoKGpvYjogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBpZDogam9iLmlkLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogam9iLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzbHVnOiBqb2Iuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGpvYi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZW1lbnRzOiBqb2IucmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBiZW5lZml0czogam9iLmJlbmVmaXRzLFxuICAgICAgICAgICAgICAgICAgICBzYWxhcnlNaW46IGpvYi5zYWxhcnlNaW4sXG4gICAgICAgICAgICAgICAgICAgIHNhbGFyeU1heDogam9iLnNhbGFyeU1heCxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGpvYi5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgam9iVHlwZTogam9iLmpvYlR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHNraWxsczogam9iLnNraWxscyxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBqb2IuY3JlYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICBjb21wYW55OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBqb2IuY29tcGFueU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBqb2IuY29tcGFueUxvZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiBqb2IuY29tcGFueVNsdWcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJpZmllZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNpbWlsYXJpdHk6IGpvYi5zaW1pbGFyaXR5LFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFJIHNlYXJjaCBmYWlsZWQsIGZhbGxpbmcgYmFjayB0byB0ZXh0IHNlYXJjaDpcIiwgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zPy5xICYmICFwYXJhbXMudXNlQUkpIHtcbiAgICAgICAgd2hlcmUuT1IgPSBbXG4gICAgICAgICAgICB7IHRpdGxlOiB7IGNvbnRhaW5zOiBwYXJhbXMucSwgbW9kZTogXCJpbnNlbnNpdGl2ZVwiIH0gfSxcbiAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IHsgY29udGFpbnM6IHBhcmFtcy5xLCBtb2RlOiBcImluc2Vuc2l0aXZlXCIgfSB9LFxuICAgICAgICAgICAgeyBza2lsbHM6IHsgaGFzU29tZTogW3BhcmFtcy5xXSB9IH0sXG4gICAgICAgIF07XG4gICAgfVxuICAgIGlmIChwYXJhbXM/LmxvYykge1xuICAgICAgICB3aGVyZS5sb2NhdGlvbiA9IHsgY29udGFpbnM6IHBhcmFtcy5sb2MsIG1vZGU6IFwiaW5zZW5zaXRpdmVcIiB9O1xuICAgIH1cbiAgICBpZiAocGFyYW1zPy50eXBlKSB3aGVyZS5qb2JUeXBlID0gcGFyYW1zLnR5cGU7XG4gICAgaWYgKHBhcmFtcz8uaW5kdXN0cnlJZCkgd2hlcmUuaW5kdXN0cnlJZCA9IHBhcmFtcy5pbmR1c3RyeUlkO1xuXG4gICAgLy8gU2FsYXJ5IHJhbmdlIGZpbHRlclxuICAgIGlmIChwYXJhbXM/LnNhbGFyeSkge1xuICAgICAgICBjb25zdCBbbWluU2FsYXJ5LCBtYXhTYWxhcnldID0gcGFyYW1zLnNhbGFyeS5zcGxpdChcIi1cIikubWFwKE51bWJlcik7XG4gICAgICAgIHdoZXJlLkFORCA9IFtcbiAgICAgICAgICAgIHsgc2FsYXJ5TWluOiB7IGd0ZTogbWluU2FsYXJ5IH0gfSxcbiAgICAgICAgICAgIHsgT1I6IFt7IHNhbGFyeU1heDogeyBsdGU6IG1heFNhbGFyeSB9IH0sIHsgc2FsYXJ5TWF4OiB7IGd0ZTogbWluU2FsYXJ5IH0gfV0gfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmUsXG4gICAgICAgIGluY2x1ZGU6IHsgY29tcGFueTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgbG9nbzogdHJ1ZSwgc2x1ZzogdHJ1ZSwgdmVyaWZpZWQ6IHRydWUgfSB9IH0sXG4gICAgICAgIG9yZGVyQnk6IHBhcmFtcz8ucSA/IHVuZGVmaW5lZCA6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICB0YWtlOiA1MCxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEpvYkJ5U2x1ZyhzbHVnOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gcHJpc21hLmpvYi5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgc2x1ZyB9LFxuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICBjb21wYW55OiB0cnVlLFxuICAgICAgICAgICAgaW5kdXN0cnk6IHRydWUsXG4gICAgICAgICAgICBfY291bnQ6IHsgc2VsZWN0OiB7IGFwcGxpY2F0aW9uczogdHJ1ZSB9IH1cbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEpvYkJ5SWQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgICBpbmNsdWRlOiB7IGNvbXBhbnk6IHRydWUsIGFwcGxpY2F0aW9uczogeyBpbmNsdWRlOiB7IGNhbmRpZGF0ZTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgZW1haWw6IHRydWUsIGltYWdlOiB0cnVlLCBjYW5kaWRhdGVQcm9maWxlOiB0cnVlIH0gfSB9IH0sIF9jb3VudDogeyBzZWxlY3Q6IHsgYXBwbGljYXRpb25zOiB0cnVlIH0gfSB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSm9iKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyIHx8IHNlc3Npb24udXNlci5yb2xlICE9PSBcIkVNUExPWUVSXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiS2jDtG5nIGPDsyBxdXnhu4FuIHRydXkgY+G6rXBcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHJlcXVpcmVtZW50cyA9IGZvcm1EYXRhLmdldChcInJlcXVpcmVtZW50c1wiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgYmVuZWZpdHMgPSBmb3JtRGF0YS5nZXQoXCJiZW5lZml0c1wiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgbG9jYXRpb24gPSBmb3JtRGF0YS5nZXQoXCJsb2NhdGlvblwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgam9iVHlwZSA9IGZvcm1EYXRhLmdldChcImpvYlR5cGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHNhbGFyeU1pbiA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcInNhbGFyeU1pblwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3Qgc2FsYXJ5TWF4ID0gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwic2FsYXJ5TWF4XCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBza2lsbHNSYXcgPSBmb3JtRGF0YS5nZXQoXCJza2lsbHNcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHNraWxscyA9IHNraWxsc1JhdyA/IHNraWxsc1Jhdy5zcGxpdChcIixcIikubWFwKChzKSA9PiBzLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pIDogW107XG4gICAgY29uc3QgaW5kdXN0cnlTbHVnID0gZm9ybURhdGEuZ2V0KFwiaW5kdXN0cnlJZFwiKSBhcyBzdHJpbmc7XG5cbiAgICAvLyBHZXQgZW1wbG95ZXIncyBjb21wYW55XG4gICAgY29uc3QgZW1wbG95ZXIgPSBhd2FpdCBwcmlzbWEuZW1wbG95ZXJQcm9maWxlLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFlbXBsb3llcj8uY29tcGFueUlkKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkLhuqFuIGNoxrBhIGPDsyB0aMO0bmcgdGluIGPDtG5nIHR5LiBWdWkgbMOybmcgY+G6rXAgbmjhuq10IHRyYW5nIEPDtG5nIHR5IHRyxrDhu5tjLlwiIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IGluZHVzdHJ5IGJ5IHNsdWcgaWYgcHJvdmlkZWRcbiAgICBsZXQgaW5kdXN0cnlJZCA9IG51bGw7XG4gICAgaWYgKGluZHVzdHJ5U2x1Zykge1xuICAgICAgICBjb25zdCBpbmR1c3RyeSA9IGF3YWl0IHByaXNtYS5pbmR1c3RyeS5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IHNsdWc6IGluZHVzdHJ5U2x1ZyB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kdXN0cnkpIHtcbiAgICAgICAgICAgIGluZHVzdHJ5SWQgPSBpbmR1c3RyeS5pZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGpvYiA9IGF3YWl0IHByaXNtYS5qb2IuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29tcGFueUlkOiBlbXBsb3llci5jb21wYW55SWQsXG4gICAgICAgICAgICBwb3N0ZWRCeUlkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIHNsdWc6IHNsdWdpZnkodGl0bGUpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZXF1aXJlbWVudHMsXG4gICAgICAgICAgICBiZW5lZml0cyxcbiAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgICAgam9iVHlwZTogam9iVHlwZSBhcyBcIkZVTExfVElNRVwiIHwgXCJQQVJUX1RJTUVcIiB8IFwiUkVNT1RFXCIgfCBcIklOVEVSTlNISVBcIiB8IFwiQ09OVFJBQ1RcIixcbiAgICAgICAgICAgIHNhbGFyeU1pbixcbiAgICAgICAgICAgIHNhbGFyeU1heCxcbiAgICAgICAgICAgIHNraWxscyxcbiAgICAgICAgICAgIHN0YXR1czogXCJQRU5ESU5HXCIsXG4gICAgICAgICAgICBpbmR1c3RyeUlkLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBnZW5lcmF0ZUpvYkVtYmVkZGluZyB9ID0gYXdhaXQgaW1wb3J0KFwiQC9saWIvYWlcIik7XG4gICAgICAgIGF3YWl0IGdlbmVyYXRlSm9iRW1iZWRkaW5nKGpvYi5pZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGdlbmVyYXRlIGVtYmVkZGluZyBmb3IgbmV3IGpvYjpcIiwgZSk7XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZW1wbG95ZXIvam9ic1wiKTtcbiAgICByZWRpcmVjdChcIi9lbXBsb3llci9qb2JzXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGlkOiBqb2IuaWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUpvYlN0YXR1cyhqb2JJZDogc3RyaW5nLCBzdGF0dXM6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyIHx8IHNlc3Npb24udXNlci5yb2xlICE9PSBcIkFETUlOXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiS2jDtG5nIGPDsyBxdXnhu4FuXCIgfTtcbiAgICB9XG4gICAgY29uc3Qgam9iID0gYXdhaXQgcHJpc21hLmpvYi51cGRhdGUoe1xuICAgICAgICB3aGVyZTogeyBpZDogam9iSWQgfSxcbiAgICAgICAgZGF0YTogeyBzdGF0dXM6IHN0YXR1cyBhcyBcIkFDVElWRVwiIHwgXCJSRUpFQ1RFRFwiIHwgXCJDTE9TRURcIiB9LFxuICAgICAgICBzZWxlY3Q6IHsgdGl0bGU6IHRydWUsIHBvc3RlZEJ5SWQ6IHRydWUgfSxcbiAgICB9KTtcblxuICAgIGlmIChzdGF0dXMgPT09IFwiQUNUSVZFXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZ2VuZXJhdGVKb2JFbWJlZGRpbmcgfSA9IGF3YWl0IGltcG9ydChcIkAvbGliL2FpXCIpO1xuICAgICAgICAgICAgYXdhaXQgZ2VuZXJhdGVKb2JFbWJlZGRpbmcoam9iSWQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGdlbmVyYXRlIGVtYmVkZGluZyBmb3Igam9iOlwiLCBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdGlmeSBlbXBsb3llciBhYm91dCBqb2Igc3RhdHVzXG4gICAgaWYgKGpvYi5wb3N0ZWRCeUlkKSB7XG4gICAgICAgIGNvbnN0IHN0YXR1c01zZyA9IHN0YXR1cyA9PT0gXCJBQ1RJVkVcIiA/IFwixJHDoyDEkcaw4bujYyBkdXnhu4d0XCIgOiBzdGF0dXMgPT09IFwiUkVKRUNURURcIiA/IFwixJHDoyBi4buLIHThu6sgY2jhu5FpXCIgOiBcIsSRw6MgxJHGsOG7o2MgxJHDs25nXCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGpvYi5wb3N0ZWRCeUlkLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBzdGF0dXMgPT09IFwiQUNUSVZFXCIgPyBcIkpPQl9BUFBST1ZFRFwiIDogc3RhdHVzID09PSBcIlJFSkVDVEVEXCIgPyBcIkpPQl9SRUpFQ1RFRFwiIDogXCJBUFBMSUNBVElPTl9TVEFUVVNcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGBUaW4gdHV54buDbiBk4bulbmcgJHtzdGF0dXNNc2d9YCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYFRpbiBcIiR7am9iLnRpdGxlfVwiICR7c3RhdHVzTXNnfSBi4bufaSBxdeG6o24gdHLhu4sgdmnDqm4uYCxcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZW1wbG95ZXIvam9ic1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoXykgeyAvKiBpZ25vcmUgKi8gfVxuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2pvYnNcIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZXJKb2JzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZWRpcmVjdChcIi9sb2dpblwiKTtcblxuICAgIGNvbnN0IGVtcGxveWVyID0gYXdhaXQgcHJpc21hLmVtcGxveWVyUHJvZmlsZS5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQgfSxcbiAgICB9KTtcbiAgICBpZiAoIWVtcGxveWVyPy5jb21wYW55SWQpIHJldHVybiBbXTtcblxuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgY29tcGFueUlkOiBlbXBsb3llci5jb21wYW55SWQgfSxcbiAgICAgICAgaW5jbHVkZTogeyBfY291bnQ6IHsgc2VsZWN0OiB7IGFwcGxpY2F0aW9uczogdHJ1ZSB9IH0gfSxcbiAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVKb2Ioam9iSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyIHx8IHNlc3Npb24udXNlci5yb2xlICE9PSBcIkVNUExPWUVSXCIpIHJldHVybiB7IGVycm9yOiBcIktow7RuZyBjw7MgcXV54buBblwiIH07XG4gICAgYXdhaXQgcHJpc21hLmpvYi5kZWxldGUoeyB3aGVyZTogeyBpZDogam9iSWQgfSB9KTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9lbXBsb3llci9qb2JzXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEpvYnNGb3JBZG1pbigpIHtcbiAgICByZXR1cm4gcHJpc21hLmpvYi5maW5kTWFueSh7XG4gICAgICAgIGluY2x1ZGU6IHsgY29tcGFueTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSB9IH0sIF9jb3VudDogeyBzZWxlY3Q6IHsgYXBwbGljYXRpb25zOiB0cnVlIH0gfSB9LFxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEluZHVzdHJpZXMoKSB7XG4gICAgcmV0dXJuIHByaXNtYS5pbmR1c3RyeS5maW5kTWFueSh7XG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogXCJhc2NcIiB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsSW5kdXN0cmllcygpIHtcbiAgICByZXR1cm4gcHJpc21hLmluZHVzdHJ5LmZpbmRNYW55KHtcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JMb2NhdGlvbnMoKSB7XG4gICAgY29uc3Qgam9icyA9IGF3YWl0IHByaXNtYS5qb2IuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyBzdGF0dXM6IFwiQUNUSVZFXCIgfSxcbiAgICAgICAgc2VsZWN0OiB7IGxvY2F0aW9uOiB0cnVlIH0sXG4gICAgICAgIGRpc3RpbmN0OiBbXCJsb2NhdGlvblwiXSxcbiAgICB9KTtcbiAgICByZXR1cm4gam9icy5tYXAoaiA9PiBqLmxvY2F0aW9uKS5maWx0ZXIoQm9vbGVhbikuc29ydCgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Sm9iRmlsdGVycygpIHtcbiAgICBjb25zdCBbaW5kdXN0cmllcywgbG9jYXRpb25zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJpc21hLmluZHVzdHJ5LmZpbmRNYW55KHsgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0gfSksXG4gICAgICAgIHByaXNtYS5qb2IuZmluZE1hbnkoe1xuICAgICAgICAgICAgd2hlcmU6IHsgc3RhdHVzOiBcIkFDVElWRVwiIH0sXG4gICAgICAgICAgICBzZWxlY3Q6IHsgbG9jYXRpb246IHRydWUgfSxcbiAgICAgICAgICAgIGRpc3RpbmN0OiBbXCJsb2NhdGlvblwiXSxcbiAgICAgICAgfSkudGhlbihqb2JzID0+IGpvYnMubWFwKGogPT4gai5sb2NhdGlvbikuZmlsdGVyKEJvb2xlYW4pLnNvcnQoKSlcbiAgICBdKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluZHVzdHJpZXMsXG4gICAgICAgIGxvY2F0aW9ucyxcbiAgICAgICAgam9iVHlwZXM6IFtcIkZVTExfVElNRVwiLCBcIlBBUlRfVElNRVwiLCBcIlJFTU9URVwiLCBcIklOVEVSTlNISVBcIiwgXCJDT05UUkFDVFwiXSxcbiAgICAgICAgZXhwZXJpZW5jZUxldmVsczogW1wiRW50cnlcIiwgXCJKdW5pb3JcIiwgXCJNaWQtTGV2ZWxcIiwgXCJTZW5pb3JcIiwgXCJNYW5hZ2VyXCJdLFxuICAgICAgICBzYWxhcnlSYW5nZXM6IFtcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMC01MDAwMDAwXCIsIGxhYmVsOiBcIkTGsOG7m2kgNSB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiNTAwMDAwMC0xMDAwMDAwMFwiLCBsYWJlbDogXCI1IC0gMTAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjEwMDAwMDAwLTIwMDAwMDAwXCIsIGxhYmVsOiBcIjEwIC0gMjAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjIwMDAwMDAwLTMwMDAwMDAwXCIsIGxhYmVsOiBcIjIwIC0gMzAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjMwMDAwMDAwLTUwMDAwMDAwXCIsIGxhYmVsOiBcIjMwIC0gNTAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjUwMDAwMDAwLTk5OTk5OTk5OVwiLCBsYWJlbDogXCJUcsOqbiA1MCB0cmnhu4d1XCIgfSxcbiAgICAgICAgXVxuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSm9iKGpvYklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJWdWkgbMOybmcgxJHEg25nIG5o4bqtcCDEkeG7gyBsxrB1IHZp4buHYyBsw6BtXCIgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgICAgICBqb2JJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvam9ic1wiKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiVmnhu4djIGzDoG0gbsOgeSDEkcOjIMSRxrDhu6NjIGzGsHUgdHLGsOG7m2MgxJHDs1wiIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdW5zYXZlSm9iKGpvYklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJWdWkgbMOybmcgxJHEg25nIG5o4bqtcFwiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgcHJpc21hLnNhdmVkSm9iLmRlbGV0ZU1hbnkoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICAgICAgICBqb2JJZFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvam9ic1wiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTYXZlZEpvYnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXIpIHJldHVybiBbXTtcblxuICAgIHJldHVybiBwcmlzbWEuc2F2ZWRKb2IuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9LFxuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICBqb2I6IHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbnk6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGxvZ286IHRydWUsIHNsdWc6IHRydWUsIHZlcmlmaWVkOiB0cnVlIH0gfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNhdmVkSm9iSWRzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIFtdO1xuXG4gICAgY29uc3Qgc2F2ZWQgPSBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9LFxuICAgICAgICBzZWxlY3Q6IHsgam9iSWQ6IHRydWUgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNhdmVkLm1hcChzID0+IHMuam9iSWQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNKb2JTYXZlZChqb2JJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXIpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNhdmVkID0gYXdhaXQgcHJpc21hLnNhdmVkSm9iLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdXNlcklkX2pvYklkOiB7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICAgICAgICAgICAgam9iSWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiAhIXNhdmVkO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpUkFnVXNCLHdMQUFBIn0=
}),
"[project]/app/components/SaveJobButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SaveJobButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$9c2b3f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:9c2b3f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$931495__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:931495 [app-client] (ecmascript) <text/javascript>");
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
    const handleToggle = async (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setLoading(true);
        try {
            if (saved) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$931495__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["unsaveJob"])(jobId);
                setSaved(false);
            } else {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$9c2b3f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveJob"])(jobId);
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
                lineNumber: 69,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/SaveJobButton.tsx",
            lineNumber: 61,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/SaveJobButton.tsx",
        lineNumber: 42,
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
"[project]/app/components/JobCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SaveJobButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/SaveJobButton.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function JobCard({ id, slug, title, company, location, salary, type, skills, logo, verified = false, posted, featured = false, saved = false, savedDate, layout = "grid" }) {
    const typeColors = {
        Remote: "#22C55E",
        "Full-time": "#0369A1",
        "Part-time": "#F59E0B",
        Internship: "#A855F7"
    };
    const typeColor = typeColors[type] ?? "#0369A1";
    const isList = layout === "list";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/jobs/${slug || id}`,
        style: {
            textDecoration: "none",
            display: "block",
            height: "100%"
        },
        className: "card-clickable",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "jsx-92d2200b5e3ba0bb" + " " + `card job-card-article ${isList ? 'is-list' : 'is-grid'}`,
                children: [
                    featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-92d2200b5e3ba0bb" + " " + "featured-gradient"
                    }, void 0, false, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-92d2200b5e3ba0bb" + " " + "job-card-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: isList ? "56px" : "44px",
                                    height: isList ? "56px" : "44px",
                                    borderRadius: "10px",
                                    background: logo ? "transparent" : "var(--tag-bg)",
                                    border: "1.5px solid var(--border)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    fontSize: "1.25rem",
                                    fontWeight: 700,
                                    color: "var(--primary)"
                                },
                                className: "jsx-92d2200b5e3ba0bb",
                                children: logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: logo,
                                    alt: company,
                                    style: {
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "10px"
                                    },
                                    className: "jsx-92d2200b5e3ba0bb"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/JobCard.tsx",
                                    lineNumber: 84,
                                    columnNumber: 29
                                }, this) : company.charAt(0).toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    minWidth: 0
                                },
                                className: "jsx-92d2200b5e3ba0bb",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: isList ? "1.0625rem" : "0.9375rem",
                                            fontWeight: 700,
                                            color: "var(--text)",
                                            marginBottom: "0.25rem",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            minHeight: "1.2em"
                                        },
                                        title: title,
                                        className: "jsx-92d2200b5e3ba0bb",
                                        children: title || "Tuyển dụng"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 91,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "0.875rem",
                                            color: "var(--text-muted)",
                                            fontWeight: 500,
                                            margin: 0,
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            minHeight: "1.2em"
                                        },
                                        title: company,
                                        className: "jsx-92d2200b5e3ba0bb",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-92d2200b5e3ba0bb",
                                                children: company || "Công ty ẩn danh"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/JobCard.tsx",
                                                lineNumber: 116,
                                                columnNumber: 29
                                            }, this),
                                            verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "#16A34A",
                                                style: {
                                                    marginLeft: "4px",
                                                    verticalAlign: "middle"
                                                },
                                                className: "jsx-92d2200b5e3ba0bb",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z",
                                                    className: "jsx-92d2200b5e3ba0bb"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/JobCard.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/JobCard.tsx",
                                                lineNumber: 118,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 106,
                                        columnNumber: 25
                                    }, this),
                                    isList && type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            marginTop: "0.5rem"
                                        },
                                        className: "jsx-92d2200b5e3ba0bb",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    padding: "0.2rem 0.625rem",
                                                    borderRadius: "100px",
                                                    fontSize: "0.6875rem",
                                                    fontWeight: 600,
                                                    background: `${typeColor}18`,
                                                    color: typeColor,
                                                    whiteSpace: "nowrap"
                                                },
                                                className: "jsx-92d2200b5e3ba0bb",
                                                children: type
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/JobCard.tsx",
                                                lineNumber: 133,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "0.75rem",
                                                    color: "var(--text-muted)",
                                                    whiteSpace: "nowrap"
                                                },
                                                className: "jsx-92d2200b5e3ba0bb",
                                                children: posted
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/JobCard.tsx",
                                                lineNumber: 144,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this),
                            !isList && type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    padding: "0.2rem 0.625rem",
                                    borderRadius: "100px",
                                    fontSize: "0.6875rem",
                                    fontWeight: 600,
                                    background: `${typeColor}18`,
                                    color: typeColor,
                                    whiteSpace: "nowrap",
                                    flexShrink: 0
                                },
                                className: "jsx-92d2200b5e3ba0bb",
                                children: type
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 153,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-92d2200b5e3ba0bb" + " " + "job-card-middle",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "1rem",
                                    flexWrap: "nowrap",
                                    overflow: "hidden"
                                },
                                className: "jsx-92d2200b5e3ba0bb",
                                children: [
                                    {
                                        icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
                                        text: location
                                    },
                                    {
                                        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
                                        text: salary
                                    }
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.375rem",
                                            color: "var(--text-muted)",
                                            fontSize: "0.875rem",
                                            fontWeight: 500,
                                            minWidth: 0
                                        },
                                        className: "jsx-92d2200b5e3ba0bb",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "1.75",
                                                viewBox: "0 0 24 24",
                                                style: {
                                                    flexShrink: 0
                                                },
                                                className: "jsx-92d2200b5e3ba0bb",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: item.icon,
                                                    className: "jsx-92d2200b5e3ba0bb"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/JobCard.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/JobCard.tsx",
                                                lineNumber: 187,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis"
                                                },
                                                title: item.text,
                                                className: "jsx-92d2200b5e3ba0bb",
                                                children: item.text
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/JobCard.tsx",
                                                lineNumber: 190,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, item.text, true, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 183,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 172,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexWrap: "nowrap",
                                    /* Changed to nowrap for straight alignment */ gap: "0.5rem",
                                    overflowX: "auto",
                                    overflowY: "hidden",
                                    paddingBottom: "4px",
                                    /* Give space for custom scrollbar hiding if needed */ scrollbarWidth: "none",
                                    /* Firefox */ msOverflowStyle: "none"
                                },
                                className: "jsx-92d2200b5e3ba0bb" + " " + "job-card-skills",
                                children: skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "0.75rem",
                                            fontWeight: 500,
                                            padding: "0.375rem 0.75rem",
                                            borderRadius: "6px",
                                            background: "var(--bg)",
                                            border: "1px solid var(--border)",
                                            color: "var(--text-muted)",
                                            whiteSpace: "nowrap",
                                            flexShrink: 0
                                        },
                                        className: "jsx-92d2200b5e3ba0bb",
                                        children: skill
                                    }, skill, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 207,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 196,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 171,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-92d2200b5e3ba0bb" + " " + "job-card-right",
                        children: [
                            !isList ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "0.75rem",
                                    color: "var(--text-muted)",
                                    whiteSpace: "nowrap"
                                },
                                className: "jsx-92d2200b5e3ba0bb",
                                children: posted
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 227,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-92d2200b5e3ba0bb"
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 231,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: isList ? "row" : "column",
                                    alignItems: isList ? "center" : "flex-end",
                                    gap: isList ? "1rem" : "0.5rem"
                                },
                                className: "jsx-92d2200b5e3ba0bb",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        className: "jsx-92d2200b5e3ba0bb",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: "0.5rem",
                                                borderRadius: "8px",
                                                background: isList ? "var(--bg-card)" : "transparent",
                                                border: isList ? "1px solid var(--border)" : "none",
                                                transition: "all 0.2s"
                                            },
                                            title: "Lưu việc làm này",
                                            className: "jsx-92d2200b5e3ba0bb" + " " + ((isList ? "hover-primary-border" : "") || ""),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SaveJobButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                jobId: id,
                                                initialSaved: saved
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/JobCard.tsx",
                                                lineNumber: 255,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/JobCard.tsx",
                                            lineNumber: 241,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 240,
                                        columnNumber: 25
                                    }, this),
                                    savedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: "0.75rem",
                                            color: "var(--text-muted)",
                                            whiteSpace: "nowrap",
                                            textAlign: "right"
                                        },
                                        className: "jsx-92d2200b5e3ba0bb",
                                        children: savedDate
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 260,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 234,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 225,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/JobCard.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "92d2200b5e3ba0bb",
                children: ".job-card-article.jsx-92d2200b5e3ba0bb{height:100%;padding:1.25rem;display:flex;position:relative;overflow:hidden}.is-grid.jsx-92d2200b5e3ba0bb{flex-direction:column;align-items:stretch;gap:0}.is-grid.jsx-92d2200b5e3ba0bb .job-card-left.jsx-92d2200b5e3ba0bb{flex:none;align-items:flex-start;gap:1rem;min-width:0;margin-bottom:.75rem;display:flex}.is-grid.jsx-92d2200b5e3ba0bb .job-card-middle.jsx-92d2200b5e3ba0bb{flex-direction:column;flex:1;gap:.75rem;min-width:0;margin-bottom:1.25rem;display:flex}.is-grid.jsx-92d2200b5e3ba0bb .job-card-right.jsx-92d2200b5e3ba0bb{border-left:none;flex-direction:row;justify-content:space-between;align-items:flex-end;gap:0;width:100%;min-width:100%;margin-top:auto;padding-left:0;display:flex}.is-list.jsx-92d2200b5e3ba0bb{flex-direction:row;align-items:center;gap:1.5rem}.is-list.jsx-92d2200b5e3ba0bb .job-card-left.jsx-92d2200b5e3ba0bb{flex:2;align-items:flex-start;gap:1rem;min-width:0;max-width:40%;margin-bottom:0;display:flex}.is-list.jsx-92d2200b5e3ba0bb .job-card-middle.jsx-92d2200b5e3ba0bb{flex-direction:column;flex:1.5;gap:.75rem;min-width:0;max-width:40%;margin-bottom:0;display:flex}.is-list.jsx-92d2200b5e3ba0bb .job-card-right.jsx-92d2200b5e3ba0bb{border-left:1px solid var(--border);flex-direction:row;justify-content:flex-end;align-items:center;gap:1rem;width:auto;min-width:160px;margin-top:0;padding-left:1.5rem;display:flex}.featured-gradient.jsx-92d2200b5e3ba0bb{background:linear-gradient(to bottom right,var(--primary),var(--cta));position:absolute;top:0;left:0}.is-grid.jsx-92d2200b5e3ba0bb .featured-gradient.jsx-92d2200b5e3ba0bb{width:auto;height:3px;bottom:auto;right:0}.is-list.jsx-92d2200b5e3ba0bb .featured-gradient.jsx-92d2200b5e3ba0bb{width:4px;height:100%;bottom:0;right:auto}@media (width<=860px){.is-list.jsx-92d2200b5e3ba0bb{flex-direction:column;align-items:stretch;gap:1rem}.is-list.jsx-92d2200b5e3ba0bb .job-card-left.jsx-92d2200b5e3ba0bb,.is-list.jsx-92d2200b5e3ba0bb .job-card-middle.jsx-92d2200b5e3ba0bb{flex:none;max-width:100%;margin-bottom:0}.is-list.jsx-92d2200b5e3ba0bb .job-card-right.jsx-92d2200b5e3ba0bb{border-left:none;justify-content:space-between;width:100%;min-width:0;margin-top:.5rem;padding-left:0}.is-list.jsx-92d2200b5e3ba0bb .featured-gradient.jsx-92d2200b5e3ba0bb{width:auto;height:3px;bottom:auto;right:0}}.hover-primary-bg.jsx-92d2200b5e3ba0bb:hover{background:var(--primary)!important;color:#fff!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/JobCard.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
_c = JobCard;
var _c;
__turbopack_context__.k.register(_c, "JobCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_c03c9aba._.js.map