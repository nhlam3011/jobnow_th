import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import AccountSettings from "@/app/components/AccountSettings";
import { getAccountInfo } from "@/app/actions/account";

export default async function CandidateSettings() {
    const session = await auth();
    if (!session?.user || session.user.role !== "CANDIDATE") redirect("/login");

    const user = await getAccountInfo();
    if (!user) redirect("/login");

    return (
        <DashboardLayout role="CANDIDATE" userName={session.user.name || "Ứng viên"}>
            <AccountSettings user={user} />
        </DashboardLayout>
    );
}
