"use client";

import { useState } from "react";
import { updateAccountInfo, changePassword } from "@/app/actions/account";

interface AccountSettingsProps {
    user: {
        id: string;
        name: string | null;
        email: string;
        image: string | null;
        role: string;
        createdAt: Date;
    };
}

export default function AccountSettings({ user }: AccountSettingsProps) {
    const [name, setName] = useState(user.name || "");
    const [image, setImage] = useState(user.image || "");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [infoMsg, setInfoMsg] = useState("");
    const [pwMsg, setPwMsg] = useState("");
    const [saving, setSaving] = useState(false);
    const [changingPw, setChangingPw] = useState(false);

    const handleUpdateInfo = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setInfoMsg("");
        const formData = new FormData();
        formData.set("name", name);
        formData.set("image", image);
        const result = await updateAccountInfo(formData);
        setInfoMsg(result.success ? "Đã cập nhật thành công!" : result.error || "Lỗi");
        setSaving(false);
    };

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setChangingPw(true);
        setPwMsg("");
        const formData = new FormData();
        formData.set("currentPassword", currentPassword);
        formData.set("newPassword", newPassword);
        formData.set("confirmPassword", confirmPassword);
        const result = await changePassword(formData);
        if (result.success) {
            setPwMsg("Đổi mật khẩu thành công!");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } else {
            setPwMsg(result.error || "Lỗi");
        }
        setChangingPw(false);
    };

    const roleLabel: Record<string, string> = {
        CANDIDATE: "Ứng viên",
        EMPLOYER: "Nhà tuyển dụng",
        ADMIN: "Quản trị viên",
    };

    const roleColor: Record<string, string> = {
        CANDIDATE: "#0369A1",
        EMPLOYER: "#22C55E",
        ADMIN: "#A855F7",
    };

    return (
        <>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Cài đặt tài khoản</h1>
                    <p className="dash-page-subtitle">Quản lý thông tin cá nhân và bảo mật</p>
                </div>
            </div>

            {/* Profile Card */}
            <div className="dash-form-card" style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1.5rem" }}>
                <div style={{
                    width: 64, height: 64, borderRadius: 16,
                    background: image ? `url(${image}) center/cover` : roleColor[user.role],
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontWeight: 800, fontSize: "1.5rem", flexShrink: 0,
                }}>
                    {!image && (user.name?.charAt(0).toUpperCase() || "U")}
                </div>
                <div>
                    <div style={{ fontWeight: 700, fontSize: "1.125rem", color: "var(--text)" }}>{user.name || "Chưa đặt tên"}</div>
                    <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{user.email}</div>
                    <span className="dash-badge" style={{ background: `${roleColor[user.role]}15`, color: roleColor[user.role], marginTop: 4 }}>
                        {roleLabel[user.role]}
                    </span>
                </div>
            </div>

            {/* Info form */}
            <form onSubmit={handleUpdateInfo}>
                <div className="dash-form-card">
                    <h3>Thông tin cơ bản</h3>
                    <p>Cập nhật tên hiển thị và ảnh đại diện</p>

                    {infoMsg && (
                        <div className={`dash-alert ${infoMsg.includes("thành công") ? "dash-alert-success" : "dash-alert-error"}`}>
                            {infoMsg}
                        </div>
                    )}

                    <div className="dash-form-row">
                        <div className="dash-form-group">
                            <label className="dash-form-label">Họ tên</label>
                            <input className="dash-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhập họ tên" />
                        </div>
                        <div className="dash-form-group">
                            <label className="dash-form-label">Email</label>
                            <input className="dash-input" value={user.email} disabled style={{ opacity: 0.6, cursor: "not-allowed" }} />
                        </div>
                    </div>
                    <div className="dash-form-group">
                        <label className="dash-form-label">URL Ảnh đại diện</label>
                        <input className="dash-input" value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://example.com/avatar.jpg" />
                    </div>
                    <button type="submit" className="dash-btn dash-btn-primary" disabled={saving}>
                        {saving ? "Đang lưu..." : "Lưu thay đổi"}
                    </button>
                </div>
            </form>

            {/* Password form */}
            <form onSubmit={handleChangePassword}>
                <div className="dash-form-card">
                    <h3>Đổi mật khẩu</h3>
                    <p>Đảm bảo tài khoản của bạn luôn được bảo mật</p>

                    {pwMsg && (
                        <div className={`dash-alert ${pwMsg.includes("thành công") ? "dash-alert-success" : "dash-alert-error"}`}>
                            {pwMsg}
                        </div>
                    )}

                    <div className="dash-form-group">
                        <label className="dash-form-label">Mật khẩu hiện tại</label>
                        <input className="dash-input" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Nhập mật khẩu hiện tại" />
                    </div>
                    <div className="dash-form-row">
                        <div className="dash-form-group">
                            <label className="dash-form-label">Mật khẩu mới</label>
                            <input className="dash-input" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Tối thiểu 6 ký tự" />
                        </div>
                        <div className="dash-form-group">
                            <label className="dash-form-label">Xác nhận mật khẩu mới</label>
                            <input className="dash-input" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Nhập lại mật khẩu mới" />
                        </div>
                    </div>
                    <button type="submit" className="dash-btn dash-btn-primary" disabled={changingPw || !newPassword}>
                        {changingPw ? "Đang đổi..." : "Đổi mật khẩu"}
                    </button>
                </div>
            </form>

            {/* Account info */}
            <div className="dash-form-card" style={{ opacity: 0.7 }}>
                <h3>Thông tin tài khoản</h3>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                    <div>ID: {user.id}</div>
                    <div>Ngày tạo: {new Date(user.createdAt).toLocaleDateString("vi-VN")}</div>
                    <div>Loại tài khoản: {roleLabel[user.role]}</div>
                </div>
            </div>
        </>
    );
}
