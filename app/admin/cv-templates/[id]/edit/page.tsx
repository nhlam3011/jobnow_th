import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import AdminTemplateDesigner from "@/app/components/AdminTemplateDesigner";
import { getTemplateById } from "@/app/actions/cv";

export default async function EditTemplatePage({ params }: { params: Promise<{ id: string }> }) {
    const session = await auth();
    if (!session?.user || (session.user as any).role !== "ADMIN") redirect("/login");

    const { id } = await params;
    const res = await getTemplateById(id);
    if (!res.success || !res.template) redirect("/admin/cv-templates");

    return (
        <DashboardLayout role="ADMIN" userName={session.user.name || "Admin"}>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Chỉnh sửa mẫu CV</h1>
                    <p className="dash-page-subtitle">Đang sửa: {res.template.name}</p>
                </div>
            </div>

            <AdminTemplateDesigner
                mode="edit"
                templateId={id}
                initialData={JSON.parse(JSON.stringify(res.template))}
            />
        </DashboardLayout>
    );
}
