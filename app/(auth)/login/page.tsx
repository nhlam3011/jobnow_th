"use client";
import { useState, useTransition, useEffect } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [error, setError] = useState("");
    const [isPending, startTransition] = useTransition();
    const { data: session } = useSession();
    const router = useRouter();

    // Redirect if already logged in
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
                // Use router to redirect based on role after successful login
                // The useEffect above will handle the redirect once session updates
                router.refresh();
            }
        });
    }

    return (
        <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
            <div style={{ width: "100%", maxWidth: "440px" }}>
                {/* Logo */}
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
                        <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="var(--primary)" />
                            <path d="M8 22V14l8-6 8 6v8" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
                            <rect x="12" y="18" width="8" height="8" rx="1" fill="#fff" />
                        </svg>
                        <span style={{ fontWeight: 800, fontSize: "1.5rem", color: "var(--primary)" }}>
                            Job<span style={{ color: "var(--cta)" }}>Now</span>
                        </span>
                    </Link>
                    <p style={{ color: "var(--text-muted)", marginTop: "0.5rem", fontSize: "0.9375rem" }}>
                        Đăng nhập vào tài khoản của bạn
                    </p>
                </div>

                <div className="card" style={{ padding: "2rem" }}>
                    {error && (
                        <div style={{ background: "#FEF2F2", border: "1.5px solid #FECACA", borderRadius: "8px", padding: "0.875rem 1rem", marginBottom: "1.25rem", color: "#DC2626", fontSize: "0.9rem" }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
                        <div>
                            <label style={{ display: "block", fontWeight: 600, fontSize: "0.9rem", color: "var(--text)", marginBottom: "0.375rem" }}>
                                Email
                            </label>
                            <input
                                id="login-email"
                                name="email"
                                type="email"
                                required
                                placeholder="ban@email.com"
                                style={inputStyle}
                            />
                        </div>
                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
                                <label style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text)" }}>
                                    Mật khẩu
                                </label>
                                <Link href="#" style={{ fontSize: "0.875rem", color: "var(--primary)", textDecoration: "none" }}>
                                    Quên mật khẩu?
                                </Link>
                            </div>
                            <input
                                id="login-password"
                                name="password"
                                type="password"
                                required
                                placeholder="••••••••"
                                style={inputStyle}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="btn-primary"
                            style={{ justifyContent: "center", opacity: isPending ? 0.7 : 1, marginTop: "0.5rem" }}
                        >
                            {isPending ? "Đang đăng nhập..." : "Đăng nhập"}
                        </button>
                    </form>

                    <div style={{ textAlign: "center", marginTop: "1.25rem", fontSize: "0.9375rem", color: "var(--text-muted)" }}>
                        Chưa có tài khoản?{" "}
                        <Link href="/register" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>
                            Đăng ký miễn phí
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "1.5px solid var(--border)",
    borderRadius: "8px",
    background: "var(--bg)",
    color: "var(--text)",
    fontFamily: "inherit",
    fontSize: "0.9375rem",
    outline: "none",
    transition: "border-color 180ms",
};
