import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { getJobs } from "@/app/actions/jobs";
import { getAIRecommendations } from "@/app/actions/ai";
import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

function formatSalary(min?: number | null, max?: number | null) {
    if (!min && !max) return "Thỏa thuận";
    const format = (n: number) => `${n.toLocaleString('vi-VN')} đ`;
    if (min && max) return `${format(min)} - ${format(max)}`;
    if (min) return `Từ ${format(min)}`;
    return `Đến ${format(max!)}`;
}

function formatDate(date: Date) {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return "Hôm nay";
    if (days === 1) return "Hôm qua";
    if (days < 7) return `${days} ngày trước`;
    if (days < 30) return `${Math.floor(days / 7)} tuần trước`;
    return `${Math.floor(days / 30)} tháng trước`;
}

export default async function RecommendedJobsPage() {
    const session = await auth();
    if (!session?.user) {
        redirect("/login");
    }

    const aiResult = await getAIRecommendations(10);
    let jobs: any[] = [];

    if (aiResult.success && aiResult.jobs && Array.isArray(aiResult.jobs) && aiResult.jobs.length > 0) {
        jobs = aiResult.jobs.map((job: any) => ({
            ...job,
            company: {
                name: job.companyName,
                logo: job.companyLogo,
                slug: job.companySlug,
            }
        }));
    } else {
        const result = await getJobs({
            status: "ACTIVE",
            limit: 50
        }).catch(() => ({ jobs: [], total: 0 }));
        jobs = result.jobs;
    }

    const jobTypeLabels: Record<string, string> = {
        FULL_TIME: "Toàn thời gian",
        PART_TIME: "Bán thời gian",
        REMOTE: "Remote",
        INTERNSHIP: "Thực tập",
        CONTRACT: "Hợp đồng"
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", overflowX: "hidden", maxWidth: "100vw" }}>
            <Navbar />

            <main style={{ flex: 1, background: "var(--bg)", padding: "2rem 0", overflowX: "hidden", maxWidth: "100%" }}>
                <div className="container-xl" style={{ overflowX: "hidden", maxWidth: "100%" }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>
                            Việc làm phù hợp
                        </h1>
                        <p style={{ color: "var(--text-muted)" }}>
                            Dựa trên hồ sơ và kỹ năng của bạn, chúng tôi gợi ý các việc làm phù hợp nhất
                        </p>
                    </div>

                    {jobs.length === 0 ? (
                        <div className="card" style={{ padding: "4rem", textAlign: "center" }}>
                            <svg width="64" height="64" fill="none" stroke="var(--border)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: "0 auto 1rem" }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                            </svg>
                            <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>
                                Chưa có gợi ý nào
                            </h3>
                            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                                Hãy cập nhật hồ sơ và kỹ năng để nhận gợi ý việc làm phù hợp
                            </p>
                            <Link
                                href="/candidate/profile"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: "0.75rem 1.5rem",
                                    background: "var(--primary)",
                                    color: "#fff",
                                    borderRadius: "8px",
                                    fontWeight: 600,
                                    textDecoration: "none"
                                }}
                            >
                                Cập nhật hồ sơ
                            </Link>
                        </div>
                    ) : (
                        <div className="jobs-grid" style={{ overflowX: "hidden", maxWidth: "100%", width: "100%" }}>
                            {jobs.map((job) => (
                                <Link
                                    key={job.id}
                                    href={`/jobs/${job.slug}`}
                                    style={{ textDecoration: "none" }}
                                >
                                    <article className="card" style={{ padding: "1.25rem", cursor: "pointer", overflow: "hidden" }}>
                                        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "0.75rem" }}>
                                            <div style={{
                                                width: "48px",
                                                height: "48px",
                                                borderRadius: "8px",
                                                border: "1px solid var(--border)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "1.25rem",
                                                fontWeight: 700,
                                                color: "var(--primary)",
                                                background: "var(--tag-bg)",
                                                flexShrink: 0
                                            }}>
                                                {job.company.logo ? (
                                                    <img src={job.company.logo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} />
                                                ) : (
                                                    job.company.name.charAt(0)
                                                )}
                                            </div>
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <h3 style={{
                                                    fontSize: "1rem",
                                                    fontWeight: 700,
                                                    color: "var(--text)",
                                                    marginBottom: "0.25rem",
                                                    whiteSpace: "nowrap",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis"
                                                }}>
                                                    {job.title}
                                                </h3>
                                                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                                                    {job.company.name}
                                                </p>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                                            <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                </svg>
                                                {job.location}
                                            </span>
                                            <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                                                </svg>
                                                {formatSalary(job.salaryMin, job.salaryMax)}
                                            </span>
                                            <span style={{
                                                padding: "0.2rem 0.6rem",
                                                borderRadius: "100px",
                                                fontSize: "0.75rem",
                                                fontWeight: 600,
                                                background: "var(--tag-bg)",
                                                color: "var(--primary)"
                                            }}>
                                                {jobTypeLabels[job.jobType] || job.jobType}
                                            </span>
                                        </div>

                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                                                {formatDate(job.createdAt)}
                                            </span>
                                            <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--primary)" }}>
                                                Xem chi tiết →
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
