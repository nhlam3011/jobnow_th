"use client";

import { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import { updateAccountInfo, changePassword } from "@/app/actions/account";
import Avatar from "./Avatar";
import ImageCropper from "./ImageCropper";

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
    const { update: updateSession } = useSession();
    const [name, setName] = useState(user.name || "");
    const [image, setImage] = useState(user.image || "");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [infoMsg, setInfoMsg] = useState("");
    const [pwMsg, setPwMsg] = useState("");
    const [saving, setSaving] = useState(false);
    const [changingPw, setChangingPw] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [showCropper, setShowCropper] = useState(false);
    const [tempImageSrc, setTempImageSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUpdateInfo = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setInfoMsg("");
        const formData = new FormData();
        formData.set("name", name);
        formData.set("image", image);
        const result = await updateAccountInfo(formData);
        if (result.success) {
            setInfoMsg("Đã cập nhật thành công!");
            // Refresh session to update UI across the app
            await updateSession({ name, image });
        } else {
            setInfoMsg(result.error || "Lỗi");
        }
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

    const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith("image/")) {
            setInfoMsg("Vui lòng chọn file hình ảnh");
            return;
        }

        // Validate file size (max 10MB for cropping)
        if (file.size > 10 * 1024 * 1024) {
            setInfoMsg("Kích thước file không được vượt quá 10MB");
            return;
        }

        // Create preview URL for cropping
        const reader = new FileReader();
        reader.onload = () => {
            setTempImageSrc(reader.result as string);
            setShowCropper(true);
        };
        reader.readAsDataURL(file);
    };

    const handleCropComplete = async (croppedImageUrl: string) => {
        setShowCropper(false);
        setUploading(true);
        setInfoMsg("");

        try {
            // Convert cropped image to blob
            const response = await fetch(croppedImageUrl);
            const blob = await response.blob();
            const file = new File([blob], "avatar.jpg", { type: "image/jpeg" });

            const formData = new FormData();
            formData.append("avatar", file);

            const uploadResponse = await fetch("/api/account/avatar", {
                method: "POST",
                body: formData,
            });

            const result = await uploadResponse.json();

            if (result.success && result.imageUrl) {
                setImage(result.imageUrl);
                setInfoMsg("Tải ảnh đại diện thành công!");
                await updateSession({ image: result.imageUrl });
            } else {
                setInfoMsg(result.error || "Lỗi khi tải ảnh");
            }
        } catch (error) {
            setInfoMsg("Lỗi khi tải ảnh");
        }

        setUploading(false);
        setTempImageSrc(null);
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
                    width: 64, height: 64, borderRadius: 12,
                    background: image ? `url(${image}) center/cover` : "#e5e7eb",
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
                        <label className="dash-form-label">Ảnh đại diện</label>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <div style={{
                                width: 64, height: 64, borderRadius: 12,
                                background: image ? `url(${image}) center/cover` : "#e5e7eb",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                border: "2px solid #e5e7eb", overflow: "hidden", flexShrink: 0
                            }}>
                                {!image && (
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                )}
                            </div>
                            <div>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAvatarUpload}
                                    style={{ display: "none" }}
                                />
                                <button
                                    type="button"
                                    className="dash-btn"
                                    style={{ marginBottom: "0.5rem" }}
                                    onClick={() => fileInputRef.current?.click()}
                                    disabled={uploading}
                                >
                                    {uploading ? "Đang tải..." : "Chọn ảnh"}
                                </button>
                                <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", margin: 0 }}>
                                    PNG, JPG. Tối đa 5MB
                                </p>
                            </div>
                        </div>
                        {image && (
                            <div style={{ marginTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <input
                                    className="dash-input"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    placeholder="URL ảnh"
                                    style={{ flex: 1 }}
                                />
                                <button
                                    type="button"
                                    className="dash-btn"
                                    onClick={() => setImage("")}
                                    style={{ padding: "0.5rem" }}
                                    title="Xóa"
                                >
                                    ✕
                                </button>
                            </div>
                        )}
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

            {/* Image Cropper Modal */}
            {showCropper && tempImageSrc && (
                <ImageCropper
                    imageSrc={tempImageSrc}
                    onCropComplete={handleCropComplete}
                    onCancel={() => {
                        setShowCropper(false);
                        setTempImageSrc(null);
                    }}
                    aspectRatio={1}
                    square={true}
                />
            )}
        </>
    );
}
