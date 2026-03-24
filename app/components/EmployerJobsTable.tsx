"use client";

import { useState } from "react";
import Link from "next/link";
import JobDeleteButton from "@/app/components/JobDeleteButton";

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
    viewCount: number;
    createdAt: string;
    _count: { applications: number };
}

export default function EmployerJobsTable({ jobs }: { jobs: Job[] }) {
    const [statusFilter, setStatusFilter] = useState("ALL");
    const [search, setSearch] = useState("");

    const filtered = jobs.filter((job) => {
        const matchStatus = statusFilter === "ALL" || job.status === statusFilter;
        const matchSearch = !search || job.title.toLowerCase().includes(search.toLowerCase());
        return matchStatus && matchSearch;
    });

    const statusCounts = {
        ALL: jobs.length,
        PENDING: jobs.filter(j => j.status === "PENDING").length,
        ACTIVE: jobs.filter(j => j.status === "ACTIVE").length,
        CLOSED: jobs.filter(j => j.status === "CLOSED").length,
    };

    return (
        <>
            <div className="dash-filter-bar">
                <input className="dash-input" placeholder="Tìm tin tuyển dụng..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="dash-filter-tabs">
                    {[
                        { key: "ALL", label: "Tất cả" },
                        { key: "PENDING", label: "Chờ duyệt" },
                        { key: "ACTIVE", label: "Đang tuyển" },
                        { key: "CLOSED", label: "Đã đóng" },
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

            <div className="dash-table-wrap">
                <table className="dash-table">
                    <thead>
                        <tr>
                            <th>Tiêu đề / Vị trí</th>
                            <th style={{ textAlign: "center" }}>Trạng thái</th>
                            <th>Ứng viên</th>
                            <th className="hide-mobile">Lượt xem</th>
                            <th className="hide-mobile">Ngày đăng</th>
                            <th style={{ textAlign: "center" }}>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr><td colSpan={6} className="dash-empty">Không có tin nào phù hợp bộ lọc</td></tr>
                        ) : (
                            filtered.map((job) => {
                                const st = STATUS_CONFIG[job.status] || { label: job.status, color: "#64748B" };
                                return (
                                    <tr key={job.id}>
                                        <td>
                                            <Link href={`/jobs/${job.slug}`} style={{ color: "var(--text)", textDecoration: "none", fontWeight: 600, fontSize: "0.9375rem" }} target="_blank">
                                                {job.title}
                                            </Link>
                                            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>{job.location || "N/A"} · {job.jobType}</div>
                                        </td>
                                        <td style={{ textAlign: "center" }}><span className="dash-badge" style={{ background: `${st.color}15`, color: st.color }}>{st.label}</span></td>
                                        <td>
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                <span style={{ fontWeight: 600 }}>{job._count.applications}</span>
                                                {job._count.applications > 0 && (
                                                    <Link href={`/employer/jobs/${job.id}/applicants`} className="dash-section-link" style={{ fontSize: "0.75rem" }}>Xem</Link>
                                                )}
                                            </div>
                                        </td>
                                        <td className="muted hide-mobile">{job.viewCount}</td>
                                        <td className="muted hide-mobile">{new Date(job.createdAt).toLocaleDateString("vi-VN")}</td>
                                        <td style={{ textAlign: "center" }}>
                                            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                                                <Link href={`/employer/jobs/${job.id}/edit`} className="dash-btn dash-btn-ghost" style={{ fontSize: "0.75rem", padding: "0.3rem 0.625rem" }}>Sửa</Link>
                                                <JobDeleteButton jobId={job.id} />
                                            </div>
                                        </td>
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
