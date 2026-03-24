"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useState } from "react";

interface Company {
    id: string;
    name: string;
    slug: string;
    logo: string | null;
    industry: string | null;
    locations: string[];
    description: string | null;
    website: string | null;
    verified: boolean;
    _count: { jobs: number };
}

interface CompaniesPageContentProps {
    companies: Company[];
    total: number;
    page: number;
    limit: number;
    currentQ?: string;
    currentIndustry?: string;
    industryList: string[];
}

export default function CompaniesPageContent({
    companies,
    total,
    page,
    limit,
    currentQ,
    currentIndustry,
    industryList,
}: CompaniesPageContentProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [showFilters, setShowFilters] = useState(false);

    const totalPages = Math.ceil(total / limit);

    const handleFilterChange = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        params.delete("page");
        router.push(`/companies?${params.toString()}`);
    };

    const buildPageUrl = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (newPage > 1) {
            params.set("page", newPage.toString());
        } else {
            params.delete("page");
        }
        return `/companies?${params.toString()}`;
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />

            {/* Sub-header */}
            <div className="jobs-header">
                <div className="container-xl">

                    {/* Search Bar - Matching Jobs page style */}
                    <div style={{ marginTop: "1rem" }}>
                        <form method="GET" style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                            <div style={{ flex: "1 1 300px", minWidth: "200px" }}>
                                <input
                                    type="text"
                                    name="q"
                                    defaultValue={currentQ || ""}
                                    placeholder="Tìm kiếm công ty..."
                                    style={{
                                        width: "100%",
                                        padding: "0.75rem 1rem",
                                        borderRadius: "8px",
                                        border: "1px solid var(--border)",
                                        background: "var(--bg)",
                                        color: "var(--text)",
                                        fontSize: "0.95rem",
                                        height: "48px",
                                        boxSizing: "border-box",
                                    }}
                                />
                            </div>

                            <select
                                name="industry"
                                defaultValue={currentIndustry || ""}
                                onChange={(e) => handleFilterChange("industry", e.target.value)}
                                style={{
                                    padding: "0.75rem 1rem",
                                    borderRadius: "8px",
                                    border: "1px solid var(--border)",
                                    background: "var(--bg)",
                                    color: "var(--text)",
                                    fontSize: "0.95rem",
                                    height: "48px",
                                    minWidth: "180px",
                                    cursor: "pointer",
                                }}
                            >
                                <option value="">Tất cả ngành nghề</option>
                                {industryList.map((ind) => (
                                    <option key={ind} value={ind}>
                                        {ind}
                                    </option>
                                ))}
                            </select>

                            <button
                                type="submit"
                                className="btn-primary"
                                style={{
                                    padding: "0.75rem 1.5rem",
                                    borderRadius: "8px",
                                    fontWeight: 600,
                                    height: "48px",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <main className="section-sm" style={{ flex: 1, padding: "2rem 1rem" }}>
                <div className="container-xl">
                    {/* Mobile filter toggle */}
                    <div className="filter-toggle" style={{ marginBottom: "1rem" }}>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="btn-outline"
                            style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem" }}
                        >
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            Bộ lọc {showFilters ? "▲" : "▼"}
                        </button>
                    </div>

                    {/* Results count */}
                    <div style={{ marginBottom: "1.5rem", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                        Tìm thấy <strong style={{ color: "var(--text)" }}>{total}</strong> công ty
                    </div>

                    {/* Companies Grid */}
                    {companies.length === 0 ? (
                        <div
                            style={{
                                textAlign: "center",
                                padding: "4rem 2rem",
                                background: "var(--card-bg)",
                                borderRadius: "12px",
                                border: "1px solid var(--border)",
                            }}
                        >
                            <svg
                                style={{ width: "64px", height: "64px", color: "var(--text-muted)", marginBottom: "1rem" }}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>
                                Không tìm thấy công ty nào
                            </h2>
                            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                                {currentQ || currentIndustry
                                    ? "Thử thay đổi tiêu chí tìm kiếm để xem kết quả khác"
                                    : "Hiện chưa có công ty nào trong hệ thống"}
                            </p>
                            {(currentQ || currentIndustry) && (
                                <Link href="/companies" className="btn-primary">
                                    Xem tất cả công ty
                                </Link>
                            )}
                        </div>
                    ) : (
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                                gap: "1.5rem",
                                marginBottom: "2rem",
                            }}
                        >
                            {companies.map((company) => (
                                <Link
                                    key={company.id}
                                    href={`/companies/${company.slug}`}
                                    style={{
                                        display: "block",
                                        background: "var(--card-bg)",
                                        borderRadius: "12px",
                                        border: "1px solid var(--border)",
                                        padding: "1.5rem",
                                        textDecoration: "none",
                                        transition: "all 0.2s ease",
                                    }}
                                    className="company-card"
                                >
                                    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                                        {/* Logo */}
                                        <div
                                            style={{
                                                width: "56px",
                                                height: "56px",
                                                borderRadius: "10px",
                                                background: company.logo ? "transparent" : "var(--tag-bg)",
                                                border: "1.5px solid var(--border)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: 800,
                                                fontSize: "1.25rem",
                                                color: "var(--primary)",
                                                flexShrink: 0,
                                                overflow: "hidden",
                                            }}
                                        >
                                            {company.logo ? (
                                                <img
                                                    src={company.logo}
                                                    alt={company.name}
                                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                />
                                            ) : (
                                                company.name.charAt(0)
                                            )}
                                        </div>

                                        {/* Info */}
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                                                <h3
                                                    style={{
                                                        fontSize: "1.1rem",
                                                        fontWeight: 700,
                                                        color: "var(--text)",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    {company.name}
                                                </h3>
                                                {company.verified && (
                                                    <svg
                                                        style={{ width: "16px", height: "16px", color: "#10B981", flexShrink: 0 }}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                )}
                                            </div>
                                            {company.industry && (
                                                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>{company.industry}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "1rem",
                                            paddingTop: "1rem",
                                            borderTop: "1px solid var(--border)",
                                        }}
                                    >
                                        {company.locations && company.locations.length > 0 && (
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "var(--text-muted)", fontSize: "0.875rem" }}>
                                                <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {company.locations?.[0] || "N/A"}
                                            </div>
                                        )}
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "var(--text-muted)", fontSize: "0.875rem" }}>
                                            <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span style={{ color: company._count.jobs > 0 ? "var(--primary)" : "var(--text-muted)" }}>
                                                {company._count.jobs} việc làm
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                            {page > 1 && (
                                <Link
                                    href={buildPageUrl(page - 1)}
                                    style={{
                                        padding: "0.5rem 1rem",
                                        borderRadius: "6px",
                                        border: "1px solid var(--border)",
                                        background: "var(--bg)",
                                        color: "var(--text)",
                                        textDecoration: "none",
                                        fontSize: "0.9rem",
                                        minWidth: "80px",
                                        textAlign: "center",
                                    }}
                                >
                                    ← Trước
                                </Link>
                            )}

                            {Array.from({ length: totalPages }, (_, i) => i + 1)
                                .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                                .map((p, idx, arr) => (
                                    <span key={p}>
                                        {idx > 0 && arr[idx - 1] !== p - 1 && (
                                            <span style={{ padding: "0.5rem", color: "var(--text-muted)" }}>...</span>
                                        )}
                                        <Link
                                            href={buildPageUrl(p)}
                                            style={{
                                                padding: "0.5rem 1rem",
                                                borderRadius: "6px",
                                                border: "1px solid var(--border)",
                                                background: p === page ? "var(--primary)" : "var(--bg)",
                                                color: p === page ? "white" : "var(--text)",
                                                textDecoration: "none",
                                                fontSize: "0.9rem",
                                                fontWeight: p === page ? 600 : 400,
                                                minWidth: "40px",
                                                textAlign: "center",
                                                display: "inline-block",
                                            }}
                                        >
                                            {p}
                                        </Link>
                                    </span>
                                ))}

                            {page < totalPages && (
                                <Link
                                    href={buildPageUrl(page + 1)}
                                    style={{
                                        padding: "0.5rem 1rem",
                                        borderRadius: "6px",
                                        border: "1px solid var(--border)",
                                        background: "var(--bg)",
                                        color: "var(--text)",
                                        textDecoration: "none",
                                        fontSize: "0.9rem",
                                        minWidth: "80px",
                                        textAlign: "center",
                                    }}
                                >
                                    Sau →
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </main>

            <Footer />

            <style jsx global>{`
                .company-card:hover {
                    border-color: var(--primary);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    transform: translateY(-2px);
                }
            `}</style>
        </div>
    );
}
