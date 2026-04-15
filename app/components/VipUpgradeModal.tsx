"use client";

import { useState, useEffect } from "react";

export default function VipUpgradeModal({ 
    isOpen, 
    onClose, 
    onConfirm, 
    packages 
}: { 
    isOpen: boolean; 
    onClose: () => void; 
    onConfirm: (packageId: string) => void;
    packages: any[];
}) {
    const [selectedPkg, setSelectedPkg] = useState<string>("");

    // Reset selection when opened
    useEffect(() => {
        if (isOpen && packages.length > 0 && !selectedPkg) {
            setSelectedPkg(packages[0].id);
        }
    }, [isOpen, packages, selectedPkg]);

    if (!isOpen) return null;

    return (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", zIndex: 1050, display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem" }}>
            <div className="dash-form-card" style={{ width: "100%", maxWidth: "500px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.25rem", margin: 0 }}>Chọn Gói Bẩy Tin VIP</h3>
                    <button onClick={onClose} style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "var(--text-muted)" }}>&times;</button>
                </div>
                
                <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
                    Nâng cấp tin tuyển dụng lên VIP để tiếp cận được nhiều ứng viên hơn. Tin VIP sẽ được hiển thị ưu tiên với huy hiệu nổi bật.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                    {packages.length === 0 ? (
                        <div style={{ padding: "1rem", background: "#f8f9fa", borderRadius: "8px", textAlign: "center", color: "var(--text-muted)" }}>
                            Hệ thống chưa cấu hình gói VIP nào.
                        </div>
                    ) : (
                        packages.map((pkg) => (
                            <label 
                                key={pkg.id} 
                                style={{ 
                                    display: "flex", 
                                    alignItems: "center", 
                                    padding: "1rem", 
                                    border: `2px solid ${selectedPkg === pkg.id ? "var(--primary)" : "var(--border)"}`, 
                                    borderRadius: "8px", 
                                    cursor: "pointer", 
                                    background: selectedPkg === pkg.id ? "var(--bg)" : "transparent",
                                    transition: "all 0.2s"
                                }}
                            >
                                <input 
                                    type="radio" 
                                    name="vip_package" 
                                    value={pkg.id} 
                                    checked={selectedPkg === pkg.id} 
                                    onChange={() => setSelectedPkg(pkg.id)}
                                    style={{ marginRight: "1rem", transform: "scale(1.2)" }}
                                />
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 600, fontSize: "1rem" }}>{pkg.name}</div>
                                    <div style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>Thời gian hiển thị: {pkg.days} ngày</div>
                                </div>
                                <div style={{ fontWeight: 700, color: "#b91c1c" }}>
                                    {pkg.price.toLocaleString("vi-VN")} đ
                                </div>
                            </label>
                        ))
                    )}
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                    <button className="dash-btn" onClick={onClose}>Hủy bỏ</button>
                    <button 
                        className="dash-btn dash-btn-primary" 
                        onClick={() => selectedPkg && onConfirm(selectedPkg)}
                        disabled={!selectedPkg}
                    >
                        Thanh toán & Nâng cấp
                    </button>
                </div>
            </div>
        </div>
    );
}
