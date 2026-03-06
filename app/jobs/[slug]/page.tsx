import { getJobBySlug, getJobById } from "@/app/actions/jobs";
import { auth } from "@/auth";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ApplyButton from "@/app/components/ApplyButton";
import CoverLetterButton from "@/app/components/CoverLetterButton";
import Link from "next/link";
import { notFound } from "next/navigation";

const JOB_TYPE_LABEL: Record<string, string> = {
    FULL_TIME: "Toàn thời gian",
    PART_TIME: "Bán thời gian",
    REMOTE: "Remote",
    INTERNSHIP: "Thực tập",
    CONTRACT: "Hợp đồng",
};

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const session = await auth();

    // Try slug first, then id
    let job = await getJobBySlug(slug);
    if (!job) {
        // Try by id
        try {
            const byId = await getJobById(slug);
            if (byId) job = byId as unknown as typeof job;
        } catch (_) { }
    }

    if (!job) notFound();

    const salaryText = job.salaryMin || job.salaryMax
        ? (job.salaryMin && job.salaryMax
            ? `${job.salaryMin.toLocaleString('vi-VN')}–${job.salaryMax.toLocaleString('vi-VN')} đ`
            : job.salaryMin ? `Từ ${job.salaryMin.toLocaleString('vi-VN')} đ` : `Đến ${job.salaryMax.toLocaleString('vi-VN')} đ`)
        : "Thỏa thuận";

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <main style={{ flex: 1, background: "var(--bg)", padding: "3rem 0" }}>
                <div className="container-xl">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "2rem", alignItems: "flex-start" }}>
                        {/* Main content */}
                        <div>
                            {/* Header card */}
                            <div className="card" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
                                <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                                    <div style={{ width: "64px", height: "64px", borderRadius: "12px", background: job.company.logo ? "transparent" : "var(--tag-bg)", border: "1.5px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1.25rem", color: "var(--primary)", flexShrink: 0, overflow: "hidden" }}>
                                        {job.company.logo ? (
                                            <img src={job.company.logo} alt={job.company.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        ) : (
                                            job.company.name.charAt(0)
                                        )}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h1 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 800, color: "var(--text)", marginBottom: "0.375rem" }}>
                                            {job.title}
                                        </h1>
                                        <Link href={`/companies/${job.company.slug}`} style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none", fontSize: "1rem", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                                            {job.company.name}
                                            {job.company.verified && (
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="#16A34A">
                                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                                </svg>
                                            )}
                                        </Link>
                                    </div>
                                </div>

                                {/* Industry badge */}
                                {job.industry && (
                                    <div style={{ marginBottom: "1rem" }}>
                                        <Link
                                            href={`/jobs?industry=${job.industry.slug}`}
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "0.375rem",
                                                padding: "0.375rem 0.875rem",
                                                background: "rgba(3,105,161,0.1)",
                                                border: "1px solid rgba(3,105,161,0.2)",
                                                borderRadius: "100px",
                                                fontSize: "0.8125rem",
                                                fontWeight: 600,
                                                color: "var(--primary)",
                                                textDecoration: "none",
                                            }}
                                        >
                                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                            {job.industry.name}
                                        </Link>
                                    </div>
                                )}

                                {/* Meta */}
                                <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                                    {[
                                        { label: "Địa điểm", value: job.location, icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" },
                                        { label: "Mức lương", value: salaryText, icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" },
                                        { label: "Loại hình", value: JOB_TYPE_LABEL[job.jobType] || job.jobType, icon: "M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" },
                                    ].map((item) => (
                                        <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <svg width="16" height="16" fill="none" stroke="var(--primary)" strokeWidth="1.75" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                            </svg>
                                            <div>
                                                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{item.label}</div>
                                                <div style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.9rem" }}>{item.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Skills */}
                                {job.skills.length > 0 && (
                                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                                        {job.skills.map((skill) => (
                                            <span key={skill} className="tag">{skill}</span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <div className="card" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
                                <h2 style={{ fontSize: "1.125rem", fontWeight: 700, margin: "0 0 1rem" }}>Mô tả công việc</h2>
                                <div style={{ color: "var(--text-muted)", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{job.description}</div>
                            </div>

                            {job.requirements && (
                                <div className="card" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
                                    <h2 style={{ fontSize: "1.125rem", fontWeight: 700, margin: "0 0 1rem" }}>Yêu cầu ứng viên</h2>
                                    <div style={{ color: "var(--text-muted)", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{job.requirements}</div>
                                </div>
                            )}

                            {job.benefits && (
                                <div className="card" style={{ padding: "2rem" }}>
                                    <h2 style={{ fontSize: "1.125rem", fontWeight: 700, margin: "0 0 1rem" }}>Phúc lợi</h2>
                                    <div style={{ color: "var(--text-muted)", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>{job.benefits}</div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div style={{ position: "sticky", top: "88px" }}>
                            <div className="card" style={{ padding: "1.75rem" }}>
                                <ApplyButton jobId={job.id} isLoggedIn={!!session?.user} role={session?.user?.role} />
                                <CoverLetterButton jobId={job.id} />
                                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textAlign: "center", marginTop: "0.75rem" }}>
                                    Đã có {job._count?.applications ?? 0} ứng viên
                                </div>
                                <div style={{ marginTop: "1.5rem", borderTop: "1.5px solid var(--border)", paddingTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                                    <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                                        Ngày đăng: <strong style={{ color: "var(--text)" }}>{new Date(job.createdAt).toLocaleDateString("vi-VN")}</strong>
                                    </div>
                                    {job.expiresAt && (
                                        <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                                            Hết hạn: <strong style={{ color: "#EF4444" }}>{new Date(job.expiresAt).toLocaleDateString("vi-VN")}</strong>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
