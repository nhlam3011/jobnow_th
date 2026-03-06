import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import ProfileForm from "@/app/components/ProfileForm";
import { getCandidateProfile } from "@/app/actions/profile";

export default async function CandidateProfilePage() {
    const session = await auth();
    if (!session?.user || session.user.role !== "CANDIDATE") redirect("/login");

    const profile = await getCandidateProfile();

    return (
        <DashboardLayout role="CANDIDATE" userName={session.user.name || "Ứng viên"}>
            <div style={{ padding: "2rem" }}>
                <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.375rem" }}>Hồ sơ của tôi</h1>
                <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
                    Hồ sơ đầy đủ giúp AI gợi ý việc làm chính xác hơn.
                </p>
                <div style={{ maxWidth: "760px" }}>
                    <ProfileForm profile={profile} userName={session.user.name || ""} />
                </div>
            </div>
        </DashboardLayout>
    );
}
