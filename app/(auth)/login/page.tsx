"use client";
import { useState, useTransition, useEffect, Suspense } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginContent() {
    const [error, setError] = useState("");
    const [isPending, startTransition] = useTransition();
    const { data: session } = useSession();
    const router = useRouter();
    const searchParams = useSearchParams();
    const registered = searchParams.get("registered");
    const [isDesktop, setIsDesktop] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
        checkDesktop();
        window.addEventListener("resize", checkDesktop);
        return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    useEffect(() => {
        if (session?.user) {
            const role = session.user.role;
            if (role === "ADMIN") router.push("/admin/dashboard");
            else if (role === "EMPLOYER") router.push("/employer/dashboard");
            else router.push("/candidate/dashboard");
        }
    }, [session, router]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        const fd = new FormData(e.currentTarget);
        startTransition(async () => {
            const result = await signIn("credentials", {
                email: fd.get("email"),
                password: fd.get("password"),
                redirect: false,
            });
            if (result?.error) {
                setError("Email hoặc mật khẩu không đúng");
            } else {
                router.refresh();
            }
        });
    }

    async function handleGoogleLogin() {
        await signIn("google", { redirectTo: "/" });
    }

    return (
        <div className="login-page">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
                
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                .login-page {
                    min-height: 100vh;
                    display: flex;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    position: relative;
                    overflow: hidden;
                }

                /* Animated Background */
                .login-bg {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c1929 100%);
                }

                .login-bg::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: 
                        radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.25) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.2) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(3, 105, 161, 0.25) 0%, transparent 40%);
                }

                /* Floating Shapes */
                .floating-shapes {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    pointer-events: none;
                }

                .shape {
                    position: absolute;
                    border-radius: 50%;
                    animation: float 20s infinite ease-in-out;
                }

                .shape-1 {
                    width: 300px;
                    height: 300px;
                    background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(14, 165, 233, 0.1));
                    top: -50px;
                    right: -50px;
                    animation-delay: 0s;
                }

                .shape-2 {
                    width: 200px;
                    height: 200px;
                    background: linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(3, 105, 161, 0.1));
                    bottom: 20%;
                    left: -30px;
                    animation-delay: -5s;
                }

                .shape-3 {
                    width: 150px;
                    height: 150px;
                    background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(14, 165, 233, 0.1));
                    top: 40%;
                    right: 10%;
                    animation-delay: -10s;
                }

                .shape-4 {
                    width: 100px;
                    height: 100px;
                    background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.1));
                    bottom: 10%;
                    right: 20%;
                    animation-delay: -15s;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    25% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                    50% {
                        transform: translateY(0) rotate(0deg);
                    }
                    75% {
                        transform: translateY(20px) rotate(-5deg);
                    }
                }

                /* Left Panel */
                .login-left {
                    display: none;
                    width: 50%;
                    position: relative;
                    z-index: 10;
                    padding: 3rem;
                    overflow: hidden;
                }

                .login-left::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(3, 105, 161, 0.95) 0%, rgba(2, 84, 131, 0.9) 100%);
                    backdrop-filter: blur(20px);
                }

                .login-left-content {
                    position: relative;
                    z-index: 2;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .login-logo {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-decoration: none;
                    margin-bottom: 3rem;
                    animation: slideInLeft 0.6s ease-out;
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .login-logo-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 14px;
                    background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 8px 20px rgba(14, 165, 233, 0.4);
                }

                .login-logo-text {
                    font-weight: 800;
                    font-size: 2rem;
                    color: #fff;
                    letter-spacing: -0.5px;
                }

                .login-hero-title {
                    font-size: 3rem;
                    font-weight: 800;
                    color: #fff;
                    margin-bottom: 1rem;
                    line-height: 1.2;
                    animation: slideInLeft 0.6s ease-out 0.1s backwards;
                }

                .login-hero-title span {
                    background: linear-gradient(135deg, #38BDF8 0%, #7DD3FC 50%, #BAE6FD 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .login-hero-subtitle {
                    font-size: 1.125rem;
                    color: rgba(255,255,255,0.75);
                    margin-bottom: 2.5rem;
                    max-width: 420px;
                    line-height: 1.7;
                    animation: slideInLeft 0.6s ease-out 0.2s backwards;
                }

                .login-features {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                    animation: slideInLeft 0.6s ease-out 0.3s backwards;
                }

                .login-feature-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    color: rgba(255,255,255,0.9);
                    font-size: 1rem;
                    padding: 0.75rem 1rem;
                    background: rgba(255,255,255,0.08);
                    border-radius: 12px;
                    border: 1px solid rgba(255,255,255,0.12);
                    transition: all 0.3s ease;
                }

                .login-feature-item:hover {
                    background: rgba(255,255,255,0.15);
                    transform: translateX(8px);
                }

                .login-feature-icon {
                    width: 36px;
                    height: 36px;
                    border-radius: 10px;
                    background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    font-weight: 700;
                    font-size: 0.875rem;
                    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.35);
                }

                /* Decorative Stats */
                .login-stats {
                    display: flex;
                    gap: 2rem;
                    margin-top: 2.5rem;
                    animation: slideInLeft 0.6s ease-out 0.4s backwards;
                }

                .login-stat-item {
                    text-align: center;
                }

                .login-stat-number {
                    font-size: 2rem;
                    font-weight: 800;
                    color: #fff;
                    display: block;
                }

                .login-stat-number span {
                    color: #38BDF8;
                }

                .login-stat-label {
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.65);
                }

                /* Right Panel */
                .login-right {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    position: relative;
                    z-index: 10;
                }

                .login-form-container {
                    width: 100%;
                    max-width: 440px;
                    animation: fadeInUp 0.6s ease-out;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .login-form-card {
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(20px);
                    border-radius: 24px;
                    padding: 2.5rem;
                    box-shadow: 
                        0 25px 50px -12px rgba(0, 0, 0, 0.25),
                        0 0 0 1px rgba(255, 255, 255, 0.1);
                }

                .login-form-header {
                    margin-bottom: 2rem;
                    text-align: center;
                }

                .login-form-title {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: #0f172a;
                    margin-bottom: 0.5rem;
                }

                .login-form-subtitle {
                    color: #64748b;
                    font-size: 0.9375rem;
                }

                .login-success-box {
                    background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
                    border: none;
                    border-radius: 14px;
                    padding: 1rem 1.25rem;
                    color: #065f46;
                    font-size: 0.9rem;
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    animation: shake 0.5s ease-in-out;
                }

                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }

                .login-success-box svg {
                    width: 20px;
                    height: 20px;
                    flex-shrink: 0;
                }

                .login-error-box {
                    background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%);
                    border: none;
                    border-radius: 14px;
                    padding: 1rem 1.25rem;
                    color: #dc2626;
                    font-size: 0.9rem;
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    animation: shake 0.5s ease-in-out;
                }

                .login-error-box svg {
                    width: 20px;
                    height: 20px;
                    flex-shrink: 0;
                }

                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }

                .login-input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .login-label-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .login-label {
                    font-weight: 600;
                    font-size: 0.875rem;
                    color: #334155;
                }

                .login-forgot-link {
                    font-size: 0.875rem;
                    color: #0369A1;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s;
                }

                .login-forgot-link:hover {
                    color: #0284C7;
                }

                .login-input-wrapper {
                    position: relative;
                }

                .login-input {
                    width: 100%;
                    padding: 1rem 1.25rem;
                    padding-left: 48px;
                    border: 2px solid #e2e8f0;
                    border-radius: 14px;
                    background: #f8fafc;
                    color: #0f172a;
                    font-size: 0.9375rem;
                    outline: none;
                    transition: all 0.3s ease;
                    box-sizing: border-box;
                }

                .login-input:focus {
                    border-color: #0EA5E9;
                    background: #fff;
                    box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
                }

                .login-input::placeholder {
                    color: #94a3b8;
                }

                .login-input-icon {
                    position: absolute;
                    left: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 20px;
                    height: 20px;
                    color: #94a3b8;
                    transition: color 0.3s;
                    pointer-events: none;
                }

                .login-input:focus + .login-input-icon,
                .login-input-wrapper:focus-within .login-input-icon {
                    color: #0EA5E9;
                }

                .login-password-toggle {
                    position: absolute;
                    right: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #94a3b8;
                    cursor: pointer;
                    border: none;
                    background: none;
                    border-radius: 8px;
                    transition: all 0.2s;
                    z-index: 10;
                }

                .login-password-toggle:hover {
                    color: #0EA5E9;
                    background: rgba(14, 165, 233, 0.1);
                }


                .login-primary-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    width: 100%;
                    padding: 1rem 1.5rem;
                    background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
                    color: #fff;
                    border: none;
                    border-radius: 14px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-top: 0.5rem;
                    box-shadow: 0 4px 14px rgba(14, 165, 233, 0.4);
                }

                .login-primary-btn:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(14, 165, 233, 0.5);
                }

                .login-primary-btn:active:not(:disabled) {
                    transform: translateY(0);
                }

                .login-primary-btn:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }

                .login-btn-loader {
                    width: 20px;
                    height: 20px;
                    border: 2px solid rgba(255,255,255,0.3);
                    border-top-color: #fff;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .login-divider {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin: 1.75rem 0;
                }

                .login-divider-line {
                    flex: 1;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
                }

                .login-divider-text {
                    color: #94a3b8;
                    font-size: 0.875rem;
                    font-weight: 500;
                }

                .login-google-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    width: 100%;
                    padding: 1rem 1rem;
                    background: #fff;
                    color: #3c4043;
                    border: 2px solid #e2e8f0;
                    border-radius: 14px;
                    font-size: 0.9375rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .login-google-btn:hover {
                    background: #f8fafc;
                    border-color: #cbd5e1;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                    transform: translateY(-1px);
                }

                .login-footer-text {
                    text-align: center;
                    margin-top: 2rem;
                    color: #64748b;
                    font-size: 0.9375rem;
                }

                .login-footer-link {
                    color: #0369A1;
                    font-weight: 600;
                    text-decoration: none;
                    transition: color 0.2s;
                }

                .login-footer-link:hover {
                    color: #0284C7;
                }

                /* Responsive */
                @media (min-width: 1024px) {
                    .login-left { display: flex; }
                    .login-right { width: 50%; }
                }

                @media (max-width: 480px) {
                    .login-right { padding: 1.5rem 1rem; }
                    .login-form-title { font-size: 1.5rem; }
                    .login-hero-title { font-size: 2rem; }
                    .login-form-card { padding: 1.75rem; }
                    .login-stats { flex-direction: column; gap: 1rem; }
                }
            `}</style>

            {/* Animated Background */}
            <div className="login-bg"></div>

            {/* Floating Shapes */}
            <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
            </div>

            <div className="login-left">
                <div className="login-left-content">
                    <Link href="/" className="login-logo">
                        <img
                            src="/assets/logo_dark.png"
                            alt="JobNow Logo"
                            style={{ height: "48px", width: "auto" }}
                        />
                    </Link>
                    <h1 className="login-hero-title">
                        Chào mừng <span>trở lại!</span>
                    </h1>
                    <p className="login-hero-subtitle">
                        Đăng nhập để tiếp tục hành trình sự nghiệp của bạn. Khám phá hàng ngàn cơ hội việc làm phù hợp với bạn.
                    </p>
                    <div className="login-features">
                        <div className="login-feature-item">
                            <div className="login-feature-icon">
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <span>Tìm việc nhanh chóng với AI thông minh</span>
                        </div>
                        <div className="login-feature-item">
                            <div className="login-feature-icon">
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
                            </div>
                            <span>Ứng tuyển dễ dàng trong 1 click</span>
                        </div>
                        <div className="login-feature-item">
                            <div className="login-feature-icon">
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            </div>
                            <span>Nhận thông báo việc làm mới ngay lập tức</span>
                        </div>
                    </div>

                    <div className="login-stats">
                        <div className="login-stat-item">
                            <span className="login-stat-number">10K+</span>
                            <span className="login-stat-label">Việc làm</span>
                        </div>
                        <div className="login-stat-item">
                            <span className="login-stat-number">5K+</span>
                            <span className="login-stat-label">Công ty</span>
                        </div>
                        <div className="login-stat-item">
                            <span className="login-stat-number">50K+</span>
                            <span className="login-stat-label">Ứng viên</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="login-right">
                <div className="login-form-container">
                    <div className="login-form-card">
                        <div className="login-form-header">
                            <h2 className="login-form-title">Đăng nhập</h2>
                            <p className="login-form-subtitle">Nhập thông tin để truy cập tài khoản</p>
                        </div>

                        {registered && (
                            <div className="login-success-box">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                                Đăng ký thành công! Vui lòng đăng nhập.
                            </div>
                        )}

                        {error && (
                            <div className="login-error-box">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                                </svg>
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="login-input-group">
                                <label className="login-label">Email</label>
                                <div className="login-input-wrapper">
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="ban@email.com"
                                        className="login-input"
                                    />
                                    <svg className="login-input-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="login-input-group">
                                <div className="login-label-row">
                                    <label className="login-label">Mật khẩu</label>
                                    <Link href="#" className="login-forgot-link">Quên mật khẩu?</Link>
                                </div>
                                <div className="login-input-wrapper">
                                    <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        placeholder="Nhập mật khẩu"
                                        className="login-input"
                                        style={{ paddingRight: "48px" }}
                                    />
                                    <svg className="login-input-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <button
                                        type="button"
                                        className="login-password-toggle"
                                        onClick={() => setShowPassword(!showPassword)}
                                        tabIndex={-1}
                                    >
                                        {showPassword ? (
                                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>

                                </div>
                            </div>

                            <button type="submit" disabled={isPending} className="login-primary-btn">
                                {isPending ? (
                                    <>
                                        <div className="login-btn-loader"></div>
                                        Đang đăng nhập...
                                    </>
                                ) : (
                                    <>
                                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg>
                                        Đăng nhập
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="login-divider">
                            <div className="login-divider-line"></div>
                            <span className="login-divider-text">hoặc</span>
                            <div className="login-divider-line"></div>
                        </div>

                        <button type="button" onClick={handleGoogleLogin} className="login-google-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Tiếp tục với Google
                        </button>

                        <p className="login-footer-text">
                            Chưa có tài khoản?{" "}
                            <Link href="/register" className="login-footer-link">Đăng ký miễn phí</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0f172a" }}>
                <div style={{ width: "40px", height: "40px", border: "3px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        }>
            <LoginContent />
        </Suspense>
    );
}
