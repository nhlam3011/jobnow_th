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
}

const JOB_TYPE_LABEL: Record<string, string> = {
    FULL_TIME: "Toàn thời gian",
    PART_TIME: "Bán thời gian",
    REMOTE: "Remote",
    INTERNSHIP: "Thực tập",
    CONTRACT: "Hợp đồng",
};

const CHART_COLORS = ["#006699", "#0EA5E9", "#22C55E", "#F59E0B", "#EF4444", "#8B5CF6"];

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
                    <p>
                        Dữ liệu cho thấy ngành <strong>{data.topSkills[0]?.skill}</strong> và <strong>{data.topIndustries[0]?.name}</strong> đang dẫn đầu thị trường với mức tăng trưởng 15% trong tháng này.
                        Nhu cầu về ứng viên có <strong>{data.experienceDistribution[0]?.label}</strong> kinh nghiệm chiếm tỷ trọng cao nhất.
                    </p>
                </div>
            </section>

            {/* Main Stats Row */}
            <div className="stats-row">
                {[
                    { label: "Tổng việc làm", value: data.totalStats.totalJobs, color: "#006699" },
                    { label: "Công ty", value: data.totalStats.totalCompanies, color: "#16a34a" },
                    { label: "Ứng viên", value: data.totalStats.totalCandidates, color: "#d97706" },
                    { label: "Lượt ứng tuyển", value: data.totalStats.totalApplications, color: "#7c3aed" },
                ].map(stat => (
                    <div key={stat.label} className="stat-card">
                        <div className="stat-text">
                            <span className="stat-label">{stat.label}</span>
                            <span className="stat-value" style={{ color: stat.color }}>{stat.value.toLocaleString()}</span>
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

            <style jsx>{`
                .market-page { max-width: 1200px; margin: 0 auto; padding: 2rem 1rem 6rem; color: var(--text); }
                
                /* Hero Redesign */
                .market-hero { margin-bottom: 3.5rem; display: grid; grid-template-columns: 1.2fr 1fr; gap: 3rem; align-items: start; }
                .hero-header-wrap { display: flex; flex-direction: column; gap: 0.75rem; }
                .title-row { display: flex; align-items: center; gap: 0.75rem; }
                .h-svg { width: 32px; height: 32px; }
                .hero-header-wrap h1 { font-size: 1.85rem; font-weight: 800; color: var(--text); margin: 0; line-height: 1.2; }
                .hero-subtitle { font-size: 1rem; color: var(--text-muted); line-height: 1.6; max-width: 500px; margin: 0; }
                
                .ai-insight-box { background: var(--bg); border: 1.5px dashed var(--border); padding: 1.75rem; border-radius: 20px; position: relative; margin-top: 5px; }
                .ai-label { 
                    position: absolute; top: -10px; left: 20px; background: var(--primary); color: #fff; 
                    font-size: 0.6rem; font-weight: 900; padding: 3px 10px; border-radius: 20px;
                }
                .ai-insight-box p { font-size: 0.9rem; line-height: 1.6; color: var(--text); margin: 0; }

                /* Stats Row */
                .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin-bottom: 3rem; }
                .stat-card { 
                    background: var(--bg-card); padding: 1.5rem; border: 1px solid var(--border); border-radius: 20px;
                    display: flex; align-items: center; gap: 1.25rem; transition: transform 0.2s;
                }
                .stat-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }
                .stat-icon { font-size: 2rem; }
                .stat-text { display: flex; flex-direction: column; }
                .stat-label { font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
                .stat-value { font-size: 1.5rem; font-weight: 900; }

                /* Grid Layout */
                .main-grid { display: grid; grid-template-columns: 1fr 340px; gap: 2rem; }
                .content-side, .sidebar-side { display: flex; flex-direction: column; gap: 2rem; }

                /* Cards */
                .card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 24px; padding: 2rem; }
                .card-header { margin-bottom: 1.75rem; }
                .card-header h3 { font-size: 1.2rem; font-weight: 800; display: flex; align-items: center; gap: 0.75rem; color: var(--text); }
                .h-icon { font-size: 1.4rem; }

                /* Trend */
                .trend-wrap { display: flex; gap: 1.5rem; height: 220px; }
                .trend-y-axis { display: flex; flex-direction: column; justify-content: space-between; padding-bottom: 25px; position: relative; }
                .y-unit { position: absolute; top: -15px; left: 0; font-size: 0.6rem; font-weight: 900; color: var(--text-muted); opacity: 0.6; }
                .trend-y-axis span:not(.y-unit) { font-size: 0.7rem; color: var(--text-muted); font-weight: 700; text-align: right; width: 30px; }
                .trend-bars { flex: 1; display: flex; align-items: flex-end; gap: 1rem; border-left: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 0 10px; }
                .bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.75rem; height: 100%; justify-content: flex-end; }
                .bar-body { width: 100%; height: 0; background: var(--primary); border-radius: 6px 6px 0 0; position: relative; transition: height 1s cubic-bezier(0.4, 0, 0.2, 1); }
                .bar-body:hover { opacity: 0.8; }
                .bar-tooltip { position: absolute; top: -30px; left: 50%; transform: translateX(-50%); background: var(--text); color: var(--bg); font-size: 0.7rem; padding: 4px 10px; border-radius: 6px; white-space: nowrap; opacity: 0; transition: 0.2s; z-index: 10; }
                .bar-body:hover .bar-tooltip { opacity: 1; }
                .bar-label { font-size: 0.75rem; color: var(--text-muted); font-weight: 700; margin-bottom: -25px; }

                /* Skills */
                .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem 3rem; }
                .skill-row { display: flex; flex-direction: column; gap: 0.6rem; }
                .skill-info { display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 700; color: var(--text); }
                .skill-percent { color: var(--text-muted); }
                .progress-track { height: 8px; background: var(--bg); border-radius: 10px; overflow: hidden; }
                .progress-fill { height: 100%; border-radius: 10px; }

                /* Experience */
                .exp-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
                .exp-card { background: var(--bg); padding: 1.25rem; border-radius: 16px; border: 1px solid transparent; transition: all 0.2s; }
                .exp-card:hover { border-color: var(--border); transform: scale(1.02); }
                .exp-label { font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.25rem; }
                .exp-count { font-size: 1.2rem; font-weight: 900; color: var(--text); }
                .exp-count small { font-size: 0.6rem; opacity: 0.5; }

                /* Sidebar Lists */
                .ind-item { position: relative; padding: 0.85rem 0 0.85rem 2.85rem; border-bottom: 1px solid var(--border-light); }
                .ind-rank { 
                    font-size: 0.8rem; font-weight: 800; color: var(--primary); 
                    background: var(--bg); width: 26px; height: 26px; border-radius: 8px; 
                    display: flex; align-items: center; justify-content: center; 
                    position: absolute; left: 0; top: 50%; transform: translateY(-50%);
                    border: 1px solid var(--border);
                }
                .ind-content { display: flex; flex-direction: column; gap: 2px; }
                .ind-name { font-weight: 700; font-size: 0.95rem; color: var(--text); }
                .ind-count { font-size: 0.75rem; color: var(--text-muted); font-weight: 600; }
                .ind-indicator { position: absolute; bottom: 0; left: 2.85rem; height: 2px; }

                .company-list { display: flex; flex-direction: column; gap: 0.75rem; }
                .comp-item { display: flex; align-items: center; gap: 1rem; padding: 0.75rem; border-radius: 16px; border: 1px solid transparent; transition: all 0.2s; }
                .comp-item:hover { background: var(--bg); border-color: var(--border); }
                .comp-logo { width: 48px; height: 48px; border-radius: 12px; background: var(--bg); border: 1.5px solid var(--border); display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0; }
                .comp-logo img { width: 100%; height: 100%; object-fit: cover; }
                .comp-logo span { font-weight: 900; color: var(--primary); font-size: 1rem; }
                .comp-name { font-weight: 700; font-size: 0.95rem; display: block; color: var(--text); margin-bottom: 2px; }
                .comp-jobs { font-size: 0.75rem; color: var(--primary); font-weight: 800; }

                /* Donut */
                .donut-box { display: flex; align-items: center; gap: 2rem; }
                .donut-legend { display: flex; flex-direction: column; gap: 0.5rem; }
                .legend-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 700; color: var(--text-muted); }
                .dot { width: 8px; height: 8px; border-radius: 50%; }

                /* News Section */
                .news-section { margin-top: 5rem; }
                .news-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2rem; }
                .news-header h2 { font-size: 1.75rem; font-weight: 900; color: var(--text); }
                .view-all { font-weight: 700; color: var(--primary); font-size: 0.9rem; }
                .news-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
                .news-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 20px; overflow: hidden; transition: transform 0.2s; }
                .news-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); }
                .news-img { height: 160px; background: var(--border); }
                .news-img img { width: 100%; height: 100%; object-fit: cover; }
                .news-body { padding: 1.5rem; }
                .news-body h3 { font-size: 1.1rem; font-weight: 800; margin-bottom: 0.75rem; line-height: 1.4; color: var(--text); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
                .news-body p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
                .news-date { font-size: 0.75rem; color: var(--text-muted); font-weight: 700; opacity: 0.6; }

                /* Responsive */
                @media (max-width: 1024px) {
                    .market-hero { grid-template-columns: 1fr; gap: 1.5rem; }
                    .main-grid { grid-template-columns: 1fr; }
                    .news-grid { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 735px) {
                    .stats-row { grid-template-columns: repeat(2, 1fr); }
                    .skills-grid { grid-template-columns: 1fr; }
                    .exp-grid { grid-template-columns: 1fr 1fr; }
                    .news-grid { grid-template-columns: 1fr; }
                }
                @media (max-width: 425px) {
                    .market-hero h1 { font-size: 2rem; }
                    .hero-content p { font-size: 1rem; }
                    .ai-insight-box { padding: 1.5rem; }
                    .stat-card { padding: 1rem; gap: 0.75rem; }
                    .stat-icon { font-size: 1.5rem; }
                    .stat-value { font-size: 1.25rem; }
                    .card { padding: 1.25rem; border-radius: 20px; }
                    .donut-box { flex-direction: column; gap: 1rem; text-align: center; }
                    .trend-wrap { height: 180px; }
                }
                @media (max-width: 320px) {
                    .stats-row { grid-template-columns: 1fr; }
                    .exp-grid { grid-template-columns: 1fr; }
                    .trend-y-axis { display: none; }
                    .trend-bars { border-left: none; }
                }
            `}</style>
        </div>
    );
}
