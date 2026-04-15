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
        <DashboardLayout
            role="CANDIDATE"
            userName={session.user.name || "Ứng viên"}
            userImage={session.user.image}
        >
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Hồ sơ của tôi</h1>
                    <p className="dash-page-subtitle">
                        Hồ sơ đầy đủ giúp AI gợi ý việc làm chính xác hơn.
                    </p>
                </div>
            </div>
            <div className="dash-content">
                <ProfileForm profile={profile} userName={session.user.name || ""} />
            </div>
        </DashboardLayout>
    );
}
