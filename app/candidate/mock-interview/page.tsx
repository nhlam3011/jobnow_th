import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getRecommendedJobs } from "@/lib/ai";
import { getJobs, getSavedJobs } from "@/app/actions/jobs";
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

    // Lấy danh sách job đã lưu
    let savedJobs: any[] = [];
    try {
        const saved = await getSavedJobs();
        if (Array.isArray(saved) && saved.length > 0) {
            savedJobs = saved.map((item: any) => ({
                id: item.job.id,
                title: item.job.title,
                slug: item.job.slug,
                location: item.job.location,
                jobType: item.job.jobType,
                skills: item.job.skills || [],
                companyName: item.job.company.name,
                companyLogo: item.job.company.logo,
                similarity: null,
                isSaved: true,
            }));
        }
    } catch (e) {
        console.error("Error getting saved jobs:", e);
    }

    // Kết hợp jobs: ưu tiên recommended trước, sau đó thêm saved jobs
    const jobIds = new Set(jobs.map(j => j.id));
    const uniqueSavedJobs = savedJobs.filter(j => !jobIds.has(j.id));
    jobs = [...jobs, ...uniqueSavedJobs];

    // Fallback: lấy job active nếu không có gợi ý
    if (jobs.length === 0) {
        try {
            const activeJobs = await getJobs({ status: "ACTIVE", limit: 12 });
            jobs = (activeJobs.jobs || []).slice(0, 12).map((job: any) => ({
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
