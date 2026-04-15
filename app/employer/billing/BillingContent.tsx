"use client";

import { useEffect, useState } from "react";
import { getCompanyBalance, getTransactionHistory, depositMoney } from "@/app/actions/billing";

export default function BillingContent({ 
    stats 
}: { 
    stats: { totalDeposit: number; totalSpent: number } 
}) {
    const [balance, setBalance] = useState(0);
    const [transactions, setTransactions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [depositAmount, setDepositAmount] = useState("");
    const [depositing, setDepositing] = useState(false);
    const [msg, setMsg] = useState({ text: "", type: "" });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [balanceRes, historyRes] = await Promise.all([
                getCompanyBalance(),
                getTransactionHistory()
            ]);

            if (balanceRes.success) setBalance(balanceRes.balance || 0);
            setTransactions(historyRes);
        } catch (e) {
            console.error("Failed to load billing data", e);
        } finally {
            setLoading(false);
        }
    };

    const handleDeposit = async (e: React.FormEvent) => {
        e.preventDefault();
        const amount = parseInt(depositAmount.replace(/\D/g, ""), 10);
        if (!amount || amount < 10000) {
            setMsg({ text: "Số tiền tối thiểu là 10,000 VND", type: "error" });
            return;
        }

        setDepositing(true);
        setMsg({ text: "", type: "" });

        const res = await depositMoney(amount);
        if (res.success) {
            setMsg({ text: `Nạp thành công ${amount.toLocaleString("vi-VN")} đ!`, type: "success" });
            setBalance(res.balance || 0);
            setDepositAmount("");
            // Refresh history
            const historyRes = await getTransactionHistory();
            setTransactions(historyRes);
        } else {
            setMsg({ text: res.error || "Nạp tiền thất bại", type: "error" });
        }
        setDepositing(false);
    };

    if (loading) {
        return <div className="dash-loading">Đang tải dữ liệu...</div>;
    }

    return (
        <>
            <div className="dash-topbar" style={{ marginBottom: "2rem" }}>
                <div>
                    <h1 className="dash-page-title">Ví & Thanh toán</h1>
                    <p className="dash-page-subtitle">Quản lý số dư và lịch sử giao dịch của công ty</p>
                </div>
            </div>

            <div className="dash-stats" style={{ gridTemplateColumns: "repeat(2, 1fr)", marginBottom: "2rem" }}>
                <div className="dash-stat-card" style={{ borderLeft: "4px solid #10b981" }}>
                    <div className="dash-stat-header">
                        <div className="dash-stat-icon" style={{ background: "rgba(16,185,129,0.1)" }}>
                            <svg width="24" height="24" fill="none" stroke="#10b981" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                        </div>
                        <span className="dash-stat-label">Tổng tiền đã nạp</span>
                    </div>
                    <div className="dash-stat-value" style={{ color: "#10b981" }}>{stats.totalDeposit.toLocaleString("vi-VN")} đ</div>
                </div>
                <div className="dash-stat-card" style={{ borderLeft: "4px solid #f59e0b" }}>
                    <div className="dash-stat-header">
                        <div className="dash-stat-icon" style={{ background: "rgba(245,158,11,0.1)" }}>
                            <svg width="24" height="24" fill="none" stroke="#f59e0b" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <span className="dash-stat-label">Tổng tiền mua VIP</span>
                    </div>
                    <div className="dash-stat-value" style={{ color: "#f59e0b" }}>{stats.totalSpent.toLocaleString("vi-VN")} đ</div>
                </div>
            </div>

            <div className="dash-grid-2" style={{ gap: "2rem", marginBottom: "2rem" }}>
                {/* Balance Card */}
                <div className="dash-form-card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "3rem 2rem", background: "linear-gradient(135deg, #0369a1 0%, #0284c7 100%)", color: "white" }}>
                    <div style={{ fontSize: "1rem", opacity: 0.9, marginBottom: "0.5rem" }}>Số dư hiện tại</div>
                    <div style={{ fontSize: "3rem", fontWeight: 800 }}>
                        {balance.toLocaleString("vi-VN")} <span style={{ fontSize: "1.5rem" }}>VND</span>
                    </div>
                </div>

                {/* Deposit Form */}
                <div className="dash-form-card">
                    <h3 style={{ marginBottom: "0.5rem" }}>Nạp tiền vào ví</h3>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                        Nhập số tiền bạn muốn nạp. Trong phiên bản thử nghiệm, giao dịch này chỉ là mô phỏng.
                    </p>

                    {msg.text && (
                        <div className={`dash-alert ${msg.type === "success" ? "dash-alert-success" : "dash-alert-error"}`}>
                            {msg.text}
                        </div>
                    )}

                    <form onSubmit={handleDeposit}>
                        <div className="dash-form-group">
                            <label className="dash-form-label">Số tiền (VND)</label>
                            <input
                                type="text"
                                className="dash-input"
                                value={depositAmount}
                                onChange={(e) => {
                                    const val = e.target.value.replace(/\D/g, "");
                                    setDepositAmount(val ? parseInt(val, 10).toLocaleString("vi-VN") : "");
                                }}
                                placeholder="Ví dụ: 1,000,000"
                            />
                        </div>
                        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
                            {[100000, 500000, 1000000, 5000000].map(amt => (
                                <button
                                    key={amt}
                                    type="button"
                                    className="dash-btn"
                                    style={{ flex: 1, padding: "0.5rem", fontSize: "0.8125rem" }}
                                    onClick={() => setDepositAmount(amt.toLocaleString("vi-VN"))}
                                >
                                    {amt / 1000}k
                                </button>
                            ))}
                        </div>
                        <button type="submit" className="dash-btn dash-btn-primary" style={{ width: "100%" }} disabled={depositing || !depositAmount}>
                            {depositing ? "Đang xử lý..." : "Xác nhận nạp tiền"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Transaction History */}
            <div className="dash-card">
                <div style={{ padding: "1.5rem", borderBottom: "1px solid var(--border)" }}>
                    <h2 style={{ fontSize: "1.125rem", fontWeight: 700 }}>Lịch sử giao dịch</h2>
                </div>
                {transactions.length === 0 ? (
                    <div className="dash-empty">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" color="var(--text-muted)">
                            <rect x="2" y="5" width="20" height="14" rx="2" />
                            <line x1="2" y1="10" x2="22" y2="10" />
                        </svg>
                        <p>Chưa có giao dịch nào.</p>
                    </div>
                ) : (
                    <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", minWidth: "600px", borderCollapse: "collapse" }}>
                            <thead>
                                <tr style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)", textAlign: "left", fontSize: "0.875rem", color: "var(--text-muted)" }}>
                                    <th style={{ padding: "1rem 1.5rem", fontWeight: 600 }}>Mã GD</th>
                                    <th style={{ padding: "1rem 1.5rem", fontWeight: 600 }}>Thời gian</th>
                                    <th style={{ padding: "1rem 1.5rem", fontWeight: 600 }}>Loại</th>
                                    <th style={{ padding: "1rem 1.5rem", fontWeight: 600 }}>Số tiền</th>
                                    <th style={{ padding: "1rem 1.5rem", fontWeight: 600 }}>Số dư mới</th>
                                    <th style={{ padding: "1rem 1.5rem", fontWeight: 600 }}>Nội dung</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((t) => (
                                    <tr key={t.id} style={{ borderBottom: "1px solid var(--border)", fontSize: "0.9375rem" }}>
                                        <td style={{ padding: "1rem 1.5rem", color: "var(--text-muted)", fontSize: "0.8125rem" }}>
                                            {t.id.slice(-8).toUpperCase()}
                                        </td>
                                        <td style={{ padding: "1rem 1.5rem" }}>
                                            {new Date(t.createdAt).toLocaleString("vi-VN")}
                                        </td>
                                        <td style={{ padding: "1rem 1.5rem" }}>
                                            <span className="dash-badge" style={{
                                                background: t.type === "DEPOSIT" ? "rgba(34, 197, 94, 0.15)" : "rgba(239, 68, 68, 0.15)",
                                                color: t.type === "DEPOSIT" ? "#15803d" : "#b91c1c"
                                            }}>
                                                {t.type === "DEPOSIT" ? "Nạp tiền" : "Thanh toán"}
                                            </span>
                                        </td>
                                        <td style={{ padding: "1rem 1.5rem", fontWeight: 600, color: t.type === "DEPOSIT" ? "#15803d" : "#b91c1c" }}>
                                            {t.type === "DEPOSIT" ? "+" : "-"}{t.amount.toLocaleString("vi-VN")}
                                        </td>
                                        <td style={{ padding: "1rem 1.5rem", fontWeight: 600 }}>
                                            {t.balanceAfter.toLocaleString("vi-VN")}
                                        </td>
                                        <td style={{ padding: "1rem 1.5rem", color: "var(--text-muted)" }}>
                                            {t.description}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
}
