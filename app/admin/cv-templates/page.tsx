import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import { getAllTemplatesAdmin } from "@/app/actions/cv";
import AdminTemplateList from "@/app/components/AdminTemplateList";

export default async function AdminCVTemplatesPage() {
    const session = await auth();
    if (!session?.user || (session.user as any).role !== "ADMIN") redirect("/login");

    const res = await getAllTemplatesAdmin();
    const templates = res.success ? res.templates : [];

    return (
        <DashboardLayout role="ADMIN" userName={session.user.name || "Admin"}>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Quản lý mẫu CV</h1>
                    <p className="dash-page-subtitle">
                        Hệ thống đang có {(templates as any[])?.length || 0} mẫu CV
                    </p>
                </div>
            </div>

            <AdminTemplateList templates={JSON.parse(JSON.stringify(templates || []))} />
        </DashboardLayout>
    );
}
