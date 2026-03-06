import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import JobCard from "@/app/components/JobCard";
import Link from "next/link";
import { getSavedJobIds } from "@/app/actions/jobs";

export default async function CompanyDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const [company, savedJobIds] = await Promise.all([
        prisma.company.findUnique({
            where: { slug },
            include: {
                jobs: {
                    where: { status: "ACTIVE" },
                    orderBy: { createdAt: "desc" },
                },
                _count: { select: { jobs: { where: { status: "ACTIVE" } } } }
            }
        }).catch(() => null),
        getSavedJobIds().catch(() => [] as string[])
    ]);

    if (!company) {
        return (
            <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
                <Navbar />
                <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)" }}>
                    <div className="card" style={{ padding: "4rem", textAlign: "center", maxWidth: "480px" }}>
                        <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "1rem" }}>Không tìm thấy công ty</h1>
                        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Công ty này không tồn tại hoặc dữ liệu đang tạm thời không khả dụng.</p>
                        <Link href="/companies" className="btn-primary">Về danh sách công ty</Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />

            {/* Cover & Header */}
            <div style={{ background: "linear-gradient(135deg, #0369A1, #0284C7)", height: "200px" }}></div>
            <div className="container-xl" style={{ marginTop: "-64px", marginBottom: "3rem", position: "relative", zIndex: 10 }}>
                <div className="card" style={{ padding: "2rem", display: "flex", gap: "2rem", alignItems: "flex-end", flexWrap: "wrap" }}>
                    <div style={{ width: "128px", height: "128px", borderRadius: "16px", background: "var(--bg-card)", border: "4px solid var(--bg-card)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", fontWeight: 800, color: "var(--primary)" }}>
                        {company.name.charAt(0)}
                    </div>
                    <div style={{ flex: 1, minWidth: "280px" }}>
                        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            {company.name}
                            {company.verified && (
                                <svg width="24" height="24" fill="#16A34A" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                            )}
                        </h1>
                        <div style={{ display: "flex", gap: "1.5rem", color: "var(--text-muted)", fontSize: "0.9375rem", flexWrap: "wrap" }}>
                            {company.industry && (
                                <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    {company.industry}
                                </div>
                            )}
                            {company.location && (
                                <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    {company.location}
                                </div>
                            )}
                            {company.size && (
                                <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    {company.size} nhân viên
                                </div>
                            )}
                        </div>
                    </div>
                    {company.website && (
                        <a href={company.website} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: "none" }}>
                            Thăm Website
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ marginLeft: "0.5rem" }}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    )}
                </div>
            </div>

            <main className="container-xl" style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 340px", gap: "2rem", alignItems: "flex-start", paddingBottom: "4rem" }}>

                {/* Left: Giới thiệu & Jobs */}
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <section className="card" style={{ padding: "2rem" }}>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem", color: "var(--text)" }}>Giới thiệu công ty</h2>
                        {company.description ? (
                            <div style={{ color: "var(--text-secondary)", lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
                                {company.description}
                            </div>
                        ) : (
                            <p style={{ color: "var(--text-muted)", fontStyle: "italic" }}>Công ty chưa cập nhật thông tin giới thiệu.</p>
                        )}
                    </section>

                    <section>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1.25rem", color: "var(--text)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            Tin tuyển dụng ({company._count.jobs})
                        </h2>
                        {company.jobs.length === 0 ? (
                            <div className="card" style={{ padding: "3rem", textAlign: "center", color: "var(--text-muted)" }}>
                                <p>Hiện không có tin tuyển dụng nào đang mở.</p>
                            </div>
                        ) : (
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {company.jobs.map(job => (
                                    <JobCard
                                        key={job.id}
                                        id={job.id}
                                        slug={job.slug}
                                        title={job.title}
                                        company={company.name}
                                        location={job.location}
                                        salary={job.salaryMin && job.salaryMax ? `${Math.round(job.salaryMin / 1000000)}–${Math.round(job.salaryMax / 1000000)} triệu` : "Thỏa thuận"}
                                        type={job.jobType}
                                        skills={job.skills}
                                        posted={new Date(job.createdAt).toLocaleDateString("vi-VN")}
                                        featured={false}
                                        saved={savedJobIds.includes(job.id)}
                                    />
                                ))}
                            </div>
                        )}
                    </section>
                </div>

                {/* Right: Trụ sở */}
                <div className="card" style={{ padding: "1.5rem" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1rem" }}>Thông tin liên hệ</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div>
                            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>Trụ sở chính</div>
                            <div style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.9375rem" }}>{company.location || "Đang cập nhật"}</div>
                        </div>
                        {company.website && (
                            <div>
                                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>Website</div>
                                <a href={company.website} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: "var(--primary)", textDecoration: "none", fontSize: "0.9375rem" }}>{company.website}</a>
                            </div>
                        )}
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
