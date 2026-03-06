import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import { getMyApplications } from "@/app/actions/applications";
import CandidateApplicationsList from "@/app/components/CandidateApplicationsList";

export default async function ApplicationsPage() {
    const session = await auth();
    if (!session?.user || session.user.role !== "CANDIDATE") redirect("/login");

    const applications = await getMyApplications();

    return (
        <DashboardLayout role="CANDIDATE" userName={session.user.name || "Ứng viên"}>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Đơn ứng tuyển</h1>
                    <p className="dash-page-subtitle">Theo dõi trạng thái {applications.length} đơn ứng tuyển của bạn</p>
                </div>
            </div>
            <CandidateApplicationsList applications={JSON.parse(JSON.stringify(applications))} />
        </DashboardLayout>
    );
}
