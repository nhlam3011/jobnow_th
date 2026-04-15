import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import MarketInsightsClient from "./MarketInsightsClient";

export default function MarketInsightsPage() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <main style={{ flex: 1, background: "var(--bg)", padding: "0rem 0" }}>
                <div className="container-xl">
                    <MarketInsightsClient />
                </div>
            </main>
            <Footer />
        </div>
    );
}
