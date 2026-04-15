"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteTemplate, updateTemplate } from "@/app/actions/cv";
import ConfirmModal from "./ConfirmModal";

interface TemplateItem {
    id: string;
    name: string;
    description: string | null;
    category: string;
    thumbnailUrl: string | null;
    isActive: boolean;
    createdAt: string;
    _count: { cvs: number };
}

export default function AdminTemplateList({ templates: initialTemplates }: { templates: TemplateItem[] }) {
    const router = useRouter();
    const [templates, setTemplates] = useState(initialTemplates);
    const [filterCategory, setFilterCategory] = useState("all");
    const [loading, setLoading] = useState<string | null>(null);
    const [deleteConfirm, setDeleteConfirm] = useState<{ id: string, name: string } | null>(null);

    const categories = ["all", ...Array.from(new Set(templates.map(t => t.category)))];
    const filtered = filterCategory === "all" ? templates : templates.filter(t => t.category === filterCategory);

    const handleToggle = async (id: string, isActive: boolean) => {
        setLoading(id);
        const res = await updateTemplate(id, { isActive: !isActive });
        if (res.success) {
            setTemplates(prev => prev.map(t => t.id === id ? { ...t, isActive: !isActive } : t));
        }
        setLoading(null);
    };

    const handleDelete = async () => {
        if (!deleteConfirm) return;
        const { id } = deleteConfirm;
        setDeleteConfirm(null);

        setLoading(id);
        const res = await deleteTemplate(id);
        if (res.success) {
            setTemplates(prev => prev.filter(t => t.id !== id));
        } else {
            alert(res.error || "Lỗi khi xoá");
        }
        setLoading(null);
    };

    return (
        <div>
            {/* Actions Bar */}
            <div style={{
                display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem",
                alignItems: "center", justifyContent: "space-between",
                background: "var(--card-bg)", padding: "1rem 1.25rem",
                borderRadius: "12px", border: "1px solid var(--border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
            }}>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilterCategory(cat)}
                            className={`dash-btn ${filterCategory === cat ? "dash-btn-primary" : "dash-btn-outline"}`}
                            style={{ textTransform: "capitalize", fontSize: "0.875rem", padding: "0.5rem 1rem" }}
                        >
                            {cat === "all" ? "Tất cả" : cat}
                        </button>
                    ))}
                </div>
                <button
                    className="dash-btn dash-btn-primary"
                    onClick={() => router.push("/admin/cv-templates/create")}
                    style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"></path></svg>
                    Tạo mẫu CV mới
                </button>
            </div>

            {/* Templates Grid */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1.5rem"
            }}>
                {filtered.map(t => (
                    <div key={t.id} className="dash-card" style={{
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid var(--border)",
                        opacity: t.isActive ? 1 : 0.65,
                        transition: "all 0.2s ease-in-out",
                        display: "flex",
                        flexDirection: "column",
                        background: "var(--card-bg)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.04)"
                    }}>
                        {/* Thumbnail */}
                        <div style={{
                            aspectRatio: "1/1.414", // Tỷ lệ A4
                            background: "linear-gradient(135deg, var(--bg) 0%, #f1f5f9 100%)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            overflow: "hidden", position: "relative",
                            borderBottom: "1px solid var(--border)"
                        }}>
                            {t.thumbnailUrl ? (
                                <img
                                    src={t.thumbnailUrl}
                                    alt={t.name}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", transition: "transform 0.3s" }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                                />
                            ) : (
                                <div style={{
                                    width: "100%", height: "100%",
                                    background: "linear-gradient(135deg, var(--primary) 0%, #3b82f6 100%)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "rgba(255,255,255,0.3)"
                                }}>
                                    <svg width="60" height="60" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16h16V8l-6-6z" />
                                        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                                    </svg>
                                </div>
                            )}

                            {/* Status badge */}
                            <span style={{
                                position: "absolute", top: "0.75rem", right: "0.75rem",
                                padding: "0.35rem 0.75rem", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 700,
                                background: t.isActive ? "var(--success, #22c55e)" : "var(--danger, #ef4444)",
                                color: "#fff",
                                display: "flex", alignItems: "center", gap: "0.35rem",
                                boxShadow: "0 2px 4px rgba(0,0,0,0.15)"
                            }}>
                                <span style={{ width: "6px", height: "6px", background: "#fff", borderRadius: "50%" }}></span>
                                {t.isActive ? "Đang hiển thị" : "Đã ẩn"}
                            </span>

                            {/* Category badge */}
                            <span style={{
                                position: "absolute", top: "0.75rem", left: "0.75rem",
                                padding: "0.35rem 0.6rem", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 600,
                                background: "rgba(0,0,0,0.75)", color: "#fff",
                                backdropFilter: "blur(4px)"
                            }}>{t.category}</span>
                        </div>

                        {/* Info */}
                        <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.375rem" }}>
                                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", margin: 0, lineHeight: 1.3 }}>
                                    {t.name}
                                </h3>
                            </div>

                            <p style={{
                                fontSize: "0.85rem", color: "var(--text-muted)",
                                marginBottom: "1rem", lineHeight: 1.5,
                                flex: 1,
                                display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden"
                            }}>
                                {t.description || "Chưa có mô tả cho mẫu CV này."}
                            </p>

                            <div style={{
                                display: "flex", alignItems: "center", gap: "0.375rem",
                                fontSize: "0.85rem", fontWeight: 600, color: "var(--primary)",
                                background: "var(--bg)", padding: "0.4rem 0.75rem",
                                borderRadius: "8px", width: "fit-content", marginBottom: "1.25rem"
                            }}>
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                {t._count.cvs}
                                <span style={{ color: "var(--text-muted)", fontWeight: 500 }}>ứng viên dùng</span>
                            </div>

                            {/* Actions */}
                            <div style={{
                                display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: "0.5rem",
                                paddingTop: "1rem", borderTop: "1px solid var(--border-light, #f1f5f9)"
                            }}>
                                <button
                                    className="dash-btn"
                                    style={{
                                        fontSize: "0.85rem", padding: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.35rem",
                                        background: "transparent", color: "var(--text)", border: "1px solid var(--border)"
                                    }}
                                    onClick={() => router.push(`/admin/cv-templates/${t.id}/edit`)}
                                    title="Chỉnh sửa"
                                >
                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                    Sửa
                                </button>

                                <button
                                    className="dash-btn"
                                    style={{
                                        fontSize: "0.85rem", padding: "0.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.35rem",
                                        background: t.isActive ? "rgba(239,68,68,0.05)" : "rgba(34,197,94,0.05)",
                                        color: t.isActive ? "var(--danger, #ef4444)" : "var(--success, #22c55e)",
                                        border: "1px solid " + (t.isActive ? "var(--danger, #ef4444)" : "var(--success, #22c55e)"),
                                    }}
                                    onClick={() => handleToggle(t.id, t.isActive)}
                                    disabled={loading === t.id}
                                    title={t.isActive ? "Ẩn mẫu CV này" : "Hiển thị mẫu CV này"}
                                >
                                    {t.isActive ? (
                                        <>
                                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"></path></svg>
                                            Ẩn
                                        </>
                                    ) : (
                                        <>
                                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                            Đ.Hiện
                                        </>
                                    )}
                                </button>

                                <button
                                    className="dash-btn"
                                    style={{
                                        fontSize: "0.85rem", padding: "0.5rem 0.75rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.35rem",
                                        background: "rgba(239,68,68,0.05)", color: "var(--danger, #ef4444)",
                                        border: "1px solid var(--danger, #ef4444)"
                                    }}
                                    onClick={() => setDeleteConfirm({ id: t.id, name: t.name })}
                                    disabled={loading === t.id}
                                    title="Xoá vĩnh viễn"
                                >
                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {filtered.length === 0 && (
                <div style={{
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    padding: "5rem 2rem", textAlign: "center",
                    background: "var(--card-bg)", borderRadius: "16px", border: "1px dashed var(--border)", marginTop: "2rem"
                }}>
                    <div style={{
                        width: "64px", height: "64px", background: "var(--bg)", borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", color: "var(--text-muted)"
                    }}>
                        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16h16V8l-6-6z" />
                            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                        </svg>
                    </div>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text)", margin: "0 0 0.5rem 0" }}>Chưa có mẫu CV nào</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1.5rem", maxWidth: "320px", lineHeight: 1.5 }}>
                        Dường như bạn chưa thêm mẫu CV nào. Hãy tạo mẫu đầu tiên để tùy biến danh mục tuyển dụng nhé.
                    </p>
                    <button
                        className="dash-btn dash-btn-primary"
                        onClick={() => router.push("/admin/cv-templates/create")}
                    >
                        + Tạo mẫu ngay
                    </button>
                </div>
            )}
            {/* Delete Confirmation Modal */}
            <ConfirmModal
                isOpen={!!deleteConfirm}
                title="Xác nhận xoá mẫu CV"
                message={`Bạn có chắc chắn muốn xoá mẫu "${deleteConfirm?.name}"? Hành động này không thể hoàn tác.`}
                confirmText="Xoá vĩnh viễn"
                cancelText="Hủy bỏ"
                onConfirm={handleDelete}
                onCancel={() => setDeleteConfirm(null)}
                isDanger={true}
            />
        </div>
    );
}
