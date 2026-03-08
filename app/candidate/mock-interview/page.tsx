import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getRecommendedJobs } from "@/lib/ai";
import { getJobs } from "@/app/actions/jobs";
import DashboardLayout from "@/app/components/DashboardLayout";
import MockInterviewClient from "./MockInterviewClient";

export default async function MockInterviewPage() {
    const session = await auth();
    if (!session?.user || session.user.role !== "CANDIDATE") {
        redirect("/login");
    }

    // Lấy danh sách job gợi ý cho ứng viên
    let jobs: any[] = [];
    try {
        const recommended = await getRecommendedJobs(session.user.id, 12);
        if (Array.isArray(recommended) && recommended.length > 0) {
            jobs = (recommended as any[]).map((job: any) => ({
                id: job.id,
                title: job.title,
                slug: job.slug,
                location: job.location,
                jobType: job.jobType,
                skills: job.skills || [],
                companyName: job.companyName,
                companyLogo: job.companyLogo,
                similarity: job.similarity,
            }));
        }
    } catch (e) {
        console.error("Error getting recommended jobs:", e);
    }

    // Fallback: lấy job active nếu không có gợi ý
    if (jobs.length === 0) {
        try {
            const activeJobs = await getJobs({ status: "ACTIVE" });
            jobs = (activeJobs as any[]).slice(0, 12).map((job: any) => ({
                id: job.id,
                title: job.title,
                slug: job.slug,
                location: job.location,
                jobType: job.jobType,
                skills: job.skills || [],
                companyName: job.company?.name || "",
                companyLogo: job.company?.logo || null,
                similarity: null,
            }));
        } catch (e) {
            console.error("Error getting jobs:", e);
        }
    }

    return (
        <DashboardLayout
            role="CANDIDATE"
            userName={session.user.name || "Ứng viên"}
            userImage={session.user.image}
        >
            <MockInterviewClient jobs={jobs} />
        </DashboardLayout>
    );
}
