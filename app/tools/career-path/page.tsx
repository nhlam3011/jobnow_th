"use client";

import React from "react";
import CareerTree from "@/app/components/CareerTree";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function CareerPathPage() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />
            
            <main style={{ flex: 1, padding: "2rem 0" }}>
                <div className="container-xl">
                    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                        <div style={{ 
                            background: "var(--bg-card)", 
                            borderRadius: "24px", 
                            border: "1.5px solid var(--border)", 
                            overflow: "hidden",
                            boxShadow: "var(--shadow-lg)",
                        }}>
                            <CareerTree />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
