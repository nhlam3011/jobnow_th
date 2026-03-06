import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CVBuilder from "@/app/components/CVBuilder";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function CVBuilderPage() {
    const session = await auth();
    if (!session?.user) {
        redirect("/login");
    }

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />

            <main style={{ flex: 1, padding: "2rem 0" }}>
                <div className="container-xl">
                    <div style={{ marginBottom: "2rem", textAlign: "center" }}>
                        <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>
                            Tạo CV của bạn
                        </h1>
                        <p style={{ color: "var(--text-muted)" }}>
                            Điền thông tin theo từng bước để tạo CV chuyên nghiệp
                        </p>
                    </div>

                    <CVBuilder />
                </div>
            </main>

            <Footer />
        </div>
    );
}
