"use client";
import { useState, useTransition } from "react";
import { updateCandidateProfile } from "@/app/actions/profile";

const JOB_TYPES = ["FULL_TIME", "PART_TIME", "REMOTE", "INTERNSHIP", "CONTRACT"];
const JOB_TYPE_LABEL: Record<string, string> = { FULL_TIME: "Toàn thời gian", PART_TIME: "Bán thời gian", REMOTE: "Remote", INTERNSHIP: "Thực tập", CONTRACT: "Hợp đồng" };

interface ProfileFormProps {
    profile: {
        phone?: string | null; location?: string | null; bio?: string | null;
        yearsExp?: number; desiredSalary?: number | null; desiredJobType?: string | null;
        skills?: string[];
    } | null;
    userName: string;
}

export default function ProfileForm({ profile, userName }: ProfileFormProps) {
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);
    const [skillInput, setSkillInput] = useState("");
    const [skills, setSkills] = useState<string[]>(profile?.skills || []);

    function addSkill() {
        const s = skillInput.trim();
        if (s && !skills.includes(s)) { setSkills([...skills, s]); setSkillInput(""); }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        fd.set("skills", skills.join(","));
        startTransition(async () => {
            await updateCandidateProfile(fd);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        });
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {success && (
                <div style={{ background: "#F0FDF4", border: "1.5px solid #BBF7D0", borderRadius: "8px", padding: "0.875rem 1rem", color: "#16A34A", fontWeight: 600 }}>
                    ✓ Hồ sơ đã được cập nhật!
                </div>
            )}

            {/* Basic */}
            <div className="card" style={{ padding: "1.75rem" }}>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: "1.25rem" }}>Thông tin cơ bản</h3>
                <div className="dash-form-grid">
                    {[
                        { name: "name", label: "Họ và tên", defaultValue: userName, type: "text" },
                        { name: "phone", label: "Số điện thoại", defaultValue: profile?.phone, type: "tel" },
                        { name: "location", label: "Địa điểm", defaultValue: profile?.location, type: "text" },
                        { name: "yearsExp", label: "Số năm kinh nghiệm", defaultValue: profile?.yearsExp?.toString(), type: "number" },
                    ].map((f) => (
                        <div key={f.name}>
                            <label style={labelStyle}>{f.label}</label>
                            <input name={f.name} type={f.type} defaultValue={f.defaultValue || ""} style={inputStyle} />
                        </div>
                    ))}
                </div>
                <div style={{ marginTop: "1rem" }}>
                    <label style={labelStyle}>Giới thiệu bản thân</label>
                    <textarea name="bio" rows={4} defaultValue={profile?.bio || ""} placeholder="Mô tả ngắn về kinh nghiệm, mục tiêu nghề nghiệp..." style={{ ...inputStyle, resize: "vertical" }} />
                </div>
            </div>

            {/* Job Preferences */}
            <div className="card" style={{ padding: "1.75rem" }}>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: "1.25rem" }}>Mong muốn việc làm</h3>
                <div className="dash-form-grid">
                    <div>
                        <label style={labelStyle}>Mức lương mong muốn (triệu/tháng)</label>
                        <input name="desiredSalary" type="number" defaultValue={profile?.desiredSalary ? profile.desiredSalary / 1000000 : ""} style={inputStyle} placeholder="VD: 20" />
                    </div>
                    <div>
                        <label style={labelStyle}>Loại hình công việc</label>
                        <select name="desiredJobType" defaultValue={profile?.desiredJobType || ""} style={{ ...inputStyle }}>
                            <option value="">Chọn loại hình</option>
                            {JOB_TYPES.map((t) => <option key={t} value={t}>{JOB_TYPE_LABEL[t]}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            {/* Skills */}
            <div className="card" style={{ padding: "1.75rem" }}>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: "1.25rem" }}>Kỹ năng</h3>
                <div style={{ display: "flex", gap: "0.625rem", marginBottom: "1rem" }}>
                    <input
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addSkill(); } }}
                        placeholder="VD: React, Python, Figma..."
                        style={{ ...inputStyle, flex: 1 }}
                    />
                    <button type="button" onClick={addSkill} className="btn-outline" style={{ padding: "0.75rem 1.25rem", whiteSpace: "nowrap" }}>
                        + Thêm
                    </button>
                </div>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {skills.map((s) => (
                        <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", padding: "0.25rem 0.625rem 0.25rem 0.875rem", background: "var(--tag-bg)", color: "var(--tag-text)", borderRadius: "100px", fontSize: "0.875rem", fontWeight: 500 }}>
                            {s}
                            <button type="button" onClick={() => setSkills(skills.filter((x) => x !== s))} style={{ border: "none", background: "none", cursor: "pointer", color: "var(--tag-text)", fontSize: "1rem", lineHeight: 1, padding: 0 }}>×</button>
                        </span>
                    ))}
                </div>
            </div>

            <button type="submit" disabled={isPending} className="btn-primary" style={{ alignSelf: "flex-start", opacity: isPending ? 0.7 : 1 }}>
                {isPending ? "Đang lưu..." : "Lưu hồ sơ"}
            </button>
        </form>
    );
}

const labelStyle: React.CSSProperties = { display: "block", fontWeight: 600, fontSize: "0.875rem", color: "var(--text)", marginBottom: "0.375rem" };
const inputStyle: React.CSSProperties = { width: "100%", padding: "0.75rem 1rem", border: "1.5px solid var(--border)", borderRadius: "8px", background: "var(--bg)", color: "var(--text)", fontFamily: "inherit", fontSize: "0.9375rem", outline: "none" };
