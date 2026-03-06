"use client";
import { useState, useTransition, useEffect } from "react";
import { createJob } from "@/app/actions/jobs";
import DashboardLayout from "@/app/components/DashboardLayout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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

export default function NewJobPage() {
    const { data: session, status } = useSession();
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState("");
    const [skillInput, setSkillInput] = useState("");
    const [skills, setSkills] = useState<string[]>([]);
    const [hasCompany, setHasCompany] = useState(true);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            checkCompany();
        } else if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    async function checkCompany() {
        try {
            const res = await fetch("/api/employer/company");
            if (res.ok) {
                const data = await res.json();
                if (!data) {
                    setHasCompany(false);
                }
            }
        } catch (e) {
            console.error(e);
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

        // Get industryId from the select
        const industrySlug = fd.get("industry") as string;
        if (industrySlug) {
            // We'll need to handle this in the action - for now just pass it
            fd.set("industryId", industrySlug);
        }

        startTransition(async () => {
            const result = await createJob(fd);
            if (result?.error) setError(result.error);
        });
    }

    if (loading || status === "loading") {
        return (
            <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p>Đang tải...</p>
            </div>
        );
    }

    if (!hasCompany) {
        return (
            <DashboardLayout role="EMPLOYER" userName={session?.user?.name || ""}>
                <div style={{ padding: "2rem", textAlign: "center" }}>
                    <div className="card" style={{ padding: "3rem", maxWidth: "500px", margin: "0 auto" }}>
                        <svg width="64" height="64" fill="none" stroke="var(--primary)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: "0 auto 1.5rem" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>Bạn cần tạo trang công ty trước</h2>
                        <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                            Để đăng tin tuyển dụng, bạn cần tạo thông tin công ty trước.
                        </p>
                        <a href="/employer/company" className="btn-primary">
                            Tạo trang công ty
                        </a>
                    </div>
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout role="EMPLOYER" userName={session?.user?.name || ""}>
            <div style={{ padding: "2rem", maxWidth: "800px" }}>
                <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.375rem" }}>Đăng tin tuyển dụng mới</h1>
                <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Điền thông tin chi tiết để thu hút ứng viên phù hợp.</p>

                {error && <div style={{ background: "#FEF2F2", border: "1.5px solid #FECACA", borderRadius: "8px", padding: "0.875rem 1rem", color: "#DC2626", marginBottom: "1.5rem" }}>{error}</div>}

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {/* Basic */}
                    <div className="card" style={{ padding: "1.75rem" }}>
                        <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem" }}>Thông tin cơ bản</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <div>
                                <label style={labelStyle}>Tiêu đề công việc *</label>
                                <input name="title" required placeholder="VD: Senior Frontend Developer, Kế toán tổng hợp, Nhân viên Marketing..." style={inputStyle} />
                            </div>

                            {/* Industry Selection */}
                            <div>
                                <label style={labelStyle}>Ngành nghề *</label>
                                <select name="industry" required style={inputStyle}>
                                    {INDUSTRIES.map((ind) => (
                                        <option key={ind.value} value={ind.value}>{ind.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                <div>
                                    <label style={labelStyle}>Địa điểm *</label>
                                    <input name="location" required placeholder="VD: Hà Nội, TP.HCM, Remote" style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Loại hình *</label>
                                    <select name="jobType" required style={inputStyle}>
                                        {JOB_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                <div>
                                    <label style={labelStyle}>Lương tối thiểu (triệu)</label>
                                    <input name="salaryMin" type="number" placeholder="VD: 15" style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Lương tối đa (triệu)</label>
                                    <input name="salaryMax" type="number" placeholder="VD: 30" style={inputStyle} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="card" style={{ padding: "1.75rem" }}>
                        <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem" }}>Nội dung tuyển dụng</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <div>
                                <label style={labelStyle}>Mô tả công việc *</label>
                                <textarea name="description" required rows={6} placeholder="Mô tả các nhiệm vụ, trách nhiệm của vị trí..." style={{ ...inputStyle, resize: "vertical" }} />
                            </div>
                            <div>
                                <label style={labelStyle}>Yêu cầu ứng viên</label>
                                <textarea name="requirements" rows={5} placeholder="Bằng cấp, kinh nghiệm, kỹ năng cần có..." style={{ ...inputStyle, resize: "vertical" }} />
                            </div>
                            <div>
                                <label style={labelStyle}>Phúc lợi</label>
                                <textarea name="benefits" rows={4} placeholder="Bảo hiểm, thưởng, team building, remote policy..." style={{ ...inputStyle, resize: "vertical" }} />
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="card" style={{ padding: "1.75rem" }}>
                        <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem" }}>Kỹ năng yêu cầu</h3>
                        <div style={{ display: "flex", gap: "0.625rem", marginBottom: "1rem" }}>
                            <input value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addSkill(); } }} placeholder="VD: React, Node.js, Kế toán, Tiếng Anh..." style={{ ...inputStyle, flex: 1 }} />
                            <button type="button" onClick={addSkill} className="btn-outline" style={{ padding: "0.75rem 1.25rem" }}>+ Thêm</button>
                        </div>
                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                            {skills.map((s) => (
                                <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", padding: "0.25rem 0.625rem 0.25rem 0.875rem", background: "var(--tag-bg)", color: "var(--tag-text)", borderRadius: "100px", fontSize: "0.875rem" }}>
                                    {s}
                                    <button type="button" onClick={() => setSkills(skills.filter((x) => x !== s))} style={{ border: "none", background: "none", cursor: "pointer", color: "var(--tag-text)", fontSize: "1rem", padding: 0 }}>×</button>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: "0.75rem" }}>
                        <button type="button" onClick={() => router.back()} className="btn-outline">Hủy</button>
                        <button type="submit" disabled={isPending} className="btn-primary" style={{ opacity: isPending ? 0.7 : 1 }}>
                            {isPending ? "Đang đăng..." : "Đăng tin tuyển dụng"}
                        </button>
                    </div>
                </form>
            </div>
        </DashboardLayout>
    );
}

const labelStyle: React.CSSProperties = { display: "block", fontWeight: 600, fontSize: "0.875rem", color: "var(--text)", marginBottom: "0.375rem" };
const inputStyle: React.CSSProperties = { width: "100%", padding: "0.75rem 1rem", border: "1.5px solid var(--border)", borderRadius: "8px", background: "var(--bg)", color: "var(--text)", fontFamily: "inherit", fontSize: "0.9375rem", outline: "none" };
