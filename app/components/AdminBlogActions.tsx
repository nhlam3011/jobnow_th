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
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", alignItems: "center" }}>
            <Link
                href={`/admin/blogs/${blogId}/edit`}
                className="dash-btn dash-btn-ghost"
                style={{ fontSize: "0.75rem", padding: "0.3rem 0.75rem" }}
            >
                Sửa
            </Link>

            <button
                className={`dash-btn ${isPublished ? "dash-btn-ghost" : "dash-btn-success"}`}
                onClick={handleTogglePublish}
                disabled={isPending}
                style={{ fontSize: "0.75rem", padding: "0.3rem 0.75rem" }}
            >
                {isPublished ? "Ẩn" : "Đăng"}
            </button>

            <button
                className="dash-btn dash-btn-danger"
                onClick={handleDelete}
                disabled={isPending}
                style={{ fontSize: "0.75rem", padding: "0.3rem 0.75rem" }}
            >
                Xóa
            </button>
        </div>
    );
}
