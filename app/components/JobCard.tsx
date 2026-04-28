"use client";

import Link from "next/link";
import SaveJobButton from "./SaveJobButton";
import Avatar from "./Avatar";
import MatchHeatmap from "./MatchHeatmap";
import { useState, useEffect } from "react";
import { calculateMatchData } from "@/app/actions/match";
import { JOB_TYPE_LABELS, JOB_TYPE_COLORS } from "@/lib/utils";

interface JobCardProps {
    id: string;
    slug?: string;
    title: string;
    company: string;
    location: string | null;
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
    experienceYears?: number;
    ageMin?: number;
    ageMax?: number;
    deadlineDate?: string | Date;
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
    experienceYears,
    ageMin,
    ageMax,
    deadlineDate,
}: JobCardProps) {
    const [matchData, setMatchData] = useState<any>(null);
    const [loadingMatch, setLoadingMatch] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // AI score calculation
        if (!matchData && !loadingMatch) {
            handleFetchMatch();
        }
    }, [id]);

    const handleFetchMatch = async () => {
        if (!matchData && !loadingMatch) {
            setLoadingMatch(true);
            try {
                const data = await calculateMatchData(id);
                setMatchData(data);
            } catch (e) {
                console.error("Match error:", e);
            } finally {
                setLoadingMatch(false);
            }
        }
    };

    const toggleModal = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setShowModal(!showModal);
    };

    const typeLabel = (JOB_TYPE_LABELS[type] || type) ?? "Khác";
    const typeColor = (JOB_TYPE_COLORS[type] || JOB_TYPE_COLORS[typeLabel]) ?? "#0369A1";

    const getScoreColor = (s: number) => {
        if (s >= 80) return "#16A34A";
        if (s >= 50) return "#F59E0B";
        return "#EF4444";
    };

    const getTimeLeft = (dateStr: string | Date | undefined) => {
        if (!dateStr) return null;
        const target = new Date(dateStr);
        const now = new Date();
        const diff = target.getTime() - now.getTime();
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        if (days < 0) return { text: "Hết hạn", expired: true };
        if (days === 0) return { text: "Hết hạn hôm nay", expired: false };
        return { text: `Còn ${days} ngày`, expired: false };
    };

    const timeLeft = getTimeLeft(deadlineDate);

    return (
        <Link
            href={`/jobs/${slug || id}`}
            style={{ textDecoration: "none", display: "block", height: "100%" }}
        >
            <article className={`job-card ${featured ? "featured" : ""} ${layout === "list" ? "layout-list" : ""}`}>
                <div className="job-card-main-body">
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
                                objectFit: "contain",
                                padding: "4px",
                            }}
                        />
                    </div>
                    <div className="job-card-info-group">
                        <div className="job-card-header">
                            <h3 className="job-title" title={title}>
                                <span className="job-title-text">{title || "Tuyển dụng"}</span>
                                {featured && (
                                    <span style={{ fontSize: "0.65rem", backgroundColor: "linear-gradient(to right, #FDE047, #F59E0B)", background: "#FEF08A", color: "#A16207", padding: "2px 6px", borderRadius: "4px", fontWeight: "bold", border: "1px solid #FDE047", flexShrink: 0 }}>
                                        VIP
                                    </span>
                                )}
                            </h3>
                        </div>
                        <div className="company-info">
                            <p className="company-name">
                                {company || "Công ty ẩn danh"}
                                {verified && (
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#16A34A">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                    </svg>
                                )}
                            </p>
                        </div>

                        <div className="job-card-meta">
                            <div className="meta-row-first">
                                <span className="type-badge-inline" style={{ background: `${typeColor}15`, color: typeColor }}>
                                    {typeLabel}
                                </span>
                                {timeLeft && (
                                    <span className={`deadline-tag ${timeLeft.expired ? "expired" : ""}`}>
                                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {timeLeft.text}
                                    </span>
                                )}
                            </div>
                            <div className="meta-row-tags">
                                <span className="meta-tag">
                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                                    </svg>
                                    {location || "N/A"}
                                </span>
                                <span className="meta-tag salary">
                                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {salary}
                                </span>
                            </div>
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
                    </div>
                </div>

                <div className="job-card-footer">
                    <span className="posted-time">{posted}</span>
                    <div className="job-card-action">
                        {matchData?.status === "SUCCESS" && (
                            <div
                                className="ai-score-badge-inline"
                                onClick={toggleModal}
                                style={{
                                    background: `linear-gradient(135deg, ${getScoreColor(matchData.score)}, #0091ffff)`,
                                } as any}
                            >
                                ✨ {Math.round(matchData.score)}%
                            </div>
                        )}
                        <SaveJobButton jobId={id} initialSaved={saved} />
                    </div>
                </div>

                {/* AI Match Modal (Universal) */}
                {showModal && (
                    <div
                        className="match-modal"
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowModal(false); }}
                    >
                        <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
                            <button className="close-modal" onClick={() => setShowModal(false)}>×</button>
                            {loadingMatch ? (
                                <div className="loading-match">Đang phân tích...</div>
                            ) : matchData?.status === "SUCCESS" ? (
                                <MatchHeatmap
                                    score={matchData.score}
                                    factors={matchData.factors}
                                    size={220}
                                />
                            ) : matchData?.status === "PROFILE_INCOMPLETE" ? (
                                <div className="no-match-data">
                                    <p>Vui lòng hoàn thiện hồ sơ ứng viên để AI có thể phân tích độ phù hợp.</p>
                                    <a href="/profile" className="btn-primary" style={{ marginTop: "1rem", fontSize: "0.875rem" }}>Cập nhật ngay</a>
                                </div>
                            ) : matchData?.status === "UNAUTHENTICATED" ? (
                                <div className="no-match-data">Vui lòng đăng nhập để xem thông số AI Fit.</div>
                            ) : (
                                <div className="no-match-data">Dữ liệu AI cho việc làm này đang được cập nhật...</div>
                            )}
                        </div>
                    </div>
                )}
            </article>

            <style jsx>{`
                .job-card {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    padding: 0.875rem;
                    background: var(--bg-card);
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

                /* AI Match Badge */
                .ai-score-badge-inline {
                    display: flex;
                    align-items: center;
                    gap: 0.375rem;
                    padding: 0.25rem 0.75rem;
                    border-radius: 100px;
                    color: white;
                    font-size: 0.6875rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: transform 0.2s;
                    white-space: nowrap;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }
                .ai-score-badge-inline:hover {
                    transform: scale(1.05);
                }

                /* AI Match Modal */
                .match-modal {
                    position: fixed;
                    inset: 0;
                    z-index: 9999;
                    background: rgba(0, 0, 0, 0.4);
                    backdrop-filter: blur(8px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    animation: fadeIn 0.3s ease;
                }
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                .modal-inner {
                    width: 100%;
                    max-width: 500px;
                    background: var(--bg-card);
                    border-radius: 20px;
                    padding: 2.5rem 2rem 2rem;
                    position: relative;
                    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
                    animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                @media (max-width: 640px) {
                    .modal-inner { max-width: 320px; padding: 2.5rem 1.25rem 1.25rem; }
                }
                @keyframes scaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                .close-modal {
                    position: absolute; top: 0.75rem; right: 0.75rem;
                    width: 32px; height: 32px; border-radius: 50%;
                    border: none; background: var(--bg); color: var(--text);
                    font-size: 1.25rem; display: flex; align-items: center; justify-content: center;
                    cursor: pointer;
                }

                .job-card-main-body {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                    align-items: flex-start;
                    width: 100%;
                }
                .job-card-logo { flex-shrink: 0; }
                .job-card-content { flex: 1; min-width: 0; }
                .job-card-info-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                    min-width: 0;
                    width: 100%;
                    align-items: flex-start;
                    text-align: left;
                }
                .job-card-header { width: 100%; text-align: left; }
                .job-title {
                    font-size: 1.0625rem;
                    font-weight: 700;
                    color: var(--text);
                    margin: 0;
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    min-width: 0;
                    text-align: left;
                }
                .job-title-text {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    min-width: 0;
                }
                .company-info { width: 100%; text-align: left; }
                .company-name {
                    font-size: 0.875rem;
                    color: var(--text-muted);
                    font-weight: 500;
                    margin: 0;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    text-align: left;
                }

                .job-card-meta {
                    display: flex;
                    flex-direction: column;
                    gap: 0.625rem;
                    margin-top: 1rem;
                }
                
                .meta-row-first {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 0.25rem;
                }

                .meta-row-tags {
                    display: flex;
                    flex-direction: column;
                    gap: 0.4rem;
                }

                .type-badge-inline {
                    padding: 0.25rem 0.625rem;
                    border-radius: 6px;
                    font-size: 0.625rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    white-space: nowrap;
                }

                .deadline-tag {
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    padding: 0.25rem 0.625rem;
                    border-radius: 6px;
                    font-size: 0.625rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: #D97706;
                    background: rgba(217, 119, 6, 0.1);
                    white-space: nowrap;
                }
                .deadline-tag.expired {
                    color: #EF4444;
                    background: rgba(239, 68, 68, 0.1);
                }

                .meta-tag {
                    display: flex;
                    align-items: center;
                    gap: 0.375rem;
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    font-weight: 500;
                }
                .meta-tag.salary { color: var(--primary); font-weight: 700; }
                :global([data-theme="dark"]) .meta-tag.salary {
                    color: var(--primary-light);
                }

                .job-card-skills-row { margin-top: 1.25rem; min-width: 0; width: 100%; }
                .job-card-skills {
                    display: flex; flex-wrap: nowrap; align-items: center; gap: 0.375rem;
                    overflow-x: auto; scrollbar-width: none;
                }
                .job-card-skills::-webkit-scrollbar { display: none; }
                .skill-tag {
                    font-size: 0.6875rem; font-weight: 500; padding: 0.375rem 0.75rem;
                    border-radius: 6px; border: 1px solid var(--border); color: var(--text-muted); white-space: nowrap;
                }

                .job-card-footer {
                    display: flex; justify-content: space-between; align-items: center;
                    padding-top: 0.75rem;
                    margin-top: .75rem;
                    border-top: 1px solid var(--border);
                    position: relative; z-index: 20;
                }
                .posted-time { font-size: 0.75rem; color: var(--text-muted); white-space: nowrap; }
                .job-card-action { display: flex; align-items: center; gap: 0.75rem; }

                /* Tablets/Mobile Adjustments */
                @media (max-width: 768px) {
                    .job-title { 
                        white-space: nowrap; 
                        overflow: hidden;
                        text-overflow: ellipsis;
                        padding-right: 0; 
                        font-size: 1rem;
                    }
                    .company-name { white-space: nowrap; padding-right: 0; }
                    .job-card-meta { flex-direction: column; gap: 0.5rem; }
                    .meta-row-first { flex-wrap: wrap; }
                    .meta-tag { font-size: 0.9rem; }
                    .job-card-footer { margin-top: 0.75rem; }
                }

                /* Desktop List Layout */
                @media (min-width: 768px) {
                    .job-card.layout-list {
                        padding: 1.5rem;
                    }
                    .job-card.layout-list .job-card-main-body {
                        display: grid;
                        grid-template-columns: 44px 1fr;
                        gap: 1.5rem;
                        align-items: flex-start;
                    }
                    .job-card.layout-list .job-card-info-group {
                        grid-column: 2;
                    }
                    .job-card.layout-list .job-card-meta {
                        margin-top: 0.5rem;
                    }
                    .job-card.layout-list .job-card-footer {
                        border-top: none;
                        padding-top: 0.75rem;
                        margin-top: 0.5rem;
                        padding-left: calc(44px + 1.5rem);
                    }
                }
            `}</style>
        </Link>
    );
}
