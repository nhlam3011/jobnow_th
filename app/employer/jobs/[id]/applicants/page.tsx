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
            <div style={{ padding: "2rem" }}>
                <div style={{ marginBottom: "2rem" }}>
                    <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.25rem" }}>
                        Ứng viên: {job.title}
                    </h1>
                    <p style={{ color: "var(--text-muted)" }}>
                        {applicants.length} ứng viên đã nộp đơn
                    </p>
                </div>

                {applicants.length === 0 ? (
                    <div className="card" style={{ padding: "4rem", textAlign: "center", color: "var(--text-muted)" }}>
                        <svg width="48" height="48" fill="none" stroke="var(--border)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: "0 auto 1rem" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        </svg>
                        <p style={{ fontWeight: 600 }}>Chưa có ứng viên nào</p>
                    </div>
                ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {applicants.map((app) => (
                            <div key={app.id} className="card" style={{ padding: "1.5rem 2rem", display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
                                {/* Avatar */}
                                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--tag-bg)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "1.125rem", color: "var(--primary)", flexShrink: 0 }}>
                                    {app.candidate.name?.charAt(0).toUpperCase() || "?"}
                                </div>

                                {/* Info */}
                                <div style={{ flex: 1, minWidth: "160px" }}>
                                    <div style={{ fontWeight: 700, color: "var(--text)", fontSize: "1rem" }}>{app.candidate.name}</div>
                                    <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{app.candidate.email}</div>
                                    {app.candidate.candidateProfile?.skills && app.candidate.candidateProfile.skills.length > 0 && (
                                        <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                                            {app.candidate.candidateProfile.skills.slice(0, 4).map((s) => (
                                                <span key={s} className="tag" style={{ fontSize: "0.75rem" }}>{s}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Applied date */}
                                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textAlign: "center" }}>
                                    <div>Nộp ngày</div>
                                    <div style={{ fontWeight: 600, color: "var(--text)" }}>{new Date(app.createdAt).toLocaleDateString("vi-VN")}</div>
                                </div>

                                {/* Status updater */}
                                <StatusUpdater applicationId={app.id} currentStatus={app.status} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}
