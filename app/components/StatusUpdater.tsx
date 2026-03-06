"use client";
import { useState, useTransition } from "react";
import { updateApplicationStatus } from "@/app/actions/applications";

const STATUSES = [
    { value: "PENDING", label: "Đang chờ", color: "#F59E0B" },
    { value: "REVIEWING", label: "Đang xem xét", color: "#0369A1" },
    { value: "INTERVIEW", label: "Mời phỏng vấn", color: "#A855F7" },
    { value: "ACCEPTED", label: "Chấp nhận", color: "#22C55E" },
    { value: "REJECTED", label: "Từ chối", color: "#EF4444" },
];

export default function StatusUpdater({
    applicationId,
    currentStatus,
}: {
    applicationId: string;
    currentStatus: string;
}) {
    const [status, setStatus] = useState(currentStatus);
    const [isPending, startTransition] = useTransition();
    const current = STATUSES.find((s) => s.value === status);

    function handleChange(newStatus: string) {
        setStatus(newStatus);
        startTransition(async () => {
            await updateApplicationStatus(applicationId, newStatus);
        });
    }

    return (
        <div style={{ minWidth: "160px" }}>
            <select
                value={status}
                onChange={(e) => handleChange(e.target.value)}
                disabled={isPending}
                style={{
                    padding: "0.5rem 0.875rem",
                    borderRadius: "8px",
                    border: `2px solid ${current?.color || "var(--border)"}`,
                    background: `${current?.color}18` || "var(--bg)",
                    color: current?.color || "var(--text)",
                    fontFamily: "inherit",
                    fontWeight: 600,
                    fontSize: "0.8125rem",
                    cursor: "pointer",
                    outline: "none",
                    opacity: isPending ? 0.6 : 1,
                    width: "100%",
                }}
            >
                {STATUSES.map((s) => (
                    <option key={s.value} value={s.value} style={{ color: "var(--text)", background: "var(--bg-card)" }}>
                        {s.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
