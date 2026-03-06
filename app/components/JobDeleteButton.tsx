"use client";
import { useTransition } from "react";
import { deleteJob } from "@/app/actions/jobs";

export default function JobDeleteButton({ jobId }: { jobId: string }) {
    const [isPending, startTransition] = useTransition();

    function handleDelete() {
        if (confirm("Bạn có chắc chắn muốn xoá tin tuyển dụng này? Hành động này không thể hoàn tác.")) {
            startTransition(async () => {
                await deleteJob(jobId);
            });
        }
    }

    return (
        <button
            onClick={handleDelete}
            disabled={isPending}
            style={{
                padding: "0.375rem 0.75rem",
                fontSize: "0.8125rem",
                fontWeight: 600,
                borderRadius: "8px",
                border: "1.5px solid #FECACA",
                background: "#FEF2F2",
                color: "#DC2626",
                cursor: "pointer",
                opacity: isPending ? 0.6 : 1,
                fontFamily: "inherit",
            }}
        >
            {isPending ? "Đang xóa..." : "Xóa"}
        </button>
    );
}
