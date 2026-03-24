"use client";
import React, { useTransition, useState, useEffect } from "react";
import { applyToJob } from "@/app/actions/applications";
import { getCandidateDocuments } from "@/app/actions/candidate-docs";
import Link from "next/link";

export default function ApplyButton({
    jobId,
    isLoggedIn,
    role,
}: {
    jobId: string;
    isLoggedIn: boolean;
    role?: string;
}) {
    const [isPending, startTransition] = useTransition();
    const [result, setResult] = useState<{ success?: boolean; error?: string } | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [docs, setDocs] = useState<{ cvs: any[]; resumes: any[] }>({ cvs: [], resumes: [] });
    const [selectedDoc, setSelectedDoc] = useState<{ id: string, type: 'cv' | 'resume' } | null>(null);
    const [coverLetter, setCoverLetter] = useState("");

    useEffect(() => {
        if (showModal && isLoggedIn && role === "CANDIDATE") {
            getCandidateDocuments().then(setDocs);
        }
    }, [showModal, isLoggedIn, role]);

    if (!isLoggedIn) {
        return (
            <Link href="/login" className="btn-primary" style={{ width: "100%", justifyContent: "center", textAlign: "center" }}>
                Đăng nhập để ứng tuyển
            </Link>
        );
    }

    if (role !== "CANDIDATE") {
        return (
            <div style={{ padding: "0.875rem 1rem", background: "var(--tag-bg)", borderRadius: "8px", color: "var(--text-muted)", fontSize: "0.875rem", textAlign: "center" }}>
                Chỉ ứng viên mới có thể ứng tuyển
            </div>
        );
    }

    const handleApply = async () => {
        if (!selectedDoc) {
            setResult({ error: "Vui lòng chọn hồ sơ để ứng tuyển" });
            return;
        }
        startTransition(async () => {
            const res = await applyToJob(
                jobId, 
                selectedDoc.type === 'cv' ? selectedDoc.id : undefined,
                selectedDoc.type === 'resume' ? selectedDoc.id : undefined,
                coverLetter
            );
            setResult(res);
            if (res.success) setShowModal(false);
        });
    };

    if (result?.success) {
        const steps = [
            { label: "Đã nộp đơn", active: true },
            { label: "Đang xem xét", active: false },
            { label: "Phỏng vấn", active: false },
        ];
        return (
            <div style={{ padding: "1rem", background: "#F0FDF4", border: "1.5px solid #BBF7D0", borderRadius: "10px" }}>
                <div style={{ textAlign: "center", color: "#16A34A", fontWeight: 700, fontSize: "0.9375rem", marginBottom: "1rem" }}>
                    ✓ Ứng tuyển thành công!
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0" }}>
                    {steps.map((step, i) => (
                        <div key={step.label} style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
                                <div style={{
                                    width: "28px", height: "28px", borderRadius: "50%",
                                    background: step.active ? "#16A34A" : "var(--border, #e5e7eb)",
                                    color: step.active ? "#fff" : "var(--text-muted, #9ca3af)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: "0.75rem", fontWeight: 700,
                                }}>
                                    {step.active ? "✓" : i + 1}
                                </div>
                                <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: step.active ? "#16A34A" : "var(--text-muted, #9ca3af)", whiteSpace: "nowrap" }}>
                                    {step.label}
                                </span>
                            </div>
                            {i < steps.length - 1 && (
                                <div style={{ width: "32px", height: "2px", background: "var(--border, #e5e7eb)", margin: "0 0.25rem", marginBottom: "1.125rem" }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div>
            {result?.error && (
                <div style={{ padding: "0.75rem", background: "#FEF2F2", border: "1.5px solid #FECACA", borderRadius: "8px", color: "#DC2626", fontSize: "0.875rem", marginBottom: "0.75rem", textAlign: "center" }}>
                    {result.error}
                </div>
            )}
            <button
                id="apply-btn"
                onClick={() => setShowModal(true)}
                disabled={isPending}
                className="btn-cta"
                style={{ width: "100%", justifyContent: "center", opacity: isPending ? 0.7 : 1 }}
            >
                {isPending ? "Đang gửi..." : "Ứng tuyển ngay"}
            </button>

            {showModal && (
                <div style={{
                    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
                    background: "rgba(0,0,0,0.5)", zIndex: 1000,
                    display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem"
                }}>
                    <div style={{
                        background: "var(--bg-card)", borderRadius: "16px",
                        width: "100%", maxWidth: "500px", padding: "2rem",
                        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
                    }}>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem" }}>Chọn hồ sơ ứng tuyển</h2>
                        
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
                            {docs.cvs.length === 0 && docs.resumes.length === 0 ? (
                                <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "1rem" }}>Bạn chưa có CV nào. Hãy tạo hoặc tải lên CV trước.</p>
                            ) : (
                                <>
                                    {docs.cvs.map(cv => (
                                        <div 
                                            key={cv.id} 
                                            onClick={() => setSelectedDoc({ id: cv.id, type: 'cv' })}
                                            style={{
                                                padding: "1rem", border: "2px solid",
                                                borderColor: selectedDoc?.id === cv.id ? "var(--primary)" : "var(--border)",
                                                borderRadius: "12px", cursor: "pointer",
                                                background: selectedDoc?.id === cv.id ? "rgba(var(--primary-rgb), 0.05)" : "transparent"
                                            }}
                                        >
                                            <div style={{ fontWeight: 600 }}>{cv.title}</div>
                                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>CV từ JobNow Builder</div>
                                        </div>
                                    ))}
                                    {docs.resumes.map(r => (
                                        <div 
                                            key={r.id} 
                                            onClick={() => setSelectedDoc({ id: r.id, type: 'resume' })}
                                            style={{
                                                padding: "1rem", border: "2px solid",
                                                borderColor: selectedDoc?.id === r.id ? "var(--primary)" : "var(--border)",
                                                borderRadius: "12px", cursor: "pointer",
                                                background: selectedDoc?.id === r.id ? "rgba(var(--primary-rgb), 0.05)" : "transparent"
                                            }}
                                        >
                                            <div style={{ fontWeight: 600 }}>{r.fileName}</div>
                                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>File tải lên</div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>

                        <div style={{ marginBottom: "1.5rem" }}>
                            <label style={{ fontSize: "0.875rem", fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>Thư giới thiệu (Không bắt buộc)</label>
                            <textarea 
                                value={coverLetter}
                                onChange={(e) => setCoverLetter(e.target.value)}
                                placeholder="Viết một đoạn ngắn giới thiệu bản thân..."
                                className="dash-input"
                                rows={4}
                                style={{ width: "100%" }}
                            />
                        </div>

                        <div style={{ display: "flex", gap: "1rem" }}>
                            <button onClick={() => setShowModal(false)} className="btn-outline" style={{ flex: 1 }}>Hủy</button>
                            <button 
                                onClick={handleApply} 
                                disabled={isPending || !selectedDoc} 
                                className="btn-cta" 
                                style={{ flex: 1, opacity: isPending || !selectedDoc ? 0.7 : 1 }}
                            >
                                {isPending ? "Đang nộp..." : "Nộp đơn ngay"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
