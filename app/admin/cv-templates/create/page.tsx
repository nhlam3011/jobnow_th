import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import AdminTemplateDesigner from "@/app/components/AdminTemplateDesigner";

export default async function CreateTemplatePage() {
    const session = await auth();
    if (!session?.user || (session.user as any).role !== "ADMIN") redirect("/login");

    return (
        <DashboardLayout role="ADMIN" userName={session.user.name || "Admin"}>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Tạo mẫu CV mới</h1>
                    <p className="dash-page-subtitle">Thiết kế mẫu CV với layout, màu sắc và font tùy chọn</p>
                </div>
            </div>

            <AdminTemplateDesigner mode="create" />
        </DashboardLayout>
    );
}
