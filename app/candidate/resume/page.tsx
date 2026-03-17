"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import ResumeUploadBtn from "@/app/components/ResumeUploadBtn";
import Link from "next/link";
import { getUserResumesAndCVs, deleteUserCV, deleteResume } from "@/app/actions/cv";
import PDFViewer from "@/app/components/PDFViewer";

interface CV {
    id: string;
    title: string;
    updatedAt: Date;
    template?: {
        name: string;
    };
}

interface Resume {
    id: string;
    fileName: string;
    fileUrl: string;
    isActive: boolean;
    createdAt: Date;
}

export default function CandidateResumePage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [userCVs, setUserCVs] = useState<CV[]>([]);
    const [resumes, setResumes] = useState<Resume[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState<string | null>(null);
    const [viewingPdf, setViewingPdf] = useState<{ url: string; name: string } | null>(null);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        } else if (status === "authenticated" && session?.user?.role !== "CANDIDATE") {
            router.push("/");
        }
    }, [status, session, router]);

    useEffect(() => {
        if (status !== "authenticated") return;

        async function loadData() {
            const result = await getUserResumesAndCVs();
            if (result?.success) {
                setResumes(result.resumes);
                setUserCVs(result.cvs);
            }
            setLoading(false);
        }
        loadData();
    }, [status]);

    const handleDeleteCV = async (cvId: string) => {
        if (!confirm("Bạn có chắc chắn muốn xóa CV này?")) return;

        setDeleting(cvId);
        const result = await deleteUserCV(cvId);
        if (result.success) {
            setUserCVs(userCVs.filter(cv => cv.id !== cvId));
        }
        setDeleting(null);
    };

    const handleDeleteResume = async (resumeId: string) => {
        if (!confirm("Bạn có chắc chắn muốn xóa hồ sơ này?")) return;

        setDeleting(resumeId);
        const result = await deleteResume(resumeId);
        if (result.success) {
            setResumes(resumes.filter(r => r.id !== resumeId));
        } else {
            alert(result.error || "Xóa thất bại");
        }
        setDeleting(null);
    };

    if (loading || status === "loading") {
        return (
            <DashboardLayout role="CANDIDATE" userName="Ứng viên">
                <div style={{ display: "flex", justifyContent: "center", padding: "3rem" }}>
                    <p>Đang tải...</p>
                </div>
            </DashboardLayout>
        );
    }

    if (!session || session.user?.role !== "CANDIDATE") {
        return null;
    }

    return (
        <DashboardLayout role="CANDIDATE" userName={session.user.name || "Ứng viên"}>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Quản lý CV & Hồ sơ</h1>
                    <p className="dash-page-subtitle">Quản lý CV tải lên và CV từ trình tạo CV.</p>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                    <ResumeUploadBtn />
                    <Link href="/candidate/cv-builder" className="dash-btn dash-btn-primary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "0.5rem" }}>
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                        Tạo CV mới
                    </Link>
                </div>
            </div>

            {/* CVs from Builder */}
            {userCVs.length > 0 && (
                <>
                    <h2 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "1rem", marginTop: "1.5rem" }}>CV đã tạo</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                        {userCVs.map((cv) => (
                            <div key={cv.id} className="dash-card-item" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                    <div className="dash-stat-icon" style={{ background: "rgba(34,197,94,0.08)", color: "#22C55E" }}>
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.9375rem" }}>
                                            <Link href={`/candidate/cv-builder?edit=${cv.id}`} style={{ color: "var(--primary)", textDecoration: "none" }}>{cv.title}</Link>
                                        </div>
                                        <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "0.125rem" }}>
                                            Mẫu: {cv.template?.name || "Custom"} • Cập nhật {new Date(cv.updatedAt).toLocaleDateString("vi-VN")}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                    <Link href={`/candidate/cv-builder?edit=${cv.id}`} className="dash-btn" style={{ fontSize: "0.8125rem" }}>
                                        Chỉnh sửa
                                    </Link>
                                    <button
                                        className="dash-btn dash-btn-danger"
                                        style={{ fontSize: "0.8125rem" }}
                                        onClick={() => handleDeleteCV(cv.id)}
                                        disabled={deleting === cv.id}
                                    >
                                        {deleting === cv.id ? "..." : "Xóa"}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Uploaded Resumes */}
            <h2 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "1rem" }}>Hồ sơ đính kèm (PDF)</h2>

            {resumes.length === 0 ? (
                <div className="dash-list-card">
                    <div className="dash-empty" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <svg width="48" height="48" fill="none" stroke="var(--border)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ marginBottom: "1rem" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p style={{ fontWeight: 600, fontSize: "1rem", color: "var(--text)" }}>Bạn chưa có CV nào</p>
                        <p style={{ fontSize: "0.875rem", marginTop: "0.25rem" }}>
                            Tải lên CV (PDF) để ứng tuyển nhanh chóng hơn.
                        </p>
                    </div>
                </div>
            ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {resumes.map((resume) => (
                        <div key={resume.id} className="dash-card-item" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div className="dash-stat-icon" style={{ background: "rgba(3,105,161,0.08)", color: "var(--primary)" }}>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.9375rem" }}>
                                        <button
                                            onClick={() => setViewingPdf({ url: resume.fileUrl, name: resume.fileName })}
                                            style={{
                                                color: "var(--primary)",
                                                textDecoration: "none",
                                                background: "none",
                                                border: "none",
                                                padding: 0,
                                                font: "inherit",
                                                cursor: "pointer",
                                                textAlign: "left"
                                            }}
                                        >
                                            {resume.fileName}
                                        </button>
                                    </div>
                                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "0.125rem" }}>
                                        Tải lên lúc {new Date(resume.createdAt).toLocaleDateString("vi-VN")}
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                                {resume.isActive && (
                                    <span className="dash-badge" style={{ background: "#DCFCE7", color: "#16A34A" }}>
                                        CV Chính
                                    </span>
                                )}
                                <button
                                    className="dash-btn"
                                    style={{ fontSize: "0.8125rem" }}
                                    onClick={() => setViewingPdf({ url: resume.fileUrl, name: resume.fileName })}
                                >
                                    Xem
                                </button>
                                <button
                                    className="dash-btn dash-btn-danger"
                                    style={{ fontSize: "0.8125rem" }}
                                    onClick={() => handleDeleteResume(resume.id)}
                                    disabled={deleting === resume.id}
                                >
                                    {deleting === resume.id ? "..." : "Xóa"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <PDFViewer
                isOpen={!!viewingPdf}
                onClose={() => setViewingPdf(null)}
                fileUrl={viewingPdf?.url || ""}
                fileName={viewingPdf?.name || ""}
            />
        </DashboardLayout>
    );
}
