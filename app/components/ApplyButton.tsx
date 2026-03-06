"use client";
import { useTransition, useState } from "react";
import { applyToJob } from "@/app/actions/applications";
import Link from "next/link";

export default function ApplyButton({
    jobId,
    isLoggedIn,
    role,
}: {
    jobId: string;
    isLoggedIn: boolean;
    role?: string;
}) {
    const [isPending, startTransition] = useTransition();
    const [result, setResult] = useState<{ success?: boolean; error?: string } | null>(null);

    if (!isLoggedIn) {
        return (
            <Link href="/login" className="btn-primary" style={{ width: "100%", justifyContent: "center", textAlign: "center" }}>
                Đăng nhập để ứng tuyển
            </Link>
        );
    }

    if (role !== "CANDIDATE") {
        return (
            <div style={{ padding: "0.875rem 1rem", background: "var(--tag-bg)", borderRadius: "8px", color: "var(--text-muted)", fontSize: "0.875rem", textAlign: "center" }}>
                Chỉ ứng viên mới có thể ứng tuyển
            </div>
        );
    }

    if (result?.success) {
        return (
            <div style={{ padding: "0.875rem 1rem", background: "#F0FDF4", border: "1.5px solid #BBF7D0", borderRadius: "8px", color: "#16A34A", fontWeight: 600, textAlign: "center" }}>
                ✓ Đã ứng tuyển thành công!
            </div>
        );
    }

    return (
        <div>
            {result?.error && (
                <div style={{ padding: "0.75rem", background: "#FEF2F2", border: "1.5px solid #FECACA", borderRadius: "8px", color: "#DC2626", fontSize: "0.875rem", marginBottom: "0.75rem", textAlign: "center" }}>
                    {result.error}
                </div>
            )}
            <button
                id="apply-btn"
                onClick={() => startTransition(async () => setResult(await applyToJob(jobId)))}
                disabled={isPending}
                className="btn-cta"
                style={{ width: "100%", justifyContent: "center", opacity: isPending ? 0.7 : 1 }}
            >
                {isPending ? "Đang gửi..." : "Ứng tuyển ngay"}
            </button>
        </div>
    );
}
