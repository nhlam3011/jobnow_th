"use client";
import { useTransition } from "react";
import { verifyCompany } from "@/app/actions/admin";

export default function CompanyVerifyButton({ id, verified }: { id: string; verified: boolean }) {
    const [isPending, startTransition] = useTransition();

    function toggle() {
        startTransition(async () => {
            await verifyCompany(id, !verified);
        });
    }

    return (
        <button
            onClick={toggle}
            disabled={isPending}
            className={verified ? "btn-outline" : "btn-primary"}
            style={{ padding: "0.375rem 0.75rem", fontSize: "0.8125rem", opacity: isPending ? 0.6 : 1 }}
        >
            {isPending ? "Đang xử lý..." : verified ? "Hủy xác thực" : "Xác thực"}
        </button>
    );
}
