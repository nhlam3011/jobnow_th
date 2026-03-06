import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import { getDashboardStats, getEmployerCompany } from "@/app/actions/profile";
import { getEmployerJobs } from "@/app/actions/jobs";
import Link from "next/link";

const JOB_STATUS: Record<string, { label: string; color: string }> = {
    PENDING: { label: "Chờ duyệt", color: "#F59E0B" },
    ACTIVE: { label: "Đang tuyển", color: "#22C55E" },
    CLOSED: { label: "Đã đóng", color: "#64748B" },
    REJECTED: { label: "Từ chối", color: "#EF4444" },
};

export default async function EmployerDashboard() {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") redirect("/login");

    const [stats, jobs, company] = await Promise.all([getDashboardStats(), getEmployerJobs(), getEmployerCompany()]);
    const s = stats as { jobs: number; activeJobs: number; applicants: number };
    const recentJobs = jobs.slice(0, 8);

    return (
        <DashboardLayout
            role="EMPLOYER"
            userName={company?.name || session.user.name || "Nhà tuyển dụng"}
            userImage={company?.logo || session.user.image}
        >
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Dashboard</h1>
                    <p className="dash-page-subtitle">Tổng quan hoạt động tuyển dụng</p>
                </div>
                <Link href="/employer/jobs/new" className="dash-btn dash-btn-primary">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    Đăng tin mới
                </Link>
            </div>

            {/* Stats */}
            <div className="dash-stats">
                {[
                    { label: "Tổng tin đăng", value: s.jobs || 0, color: "#0369A1", icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" },
                    { label: "Đang tuyển dụng", value: s.activeJobs || 0, color: "#22C55E", icon: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" },
                    { label: "Tổng ứng viên", value: s.applicants || 0, color: "#A855F7", icon: "M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" },
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

            {/* Jobs table */}
            <div className="dash-section-header">
                <h2 className="dash-section-title">Tin tuyển dụng gần đây</h2>
                <Link href="/employer/jobs" className="dash-section-link">Xem tất cả</Link>
            </div>
            <div className="dash-table-wrap">
                <table className="dash-table">
                    <thead>
                        <tr>
                            <th style={{ minWidth: "200px" }}>Vị trí</th>
                            <th className="hide-mobile">Địa điểm</th>
                            <th style={{ textAlign: "center" }}>Trạng thái</th>
                            <th style={{ textAlign: "center" }}>Ứng viên</th>
                            <th className="hide-mobile">Ngày đăng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentJobs.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="dash-empty">
                                    Chưa có tin tuyển dụng nào.{" "}
                                    <Link href="/employer/jobs/new" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>Đăng tin đầu tiên</Link>
                                </td>
                            </tr>
                        ) : (
                            recentJobs.map((job) => {
                                const st = JOB_STATUS[job.status] || { label: job.status, color: "#64748B" };
                                return (
                                    <tr key={job.id}>
                                        <td className="bold">{job.title}</td>
                                        <td className="muted hide-mobile">{job.location}</td>
                                        <td className="text-center">
                                            <span className="dash-badge" style={{ background: `${st.color}15`, color: st.color }}>{st.label}</span>
                                        </td>
                                        <td className="muted text-center">{job._count.applications}</td>
                                        <td className="muted hide-mobile">{new Date(job.createdAt).toLocaleDateString("vi-VN")}</td>
                                        <td>
                                            <Link href={`/employer/jobs/${job.id}/applicants`} className="dash-section-link">Xem ứng viên</Link>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}
