"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { logoutUser } from "@/app/actions/auth";
import { useTheme } from "./ThemeProvider";
import Avatar from "./Avatar";
import "@/app/dashboard.css";

interface NavItem {
    href: string;
    label: string;
    icon: string;
}

const roleNavs: Record<string, { section?: string; items: NavItem[] }[]> = {
    CANDIDATE: [
        {
            section: "Tổng quan",
            items: [
                { href: "/candidate/dashboard", label: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6" },
            ],
        },
        {
            section: "Hồ sơ & CV",
            items: [
                { href: "/candidate/profile", label: "Hồ sơ của tôi", icon: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" },
                { href: "/candidate/resume", label: "Quản lý CV", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" },
            ],
        },
        {
            section: "Việc làm",
            items: [
                { href: "/candidate/applications", label: "Đơn ứng tuyển", icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" },
                { href: "/candidate/saved", label: "Việc đã lưu", icon: "M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-7-3.5L5 21V5z" },
                { href: "/candidate/mock-interview", label: "Phỏng vấn AI", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
                { href: "/jobs", label: "Tìm việc làm", icon: "M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" },
            ],
        },
        {
            section: "Tài khoản",
            items: [
                { href: "/candidate/notifications", label: "Thông báo", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
                { href: "/candidate/settings", label: "Cài đặt", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
            ],
        },
    ],
    EMPLOYER: [
        {
            section: "Tổng quan",
            items: [
                { href: "/employer/dashboard", label: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6" },
            ],
        },
        {
            section: "Tuyển dụng",
            items: [
                { href: "/employer/jobs/new", label: "Đăng tin mới", icon: "M12 4v16m8-8H4" },
                { href: "/employer/jobs", label: "Quản lý tin đăng", icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" },
            ],
        },
        {
            section: "Công ty",
            items: [
                { href: "/employer/company", label: "Trang công ty", icon: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4" },
            ],
        },
        {
            section: "Tài khoản",
            items: [
                { href: "/employer/notifications", label: "Thông báo", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
                { href: "/employer/settings", label: "Cài đặt", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
            ],
        },
    ],
    ADMIN: [
        {
            section: "Tổng quan",
            items: [
                { href: "/admin/dashboard", label: "Dashboard", icon: "M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" },
            ],
        },
        {
            section: "Quản lý nội dung",
            items: [
                { href: "/admin/jobs", label: "Duyệt tin tuyển dụng", icon: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" },
                { href: "/admin/blogs", label: "Quản lý bài viết", icon: "M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 8h10M7 12h10M7 16h10" },
                { href: "/admin/cv-templates", label: "Mẫu CV", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z" },
                { href: "/admin/companies", label: "Quản lý công ty", icon: "M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16" },
            ],
        },
        {
            section: "Quản lý người dùng",
            items: [
                { href: "/admin/users", label: "Người dùng", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
                { href: "/admin/employers", label: "Nhà tuyển dụng", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
            ],
        },
        {
            section: "Hệ thống",
            items: [
                { href: "/admin/keywords", label: "Từ khoá tìm kiếm", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
                { href: "/admin/settings", label: "Cài đặt", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
            ],
        },
    ],
};

const roleLabel: Record<string, string> = {
    CANDIDATE: "Ứng viên",
    EMPLOYER: "Nhà tuyển dụng",
    ADMIN: "Quản trị viên",
};

const roleColor: Record<string, string> = {
    CANDIDATE: "#0369A1",
    EMPLOYER: "#22C55E",
    ADMIN: "#A855F7",
};

export default function DashboardLayout({
    children,
    role,
    userName,
    userImage,
}: {
    children: React.ReactNode;
    role: string;
    userName: string;
    userImage?: string | null;
}) {
    const { data: sessionData } = useSession();
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const navSections = roleNavs[role] || [];
    const color = roleColor[role] || "#0369A1";

    // Use session data if available, fallback to props
    const displayName = sessionData?.user?.name || userName;
    const [displayImage, setDisplayImage] = useState(sessionData?.user?.image || userImage);

    useEffect(() => {
        if (role === "EMPLOYER") {
            fetch("/api/employer/company")
                .then(res => res.json())
                .then(data => {
                    if (data?.logo) {
                        setDisplayImage(data.logo);
                    }
                })
                .catch(err => console.error("Error fetching company logo:", err));
        } else {
            setDisplayImage(sessionData?.user?.image || userImage);
        }
    }, [role, sessionData?.user?.image, userImage]);

    // Close sidebar on route change
    useEffect(() => {
        setSidebarOpen(false);
    }, [pathname]);

    // Close sidebar on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSidebarOpen(false);
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    // Prevent body scroll when sidebar is open on mobile
    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [sidebarOpen]);

    const closeSidebar = useCallback(() => setSidebarOpen(false), []);

    return (
        <div className="dash-layout">
            {/* Mobile Header */}
            <header className="dash-mobile-header">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <button
                        className="dash-hamburger"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-label="Toggle menu"
                    >
                        {sidebarOpen ? (
                            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.375rem", textDecoration: "none" }}>
                        {mounted && (
                            <img
                                src={theme === "dark" ? "/assets/logo_dark.png" : "/assets/logo_light.png"}
                                alt="JobNow Logo"
                                style={{ height: "25px", width: "auto" }}
                            />
                        )}
                        {!mounted && <div style={{ height: "32px", width: "80px" }} />}
                    </Link>
                </div>
            </header>

            {/* Overlay (mobile) */}
            <div
                className={`dash-overlay ${sidebarOpen ? "visible" : ""}`}
                onClick={closeSidebar}
            />

            {/* Sidebar */}
            <aside className={`dash-sidebar ${sidebarOpen ? "open" : ""}`}>
                {/* Header */}
                <div className="dash-sidebar-header">
                    <div className="dash-sidebar-top">
                        <Link href="/" className="dash-logo">
                            {mounted && (
                                <img
                                    src={theme === "dark" ? "/assets/logo_dark.png" : "/assets/logo_light.png"}
                                    alt="JobNow Logo"
                                    style={{ height: "25px", width: "auto" }}
                                />
                            )}
                            {!mounted && <div style={{ height: "32px", width: "80px" }} />}
                        </Link>
                        <button
                            className="dash-theme-toggle"
                            onClick={toggleTheme}
                            title={theme === "dark" ? "Chế độ sáng" : "Chế độ tối"}
                        >
                            {theme === "dark" ? (
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="5" /><path strokeLinecap="round" d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                </svg>
                            ) : (
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="dash-user-info">
                        <Avatar
                            src={displayImage}
                            alt={displayName || "User"}
                            fallback={displayName}
                            size={48}
                            style={{
                                borderRadius: "12px",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                            }}
                        />
                        <div>
                            <div className="dash-user-name">{displayName}</div>
                            <div
                                className="dash-user-role"
                                style={{ background: `${color}15`, color }}
                            >
                                {roleLabel[role]}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="dash-nav">
                    {navSections.map((section, sIdx) => (
                        <div key={sIdx}>
                            {section.section && (
                                <div className="dash-nav-section">{section.section}</div>
                            )}
                            {section.items.map((item) => {
                                // "Đăng tin mới" is "/employer/jobs/new". "Quản lý tin đăng" is "/employer/jobs".
                                // If we just do startsWith("/employer/jobs"), it matches both when on "/employer/jobs/new"
                                // Better check: exact match OR it's a sub-page of this item (but exclude if the item is just a parent prefix of another exact item)
                                const isExact = pathname === item.href;
                                const isSubPath = pathname.startsWith(item.href + "/") && item.href !== "/employer/jobs"; // special case for employer jobs overlapping with new
                                const active = isExact || isSubPath;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`dash-nav-link ${active ? "active" : ""}`}
                                        onClick={closeSidebar}
                                    >
                                        <svg className="dash-nav-icon" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                        </svg>
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    ))}
                </nav>

                {/* Footer */}
                <div className="dash-sidebar-footer">

                    <form action={logoutUser}>
                        <button type="submit" className="dash-logout-btn">
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1" />
                            </svg>
                            Đăng xuất
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Content */}
            <main className="dash-main">
                <div className="dash-content">
                    {children}
                </div>
            </main>
        </div>
    );
}
