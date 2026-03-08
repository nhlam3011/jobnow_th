"use client";

import { useState, useTransition, useRef } from "react";
import { useRouter } from "next/navigation";
import { createBlog, updateBlog } from "@/app/actions/blogs";
import dynamic from "next/dynamic";

const EditorWrapper = dynamic(() => import("./EditorWrapper"), {
    ssr: false,
    loading: () => (
        <div style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)", background: "var(--bg)", borderRadius: "0 0 12px 12px", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: "spin 1s linear infinite", marginBottom: "0.5rem" }}>
                    <path d="M12 2v4m0 12v4m-7-7H2m20 0h-3m-2.5-7.5L15 7m-6 10-1.5 1.5M7 7 5.5 5.5m13 13L17 17" />
                </svg>
                <div>Đang tải bộ soạn thảo...</div>
            </div>
        </div>
    )
});

interface BlogData {
    id?: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage: string;
    category: string;
    tags: string[];
    isPublished: boolean;
}

interface AdminBlogFormProps {
    initialData?: BlogData;
}

export default function AdminBlogForm({ initialData }: AdminBlogFormProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState<BlogData>(initialData || {
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        coverImage: "",
        category: "career",
        tags: [],
        isPublished: false
    });
    const [tagInput, setTagInput] = useState(initialData?.tags.join(", ") || "");
    const [message, setMessage] = useState("");
    const coverInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const newData = { ...prev, [name]: value };
            if (name === "title" && (!prev.slug || prev.slug === generateSlug(prev.title))) {
                newData.slug = generateSlug(value);
            }
            return newData;
        });
    };

    const generateSlug = (text: string) => {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[đĐ]/g, "d")
            .replace(/([^a-z0-9\s-]|_)/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();
    };

    const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTagInput(e.target.value);
        const tags = e.target.value.split(",").map(t => t.trim()).filter(t => t !== "");
        setFormData(prev => ({ ...prev, tags }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");

        startTransition(async () => {
            let result;
            if (formData.id) {
                result = await updateBlog({ ...formData, id: formData.id });
            } else {
                result = await createBlog(formData);
            }

            if (result.success) {
                router.push("/admin/blogs");
                router.refresh();
            } else {
                setMessage("Lỗi: " + result.error);
            }
        });
    };

    const categories = [
        { value: "career", label: "Sự nghiệp", icon: "🎯" },
        { value: "interview", label: "Phỏng vấn", icon: "💬" },
        { value: "salary", label: "Tiền lương", icon: "💰" },
        { value: "tech", label: "Công nghệ", icon: "💻" },
        { value: "hr", label: "Nhân sự", icon: "👥" },
    ];

    return (
        <form onSubmit={handleSubmit}>
            {message && (
                <div className="dash-alert dash-alert-error" style={{ marginBottom: "1rem" }}>
                    {message}
                </div>
            )}

            {/* Main content area */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "1.5rem", alignItems: "start" }}>
                {/* Left: Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {/* Title */}
                    <div className="dash-form-card">
                        <div className="dash-form-group" style={{ marginBottom: 0 }}>
                            <label className="dash-form-label">Tiêu đề bài viết</label>
                            <input
                                name="title"
                                className="dash-input"
                                placeholder="VD: 5 Kỹ năng quan trọng giúp bạn nổi bật ..."
                                required
                                value={formData.title}
                                onChange={handleChange}
                                style={{ fontSize: "1.0625rem", fontWeight: 600, padding: "0.875rem 1rem" }}
                            />
                        </div>
                    </div>

                    {/* Excerpt */}
                    <div className="dash-form-card">
                        <div className="dash-form-group" style={{ marginBottom: 0 }}>
                            <label className="dash-form-label">Mô tả ngắn (Excerpt)</label>
                            <textarea
                                name="excerpt"
                                className="dash-input"
                                rows={3}
                                placeholder="Tóm tắt nội dung bài viết để hiển thị ở danh sách..."
                                value={formData.excerpt}
                                onChange={handleChange}
                                style={{ resize: "vertical" }}
                            />
                        </div>
                    </div>

                    {/* Editor */}
                    <div className="dash-form-card" style={{ padding: 0, overflow: "hidden" }}>
                        <div style={{ padding: "1rem 1.25rem 0.5rem" }}>
                            <label className="dash-form-label" style={{ marginBottom: 0 }}>
                                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                    Nội dung bài viết
                                </span>
                            </label>
                        </div>
                        <EditorWrapper
                            value={formData.content}
                            onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                        />
                    </div>
                </div>

                {/* Right: Sidebar settings */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", position: "sticky", top: "1rem" }}>
                    {/* Publish */}
                    <div className="dash-form-card">
                        <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                            Xuất bản
                        </h3>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", background: "var(--bg)", borderRadius: "10px", marginBottom: "1rem" }}>
                            <input
                                type="checkbox"
                                id="isPublished"
                                checked={formData.isPublished}
                                onChange={(e) => setFormData(prev => ({ ...prev, isPublished: e.target.checked }))}
                                style={{ width: "18px", height: "18px", accentColor: "var(--primary)", cursor: "pointer" }}
                            />
                            <label htmlFor="isPublished" style={{ fontWeight: 600, cursor: "pointer", fontSize: "0.9375rem" }}>
                                {formData.isPublished ? "✅ Công khai" : "Bản nháp"}
                            </label>
                        </div>
                        <div style={{ display: "flex", gap: "0.75rem" }}>
                            <button
                                type="submit"
                                className="dash-btn dash-btn-primary"
                                disabled={isPending}
                                style={{ flex: 1, justifyContent: "center", padding: "0.75rem" }}
                            >
                                {isPending ? "Đang lưu..." : (formData.id ? "Cập nhật" : "Tạo bài viết")}
                            </button>
                            <button
                                type="button"
                                className="dash-btn dash-btn-ghost"
                                onClick={() => router.push("/admin/blogs")}
                                style={{ padding: "0.75rem" }}
                            >
                                Hủy
                            </button>
                        </div>
                    </div>

                    {/* Slug */}
                    <div className="dash-form-card">
                        <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                            </svg>
                            Đường dẫn (Slug)
                        </h3>
                        <input
                            name="slug"
                            className="dash-input"
                            placeholder="vd: 5-ky-nang-quan-trong"
                            required
                            value={formData.slug}
                            onChange={handleChange}
                            style={{ fontSize: "0.875rem" }}
                        />
                        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.375rem", marginBottom: 0 }}>
                            /blogs/{formData.slug || "..."}
                        </p>
                    </div>

                    {/* Category */}
                    <div className="dash-form-card">
                        <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 7V4h16v3M9 20h6M12 4v16" />
                            </svg>
                            Danh mục
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                            {categories.map(cat => (
                                <label
                                    key={cat.value}
                                    style={{
                                        display: "flex", alignItems: "center", gap: "0.625rem",
                                        padding: "0.5rem 0.75rem", borderRadius: "8px", cursor: "pointer",
                                        background: formData.category === cat.value ? "rgba(14, 165, 233, 0.08)" : "transparent",
                                        border: formData.category === cat.value ? "1px solid rgba(14, 165, 233, 0.2)" : "1px solid transparent",
                                        transition: "all 150ms ease",
                                    }}
                                >
                                    <input
                                        type="radio"
                                        name="category"
                                        value={cat.value}
                                        checked={formData.category === cat.value}
                                        onChange={handleChange}
                                        style={{ display: "none" }}
                                    />
                                    <span>{cat.icon}</span>
                                    <span style={{ fontWeight: formData.category === cat.value ? 600 : 400, fontSize: "0.9375rem" }}>{cat.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="dash-form-card">
                        <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                <line x1="7" y1="7" x2="7.01" y2="7" />
                            </svg>
                            Tags
                        </h3>
                        <input
                            className="dash-input"
                            placeholder="cv, phong van, luong..."
                            value={tagInput}
                            onChange={handleTagChange}
                            style={{ fontSize: "0.875rem" }}
                        />
                        {formData.tags.length > 0 && (
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginTop: "0.5rem" }}>
                                {formData.tags.map((tag, i) => (
                                    <span key={i} className="dash-badge" style={{ background: "rgba(14,165,233,0.1)", color: "#0369A1" }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Cover Image */}
                    <div className="dash-form-card">
                        <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                            Ảnh bìa
                        </h3>
                        <input
                            ref={coverInputRef}
                            name="coverImage"
                            className="dash-input"
                            placeholder="https://images.unsplash.com/..."
                            value={formData.coverImage}
                            onChange={handleChange}
                            style={{ fontSize: "0.875rem" }}
                        />
                        {formData.coverImage && (
                            <div style={{ marginTop: "0.75rem", borderRadius: "10px", overflow: "hidden", border: "1px solid var(--border)", aspectRatio: "16/9" }}>
                                <img
                                    src={formData.coverImage}
                                    alt="Cover preview"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile responsive override */}
            <style jsx>{`
                @media (max-width: 900px) {
                    form > div:first-of-type {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </form>
    );
}
