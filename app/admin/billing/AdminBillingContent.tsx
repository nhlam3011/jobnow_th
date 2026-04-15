"use client";

import { useState } from "react";
import { saveVipPackage, deleteVipPackage, updateCompanyBalance } from "@/app/actions/admin-billing";
import { useRouter } from "next/navigation";

export default function AdminBillingContent({
    initialTransactions,
    initialWallets,
    initialPackages,
    stats
}: {
    initialTransactions: any[];
    initialWallets: any[];
    initialPackages: any[];
    stats: { totalDeposit: number; totalSpent: number };
}) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<"TRANSACTIONS" | "WALLETS" | "PACKAGES">("TRANSACTIONS");

    // Package Edit State
    const [pkgForm, setPkgForm] = useState({ id: "", name: "", days: 7, price: 500000, isActive: true });
    const [showPkgModal, setShowPkgModal] = useState(false);

    // Balance Edit State
    const [walletForm, setWalletForm] = useState({ companyId: "", amount: 0, type: "DEPOSIT", description: "" });
    const [showWalletModal, setShowWalletModal] = useState(false);

    const handleSavePackage = async (e: React.FormEvent) => {
        e.preventDefault();
        await saveVipPackage(pkgForm);
        setShowPkgModal(false);
        router.refresh();
    };

    const handleUpdateBalance = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateCompanyBalance(walletForm.companyId, walletForm.amount, walletForm.type as any, walletForm.description);
        setShowWalletModal(false);
        router.refresh();
    };

    return (
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="dash-topbar" style={{ marginBottom: "2rem" }}>
                <div>
                    <h1 className="dash-page-title">Quản lý Thanh toán & Gói VIP</h1>
                    <p className="dash-page-subtitle">Kiểm soát dòng tiền, ví công ty và cấu hình giá trị gói</p>
                </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", borderBottom: "1px solid var(--border)", marginBottom: "2rem" }}>
                <button
                    className={`dash-btn ${activeTab === "TRANSACTIONS" ? "dash-btn-primary" : ""}`}
                    onClick={() => setActiveTab("TRANSACTIONS")}
                    style={activeTab !== "TRANSACTIONS" ? { background: "transparent", color: "var(--text)" } : {}}
                >
                    Lịch sử Giao dịch
                </button>
                <button
                    className={`dash-btn ${activeTab === "WALLETS" ? "dash-btn-primary" : ""}`}
                    onClick={() => setActiveTab("WALLETS")}
                    style={activeTab !== "WALLETS" ? { background: "transparent", color: "var(--text)" } : {}}
                >
                    Ví Công Ty
                </button>
                <button
                    className={`dash-btn ${activeTab === "PACKAGES" ? "dash-btn-primary" : ""}`}
                    onClick={() => setActiveTab("PACKAGES")}
                    style={activeTab !== "PACKAGES" ? { background: "transparent", color: "var(--text)" } : {}}
                >
                    Cấu hình Gói VIP
                </button>
            </div>

            <div className="dash-stats" style={{ gridTemplateColumns: "repeat(2, 1fr)", marginBottom: "2rem" }}>
                <div className="dash-stat-card" style={{ borderLeft: "4px solid #10b981" }}>
                    <div className="dash-stat-header">
                        <div className="dash-stat-icon" style={{ background: "rgba(16,185,129,0.1)" }}>
                            <svg width="24" height="24" fill="none" stroke="#10b981" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                        </div>
                        <span className="dash-stat-label">Tổng dòng tiền nạp vào</span>
                    </div>
                    <div className="dash-stat-value" style={{ color: "#10b981" }}>{stats.totalDeposit.toLocaleString("vi-VN")} đ</div>
                </div>
                <div className="dash-stat-card" style={{ borderLeft: "4px solid #f59e0b" }}>
                    <div className="dash-stat-header">
                        <div className="dash-stat-icon" style={{ background: "rgba(245,158,11,0.1)" }}>
                            <svg width="24" height="24" fill="none" stroke="#f59e0b" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <span className="dash-stat-label">Tổng giá trị tiêu thụ VIP</span>
                    </div>
                    <div className="dash-stat-value" style={{ color: "#f59e0b" }}>{stats.totalSpent.toLocaleString("vi-VN")} đ</div>
                </div>
            </div>

            {activeTab === "TRANSACTIONS" && (
                <div className="dash-card" style={{ padding: "1.5rem" }}>
                    <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Giao dịch toàn hệ thống</h2>
                    <table className="dash-table" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
                                <th style={{ padding: "1rem" }}>Mã GD / Thời gian</th>
                                <th style={{ padding: "1rem" }}>Công ty</th>
                                <th style={{ padding: "1rem" }}>Loại</th>
                                <th style={{ padding: "1rem" }}>Số tiền</th>
                                <th style={{ padding: "1rem" }}>Ghi chú</th>
                            </tr>
                        </thead>
                        <tbody>
                            {initialTransactions.map((t) => (
                                <tr key={t.id} style={{ borderBottom: "1px solid var(--border)" }}>
                                    <td style={{ padding: "1rem" }}>
                                        <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>{t.id.slice(-8).toUpperCase()}</div>
                                        <div>{new Date(t.createdAt).toLocaleString("vi-VN")}</div>
                                    </td>
                                    <td style={{ padding: "1rem" }}>{t.company.name}</td>
                                    <td style={{ padding: "1rem" }}>
                                        <span className="dash-badge" style={{ background: t.type === "DEPOSIT" ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)", color: t.type === "DEPOSIT" ? "#15803d" : "#b91c1c" }}>
                                            {t.type === "DEPOSIT" ? "Nạp tiền" : "Trừ tiền"}
                                        </span>
                                    </td>
                                    <td style={{ padding: "1rem", fontWeight: 600 }}>
                                        {t.type === "DEPOSIT" ? "+" : "-"}{t.amount.toLocaleString("vi-VN")}
                                    </td>
                                    <td style={{ padding: "1rem", color: "var(--text-muted)" }}>{t.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === "WALLETS" && (
                <div className="dash-card" style={{ padding: "1.5rem" }}>
                    <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Số dư Công ty</h2>
                    <table className="dash-table" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
                                <th style={{ padding: "1rem" }}>Tên Công ty</th>
                                <th style={{ padding: "1rem" }}>Slug</th>
                                <th style={{ padding: "1rem" }}>Số dư hiện tại</th>
                                <th style={{ padding: "1rem", textAlign: "right" }}>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {initialWallets.map((w) => (
                                <tr key={w.id} style={{ borderBottom: "1px solid var(--border)" }}>
                                    <td style={{ padding: "1rem", fontWeight: 500 }}>{w.name}</td>
                                    <td style={{ padding: "1rem", color: "var(--text-muted)" }}>{w.slug}</td>
                                    <td style={{ padding: "1rem", fontWeight: 700, color: "#0369a1" }}>{w.balance.toLocaleString("vi-VN")} đ</td>
                                    <td style={{ padding: "1rem", textAlign: "right" }}>
                                        <button className="dash-btn" onClick={() => {
                                            setWalletForm({ companyId: w.id, amount: 0, type: "DEPOSIT", description: "Admin tặng/trừ tiền" });
                                            setShowWalletModal(true);
                                        }}>
                                            Chỉnh sửa ví
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === "PACKAGES" && (
                <div className="dash-card" style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                        <h2 style={{ fontSize: "1.25rem" }}>Danh sách Gói VIP</h2>
                        <button className="dash-btn dash-btn-primary" onClick={() => {
                            setPkgForm({ id: "", name: "Gói mới", days: 1, price: 100000, isActive: true });
                            setShowPkgModal(true);
                        }}>+ Thêm Gói Mới</button>
                    </div>
                    <table className="dash-table" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
                                <th style={{ padding: "1rem" }}>Tên Gói</th>
                                <th style={{ padding: "1rem" }}>Thời hạn</th>
                                <th style={{ padding: "1rem" }}>Giá tiền</th>
                                <th style={{ padding: "1rem" }}>Trạng thái</th>
                                <th style={{ padding: "1rem", textAlign: "right" }}>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {initialPackages.map((p) => (
                                <tr key={p.id} style={{ borderBottom: "1px solid var(--border)" }}>
                                    <td style={{ padding: "1rem", fontWeight: 600 }}>{p.name}</td>
                                    <td style={{ padding: "1rem" }}>{p.days} ngày</td>
                                    <td style={{ padding: "1rem", color: "#b91c1c", fontWeight: 600 }}>{p.price.toLocaleString("vi-VN")} đ</td>
                                    <td style={{ padding: "1rem" }}>
                                        <span className="dash-badge" style={{ background: p.isActive ? "rgba(34,197,94,0.1)" : "rgba(100,100,100,0.1)", color: p.isActive ? "#15803d" : "#555" }}>
                                            {p.isActive ? "Hoạt động" : "Tạm khóa"}
                                        </span>
                                    </td>
                                    <td style={{ padding: "1rem", textAlign: "right" }}>
                                        <button className="dash-btn" style={{ marginRight: "0.5rem" }} onClick={() => {
                                            setPkgForm(p);
                                            setShowPkgModal(true);
                                        }}>Sửa</button>
                                        <button className="dash-btn" style={{ color: "red", background: "#fee2e2", border: "none" }} onClick={async () => {
                                            if (confirm("Chắc chắn xóa gói này?")) {
                                                await deleteVipPackage(p.id);
                                                router.refresh();
                                            }
                                        }}>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Modals */}
            {showPkgModal && (
                <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className="dash-form-card" style={{ width: "400px" }}>
                        <h3 style={{ marginBottom: "1rem" }}>{pkgForm.id ? "Sửa Gói VIP" : "Thêm Gói Mới"}</h3>
                        <form onSubmit={handleSavePackage}>
                            <div className="dash-form-group">
                                <label className="dash-form-label">Tên gói</label>
                                <input type="text" className="dash-input" value={pkgForm.name} onChange={e => setPkgForm({...pkgForm, name: e.target.value})} required />
                            </div>
                            <div className="dash-form-group">
                                <label className="dash-form-label">Thời gian (Số ngày)</label>
                                <input type="number" className="dash-input" value={pkgForm.days} onChange={e => setPkgForm({...pkgForm, days: parseInt(e.target.value)})} required min="1" />
                            </div>
                            <div className="dash-form-group">
                                <label className="dash-form-label">Giá tiền (VND)</label>
                                <input type="number" className="dash-input" value={pkgForm.price} onChange={e => setPkgForm({...pkgForm, price: parseInt(e.target.value)})} required min="0" />
                            </div>
                            <div className="dash-form-group" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <input type="checkbox" checked={pkgForm.isActive} onChange={e => setPkgForm({...pkgForm, isActive: e.target.checked})} id="isAct" />
                                <label htmlFor="isAct" className="dash-form-label" style={{ marginBottom: 0 }}>Đang hoạt động</label>
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "2rem" }}>
                                <button type="button" className="dash-btn" onClick={() => setShowPkgModal(false)}>Hủy</button>
                                <button type="submit" className="dash-btn dash-btn-primary">Lưu lại</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {showWalletModal && (
                <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", zIndex: 1000, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className="dash-form-card" style={{ width: "400px" }}>
                        <h3 style={{ marginBottom: "1rem" }}>Điều chỉnh Ví Công ty</h3>
                        <form onSubmit={handleUpdateBalance}>
                            <div className="dash-form-group">
                                <label className="dash-form-label">Hành động</label>
                                <select className="dash-input" value={walletForm.type} onChange={e => setWalletForm({...walletForm, type: e.target.value})}>
                                    <option value="DEPOSIT">Cộng tiền (+)</option>
                                    <option value="DEDUCTION">Trừ tiền (-)</option>
                                </select>
                            </div>
                            <div className="dash-form-group">
                                <label className="dash-form-label">Số tiền (VND)</label>
                                <input type="number" className="dash-input" value={walletForm.amount} onChange={e => setWalletForm({...walletForm, amount: parseInt(e.target.value)})} required min="1" />
                            </div>
                            <div className="dash-form-group">
                                <label className="dash-form-label">Lý do</label>
                                <input type="text" className="dash-input" value={walletForm.description} onChange={e => setWalletForm({...walletForm, description: e.target.value})} required />
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "2rem" }}>
                                <button type="button" className="dash-btn" onClick={() => setShowWalletModal(false)}>Hủy</button>
                                <button type="submit" className="dash-btn dash-btn-primary">Xác nhận</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
