module.exports = [
"[project]/app/components/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SunIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SunIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/SunIcon.js [app-ssr] (ecmascript) <export default as SunIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MoonIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MoonIcon.js [app-ssr] (ecmascript) <export default as MoonIcon>");
"use client";
;
;
;
function ThemeToggle() {
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
        children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SunIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SunIcon$3e$__["SunIcon"], {
            style: {
                width: "20px",
                height: "20px"
            }
        }, void 0, false, {
            fileName: "[project]/app/components/ThemeToggle.tsx",
            lineNumber: 36,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MoonIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonIcon$3e$__["MoonIcon"], {
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
}),
"[project]/app/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ThemeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ComputerDesktopIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerDesktopIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ComputerDesktopIcon.js [app-ssr] (ecmascript) <export default as ComputerDesktopIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingLibraryIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingLibraryIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BuildingLibraryIcon.js [app-ssr] (ecmascript) <export default as BuildingLibraryIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ShoppingBagIcon.js [app-ssr] (ecmascript) <export default as ShoppingBagIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SpeakerWaveIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SpeakerWaveIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/SpeakerWaveIcon.js [app-ssr] (ecmascript) <export default as SpeakerWaveIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UsersIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/UsersIcon.js [app-ssr] (ecmascript) <export default as UsersIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChartBarIcon.js [app-ssr] (ecmascript) <export default as ChartBarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingStorefrontIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingStorefrontIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BuildingStorefrontIcon.js [app-ssr] (ecmascript) <export default as BuildingStorefrontIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$WrenchScrewdriverIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WrenchScrewdriverIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/WrenchScrewdriverIcon.js [app-ssr] (ecmascript) <export default as WrenchScrewdriverIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOffice2Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOffice2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BuildingOffice2Icon.js [app-ssr] (ecmascript) <export default as BuildingOffice2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/HeartIcon.js [app-ssr] (ecmascript) <export default as HeartIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HomeModernIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeModernIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/HomeModernIcon.js [app-ssr] (ecmascript) <export default as HomeModernIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AcademicCapIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AcademicCapIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/AcademicCapIcon.js [app-ssr] (ecmascript) <export default as AcademicCapIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaintBrushIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PaintBrushIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PaintBrushIcon.js [app-ssr] (ecmascript) <export default as PaintBrushIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ScaleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScaleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ScaleIcon.js [app-ssr] (ecmascript) <export default as ScaleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/TruckIcon.js [app-ssr] (ecmascript) <export default as TruckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BriefcaseIcon.js [app-ssr] (ecmascript) <export default as BriefcaseIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js [app-ssr] (ecmascript) <export default as DocumentTextIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/SparklesIcon.js [app-ssr] (ecmascript) <export default as SparklesIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BuildingOfficeIcon.js [app-ssr] (ecmascript) <export default as BuildingOfficeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CalculatorIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalculatorIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/CalculatorIcon.js [app-ssr] (ecmascript) <export default as CalculatorIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LightBulbIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LightBulbIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/LightBulbIcon.js [app-ssr] (ecmascript) <export default as LightBulbIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BookOpenIcon.js [app-ssr] (ecmascript) <export default as BookOpenIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClipboardIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ClipboardIcon.js [app-ssr] (ecmascript) <export default as ClipboardIcon>");
"use client";
;
;
;
;
;
;
const INDUSTRY_ICONS = {
    "cong-nghe-thong-tin": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ComputerDesktopIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerDesktopIcon$3e$__["ComputerDesktopIcon"],
    "tai-chinh-ngan-hang": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingLibraryIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingLibraryIcon$3e$__["BuildingLibraryIcon"],
    "thuong-mai-dien-tu": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__["ShoppingBagIcon"],
    "marketing-truyen-thong": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SpeakerWaveIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SpeakerWaveIcon$3e$__["SpeakerWaveIcon"],
    "nhan-su": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UsersIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__["UsersIcon"],
    "ke-toan-tai-chinh": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__["ChartBarIcon"],
    "ban-le-dich-vu": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingStorefrontIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingStorefrontIcon$3e$__["BuildingStorefrontIcon"],
    "san-xuat-che-bien": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$WrenchScrewdriverIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WrenchScrewdriverIcon$3e$__["WrenchScrewdriverIcon"],
    "xay-dung": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOffice2Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOffice2Icon$3e$__["BuildingOffice2Icon"],
    "y-te-cham-soc-suc-khoe": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__["HeartIcon"],
    "du-lich-khach-san": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HomeModernIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeModernIcon$3e$__["HomeModernIcon"],
    "gd-dao-tao": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AcademicCapIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AcademicCapIcon$3e$__["AcademicCapIcon"],
    "kien-truc-thiet-ke": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaintBrushIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PaintBrushIcon$3e$__["PaintBrushIcon"],
    "phap-luat": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ScaleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScaleIcon$3e$__["ScaleIcon"],
    "van-tai-logistics": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__["TruckIcon"]
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
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const closeTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: "var(--navbar-bg)",
            backdropFilter: "blur(12px)",
            borderBottom: "1.5px solid var(--border)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-xl",
                style: {
                    display: "flex",
                    alignItems: "center",
                    height: "68px",
                    gap: "2rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            textDecoration: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "32",
                                        height: "32",
                                        rx: "8",
                                        fill: "var(--primary)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 127,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 22V14l8-6 8 6v8",
                                        stroke: "#fff",
                                        strokeWidth: "2",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 128,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontWeight: 800,
                                    fontSize: "1.25rem",
                                    color: "var(--primary)"
                                },
                                children: [
                                    "Job",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "0.25rem",
                            marginLeft: "0.5rem",
                            flex: 1
                        },
                        className: "nav-links",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                onMouseEnter: ()=>handleMouseEnter("jobs"),
                                onMouseLeave: handleMouseLeave,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "12",
                                                height: "12",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                    activeDropdown === "jobs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "var(--bg-card)",
                                                border: "1.5px solid var(--border)",
                                                borderRadius: "12px",
                                                boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                                padding: "0.75rem",
                                                width: "700px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "1fr 1fr",
                                                    gap: "1rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            borderRight: "1px solid var(--border)",
                                                            paddingRight: "1rem"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__["BriefcaseIcon"], {
                                                                        className: "w-5 h-5",
                                                                        style: {
                                                                            color: "var(--primary)"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: "Tìm việc làm"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 195,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__["HeartIcon"], {
                                                                        className: "w-5 h-5",
                                                                        style: {
                                                                            color: "var(--primary)"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: "Việc đã lưu"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 203,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"], {
                                                                        className: "w-5 h-5",
                                                                        style: {
                                                                            color: "var(--primary)"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 209,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: "Việc đã ứng tuyển"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 211,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"], {
                                                                        className: "w-5 h-5",
                                                                        style: {
                                                                            color: "var(--primary)"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 217,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: "Việc làm phù hợp"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 219,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__["BuildingOfficeIcon"], {
                                                                        className: "w-5 h-5",
                                                                        style: {
                                                                            color: "var(--primary)"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/Navbar.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontWeight: 600
                                                                                },
                                                                                children: "Danh sách công ty"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/components/Navbar.tsx",
                                                                                lineNumber: 227,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: "0.5rem 0.75rem",
                                                                    marginBottom: "0.5rem"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: "grid",
                                                                    gridTemplateColumns: "1fr",
                                                                    gap: "0.125rem",
                                                                    maxHeight: "280px",
                                                                    overflowY: "auto"
                                                                },
                                                                children: industryList.map((industry)=>{
                                                                    const IconComponent = INDUSTRY_ICONS[industry.slug] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__["BriefcaseIcon"];
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: "var(--primary)",
                                                                                    flexShrink: 0,
                                                                                    display: "flex"
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                onMouseEnter: ()=>handleMouseEnter("cv"),
                                onMouseLeave: handleMouseLeave,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "12",
                                                height: "12",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                    activeDropdown === "cv" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "var(--bg-card)",
                                                border: "1.5px solid var(--border)",
                                                borderRadius: "12px",
                                                boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                                padding: "0.5rem",
                                                minWidth: "260px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Quản lý CV"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 325,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Tạo CV mới"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 329,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__["BookOpenIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 332,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Hướng dẫn viết CV"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                onMouseEnter: ()=>handleMouseEnter("tools"),
                                onMouseLeave: handleMouseLeave,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "12",
                                                height: "12",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                    activeDropdown === "tools" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "var(--bg-card)",
                                                border: "1.5px solid var(--border)",
                                                borderRadius: "12px",
                                                boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                                padding: "0.5rem",
                                                minWidth: "260px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CalculatorIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalculatorIcon$3e$__["CalculatorIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Tính lương"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 392,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClipboardIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardIcon$3e$__["ClipboardIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Kiểm tra CV"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 396,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LightBulbIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LightBulbIcon$3e$__["LightBulbIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Mẹo phỏng vấn"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                onMouseEnter: ()=>handleMouseEnter("blog"),
                                onMouseLeave: handleMouseLeave,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "12",
                                                height: "12",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                    activeDropdown === "blog" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: "var(--bg-card)",
                                                border: "1.5px solid var(--border)",
                                                borderRadius: "12px",
                                                boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                                padding: "0.5rem",
                                                minWidth: "260px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__["BookOpenIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 458,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Tất cả bài viết"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 459,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Phát triển sự nghiệp"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 463,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 466,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Hướng dẫn phỏng vấn"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 467,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                                                            className: "w-5 h-5",
                                                            style: {
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 470,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "Bảng lương"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 471,
                                                                    columnNumber: 46
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "0.75rem",
                            alignItems: "center"
                        },
                        className: "nav-cta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            marginLeft: isLoggedIn ? "auto" : "0"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hide-mobile",
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 490,
                                        columnNumber: 25
                                    }, this),
                                    isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        onMouseEnter: ()=>handleMouseEnter("user"),
                                        onMouseLeave: handleMouseLeave,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                children: session?.user?.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            activeDropdown === "user" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "absolute",
                                                    top: "100%",
                                                    right: 0,
                                                    paddingTop: "0.5rem",
                                                    zIndex: 1000
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: "var(--bg-card)",
                                                        border: "1.5px solid var(--border)",
                                                        borderRadius: "12px",
                                                        boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                                        padding: "0.5rem",
                                                        minWidth: "220px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                padding: "0.5rem 0.75rem",
                                                                borderBottom: "1px solid var(--border)",
                                                                marginBottom: "0.5rem"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ComputerDesktopIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerDesktopIcon$3e$__["ComputerDesktopIcon"], {
                                                                    className: "w-5 h-5",
                                                                    style: {
                                                                        color: "var(--text-muted)"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                                    lineNumber: 525,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "2",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "24",
                                    height: "24",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 541,
                                        columnNumber: 37
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "var(--bg-card)",
                    borderTop: "1px solid var(--border)",
                    padding: "0.75rem 1rem 1rem",
                    maxHeight: "calc(100vh - 68px)",
                    overflowY: "auto"
                },
                className: "nav-mobile-menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderBottom: "1px solid var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            activeDropdown === "m-jobs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingBottom: "0.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__["BriefcaseIcon"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__["HeartIcon"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__["BuildingOfficeIcon"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "0.5rem 0.75rem 0.25rem",
                                            marginTop: "0.25rem"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "grid",
                                            gridTemplateColumns: "1fr 1fr",
                                            gap: "0.125rem"
                                        },
                                        children: industryList.map((industry)=>{
                                            const IconComponent = INDUSTRY_ICONS[industry.slug] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__["BriefcaseIcon"];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "var(--primary)",
                                                            flexShrink: 0,
                                                            display: "flex"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderBottom: "1px solid var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            activeDropdown === "m-cv" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingBottom: "0.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__["BookOpenIcon"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderBottom: "1px solid var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            activeDropdown === "m-tools" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingBottom: "0.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CalculatorIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalculatorIcon$3e$__["CalculatorIcon"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClipboardIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardIcon$3e$__["ClipboardIcon"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LightBulbIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LightBulbIcon$3e$__["LightBulbIcon"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderBottom: "1px solid var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            activeDropdown === "m-blog" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    paddingBottom: "0.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__["BookOpenIcon"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "0.875rem 0.5rem",
                            borderBottom: "1px solid var(--border)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
                    isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "1rem 0.5rem",
                            borderBottom: "1px solid var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    marginBottom: "1rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "block",
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                            background: "var(--bg-card)",
                                            flexShrink: 0
                                        },
                                        children: session?.user?.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            overflow: "hidden"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ComputerDesktopIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerDesktopIcon$3e$__["ComputerDesktopIcon"], {
                                        className: "w-5 h-5",
                                        style: {
                                            color: "var(--text-muted)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 718,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "20",
                                        height: "20",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "0.75rem",
                            marginTop: "1rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/app/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
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
    const [openSection, setOpenSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: "var(--bg-card)",
            borderTop: "1.5px solid var(--border)",
            marginTop: "auto"
        },
        className: "jsx-6a6afad8755480e5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    paddingTop: "3rem",
                    paddingBottom: "2rem"
                },
                className: "jsx-6a6afad8755480e5" + " " + "container-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "1.25fr repeat(4, 1fr)",
                            gap: "2.5rem",
                            marginBottom: "2.5rem"
                        },
                        className: "jsx-6a6afad8755480e5" + " " + "footer-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6a6afad8755480e5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            marginBottom: "0.875rem"
                                        },
                                        className: "jsx-6a6afad8755480e5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "28",
                                                height: "28",
                                                viewBox: "0 0 32 32",
                                                fill: "none",
                                                className: "jsx-6a6afad8755480e5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 800,
                                                    fontSize: "1.2rem",
                                                    color: "var(--text)"
                                                },
                                                className: "jsx-6a6afad8755480e5",
                                                children: [
                                                    "Job",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "0.625rem"
                                        },
                                        className: "jsx-6a6afad8755480e5",
                                        children: SOCIALS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "15",
                                                    height: "15",
                                                    fill: "none",
                                                    stroke: "var(--text-muted)",
                                                    strokeWidth: "1.5",
                                                    viewBox: "0 0 24 24",
                                                    className: "jsx-6a6afad8755480e5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            FOOTER_LINKS.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6a6afad8755480e5" + " " + "footer-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            onClick: ()=>setOpenSection(openSection === col.title ? null : col.title),
                                            className: "jsx-6a6afad8755480e5" + " " + `footer-col-title ${openSection === col.title ? 'open' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6a6afad8755480e5",
                                                    children: col.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-6a6afad8755480e5" + " " + "footer-icon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "18",
                                                        height: "18",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        className: "jsx-6a6afad8755480e5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "jsx-6a6afad8755480e5" + " " + `footer-links-list ${openSection === col.title ? 'open' : ''}`,
                                            children: col.links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "jsx-6a6afad8755480e5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderTop: "1px solid var(--border)",
                            paddingTop: "1.5rem"
                        },
                        className: "jsx-6a6afad8755480e5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: "0.75rem"
                            },
                            className: "jsx-6a6afad8755480e5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/app/components/SearchBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const RECENT_SEARCHES_KEY = "jobnow_recent_searches";
const MAX_RECENT_SEARCHES = 5;
function SearchBar({ size = "lg", defaultAI = false }) {
    const [keyword, setKeyword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [useAI, setUseAI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultAI);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingSuggestions, setLoadingSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [recentSearches, setRecentSearches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Load recent searches from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    // Save recent search
    const saveRecentSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((searchTerm)=>{
        if (!searchTerm.trim()) return;
        const updated = [
            searchTerm.trim(),
            ...recentSearches.filter((s)=>s.toLowerCase() !== searchTerm.toLowerCase())
        ].slice(0, MAX_RECENT_SEARCHES);
        setRecentSearches(updated);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        recentSearches
    ]);
    // Handle click outside to close suggestions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    // Fetch suggestions with debounce
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }
        if (keyword.length < 2) {
            setSuggestions([]);
            setLoadingSuggestions(false);
            return;
        }
        setLoadingSuggestions(true);
        setSelectedIndex(-1);
        debounceRef.current = setTimeout(async ()=>{
            try {
                const response = await fetch(`/api/ai/suggestions?q=${encodeURIComponent(keyword)}`);
                const data = await response.json();
                setSuggestions(data.suggestions || []);
            } catch (error) {
                console.error("Failed to fetch suggestions:", error);
                setSuggestions([]);
            } finally{
                setLoadingSuggestions(false);
            }
        }, 300);
        return ()=>{
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, [
        keyword
    ]);
    // Highlight matching text in suggestion
    const highlightMatch = (text, query)=>{
        if (!query.trim()) return text;
        try {
            const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            const regex = new RegExp(`(${escapedQuery})`, "gi");
            const parts = text.split(regex);
            return parts.map((part, i)=>regex.test(part) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        color: "var(--primary)",
                        fontWeight: 600
                    },
                    children: part
                }, i, false, {
                    fileName: "[project]/app/components/SearchBar.tsx",
                    lineNumber: 120,
                    columnNumber: 21
                }, this) : part);
        } catch  {
            return text;
        }
    };
    const handleSelectSuggestion = (suggestion)=>{
        setKeyword(suggestion.value);
        setSuggestions([]);
        setShowSuggestions(false);
        saveRecentSearch(suggestion.value);
        handleSearchWithValue(suggestion.value);
    };
    const handleSelectRecentSearch = (searchTerm)=>{
        setKeyword(searchTerm);
        setShowSuggestions(false);
        handleSearchWithValue(searchTerm);
    };
    const handleKeyDown = (e)=>{
        const allSuggestions = keyword.length >= 2 ? suggestions : recentSearches.map((rs)=>({
                type: "recent",
                value: rs,
                label: rs
            }));
        switch(e.key){
            case "ArrowDown":
                e.preventDefault();
                setShowSuggestions(true);
                setSelectedIndex((prev)=>prev < allSuggestions.length - 1 ? prev + 1 : 0);
                break;
            case "ArrowUp":
                e.preventDefault();
                setShowSuggestions(true);
                setSelectedIndex((prev)=>prev > 0 ? prev - 1 : allSuggestions.length - 1);
                break;
            case "Enter":
                e.preventDefault();
                if (selectedIndex >= 0 && allSuggestions[selectedIndex]) {
                    const item = allSuggestions[selectedIndex];
                    if (item.type === "recent") {
                        handleSelectRecentSearch(item.value);
                    } else {
                        handleSelectSuggestion(item);
                    }
                } else if (keyword.trim()) {
                    saveRecentSearch(keyword.trim());
                    handleSearchWithValue(keyword);
                }
                break;
            case "Escape":
                setShowSuggestions(false);
                setSelectedIndex(-1);
                break;
            case "Tab":
                if (showSuggestions && selectedIndex >= 0 && allSuggestions[selectedIndex]) {
                    e.preventDefault();
                    setKeyword(allSuggestions[selectedIndex].value);
                }
                break;
        }
    };
    const handleSearchWithValue = async (searchKeyword)=>{
        if (useAI && searchKeyword) {
            setIsLoading(true);
            try {
                const response = await fetch("/api/ai/search", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        query: searchKeyword,
                        location: location,
                        limit: 20
                    })
                });
                const params = new URLSearchParams();
                params.set("q", searchKeyword);
                params.set("ai", useAI ? "true" : "false");
                if (location) params.set("loc", location);
                router.push(`/jobs?${params.toString()}`);
            } catch (error) {
                console.error("AI search failed:", error);
                const params = new URLSearchParams();
                params.set("q", searchKeyword);
                if (location) params.set("loc", location);
                router.push(`/jobs?${params.toString()}`);
            } finally{
                setIsLoading(false);
            }
        } else {
            const params = new URLSearchParams();
            if (searchKeyword) params.set("q", searchKeyword);
            if (location) params.set("loc", location);
            router.push(`/jobs?${params.toString()}`);
        }
    };
    const handleSearch = async (e)=>{
        e.preventDefault();
        if (keyword.trim()) {
            saveRecentSearch(keyword.trim());
        }
        handleSearchWithValue(keyword);
    };
    const getSuggestionIcon = (type)=>{
        switch(type){
            case "keyword_suggestion":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 228,
                        columnNumber: 122
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/SearchBar.tsx",
                    lineNumber: 228,
                    columnNumber: 24
                }, this);
            case "related_keyword":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 230,
                        columnNumber: 122
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/SearchBar.tsx",
                    lineNumber: 230,
                    columnNumber: 24
                }, this);
            case "job_title":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SearchBar.tsx",
                            lineNumber: 232,
                            columnNumber: 122
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M16 11h.01M12 11h.01M8 11h.01"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SearchBar.tsx",
                            lineNumber: 232,
                            columnNumber: 245
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/SearchBar.tsx",
                    lineNumber: 232,
                    columnNumber: 24
                }, this);
            case "company":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SearchBar.tsx",
                            lineNumber: 234,
                            columnNumber: 122
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SearchBar.tsx",
                            lineNumber: 234,
                            columnNumber: 186
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/SearchBar.tsx",
                    lineNumber: 234,
                    columnNumber: 24
                }, this);
            case "skill":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 2L2 7l10 5 10-5-10-5z"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SearchBar.tsx",
                            lineNumber: 236,
                            columnNumber: 122
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M2 17l10 5 10-5M2 12l10 5 10-5"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SearchBar.tsx",
                            lineNumber: 236,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/SearchBar.tsx",
                    lineNumber: 236,
                    columnNumber: 24
                }, this);
            case "industry":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 21h18M5 21V7l8-4 8 4v14M9 21v-4h6v4"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 238,
                        columnNumber: 122
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/SearchBar.tsx",
                    lineNumber: 238,
                    columnNumber: 24
                }, this);
            case "recent":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "14",
                    height: "14",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SearchBar.tsx",
                            lineNumber: 240,
                            columnNumber: 122
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "12,6 12,12 16,14"
                        }, void 0, false, {
                            fileName: "[project]/app/components/SearchBar.tsx",
                            lineNumber: 240,
                            columnNumber: 155
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/SearchBar.tsx",
                    lineNumber: 240,
                    columnNumber: 24
                }, this);
            default:
                return null;
        }
    };
    const getTypeLabel = (type)=>{
        switch(type){
            case "keyword_suggestion":
                return "Gợi ý";
            case "related_keyword":
                return "Liên quan";
            case "job_title":
                return "Công việc";
            case "company":
                return "Công ty";
            case "skill":
                return "Kỹ năng";
            case "industry":
                return "Ngành";
            case "recent":
                return "Tìm gần đây";
            default:
                return "";
        }
    };
    // Group suggestions by type for display
    const groupedSuggestions = keyword.length >= 2 ? {
        job_title: suggestions.filter((s)=>s.type === "job_title"),
        keyword_suggestion: suggestions.filter((s)=>s.type === "keyword_suggestion"),
        company: suggestions.filter((s)=>s.type === "company"),
        related_keyword: suggestions.filter((s)=>s.type === "related_keyword"),
        skill: suggestions.filter((s)=>s.type === "skill"),
        industry: suggestions.filter((s)=>s.type === "industry")
    } : null;
    const recentSearchItems = recentSearches.map((rs)=>({
            type: "recent",
            value: rs,
            label: rs
        }));
    const hasSuggestions = keyword.length >= 2 && suggestions.length > 0;
    // Safe access to grouped suggestions
    const jobTitleSuggestions = groupedSuggestions?.job_title || [];
    const keywordSuggestions = groupedSuggestions?.keyword_suggestion || [];
    const companySuggestions = groupedSuggestions?.company || [];
    const relatedKeywords = groupedSuggestions?.related_keyword || [];
    const skillSuggestions = groupedSuggestions?.skill || [];
    const industrySuggestions = groupedSuggestions?.industry || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        style: {
            position: "relative",
            width: "100%"
        },
        className: "jsx-e36d3a5f9a583bcc",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSearch,
                className: "jsx-e36d3a5f9a583bcc" + " " + "search-form",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e36d3a5f9a583bcc" + " " + "search-keyword",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                className: "jsx-e36d3a5f9a583bcc",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "11",
                                        cy: "11",
                                        r: "8",
                                        className: "jsx-e36d3a5f9a583bcc"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 286,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        d: "M21 21l-4.35-4.35",
                                        className: "jsx-e36d3a5f9a583bcc"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 287,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 285,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Tên công việc, kỹ năng, công ty...",
                                value: keyword,
                                onChange: (e)=>{
                                    setKeyword(e.target.value);
                                    setShowSuggestions(true);
                                },
                                onFocus: ()=>setShowSuggestions(true),
                                onKeyDown: handleKeyDown,
                                disabled: isLoading,
                                autoComplete: "off",
                                className: "jsx-e36d3a5f9a583bcc"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 289,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 284,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-e36d3a5f9a583bcc" + " " + "search-location",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                className: "jsx-e36d3a5f9a583bcc",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z",
                                        className: "jsx-e36d3a5f9a583bcc"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 303,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
                                        className: "jsx-e36d3a5f9a583bcc"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 304,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 302,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Địa điểm...",
                                value: location,
                                onChange: (e)=>setLocation(e.target.value),
                                disabled: isLoading,
                                className: "jsx-e36d3a5f9a583bcc"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 306,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 301,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        title: "Tìm kiếm AI thông minh",
                        className: "jsx-e36d3a5f9a583bcc" + " " + "search-ai-toggle",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: useAI,
                                onChange: (e)=>setUseAI(e.target.checked),
                                className: "jsx-e36d3a5f9a583bcc"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 316,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-e36d3a5f9a583bcc" + " " + "toggle-track",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e36d3a5f9a583bcc" + " " + "toggle-thumb"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SearchBar.tsx",
                                    lineNumber: 318,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 317,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                fill: "none",
                                stroke: useAI ? "var(--primary)" : "var(--text-muted)",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                className: "jsx-e36d3a5f9a583bcc",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
                                        className: "jsx-e36d3a5f9a583bcc"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 321,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 6v6l4 2",
                                        className: "jsx-e36d3a5f9a583bcc"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 322,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 320,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-e36d3a5f9a583bcc",
                                children: "AI"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 324,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 315,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isLoading,
                        className: "jsx-e36d3a5f9a583bcc" + " " + "btn-primary search-submit",
                        children: [
                            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "18",
                                height: "18",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                style: {
                                    animation: "spin 1s linear infinite"
                                },
                                className: "jsx-e36d3a5f9a583bcc",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83",
                                    className: "jsx-e36d3a5f9a583bcc"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SearchBar.tsx",
                                    lineNumber: 330,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 329,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "18",
                                height: "18",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                viewBox: "0 0 24 24",
                                className: "jsx-e36d3a5f9a583bcc",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "11",
                                        cy: "11",
                                        r: "8",
                                        className: "jsx-e36d3a5f9a583bcc"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 334,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        d: "M21 21l-4.35-4.35",
                                        className: "jsx-e36d3a5f9a583bcc"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 335,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 333,
                                columnNumber: 25
                            }, this),
                            isLoading ? "Đang tìm..." : "Tìm kiếm"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SearchBar.tsx",
                        lineNumber: 327,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SearchBar.tsx",
                lineNumber: 283,
                columnNumber: 13
            }, this),
            showSuggestions && (hasSuggestions || loadingSuggestions || recentSearches.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e36d3a5f9a583bcc" + " " + "search-suggestions",
                children: loadingSuggestions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-e36d3a5f9a583bcc" + " " + "suggestions-loading",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            viewBox: "0 0 24 24",
                            style: {
                                animation: "spin 1s linear infinite",
                                display: "inline"
                            },
                            className: "jsx-e36d3a5f9a583bcc",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83",
                                className: "jsx-e36d3a5f9a583bcc"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SearchBar.tsx",
                                lineNumber: 348,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/SearchBar.tsx",
                            lineNumber: 347,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "jsx-e36d3a5f9a583bcc",
                            children: "Đang gợi ý..."
                        }, void 0, false, {
                            fileName: "[project]/app/components/SearchBar.tsx",
                            lineNumber: 350,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/SearchBar.tsx",
                    lineNumber: 346,
                    columnNumber: 25
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        keyword.length < 2 && recentSearches.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e36d3a5f9a583bcc" + " " + "suggestions-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-e36d3a5f9a583bcc",
                                            children: "Tìm kiếm gần đây"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SearchBar.tsx",
                                            lineNumber: 358,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setRecentSearches([]);
                                                localStorage.removeItem(RECENT_SEARCHES_KEY);
                                            },
                                            className: "jsx-e36d3a5f9a583bcc",
                                            children: "Xóa"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SearchBar.tsx",
                                            lineNumber: 359,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/SearchBar.tsx",
                                    lineNumber: 357,
                                    columnNumber: 37
                                }, this),
                                recentSearchItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectRecentSearch(item.value),
                                        className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-icon",
                                                children: getSuggestionIcon(item.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 367,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-text",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 368,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-type",
                                                children: getTypeLabel(item.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 369,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, `recent-${index}`, true, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 362,
                                        columnNumber: 41
                                    }, this))
                            ]
                        }, void 0, true),
                        keyword.length >= 2 && jobTitleSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e36d3a5f9a583bcc" + " " + "suggestions-header category-header job-header",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-e36d3a5f9a583bcc",
                                        children: "💼 Vị trí công việc"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 379,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SearchBar.tsx",
                                    lineNumber: 378,
                                    columnNumber: 37
                                }, this),
                                jobTitleSuggestions.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectSuggestion(item),
                                        className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-item job-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-icon",
                                                children: getSuggestionIcon(item.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 387,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-text",
                                                children: [
                                                    highlightMatch(item.label, keyword),
                                                    item.extra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-extra",
                                                        children: [
                                                            " · ",
                                                            item.extra
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/SearchBar.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 64
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 388,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-type",
                                                children: getTypeLabel(item.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 392,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, `job-${index}`, true, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 382,
                                        columnNumber: 41
                                    }, this))
                            ]
                        }, void 0, true),
                        keyword.length >= 2 && keywordSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e36d3a5f9a583bcc" + " " + "suggestions-header category-header keyword-header",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-e36d3a5f9a583bcc",
                                        children: "Từ khoá gợi ý"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 402,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SearchBar.tsx",
                                    lineNumber: 401,
                                    columnNumber: 37
                                }, this),
                                keywordSuggestions.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectSuggestion(item),
                                        className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-item keyword-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-icon",
                                                children: getSuggestionIcon(item.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 410,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-text",
                                                children: highlightMatch(item.label, keyword)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 411,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-type",
                                                children: getTypeLabel(item.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 412,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, `keyword-${index}`, true, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 405,
                                        columnNumber: 41
                                    }, this))
                            ]
                        }, void 0, true),
                        keyword.length >= 2 && companySuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e36d3a5f9a583bcc" + " " + "suggestions-header category-header company-header",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-e36d3a5f9a583bcc",
                                        children: "Công ty"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 422,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SearchBar.tsx",
                                    lineNumber: 421,
                                    columnNumber: 37
                                }, this),
                                companySuggestions.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectSuggestion(item),
                                        className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-item company-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-icon",
                                                children: getSuggestionIcon(item.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 430,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-text",
                                                children: [
                                                    highlightMatch(item.label, keyword),
                                                    item.extra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-extra",
                                                        children: [
                                                            " · ",
                                                            item.extra
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/SearchBar.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 64
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 431,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-type",
                                                children: getTypeLabel(item.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 435,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, `company-${index}`, true, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 425,
                                        columnNumber: 41
                                    }, this))
                            ]
                        }, void 0, true),
                        keyword.length >= 2 && relatedKeywords.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e36d3a5f9a583bcc" + " " + "suggestions-header category-header related-header",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-e36d3a5f9a583bcc",
                                        children: "Từ khoá liên quan"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 445,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SearchBar.tsx",
                                    lineNumber: 444,
                                    columnNumber: 37
                                }, this),
                                relatedKeywords.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectSuggestion(item),
                                        className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-item related-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-icon",
                                                children: getSuggestionIcon(item.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 453,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-text",
                                                children: highlightMatch(item.label, keyword)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 454,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-type",
                                                children: getTypeLabel(item.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 455,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, `related-${index}`, true, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 448,
                                        columnNumber: 41
                                    }, this))
                            ]
                        }, void 0, true),
                        keyword.length >= 2 && skillSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e36d3a5f9a583bcc" + " " + "suggestions-header category-header skill-header",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-e36d3a5f9a583bcc",
                                        children: "💡 Kỹ năng"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 465,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SearchBar.tsx",
                                    lineNumber: 464,
                                    columnNumber: 37
                                }, this),
                                skillSuggestions.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectSuggestion(item),
                                        className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-item skill-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-icon",
                                                children: getSuggestionIcon(item.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 473,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-text",
                                                children: highlightMatch(item.label, keyword)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 474,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-type",
                                                children: getTypeLabel(item.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 475,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, `skill-${index}`, true, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 468,
                                        columnNumber: 41
                                    }, this))
                            ]
                        }, void 0, true),
                        keyword.length >= 2 && industrySuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-e36d3a5f9a583bcc" + " " + "suggestions-header category-header industry-header",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-e36d3a5f9a583bcc",
                                        children: "🏢 Ngành nghề"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 485,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SearchBar.tsx",
                                    lineNumber: 484,
                                    columnNumber: 37
                                }, this),
                                industrySuggestions.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectSuggestion(item),
                                        className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-item industry-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-icon",
                                                children: getSuggestionIcon(item.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 493,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-text",
                                                children: highlightMatch(item.label, keyword)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 494,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-e36d3a5f9a583bcc" + " " + "suggestion-type",
                                                children: getTypeLabel(item.type)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SearchBar.tsx",
                                                lineNumber: 495,
                                                columnNumber: 45
                                            }, this)
                                        ]
                                    }, `industry-${index}`, true, {
                                        fileName: "[project]/app/components/SearchBar.tsx",
                                        lineNumber: 488,
                                        columnNumber: 41
                                    }, this))
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/app/components/SearchBar.tsx",
                lineNumber: 344,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "e36d3a5f9a583bcc",
                children: '.search-form.jsx-e36d3a5f9a583bcc{background:var(--bg-card);border:2px solid var(--border);box-shadow:var(--shadow-md);border-radius:12px;transition:border-color .2s;display:flex;overflow:hidden}.search-form.jsx-e36d3a5f9a583bcc:focus-within{border-color:var(--primary)}.search-keyword.jsx-e36d3a5f9a583bcc,.search-location.jsx-e36d3a5f9a583bcc{flex:1;align-items:center;min-width:0;padding:0 1.25rem;display:flex}.search-keyword.jsx-e36d3a5f9a583bcc input.jsx-e36d3a5f9a583bcc,.search-location.jsx-e36d3a5f9a583bcc input.jsx-e36d3a5f9a583bcc{color:var(--text);background:0 0;border:none;outline:none;width:100%;padding:1rem 0;font-family:inherit;font-size:.9375rem}.search-keyword.jsx-e36d3a5f9a583bcc{flex:2}.search-keyword.jsx-e36d3a5f9a583bcc:after,.search-location.jsx-e36d3a5f9a583bcc:after{content:"";background:var(--border);width:1.5px;position:absolute;top:25%;bottom:25%;right:0}.search-location.jsx-e36d3a5f9a583bcc:after{display:none}.search-ai-toggle.jsx-e36d3a5f9a583bcc{cursor:pointer;-webkit-user-select:none;user-select:none;border-left:1px solid var(--border);align-items:center;gap:.5rem;padding:0 1rem;display:flex}.search-ai-toggle.jsx-e36d3a5f9a583bcc input.jsx-e36d3a5f9a583bcc{display:none}.toggle-track.jsx-e36d3a5f9a583bcc{background:var(--border);border-radius:10px;width:36px;height:20px;transition:background .2s;position:relative}.search-ai-toggle.jsx-e36d3a5f9a583bcc input.jsx-e36d3a5f9a583bcc:checked+.toggle-track.jsx-e36d3a5f9a583bcc{background:var(--primary)}.toggle-thumb.jsx-e36d3a5f9a583bcc{background:#fff;border-radius:50%;width:16px;height:16px;transition:left .2s;position:absolute;top:2px;left:2px}.search-ai-toggle.jsx-e36d3a5f9a583bcc input.jsx-e36d3a5f9a583bcc:checked+.toggle-track.jsx-e36d3a5f9a583bcc .toggle-thumb.jsx-e36d3a5f9a583bcc{left:18px}.search-ai-toggle.jsx-e36d3a5f9a583bcc span.jsx-e36d3a5f9a583bcc{color:var(--text-muted);font-size:.8125rem}.search-ai-toggle.jsx-e36d3a5f9a583bcc input.jsx-e36d3a5f9a583bcc:checked~span.jsx-e36d3a5f9a583bcc{color:var(--primary)}.search-submit.jsx-e36d3a5f9a583bcc{border-radius:0 10px 10px 0!important;margin:0!important}.search-suggestions.jsx-e36d3a5f9a583bcc{background:var(--bg-card);border:1px solid var(--border);box-shadow:var(--shadow-lg);z-index:1000;border-radius:8px;max-height:350px;margin-top:4px;position:absolute;top:100%;left:0;right:0;overflow-y:auto}.suggestions-loading.jsx-e36d3a5f9a583bcc{text-align:center;color:var(--text-muted);padding:1rem}.suggestions-header.jsx-e36d3a5f9a583bcc{color:var(--text-muted);border-bottom:1px solid var(--border);justify-content:space-between;align-items:center;padding:.5rem 1rem;font-size:.75rem;display:flex}.suggestions-header.jsx-e36d3a5f9a583bcc button.jsx-e36d3a5f9a583bcc{color:var(--primary);cursor:pointer;background:0 0;border:none;padding:0;font-size:.75rem}.suggestion-item.jsx-e36d3a5f9a583bcc{text-align:left;cursor:pointer;width:100%;color:var(--text);border:none;border-bottom:1px solid var(--border);background:0 0;align-items:center;gap:.75rem;padding:.75rem 1rem;font-size:.875rem;display:flex}.suggestion-item.jsx-e36d3a5f9a583bcc:last-child{border-bottom:none}.suggestion-item.jsx-e36d3a5f9a583bcc:hover,.suggestion-item.selected.jsx-e36d3a5f9a583bcc{background:var(--bg)}.category-header.jsx-e36d3a5f9a583bcc{background:var(--bg);border-bottom:1px solid var(--border);padding:.6rem 1rem;font-weight:600}.job-header.jsx-e36d3a5f9a583bcc{border-left:3px solid #2563eb}.keyword-header.jsx-e36d3a5f9a583bcc{border-left:3px solid #3b82f6}.company-header.jsx-e36d3a5f9a583bcc{border-left:3px solid #0891b2}.related-header.jsx-e36d3a5f9a583bcc{border-left:3px solid #8b5cf6}.skill-header.jsx-e36d3a5f9a583bcc{border-left:3px solid #10b981}.industry-header.jsx-e36d3a5f9a583bcc{border-left:3px solid #f59e0b}.suggestion-extra.jsx-e36d3a5f9a583bcc{color:var(--text-muted);font-size:.8125rem}.suggestion-icon.jsx-e36d3a5f9a583bcc{color:var(--text-muted);flex-shrink:0}.suggestion-text.jsx-e36d3a5f9a583bcc{flex:1}.suggestion-type.jsx-e36d3a5f9a583bcc{color:var(--text-muted);background:var(--tag-bg);border-radius:4px;padding:2px 8px;font-size:.75rem}@media (width<=768px){.search-form.jsx-e36d3a5f9a583bcc{border-radius:8px;flex-direction:column;gap:0;overflow:visible}.search-keyword.jsx-e36d3a5f9a583bcc,.search-location.jsx-e36d3a5f9a583bcc{flex:none;width:100%;padding:.75rem}.search-keyword.jsx-e36d3a5f9a583bcc{border-bottom:1px solid var(--border)}.search-keyword.jsx-e36d3a5f9a583bcc:after{display:none}.search-ai-toggle.jsx-e36d3a5f9a583bcc{border-left:none;border-top:1px solid var(--border);justify-content:center;padding:.75rem}.search-submit.jsx-e36d3a5f9a583bcc{justify-content:center;width:100%;border-radius:8px!important;margin:.5rem 0 0!important}.search-keyword.jsx-e36d3a5f9a583bcc input.jsx-e36d3a5f9a583bcc,.search-location.jsx-e36d3a5f9a583bcc input.jsx-e36d3a5f9a583bcc{padding:.5rem 0}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SearchBar.tsx",
        lineNumber: 282,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/actions/data:090625 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveJob",
    ()=>$$RSC_SERVER_ACTION_12
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4074008fc079c221c63f168f8c403e5a556b09450a":"saveJob"},"app/actions/jobs.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4074008fc079c221c63f168f8c403e5a556b09450a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveJob");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vam9icy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgc2VtYW50aWNKb2JTZWFyY2ggfSBmcm9tIFwiQC9saWIvYWlcIjtcblxuZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGV4dFxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvW15hLXowLTlcXHMtXS9nLCBcIlwiKVxuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIi1cIilcbiAgICAgICAgLnJlcGxhY2UoLy0rL2csIFwiLVwiKVxuICAgICAgICAudHJpbSgpICsgXCItXCIgKyBEYXRlLm5vdygpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Sm9icyhwYXJhbXM/OiB7XG4gICAgcT86IHN0cmluZztcbiAgICBsb2M/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBzdGF0dXM/OiBzdHJpbmc7XG4gICAgaW5kdXN0cnlJZD86IHN0cmluZztcbiAgICBzYWxhcnk/OiBzdHJpbmc7XG4gICAgdXNlQUk/OiBib29sZWFuO1xufSkge1xuICAgIGNvbnN0IHdoZXJlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuXG4gICAgaWYgKHBhcmFtcz8uc3RhdHVzKSB7XG4gICAgICAgIHdoZXJlLnN0YXR1cyA9IHBhcmFtcy5zdGF0dXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hlcmUuc3RhdHVzID0gXCJBQ1RJVkVcIjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zPy5xICYmIHBhcmFtcy51c2VBSSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWlKb2JzID0gYXdhaXQgc2VtYW50aWNKb2JTZWFyY2gocGFyYW1zLnEsIDUwKTtcbiAgICAgICAgICAgIGlmIChhaUpvYnMgJiYgQXJyYXkuaXNBcnJheShhaUpvYnMpICYmIGFpSm9icy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFpSm9icy5tYXAoKGpvYjogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBpZDogam9iLmlkLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogam9iLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzbHVnOiBqb2Iuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGpvYi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZW1lbnRzOiBqb2IucmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBiZW5lZml0czogam9iLmJlbmVmaXRzLFxuICAgICAgICAgICAgICAgICAgICBzYWxhcnlNaW46IGpvYi5zYWxhcnlNaW4sXG4gICAgICAgICAgICAgICAgICAgIHNhbGFyeU1heDogam9iLnNhbGFyeU1heCxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGpvYi5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgam9iVHlwZTogam9iLmpvYlR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHNraWxsczogam9iLnNraWxscyxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBqb2IuY3JlYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICBjb21wYW55OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBqb2IuY29tcGFueU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBqb2IuY29tcGFueUxvZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiBqb2IuY29tcGFueVNsdWcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNpbWlsYXJpdHk6IGpvYi5zaW1pbGFyaXR5LFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFJIHNlYXJjaCBmYWlsZWQsIGZhbGxpbmcgYmFjayB0byB0ZXh0IHNlYXJjaDpcIiwgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zPy5xICYmICFwYXJhbXMudXNlQUkpIHtcbiAgICAgICAgd2hlcmUuT1IgPSBbXG4gICAgICAgICAgICB7IHRpdGxlOiB7IGNvbnRhaW5zOiBwYXJhbXMucSwgbW9kZTogXCJpbnNlbnNpdGl2ZVwiIH0gfSxcbiAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IHsgY29udGFpbnM6IHBhcmFtcy5xLCBtb2RlOiBcImluc2Vuc2l0aXZlXCIgfSB9LFxuICAgICAgICAgICAgeyBza2lsbHM6IHsgaGFzU29tZTogW3BhcmFtcy5xXSB9IH0sXG4gICAgICAgIF07XG4gICAgfVxuICAgIGlmIChwYXJhbXM/LmxvYykge1xuICAgICAgICB3aGVyZS5sb2NhdGlvbiA9IHsgY29udGFpbnM6IHBhcmFtcy5sb2MsIG1vZGU6IFwiaW5zZW5zaXRpdmVcIiB9O1xuICAgIH1cbiAgICBpZiAocGFyYW1zPy50eXBlKSB3aGVyZS5qb2JUeXBlID0gcGFyYW1zLnR5cGU7XG4gICAgaWYgKHBhcmFtcz8uaW5kdXN0cnlJZCkgd2hlcmUuaW5kdXN0cnlJZCA9IHBhcmFtcy5pbmR1c3RyeUlkO1xuXG4gICAgLy8gU2FsYXJ5IHJhbmdlIGZpbHRlclxuICAgIGlmIChwYXJhbXM/LnNhbGFyeSkge1xuICAgICAgICBjb25zdCBbbWluU2FsYXJ5LCBtYXhTYWxhcnldID0gcGFyYW1zLnNhbGFyeS5zcGxpdChcIi1cIikubWFwKE51bWJlcik7XG4gICAgICAgIHdoZXJlLkFORCA9IFtcbiAgICAgICAgICAgIHsgc2FsYXJ5TWluOiB7IGd0ZTogbWluU2FsYXJ5IH0gfSxcbiAgICAgICAgICAgIHsgT1I6IFt7IHNhbGFyeU1heDogeyBsdGU6IG1heFNhbGFyeSB9IH0sIHsgc2FsYXJ5TWF4OiB7IGd0ZTogbWluU2FsYXJ5IH0gfV0gfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmUsXG4gICAgICAgIGluY2x1ZGU6IHsgY29tcGFueTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgbG9nbzogdHJ1ZSwgc2x1ZzogdHJ1ZSwgdmVyaWZpZWQ6IHRydWUgfSB9IH0sXG4gICAgICAgIG9yZGVyQnk6IHBhcmFtcz8ucSA/IHVuZGVmaW5lZCA6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICB0YWtlOiA1MCxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEpvYkJ5U2x1ZyhzbHVnOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gcHJpc21hLmpvYi5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgc2x1ZyB9LFxuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICBjb21wYW55OiB0cnVlLFxuICAgICAgICAgICAgaW5kdXN0cnk6IHRydWUsXG4gICAgICAgICAgICBfY291bnQ6IHsgc2VsZWN0OiB7IGFwcGxpY2F0aW9uczogdHJ1ZSB9IH1cbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEpvYkJ5SWQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgICBpbmNsdWRlOiB7IGNvbXBhbnk6IHRydWUsIGFwcGxpY2F0aW9uczogeyBpbmNsdWRlOiB7IGNhbmRpZGF0ZTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgZW1haWw6IHRydWUsIGltYWdlOiB0cnVlLCBjYW5kaWRhdGVQcm9maWxlOiB0cnVlIH0gfSB9IH0sIF9jb3VudDogeyBzZWxlY3Q6IHsgYXBwbGljYXRpb25zOiB0cnVlIH0gfSB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSm9iKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyIHx8IHNlc3Npb24udXNlci5yb2xlICE9PSBcIkVNUExPWUVSXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiS2jDtG5nIGPDsyBxdXnhu4FuIHRydXkgY+G6rXBcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHJlcXVpcmVtZW50cyA9IGZvcm1EYXRhLmdldChcInJlcXVpcmVtZW50c1wiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgYmVuZWZpdHMgPSBmb3JtRGF0YS5nZXQoXCJiZW5lZml0c1wiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgbG9jYXRpb24gPSBmb3JtRGF0YS5nZXQoXCJsb2NhdGlvblwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgam9iVHlwZSA9IGZvcm1EYXRhLmdldChcImpvYlR5cGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHNhbGFyeU1pbiA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcInNhbGFyeU1pblwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3Qgc2FsYXJ5TWF4ID0gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwic2FsYXJ5TWF4XCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBza2lsbHNSYXcgPSBmb3JtRGF0YS5nZXQoXCJza2lsbHNcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHNraWxscyA9IHNraWxsc1JhdyA/IHNraWxsc1Jhdy5zcGxpdChcIixcIikubWFwKChzKSA9PiBzLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pIDogW107XG4gICAgY29uc3QgaW5kdXN0cnlTbHVnID0gZm9ybURhdGEuZ2V0KFwiaW5kdXN0cnlJZFwiKSBhcyBzdHJpbmc7XG5cbiAgICAvLyBHZXQgZW1wbG95ZXIncyBjb21wYW55XG4gICAgY29uc3QgZW1wbG95ZXIgPSBhd2FpdCBwcmlzbWEuZW1wbG95ZXJQcm9maWxlLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFlbXBsb3llcj8uY29tcGFueUlkKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkLhuqFuIGNoxrBhIGPDsyB0aMO0bmcgdGluIGPDtG5nIHR5LiBWdWkgbMOybmcgY+G6rXAgbmjhuq10IHRyYW5nIEPDtG5nIHR5IHRyxrDhu5tjLlwiIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IGluZHVzdHJ5IGJ5IHNsdWcgaWYgcHJvdmlkZWRcbiAgICBsZXQgaW5kdXN0cnlJZCA9IG51bGw7XG4gICAgaWYgKGluZHVzdHJ5U2x1Zykge1xuICAgICAgICBjb25zdCBpbmR1c3RyeSA9IGF3YWl0IHByaXNtYS5pbmR1c3RyeS5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IHNsdWc6IGluZHVzdHJ5U2x1ZyB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kdXN0cnkpIHtcbiAgICAgICAgICAgIGluZHVzdHJ5SWQgPSBpbmR1c3RyeS5pZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGpvYiA9IGF3YWl0IHByaXNtYS5qb2IuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29tcGFueUlkOiBlbXBsb3llci5jb21wYW55SWQsXG4gICAgICAgICAgICBwb3N0ZWRCeUlkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIHNsdWc6IHNsdWdpZnkodGl0bGUpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZXF1aXJlbWVudHMsXG4gICAgICAgICAgICBiZW5lZml0cyxcbiAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgICAgam9iVHlwZTogam9iVHlwZSBhcyBcIkZVTExfVElNRVwiIHwgXCJQQVJUX1RJTUVcIiB8IFwiUkVNT1RFXCIgfCBcIklOVEVSTlNISVBcIiB8IFwiQ09OVFJBQ1RcIixcbiAgICAgICAgICAgIHNhbGFyeU1pbixcbiAgICAgICAgICAgIHNhbGFyeU1heCxcbiAgICAgICAgICAgIHNraWxscyxcbiAgICAgICAgICAgIHN0YXR1czogXCJQRU5ESU5HXCIsXG4gICAgICAgICAgICBpbmR1c3RyeUlkLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBnZW5lcmF0ZUpvYkVtYmVkZGluZyB9ID0gYXdhaXQgaW1wb3J0KFwiQC9saWIvYWlcIik7XG4gICAgICAgIGF3YWl0IGdlbmVyYXRlSm9iRW1iZWRkaW5nKGpvYi5pZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGdlbmVyYXRlIGVtYmVkZGluZyBmb3IgbmV3IGpvYjpcIiwgZSk7XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZW1wbG95ZXIvam9ic1wiKTtcbiAgICByZWRpcmVjdChcIi9lbXBsb3llci9qb2JzXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGlkOiBqb2IuaWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUpvYlN0YXR1cyhqb2JJZDogc3RyaW5nLCBzdGF0dXM6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyIHx8IHNlc3Npb24udXNlci5yb2xlICE9PSBcIkFETUlOXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiS2jDtG5nIGPDsyBxdXnhu4FuXCIgfTtcbiAgICB9XG4gICAgY29uc3Qgam9iID0gYXdhaXQgcHJpc21hLmpvYi51cGRhdGUoe1xuICAgICAgICB3aGVyZTogeyBpZDogam9iSWQgfSxcbiAgICAgICAgZGF0YTogeyBzdGF0dXM6IHN0YXR1cyBhcyBcIkFDVElWRVwiIHwgXCJSRUpFQ1RFRFwiIHwgXCJDTE9TRURcIiB9LFxuICAgICAgICBzZWxlY3Q6IHsgdGl0bGU6IHRydWUsIHBvc3RlZEJ5SWQ6IHRydWUgfSxcbiAgICB9KTtcblxuICAgIGlmIChzdGF0dXMgPT09IFwiQUNUSVZFXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZ2VuZXJhdGVKb2JFbWJlZGRpbmcgfSA9IGF3YWl0IGltcG9ydChcIkAvbGliL2FpXCIpO1xuICAgICAgICAgICAgYXdhaXQgZ2VuZXJhdGVKb2JFbWJlZGRpbmcoam9iSWQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGdlbmVyYXRlIGVtYmVkZGluZyBmb3Igam9iOlwiLCBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdGlmeSBlbXBsb3llciBhYm91dCBqb2Igc3RhdHVzXG4gICAgaWYgKGpvYi5wb3N0ZWRCeUlkKSB7XG4gICAgICAgIGNvbnN0IHN0YXR1c01zZyA9IHN0YXR1cyA9PT0gXCJBQ1RJVkVcIiA/IFwixJHDoyDEkcaw4bujYyBkdXnhu4d0XCIgOiBzdGF0dXMgPT09IFwiUkVKRUNURURcIiA/IFwixJHDoyBi4buLIHThu6sgY2jhu5FpXCIgOiBcIsSRw6MgxJHGsOG7o2MgxJHDs25nXCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGpvYi5wb3N0ZWRCeUlkLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBzdGF0dXMgPT09IFwiQUNUSVZFXCIgPyBcIkpPQl9BUFBST1ZFRFwiIDogc3RhdHVzID09PSBcIlJFSkVDVEVEXCIgPyBcIkpPQl9SRUpFQ1RFRFwiIDogXCJBUFBMSUNBVElPTl9TVEFUVVNcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGBUaW4gdHV54buDbiBk4bulbmcgJHtzdGF0dXNNc2d9YCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYFRpbiBcIiR7am9iLnRpdGxlfVwiICR7c3RhdHVzTXNnfSBi4bufaSBxdeG6o24gdHLhu4sgdmnDqm4uYCxcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZW1wbG95ZXIvam9ic1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoXykgeyAvKiBpZ25vcmUgKi8gfVxuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2pvYnNcIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZXJKb2JzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZWRpcmVjdChcIi9sb2dpblwiKTtcblxuICAgIGNvbnN0IGVtcGxveWVyID0gYXdhaXQgcHJpc21hLmVtcGxveWVyUHJvZmlsZS5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQgfSxcbiAgICB9KTtcbiAgICBpZiAoIWVtcGxveWVyPy5jb21wYW55SWQpIHJldHVybiBbXTtcblxuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgY29tcGFueUlkOiBlbXBsb3llci5jb21wYW55SWQgfSxcbiAgICAgICAgaW5jbHVkZTogeyBfY291bnQ6IHsgc2VsZWN0OiB7IGFwcGxpY2F0aW9uczogdHJ1ZSB9IH0gfSxcbiAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVKb2Ioam9iSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyIHx8IHNlc3Npb24udXNlci5yb2xlICE9PSBcIkVNUExPWUVSXCIpIHJldHVybiB7IGVycm9yOiBcIktow7RuZyBjw7MgcXV54buBblwiIH07XG4gICAgYXdhaXQgcHJpc21hLmpvYi5kZWxldGUoeyB3aGVyZTogeyBpZDogam9iSWQgfSB9KTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9lbXBsb3llci9qb2JzXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEpvYnNGb3JBZG1pbigpIHtcbiAgICByZXR1cm4gcHJpc21hLmpvYi5maW5kTWFueSh7XG4gICAgICAgIGluY2x1ZGU6IHsgY29tcGFueTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSB9IH0sIF9jb3VudDogeyBzZWxlY3Q6IHsgYXBwbGljYXRpb25zOiB0cnVlIH0gfSB9LFxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEluZHVzdHJpZXMoKSB7XG4gICAgcmV0dXJuIHByaXNtYS5pbmR1c3RyeS5maW5kTWFueSh7XG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogXCJhc2NcIiB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsSW5kdXN0cmllcygpIHtcbiAgICByZXR1cm4gcHJpc21hLmluZHVzdHJ5LmZpbmRNYW55KHtcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JMb2NhdGlvbnMoKSB7XG4gICAgY29uc3Qgam9icyA9IGF3YWl0IHByaXNtYS5qb2IuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyBzdGF0dXM6IFwiQUNUSVZFXCIgfSxcbiAgICAgICAgc2VsZWN0OiB7IGxvY2F0aW9uOiB0cnVlIH0sXG4gICAgICAgIGRpc3RpbmN0OiBbXCJsb2NhdGlvblwiXSxcbiAgICB9KTtcbiAgICByZXR1cm4gam9icy5tYXAoaiA9PiBqLmxvY2F0aW9uKS5maWx0ZXIoQm9vbGVhbikuc29ydCgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Sm9iRmlsdGVycygpIHtcbiAgICBjb25zdCBbaW5kdXN0cmllcywgbG9jYXRpb25zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJpc21hLmluZHVzdHJ5LmZpbmRNYW55KHsgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0gfSksXG4gICAgICAgIHByaXNtYS5qb2IuZmluZE1hbnkoe1xuICAgICAgICAgICAgd2hlcmU6IHsgc3RhdHVzOiBcIkFDVElWRVwiIH0sXG4gICAgICAgICAgICBzZWxlY3Q6IHsgbG9jYXRpb246IHRydWUgfSxcbiAgICAgICAgICAgIGRpc3RpbmN0OiBbXCJsb2NhdGlvblwiXSxcbiAgICAgICAgfSkudGhlbihqb2JzID0+IGpvYnMubWFwKGogPT4gai5sb2NhdGlvbikuZmlsdGVyKEJvb2xlYW4pLnNvcnQoKSlcbiAgICBdKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluZHVzdHJpZXMsXG4gICAgICAgIGxvY2F0aW9ucyxcbiAgICAgICAgam9iVHlwZXM6IFtcIkZVTExfVElNRVwiLCBcIlBBUlRfVElNRVwiLCBcIlJFTU9URVwiLCBcIklOVEVSTlNISVBcIiwgXCJDT05UUkFDVFwiXSxcbiAgICAgICAgZXhwZXJpZW5jZUxldmVsczogW1wiRW50cnlcIiwgXCJKdW5pb3JcIiwgXCJNaWQtTGV2ZWxcIiwgXCJTZW5pb3JcIiwgXCJNYW5hZ2VyXCJdLFxuICAgICAgICBzYWxhcnlSYW5nZXM6IFtcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMC01MDAwMDAwXCIsIGxhYmVsOiBcIkTGsOG7m2kgNSB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiNTAwMDAwMC0xMDAwMDAwMFwiLCBsYWJlbDogXCI1IC0gMTAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjEwMDAwMDAwLTIwMDAwMDAwXCIsIGxhYmVsOiBcIjEwIC0gMjAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjIwMDAwMDAwLTMwMDAwMDAwXCIsIGxhYmVsOiBcIjIwIC0gMzAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjMwMDAwMDAwLTUwMDAwMDAwXCIsIGxhYmVsOiBcIjMwIC0gNTAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjUwMDAwMDAwLTk5OTk5OTk5OVwiLCBsYWJlbDogXCJUcsOqbiA1MCB0cmnhu4d1XCIgfSxcbiAgICAgICAgXVxuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSm9iKGpvYklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJWdWkgbMOybmcgxJHEg25nIG5o4bqtcCDEkeG7gyBsxrB1IHZp4buHYyBsw6BtXCIgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgICAgICBqb2JJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvam9ic1wiKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiVmnhu4djIGzDoG0gbsOgeSDEkcOjIMSRxrDhu6NjIGzGsHUgdHLGsOG7m2MgxJHDs1wiIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdW5zYXZlSm9iKGpvYklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJWdWkgbMOybmcgxJHEg25nIG5o4bqtcFwiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgcHJpc21hLnNhdmVkSm9iLmRlbGV0ZU1hbnkoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICAgICAgICBqb2JJZFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvam9ic1wiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTYXZlZEpvYnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXIpIHJldHVybiBbXTtcblxuICAgIHJldHVybiBwcmlzbWEuc2F2ZWRKb2IuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9LFxuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICBqb2I6IHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbnk6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGxvZ286IHRydWUsIHNsdWc6IHRydWUgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2F2ZWRKb2JJZHMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBzYXZlZCA9IGF3YWl0IHByaXNtYS5zYXZlZEpvYi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH0sXG4gICAgICAgIHNlbGVjdDogeyBqb2JJZDogdHJ1ZSB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2F2ZWQubWFwKHMgPT4gcy5qb2JJZCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0pvYlNhdmVkKGpvYklkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3Qgc2F2ZWQgPSBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VySWRfam9iSWQ6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgICAgICBqb2JJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuICEhc2F2ZWQ7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitRQTJTc0Isc0xBQUEifQ==
}),
"[project]/app/actions/data:e7d0dd [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unsaveJob",
    ()=>$$RSC_SERVER_ACTION_13
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4016bfa22123dad3d3aaeee262b4ebf7358de34cb8":"unsaveJob"},"app/actions/jobs.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4016bfa22123dad3d3aaeee262b4ebf7358de34cb8", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "unsaveJob");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vam9icy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgc2VtYW50aWNKb2JTZWFyY2ggfSBmcm9tIFwiQC9saWIvYWlcIjtcblxuZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGV4dFxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAucmVwbGFjZSgvW15hLXowLTlcXHMtXS9nLCBcIlwiKVxuICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCBcIi1cIilcbiAgICAgICAgLnJlcGxhY2UoLy0rL2csIFwiLVwiKVxuICAgICAgICAudHJpbSgpICsgXCItXCIgKyBEYXRlLm5vdygpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Sm9icyhwYXJhbXM/OiB7XG4gICAgcT86IHN0cmluZztcbiAgICBsb2M/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBzdGF0dXM/OiBzdHJpbmc7XG4gICAgaW5kdXN0cnlJZD86IHN0cmluZztcbiAgICBzYWxhcnk/OiBzdHJpbmc7XG4gICAgdXNlQUk/OiBib29sZWFuO1xufSkge1xuICAgIGNvbnN0IHdoZXJlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuXG4gICAgaWYgKHBhcmFtcz8uc3RhdHVzKSB7XG4gICAgICAgIHdoZXJlLnN0YXR1cyA9IHBhcmFtcy5zdGF0dXM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hlcmUuc3RhdHVzID0gXCJBQ1RJVkVcIjtcbiAgICB9XG5cbiAgICBpZiAocGFyYW1zPy5xICYmIHBhcmFtcy51c2VBSSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYWlKb2JzID0gYXdhaXQgc2VtYW50aWNKb2JTZWFyY2gocGFyYW1zLnEsIDUwKTtcbiAgICAgICAgICAgIGlmIChhaUpvYnMgJiYgQXJyYXkuaXNBcnJheShhaUpvYnMpICYmIGFpSm9icy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFpSm9icy5tYXAoKGpvYjogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBpZDogam9iLmlkLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogam9iLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBzbHVnOiBqb2Iuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGpvYi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZW1lbnRzOiBqb2IucmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBiZW5lZml0czogam9iLmJlbmVmaXRzLFxuICAgICAgICAgICAgICAgICAgICBzYWxhcnlNaW46IGpvYi5zYWxhcnlNaW4sXG4gICAgICAgICAgICAgICAgICAgIHNhbGFyeU1heDogam9iLnNhbGFyeU1heCxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGpvYi5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgam9iVHlwZTogam9iLmpvYlR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHNraWxsczogam9iLnNraWxscyxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBqb2IuY3JlYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICBjb21wYW55OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBqb2IuY29tcGFueU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBqb2IuY29tcGFueUxvZ28sXG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiBqb2IuY29tcGFueVNsdWcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNpbWlsYXJpdHk6IGpvYi5zaW1pbGFyaXR5LFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFJIHNlYXJjaCBmYWlsZWQsIGZhbGxpbmcgYmFjayB0byB0ZXh0IHNlYXJjaDpcIiwgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zPy5xICYmICFwYXJhbXMudXNlQUkpIHtcbiAgICAgICAgd2hlcmUuT1IgPSBbXG4gICAgICAgICAgICB7IHRpdGxlOiB7IGNvbnRhaW5zOiBwYXJhbXMucSwgbW9kZTogXCJpbnNlbnNpdGl2ZVwiIH0gfSxcbiAgICAgICAgICAgIHsgZGVzY3JpcHRpb246IHsgY29udGFpbnM6IHBhcmFtcy5xLCBtb2RlOiBcImluc2Vuc2l0aXZlXCIgfSB9LFxuICAgICAgICAgICAgeyBza2lsbHM6IHsgaGFzU29tZTogW3BhcmFtcy5xXSB9IH0sXG4gICAgICAgIF07XG4gICAgfVxuICAgIGlmIChwYXJhbXM/LmxvYykge1xuICAgICAgICB3aGVyZS5sb2NhdGlvbiA9IHsgY29udGFpbnM6IHBhcmFtcy5sb2MsIG1vZGU6IFwiaW5zZW5zaXRpdmVcIiB9O1xuICAgIH1cbiAgICBpZiAocGFyYW1zPy50eXBlKSB3aGVyZS5qb2JUeXBlID0gcGFyYW1zLnR5cGU7XG4gICAgaWYgKHBhcmFtcz8uaW5kdXN0cnlJZCkgd2hlcmUuaW5kdXN0cnlJZCA9IHBhcmFtcy5pbmR1c3RyeUlkO1xuXG4gICAgLy8gU2FsYXJ5IHJhbmdlIGZpbHRlclxuICAgIGlmIChwYXJhbXM/LnNhbGFyeSkge1xuICAgICAgICBjb25zdCBbbWluU2FsYXJ5LCBtYXhTYWxhcnldID0gcGFyYW1zLnNhbGFyeS5zcGxpdChcIi1cIikubWFwKE51bWJlcik7XG4gICAgICAgIHdoZXJlLkFORCA9IFtcbiAgICAgICAgICAgIHsgc2FsYXJ5TWluOiB7IGd0ZTogbWluU2FsYXJ5IH0gfSxcbiAgICAgICAgICAgIHsgT1I6IFt7IHNhbGFyeU1heDogeyBsdGU6IG1heFNhbGFyeSB9IH0sIHsgc2FsYXJ5TWF4OiB7IGd0ZTogbWluU2FsYXJ5IH0gfV0gfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmUsXG4gICAgICAgIGluY2x1ZGU6IHsgY29tcGFueTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgbG9nbzogdHJ1ZSwgc2x1ZzogdHJ1ZSwgdmVyaWZpZWQ6IHRydWUgfSB9IH0sXG4gICAgICAgIG9yZGVyQnk6IHBhcmFtcz8ucSA/IHVuZGVmaW5lZCA6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgICAgICB0YWtlOiA1MCxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEpvYkJ5U2x1ZyhzbHVnOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gcHJpc21hLmpvYi5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgc2x1ZyB9LFxuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICBjb21wYW55OiB0cnVlLFxuICAgICAgICAgICAgaW5kdXN0cnk6IHRydWUsXG4gICAgICAgICAgICBfY291bnQ6IHsgc2VsZWN0OiB7IGFwcGxpY2F0aW9uczogdHJ1ZSB9IH1cbiAgICAgICAgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEpvYkJ5SWQoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgICBpbmNsdWRlOiB7IGNvbXBhbnk6IHRydWUsIGFwcGxpY2F0aW9uczogeyBpbmNsdWRlOiB7IGNhbmRpZGF0ZTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgZW1haWw6IHRydWUsIGltYWdlOiB0cnVlLCBjYW5kaWRhdGVQcm9maWxlOiB0cnVlIH0gfSB9IH0sIF9jb3VudDogeyBzZWxlY3Q6IHsgYXBwbGljYXRpb25zOiB0cnVlIH0gfSB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSm9iKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyIHx8IHNlc3Npb24udXNlci5yb2xlICE9PSBcIkVNUExPWUVSXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiS2jDtG5nIGPDsyBxdXnhu4FuIHRydXkgY+G6rXBcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHJlcXVpcmVtZW50cyA9IGZvcm1EYXRhLmdldChcInJlcXVpcmVtZW50c1wiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgYmVuZWZpdHMgPSBmb3JtRGF0YS5nZXQoXCJiZW5lZml0c1wiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgbG9jYXRpb24gPSBmb3JtRGF0YS5nZXQoXCJsb2NhdGlvblwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgam9iVHlwZSA9IGZvcm1EYXRhLmdldChcImpvYlR5cGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHNhbGFyeU1pbiA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcInNhbGFyeU1pblwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3Qgc2FsYXJ5TWF4ID0gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwic2FsYXJ5TWF4XCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBza2lsbHNSYXcgPSBmb3JtRGF0YS5nZXQoXCJza2lsbHNcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHNraWxscyA9IHNraWxsc1JhdyA/IHNraWxsc1Jhdy5zcGxpdChcIixcIikubWFwKChzKSA9PiBzLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pIDogW107XG4gICAgY29uc3QgaW5kdXN0cnlTbHVnID0gZm9ybURhdGEuZ2V0KFwiaW5kdXN0cnlJZFwiKSBhcyBzdHJpbmc7XG5cbiAgICAvLyBHZXQgZW1wbG95ZXIncyBjb21wYW55XG4gICAgY29uc3QgZW1wbG95ZXIgPSBhd2FpdCBwcmlzbWEuZW1wbG95ZXJQcm9maWxlLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFlbXBsb3llcj8uY29tcGFueUlkKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkLhuqFuIGNoxrBhIGPDsyB0aMO0bmcgdGluIGPDtG5nIHR5LiBWdWkgbMOybmcgY+G6rXAgbmjhuq10IHRyYW5nIEPDtG5nIHR5IHRyxrDhu5tjLlwiIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IGluZHVzdHJ5IGJ5IHNsdWcgaWYgcHJvdmlkZWRcbiAgICBsZXQgaW5kdXN0cnlJZCA9IG51bGw7XG4gICAgaWYgKGluZHVzdHJ5U2x1Zykge1xuICAgICAgICBjb25zdCBpbmR1c3RyeSA9IGF3YWl0IHByaXNtYS5pbmR1c3RyeS5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IHNsdWc6IGluZHVzdHJ5U2x1ZyB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5kdXN0cnkpIHtcbiAgICAgICAgICAgIGluZHVzdHJ5SWQgPSBpbmR1c3RyeS5pZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGpvYiA9IGF3YWl0IHByaXNtYS5qb2IuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29tcGFueUlkOiBlbXBsb3llci5jb21wYW55SWQsXG4gICAgICAgICAgICBwb3N0ZWRCeUlkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIHNsdWc6IHNsdWdpZnkodGl0bGUpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZXF1aXJlbWVudHMsXG4gICAgICAgICAgICBiZW5lZml0cyxcbiAgICAgICAgICAgIGxvY2F0aW9uLFxuICAgICAgICAgICAgam9iVHlwZTogam9iVHlwZSBhcyBcIkZVTExfVElNRVwiIHwgXCJQQVJUX1RJTUVcIiB8IFwiUkVNT1RFXCIgfCBcIklOVEVSTlNISVBcIiB8IFwiQ09OVFJBQ1RcIixcbiAgICAgICAgICAgIHNhbGFyeU1pbixcbiAgICAgICAgICAgIHNhbGFyeU1heCxcbiAgICAgICAgICAgIHNraWxscyxcbiAgICAgICAgICAgIHN0YXR1czogXCJQRU5ESU5HXCIsXG4gICAgICAgICAgICBpbmR1c3RyeUlkLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBnZW5lcmF0ZUpvYkVtYmVkZGluZyB9ID0gYXdhaXQgaW1wb3J0KFwiQC9saWIvYWlcIik7XG4gICAgICAgIGF3YWl0IGdlbmVyYXRlSm9iRW1iZWRkaW5nKGpvYi5pZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGdlbmVyYXRlIGVtYmVkZGluZyBmb3IgbmV3IGpvYjpcIiwgZSk7XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZW1wbG95ZXIvam9ic1wiKTtcbiAgICByZWRpcmVjdChcIi9lbXBsb3llci9qb2JzXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGlkOiBqb2IuaWQgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUpvYlN0YXR1cyhqb2JJZDogc3RyaW5nLCBzdGF0dXM6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyIHx8IHNlc3Npb24udXNlci5yb2xlICE9PSBcIkFETUlOXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiS2jDtG5nIGPDsyBxdXnhu4FuXCIgfTtcbiAgICB9XG4gICAgY29uc3Qgam9iID0gYXdhaXQgcHJpc21hLmpvYi51cGRhdGUoe1xuICAgICAgICB3aGVyZTogeyBpZDogam9iSWQgfSxcbiAgICAgICAgZGF0YTogeyBzdGF0dXM6IHN0YXR1cyBhcyBcIkFDVElWRVwiIHwgXCJSRUpFQ1RFRFwiIHwgXCJDTE9TRURcIiB9LFxuICAgICAgICBzZWxlY3Q6IHsgdGl0bGU6IHRydWUsIHBvc3RlZEJ5SWQ6IHRydWUgfSxcbiAgICB9KTtcblxuICAgIGlmIChzdGF0dXMgPT09IFwiQUNUSVZFXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZ2VuZXJhdGVKb2JFbWJlZGRpbmcgfSA9IGF3YWl0IGltcG9ydChcIkAvbGliL2FpXCIpO1xuICAgICAgICAgICAgYXdhaXQgZ2VuZXJhdGVKb2JFbWJlZGRpbmcoam9iSWQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGdlbmVyYXRlIGVtYmVkZGluZyBmb3Igam9iOlwiLCBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdGlmeSBlbXBsb3llciBhYm91dCBqb2Igc3RhdHVzXG4gICAgaWYgKGpvYi5wb3N0ZWRCeUlkKSB7XG4gICAgICAgIGNvbnN0IHN0YXR1c01zZyA9IHN0YXR1cyA9PT0gXCJBQ1RJVkVcIiA/IFwixJHDoyDEkcaw4bujYyBkdXnhu4d0XCIgOiBzdGF0dXMgPT09IFwiUkVKRUNURURcIiA/IFwixJHDoyBi4buLIHThu6sgY2jhu5FpXCIgOiBcIsSRw6MgxJHGsOG7o2MgxJHDs25nXCI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBwcmlzbWEubm90aWZpY2F0aW9uLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGpvYi5wb3N0ZWRCeUlkLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBzdGF0dXMgPT09IFwiQUNUSVZFXCIgPyBcIkpPQl9BUFBST1ZFRFwiIDogc3RhdHVzID09PSBcIlJFSkVDVEVEXCIgPyBcIkpPQl9SRUpFQ1RFRFwiIDogXCJBUFBMSUNBVElPTl9TVEFUVVNcIixcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGBUaW4gdHV54buDbiBk4bulbmcgJHtzdGF0dXNNc2d9YCxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYFRpbiBcIiR7am9iLnRpdGxlfVwiICR7c3RhdHVzTXNnfSBi4bufaSBxdeG6o24gdHLhu4sgdmnDqm4uYCxcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZW1wbG95ZXIvam9ic1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoXykgeyAvKiBpZ25vcmUgKi8gfVxuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2FkbWluL2pvYnNcIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW1wbG95ZXJKb2JzKCkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZWRpcmVjdChcIi9sb2dpblwiKTtcblxuICAgIGNvbnN0IGVtcGxveWVyID0gYXdhaXQgcHJpc21hLmVtcGxveWVyUHJvZmlsZS5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQgfSxcbiAgICB9KTtcbiAgICBpZiAoIWVtcGxveWVyPy5jb21wYW55SWQpIHJldHVybiBbXTtcblxuICAgIHJldHVybiBwcmlzbWEuam9iLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgY29tcGFueUlkOiBlbXBsb3llci5jb21wYW55SWQgfSxcbiAgICAgICAgaW5jbHVkZTogeyBfY291bnQ6IHsgc2VsZWN0OiB7IGFwcGxpY2F0aW9uczogdHJ1ZSB9IH0gfSxcbiAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVKb2Ioam9iSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyIHx8IHNlc3Npb24udXNlci5yb2xlICE9PSBcIkVNUExPWUVSXCIpIHJldHVybiB7IGVycm9yOiBcIktow7RuZyBjw7MgcXV54buBblwiIH07XG4gICAgYXdhaXQgcHJpc21hLmpvYi5kZWxldGUoeyB3aGVyZTogeyBpZDogam9iSWQgfSB9KTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9lbXBsb3llci9qb2JzXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbEpvYnNGb3JBZG1pbigpIHtcbiAgICByZXR1cm4gcHJpc21hLmpvYi5maW5kTWFueSh7XG4gICAgICAgIGluY2x1ZGU6IHsgY29tcGFueTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSB9IH0sIF9jb3VudDogeyBzZWxlY3Q6IHsgYXBwbGljYXRpb25zOiB0cnVlIH0gfSB9LFxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEluZHVzdHJpZXMoKSB7XG4gICAgcmV0dXJuIHByaXNtYS5pbmR1c3RyeS5maW5kTWFueSh7XG4gICAgICAgIG9yZGVyQnk6IHsgbmFtZTogXCJhc2NcIiB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsSW5kdXN0cmllcygpIHtcbiAgICByZXR1cm4gcHJpc21hLmluZHVzdHJ5LmZpbmRNYW55KHtcbiAgICAgICAgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JMb2NhdGlvbnMoKSB7XG4gICAgY29uc3Qgam9icyA9IGF3YWl0IHByaXNtYS5qb2IuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyBzdGF0dXM6IFwiQUNUSVZFXCIgfSxcbiAgICAgICAgc2VsZWN0OiB7IGxvY2F0aW9uOiB0cnVlIH0sXG4gICAgICAgIGRpc3RpbmN0OiBbXCJsb2NhdGlvblwiXSxcbiAgICB9KTtcbiAgICByZXR1cm4gam9icy5tYXAoaiA9PiBqLmxvY2F0aW9uKS5maWx0ZXIoQm9vbGVhbikuc29ydCgpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Sm9iRmlsdGVycygpIHtcbiAgICBjb25zdCBbaW5kdXN0cmllcywgbG9jYXRpb25zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgcHJpc21hLmluZHVzdHJ5LmZpbmRNYW55KHsgb3JkZXJCeTogeyBuYW1lOiBcImFzY1wiIH0gfSksXG4gICAgICAgIHByaXNtYS5qb2IuZmluZE1hbnkoe1xuICAgICAgICAgICAgd2hlcmU6IHsgc3RhdHVzOiBcIkFDVElWRVwiIH0sXG4gICAgICAgICAgICBzZWxlY3Q6IHsgbG9jYXRpb246IHRydWUgfSxcbiAgICAgICAgICAgIGRpc3RpbmN0OiBbXCJsb2NhdGlvblwiXSxcbiAgICAgICAgfSkudGhlbihqb2JzID0+IGpvYnMubWFwKGogPT4gai5sb2NhdGlvbikuZmlsdGVyKEJvb2xlYW4pLnNvcnQoKSlcbiAgICBdKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluZHVzdHJpZXMsXG4gICAgICAgIGxvY2F0aW9ucyxcbiAgICAgICAgam9iVHlwZXM6IFtcIkZVTExfVElNRVwiLCBcIlBBUlRfVElNRVwiLCBcIlJFTU9URVwiLCBcIklOVEVSTlNISVBcIiwgXCJDT05UUkFDVFwiXSxcbiAgICAgICAgZXhwZXJpZW5jZUxldmVsczogW1wiRW50cnlcIiwgXCJKdW5pb3JcIiwgXCJNaWQtTGV2ZWxcIiwgXCJTZW5pb3JcIiwgXCJNYW5hZ2VyXCJdLFxuICAgICAgICBzYWxhcnlSYW5nZXM6IFtcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMC01MDAwMDAwXCIsIGxhYmVsOiBcIkTGsOG7m2kgNSB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiNTAwMDAwMC0xMDAwMDAwMFwiLCBsYWJlbDogXCI1IC0gMTAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjEwMDAwMDAwLTIwMDAwMDAwXCIsIGxhYmVsOiBcIjEwIC0gMjAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjIwMDAwMDAwLTMwMDAwMDAwXCIsIGxhYmVsOiBcIjIwIC0gMzAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjMwMDAwMDAwLTUwMDAwMDAwXCIsIGxhYmVsOiBcIjMwIC0gNTAgdHJp4buHdVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcIjUwMDAwMDAwLTk5OTk5OTk5OVwiLCBsYWJlbDogXCJUcsOqbiA1MCB0cmnhu4d1XCIgfSxcbiAgICAgICAgXVxuICAgIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlSm9iKGpvYklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJWdWkgbMOybmcgxJHEg25nIG5o4bqtcCDEkeG7gyBsxrB1IHZp4buHYyBsw6BtXCIgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgICAgICBqb2JJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvam9ic1wiKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IFwiVmnhu4djIGzDoG0gbsOgeSDEkcOjIMSRxrDhu6NjIGzGsHUgdHLGsOG7m2MgxJHDs1wiIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdW5zYXZlSm9iKGpvYklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJWdWkgbMOybmcgxJHEg25nIG5o4bqtcFwiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgcHJpc21hLnNhdmVkSm9iLmRlbGV0ZU1hbnkoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQsXG4gICAgICAgICAgICBqb2JJZFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvam9ic1wiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTYXZlZEpvYnMoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoIXNlc3Npb24/LnVzZXIpIHJldHVybiBbXTtcblxuICAgIHJldHVybiBwcmlzbWEuc2F2ZWRKb2IuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZTogeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9LFxuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICBqb2I6IHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbnk6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGxvZ286IHRydWUsIHNsdWc6IHRydWUgfSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2F2ZWRKb2JJZHMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBzYXZlZCA9IGF3YWl0IHByaXNtYS5zYXZlZEpvYi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH0sXG4gICAgICAgIHNlbGVjdDogeyBqb2JJZDogdHJ1ZSB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2F2ZWQubWFwKHMgPT4gcy5qb2JJZCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0pvYlNhdmVkKGpvYklkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3Qgc2F2ZWQgPSBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VySWRfam9iSWQ6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgICAgICBqb2JJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuICEhc2F2ZWQ7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlSQStUc0Isd0xBQUEifQ==
}),
"[project]/app/components/SaveJobButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SaveJobButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$090625__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:090625 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$e7d0dd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:e7d0dd [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SaveJobButton({ jobId, initialSaved = false }) {
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialSaved);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleToggle = async (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setLoading(true);
        try {
            if (saved) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$e7d0dd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["unsaveJob"])(jobId);
                setSaved(false);
            } else {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$090625__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveJob"])(jobId);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "18",
            height: "18",
            fill: saved ? "currentColor" : "none",
            stroke: "currentColor",
            strokeWidth: "2",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
}),
"[project]/app/components/JobCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SaveJobButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/SaveJobButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function JobCard({ id, slug, title, company, location, salary, type, skills, logo, posted, featured = false, saved = false, savedDate, layout = "grid" }) {
    const typeColors = {
        Remote: "#22C55E",
        "Full-time": "#0369A1",
        "Part-time": "#F59E0B",
        Internship: "#A855F7"
    };
    const typeColor = typeColors[type] ?? "#0369A1";
    const isList = layout === "list";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/jobs/${slug || id}`,
        style: {
            textDecoration: "none",
            display: "block",
            height: "100%"
        },
        className: "card-clickable",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "jsx-92d2200b5e3ba0bb" + " " + `card job-card-article ${isList ? 'is-list' : 'is-grid'}`,
                children: [
                    featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-92d2200b5e3ba0bb" + " " + "featured-gradient"
                    }, void 0, false, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 60,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-92d2200b5e3ba0bb" + " " + "job-card-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                children: logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                    lineNumber: 83,
                                    columnNumber: 29
                                }, this) : company.charAt(0).toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    minWidth: 0
                                },
                                className: "jsx-92d2200b5e3ba0bb",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                        lineNumber: 90,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        children: company || "Công ty ẩn danh"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 105,
                                        columnNumber: 25
                                    }, this),
                                    isList && type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            marginTop: "0.5rem"
                                        },
                                        className: "jsx-92d2200b5e3ba0bb",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                lineNumber: 119,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "0.75rem",
                                                    color: "var(--text-muted)",
                                                    whiteSpace: "nowrap"
                                                },
                                                className: "jsx-92d2200b5e3ba0bb",
                                                children: posted
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/JobCard.tsx",
                                                lineNumber: 130,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 118,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 89,
                                columnNumber: 21
                            }, this),
                            !isList && type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 139,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-92d2200b5e3ba0bb" + " " + "job-card-middle",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: item.icon,
                                                    className: "jsx-92d2200b5e3ba0bb"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/JobCard.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/JobCard.tsx",
                                                lineNumber: 173,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                lineNumber: 176,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, item.text, true, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 169,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 158,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                children: skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        lineNumber: 193,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 182,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 157,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-92d2200b5e3ba0bb" + " " + "job-card-right",
                        children: [
                            !isList ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "0.75rem",
                                    color: "var(--text-muted)",
                                    whiteSpace: "nowrap"
                                },
                                className: "jsx-92d2200b5e3ba0bb",
                                children: posted
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 213,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-92d2200b5e3ba0bb"
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 217,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: isList ? "row" : "column",
                                    alignItems: isList ? "center" : "flex-end",
                                    gap: isList ? "1rem" : "0.5rem"
                                },
                                className: "jsx-92d2200b5e3ba0bb",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        className: "jsx-92d2200b5e3ba0bb",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SaveJobButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                jobId: id,
                                                initialSaved: saved
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/JobCard.tsx",
                                                lineNumber: 241,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/JobCard.tsx",
                                            lineNumber: 227,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 226,
                                        columnNumber: 25
                                    }, this),
                                    savedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        lineNumber: 246,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 220,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 211,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/JobCard.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "92d2200b5e3ba0bb",
                children: ".job-card-article.jsx-92d2200b5e3ba0bb{height:100%;padding:1.25rem;display:flex;position:relative;overflow:hidden}.is-grid.jsx-92d2200b5e3ba0bb{flex-direction:column;align-items:stretch;gap:0}.is-grid.jsx-92d2200b5e3ba0bb .job-card-left.jsx-92d2200b5e3ba0bb{flex:none;align-items:flex-start;gap:1rem;min-width:0;margin-bottom:.75rem;display:flex}.is-grid.jsx-92d2200b5e3ba0bb .job-card-middle.jsx-92d2200b5e3ba0bb{flex-direction:column;flex:1;gap:.75rem;min-width:0;margin-bottom:1.25rem;display:flex}.is-grid.jsx-92d2200b5e3ba0bb .job-card-right.jsx-92d2200b5e3ba0bb{border-left:none;flex-direction:row;justify-content:space-between;align-items:flex-end;gap:0;width:100%;min-width:100%;margin-top:auto;padding-left:0;display:flex}.is-list.jsx-92d2200b5e3ba0bb{flex-direction:row;align-items:center;gap:1.5rem}.is-list.jsx-92d2200b5e3ba0bb .job-card-left.jsx-92d2200b5e3ba0bb{flex:2;align-items:flex-start;gap:1rem;min-width:0;max-width:40%;margin-bottom:0;display:flex}.is-list.jsx-92d2200b5e3ba0bb .job-card-middle.jsx-92d2200b5e3ba0bb{flex-direction:column;flex:1.5;gap:.75rem;min-width:0;max-width:40%;margin-bottom:0;display:flex}.is-list.jsx-92d2200b5e3ba0bb .job-card-right.jsx-92d2200b5e3ba0bb{border-left:1px solid var(--border);flex-direction:row;justify-content:flex-end;align-items:center;gap:1rem;width:auto;min-width:160px;margin-top:0;padding-left:1.5rem;display:flex}.featured-gradient.jsx-92d2200b5e3ba0bb{background:linear-gradient(to bottom right,var(--primary),var(--cta));position:absolute;top:0;left:0}.is-grid.jsx-92d2200b5e3ba0bb .featured-gradient.jsx-92d2200b5e3ba0bb{width:auto;height:3px;bottom:auto;right:0}.is-list.jsx-92d2200b5e3ba0bb .featured-gradient.jsx-92d2200b5e3ba0bb{width:4px;height:100%;bottom:0;right:auto}@media (width<=860px){.is-list.jsx-92d2200b5e3ba0bb{flex-direction:column;align-items:stretch;gap:1rem}.is-list.jsx-92d2200b5e3ba0bb .job-card-left.jsx-92d2200b5e3ba0bb,.is-list.jsx-92d2200b5e3ba0bb .job-card-middle.jsx-92d2200b5e3ba0bb{flex:none;max-width:100%;margin-bottom:0}.is-list.jsx-92d2200b5e3ba0bb .job-card-right.jsx-92d2200b5e3ba0bb{border-left:none;justify-content:space-between;width:100%;min-width:0;margin-top:.5rem;padding-left:0}.is-list.jsx-92d2200b5e3ba0bb .featured-gradient.jsx-92d2200b5e3ba0bb{width:auto;height:3px;bottom:auto;right:0}}.hover-primary-bg.jsx-92d2200b5e3ba0bb:hover{background:var(--primary)!important;color:#fff!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/JobCard.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/components/LandingContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/SearchBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$JobCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/JobCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ComputerDesktopIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerDesktopIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ComputerDesktopIcon.js [app-ssr] (ecmascript) <export default as ComputerDesktopIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingLibraryIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingLibraryIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BuildingLibraryIcon.js [app-ssr] (ecmascript) <export default as BuildingLibraryIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ShoppingBagIcon.js [app-ssr] (ecmascript) <export default as ShoppingBagIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SpeakerWaveIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SpeakerWaveIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/SpeakerWaveIcon.js [app-ssr] (ecmascript) <export default as SpeakerWaveIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChartBarIcon.js [app-ssr] (ecmascript) <export default as ChartBarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HomeModernIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeModernIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/HomeModernIcon.js [app-ssr] (ecmascript) <export default as HomeModernIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$WrenchScrewdriverIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WrenchScrewdriverIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/WrenchScrewdriverIcon.js [app-ssr] (ecmascript) <export default as WrenchScrewdriverIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AcademicCapIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AcademicCapIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/AcademicCapIcon.js [app-ssr] (ecmascript) <export default as AcademicCapIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js [app-ssr] (ecmascript) <export default as ArrowRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js [app-ssr] (ecmascript) <export default as CheckCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserGroupIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserGroupIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js [app-ssr] (ecmascript) <export default as UserGroupIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BriefcaseIcon.js [app-ssr] (ecmascript) <export default as BriefcaseIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BuildingOfficeIcon.js [app-ssr] (ecmascript) <export default as BuildingOfficeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/SparklesIcon.js [app-ssr] (ecmascript) <export default as SparklesIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/HeartIcon.js [app-ssr] (ecmascript) <export default as HeartIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/DocumentTextIcon.js [app-ssr] (ecmascript) <export default as DocumentTextIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClipboardDocumentCheckIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardDocumentCheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ClipboardDocumentCheckIcon.js [app-ssr] (ecmascript) <export default as ClipboardDocumentCheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js [app-ssr] (ecmascript) <export default as ChatBubbleLeftRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ShieldCheckIcon.js [app-ssr] (ecmascript) <export default as ShieldCheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$RocketLaunchIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RocketLaunchIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/RocketLaunchIcon.js [app-ssr] (ecmascript) <export default as RocketLaunchIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaintBrushIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PaintBrushIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PaintBrushIcon.js [app-ssr] (ecmascript) <export default as PaintBrushIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ScaleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScaleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ScaleIcon.js [app-ssr] (ecmascript) <export default as ScaleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/TruckIcon.js [app-ssr] (ecmascript) <export default as TruckIcon>");
"use client";
;
;
;
;
;
;
;
;
;
const INDUSTRY_ICONS = {
    "cong-nghe-thong-tin": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ComputerDesktopIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerDesktopIcon$3e$__["ComputerDesktopIcon"],
    "tai-chinh-ngan-hang": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingLibraryIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingLibraryIcon$3e$__["BuildingLibraryIcon"],
    "thuong-mai-dien-tu": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__["ShoppingBagIcon"],
    "marketing-truyen-thong": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SpeakerWaveIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SpeakerWaveIcon$3e$__["SpeakerWaveIcon"],
    "ke-toan-tai-chinh": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__["ChartBarIcon"],
    "du-lich-khach-san": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HomeModernIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeModernIcon$3e$__["HomeModernIcon"],
    "san-xuat-che-bien": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$WrenchScrewdriverIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WrenchScrewdriverIcon$3e$__["WrenchScrewdriverIcon"],
    "gd-dao-tao": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AcademicCapIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AcademicCapIcon$3e$__["AcademicCapIcon"],
    "y-te-cham-soc-suc-khoe": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__["HeartIcon"],
    "xay-dung": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__["BuildingOfficeIcon"],
    "nhan-su": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserGroupIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserGroupIcon$3e$__["UserGroupIcon"],
    "ban-le-dich-vu": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__["ShoppingBagIcon"],
    "kien-truc-thiet-ke": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaintBrushIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PaintBrushIcon$3e$__["PaintBrushIcon"],
    "phap-luat": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ScaleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScaleIcon$3e$__["ScaleIcon"],
    "van-tai-logistics": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__["TruckIcon"]
};
const HERO_WORDS = [
    "phù hợp",
    "mơ ước",
    "lý tưởng",
    "hoàn hảo"
];
const STEPS = [
    {
        step: "01",
        title: "Tạo hồ sơ & tải CV",
        desc: "Đăng ký tài khoản, điền thông tin kỹ năng và tải CV của bạn lên hệ thống.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClipboardDocumentCheckIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardDocumentCheckIcon$3e$__["ClipboardDocumentCheckIcon"]
    },
    {
        step: "02",
        title: "Tìm kiếm việc làm",
        desc: "Duyệt qua hàng nghìn công việc đa ngành nghề từ các công ty hàng đầu Việt Nam.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__["BriefcaseIcon"]
    },
    {
        step: "03",
        title: "Ứng tuyển dễ dàng",
        desc: "Gửi hồ sơ ứng tuyển nhanh chóng và theo dõi trạng thái real-time.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"]
    }
];
const FEATURES = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"],
        title: "AI Matching thông minh",
        desc: "Hệ thống AI phân tích CV và gợi ý việc làm phù hợp nhất với kỹ năng của bạn."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__["ShieldCheckIcon"],
        title: "Xác minh công ty",
        desc: "Tất cả công ty đều được xác minh, đảm bảo thông tin tuyển dụng đáng tin cậy."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$RocketLaunchIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RocketLaunchIcon$3e$__["RocketLaunchIcon"],
        title: "Ứng tuyển 1 click",
        desc: "Ứng tuyển nhanh chóng chỉ với 1 click, CV tự động gửi đến nhà tuyển dụng."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"],
        title: "Thông báo real-time",
        desc: "Nhận thông báo ngay khi có cập nhật về đơn ứng tuyển của bạn."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$DocumentTextIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DocumentTextIcon$3e$__["DocumentTextIcon"],
        title: "Tạo CV chuyên nghiệp",
        desc: "Công cụ tạo CV trực tuyến với nhiều mẫu đẹp, chuyên nghiệp."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__["ChartBarIcon"],
        title: "Phân tích thị trường",
        desc: "Xem xu hướng lương, ngành nghề hot và cơ hội việc làm mới nhất."
    }
];
const TESTIMONIALS = [
    {
        name: "Nguyễn Thanh Hải",
        role: "Frontend Developer tại FPT Software",
        text: "Nhờ JobNow mình tìm được công việc phù hợp chỉ trong 2 tuần. Hệ thống gợi ý rất chính xác!"
    },
    {
        name: "Trần Minh Anh",
        role: "Marketing Manager tại Shopee",
        text: "Giao diện dễ dùng, thông tin tuyển dụng cập nhật liên tục. Rất hài lòng với JobNow."
    },
    {
        name: "Lê Hoàng Nam",
        role: "Data Analyst tại VNG",
        text: "AI matching giúp mình tiết kiệm rất nhiều thời gian tìm kiếm. Highly recommend!"
    }
];
function LandingContent({ featuredJobs, industries, companies, stats, savedJobIds = [] }) {
    const [wordIndex, setWordIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setWordIndex((prev)=>(prev + 1) % HERO_WORDS.length);
        }, 2500);
        return ()=>clearInterval(interval);
    }, []);
    const formatNumber = (n)=>{
        if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k+`;
        return `${n}+`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column"
        },
        className: "jsx-b4176df3befbde9c",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/LandingContent.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    flex: 1
                },
                className: "jsx-b4176df3befbde9c",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            position: "relative",
                            padding: "clamp(4rem, 10vw, 7rem) 1rem clamp(5.5rem, 8vw, 7rem)",
                            background: "linear-gradient(145deg, #0C4A6E 0%, #0369A1 35%, #0284C7 65%, #047857 100%)"
                        },
                        className: "jsx-b4176df3befbde9c",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    opacity: 0.04,
                                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                                    backgroundSize: "32px 32px"
                                },
                                className: "jsx-b4176df3befbde9c"
                            }, void 0, false, {
                                fileName: "[project]/app/components/LandingContent.tsx",
                                lineNumber: 115,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    zIndex: 2,
                                    textAlign: "center",
                                    maxWidth: "900px",
                                    margin: "0 auto"
                                },
                                className: "jsx-b4176df3befbde9c" + " " + "container-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            background: "rgba(255,255,255,0.12)",
                                            border: "1px solid rgba(255,255,255,0.2)",
                                            borderRadius: "100px",
                                            padding: "0.5rem 1.25rem",
                                            marginBottom: "2rem",
                                            fontSize: "0.875rem",
                                            fontWeight: 600,
                                            color: "#fff"
                                        },
                                        className: "jsx-b4176df3befbde9c",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                fill: "#FBBF24",
                                                viewBox: "0 0 24 24",
                                                className: "jsx-b4176df3befbde9c",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
                                                    className: "jsx-b4176df3befbde9c"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/LandingContent.tsx",
                                                lineNumber: 129,
                                                columnNumber: 29
                                            }, this),
                                            "Nền tảng tuyển dụng đa ngành nghề #1 Việt Nam"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/LandingContent.tsx",
                                        lineNumber: 123,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                                            fontWeight: 800,
                                            color: "#fff",
                                            marginBottom: "1.25rem",
                                            lineHeight: 1.15
                                        },
                                        className: "jsx-b4176df3befbde9c",
                                        children: [
                                            "Tìm việc làm",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    display: "inline-block",
                                                    color: "#FDE68A",
                                                    transition: "opacity 300ms"
                                                },
                                                className: "jsx-b4176df3befbde9c",
                                                children: HERO_WORDS[wordIndex]
                                            }, wordIndex, false, {
                                                fileName: "[project]/app/components/LandingContent.tsx",
                                                lineNumber: 140,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "jsx-b4176df3befbde9c"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/LandingContent.tsx",
                                                lineNumber: 146,
                                                columnNumber: 29
                                            }, this),
                                            "với ngành nghề bạn mong muốn"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/LandingContent.tsx",
                                        lineNumber: 135,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "clamp(1rem, 2vw, 1.125rem)",
                                            color: "rgba(255,255,255,0.85)",
                                            maxWidth: "580px",
                                            margin: "0 auto 2.5rem",
                                            lineHeight: 1.7
                                        },
                                        className: "jsx-b4176df3befbde9c",
                                        children: "Kết nối ứng viên với hàng ngàn công ty đa ngành nghề — từ CNTT, Tài chính, Marketing, Du lịch đến Giáo dục và nhiều lĩnh vực khác."
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/LandingContent.tsx",
                                        lineNumber: 150,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            maxWidth: "780px",
                                            margin: "0 auto 2rem"
                                        },
                                        className: "jsx-b4176df3befbde9c",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            size: "lg"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/LandingContent.tsx",
                                            lineNumber: 159,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/LandingContent.tsx",
                                        lineNumber: 158,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "0.5rem",
                                            flexWrap: "wrap",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        },
                                        className: "jsx-b4176df3befbde9c",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "0.8125rem",
                                                    color: "rgba(255,255,255,0.7)"
                                                },
                                                className: "jsx-b4176df3befbde9c",
                                                children: "Phổ biến:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/LandingContent.tsx",
                                                lineNumber: 164,
                                                columnNumber: 29
                                            }, this),
                                            [
                                                "Frontend",
                                                "Kế toán",
                                                "Marketing",
                                                "Kinh doanh",
                                                "Du lịch"
                                            ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/jobs?q=${encodeURIComponent(t)}`,
                                                    style: {
                                                        textDecoration: "none",
                                                        fontSize: "0.8125rem",
                                                        padding: "0.3rem 0.875rem",
                                                        background: "rgba(255,255,255,0.1)",
                                                        color: "#fff",
                                                        borderRadius: "100px",
                                                        border: "1px solid rgba(255,255,255,0.18)",
                                                        transition: "background 200ms"
                                                    },
                                                    children: t
                                                }, t, false, {
                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 33
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/LandingContent.tsx",
                                        lineNumber: 163,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/LandingContent.tsx",
                                lineNumber: 121,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/LandingContent.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            background: "var(--bg)",
                            position: "relative",
                            zIndex: 3,
                            padding: "0"
                        },
                        className: "jsx-b4176df3befbde9c",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: "960px",
                                margin: "0 auto",
                                marginTop: "-2.5rem"
                            },
                            className: "jsx-b4176df3befbde9c" + " " + "container-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(4, 1fr)",
                                    background: "var(--bg-card)",
                                    borderRadius: "16px",
                                    border: "1.5px solid var(--border)",
                                    boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
                                    overflow: "hidden",
                                    position: "relative",
                                    zIndex: 1
                                },
                                className: "jsx-b4176df3befbde9c" + " " + "stats-grid",
                                children: [
                                    {
                                        n: formatNumber(stats.jobs),
                                        l: "Việc làm",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__["BriefcaseIcon"]
                                    },
                                    {
                                        n: formatNumber(stats.companies),
                                        l: "Công ty",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__["BuildingOfficeIcon"]
                                    },
                                    {
                                        n: formatNumber(stats.candidates),
                                        l: "Ứng viên",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserGroupIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserGroupIcon$3e$__["UserGroupIcon"]
                                    },
                                    {
                                        n: `${stats.industries}+`,
                                        l: "Ngành nghề",
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"]
                                    }
                                ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "1.5rem 1rem",
                                            textAlign: "center",
                                            borderRight: i < 3 ? "1px solid var(--border)" : "none",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            gap: "0.375rem"
                                        },
                                        className: "jsx-b4176df3befbde9c",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(s.icon, {
                                                style: {
                                                    width: "22px",
                                                    height: "22px",
                                                    color: "var(--primary)",
                                                    marginBottom: "0.25rem"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/LandingContent.tsx",
                                                lineNumber: 198,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "1.5rem",
                                                    fontWeight: 800,
                                                    color: "var(--primary)",
                                                    lineHeight: 1
                                                },
                                                className: "jsx-b4176df3befbde9c",
                                                children: s.n
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/LandingContent.tsx",
                                                lineNumber: 199,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "0.8125rem",
                                                    color: "var(--text-muted)",
                                                    fontWeight: 500
                                                },
                                                className: "jsx-b4176df3befbde9c",
                                                children: s.l
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/LandingContent.tsx",
                                                lineNumber: 200,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, s.l, true, {
                                        fileName: "[project]/app/components/LandingContent.tsx",
                                        lineNumber: 193,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/LandingContent.tsx",
                                lineNumber: 181,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/LandingContent.tsx",
                            lineNumber: 180,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/LandingContent.tsx",
                        lineNumber: 179,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            background: "var(--bg)",
                            padding: "4rem 1rem 3.5rem"
                        },
                        className: "jsx-b4176df3befbde9c",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: "center"
                            },
                            className: "jsx-b4176df3befbde9c" + " " + "container-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.375rem",
                                        background: "var(--tag-bg)",
                                        borderRadius: "100px",
                                        padding: "0.375rem 1rem",
                                        marginBottom: "0.75rem",
                                        fontSize: "0.8125rem",
                                        fontWeight: 700,
                                        color: "var(--primary)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"], {
                                            style: {
                                                width: "14px",
                                                height: "14px"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/LandingContent.tsx",
                                            lineNumber: 216,
                                            columnNumber: 29
                                        }, this),
                                        "Ngành nghề"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 210,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                                        fontWeight: 800,
                                        color: "var(--text)",
                                        marginBottom: "0.75rem"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: "Khám phá việc làm theo ngành"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 219,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "1rem",
                                        color: "var(--text-muted)",
                                        maxWidth: "500px",
                                        margin: "0 auto 2.5rem",
                                        lineHeight: 1.7
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: "Tìm cơ hội nghề nghiệp phù hợp với sở thích và kinh nghiệm"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 222,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))",
                                        gap: "0.875rem",
                                        maxWidth: "960px",
                                        margin: "0 auto"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: industries.slice(0, 8).map((industry)=>{
                                        const Icon = INDUSTRY_ICONS[industry.slug] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__["BriefcaseIcon"];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/jobs?industry=${industry.slug}`,
                                            style: {
                                                textDecoration: "none"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: "1.25rem 0.875rem",
                                                    textAlign: "center",
                                                    background: "var(--bg-card)",
                                                    border: "1.5px solid var(--border)",
                                                    borderRadius: "14px",
                                                    transition: "all 200ms ease",
                                                    cursor: "pointer",
                                                    height: "100%"
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(-4px)";
                                                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(3,105,161,0.12)";
                                                    e.currentTarget.style.borderColor = "var(--primary-light)";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.boxShadow = "none";
                                                    e.currentTarget.style.borderColor = "var(--border)";
                                                },
                                                className: "jsx-b4176df3befbde9c",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "48px",
                                                            height: "48px",
                                                            borderRadius: "12px",
                                                            background: "var(--tag-bg)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            margin: "0 auto 0.625rem"
                                                        },
                                                        className: "jsx-b4176df3befbde9c",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            style: {
                                                                width: "22px",
                                                                height: "22px",
                                                                color: "var(--primary)"
                                                            },
                                                            className: "jsx-b4176df3befbde9c"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/LandingContent.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/LandingContent.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: "0.8125rem",
                                                            fontWeight: 700,
                                                            color: "var(--text)",
                                                            marginBottom: "0.25rem",
                                                            lineHeight: 1.3
                                                        },
                                                        className: "jsx-b4176df3befbde9c",
                                                        children: industry.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/LandingContent.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontSize: "0.75rem",
                                                            color: "var(--text-muted)",
                                                            margin: 0
                                                        },
                                                        className: "jsx-b4176df3befbde9c",
                                                        children: [
                                                            industry.count,
                                                            " việc làm"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/LandingContent.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/LandingContent.tsx",
                                                lineNumber: 234,
                                                columnNumber: 41
                                            }, this)
                                        }, industry.slug, false, {
                                            fileName: "[project]/app/components/LandingContent.tsx",
                                            lineNumber: 233,
                                            columnNumber: 37
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 226,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: "2.5rem"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/jobs",
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            padding: "0.75rem 1.5rem",
                                            background: "var(--primary)",
                                            color: "#fff",
                                            borderRadius: "8px",
                                            fontWeight: 600,
                                            fontSize: "0.875rem",
                                            textDecoration: "none",
                                            transition: "background 200ms"
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.background = "var(--primary-dark)",
                                        onMouseLeave: (e)=>e.currentTarget.style.background = "var(--primary)",
                                        children: [
                                            "Xem tất cả ngành nghề ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                                                style: {
                                                    width: "16px",
                                                    height: "16px"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/LandingContent.tsx",
                                                lineNumber: 271,
                                                columnNumber: 55
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/LandingContent.tsx",
                                        lineNumber: 262,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 261,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/LandingContent.tsx",
                            lineNumber: 209,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/LandingContent.tsx",
                        lineNumber: 208,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            background: "var(--bg-card)",
                            padding: "3.5rem 1rem",
                            borderTop: "1.5px solid var(--border)",
                            borderBottom: "1.5px solid var(--border)"
                        },
                        className: "jsx-b4176df3befbde9c",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b4176df3befbde9c" + " " + "container-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "flex-end",
                                        marginBottom: "2rem",
                                        gap: "1rem",
                                        flexWrap: "wrap"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-b4176df3befbde9c",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        gap: "0.375rem",
                                                        background: "var(--tag-bg)",
                                                        borderRadius: "100px",
                                                        padding: "0.375rem 1rem",
                                                        marginBottom: "0.75rem",
                                                        fontSize: "0.8125rem",
                                                        fontWeight: 700,
                                                        color: "var(--primary)",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.05em"
                                                    },
                                                    className: "jsx-b4176df3befbde9c",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__["BriefcaseIcon"], {
                                                            style: {
                                                                width: "14px",
                                                                height: "14px"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/LandingContent.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 37
                                                        }, this),
                                                        "Mới nhất"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    style: {
                                                        fontSize: "clamp(1.5rem, 4vw, 2rem)",
                                                        fontWeight: 800,
                                                        color: "var(--text)",
                                                        margin: 0
                                                    },
                                                    className: "jsx-b4176df3befbde9c",
                                                    children: "Việc làm hàng đầu"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/LandingContent.tsx",
                                            lineNumber: 284,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/jobs",
                                            className: "btn-primary",
                                            style: {
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.375rem",
                                                fontSize: "0.875rem",
                                                padding: "0.625rem 1.25rem"
                                            },
                                            children: [
                                                "Xem tất cả ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                                                    style: {
                                                        width: "16px",
                                                        height: "16px"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 44
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/LandingContent.tsx",
                                            lineNumber: 298,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 283,
                                    columnNumber: 25
                                }, this),
                                featuredJobs.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                                        gap: "1rem"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: featuredJobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$JobCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            ...job,
                                            saved: savedJobIds.includes(job.id)
                                        }, job.id, false, {
                                            fileName: "[project]/app/components/LandingContent.tsx",
                                            lineNumber: 306,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 304,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "center",
                                        padding: "3rem",
                                        color: "var(--text-muted)"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BriefcaseIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseIcon$3e$__["BriefcaseIcon"], {
                                            style: {
                                                width: "48px",
                                                height: "48px",
                                                margin: "0 auto 1rem",
                                                opacity: 0.4
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/LandingContent.tsx",
                                            lineNumber: 311,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-b4176df3befbde9c",
                                            children: "Chưa có việc làm nào. Hãy quay lại sau!"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/LandingContent.tsx",
                                            lineNumber: 312,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 310,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/LandingContent.tsx",
                            lineNumber: 282,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/LandingContent.tsx",
                        lineNumber: 278,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            background: "var(--bg)",
                            padding: "4rem 1rem"
                        },
                        className: "jsx-b4176df3befbde9c",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: "center"
                            },
                            className: "jsx-b4176df3befbde9c" + " " + "container-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.375rem",
                                        background: "var(--tag-bg)",
                                        borderRadius: "100px",
                                        padding: "0.375rem 1rem",
                                        marginBottom: "0.75rem",
                                        fontSize: "0.8125rem",
                                        fontWeight: 700,
                                        color: "var(--primary)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: "Quy trình"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 321,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                                        fontWeight: 800,
                                        color: "var(--text)",
                                        marginBottom: "0.75rem"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: "Cách JobNow hoạt động"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 329,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "1rem",
                                        color: "var(--text-muted)",
                                        maxWidth: "500px",
                                        margin: "0 auto 3rem",
                                        lineHeight: 1.7
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: "Chỉ 3 bước đơn giản để tìm được việc làm mong muốn"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 332,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                                        gap: "2rem",
                                        maxWidth: "960px",
                                        margin: "0 auto"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: STEPS.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "relative",
                                                padding: "0 0.5rem"
                                            },
                                            className: "jsx-b4176df3befbde9c",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: "68px",
                                                        height: "68px",
                                                        borderRadius: "50%",
                                                        background: i === 1 ? "linear-gradient(135deg, var(--primary), var(--secondary))" : "var(--bg-card)",
                                                        border: i === 1 ? "none" : "2px solid var(--border)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        margin: "0 auto 1.25rem",
                                                        boxShadow: i === 1 ? "0 6px 20px rgba(3,105,161,0.25)" : "var(--shadow-sm)"
                                                    },
                                                    className: "jsx-b4176df3befbde9c",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(step.icon, {
                                                            style: {
                                                                width: "26px",
                                                                height: "26px",
                                                                color: i === 1 ? "#fff" : "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/LandingContent.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                position: "absolute",
                                                                top: "-4px",
                                                                right: "calc(50% - 38px)",
                                                                width: "22px",
                                                                height: "22px",
                                                                borderRadius: "50%",
                                                                background: i === 1 ? "var(--cta)" : "var(--tag-bg)",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                fontSize: "0.625rem",
                                                                fontWeight: 800,
                                                                color: i === 1 ? "#fff" : "var(--primary)",
                                                                border: "2px solid var(--bg)"
                                                            },
                                                            className: "jsx-b4176df3befbde9c",
                                                            children: step.step
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/LandingContent.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: "1.0625rem",
                                                        fontWeight: 700,
                                                        color: "var(--text)",
                                                        marginBottom: "0.5rem"
                                                    },
                                                    className: "jsx-b4176df3befbde9c",
                                                    children: step.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: "var(--text-muted)",
                                                        fontSize: "0.875rem",
                                                        lineHeight: 1.7,
                                                        margin: 0
                                                    },
                                                    className: "jsx-b4176df3befbde9c",
                                                    children: step.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, step.step, true, {
                                            fileName: "[project]/app/components/LandingContent.tsx",
                                            lineNumber: 341,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 336,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/LandingContent.tsx",
                            lineNumber: 320,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/LandingContent.tsx",
                        lineNumber: 319,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            background: "var(--bg-card)",
                            padding: "4rem 1rem",
                            borderTop: "1.5px solid var(--border)",
                            borderBottom: "1.5px solid var(--border)"
                        },
                        className: "jsx-b4176df3befbde9c",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: "center"
                            },
                            className: "jsx-b4176df3befbde9c" + " " + "container-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.375rem",
                                        background: "var(--tag-bg)",
                                        borderRadius: "100px",
                                        padding: "0.375rem 1rem",
                                        marginBottom: "0.75rem",
                                        fontSize: "0.8125rem",
                                        fontWeight: 700,
                                        color: "var(--primary)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$RocketLaunchIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RocketLaunchIcon$3e$__["RocketLaunchIcon"], {
                                            style: {
                                                width: "14px",
                                                height: "14px"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/LandingContent.tsx",
                                            lineNumber: 387,
                                            columnNumber: 29
                                        }, this),
                                        "Tại sao chọn JobNow"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 381,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                                        fontWeight: 800,
                                        color: "var(--text)",
                                        marginBottom: "0.75rem"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: "Tính năng nổi bật"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 390,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "1rem",
                                        color: "var(--text-muted)",
                                        maxWidth: "520px",
                                        margin: "0 auto 3rem",
                                        lineHeight: 1.7
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: "JobNow cung cấp trải nghiệm tìm việc hiện đại, nhanh chóng và hiệu quả"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 393,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                        gap: "1.25rem",
                                        maxWidth: "960px",
                                        margin: "0 auto"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: FEATURES.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: "1.5rem",
                                                background: "var(--bg)",
                                                border: "1.5px solid var(--border)",
                                                borderRadius: "14px",
                                                textAlign: "left",
                                                transition: "all 200ms"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.borderColor = "var(--primary-light)";
                                                e.currentTarget.style.boxShadow = "0 4px 16px rgba(3,105,161,0.08)";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.borderColor = "var(--border)";
                                                e.currentTarget.style.boxShadow = "none";
                                            },
                                            className: "jsx-b4176df3befbde9c",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: "44px",
                                                        height: "44px",
                                                        borderRadius: "10px",
                                                        background: "var(--tag-bg)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        marginBottom: "1rem"
                                                    },
                                                    className: "jsx-b4176df3befbde9c",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(f.icon, {
                                                        style: {
                                                            width: "22px",
                                                            height: "22px",
                                                            color: "var(--primary)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/LandingContent.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: "1rem",
                                                        fontWeight: 700,
                                                        color: "var(--text)",
                                                        marginBottom: "0.5rem"
                                                    },
                                                    className: "jsx-b4176df3befbde9c",
                                                    children: f.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "0.875rem",
                                                        color: "var(--text-muted)",
                                                        lineHeight: 1.7,
                                                        margin: 0
                                                    },
                                                    className: "jsx-b4176df3befbde9c",
                                                    children: f.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, f.title, true, {
                                            fileName: "[project]/app/components/LandingContent.tsx",
                                            lineNumber: 402,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 397,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/LandingContent.tsx",
                            lineNumber: 380,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/LandingContent.tsx",
                        lineNumber: 376,
                        columnNumber: 17
                    }, this),
                    companies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            background: "var(--bg)",
                            padding: "4rem 1rem"
                        },
                        className: "jsx-b4176df3befbde9c",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: "center"
                            },
                            className: "jsx-b4176df3befbde9c" + " " + "container-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.375rem",
                                        background: "var(--tag-bg)",
                                        borderRadius: "100px",
                                        padding: "0.375rem 1rem",
                                        marginBottom: "0.75rem",
                                        fontSize: "0.8125rem",
                                        fontWeight: 700,
                                        color: "var(--primary)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__["BuildingOfficeIcon"], {
                                            style: {
                                                width: "14px",
                                                height: "14px"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/LandingContent.tsx",
                                            lineNumber: 433,
                                            columnNumber: 33
                                        }, this),
                                        "Đối tác"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 427,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                                        fontWeight: 800,
                                        color: "var(--text)",
                                        marginBottom: "0.75rem"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: "Các công ty hàng đầu"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 436,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "1rem",
                                        color: "var(--text-muted)",
                                        maxWidth: "500px",
                                        margin: "0 auto 2.5rem",
                                        lineHeight: 1.7
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: "Hàng nghìn công ty uy tín đa ngành nghề đang tuyển dụng trên JobNow"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 439,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                                        gap: "0.875rem",
                                        maxWidth: "960px",
                                        margin: "0 auto"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: companies.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/companies/${c.slug}`,
                                            style: {
                                                textDecoration: "none"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: "1.125rem",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.75rem",
                                                    background: "var(--bg-card)",
                                                    border: "1.5px solid var(--border)",
                                                    borderRadius: "12px",
                                                    transition: "all 200ms",
                                                    cursor: "pointer"
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.borderColor = "var(--primary-light)";
                                                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(3,105,161,0.08)";
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.borderColor = "var(--border)";
                                                    e.currentTarget.style.boxShadow = "none";
                                                },
                                                className: "jsx-b4176df3befbde9c",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "40px",
                                                            height: "40px",
                                                            borderRadius: "10px",
                                                            background: "var(--tag-bg)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontWeight: 800,
                                                            fontSize: "0.75rem",
                                                            color: "var(--primary)",
                                                            flexShrink: 0,
                                                            overflow: "hidden"
                                                        },
                                                        className: "jsx-b4176df3befbde9c",
                                                        children: c.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: c.logo,
                                                            alt: c.name,
                                                            style: {
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "cover"
                                                            },
                                                            className: "jsx-b4176df3befbde9c"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/LandingContent.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 53
                                                        }, this) : c.name.substring(0, 2).toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/LandingContent.tsx",
                                                        lineNumber: 457,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: "left",
                                                            minWidth: 0
                                                        },
                                                        className: "jsx-b4176df3befbde9c",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontWeight: 600,
                                                                    fontSize: "0.8125rem",
                                                                    color: "var(--text)",
                                                                    whiteSpace: "nowrap",
                                                                    overflow: "hidden",
                                                                    textOverflow: "ellipsis"
                                                                },
                                                                className: "jsx-b4176df3befbde9c",
                                                                children: c.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/LandingContent.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: "0.75rem",
                                                                    color: "var(--text-muted)"
                                                                },
                                                                className: "jsx-b4176df3befbde9c",
                                                                children: [
                                                                    c.jobCount,
                                                                    " việc làm"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/LandingContent.tsx",
                                                                lineNumber: 471,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/LandingContent.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/LandingContent.tsx",
                                                lineNumber: 449,
                                                columnNumber: 41
                                            }, this)
                                        }, c.slug, false, {
                                            fileName: "[project]/app/components/LandingContent.tsx",
                                            lineNumber: 448,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 443,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/LandingContent.tsx",
                            lineNumber: 426,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/LandingContent.tsx",
                        lineNumber: 425,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            background: "var(--bg-card)",
                            padding: "4rem 1rem",
                            borderTop: "1.5px solid var(--border)",
                            borderBottom: "1.5px solid var(--border)"
                        },
                        className: "jsx-b4176df3befbde9c",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: "center"
                            },
                            className: "jsx-b4176df3befbde9c" + " " + "container-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.375rem",
                                        background: "var(--tag-bg)",
                                        borderRadius: "100px",
                                        padding: "0.375rem 1rem",
                                        marginBottom: "0.75rem",
                                        fontSize: "0.8125rem",
                                        fontWeight: 700,
                                        color: "var(--primary)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"], {
                                            style: {
                                                width: "14px",
                                                height: "14px"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/LandingContent.tsx",
                                            lineNumber: 493,
                                            columnNumber: 29
                                        }, this),
                                        "Đánh giá"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 487,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                                        fontWeight: 800,
                                        color: "var(--text)",
                                        marginBottom: "0.75rem"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: "Ứng viên nói gì về JobNow?"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 496,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "1rem",
                                        color: "var(--text-muted)",
                                        maxWidth: "500px",
                                        margin: "0 auto 3rem",
                                        lineHeight: 1.7
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: "Hàng nghìn ứng viên đã tìm được việc làm phù hợp"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 499,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                        gap: "1.25rem",
                                        maxWidth: "960px",
                                        margin: "0 auto"
                                    },
                                    className: "jsx-b4176df3befbde9c",
                                    children: TESTIMONIALS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: "1.5rem",
                                                background: "var(--bg)",
                                                border: "1.5px solid var(--border)",
                                                borderRadius: "14px",
                                                textAlign: "left"
                                            },
                                            className: "jsx-b4176df3befbde9c",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: "0.125rem",
                                                        marginBottom: "0.875rem"
                                                    },
                                                    className: "jsx-b4176df3befbde9c",
                                                    children: [
                                                        ...Array(5)
                                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "16",
                                                            height: "16",
                                                            fill: "#FBBF24",
                                                            viewBox: "0 0 24 24",
                                                            className: "jsx-b4176df3befbde9c",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
                                                                className: "jsx-b4176df3befbde9c"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/LandingContent.tsx",
                                                                lineNumber: 516,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, i, false, {
                                                            fileName: "[project]/app/components/LandingContent.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "0.9375rem",
                                                        color: "var(--text)",
                                                        lineHeight: 1.7,
                                                        marginBottom: "1.25rem",
                                                        fontStyle: "italic"
                                                    },
                                                    className: "jsx-b4176df3befbde9c",
                                                    children: [
                                                        "“",
                                                        t.text,
                                                        "”"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.75rem"
                                                    },
                                                    className: "jsx-b4176df3befbde9c",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: "40px",
                                                                height: "40px",
                                                                borderRadius: "50%",
                                                                background: "var(--tag-bg)",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                fontWeight: 700,
                                                                fontSize: "0.875rem",
                                                                color: "var(--primary)"
                                                            },
                                                            className: "jsx-b4176df3befbde9c",
                                                            children: t.name.charAt(0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/LandingContent.tsx",
                                                            lineNumber: 524,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-b4176df3befbde9c",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: 600,
                                                                        fontSize: "0.875rem",
                                                                        color: "var(--text)"
                                                                    },
                                                                    className: "jsx-b4176df3befbde9c",
                                                                    children: t.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                                    lineNumber: 532,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontSize: "0.8125rem",
                                                                        color: "var(--text-muted)"
                                                                    },
                                                                    className: "jsx-b4176df3befbde9c",
                                                                    children: t.role
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                                    lineNumber: 533,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/LandingContent.tsx",
                                                            lineNumber: 531,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/LandingContent.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, t.name, true, {
                                            fileName: "[project]/app/components/LandingContent.tsx",
                                            lineNumber: 508,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LandingContent.tsx",
                                    lineNumber: 503,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/LandingContent.tsx",
                            lineNumber: 486,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/LandingContent.tsx",
                        lineNumber: 482,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            position: "relative",
                            overflow: "hidden",
                            padding: "5rem 1rem",
                            textAlign: "center",
                            background: "linear-gradient(145deg, #0C4A6E 0%, #0369A1 40%, #047857 100%)"
                        },
                        className: "jsx-b4176df3befbde9c",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    opacity: 0.04,
                                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                                    backgroundSize: "24px 24px"
                                },
                                className: "jsx-b4176df3befbde9c"
                            }, void 0, false, {
                                fileName: "[project]/app/components/LandingContent.tsx",
                                lineNumber: 547,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    zIndex: 2,
                                    maxWidth: "640px",
                                    margin: "0 auto"
                                },
                                className: "jsx-b4176df3befbde9c" + " " + "container-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                                            fontWeight: 800,
                                            color: "#fff",
                                            marginBottom: "1rem",
                                            lineHeight: 1.2
                                        },
                                        className: "jsx-b4176df3befbde9c",
                                        children: "Sẵn sàng tìm việc mơ ước?"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/LandingContent.tsx",
                                        lineNumber: 554,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "1.0625rem",
                                            color: "rgba(255,255,255,0.85)",
                                            marginBottom: "2rem",
                                            lineHeight: 1.7
                                        },
                                        className: "jsx-b4176df3befbde9c",
                                        children: "Đăng ký ngay để tiếp cận hàng ngàn cơ hội việc làm hấp dẫn từ các công ty hàng đầu"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/LandingContent.tsx",
                                        lineNumber: 557,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "1rem",
                                            justifyContent: "center",
                                            flexWrap: "wrap"
                                        },
                                        className: "jsx-b4176df3befbde9c",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/register",
                                                style: {
                                                    background: "#fff",
                                                    color: "#0369A1",
                                                    padding: "0.875rem 2rem",
                                                    borderRadius: "10px",
                                                    fontWeight: 700,
                                                    textDecoration: "none",
                                                    fontSize: "1rem",
                                                    boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                                                    transition: "all 200ms",
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem"
                                                },
                                                children: [
                                                    "Đăng ký miễn phí ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                                                        style: {
                                                            width: "18px",
                                                            height: "18px"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/LandingContent.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 50
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/LandingContent.tsx",
                                                lineNumber: 561,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/jobs",
                                                style: {
                                                    background: "transparent",
                                                    color: "#fff",
                                                    padding: "0.875rem 2rem",
                                                    borderRadius: "10px",
                                                    fontWeight: 600,
                                                    textDecoration: "none",
                                                    fontSize: "1rem",
                                                    border: "2px solid rgba(255,255,255,0.35)",
                                                    transition: "all 200ms"
                                                },
                                                children: "Xem việc làm"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/LandingContent.tsx",
                                                lineNumber: 569,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/LandingContent.tsx",
                                        lineNumber: 560,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/LandingContent.tsx",
                                lineNumber: 553,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/LandingContent.tsx",
                        lineNumber: 543,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/LandingContent.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/components/LandingContent.tsx",
                lineNumber: 581,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "b4176df3befbde9c",
                children: "@media (width<=768px){.stats-grid.jsx-b4176df3befbde9c{grid-template-columns:repeat(2,1fr)!important}.stats-grid.jsx-b4176df3befbde9c>div.jsx-b4176df3befbde9c{border-right:none!important}.stats-grid.jsx-b4176df3befbde9c>div.jsx-b4176df3befbde9c:nth-child(odd){border-right:1px solid var(--border)!important}.stats-grid.jsx-b4176df3befbde9c>div.jsx-b4176df3befbde9c:first-child,.stats-grid.jsx-b4176df3befbde9c>div.jsx-b4176df3befbde9c:nth-child(2){border-bottom:1px solid var(--border)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/LandingContent.tsx",
        lineNumber: 104,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f6d95fa8._.js.map