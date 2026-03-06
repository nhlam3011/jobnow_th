import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import { getDashboardStats } from "@/app/actions/profile";
import { getMyApplications } from "@/app/actions/applications";
import { getJobs } from "@/app/actions/jobs";
import { getRecommendedJobs } from "@/lib/ai";
import Link from "next/link";

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
        <DashboardLayout role="CANDIDATE" userName={session.user.name || "Ứng viên"}>
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
                    <div className="dash-list-card">
                        {recentApps.length === 0 ? (
                            <div className="dash-empty">Chưa có đơn ứng tuyển nào</div>
                        ) : (
                            recentApps.map((app) => {
                                const st = STATUS_LABEL[app.status] || { label: app.status, color: "#64748B" };
                                return (
                                    <div key={app.id} className="dash-list-item">
                                        <div>
                                            <div className="dash-list-title">{app.job.title}</div>
                                            <div className="dash-list-sub">{app.job.company.name}</div>
                                        </div>
                                        <span className="dash-badge" style={{ background: `${st.color}15`, color: st.color }}>
                                            {st.label}
                                        </span>
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
                    <div className="dash-list-card">
                        {suggestedJobs.length === 0 ? (
                            <div className="dash-empty">Không có việc làm phù hợp</div>
                        ) : (
                            suggestedJobs.map((job) => (
                                <Link key={job.id} href={`/jobs/${job.slug}`} className="dash-list-item" style={{ textDecoration: "none" }}>
                                    <div style={{ flex: 1 }}>
                                        <div className="dash-list-title">{job.title}</div>
                                        <div className="dash-list-sub">{job.companyName} · {job.location}</div>
                                    </div>
                                    {job.similarity && (
                                        <div style={{ textAlign: "right", marginLeft: "1rem" }}>
                                            <div style={{
                                                fontSize: "0.75rem",
                                                fontWeight: 700,
                                                color: job.similarity > 0.7 ? "#22C55E" : "#F59E0B",
                                                background: job.similarity > 0.7 ? "rgba(34, 197, 94, 0.1)" : "rgba(245, 158, 11, 0.1)",
                                                padding: "2px 8px",
                                                borderRadius: "12px"
                                            }}>
                                                {Math.round(job.similarity * 100)}% Match
                                            </div>
                                        </div>
                                    )}
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
