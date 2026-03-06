"use client";
import { useState, useTransition } from "react";
import Link from "next/link";
import { registerUser } from "@/app/actions/auth";
import { useRouter } from "next/navigation";

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

    return (
        <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
            <div style={{ width: "100%", maxWidth: step === 1 ? "560px" : "480px" }}>
                {/* Logo */}
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="var(--primary)" />
                            <path d="M8 22V14l8-6 8 6v8" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
                            <rect x="12" y="18" width="8" height="8" rx="1" fill="#fff" />
                        </svg>
                        <span style={{ fontWeight: 800, fontSize: "1.4rem", color: "var(--primary)" }}>
                            Job<span style={{ color: "var(--cta)" }}>Now</span>
                        </span>
                    </Link>
                    <p style={{ color: "var(--text-muted)", marginTop: "0.5rem" }}>
                        {step === 1 ? "Bạn muốn tham gia với tư cách?" : "Nhập thông tin tài khoản"}
                    </p>
                </div>

                {/* Progress */}
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.75rem" }}>
                    {[1, 2].map((s) => (
                        <div key={s} style={{ flex: 1, height: "4px", borderRadius: "2px", background: s <= step ? "var(--primary)" : "var(--border)", transition: "background 300ms" }} />
                    ))}
                </div>

                <div className="card" style={{ padding: "2rem" }}>
                    {step === 1 && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {ROLES.map((r) => (
                                <button
                                    key={r.value}
                                    onClick={() => setRole(r.value)}
                                    id={`role-${r.value.toLowerCase()}`}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        padding: "1.25rem 1.5rem",
                                        border: `2px solid ${role === r.value ? "var(--primary)" : "var(--border)"}`,
                                        borderRadius: "10px",
                                        background: role === r.value ? "rgba(3,105,161,0.05)" : "var(--bg-card)",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        transition: "border-color 180ms, background 180ms",
                                        width: "100%",
                                    }}
                                >
                                    <div style={{ color: role === r.value ? "var(--primary)" : "var(--text-muted)" }}>
                                        {r.icon}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: "var(--text)", fontSize: "1rem" }}>{r.title}</div>
                                        <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>{r.desc}</div>
                                    </div>
                                    {role === r.value && (
                                        <div style={{ marginLeft: "auto", color: "var(--primary)" }}>
                                            <svg width="20" height="20" fill="var(--primary)" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        </div>
                                    )}
                                </button>
                            ))}
                            <button
                                onClick={() => role && setStep(2)}
                                disabled={!role}
                                className="btn-primary"
                                style={{ justifyContent: "center", marginTop: "0.5rem", opacity: !role ? 0.5 : 1, cursor: !role ? "not-allowed" : "pointer" }}
                            >
                                Tiếp tục
                                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {error && (
                                <div style={{ background: "#FEF2F2", border: "1.5px solid #FECACA", borderRadius: "8px", padding: "0.75rem 1rem", color: "#DC2626", fontSize: "0.875rem" }}>
                                    {error}
                                </div>
                            )}
                            {[
                                { name: "name", label: "Họ và tên", type: "text", placeholder: "Nguyễn Văn A" },
                                { name: "email", label: "Email", type: "email", placeholder: "ban@email.com" },
                                { name: "password", label: "Mật khẩu", type: "password", placeholder: "Tối thiểu 8 ký tự" },
                                { name: "confirmPassword", label: "Xác nhận mật khẩu", type: "password", placeholder: "Nhập lại mật khẩu" },
                            ].map((field) => (
                                <div key={field.name}>
                                    <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem", color: "var(--text)", marginBottom: "0.375rem" }}>
                                        {field.label}
                                    </label>
                                    <input name={field.name} type={field.type} required placeholder={field.placeholder} minLength={field.name.includes("password") ? 8 : undefined} style={inputStyle} />
                                </div>
                            ))}

                            <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                                <button type="button" onClick={() => setStep(1)} className="btn-outline" style={{ flex: 1, justifyContent: "center" }}>
                                    Quay lại
                                </button>
                                <button type="submit" disabled={isPending} className="btn-primary" style={{ flex: 2, justifyContent: "center", opacity: isPending ? 0.7 : 1 }}>
                                    {isPending ? "Đang tạo tài khoản..." : "Tạo tài khoản"}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                <p style={{ textAlign: "center", marginTop: "1.25rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                    Đã có tài khoản?{" "}
                    <Link href="/login" style={{ color: "var(--primary)", fontWeight: 600, textDecoration: "none" }}>
                        Đăng nhập
                    </Link>
                </p>
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
};
