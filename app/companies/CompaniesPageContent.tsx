"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Avatar from "@/app/components/Avatar";
import { useState, useEffect, useRef } from "react";

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
    const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
    const [industrySearchTerm, setIndustrySearchTerm] = useState("");

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsIndustryDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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

    const stringToColor = (str: string) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const hue = Math.abs(hash % 360);
        return `hsl(${hue}, 55%, 55%)`;
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />

            {/* Header */}
            <div className="cp-header">
                <div className="container-xl">
                    <div className="cp-hero-center">
                        <h1 className="cp-title">
                            Khám phá Doanh nghiệp
                            {currentQ && <span style={{ color: "var(--primary)" }}> "{currentQ}"</span>}
                            {currentIndustry && <span style={{ color: "var(--cta)" }}> — {currentIndustry}</span>}
                        </h1>
                        <p className="cp-subtitle">Tìm hiểu văn hóa, môi trường và cơ hội nghề nghiệp tại các công ty hàng đầu.</p>
                    </div>

                    {/* Search */}
                    <form method="GET" className="cp-search">
                        <div className="cp-search-field">
                            <svg width="18" height="18" fill="none" stroke="var(--primary)" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" /></svg>
                            <input type="text" name="q" defaultValue={currentQ || ""} placeholder="Tên công ty, từ khóa..." />
                        </div>
                        <div className="cp-search-divider" />
                        <div className="cp-search-field cp-search-dropdown-wrap" ref={dropdownRef}>
                            <svg width="18" height="18" fill="none" stroke="var(--primary)" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            <div className="cp-dropdown-trigger" onClick={() => setIsIndustryDropdownOpen(!isIndustryDropdownOpen)}>
                                <span style={{ color: currentIndustry ? "var(--text)" : "var(--text-muted)" }}>
                                    {currentIndustry || "Tất cả lĩnh vực"}
                                </span>
                                <svg width="14" height="14" fill="none" stroke="var(--text-muted)" strokeWidth="2" viewBox="0 0 24 24" style={{ transform: isIndustryDropdownOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                            </div>
                            <input type="hidden" name="industry" value={currentIndustry || ""} />

                            {isIndustryDropdownOpen && (
                                <div className="cp-dropdown-menu">
                                    <div className="cp-dropdown-search-wrap">
                                        <input
                                            type="text"
                                            placeholder="Tìm lĩnh vực..."
                                            value={industrySearchTerm}
                                            onChange={(e) => setIndustrySearchTerm(e.target.value)}
                                            onClick={(e) => e.stopPropagation()}
                                            autoFocus
                                        />
                                    </div>
                                    <div className="cp-dropdown-list">
                                        <div className={`cp-dropdown-item ${!currentIndustry ? "active" : ""}`} onClick={() => { handleFilterChange("industry", ""); setIsIndustryDropdownOpen(false); setIndustrySearchTerm(""); }}>
                                            Tất cả lĩnh vực
                                        </div>
                                        {industryList.filter(ind => ind.toLowerCase().includes(industrySearchTerm.toLowerCase())).map(ind => (
                                            <div key={ind} className={`cp-dropdown-item ${currentIndustry === ind ? "active" : ""}`} onClick={() => { handleFilterChange("industry", ind); setIsIndustryDropdownOpen(false); setIndustrySearchTerm(""); }}>
                                                {ind}
                                            </div>
                                        ))}
                                        {industryList.filter(ind => ind.toLowerCase().includes(industrySearchTerm.toLowerCase())).length === 0 && (
                                            <div className="cp-dropdown-empty">Không tìm thấy</div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <button type="submit" className="btn-primary cp-search-btn">
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" /></svg>
                            Tìm kiếm
                        </button>
                    </form>
                </div>
            </div>

            {/* Main */}
            <main className="cp-main">
                <div className="container-xl">
                    {/* Results bar */}
                    <div className="cp-results-bar">
                        <span className="section-label">DANH SÁCH CÔNG TY</span>
                        <span className="cp-count">Tìm thấy <strong>{total}</strong> công ty</span>
                    </div>

                    {companies.length === 0 ? (
                        <div className="cp-empty">
                            <svg width="48" height="48" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            <h3>Không tìm thấy công ty nào</h3>
                            <p>{currentQ || currentIndustry ? "Thử thay đổi tiêu chí tìm kiếm." : "Hệ thống hiện chưa có công ty nào."}</p>
                            {(currentQ || currentIndustry) && <Link href="/companies" className="btn-primary" style={{ marginTop: "1rem" }}>Xóa bộ lọc</Link>}
                        </div>
                    ) : (
                        <div className="cp-grid">
                            {companies.map((company) => {
                                const accent = stringToColor(company.id);
                                return (
                                    <Link key={company.id} href={`/companies/${company.slug}`} className="cp-card card card-clickable">

                                        <div className="cp-card-body">
                                            {/* Logo + info row */}
                                            <div className="cp-card-row">
                                                <Avatar
                                                    src={company.logo}
                                                    alt={company.name}
                                                    fallback={company.name}
                                                    size={48}
                                                    style={{
                                                        borderRadius: "10px",
                                                        border: "1.5px solid var(--border)",
                                                        objectFit: "contain",
                                                        padding: "4px",
                                                        backgroundColor: "#fff",
                                                    }}
                                                />
                                                <div className="cp-card-titleblock">
                                                    <h3 className="cp-card-name">
                                                        {company.name}
                                                        {company.verified && (
                                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="#10B981" style={{ flexShrink: 0 }}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                                        )}
                                                    </h3>
                                                    <div className="cp-card-tags">
                                                        {company.industry && <span className="tag">{company.industry}</span>}
                                                        {company.locations && company.locations.length > 0 && (
                                                            <span className="tag">{company.locations[0]}{company.locations.length > 1 && ` +${company.locations.length - 1}`}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="cp-card-desc">
                                                {company.description ? company.description.replace(/<[^>]*>?/gm, "") : "Chưa có mô tả chi tiết cho công ty này."}
                                            </p>

                                            {/* Footer */}
                                            <div className="cp-card-footer">
                                                <span className="cp-card-jobcount">
                                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7h-4V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" /></svg>
                                                    {company._count.jobs} việc làm
                                                </span>
                                                <span className="cp-card-link">
                                                    Xem chi tiết
                                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="cp-pagination">
                            {page > 1 && (
                                <Link href={buildPageUrl(page - 1)} className="cp-page-btn">
                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                                    Trước
                                </Link>
                            )}
                            <div className="cp-page-nums">
                                {Array.from({ length: totalPages }, (_, i) => i + 1)
                                    .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                                    .map((p, idx, arr) => (
                                        <span key={p}>
                                            {idx > 0 && arr[idx - 1] !== p - 1 && <span className="cp-page-dots">···</span>}
                                            <Link href={buildPageUrl(p)} className={`cp-page-num ${p === page ? "active" : ""}`}>{p}</Link>
                                        </span>
                                    ))}
                            </div>
                            {page < totalPages && (
                                <Link href={buildPageUrl(page + 1)} className="cp-page-btn">
                                    Sau
                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </main>

            <Footer />

            <style jsx global>{`
                /* ===== HEADER ===== */
                .cp-header {
                    background: var(--bg-card);
                    border-bottom: 1.5px solid var(--border);
                    padding: 2.5rem 0 2rem;
                }
                .cp-hero-center {
                    text-align: center;
                    margin-bottom: 1.5rem;
                }
                .cp-title {
                    font-size: clamp(1.5rem, 3vw, 2rem);
                    font-weight: 800;
                    color: var(--text);
                    margin-bottom: 0.5rem;
                }
                .cp-subtitle {
                    color: var(--text-muted);
                    font-size: 0.9375rem;
                    margin: 0 auto;
                    max-width: 520px;
                }

                /* ===== SEARCH ===== */
                .cp-search {
                    display: flex;
                    background: var(--bg-card);
                    border: 2px solid var(--border);
                    border-radius: 12px;
                    overflow: hidden;
                    max-width: 760px;
                    margin: 0 auto;
                    transition: border-color 200ms;
                }
                .cp-search:focus-within {
                    border-color: var(--primary);
                }
                .cp-search-field {
                    display: flex;
                    align-items: center;
                    gap: 0.625rem;
                    padding: 0 1rem;
                    flex: 1;
                    min-width: 0;
                }
                .cp-search-field input {
                    border: none;
                    background: transparent;
                    outline: none;
                    font-size: 0.9375rem;
                    color: var(--text);
                    width: 100%;
                    padding: 0.875rem 0;
                    font-family: inherit;
                }
                .cp-search-field input::placeholder {
                    color: var(--text-muted);
                }
                .cp-search-divider {
                    width: 1.5px;
                    align-self: center;
                    height: 24px;
                    background: var(--border);
                    flex-shrink: 0;
                }
                .cp-search-dropdown-wrap {
                    position: relative;
                    flex: 0.7;
                }
                .cp-dropdown-trigger {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    cursor: pointer;
                    flex: 1;
                    font-size: 0.9375rem;
                    white-space: nowrap;
                    overflow: hidden;
                    user-select: none;
                    gap: 0.5rem;
                }
                .cp-dropdown-menu {
                    position: absolute;
                    top: calc(100% + 10px);
                    left: -1rem;
                    right: -1rem;
                    background: var(--bg-card);
                    border: 1px solid var(--border);
                    border-radius: 10px;
                    box-shadow: var(--shadow-lg);
                    z-index: 100;
                    overflow: hidden;
                }
                .cp-dropdown-search-wrap {
                    padding: 0.625rem;
                    border-bottom: 1px solid var(--border);
                }
                .cp-dropdown-search-wrap input {
                    width: 100%;
                    padding: 0.5rem 0.75rem;
                    border: 1px solid var(--border);
                    border-radius: 6px;
                    background: var(--bg);
                    color: var(--text);
                    font-size: 0.875rem;
                    outline: none;
                }
                .cp-dropdown-search-wrap input:focus {
                    border-color: var(--primary);
                }
                .cp-dropdown-list {
                    max-height: 220px;
                    overflow-y: auto;
                }
                .cp-dropdown-item {
                    padding: 0.625rem 1rem;
                    font-size: 0.875rem;
                    cursor: pointer;
                    color: var(--text);
                    transition: background 150ms;
                }
                .cp-dropdown-item:hover {
                    background: var(--bg);
                }
                .cp-dropdown-item.active {
                    color: var(--primary);
                    font-weight: 600;
                    background: var(--tag-bg);
                }
                .cp-dropdown-empty {
                    padding: 1rem;
                    text-align: center;
                    color: var(--text-muted);
                    font-size: 0.875rem;
                }
                .cp-search-btn {
                    border-radius: 0 10px 10px 0 !important;
                    white-space: nowrap;
                    flex-shrink: 0;
                }

                /* ===== MAIN ===== */
                .cp-main {
                    flex: 1;
                    background: var(--bg);
                    padding: 2.5rem 0 4rem;
                }
                .cp-results-bar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }
                .cp-count {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                }
                .cp-count strong {
                    color: var(--text);
                    font-weight: 700;
                }

                /* ===== GRID ===== */
                .cp-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
                    gap: 1.25rem;
                }

                /* ===== CARD ===== */
                .cp-card {
                    text-decoration: none !important;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    padding: 0 !important;
                }

                .cp-card-body {
                    padding: 1.25rem 1.5rem 1.25rem;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }
                .cp-card-row {
                    display: flex;
                    gap: 1rem;
                    align-items: flex-start;
                    margin-bottom: 0.875rem;
                }

                .cp-card-titleblock {
                    flex: 1;
                    min-width: 0;
                }
                .cp-card-name {
                    font-size: 1rem;
                    font-weight: 700;
                    color: var(--text);
                    margin: 0 0 0.375rem;
                    display: flex;
                    align-items: center;
                    gap: 0.375rem;
                    line-height: 1.3;
                }
                .cp-card-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.375rem;
                }
                .cp-card-tags .tag {
                    font-size: 0.75rem;
                    padding: 0.125rem 0.5rem;
                }
                .cp-card-desc {
                    font-size: 0.8125rem;
                    color: var(--text-muted);
                    line-height: 1.6;
                    margin: 0;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    flex: 1;
                }
                .cp-card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 1rem;
                    padding-top: 0.875rem;
                    border-top: 1px solid var(--border);
                }
                .cp-card-jobcount {
                    display: flex;
                    align-items: center;
                    gap: 0.375rem;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    color: var(--text-muted);
                }
                .cp-card-link {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    font-size: 0.8125rem;
                    font-weight: 700;
                    color: var(--primary);
                    transition: gap 200ms;
                }
                .cp-card:hover .cp-card-link {
                    gap: 0.5rem;
                }

                /* ===== EMPTY ===== */
                .cp-empty {
                    text-align: center;
                    padding: 4rem 2rem;
                    background: var(--bg-card);
                    border: 1.5px solid var(--border);
                    border-radius: 12px;
                    max-width: 480px;
                    margin: 0 auto;
                }
                .cp-empty h3 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--text);
                    margin: 1rem 0 0.5rem;
                }
                .cp-empty p {
                    color: var(--text-muted);
                    font-size: 0.9375rem;
                }

                /* ===== PAGINATION ===== */
                .cp-pagination {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5rem;
                    margin-top: 3rem;
                    flex-wrap: wrap;
                }
                .cp-page-nums {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                }
                .cp-page-num {
                    width: 36px;
                    height: 36px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.875rem;
                    color: var(--text);
                    background: var(--bg-card);
                    border: 1.5px solid var(--border);
                    text-decoration: none;
                    transition: all 150ms;
                }
                .cp-page-num:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                }
                .cp-page-num.active {
                    background: var(--primary);
                    color: #fff;
                    border-color: var(--primary);
                }
                .cp-page-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.375rem;
                    padding: 0 1rem;
                    height: 36px;
                    border-radius: 8px;
                    background: var(--bg-card);
                    border: 1.5px solid var(--border);
                    color: var(--text);
                    font-weight: 600;
                    font-size: 0.875rem;
                    text-decoration: none;
                    transition: all 150ms;
                }
                .cp-page-btn:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                }
                .cp-page-dots {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 28px;
                    color: var(--text-muted);
                    font-size: 0.875rem;
                    letter-spacing: 1px;
                }

                /* ===== RESPONSIVE ===== */
                @media (max-width: 768px) {
                    .cp-search {
                        flex-direction: column;
                        border-radius: 10px;
                    }
                    .cp-search-field {
                        padding: 0.75rem 1rem;
                        border-bottom: 1px solid var(--border);
                    }
                    .cp-search-divider { display: none; }
                    .cp-search-btn {
                        border-radius: 0 0 8px 8px !important;
                        width: 100%;
                        justify-content: center;
                    }
                    .cp-search-dropdown-wrap {
                        flex: none;
                    }
                    .cp-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1rem;
                    }
                }
                @media (max-width: 640px) {
                    .cp-header { padding: 1.75rem 0 1.5rem; }
                    .cp-grid { grid-template-columns: 1fr; }
                    .cp-results-bar { flex-direction: column; align-items: flex-start; gap: 0.25rem; }
                    .cp-page-nums { display: none; }
                    .cp-card-row { gap: 0.75rem; }
                }
            `}</style>
        </div>
    );
}
