"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import DashboardLayout from "@/app/components/DashboardLayout";

interface SearchKeyword {
    id: string;
    baseKeyword: string;
    keywordSuggestion: string;
    keywordType: string;
    isActive: boolean;
    createdAt: Date;
}

export default function KeywordsPage() {
    const { data: session, status } = useSession();
    const [baseKeyword, setBaseKeyword] = useState("");
    const [keywords, setKeywords] = useState<SearchKeyword[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (status === "unauthenticated") redirect("/login");
        if (session?.user?.role !== "ADMIN" && status === "authenticated") redirect("/");
    }, [session, status]);

    const loadKeywords = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/admin/keywords");
            const data = await response.json();
            setKeywords(data.keywords || []);
        } catch {
            setMessage("Lỗi khi tải danh sách từ khoá");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => { loadKeywords(); }, []);

    const generateKeywords = async () => {
        if (!baseKeyword.trim()) { setMessage("Vui lòng nhập từ khoá cơ sở"); return; }
        setIsGenerating(true);
        setMessage("Đang tạo từ khoá bằng AI...");
        try {
            const response = await fetch("/api/admin/keywords/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ baseKeyword: baseKeyword.trim() }),
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(`Đã tạo ${data.createdCount} từ khoá!`);
                loadKeywords();
                setBaseKeyword("");
            } else {
                setMessage(data.error || "Lỗi khi tạo từ khoá");
            }
        } catch {
            setMessage("Lỗi khi tạo từ khoá");
        } finally {
            setIsGenerating(false);
        }
    };

    const deleteKeyword = async (id: string) => {
        try {
            const response = await fetch(`/api/admin/keywords/${id}`, { method: "DELETE" });
            if (response.ok) {
                setKeywords(keywords.filter((k) => k.id !== id));
                setMessage("Đã xoá từ khoá");
            }
        } catch {
            console.error("Failed to delete keyword");
        }
    };

    const toggleKeyword = async (id: string, currentStatus: boolean) => {
        try {
            const response = await fetch(`/api/admin/keywords/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isActive: !currentStatus }),
            });
            if (response.ok) {
                setKeywords(keywords.map((k) => k.id === id ? { ...k, isActive: !currentStatus } : k));
            }
        } catch {
            console.error("Failed to toggle keyword");
        }
    };

    const seedCommonKeywords = async () => {
        setIsGenerating(true);
        setMessage("Đang thêm từ khoá phổ biến...");
        try {
            const response = await fetch("/api/admin/keywords/seed", { method: "POST" });
            const data = await response.json();
            if (response.ok) {
                setMessage(`Đã thêm ${data.createdCount} từ khoá phổ biến!`);
                loadKeywords();
            } else {
                setMessage(data.error || "Lỗi khi thêm từ khoá");
            }
        } catch {
            setMessage("Lỗi khi thêm từ khoá");
        } finally {
            setIsGenerating(false);
        }
    };

    if (status === "loading") return null;

    return (
        <DashboardLayout role="ADMIN" userName={session?.user?.name || "Admin"}>
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title">Quản lý từ khoá tìm kiếm</h1>
                    <p className="dash-page-subtitle">Tạo và quản lý từ khoá AI cho gợi ý tìm kiếm</p>
                </div>
            </div>

            {message && (
                <div className={`dash-alert ${message.includes("Lỗi") ? "dash-alert-error" : "dash-alert-success"}`}>
                    {message}
                </div>
            )}

            {/* Generate form */}
            <div className="dash-form-card">
                <h3>Tạo từ khoá mới bằng AI</h3>
                <p>Nhập từ khoá cơ sở (ví dụ: marketing, developer, design...), AI sẽ tự động tạo các từ khoá gợi ý.</p>
                <div className="dash-form-row">
                    <input
                        type="text"
                        className="dash-input"
                        placeholder="Nhập từ khoá cơ sở..."
                        value={baseKeyword}
                        onChange={(e) => setBaseKeyword(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && generateKeywords()}
                    />
                    <button className="dash-btn dash-btn-primary" onClick={generateKeywords} disabled={isGenerating || !baseKeyword.trim()} style={{ flexShrink: 0 }}>
                        {isGenerating ? "Đang tạo..." : "Tạo bằng AI"}
                    </button>
                </div>
                <button className="dash-btn dash-btn-ghost" onClick={seedCommonKeywords} disabled={isGenerating}>
                    + Thêm từ khoá phổ biến có sẵn
                </button>
            </div>

            {/* Keywords table */}
            <div className="dash-section-header">
                <h2 className="dash-section-title">Danh sách từ khoá ({keywords.length})</h2>
                <button className="dash-btn dash-btn-ghost" onClick={loadKeywords} disabled={isLoading}>
                    {isLoading ? "Đang tải..." : "Tải lại"}
                </button>
            </div>
            <div className="dash-table-wrap">
                <table className="dash-table">
                    <thead>
                        <tr>
                            <th>Từ khoá cơ sở</th>
                            <th>Từ khoá gợi ý</th>
                            <th className="hide-mobile">Loại</th>
                            <th className="hide-mobile" style={{ textAlign: "center" }}>Trạng thái</th>
                            <th style={{ textAlign: "right" }}>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {keywords.length === 0 ? (
                            <tr><td colSpan={5} className="dash-empty">Chưa có từ khoá nào. Hãy tạo mới!</td></tr>
                        ) : (
                            keywords.map((keyword) => (
                                <tr key={keyword.id}>
                                    <td className="bold">{keyword.baseKeyword}</td>
                                    <td>{keyword.keywordSuggestion}</td>
                                    <td className="hide-mobile">
                                        <span className="dash-badge" style={{
                                            background: keyword.keywordType === "keyword_suggestion" ? "rgba(3,105,161,0.1)" : "rgba(124,58,237,0.1)",
                                            color: keyword.keywordType === "keyword_suggestion" ? "#0369A1" : "#7C3AED",
                                        }}>
                                            {keyword.keywordType === "keyword_suggestion" ? "Gợi ý" : "Liên quan"}
                                        </span>
                                    </td>
                                    <td className="hide-mobile" style={{ textAlign: "center" }}>
                                        <button
                                            className={`dash-btn ${keyword.isActive ? "dash-btn-success" : "dash-btn-danger"}`}
                                            onClick={() => toggleKeyword(keyword.id, keyword.isActive)}
                                            style={{ fontSize: "0.75rem", padding: "0.25rem 0.625rem" }}
                                        >
                                            {keyword.isActive ? "Hoạt động" : "Bị tắt"}
                                        </button>
                                    </td>
                                    <td style={{ textAlign: "right" }}>
                                        <button className="dash-btn dash-btn-danger" onClick={() => deleteKeyword(keyword.id)} style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem" }}>
                                            Xoá
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </DashboardLayout>
    );
}
