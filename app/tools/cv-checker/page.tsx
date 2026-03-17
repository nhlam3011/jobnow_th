"use client";

import { useState, useRef } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { DocumentTextIcon, ArrowUpTrayIcon, CheckCircleIcon, ExclamationCircleIcon, XCircleIcon, ArrowPathIcon, EyeIcon } from "@heroicons/react/24/outline";

interface ChecklistItem { id: string; title: string; description: string; status: "pass" | "warning" | "fail" | "pending"; suggestion?: string; }
interface CvAnalysis { score: number; checklist: ChecklistItem[]; summary: string; }

const DEFAULT_CHECKLIST: ChecklistItem[] = [
    { id: "contact", title: "Thông tin liên hệ", description: "Đảm bảo có đầy đủ số điện thoại, email, địa chỉ", status: "pending", suggestion: "Thêm số điện thoại và email" },
    { id: "summary", title: "Mục tiêu nghề nghiệp", description: "Có phần tóm tắt mục tiêu nghề nghiệp ngắn gọn", status: "pending", suggestion: "Viết 2-3 câu về mục tiêu nghề nghiệp" },
    { id: "experience", title: "Kinh nghiệm làm việc", description: "Liệt kê kinh nghiệm với mô tả và thành tích", status: "pending", suggestion: "Sử dụng động từ mạnh và định lượng thành tích" },
    { id: "education", title: "Học vấn", description: "Thông tin về trường học, ngành học, bằng cấp", status: "pending", suggestion: "Liệt kê từ cao nhất xuống thấp" },
    { id: "skills", title: "Kỹ năng", description: "Kỹ năng cứng và kỹ năng mềm phù hợp", status: "pending", suggestion: "Bao gồm cả kỹ năng kỹ thuật và mềm" },
    { id: "length", title: "Độ dài CV", description: "CV nên có độ dài từ 1-2 trang", status: "pending", suggestion: "Giữ CV dưới 2 trang" },
    { id: "format", title: "Định dạng chuyên nghiệp", description: "Sử dụng font chữ dễ đọc, căn lề đều", status: "pending", suggestion: "Sử dụng font Arial, Times New Roman, size 11-12" },
    { id: "keywords", title: "Từ khóa", description: "Sử dụng từ khóa phù hợp với ngành nghề", status: "pending", suggestion: "Nghiên cứu từ khóa trong JD" },
    { id: "achievements", title: "Thành tích", description: "Đề cập các thành tích cụ thể", status: "pending", suggestion: "Sử dụng số liệu cụ thể" },
    { id: "grammar", title: "Ngữ pháp và chính tả", description: "Không có lỗi chính tả hoặc ngữ pháp", status: "pending", suggestion: "Kiểm tra kỹ trước khi nộp" }
];

function analyzeCv(content: string, checklist: ChecklistItem[]): CvAnalysis {
    const analyzed = checklist.map(item => {
        let status: ChecklistItem["status"] = "pending";
        switch (item.id) {
            case "contact": status = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(content) && /\d{9,11}/.test(content) ? "pass" : /\d{9,11}/.test(content) ? "warning" : "fail"; break;
            case "summary": status = /mục tiêu|năm kinh nghiệm|kỹ năng|summary|objective/i.test(content) ? "pass" : "warning"; break;
            case "experience": status = /kinh nghiệm|làm việc|work experience|employment|company/i.test(content) ? "pass" : "warning"; break;
            case "education": status = /học vấn|trường|university|college|degree|bằng/i.test(content) ? "pass" : "warning"; break;
            case "skills": status = /kỹ năng|skills|technical|programming|communication/i.test(content) ? "pass" : "warning"; break;
            case "length": const wordCount = content.split(/\s+/).length; status = wordCount >= 200 && wordCount <= 1500 ? "pass" : wordCount < 200 ? "warning" : "fail"; break;
            case "format": status = /•|-|\d+\.|\t/.test(content) ? "pass" : "warning"; break;
            case "keywords": status = /project|team|manage|develop|lead|create|analyze|implement/i.test(content) ? "pass" : "warning"; break;
            case "achievements": status = /\d+%|\d+[\s]*(người|project|khách|hóa đơn|doanh số)|tăng|giảm|tiết kiệm/i.test(content) ? "pass" : "warning"; break;
            case "grammar": status = /\b(\w+)\s+\1\b/i.test(content) ? "warning" : "pass"; break;
        }
        return { ...item, status };
    });
    const passCount = analyzed.filter(i => i.status === "pass").length;
    const warningCount = analyzed.filter(i => i.status === "warning").length;
    const score = Math.round((passCount * 100 + warningCount * 50) / analyzed.length);
    return { score, checklist: analyzed, summary: score >= 80 ? "CV của bạn rất tốt!" : score >= 60 ? "CV khá tốt nhưng có thể cải thiện." : "CV cần được cải thiện nhiều hơn." };
}

function getScoreColor(score: number): string { return score >= 80 ? "#22c55e" : score >= 60 ? "#f59e0b" : "#ef4444"; }
function getStatusIcon(status: ChecklistItem["status"]) {
    switch (status) {
        case "pass": return <CheckCircleIcon className="w-5 h-5" style={{ color: "#22c55e" }} />;
        case "warning": return <ExclamationCircleIcon className="w-5 h-5" style={{ color: "#f59e0b" }} />;
        case "fail": return <XCircleIcon className="w-5 h-5" style={{ color: "#ef4444" }} />;
        default: return <div className="w-5 h-5" style={{ width: 20, height: 20, borderRadius: "50%", border: "2px solid var(--border)" }} />;
    }
}

export default function CvCheckerPage() {
    const [cvText, setCvText] = useState<string>("");
    const [fileName, setFileName] = useState<string>("");
    const [analysis, setAnalysis] = useState<CvAnalysis | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setFileName(file.name);
        try { const text = await file.text(); setCvText(text); } catch { }
    };

    const handleAnalyze = () => {
        if (!cvText.trim()) return;
        setIsAnalyzing(true);
        setTimeout(() => { setAnalysis(analyzeCv(cvText, DEFAULT_CHECKLIST)); setIsAnalyzing(false); }, 1500);
    };

    const handleReset = () => { setCvText(""); setFileName(""); setAnalysis(null); if (fileInputRef.current) fileInputRef.current.value = ""; };
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setCvText(e.target.value); setFileName(""); };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <main style={{ flex: 1, padding: "2rem 0", background: "var(--bg)" }}>
                <div className="container-xl">
                    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "64px", height: "64px", borderRadius: "16px", background: "var(--primary)", marginBottom: "1rem" }}>
                                <DocumentTextIcon className="w-8 h-8" style={{ color: "white" }} />
                            </div>
                            <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>Kiểm tra CV</h1>
                            <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>Tải lên CV hoặc dán nội dung để phân tích và chấm điểm</p>
                        </div>

                        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.5rem", marginBottom: "1.5rem" }}>
                            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text)", marginBottom: "1rem" }}>Tải lên CV</h3>
                            <div style={{ border: "2px dashed var(--border)", borderRadius: "12px", padding: "2rem", textAlign: "center", cursor: "pointer" }} onClick={() => fileInputRef.current?.click()}>
                                <input ref={fileInputRef} type="file" accept=".txt,.pdf,.doc,.docx" onChange={handleFileUpload} style={{ display: "none" }} />
                                <ArrowUpTrayIcon className="w-10 h-10" style={{ color: "var(--primary)", margin: "0 auto 1rem" }} />
                                <p style={{ color: "var(--text)", fontWeight: 500, marginBottom: "0.25rem" }}>{fileName ? fileName : "Nhấp để tải file CV lên"}</p>
                                <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Hỗ trợ .txt, .pdf, .doc, .docx</p>
                            </div>
                            <div style={{ textAlign: "center", margin: "1rem 0", color: "var(--text-muted)", fontSize: "0.875rem" }}>- Hoặc -</div>
                            <div>
                                <label style={{ display: "block", fontWeight: 600, color: "var(--text)", marginBottom: "0.5rem" }}>Dán nội dung CV</label>
                                <textarea value={cvText} onChange={handleTextChange} placeholder="Dán nội dung CV vào đây..." style={{ width: "100%", height: "200px", padding: "1rem", fontSize: "0.9375rem", border: "1px solid var(--border)", borderRadius: "8px", background: "var(--bg)", color: "var(--text)", outline: "none", resize: "vertical", fontFamily: "inherit" }} />
                            </div>
                            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                                <button onClick={handleAnalyze} disabled={!cvText.trim() || isAnalyzing} className="btn-primary" style={{ flex: 1, padding: "0.875rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", opacity: !cvText.trim() || isAnalyzing ? 0.6 : 1, cursor: !cvText.trim() || isAnalyzing ? "not-allowed" : "pointer" }}>
                                    {isAnalyzing ? <><ArrowPathIcon className="w-5 h-5 animate-spin" />Đang phân tích...</> : <><EyeIcon className="w-5 h-5" />Phân tích CV</>}
                                </button>
                                <button onClick={handleReset} style={{ padding: "0.875rem 1.5rem", border: "1px solid var(--border)", borderRadius: "8px", background: "transparent", color: "var(--text-muted)", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}><ArrowPathIcon className="w-5 h-5" />Làm mới</button>
                            </div>
                        </div>

                        {analysis && (
                            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "1.5rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border)" }}>
                                    <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: `conic-gradient(${getScoreColor(analysis.score)} ${analysis.score * 3.6}deg, var(--border) 0deg)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                                        <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--bg-card)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                            <span style={{ fontSize: "1.5rem", fontWeight: 700, color: getScoreColor(analysis.score) }}>{analysis.score}</span>
                                            <span style={{ fontSize: "0.625rem", color: "var(--text-muted)" }}>/100</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>Điểm CV của bạn</h3>
                                        <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem" }}>{analysis.summary}</p>
                                    </div>
                                </div>
                                <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text)", marginBottom: "1rem" }}>Chi tiết kiểm tra</h4>
                                <div style={{ display: "grid", gap: "0.75rem" }}>
                                    {analysis.checklist.map((item) => (
                                        <div key={item.id} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1rem", background: item.status === "pass" ? "rgba(34, 197, 94, 0.1)" : item.status === "warning" ? "rgba(245, 158, 11, 0.1)" : item.status === "fail" ? "rgba(239, 68, 68, 0.1)" : "var(--bg)", borderRadius: "8px", border: `1px solid ${item.status === "pass" ? "rgba(34, 197, 94, 0.2)" : item.status === "warning" ? "rgba(245, 158, 11, 0.2)" : item.status === "fail" ? "rgba(239, 68, 68, 0.2)" : "var(--border)"}` }}>
                                            {getStatusIcon(item.status)}
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: "0.125rem" }}>{item.title}</div>
                                                <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: item.suggestion ? "0.25rem" : 0 }}>{item.description}</div>
                                                {item.suggestion && item.status !== "pass" && <div style={{ fontSize: "0.8125rem", color: "var(--primary)", fontWeight: 500 }}>{item.suggestion}</div>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
