"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/app/components/DashboardLayout";

interface Employer {
    id: string;
    userId: string;
    user: { email: string; name: string | null; role: string; createdAt: string };
    company: { id: string; name: string; verified: boolean } | null;
    position: string | null;
    createdAt: string;
}

export default function EmployersPage() {
    const [employers, setEmployers] = useState<Employer[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [search, setSearch] = useState("");
    const [verifyFilter, setVerifyFilter] = useState("ALL");

    const loadEmployers = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/admin/employers");
            const data = await response.json();
            setEmployers(data.employers || []);
        } catch {
            setMessage("Lỗi khi tải danh sách nhà tuyển dụng");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => { loadEmployers(); }, []);

    const handleVerifyCompany = async (companyId: string, verified: boolean) => {
        try {
            const response = await fetch(`/api/admin/companies/${companyId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ verified }),
            });
            if (response.ok) {
                setEmployers(employers.map(e => e.company?.id === companyId ? { ...e, company: { ...e.company!, verified } } : e));
                setMessage(verified ? "Đã xác minh công ty" : "Đã bỏ xác minh công ty");
            } else {
                setMessage("Lỗi khi cập nhật");
            }
        } catch {
            setMessage("Lỗi khi cập nhật");
        }
    };

    const handleDeleteEmployer = async (employerId: string, userId: string) => {
        if (!confirm("Bạn có chắc chắn muốn xoá nhà tuyển dụng này?")) return;
        try {
            const response = await fetch(`/api/admin/users/${userId}`, { method: "DELETE" });
            if (response.ok) {
                setEmployers(employers.filter(e => e.id !== employerId));
                setMessage("Xoá nhà tuyển dụng thành công");
            } else {
                setMessage("Lỗi khi xoá");
            }
        } catch {
            setMessage("Lỗi khi xoá");
        }
    };

    const filtered = employers.filter(employer => {
        const matchSearch = !search || employer.user.email.toLowerCase().includes(search.toLowerCase()) || employer.user.name?.toLowerCase().includes(search.toLowerCase()) || employer.company?.name.toLowerCase().includes(search.toLowerCase());
        const matchVerify = verifyFilter === "ALL" || (verifyFilter === "VERIFIED" && employer.company?.verified) || (verifyFilter === "UNVERIFIED" && employer.company && !employer.company.verified) || (verifyFilter === "NO_COMPANY" && !employer.company);
        return matchSearch && matchVerify;
    });

    const verifyCounts = {
        ALL: employers.length,
        VERIFIED: employers.filter(e => e.company?.verified).length,
        UNVERIFIED: employers.filter(e => e.company && !e.company.verified).length,
        NO_COMPANY: employers.filter(e => !e.company).length,
    };

    return (
        <DashboardLayout role="ADMIN" userName="Admin">
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Quản lý nhà tuyển dụng</h1>
                    <p className="dash-page-subtitle">Quản lý tài khoản và công ty nhà tuyển dụng ({employers.length})</p>
                </div>
            </div>

            {message && (
                <div className={`dash-alert ${message.includes("Lỗi") ? "dash-alert-error" : "dash-alert-success"}`}>
                    {message}
                </div>
            )}

            {/* Filter Bar */}
            <div className="dash-filter-bar">
                <input className="dash-input" placeholder="Tìm theo tên, email, công ty..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="dash-filter-tabs">
                    {[
                        { key: "ALL", label: "Tất cả" },
                        { key: "VERIFIED", label: "Đã xác minh" },
                        { key: "UNVERIFIED", label: "Chưa xác minh" },
                        { key: "NO_COMPANY", label: "Chưa có công ty" },
                    ].map((tab) => (
                        <button key={tab.key} className={`dash-filter-tab ${verifyFilter === tab.key ? "active" : ""}`} onClick={() => setVerifyFilter(tab.key)}>
                            {tab.label}
                            {verifyCounts[tab.key as keyof typeof verifyCounts] > 0 && (
                                <span className="dash-filter-count">{verifyCounts[tab.key as keyof typeof verifyCounts]}</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="dash-table-wrap">
                <table className="dash-table">
                    <thead>
                        <tr>
                            <th>Nhà tuyển dụng</th>
                            <th>Công ty</th>
                            <th className="hide-mobile">Chức vụ</th>
                            <th>Trạng thái</th>
                            <th className="hide-mobile">Ngày tạo</th>
                            <th style={{ textAlign: "center" }}>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr><td colSpan={6} className="dash-empty">Đang tải...</td></tr>
                        ) : filtered.length === 0 ? (
                            <tr><td colSpan={6} className="dash-empty">Không có nhà tuyển dụng nào phù hợp</td></tr>
                        ) : (
                            filtered.map((employer) => (
                                <tr key={employer.id}>
                                    <td style={{ textAlign: "center" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#22C55E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem", flexShrink: 0 }}>
                                                {employer.user.name?.charAt(0).toUpperCase() || employer.user.email.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 600 }}>{employer.user.name || "Chưa có tên"}</div>
                                                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>{employer.user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ textAlign: "center" }}>{employer.company?.name || <span className="muted">Chưa có</span>}</td>
                                    <td style={{ textAlign: "center" }} className="muted hide-mobile">{employer.position || "-"}</td>
                                    <td style={{ textAlign: "center" }}>
                                        {employer.company?.verified ? (
                                            <span className="dash-badge" style={{ background: "rgba(34,197,94,0.1)", color: "#16A34A" }}>Đã xác minh</span>
                                        ) : employer.company ? (
                                            <span className="dash-badge" style={{ background: "rgba(245,158,11,0.1)", color: "#D97706" }}>Chưa xác minh</span>
                                        ) : (
                                            <span className="dash-badge" style={{ background: "rgba(100,116,139,0.1)", color: "#64748B" }}>Chưa có công ty</span>
                                        )}
                                    </td>
                                    <td className="muted hide-mobile">{new Date(employer.createdAt).toLocaleDateString("vi-VN")}</td>
                                    <td style={{ textAlign: "center" }}>
                                        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                                            {employer.company && (
                                                <button className={`dash-btn ${employer.company.verified ? "dash-btn-danger" : "dash-btn-success"}`}
                                                    onClick={() => handleVerifyCompany(employer.company!.id, !employer.company!.verified)}
                                                    style={{ fontSize: "0.75rem", padding: "0.3rem 0.625rem" }}>
                                                    {employer.company.verified ? "Bỏ xác minh" : "Xác minh"}
                                                </button>
                                            )}
                                            <button className="dash-btn dash-btn-danger" onClick={() => handleDeleteEmployer(employer.id, employer.userId)}
                                                style={{ fontSize: "0.75rem", padding: "0.3rem 0.625rem" }}>
                                                Xoá
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}
