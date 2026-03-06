import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import { getJobApplicants } from "@/app/actions/applications";
import { getJobById } from "@/app/actions/jobs";
import StatusUpdater from "@/app/components/StatusUpdater";

export default async function ApplicantsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") redirect("/login");

    const [applicants, job] = await Promise.all([getJobApplicants(id), getJobById(id)]);

    if (!job) redirect("/employer/jobs");

    return (
        <DashboardLayout role="EMPLOYER" userName={session.user.name || ""}>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Ứng viên: {job.title}</h1>
                    <p className="dash-page-subtitle">{applicants.length} ứng viên đã nộp đơn</p>
                </div>
            </div>

            {applicants.length === 0 ? (
                <div className="dash-list-card">
                    <div className="dash-empty">
                        <svg width="48" height="48" fill="none" stroke="var(--border)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: "0 auto 1rem" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        </svg>
                        <p style={{ fontWeight: 600 }}>Chưa có ứng viên nào</p>
                    </div>
                </div>
            ) : (
                <div className="dash-card-grid">
                    {applicants.map((app) => (
                        <div key={app.id} className="dash-card-item">
                            <div className="dash-card-item-header">
                                <div className="dash-card-item-avatar" style={{ background: "var(--tag-bg)", color: "var(--primary)" }}>
                                    {app.candidate.name?.charAt(0).toUpperCase() || "?"}
                                </div>
                                <div className="dash-card-item-content">
                                    <div className="dash-card-item-title">{app.candidate.name}</div>
                                    <div className="dash-card-item-subtitle">{app.candidate.email}</div>
                                    {app.candidate.candidateProfile?.skills && app.candidate.candidateProfile.skills.length > 0 && (
                                        <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                                            {app.candidate.candidateProfile.skills.slice(0, 4).map((s) => (
                                                <span key={s} className="tag" style={{ fontSize: "0.75rem" }}>{s}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="dash-card-item-footer" style={{ justifyContent: "space-between" }}>
                                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                                    <span style={{ fontWeight: 600, color: "var(--text)" }}>{new Date(app.createdAt).toLocaleDateString("vi-VN")}</span>
                                </div>
                                <StatusUpdater applicationId={app.id} currentStatus={app.status} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </DashboardLayout>
    );
}
