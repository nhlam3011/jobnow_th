"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createTemplate, updateTemplate } from "@/app/actions/cv";
import CVRenderer from "./CVRenderer";
import {
    ViewColumnsIcon,
    Bars3BottomLeftIcon,
    Bars3BottomRightIcon,
    Bars4Icon
} from "@heroicons/react/24/outline";

// Layout presets
const LAYOUT_PRESETS = [
    { id: "sidebar-left", label: "Sidebar trái", icon: <Bars3BottomLeftIcon className="w-8 h-8" /> },
    { id: "sidebar-right", label: "Sidebar phải", icon: <Bars3BottomRightIcon className="w-8 h-8" /> },
    { id: "top-header", label: "Header trên", icon: <Bars4Icon className="w-8 h-8" /> },
    { id: "two-column", label: "Hai cột", icon: <ViewColumnsIcon className="w-8 h-8" /> },
];

const FONT_OPTIONS = [
    { value: "'Inter', sans-serif", label: "Inter" },
    { value: "'Roboto', sans-serif", label: "Roboto" },
    { value: "'Playfair Display', serif", label: "Playfair Display" },
    { value: "'Georgia', serif", label: "Georgia" },
    { value: "'Montserrat', sans-serif", label: "Montserrat" },
    { value: "'Lato', sans-serif", label: "Lato" },
    { value: "'Open Sans', sans-serif", label: "Open Sans" },
];

const CATEGORY_OPTIONS = ["Modern", "Classic", "Creative", "Minimal", "Professional"];

const COLOR_PRESETS = [
    { primary: "#0056b3", secondary: "#FFFFFF", label: "Classic Blue" },
    { primary: "#059669", secondary: "#FFFFFF", label: "Emerald" },
    { primary: "#7c3aed", secondary: "#FFFFFF", label: "Violet" },
    { primary: "#dc2626", secondary: "#FFFFFF", label: "Red" },
    { primary: "#d97706", secondary: "#FFFFFF", label: "Amber" },
    { primary: "#0891b2", secondary: "#FFFFFF", label: "Cyan" },
    { primary: "#1e293b", secondary: "#FFFFFF", label: "Slate Dark" },
    { primary: "#be185d", secondary: "#FFFFFF", label: "Pink" },
];

const SAMPLE_DATA = {
    avatar: "",
    name: "Nguyễn Văn A",
    fullName: "Nguyễn Văn A",
    jobTitle: "Frontend Developer",
    email: "nguyenvana@email.com",
    phone: "0987 654 321",
    location: "TP. Hồ Chí Minh",
    linkedin: "linkedin.com/in/nguyenvana",
    summary: "Lập trình viên Frontend với 3 năm kinh nghiệm trong phát triển web ứng dụng React và TypeScript. Đam mê xây dựng giao diện người dùng đẹp mắt, hiệu năng cao.",
    skills: ["React", "TypeScript", "Next.js", "CSS", "Git", "Figma"],
    hobbies: ["Đọc sách", "Du lịch"],
    experience: [
        { company: "Công ty ABC Tech", position: "Senior Frontend Dev", startDate: "06/2023", endDate: "Hiện tại", description: "Phát triển và maintain hệ thống quản lý nội bộ bằng React/Next.js." },
        { company: "Startup XYZ", position: "Frontend Developer", startDate: "01/2021", endDate: "05/2023", description: "Xây dựng landing page và dashboard cho sản phẩm SaaS." },
    ],
    education: [
        { school: "Đại học Bách Khoa TP.HCM", degree: "Cử nhân", field: "Khoa học Máy tính", startYear: "2017", endYear: "2021" },
    ],
};

interface TemplateDesignerProps {
    mode: "create" | "edit";
    initialData?: any;
    templateId?: string;
}

export default function AdminTemplateDesigner({ mode, initialData, templateId }: TemplateDesignerProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [previewScale, setPreviewScale] = useState(0.55);

    const [name, setName] = useState(initialData?.name || "");
    const [description, setDescription] = useState(initialData?.description || "");
    const [category, setCategory] = useState(initialData?.category || "Modern");
    const [thumbnailUrl, setThumbnailUrl] = useState(initialData?.thumbnailUrl || "");

    const [layoutConfig, setLayoutConfig] = useState(initialData?.layoutConfig || {
        layout: "sidebar-left",
        sections: ["contact", "skills", "hobbies", "objective", "experience", "education"],
        labels: {
            skills: "Kỹ năng",
            hobbies: "Sở thích",
            objective: "Mục tiêu nghề nghiệp",
            experience: "Kinh nghiệm làm việc",
            education: "Học vấn",
            contact: "Thông tin liên hệ"
        }
    });

    const [styleConfig, setStyleConfig] = useState(initialData?.styleConfig || {
        primaryColor: "#0056b3",
        secondaryColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        fontSize: 10,
        lineHeight: 1.6,
        bgImage: "none",
        avatarRadius: "50%",
        sectionSpacing: "20px",
        tagRadius: "4px",
        sidebarWidth: "35%",
        bgOpacity: 1,
        customCss: "",
    });

    const [sampleData, setSampleData] = useState(SAMPLE_DATA);
    const [activeTab, setActiveTab] = useState<"info" | "style" | "layout">("style");

    const layoutRef = useRef<HTMLDivElement>(null);
    const styleRef = useRef<HTMLDivElement>(null);
    const typographyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth;
            if (w < 768) setPreviewScale(0.38);
            else if (w < 1200) setPreviewScale(0.48);
            else setPreviewScale(0.55);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleSave = async () => {
        if (!name.trim()) { alert("Vui lòng nhập tên mẫu CV"); return; }
        setLoading(true);
        try {
            const data = { name, description, category, thumbnailUrl, layoutConfig, styleConfig };
            let res;
            if (mode === "create") {
                res = await createTemplate(data);
            } else {
                res = await updateTemplate(templateId!, data);
            }
            if (res.success) {
                alert(mode === "create" ? "Tạo mẫu CV thành công!" : "Cập nhật thành công!");
                router.push("/admin/cv-templates");
                router.refresh();
            } else {
                alert(res.error || "Có lỗi xảy ra");
            }
        } catch (e) {
            alert("Lỗi kết nối");
        } finally {
            setLoading(false);
        }
    };

    const handleConfigChange = (type: "style" | "layout", field: string, value: any) => {
        if (type === "style") {
            setStyleConfig((prev: any) => ({ ...prev, [field]: value }));
        } else {
            setLayoutConfig((prev: any) => ({ ...prev, [field]: value }));
        }
    };

    // Cập nhật dữ liệu mẫu khi Admin sửa trực tiếp trên CV Preview
    const handleSampleDataChange = (field: string, value: string, index?: number, subfield?: string) => {
        setSampleData((prev: any) => {
            const newData = { ...prev };
            if (index !== undefined && subfield && Array.isArray(newData[field])) {
                newData[field] = [...newData[field]];
                newData[field][index] = { ...newData[field][index], [subfield]: value };
            } else if (index !== undefined && Array.isArray(newData[field])) {
                newData[field] = [...newData[field]];
                newData[field][index] = value;
            } else {
                newData[field] = value;
            }
            return newData;
        });
    };

    const templateData = { layoutConfig, styleConfig };

    const inputStyle: React.CSSProperties = {
        width: "100%", padding: "0.625rem 0.875rem", borderRadius: "8px",
        border: "1px solid var(--border)", background: "var(--bg-card)",
        color: "var(--text)", fontSize: "0.875rem", outline: "none",
    };
    const labelStyle: React.CSSProperties = {
        display: "block", fontSize: "0.8125rem", fontWeight: 600,
        color: "var(--text)", marginBottom: "0.375rem",
    };

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }} className="lg:!grid-cols-[420px_1fr]">

            {/* ===== LEFT: Config Panel (Pro Toolbox) ===== */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                background: "var(--bg-card)",
                borderRadius: "16px",
                border: "1px solid var(--border)",
                overflow: "hidden",
                height: "fit-content",
                position: "sticky",
                top: "1.5rem"
            }}>
                {/* Tab Headers */}
                <div style={{
                    display: "flex",
                    borderBottom: "1px solid var(--border)",
                    background: "var(--bg)",
                    padding: "0.5rem"
                }}>
                    {[
                        { id: "info", label: "Thông tin" },
                        { id: "style", label: "Thiết kế & Font" },
                        { id: "layout", label: "Bố cục CV" }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            style={{
                                flex: 1,
                                padding: "0.75rem 0.5rem",
                                border: "none",
                                background: activeTab === tab.id ? "var(--bg-card)" : "transparent",
                                color: activeTab === tab.id ? "var(--primary)" : "var(--text-muted)",
                                fontWeight: activeTab === tab.id ? 700 : 500,
                                fontSize: "0.875rem",
                                borderRadius: "8px",
                                cursor: "pointer",
                                transition: "all 0.2s",
                                boxShadow: activeTab === tab.id ? "var(--shadow-sm)" : "none"
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div style={{ padding: "1.5rem", maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>

                    {/* --- TAB 1: THÔNG TIN CƠ BẢN --- */}
                    {activeTab === "info" && (
                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            <div>
                                <label style={labelStyle}>Tên mẫu CV *</label>
                                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="VD: Modern Minimalist" style={inputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>Mô tả</label>
                                <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Mô tả ngắn..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                            </div>
                            <div>
                                <label style={labelStyle}>Phân loại</label>
                                <select value={category} onChange={e => setCategory(e.target.value)} style={inputStyle}>
                                    {CATEGORY_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                            <div>
                                <label style={labelStyle}>URL ảnh thumbnail</label>
                                <input type="text" value={thumbnailUrl} onChange={e => setThumbnailUrl(e.target.value)} placeholder="https://..." style={inputStyle} />
                            </div>
                        </div>
                    )}

                    {/* --- TAB 2: THIẾT KẾ & FONT --- */}
                    {activeTab === "style" && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                            {/* Font Selection */}
                            <div>
                                <label style={labelStyle}>FONT CHỮ</label>
                                <select
                                    value={styleConfig.fontFamily}
                                    onChange={e => setStyleConfig((p: any) => ({ ...p, fontFamily: e.target.value }))}
                                    style={{ ...inputStyle, fontWeight: 500 }}
                                >
                                    {FONT_OPTIONS.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
                                </select>
                            </div>

                            {/* Font Size Slider */}
                            <div ref={typographyRef}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                                    <label style={labelStyle}>CỠ CHỮ</label>
                                </div>
                                <div style={{ position: "relative" }}>
                                    <input
                                        type="range" min={8} max={14} step={0.5}
                                        value={styleConfig.fontSize}
                                        onChange={e => setStyleConfig((p: any) => ({ ...p, fontSize: parseFloat(e.target.value) }))}
                                        style={{ width: "100%", accentColor: "var(--primary)", height: "6px", background: "rgba(0,0,0,0.05)", borderRadius: "3px" }}
                                    />
                                    <div style={{ position: "absolute", top: "50%", left: 0, right: 0, transform: "translateY(-50%)", display: "flex", justifyContent: "space-between", pointerEvents: "none", padding: "0 2px" }}>
                                        {[0, 1, 2, 3, 4, 5, 6].map(i => <div key={i} style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ccc" }} />)}
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                                    <span>Nhỏ</span>
                                    <span>Trung bình</span>
                                    <span>Siêu lớn</span>
                                </div>
                            </div>

                            {/* Line Height Slider */}
                            <div>
                                <label style={labelStyle}>KHOẢNG CÁCH DÒNG</label>
                                <div style={{ position: "relative" }}>
                                    <input
                                        type="range" min={1.0} max={2.5} step={0.1}
                                        value={styleConfig.lineHeight || 1.6}
                                        onChange={e => setStyleConfig((p: any) => ({ ...p, lineHeight: parseFloat(e.target.value) }))}
                                        style={{ width: "100%", accentColor: "var(--primary)", height: "6px" }}
                                    />
                                    <div style={{ position: "absolute", top: "50%", left: 0, right: 0, transform: "translateY(-50%)", display: "flex", justifyContent: "space-between", pointerEvents: "none", padding: "0 2px" }}>
                                        {[0, 1, 2, 3, 4, 5, 6].map(i => <div key={i} style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ccc" }} />)}
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                                    <span>1.0</span>
                                    <span>2.0</span>
                                </div>
                            </div>

                            {/* Corner Radius & Spacing Tools */}
                            <div className="dash-grid-2" style={{ gap: "1.5rem" }}>
                                <div>
                                    <label style={labelStyle}>BO GÓC ẢNH</label>
                                    <input
                                        type="range" min={0} max={50} step={1}
                                        value={parseInt(styleConfig.avatarRadius) || 0}
                                        onChange={e => setStyleConfig((p: any) => ({ ...p, avatarRadius: `${e.target.value}%` }))}
                                        style={{ width: "100%", accentColor: "var(--primary)", height: "6px" }}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle}>BO GÓC TAGS</label>
                                    <input
                                        type="range" min={0} max={20} step={1}
                                        value={parseInt(styleConfig.tagRadius) || 0}
                                        onChange={e => setStyleConfig((p: any) => ({ ...p, tagRadius: `${e.target.value}px` }))}
                                        style={{ width: "100%", accentColor: "var(--primary)", height: "6px" }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={labelStyle}>KHOẢNG CÁCH MỤC</label>
                                <input
                                    type="range" min={10} max={40} step={2}
                                    value={parseInt(styleConfig.sectionSpacing) || 20}
                                    onChange={e => setStyleConfig((p: any) => ({ ...p, sectionSpacing: `${e.target.value}px` }))}
                                    style={{ width: "100%", accentColor: "var(--primary)", height: "6px" }}
                                />
                            </div>

                            <div>
                                <label style={labelStyle}>ĐỘ MỜ HÌNH NỀN</label>
                                <input
                                    type="range" min={0.1} max={1.0} step={0.1}
                                    value={styleConfig.bgOpacity ?? 1}
                                    onChange={e => setStyleConfig((p: any) => ({ ...p, bgOpacity: parseFloat(e.target.value) }))}
                                    style={{ width: "100%", accentColor: "var(--primary)", height: "6px" }}
                                />
                            </div>

                            {/* Theme Color */}
                            <div ref={styleRef}>
                                <label style={labelStyle}>MÀU CHỦ ĐỀ</label>
                                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                                    {COLOR_PRESETS.slice(0, 4).map(cp => (
                                        <button
                                            key={cp.label}
                                            onClick={() => setStyleConfig((p: any) => ({ ...p, primaryColor: cp.primary }))}
                                            style={{
                                                width: "32px", height: "32px", borderRadius: "50%", cursor: "pointer",
                                                background: cp.primary,
                                                border: styleConfig.primaryColor === cp.primary ? "2px solid var(--text)" : "2px solid transparent",
                                                padding: 0
                                            }}
                                        />
                                    ))}
                                </div>
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                                    <input
                                        type="color"
                                        value={styleConfig.primaryColor}
                                        onChange={e => setStyleConfig((p: any) => ({ ...p, primaryColor: e.target.value }))}
                                        style={{ width: "40px", height: "40px", border: "1px solid var(--border)", borderRadius: "8px", cursor: "pointer", padding: "2px" }}
                                    />
                                    <input
                                        type="text"
                                        value={styleConfig.primaryColor}
                                        onChange={e => setStyleConfig((p: any) => ({ ...p, primaryColor: e.target.value }))}
                                        style={{ ...inputStyle, flex: 1, textAlign: "center", fontFamily: "monospace" }}
                                    />
                                </div>
                            </div>

                            {/* Background thumbnails */}
                            <div>
                                <label style={labelStyle}>HÌNH NỀN CV</label>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.5rem" }}>
                                    {[
                                        { value: "none", label: "Màu trơn" },
                                        { value: "linear-gradient(135deg, rgba(238,242,243,1) 0%, rgba(142,158,171,1) 100%)", label: "Grad 1" },
                                        { value: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)", label: "Grad 2" },
                                        { value: "linear-gradient(to right, #fa709a 0%, #fee140 100%)", label: "Grad 3" },
                                        { value: "url('https://www.transparenttextures.com/patterns/cubes.png')", label: "Pattern" },
                                    ].map(bg => (
                                        <div
                                            key={bg.value}
                                            onClick={() => setStyleConfig((p: any) => ({ ...p, bgImage: bg.value }))}
                                            style={{
                                                width: "100%", aspectRatio: "0.7", borderRadius: "4px", cursor: "pointer",
                                                background: bg.value === "none" ? styleConfig.secondaryColor : bg.value,
                                                backgroundSize: "cover",
                                                border: styleConfig.bgImage === bg.value ? "2px solid var(--primary)" : "1px solid var(--border)",
                                                transition: "all 0.2s"
                                            }}
                                            title={bg.label}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Custom CSS */}
                            <div>
                                <label style={labelStyle}>CSS TÙY CHỈNH</label>
                                <textarea
                                    value={styleConfig.customCss || ""}
                                    onChange={e => setStyleConfig((p: any) => ({ ...p, customCss: e.target.value }))}
                                    placeholder=".cv-page { ... }"
                                    rows={4}
                                    style={{ ...inputStyle, resize: "vertical", fontFamily: "monospace", fontSize: "0.75rem" }}
                                />
                            </div>
                        </div>
                    )}

                    {/* --- TAB 3: BỐ CỤC CV --- */}
                    {activeTab === "layout" && (
                        <div ref={layoutRef} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            <div>
                                <label style={labelStyle}>BỐ CỤC TỔNG THỂ</label>
                                <div className="dash-grid-2" style={{ gap: "0.75rem" }}>
                                    {LAYOUT_PRESETS.map(lp => (
                                        <button
                                            key={lp.id}
                                            onClick={() => setLayoutConfig((p: any) => ({ ...p, layout: lp.id }))}
                                            style={{
                                                padding: "0.75rem 0.5rem", borderRadius: "10px", cursor: "pointer",
                                                border: layoutConfig.layout === lp.id ? "2px solid var(--primary)" : "1px solid var(--border)",
                                                background: layoutConfig.layout === lp.id ? "rgba(var(--primary-rgb), 0.05)" : "var(--bg)",
                                                transition: "all 0.2s", textAlign: "center"
                                            }}
                                        >
                                            <div style={{ fontSize: "1.25rem", marginBottom: "0.25rem", opacity: layoutConfig.layout === lp.id ? 1 : 0.5 }}>{lp.icon}</div>
                                            <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text)" }}>{lp.label}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label style={labelStyle}>CÁC MỤC HIỂN THỊ</label>
                                <div style={{ display: "grid", gap: "0.5rem" }}>
                                    {[
                                        { id: "objective", label: "Mục tiêu nghề nghiệp" },
                                        { id: "experience", label: "Kinh nghiệm làm việc" },
                                        { id: "education", label: "Học vấn" },
                                        { id: "skills", label: "Kỹ năng" },
                                        { id: "hobbies", label: "Sở thích & khác" },
                                        { id: "contact", label: "Thông tin liên hệ" }
                                    ].map(item => (
                                        <label key={item.id} style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.75rem",
                                            padding: "0.75rem",
                                            background: "var(--bg)",
                                            borderRadius: "8px",
                                            cursor: "pointer",
                                            border: "1px solid var(--border)"
                                        }}>
                                            <input
                                                type="checkbox"
                                                checked={layoutConfig.sections?.includes(item.id)}
                                                onChange={(e) => {
                                                    const sections = layoutConfig.sections || [];
                                                    if (e.target.checked) {
                                                        setLayoutConfig((p: any) => ({ ...p, sections: [...sections, item.id] }));
                                                    } else {
                                                        setLayoutConfig((p: any) => ({ ...p, sections: sections.filter((s: string) => s !== item.id) }));
                                                    }
                                                }}
                                            />
                                            <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>{item.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                {/* Footer Buttons */}
                <div style={{ padding: "1.25rem", borderTop: "1px solid var(--border)", display: "flex", gap: "0.75rem", background: "var(--bg)" }}>
                    <button className="dash-btn" style={{ flex: 1 }} onClick={() => router.back()}>
                        Hủy
                    </button>
                    <button className="dash-btn dash-btn-primary" style={{ flex: 2 }} onClick={handleSave} disabled={loading}>
                        {loading ? "Đang lưu..." : (mode === "create" ? "Tạo mẫu" : "Lưu thay đổi")}
                    </button>
                </div>
            </div>

            {/* ===== RIGHT: Live Preview ===== */}
            <div className="dash-card" style={{ padding: "1.25rem", borderRadius: "12px", overflow: "hidden" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text)", textAlign: "center" }}>
                    Xem trước kết quả
                </h3>
                <div style={{
                    display: "flex", justifyContent: "center", overflow: "hidden",
                    background: "#e5e7eb", borderRadius: "8px", padding: "1rem",
                }}>
                    <div style={{
                        width: `${794 * previewScale}px`,
                        height: `${1123 * previewScale}px`,
                        overflow: "hidden",
                    }}>
                        <div
                            onClick={(e: any) => {
                                // Gỡ bỏ logic auto-tab switch theo yêu cầu của người dùng v3
                            }}
                            style={{
                                width: "794px", minHeight: "1123px",
                                transform: `scale(${previewScale})`,
                                transformOrigin: "top left",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                                cursor: "crosshair"
                            }}
                        >
                            <CVRenderer
                                data={sampleData}
                                template={templateData}
                                readOnly={false}
                                onDataChange={handleSampleDataChange}
                                onConfigChange={handleConfigChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
