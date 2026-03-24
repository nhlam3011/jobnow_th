"use client";
import { useState, useTransition, useEffect } from "react";
import { updateJob, getJobById } from "@/app/actions/jobs";
import DashboardLayout from "@/app/components/DashboardLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";

interface CompanyInfo {
    name: string;
    logo?: string | null;
}

const JOB_TYPES = [
    { value: "FULL_TIME", label: "Toàn thời gian" },
    { value: "PART_TIME", label: "Bán thời gian" },
    { value: "REMOTE", label: "Remote" },
    { value: "INTERNSHIP", label: "Thực tập" },
    { value: "CONTRACT", label: "Hợp đồng" },
];

const INDUSTRIES = [
    { value: "", label: "Chọn ngành nghề" },
    { value: "cong-nghe-thong-tin", label: "Công nghệ Thông tin" },
    { value: "tai-chinh-ngan-hang", label: "Tài chính - Ngân hàng" },
    { value: "thuong-mai-dien-tu", label: "Thương mại điện tử" },
    { value: "marketing-truyen-thong", label: "Marketing - Truyền thông" },
    { value: "nhan-su", label: "Nhân sự" },
    { value: "ke-toan-tai-chinh", label: "Kế toán - Tài chính" },
    { value: "ban-le-dich-vu", label: "Bán lẻ - Dịch vụ" },
    { value: "san-xuat-che-bien", label: "Sản xuất - Chế biến" },
    { value: "xay-dung", label: "Xây dựng" },
    { value: "y-te-cham-soc-suc-khoe", label: "Y tế - Chăm sóc sức khỏe" },
    { value: "du-lich-khach-san", label: "Du lịch - Khách sạn" },
    { value: "gd-dao-tao", label: "Giáo dục - Đào tạo" },
    { value: "kien-truc-thiet-ke", label: "Kiến trúc - Thiết kế" },
    { value: "phap-luat", label: "Pháp lý" },
    { value: "van-tai-logistics", label: "Vận tải - Logistics" },
];

interface JobData {
    id: string;
    title: string;
    description: string;
    requirements: string | null;
    benefits: string | null;
    location: string;
    jobType: string;
    salaryMin: number | null;
    salaryMax: number | null;
    skills: string[];
    industryId: string | null;
    experienceYears: number | null;
    ageMin: number | null;
    ageMax: number | null;
    industry: { slug: string } | null;
}

export default function EditJobPage({ params }: { params: Promise<{ id: string }> }) {
    const { data: session, status } = useSession();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState("");
    const [skillInput, setSkillInput] = useState("");
    const [skills, setSkills] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [job, setJob] = useState<JobData | null>(null);
    const router = useRouter();
    const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);

    useEffect(() => {
        params.then(p => setResolvedParams(p));
    }, [params]);

    useEffect(() => {
        if (status === "authenticated" && resolvedParams) {
            fetchJob();
        } else if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, resolvedParams, router]);

    async function fetchJob() {
        if (!resolvedParams) return;
        try {
            const res = await fetch(`/api/employer/jobs/${resolvedParams.id}`);
            if (res.ok) {
                const data = await res.json();
                setJob(data);
                setSkills(data.skills || []);
            } else {
                notFound();
            }
        } catch (e) {
            console.error(e);
            notFound();
        } finally {
            setLoading(false);
        }
    }

    function addSkill() {
        const s = skillInput.trim();
        if (s && !skills.includes(s)) { setSkills([...skills, s]); setSkillInput(""); }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        const fd = new FormData(e.currentTarget);
        fd.set("skills", skills.join(","));

        const industrySlug = fd.get("industry") as string;
        if (industrySlug) {
            fd.set("industryId", industrySlug);
        }

        if (!resolvedParams) return;

        startTransition(async () => {
            const result = await updateJob(resolvedParams.id, fd);
            if (result?.error) {
                setError(result.error);
            } else {
                router.push("/employer/jobs");
            }
        });
    }

    if (loading || status === "loading" || !job) {
        return (
            <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p>Đang tải...</p>
            </div>
        );
    }

    return (
        <DashboardLayout role="EMPLOYER" userName={session?.user?.name || ""}>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Chỉnh sửa tin tuyển dụng</h1>
                    <p className="dash-page-subtitle">Cập nhật thông tin tin tuyển dụng.</p>
                </div>
            </div>

            {error && <div className="dash-alert dash-alert-error">{error}</div>}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Basic */}
                <div className="dash-form-card">
                    <h3>Thông tin cơ bản</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div>
                            <label className="dash-form-label">Tiêu đề công việc *</label>
                            <input name="title" required defaultValue={job.title} placeholder="VD: Senior Frontend Developer, Kế toán tổng hợp, Nhân viên Marketing..." className="dash-input" />
                        </div>

                        {/* Industry Selection */}
                        <div>
                            <label className="dash-form-label">Ngành nghề *</label>
                            <select name="industry" required defaultValue={job.industry?.slug || ""} className="dash-input">
                                {INDUSTRIES.map((ind) => (
                                    <option key={ind.value} value={ind.value}>{ind.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="dash-grid-2">
                            <div>
                                <label className="dash-form-label">Địa điểm *</label>
                                <input name="location" required defaultValue={job.location || ""} placeholder="VD: Hà Nội, TP.HCM, Remote" className="dash-input" />
                            </div>
                            <div>
                                <label className="dash-form-label">Loại hình *</label>
                                <select name="jobType" required defaultValue={job.jobType} className="dash-input">
                                    {JOB_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="dash-grid-2">
                            <div>
                                <label className="dash-form-label">Lương tối thiểu (VNĐ)</label>
                                <input name="salaryMin" type="number" defaultValue={job.salaryMin || ""} placeholder="VD: 7000000" className="dash-input" />
                            </div>
                            <div>
                                <label className="dash-form-label">Lương tối đa (VNĐ)</label>
                                <input name="salaryMax" type="number" defaultValue={job.salaryMax || ""} placeholder="VD: 15000000" className="dash-input" />
                            </div>
                        </div>
                        <div className="dash-grid-2">
                            <div>
                                <label className="dash-form-label">Kinh nghiệm yêu cầu (Số năm)</label>
                                <input name="experienceYears" type="number" defaultValue={job.experienceYears || ""} placeholder="VD: 2" className="dash-input" />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                                <div>
                                    <label className="dash-form-label">Tuổi từ</label>
                                    <input name="ageMin" type="number" defaultValue={job.ageMin || ""} placeholder="18" className="dash-input" />
                                </div>
                                <div>
                                    <label className="dash-form-label">Đến</label>
                                    <input name="ageMax" type="number" defaultValue={job.ageMax || ""} placeholder="40" className="dash-input" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="dash-form-card">
                    <h3>Nội dung tuyển dụng</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div>
                            <label className="dash-form-label">Mô tả công việc *</label>
                            <textarea name="description" required rows={6} defaultValue={job.description} placeholder="Mô tả các nhiệm vụ, trách nhiệm của vị trí..." className="dash-input" style={{ resize: "vertical" }} />
                        </div>
                        <div>
                            <label className="dash-form-label">Yêu cầu ứng viên</label>
                            <textarea name="requirements" rows={5} defaultValue={job.requirements || ""} placeholder="Bằng cấp, kinh nghiệm, kỹ năng cần có..." className="dash-input" style={{ resize: "vertical" }} />
                        </div>
                        <div>
                            <label className="dash-form-label">Phúc lợi</label>
                            <textarea name="benefits" rows={4} defaultValue={job.benefits || ""} placeholder="Bảo hiểm, thưởng, team building, remote policy..." className="dash-input" style={{ resize: "vertical" }} />
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="dash-form-card">
                    <h3>Kỹ năng yêu cầu</h3>
                    <div className="dash-form-row">
                        <input value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addSkill(); } }} placeholder="VD: React, Node.js, Kế toán, Tiếng Anh..." className="dash-input" style={{ flex: 1 }} />
                        <button type="button" onClick={addSkill} className="dash-btn dash-btn-ghost" style={{ flexShrink: 0 }}>+ Thêm</button>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        {skills.map((s) => (
                            <span key={s} className="tag" style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", paddingRight: "0.625rem" }}>
                                {s}
                                <button type="button" onClick={() => setSkills(skills.filter((x) => x !== s))} style={{ border: "none", background: "none", cursor: "pointer", color: "var(--tag-text)", fontSize: "1rem", padding: 0 }}>×</button>
                            </span>
                        ))}
                    </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem" }}>
                    <button type="button" onClick={() => router.back()} className="dash-btn dash-btn-ghost">Hủy</button>
                    <button type="submit" disabled={isPending} className="dash-btn dash-btn-primary" style={{ opacity: isPending ? 0.7 : 1 }}>
                        {isPending ? "Đang lưu..." : "Lưu thay đổi"}
                    </button>
                </div>
            </form>
        </DashboardLayout>
    );
}
