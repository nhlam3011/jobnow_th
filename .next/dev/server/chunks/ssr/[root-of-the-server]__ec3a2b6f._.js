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
"use client";
;
;
;
;
;
;
const INDUSTRIES = [
    {
        name: "Công nghệ Thông tin",
        slug: "cong-nghe-thong-tin",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ComputerDesktopIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ComputerDesktopIcon$3e$__["ComputerDesktopIcon"]
    },
    {
        name: "Tài chính - Ngân hàng",
        slug: "tai-chinh-ngan-hang",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingLibraryIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingLibraryIcon$3e$__["BuildingLibraryIcon"]
    },
    {
        name: "Thương mại điện tử",
        slug: "thuong-mai-dien-tu",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShoppingBagIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBagIcon$3e$__["ShoppingBagIcon"]
    },
    {
        name: "Marketing - Truyền thông",
        slug: "marketing-truyen-thong",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SpeakerWaveIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SpeakerWaveIcon$3e$__["SpeakerWaveIcon"]
    },
    {
        name: "Nhân sự",
        slug: "nhan-su",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UsersIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__["UsersIcon"]
    },
    {
        name: "Kế toán - Tài chính",
        slug: "ke-toan-tai-chinh",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChartBarIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBarIcon$3e$__["ChartBarIcon"]
    },
    {
        name: "Bán lẻ - Dịch vụ",
        slug: "ban-le-dich-vu",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingStorefrontIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingStorefrontIcon$3e$__["BuildingStorefrontIcon"]
    },
    {
        name: "Sản xuất - Chế biến",
        slug: "san-xuat-che-bien",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$WrenchScrewdriverIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WrenchScrewdriverIcon$3e$__["WrenchScrewdriverIcon"]
    },
    {
        name: "Xây dựng",
        slug: "xay-dung",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOffice2Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOffice2Icon$3e$__["BuildingOffice2Icon"]
    },
    {
        name: "Y tế - Chăm sóc sức khỏe",
        slug: "y-te-cham-soc-suc-khoe",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__["HeartIcon"]
    },
    {
        name: "Du lịch - Khách sạn",
        slug: "du-lich-khach-san",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HomeModernIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeModernIcon$3e$__["HomeModernIcon"]
    },
    {
        name: "Giáo dục - Đào tạo",
        slug: "gd-dao-tao",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$AcademicCapIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AcademicCapIcon$3e$__["AcademicCapIcon"]
    },
    {
        name: "Kiến trúc - Thiết kế",
        slug: "kien-truc-thiet-ke",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PaintBrushIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PaintBrushIcon$3e$__["PaintBrushIcon"]
    },
    {
        name: "Pháp lý",
        slug: "phap-luat",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ScaleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScaleIcon$3e$__["ScaleIcon"]
    },
    {
        name: "Vận tải - Logistics",
        slug: "van-tai-logistics",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__["TruckIcon"]
    }
];
function Navbar() {
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showIndustries, setShowIndustries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 22V14l8-6 8 6v8",
                                        stroke: "#fff",
                                        strokeWidth: "2",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 78,
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
                                        lineNumber: 79,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 76,
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
                                        lineNumber: 82,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 75,
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
                            [
                                {
                                    href: "/",
                                    label: "Trang chủ"
                                },
                                {
                                    href: "/jobs",
                                    label: "Việc làm"
                                },
                                {
                                    href: "/companies",
                                    label: "Công ty"
                                }
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    style: {
                                        padding: "0.5rem 0.875rem",
                                        borderRadius: "6px",
                                        fontSize: "0.9375rem",
                                        fontWeight: 500,
                                        color: "var(--text-muted)",
                                        textDecoration: "none",
                                        transition: "color 180ms, background 180ms"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.color = "var(--primary)";
                                        e.currentTarget.style.background = "rgba(3,105,161,0.07)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.color = "var(--text-muted)";
                                        e.currentTarget.style.background = "transparent";
                                    },
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative"
                                },
                                onMouseEnter: ()=>setShowIndustries(true),
                                onMouseLeave: ()=>setShowIndustries(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/jobs",
                                        style: {
                                            padding: "0.5rem 0.875rem",
                                            borderRadius: "6px",
                                            fontSize: "0.9375rem",
                                            fontWeight: 500,
                                            color: "var(--text-muted)",
                                            textDecoration: "none",
                                            transition: "color 180ms, background 180ms",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.375rem",
                                            cursor: "pointer"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.color = "var(--primary)";
                                            e.currentTarget.style.background = "rgba(3,105,161,0.07)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.color = "var(--text-muted)";
                                            e.currentTarget.style.background = "transparent";
                                        },
                                        children: [
                                            "Ngành nghề",
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
                                                    lineNumber: 150,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 149,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 124,
                                        columnNumber: 25
                                    }, this),
                                    showIndustries && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: "100%",
                                            left: 0,
                                            marginTop: "0.5rem",
                                            background: "var(--bg-card)",
                                            border: "1.5px solid var(--border)",
                                            borderRadius: "12px",
                                            boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                            padding: "0.75rem",
                                            minWidth: "280px",
                                            maxHeight: "400px",
                                            overflowY: "auto",
                                            zIndex: 1000
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: "0.5rem 0.75rem",
                                                    borderBottom: "1px solid var(--border)",
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
                                                    children: "Tất cả ngành nghề"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 172,
                                                columnNumber: 33
                                            }, this),
                                            INDUSTRIES.map((industry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/jobs?industry=${industry.slug}`,
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "0.625rem",
                                                        padding: "0.625rem 0.75rem",
                                                        borderRadius: "8px",
                                                        textDecoration: "none",
                                                        color: "var(--text)",
                                                        fontSize: "0.9375rem",
                                                        transition: "background 150ms"
                                                    },
                                                    onMouseEnter: (e)=>{
                                                        e.currentTarget.style.background = "var(--tag-bg)";
                                                    },
                                                    onMouseLeave: (e)=>{
                                                        e.currentTarget.style.background = "transparent";
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(industry.icon, {
                                                            style: {
                                                                width: "20px",
                                                                height: "20px",
                                                                flexShrink: 0,
                                                                color: "var(--primary)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/Navbar.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 41
                                                        }, this),
                                                        industry.name
                                                    ]
                                                }, industry.slug, true, {
                                                    fileName: "[project]/app/components/Navbar.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 37
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 155,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 119,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "0.75rem",
                            alignItems: "center"
                        },
                        className: "nav-cta",
                        children: isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                session?.user?.role === "CANDIDATE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "0.5rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/candidate/saved",
                                            style: {
                                                padding: "0.5rem",
                                                color: "var(--text-muted)",
                                                textDecoration: "none",
                                                fontSize: "0.9rem",
                                                fontWeight: 500
                                            },
                                            children: "Việc đã lưu"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 215,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/candidate/cv-builder",
                                            style: {
                                                padding: "0.5rem",
                                                color: "var(--text-muted)",
                                                textDecoration: "none",
                                                fontSize: "0.9rem",
                                                fontWeight: 500
                                            },
                                            children: "Tạo CV"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Navbar.tsx",
                                            lineNumber: 218,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 214,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: getDashboardLink(),
                                    className: "btn-outline",
                                    style: {
                                        padding: "0.5rem 1.125rem",
                                        fontSize: "0.9rem"
                                    },
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 223,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
                                            callbackUrl: "/"
                                        }),
                                    className: "btn-primary",
                                    style: {
                                        padding: "0.5rem 1.125rem",
                                        fontSize: "0.9rem",
                                        cursor: "pointer"
                                    },
                                    children: "Đăng xuất"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 226,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
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
                                    lineNumber: 236,
                                    columnNumber: 29
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
                                    lineNumber: 239,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 209,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 247,
                        columnNumber: 17
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
                                lineNumber: 265,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M4 6h16M4 12h16M4 18h16"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 267,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 263,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 250,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "var(--bg-card)",
                    borderTop: "1px solid var(--border)",
                    padding: "1rem 1.5rem 1.5rem"
                },
                children: [
                    [
                        {
                            href: "/",
                            label: "Trang chủ"
                        },
                        {
                            href: "/jobs",
                            label: "Việc làm"
                        },
                        {
                            href: "/companies",
                            label: "Công ty"
                        }
                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            onClick: ()=>setOpen(false),
                            style: {
                                display: "block",
                                padding: "0.75rem 0",
                                borderBottom: "1px solid var(--border)",
                                color: "var(--text)",
                                fontWeight: 500,
                                textDecoration: "none"
                            },
                            children: item.label
                        }, item.href, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 287,
                            columnNumber: 25
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "0.75rem 0",
                            borderBottom: "1px solid var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.8125rem",
                                    fontWeight: 700,
                                    color: "var(--text-muted)",
                                    display: "block",
                                    marginBottom: "0.5rem"
                                },
                                children: "NGÀNH NGHỀ"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 306,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.5rem"
                                },
                                children: INDUSTRIES.slice(0, 8).map((industry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/jobs?industry=${industry.slug}`,
                                        onClick: ()=>setOpen(false),
                                        style: {
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.375rem",
                                            padding: "0.375rem 0.75rem",
                                            background: "var(--tag-bg)",
                                            borderRadius: "100px",
                                            fontSize: "0.8125rem",
                                            color: "var(--tag-text)",
                                            textDecoration: "none"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(industry.icon, {
                                                style: {
                                                    width: "16px",
                                                    height: "16px"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Navbar.tsx",
                                                lineNumber: 327,
                                                columnNumber: 37
                                            }, this),
                                            industry.name.split(" - ")[0]
                                        ]
                                    }, industry.slug, true, {
                                        fileName: "[project]/app/components/Navbar.tsx",
                                        lineNumber: 311,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 309,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 305,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "1rem",
                            display: "flex",
                            gap: "0.75rem"
                        },
                        children: isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: getDashboardLink(),
                                    className: "btn-outline",
                                    style: {
                                        flex: 1,
                                        justifyContent: "center"
                                    },
                                    onClick: ()=>setOpen(false),
                                    children: "Dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 337,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
                                            callbackUrl: "/"
                                        });
                                        setOpen(false);
                                    },
                                    className: "btn-primary",
                                    style: {
                                        flex: 1,
                                        justifyContent: "center",
                                        cursor: "pointer"
                                    },
                                    children: "Đăng xuất"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 340,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "btn-outline",
                                    style: {
                                        flex: 1,
                                        justifyContent: "center"
                                    },
                                    onClick: ()=>setOpen(false),
                                    children: "Đăng nhập"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 350,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/register",
                                    className: "btn-primary",
                                    style: {
                                        flex: 1,
                                        justifyContent: "center"
                                    },
                                    onClick: ()=>setOpen(false),
                                    children: "Đăng ký"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 353,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 334,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 275,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 362,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Navbar.tsx",
        lineNumber: 63,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            background: "var(--bg)",
            color: "#E0F2FE",
            marginTop: "auto"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-xl",
            style: {
                paddingTop: "3.5rem",
                paddingBottom: "3.5rem"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "3rem",
                        marginBottom: "3rem"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        marginBottom: "0.875rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "28",
                                            height: "28",
                                            viewBox: "0 0 32 32",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "32",
                                                    height: "32",
                                                    rx: "8",
                                                    fill: "var(--cta)"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 21,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M8 22V14l8-6 8 6v8",
                                                    stroke: "#fff",
                                                    strokeWidth: "2",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Footer.tsx",
                                                    lineNumber: 22,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontWeight: 800,
                                                fontSize: "1.2rem",
                                                color: "#fff"
                                            },
                                            children: [
                                                "Job",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                fill: "none",
                                                stroke: "#94A3B8",
                                                strokeWidth: "2",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                        ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: {
                                            listStyle: "none",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.625rem"
                                        },
                                        children: col.links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "0.875rem",
                                color: "#64748B"
                            },
                            children: [
                                "Powered by",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/app/actions/data:2be7fd [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveJob",
    ()=>$$RSC_SERVER_ACTION_11
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4074008fc079c221c63f168f8c403e5a556b09450a":"saveJob"},"app/actions/jobs.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4074008fc079c221c63f168f8c403e5a556b09450a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveJob");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vam9icy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuXG5mdW5jdGlvbiBzbHVnaWZ5KHRleHQ6IHN0cmluZykge1xuICAgIHJldHVybiB0ZXh0XG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXmEtejAtOVxccy1dL2csIFwiXCIpXG4gICAgICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxuICAgICAgICAucmVwbGFjZSgvLSsvZywgXCItXCIpXG4gICAgICAgIC50cmltKCkgKyBcIi1cIiArIERhdGUubm93KCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JzKHBhcmFtcz86IHtcbiAgICBxPzogc3RyaW5nO1xuICAgIGxvYz86IHN0cmluZztcbiAgICB0eXBlPzogc3RyaW5nO1xuICAgIHN0YXR1cz86IHN0cmluZztcbiAgICBpbmR1c3RyeUlkPzogc3RyaW5nO1xuICAgIHNhbGFyeT86IHN0cmluZztcbn0pIHtcbiAgICBjb25zdCB3aGVyZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcblxuICAgIGlmIChwYXJhbXM/LnN0YXR1cykge1xuICAgICAgICB3aGVyZS5zdGF0dXMgPSBwYXJhbXMuc3RhdHVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdoZXJlLnN0YXR1cyA9IFwiQUNUSVZFXCI7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcz8ucSkge1xuICAgICAgICB3aGVyZS5PUiA9IFtcbiAgICAgICAgICAgIHsgdGl0bGU6IHsgY29udGFpbnM6IHBhcmFtcy5xLCBtb2RlOiBcImluc2Vuc2l0aXZlXCIgfSB9LFxuICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogeyBjb250YWluczogcGFyYW1zLnEsIG1vZGU6IFwiaW5zZW5zaXRpdmVcIiB9IH0sXG4gICAgICAgICAgICB7IHNraWxsczogeyBoYXNTb21lOiBbcGFyYW1zLnFdIH0gfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcz8ubG9jKSB7XG4gICAgICAgIHdoZXJlLmxvY2F0aW9uID0geyBjb250YWluczogcGFyYW1zLmxvYywgbW9kZTogXCJpbnNlbnNpdGl2ZVwiIH07XG4gICAgfVxuICAgIGlmIChwYXJhbXM/LnR5cGUpIHdoZXJlLmpvYlR5cGUgPSBwYXJhbXMudHlwZTtcbiAgICBpZiAocGFyYW1zPy5pbmR1c3RyeUlkKSB3aGVyZS5pbmR1c3RyeUlkID0gcGFyYW1zLmluZHVzdHJ5SWQ7XG5cbiAgICAvLyBTYWxhcnkgcmFuZ2UgZmlsdGVyXG4gICAgaWYgKHBhcmFtcz8uc2FsYXJ5KSB7XG4gICAgICAgIGNvbnN0IFttaW5TYWxhcnksIG1heFNhbGFyeV0gPSBwYXJhbXMuc2FsYXJ5LnNwbGl0KFwiLVwiKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgd2hlcmUuQU5EID0gW1xuICAgICAgICAgICAgeyBzYWxhcnlNaW46IHsgZ3RlOiBtaW5TYWxhcnkgfSB9LFxuICAgICAgICAgICAgeyBPUjogW3sgc2FsYXJ5TWF4OiB7IGx0ZTogbWF4U2FsYXJ5IH0gfSwgeyBzYWxhcnlNYXg6IHsgZ3RlOiBtaW5TYWxhcnkgfSB9XSB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByaXNtYS5qb2IuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZSxcbiAgICAgICAgaW5jbHVkZTogeyBjb21wYW55OiB7IHNlbGVjdDogeyBuYW1lOiB0cnVlLCBsb2dvOiB0cnVlLCBzbHVnOiB0cnVlIH0gfSB9LFxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgICAgICAgdGFrZTogNTAsXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JCeVNsdWcoc2x1Zzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHByaXNtYS5qb2IuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7IHNsdWcgfSxcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgY29tcGFueTogdHJ1ZSxcbiAgICAgICAgICAgIGluZHVzdHJ5OiB0cnVlLFxuICAgICAgICAgICAgX2NvdW50OiB7IHNlbGVjdDogeyBhcHBsaWNhdGlvbnM6IHRydWUgfSB9XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gcHJpc21hLmpvYi5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgaW5jbHVkZTogeyBjb21wYW55OiB0cnVlLCBhcHBsaWNhdGlvbnM6IHsgaW5jbHVkZTogeyBjYW5kaWRhdGU6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGVtYWlsOiB0cnVlLCBpbWFnZTogdHJ1ZSwgY2FuZGlkYXRlUHJvZmlsZTogdHJ1ZSB9IH0gfSB9LCBfY291bnQ6IHsgc2VsZWN0OiB7IGFwcGxpY2F0aW9uczogdHJ1ZSB9IH0gfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUpvYihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlciB8fCBzZXNzaW9uLnVzZXIucm9sZSAhPT0gXCJFTVBMT1lFUlwiKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIktow7RuZyBjw7MgcXV54buBbiB0cnV5IGPhuq1wXCIgfTtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByZXF1aXJlbWVudHMgPSBmb3JtRGF0YS5nZXQoXCJyZXF1aXJlbWVudHNcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGJlbmVmaXRzID0gZm9ybURhdGEuZ2V0KFwiYmVuZWZpdHNcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZm9ybURhdGEuZ2V0KFwibG9jYXRpb25cIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGpvYlR5cGUgPSBmb3JtRGF0YS5nZXQoXCJqb2JUeXBlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBzYWxhcnlNaW4gPSBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJzYWxhcnlNaW5cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHNhbGFyeU1heCA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcInNhbGFyeU1heFwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3Qgc2tpbGxzUmF3ID0gZm9ybURhdGEuZ2V0KFwic2tpbGxzXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBza2lsbHMgPSBza2lsbHNSYXcgPyBza2lsbHNSYXcuc3BsaXQoXCIsXCIpLm1hcCgocykgPT4gcy50cmltKCkpLmZpbHRlcihCb29sZWFuKSA6IFtdO1xuICAgIGNvbnN0IGluZHVzdHJ5U2x1ZyA9IGZvcm1EYXRhLmdldChcImluZHVzdHJ5SWRcIikgYXMgc3RyaW5nO1xuXG4gICAgLy8gR2V0IGVtcGxveWVyJ3MgY29tcGFueVxuICAgIGNvbnN0IGVtcGxveWVyID0gYXdhaXQgcHJpc21hLmVtcGxveWVyUHJvZmlsZS5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghZW1wbG95ZXI/LmNvbXBhbnlJZCkge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJC4bqhbiBjaMawYSBjw7MgdGjDtG5nIHRpbiBjw7RuZyB0eS4gVnVpIGzDsm5nIGPhuq1wIG5o4bqtdCB0cmFuZyBDw7RuZyB0eSB0csaw4bubYy5cIiB9O1xuICAgIH1cblxuICAgIC8vIEdldCBpbmR1c3RyeSBieSBzbHVnIGlmIHByb3ZpZGVkXG4gICAgbGV0IGluZHVzdHJ5SWQgPSBudWxsO1xuICAgIGlmIChpbmR1c3RyeVNsdWcpIHtcbiAgICAgICAgY29uc3QgaW5kdXN0cnkgPSBhd2FpdCBwcmlzbWEuaW5kdXN0cnkuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICB3aGVyZTogeyBzbHVnOiBpbmR1c3RyeVNsdWcgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZHVzdHJ5KSB7XG4gICAgICAgICAgICBpbmR1c3RyeUlkID0gaW5kdXN0cnkuaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBqb2IgPSBhd2FpdCBwcmlzbWEuam9iLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNvbXBhbnlJZDogZW1wbG95ZXIuY29tcGFueUlkLFxuICAgICAgICAgICAgcG9zdGVkQnlJZDogc2Vzc2lvbi51c2VyLmlkLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBzbHVnOiBzbHVnaWZ5KHRpdGxlKSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgYmVuZWZpdHMsXG4gICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgIGpvYlR5cGU6IGpvYlR5cGUgYXMgXCJGVUxMX1RJTUVcIiB8IFwiUEFSVF9USU1FXCIgfCBcIlJFTU9URVwiIHwgXCJJTlRFUk5TSElQXCIgfCBcIkNPTlRSQUNUXCIsXG4gICAgICAgICAgICBzYWxhcnlNaW4sXG4gICAgICAgICAgICBzYWxhcnlNYXgsXG4gICAgICAgICAgICBza2lsbHMsXG4gICAgICAgICAgICBzdGF0dXM6IFwiUEVORElOR1wiLFxuICAgICAgICAgICAgaW5kdXN0cnlJZCxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2VtcGxveWVyL2pvYnNcIik7XG4gICAgcmVkaXJlY3QoXCIvZW1wbG95ZXIvam9ic1wiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBpZDogam9iLmlkIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVKb2JTdGF0dXMoam9iSWQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlciB8fCBzZXNzaW9uLnVzZXIucm9sZSAhPT0gXCJBRE1JTlwiKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIktow7RuZyBjw7MgcXV54buBblwiIH07XG4gICAgfVxuICAgIGF3YWl0IHByaXNtYS5qb2IudXBkYXRlKHsgd2hlcmU6IHsgaWQ6IGpvYklkIH0sIGRhdGE6IHsgc3RhdHVzOiBzdGF0dXMgYXMgXCJBQ1RJVkVcIiB8IFwiUkVKRUNURURcIiB8IFwiQ0xPU0VEXCIgfSB9KTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9qb2JzXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVySm9icygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cbiAgICBjb25zdCBlbXBsb3llciA9IGF3YWl0IHByaXNtYS5lbXBsb3llclByb2ZpbGUuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH0sXG4gICAgfSk7XG4gICAgaWYgKCFlbXBsb3llcj8uY29tcGFueUlkKSByZXR1cm4gW107XG5cbiAgICByZXR1cm4gcHJpc21hLmpvYi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IGNvbXBhbnlJZDogZW1wbG95ZXIuY29tcGFueUlkIH0sXG4gICAgICAgIGluY2x1ZGU6IHsgX2NvdW50OiB7IHNlbGVjdDogeyBhcHBsaWNhdGlvbnM6IHRydWUgfSB9IH0sXG4gICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSm9iKGpvYklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlciB8fCBzZXNzaW9uLnVzZXIucm9sZSAhPT0gXCJFTVBMT1lFUlwiKSByZXR1cm4geyBlcnJvcjogXCJLaMO0bmcgY8OzIHF1eeG7gW5cIiB9O1xuICAgIGF3YWl0IHByaXNtYS5qb2IuZGVsZXRlKHsgd2hlcmU6IHsgaWQ6IGpvYklkIH0gfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZW1wbG95ZXIvam9ic1wiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxKb2JzRm9yQWRtaW4oKSB7XG4gICAgcmV0dXJuIHByaXNtYS5qb2IuZmluZE1hbnkoe1xuICAgICAgICBpbmNsdWRlOiB7IGNvbXBhbnk6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSB9LCBfY291bnQ6IHsgc2VsZWN0OiB7IGFwcGxpY2F0aW9uczogdHJ1ZSB9IH0gfSxcbiAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbmR1c3RyaWVzKCkge1xuICAgIHJldHVybiBwcmlzbWEuaW5kdXN0cnkuZmluZE1hbnkoe1xuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6IFwiYXNjXCIgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEpvYkxvY2F0aW9ucygpIHtcbiAgICBjb25zdCBqb2JzID0gYXdhaXQgcHJpc21hLmpvYi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHN0YXR1czogXCJBQ1RJVkVcIiB9LFxuICAgICAgICBzZWxlY3Q6IHsgbG9jYXRpb246IHRydWUgfSxcbiAgICAgICAgZGlzdGluY3Q6IFtcImxvY2F0aW9uXCJdLFxuICAgIH0pO1xuICAgIHJldHVybiBqb2JzLm1hcChqID0+IGoubG9jYXRpb24pLmZpbHRlcihCb29sZWFuKS5zb3J0KCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JGaWx0ZXJzKCkge1xuICAgIGNvbnN0IFtpbmR1c3RyaWVzLCBsb2NhdGlvbnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBwcmlzbWEuaW5kdXN0cnkuZmluZE1hbnkoeyBvcmRlckJ5OiB7IG5hbWU6IFwiYXNjXCIgfSB9KSxcbiAgICAgICAgcHJpc21hLmpvYi5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBzdGF0dXM6IFwiQUNUSVZFXCIgfSxcbiAgICAgICAgICAgIHNlbGVjdDogeyBsb2NhdGlvbjogdHJ1ZSB9LFxuICAgICAgICAgICAgZGlzdGluY3Q6IFtcImxvY2F0aW9uXCJdLFxuICAgICAgICB9KS50aGVuKGpvYnMgPT4gam9icy5tYXAoaiA9PiBqLmxvY2F0aW9uKS5maWx0ZXIoQm9vbGVhbikuc29ydCgpKVxuICAgIF0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5kdXN0cmllcyxcbiAgICAgICAgbG9jYXRpb25zLFxuICAgICAgICBqb2JUeXBlczogW1wiRlVMTF9USU1FXCIsIFwiUEFSVF9USU1FXCIsIFwiUkVNT1RFXCIsIFwiSU5URVJOU0hJUFwiLCBcIkNPTlRSQUNUXCJdLFxuICAgICAgICBleHBlcmllbmNlTGV2ZWxzOiBbXCJFbnRyeVwiLCBcIkp1bmlvclwiLCBcIk1pZC1MZXZlbFwiLCBcIlNlbmlvclwiLCBcIk1hbmFnZXJcIl0sXG4gICAgICAgIHNhbGFyeVJhbmdlczogW1xuICAgICAgICAgICAgeyB2YWx1ZTogXCIwLTUwMDAwMDBcIiwgbGFiZWw6IFwiRMaw4bubaSA1IHRyaeG7h3VcIiB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogXCI1MDAwMDAwLTEwMDAwMDAwXCIsIGxhYmVsOiBcIjUgLSAxMCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMTAwMDAwMDAtMjAwMDAwMDBcIiwgbGFiZWw6IFwiMTAgLSAyMCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMjAwMDAwMDAtMzAwMDAwMDBcIiwgbGFiZWw6IFwiMjAgLSAzMCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMzAwMDAwMDAtNTAwMDAwMDBcIiwgbGFiZWw6IFwiMzAgLSA1MCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiNTAwMDAwMDAtOTk5OTk5OTk5XCIsIGxhYmVsOiBcIlRyw6puIDUwIHRyaeG7h3VcIiB9LFxuICAgICAgICBdXG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVKb2Ioam9iSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlZ1aSBsw7JuZyDEkcSDbmcgbmjhuq1wIMSR4buDIGzGsHUgdmnhu4djIGzDoG1cIiB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS5zYXZlZEpvYi5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuICAgICAgICAgICAgICAgIGpvYklkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9qb2JzXCIpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJWaeG7h2MgbMOgbSBuw6B5IMSRw6MgxJHGsOG7o2MgbMawdSB0csaw4bubYyDEkcOzXCIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bnNhdmVKb2Ioam9iSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlZ1aSBsw7JuZyDEkcSDbmcgbmjhuq1wXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuZGVsZXRlTWFueSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgIGpvYklkXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9qb2JzXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNhdmVkSm9icygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIFtdO1xuXG4gICAgcmV0dXJuIHByaXNtYS5zYXZlZEpvYi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH0sXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgIGpvYjoge1xuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFueTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgbG9nbzogdHJ1ZSwgc2x1ZzogdHJ1ZSB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0pvYlNhdmVkKGpvYklkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3Qgc2F2ZWQgPSBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VySWRfam9iSWQ6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgICAgICBqb2JJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuICEhc2F2ZWQ7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitRQWdPc0Isc0xBQUEifQ==
}),
"[project]/app/actions/data:d3d7cc [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "unsaveJob",
    ()=>$$RSC_SERVER_ACTION_12
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4016bfa22123dad3d3aaeee262b4ebf7358de34cb8":"unsaveJob"},"app/actions/jobs.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4016bfa22123dad3d3aaeee262b4ebf7358de34cb8", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "unsaveJob");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vam9icy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuXG5mdW5jdGlvbiBzbHVnaWZ5KHRleHQ6IHN0cmluZykge1xuICAgIHJldHVybiB0ZXh0XG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXmEtejAtOVxccy1dL2csIFwiXCIpXG4gICAgICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxuICAgICAgICAucmVwbGFjZSgvLSsvZywgXCItXCIpXG4gICAgICAgIC50cmltKCkgKyBcIi1cIiArIERhdGUubm93KCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JzKHBhcmFtcz86IHtcbiAgICBxPzogc3RyaW5nO1xuICAgIGxvYz86IHN0cmluZztcbiAgICB0eXBlPzogc3RyaW5nO1xuICAgIHN0YXR1cz86IHN0cmluZztcbiAgICBpbmR1c3RyeUlkPzogc3RyaW5nO1xuICAgIHNhbGFyeT86IHN0cmluZztcbn0pIHtcbiAgICBjb25zdCB3aGVyZTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcblxuICAgIGlmIChwYXJhbXM/LnN0YXR1cykge1xuICAgICAgICB3aGVyZS5zdGF0dXMgPSBwYXJhbXMuc3RhdHVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdoZXJlLnN0YXR1cyA9IFwiQUNUSVZFXCI7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcz8ucSkge1xuICAgICAgICB3aGVyZS5PUiA9IFtcbiAgICAgICAgICAgIHsgdGl0bGU6IHsgY29udGFpbnM6IHBhcmFtcy5xLCBtb2RlOiBcImluc2Vuc2l0aXZlXCIgfSB9LFxuICAgICAgICAgICAgeyBkZXNjcmlwdGlvbjogeyBjb250YWluczogcGFyYW1zLnEsIG1vZGU6IFwiaW5zZW5zaXRpdmVcIiB9IH0sXG4gICAgICAgICAgICB7IHNraWxsczogeyBoYXNTb21lOiBbcGFyYW1zLnFdIH0gfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcz8ubG9jKSB7XG4gICAgICAgIHdoZXJlLmxvY2F0aW9uID0geyBjb250YWluczogcGFyYW1zLmxvYywgbW9kZTogXCJpbnNlbnNpdGl2ZVwiIH07XG4gICAgfVxuICAgIGlmIChwYXJhbXM/LnR5cGUpIHdoZXJlLmpvYlR5cGUgPSBwYXJhbXMudHlwZTtcbiAgICBpZiAocGFyYW1zPy5pbmR1c3RyeUlkKSB3aGVyZS5pbmR1c3RyeUlkID0gcGFyYW1zLmluZHVzdHJ5SWQ7XG5cbiAgICAvLyBTYWxhcnkgcmFuZ2UgZmlsdGVyXG4gICAgaWYgKHBhcmFtcz8uc2FsYXJ5KSB7XG4gICAgICAgIGNvbnN0IFttaW5TYWxhcnksIG1heFNhbGFyeV0gPSBwYXJhbXMuc2FsYXJ5LnNwbGl0KFwiLVwiKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgd2hlcmUuQU5EID0gW1xuICAgICAgICAgICAgeyBzYWxhcnlNaW46IHsgZ3RlOiBtaW5TYWxhcnkgfSB9LFxuICAgICAgICAgICAgeyBPUjogW3sgc2FsYXJ5TWF4OiB7IGx0ZTogbWF4U2FsYXJ5IH0gfSwgeyBzYWxhcnlNYXg6IHsgZ3RlOiBtaW5TYWxhcnkgfSB9XSB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHByaXNtYS5qb2IuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZSxcbiAgICAgICAgaW5jbHVkZTogeyBjb21wYW55OiB7IHNlbGVjdDogeyBuYW1lOiB0cnVlLCBsb2dvOiB0cnVlLCBzbHVnOiB0cnVlIH0gfSB9LFxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgICAgICAgdGFrZTogNTAsXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JCeVNsdWcoc2x1Zzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHByaXNtYS5qb2IuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7IHNsdWcgfSxcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgY29tcGFueTogdHJ1ZSxcbiAgICAgICAgICAgIGluZHVzdHJ5OiB0cnVlLFxuICAgICAgICAgICAgX2NvdW50OiB7IHNlbGVjdDogeyBhcHBsaWNhdGlvbnM6IHRydWUgfSB9XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JCeUlkKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gcHJpc21hLmpvYi5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgICAgaW5jbHVkZTogeyBjb21wYW55OiB0cnVlLCBhcHBsaWNhdGlvbnM6IHsgaW5jbHVkZTogeyBjYW5kaWRhdGU6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUsIGVtYWlsOiB0cnVlLCBpbWFnZTogdHJ1ZSwgY2FuZGlkYXRlUHJvZmlsZTogdHJ1ZSB9IH0gfSB9LCBfY291bnQ6IHsgc2VsZWN0OiB7IGFwcGxpY2F0aW9uczogdHJ1ZSB9IH0gfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUpvYihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlciB8fCBzZXNzaW9uLnVzZXIucm9sZSAhPT0gXCJFTVBMT1lFUlwiKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIktow7RuZyBjw7MgcXV54buBbiB0cnV5IGPhuq1wXCIgfTtcbiAgICB9XG5cbiAgICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByZXF1aXJlbWVudHMgPSBmb3JtRGF0YS5nZXQoXCJyZXF1aXJlbWVudHNcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGJlbmVmaXRzID0gZm9ybURhdGEuZ2V0KFwiYmVuZWZpdHNcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gZm9ybURhdGEuZ2V0KFwibG9jYXRpb25cIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGpvYlR5cGUgPSBmb3JtRGF0YS5nZXQoXCJqb2JUeXBlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBzYWxhcnlNaW4gPSBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJzYWxhcnlNaW5cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHNhbGFyeU1heCA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcInNhbGFyeU1heFwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3Qgc2tpbGxzUmF3ID0gZm9ybURhdGEuZ2V0KFwic2tpbGxzXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBza2lsbHMgPSBza2lsbHNSYXcgPyBza2lsbHNSYXcuc3BsaXQoXCIsXCIpLm1hcCgocykgPT4gcy50cmltKCkpLmZpbHRlcihCb29sZWFuKSA6IFtdO1xuICAgIGNvbnN0IGluZHVzdHJ5U2x1ZyA9IGZvcm1EYXRhLmdldChcImluZHVzdHJ5SWRcIikgYXMgc3RyaW5nO1xuXG4gICAgLy8gR2V0IGVtcGxveWVyJ3MgY29tcGFueVxuICAgIGNvbnN0IGVtcGxveWVyID0gYXdhaXQgcHJpc21hLmVtcGxveWVyUHJvZmlsZS5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHsgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWQgfSxcbiAgICB9KTtcblxuICAgIGlmICghZW1wbG95ZXI/LmNvbXBhbnlJZCkge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJC4bqhbiBjaMawYSBjw7MgdGjDtG5nIHRpbiBjw7RuZyB0eS4gVnVpIGzDsm5nIGPhuq1wIG5o4bqtdCB0cmFuZyBDw7RuZyB0eSB0csaw4bubYy5cIiB9O1xuICAgIH1cblxuICAgIC8vIEdldCBpbmR1c3RyeSBieSBzbHVnIGlmIHByb3ZpZGVkXG4gICAgbGV0IGluZHVzdHJ5SWQgPSBudWxsO1xuICAgIGlmIChpbmR1c3RyeVNsdWcpIHtcbiAgICAgICAgY29uc3QgaW5kdXN0cnkgPSBhd2FpdCBwcmlzbWEuaW5kdXN0cnkuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgICB3aGVyZTogeyBzbHVnOiBpbmR1c3RyeVNsdWcgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluZHVzdHJ5KSB7XG4gICAgICAgICAgICBpbmR1c3RyeUlkID0gaW5kdXN0cnkuaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBqb2IgPSBhd2FpdCBwcmlzbWEuam9iLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNvbXBhbnlJZDogZW1wbG95ZXIuY29tcGFueUlkLFxuICAgICAgICAgICAgcG9zdGVkQnlJZDogc2Vzc2lvbi51c2VyLmlkLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBzbHVnOiBzbHVnaWZ5KHRpdGxlKSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZW1lbnRzLFxuICAgICAgICAgICAgYmVuZWZpdHMsXG4gICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgIGpvYlR5cGU6IGpvYlR5cGUgYXMgXCJGVUxMX1RJTUVcIiB8IFwiUEFSVF9USU1FXCIgfCBcIlJFTU9URVwiIHwgXCJJTlRFUk5TSElQXCIgfCBcIkNPTlRSQUNUXCIsXG4gICAgICAgICAgICBzYWxhcnlNaW4sXG4gICAgICAgICAgICBzYWxhcnlNYXgsXG4gICAgICAgICAgICBza2lsbHMsXG4gICAgICAgICAgICBzdGF0dXM6IFwiUEVORElOR1wiLFxuICAgICAgICAgICAgaW5kdXN0cnlJZCxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2VtcGxveWVyL2pvYnNcIik7XG4gICAgcmVkaXJlY3QoXCIvZW1wbG95ZXIvam9ic1wiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBpZDogam9iLmlkIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVKb2JTdGF0dXMoam9iSWQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlciB8fCBzZXNzaW9uLnVzZXIucm9sZSAhPT0gXCJBRE1JTlwiKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIktow7RuZyBjw7MgcXV54buBblwiIH07XG4gICAgfVxuICAgIGF3YWl0IHByaXNtYS5qb2IudXBkYXRlKHsgd2hlcmU6IHsgaWQ6IGpvYklkIH0sIGRhdGE6IHsgc3RhdHVzOiBzdGF0dXMgYXMgXCJBQ1RJVkVcIiB8IFwiUkVKRUNURURcIiB8IFwiQ0xPU0VEXCIgfSB9KTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pbi9qb2JzXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVtcGxveWVySm9icygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmVkaXJlY3QoXCIvbG9naW5cIik7XG5cbiAgICBjb25zdCBlbXBsb3llciA9IGF3YWl0IHByaXNtYS5lbXBsb3llclByb2ZpbGUuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH0sXG4gICAgfSk7XG4gICAgaWYgKCFlbXBsb3llcj8uY29tcGFueUlkKSByZXR1cm4gW107XG5cbiAgICByZXR1cm4gcHJpc21hLmpvYi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IGNvbXBhbnlJZDogZW1wbG95ZXIuY29tcGFueUlkIH0sXG4gICAgICAgIGluY2x1ZGU6IHsgX2NvdW50OiB7IHNlbGVjdDogeyBhcHBsaWNhdGlvbnM6IHRydWUgfSB9IH0sXG4gICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSm9iKGpvYklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlciB8fCBzZXNzaW9uLnVzZXIucm9sZSAhPT0gXCJFTVBMT1lFUlwiKSByZXR1cm4geyBlcnJvcjogXCJLaMO0bmcgY8OzIHF1eeG7gW5cIiB9O1xuICAgIGF3YWl0IHByaXNtYS5qb2IuZGVsZXRlKHsgd2hlcmU6IHsgaWQ6IGpvYklkIH0gfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZW1wbG95ZXIvam9ic1wiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxKb2JzRm9yQWRtaW4oKSB7XG4gICAgcmV0dXJuIHByaXNtYS5qb2IuZmluZE1hbnkoe1xuICAgICAgICBpbmNsdWRlOiB7IGNvbXBhbnk6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSB9LCBfY291bnQ6IHsgc2VsZWN0OiB7IGFwcGxpY2F0aW9uczogdHJ1ZSB9IH0gfSxcbiAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbmR1c3RyaWVzKCkge1xuICAgIHJldHVybiBwcmlzbWEuaW5kdXN0cnkuZmluZE1hbnkoe1xuICAgICAgICBvcmRlckJ5OiB7IG5hbWU6IFwiYXNjXCIgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEpvYkxvY2F0aW9ucygpIHtcbiAgICBjb25zdCBqb2JzID0gYXdhaXQgcHJpc21hLmpvYi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHN0YXR1czogXCJBQ1RJVkVcIiB9LFxuICAgICAgICBzZWxlY3Q6IHsgbG9jYXRpb246IHRydWUgfSxcbiAgICAgICAgZGlzdGluY3Q6IFtcImxvY2F0aW9uXCJdLFxuICAgIH0pO1xuICAgIHJldHVybiBqb2JzLm1hcChqID0+IGoubG9jYXRpb24pLmZpbHRlcihCb29sZWFuKS5zb3J0KCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRKb2JGaWx0ZXJzKCkge1xuICAgIGNvbnN0IFtpbmR1c3RyaWVzLCBsb2NhdGlvbnNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICBwcmlzbWEuaW5kdXN0cnkuZmluZE1hbnkoeyBvcmRlckJ5OiB7IG5hbWU6IFwiYXNjXCIgfSB9KSxcbiAgICAgICAgcHJpc21hLmpvYi5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZTogeyBzdGF0dXM6IFwiQUNUSVZFXCIgfSxcbiAgICAgICAgICAgIHNlbGVjdDogeyBsb2NhdGlvbjogdHJ1ZSB9LFxuICAgICAgICAgICAgZGlzdGluY3Q6IFtcImxvY2F0aW9uXCJdLFxuICAgICAgICB9KS50aGVuKGpvYnMgPT4gam9icy5tYXAoaiA9PiBqLmxvY2F0aW9uKS5maWx0ZXIoQm9vbGVhbikuc29ydCgpKVxuICAgIF0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5kdXN0cmllcyxcbiAgICAgICAgbG9jYXRpb25zLFxuICAgICAgICBqb2JUeXBlczogW1wiRlVMTF9USU1FXCIsIFwiUEFSVF9USU1FXCIsIFwiUkVNT1RFXCIsIFwiSU5URVJOU0hJUFwiLCBcIkNPTlRSQUNUXCJdLFxuICAgICAgICBleHBlcmllbmNlTGV2ZWxzOiBbXCJFbnRyeVwiLCBcIkp1bmlvclwiLCBcIk1pZC1MZXZlbFwiLCBcIlNlbmlvclwiLCBcIk1hbmFnZXJcIl0sXG4gICAgICAgIHNhbGFyeVJhbmdlczogW1xuICAgICAgICAgICAgeyB2YWx1ZTogXCIwLTUwMDAwMDBcIiwgbGFiZWw6IFwiRMaw4bubaSA1IHRyaeG7h3VcIiB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogXCI1MDAwMDAwLTEwMDAwMDAwXCIsIGxhYmVsOiBcIjUgLSAxMCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMTAwMDAwMDAtMjAwMDAwMDBcIiwgbGFiZWw6IFwiMTAgLSAyMCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMjAwMDAwMDAtMzAwMDAwMDBcIiwgbGFiZWw6IFwiMjAgLSAzMCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiMzAwMDAwMDAtNTAwMDAwMDBcIiwgbGFiZWw6IFwiMzAgLSA1MCB0cmnhu4d1XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiNTAwMDAwMDAtOTk5OTk5OTk5XCIsIGxhYmVsOiBcIlRyw6puIDUwIHRyaeG7h3VcIiB9LFxuICAgICAgICBdXG4gICAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVKb2Ioam9iSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlZ1aSBsw7JuZyDEkcSDbmcgbmjhuq1wIMSR4buDIGzGsHUgdmnhu4djIGzDoG1cIiB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS5zYXZlZEpvYi5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuICAgICAgICAgICAgICAgIGpvYklkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9qb2JzXCIpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJWaeG7h2MgbMOgbSBuw6B5IMSRw6MgxJHGsOG7o2MgbMawdSB0csaw4bubYyDEkcOzXCIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bnNhdmVKb2Ioam9iSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlZ1aSBsw7JuZyDEkcSDbmcgbmjhuq1wXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuZGVsZXRlTWFueSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgIGpvYklkXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9qb2JzXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNhdmVkSm9icygpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIFtdO1xuXG4gICAgcmV0dXJuIHByaXNtYS5zYXZlZEpvYi5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7IHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH0sXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgIGpvYjoge1xuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFueTogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSwgbG9nbzogdHJ1ZSwgc2x1ZzogdHJ1ZSB9IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiBcImRlc2NcIiB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0pvYlNhdmVkKGpvYklkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3Qgc2F2ZWQgPSBhd2FpdCBwcmlzbWEuc2F2ZWRKb2IuZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB1c2VySWRfam9iSWQ6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHNlc3Npb24udXNlci5pZCxcbiAgICAgICAgICAgICAgICBqb2JJZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuICEhc2F2ZWQ7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImlSQW9Qc0Isd0xBQUEifQ==
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
"[project]/app/components/SaveJobButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SaveJobButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$2be7fd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:2be7fd [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$d3d7cc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:d3d7cc [app-ssr] (ecmascript) <text/javascript>");
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
    const handleToggle = async ()=>{
        setLoading(true);
        try {
            if (saved) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$d3d7cc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["unsaveJob"])(jobId);
                setSaved(false);
            } else {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$2be7fd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveJob"])(jobId);
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ec3a2b6f._.js.map