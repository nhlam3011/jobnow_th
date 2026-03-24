"use client";

import { useState } from "react";
import Link from "next/link";

const STATUS_CONFIG: Record<string, { label: string; color: string }> = {
    PENDING: { label: "Đã nộp đơn", color: "#F59E0B" },
    REVIEWING: { label: "Đang xem xét", color: "#0369A1" },
    INTERVIEW: { label: "Phỏng vấn", color: "#A855F7" },
    REJECTED: { label: "Từ chối", color: "#EF4444" },
};

interface Application {
    id: string;
    status: string;
    createdAt: string;
    job: {
        title: string;
        location: string;
        company: { name: string; logo: string | null };
    };
}

export default function CandidateApplicationsList({ applications }: { applications: Application[] }) {
    const [statusFilter, setStatusFilter] = useState("ALL");
    const [search, setSearch] = useState("");

    const filtered = applications.filter((app) => {
        const matchStatus = statusFilter === "ALL" || app.status === statusFilter;
        const matchSearch = !search || app.job.title.toLowerCase().includes(search.toLowerCase()) || app.job.company.name.toLowerCase().includes(search.toLowerCase());
        return matchStatus && matchSearch;
    });

    const statusCounts = {
        ALL: applications.length,
        PENDING: applications.filter(a => a.status === "PENDING").length,
        REVIEWING: applications.filter(a => a.status === "REVIEWING").length,
        INTERVIEW: applications.filter(a => a.status === "INTERVIEW").length,
        REJECTED: applications.filter(a => a.status === "REJECTED").length,
    };

    return (
        <>
            <div className="dash-filter-bar">
                <input className="dash-input" placeholder="Tìm theo vị trí, công ty..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="dash-filter-tabs">
                    {[
                        { key: "ALL", label: "Tất cả" },
                        { key: "PENDING", label: "Chờ" },
                        { key: "REVIEWING", label: "Xem xét" },
                        { key: "INTERVIEW", label: "Phỏng vấn" },
                        { key: "REJECTED", label: "Từ chối" },
                    ].map((tab) => (
                        <button key={tab.key} className={`dash-filter-tab ${statusFilter === tab.key ? "active" : ""}`} onClick={() => setStatusFilter(tab.key)}>
                            {tab.label}
                            {statusCounts[tab.key as keyof typeof statusCounts] > 0 && (
                                <span className="dash-filter-count">{statusCounts[tab.key as keyof typeof statusCounts]}</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {filtered.length === 0 ? (
                <div className="dash-list-card">
                    <div className="dash-empty">
                        {applications.length === 0 ? (
                            <>
                                <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Chưa có đơn ứng tuyển nào</p>
                                <a href="/jobs" className="dash-btn dash-btn-primary">Tìm việc ngay</a>
                            </>
                        ) : "Không có đơn nào phù hợp bộ lọc"}
                    </div>
                </div>
            ) : (
                <div className="dash-card-grid">
                    {filtered.map((app) => {
                        const st = STATUS_CONFIG[app.status] || { label: app.status, color: "#64748B" };
                        return (
                            <div key={app.id} className="dash-card-item">
                                <div className="dash-card-item-header">
                                    <div className="dash-card-item-avatar">
                                        <div style={{ width: "40px", height: "40px", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--bg-card)", display: "flex", alignItems: "center", justifyContent: "center", color: st.color, fontWeight: 700 }}>
                                            {app.job.company.logo ? (
                                                <img src={app.job.company.logo} alt={app.job.company.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                            ) : (
                                                app.job.company.name.charAt(0).toUpperCase()
                                            )}
                                        </div>
                                    </div>
                                    <div className="dash-card-item-content">
                                        <div className="dash-card-item-title">{app.job.title}</div>
                                        <div className="dash-card-item-subtitle">{app.job.company.name} · {app.job.location || "N/A"}</div>
                                    </div>
                                </div>
                                <div className="dash-card-item-footer">
                                    <span className="dash-badge" style={{ background: `${st.color}15`, color: st.color }}>{st.label}</span>
                                    <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                                        {new Date(app.createdAt).toLocaleDateString("vi-VN")}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            <style jsx>{`
                @media (max-width: 768px) {
                    .dash-card-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </>
    );
}
