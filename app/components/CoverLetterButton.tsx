"use client";
import { useState } from "react";

interface CoverLetterButtonProps {
    jobId: string;
}

export default function CoverLetterButton({ jobId }: CoverLetterButtonProps) {
    const [coverLetter, setCoverLetter] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const generateCoverLetter = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await fetch("/api/ai/cover-letter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ jobId }),
            });
            
            const data = await response.json();
            
            if (data.success) {
                setCoverLetter(data.coverLetter);
            } else {
                setError(data.error || "Không thể tạo thư xin việc");
            }
        } catch (err) {
            setError("Đã xảy ra lỗi. Vui lòng thử lại.");
        } finally {
            setIsLoading(false);
        }
    };

    const copyToClipboard = () => {
        if (coverLetter) {
            navigator.clipboard.writeText(coverLetter);
            alert("Đã copy vào clipboard!");
        }
    };

    if (coverLetter) {
        return (
            <div style={{ marginTop: "1rem" }}>
                <div style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    marginBottom: "0.5rem" 
                }}>
                    <h4 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text)" }}>
                        Thư xin việc (AI)
                    </h4>
                    <button
                        onClick={() => setCoverLetter(null)}
                        style={{
                            background: "none",
                            border: "none",
                            color: "var(--text-muted)",
                            cursor: "pointer",
                            fontSize: "1.25rem",
                        }}
                    >
                        ×
                    </button>
                </div>
                <div style={{
                    padding: "1rem",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: "var(--text)",
                    maxHeight: "400px",
                    overflowY: "auto",
                    whiteSpace: "pre-wrap",
                }}>
                    {coverLetter}
                </div>
                <button
                    onClick={copyToClipboard}
                    className="btn-secondary"
                    style={{ marginTop: "0.75rem", width: "100%" }}
                >
                    Copy thư xin việc
                </button>
            </div>
        );
    }

    return (
        <div style={{ marginTop: "1rem" }}>
            {error && (
                <div style={{ 
                    padding: "0.75rem", 
                    background: "#FEF2F2", 
                    border: "1.5px solid #FECACA", 
                    borderRadius: "8px", 
                    color: "#DC2626", 
                    fontSize: "0.8125rem", 
                    marginBottom: "0.75rem" 
                }}>
                    {error}
                </div>
            )}
            <button
                onClick={generateCoverLetter}
                disabled={isLoading}
                className="btn-secondary"
                style={{ 
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                }}
            >
                {isLoading ? (
                    <>
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ animation: "spin 1s linear infinite" }}>
                            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                        </svg>
                        Đang tạo...
                    </>
                ) : (
                    <>
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                        Tạo thư xin việc bằng AI
                    </>
                )}
            </button>
            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
