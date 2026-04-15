"use client";

import Link from "next/link";

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
  createdAt: string;
}

interface BlogDetailClientProps {
  blog: Blog;
  relatedBlogs: Blog[];
}

export default function BlogDetailClient({ blog, relatedBlogs }: BlogDetailClientProps) {
  return (
    <div style={{ padding: "3rem 0" }}>
      <div className="container-xl">
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: "2rem", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
            <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Trang chủ</Link>
            <span style={{ color: "var(--border)" }}>/</span>
            <Link href="/blogs" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Cẩm nang</Link>
            <span style={{ color: "var(--border)" }}>/</span>
            <span style={{ color: "var(--primary)", fontWeight: 500 }}>Chi tiết</span>
          </nav>

          <div style={{ marginBottom: "1.5rem" }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--primary)",
                background: "var(--primary-light)",
                padding: "0.375rem 0.875rem",
                borderRadius: "30px",
                textTransform: "uppercase",
                letterSpacing: "0.025em"
              }}
            >
              {getCategoryLabel(blog.category)}
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 2.75rem)",
            fontWeight: 800,
            lineHeight: 1.25,
            margin: "0.5rem 0 1.5rem",
            color: "var(--text)",
            letterSpacing: "-0.03em",
            wordWrap: "break-word",
            overflowWrap: "break-word"
          }}>
            {blog.title}
          </h1>

          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "2.5rem",
            padding: "1rem 0",
            borderTop: "1.5px solid var(--border)",
            borderBottom: "1.5px solid var(--border)",
            flexWrap: "wrap",
            gap: "1rem"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--primary) 0%, #4f46e5 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 700,
                fontSize: "1rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}>
                {blog.author ? blog.author.charAt(0).toUpperCase() : "A"}
              </div>
              <div>
                <div style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.9375rem" }}>{blog.author || "JobNow Team"}</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>{formatDate(blog.createdAt)}</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1.25rem", color: "var(--text-muted)", fontSize: "0.875rem" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {blog.viewCount.toLocaleString()} lượt xem
              </span>
            </div>
          </div>

          <div style={{ borderRadius: "20px", overflow: "hidden", marginBottom: "3rem", boxShadow: "var(--shadow-lg)" }}>
            <img
              src={blog.coverImage || ""}
              alt={blog.title}
              style={{ width: "100%", height: "auto", maxHeight: "450px", objectFit: "cover" }}
            />
          </div>

          <div
            className="blog-content"
            style={{
              fontSize: "1.1875rem",
              lineHeight: 1.85,
              color: "var(--text)",
              opacity: 0.95,
              marginBottom: "3rem",
              wordWrap: "break-word",
              overflowWrap: "break-word"
            }}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          <div style={{
            marginTop: "3rem",
            padding: "2rem",
            background: "var(--bg-card)",
            borderRadius: "16px",
            border: "1.5px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}>
            <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text)" }}>Tags phổ biến:</h4>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.875rem",
                    padding: "0.5rem 1rem",
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    color: "var(--text)",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--primary)";
                    e.currentTarget.style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text)";
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {relatedBlogs.length > 0 && (
            <div style={{ marginTop: "5rem" }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: "2rem",
                paddingBottom: "1rem",
                borderBottom: "1.5px solid var(--border)"
              }}>
                <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text)" }}>Bài viết cùng chủ đề</h3>
                <Link href="/blogs" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none", fontSize: "0.9375rem" }}>
                  Xem tất cả →
                </Link>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
                {relatedBlogs.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blogs/${related.slug}`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      background: "var(--bg-card)",
                      borderRadius: "16px",
                      overflow: "hidden",
                      textDecoration: "none",
                      border: "1.5px solid var(--border)",
                      transition: "all 0.3s ease",
                      height: "100%"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                      e.currentTarget.style.borderColor = "var(--primary-light)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.borderColor = "var(--border)";
                    }}
                  >
                    <div style={{ height: "160px", overflow: "hidden" }}>
                      <img
                        src={related.coverImage || ""}
                        alt={related.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div style={{ padding: "1.25rem" }}>
                      <h4 style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--text)",
                        lineHeight: 1.4,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        marginBottom: "0.5rem"
                      }}>
                        {related.title}
                      </h4>
                      <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>{formatDate(related.createdAt)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .blog-content {
          word-wrap: break-word;
          overflow-wrap: break-word;
          word-break: break-word;
        }
        /* Strip WYSIWYG inline background colors — let theme control */
        .blog-content *[style*="background"],
        .blog-content *[style*="background-color"] {
          background: transparent !important;
          background-color: transparent !important;
        }
        
        /* Preserve code blocks background */
        .blog-content pre, .blog-content pre[style*="background"],
        .blog-content code, .blog-content code[style*="background"] {
          background: var(--bg-card) !important;
          padding: 1rem;
          border-radius: 8px;
          overflow-x: auto;
          max-width: 100%;
          display: block;
        }

        /* Also strip hardcoded text colors from WYSIWYG — use var(--text) */
        .blog-content *[style*="color"] {
          color: inherit !important;
        }
        .blog-content img {
          max-width: 100% !important;
          height: auto !important;
          border-radius: 12px;
          margin: 1.5rem 0;
        }
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: 800;
          margin: 3rem 0 1.25rem;
          color: var(--text);
          letter-spacing: -0.01em;
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 2.5rem 0 1rem;
          color: var(--text);
        }
        .blog-content p {
          margin-bottom: 1.75rem;
          line-height: 1.85;
          text-align: left;
        }
        .blog-content ul, .blog-content ol {
          margin-bottom: 1.75rem;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2.5rem 0;
          background: var(--bg-card);
          border-radius: 12px;
          border: 1px solid var(--border);
          display: block;
          overflow-x: auto;
          white-space: nowrap;
        }
        .blog-content th, .blog-content td {
          padding: 1.25rem 1rem;
          border: 1px solid var(--border);
          text-align: left;
        }
        .blog-content th {
          background: var(--bg);
          font-weight: 700;
        }
        .blog-content blockquote {
          border-left: 4px solid var(--primary);
          padding: 1.5rem;
          margin: 2.5rem 0;
          background: var(--bg);
          font-style: italic;
          color: var(--text);
          border-radius: 0 12px 12px 0;
          font-size: 1.125rem;
        }
        @media (max-width: 768px) {
          .blog-content p {
            font-size: 1.0625rem;
            line-height: 1.75;
          }
          .blog-content h2 { font-size: 1.625rem; margin-top: 2rem; }
          .blog-content h3 { font-size: 1.35rem; margin-top: 1.75rem; }
        }
      `}</style>
    </div>
  );
}

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    career: "Sự nghiệp",
    interview: "Phỏng vấn",
    salary: "Tiền lương",
    tech: "Công nghệ",
    hr: "Nhân sự",
  };
  return labels[category] || category;
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" });
  } catch (e) {
    return dateString;
  }
}
