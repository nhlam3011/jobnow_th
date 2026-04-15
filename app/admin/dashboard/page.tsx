import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import { getAllJobsForAdmin } from "@/app/actions/jobs";
import AdminJobActions from "@/app/components/AdminJobActions";
import { getAdminBillingStats } from "@/app/actions/admin-billing";

const JOB_STATUS: Record<string, { label: string; color: string }> = {
    PENDING: { label: "Chờ duyệt", color: "#F59E0B" },
    ACTIVE: { label: "Đang tuyển", color: "#22C55E" },
    CLOSED: { label: "Đã đóng", color: "#64748B" },
    REJECTED: { label: "Từ chối", color: "#EF4444" },
};

export default async function AdminDashboard() {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") redirect("/login");

    const [stats, jobs, billing] = await Promise.all([getDashboardStats(), getAllJobsForAdmin(), getAdminBillingStats()]);
    const s = stats as { users: number; jobs: number; applications: number; pendingJobs: number };

    return (
        <DashboardLayout
            role="ADMIN"
            userName={session.user.name || "Quản trị viên"}
            userImage={session.user.image}
        >
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Bảng điều khiển</h1>
                    <p className="dash-page-subtitle">Tổng quan toàn bộ hệ thống JobNow</p>
                </div>
            </div>

            {/* Stats */}
            <div className="dash-stats">
                {[
                    { label: "Tổng người dùng", value: s.users || 0, color: "#0369A1", icon: "M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" },
                    { label: "Tổng việc làm", value: s.jobs || 0, color: "#22C55E", icon: "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" },
                    { label: "Tổng doanh thu", value: (billing.totalDeposit || 0).toLocaleString("vi-VN") + " đ", color: "#10B981", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" },
                    { label: "Chờ duyệt", value: s.pendingJobs || 0, color: "#F59E0B", icon: "M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" },
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
            </div>
            <div className="dash-table-wrap">
                <table className="dash-table">
                    <thead>
                        <tr>
                            <th style={{ minWidth: "200px" }}>Vị trí</th>
                            <th className="hide-mobile">Công ty</th>
                            <th style={{ textAlign: "center" }}>Trạng thái</th>
                            <th className="hide-mobile">Ngày đăng</th>
                            <th style={{ textAlign: "center" }}>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.length === 0 ? (
                            <tr><td colSpan={5} className="dash-empty">Không có tin nào</td></tr>
                        ) : (
                            jobs.slice(0, 15).map((job: any) => {
                                const st = JOB_STATUS[job.status] || { label: job.status, color: "#64748B" };
                                return (
                                    <tr key={job.id}>
                                        <td className="bold">{job.title}</td>
                                        <td className="muted hide-mobile">{job.company.name}</td>
                                        <td style={{ textAlign: "center" }}>
                                            <span className="dash-badge" style={{ background: `${st.color}15`, color: st.color }}>{st.label}</span>
                                        </td>
                                        <td className="muted hide-mobile">{new Date(job.createdAt).toLocaleDateString("vi-VN")}</td>
                                        <td style={{ textAlign: "center" }}><AdminJobActions jobId={job.id} currentStatus={job.status} /></td>
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
