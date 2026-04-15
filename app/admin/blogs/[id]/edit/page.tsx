import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import AdminBlogForm from "@/app/components/AdminBlogForm";
import { getBlogById } from "@/app/actions/blogs";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function AdminEditBlogPage({ params }: PageProps) {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") redirect("/login");

    const { id } = await params;
    const blog = await getBlogById(id);

    if (!blog) {
        notFound();
    }

    return (
        <DashboardLayout role="ADMIN" userName={session.user.name || "Admin"}>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Chỉnh sửa bài viết</h1>
                    <p className="dash-page-subtitle">Đang chỉnh sửa: {blog.title}</p>
                </div>
            </div>

            <AdminBlogForm initialData={JSON.parse(JSON.stringify(blog))} />
        </DashboardLayout>
    );
}
