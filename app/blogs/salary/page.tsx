import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BlogListClient from "../BlogListClient";
import { getBlogsByCategory } from "@/lib/blogs";

export const metadata = {
  title: "Bảng lương - JobNow",
  description: "Thông tin mức lương các ngành nghề tại Việt Nam",
};

export default function SalaryBlogsPage() {
  const blogs = getBlogsByCategory("salary");

  return (
    <>
      <Navbar />
      <div style={{ background: "var(--page-header-bg)", padding: "3rem 0" }}>
        <div className="container-xl">
          <div style={{ maxWidth: "800px" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text)" }}>
              Bảng lương
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "1.125rem" }}>
              Thông tin mức lương các ngành nghề tại Việt Nam
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
