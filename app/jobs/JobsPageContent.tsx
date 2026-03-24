"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SearchBar from "@/app/components/SearchBar";
import JobCard from "@/app/components/JobCard";
import JobFilters from "@/app/components/JobFilters";

interface Industry {
    id: string;
    name: string;
    slug: string;
}

interface SalaryRange {
    value: string;
    label: string;
}

interface Job {
    id: string;
    slug: string;
    title: string;
    location: string;
    salaryMin?: number;
    salaryMax?: number;
    jobType: string;
    skills: string[];
    experienceYears?: number;
    ageMin?: number;
    ageMax?: number;
    createdAt: string;
    company: {
        name: string;
        logo?: string;
        verified?: boolean;
    };
}

interface JobsPageContentProps {
    industries: Industry[];
    locations: string[];
    jobTypes: string[];
    salaryRanges: SalaryRange[];
    initialJobs: Job[];
    initialIndustry?: string;
    searchParams: { q?: string; loc?: string; type?: string; industry?: string; salary?: string; exp?: string; age?: string };
    savedJobIds?: string[];
    totalJobs?: number;
    currentPage?: number;
}

const JOB_TYPE_LABELS: Record<string, string> = {
    FULL_TIME: "Toàn thời gian",
    PART_TIME: "Bán thời gian",
    REMOTE: "Remote",
    INTERNSHIP: "Thực tập",
    CONTRACT: "Hợp đồng"
};

export default function JobsPageContent({
    industries,
    locations,
    jobTypes,
    salaryRanges,
    initialJobs,
    searchParams,
    savedJobIds = [],
    totalJobs = 0,
    currentPage = 1
}: JobsPageContentProps) {
    const router = useRouter();
    const [showFilters, setShowFilters] = useState(false);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const checkTablet = () => {
            const width = window.innerWidth;
            setIsTablet(width > 640 && width <= 768);
            if (width > 640 && width <= 768) {
                setViewMode("list");
            }
        };
        checkTablet();
        window.addEventListener('resize', checkTablet);
        return () => window.removeEventListener('resize', checkTablet);
    }, []);

    const currentIndustry = searchParams.industry
        ? industries.find(i => i.slug === searchParams.industry)?.name
        : null;

    const handleFilterChange = (key: string, value: string) => {
        const params = new URLSearchParams();
        if (searchParams.q) params.set("q", searchParams.q);
        params.set("ai", "true");
        if (searchParams.loc) params.set("loc", searchParams.loc);
        if (value) params.set(key, value);
        router.push(`/jobs?${params.toString()}`);
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />

            {/* Sub-header */}
            <div className="jobs-header">
                <div className="container-xl">
                    <h1 className="jobs-title">
                        Tìm kiếm việc làm
                        {searchParams.q && <span style={{ color: "var(--primary)" }}> "{searchParams.q}"</span>}
                        {currentIndustry && <span style={{ color: "var(--cta)" }}> - {currentIndustry}</span>}
                    </h1>
                    <SearchBar size="lg" />
                </div>
            </div>

            <main className="section-sm jobs-main">
                <div className="container-xl">
                    {/* Mobile filter toggle */}
                    <div className="filter-toggle">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="btn-outline"
                        >
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            Bộ lọc {showFilters ? "▲" : "▼"}
                        </button>
                    </div>

                    {/* Collapsible filters on mobile */}
                    {showFilters && (
                        <div className="filter-mobile">
                            <div className="card" style={{ padding: "1rem" }}>
                                {/* Industries */}
                                <div style={{ marginBottom: "1rem" }}>
                                    <h3 style={{ fontSize: "0.875rem", fontWeight: 700, marginBottom: "0.5rem" }}>Ngành nghề</h3>
                                    <select
                                        value={searchParams.industry || ""}
                                        onChange={(e) => handleFilterChange("industry", e.target.value)}
                                        style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text)" }}
                                    >
                                        <option value="">Tất cả ngành</option>
                                        {industries.map((cat) => (
                                            <option key={cat.id} value={cat.slug}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Locations */}
                                <div style={{ marginBottom: "1rem" }}>
                                    <h3 style={{ fontSize: "0.875rem", fontWeight: 700, marginBottom: "0.5rem" }}>Địa điểm</h3>
                                    <select
                                        value={searchParams.loc || ""}
                                        onChange={(e) => handleFilterChange("loc", e.target.value)}
                                        style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text)" }}
                                    >
                                        <option value="">Tất cả địa điểm</option>
                                        {locations.map((location) => (
                                            <option key={location} value={location}>{location}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Job Types */}
                                <div style={{ marginBottom: "1rem" }}>
                                    <h3 style={{ fontSize: "0.875rem", fontWeight: 700, marginBottom: "0.5rem" }}>Loại hình</h3>
                                    <select
                                        value={searchParams.type || ""}
                                        onChange={(e) => handleFilterChange("type", e.target.value)}
                                        style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text)" }}
                                    >
                                        <option value="">Tất cả loại hình</option>
                                        {jobTypes.map((t) => (
                                            <option key={t} value={t}>{JOB_TYPE_LABELS[t] || t}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Salary */}
                                <div style={{ marginBottom: "1rem" }}>
                                    <h3 style={{ fontSize: "0.875rem", fontWeight: 700, marginBottom: "0.5rem" }}>Mức lương</h3>
                                    <select
                                        value={searchParams.salary || ""}
                                        onChange={(e) => handleFilterChange("salary", e.target.value)}
                                        style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text)" }}
                                    >
                                        <option value="">Tất cả mức lương</option>
                                        {salaryRanges.map((range) => (
                                            <option key={range.value} value={range.value}>{range.label}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Experience */}
                                <div style={{ marginBottom: "1rem" }}>
                                    <h3 style={{ fontSize: "0.875rem", fontWeight: 700, marginBottom: "0.5rem" }}>Kinh nghiệm</h3>
                                    <select
                                        value={searchParams.exp || ""}
                                        onChange={(e) => handleFilterChange("exp", e.target.value)}
                                        style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text)" }}
                                    >
                                        <option value="">Tất cả kinh nghiệm</option>
                                        <option value="0-1">Dưới 1 năm</option>
                                        <option value="1-3">1 - 3 năm</option>
                                        <option value="3-5">3 - 5 năm</option>
                                        <option value="5-10">5 - 10 năm</option>
                                        <option value="10-99">Trên 10 năm</option>
                                    </select>
                                </div>

                                {/* Age */}
                                <div>
                                    <h3 style={{ fontSize: "0.875rem", fontWeight: 700, marginBottom: "0.5rem" }}>Độ tuổi</h3>
                                    <select
                                        value={searchParams.age || ""}
                                        onChange={(e) => handleFilterChange("age", e.target.value)}
                                        style={{ width: "100%", padding: "0.5rem", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text)" }}
                                    >
                                        <option value="">Tất cả độ tuổi</option>
                                        <option value="18-25">18 - 25 tuổi</option>
                                        <option value="25-30">25 - 30 tuổi</option>
                                        <option value="30-35">30 - 35 tuổi</option>
                                        <option value="35-45">35 - 45 tuổi</option>
                                        <option value="45-60">45 - 60 tuổi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="jobs-layout">
                        {/* Sidebar - Desktop only */}
                        <aside className="filter-sidebar">
                            <div style={{ position: "sticky", top: "1rem" }}>
                                <JobFilters
                                    industries={industries}
                                    locations={locations}
                                    jobTypes={jobTypes}
                                    salaryRanges={salaryRanges}
                                />
                            </div>
                        </aside>

                        {/* Job list */}
                        <div className="jobs-list">
                            <div className="jobs-header-row">
                                <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)" }}>
                                    Tìm thấy <strong style={{ color: "var(--primary)" }}>{initialJobs.length}</strong> việc làm
                                    {currentIndustry && <span> trong ngành <strong>{currentIndustry}</strong></span>}
                                </p>
                                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                    <div style={{ display: "flex", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "8px", padding: "0.25rem" }} className="view-toggle-buttons">
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
                                    <select className="jobs-sort-select">
                                        <option>Mới nhất</option>
                                        <option>Lương cao nhất</option>
                                        <option>Lương thấp nhất</option>
                                    </select>
                                </div>
                            </div>

                            {initialJobs.length === 0 ? (
                                <div className="card" style={{ padding: "4rem", textAlign: "center", color: "var(--text-muted)" }}>
                                    <svg width="48" height="48" fill="none" stroke="var(--border)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: "0 auto 1rem" }}>
                                        <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
                                    </svg>
                                    <p style={{ fontWeight: 600 }}>Không tìm thấy việc làm phù hợp</p>
                                    <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>Thử thay đổi từ khóa hoặc bộ lọc</p>
                                </div>
                            ) : (
                                <div className={viewMode === "grid" ? "jobs-grid" : "jobs-list-layout"}>
                                    {initialJobs.map((job) => (
                                        <JobCard
                                            key={job.id}
                                            id={job.id}
                                            slug={job.slug}
                                            title={job.title}
                                            company={job.company.name}
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
                                            logo={job.company.logo}
                                            verified={job.company.verified}
                                            posted={new Date(job.createdAt).toLocaleDateString("vi-VN")}
                                            featured={false}
                                            layout={viewMode}
                                            saved={savedJobIds.includes(job.id)}
                                            experienceYears={job.experienceYears}
                                            ageMin={job.ageMin}
                                            ageMax={job.ageMax}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Pagination */}
                            {totalJobs > 12 && (
                                <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "2rem" }}>
                                    {currentPage > 1 && (
                                        <a
                                            href={`/jobs?${new URLSearchParams(Object.entries({ ...searchParams, page: String(currentPage - 1) }).filter(([_, v]) => v)).toString()}`}
                                            style={{ padding: "0.5rem 1rem", border: "1px solid var(--border)", borderRadius: "6px", color: "var(--text)", textDecoration: "none" }}
                                        >
                                            ← Trang trước
                                        </a>
                                    )}
                                    <span style={{ padding: "0.5rem 1rem", color: "var(--text-muted)" }}>
                                        Trang {currentPage} / {Math.ceil(totalJobs / 12)}
                                    </span>
                                    {currentPage < Math.ceil(totalJobs / 12) && (
                                        <a
                                            href={`/jobs?${new URLSearchParams(Object.entries({ ...searchParams, page: String(currentPage + 1) }).filter(([_, v]) => v)).toString()}`}
                                            style={{ padding: "0.5rem 1rem", border: "1px solid var(--border)", borderRadius: "6px", color: "var(--text)", textDecoration: "none" }}
                                        >
                                            Trang sau →
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <style jsx>{`
                .jobs-header {
                    background: var(--page-header-bg);
                    border-bottom: 1.5px solid var(--border);
                    padding: 2.5rem 0;
                }
                .jobs-title {
                    font-size: clamp(1.5rem, 3vw, 2rem);
                    font-weight: 800;
                    color: var(--text);
                    margin-bottom: 1.25rem;
                }
                .jobs-main {
                    flex: 1;
                    background: var(--bg);
                }
                .filter-toggle {
                    margin-bottom: 1rem;
                }
                .filter-toggle button {
                    width: 100%;
                    justify-content: center;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .filter-mobile {
                    margin-bottom: 1.5rem;
                }
                .jobs-layout {
                    display: grid;
                    grid-template-columns: 260px 1fr;
                    gap: 2rem;
                    align-items: flex-start;
                }
                .jobs-header-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.25rem;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }
                .jobs-sort-select {
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    border: 1.5px solid var(--border);
                    background: var(--bg-card);
                    color: var(--text);
                    font-family: inherit;
                    font-size: 0.875rem;
                    cursor: pointer;
                    outline: none;
                }
                .jobs-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1.125rem;
                    width: 100%;
                    overflow-x: hidden;
                }
                .jobs-list-layout {
                    display: flex;
                    flex-direction: column;
                    gap: 1.125rem;
                    width: 100%;
                }
                
                @media (max-width: 1024px) {
                    .jobs-layout {
                        grid-template-columns: 1fr;
                    }
                    .filter-sidebar {
                        display: none !important;
                    }
                    .filter-toggle, .filter-mobile {
                        display: block !important;
                    }
                }
                
                @media (min-width: 1025px) {
                    .filter-toggle, .filter-mobile {
                        display: none !important;
                    }
                }

                @media (max-width: 640px) {
                    .jobs-header {
                        padding: 1.5rem 0;
                    }
                    .jobs-title {
                        font-size: 1.25rem;
                        margin-bottom: 1rem;
                    }
                    .list-toggle-btn {
                        display: none !important;
                    }
                }

                @media (min-width: 641px) and (max-width: 768px) {
                    .jobs-grid {
                        display: none !important;
                    }
                    .jobs-list-layout {
                        display: flex !important;
                    }
                }
            `}</style>
        </div>
    );
}
