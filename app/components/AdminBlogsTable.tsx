"use client";

import { useState } from "react";
import Link from "next/link";
import AdminBlogActions from "@/app/components/AdminBlogActions";

interface Blog {
    id: string;
    title: string;
    slug: string;
    category: string;
    isPublished: boolean;
    viewCount: number;
    createdAt: string;
}

const CATEGORY_LABELS: Record<string, string> = {
    career: "Sự nghiệp",
    interview: "Phỏng vấn",
    salary: "Tiền lương",
    tech: "Công nghệ",
};

export default function AdminBlogsTable({ blogs }: { blogs: Blog[] }) {
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("ALL");

    const filtered = blogs.filter((blog) => {
        const matchSearch = !search || blog.title.toLowerCase().includes(search.toLowerCase());
        const matchCategory = categoryFilter === "ALL" || blog.category === categoryFilter;
        return matchSearch && matchCategory;
    });

    return (
        <>
            <div className="dash-filter-bar">
                <input
                    className="dash-input"
                    placeholder="Tìm kiếm bài viết..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ maxWidth: "400px" }}
                />

                <select
                    className="dash-input"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    style={{ maxWidth: "200px" }}
                >
                    <option value="ALL">Tất cả danh mục</option>
                    {Object.entries(CATEGORY_LABELS).map(([val, label]) => (
                        <option key={val} value={val}>{label}</option>
                    ))}
                </select>

                <div style={{ marginLeft: "auto" }}>
                    <Link href="/admin/blogs/create" className="dash-btn dash-btn-primary">
                        + Viết bài mới
                    </Link>
                </div>
            </div>

            <div className="dash-table-wrap">
                <table className="dash-table">
                    <thead>
                        <tr>
                            <th>Tiêu đề</th>
                            <th className="hide-mobile">Danh mục</th>
                            <th className="hide-mobile">Ngày tạo</th>
                            <th className="hide-mobile">Lượt xem</th>
                            <th>Trạng thái</th>
                            <th style={{ textAlign: "right" }}>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr><td colSpan={6} className="dash-empty">Không tìm thấy bài viết nào</td></tr>
                        ) : (
                            filtered.map((blog) => (
                                <tr key={blog.id}>
                                    <td>
                                        <Link
                                            href={`/blogs/${blog.slug}`}
                                            target="_blank"
                                            style={{ color: "var(--text)", textDecoration: "none", fontWeight: 600 }}
                                        >
                                            {blog.title}
                                        </Link>
                                    </td>
                                    <td className="muted hide-mobile">{CATEGORY_LABELS[blog.category] || blog.category}</td>
                                    <td className="muted hide-mobile">{new Date(blog.createdAt).toLocaleDateString("vi-VN")}</td>
                                    <td className="muted hide-mobile">{blog.viewCount.toLocaleString()}</td>
                                    <td>
                                        <span className={`dash-badge ${blog.isPublished ? "active" : ""}`} style={{
                                            background: blog.isPublished ? "rgba(34,197,94,0.1)" : "rgba(100,116,139,0.1)",
                                            color: blog.isPublished ? "#16A34A" : "#64748B"
                                        }}>
                                            {blog.isPublished ? "Công khai" : "Bản nháp"}
                                        </span>
                                    </td>
                                    <td style={{ textAlign: "right" }}>
                                        <AdminBlogActions
                                            blogId={blog.id}
                                            currentStatus={blog.isPublished}
                                            slug={blog.slug}
                                        />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
