import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import AccountSettings from "@/app/components/AccountSettings";
import { getAccountInfo } from "@/app/actions/account";
import { getEmployerCompany } from "@/app/actions/profile";

export default async function EmployerSettings() {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") redirect("/login");

    const [user, company] = await Promise.all([getAccountInfo(), getEmployerCompany()]);
    if (!user) redirect("/login");

    return (
        <DashboardLayout
            role="EMPLOYER"
            userName={company?.name || session.user.name || "Nhà tuyển dụng"}
            userImage={company?.logo || session.user.image}
        >
            <AccountSettings user={user} />
        </DashboardLayout>
    );
}
