import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";
import { getJobApplicants } from "@/app/actions/applications";
import { getJobById } from "@/app/actions/jobs";
import StatusUpdater from "@/app/components/StatusUpdater";
import {
    DocumentTextIcon,
    EnvelopeIcon,
    PhoneIcon,
    CalendarIcon,
    MapPinIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    UserIcon
} from "@heroicons/react/24/outline";
import EmployerApplicantsList from "@/app/components/EmployerApplicantsList";

interface ApplicantType {
    id: string;
    createdAt: Date;
    status: string;
    coverLetter: string | null;
    candidate: {
        id: string;
        name: string | null;
        email: string | null;
        image: string | null;
        candidateProfile: {
            phone?: string | null;
            location?: string | null;
            bio?: string | null;
            yearsExp?: number;
            desiredSalary?: number | null;
            desiredJobType?: string | null;
            skills?: string[];
            education?: unknown;
            experience?: unknown;
            resumeUrl?: string | null;
        } | null;
    } | null;
}

const STATUS_COLORS: Record<string, { bg: string; text: string; label: string }> = {
    PENDING: { bg: "#FEF3C7", text: "#D97706", label: "Chờ duyệt" },
    REVIEWING: { bg: "#DBEAFE", text: "#2563EB", label: "Đang xem" },
    INTERVIEW: { bg: "#D1FAE5", text: "#059669", label: "Phỏng vấn" },
    ACCEPTED: { bg: "#DCFCE7", text: "#16A34A", label: "Đạt" },
    REJECTED: { bg: "#FEE2E2", text: "#DC2626", label: "Từ chối" },
};

function formatDate(date: Date | string) {
    const d = new Date(date);
    return d.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

function formatRelativeTime(date: Date | string) {
    const now = new Date();
    const d = new Date(date);
    const diff = Math.floor((now.getTime() - d.getTime()) / 1000);

    if (diff < 60) return "Vừa xong";
    if (diff < 3600) return `${Math.floor(diff / 60)} phút trước`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} giờ trước`;
    if (diff < 604800) return `${Math.floor(diff / 86400)} ngày trước`;
    return d.toLocaleDateString("vi-VN");
}

export default async function ApplicantsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") redirect("/login");

    const [applicants, job] = await Promise.all([
        getJobApplicants(id) as unknown as Promise<ApplicantType[]>,
        getJobById(id)
    ]);

    if (!job) redirect("/employer/jobs");

    return (
        <DashboardLayout role="EMPLOYER" userName={session.user.name || ""}>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Ứng viên: {job.title}</h1>
                    <p className="dash-page-subtitle">{applicants.length} ứng viên đã nộp đơn</p>
                </div>
            </div>

            {applicants.length === 0 ? (
                <div className="dash-list-card">
                    <div className="dash-empty">
                        <svg width="48" height="48" fill="none" stroke="var(--border)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: "0 auto 1rem" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        </svg>
                        <p style={{ fontWeight: 600 }}>Chưa có ứng viên nào</p>
                    </div>
                </div>
            ) : (
                <EmployerApplicantsList applicants={applicants} />
            )}
        </DashboardLayout>
    );
}
