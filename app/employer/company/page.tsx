"use client";
import { useState, useTransition, useEffect } from "react";
import { upsertCompany } from "@/app/actions/profile";
import DashboardLayout from "@/app/components/DashboardLayout";
import { useSession } from "next-auth/react";
import SearchableSelect from "@/app/components/SearchableSelect";

interface Province {
    name: string;
    code: number;
}

const INDUSTRIES = ["Công nghệ thông tin", "Tài chính - Ngân hàng", "Thương mại điện tử", "Y tế", "Giáo dục", "Sản xuất", "Bán lẻ", "Du lịch", "Khác"];
const SIZES = ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"];

interface CompanyData {
    name?: string;
    logo?: string | null;
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
    const [provinces, setProvinces] = useState<Province[]>([]);

    useEffect(() => {
        fetch("https://provinces.open-api.vn/api/v1/p/")
            .then((res) => res.json())
            .then((data: Province[]) => setProvinces(data))
            .catch(() => setProvinces([]));
    }, []);

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
        <DashboardLayout
            role="EMPLOYER"
            userName={companyData?.name || session.user.name || "Nhà tuyển dụng"}
            userImage={companyData?.logo || session.user.image}
        >
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Trang thương hiệu công ty</h1>
                    <p className="dash-page-subtitle">Thông tin công ty sẽ hiển thị trên tất cả tin tuyển dụng của bạn.</p>
                </div>
            </div>

            {error && <div className="dash-alert dash-alert-error">{error}</div>}
            {success && <div className="dash-alert dash-alert-success">✓ Thông tin công ty đã được cập nhật!</div>}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div className="dash-form-card">
                    <h3>Thông tin cơ bản</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div>
                            <label className="dash-form-label">Tên công ty <span style={{ color: "var(--error, #ef4444)" }}>*</span></label>
                            <input
                                name="name"
                                required
                                placeholder="VD: FPT Software"
                                defaultValue={(companyData as any)?.name || ""}
                                className="dash-input"
                            />
                        </div>
                        <div className="dash-grid-2">
                            <div>
                                <label className="dash-form-label">Website</label>
                                <input
                                    name="website"
                                    placeholder="https://example.com"
                                    defaultValue={(companyData as any)?.website || ""}
                                    className="dash-input"
                                />
                            </div>
                            <div>
                                <label className="dash-form-label">Chức vụ của bạn</label>
                                <input
                                    name="position"
                                    placeholder="VD: HR Manager"
                                    defaultValue={(companyData as any)?.position || ""}
                                    className="dash-input"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="dash-form-label">Khu vực hoạt động (Đa chi nhánh)</label>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                {((companyData as any)?.locations || []).map((loc: string) => (
                                    <div key={loc} className="dash-tag" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                        {loc}
                                        <button 
                                            type="button" 
                                            onClick={() => setCompanyData(prev => ({ ...prev!, locations: (prev as any).locations.filter((l: string) => l !== loc) }))}
                                            style={{ color: "var(--text-muted)", border: "none", background: "none", cursor: "pointer", padding: "0 4px" }}
                                        >✕</button>
                                    </div>
                                ))}
                            </div>
                            <div style={{ maxWidth: "400px" }}>
                                <SearchableSelect 
                                    value=""
                                    placeholder="+ Thêm tỉnh thành"
                                    searchPlaceholder="Tìm tỉnh/thành phố..."
                                    options={provinces.map(p => ({ 
                                        value: p.name.replace(/^(Thành phố |Tỉnh )/, ""), 
                                        label: p.name 
                                    }))}
                                    onChange={(val) => {
                                        if (val && !((companyData as any)?.locations || []).includes(val)) {
                                            setCompanyData(prev => ({ ...prev!, locations: [...((prev as any)?.locations || []), val] }));
                                        }
                                    }}
                                />
                            </div>
                            <input type="hidden" name="locations" value={((companyData as any)?.locations || []).join(",")} />
                        </div>
                        <div className="dash-grid-2">
                            <div>
                                <label className="dash-form-label">Ngành nghề <span style={{ color: "var(--error, #ef4444)" }}>*</span></label>
                                <select name="industry" required defaultValue={companyData?.industry || ""} className="dash-input">
                                    <option value="">Chọn ngành</option>
                                    {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="dash-form-label">Quy mô <span style={{ color: "var(--error, #ef4444)" }}>*</span></label>
                                <select name="size" required defaultValue={companyData?.size || ""} className="dash-input">
                                    <option value="">Chọn quy mô</option>
                                    {SIZES.map((s) => <option key={s} value={s}>{s} nhân viên</option>)}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="dash-form-label">Giới thiệu công ty</label>
                            <textarea
                                name="description"
                                rows={5}
                                defaultValue={companyData?.description || ""}
                                placeholder="Mô tả về công ty, văn hóa, môi trường làm việc..."
                                className="dash-input"
                                style={{ resize: "vertical" }}
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" disabled={isPending} className="dash-btn dash-btn-primary" style={{ alignSelf: "flex-start", opacity: isPending ? 0.7 : 1 }}>
                    {isPending ? "Đang lưu..." : "Lưu thông tin công ty"}
                </button>
            </form>
        </DashboardLayout>
    );
}
