import { auth } from "@/auth";
import { redirect } from "next/navigation";
import NotificationsPage from "@/app/components/NotificationsPage";

export default async function CandidateNotifications() {
    const session = await auth();
    if (!session?.user || session.user.role !== "CANDIDATE") redirect("/login");

    return <NotificationsPage role="CANDIDATE" userName={session.user.name || "Ứng viên"} />;
}
