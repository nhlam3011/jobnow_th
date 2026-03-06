import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import { prisma } from "@/lib/prisma";
import AdminCompaniesTable from "@/app/components/AdminCompaniesTable";

export default async function AdminCompaniesPage() {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") redirect("/login");

    const companies = await prisma.company.findMany({
        include: { _count: { select: { jobs: true } } },
        orderBy: { createdAt: "desc" },
    });

    return (
        <DashboardLayout role="ADMIN" userName={session.user.name || "Admin"}>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Quản lý công ty</h1>
                    <p className="dash-page-subtitle">Hệ thống đang có {companies.length} công ty</p>
                </div>
            </div>
            <AdminCompaniesTable companies={JSON.parse(JSON.stringify(companies))} />
        </DashboardLayout>
    );
}
