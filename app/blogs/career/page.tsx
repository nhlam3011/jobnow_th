import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BlogListClient from "../BlogListClient";
import { getBlogsByCategory } from "@/lib/blogs";

export const metadata = {
  title: "Phát triển sự nghiệp - JobNow",
  description: "Lời khuyên và chiến lược để phát triển sự nghiệp của bạn",
};

export default function CareerBlogsPage() {
  const blogs = getBlogsByCategory("career");

  return (
    <>
      <Navbar />
      <div style={{ background: "var(--page-header-bg)", padding: "3rem 0" }}>
        <div className="container-xl">
          <div style={{ maxWidth: "800px" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text)" }}>
              Phát triển sự nghiệp
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1.125rem" }}>
              Lời khuyên và chiến lược để xây dựng sự nghiệp thành công
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: "2.5rem 0", minHeight: "60vh" }}>
        <div className="container-xl">
          <BlogListClient blogs={blogs} />
        </div>
      </div>
      <Footer />
    </>
  );
}
