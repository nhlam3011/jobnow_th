"use client";
import Link from "next/link";
import { useState } from "react";

const FOOTER_LINKS = [
    {
        title: "Ứng viên",
        links: [
            { label: "Tìm việc làm", href: "/jobs" },
            { label: "Tải CV lên", href: "/candidate/resume" },
            { label: "Tạo CV mới", href: "/candidate/cv-builder" },
            { label: "Việc đã lưu", href: "/candidate/saved" },
            { label: "Theo dõi ứng tuyển", href: "/candidate/applications" },
            { label: "Việc làm phù hợp", href: "/candidate/recommended" },
        ],
    },
    {
        title: "Nhà tuyển dụng",
        links: [
            { label: "Đăng tin tuyển dụng", href: "/employer/jobs/new" },
            { label: "Quản lý tin", href: "/employer/jobs" },
            { label: "Trang thương hiệu", href: "/employer/company" },
            { label: "Dashboard", href: "/employer/dashboard" },
        ],
    },
    {
        title: "Ngành nghề",
        links: [
            { label: "Công nghệ Thông tin", href: "/jobs?industry=cong-nghe-thong-tin" },
            { label: "Tài chính - Ngân hàng", href: "/jobs?industry=tai-chinh-ngan-hang" },
            { label: "Marketing - Truyền thông", href: "/jobs?industry=marketing-truyen-thong" },
            { label: "Du lịch - Khách sạn", href: "/jobs?industry=du-lich-khach-san" },
            { label: "Xem tất cả ngành", href: "/jobs" },
        ],
    },
    {
        title: "Công cụ & Tài nguyên",
        links: [
            { label: "Tính lương", href: "/tools/salary-calculator" },
            { label: "Kiểm tra CV", href: "/tools/cv-checker" },
            { label: "Mẹo phỏng vấn", href: "/tools/interview-tips" },
            { label: "Cẩm nang nghề nghiệp", href: "/blogs" },
            { label: "Danh sách công ty", href: "/companies" },
        ],
    },
];

const SOCIALS = [
    {
        label: "Facebook",
        path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    },
    {
        label: "LinkedIn",
        path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    },
    {
        label: "YouTube",
        path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z",
    },
];

export default function Footer() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    return (
        <footer style={{
            background: "var(--bg-card)", borderTop: "1.5px solid var(--border)", marginTop: "auto",
        }}>
            <div className="container-xl" style={{ paddingTop: "3rem", paddingBottom: "2rem" }}>
                {/* Top section */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1.25fr repeat(4, 1fr)",
                    gap: "2.5rem",
                    marginBottom: "2.5rem",
                }} className="footer-grid">
                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.875rem" }}>
                            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                                <rect width="32" height="32" rx="8" fill="var(--primary)" />
                                <path d="M8 22V14l8-6 8 6v8" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
                                <rect x="12" y="18" width="8" height="8" rx="1" fill="#fff" />
                            </svg>
                            <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--text)" }}>
                                Job<span style={{ color: "var(--cta)" }}>Now</span>
                            </span>
                        </div>
                        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "240px", marginBottom: "1.25rem" }}>
                            Nền tảng tuyển dụng đa ngành nghề hàng đầu Việt Nam. Kết nối ứng viên với công ty uy tín.
                        </p>

                        {/* Social icons */}
                        <div style={{ display: "flex", gap: "0.625rem" }}>
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href="#"
                                    aria-label={s.label}
                                    style={{
                                        width: "36px", height: "36px", borderRadius: "8px",
                                        background: "var(--tag-bg)", display: "flex", alignItems: "center",
                                        justifyContent: "center", transition: "all 200ms", cursor: "pointer",
                                        border: "1px solid var(--border)",
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary-light)"; e.currentTarget.style.background = "var(--bg)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--tag-bg)"; }}
                                >
                                    <svg width="15" height="15" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" viewBox="0 0 24 24">
                                        <path d={s.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {FOOTER_LINKS.map((col) => (
                        <div key={col.title} className="footer-col">
                            <h4
                                className={`footer-col-title ${openSection === col.title ? 'open' : ''}`}
                                onClick={() => setOpenSection(openSection === col.title ? null : col.title)}
                            >
                                <span>{col.title}</span>
                                <span className="footer-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </span>
                            </h4>
                            <ul className={`footer-links-list ${openSection === col.title ? 'open' : ''}`}>
                                {col.links.map((l) => (
                                    <li key={l.label}>
                                        <Link href={l.href} style={{
                                            color: "var(--text-muted)", textDecoration: "none",
                                            fontSize: "0.875rem", transition: "color 180ms",
                                        }}
                                            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)"; }}
                                            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)"; }}
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
                    <div style={{
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        flexWrap: "wrap", gap: "0.75rem",
                    }}>
                        <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                            © {new Date().getFullYear()} JobNow. Nền tảng tuyển dụng đa ngành nghề hàng đầu Việt Nam.
                        </p>
                        <div style={{ display: "flex", gap: "1.5rem" }}>
                            {[
                                { label: "Điều khoản", href: "#" },
                                { label: "Bảo mật", href: "#" },
                                { label: "Liên hệ", href: "#" },
                            ].map((l) => (
                                <Link key={l.label} href={l.href} style={{
                                    fontSize: "0.8125rem", color: "var(--text-muted)",
                                    textDecoration: "none", transition: "color 180ms",
                                }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)"; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)"; }}
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive */}
            <style jsx>{`
        .footer-col-title {
            font-size: 0.8125rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: var(--text);
            margin-bottom: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: color 0.2s;
        }
        .footer-icon {
            display: none;
            color: var(--text-muted);
        }
        .footer-links-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .footer-col {
            border-bottom: 1px solid var(--border);
            padding-bottom: 0.5rem;
          }
          .footer-col:last-child {
            border-bottom: none;
          }
          .footer-col-title {
            margin-bottom: 0;
            cursor: pointer;
            padding: 0.75rem 0;
          }
          .footer-icon {
            display: block;
            transition: transform 0.2s;
          }
          .footer-col-title.open .footer-icon {
            transform: rotate(180deg);
            color: var(--primary);
          }
          .footer-col-title.open {
            color: var(--primary);
          }
          .footer-links-list {
            display: none;
            padding-top: 0.5rem;
            padding-bottom: 1rem;
          }
          .footer-links-list.open {
            display: flex;
            animation: slideDown 0.3s ease-out;
          }
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-5px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
      `}</style>
        </footer>
    );
}
