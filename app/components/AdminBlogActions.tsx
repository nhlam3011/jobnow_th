"use client";
import { useState, useTransition } from "react";
import { updateBlog, deleteBlog } from "@/app/actions/blogs";
import Link from "next/link";

export default function AdminBlogActions({
    blogId,
    currentStatus,
    slug
}: {
    blogId: string;
    currentStatus: boolean;
    slug: string;
}) {
    const [isPublished, setIsPublished] = useState(currentStatus);
    const [isPending, startTransition] = useTransition();

    function handleTogglePublish() {
        const nextStatus = !isPublished;
        setIsPublished(nextStatus);
        startTransition(async () => {
            await updateBlog({ id: blogId, isPublished: nextStatus });
        });
    }

    async function handleDelete() {
        if (confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) {
            startTransition(async () => {
                await deleteBlog(blogId);
            });
        }
    }

    return (
        <div style={{ display: "flex", gap: "0.25rem", justifyContent: "center", alignItems: "center" }}>
            <Link
                href={`/admin/blogs/${blogId}/edit`}
                className="dash-btn dash-btn-ghost"
                style={{ padding: "0.375rem", lineHeight: 1 }}
                title="Sửa"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
            </Link>

            <button
                className={`dash-btn ${isPublished ? "dash-btn-ghost" : "dash-btn-success"}`}
                onClick={handleTogglePublish}
                disabled={isPending}
                style={{ padding: "0.375rem", lineHeight: 1 }}
                title={isPublished ? "Ẩn" : "Đăng"}
            >
                {isPublished ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                )}
            </button>

            <button
                className="dash-btn dash-btn-danger"
                onClick={handleDelete}
                disabled={isPending}
                style={{ padding: "0.375rem", lineHeight: 1 }}
                title="Xóa"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
            </button>
        </div>
    );
}
