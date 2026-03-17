"use client";

import { useState, useEffect } from "react";

interface MarketData {
    topSkills: Array<{ skill: string; count: number }>;
    jobTypeDistribution: Array<{ jobType: string; count: number }>;
    topLocations: Array<{ location: string; count: number }>;
    salaryByTitle: Array<{ title: string; avgSalary: number; count: number }>;
    monthlyTrend: Array<{ month: string; count: number }>;
    totalStats: { totalJobs: number; totalCompanies: number; totalCandidates: number; totalApplications: number };
}

const JOB_TYPE_LABEL: Record<string, string> = {
    FULL_TIME: "Toàn thời gian",
    PART_TIME: "Bán thời gian",
    REMOTE: "Remote",
    INTERNSHIP: "Thực tập",
    CONTRACT: "Hợp đồng",
};

const CHART_COLORS = [
    "#0369A1", "#0EA5E9", "#22C55E", "#F59E0B", "#EF4444",
    "#A855F7", "#EC4899", "#14B8A6", "#F97316", "#6366F1",
];

const DONUT_COLORS = ["#0369A1", "#22C55E", "#F59E0B", "#EF4444", "#A855F7"];

const MONTH_NAMES: Record<string, string> = {
    "01": "Th1", "02": "Th2", "03": "Th3", "04": "Th4",
    "05": "Th5", "06": "Th6", "07": "Th7", "08": "Th8",
    "09": "Th9", "10": "Th10", "11": "Th11", "12": "Th12",
};

export default function MarketInsightsClient() {
    const [data, setData] = useState<MarketData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("/api/market-insights")
            .then(res => res.json())
            .then(d => {
                if (d.error) setError(d.error);
                else setData(d);
            })
            .catch(() => setError("Không thể tải dữ liệu"))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
                <div style={{
                    width: "48px", height: "48px",
                    border: "3px solid var(--border)", borderTop: "3px solid var(--primary)",
                    borderRadius: "50%", animation: "spin 0.8s linear infinite",
                    margin: "0 auto 1rem",
                }} />
                <p style={{ color: "var(--text-muted)" }}>Đang phân tích dữ liệu thị trường...</p>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="card" style={{ padding: "3rem", textAlign: "center" }}>
                <p style={{ color: "#EF4444" }}>{error || "Không có dữ liệu"}</p>
            </div>
        );
    }

    const maxSkillCount = Math.max(...data.topSkills.map(s => s.count), 1);
    const maxLocationCount = Math.max(...data.topLocations.map(l => l.count), 1);
    const maxSalary = Math.max(...data.salaryByTitle.map(s => s.avgSalary), 1);
    const totalJobType = data.jobTypeDistribution.reduce((sum, d) => sum + d.count, 0) || 1;
    const maxMonthly = Math.max(...data.monthlyTrend.map(m => m.count), 1);

    return (
        <div>
            {/* Stats Cards - Modern Grid */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1rem",
                marginBottom: "2rem",
            }}>
                {[
                    { label: "Việc làm đang tuyển", value: data.totalStats.totalJobs, color: "#0369A1", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                    { label: "Công ty", value: data.totalStats.totalCompanies, color: "#22C55E", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                    { label: "Ứng viên", value: data.totalStats.totalCandidates, color: "#F59E0B", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
                    { label: "Đơn ứng tuyển", value: data.totalStats.totalApplications, color: "#A855F7", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                ].map((stat) => (
                    <div key={stat.label} style={{
                        background: "var(--bg-card)",
                        borderRadius: "12px",
                        padding: "1.25rem",
                        border: "1px solid var(--border)",
                        position: "relative",
                        overflow: "hidden",
                    }}>
                        <div style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: "60px",
                            height: "60px",
                            background: `${stat.color}10`,
                            borderRadius: "0 12px 0 100%",
                        }} />
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                            <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: `${stat.color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <svg width="18" height="18" fill="none" stroke={stat.color} strokeWidth="1.75" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                                </svg>
                            </div>
                            <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 500 }}>{stat.label}</span>
                        </div>
                        <div style={{ fontSize: "1.75rem", fontWeight: 800, color: stat.color }}>
                            {stat.value.toLocaleString("vi-VN")}
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content - Two Column Layout */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gap: "1.5rem",
                marginBottom: "1.5rem",
            }}>
                {/* Left Column */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {/* Top Skills */}
                    <div style={{
                        background: "var(--bg-card)",
                        borderRadius: "16px",
                        padding: "1.5rem",
                        border: "1px solid var(--border)",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                            <div>
                                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>
                                    Top 10 Kỹ năng được săn đón
                                </h3>
                                <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                                    Kỹ năng được yêu cầu nhiều nhất
                                </p>
                            </div>
                            <div style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "10px",
                                background: "linear-gradient(135deg, #0369A1 0%, #0EA5E9 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            {data.topSkills.slice(0, 8).map((item, idx) => (
                                <div key={item.skill} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                    <span style={{
                                        width: "24px",
                                        height: "24px",
                                        borderRadius: "6px",
                                        background: idx < 3 ? CHART_COLORS[idx] : "var(--tag-bg)",
                                        color: idx < 3 ? "#fff" : "var(--text-muted)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "0.75rem",
                                        fontWeight: 700,
                                    }}>
                                        {idx + 1}
                                    </span>
                                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)", flex: 1 }}>{item.skill}</span>
                                    <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: CHART_COLORS[idx] }}>{item.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Locations */}
                    <div style={{
                        background: "var(--bg-card)",
                        borderRadius: "16px",
                        padding: "1.5rem",
                        border: "1px solid var(--border)",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                            <div>
                                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>
                                    Top địa điểm tuyển dụng
                                </h3>
                                <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                                    Các thành phố có nhu cầu cao nhất
                                </p>
                            </div>
                            <div style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "10px",
                                background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                </svg>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            {data.topLocations.slice(0, 6).map((item, idx) => (
                                <div key={item.location}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
                                        <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <span style={{
                                                width: "20px",
                                                height: "20px",
                                                borderRadius: "50%",
                                                background: idx < 3 ? "#22C55E" : "var(--tag-bg)",
                                                color: idx < 3 ? "#fff" : "var(--text-muted)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "0.625rem",
                                                fontWeight: 700,
                                            }}>
                                                {idx + 1}
                                            </span>
                                            {item.location}
                                        </span>
                                        <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--primary)" }}>{item.count} tin</span>
                                    </div>
                                    <div style={{ height: "6px", background: "var(--tag-bg)", borderRadius: "3px", overflow: "hidden" }}>
                                        <div style={{
                                            height: "100%",
                                            width: `${(item.count / maxLocationCount) * 100}%`,
                                            background: idx < 3 ? "linear-gradient(90deg, #22C55E, #16A34A)" : "var(--primary-light)",
                                            borderRadius: "3px",
                                            opacity: idx < 3 ? 1 : 0.5,
                                            transition: "width 0.5s ease",
                                        }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Salary by Title */}
                    <div style={{
                        background: "var(--bg-card)",
                        borderRadius: "16px",
                        padding: "1.5rem",
                        border: "1px solid var(--border)",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                            <div>
                                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>
                                    Mức lương trung bình theo vị trí
                                </h3>
                                <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                                    Mức lương phổ biến trên thị trường
                                </p>
                            </div>
                            <div style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "10px",
                                background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <svg width="20" height="20" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                </svg>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                            {data.salaryByTitle.slice(0, 6).map((item, idx) => (
                                <div key={item.title}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
                                        <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)" }}>
                                            {item.title}
                                        </span>
                                        <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#22C55E", whiteSpace: "nowrap" }}>
                                            {(item.avgSalary / 1000000).toFixed(1)}tr
                                        </span>
                                    </div>
                                    <div style={{ height: "6px", background: "var(--tag-bg)", borderRadius: "3px", overflow: "hidden" }}>
                                        <div style={{
                                            height: "100%",
                                            width: `${(item.avgSalary / maxSalary) * 100}%`,
                                            background: "linear-gradient(90deg, #22C55E, #16A34A)",
                                            borderRadius: "3px",
                                            transition: "width 0.5s ease",
                                        }} />
                                    </div>
                                </div>
                            ))}
                            {data.salaryByTitle.length === 0 && (
                                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", textAlign: "center", padding: "1rem" }}>
                                    Chưa đủ dữ liệu lương
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {/* Job Type Distribution */}
                    <div style={{
                        background: "var(--bg-card)",
                        borderRadius: "16px",
                        padding: "1.5rem",
                        border: "1px solid var(--border)",
                    }}>
                        <div style={{ marginBottom: "1.25rem" }}>
                            <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>
                                Loại hình công việc
                            </h3>
                            <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                                Tỷ lệ trên hệ thống
                            </p>
                        </div>

                        {/* Donut Chart */}
                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
                            <div style={{ position: "relative", width: "160px", height: "160px" }}>
                                <svg width="160" height="160" viewBox="0 0 160 160">
                                    {(() => {
                                        let accumulated = 0;
                                        const circumference = 2 * Math.PI * 60;
                                        return data.jobTypeDistribution.map((item, idx) => {
                                            const percent = item.count / totalJobType;
                                            const dashArray = percent * circumference;
                                            const offset = accumulated * circumference;
                                            accumulated += percent;
                                            return (
                                                <circle
                                                    key={item.jobType}
                                                    cx="80" cy="80" r="60"
                                                    fill="none"
                                                    stroke={DONUT_COLORS[idx % DONUT_COLORS.length]}
                                                    strokeWidth="20"
                                                    strokeDasharray={`${dashArray} ${circumference - dashArray}`}
                                                    strokeDashoffset={-offset}
                                                    transform="rotate(-90 80 80)"
                                                    style={{ transition: "all 0.8s ease" }}
                                                />
                                            );
                                        });
                                    })()}
                                    <text x="80" y="76" textAnchor="middle" style={{ fontSize: "1.5rem", fontWeight: 800, fill: "var(--text)" }}>
                                        {totalJobType}
                                    </text>
                                    <text x="80" y="94" textAnchor="middle" style={{ fontSize: "0.625rem", fill: "var(--text-muted)" }}>
                                        tin đăng
                                    </text>
                                </svg>
                            </div>
                        </div>

                        {/* Legend */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                            {data.jobTypeDistribution.map((item, idx) => (
                                <div key={item.jobType} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        <div style={{ width: "10px", height: "10px", borderRadius: "3px", background: DONUT_COLORS[idx % DONUT_COLORS.length], flexShrink: 0 }} />
                                        <span style={{ fontSize: "0.8125rem", color: "var(--text)", fontWeight: 500 }}>
                                            {JOB_TYPE_LABEL[item.jobType] || item.jobType}
                                        </span>
                                    </div>
                                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600 }}>
                                        {Math.round((item.count / totalJobType) * 100)}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Monthly Trend Mini */}
                    <div style={{
                        background: "var(--bg-card)",
                        borderRadius: "16px",
                        padding: "1.5rem",
                        border: "1px solid var(--border)",
                    }}>
                        <div style={{ marginBottom: "1.25rem" }}>
                            <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>
                                Xu hướng tuyển dụng
                            </h3>
                            <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                                6 tháng gần đây
                            </p>
                        </div>

                        {data.monthlyTrend.length > 0 ? (
                            <div style={{ display: "flex", alignItems: "flex-end", gap: "0.375rem", height: "100px" }}>
                                {data.monthlyTrend.map((m, i) => {
                                    const height = (m.count / maxMonthly) * 80;
                                    return (
                                        <div key={m.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}>
                                            <span style={{ fontSize: "0.625rem", color: "var(--primary)", fontWeight: 700 }}>{m.count}</span>
                                            <div style={{
                                                width: "100%",
                                                height: `${height}px`,
                                                background: "linear-gradient(180deg, #0369A1 0%, #0EA5E9 100%)",
                                                borderRadius: "4px 4px 0 0",
                                                minHeight: "4px",
                                            }} />
                                            <span style={{ fontSize: "0.625rem", color: "var(--text-muted)" }}>
                                                {MONTH_NAMES[m.month.split("-")[1]] || m.month}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", textAlign: "center", padding: "1rem" }}>
                                Chưa đủ dữ liệu
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Responsive */}
            <style>{`
                @media (max-width: 1024px) {
                    .market-main-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                @media (max-width: 768px) {
                    .market-stats-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
            `}</style>
        </div>
    );
}
