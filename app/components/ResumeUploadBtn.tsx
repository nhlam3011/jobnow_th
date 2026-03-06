"use client";
import { useState, useTransition } from "react";

export default function ResumeUploadBtn() {
    const [isPending, startTransition] = useTransition();
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState("");

    async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validate file type
        if (!file.type.includes("pdf")) {
            setError("Chỉ chấp nhận file PDF");
            return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            setError("File quá lớn (tối đa 5MB)");
            return;
        }

        setUploading(true);
        setError("");

        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", file.name);

        startTransition(async () => {
            try {
                const res = await fetch("/api/resume/upload", {
                    method: "POST",
                    body: formData,
                });

                if (res.ok) {
                    // Refresh the page to show the new resume
                    window.location.reload();
                } else {
                    const data = await res.json();
                    setError(data.error || "Upload thất bại");
                }
            } catch (err) {
                setError("Có lỗi xảy ra");
            } finally {
                setUploading(false);
            }
        });
    }

    return (
        <div>
            <input
                type="file"
                id="resume-upload"
                accept=".pdf"
                onChange={handleUpload}
                disabled={isPending || uploading}
                style={{ display: "none" }}
            />
            <label
                htmlFor="resume-upload"
                className="btn-primary"
                style={{
                    cursor: isPending || uploading ? "not-allowed" : "pointer",
                    opacity: isPending || uploading ? 0.7 : 1,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                }}
            >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                {uploading ? "Đang tải lên..." : "Tải CV lên"}
            </label>
            {error && (
                <p style={{ color: "#DC2626", fontSize: "0.875rem", marginTop: "0.5rem" }}>{error}</p>
            )}
        </div>
    );
}
