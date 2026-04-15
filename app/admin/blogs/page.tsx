import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import { getBlogs } from "@/app/actions/blogs";
import AdminBlogsTable from "@/app/components/AdminBlogsTable";

export default async function AdminBlogsPage() {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") redirect("/login");

    // Fetch all blogs (both published and draft)
    const blogs = await getBlogs();

    return (
        <DashboardLayout role="ADMIN" userName={session.user.name || "Admin"}>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Quản lý bài viết</h1>
                    <p className="dash-page-subtitle">Hệ thống đang có {blogs.length} bài viết trong cẩm nang</p>
                </div>
            </div>

            <AdminBlogsTable blogs={JSON.parse(JSON.stringify(blogs))} />
        </DashboardLayout>
    );
}
