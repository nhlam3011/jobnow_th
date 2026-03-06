import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import { prisma } from "@/lib/prisma";
import ResumeUploadBtn from "@/app/components/ResumeUploadBtn";
import Link from "next/link";

export default async function CandidateResumePage() {
    const session = await auth();
    if (!session?.user || session.user.role !== "CANDIDATE") redirect("/login");

    const resumes = await prisma.resume.findMany({
        where: { userId: session.user.id },
        orderBy: { createdAt: "desc" },
    });

    return (
        <DashboardLayout role="CANDIDATE" userName={session.user.name || "Ứng viên"}>
            <div style={{ padding: "2rem", maxWidth: "800px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
                    <div>
                        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.25rem" }}>
                            Quản lý CV (Hồ sơ đính kèm)
                        </h1>
                        <p style={{ color: "var(--text-muted)" }}>Tải lên CV của bạn để nhà tuyển dụng có thể xem.</p>
                    </div>
                    <ResumeUploadBtn />
                </div>

                {resumes.length === 0 ? (
                    <div className="card" style={{ padding: "4rem", textAlign: "center", color: "var(--text-muted)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <svg width="48" height="48" fill="none" stroke="var(--border)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ marginBottom: "1rem" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p style={{ fontWeight: 600, fontSize: "1rem", color: "var(--text)" }}>Bạn chưa có CV nào</p>
                        <p style={{ fontSize: "0.875rem", marginTop: "0.25rem", marginBottom: "1.25rem" }}>
                            Tải lên CV (PDF) để ứng tuyển nhanh chóng hơn.
                        </p>
                    </div>
                ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {resumes.map((resume) => (
                            <div key={resume.id} className="card" style={{ padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                    <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "rgba(3,105,161,0.08)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.9375rem" }}>
                                            <Link href={resume.fileUrl} target="_blank" style={{ color: "var(--primary)", textDecoration: "none" }}>{resume.fileName}</Link>
                                        </div>
                                        <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "0.125rem" }}>
                                            Tải lên lúc {new Date(resume.createdAt).toLocaleDateString("vi-VN")}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                                    {resume.isActive && (
                                        <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.625rem", borderRadius: "100px", background: "#DCFCE7", color: "#16A34A" }}>
                                            CV Chính
                                        </span>
                                    )}
                                    <button className="btn-outline" style={{ padding: "0.375rem 0.75rem", fontSize: "0.8125rem" }}>
                                        Xóa
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
}
