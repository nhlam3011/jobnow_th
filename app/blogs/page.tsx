import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BlogListClient from "./BlogListClient";
import { getBlogs } from "@/app/actions/blogs";

export const metadata = {
  title: "Cẩm nang nghề nghiệp - JobNow",
  description: "Tin tức, xu hướng và lời khuyên về phát triển sự nghiệp, tìm việc làm, và thị trường lao động",
};

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const params = await searchParams;
  const blogs = await getBlogs({
    search: params.q,
    category: params.category,
    isPublished: true,
  });

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Search Header - matching Jobs page style */}
      <div
        className="jobs-header"
        style={{
          background: "var(--page-header-bg)",
          borderBottom: "1.5px solid var(--border)",
          padding: "3rem 0"
        }}
      >
        <div className="container-xl">
          <h1
            className="jobs-title"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: "var(--text)",
              marginBottom: "0.5rem"
            }}
          >
            Cẩm nang nghề nghiệp
            {params.q && <span style={{ color: "var(--primary)" }}> - "{params.q}"</span>}
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.125rem", marginBottom: "1.5rem" }}>
            Tin tức, xu hướng và lời khuyên để phát triển sự nghiệp
          </p>
        </div>
      </div>

      <main style={{ padding: "2.5rem 0", flex: 1, background: "var(--bg)" }}>
        <div className="container-xl">
          <BlogListClient
            initialBlogs={JSON.parse(JSON.stringify(blogs))}
            searchParams={params}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
