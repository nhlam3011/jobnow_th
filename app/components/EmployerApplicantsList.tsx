"use client";

import React, { useState } from "react";
import {
    DocumentTextIcon,
    EnvelopeIcon,
    PhoneIcon,
    CalendarIcon,
    MapPinIcon,
    BriefcaseIcon,
    UserIcon
} from "@heroicons/react/24/outline";
import StatusUpdater from "@/app/components/StatusUpdater";
import PDFViewer from "@/app/components/PDFViewer";

interface ApplicantType {
    id: string;
    createdAt: Date;
    status: string;
    coverLetter: string | null;
    candidate: {
        id: string;
        name: string | null;
        email: string | null;
        image: string | null;
        candidateProfile: {
            phone?: string | null;
            location?: string | null;
            bio?: string | null;
            yearsExp?: number;
            desiredSalary?: number | null;
            desiredJobType?: string | null;
            skills?: string[];
            education?: unknown;
            experience?: unknown;
            resumeUrl?: string | null;
        } | null;
    } | null;
}

const STATUS_COLORS: Record<string, { bg: string; text: string; label: string }> = {
    PENDING: { bg: "#FEF3C7", text: "#D97706", label: "Chờ duyệt" },
    REVIEWING: { bg: "#DBEAFE", text: "#2563EB", label: "Đang xem" },
    INTERVIEW: { bg: "#D1FAE5", text: "#059669", label: "Phỏng vấn" },
    ACCEPTED: { bg: "#DCFCE7", text: "#16A34A", label: "Đạt" },
    REJECTED: { bg: "#FEE2E2", text: "#DC2626", label: "Từ chối" },
};

function formatDate(date: Date | string) {
    const d = new Date(date);
    return d.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

function formatRelativeTime(date: Date | string) {
    const now = new Date();
    const d = new Date(date);
    const diff = Math.floor((now.getTime() - d.getTime()) / 1000);

    if (diff < 60) return "Vừa xong";
    if (diff < 3600) return `${Math.floor(diff / 60)} phút trước`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} giờ trước`;
    if (diff < 604800) return `${Math.floor(diff / 86400)} ngày trước`;
    return d.toLocaleDateString("vi-VN");
}

export default function EmployerApplicantsList({ applicants }: { applicants: ApplicantType[] }) {
    const [viewingPdf, setViewingPdf] = useState<{ url: string; name: string } | null>(null);

    return (
        <>
            <div style={{ display: "grid", gap: "1rem" }}>
                {applicants.map((app) => {
                    const statusConfig = STATUS_COLORS[app.status] || STATUS_COLORS.PENDING;
                    const candidate = app.candidate;
                    if (!candidate) return null;
                    const profile = candidate.candidateProfile;
                    const resumeUrl = profile?.resumeUrl;

                    return (
                        <div
                            key={app.id}
                            style={{
                                background: "var(--bg-card)",
                                border: "1px solid var(--border)",
                                borderRadius: "12px",
                                overflow: "hidden"
                            }}
                        >
                            {/* Header with candidate basic info */}
                            <div style={{
                                padding: "1.25rem",
                                borderBottom: "1px solid var(--border)",
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "1rem",
                                flexWrap: "wrap"
                            }}>
                                {/* Avatar */}
                                <div style={{
                                    width: "64px",
                                    height: "64px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    background: profile?.bio ? "var(--primary)" : "var(--tag-bg)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                }}>
                                    {candidate.image ? (
                                        <img src={candidate.image} alt={candidate.name || ""} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    ) : (
                                        <UserIcon className="w-8 h-8" style={{ color: "var(--text-muted)" }} />
                                    )}
                                </div>

                                {/* Info */}
                                <div style={{ flex: 1, minWidth: "200px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem", flexWrap: "wrap" }}>
                                        <h3 style={{ fontWeight: 700, fontSize: "1.125rem", color: "var(--text)", margin: 0 }}>
                                            {candidate.name || "Chưa cập nhật"}
                                        </h3>
                                        <span
                                            className="dash-badge"
                                            style={{
                                                background: statusConfig.bg,
                                                color: statusConfig.text,
                                                fontSize: "0.75rem",
                                                padding: "0.25rem 0.5rem"
                                            }}
                                        >
                                            {statusConfig.label}
                                        </span>
                                    </div>

                                    {/* Contact info */}
                                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                                        {candidate.email && (
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                                                <EnvelopeIcon className="w-4 h-4" />
                                                <span>{candidate.email}</span>
                                            </div>
                                        )}
                                        {profile?.phone && (
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                                                <PhoneIcon className="w-4 h-4" />
                                                <span>{profile.phone}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Application date */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                                        <CalendarIcon className="w-4 h-4" />
                                        <span>Ứng tuyển: {formatDate(app.createdAt)} ({formatRelativeTime(app.createdAt)})</span>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                    {resumeUrl && (
                                        <button
                                            onClick={() => setViewingPdf({ url: resumeUrl, name: candidate.name || "CV" })}
                                            className="btn-outline"
                                            style={{
                                                padding: "0.5rem 0.75rem",
                                                fontSize: "0.875rem",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.375rem",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <DocumentTextIcon className="w-4 h-4" />
                                            Xem CV
                                        </button>
                                    )}
                                    <StatusUpdater applicationId={app.id} currentStatus={app.status} />
                                </div>
                            </div>

                            {/* Profile Details */}
                            {(profile?.bio || profile?.location || (profile?.yearsExp !== undefined && profile?.yearsExp > 0) || profile?.skills) && (
                                <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)", background: "var(--bg)" }}>
                                    <h4 style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                        Thông tin hồ sơ
                                    </h4>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                                        {profile?.bio && (
                                            <div style={{ gridColumn: "1 / -1" }}>
                                                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.125rem" }}>Giới thiệu</div>
                                                <div style={{ fontWeight: 500, color: "var(--text)" }}>{profile.bio}</div>
                                            </div>
                                        )}
                                        {profile?.location && (
                                            <div>
                                                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.125rem" }}>Địa điểm</div>
                                                <div style={{ fontWeight: 600, color: "var(--text)", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                                                    <MapPinIcon className="w-4 h-4" />
                                                    {profile.location}
                                                </div>
                                            </div>
                                        )}
                                        {profile?.yearsExp !== undefined && profile?.yearsExp > 0 && (
                                            <div>
                                                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.125rem" }}>Kinh nghiệm</div>
                                                <div style={{ fontWeight: 600, color: "var(--text)", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                                                    <BriefcaseIcon className="w-4 h-4" />
                                                    {profile.yearsExp} năm
                                                </div>
                                            </div>
                                        )}
                                        {profile?.desiredJobType && (
                                            <div>
                                                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.125rem" }}>Loại hình công việc</div>
                                                <div style={{ fontWeight: 600, color: "var(--text)", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                                                    <BriefcaseIcon className="w-4 h-4" />
                                                    {profile.desiredJobType}
                                                </div>
                                            </div>
                                        )}
                                        {profile?.desiredSalary && (
                                            <div>
                                                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.125rem" }}>Mức lương mong muốn</div>
                                                <div style={{ fontWeight: 600, color: "var(--text)" }}>
                                                    {profile.desiredSalary.toLocaleString('vi-VN')} VNĐ
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Skills */}
                            {profile?.skills && profile.skills.length > 0 && (
                                <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)" }}>
                                    <h4 style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                        Kỹ năng
                                    </h4>
                                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                                        {profile.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="tag"
                                                style={{ fontSize: "0.8125rem" }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Cover Letter */}
                            {app.coverLetter && (
                                <div style={{ padding: "1rem 1.25rem" }}>
                                    <h4 style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--text-muted)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                        Thư xin việc
                                    </h4>
                                    <div style={{
                                        padding: "1rem",
                                        background: "var(--bg)",
                                        borderRadius: "8px",
                                        fontSize: "0.9375rem",
                                        color: "var(--text)",
                                        lineHeight: 1.6,
                                        whiteSpace: "pre-wrap"
                                    }}>
                                        {app.coverLetter}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <PDFViewer
                isOpen={!!viewingPdf}
                onClose={() => setViewingPdf(null)}
                fileUrl={viewingPdf?.url || ""}
                fileName={viewingPdf?.name || ""}
            />
        </>
    );
}
