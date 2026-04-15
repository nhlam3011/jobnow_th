import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import { getAllJobsForAdmin } from "@/app/actions/jobs";
import AdminJobsTable from "@/app/components/AdminJobsTable";

export default async function AdminJobsPage() {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") redirect("/login");

    const jobs = await getAllJobsForAdmin();

    return (
        <DashboardLayout role="ADMIN" userName={session.user.name || "Admin"}>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Quản lý tin tuyển dụng</h1>
                    <p className="dash-page-subtitle">Hệ thống đang có {jobs.length} tin đăng</p>
                </div>
            </div>
            <AdminJobsTable jobs={JSON.parse(JSON.stringify(jobs))} />
        </DashboardLayout>
    );
}
