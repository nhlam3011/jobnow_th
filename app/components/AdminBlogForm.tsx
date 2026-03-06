"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createBlog, updateBlog } from "@/app/actions/blogs";
import dynamic from "next/dynamic";

const EditorWrapper = dynamic(() => import("./EditorWrapper"), {
    ssr: false,
    loading: () => <p>Đang tải bộ soạn thảo...</p>
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const newData = { ...prev, [name]: value };
            // Auto-generate slug from title if slug is empty or matches previous title's slug
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
                alert("Đã có lỗi xảy ra: " + result.error);
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "1000px" }}>
            <div className="dash-card">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    <div className="form-group">
                        <label className="dash-label">Tiêu đề bài viết</label>
                        <input
                            name="title"
                            className="dash-input"
                            placeholder="VD: 5 Kỹ năng quan trọng..."
                            required
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="dash-label">Slug (Đường dẫn)</label>
                        <input
                            name="slug"
                            className="dash-input"
                            placeholder="vd: 5-ky-nang-quan-trong"
                            required
                            value={formData.slug}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "1rem" }}>
                    <div className="form-group">
                        <label className="dash-label">Danh mục</label>
                        <select
                            name="category"
                            className="dash-input"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="career">Sự nghiệp</option>
                            <option value="interview">Phỏng vấn</option>
                            <option value="salary">Tiền lương</option>
                            <option value="tech">Công nghệ</option>
                            <option value="hr">Nhân sự</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="dash-label">Thẻ (Tags - cách nhau bởi dấu phẩy)</label>
                        <input
                            className="dash-input"
                            placeholder="VD: cv, phong van, luong"
                            value={tagInput}
                            onChange={handleTagChange}
                        />
                    </div>
                </div>

                <div className="form-group" style={{ marginTop: "1rem" }}>
                    <label className="dash-label">Link ảnh bìa (Cover Image URL)</label>
                    <input
                        name="coverImage"
                        className="dash-input"
                        placeholder="https://images.unsplash.com/..."
                        value={formData.coverImage}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group" style={{ marginTop: "1rem" }}>
                    <label className="dash-label">Mô tả ngắn (Excerpt)</label>
                    <textarea
                        name="excerpt"
                        className="dash-input"
                        rows={3}
                        placeholder="Tóm tắt nội dung bài viết..."
                        value={formData.excerpt}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="form-group" style={{ marginTop: "1rem" }}>
                    <label className="dash-label">Nội dung bài viết</label>
                    <div style={{ background: "#fff", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                        <EditorWrapper
                            value={formData.content}
                            onChange={(content) => setFormData(prev => ({ ...prev, content }))}
                        />
                    </div>
                </div>

                <div className="form-group" style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <input
                        type="checkbox"
                        id="isPublished"
                        checked={formData.isPublished}
                        onChange={(e) => setFormData(prev => ({ ...prev, isPublished: e.target.checked }))}
                    />
                    <label htmlFor="isPublished" style={{ fontWeight: 600, cursor: "pointer" }}>Xuất bản bài viết này</label>
                </div>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
                <button
                    type="submit"
                    className="dash-btn dash-btn-primary"
                    disabled={isPending}
                    style={{ padding: "0.75rem 2rem" }}
                >
                    {isPending ? "Đang lưu..." : (formData.id ? "Cập nhật bài viết" : "Tạo bài viết")}
                </button>
                <button
                    type="button"
                    className="dash-btn dash-btn-ghost"
                    onClick={() => router.push("/admin/blogs")}
                    style={{ padding: "0.75rem 2rem" }}
                >
                    Hủy bỏ
                </button>
            </div>

            <style jsx>{`
                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
            `}</style>
        </form>
    );
}
