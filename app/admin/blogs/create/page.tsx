import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import AdminBlogForm from "@/app/components/AdminBlogForm";

export default async function AdminCreateBlogPage() {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") redirect("/login");

    return (
        <DashboardLayout role="ADMIN" userName={session.user.name || "Admin"}>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Viết bài mới</h1>
                    <p className="dash-page-subtitle">Thêm nội dung mới cho cẩm nang nghề nghiệp</p>
                </div>
            </div>

            <AdminBlogForm />
        </DashboardLayout>
    );
}
