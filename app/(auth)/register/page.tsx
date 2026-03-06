"use client";
import { useState, useTransition } from "react";
import Link from "next/link";
import { registerUser } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const ROLES = [
    {
        value: "CANDIDATE",
        title: "Ứng viên",
        desc: "Tìm kiếm việc làm, quản lý CV và nhận gợi ý AI",
        icon: (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
            </svg>
        ),
        color: "#0891b2",
    },
    {
        value: "EMPLOYER",
        title: "Nhà tuyển dụng",
        desc: "Đăng tin tuyển dụng và tìm ứng viên phù hợp",
        icon: (
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4" />
            </svg>
        ),
        color: "#f97316",
    },
];

export default function RegisterPage() {
    const [step, setStep] = useState<1 | 2>(1);
    const [role, setRole] = useState<string>("");
    const [error, setError] = useState("");
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        const fd = new FormData(e.currentTarget);
        fd.append("role", role);

        if (fd.get("password") !== fd.get("confirmPassword")) {
            setError("Mật khẩu không khớp");
            return;
        }

        startTransition(async () => {
            const result = await registerUser(fd);
            if (result.error) {
                setError(result.error);
            } else {
                router.push("/login?registered=1");
            }
        });
    }

    async function handleGoogleLogin() {
        await signIn("google", { redirectTo: "/" });
    }

    return (
        <div className="auth-container">
            <style>{`
                .auth-container {
                    min-height: 100vh;
                    display: flex;
                    background: #f8fafc;
                }
                .auth-left {
                    display: none;
                    width: 50%;
                    background: linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%);
                    position: relative;
                    overflow: hidden;
                    padding: 3rem;
                }
                .auth-left-content {
                    position: relative;
                    z-index: 2;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .auth-logo {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-decoration: none;
                    margin-bottom: 3rem;
                }
                .auth-logo-text {
                    font-weight: 800;
                    font-size: 1.75rem;
                    color: #fff;
                }
                .auth-hero-title {
                    font-size: 2.75rem;
                    font-weight: 800;
                    color: #fff;
                    margin-bottom: 1rem;
                    line-height: 1.2;
                }
                .auth-hero-subtitle {
                    font-size: 1.125rem;
                    color: rgba(255,255,255,0.85);
                    margin-bottom: 3rem;
                    max-width: 400px;
                    line-height: 1.6;
                }
                .auth-stats {
                    display: flex;
                    gap: 2.5rem;
                }
                .auth-stat-item {
                    display: flex;
                    flex-direction: column;
                }
                .auth-stat-number {
                    font-size: 1.75rem;
                    font-weight: 800;
                    color: #fff;
                }
                .auth-stat-label {
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.8);
                }
                .auth-wave-bg {
                    position: absolute;
                    bottom: -50%;
                    left: 0;
                    right: 0;
                    height: 100%;
                    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='rgba(255,255,255,0.1)' fill-opacity='1' d='M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,170.7C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E") no-repeat bottom;
                    background-size: cover;
                }
                .auth-right {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                }
                .auth-form-container {
                    width: 100%;
                    max-width: 480px;
                }
                .auth-form-header {
                    margin-bottom: 1.5rem;
                }
                .auth-form-title {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin-bottom: 0.5rem;
                }
                .auth-form-subtitle {
                    color: #64748b;
                    font-size: 0.9375rem;
                }
                .auth-progress-bar {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
                }
                .auth-progress-step {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-size: 0.875rem;
                    font-weight: 600;
                }
                .auth-progress-line {
                    flex: 1;
                    height: 3px;
                    background: #e2e8f0;
                    border-radius: 2px;
                }
                .auth-role-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .auth-role-card {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.25rem;
                    border: 2px solid #e2e8f0;
                    border-radius: 12px;
                    background: #fff;
                    cursor: pointer;
                    transition: all 0.2s;
                    width: 100%;
                    box-sizing: border-box;
                }
                .auth-role-card:hover {
                    border-color: #cbd5e1;
                }
                .auth-role-card.selected {
                    border-color: var(--role-color, #0891b2);
                    background: linear-gradient(135deg, rgba(8,145,178,0.05) 0%, rgba(8,145,178,0.02) 100%);
                    box-shadow: 0 4px 20px rgba(8,145,178,0.15);
                }
                .auth-role-icon {
                    width: 56px;
                    height: 56px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .auth-role-info {
                    flex: 1;
                    text-align: left;
                }
                .auth-role-title {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin-bottom: 0.25rem;
                }
                .auth-role-desc {
                    font-size: 0.8125rem;
                    color: #64748b;
                }
                .auth-check-icon {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .auth-error-box {
                    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
                    border: 1px solid #f87171;
                    border-radius: 10px;
                    padding: 0.875rem 1rem;
                    color: #dc2626;
                    font-size: 0.9rem;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .auth-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .auth-input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .auth-label {
                    font-weight: 600;
                    font-size: 0.875rem;
                    color: #334155;
                }
                .auth-input {
                    width: 100%;
                    padding: 0.875rem 1rem;
                    border: 1.5px solid #e2e8f0;
                    border-radius: 10px;
                    background: #fff;
                    color: #0f172a;
                    font-size: 0.9375rem;
                    outline: none;
                    transition: border-color 0.2s, box-shadow 0.2s;
                    box-sizing: border-box;
                }
                .auth-input:focus {
                    border-color: #0891b2;
                    box-shadow: 0 0 0 3px rgba(8,145,178,0.1);
                }
                .auth-btn-row {
                    display: flex;
                    gap: 1rem;
                    margin-top: 0.5rem;
                }
                .auth-back-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 0.9375rem 1.25rem;
                    background: #fff;
                    color: #64748b;
                    border: 1.5px solid #e2e8f0;
                    border-radius: 10px;
                    font-size: 0.9375rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .auth-back-btn:hover {
                    background: #f8fafc;
                    border-color: #cbd5e1;
                }
                .auth-primary-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    flex: 1;
                    padding: 0.9375rem 1.5rem;
                    background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
                    color: #fff;
                    border: none;
                    border-radius: 10px;
                    font-size: 0.9375rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .auth-primary-btn:hover:not(:disabled) {
                    transform: translateY(-1px);
                    box-shadow: 0 4px 12px rgba(8,145,178,0.3);
                }
                .auth-primary-btn:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                .auth-divider {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin: 1.75rem 0;
                }
                .auth-divider-line {
                    flex: 1;
                    height: 1px;
                    background: #e2e8f0;
                }
                .auth-divider-text {
                    color: #94a3b8;
                    font-size: 0.875rem;
                }
                .auth-google-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    width: 100%;
                    padding: 0.875rem 1rem;
                    background: #fff;
                    color: #3c4043;
                    border: 1px solid #dadce0;
                    border-radius: 10px;
                    font-size: 0.9375rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: background 0.2s, box-shadow 0.2s;
                }
                .auth-google-btn:hover {
                    background: #f8f9fa;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }
                .auth-footer-text {
                    text-align: center;
                    margin-top: 2rem;
                    color: #64748b;
                    font-size: 0.9375rem;
                }
                .auth-footer-link {
                    color: #0891b2;
                    font-weight: 600;
                    text-decoration: none;
                }
                @media (min-width: 1024px) {
                    .auth-left { display: flex; }
                    .auth-right { width: 50%; }
                }
                @media (max-width: 480px) {
                    .auth-right { padding: 1.5rem 1rem; }
                    .auth-form-title { font-size: 1.5rem; }
                    .auth-hero-title { font-size: 2rem; }
                    .auth-stats { gap: 1.5rem; }
                    .auth-stat-number { font-size: 1.5rem; }
                    .auth-btn-row { flex-direction: column; }
                }
            `}</style>

            <div className="auth-left">
                <div className="auth-left-content">
                    <Link href="/" className="auth-logo">
                        <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="#fff" />
                            <path d="M8 22V14l8-6 8 6v8" stroke="#0E7490" strokeWidth="2" strokeLinejoin="round" />
                            <rect x="12" y="18" width="8" height="8" rx="1" fill="#0E7490" />
                        </svg>
                        <span className="auth-logo-text">Job<span style={{ color: "#F97316" }}>Now</span></span>
                    </Link>
                    <h1 className="auth-hero-title">Bắt đầu hành trình sự nghiệp</h1>
                    <p className="auth-hero-subtitle">Tham gia cùng hàng nghìn ứng viên và nhà tuyển dụng hàng đầu</p>
                    <div className="auth-stats">
                        <div className="auth-stat-item">
                            <span className="auth-stat-number">10,000+</span>
                            <span className="auth-stat-label">Việc làm</span>
                        </div>
                        <div className="auth-stat-item">
                            <span className="auth-stat-number">5,000+</span>
                            <span className="auth-stat-label">Công ty</span>
                        </div>
                        <div className="auth-stat-item">
                            <span className="auth-stat-number">50,000+</span>
                            <span className="auth-stat-label">Ứng viên</span>
                        </div>
                    </div>
                </div>
                <div className="auth-wave-bg"></div>
            </div>

            <div className="auth-right">
                <div className="auth-form-container">
                    <div className="auth-form-header">
                        <h2 className="auth-form-title">
                            {step === 1 ? "Chọn vai trò" : "Tạo tài khoản"}
                        </h2>
                        <p className="auth-form-subtitle">
                            {step === 1 ? "Bạn muốn tham gia với tư cách nào?" : "Nhập thông tin để đăng ký"}
                        </p>
                    </div>

                    {step === 1 && (
                        <div className="auth-progress-bar">
                            <div className="auth-progress-step" style={{ background: "#0891b2" }}>1</div>
                            <div className="auth-progress-line"></div>
                            <div className="auth-progress-step" style={{ background: "#e2e8f0", color: "#94a3b8" }}>2</div>
                        </div>
                    )}

                    {step === 1 && (
                        <div className="auth-role-grid">
                            {ROLES.map((r) => (
                                <button
                                    key={r.value}
                                    onClick={() => setRole(r.value)}
                                    className={`auth-role-card ${role === r.value ? "selected" : ""}`}
                                    style={{ "--role-color": r.color } as React.CSSProperties}
                                >
                                    <div className="auth-role-icon" style={{ color: r.color, background: `${r.color}15` }}>
                                        {r.icon}
                                    </div>
                                    <div className="auth-role-info">
                                        <h3 className="auth-role-title">{r.title}</h3>
                                        <p className="auth-role-desc">{r.desc}</p>
                                    </div>
                                    {role === r.value && (
                                        <div className="auth-check-icon" style={{ background: r.color }}>
                                            <svg width="14" height="14" fill="#fff" viewBox="0 0 24 24">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                            </svg>
                                        </div>
                                    )}
                                </button>
                            ))}
                            <button
                                onClick={() => role && setStep(2)}
                                disabled={!role}
                                className="auth-primary-btn"
                            >
                                Tiếp tục
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                </svg>
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <>
                            <div className="auth-progress-bar">
                                <div className="auth-progress-step" style={{ background: "#0891b2" }}>✓</div>
                                <div className="auth-progress-line" style={{ background: "#0891b2" }}></div>
                                <div className="auth-progress-step" style={{ background: "#0891b2" }}>2</div>
                            </div>
                            <form onSubmit={handleSubmit} className="auth-form">
                                {error && (
                                    <div className="auth-error-box">
                                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                                        </svg>
                                        {error}
                                    </div>
                                )}

                                <div className="auth-input-group">
                                    <label className="auth-label">Họ và tên</label>
                                    <input name="name" type="text" required placeholder="Nguyễn Văn A" className="auth-input" />
                                </div>
                                <div className="auth-input-group">
                                    <label className="auth-label">Email</label>
                                    <input name="email" type="email" required placeholder="ban@email.com" className="auth-input" />
                                </div>
                                <div className="auth-input-group">
                                    <label className="auth-label">Mật khẩu</label>
                                    <input name="password" type="password" required placeholder="Tối thiểu 8 ký tự" minLength={8} className="auth-input" />
                                </div>
                                <div className="auth-input-group">
                                    <label className="auth-label">Xác nhận mật khẩu</label>
                                    <input name="confirmPassword" type="password" required placeholder="Nhập lại mật khẩu" minLength={8} className="auth-input" />
                                </div>

                                <div className="auth-btn-row">
                                    <button type="button" onClick={() => setStep(1)} className="auth-back-btn">
                                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                                        </svg>
                                        Quay lại
                                    </button>
                                    <button type="submit" disabled={isPending} className="auth-primary-btn">
                                        {isPending ? "Đang tạo..." : "Tạo tài khoản"}
                                    </button>
                                </div>
                            </form>

                            <div className="auth-divider">
                                <div className="auth-divider-line"></div>
                                <span className="auth-divider-text">hoặc</span>
                                <div className="auth-divider-line"></div>
                            </div>

                            <button type="button" onClick={handleGoogleLogin} className="auth-google-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Tiếp tục với Google
                            </button>
                        </>
                    )}

                    <p className="auth-footer-text">
                        Đã có tài khoản?{" "}
                        <Link href="/login" className="auth-footer-link">Đăng nhập</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
