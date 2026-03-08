import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { getSavedJobs } from "@/app/actions/jobs";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SavedJobsClient from "./SavedJobsClient";

export default async function SavedJobsPage() {
    const session = await auth();
    if (!session?.user) {
        redirect("/login");
    }

    const savedJobs = await getSavedJobs();

    const jobTypeLabels: Record<string, string> = {
        FULL_TIME: "Toàn thời gian",
        PART_TIME: "Bán thời gian",
        REMOTE: "Remote",
        INTERNSHIP: "Thực tập",
        CONTRACT: "Hợp đồng"
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />

            <main style={{ flex: 1, background: "var(--bg)", padding: "2rem 0" }}>
                <div className="container-xl">
                    <div style={{ marginBottom: "2rem" }}>
                        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>
                            Việc làm đã lưu
                        </h1>
                        <p style={{ color: "var(--text-muted)" }}>
                            Quản lý danh sách việc làm bạn đã lưu để theo dõi
                        </p>
                    </div>

                    <SavedJobsClient savedJobs={savedJobs} />
                </div>
            </main>

            <Footer />
        </div>
    );
}
