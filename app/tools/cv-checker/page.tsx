"use client";

import { useState, useRef } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {
    DocumentTextIcon,
    ArrowUpTrayIcon,
    CheckCircleIcon,
    ExclamationCircleIcon,
    XCircleIcon,
    ArrowPathIcon,
    SparklesIcon,
    ShieldCheckIcon,
    LightBulbIcon,
    ChartPieIcon
} from "@heroicons/react/24/outline";

interface ChecklistItem {
    id: string;
    status: 'pass' | 'warning' | 'fail';
    title: string;
    description: string;
    suggestion?: string;
}

interface CvAnalysis {
    score: number;
    summary: string;
    checklist: ChecklistItem[];
    strengths: string[];
    weaknesses: string[];
}

export default function CvCheckerPage() {
    const [cvText, setCvText] = useState<string>("");
    const [fileName, setFileName] = useState<string>("");
    const [stagedFile, setStagedFile] = useState<{ data: string, mimeType: string } | null>(null);
    const [analysis, setAnalysis] = useState<CvAnalysis | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const performAnalysis = async (text: string | null, file: { data: string, mimeType: string } | null) => {
        if (!text?.trim() && !file) return;

        setIsAnalyzing(true);
        setAnalysis(null);
        try {
            const response = await fetch("/api/ai/cv-check", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    cvText: text,
                    fileData: file
                }),
            });

            if (!response.ok) throw new Error("Failed to analyze");
            const data = await response.json();
            setAnalysis(data);
        } catch (error) {
            console.error("Analysis error:", error);
            setAnalysis({
                score: 0,
                summary: "Đã có lỗi xảy ra trong quá trình phân tích CV của bạn bằng AI.",
                checklist: [],
                strengths: [],
                weaknesses: ["Lỗi máy chủ hoặc vượt quá giới hạn AI."]
            });
        } finally {
            setIsAnalyzing(false);
        }
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setFileName(file.name);

        if (file.type === "text/plain" || file.name.endsWith(".txt")) {
            try {
                const text = await file.text();
                setCvText(text);
                setStagedFile(null);
                performAnalysis(text, null);
            } catch {
                alert("Lỗi khi đọc file text.");
            }
        } else {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64 = (event.target?.result as string).split(',')[1];
                const fileData = {
                    data: base64,
                    mimeType: file.type || "application/pdf"
                };
                setStagedFile(fileData);
                setCvText("");
                performAnalysis(null, fileData);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAnalyze = () => performAnalysis(cvText, stagedFile);

    const handleReset = () => {
        setCvText("");
        setFileName("");
        setStagedFile(null);
        setAnalysis(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const StatusIcon = ({ status }: { status: 'pass' | 'warning' | 'fail' }) => {
        switch (status) {
            case 'pass': return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
            case 'warning': return <ExclamationCircleIcon className="w-5 h-5 text-amber-500" />;
            case 'fail': return <XCircleIcon className="w-5 h-5 text-red-500" />;
        }
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />

            <main style={{ flex: 1, padding: "4rem 1rem", position: "relative" }}>

                <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
                    <div className="checker-header">
                        <div className="checker-icon-box">
                            <DocumentTextIcon className="w-8 h-8 text-white" />
                        </div>
                        <h1>Kiểm tra CV bằng AI</h1>
                        <p>Sử dụng AI tiên tiến để phân tích, chấm điểm và đề xuất tối ưu hồ sơ của bạn cho nhà tuyển dụng.</p>
                    </div>

                    <div className="checker-layout">
                        {/* Input Section */}
                        <div className="input-section glass-card">
                            <div className="section-title-group">
                                <DocumentTextIcon className="w-6 h-6 text-primary" />
                                <h3>Nội dung CV</h3>
                            </div>

                            <div
                                className={`upload-zone ${fileName ? 'active' : ''}`}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <input ref={fileInputRef} type="file" accept=".txt,.pdf,.doc,.docx" style={{ display: "none" }} onChange={handleFileUpload} />
                                <ArrowUpTrayIcon className="w-10 h-10 icon-upload" />
                                <div className="upload-info">
                                    <strong className="file-name-display">{fileName || "Tải lên tài liệu của bạn"}</strong>
                                    <p>Kéo thả hoặc nhấp để chọn file (.pdf, .docx, .txt)</p>
                                </div>
                            </div>

                            <div className="divider"><span>HOẶC DÁN NỘI DUNG</span></div>

                            <div className="textarea-wrapper">
                                <textarea
                                    value={cvText}
                                    onChange={(e) => setCvText(e.target.value)}
                                    placeholder="Dán toàn bộ nội dung CV của bạn tại đây để AI bắt đầu phân tích..."
                                    className="cv-textarea scrollbar-hide"
                                />
                                <div className="text-count">{cvText.length} ký tự</div>
                            </div>

                            <div className="action-buttons">
                                <button
                                    className={`btn-analyze ${isAnalyzing ? 'loading' : ''}`}
                                    onClick={handleAnalyze}
                                    disabled={!cvText.trim() || isAnalyzing}
                                >
                                    {isAnalyzing ? (
                                        <><ArrowPathIcon className="w-5 h-5 animate-spin" /> Đang phân tích...</>
                                    ) : (
                                        <><SparklesIcon className="w-6 h-6 flex-shrink-0" /> <span>Bắt đầu kiểm tra</span></>
                                    )}
                                </button>
                                <button className="btn-secondary" onClick={handleReset}>
                                    <ArrowPathIcon className="w-5 h-5" /> Làm mới
                                </button>
                            </div>
                        </div>

                        {/* Result Section */}
                        <div className={`result-section ${analysis ? 'active' : ''}`}>
                            {isAnalyzing ? (
                                <div className="loading-canvas glass-card">
                                    <div className="scanning-line" />
                                    <div className="loading-content">
                                        <div className="spinner-large" />
                                        <h4>AI đang soi chiếu dữ liệu...</h4>
                                        <p>Chúng tôi đang so sánh kỹ năng, ngôn ngữ và cấu trúc CV của bạn.</p>
                                    </div>
                                </div>
                            ) : analysis && (
                                <div className="analysis-canvas">
                                    <div className="score-hero glass-card">
                                        <div className="score-circle">
                                            <svg viewBox="0 0 36 36" className="circular-chart">
                                                <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                                <path className="circle" style={{ strokeDasharray: `${analysis.score}, 100` }} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                            </svg>
                                            <div className="score-num">
                                                <span className="current-score">{analysis.score}</span>
                                                <span className="total-score">/100</span>
                                            </div>
                                        </div>
                                        <div className="score-text">
                                            <h3>{analysis.score >= 80 ? "CV Rất Ấn Tượng!" : analysis.score >= 50 ? "Khá Tốt, Cần Tối Ưu" : "Cần Cải Thiện Nhiều"}</h3>
                                            <p>{analysis.summary}</p>
                                        </div>
                                    </div>

                                    <div className="overview-pane">
                                        <div className="pane-title-blue"><ShieldCheckIcon className="w-5 h-5" /> Kết quả phân tích chi tiết</div>
                                        <div className="overview-grid">
                                            <div className="info-card glass-card success">
                                                <div className="card-header"><CheckCircleIcon className="w-5 h-5" /> Thế mạnh</div>
                                                <ul>{analysis.strengths.map((s, i) => <li key={i}>{s}</li>)}</ul>
                                            </div>
                                            <div className="info-card glass-card warning">
                                                <div className="card-header"><ExclamationCircleIcon className="w-5 h-5" /> Điểm yếu</div>
                                                <ul>{analysis.weaknesses.map((w, i) => <li key={i}>{w}</li>)}</ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="checklist-section glass-card">
                                        <div className="card-header"><ChartPieIcon className="w-5 h-5" /> Danh mục kiểm tra</div>
                                        <div className="checklist-grid">
                                            {analysis.checklist.map((item, idx) => (
                                                <div key={idx} className={`checklist-item status-${item.status}`}>
                                                    <div className="item-main">
                                                        <StatusIcon status={item.status} />
                                                        <div>
                                                            <strong>{item.title}</strong>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                    {item.status !== 'pass' && item.suggestion && (
                                                        <div className="suggestion-box">
                                                            <LightBulbIcon className="w-4 h-4" />
                                                            {item.suggestion}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {!analysis && !isAnalyzing && (
                                <div className="placeholder-canvas glass-card">
                                    <div className="empty-state-icon">
                                        <SparklesIcon className="w-12 h-12" />
                                    </div>
                                    <h3>Kết quả phân tích sẽ xuất hiện tại đây</h3>
                                    <p>Hãy tải lên file hoặc dán nội dung CV của bạn để AI có thể đánh giá kỹ năng của bạn.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <style jsx>{`
                .checker-header { text-align: center; margin-bottom: 3.5rem; max-width: 600px; margin-left: auto; margin-right: auto; }
                .checker-header h1 { font-size: 2.5rem; font-weight: 800; color: var(--text); margin: 1rem 0; letter-spacing: -0.03em; }
                .checker-header p { color: var(--text-muted); font-size: 1.1rem; line-height: 1.5; }

                .checker-header { text-align: center; margin-bottom: 3.5rem; }
                .checker-icon-box { 
                    width: 70px; height: 70px; border-radius: 20px; 
                    background: linear-gradient(135deg, var(--primary), var(--primary-dark)); 
                    display: flex; align-items: center; justify-content: center; 
                    margin: 0 auto 1.5rem; box-shadow: 0 10px 20px rgba(var(--primary-rgb), 0.3);
                }
                .checker-header h1 { font-size: 2.25rem; font-weight: 800; color: var(--text); margin: 0.5rem 0; letter-spacing: -0.027em; line-height: 1.2; }
                .checker-header p { color: var(--text-muted); font-size: 1.05rem; max-width: 580px; margin: 0 auto; line-height: 1.6; opacity: 0.85; }

                .checker-layout { display: grid; grid-template-columns: 340px 1fr; gap: 2.5rem; align-items: flex-start; max-width: 1200px; margin: 0 auto; }
                @media (max-width: 1024px) { .checker-layout { grid-template-columns: 1fr; } }

                .glass-card { 
                    background: var(--bg-card); 
                    border: 1.5px solid var(--border); 
                    border-radius: 28px; 
                    padding: 2rem; 
                    box-shadow: 0 12px 30px rgba(0,0,0,0.04); 
                }
                
                .section-title-group { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; }
                .section-title-group h3 { font-size: 1.25rem; font-weight: 700; margin: 0; }

                .upload-zone { border: 2px dashed var(--border); border-radius: 16px; padding: 2rem; text-align: center; cursor: pointer; transition: all 0.3s; display: flex; flex-direction: column; align-items: center; gap: 1rem; }
                .upload-zone:hover { border-color: var(--primary); background: rgba(var(--primary-rgb), 0.02); }
                .upload-zone.active { border-color: var(--primary); background: rgba(var(--primary-rgb), 0.05); }
                .icon-upload { color: var(--primary); transition: transform 0.3s; }
                .upload-zone:hover .icon-upload { transform: translateY(-5px); }
                .upload-zone p { font-size: 0.85rem; color: var(--text-muted); margin: 0; }
                .upload-info { width: 100%; display: flex; flex-direction: column; align-items: center; gap: 0.25rem; overflow: hidden; }
                .file-name-display { 
                    font-size: 1rem; color: var(--text); font-weight: 700; 
                    display: block; width: 100%; max-width: 280px; 
                    overflow: hidden; text-overflow: ellipsis; white-space: nowrap; 
                    text-align: center;
                }

                .divider { text-align: center; margin: 1.5rem 0; position: relative; }
                .divider:after { content: ''; position: absolute; top: 50%; left: 0; right: 0; height: 1.5px; background: var(--border); z-index: 1; }
                .divider span { background: var(--bg-card); padding: 0 1rem; font-size: 0.7rem; font-weight: 800; color: var(--text-muted); position: relative; z-index: 2; letter-spacing: 0.05em; }

                .textarea-wrapper { position: relative; }
                .cv-textarea { width: 100%; min-height: 280px; background: var(--bg); border: 1.5px solid var(--border); border-radius: 16px; padding: 1.25rem; font-family: inherit; font-size: 0.95rem; color: var(--text); resize: none; transition: border-color 0.3s; }
                .cv-textarea:focus { outline: none; border-color: var(--primary); }
                .text-count { position: absolute; bottom: 1rem; right: 1rem; font-size: 0.7rem; color: var(--text-muted); }

                .action-buttons { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
                .btn-analyze { 
                    background: var(--primary); color: white; border: none; 
                    height: 64px; border-radius: 14px; font-weight: 800; 
                    display: flex; align-items: center; justify-content: center; gap: 0.75rem; 
                    cursor: pointer; transition: all 0.3s; box-shadow: 0 8px 20px -5px rgba(var(--primary-rgb), 0.3);
                    font-size: 0.95rem; line-height: 1.25; padding: 0 1.25rem;
                    text-align: center;
                }
                .btn-analyze:hover { transform: translateY(-3px); box-shadow: 0 12px 25px -5px rgba(var(--primary-rgb), 0.4); }
                .btn-analyze:disabled { opacity: 0.6; cursor: not-allowed; transform: none; box-shadow: none; }
                .btn-secondary { 
                    background: var(--tag-bg); color: var(--text); border: none; 
                    height: 64px; border-radius: 14px; font-weight: 700; 
                    display: flex; align-items: center; justify-content: center; gap: 0.75rem; 
                    cursor: pointer; transition: background 0.2s; 
                    font-size: 0.95rem; line-height: 1.25; padding: 0 1.25rem;
                    text-align: center;
                }
                .btn-secondary:hover { background: var(--border); }

                .analysis-canvas { display: flex; flex-direction: column; gap: 1.5rem; }
                
                .score-hero { display: flex; align-items: center; gap: 2.5rem; background: rgba(var(--primary-rgb), 0.02); padding: 2.5rem; border-radius: 24px; }
                .score-circle { position: relative; width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .circular-chart { width: 100%; height: 100%; transform: rotate(-90deg); }
                .circle-bg { fill: none; stroke: var(--border); stroke-width: 1.5; opacity: 0.3; }
                .circle { fill: none; stroke: var(--primary); stroke-width: 2.2; stroke-linecap: round; transition: stroke-dasharray 1.2s cubic-bezier(0.4, 0, 0.2, 1); }
                .score-num { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; transform: translateY(4px); pointer-events: none; }
                .score-num .current-score { font-size: 3rem; font-weight: 900; color: var(--text); line-height: 0.8; }
                .score-num .total-score { font-size: 0.9rem; color: var(--text-muted); font-weight: 700; margin-top: 4px; opacity: 0.7; }
                .score-text h3 { font-size: 1.65rem; margin-bottom: 0.5rem; font-weight: 900; letter-spacing: -0.02em; color: var(--text); }
                .score-text p { color: var(--text-muted); font-size: 1rem; line-height: 1.5; opacity: 0.9; }

                .overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-top: 1rem; }
                .info-card { padding: 1.5rem; border-radius: 20px; transition: all 0.3s; border: 1px solid transparent !important; }
                .info-card.success { background: #f0fdf4; border-color: #dcfce7 !important; }
                .info-card.warning { background: #fffcf0; border-color: #fef3c7 !important; }
                :global([data-theme="dark"]) .info-card.success { background: rgba(34, 197, 94, 0.05); color: #4ade80; border-color: rgba(34, 197, 94, 0.1) !important; }
                :global([data-theme="dark"]) .info-card.warning { background: rgba(245, 158, 11, 0.05); color: #fbbf24; border-color: rgba(245, 158, 11, 0.1) !important; }
                
                .card-header { font-size: 0.9rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; display: flex; align-items: center; gap: 0.625rem; margin-bottom: 1.25rem; color: inherit; }
                .info-card ul { padding: 0; margin: 0; list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }
                .info-card li { font-size: 0.925rem; color: var(--text); display: flex; align-items: flex-start; gap: 0.5rem; line-height: 1.5; }
                .info-card li::before { content: '•'; opacity: 0.5; font-weight: 900; }

                .checklist-grid { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
                .checklist-item { border: 1.5px solid var(--border); padding: 1.25rem; border-radius: 16px; background: var(--bg); }
                .item-main { display: flex; gap: 1rem; align-items: flex-start; }
                .item-main strong { display: block; font-size: 0.95rem; margin-bottom: 0.25rem; }
                .item-main p { font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.4; }
                .suggestion-box { margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed var(--border); font-size: 0.85rem; color: var(--primary); font-weight: 600; display: flex; gap: 0.5rem; align-items: flex-start; }
                
                .status-pass { background: rgba(34, 197, 94, 0.03); border-color: rgba(34, 197, 94, 0.2); }
                .status-warning { background: rgba(245, 158, 11, 0.03); border-color: rgba(245, 158, 11, 0.2); }
                .status-fail { background: rgba(239, 68, 68, 0.03); border-color: rgba(239, 68, 68, 0.2); }

                .pane-title-blue { 
                    display: flex; align-items: center; gap: 0.75rem; 
                    padding: 1rem 1.5rem; background: linear-gradient(90deg, rgba(var(--primary-rgb), 0.1) 0%, transparent 100%); 
                    border-left: 4px solid var(--primary); border-radius: 4px; 
                    font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--primary);
                    margin-bottom: 1.5rem;
                }
                .overview-pane { margin-top: 1.5rem; }

                .placeholder-canvas { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 1rem; padding: 4rem; min-height: 400px; }
                .empty-state-icon { color: var(--border); margin-bottom: 1rem; }
                .placeholder-canvas h3 { font-size: 1.25rem; color: var(--text); }
                .placeholder-canvas p { color: var(--text-muted); max-width: 300px; font-size: 0.9rem; }

                .loading-canvas { position: relative; overflow: hidden; height: 100%; display: flex; align-items: center; justify-content: center; min-height: 500px; }
                .scanning-line { position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: linear-gradient(90deg, transparent, var(--primary), transparent); animation: scan 2.5s ease-in-out infinite; }
                @keyframes scan { 0% { top: 0; } 50% { top: 100%; } 100% { top: 0; } }
                .loading-content { text-align: center; }
                .spinner-large { width: 50px; height: 50px; border: 4px solid var(--border); border-top-color: var(--primary); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 1.5rem; }
                
                @media (max-width: 640px) {
                    main { padding: 2rem 0.5rem !important; }
                    .checker-header { margin-bottom: 2rem; padding: 0 0.5rem; }
                    .checker-header h1 { font-size: 1.65rem; }
                    .checker-header p { font-size: 0.9rem; }
                    .glass-card { padding: 1rem; border-radius: 20px; }
                    .upload-zone { padding: 1.25rem 0.75rem; }
                    .upload-zone strong { font-size: 0.85rem; }
                    .cv-textarea { min-height: 200px; padding: 0.875rem; font-size: 0.875rem; }
                    .overview-grid { grid-template-columns: 1fr; gap: 0.75rem; }
                    .action-buttons { grid-template-columns: 1fr; gap: 0.75rem; }
                    .score-hero { flex-direction: column; text-align: center; gap: 1rem; padding: 1.5rem 1rem; }
                    .score-circle { width: 90px; height: 90px; }
                    .score-num span { font-size: 2rem; }
                    .score-text h3 { font-size: 1.25rem; }
                    .score-text p { font-size: 0.875rem; }
                    .placeholder-canvas { padding: 2rem 1rem; min-height: 280px; }
                    .checklist-item { padding: 1rem; }
                    .suggestion-box { font-size: 0.8rem; }
                }

                @media (max-width: 320px) {
                    main { padding: 1.5rem 0.55rem !important; }
                    .checker-header { margin-bottom: 2rem; padding: 0 0.25rem; }
                    .checker-icon-box { width: 56px; height: 56px; border-radius: 16px; margin-bottom: 0.75rem; }
                    .checker-header h1 { font-size: 1.45rem !important; line-height: 1.2; }
                    .checker-header p { font-size: 0.875rem !important; line-height: 1.5; }
                    .checker-layout { gap: 1.5rem; }
                    .glass-card { padding: 1.25rem 1rem !important; border-radius: 20px; }
                    .section-title-group h3 { font-size: 1.1rem; }
                    .upload-zone { padding: 1.5rem 0.75rem !important; gap: 0.75rem; }
                    .upload-zone strong { font-size: 0.85rem; line-height: 1.4; display: block; overflow-wrap: break-word; white-space: normal; }
                    .upload-zone p { font-size: 0.75rem; }
                    .icon-upload { width: 32px; height: 32px; }
                    .cv-textarea { min-height: 220px; padding: 1rem; font-size: 0.875rem; }
                    .action-buttons { grid-template-columns: 1fr; gap: 0.75rem; }
                    .score-hero { padding: 1.5rem 0.75rem !important; gap: 1.5rem; }
                    .score-circle { width: 96px; height: 96px; flex-shrink: 0; }
                    .score-num .current-score { font-size: 2rem !important; }
                    .score-num .total-score { font-size: 0.75rem; }
                    .score-text h3 { font-size: 1.15rem !important; text-align: center; }
                    .score-text p { font-size: 0.85rem !important; text-align: center; }
                    .pane-title-blue { font-size: 0.7rem; padding: 0.85rem 1rem !important; }
                    .info-card { padding: 1.25rem 1rem !important; }
                    .info-card li { font-size: 0.825rem; gap: 0.35rem; }
                    .checklist-item { padding: 1rem !important; }
                    .item-main strong { font-size: 0.875rem; }
                    .item-main p { font-size: 0.8rem; }
                    .suggestion-box { font-size: 0.75rem; padding-top: 0.75rem; margin-top: 0.75rem; }
                    .placeholder-canvas { padding: 2.5rem 1rem !important; min-height: 300px; }
                    .placeholder-canvas h3 { font-size: 1.1rem; }
                    .divider span { font-size: 0.65rem; }
                    .spinner-large { width: 40px; height: 40px; }
                }
            `}</style>
        </div>
    );
}
