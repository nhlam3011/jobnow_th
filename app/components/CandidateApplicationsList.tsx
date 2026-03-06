"use client";

import { useState } from "react";

const STATUS_CONFIG: Record<string, { label: string; color: string }> = {
    PENDING: { label: "Đang chờ", color: "#F59E0B" },
    REVIEWING: { label: "Đang xem xét", color: "#0369A1" },
    INTERVIEW: { label: "Phỏng vấn", color: "#A855F7" },
    ACCEPTED: { label: "Chấp nhận ✓", color: "#22C55E" },
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
        ACCEPTED: applications.filter(a => a.status === "ACCEPTED").length,
        REJECTED: applications.filter(a => a.status === "REJECTED").length,
    };

    return (
        <>
            <div className="dash-filter-bar">
                <input className="dash-input" placeholder="Tìm theo vị trí, công ty..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="dash-filter-tabs">
                    {[
                        { key: "ALL", label: "Tất cả" },
                        { key: "PENDING", label: "Đang chờ" },
                        { key: "REVIEWING", label: "Xem xét" },
                        { key: "INTERVIEW", label: "Phỏng vấn" },
                        { key: "ACCEPTED", label: "Chấp nhận" },
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
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {filtered.map((app) => {
                        const st = STATUS_CONFIG[app.status] || { label: app.status, color: "#64748B" };
                        return (
                            <div key={app.id} className="dash-stat-card" style={{ display: "flex", gap: "1.25rem", alignItems: "center", flexWrap: "wrap" }}>
                                <div style={{ width: 44, height: 44, borderRadius: 10, background: `${st.color}12`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: st.color, fontSize: "1rem", flexShrink: 0 }}>
                                    {app.job.company.name.charAt(0)}
                                </div>
                                <div style={{ flex: 1, minWidth: 200 }}>
                                    <div style={{ fontWeight: 700, color: "var(--text)", fontSize: "0.9375rem" }}>{app.job.title}</div>
                                    <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "0.125rem" }}>
                                        {app.job.company.name} · {app.job.location}
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
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
        </>
    );
}
