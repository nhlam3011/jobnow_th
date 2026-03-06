"use client";

import { useState } from "react";
import { saveJob, unsaveJob, isJobSaved } from "@/app/actions/jobs";
import { useRouter } from "next/navigation";

interface SaveJobButtonProps {
    jobId: string;
    initialSaved?: boolean;
}

export default function SaveJobButton({ jobId, initialSaved = false }: SaveJobButtonProps) {
    const [saved, setSaved] = useState(initialSaved);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleToggle = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setLoading(true);
        try {
            if (saved) {
                await unsaveJob(jobId);
                setSaved(false);
            } else {
                const result = await saveJob(jobId);
                if (result.success) {
                    setSaved(true);
                } else if (result.error?.includes("đăng nhập")) {
                    router.push("/login");
                    return;
                }
            }
        } catch (error) {
            console.error("Error toggling save:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleToggle}
            disabled={loading}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: saved ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                background: saved ? "var(--primary)" : "transparent",
                color: saved ? "#fff" : "var(--text-muted)",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.2s ease",
                opacity: loading ? 0.7 : 1,
            }}
            title={saved ? "Bỏ lưu việc làm" : "Lưu việc làm"}
        >
            <svg
                width="18"
                height="18"
                fill={saved ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        </button>
    );
}
