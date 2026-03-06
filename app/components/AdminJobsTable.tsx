"use client";

import { useState } from "react";
import Link from "next/link";
import AdminJobActions from "@/app/components/AdminJobActions";

const STATUS_CONFIG: Record<string, { label: string; color: string }> = {
    PENDING: { label: "Chờ duyệt", color: "#F59E0B" },
    ACTIVE: { label: "Đang hiển thị", color: "#22C55E" },
    CLOSED: { label: "Đã đóng", color: "#64748B" },
    REJECTED: { label: "Từ chối", color: "#EF4444" },
};

interface Job {
    id: string;
    title: string;
    slug: string;
    location: string;
    jobType: string;
    status: string;
    createdAt: string;
    company: { name: string };
}

export default function AdminJobsTable({ jobs }: { jobs: Job[] }) {
    const [statusFilter, setStatusFilter] = useState("ALL");
    const [search, setSearch] = useState("");

    const filtered = jobs.filter((job) => {
        const matchStatus = statusFilter === "ALL" || job.status === statusFilter;
        const matchSearch = !search || job.title.toLowerCase().includes(search.toLowerCase()) || job.company.name.toLowerCase().includes(search.toLowerCase());
        return matchStatus && matchSearch;
    });

    const statusCounts = {
        ALL: jobs.length,
        PENDING: jobs.filter(j => j.status === "PENDING").length,
        ACTIVE: jobs.filter(j => j.status === "ACTIVE").length,
        CLOSED: jobs.filter(j => j.status === "CLOSED").length,
        REJECTED: jobs.filter(j => j.status === "REJECTED").length,
    };

    return (
        <>
            {/* Filter Bar */}
            <div className="dash-filter-bar">
                <input className="dash-input" placeholder="Tìm theo tiêu đề, công ty..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="dash-filter-tabs">
                    {[
                        { key: "ALL", label: "Tất cả" },
                        { key: "PENDING", label: "Chờ duyệt" },
                        { key: "ACTIVE", label: "Đang hiển thị" },
                        { key: "CLOSED", label: "Đã đóng" },
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

            {/* Table */}
            <div className="dash-table-wrap">
                <table className="dash-table">
                    <thead>
                        <tr>
                            <th>Tiêu đề</th>
                            <th>Công ty</th>
                            <th>Ngày đăng</th>
                            <th>Trạng thái</th>
                            <th style={{ textAlign: "right" }}>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr><td colSpan={5} className="dash-empty">Không có tin nào phù hợp bộ lọc</td></tr>
                        ) : (
                            filtered.map((job) => {
                                const st = STATUS_CONFIG[job.status] || { label: job.status, color: "#64748B" };
                                return (
                                    <tr key={job.id}>
                                        <td>
                                            <Link href={`/jobs/${job.slug}`} target="_blank" style={{ color: "var(--text)", textDecoration: "none", fontWeight: 600, fontSize: "0.9375rem" }}>
                                                {job.title}
                                            </Link>
                                            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>{job.location} · {job.jobType}</div>
                                        </td>
                                        <td className="muted">{job.company.name}</td>
                                        <td className="muted">{new Date(job.createdAt).toLocaleDateString("vi-VN")}</td>
                                        <td><span className="dash-badge" style={{ background: `${st.color}15`, color: st.color }}>{st.label}</span></td>
                                        <td style={{ textAlign: "right" }}><AdminJobActions jobId={job.id} currentStatus={job.status} /></td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
