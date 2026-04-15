import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import { getEmployerJobs } from "@/app/actions/jobs";
import { getEmployerCompany } from "@/app/actions/profile";
import EmployerJobsTable from "@/app/components/EmployerJobsTable";
import Link from "next/link";

export default async function EmployerJobsPage() {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") redirect("/login");

    const [jobs, company] = await Promise.all([getEmployerJobs(), getEmployerCompany()]);

    return (
        <DashboardLayout
            role="EMPLOYER"
            userName={company?.name || session.user.name || "Nhà tuyển dụng"}
            userImage={company?.logo || session.user.image}
        >
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Quản lý tin tuyển dụng</h1>
                    <p className="dash-page-subtitle">Bạn đang có {jobs.length} tin tuyển dụng</p>
                </div>
                <Link href="/employer/jobs/new" className="dash-btn dash-btn-primary">+ Đăng tin mới</Link>
            </div>
            <EmployerJobsTable jobs={JSON.parse(JSON.stringify(jobs))} />
        </DashboardLayout>
    );
}
