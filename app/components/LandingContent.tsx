"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SearchBar from "./SearchBar";
import JobCard from "./JobCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    ComputerDesktopIcon,
    BuildingLibraryIcon,
    ShoppingBagIcon,
    SpeakerWaveIcon,
    ChartBarIcon,
    HomeModernIcon,
    WrenchScrewdriverIcon,
    AcademicCapIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    UserGroupIcon,
    BriefcaseIcon,
    BuildingOfficeIcon,
    SparklesIcon,
    HeartIcon,
    DocumentTextIcon,
    ClipboardDocumentCheckIcon,
    ChatBubbleLeftRightIcon,
    ShieldCheckIcon,
    RocketLaunchIcon,
    PaintBrushIcon,
    ScaleIcon,
    TruckIcon,
} from "@heroicons/react/24/outline";

const INDUSTRY_ICONS: Record<string, React.ComponentType<{ style?: React.CSSProperties }>> = {
    "cong-nghe-thong-tin": ComputerDesktopIcon,
    "tai-chinh-ngan-hang": BuildingLibraryIcon,
    "thuong-mai-dien-tu": ShoppingBagIcon,
    "marketing-truyen-thong": SpeakerWaveIcon,
    "ke-toan-tai-chinh": ChartBarIcon,
    "du-lich-khach-san": HomeModernIcon,
    "san-xuat-che-bien": WrenchScrewdriverIcon,
    "gd-dao-tao": AcademicCapIcon,
    "y-te-cham-soc-suc-khoe": HeartIcon,
    "xay-dung": BuildingOfficeIcon,
    "nhan-su": UserGroupIcon,
    "ban-le-dich-vu": ShoppingBagIcon,
    "kien-truc-thiet-ke": PaintBrushIcon,
    "phap-luat": ScaleIcon,
    "van-tai-logistics": TruckIcon,
};

const HERO_WORDS = ["phù hợp", "mơ ước", "lý tưởng", "hoàn hảo"];

const STEPS = [
    { step: "01", title: "Tạo hồ sơ & tải CV", desc: "Đăng ký tài khoản, điền thông tin kỹ năng và tải CV của bạn lên hệ thống.", icon: ClipboardDocumentCheckIcon },
    { step: "02", title: "Tìm kiếm việc làm", desc: "Duyệt qua hàng nghìn công việc đa ngành nghề từ các công ty hàng đầu Việt Nam.", icon: BriefcaseIcon },
    { step: "03", title: "Ứng tuyển dễ dàng", desc: "Gửi hồ sơ ứng tuyển nhanh chóng và theo dõi trạng thái real-time.", icon: CheckCircleIcon },
];

const FEATURES = [
    { icon: SparklesIcon, title: "AI Matching thông minh", desc: "Hệ thống AI phân tích CV và gợi ý việc làm phù hợp nhất với kỹ năng của bạn." },
    { icon: ShieldCheckIcon, title: "Xác minh công ty", desc: "Tất cả công ty đều được xác minh, đảm bảo thông tin tuyển dụng đáng tin cậy." },
    { icon: RocketLaunchIcon, title: "Ứng tuyển 1 click", desc: "Ứng tuyển nhanh chóng chỉ với 1 click, CV tự động gửi đến nhà tuyển dụng." },
    { icon: ChatBubbleLeftRightIcon, title: "Thông báo real-time", desc: "Nhận thông báo ngay khi có cập nhật về đơn ứng tuyển của bạn." },
    { icon: DocumentTextIcon, title: "Tạo CV chuyên nghiệp", desc: "Công cụ tạo CV trực tuyến với nhiều mẫu đẹp, chuyên nghiệp." },
    { icon: ChartBarIcon, title: "Phân tích thị trường", desc: "Xem xu hướng lương, ngành nghề hot và cơ hội việc làm mới nhất." },
];

const TESTIMONIALS = [
    { name: "Nguyễn Thanh Hải", role: "Frontend Developer tại FPT Software", text: "Nhờ JobNow mình tìm được công việc phù hợp chỉ trong 2 tuần. Hệ thống gợi ý rất chính xác!" },
    { name: "Trần Minh Anh", role: "Marketing Manager tại Shopee", text: "Giao diện dễ dùng, thông tin tuyển dụng cập nhật liên tục. Rất hài lòng với JobNow." },
    { name: "Lê Hoàng Nam", role: "Data Analyst tại VNG", text: "AI matching giúp mình tiết kiệm rất nhiều thời gian tìm kiếm. Highly recommend!" },
];

interface LandingContentProps {
    featuredJobs: {
        id: string; title: string; slug: string; company: string;
        companyLogo: string | null; companySlug: string | null;
        location: string; salary: string; type: string;
        skills: string[]; posted: string; featured: boolean;
    }[];
    industries: { id: string; name: string; slug: string; count: number }[];
    companies: { name: string; slug: string; logo: string | null; jobCount: number }[];
    stats: { jobs: number; companies: number; candidates: number; industries: number };
    savedJobIds?: string[];
}

export default function LandingContent({ featuredJobs, industries, companies, stats, savedJobIds = [] }: LandingContentProps) {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % HERO_WORDS.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const formatNumber = (n: number) => {
        if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k+`;
        return `${n}+`;
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />

            <main style={{ flex: 1 }}>
                {/* ===== HERO ===== */}
                <section style={{
                    position: "relative",
                    padding: "clamp(4rem, 10vw, 7rem) 1rem clamp(5.5rem, 8vw, 7rem)",
                    background: "linear-gradient(145deg, #0C4A6E 0%, #0369A1 35%, #0284C7 65%, #047857 100%)",
                }}>
                    {/* Simple pattern overlay — lightweight */}
                    <div style={{
                        position: "absolute", inset: 0, opacity: 0.04,
                        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }} />

                    <div className="container-xl" style={{ zIndex: 2, textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
                        {/* Badge */}
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
                            borderRadius: "100px", padding: "0.5rem 1.25rem", marginBottom: "2rem",
                            fontSize: "0.875rem", fontWeight: 600, color: "#fff",
                        }}>
                            <svg width="16" height="16" fill="#FBBF24" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            Nền tảng tuyển dụng đa ngành nghề #1 Việt Nam
                        </div>

                        <h1 style={{
                            fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 800, color: "#fff",
                            marginBottom: "1.25rem", lineHeight: 1.15,
                        }}>
                            Tìm việc làm{" "}
                            <span key={wordIndex} style={{
                                display: "inline-block", color: "#FDE68A",
                                transition: "opacity 300ms",
                            }}>
                                {HERO_WORDS[wordIndex]}
                            </span>
                            <br />
                            với ngành nghề bạn mong muốn
                        </h1>

                        <p style={{
                            fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "rgba(255,255,255,0.85)",
                            maxWidth: "580px", margin: "0 auto 2.5rem", lineHeight: 1.7,
                        }}>
                            Kết nối ứng viên với hàng ngàn công ty đa ngành nghề — từ CNTT, Tài chính, Marketing, Du lịch đến Giáo dục và nhiều lĩnh vực khác.
                        </p>

                        {/* Search bar */}
                        <div style={{ maxWidth: "780px", margin: "0 auto 2rem" }}>
                            <SearchBar size="lg" />
                        </div>

                        {/* Popular searches */}
                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)" }}>Phổ biến:</span>
                            {["Frontend", "Kế toán", "Marketing", "Kinh doanh", "Du lịch"].map((t) => (
                                <Link key={t} href={`/jobs?q=${encodeURIComponent(t)}`} style={{
                                    textDecoration: "none", fontSize: "0.8125rem", padding: "0.3rem 0.875rem",
                                    background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: "100px",
                                    border: "1px solid rgba(255,255,255,0.18)", transition: "background 200ms",
                                }}>
                                    {t}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== STATS BAR ===== */}
                <section style={{ background: "var(--bg)", position: "relative", zIndex: 3, padding: "0" }}>
                    <div className="container-xl" style={{ maxWidth: "960px", margin: "0 auto", marginTop: "-2.5rem" }}>
                        <div style={{
                            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
                            background: "var(--bg-card)", borderRadius: "16px",
                            border: "1.5px solid var(--border)", boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
                            overflow: "hidden", position: "relative", zIndex: 1
                        }} className="stats-grid">
                            {[
                                { n: formatNumber(stats.jobs), l: "Việc làm", icon: BriefcaseIcon },
                                { n: formatNumber(stats.companies), l: "Công ty", icon: BuildingOfficeIcon },
                                { n: formatNumber(stats.candidates), l: "Ứng viên", icon: UserGroupIcon },
                                { n: `${stats.industries}+`, l: "Ngành nghề", icon: SparklesIcon },
                            ].map((s, i) => (
                                <div key={s.l} style={{
                                    padding: "1.5rem 1rem", textAlign: "center",
                                    borderRight: i < 3 ? "1px solid var(--border)" : "none",
                                    display: "flex", flexDirection: "column", alignItems: "center", gap: "0.375rem",
                                }}>
                                    <s.icon style={{ width: "22px", height: "22px", color: "var(--primary)", marginBottom: "0.25rem" }} />
                                    <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)", lineHeight: 1 }}>{s.n}</div>
                                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 500 }}>{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== INDUSTRIES ===== */}
                <section style={{ background: "var(--bg)", padding: "4rem 1rem 3.5rem" }}>
                    <div className="container-xl" style={{ textAlign: "center" }}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "0.375rem",
                            background: "var(--tag-bg)", borderRadius: "100px", padding: "0.375rem 1rem",
                            marginBottom: "0.75rem", fontSize: "0.8125rem", fontWeight: 700,
                            color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em",
                        }}>
                            <SparklesIcon style={{ width: "14px", height: "14px" }} />
                            Ngành nghề
                        </div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>
                            Khám phá việc làm theo ngành
                        </h2>
                        <p style={{ fontSize: "1rem", color: "var(--text-muted)", maxWidth: "500px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
                            Tìm cơ hội nghề nghiệp phù hợp với sở thích và kinh nghiệm
                        </p>

                        <div style={{
                            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                            gap: "0.875rem", maxWidth: "960px", margin: "0 auto",
                        }}>
                            {industries.slice(0, 6).map((industry) => {
                                const Icon = INDUSTRY_ICONS[industry.slug] || BriefcaseIcon;
                                return (
                                    <Link key={industry.slug} href={`/jobs?industry=${industry.slug}`} style={{ textDecoration: "none" }}>
                                        <div style={{
                                            padding: "1.25rem 0.875rem", textAlign: "center", background: "var(--bg-card)",
                                            border: "1.5px solid var(--border)", borderRadius: "14px",
                                            transition: "all 200ms ease", cursor: "pointer", height: "100%",
                                        }}
                                            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(3,105,161,0.12)"; e.currentTarget.style.borderColor = "var(--primary-light)"; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "var(--border)"; }}
                                        >
                                            <div style={{
                                                width: "48px", height: "48px", borderRadius: "12px",
                                                background: "var(--tag-bg)", display: "flex", alignItems: "center",
                                                justifyContent: "center", margin: "0 auto 0.625rem",
                                            }}>
                                                <Icon style={{ width: "22px", height: "22px", color: "var(--primary)" }} />
                                            </div>
                                            <h3 style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem", lineHeight: 1.3 }}>
                                                {industry.name}
                                            </h3>
                                            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>
                                                {industry.count} việc làm
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        <div style={{ marginTop: "2.5rem" }}>
                            <Link href="/jobs" style={{
                                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                                padding: "0.75rem 1.5rem", background: "var(--primary)", color: "#fff",
                                borderRadius: "8px", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none",
                                transition: "background 200ms"
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.background = "var(--primary-dark)"}
                                onMouseLeave={(e) => e.currentTarget.style.background = "var(--primary)"}
                            >
                                Xem tất cả ngành nghề <ArrowRightIcon style={{ width: "16px", height: "16px" }} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ===== FEATURED JOBS ===== */}
                <section style={{
                    background: "var(--bg-card)", padding: "3.5rem 1rem",
                    borderTop: "1.5px solid var(--border)", borderBottom: "1.5px solid var(--border)",
                }}>
                    <div className="container-xl">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", gap: "1rem", flexWrap: "wrap" }}>
                            <div>
                                <div style={{
                                    display: "inline-flex", alignItems: "center", gap: "0.375rem",
                                    background: "var(--tag-bg)", borderRadius: "100px", padding: "0.375rem 1rem",
                                    marginBottom: "0.75rem", fontSize: "0.8125rem", fontWeight: 700,
                                    color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em",
                                }}>
                                    <BriefcaseIcon style={{ width: "14px", height: "14px" }} />
                                    Mới nhất
                                </div>
                                <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 800, color: "var(--text)", margin: 0 }}>
                                    Việc làm hàng đầu
                                </h2>
                            </div>
                            <Link href="/jobs" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem", padding: "0.625rem 1.25rem" }}>
                                Xem tất cả <ArrowRightIcon style={{ width: "16px", height: "16px" }} />
                            </Link>
                        </div>

                        {featuredJobs.length > 0 ? (
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
                                {featuredJobs.map((job) => (
                                    <JobCard
                                        key={job.id}
                                        id={job.id}
                                        slug={job.slug}
                                        title={job.title}
                                        company={job.company}
                                        logo={job.companyLogo ?? undefined}
                                        location={job.location}
                                        salary={job.salary}
                                        type={job.type}
                                        skills={job.skills}
                                        posted={job.posted}
                                        featured={job.featured}
                                        saved={savedJobIds.includes(job.id)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>
                                <BriefcaseIcon style={{ width: "48px", height: "48px", margin: "0 auto 1rem", opacity: 0.4 }} />
                                <p>Chưa có việc làm nào. Hãy quay lại sau!</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* ===== HOW IT WORKS ===== */}
                <section style={{ background: "var(--bg)", padding: "4rem 1rem" }}>
                    <div className="container-xl" style={{ textAlign: "center" }}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "0.375rem",
                            background: "var(--tag-bg)", borderRadius: "100px", padding: "0.375rem 1rem",
                            marginBottom: "0.75rem", fontSize: "0.8125rem", fontWeight: 700,
                            color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em",
                        }}>
                            Quy trình
                        </div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>
                            Cách JobNow hoạt động
                        </h2>
                        <p style={{ fontSize: "1rem", color: "var(--text-muted)", maxWidth: "500px", margin: "0 auto 3rem", lineHeight: 1.7 }}>
                            Chỉ 3 bước đơn giản để tìm được việc làm mong muốn
                        </p>

                        <div style={{
                            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                            gap: "2rem", maxWidth: "960px", margin: "0 auto",
                        }}>
                            {STEPS.map((step, i) => (
                                <div key={step.step} style={{ position: "relative", padding: "0 0.5rem" }}>
                                    <div style={{
                                        width: "68px", height: "68px", borderRadius: "50%",
                                        background: i === 1 ? "linear-gradient(135deg, var(--primary), var(--secondary))" : "var(--bg-card)",
                                        border: i === 1 ? "none" : "2px solid var(--border)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        margin: "0 auto 1.25rem",
                                        boxShadow: i === 1 ? "0 6px 20px rgba(3,105,161,0.25)" : "var(--shadow-sm)",
                                    }}>
                                        <step.icon style={{ width: "26px", height: "26px", color: i === 1 ? "#fff" : "var(--primary)" }} />
                                        <span style={{
                                            position: "absolute", top: "-4px", right: "calc(50% - 38px)",
                                            width: "22px", height: "22px", borderRadius: "50%",
                                            background: i === 1 ? "var(--cta)" : "var(--tag-bg)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontSize: "0.625rem", fontWeight: 800,
                                            color: i === 1 ? "#fff" : "var(--primary)",
                                            border: "2px solid var(--bg)",
                                        }}>
                                            {step.step}
                                        </span>
                                    </div>
                                    <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>
                                        {step.title}
                                    </h3>
                                    <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== WHY JOBNOW (Features) ===== */}
                <section style={{
                    background: "var(--bg-card)", padding: "4rem 1rem",
                    borderTop: "1.5px solid var(--border)", borderBottom: "1.5px solid var(--border)",
                }}>
                    <div className="container-xl" style={{ textAlign: "center" }}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "0.375rem",
                            background: "var(--tag-bg)", borderRadius: "100px", padding: "0.375rem 1rem",
                            marginBottom: "0.75rem", fontSize: "0.8125rem", fontWeight: 700,
                            color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em",
                        }}>
                            <RocketLaunchIcon style={{ width: "14px", height: "14px" }} />
                            Tại sao chọn JobNow
                        </div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>
                            Tính năng nổi bật
                        </h2>
                        <p style={{ fontSize: "1rem", color: "var(--text-muted)", maxWidth: "520px", margin: "0 auto 3rem", lineHeight: 1.7 }}>
                            JobNow cung cấp trải nghiệm tìm việc hiện đại, nhanh chóng và hiệu quả
                        </p>

                        <div style={{
                            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "1.25rem", maxWidth: "960px", margin: "0 auto",
                        }}>
                            {FEATURES.map((f) => (
                                <div key={f.title} style={{
                                    padding: "1.5rem", background: "var(--bg)", border: "1.5px solid var(--border)",
                                    borderRadius: "14px", textAlign: "left", transition: "all 200ms",
                                }}
                                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary-light)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(3,105,161,0.08)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
                                >
                                    <div style={{
                                        width: "44px", height: "44px", borderRadius: "10px", background: "var(--tag-bg)",
                                        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem",
                                    }}>
                                        <f.icon style={{ width: "22px", height: "22px", color: "var(--primary)" }} />
                                    </div>
                                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>{f.title}</h3>
                                    <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== TOP COMPANIES ===== */}
                {companies.length > 0 && (
                    <section style={{ background: "var(--bg)", padding: "4rem 1rem" }}>
                        <div className="container-xl" style={{ textAlign: "center" }}>
                            <div style={{
                                display: "inline-flex", alignItems: "center", gap: "0.375rem",
                                background: "var(--tag-bg)", borderRadius: "100px", padding: "0.375rem 1rem",
                                marginBottom: "0.75rem", fontSize: "0.8125rem", fontWeight: 700,
                                color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em",
                            }}>
                                <BuildingOfficeIcon style={{ width: "14px", height: "14px" }} />
                                Đối tác
                            </div>
                            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>
                                Các công ty hàng đầu
                            </h2>
                            <p style={{ fontSize: "1rem", color: "var(--text-muted)", maxWidth: "500px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
                                Hàng nghìn công ty uy tín đa ngành nghề đang tuyển dụng trên JobNow
                            </p>

                            <div style={{
                                display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                                gap: "0.875rem", maxWidth: "960px", margin: "0 auto",
                            }}>
                                {companies.map((c) => (
                                    <Link key={c.slug} href={`/companies/${c.slug}`} style={{ textDecoration: "none" }}>
                                        <div style={{
                                            padding: "1.125rem", display: "flex", alignItems: "center", gap: "0.75rem",
                                            background: "var(--bg-card)", border: "1.5px solid var(--border)", borderRadius: "12px",
                                            transition: "all 200ms", cursor: "pointer",
                                        }}
                                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary-light)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(3,105,161,0.08)"; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
                                        >
                                            <div style={{
                                                width: "40px", height: "40px", borderRadius: "10px", background: "var(--tag-bg)",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                fontWeight: 800, fontSize: "0.75rem", color: "var(--primary)", flexShrink: 0,
                                                overflow: "hidden",
                                            }}>
                                                {c.logo ? (
                                                    <img src={c.logo} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                ) : (
                                                    c.name.substring(0, 2).toUpperCase()
                                                )}
                                            </div>
                                            <div style={{ textAlign: "left", minWidth: 0 }}>
                                                <div style={{ fontWeight: 600, fontSize: "0.8125rem", color: "var(--text)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.name}</div>
                                                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{c.jobCount} việc làm</div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ===== TESTIMONIALS ===== */}
                <section style={{
                    background: "var(--bg-card)", padding: "4rem 1rem",
                    borderTop: "1.5px solid var(--border)", borderBottom: "1.5px solid var(--border)",
                }}>
                    <div className="container-xl" style={{ textAlign: "center" }}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "0.375rem",
                            background: "var(--tag-bg)", borderRadius: "100px", padding: "0.375rem 1rem",
                            marginBottom: "0.75rem", fontSize: "0.8125rem", fontWeight: 700,
                            color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em",
                        }}>
                            <ChatBubbleLeftRightIcon style={{ width: "14px", height: "14px" }} />
                            Đánh giá
                        </div>
                        <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800, color: "var(--text)", marginBottom: "0.75rem" }}>
                            Ứng viên nói gì về JobNow?
                        </h2>
                        <p style={{ fontSize: "1rem", color: "var(--text-muted)", maxWidth: "500px", margin: "0 auto 3rem", lineHeight: 1.7 }}>
                            Hàng nghìn ứng viên đã tìm được việc làm phù hợp
                        </p>

                        <div style={{
                            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "1.25rem", maxWidth: "960px", margin: "0 auto",
                        }}>
                            {TESTIMONIALS.map((t) => (
                                <div key={t.name} style={{
                                    padding: "1.5rem", background: "var(--bg)", border: "1.5px solid var(--border)",
                                    borderRadius: "14px", textAlign: "left",
                                }}>
                                    {/* Stars */}
                                    <div style={{ display: "flex", gap: "0.125rem", marginBottom: "0.875rem" }}>
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="16" height="16" fill="#FBBF24" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p style={{ fontSize: "0.9375rem", color: "var(--text)", lineHeight: 1.7, marginBottom: "1.25rem", fontStyle: "italic" }}>
                                        &ldquo;{t.text}&rdquo;
                                    </p>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                        <div style={{
                                            width: "40px", height: "40px", borderRadius: "50%", background: "var(--tag-bg)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontWeight: 700, fontSize: "0.875rem", color: "var(--primary)",
                                        }}>
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--text)" }}>{t.name}</div>
                                            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== CTA ===== */}
                <section style={{
                    position: "relative", overflow: "hidden", padding: "5rem 1rem", textAlign: "center",
                    background: "linear-gradient(145deg, #0C4A6E 0%, #0369A1 40%, #047857 100%)",
                }}>
                    <div style={{
                        position: "absolute", inset: 0, opacity: 0.04,
                        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }} />

                    <div className="container-xl" style={{ position: "relative", zIndex: 2, maxWidth: "640px", margin: "0 auto" }}>
                        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem", lineHeight: 1.2 }}>
                            Sẵn sàng tìm việc mơ ước?
                        </h2>
                        <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.85)", marginBottom: "2rem", lineHeight: 1.7 }}>
                            Đăng ký ngay để tiếp cận hàng ngàn cơ hội việc làm hấp dẫn từ các công ty hàng đầu
                        </p>
                        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/register" style={{
                                background: "#fff", color: "#0369A1", padding: "0.875rem 2rem",
                                borderRadius: "10px", fontWeight: 700, textDecoration: "none", fontSize: "1rem",
                                boxShadow: "0 4px 16px rgba(0,0,0,0.12)", transition: "all 200ms",
                                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            }}>
                                Đăng ký miễn phí <ArrowRightIcon style={{ width: "18px", height: "18px" }} />
                            </Link>
                            <Link href="/jobs" style={{
                                background: "transparent", color: "#fff", padding: "0.875rem 2rem",
                                borderRadius: "10px", fontWeight: 600, textDecoration: "none", fontSize: "1rem",
                                border: "2px solid rgba(255,255,255,0.35)", transition: "all 200ms",
                            }}>
                                Xem việc làm
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            {/* Responsive styles only — no heavy animations */}
            <style jsx>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-grid > div {
            border-right: none !important;
          }
          .stats-grid > div:nth-child(odd) {
            border-right: 1px solid var(--border) !important;
          }
          .stats-grid > div:nth-child(1),
          .stats-grid > div:nth-child(2) {
            border-bottom: 1px solid var(--border);
          }
        }
      `}</style>
        </div>
    );
}
