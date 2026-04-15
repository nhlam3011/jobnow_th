import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import AdminBillingContent from "./AdminBillingContent";
import { getAllTransactions, getAllCompanyWallets, getAdminVipPackages, getAdminBillingStats } from "@/app/actions/admin-billing";

export default async function AdminBillingPage() {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") redirect("/login");

    const [transactions, wallets, packages, stats] = await Promise.all([
        getAllTransactions(),
        getAllCompanyWallets(),
        getAdminVipPackages(),
        getAdminBillingStats()
    ]);

    return (
        <DashboardLayout role="ADMIN" userName={session.user.name || "Admin"}>
            <AdminBillingContent 
                initialTransactions={transactions}
                initialWallets={wallets}
                initialPackages={packages}
                stats={stats}
            />
        </DashboardLayout>
    );
}
