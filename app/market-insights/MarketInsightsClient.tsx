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
            {/* Total Stats */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
                marginBottom: "2rem",
            }}>
                {[
                    { label: "Việc làm đang tuyển", value: data.totalStats.totalJobs, color: "#0369A1", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                    { label: "Công ty", value: data.totalStats.totalCompanies, color: "#22C55E", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                    { label: "Ứng viên", value: data.totalStats.totalCandidates, color: "#F59E0B", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
                    { label: "Đơn ứng tuyển", value: data.totalStats.totalApplications, color: "#A855F7", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                ].map((stat) => (
                    <div key={stat.label} className="card" style={{ padding: "1.5rem", borderLeft: `3px solid ${stat.color}` }}>
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

            {/* Charts Grid */}
            <div className="market-charts-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>

                {/* Top Skills - Horizontal Bar Chart */}
                <div className="card" style={{ padding: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>
                        🔥 Top 10 Kỹ năng được săn đón
                    </h3>
                    <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                        Kỹ năng được yêu cầu nhiều nhất trong các tin tuyển dụng
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                        {data.topSkills.map((item, idx) => (
                            <div key={item.skill}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                                    <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text)" }}>{item.skill}</span>
                                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: CHART_COLORS[idx] }}>{item.count}</span>
                                </div>
                                <div style={{ height: "8px", background: "var(--tag-bg)", borderRadius: "4px", overflow: "hidden" }}>
                                    <div style={{
                                        height: "100%",
                                        width: `${(item.count / maxSkillCount) * 100}%`,
                                        background: `linear-gradient(90deg, ${CHART_COLORS[idx]}, ${CHART_COLORS[idx]}CC)`,
                                        borderRadius: "4px",
                                        transition: "width 1s ease",
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Job Type Distribution - Donut Chart */}
                <div className="card" style={{ padding: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>
                        📊 Phân bố loại hình công việc
                    </h3>
                    <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                        Tỷ lệ các loại hình tuyển dụng trên hệ thống
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
                        {/* SVG Donut */}
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
                                            strokeWidth="24"
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
                        {/* Legend */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                            {data.jobTypeDistribution.map((item, idx) => (
                                <div key={item.jobType} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: DONUT_COLORS[idx % DONUT_COLORS.length], flexShrink: 0 }} />
                                    <span style={{ fontSize: "0.8125rem", color: "var(--text)", fontWeight: 500 }}>
                                        {JOB_TYPE_LABEL[item.jobType] || item.jobType}
                                    </span>
                                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 700 }}>
                                        {item.count} ({Math.round((item.count / totalJobType) * 100)}%)
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Top Locations */}
                <div className="card" style={{ padding: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>
                        📍 Top địa điểm tuyển dụng
                    </h3>
                    <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                        Các thành phố có nhu cầu tuyển dụng cao nhất
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                        {data.topLocations.map((item, idx) => (
                            <div key={item.location}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                                    <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text)", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                                        {idx < 3 && <span style={{ fontSize: "0.875rem" }}>{idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}</span>}
                                        {item.location}
                                    </span>
                                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--primary)" }}>{item.count} tin</span>
                                </div>
                                <div style={{ height: "8px", background: "var(--tag-bg)", borderRadius: "4px", overflow: "hidden" }}>
                                    <div style={{
                                        height: "100%",
                                        width: `${(item.count / maxLocationCount) * 100}%`,
                                        background: idx < 3 ? "linear-gradient(90deg, #0369A1, #0EA5E9)" : "var(--primary-light)",
                                        borderRadius: "4px",
                                        opacity: idx < 3 ? 1 : 0.6,
                                        transition: "width 1s ease",
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Salary by Title - Horizontal Bar */}
                <div className="card" style={{ padding: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>
                        💰 Mức lương trung bình theo vị trí
                    </h3>
                    <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                        Mức lương trung bình cho các vị trí tuyển dụng phổ biến
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {data.salaryByTitle.map((item, idx) => (
                            <div key={item.title}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                                    <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "60%" }}>
                                        {item.title}
                                    </span>
                                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#22C55E", whiteSpace: "nowrap" }}>
                                        {(item.avgSalary / 1000000).toFixed(1)}tr VNĐ
                                    </span>
                                </div>
                                <div style={{ height: "8px", background: "var(--tag-bg)", borderRadius: "4px", overflow: "hidden" }}>
                                    <div style={{
                                        height: "100%",
                                        width: `${(item.avgSalary / maxSalary) * 100}%`,
                                        background: "linear-gradient(90deg, #22C55E, #16A34A)",
                                        borderRadius: "4px",
                                        transition: "width 1s ease",
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

            {/* Monthly Trend - Full width SVG Area Chart */}
            <div className="card" style={{ padding: "1.5rem", marginTop: "1.5rem" }}>
                <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>
                    📈 Xu hướng tuyển dụng 6 tháng gần đây
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                    Số lượng tin tuyển dụng mới được đăng theo từng tháng
                </p>

                {data.monthlyTrend.length > 0 ? (
                    <div style={{ overflowX: "auto" }}>
                        <svg width="100%" viewBox="0 0 600 200" style={{ minWidth: "400px" }}>
                            <defs>
                                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#0369A1" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#0369A1" stopOpacity="0.02" />
                                </linearGradient>
                            </defs>

                            {/* Grid lines */}
                            {[0, 1, 2, 3, 4].map(i => (
                                <line key={i} x1="40" y1={20 + i * 37.5} x2="580" y2={20 + i * 37.5} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4 4" />
                            ))}

                            {/* Area */}
                            {data.monthlyTrend.length > 1 && (
                                <path
                                    d={`M ${data.monthlyTrend.map((m, i) => {
                                        const x = 40 + (i / (data.monthlyTrend.length - 1)) * 540;
                                        const y = 170 - (m.count / maxMonthly) * 150;
                                        return `${x} ${y}`;
                                    }).join(" L ")} L ${40 + 540} 170 L 40 170 Z`}
                                    fill="url(#areaGradient)"
                                />
                            )}

                            {/* Line */}
                            {data.monthlyTrend.length > 1 && (
                                <path
                                    d={`M ${data.monthlyTrend.map((m, i) => {
                                        const x = 40 + (i / (data.monthlyTrend.length - 1)) * 540;
                                        const y = 170 - (m.count / maxMonthly) * 150;
                                        return `${x} ${y}`;
                                    }).join(" L ")}`}
                                    fill="none"
                                    stroke="#0369A1"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            )}

                            {/* Data points + labels */}
                            {data.monthlyTrend.map((m, i) => {
                                const x = data.monthlyTrend.length > 1
                                    ? 40 + (i / (data.monthlyTrend.length - 1)) * 540
                                    : 310;
                                const y = 170 - (m.count / maxMonthly) * 150;
                                const monthLabel = MONTH_NAMES[m.month.split("-")[1]] || m.month;
                                return (
                                    <g key={m.month}>
                                        <circle cx={x} cy={y} r="5" fill="#0369A1" stroke="var(--bg-card)" strokeWidth="2" />
                                        <text x={x} y={y - 12} textAnchor="middle" style={{ fontSize: "0.625rem", fontWeight: 700, fill: "var(--primary)" }}>
                                            {m.count}
                                        </text>
                                        <text x={x} y={190} textAnchor="middle" style={{ fontSize: "0.625rem", fill: "var(--text-muted)" }}>
                                            {monthLabel}
                                        </text>
                                    </g>
                                );
                            })}
                        </svg>
                    </div>
                ) : (
                    <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", textAlign: "center", padding: "2rem" }}>
                        Chưa đủ dữ liệu để hiển thị xu hướng
                    </p>
                )}
            </div>

            {/* Responsive styles */}
            <style>{`
                @media (max-width: 768px) {
                    .market-charts-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
}
