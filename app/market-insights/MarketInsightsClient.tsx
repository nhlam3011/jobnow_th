"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface MarketData {
    topSkills: Array<{ skill: string; count: number }>;
    jobTypeDistribution: Array<{ jobType: string; count: number }>;
    topLocations: Array<{ location: string; count: number }>;
    salaryByTitle: Array<{ title: string; avgSalary: number; count: number }>;
    monthlyTrend: Array<{ month: string; count: number }>;
    totalStats: { totalJobs: number; totalCompanies: number; totalCandidates: number; totalApplications: number };
    topIndustries: Array<{ name: string; count: number }>;
    topCompanies: Array<{ name: string; logo: string | null; slug: string; industry: string | null; count: number }>;
    experienceDistribution: Array<{ label: string; count: number }>;
    latestInsights: Array<{ title: string; slug: string; coverImage: string | null; excerpt: string | null; createdAt: Date }>;
    aiAnalysis?: string;
}

const JOB_TYPE_LABEL: Record<string, string> = {
    FULL_TIME: "Toàn thời gian",
    PART_TIME: "Bán thời gian",
    REMOTE: "Remote",
    INTERNSHIP: "Thực tập",
    CONTRACT: "Hợp đồng",
};

const CHART_COLORS = ["#1E40AF", "#3B82F6", "#60A5FA", "#F59E0B", "#FBBF24", "#34D399"];

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
            <div className="loading-container">
                <div className="spinner" />
                <p>Đang tải dữ liệu thị trường...</p>
                <style jsx>{`
                    .loading-container { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 100px 0; }
                    .spinner { width: 40px; height: 40px; border: 3px solid #f1f1f1; border-top: 3px solid #006699; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 1rem; }
                    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                    p { color: #666; font-size: 0.95rem; font-weight: 500; }
                `}</style>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="error-container">
                <p>{error || "Không có dữ liệu hiển thị lúc này"}</p>
                <style jsx>{`
                    .error-container { padding: 3rem; background: #fff; border: 1px solid #f8d7da; border-radius: 12px; color: #721c24; text-align: center; margin: 2rem 0; }
                `}</style>
            </div>
        );
    }

    const maxSkillCount = Math.max(...data.topSkills.map(s => s.count), 1);
    const maxLocationCount = Math.max(...data.topLocations.map(l => l.count), 1);
    const maxSalary = Math.max(...data.salaryByTitle.map(s => s.avgSalary), 1);
    const totalJobType = data.jobTypeDistribution.reduce((sum, d) => sum + d.count, 0) || 1;
    const maxMonthly = Math.max(...data.monthlyTrend.map(m => m.count), 1);

    return (
        <div className="market-page">
            {/* Market Overview Hero */}
            {/* New Design Heading */}
            <section className="market-hero">
                <div className="hero-header-wrap">
                    <div className="title-row">
                        <svg className="h-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 10V21M17 14V21M21 7V21M9 14V21M5 18V21" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h1>Xu hướng thị trường</h1>
                    </div>
                    <p className="hero-subtitle">
                        Phân tích dữ liệu từ hàng ngàn tin tuyển dụng để đưa ra bức tranh tổng quan về thị trường lao động
                    </p>
                </div>
                <div className="ai-insight-box">
                    <div className="ai-label">AI INSIGHTS</div>
                    {data.aiAnalysis ? (
                        <p dangerouslySetInnerHTML={{ __html: data.aiAnalysis }}></p>
                    ) : (
                        <p>
                            Dữ liệu cho thấy ngành <strong>{data.topSkills[0]?.skill}</strong> và <strong>{data.topIndustries[0]?.name}</strong> đang dẫn đầu thị trường với mức tăng trưởng 15% trong tháng này.
                            Nhu cầu về ứng viên có <strong>{data.experienceDistribution[0]?.label}</strong> kinh nghiệm chiếm tỷ trọng cao nhất.
                        </p>
                    )}
                </div>
            </section>

            {/* Main Stats Row */}
            <div className="stats-row">
                {[
                    { label: "Tổng việc làm", value: data.totalStats.totalJobs, color: "#1E40AF", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                    { label: "Công ty", value: data.totalStats.totalCompanies, color: "#3B82F6", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                    { label: "Ứng viên", value: data.totalStats.totalCandidates, color: "#F59E0B", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                    { label: "Lượt ứng tuyển", value: data.totalStats.totalApplications, color: "#10B981", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                ].map(stat => (
                    <div key={stat.label} className="stat-card">
                        <div className="stat-icon-wrap" style={{ background: `${stat.color}15`, color: stat.color }}>
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} /></svg>
                        </div>
                        <div className="stat-text">
                            <span className="stat-value" style={{ color: stat.color }}>{stat.value.toLocaleString()}</span>
                            <span className="stat-label">{stat.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="main-grid">
                {/* CONTENT AREA */}
                <div className="content-side">
                    {/* Recruitment Trends */}
                    <div className="card">
                        <div className="card-header">
                            <h3>Xu hướng tuyển dụng tin đăng</h3>
                        </div>
                        <div className="trend-wrap">
                            <div className="trend-y-axis">
                                <span className="y-unit">TIN</span>
                                <span>{maxMonthly}</span>
                                <span>{Math.round(maxMonthly / 2)}</span>
                                <span>0</span>
                            </div>
                            <div className="trend-bars">
                                {data.monthlyTrend.map(m => (
                                    <div key={m.month} className="bar-col">
                                        <div className="bar-body" style={{ height: `${(m.count / maxMonthly) * 100}%` }}>
                                            <div className="bar-tooltip">{m.count} tin</div>
                                        </div>
                                        <span className="bar-label">{MONTH_NAMES[m.month.split("-")[1]] || m.month}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Skill Gap Analysis */}
                    <div className="card">
                        <div className="card-header">
                            <h3>Kỹ năng được săn đón nhiều nhất</h3>
                        </div>
                        <div className="skills-grid">
                            {data.topSkills.map((item, idx) => (
                                <div key={item.skill} className="skill-row">
                                    <div className="skill-info">
                                        <span className="skill-name">{item.skill}</span>
                                        <span className="skill-percent">{Math.round((item.count / maxSkillCount) * 100)}%</span>
                                    </div>
                                    <div className="progress-track">
                                        <div className="progress-fill" style={{ width: `${(item.count / maxSkillCount) * 100}%`, background: CHART_COLORS[idx % CHART_COLORS.length] }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Requirements */}
                    <div className="card">
                        <div className="card-header">
                            <h3>Yêu cầu Kinh nghiệm</h3>
                        </div>
                        <div className="exp-grid">
                            {data.experienceDistribution.map((exp, idx) => (
                                <div key={exp.label} className="exp-card">
                                    <div className="exp-label">{exp.label}</div>
                                    <div className="exp-count">{exp.count} <small>CÔNG VIỆC</small></div>
                                    <div className="exp-bar" style={{ height: '4px', width: '100%', background: '#f1f3f5', marginTop: '10px' }}>
                                        <div style={{ height: '100%', width: `${(exp.count / data.totalStats.totalJobs) * 100}%`, background: CHART_COLORS[idx % CHART_COLORS.length] }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SIDEBAR AREA */}
                <div className="sidebar-side">
                    {/* Industry Distribution */}
                    <div className="card">
                        <div className="card-header">
                            <h3>Cơ cấu Ngành nghề</h3>
                        </div>
                        <div className="industry-list">
                            {data.topIndustries.map((ind, idx) => (
                                <div key={ind.name} className="ind-item">
                                    <span className="ind-rank">{idx + 1}</span>
                                    <div className="ind-content">
                                        <span className="ind-name">{ind.name}</span>
                                        <span className="ind-count">{ind.count} công việc</span>
                                    </div>
                                    <div className="ind-indicator" style={{ width: `${(ind.count / data.totalStats.totalJobs) * 200}%`, background: CHART_COLORS[idx] }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Hiring Companies */}
                    <div className="card">
                        <div className="card-header">
                            <h3>Top Công ty Tuyển dụng</h3>
                        </div>
                        <div className="company-list">
                            {data.topCompanies.map(comp => (
                                <Link href={`/companies/${comp.slug}`} key={comp.slug} className="comp-item">
                                    <div className="comp-logo">
                                        {comp.logo ? <img src={comp.logo} alt={comp.name} /> : <span>{comp.name[0]}</span>}
                                    </div>
                                    <div className="comp-info">
                                        <span className="comp-name">{comp.name}</span>
                                        <span className="comp-jobs">{comp.count} tin tuyển dụng</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Job Types */}
                    <div className="card">
                        <div className="card-header">
                            <h3>Hình thức công việc</h3>
                        </div>
                        <div className="donut-box">
                            <svg width="120" height="120" viewBox="0 0 120 120">
                                {(() => {
                                    let accumulated = 0;
                                    const circumference = 2 * Math.PI * 50;
                                    return data.jobTypeDistribution.map((item, idx) => {
                                        const percent = item.count / totalJobType;
                                        const dashArray = percent * circumference;
                                        const offset = accumulated * circumference;
                                        accumulated += percent;
                                        return (
                                            <circle
                                                key={item.jobType} cx="60" cy="60" r="50" fill="none"
                                                stroke={CHART_COLORS[idx % CHART_COLORS.length]} strokeWidth="15"
                                                strokeDasharray={`${dashArray} ${circumference - dashArray}`}
                                                strokeDashoffset={-offset} transform="rotate(-90 60 60)"
                                            />
                                        );
                                    });
                                })()}
                            </svg>
                            <div className="donut-legend">
                                {data.jobTypeDistribution.map((item, idx) => (
                                    <div key={item.jobType} className="legend-item">
                                        <div className="dot" style={{ background: CHART_COLORS[idx % CHART_COLORS.length] }} />
                                        <span>{JOB_TYPE_LABEL[item.jobType]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Latest Insights / Blog Section */}
            <section className="news-section">
                <div className="news-header">
                    <h2>Tin tức Thị trường & Cẩm nang</h2>
                    <Link href="/blogs" className="view-all">Xem tất cả →</Link>
                </div>
                <div className="news-grid">
                    {data.latestInsights.length > 0 ? data.latestInsights.map(post => (
                        <Link href={`/blogs/${post.slug}`} key={post.slug} className="news-card">
                            <div className="news-img">
                                <img src={post.coverImage || '/images/default-blog.jpg'} alt={post.title} />
                            </div>
                            <div className="news-body">
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <span className="news-date">{new Date(post.createdAt).toLocaleDateString('vi-VN')}</span>
                            </div>
                        </Link>
                    )) : (
                        <div className="empty-news">Đang cập nhật các phân tích mới nhất...</div>
                    )}
                </div>
            </section>

            <style jsx global>{`
                .ai-insight-box p strong { color: #FBBF24; font-weight: 800; }
            `}</style>
            <style jsx>{`
                .market-page { max-width: 1200px; margin: 0 auto; padding: 2.5rem 1.5rem 6rem; color: #1E293B; font-family: var(--font-inter), sans-serif; }
                
                /* Hero Redesign */
                .market-hero { margin-bottom: 3rem; display: grid; grid-template-columns: 1fr 1.1fr; gap: 3rem; align-items: center; }
                .hero-header-wrap { display: flex; flex-direction: column; gap: 1rem; }
                .title-row { display: flex; align-items: center; gap: 0.75rem; }
                .h-svg { width: 36px; height: 36px; stroke: #1E40AF; }
                .hero-header-wrap h1 { font-size: 2.25rem; font-weight: 900; color: #0F172A; margin: 0; line-height: 1.1; letter-spacing: -0.02em; }
                .hero-subtitle { font-size: 1.05rem; color: #475569; line-height: 1.6; max-width: 480px; margin: 0; }
                
                .ai-insight-box { 
                    background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%); 
                    padding: 2rem; border-radius: 24px; position: relative; 
                    box-shadow: 0 20px 40px -10px rgba(30, 64, 175, 0.25);
                    color: white; overflow: hidden;
                }
                .ai-insight-box::before {
                    content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 0;
                    background: radial-gradient(circle at top right, rgba(255,255,255,0.15) 0%, transparent 60%);
                    pointer-events: none;
                }
                .ai-label { 
                    display: inline-flex; align-items: center; gap: 6px;
                    background: rgba(255,255,255,0.2); backdrop-filter: blur(8px);
                    color: #fff; font-size: 0.7rem; font-weight: 800; padding: 4px 12px; 
                    border-radius: 20px; border: 1px solid rgba(255,255,255,0.3);
                    margin-bottom: 1.25rem; letter-spacing: 0.05em;
                }
                .ai-label::before {
                    content: ''; display: block; width: 6px; height: 6px; border-radius: 50%; background: #FBBF24; box-shadow: 0 0 8px #FBBF24;
                }
                .ai-insight-box p { font-size: 1.05rem; line-height: 1.7; color: rgba(255,255,255,0.95); margin: 0; font-weight: 500; text-shadow: 0 1px 2px rgba(0,0,0,0.1); }

                /* Stats Row */
                .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 3.5rem; }
                .stat-card { 
                    background: #ffffff; padding: 1.5rem; border: 1px solid #E2E8F0; border-radius: 20px;
                    display: flex; align-items: center; gap: 1.25rem; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 2px 5px rgba(0,0,0,0.02);
                }
                .stat-card:hover { transform: translateY(-6px); box-shadow: 0 20px 25px -5px rgba(30, 64, 175, 0.1), 0 8px 10px -6px rgba(30, 64, 175, 0.1); border-color: #BFDBFE; }
                .stat-icon-wrap { width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: transform 0.3s; }
                .stat-card:hover .stat-icon-wrap { transform: scale(1.1) rotate(-5deg); }
                .stat-text { display: flex; flex-direction: column; gap: 4px; }
                .stat-value { font-size: 1.75rem; font-weight: 900; line-height: 1; letter-spacing: -0.03em; }
                .stat-label { font-size: 0.75rem; color: #64748B; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }

                /* Grid Layout */
                .main-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 2rem; }
                .content-side, .sidebar-side { display: flex; flex-direction: column; gap: 2rem; }

                /* Cards */
                .card { background: #ffffff; border: 1px solid #E2E8F0; border-radius: 24px; padding: 2rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); transition: border-color 0.3s; }
                .card:hover { border-color: #CBD5E1; }
                .card-header { margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center; }
                .card-header h3 { font-size: 1.25rem; font-weight: 800; color: #0F172A; margin: 0; letter-spacing: -0.01em; }

                /* Trend */
                .trend-wrap { display: flex; gap: 1.5rem; height: 260px; }
                .trend-y-axis { display: flex; flex-direction: column; justify-content: space-between; padding-bottom: 28px; position: relative; }
                .y-unit { position: absolute; top: -15px; left: 0; font-size: 0.65rem; font-weight: 800; color: #94A3B8; }
                .trend-y-axis span:not(.y-unit) { font-size: 0.75rem; color: #64748B; font-weight: 600; text-align: right; width: 35px; }
                .trend-bars { flex: 1; display: flex; align-items: flex-end; gap: 1.5rem; border-left: 1px dashed #E2E8F0; border-bottom: 1px dashed #E2E8F0; padding: 0 15px; position: relative; }
                .trend-bars::before { content: ''; position: absolute; top: 50%; left: 0; right: 0; height: 1px; border-top: 1px dashed #F1F5F9; z-index: 0; }
                .bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 1rem; height: 100%; justify-content: flex-end; position: relative; z-index: 1; }
                .bar-body { width: 100%; max-width: 40px; height: 0; background: linear-gradient(180deg, #3B82F6 0%, #1E40AF 100%); border-radius: 8px 8px 0 0; position: relative; transition: height 1s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s; box-shadow: 0 -4px 15px rgba(59, 130, 246, 0.15); }
                .bar-body:hover { transform: scaleY(1.02); filter: brightness(1.1); cursor: crosshair; }
                .bar-tooltip { position: absolute; top: -35px; left: 50%; transform: translateX(-50%) translateY(5px); background: #1E293B; color: #fff; font-size: 0.75rem; font-weight: 700; padding: 6px 12px; border-radius: 8px; white-space: nowrap; opacity: 0; transition: all 0.2s; pointer-events: none; }
                .bar-tooltip::after { content: ''; position: absolute; bottom: -4px; left: 50%; transform: translateX(-50%); border-width: 4px 4px 0; border-style: solid; border-color: #1E293B transparent transparent transparent; }
                .bar-body:hover .bar-tooltip { opacity: 1; transform: translateX(-50%) translateY(0); }
                .bar-label { font-size: 0.8rem; color: #64748B; font-weight: 700; margin-bottom: -28px; }

                /* Skills */
                .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.75rem 3.5rem; }
                .skill-row { display: flex; flex-direction: column; gap: 0.75rem; }
                .skill-info { display: flex; justify-content: space-between; font-size: 0.95rem; font-weight: 700; color: #334155; }
                .skill-percent { color: #64748B; font-variant-numeric: tabular-nums; }
                .progress-track { height: 10px; background: #F1F5F9; border-radius: 12px; overflow: hidden; box-shadow: inset 0 1px 2px rgba(0,0,0,0.05); }
                .progress-fill { height: 100%; border-radius: 12px; transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; }
                .progress-fill::after { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); transform: translateX(-100%); animation: shimmer 2s infinite; }
                @keyframes shimmer { 100% { transform: translateX(100%); } }

                /* Experience */
                .exp-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; }
                .exp-card { background: #F8FAFC; padding: 1.5rem; border-radius: 20px; border: 1px solid #E2E8F0; transition: all 0.2s; display: flex; flex-direction: column; justify-content: center; }
                .exp-card:hover { border-color: #93C5FD; background: #fff; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); transform: translateY(-2px); }
                .exp-label { font-size: 0.85rem; font-weight: 700; color: #64748B; margin-bottom: 0.5rem; }
                .exp-count { font-size: 1.5rem; font-weight: 900; color: #0F172A; display: flex; align-items: baseline; gap: 4px; }
                .exp-count small { font-size: 0.7rem; font-weight: 700; color: #94A3B8; }
                .exp-bar { height: 6px; width: 100%; background: #E2E8F0; border-radius: 10px; margin-top: 1rem; overflow: hidden; }

                /* Sidebar Lists */
                .industry-list { display: flex; flex-direction: column; gap: 0.5rem; }
                .ind-item { position: relative; padding: 1rem 1rem 1rem 3.5rem; border-radius: 16px; transition: background 0.2s; }
                .ind-item:hover { background: #F8FAFC; }
                .ind-rank { 
                    font-size: 0.85rem; font-weight: 800; color: #1E40AF; 
                    background: #DBEAFE; width: 32px; height: 32px; border-radius: 10px; 
                    display: flex; align-items: center; justify-content: center; 
                    position: absolute; left: 0.5rem; top: 50%; transform: translateY(-50%);
                }
                .ind-content { display: flex; flex-direction: column; gap: 4px; }
                .ind-name { font-weight: 700; font-size: 1rem; color: #1E293B; }
                .ind-count { font-size: 0.8rem; color: #64748B; font-weight: 600; }
                .ind-indicator { position: absolute; bottom: 0; left: 3.5rem; height: 3px; border-radius: 3px; opacity: 0.8; }

                .company-list { display: flex; flex-direction: column; gap: 0.75rem; }
                .comp-item { display: flex; align-items: center; gap: 1.25rem; padding: 1rem; border-radius: 16px; border: 1px solid transparent; transition: all 0.2s; background: #F8FAFC; }
                .comp-item:hover { background: #ffffff; border-color: #BFDBFE; box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.1); transform: translateX(4px); }
                .comp-logo { width: 56px; height: 56px; border-radius: 14px; background: #fff; border: 1px solid #E2E8F0; display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0; }
                .comp-logo img { width: 100%; height: 100%; object-fit: cover; }
                .comp-logo span { font-weight: 900; color: #1E40AF; font-size: 1.25rem; }
                .comp-name { font-weight: 800; font-size: 1rem; display: block; color: #0F172A; margin-bottom: 4px; }
                .comp-jobs { font-size: 0.8rem; color: #F59E0B; font-weight: 700; }

                /* Donut */
                .donut-box { display: flex; align-items: center; gap: 2.5rem; justify-content: center; }
                .donut-box svg { drop-shadow: 0 4px 6px rgba(0,0,0,0.05); }
                .donut-box circle { transition: stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1), stroke-width 0.2s; cursor: pointer; }
                .donut-box circle:hover { stroke-width: 18; filter: brightness(1.1); }
                .donut-legend { display: flex; flex-direction: column; gap: 0.75rem; }
                .legend-item { display: flex; align-items: center; gap: 0.75rem; font-size: 0.85rem; font-weight: 700; color: #475569; transition: color 0.2s; cursor: pointer; }
                .legend-item:hover { color: #0F172A; }
                .dot { width: 12px; height: 12px; border-radius: 4px; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.1); }

                /* News Section */
                .news-section { margin-top: 5rem; border-top: 1px solid #E2E8F0; padding-top: 4rem; }
                .news-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2.5rem; }
                .news-header h2 { font-size: 2rem; font-weight: 900; color: #0F172A; letter-spacing: -0.02em; margin: 0; }
                .view-all { font-weight: 700; color: #3B82F6; font-size: 0.95rem; padding: 8px 16px; border-radius: 99px; background: #EFF6FF; transition: all 0.2s; }
                .view-all:hover { background: #DBEAFE; color: #1E40AF; }
                .news-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
                .news-card { background: #ffffff; border: 1px solid #E2E8F0; border-radius: 24px; overflow: hidden; transition: all 0.3s; display: flex; flex-direction: column; }
                .news-card:hover { transform: translateY(-8px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05); border-color: #CBD5E1; }
                .news-img { height: 200px; background: #F1F5F9; overflow: hidden; }
                .news-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
                .news-card:hover .news-img img { transform: scale(1.05); }
                .news-body { padding: 1.75rem; display: flex; flex-direction: column; flex: 1; }
                .news-body h3 { font-size: 1.15rem; font-weight: 800; margin-bottom: 1rem; line-height: 1.5; color: #0F172A; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
                .news-body p { font-size: 0.9rem; color: #64748B; line-height: 1.6; margin-bottom: 1.5rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; flex: 1; }
                .news-date { font-size: 0.8rem; color: #94A3B8; font-weight: 700; }

                /* Responsive */
                @media (max-width: 1024px) {
                    .market-hero { grid-template-columns: 1fr; gap: 2rem; }
                    .main-grid { grid-template-columns: 1fr; }
                    .news-grid { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 768px) {
                    .stats-row { grid-template-columns: repeat(2, 1fr); }
                    .skills-grid { grid-template-columns: 1fr; }
                    .exp-grid { grid-template-columns: 1fr 1fr; }
                    .news-grid { grid-template-columns: 1fr; }
                    .market-hero h1 { font-size: 1.85rem; }
                }
                @media (max-width: 480px) {
                    .stats-row { grid-template-columns: 1fr; }
                    .exp-grid { grid-template-columns: 1fr; }
                    .donut-box { flex-direction: column; gap: 1.5rem; text-align: center; }
                    .trend-wrap { height: 220px; }
                }
            `}</style>
        </div>
    );
}
