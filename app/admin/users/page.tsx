"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/app/components/DashboardLayout";

interface User {
    id: string;
    email: string;
    name: string | null;
    role: string;
    createdAt: string;
}

const ROLE_CONFIG: Record<string, { label: string; color: string }> = {
    CANDIDATE: { label: "Ứng viên", color: "#0369A1" },
    EMPLOYER: { label: "Nhà tuyển dụng", color: "#22C55E" },
    ADMIN: { label: "Quản trị viên", color: "#A855F7" },
};

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("ALL");

    const loadUsers = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/admin/users");
            const data = await response.json();
            setUsers(data.users || []);
        } catch {
            setMessage("Lỗi khi tải danh sách người dùng");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => { loadUsers(); }, []);

    const handleRoleChange = async (userId: string, newRole: string) => {
        try {
            const response = await fetch(`/api/admin/users/${userId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ role: newRole }),
            });
            if (response.ok) {
                setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
                setMessage("Cập nhật quyền thành công");
            } else {
                setMessage("Lỗi khi cập nhật quyền");
            }
        } catch {
            setMessage("Lỗi khi cập nhật quyền");
        }
    };

    const handleDeleteUser = async (userId: string) => {
        if (!confirm("Bạn có chắc chắn muốn xoá người dùng này?")) return;
        try {
            const response = await fetch(`/api/admin/users/${userId}`, { method: "DELETE" });
            if (response.ok) {
                setUsers(users.filter(u => u.id !== userId));
                setMessage("Xoá người dùng thành công");
            } else {
                setMessage("Lỗi khi xoá người dùng");
            }
        } catch {
            setMessage("Lỗi khi xoá người dùng");
        }
    };

    const filtered = users.filter(user => {
        const matchRole = roleFilter === "ALL" || user.role === roleFilter;
        const matchSearch = !search || user.email.toLowerCase().includes(search.toLowerCase()) || (user.name && user.name.toLowerCase().includes(search.toLowerCase()));
        return matchRole && matchSearch;
    });

    const roleCounts = {
        ALL: users.length,
        CANDIDATE: users.filter(u => u.role === "CANDIDATE").length,
        EMPLOYER: users.filter(u => u.role === "EMPLOYER").length,
        ADMIN: users.filter(u => u.role === "ADMIN").length,
    };

    return (
        <DashboardLayout role="ADMIN" userName="Admin">
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Quản lý người dùng</h1>
                    <p className="dash-page-subtitle">Quản lý tài khoản người dùng hệ thống ({users.length})</p>
                </div>
            </div>

            {message && (
                <div className={`dash-alert ${message.includes("Lỗi") ? "dash-alert-error" : "dash-alert-success"}`}>
                    {message}
                </div>
            )}

            {/* Filter Bar */}
            <div className="dash-filter-bar">
                <input className="dash-input" placeholder="Tìm theo tên, email..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="dash-filter-tabs">
                    {[
                        { key: "ALL", label: "Tất cả" },
                        { key: "CANDIDATE", label: "Ứng viên" },
                        { key: "EMPLOYER", label: "Nhà tuyển dụng" },
                        { key: "ADMIN", label: "Admin" },
                    ].map((tab) => (
                        <button key={tab.key} className={`dash-filter-tab ${roleFilter === tab.key ? "active" : ""}`} onClick={() => setRoleFilter(tab.key)}>
                            {tab.label}
                            {roleCounts[tab.key as keyof typeof roleCounts] > 0 && (
                                <span className="dash-filter-count">{roleCounts[tab.key as keyof typeof roleCounts]}</span>
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
                            <th>Người dùng</th>
                            <th className="hide-mobile">Email</th>
                            <th style={{ textAlign: "center" }}>Quyền</th>
                            <th className="hide-mobile">Ngày tạo</th>
                            <th style={{ textAlign: "center" }}>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr><td colSpan={5} className="dash-empty">Đang tải...</td></tr>
                        ) : filtered.length === 0 ? (
                            <tr><td colSpan={5} className="dash-empty">Không có người dùng nào phù hợp</td></tr>
                        ) : (
                            filtered.map((user) => {
                                const rc = ROLE_CONFIG[user.role] || { label: user.role, color: "#64748B" };
                                return (
                                    <tr key={user.id}>
                                        <td>
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                                <div style={{ width: 36, height: 36, borderRadius: "50%", background: rc.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem", flexShrink: 0 }}>
                                                    {user.name?.charAt(0).toUpperCase() || user.email.charAt(0).toUpperCase()}
                                                </div>
                                                <span style={{ fontWeight: 600 }}>{user.name || "Chưa có tên"}</span>
                                            </div>
                                        </td>
                                        <td className="muted hide-mobile">{user.email}</td>
                                        <td style={{ textAlign: "center" }}>
                                            <select className="dash-input" value={user.role} onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                                style={{ width: "auto", padding: "0.35rem 0.625rem", fontSize: "0.8125rem", fontWeight: 600 }}>
                                                <option value="CANDIDATE">Ứng viên</option>
                                                <option value="EMPLOYER">Nhà tuyển dụng</option>
                                                <option value="ADMIN">Quản trị viên</option>
                                            </select>
                                        </td>
                                        <td className="muted hide-mobile">{new Date(user.createdAt).toLocaleDateString("vi-VN")}</td>
                                        <td style={{ textAlign: "center" }}>
                                            <button className="dash-btn dash-btn-danger" onClick={() => handleDeleteUser(user.id)} style={{ fontSize: "0.75rem", padding: "0.3rem 0.625rem" }}>
                                                Xoá
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}
