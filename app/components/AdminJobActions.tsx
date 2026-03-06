"use client";
import { useState, useTransition } from "react";
import { updateJobStatus } from "@/app/actions/jobs";

export default function AdminJobActions({
    jobId,
    currentStatus,
}: {
    jobId: string;
    currentStatus: string;
}) {
    const [status, setStatus] = useState(currentStatus);
    const [isPending, startTransition] = useTransition();

    function handle(newStatus: string) {
        setStatus(newStatus);
        startTransition(async () => {
            await updateJobStatus(jobId, newStatus);
        });
    }

    if (status === "ACTIVE") {
        return (
            <div style={{ textAlign: "center", display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <span className="dash-badge" style={{ background: "rgba(34,197,94,0.1)", color: "#16A34A" }}>✓ Đã duyệt</span>
                <button className="dash-btn dash-btn-ghost" onClick={() => handle("CLOSED")} disabled={isPending} style={{ fontSize: "0.75rem", padding: "0.2rem 0.5rem" }}>
                    Đóng
                </button>
            </div>
        );
    }

    if (status === "REJECTED") {
        return <span className="dash-badge" style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444" }}>Đã từ chối</span>;
    }

    return (
        <div style={{ textAlign: "center", display: "flex ", gap: "0.5rem" }}>
            <button className="dash-btn dash-btn-success" onClick={() => handle("ACTIVE")} disabled={isPending} style={{ fontSize: "0.75rem", padding: "0.3rem 0.75rem" }}>
                Duyệt
            </button>
            <button className="dash-btn dash-btn-danger" onClick={() => handle("REJECTED")} disabled={isPending} style={{ fontSize: "0.75rem", padding: "0.3rem 0.75rem" }}>
                Từ chối
            </button>
        </div>
    );
}
