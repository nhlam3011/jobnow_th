"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";
import Avatar from "./Avatar";
import { useTheme } from "./ThemeProvider";
import {
    ComputerDesktopIcon,
    BuildingLibraryIcon,
    ShoppingBagIcon,
    SpeakerWaveIcon,
    UsersIcon,
    ChartBarIcon,
    BuildingStorefrontIcon,
    WrenchScrewdriverIcon,
    BuildingOffice2Icon,
    HeartIcon,
    HomeModernIcon,
    AcademicCapIcon,
    PaintBrushIcon,
    ScaleIcon,
    TruckIcon,
    BriefcaseIcon,
    DocumentTextIcon,
    SparklesIcon,
    BuildingOfficeIcon,
    CalculatorIcon,
    LightBulbIcon,
    BookOpenIcon,
    ChevronRightIcon,
    ClipboardIcon,
} from "@heroicons/react/24/outline";

interface Industry {
    name: string;
    slug: string;
}

interface NavbarProps {
    industries?: Industry[];
}

const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
    "cong-nghe-thong-tin": ComputerDesktopIcon,
    "tai-chinh-ngan-hang": BuildingLibraryIcon,
    "thuong-mai-dien-tu": ShoppingBagIcon,
    "marketing-truyen-thong": SpeakerWaveIcon,
    "nhan-su": UsersIcon,
    "ke-toan-tai-chinh": ChartBarIcon,
    "ban-le-dich-vu": BuildingStorefrontIcon,
    "san-xuat-che-bien": WrenchScrewdriverIcon,
    "xay-dung": BuildingOffice2Icon,
    "y-te-cham-soc-suc-khoe": HeartIcon,
    "du-lich-khach-san": HomeModernIcon,
    "gd-dao-tao": AcademicCapIcon,
    "kien-truc-thiet-ke": PaintBrushIcon,
    "phap-luat": ScaleIcon,
    "van-tai-logistics": TruckIcon,
};

const DEFAULT_INDUSTRIES = [
    { name: "Công nghệ Thông tin", slug: "cong-nghe-thong-tin" },
    { name: "Tài chính - Ngân hàng", slug: "tai-chinh-ngan-hang" },
    { name: "Thương mại điện tử", slug: "thuong-mai-dien-tu" },
    { name: "Marketing - Truyền thông", slug: "marketing-truyen-thong" },
    { name: "Nhân sự", slug: "nhan-su" },
    { name: "Kế toán - Tài chính", slug: "ke-toan-tai-chinh" },
    { name: "Bán lẻ - Dịch vụ", slug: "ban-le-dich-vu" },
    { name: "Sản xuất - Chế biến", slug: "san-xuat-che-bien" },
    { name: "Xây dựng", slug: "xay-dung" },
    { name: "Y tế - Chăm sóc sức khỏe", slug: "y-te-cham-soc-suc-khoe" },
    { name: "Du lịch - Khách sạn", slug: "du-lich-khach-san" },
    { name: "Giáo dục - Đào tạo", slug: "gd-dao-tao" },
    { name: "Kiến trúc - Thiết kế", slug: "kien-truc-thiet-ke" },
    { name: "Pháp lý", slug: "phap-luat" },
    { name: "Vận tải - Logistics", slug: "van-tai-logistics" },
];

export default function Navbar({ industries }: NavbarProps) {
    const { data: session, status } = useSession();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isJobsActive = pathname?.startsWith('/jobs') || pathname?.startsWith('/companies') || pathname?.startsWith('/candidate/saved') || pathname?.startsWith('/candidate/applications') || pathname?.startsWith('/candidate/recommended');
    const isCvActive = pathname?.startsWith('/candidate/resume') || pathname?.startsWith('/candidate/cv-builder') || pathname?.startsWith('/blogs/cv-guide');
    const isToolsActive = pathname?.startsWith('/tools');
    const isBlogActive = pathname?.startsWith('/blogs') && !pathname?.startsWith('/blogs/cv-guide');
    const isMarketInsightsActive = pathname?.startsWith('/market-insights');
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [companyLogo, setCompanyLogo] = useState<string | null>(null);
    const [companyName, setCompanyName] = useState<string | null>(null);

    // Fetch company info for employers
    useEffect(() => {
        if (session?.user?.role === "EMPLOYER") {
            fetch("/api/employer/company-info")
                .then(res => res.ok ? res.json() : null)
                .then(data => {
                    if (data?.logo) setCompanyLogo(data.logo);
                    if (data?.name) setCompanyName(data.name);
                })
                .catch(() => { });
        }
    }, [session]);

    const industryList = industries && industries.length > 0 ? industries : DEFAULT_INDUSTRIES;
    const isLoggedIn = status === "authenticated";

    // For employer, show company logo; otherwise show user avatar
    const displayImage = session?.user?.role === "EMPLOYER" ? (companyLogo || session.user.image) : session?.user?.image;
    const displayName = session?.user?.role === "EMPLOYER" ? (companyName || session.user.name) : session?.user?.name;

    const getDashboardLink = () => {
        if (!session?.user?.role) return "/login";
        switch (session.user.role) {
            case "CANDIDATE": return "/candidate/dashboard";
            case "EMPLOYER": return "/employer/dashboard";
            case "ADMIN": return "/admin/dashboard";
            default: return "/login";
        }
    };

    // Check if user is CANDIDATE
    const isCandidate = session?.user?.role === "CANDIDATE";

    const handleMouseEnter = (dropdown: string) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setActiveDropdown(dropdown);
    };

    const handleMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 200); // 200ms delay before closing
    };

    return (
        <nav
            style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                background: "var(--navbar-bg)",
                backdropFilter: "blur(12px)",
                borderBottom: "1.5px solid var(--border)",
            }}
        >
            <div className="container-xl" style={{ display: "flex", alignItems: "center", height: "68px", gap: "2rem" }}>
                {/* Logo */}
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
                    {mounted && (
                        <img
                            src={theme === "dark" ? "/assets/logo_dark.png" : "/assets/logo_light.png"}
                            alt="JobNow Logo"
                            style={{ height: "20px", width: "auto" }}
                        />
                    )}
                    {!mounted && (
                        <div style={{ width: "120px", height: "40px" }} /> // Placeholder
                    )}
                </Link>

                {/* Nav links – desktop */}
                <div style={{ display: "flex", gap: "0.25rem", marginLeft: "0.5rem", flex: 1 }} className="nav-links">
                    {/* Jobs Dropdown - 2 Columns */}
                    <div
                        style={{ position: "relative" }}
                        onMouseEnter={() => handleMouseEnter("jobs")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            href="/jobs"
                            style={{
                                padding: "0.5rem 0.875rem",
                                borderRadius: "6px",
                                fontSize: "0.9375rem",
                                fontWeight: 500,
                                color: (activeDropdown === "jobs" || isJobsActive) ? "var(--primary)" : "var(--text-muted)",
                                textDecoration: "none",
                                transition: "color 180ms, background 180ms",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.375rem",
                            }}
                        >
                            Việc làm
                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>

                        {activeDropdown === "jobs" && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    paddingTop: "0.5rem", // Bridge the gap
                                    background: "transparent",
                                    zIndex: 1000,
                                }}
                                onMouseEnter={() => handleMouseEnter("jobs")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div
                                    style={{
                                        background: "var(--bg-card)",
                                        border: "1.5px solid var(--border)",
                                        borderRadius: "12px",
                                        boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                        padding: "0.75rem",
                                        width: "700px",
                                    }}
                                >
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                        {/* Left Column - Menu Links */}
                                        <div style={{ borderRight: "1px solid var(--border)", paddingRight: "1rem" }}>
                                            <Link href="/jobs" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", marginBottom: "0.25rem" }}
                                            >
                                                <BriefcaseIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                                <div>
                                                    <div style={{ fontWeight: 600 }}>Tìm việc làm</div>
                                                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Tìm kiếm việc làm mới</div>
                                                </div>
                                            </Link>
                                            {isCandidate && (
                                                <>
                                                    <Link href="/candidate/saved" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", marginBottom: "0.25rem" }}
                                                    >
                                                        <HeartIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                                        <div>
                                                            <div style={{ fontWeight: 600 }}>Việc đã lưu</div>
                                                            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Việc đã lưu theo dõi</div>
                                                        </div>
                                                    </Link>
                                                    <Link href="/candidate/applications" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", marginBottom: "0.25rem" }}
                                                    >
                                                        <DocumentTextIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                                        <div>
                                                            <div style={{ fontWeight: 600 }}>Việc đã ứng tuyển</div>
                                                            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Theo dõi đơn ứng tuyển</div>
                                                        </div>
                                                    </Link>
                                                    <Link href="/candidate/recommended" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", marginBottom: "0.25rem" }}
                                                    >
                                                        <SparklesIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                                        <div>
                                                            <div style={{ fontWeight: 600 }}>Việc làm phù hợp</div>
                                                            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Gợi ý việc cho bạn</div>
                                                        </div>
                                                    </Link>
                                                </>
                                            )}
                                            <Link href="/companies" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)" }}
                                            >
                                                <BuildingOfficeIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                                <div>
                                                    <div style={{ fontWeight: 600 }}>Danh sách công ty</div>
                                                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Khám phá công ty</div>
                                                </div>
                                            </Link>
                                        </div>

                                        {/* Right Column - Industries */}
                                        <div>
                                            <div style={{ padding: "0.5rem 0.75rem", marginBottom: "0.5rem" }}>
                                                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                                    Ngành nghề
                                                </span>
                                            </div>
                                            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.125rem", maxHeight: "280px", overflowY: "auto" }}>
                                                {industryList.map((industry) => {
                                                    const IconComponent = INDUSTRY_ICONS[industry.slug] || BriefcaseIcon;
                                                    return (
                                                        <Link
                                                            key={industry.slug}
                                                            href={`/jobs?industry=${industry.slug}`}
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "0.5rem",
                                                                padding: "0.4rem 0.75rem",
                                                                borderRadius: "6px",
                                                                textDecoration: "none",
                                                                color: "var(--text)",
                                                                fontSize: "0.875rem",
                                                            }}
                                                        >
                                                            <span style={{ color: "var(--primary)", flexShrink: 0, display: "flex" }}>
                                                                <IconComponent className="w-4 h-4" />
                                                            </span>
                                                            {industry.name}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* CV Dropdown */}
                    <div
                        style={{ position: "relative" }}
                        onMouseEnter={() => handleMouseEnter("cv")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            style={{
                                padding: "0.5rem 0.875rem",
                                borderRadius: "6px",
                                fontSize: "0.9375rem",
                                fontWeight: 500,
                                color: (activeDropdown === "cv" || isCvActive) ? "var(--primary)" : "var(--text-muted)",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.375rem",
                            }}
                        >
                            Tạo CV
                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>

                        {activeDropdown === "cv" && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    paddingTop: "0.5rem", // Bridge the gap
                                    background: "transparent",
                                    zIndex: 1000,
                                }}
                                onMouseEnter={() => handleMouseEnter("cv")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div
                                    style={{
                                        background: "var(--bg-card)",
                                        border: "1.5px solid var(--border)",
                                        borderRadius: "12px",
                                        boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                        padding: "0.5rem",
                                        minWidth: "260px",
                                    }}
                                >
                                    <>
                                        {isCandidate && (
                                            <>
                                                <Link href="/candidate/resume" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", marginBottom: "0.25rem" }}>
                                                    <DocumentTextIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                                    <div><div style={{ fontWeight: 600 }}>Quản lý CV</div><div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Xem và tải CV của bạn</div></div>
                                                </Link>
                                                <Link href="/candidate/cv-builder" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", marginBottom: "0.25rem" }}>
                                                    <SparklesIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                                    <div><div style={{ fontWeight: 600 }}>Tạo CV mới</div><div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Tạo CV chuyên nghiệp</div></div>
                                                </Link>
                                            </>
                                        )}
                                        <Link href="/blogs/cv-guide" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)" }}>
                                            <BookOpenIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                            <div><div style={{ fontWeight: 600 }}>Hướng dẫn viết CV</div><div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Mẹo viết CV ấn tượng</div></div>
                                        </Link>
                                    </>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Tools Dropdown */}
                    <div
                        style={{ position: "relative" }}
                        onMouseEnter={() => handleMouseEnter("tools")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            style={{
                                padding: "0.5rem 0.875rem",
                                borderRadius: "6px",
                                fontSize: "0.9375rem",
                                fontWeight: 500,
                                color: (activeDropdown === "tools" || isToolsActive) ? "var(--primary)" : "var(--text-muted)",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.375rem",
                            }}
                        >
                            Công cụ
                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>

                        {activeDropdown === "tools" && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    paddingTop: "0.5rem", // Bridge the gap
                                    background: "transparent",
                                    zIndex: 1000,
                                }}
                                onMouseEnter={() => handleMouseEnter("tools")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div
                                    style={{
                                        background: "var(--bg-card)",
                                        border: "1.5px solid var(--border)",
                                        borderRadius: "12px",
                                        boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                        padding: "0.5rem",
                                        minWidth: "260px",
                                    }}
                                >
                                    <Link href="/tools/career-path" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", marginBottom: "0.25rem" }}>
                                        <ChartBarIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                        <div><div style={{ fontWeight: 600 }}>Lộ trình sự nghiệp</div><div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Định hướng nghề nghiệp AI</div></div>
                                    </Link>
                                    <Link href="/tools/salary-calculator" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", marginBottom: "0.25rem" }}>
                                        <CalculatorIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                        <div><div style={{ fontWeight: 600 }}>Tính lương</div><div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Tính lương Net/Gross</div></div>
                                    </Link>
                                    <Link href="/tools/cv-checker" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", marginBottom: "0.25rem" }}>
                                        <ClipboardIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                        <div><div style={{ fontWeight: 600 }}>Kiểm tra CV</div><div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Chấm điểm CV của bạn</div></div>
                                    </Link>
                                    <Link href="/tools/interview-tips" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)" }}>
                                        <LightBulbIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                        <div><div style={{ fontWeight: 600 }}>Mẹo phỏng vấn</div><div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Chuẩn bị phỏng vấn</div></div>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Blog Dropdown */}
                    <div
                        style={{ position: "relative" }}
                        onMouseEnter={() => handleMouseEnter("blog")}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            style={{
                                padding: "0.5rem 0.875rem",
                                borderRadius: "6px",
                                fontSize: "0.9375rem",
                                fontWeight: 500,
                                color: (activeDropdown === "blog" || isBlogActive) ? "var(--primary)" : "var(--text-muted)",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.375rem",
                            }}
                        >
                            Cẩm nang
                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>

                        {activeDropdown === "blog" && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    paddingTop: "0.5rem", // Bridge the gap
                                    background: "transparent",
                                    zIndex: 1000,
                                }}
                                onMouseEnter={() => handleMouseEnter("blog")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div
                                    style={{
                                        background: "var(--bg-card)",
                                        border: "1.5px solid var(--border)",
                                        borderRadius: "12px",
                                        boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                                        padding: "0.5rem",
                                        minWidth: "260px",
                                    }}
                                >
                                    <Link href="/blogs" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", marginBottom: "0.25rem" }}>
                                        <BookOpenIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                        <div><div style={{ fontWeight: 600 }}>Tất cả bài viết</div><div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Tin tức và xu hướng</div></div>
                                    </Link>
                                    <Link href="/blogs/career" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", marginBottom: "0.25rem" }}>
                                        <ChevronRightIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                        <div><div style={{ fontWeight: 600 }}>Phát triển sự nghiệp</div><div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Lời khuyên nghề nghiệp</div></div>
                                    </Link>
                                    <Link href="/blogs/interview" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", marginBottom: "0.25rem" }}>
                                        <ChevronRightIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                        <div><div style={{ fontWeight: 600 }}>Hướng dẫn phỏng vấn</div><div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Kinh nghiệm phỏng vấn</div></div>
                                    </Link>
                                    <Link href="/blogs/salary" style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)" }}>
                                        <ChevronRightIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                        <div><div style={{ fontWeight: 600 }}>Bảng lương</div><div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>Lương ngành nghề</div></div>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Market Insights - Direct Link */}
                    <Link
                        href="/market-insights"
                        style={{
                            padding: "0.5rem 0.875rem",
                            borderRadius: "6px",
                            fontSize: "0.9375rem",
                            fontWeight: 500,
                            color: isMarketInsightsActive ? "var(--primary)" : "var(--text-muted)",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.375rem",
                            transition: "color 180ms",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Thị trường
                    </Link>
                </div>

                {/* Desktop CTA (Logged Out Only) */}
                {!isLoggedIn && (
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }} className="nav-cta">
                        <Link href="/login" className="btn-outline" style={{ padding: "0.5rem 1.125rem", fontSize: "0.9rem" }}>Đăng nhập</Link>
                        <Link href="/register" className="btn-primary" style={{ padding: "0.5rem 1.125rem", fontSize: "0.9rem" }}>Đăng ký</Link>
                    </div>
                )}

                {/* Right controls (Theme, User Avatar, Hamburger) */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginLeft: "auto" }}>
                    <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <ThemeToggle />

                        {/* User Avatar */}
                        {isLoggedIn && (
                            <div style={{ position: "relative" }} onMouseEnter={() => handleMouseEnter("user")} onMouseLeave={handleMouseLeave}>
                                <div
                                    onClick={() => setActiveDropdown(activeDropdown === "user" ? null : "user")}
                                    style={{ display: "block", width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden", cursor: "pointer", background: "var(--bg-card)", flexShrink: 0 }}
                                >
                                    <Avatar
                                        src={displayImage}
                                        alt={displayName || "User"}
                                        fallback={displayName}
                                        size={40}
                                    />
                                </div>

                                {/* Dropdown Menu */}
                                {activeDropdown === "user" && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "100%",
                                            right: 0,
                                            paddingTop: "0.5rem",
                                            zIndex: 1000,
                                        }}
                                    >
                                        <div style={{ background: "var(--bg-card)", border: "1.5px solid var(--border)", borderRadius: "12px", boxShadow: "0 10px 40px rgba(0,0,0,0.12)", padding: "0.5rem", minWidth: "220px" }}>
                                            <div style={{ padding: "0.5rem 0.75rem", borderBottom: "1px solid var(--border)", marginBottom: "0.5rem" }}>
                                                <div style={{ fontWeight: 600, color: "var(--text)" }}>{displayName || "Người dùng"}</div>
                                                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", wordBreak: "break-all" }}>{session?.user?.email}</div>
                                            </div>
                                            <Link href={getDashboardLink()} onClick={() => setActiveDropdown(null)} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", marginBottom: "0.25rem", transition: "background 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "var(--tag-bg)" }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}>
                                                <ComputerDesktopIcon className="w-5 h-5" style={{ color: "var(--text-muted)" }} />
                                                <span>Dashboard</span>
                                            </Link>
                                            <button onClick={() => signOut({ callbackUrl: "/" })} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--danger, #EF4444)", background: "transparent", border: "none", width: "100%", cursor: "pointer", textAlign: "left", fontSize: "0.9375rem", transition: "background 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "var(--tag-bg)" }} onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}>
                                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                                <span>Đăng xuất</span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "0.5rem", color: "var(--text)" }} className="nav-hamburger" aria-label="Mở menu">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
            </div>

            {open && (
                <div style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "0.75rem 1rem 1rem", maxHeight: "calc(100vh - 68px)", overflowY: "auto" }} className="nav-mobile-menu">
                    {/* Việc làm Accordion */}
                    <div style={{ borderBottom: "1px solid var(--border)" }}>
                        <button
                            onClick={() => setActiveDropdown(activeDropdown === "m-jobs" ? null : "m-jobs")}
                            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "0.875rem 0.5rem", background: "none", border: "none", cursor: "pointer", color: isJobsActive ? "var(--primary)" : "var(--text)", fontWeight: 600, fontSize: "0.9375rem" }}
                        >
                            Việc làm
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ transition: "transform 200ms", transform: activeDropdown === "m-jobs" ? "rotate(180deg)" : "rotate(0)" }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === "m-jobs" && (
                            <div style={{ paddingBottom: "0.5rem" }}>
                                <Link href="/jobs" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                    <BriefcaseIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                    Tìm việc làm
                                </Link>
                                {isCandidate && (
                                    <>
                                        <Link href="/candidate/saved" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                            <HeartIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                            Việc đã lưu
                                        </Link>
                                        <Link href="/candidate/applications" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                            <DocumentTextIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                            Việc đã ứng tuyển
                                        </Link>
                                        <Link href="/candidate/recommended" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                            <SparklesIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                            Việc làm phù hợp
                                        </Link>
                                    </>
                                )}
                                <Link href="/companies" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                    <BuildingOfficeIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                    Danh sách công ty
                                </Link>
                                {/* Ngành nghề */}
                                <div style={{ padding: "0.5rem 0.75rem 0.25rem", marginTop: "0.25rem" }}>
                                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Ngành nghề</span>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.125rem" }}>
                                    {industryList.map((industry) => {
                                        const IconComponent = INDUSTRY_ICONS[industry.slug] || BriefcaseIcon;
                                        return (
                                            <Link key={industry.slug} href={`/jobs?industry=${industry.slug}`} onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.375rem", padding: "0.375rem 0.75rem", borderRadius: "6px", textDecoration: "none", color: "var(--text)", fontSize: "0.8125rem" }}>
                                                <span style={{ color: "var(--primary)", flexShrink: 0, display: "flex" }}><IconComponent className="w-3.5 h-3.5" /></span>
                                                {industry.name}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Tạo CV Accordion */}
                    <div style={{ borderBottom: "1px solid var(--border)" }}>
                        <button
                            onClick={() => setActiveDropdown(activeDropdown === "m-cv" ? null : "m-cv")}
                            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "0.875rem 0.5rem", background: "none", border: "none", cursor: "pointer", color: isCvActive ? "var(--primary)" : "var(--text)", fontWeight: 600, fontSize: "0.9375rem" }}
                        >
                            Tạo CV
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ transition: "transform 200ms", transform: activeDropdown === "m-cv" ? "rotate(180deg)" : "rotate(0)" }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === "m-cv" && (
                            <div style={{ paddingBottom: "0.5rem" }}>
                                {isCandidate && (
                                    <>
                                        <Link href="/candidate/resume" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                            <DocumentTextIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                            Quản lý CV
                                        </Link>
                                        <Link href="/candidate/cv-builder" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                            <SparklesIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                            Tạo CV mới
                                        </Link>
                                    </>
                                )}
                                <Link href="/blogs/cv-guide" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                    <BookOpenIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                    Hướng dẫn viết CV
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Công cụ Accordion */}
                    <div style={{ borderBottom: "1px solid var(--border)" }}>
                        <button
                            onClick={() => setActiveDropdown(activeDropdown === "m-tools" ? null : "m-tools")}
                            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "0.875rem 0.5rem", background: "none", border: "none", cursor: "pointer", color: isToolsActive ? "var(--primary)" : "var(--text)", fontWeight: 600, fontSize: "0.9375rem" }}
                        >
                            Công cụ
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ transition: "transform 200ms", transform: activeDropdown === "m-tools" ? "rotate(180deg)" : "rotate(0)" }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === "m-tools" && (
                            <div style={{ paddingBottom: "0.5rem" }}>
                                <Link href="/tools/career-path" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                    <ChartBarIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                    Lộ trình sự nghiệp
                                </Link>
                                <Link href="/tools/salary-calculator" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                    <CalculatorIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                    Tính lương
                                </Link>
                                <Link href="/tools/cv-checker" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                    <ClipboardIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                    Kiểm tra CV
                                </Link>
                                <Link href="/tools/interview-tips" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                    <LightBulbIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                    Mẹo phỏng vấn
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Cẩm nang Accordion */}
                    <div style={{ borderBottom: "1px solid var(--border)" }}>
                        <button
                            onClick={() => setActiveDropdown(activeDropdown === "m-blog" ? null : "m-blog")}
                            style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "0.875rem 0.5rem", background: "none", border: "none", cursor: "pointer", color: isBlogActive ? "var(--primary)" : "var(--text)", fontWeight: 600, fontSize: "0.9375rem" }}
                        >
                            Cẩm nang
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ transition: "transform 200ms", transform: activeDropdown === "m-blog" ? "rotate(180deg)" : "rotate(0)" }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {activeDropdown === "m-blog" && (
                            <div style={{ paddingBottom: "0.5rem" }}>
                                <Link href="/blogs" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                    <BookOpenIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                    Tất cả bài viết
                                </Link>
                                <Link href="/blogs/career" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                    <ChevronRightIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                    Phát triển sự nghiệp
                                </Link>
                                <Link href="/blogs/interview" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                    <ChevronRightIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                    Hướng dẫn phỏng vấn
                                </Link>
                                <Link href="/blogs/salary" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", fontSize: "0.875rem" }}>
                                    <ChevronRightIcon className="w-4 h-4" style={{ color: "var(--primary)", flexShrink: 0 }} />
                                    Bảng lương
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Thị trường - Direct Link (Mobile) */}
                    <Link
                        href="/market-insights"
                        onClick={() => setOpen(false)}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.625rem",
                            padding: "0.875rem 0.5rem",
                            borderBottom: "1px solid var(--border)",
                            textDecoration: "none",
                            color: isMarketInsightsActive ? "var(--primary)" : "var(--text)",
                            fontWeight: 600,
                            fontSize: "0.9375rem",
                        }}
                    >
                        Thị trường
                    </Link>

                    {/* Theme Toggle (Mobile) */}
                    <div style={{ padding: "0.875rem 0.5rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{ fontWeight: 600, fontSize: "0.9375rem", color: "var(--text)" }}>Giao diện Sáng / Tối</span>
                        <ThemeToggle />
                    </div>

                    {/* User Profile (Mobile) */}
                    {isLoggedIn && (
                        <div style={{ padding: "1rem 0.5rem", borderBottom: "1px solid var(--border)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                                <div style={{ display: "block", width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden", background: "var(--bg-card)", flexShrink: 0 }}>
                                    {session?.user?.image ? (
                                        <img src={session.user.image} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    ) : (
                                        <div style={{ width: "100%", height: "100%", background: "var(--primary-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "bold", fontSize: "1.1rem" }}>
                                            {session?.user?.name?.charAt(0)?.toUpperCase() || "U"}
                                        </div>
                                    )}
                                </div>
                                <div style={{ overflow: "hidden" }}>
                                    <div style={{ fontWeight: 600, color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{displayName || "Người dùng"}</div>
                                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{session?.user?.email}</div>
                                </div>
                            </div>

                            <Link href={getDashboardLink()} onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--text)", marginBottom: "0.25rem", background: "var(--tag-bg)" }}>
                                <ComputerDesktopIcon className="w-5 h-5" style={{ color: "var(--text-muted)" }} />
                                <span style={{ fontWeight: 500 }}>Dashboard</span>
                            </Link>
                            <button onClick={() => signOut({ callbackUrl: "/" })} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 0.75rem", borderRadius: "8px", textDecoration: "none", color: "var(--danger, #EF4444)", background: "transparent", border: "none", width: "100%", cursor: "pointer", textAlign: "left", fontSize: "0.9375rem" }}>
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                <span style={{ fontWeight: 500 }}>Đăng xuất</span>
                            </button>
                        </div>
                    )}

                    {/* CTA buttons */}
                    {!isLoggedIn && (
                        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
                            <Link href="/login" onClick={() => setOpen(false)} className="btn-outline" style={{ flex: 1, justifyContent: "center" }}>Đăng nhập</Link>
                            <Link href="/register" onClick={() => setOpen(false)} className="btn-primary" style={{ flex: 1, justifyContent: "center" }}>Đăng ký</Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}
