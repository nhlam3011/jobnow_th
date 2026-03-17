"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { CalculatorIcon, ArrowPathIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

interface CalculationResult {
    gross: number;
    net: number;
    taxableIncome: number;
    personalIncomeTax: number;
    socialInsurance: number;
    healthInsurance: number;
    unemploymentInsurance: number;
    takeHome: number;
}

const SOCIAL_INSURANCE_RATE = 0.08;
const HEALTH_INSURANCE_RATE = 0.015;
const UNEMPLOYMENT_INSURANCE_RATE = 0.01;
const PERSONAL_DEDUCTION = 11000000;
const DEPENDENT_DEDUCTION = 4400000;

function calculateTax(income: number, dependents: number): number {
    if (income <= 0) return 0;
    const taxableIncome = income - PERSONAL_DEDUCTION - (dependents * DEPENDENT_DEDUCTION);
    if (taxableIncome <= 0) return 0;

    const brackets = [
        { max: 5000000, rate: 0.05, deduct: 0 },
        { max: 10000000, rate: 0.10, deduct: 250000 },
        { max: 18000000, rate: 0.15, deduct: 750000 },
        { max: 32000000, rate: 0.20, deduct: 1650000 },
        { max: 52000000, rate: 0.25, deduct: 3250000 },
        { max: 78000000, rate: 0.30, deduct: 5850000 },
        { max: 100000000, rate: 0.35, deduct: 9850000 },
        { max: Infinity, rate: 0.40, deduct: 14850000 },
    ];

    for (const bracket of brackets) {
        if (taxableIncome <= bracket.max) {
            return taxableIncome * bracket.rate - bracket.deduct;
        }
    }
    return taxableIncome * 0.40 - 14850000;
}

function calculateFromGross(gross: number, dependents: number): CalculationResult {
    const socialInsurance = gross * SOCIAL_INSURANCE_RATE;
    const healthInsurance = gross * HEALTH_INSURANCE_RATE;
    const unemploymentInsurance = gross * UNEMPLOYMENT_INSURANCE_RATE;
    const taxableIncome = gross - socialInsurance - healthInsurance - unemploymentInsurance - PERSONAL_DEDUCTION - (dependents * DEPENDENT_DEDUCTION);
    const personalIncomeTax = Math.max(0, calculateTax(taxableIncome > 0 ? taxableIncome : 0, dependents));
    const takeHome = gross - socialInsurance - healthInsurance - unemploymentInsurance - personalIncomeTax;

    return { gross, net: gross, taxableIncome: Math.max(0, taxableIncome), personalIncomeTax, socialInsurance, healthInsurance, unemploymentInsurance, takeHome: Math.max(0, takeHome) };
}

function calculateFromNet(targetNet: number, dependents: number): CalculationResult {
    let low = targetNet;
    let high = targetNet * 3;
    let gross = targetNet;

    for (let i = 0; i < 100; i++) {
        gross = (low + high) / 2;
        const socialInsurance = gross * SOCIAL_INSURANCE_RATE;
        const healthInsurance = gross * HEALTH_INSURANCE_RATE;
        const unemploymentInsurance = gross * UNEMPLOYMENT_INSURANCE_RATE;
        const taxableIncome = gross - socialInsurance - healthInsurance - unemploymentInsurance - PERSONAL_DEDUCTION - (dependents * DEPENDENT_DEDUCTION);
        const personalIncomeTax = Math.max(0, calculateTax(taxableIncome > 0 ? taxableIncome : 0, dependents));
        const takeHome = gross - socialInsurance - healthInsurance - unemploymentInsurance - personalIncomeTax;
        if (Math.abs(takeHome - targetNet) < 100) break;
        if (takeHome > targetNet) high = gross;
        else low = gross;
    }

    const socialInsurance = gross * SOCIAL_INSURANCE_RATE;
    const healthInsurance = gross * HEALTH_INSURANCE_RATE;
    const unemploymentInsurance = gross * UNEMPLOYMENT_INSURANCE_RATE;
    const taxableIncome = gross - socialInsurance - healthInsurance - unemploymentInsurance - PERSONAL_DEDUCTION - (dependents * DEPENDENT_DEDUCTION);
    const personalIncomeTax = Math.max(0, calculateTax(taxableIncome > 0 ? taxableIncome : 0, dependents));

    return { gross, net: targetNet, taxableIncome: Math.max(0, taxableIncome), personalIncomeTax, socialInsurance, healthInsurance, unemploymentInsurance, takeHome: targetNet };
}

function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 }).format(amount);
}

export default function SalaryCalculatorPage() {
    const [salaryType, setSalaryType] = useState<"gross" | "net">("gross");
    const [salary, setSalary] = useState<string>("");
    const [dependents, setDependents] = useState<number>(0);
    const [result, setResult] = useState<CalculationResult | null>(null);

    const handleCalculate = () => {
        const salaryValue = parseFloat(salary.replace(/[^0-9]/g, ""));
        if (isNaN(salaryValue) || salaryValue <= 0) return;
        if (salaryType === "gross") setResult(calculateFromGross(salaryValue, dependents));
        else setResult(calculateFromNet(salaryValue, dependents));
    };

    const handleReset = () => { setSalary(""); setDependents(0); setResult(null); };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <main style={{ flex: 1, padding: "2rem 0", background: "var(--bg)" }}>
                <div className="container-xl">
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "64px", height: "64px", borderRadius: "16px", background: "var(--primary)", marginBottom: "1rem" }}>
                                <CalculatorIcon className="w-8 h-8" style={{ color: "white" }} />
                            </div>
                            <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>Tính lương Net / Gross</h1>
                            <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>Chuyển đổi giữa lương Gross và lương Net chính xác theo quy định</p>
                        </div>

                        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", padding: "2rem" }}>
                            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", background: "var(--bg)", padding: "0.25rem", borderRadius: "8px" }}>
                                <button onClick={() => { setSalaryType("gross"); setResult(null); }} style={{ flex: 1, padding: "0.75rem 1rem", border: "none", borderRadius: "6px", background: salaryType === "gross" ? "var(--primary)" : "transparent", color: salaryType === "gross" ? "white" : "var(--text-muted)", fontWeight: 600, cursor: "pointer" }}>Lương Gross</button>
                                <button onClick={() => { setSalaryType("net"); setResult(null); }} style={{ flex: 1, padding: "0.75rem 1rem", border: "none", borderRadius: "6px", background: salaryType === "net" ? "var(--primary)" : "transparent", color: salaryType === "net" ? "white" : "var(--text-muted)", fontWeight: 600, cursor: "pointer" }}>Lương Net</button>
                            </div>

                            <div style={{ display: "grid", gap: "1.25rem" }}>
                                <div>
                                    <label style={{ display: "block", fontWeight: 600, color: "var(--text)", marginBottom: "0.5rem" }}>{salaryType === "gross" ? "Lương Gross (VNĐ)" : "Lương Net mong muốn (VNĐ)"}</label>
                                    <input type="text" value={salary} onChange={(e) => { const value = e.target.value.replace(/[^0-9]/g, ""); setSalary(value ? parseInt(value).toLocaleString("vi-VN") : ""); }} placeholder="Nhập số tiền..." style={{ width: "100%", padding: "0.875rem 1rem", fontSize: "1rem", border: "1px solid var(--border)", borderRadius: "8px", background: "var(--bg)", color: "var(--text)", outline: "none" }} />
                                </div>
                                <div>
                                    <label style={{ display: "block", fontWeight: 600, color: "var(--text)", marginBottom: "0.5rem" }}>Số người phụ thuộc</label>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                        <button onClick={() => setDependents(Math.max(0, dependents - 1))} style={{ width: "40px", height: "40px", border: "1px solid var(--border)", borderRadius: "8px", background: "var(--bg)", color: "var(--text)", fontSize: "1.25rem", cursor: "pointer" }}>-</button>
                                        <span style={{ minWidth: "40px", textAlign: "center", fontWeight: 600, fontSize: "1.125rem", color: "var(--text)" }}>{dependents}</span>
                                        <button onClick={() => setDependents(dependents + 1)} style={{ width: "40px", height: "40px", border: "1px solid var(--border)", borderRadius: "8px", background: "var(--bg)", color: "var(--text)", fontSize: "1.25rem", cursor: "pointer" }}>+</button>
                                        <span style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>(Giảm trừ {formatCurrency(DEPENDENT_DEDUCTION)}/người/tháng)</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
                                <button onClick={handleCalculate} className="btn-primary" style={{ flex: 1, padding: "0.875rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}><CalculatorIcon className="w-5 h-5" />Tính toán</button>
                                <button onClick={handleReset} style={{ padding: "0.875rem 1.5rem", border: "1px solid var(--border)", borderRadius: "8px", background: "transparent", color: "var(--text-muted)", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}><ArrowPathIcon className="w-5 h-5" />Làm mới</button>
                            </div>

                            {result && (
                                <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
                                    <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text)", marginBottom: "1.25rem" }}>Kết quả chi tiết</h3>
                                    <div style={{ background: "var(--primary)", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.5rem" }}>
                                        <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem", marginBottom: "0.25rem" }}>{salaryType === "gross" ? "Lương Net thực nhận" : "Lương Gross cần chi trả"}</div>
                                        <div style={{ color: "white", fontSize: "2rem", fontWeight: 700 }}>{formatCurrency(result.takeHome)}</div>
                                    </div>
                                    <div style={{ display: "grid", gap: "0.75rem" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 1rem", background: "var(--bg)", borderRadius: "8px" }}><span style={{ color: "var(--text-muted)" }}>Lương Gross</span><span style={{ fontWeight: 600, color: "var(--text)" }}>{formatCurrency(result.gross)}</span></div>
                                        <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 1rem", background: "var(--bg)", borderRadius: "8px" }}><span style={{ color: "var(--text-muted)" }}>Bảo hiểm xã hội (8%)</span><span style={{ fontWeight: 600, color: "var(--danger, #EF4444)" }}>-{formatCurrency(result.socialInsurance)}</span></div>
                                        <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 1rem", background: "var(--bg)", borderRadius: "8px" }}><span style={{ color: "var(--text-muted)" }}>Bảo hiểm y tế (1.5%)</span><span style={{ fontWeight: 600, color: "var(--danger, #EF4444)" }}>-{formatCurrency(result.healthInsurance)}</span></div>
                                        <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 1rem", background: "var(--bg)", borderRadius: "8px" }}><span style={{ color: "var(--text-muted)" }}>Bảo hiểm thất nghiệp (1%)</span><span style={{ fontWeight: 600, color: "var(--danger, #EF4444)" }}>-{formatCurrency(result.unemploymentInsurance)}</span></div>
                                        <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 1rem", background: "var(--bg)", borderRadius: "8px" }}><span style={{ color: "var(--text-muted)" }}>Thuế TNCN</span><span style={{ fontWeight: 600, color: "var(--danger, #EF4444)" }}>-{formatCurrency(result.personalIncomeTax)}</span></div>
                                    </div>
                                    <div style={{ marginTop: "1.5rem", padding: "1rem", background: "var(--tag-bg)", borderRadius: "8px", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                        <InformationCircleIcon className="w-5 h-5" style={{ color: "var(--primary)", flexShrink: 0, marginTop: "0.125rem" }} />
                                        <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}><strong style={{ color: "var(--text)" }}>Lưu ý:</strong> Kết quả tính toán mang tính chất tham khảo. Mức thuế và bảo hiểm có thể thay đổi theo quy định.</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
