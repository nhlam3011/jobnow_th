"use client";

import { useState, useEffect, useRef } from "react";

interface SearchableSelectProps {
    label?: string;
    icon?: React.ReactNode;
    value: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    error?: string;
    required?: boolean;
    style?: React.CSSProperties;
    className?: string;
}

export default function SearchableSelect({
    label,
    icon,
    value,
    options,
    onChange,
    placeholder = "Chọn một mục",
    searchPlaceholder = "Tìm kiếm...",
    error,
    required = false,
    style,
    className,
}: SearchableSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const ref = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
                setSearch("");
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const filtered = options.filter(
        (opt) => opt.label.toLowerCase().includes(search.toLowerCase())
    );

    const selectedLabel = options.find((o) => o.value === value)?.label || placeholder;

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", ...style }} className={className}>
            {label && (
                <label className="dash-form-label" style={{ marginBottom: 0, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    {icon}
                    {label}{required && <span style={{ color: "var(--error, #ef4444)", marginLeft: "2px" }}>*</span>}
                </label>
            )}
            <div ref={ref} style={{ position: "relative" }}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    style={{
                        width: "100%",
                        padding: "0.625rem 0.875rem",
                        border: "1px solid var(--border)",
                        borderRadius: "0.5rem",
                        backgroundColor: "var(--bg)",
                        color: value ? "var(--text)" : "var(--text-muted)",
                        fontSize: "0.9375rem",
                        cursor: "pointer",
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        minHeight: "42px",
                        outline: "none",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--primary)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{selectedLabel}</span>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s", color: "var(--text-muted)" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {isOpen && (
                    <div style={{
                        position: "absolute",
                        top: "calc(100% + 4px)",
                        left: 0,
                        right: 0,
                        background: "var(--bg-card, #fff)",
                        border: "1px solid var(--border)",
                        borderRadius: "0.625rem",
                        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
                        zIndex: 1000,
                        maxHeight: "300px",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                    }}>
                        <div style={{ padding: "0.625rem", borderBottom: "1px solid var(--border)", background: "var(--bg-card)" }}>
                            <input
                                ref={inputRef}
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder={searchPlaceholder}
                                style={{
                                    width: "100%",
                                    padding: "0.5rem 0.75rem",
                                    border: "1px solid var(--border)",
                                    borderRadius: "0.375rem",
                                    backgroundColor: "var(--bg)",
                                    color: "var(--text)",
                                    fontSize: "0.875rem",
                                    outline: "none",
                                }}
                            />
                        </div>
                        <div style={{ overflowY: "auto", maxHeight: "240px", padding: "0.25rem" }}>
                            {filtered.map((opt) => (
                                <div
                                    key={opt.value}
                                    onClick={() => { onChange(opt.value); setIsOpen(false); setSearch(""); }}
                                    style={{
                                        padding: "0.625rem 0.875rem",
                                        fontSize: "0.875rem",
                                        borderRadius: "0.375rem",
                                        cursor: "pointer",
                                        color: value === opt.value ? "var(--primary)" : "var(--text)",
                                        fontWeight: value === opt.value ? 600 : 400,
                                        background: value === opt.value ? "var(--primary-light)15" : "transparent",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        margin: "0.125rem",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.background = value === opt.value ? "var(--primary-light)25" : "var(--border-light)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = value === opt.value ? "var(--primary-light)15" : "transparent")}
                                >
                                    {opt.label}
                                    {value === opt.value && (
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    )}
                                </div>
                            ))}
                            {filtered.length === 0 && (
                                <div style={{ padding: "1.5rem 1rem", fontSize: "0.875rem", color: "var(--text-muted)", textAlign: "center" }}>
                                    Không tìm thấy kết quả
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            {error && <span style={{ color: "var(--error, #ef4444)", fontSize: "0.8125rem" }}>{error}</span>}
        </div>
    );
}
