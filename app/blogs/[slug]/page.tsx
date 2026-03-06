import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BlogDetailClient from "./BlogDetailClient";
import { getBlogBySlug, getBlogs, incrementBlogView } from "@/app/actions/blogs";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Bài viết không tìm thấy - JobNow",
    };
  }

  return {
    title: `${blog.title} - JobNow`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blogData = await getBlogBySlug(slug);

  if (!blogData) {
    notFound();
  }

  // Increment view count asynchronously
  incrementBlogView(slug);

  const relatedBlogs = await getBlogs({
    category: blogData.category,
    limit: 4,
    isPublished: true
  });

  const filteredRelated = relatedBlogs.filter((b: any) => b.id !== blogData.id).slice(0, 3);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, background: "var(--bg)" }}>
        <BlogDetailClient
          blog={JSON.parse(JSON.stringify(blogData))}
          relatedBlogs={JSON.parse(JSON.stringify(filteredRelated))}
        />
      </main>
      <Footer />
    </div>
  );
}
