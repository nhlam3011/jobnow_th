import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BlogListClient from "../BlogListClient";
import { getBlogsByCategory } from "@/lib/blogs";

export const metadata = {
  title: "Hướng dẫn phỏng vấn - JobNow",
  description: "Kinh nghiệm và mẹo để thành công trong các buổi phỏng vấn xin việc",
};

export default function InterviewBlogsPage() {
  const blogs = getBlogsByCategory("interview");

  return (
    <>
      <Navbar />
      <div style={{ background: "var(--page-header-bg)", padding: "3rem 0" }}>
        <div className="container-xl">
          <div style={{ maxWidth: "800px" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text)" }}>
              Hướng dẫn phỏng vấn
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1.125rem" }}>
              Kinh nghiệm và mẹo để thành công trong các buổi phỏng vấn xin việc
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: "2.5rem 0", minHeight: "60vh" }}>
        <div className="container-xl">
          <BlogListClient initialBlogs={blogs as any} />
        </div>
      </div>
      <Footer />
    </>
  );
}
