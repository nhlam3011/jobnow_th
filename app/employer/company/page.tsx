"use client";
import { useState, useTransition, useEffect } from "react";
import { upsertCompany } from "@/app/actions/profile";
import DashboardLayout from "@/app/components/DashboardLayout";
import { useSession } from "next-auth/react";

const INDUSTRIES = ["Công nghệ thông tin", "Tài chính - Ngân hàng", "Thương mại điện tử", "Y tế", "Giáo dục", "Sản xuất", "Bán lẻ", "Du lịch", "Khác"];
const SIZES = ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"];

interface CompanyData {
    name?: string;
    website?: string | null;
    description?: string | null;
    industry?: string | null;
    size?: string | null;
    location?: string | null;
    position?: string | null;
}

export default function EmployerCompanyPage() {
    const { data: session, status } = useSession();
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [companyData, setCompanyData] = useState<CompanyData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (status === "authenticated") {
            fetchCompanyData();
        }
    }, [status]);

    async function fetchCompanyData() {
        try {
            const res = await fetch("/api/employer/company");
            if (res.ok) {
                const data = await res.json();
                setCompanyData(data);
            }
        } catch (e) {
            console.error("Failed to fetch company data", e);
        } finally {
            setLoading(false);
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        const fd = new FormData(e.currentTarget);
        startTransition(async () => {
            const result = await upsertCompany(fd);
            if (result.error) setError(result.error);
            else { setSuccess(true); setTimeout(() => setSuccess(false), 3000); }
        });
    }

    if (status === "loading" || loading) {
        return (
            <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p>Đang tải...</p>
            </div>
        );
    }

    if (!session) {
        return (
            <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p>Vui lòng đăng nhập</p>
            </div>
        );
    }

    return (
        <DashboardLayout role="EMPLOYER" userName={session.user?.name || ""}>
            <div style={{ padding: "2rem", maxWidth: "720px" }}>
                <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.375rem" }}>Trang thương hiệu công ty</h1>
                <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Thông tin công ty sẽ hiển thị trên tất cả tin tuyển dụng của bạn.</p>

                {error && <div style={{ background: "#FEF2F2", border: "1.5px solid #FECACA", borderRadius: "8px", padding: "0.875rem", color: "#DC2626", marginBottom: "1.5rem" }}>{error}</div>}
                {success && <div style={{ background: "#F0FDF4", border: "1.5px solid #BBF7D0", borderRadius: "8px", padding: "0.875rem", color: "#16A34A", fontWeight: 600, marginBottom: "1.5rem" }}>✓ Thông tin công ty đã được cập nhật!</div>}

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div className="card" style={{ padding: "1.75rem" }}>
                        <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem" }}>Thông tin cơ bản</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {[
                                { name: "name", label: "Tên công ty *", required: true, placeholder: "VD: FPT Software" },
                                { name: "website", label: "Website", placeholder: "https://example.com" },
                                { name: "location", label: "Địa điểm", placeholder: "VD: Hà Nội, TP.HCM" },
                                { name: "position", label: "Chức vụ của bạn", placeholder: "VD: HR Manager" },
                            ].map((f) => (
                                <div key={f.name}>
                                    <label style={labelStyle}>{f.label}</label>
                                    <input
                                        name={f.name}
                                        required={f.required}
                                        placeholder={f.placeholder}
                                        defaultValue={companyData?.[f.name as keyof CompanyData] || ""}
                                        style={inputStyle}
                                    />
                                </div>
                            ))}
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                <div>
                                    <label style={labelStyle}>Ngành nghề</label>
                                    <select name="industry" defaultValue={companyData?.industry || ""} style={inputStyle}>
                                        <option value="">Chọn ngành</option>
                                        {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label style={labelStyle}>Quy mô</label>
                                    <select name="size" defaultValue={companyData?.size || ""} style={inputStyle}>
                                        <option value="">Chọn quy mô</option>
                                        {SIZES.map((s) => <option key={s} value={s}>{s} nhân viên</option>)}
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label style={labelStyle}>Giới thiệu công ty</label>
                                <textarea
                                    name="description"
                                    rows={5}
                                    defaultValue={companyData?.description || ""}
                                    placeholder="Mô tả về công ty, văn hóa, môi trường làm việc..."
                                    style={{ ...inputStyle, resize: "vertical" }}
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" disabled={isPending} className="btn-primary" style={{ alignSelf: "flex-start", opacity: isPending ? 0.7 : 1 }}>
                        {isPending ? "Đang lưu..." : "Lưu thông tin công ty"}
                    </button>
                </form>
            </div>
        </DashboardLayout>
    );
}

const labelStyle: React.CSSProperties = { display: "block", fontWeight: 600, fontSize: "0.875rem", color: "var(--text)", marginBottom: "0.375rem" };
const inputStyle: React.CSSProperties = { width: "100%", padding: "0.75rem 1rem", border: "1.5px solid var(--border)", borderRadius: "8px", background: "var(--bg)", color: "var(--text)", fontFamily: "inherit", fontSize: "0.9375rem", outline: "none" };
