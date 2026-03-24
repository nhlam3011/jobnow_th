"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import JobCard from "@/app/components/JobCard";

interface SavedJobData {
    job: {
        id: string;
        slug: string;
        title: string;
        company: { name: string; slug: string; logo: string | null; verified: boolean };
        location: string | null;
        salaryMin: number | null;
        salaryMax: number | null;
        jobType: string;
        skills: string[];
        createdAt: Date;
    };
    createdAt: Date;
}

export default function SavedJobsClient({ savedJobs }: { savedJobs: SavedJobData[] }) {
    const [viewMode, setViewMode] = useState<"grid" | "list">("list");
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkTablet = () => {
            const width = window.innerWidth;
            if (width > 640 && width <= 768) {
                setViewMode("list");
            }
            setIsMobile(width <= 640);
        };
        checkTablet();
        window.addEventListener('resize', checkTablet);
        return () => window.removeEventListener('resize', checkTablet);
    }, []);

    if (savedJobs.length === 0) {
        return (
            <div className="card" style={{ padding: "4rem", textAlign: "center" }}>
                <svg width="64" height="64" fill="none" stroke="var(--border)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: "0 auto 1rem" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>
                    Bạn chưa lưu việc làm nào
                </h3>
                <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                    Hãy lưu những việc làm quan tâm để theo dõi và ứng tuyển sau
                </p>
                <Link
                    href="/jobs"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1.5rem",
                        background: "var(--primary)",
                        color: "#fff",
                        borderRadius: "8px",
                        fontWeight: 600,
                        textDecoration: "none"
                    }}
                >
                    Tìm việc làm ngay
                </Link>
            </div>
        );
    }

    return (
        <>
            <div>
                <div className="jobs-grid-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
                    <p style={{ color: "var(--text-muted)", margin: 0 }}>
                        Bạn đang theo dõi <strong style={{ color: "var(--primary)" }}>{savedJobs.length}</strong> việc làm
                    </p>
                    <div style={{ display: "flex", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "8px", padding: "0.25rem" }}>
                        <button
                            onClick={() => setViewMode("grid")}
                            style={{ padding: "0.375rem 0.625rem", borderRadius: "6px", border: "none", background: viewMode === "grid" ? "var(--bg-card)" : "transparent", boxShadow: viewMode === "grid" ? "var(--shadow-sm)" : "none", color: viewMode === "grid" ? "var(--primary)" : "var(--text-muted)", cursor: "pointer", display: "flex", alignItems: "center" }}
                            title="Xem lưới"
                        >
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        </button>
                        <button
                            className="list-toggle-btn"
                            onClick={() => setViewMode("list")}
                            style={{ padding: "0.375rem 0.625rem", borderRadius: "6px", border: "none", background: viewMode === "list" ? "var(--bg-card)" : "transparent", boxShadow: viewMode === "list" ? "var(--shadow-sm)" : "none", color: viewMode === "list" ? "var(--primary)" : "var(--text-muted)", cursor: "pointer", display: "flex", alignItems: "center" }}
                            title="Xem danh sách"
                        >
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                    </div>
                </div>

                <div className={viewMode === "grid" ? "jobs-grid" : "jobs-list-layout"}>
                    {savedJobs.map(({ job, createdAt }) => (
                        <JobCard
                            key={job.id}
                            id={job.id}
                            slug={job.slug}
                            title={job.title}
                            company={job.company.name}
                            logo={job.company.logo || undefined}
                            verified={job.company.verified}
                            location={job.location}
                            salary={job.salaryMin || job.salaryMax ?
                                (job.salaryMin && job.salaryMax ?
                                    `${job.salaryMin.toLocaleString('vi-VN')}–${job.salaryMax.toLocaleString('vi-VN')} đ` :
                                    job.salaryMin ?
                                        `Từ ${job.salaryMin.toLocaleString('vi-VN')} đ` :
                                        `Đến ${job.salaryMax?.toLocaleString('vi-VN')} đ`) :
                                "Thỏa thuận"}
                            type={job.jobType}
                            skills={job.skills}
                            posted={new Date(job.createdAt).toLocaleDateString("vi-VN")}
                            featured={false}
                            layout={isMobile ? "list" : viewMode}
                            saved={true}
                            savedDate={`Đã lưu: ${new Date(createdAt).toLocaleDateString("vi-VN")}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 640px) {
                    :global(.list-toggle-btn) {
                        display: none !important;
                    }
                    :global(.jobs-grid) {
                        display: none !important;
                    }
                    :global(.jobs-list-layout) {
                        display: flex !important;
                    }
                }
            `}</style>
        </>
    );
}
