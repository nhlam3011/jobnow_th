import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import { getEmployerCompany } from "@/app/actions/profile";
import { getBillingStats } from "@/app/actions/billing";
import BillingContent from "./BillingContent";

export default async function BillingPage() {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") redirect("/login");

    const [company, stats] = await Promise.all([
        getEmployerCompany(),
        getBillingStats()
    ]);

    return (
        <DashboardLayout
            role="EMPLOYER"
            userName={company?.name || session.user.name || "Nhà tuyển dụng"}
            userImage={company?.logo || session.user.image}
        >
            <BillingContent stats={stats} />
        </DashboardLayout>
    );
}
