"use client";

import { useState } from "react";

interface Job {
    id: string;
    title: string;
    slug: string;
    location: string;
    jobType: string;
    skills: string[];
    companyName: string;
    companyLogo: string | null;
    similarity: number | null;
    isSaved?: boolean;
}

interface Feedback {
    questionIndex: number;
    score: number;
    comment: string;
    suggestion: string;
}

interface Evaluation {
    overallScore: number;
    overallComment: string;
    strengths: string[];
    weaknesses: string[];
    feedback: Feedback[];
}

const JOB_TYPE_LABEL: Record<string, string> = {
    FULL_TIME: "Toàn thời gian",
    PART_TIME: "Bán thời gian",
    REMOTE: "Remote",
    INTERNSHIP: "Thực tập",
    CONTRACT: "Hợp đồng",
};

export default function MockInterviewClient({ jobs }: { jobs: Job[] }) {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [questions, setQuestions] = useState<string[]>([]);
    const [answers, setAnswers] = useState<string[]>([]);
    const [currentQ, setCurrentQ] = useState(0);
    const [loading, setLoading] = useState(false);
    const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
    const [error, setError] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [companyName, setCompanyName] = useState("");

    const handleSelectJob = async (job: Job) => {
        setSelectedJob(job);
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/ai/mock-interview", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action: "generate", jobId: job.id }),
            });
            const data = await res.json();

            if (data.error) {
                setError(data.error);
                setLoading(false);
                return;
            }

            setQuestions(data.questions);
            setJobTitle(data.jobTitle);
            setCompanyName(data.companyName);
            setAnswers(new Array(data.questions.length).fill(""));
            setCurrentQ(0);
            setStep(2);
        } catch (e) {
            setError("Không thể tạo câu hỏi. Vui lòng thử lại.");
        }
        setLoading(false);
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/ai/mock-interview", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "evaluate",
                    jobId: selectedJob?.id,
                    questions,
                    answers,
                }),
            });
            const data = await res.json();

            if (data.error) {
                setError(data.error);
                setLoading(false);
                return;
            }

            setEvaluation(data);
            setStep(3);
        } catch (e) {
            setError("Không thể đánh giá. Vui lòng thử lại.");
        }
        setLoading(false);
    };

    const handleReset = () => {
        setStep(1);
        setSelectedJob(null);
        setQuestions([]);
        setAnswers([]);
        setCurrentQ(0);
        setEvaluation(null);
        setError("");
    };

    const getScoreColor = (score: number) => {
        if (score >= 80) return "#22C55E";
        if (score >= 60) return "#F59E0B";
        return "#EF4444";
    };

    return (
        <div>
            {/* Page Header */}
            <div className="dash-topbar">
                <div>
                    <h1 className="dash-page-title" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <svg width="28" height="28" fill="none" stroke="var(--primary)" strokeWidth="1.75" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        Phỏng vấn AI
                    </h1>
                    <p className="dash-page-subtitle">
                        Luyện tập phỏng vấn với AI để tự tin hơn khi ứng tuyển
                    </p>
                </div>
            </div>

            {/* Stepper */}
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "0",
                marginBottom: "2rem",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1rem 1.5rem",
                overflowX: "auto",
            }}>
                {[
                    { num: 1, label: "Chọn công việc" },
                    { num: 2, label: "Phỏng vấn" },
                    { num: 3, label: "Kết quả" },
                ].map((s, idx) => (
                    <div key={s.num} style={{ display: "flex", alignItems: "center", flex: idx < 2 ? 1 : "none" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", whiteSpace: "nowrap" }}>
                            <div style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "0.875rem",
                                fontWeight: 700,
                                background: step >= s.num ? "var(--primary)" : "var(--tag-bg)",
                                color: step >= s.num ? "#fff" : "var(--text-muted)",
                                transition: "all 300ms ease",
                                flexShrink: 0,
                            }}>
                                {step > s.num ? (
                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : s.num}
                            </div>
                            <span style={{
                                fontSize: "0.875rem",
                                fontWeight: step === s.num ? 700 : 500,
                                color: step >= s.num ? "var(--text)" : "var(--text-muted)",
                            }}>
                                {s.label}
                            </span>
                        </div>
                        {idx < 2 && (
                            <div style={{
                                flex: 1,
                                height: "2px",
                                background: step > s.num ? "var(--primary)" : "var(--border)",
                                margin: "0 1rem",
                                borderRadius: "1px",
                                transition: "background 300ms ease",
                                minWidth: "2rem",
                            }} />
                        )}
                    </div>
                ))}
            </div>

            {/* Error */}
            {error && (
                <div style={{
                    padding: "1rem 1.25rem",
                    background: "rgba(239, 68, 68, 0.1)",
                    border: "1px solid rgba(239, 68, 68, 0.2)",
                    borderRadius: "10px",
                    color: "#EF4444",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                }}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    {error}
                </div>
            )}

            {/* Loading overlay */}
            {loading && (
                <div style={{
                    padding: "3rem",
                    textAlign: "center",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    marginBottom: "1.5rem",
                }}>
                    <div style={{
                        width: "48px",
                        height: "48px",
                        border: "3px solid var(--border)",
                        borderTop: "3px solid var(--primary)",
                        borderRadius: "50%",
                        animation: "spin 0.8s linear infinite",
                        margin: "0 auto 1rem",
                    }} />
                    <p style={{ color: "var(--text-muted)", fontWeight: 500 }}>
                        {step === 1 ? "AI đang tạo câu hỏi phỏng vấn..." : "AI đang đánh giá bài phỏng vấn..."}
                    </p>
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                </div>
            )}

            {/* Step 1: Chọn Job */}
            {step === 1 && !loading && (
                <div>
                    <div style={{ marginBottom: "1rem" }}>
                        <h2 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>
                            Chọn công việc để phỏng vấn thử
                        </h2>
                        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                            AI sẽ đóng vai nhà tuyển dụng và đặt câu hỏi dựa trên JD và CV của bạn
                        </p>
                    </div>

                    {jobs.length === 0 ? (
                        <div className="dash-empty" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px" }}>
                            <svg width="48" height="48" fill="none" stroke="var(--border)" strokeWidth="1.5" viewBox="0 0 24 24" style={{ margin: "0 auto 1rem", display: "block" }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Chưa có công việc phù hợp. Hãy cập nhật hồ sơ để nhận gợi ý.
                        </div>
                    ) : (
                        <div className="dash-card-grid">
                            {jobs.map((job) => (
                                <button
                                    key={job.id}
                                    onClick={() => handleSelectJob(job)}
                                    disabled={loading}
                                    style={{
                                        textAlign: "left",
                                        background: "var(--bg-card)",
                                        border: selectedJob?.id === job.id ? "2px solid var(--primary)" : "1px solid var(--border)",
                                        borderRadius: "12px",
                                        padding: "1.25rem",
                                        cursor: "pointer",
                                        transition: "all 200ms ease",
                                        fontFamily: "inherit",
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--primary-light)"; e.currentTarget.style.boxShadow = "var(--shadow-sm)"; }}
                                    onMouseLeave={(e) => { if (selectedJob?.id !== job.id) { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; } }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                                        <div style={{
                                            width: "44px",
                                            height: "44px",
                                            borderRadius: "10px",
                                            border: "1.5px solid var(--border)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontWeight: 700,
                                            fontSize: "1rem",
                                            color: "var(--primary)",
                                            background: "var(--tag-bg)",
                                            flexShrink: 0,
                                            overflow: "hidden",
                                        }}>
                                            {job.companyLogo ? (
                                                <img src={job.companyLogo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                            ) : (
                                                job.companyName.charAt(0)
                                            )}
                                        </div>
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                                {job.title}
                                            </div>
                                            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                                                {job.companyName}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
                                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {job.location || "N/A"}
                                        </span>
                                        <span style={{ fontSize: "0.75rem", padding: "0.15rem 0.5rem", borderRadius: "100px", background: "var(--tag-bg)", color: "var(--primary)", fontWeight: 600 }}>
                                            {JOB_TYPE_LABEL[job.jobType] || job.jobType}
                                        </span>
                                        {job.similarity && (
                                            <span style={{
                                                fontSize: "0.75rem",
                                                fontWeight: 700,
                                                color: job.similarity > 0.7 ? "#22C55E" : "#F59E0B",
                                                background: job.similarity > 0.7 ? "rgba(34,197,94,0.1)" : "rgba(245,158,11,0.1)",
                                                padding: "0.15rem 0.5rem",
                                                borderRadius: "100px",
                                            }}>
                                                {Math.round(job.similarity * 100)}% Match
                                            </span>
                                        )}
                                        {job.isSaved && (
                                            <span style={{
                                                fontSize: "0.75rem",
                                                fontWeight: 600,
                                                color: "#EC4899",
                                                background: "rgba(236,72,153,0.1)",
                                                padding: "0.15rem 0.5rem",
                                                borderRadius: "100px",
                                            }}>
                                                Đã lưu
                                            </span>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Step 2: Phỏng vấn */}
            {step === 2 && !loading && (
                <div>
                    {/* Interview header */}
                    <div style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        borderRadius: "12px",
                        padding: "1.25rem 1.5rem",
                        marginBottom: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                    }}>
                        <div>
                            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "0.125rem" }}>Phỏng vấn cho vị trí</div>
                            <div style={{ fontWeight: 700, color: "var(--text)" }}>{jobTitle} — {companyName}</div>
                        </div>
                        <div style={{ display: "flex", gap: "0.375rem" }}>
                            {questions.map((_, i) => (
                                <div
                                    key={i}
                                    onClick={() => setCurrentQ(i)}
                                    style={{
                                        width: "32px",
                                        height: "32px",
                                        borderRadius: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "0.8125rem",
                                        fontWeight: 700,
                                        cursor: "pointer",
                                        transition: "all 150ms",
                                        background: i === currentQ ? "var(--primary)" : answers[i] ? "rgba(34,197,94,0.15)" : "var(--tag-bg)",
                                        color: i === currentQ ? "#fff" : answers[i] ? "#22C55E" : "var(--text-muted)",
                                        border: i === currentQ ? "none" : "1px solid var(--border)",
                                    }}
                                >
                                    {i + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Question card */}
                    <div style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        borderRadius: "12px",
                        padding: "2rem",
                    }}>
                        <div style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <span style={{
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                color: "var(--primary)",
                                background: "rgba(3,105,161,0.1)",
                                padding: "0.25rem 0.625rem",
                                borderRadius: "100px",
                            }}>
                                Câu {currentQ + 1} / {questions.length}
                            </span>
                            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                                {currentQ < 2 ? "Kỹ thuật" : currentQ < 4 ? "Tình huống" : "Động lực"}
                            </span>
                        </div>

                        <h3 style={{
                            fontSize: "1.125rem",
                            fontWeight: 700,
                            color: "var(--text)",
                            lineHeight: 1.5,
                            marginBottom: "1.5rem",
                        }}>
                            {questions[currentQ]}
                        </h3>

                        <textarea
                            value={answers[currentQ] || ""}
                            onChange={(e) => {
                                const newAnswers = [...answers];
                                newAnswers[currentQ] = e.target.value;
                                setAnswers(newAnswers);
                            }}
                            placeholder="Nhập câu trả lời của bạn tại đây..."
                            rows={6}
                            style={{
                                width: "100%",
                                padding: "1rem",
                                borderRadius: "10px",
                                border: "1.5px solid var(--border)",
                                background: "var(--bg)",
                                color: "var(--text)",
                                fontFamily: "inherit",
                                fontSize: "0.9375rem",
                                lineHeight: 1.6,
                                resize: "vertical",
                                transition: "border-color 150ms",
                                outline: "none",
                            }}
                            onFocus={(e) => e.currentTarget.style.borderColor = "var(--primary)"}
                            onBlur={(e) => e.currentTarget.style.borderColor = "var(--border)"}
                        />

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.25rem", gap: "0.75rem", flexWrap: "wrap" }}>
                            <button
                                className="dash-btn dash-btn-ghost"
                                onClick={() => currentQ > 0 ? setCurrentQ(currentQ - 1) : handleReset()}
                            >
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                                {currentQ > 0 ? "Câu trước" : "Quay lại"}
                            </button>

                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                {currentQ < questions.length - 1 ? (
                                    <button
                                        className="dash-btn dash-btn-primary"
                                        onClick={() => setCurrentQ(currentQ + 1)}
                                    >
                                        Câu tiếp
                                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                ) : (
                                    <button
                                        className="dash-btn dash-btn-success"
                                        onClick={handleSubmit}
                                        disabled={loading}
                                        style={{ background: "var(--cta)", color: "#fff", border: "none" }}
                                    >
                                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        Nộp bài phỏng vấn
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Step 3: Kết quả */}
            {step === 3 && evaluation && !loading && (
                <div>
                    {/* Score overview */}
                    <div style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        borderRadius: "16px",
                        padding: "2rem",
                        marginBottom: "1.5rem",
                        textAlign: "center",
                    }}>
                        {/* Circular score */}
                        <div style={{ position: "relative", width: "120px", height: "120px", margin: "0 auto 1.25rem" }}>
                            <svg width="120" height="120" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="52" fill="none" stroke="var(--border)" strokeWidth="8" />
                                <circle
                                    cx="60" cy="60" r="52"
                                    fill="none"
                                    stroke={getScoreColor(evaluation.overallScore)}
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    strokeDasharray={`${(evaluation.overallScore / 100) * 326.73} 326.73`}
                                    transform="rotate(-90 60 60)"
                                    style={{ transition: "stroke-dasharray 1s ease" }}
                                />
                            </svg>
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <span style={{ fontSize: "2rem", fontWeight: 800, color: getScoreColor(evaluation.overallScore), lineHeight: 1 }}>
                                    {evaluation.overallScore}
                                </span>
                                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 500 }}>/ 100</span>
                            </div>
                        </div>

                        <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>
                            Kết quả phỏng vấn
                        </h2>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.6 }}>
                            {evaluation.overallComment}
                        </p>
                    </div>

                    {/* Strengths & Weaknesses */}
                    <div className="dash-grid-2" style={{ gap: "1rem", marginBottom: "1.5rem" }}>
                        <div style={{
                            background: "var(--bg-card)",
                            border: "1px solid var(--border)",
                            borderRadius: "12px",
                            padding: "1.5rem",
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                                <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(34,197,94,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <svg width="16" height="16" fill="none" stroke="#22C55E" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#22C55E" }}>Điểm mạnh</h3>
                            </div>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                {evaluation.strengths.map((s, i) => (
                                    <li key={i} style={{ fontSize: "0.875rem", color: "var(--text)", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                                        <span style={{ color: "#22C55E", fontWeight: 700, flexShrink: 0 }}>✓</span>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{
                            background: "var(--bg-card)",
                            border: "1px solid var(--border)",
                            borderRadius: "12px",
                            padding: "1.5rem",
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                                <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(245,158,11,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <svg width="16" height="16" fill="none" stroke="#F59E0B" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                </div>
                                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#F59E0B" }}>Cần cải thiện</h3>
                            </div>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                {evaluation.weaknesses.map((w, i) => (
                                    <li key={i} style={{ fontSize: "0.875rem", color: "var(--text)", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                                        <span style={{ color: "#F59E0B", fontWeight: 700, flexShrink: 0 }}>!</span>
                                        {w}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Detailed feedback */}
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text)", marginBottom: "1rem" }}>
                        Nhận xét chi tiết từng câu
                    </h3>

                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                        {[...evaluation.feedback]
                            .sort((a, b) => (a.questionIndex ?? 0) - (b.questionIndex ?? 0))
                            .map((fb, idx) => {
                                const qIdx = fb.questionIndex ?? idx;
                                return (
                                    <div key={idx} style={{
                                        background: "var(--bg-card)",
                                        border: "1px solid var(--border)",
                                        borderRadius: "12px",
                                        padding: "1.5rem",
                                    }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", gap: "1rem", flexWrap: "wrap" }}>
                                            <div style={{ flex: 1, minWidth: 0 }}>
                                                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--primary)", background: "rgba(3,105,161,0.1)", padding: "0.2rem 0.5rem", borderRadius: "100px" }}>
                                                    Câu {qIdx + 1}
                                                </span>
                                                <p style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text)", marginTop: "0.5rem", lineHeight: 1.5 }}>
                                                    {questions[qIdx]}
                                                </p>
                                            </div>
                                            <div style={{
                                                fontWeight: 800,
                                                fontSize: "1.25rem",
                                                color: getScoreColor(fb.score),
                                                flexShrink: 0,
                                            }}>
                                                {fb.score}<span style={{ fontSize: "0.75rem", fontWeight: 500, color: "var(--text-muted)" }}>/100</span>
                                            </div>
                                        </div>

                                        {/* Answer */}
                                        <div style={{
                                            background: "var(--bg)",
                                            border: "1px solid var(--border)",
                                            borderRadius: "8px",
                                            padding: "0.875rem 1rem",
                                            marginBottom: "0.75rem",
                                            fontSize: "0.875rem",
                                            color: "var(--text-muted)",
                                            lineHeight: 1.6,
                                        }}>
                                            <strong style={{ color: "var(--text)", fontWeight: 600 }}>Câu trả lời của bạn:</strong><br />
                                            {answers[qIdx] || "(Không trả lời)"}
                                        </div>

                                        {/* Comment */}
                                        <div style={{ fontSize: "0.875rem", color: "var(--text)", marginBottom: "0.5rem", lineHeight: 1.6 }}>
                                            <strong style={{ fontWeight: 600 }}>Nhận xét:</strong> {fb.comment}
                                        </div>

                                        {/* Suggestion */}
                                        <div style={{
                                            background: "rgba(3,105,161,0.06)",
                                            border: "1px solid rgba(3,105,161,0.15)",
                                            borderRadius: "8px",
                                            padding: "0.875rem 1rem",
                                            fontSize: "0.875rem",
                                            color: "var(--text)",
                                            lineHeight: 1.6,
                                        }}>
                                            <strong style={{ color: "var(--primary)", fontWeight: 600 }}>Gợi ý cải thiện:</strong><br />
                                            {fb.suggestion}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>

                    {/* Retry button */}
                    <div style={{ textAlign: "center" }}>
                        <button
                            className="dash-btn dash-btn-primary"
                            onClick={handleReset}
                            style={{ padding: "0.875rem 2rem", fontSize: "1rem" }}
                        >
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Phỏng vấn lại
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
