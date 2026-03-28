"use client";

import { useState, useMemo } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {
    CalculatorIcon,
    ArrowPathIcon,
    InformationCircleIcon,
    BanknotesIcon,
    ShieldCheckIcon,
    WalletIcon,
    UserCircleIcon,
    PresentationChartBarIcon
} from "@heroicons/react/24/outline";

interface CalculationResult {
    gross: number;
    net: number;
    socialInsurance: number;
    healthInsurance: number;
    unemploymentInsurance: number;
    personalDeduction: number;
    dependentDeduction: number;
    taxableIncome: number;
    personalIncomeTax: number;
    takeHome: number;
    taxBrackets: { rate: number; amount: number; taxableAmount: number; label: string }[];
}

const SOCIAL_RATE = 0.08;
const HEALTH_RATE = 0.015;
const UNEMPLOY_RATE = 0.01;
const BASIC_WAGE = 2340000;
const MAX_SI_HI = BASIC_WAGE * 20;

const REGIONS = [
    { id: 1, label: "Vùng I", minWage: 5310000, desc: "Hà Nội, TP.HCM, Hải Phòng..." },
    { id: 2, label: "Vùng II", minWage: 4730000, desc: "Đà Nẵng, Cần Thơ, Bắc Ninh..." },
    { id: 3, label: "Vùng III", minWage: 4140000, desc: "Các thành phố còn lại..." },
    { id: 4, label: "Vùng IV", minWage: 3700000, desc: "Các huyện/xã còn lại..." }
];

const PERSONAL_DEDUCTION = 15500000;
const DEPENDENT_DEDUCTION = 6200000;

const TAX_BRACKETS = [
    { limit: 10000000, rate: 0.05, label: "Đến 10 triệu VNĐ" },
    { limit: 30000000, rate: 0.10, label: "Trên 10 đến 30 triệu VNĐ" },
    { limit: 60000000, rate: 0.20, label: "Trên 30 đến 60 triệu VNĐ" },
    { limit: 100000000, rate: 0.30, label: "Trên 60 đến 100 triệu VNĐ" },
    { limit: Infinity, rate: 0.35, label: "Trên 100 triệu VNĐ" }
];

export default function SalaryCalculatorPage() {
    const [salaryInput, setSalaryInput] = useState("");
    const [salaryType, setSalaryType] = useState<"gross" | "net">("gross");
    const [dependents, setDependents] = useState(0);
    const [regionIndex, setRegionIndex] = useState(0);

    const result = useMemo(() => {
        const raw = parseFloat(salaryInput.replace(/[^0-9]/g, ""));
        if (!raw || isNaN(raw)) return null;

        const currentRegion = REGIONS[regionIndex];
        let gross = raw;
        if (salaryType === "net") {
            // Net to Gross iteration
            let low = raw;
            let high = raw * 3;
            for (let i = 0; i < 50; i++) {
                const mid = (low + high) / 2;
                const trial = calculateDetailed(mid, dependents, currentRegion.minWage).takeHome;
                if (Math.abs(trial - raw) < 1) { gross = mid; break; }
                if (trial > raw) high = mid; else low = mid;
            }
        }
        return calculateDetailed(gross, dependents, currentRegion.minWage);
    }, [salaryInput, salaryType, dependents, regionIndex]);

    function calculateDetailed(gross: number, depsCount: number, minWage: number): CalculationResult {
        const siBase = Math.min(gross, MAX_SI_HI);
        const uiBase = Math.min(gross, minWage * 20);

        const si = siBase * SOCIAL_RATE;
        const hi = siBase * HEALTH_RATE;
        const ui = uiBase * UNEMPLOY_RATE;

        const totalInsurance = si + hi + ui;
        const perDeduct = PERSONAL_DEDUCTION;
        const depDeduct = depsCount * DEPENDENT_DEDUCTION;

        const taxable = Math.max(0, gross - totalInsurance - perDeduct - depDeduct);

        let pit = 0;
        let remaining = taxable;
        let lastLimit = 0;
        const bracketsApplied: { rate: number, amount: number, taxableAmount: number, label: string }[] = [];

        for (const b of TAX_BRACKETS) {
            const range = b.limit - lastLimit;
            const amountInBracket = Math.min(remaining, range);
            if (amountInBracket <= 0) break;

            const taxInBracket = amountInBracket * b.rate;
            pit += taxInBracket;
            bracketsApplied.push({ 
                rate: b.rate * 100, 
                amount: taxInBracket,
                taxableAmount: amountInBracket,
                label: b.label
            });

            remaining -= amountInBracket;
            lastLimit = b.limit;
        }

        return {
            gross,
            net: gross - totalInsurance - pit,
            socialInsurance: si,
            healthInsurance: hi,
            unemploymentInsurance: ui,
            personalDeduction: perDeduct,
            dependentDeduction: depDeduct,
            taxableIncome: taxable,
            personalIncomeTax: pit,
            takeHome: gross - totalInsurance - pit,
            taxBrackets: bracketsApplied
        };
    }

    const formatVND = (v: number) => new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 }).format(v);

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />

            <main style={{ flex: 1, padding: "4rem 1rem" }}>
                <div className="container-xl">
                    <div className="salary-calc-wrapper">
                        {/* Header */}
                        <div className="calc-header">
                            <div className="calc-icon-box">
                                <BanknotesIcon className="w-8 h-8 text-white" />
                            </div>
                            <h1>Tính lương Net / Gross 2024</h1>
                            <p>Công cụ tính toán thuế thu nhập cá nhân và bảo hiểm xã hội chính xác nhất.</p>
                        </div>

                        <div className="calc-grid">
                            {/* Input Card */}
                            <div className="calc-card input-pane">
                                <div className="pane-title">Cài đặt tính lương</div>

                                <div className="type-toggle">
                                    <button className={salaryType === 'gross' ? 'active' : ''} onClick={() => setSalaryType('gross')}>LƯƠNG GROSS</button>
                                    <button className={salaryType === 'net' ? 'active' : ''} onClick={() => setSalaryType('net')}>LƯƠNG NET</button>
                                </div>

                                <div className="input-group">
                                    <label>Khu vực làm việc (Vùng)</label>
                                    <div className="region-selector">
                                        {REGIONS.map((r, idx) => (
                                            <button
                                                key={r.id}
                                                className={`region-btn ${idx === regionIndex ? 'active' : ''}`}
                                                onClick={() => setRegionIndex(idx)}
                                            >
                                                <div className="r-label">{r.label}</div>
                                                <div className="r-min">{formatVND(r.minWage)}</div>
                                            </button>
                                        ))}
                                    </div>
                                    <p className="region-hint">{REGIONS[regionIndex].desc}</p>
                                </div>

                                <div className="input-group">
                                    <label>Số tiền lương ({salaryType === 'gross' ? 'Gross' : 'Net'})</label>
                                    <div className="input-with-icon">
                                        <WalletIcon className="w-5 h-5" />
                                        <input
                                            type="text"
                                            value={salaryInput}
                                            onChange={(e) => {
                                                const v = e.target.value.replace(/[^0-9]/g, "");
                                                setSalaryInput(v ? parseInt(v).toLocaleString("vi-VN") : "");
                                            }}
                                            placeholder="Nhập số tiền..."
                                        />
                                        <span>VNĐ</span>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label>Người phụ thuộc</label>
                                    <div className="dependent-stepper">
                                        <button onClick={() => setDependents(Math.max(0, dependents - 1))}>-</button>
                                        <div className="dep-val">
                                            <UserCircleIcon className="w-5 h-5" />
                                            <span>{dependents} người</span>
                                        </div>
                                        <button onClick={() => setDependents(dependents + 1)}>+</button>
                                    </div>
                                    <div className="dep-hint">Mỗi người giảm trừ {formatVND(DEPENDENT_DEDUCTION)}</div>
                                </div>

                                <button className="reset-btn" onClick={() => { setSalaryInput(""); setDependents(0); }}>
                                    <ArrowPathIcon className="w-5 h-5" /> Làm mới
                                </button>
                            </div>

                            {/* Result Area */}
                            <div className="result-area">
                                {result ? (
                                    <div className="result-layout">
                                        {/* Result Summary */}
                                        <div className="result-hero-card">
                                            <div className="hero-main">
                                                <label>THỰC NHẬN (LƯƠNG NET)</label>
                                                <div className="net-salary-display">{formatVND(result.takeHome)}</div>
                                            </div>
                                            <div className="hero-divider" />
                                            <div className="hero-sub">
                                                <div className="sub-item">
                                                    <span>Lương Gross</span>
                                                    <strong>{formatVND(result.gross)}</strong>
                                                </div>
                                                <div className="sub-item">
                                                    <span>Tổng Bảo hiểm</span>
                                                    <strong>{formatVND(result.socialInsurance + result.healthInsurance + result.unemploymentInsurance)}</strong>
                                                </div>
                                                <div className="sub-item">
                                                    <span>Thuế TNCN</span>
                                                    <strong>{formatVND(result.personalIncomeTax)}</strong>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Detailed Table */}
                                        <div className="calc-card detail-table">
                                            <div className="pane-title"><PresentationChartBarIcon className="w-5 h-5" /> Diễn giải chi tiết</div>
                                            <div className="table-row">
                                                <span>Lương Gross</span>
                                                <strong>{formatVND(result.gross)}</strong>
                                            </div>
                                            <div className="table-row group">
                                                <span>Bảo hiểm xã hội (8%)</span>
                                                <span className="minus">-{formatVND(result.socialInsurance)}</span>
                                            </div>
                                            <div className="table-row group">
                                                <span>Bảo hiểm y tế (1.5%)</span>
                                                <span className="minus">-{formatVND(result.healthInsurance)}</span>
                                            </div>
                                            <div className="table-row group">
                                                <span>Bảo hiểm thất nghiệp (1%)</span>
                                                <span className="minus">-{formatVND(result.unemploymentInsurance)}</span>
                                            </div>
                                            <div className="table-divider" />
                                            <div className="table-row">
                                                <span>Thu nhập trước thuế</span>
                                                <strong>{formatVND(result.gross - (result.socialInsurance + result.healthInsurance + result.unemploymentInsurance))}</strong>
                                            </div>
                                            <div className="table-row group">
                                                <span>Giảm trừ gia cảnh bản thân</span>
                                                <span className="minus">-{formatVND(result.personalDeduction)}</span>
                                            </div>
                                            <div className="table-row group">
                                                <span>Giảm trừ người phụ thuộc</span>
                                                <span className="minus">-{formatVND(result.dependentDeduction)}</span>
                                            </div>
                                            <div className="table-row">
                                                <span>Thu nhập chịu thuế</span>
                                                <strong>{formatVND(result.taxableIncome)}</strong>
                                            </div>
                                            <div className="table-row group danger">
                                                <span>Thuế thu nhập cá nhân (*)</span>
                                                <span className="minus">-{formatVND(result.personalIncomeTax)}</span>
                                            </div>
                                            <div className="final-net-row">
                                                <span>LƯƠNG NET (TAKE-HOME)</span>
                                                <span className="net-val">{formatVND(result.takeHome)}</span>
                                            </div>
                                        </div>

                                        {/* Tax Brackets Breakdown Table */}
                                        <div className="calc-card tax-details">
                                            <div className="pane-title"><ShieldCheckIcon className="w-5 h-5" /> Chi tiết thuế thu nhập cá nhân (VNĐ)</div>
                                            <div className="tax-table-container scrollbar-hide">
                                                <table className="tax-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Mức chịu thuế</th>
                                                            <th className="text-center">Thuế suất</th>
                                                            <th className="text-right">Lương chịu thuế</th>
                                                            <th className="text-right">Tiền nộp</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {result.taxBrackets.length > 0 ? result.taxBrackets.map((b, i) => (
                                                            <tr key={i}>
                                                                <td>{b.label}</td>
                                                                <td className="text-center">{b.rate}%</td>
                                                                <td className="text-right">{formatVND(b.taxableAmount)}</td>
                                                                <td className="text-right">{formatVND(b.amount)}</td>
                                                            </tr>
                                                        )) : (
                                                            <tr>
                                                                <td colSpan={4} className="no-tax-state">Chưa đạt ngưỡng chịu thuế TNCN</td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="result-placeholder">
                                        <CalculatorIcon className="w-16 h-16" />
                                        <h3>Bắt đầu tính lương ngay</h3>
                                        <p>Nhập mức lương của bạn vào ô bên trái để xem bảng diễn giải chi tiết thu nhập thực tế sau thuế.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="calc-footer-info">
                            <InformationCircleIcon className="w-5 h-5" />
                            <div className="footer-text">
                                <strong>Căn cứ: Nghị định 293/2025, 73/2024 & Nghị quyết 110/2025/UBTVQH15</strong>
                                <p>Cập nhật mức giảm trừ gia cảnh mới nhất 15.5 Tr/tháng (Nghị quyết 110/2025). Hệ thống áp dụng mức Lương cơ sở 2.34 Tr/tháng & Lương tối thiểu vùng theo Nghị định 293/2025 (Vùng I: 5.31 Tr/tháng).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <style jsx>{`
                .salary-calc-wrapper { max-width: 1200px; margin: 0 auto; position: relative; }
                .calc-header { text-align: center; margin-bottom: 3.5rem; }
                .calc-icon-box { 
                    width: 70px; height: 70px; border-radius: 20px; 
                    background: linear-gradient(135deg, var(--primary), var(--primary-dark)); 
                    display: flex; align-items: center; justify-content: center; 
                    margin: 0 auto 1.5rem; box-shadow: 0 10px 20px rgba(var(--primary-rgb), 0.3);
                }
                .calc-header h1 { font-size: 2.25rem; font-weight: 800; color: var(--text); margin: 0.5rem 0; }
                .calc-header p { color: var(--text-muted); font-size: 1.1rem; }

                .calc-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: flex-start; }
                @media (min-width: 1024px) { .calc-grid { grid-template-columns: 380px 1fr; } }

                .calc-card { background: var(--bg-card); border: 1.5px solid var(--border); border-radius: 28px; padding: 2rem; box-shadow: var(--shadow-sm); }
                .pane-title { font-size: 0.95rem; font-weight: 800; color: var(--text); padding-bottom: 1.5rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 0.625rem; }

                .type-toggle { display: flex; background: var(--tag-bg); padding: 0.35rem; border-radius: 14px; gap: 0.25rem; margin-bottom: 2rem; }
                .type-toggle button { flex: 1; border: none; padding: 0.75rem; border-radius: 10px; font-weight: 700; font-size: 0.8rem; cursor: pointer; transition: all 0.2s; color: var(--text-muted); background: transparent; }
                .type-toggle button.active { background: var(--bg-card); color: var(--primary); box-shadow: var(--shadow-sm); }

                .region-selector { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; margin-bottom: 0.75rem; }
                .region-btn { border: 1.5px solid var(--border); background: var(--bg); padding: 0.625rem; border-radius: 12px; cursor: pointer; transition: all 0.2s; text-align: left; }
                .region-btn.active { border-color: var(--primary); background: rgba(var(--primary-rgb), 0.05); }
                .r-label { font-size: 0.7rem; font-weight: 800; color: var(--text-muted); margin-bottom: 0.15rem; }
                .region-btn.active .r-label { color: var(--primary); }
                .r-min { font-size: 0.85rem; font-weight: 700; color: var(--text); }
                .region-hint { font-size: 0.7rem; color: var(--text-muted); line-height: 1.4; }

                .input-group { margin-bottom: 1.75rem; }
                .input-group label { display: block; font-size: 0.75rem; font-weight: 800; color: var(--text-muted); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.02em; }
                
                .input-with-icon { position: relative; display: flex; align-items: center; }
                .input-with-icon :global(svg) { position: absolute; left: 1.125rem; color: var(--primary); }
                .input-with-icon input { width: 100%; padding: 1rem 3.5rem 1rem 3rem; background: var(--bg); border: 1.5px solid var(--border); border-radius: 14px; font-size: 1.125rem; font-weight: 700; color: var(--text); transition: border-color 0.2s; }
                .input-with-icon input:focus { outline: none; border-color: var(--primary); }
                .input-with-icon span { position: absolute; right: 1.125rem; font-weight: 800; font-size: 0.75rem; color: var(--text-muted); }

                .dependent-stepper { display: flex; align-items: center; background: var(--bg); border: 1.5px solid var(--border); border-radius: 14px; padding: 0.5rem; }
                .dependent-stepper button { width: 44px; height: 44px; border: none; background: var(--bg-card); color: var(--text); border-radius: 10px; font-size: 1.25rem; cursor: pointer; transition: all 0.2s; }
                .dependent-stepper button:hover { background: var(--primary); color: white; }
                .dep-val { flex: 1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-weight: 700; color: var(--text); }
                .dep-hint { font-size: 0.7rem; color: var(--text-muted); margin-top: 0.5rem; text-align: center; }

                .reset-btn { width: 100%; margin-top: 1rem; padding: 1rem; border: none; background: transparent; color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-weight: 700; cursor: pointer; }
                .reset-btn:hover { color: var(--primary); }

                .result-layout { display: flex; flex-direction: column; gap: 1.5rem; }
                .result-hero-card { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); border-radius: 32px; padding: 2.5rem; color: white; box-shadow: 0 20px 40px -10px rgba(var(--primary-rgb), 0.3); }
                .hero-main label { font-size: 0.65rem; font-weight: 800; letter-spacing: 0.1em; opacity: 0.8; }
                .net-salary-display { font-size: 3rem; font-weight: 900; margin: 0.5rem 0 1.5rem; line-height: 1; letter-spacing: -0.02em; }
                .hero-divider { height: 1.5px; background: rgba(255,255,255,0.15); margin-bottom: 1.5rem; }
                .hero-sub { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
                .sub-item span { display: block; font-size: 0.65rem; font-weight: 700; opacity: 0.7; margin-bottom: 0.25rem; }
                .sub-item strong { font-size: 0.95rem; font-weight: 800; }
                
                @media (max-width: 640px) { 
                    .hero-sub { grid-template-columns: repeat(2, 1fr); gap: 1rem 0.75rem; } 
                    .net-salary-display { font-size: 2.25rem; margin-bottom: 1rem; }
                    .result-hero-card { padding: 1.75rem; border-radius: 24px; }
                }
                @media (max-width: 380px) { .hero-sub { grid-template-columns: 1fr; } }

                .detail-table { padding: 2.5rem; }
                @media (max-width: 640px) { .detail-table { padding: 1.5rem 1rem; } .calc-card { padding: 1.5rem 1rem; } }
                .table-row { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; font-size: 0.95rem; color: var(--text); }
                .table-row.group { font-size: 0.85rem; color: var(--text-muted); padding: 0.4rem 0 0.4rem 1.25rem; position: relative; }
                .table-row.group:before { content: ''; position: absolute; left: 0; top: 50%; width: 0.75rem; height: 1.5px; background: var(--border); }
                .table-row strong { font-weight: 800; }
                .minus { color: #ef4444; font-weight: 700; }
                .table-divider { height: 1.5px; background: var(--border); margin: 1rem 0; }
                .danger { color: #ef4444 !important; }
                .final-net-row { margin-top: 1.5rem; padding-top: 1.5rem; border-top: 2px solid var(--primary); display: flex; justify-content: space-between; align-items: center; }
                .final-net-row span { font-weight: 900; }
                .final-net-row .net-val { font-size: 1.5rem; color: var(--primary); }

                .bracket-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 1rem; }
                .bracket-item { background: var(--bg); padding: 1rem; border-radius: 16px; border: 1px solid var(--border); }
                .bracket-info { display: flex; justify-content: space-between; margin-bottom: 0.5rem; }
                .bracket-name { font-size: 0.65rem; font-weight: 800; color: var(--text-muted); }
                .bracket-rate { font-size: 0.65rem; font-weight: 800; color: var(--primary); }
                .bracket-val { font-size: 0.95rem; font-weight: 800; color: var(--text); }
                .tax-table-container { overflow-x: auto; margin-top: 1rem; border-radius: 16px; border: 1px solid var(--border); }
                .tax-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; }
                .tax-table th { background: #f8fafc; padding: 1rem; text-align: left; font-weight: 800; color: var(--text-muted); border-bottom: 1.5px solid var(--border); }
                .tax-table td { padding: 1rem; border-bottom: 1px solid var(--border); color: var(--text); }
                .tax-table tr:last-child td { border-bottom: none; }
                .text-center { text-align: center; }
                .text-right { text-align: right; }
                .tax-table tr:hover { background: #f1f5f9; }
                
                .no-tax-state { text-align: center; color: var(--text-muted); font-size: 0.85rem; padding: 2rem; width: 100%; }

                .result-placeholder { padding: 5rem; text-align: center; background: var(--bg-card); border-radius: 28px; border: 1.5px dashed var(--border); color: var(--text-muted); height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; }
                .result-placeholder h3 { margin: 1.5rem 0 0.5rem; color: var(--text); }

                .calc-footer-info { margin-top: 2rem; display: flex; gap: 0.75rem; padding: 1.5rem; background: rgba(var(--primary-rgb), 0.05); border-radius: 20px; font-size: 0.85rem; color: var(--text-muted); align-items: flex-start; border: 1px solid rgba(var(--primary-rgb), 0.1); }
                .footer-text strong { display: block; color: var(--primary); margin-bottom: 0.25rem; font-size: 0.8rem; letter-spacing: 0.02em; }
                .footer-text p { margin: 0; line-height: 1.5; }
            `}</style>
        </div>
    );
}
