"use client";

import React from "react";

interface ConfirmModalProps {
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
    confirmText?: string;
    cancelText?: string;
    isDanger?: boolean;
}

export default function ConfirmModal({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel,
    confirmText = "Xác nhận",
    cancelText = "Hủy",
    isDanger = true,
}: ConfirmModalProps) {
    if (!isOpen) return null;

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "1rem",
            animation: "fadeIn 0.2s ease-out"
        }}>
            <div style={{
                background: "var(--card-bg, #ffffff)",
                borderRadius: "20px",
                padding: "2rem",
                maxWidth: "420px",
                width: "100%",
                boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
                textAlign: "center" as const,
                border: "1px solid var(--border, rgba(0,0,0,0.05))",
                animation: "modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            }}>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    @keyframes modalSlideIn {
                        from { opacity: 0; transform: translateY(20px) scale(0.95); }
                        to { opacity: 1; transform: translateY(0) scale(1); }
                    }
                `}} />

                <div style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: isDanger ? "rgba(239, 68, 68, 0.1)" : "rgba(59, 130, 246, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    color: isDanger ? "#ef4444" : "#3b82f6"
                }}>
                    {isDanger ? (
                        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    ) : (
                        <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    )}
                </div>

                <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                    color: "var(--text, #111827)"
                }}>{title}</h3>

                <p style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-muted, #6b7280)",
                    lineHeight: 1.6,
                    marginBottom: "2rem"
                }}>{message}</p>

                <div style={{ display: "flex", gap: "1rem" }}>
                    <button
                        onClick={onCancel}
                        style={{
                            flex: 1,
                            padding: "0.75rem",
                            borderRadius: "12px",
                            border: "1px solid var(--border, #e5e7eb)",
                            background: "transparent",
                            color: "var(--text, #374151)",
                            fontSize: "0.9375rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all 0.2s"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = "#f9fafb"}
                        onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        style={{
                            flex: 1,
                            padding: "0.75rem",
                            borderRadius: "12px",
                            border: "none",
                            background: isDanger ? "#ef4444" : "var(--primary, #3b82f6)",
                            color: "#ffffff",
                            fontSize: "0.9375rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            boxShadow: isDanger ? "0 4px 12px rgba(239, 68, 68, 0.2)" : "0 4px 12px rgba(59, 130, 246, 0.2)",
                            transition: "all 0.2s"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-1px)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
}
