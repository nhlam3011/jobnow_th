import { auth } from "@/auth";
import { redirect } from "next/navigation";
import NotificationsPage from "@/app/components/NotificationsPage";

export default async function EmployerNotifications() {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") redirect("/login");

    return <NotificationsPage role="EMPLOYER" userName={session.user.name || "Nhà tuyển dụng"} />;
}
