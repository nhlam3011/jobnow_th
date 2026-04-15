"use client";

import React, { useEffect } from "react";

interface PDFViewerProps {
    isOpen: boolean;
    onClose: () => void;
    fileUrl: string;
    fileName?: string;
}

export default function PDFViewer({
    isOpen,
    onClose,
    fileUrl,
    fileName = "Xem CV",
}: PDFViewerProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                padding: "1rem",
                animation: "pdfFadeIn 0.2s ease-out",
                cursor: "pointer"
            }}
        >
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes pdfFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes pdfModalSlideIn {
                    from { opacity: 0; transform: translateY(20px) scale(0.98); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}} />

            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: "var(--card-bg, #ffffff)",
                    borderRadius: "16px",
                    width: "100%",
                    maxWidth: "1000px",
                    height: "90vh",
                    maxHeight: "900px",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    border: "1px solid var(--border, rgba(0,0,0,0.1))",
                    overflow: "hidden",
                    animation: "pdfModalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "default"
                }}
            >
                {/* Header */}
                <div style={{
                    padding: "1rem 1.5rem",
                    borderBottom: "1px solid var(--border, #e5e7eb)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "var(--bg-card, #ffffff)"
                }}>
                    <h3 style={{
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        color: "var(--text, #111827)",
                        margin: 0,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "70%"
                    }}>
                        {fileName}
                    </h3>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                        <a
                            href={fileUrl}
                            download={fileName}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.5rem 1rem",
                                borderRadius: "8px",
                                background: "var(--primary, #3b82f6)",
                                color: "#ffffff",
                                fontSize: "0.875rem",
                                fontWeight: 600,
                                textDecoration: "none",
                                transition: "all 0.2s"
                            }}
                        >
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Tải xuống
                        </a>
                        <button
                            onClick={onClose}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "0.5rem",
                                borderRadius: "8px",
                                border: "1px solid var(--border, #e5e7eb)",
                                background: "transparent",
                                color: "var(--text-muted, #6b7280)",
                                cursor: "pointer",
                                transition: "all 0.2s"
                            }}
                        >
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div style={{ flex: 1, background: "#525659", position: "relative" }}>
                    <iframe
                        src={`${fileUrl}#toolbar=0`}
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "none"
                        }}
                        title={fileName}
                    />
                </div>
            </div>
        </div>
    );
}
