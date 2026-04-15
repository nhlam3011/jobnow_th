"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import BlogCard from "@/app/components/BlogCard";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  coverImage: string | null;
  author: string | null;
  category: string;
  tags: string[];
  viewCount: number;
  createdAt: Date | string;
}

interface BlogListClientProps {
  initialBlogs: Blog[];
  searchParams?: { q?: string; category?: string };
}

export default function BlogListClient({ initialBlogs, searchParams = {} }: BlogListClientProps) {
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.q || "");

  const categories = [
    { value: "", label: "Tất cả" },
    { value: "career", label: "Sự nghiệp" },
    { value: "interview", label: "Phỏng vấn" },
    { value: "salary", label: "Tiền lương" },
    { value: "tech", label: "Công nghệ" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search) params.set("q", search);
    if (searchParams.category) params.set("category", searchParams.category);
    router.push(`/blogs?${params.toString()}`);
  };

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams();
    if (searchParams.q) params.set("q", searchParams.q);
    if (category) params.set("category", category);
    router.push(`/blogs?${params.toString()}`);
  };

  return (
    <div>
      {/* Blog Filters & Search */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2.5rem",
        gap: "1.5rem",
        flexWrap: "wrap"
      }}>
        <div className="scrollbar-hide" style={{ display: "flex", gap: "0.5rem", overflowX: "auto", paddingBottom: "0.5rem", maxWidth: "100%" }}>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              style={{
                padding: "0.625rem 1.25rem",
                borderRadius: "30px",
                border: "1.5px solid",
                borderColor: (searchParams.category || "") === cat.value ? "var(--primary)" : "var(--border)",
                background: (searchParams.category || "") === cat.value ? "var(--primary)" : "var(--bg-card)",
                color: (searchParams.category || "") === cat.value ? "white" : "var(--text)",
                fontSize: "0.875rem",
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease"
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSearch} style={{ position: "relative", minWidth: "300px", flex: 1, maxWidth: "450px" }}>
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem 1rem 0.75rem 2.75rem",
              borderRadius: "12px",
              border: "1.5px solid var(--border)",
              background: "var(--bg-card)",
              color: "var(--text)",
              fontSize: "0.9375rem",
              outline: "none",
              transition: "border-color 0.2s ease"
            }}
            onFocus={(e) => e.target.style.borderColor = "var(--primary)"}
            onBlur={(e) => e.target.style.borderColor = "var(--border)"}
          />
          <svg
            width="18" height="18" fill="none" stroke="var(--text-muted)" strokeWidth="2" viewBox="0 0 24 24"
            style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }}
          >
            <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" d="M21 21l-4.35-4.35" />
          </svg>
        </form>
      </div>

      {initialBlogs.length === 0 ? (
        <div style={{
          textAlign: "center",
          padding: "5rem 0",
          background: "var(--bg-card)",
          borderRadius: "16px",
          border: "1.5px dashed var(--border)"
        }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 8h10M7 12h10M7 16h10" /></svg>
          </div>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text)" }}>Không tìm thấy bài viết nào</h3>
          <p style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc</p>
          <button
            onClick={() => router.push("/blogs")}
            style={{
              marginTop: "1.5rem",
              color: "var(--primary)",
              background: "none",
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "underline"
            }}
          >
            Xem tất cả bài viết
          </button>
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem"
        }}>
          {initialBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              slug={blog.slug}
              title={blog.title}
              excerpt={blog.excerpt || ""}
              coverImage={blog.coverImage || ""}
              category={blog.category}
              author={blog.author || "JobNow Team"}
              createdAt={blog.createdAt.toString()}
              viewCount={blog.viewCount}
            />
          ))}
        </div>
      )}
    </div>
  );
}
