import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import { getDashboardStats } from "@/app/actions/profile";
import { getMyApplications } from "@/app/actions/applications";
import { getRecommendedJobs } from "@/lib/ai";
import Link from "next/link";

// Avatar component inlined - simplified for server component
function InlineAvatar({ src, alt, fallback, size = 40, style = {} }: { src?: string | null; alt: string; fallback?: string | null; size?: number; style?: React.CSSProperties }) {
    const initials = fallback ? fallback.charAt(0).toUpperCase() : alt.split(" ").pop()?.charAt(0).toUpperCase() || "?";
    const hasValidSrc = src && src !== "" && src !== "null" && src !== "undefined";

    if (!hasValidSrc) {
        return (
            <div style={{ width: size, height: size, borderRadius: "50%", background: "var(--primary-light, #E0E7FF)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: "bold", fontSize: size > 30 ? `${size * 0.4}px` : "0.875rem", flexShrink: 0, ...style }}>
                {initials}
            </div>
        );
    }
    return (
        <div style={{ width: size, height: size, borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0, ...style }}>
            <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
    );
}

const STATUS_LABEL: Record<string, { label: string; color: string }> = {
    PENDING: { label: "Đang chờ", color: "#F59E0B" },
    REVIEWING: { label: "Đang xem xét", color: "#0369A1" },
    INTERVIEW: { label: "Phỏng vấn", color: "#A855F7" },
    ACCEPTED: { label: "Chấp nhận", color: "#22C55E" },
    REJECTED: { label: "Từ chối", color: "#EF4444" },
};

export default async function CandidateDashboard() {
    const session = await auth();
    if (!session?.user || session.user.role !== "CANDIDATE") redirect("/login");

    const [stats, applications, recommendedJobs] = await Promise.all([
        getDashboardStats(),
        getMyApplications(),
        getRecommendedJobs(session.user.id, 6),
    ]);

    const recentApps = applications.slice(0, 5);
    const suggestedJobs = (recommendedJobs as any[]) || [];
    const s = stats as { applications: number; profileComplete: boolean; totalJobs: number };

    return (
        <DashboardLayout
            role="CANDIDATE"
            userName={session.user.name || "Ứng viên"}
            userImage={session.user.image}
        >
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Xin chào, {session.user.name?.split(" ").pop()} 👋</h1>
                    <p className="dash-page-subtitle">Đây là bảng tổng quan tài khoản ứng viên của bạn.</p>
                </div>
            </div>

            {/* Stats */}
            <div className="dash-stats">
                {[
                    { label: "Đơn đã nộp", value: s.applications, color: "#0369A1", icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" },
                    { label: "Việc làm phù hợp", value: s.totalJobs, color: "#22C55E", icon: "M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" },
                    { label: "Hồ sơ", value: s.profileComplete ? "Hoàn chỉnh" : "Chưa đầy đủ", color: s.profileComplete ? "#22C55E" : "#F59E0B", icon: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" },
                ].map((stat) => (
                    <div key={stat.label} className="dash-stat-card">
                        <div className="dash-stat-header">
                            <div className="dash-stat-icon" style={{ background: `${stat.color}15` }}>
                                <svg width="18" height="18" fill="none" stroke={stat.color} strokeWidth="1.75" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} /></svg>
                            </div>
                            <span className="dash-stat-label">{stat.label}</span>
                        </div>
                        <div className="dash-stat-value" style={{ color: stat.color }}>{stat.value}</div>
                    </div>
                ))}
            </div>

            <div className="dash-grid-2">
                {/* Recent Applications */}
                <div>
                    <div className="dash-section-header">
                        <h2 className="dash-section-title">Đơn ứng tuyển gần đây</h2>
                        <Link href="/candidate/applications" className="dash-section-link">Xem tất cả</Link>
                    </div>
                    <div className="dash-card-grid">
                        {recentApps.length === 0 ? (
                            <div className="dash-list-card">
                                <div className="dash-empty">Chưa có đơn ứng tuyển nào</div>
                            </div>
                        ) : (
                            recentApps.map((app: any) => {
                                const st = STATUS_LABEL[app.status] || { label: app.status, color: "#64748B" };
                                return (
                                    <div key={app.id} className="dash-card-item" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                            <InlineAvatar
                                                src={app.job.company.logo}
                                                alt={app.job.company.name}
                                                fallback={app.job.company.name}
                                                size={44}
                                                style={{
                                                    borderRadius: "10px",
                                                    border: "1.5px solid var(--border)",
                                                    fontSize: "1rem",
                                                    fontWeight: 700,
                                                    color: st.color,
                                                    background: `${st.color}12`
                                                }}
                                            />
                                            {/* Job info */}
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <div className="dash-card-item-title" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                                    {app.job.title}
                                                </div>
                                                <div className="dash-card-item-subtitle">{app.job.company.name}</div>
                                            </div>
                                        </div>
                                        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "0.625rem" }}>
                                            <span className="dash-badge" style={{ background: `${st.color}15`, color: st.color }}>
                                                {st.label}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

                {/* Suggested Jobs */}
                <div>
                    <div className="dash-section-header">
                        <h2 className="dash-section-title">Việc làm gợi ý</h2>
                        <Link href="/jobs" className="dash-section-link">Xem thêm</Link>
                    </div>
                    <div className="dash-card-grid">
                        {suggestedJobs.length === 0 ? (
                            <div className="dash-list-card">
                                <div className="dash-empty">Không có việc làm phù hợp</div>
                            </div>
                        ) : (
                            suggestedJobs.map((job) => (
                                <Link key={job.id} href={`/jobs/${job.slug}`} className="dash-card-item" style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                        <InlineAvatar
                                            src={job.companyLogo}
                                            alt={job.companyName || "?"}
                                            fallback={job.companyName || "?"}
                                            size={44}
                                            style={{
                                                borderRadius: "10px",
                                                border: "1.5px solid var(--border)",
                                                fontSize: "1rem",
                                                fontWeight: 700,
                                                color: "var(--primary)",
                                                background: "var(--tag-bg)"
                                            }}
                                        />
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div className="dash-card-item-title" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                                {job.title}
                                            </div>
                                            <div className="dash-card-item-subtitle">{job.companyName} · {job.location}</div>
                                        </div>
                                    </div>
                                    <div className="dash-card-item-footer" style={{ borderTop: "1px solid var(--border)", paddingTop: "0.625rem", margin: 0, justifyContent: "space-between" }}>
                                        {job.similarity && (
                                            <div style={{
                                                fontSize: "0.75rem",
                                                fontWeight: 700,
                                                color: job.similarity > 0.7 ? "#22C55E" : "#F59E0B",
                                                background: job.similarity > 0.7 ? "rgba(34,197,94,0.1)" : "rgba(245,158,11,0.1)",
                                                padding: "2px 8px",
                                                borderRadius: "12px"
                                            }}>
                                                {Math.round(job.similarity * 100)}% Match
                                            </div>
                                        )}
                                        <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginLeft: job.similarity ? "0" : "auto" }}>
                                            Xem →
                                        </span>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
