"use client";

import Link from "next/link";
import SaveJobButton from "./SaveJobButton";

interface JobCardProps {
    id: string;
    slug?: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string; // Full-time, Part-time, Remote
    skills: string[];
    logo?: string;
    posted: string;
    featured?: boolean;
    saved?: boolean;
    savedDate?: string;
    layout?: "grid" | "list";
}

export default function JobCard({
    id,
    slug,
    title,
    company,
    location,
    salary,
    type,
    skills,
    logo,
    posted,
    featured = false,
    saved = false,
    savedDate,
    layout = "grid",
}: JobCardProps) {
    const typeColors: Record<string, string> = {
        Remote: "#22C55E",
        "Full-time": "#0369A1",
        "Part-time": "#F59E0B",
        Internship: "#A855F7",
    };
    const typeColor = typeColors[type] ?? "#0369A1";

    const isList = layout === "list";

    return (
        <Link
            href={`/jobs/${slug || id}`}
            style={{ textDecoration: "none", display: "block", height: "100%" }}
            className="card-clickable"
        >
            <article
                className={`card job-card-article ${isList ? 'is-list' : 'is-grid'}`}
            >
                {featured && (
                    <div className="featured-gradient" />
                )}

                {/* Left section: Logo & Header info */}
                <div className="job-card-left">
                    {/* Company logo */}
                    <div
                        style={{
                            width: isList ? "56px" : "44px",
                            height: isList ? "56px" : "44px",
                            borderRadius: "10px",
                            background: logo ? "transparent" : "var(--tag-bg)",
                            border: "1.5px solid var(--border)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            color: "var(--primary)",
                        }}
                    >
                        {logo ? (
                            <img src={logo} alt={company} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }} />
                        ) : (
                            company.charAt(0).toUpperCase()
                        )}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                        <h3
                            style={{
                                fontSize: isList ? "1.0625rem" : "0.9375rem",
                                fontWeight: 700,
                                color: "var(--text)",
                                marginBottom: "0.25rem",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                minHeight: "1.2em",
                            }}
                            title={title}
                        >
                            {title || "Tuyển dụng"}
                        </h3>
                        <p style={{
                            fontSize: "0.875rem",
                            color: "var(--text-muted)",
                            fontWeight: 500,
                            margin: 0,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            minHeight: "1.2em",
                        }} title={company}>{company || "Công ty ẩn danh"}</p>

                        {/* Status/Type tags inline for List View */}
                        {isList && type && (
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
                                <span style={{
                                    padding: "0.2rem 0.625rem",
                                    borderRadius: "100px",
                                    fontSize: "0.6875rem",
                                    fontWeight: 600,
                                    background: `${typeColor}18`,
                                    color: typeColor,
                                    whiteSpace: "nowrap"
                                }}>
                                    {type}
                                </span>
                                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                                    {posted}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Type badge (Grid view only) */}
                    {!isList && type && (
                        <span
                            style={{
                                padding: "0.2rem 0.625rem",
                                borderRadius: "100px",
                                fontSize: "0.6875rem",
                                fontWeight: 600,
                                background: `${typeColor}18`,
                                color: typeColor,
                                whiteSpace: "nowrap",
                                flexShrink: 0,
                            }}
                        >
                            {type}
                        </span>
                    )}
                </div>

                {/* Middle section: Extra Info & Skills */}
                <div className="job-card-middle">
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "nowrap", overflow: "hidden" }}>
                        {[
                            {
                                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
                                text: location,
                            },
                            {
                                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
                                text: salary,
                            },
                        ].map((item) => (
                            <div
                                key={item.text}
                                style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "var(--text-muted)", fontSize: "0.875rem", fontWeight: 500, minWidth: 0 }}
                            >
                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                </svg>
                                <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} title={item.text}>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Skills (Horizontal scroll/hidden overflow) */}
                    <div className="job-card-skills" style={{
                        display: "flex",
                        flexWrap: "nowrap", /* Changed to nowrap for straight alignment */
                        gap: "0.5rem",
                        overflowX: "auto",
                        overflowY: "hidden",
                        paddingBottom: "4px", /* Give space for custom scrollbar hiding if needed */
                        scrollbarWidth: "none", /* Firefox */
                        msOverflowStyle: "none", /* IE/Edge */
                    }}>
                        {skills.map((skill) => (
                            <span key={skill} style={{
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                padding: "0.375rem 0.75rem",
                                borderRadius: "6px",
                                background: "var(--bg)",
                                border: "1px solid var(--border)",
                                color: "var(--text-muted)",
                                whiteSpace: "nowrap",
                                flexShrink: 0
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right/Bottom footer section */}
                <div className="job-card-right">
                    {!isList ? (
                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>
                            {posted}
                        </div>
                    ) : (
                        <div></div>
                    )}

                    <div style={{
                        display: "flex",
                        flexDirection: isList ? "row" : "column",
                        alignItems: isList ? "center" : "flex-end",
                        gap: isList ? "1rem" : "0.5rem",
                    }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "0.5rem",
                                    borderRadius: "8px",
                                    background: isList ? "var(--bg-card)" : "transparent",
                                    border: isList ? "1px solid var(--border)" : "none",
                                    transition: "all 0.2s"
                                }}
                                className={isList ? "hover-primary-border" : ""}
                                title="Lưu việc làm này"
                            >
                                <SaveJobButton jobId={id} initialSaved={saved} />
                            </div>
                        </div>

                        {savedDate && (
                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", whiteSpace: "nowrap", textAlign: "right" }}>
                                {savedDate}
                            </div>
                        )}
                    </div>
                </div>
            </article>

            {/* Thêm một tí xíu CSS hover cho view chi tiết dạng List (nếu muốn) */}
            <style jsx>{`
                .job-card-article {
                    padding: 1.25rem;
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                    display: flex;
                }
                
                .is-grid {
                    flex-direction: column;
                    align-items: stretch;
                    gap: 0;
                }
                .is-grid .job-card-left {
                    display: flex;
                    flex: none;
                    align-items: flex-start;
                    gap: 1rem;
                    margin-bottom: 0.75rem;
                    min-width: 0;
                }
                .is-grid .job-card-middle {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    min-width: 0;
                    gap: 0.75rem;
                    margin-bottom: 1.25rem;
                }
                .is-grid .job-card-right {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: flex-end;
                    gap: 0;
                    margin-top: auto;
                    padding-left: 0;
                    border-left: none;
                    min-width: 100%;
                    width: 100%;
                }
                
                .is-list {
                    flex-direction: row;
                    align-items: center;
                    gap: 1.5rem;
                }
                .is-list .job-card-left {
                    display: flex;
                    flex: 2;
                    align-items: flex-start;
                    gap: 1rem;
                    margin-bottom: 0;
                    min-width: 0;
                    max-width: 40%;
                }
                .is-list .job-card-middle {
                    display: flex;
                    flex-direction: column;
                    flex: 1.5;
                    min-width: 0;
                    max-width: 40%;
                    gap: 0.75rem;
                    margin-bottom: 0;
                }
                .is-list .job-card-right {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 1rem;
                    margin-top: 0;
                    padding-left: 1.5rem;
                    border-left: 1px solid var(--border);
                    min-width: 160px;
                    width: auto;
                }
                
                .featured-gradient {
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: linear-gradient(to bottom right, var(--primary), var(--cta));
                }
                .is-grid .featured-gradient {
                    right: 0;
                    bottom: auto;
                    width: auto;
                    height: 3px;
                }
                .is-list .featured-gradient {
                    right: auto;
                    bottom: 0;
                    width: 4px;
                    height: 100%;
                }
                
                @media (max-width: 860px) {
                    .is-list {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 1rem;
                    }
                    .is-list .job-card-left {
                        flex: none;
                        max-width: 100%;
                        margin-bottom: 0;
                    }
                    .is-list .job-card-middle {
                        flex: none;
                        max-width: 100%;
                        margin-bottom: 0;
                    }
                    .is-list .job-card-right {
                        justify-content: space-between;
                        padding-left: 0;
                        border-left: none;
                        margin-top: 0.5rem;
                        width: 100%;
                        min-width: 0;
                    }
                    .is-list .featured-gradient {
                        right: 0;
                        bottom: auto;
                        width: auto;
                        height: 3px;
                    }
                }

                .hover-primary-bg:hover {
                    background: var(--primary) !important;
                    color: white !important;
                }
            `}</style>
        </Link>
    );
}
