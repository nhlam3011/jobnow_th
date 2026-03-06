import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import AccountSettings from "@/app/components/AccountSettings";
import { getAccountInfo } from "@/app/actions/account";

export default async function EmployerSettings() {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") redirect("/login");

    const user = await getAccountInfo();
    if (!user) redirect("/login");

    return (
        <DashboardLayout role="EMPLOYER" userName={session.user.name || "Nhà tuyển dụng"}>
            <AccountSettings user={user} />
        </DashboardLayout>
    );
}
