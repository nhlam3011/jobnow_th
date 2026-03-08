"use client";

import Link from "next/link";
import SaveJobButton from "./SaveJobButton";
import Avatar from "./Avatar";

interface JobCardProps {
    id: string;
    slug?: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    skills: string[];
    logo?: string;
    verified?: boolean;
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
    verified = false,
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

    return (
        <Link
            href={`/jobs/${slug || id}`}
            style={{ textDecoration: "none", display: "block", height: "100%" }}
        >
            <article className={`job-card ${featured ? 'featured' : ''} ${layout === 'list' ? 'layout-list' : ''}`}>
                <div className="job-card-row">
                    <div className="job-card-logo">
                        <Avatar
                            src={logo}
                            alt={company}
                            fallback={company}
                            size={44}
                            style={{
                                borderRadius: "12px",
                                border: "1.5px solid var(--border)",
                                fontWeight: 700,
                            }}
                        />
                    </div>
                    <div className="job-card-content">
                        <div className="job-card-header">
                            <h3 className="job-title">{title || "Tuyển dụng"}</h3>
                            <span className="type-badge" style={{ background: `${typeColor}15`, color: typeColor }}>
                                {type}
                            </span>
                        </div>
                        <p className="company-name">
                            {company || "Công ty ẩn danh"}
                            {verified && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="#16A34A">
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                </svg>
                            )}
                        </p>
                    </div>
                </div>
                <div className="job-card-meta">
                    <span className="meta-tag">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        {location}
                    </span>
                    <span className="meta-tag salary">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {salary}
                    </span>
                </div>
                <div className="job-card-skills-row">
                    {skills.length > 0 && (
                        <div className="job-card-skills">
                            {skills.map((skill) => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    )}
                </div>
                <div className="job-card-footer">
                    <span className="posted-time">{posted}</span>
                    <div className="job-card-action">
                        <SaveJobButton jobId={id} initialSaved={saved} />
                    </div>
                </div>
            </article>

            <style jsx>{`
                .job-card {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    padding: 0.875rem;
                    background: var(--card-bg, #fff);
                    border-radius: 10px;
                    border: 1px solid var(--border);
                    transition: all 0.2s ease;
                    min-width: 0;
                    position: relative;
                    overflow: hidden;
                }
                .job-card:hover {
                    border-color: var(--primary);
                    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
                }
                .job-card.featured {
                    border-color: var(--primary);
                    background: linear-gradient(90deg, var(--primary) 0%, var(--cta) 100%);
                    background-size: 100% 3px;
                    background-repeat: no-repeat;
                    background-position: top;
                }

                .job-card-row {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                }

                .job-card-logo {
                    flex-shrink: 0;
                }

                .job-card-content {
                    flex: 1;
                    min-width: 0;
                }

                .job-card-header {
                    min-width: 0;
                    padding-right: 50px;
                }

                .job-title {
                    font-size: 1.0625rem;
                    font-weight: 700;
                    color: var(--text);
                    margin: 0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .company-name {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                    font-weight: 500;
                    margin: 0.375rem 0 0 0;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .job-card-meta {
                    display: flex;
                    flex-direction: column;
                    gap: 0.625rem;
                    margin-top: 1rem;
                }

                .meta-tag {
                    display: flex;
                    align-items: center;
                    gap: 0.375rem;
                    font-size: 0.875rem;
                    color: var(--text-muted);
                    font-weight: 500;
                }
                .meta-tag svg {
                    color: var(--text-light, #9ca3af);
                }
                .meta-tag.salary {
                    color: var(--primary);
                    font-weight: 600;
                }
                .meta-tag.salary svg {
                    color: inherit;
                }

                .type-badge {
                    position: absolute;
                    top: 0;
                    right: 0;
                    border-radius: 0 10px 0 10px;
                    padding: 0.375rem 0.875rem;
                    font-size: 0.6875rem;
                    font-weight: 600;
                    white-space: nowrap;
                    z-index: 2;
                }

                .job-card-skills-row {
                    margin-top: 1.25rem;
                    min-width: 0;
                    width: 100%;
                }

                .job-card-skills {
                    display: flex;
                    flex-wrap: nowrap;
                    align-items: center;
                    gap: 0.375rem;
                    overflow-x: auto;
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none;    /* Firefox */
                }
                
                .job-card-skills::-webkit-scrollbar {
                    display: none; /* Chrome, Safari and Opera */
                }

                .skill-tag {
                    font-size: 0.6875rem;
                    font-weight: 500;
                    padding: 0.375rem 0.75rem;
                    border-radius: 6px;
                    background: transparent;
                    border: 1px solid var(--border-light, #f0f0f0);
                    color: var(--text-muted);
                    white-space: nowrap;
                }

                .job-card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: auto;
                    padding-top: 1.25rem;
                }

                .posted-time {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    white-space: nowrap;
                }
                
                .job-card-action :global(.save-btn) {
                    border: 1px solid var(--border-light, #f0f0f0);
                    background: transparent;
                }
                .job-card-action :global(.save-btn:hover) {
                    border-color: var(--border);
                    background: var(--bg);
                }

                /* Tablet */
                @media (max-width: 768px) and (min-width: 641px) {
                    .job-card {
                        padding: 0.9375rem;
                    }

                    .job-card-row {
                        gap: 0.625rem;
                    }

                    .job-card-logo :global(div) {
                        width: 42px !important;
                        height: 42px !important;
                    }

                    .job-title {
                        font-size: 1rem;
                        white-space: normal;
                        word-break: break-word;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        padding-right: 80px;
                    }

                    .company-name {
                        font-size: 0.8125rem;
                        white-space: normal;
                        word-break: break-word;
                        padding-right: 80px;
                    }

                    .job-card-meta {
                        flex-direction: row;
                        flex-wrap: wrap;
                        gap: 0.5rem;
                    }

                    .meta-tag {
                        font-size: 0.8125rem;
                    }

                    .type-badge {
                        padding: 0.3125rem 0.75rem;
                        font-size: 0.625rem;
                    }

                    .job-card-footer {
                        margin-top: 0.875rem;
                        padding-top: 0.875rem;
                    }
                }

                /* Mobile */
                @media (max-width: 640px) {
                    .job-card {
                        padding: 0.875rem;
                        border-radius: 8px;
                    }

                    .job-card-row {
                        gap: 0.625rem;
                    }

                    .job-card-logo :global(div) {
                        width: 44px !important;
                        height: 44px !important;
                    }



                    .job-title {
                        font-size: 0.9375rem;
                        white-space: normal;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        padding-right: 70px;
                    }

                    .company-name {
                        font-size: 0.8125rem;
                        white-space: normal;
                        word-break: break-word;
                        padding-right: 70px;
                    }

                    .meta-tag {
                        font-size: 0.8125rem;
                    }

                    .job-card-footer {
                        margin-top: 0.75rem;
                        padding-top: 0.75rem;
                    }
                }

                /* Desktop */
                @media (min-width: 768px) {
                    .job-card {
                        padding: 1rem;
                    }

                    .job-card.layout-list {
                        display: grid;
                        grid-template-columns: auto 1fr auto;
                        gap: 1.5rem;
                        align-items: center;
                        padding: 1.25rem;
                    }

                    .job-card.layout-list .job-card-row {
                        grid-column: 1 / 3;
                        margin-bottom: 0;
                        align-items: center;
                        padding-top: 0.25rem;
                    }

                    .job-card.layout-list .job-card-meta {
                        flex-direction: row;
                        align-items: center;
                        gap: 1.25rem;
                        margin-top: 0.5rem;
                    }

                    .job-card.layout-list .job-card-skills-row {
                        grid-column: 2 / 3;
                        grid-row: 2;
                        margin-top: 0;
                    }

                    .job-card.layout-list .job-card-footer {
                        grid-column: 3 / 4;
                        grid-row: 1 / 3;
                        flex-direction: column;
                        align-items: flex-end;
                        justify-content: center;
                        gap: 1rem;
                        margin-top: 0;
                        padding-top: 1.5rem; /* Space for the absolute badge */
                        border-top: none;
                    }
                }
            `}</style>
        </Link >
    );
}
