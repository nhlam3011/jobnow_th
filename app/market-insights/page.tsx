import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MarketInsightsClient from "./MarketInsightsClient";

export default function MarketInsightsPage() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <main style={{ flex: 1, background: "var(--bg)", padding: "2rem 0" }}>
                <div className="container-xl">
                    <div style={{ marginBottom: "2rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                            <svg width="28" height="28" fill="none" stroke="var(--primary)" strokeWidth="1.75" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text)" }}>
                                Xu hướng thị trường
                            </h1>
                        </div>
                        <p style={{ color: "var(--text-muted)", maxWidth: "600px" }}>
                            Phân tích dữ liệu từ hàng ngàn tin tuyển dụng để đưa ra bức tranh tổng quan về thị trường lao động
                        </p>
                    </div>
                    <MarketInsightsClient />
                </div>
            </main>
            <Footer />
        </div>
    );
}
