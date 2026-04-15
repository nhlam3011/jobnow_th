"use client";

import Link from "next/link";

interface BlogCardProps {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    category: string;
    author: string;
    createdAt: string;
    viewCount?: number;
}

export default function BlogCard({
    slug,
    title,
    excerpt,
    coverImage,
    category,
    author,
    createdAt,
    viewCount = 0
}: BlogCardProps) {
    return (
        <Link
            href={`/blogs/${slug}`}
            style={{
                display: "flex",
                flexDirection: "column",
                background: "var(--bg-card)",
                borderRadius: "12px",
                overflow: "hidden",
                textDecoration: "none",
                border: "1.5px solid var(--border)",
                transition: "all 0.2s ease",
                height: "100%",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                e.currentTarget.style.borderColor = "var(--primary-light)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "var(--border)";
            }}
        >
            <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                {/* Fallback pattern background if no image or image fails to load */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, var(--bg) 0%, var(--bg-card) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--border)"
                }}>
                    <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>

                {coverImage && (
                    <img
                        src={coverImage}
                        alt={title}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            position: "absolute",
                            inset: 0,
                            zIndex: 1,
                            backgroundColor: "var(--bg-card)" // Cover the fallback while loading
                        }}
                        onError={(e) => {
                            e.currentTarget.style.display = 'none'; // Hide broken image to show fallback
                        }}
                    />
                )}
                <div style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "rgba(0,0,0,0.45)",
                    backdropFilter: "blur(4px)",
                    color: "#fff",
                    padding: "3px 10px",
                    borderRadius: "4px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    zIndex: 2
                }}>
                    {getCategoryLabel(category)}
                </div>
            </div>

            <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3
                    style={{
                        fontSize: "1.1875rem",
                        fontWeight: 800,
                        color: "var(--text)",
                        marginBottom: "0.625rem",
                        lineHeight: 1.4,
                        minHeight: "2.8em", /* Force 2 lines */
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        letterSpacing: "-0.01em"
                    }}
                >
                    {title}
                </h3>
                <p
                    style={{
                        fontSize: "1rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.7,
                        flex: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        marginBottom: "1.25rem"
                    }}
                >
                    {excerpt || "..."}
                </p>

                <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", flex: 1, minWidth: 0 }}>
                        <div style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, var(--primary) 0%, #4f46e5 100%)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            flexShrink: 0
                        }}>
                            {author ? author.charAt(0).toUpperCase() : "A"}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                            <span style={{ fontSize: "0.875rem", color: "var(--text)", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {author || "JobNow Team"}
                            </span>
                            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.125rem" }}>
                                {formatDate(createdAt)}
                            </span>
                        </div>
                    </div>
                    {viewCount > 0 && (
                        <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", paddingLeft: "0.75rem" }}>
                            <svg width="16" height="16" fill="none" stroke="var(--text-muted)" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 500 }}>
                                {viewCount}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}

function getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
        career: "Sự nghiệp",
        interview: "Phỏng vấn",
        salary: "Lương",
        tech: "Công nghệ",
        hr: "Nhân sự",
    };
    return labels[category] || category;
}

function formatDate(dateString: string): string {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString("vi-VN", { day: "numeric", month: "short", year: "numeric" });
    } catch (e) {
        return dateString;
    }
}
