"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createTemplate, updateTemplate } from "@/app/actions/cv";
import { toPng } from "html-to-image";
import CVRenderer from "./CVRenderer";
import {
    ViewColumnsIcon,
    Bars3BottomLeftIcon,
    Bars3BottomRightIcon,
    Bars4Icon,
    ExclamationCircleIcon,
    PlusIcon,
    Bars2Icon,
    QueueListIcon,
    Square2StackIcon,
    SwatchIcon,
    DocumentTextIcon,
    SquaresPlusIcon,
    PhotoIcon,
    ArrowPathIcon,
    CheckIcon,
    TrashIcon,
    Bars3Icon,
    ArrowsUpDownIcon,
    Square3Stack3DIcon
} from "@heroicons/react/24/outline";
import { SectionOrderManager } from "@/app/components/cv/SectionOrderManager";

// Layout presets
const LAYOUT_PRESETS = [
    { id: "sidebar-left", label: "Sidebar trái", icon: <Bars3BottomLeftIcon className="w-8 h-8" /> },
    { id: "sidebar-right", label: "Sidebar phải", icon: <Bars3BottomRightIcon className="w-8 h-8" /> },
    { id: "top-header", label: "Header trên", icon: <Bars4Icon className="w-8 h-8" /> },
    { id: "two-column", label: "Hai cột", icon: <ViewColumnsIcon className="w-8 h-8" /> },
    { id: "minimal-center", label: "Tối giản giữa", icon: <Bars2Icon className="w-8 h-8" /> },
    { id: "split-pro", label: "Chia đôi 50/50", icon: <Square2StackIcon className="w-8 h-8" /> },
];

const COLOR_PRESETS = [
    { primary: "#0056b3", secondary: "#FFFFFF", label: "Classic Blue" },
    { primary: "#059669", secondary: "#FFFFFF", label: "Emerald" },
    { primary: "#7c3aed", secondary: "#FFFFFF", label: "Violet" },
    { primary: "#dc2626", secondary: "#FFFFFF", label: "Red" },
    { primary: "#d97706", secondary: "#FFFFFF", label: "Amber" },
    { primary: "#0891b2", secondary: "#FFFFFF", label: "Cyan" },
];

const CATEGORY_OPTIONS = ["Modern", "Classic", "Creative", "Minimal", "Professional"];

const FONT_OPTIONS = [
    { value: "'Inter', sans-serif", label: "Inter (Hiện đại)" },
    { value: "'Roboto', sans-serif", label: "Roboto (Tiêu chuẩn)" },
    { value: "'Montserrat', sans-serif", label: "Montserrat (Chuyên nghiệp)" },
    { value: "'Open Sans', sans-serif", label: "Open Sans (Dễ đọc)" },
    { value: "'Playfair Display', serif", label: "Playfair Display (Sang trọng)" },
    { value: "'Lora', serif", label: "Lora (Thanh lịch)" },
    { value: "'Oswald', sans-serif", label: "Oswald (Mạnh mẽ)" },
    { value: "'Quicksand', sans-serif", label: "Quicksand (Thân thiện)" },
];

const SAMPLE_DATA = {
    avatar: "https://ui-avatars.com/api/?name=Admin&background=0056b3&color=fff&size=300",
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
    const [activeTab, setActiveTab] = useState("design");
    const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
    const [selectionTab, setSelectionTab] = useState("header"); // header, body, block

    const [name, setName] = useState(initialData?.name || "");
    const [description, setDescription] = useState(initialData?.description || "");
    const [category, setCategory] = useState(initialData?.category || "Modern");
    const [thumbnailUrl, setThumbnailUrl] = useState(initialData?.thumbnailUrl || "");

    const defaultLayoutConfig = {
        layout: "sidebar-left",
        sections: ["contact", "skills", "hobbies", "objective", "experience", "education"],
        labels: {
            skills: "Kỹ năng",
            hobbies: "Sở thích",
            objective: "Mục tiêu nghề nghiệp",
            experience: "Kinh nghiệm làm việc",
            education: "Học vấn",
            contact: "Thông tin liên hệ"
        },
        contactLabels: {
            phone: "SĐT:",
            email: "Email:",
            location: "Địa chỉ:",
            linkedin: "LinkedIn:"
        }
    };

    const [layoutConfig, setLayoutConfig] = useState(() => {
        const initial = initialData?.layoutConfig || {};
        return {
            ...defaultLayoutConfig,
            ...initial,
            labels: { ...defaultLayoutConfig.labels, ...(initial.labels || {}) }
        };
    });

    const defaultStyleConfig = {
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
        headingLineWidth: "100%",
        pagePadding: "40px",
        sidebarBg: "", 
        sidebarText: "",
        avatarBorderWidth: 4,
        avatarShadow: "0 4px 12px rgba(0,0,0,0.1)",
        headingStyle: "solid",
        headingLineHeight: 2,
        numberingStyle: "bullet",
        sectionStyles: {} as Record<string, any>
    };

    const [styleConfig, setStyleConfig] = useState(() => {
        const initial = initialData?.styleConfig || {};
        return {
            ...defaultStyleConfig,
            ...initial,
            sectionStyles: { ...defaultStyleConfig.sectionStyles, ...(initial.sectionStyles || {}) }
        };
    });

    const [sampleData, setSampleData] = useState(SAMPLE_DATA);
    const cvPreviewRef = useRef<HTMLDivElement>(null);

    const handleSectionSelect = (id: string) => {
        setSelectedSectionId(id);
        if (["objective", "experience", "education", "skills", "hobbies"].includes(id)) {
            setActiveTab("content");
        } else {
            setActiveTab("design");
        }
    };

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

        let finalThumbnail = thumbnailUrl;
        if (cvPreviewRef.current) {
            try {
                const options = {
                    width: 794,
                    height: 1123,
                    cacheBust: true,
                    includeStyle: true,
                    pixelRatio: 1,
                    skipFonts: true,
                    fontEmbedCSS: "",
                    style: {
                        transform: "scale(1)",
                        transformOrigin: "top left",
                        boxShadow: "none"
                    },
                    filter: (node: any) => {
                        // Skip external stylesheets to avoid SecurityError
                        if (node.tagName === 'LINK') return false;
                        
                        const isImg = node.tagName === 'IMG';
                        if (isImg && node.src && !node.src.startsWith(window.location.origin) && !node.complete) {
                            return false; 
                        }
                        return true;
                    }
                };
                
                try {
                    await toPng(cvPreviewRef.current, { ...options, skipFonts: true });
                } catch (e) {
                    console.warn("Priming failed, continuing...", e);
                }

                const dataUrl = await toPng(cvPreviewRef.current, options);
                finalThumbnail = dataUrl;
            } catch (err: any) {
                console.error("Auto thumbnail capture error details:", err);
            }
        }

        try {
            const data = { name, description, category, thumbnailUrl: finalThumbnail, layoutConfig, styleConfig };
            let res;
            if (mode === "create") {
                res = await createTemplate(data);
            } else {
                res = await updateTemplate(templateId!, data);
            }
            if (res.success) {
                alert(mode === "create" ? "Tạo mẫu CV thành công!" : "Cập nhật thành công!");
                router.push("/admin/cv-templates");
                setTimeout(() => router.refresh(), 500);
            } else {
                alert(res.error || "Có lỗi xảy ra khi gọi API");
            }
        } catch (e) {
            console.error("Save Error:", e);
            alert("Lỗi kết nối máy chủ");
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
                <div style={{
                    display: "flex",
                    borderBottom: "1px solid var(--border)",
                    background: "var(--bg)",
                    padding: "0.5rem"
                }}>
                    {[
                        { id: "design", label: "Thiết kế" },
                        { id: "content", label: "Nội dung" },
                        { id: "layout", label: "Bố cục" }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
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

                <div style={{ padding: "1.25rem", maxHeight: "calc(100vh - 200px)", overflowY: "auto" }} className="dash-template-editor-scroll">
                    
                    {selectedSectionId && (
                        <div style={{ 
                            marginBottom: "1.5rem", padding: "1.25rem", borderRadius: "12px", 
                            background: "rgba(var(--primary-rgb), 0.05)", border: "1px solid var(--primary)",
                            boxShadow: "0 8px 30px rgba(var(--primary-rgb), 0.1)"
                        }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                                <h4 style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: 800, margin: 0, textTransform: "uppercase" }}>
                                    Tùy chỉnh: {layoutConfig?.labels?.[selectedSectionId!] || selectedSectionId}
                                </h4>
                                <button onClick={() => setSelectedSectionId(null)} style={{ color: "#666", fontSize: "0.75rem", background: "none", border: "none", cursor: "pointer" }}>Đóng</button>
                            </div>

                            <div style={{ display: "flex", gap: "4px", background: "#eee", padding: "3px", borderRadius: "8px", marginBottom: "1.25rem" }}>
                                {["header", "body", "block"].map(t => (
                                    <button key={t} onClick={() => setSelectionTab(t)} style={{
                                        flex: 1, padding: "6px", fontSize: "10px", fontWeight: 700, borderRadius: "6px", border: "none",
                                        background: selectionTab === t ? "#fff" : "transparent",
                                        color: selectionTab === t ? "var(--primary)" : "#666",
                                        boxShadow: selectionTab === t ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
                                        cursor: "pointer", transition: "all 0.2s"
                                    }}>
                                        {t === "header" ? "TIÊU ĐỀ" : (t === "body" ? "NỘI DUNG" : "KHỐI")}
                                    </button>
                                ))}
                            </div>
                            
                            <div style={{ display: "grid", gap: "1rem" }}>
                                {selectionTab === "header" && (
                                    <>
                                        <div>
                                            <label style={labelStyle}>CỠ CHỮ TIÊU ĐỀ (PX)</label>
                                            <input type="range" min={8} max={32} step={0.5}
                                                value={styleConfig.sectionStyles[selectedSectionId]?.title?.fontSize || (selectedSectionId.includes("contact") ? styleConfig.fontSize + 4 : styleConfig.fontSize + 6)}
                                                onChange={e => setStyleConfig((p: any) => ({
                                                    ...p,
                                                    sectionStyles: {
                                                        ...p.sectionStyles,
                                                        [selectedSectionId]: { ...p.sectionStyles[selectedSectionId], title: { ...p.sectionStyles[selectedSectionId]?.title, fontSize: parseFloat(e.target.value) } }
                                                    }
                                                }))} style={{ width: "100%" }} />
                                        </div>
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                            <div>
                                                <label style={labelStyle}>MÀU TIÊU ĐỀ</label>
                                                <input type="color" value={styleConfig.sectionStyles[selectedSectionId]?.title?.color || styleConfig.primaryColor}
                                                    onChange={e => setStyleConfig((p: any) => ({
                                                        ...p,
                                                        sectionStyles: {
                                                            ...p.sectionStyles,
                                                            [selectedSectionId]: { ...p.sectionStyles[selectedSectionId], title: { ...p.sectionStyles[selectedSectionId]?.title, color: e.target.value } }
                                                        }
                                                    }))} style={{ width: "100%", height: "30px" }} />
                                            </div>
                                            <div>
                                                <label style={labelStyle}>MÀU ĐƯỜNG KẺ</label>
                                                <input type="color" value={styleConfig.sectionStyles[selectedSectionId]?.lineColor || styleConfig.headingLineColor || styleConfig.primaryColor}
                                                    onChange={e => setStyleConfig((p: any) => ({
                                                        ...p,
                                                        sectionStyles: {
                                                            ...p.sectionStyles,
                                                            [selectedSectionId]: { ...p.sectionStyles[selectedSectionId], lineColor: e.target.value }
                                                        }
                                                    }))} style={{ width: "100%", height: "30px" }} />
                                            </div>
                                        </div>
                                        <div>
                                            <label style={labelStyle}>ĐỊNH DẠNG</label>
                                            <div style={{ display: "flex", gap: "4px" }}>
                                                <button onClick={() => setStyleConfig((p: any) => ({
                                                    ...p,
                                                    sectionStyles: {
                                                        ...p.sectionStyles,
                                                        [selectedSectionId]: { ...p.sectionStyles[selectedSectionId], title: { ...p.sectionStyles[selectedSectionId]?.title, textTransform: p.sectionStyles[selectedSectionId]?.title?.textTransform === "uppercase" ? "none" : "uppercase" } }
                                                    }
                                                }))} style={{ flex: 1, padding: "6px", fontSize: "10px", background: styleConfig.sectionStyles[selectedSectionId]?.title?.textTransform === "uppercase" ? "var(--primary)" : "#fff", color: styleConfig.sectionStyles[selectedSectionId]?.title?.textTransform === "uppercase" ? "#fff" : "#333", border: "1px solid #ddd", borderRadius: "4px" }}>
                                                    ABC (CHỮ HOA)
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {selectionTab === "body" && (
                                    <>
                                        <div>
                                            <label style={labelStyle}>CỠ CHỮ NỘI DUNG (PX)</label>
                                            <input type="range" min={8} max={20} step={0.5}
                                                value={styleConfig.sectionStyles[selectedSectionId]?.body?.fontSize || styleConfig.fontSize}
                                                onChange={e => setStyleConfig((p: any) => ({
                                                    ...p,
                                                    sectionStyles: {
                                                        ...p.sectionStyles,
                                                        [selectedSectionId]: { ...p.sectionStyles[selectedSectionId], body: { ...p.sectionStyles[selectedSectionId]?.body, fontSize: parseFloat(e.target.value) } }
                                                    }
                                                }))} style={{ width: "100%" }} />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>GIÃN DÒNG (LINE-HEIGHT)</label>
                                            <input type="range" min={1} max={3} step={0.1}
                                                value={styleConfig.sectionStyles[selectedSectionId]?.body?.lineHeight || styleConfig.lineHeight}
                                                onChange={e => setStyleConfig((p: any) => ({
                                                    ...p,
                                                    sectionStyles: {
                                                        ...p.sectionStyles,
                                                        [selectedSectionId]: { ...p.sectionStyles[selectedSectionId], body: { ...p.sectionStyles[selectedSectionId]?.body, lineHeight: parseFloat(e.target.value) } }
                                                    }
                                                }))} style={{ width: "100%" }} />
                                        </div>
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                            <div>
                                                <label style={labelStyle}>MÀU CHỮ</label>
                                                <input type="color" value={styleConfig.sectionStyles[selectedSectionId]?.body?.color || "#333333"}
                                                    onChange={e => setStyleConfig((p: any) => ({
                                                        ...p,
                                                        sectionStyles: {
                                                            ...p.sectionStyles,
                                                            [selectedSectionId]: { ...p.sectionStyles[selectedSectionId], body: { ...p.sectionStyles[selectedSectionId]?.body, color: e.target.value } }
                                                        }
                                                    }))} style={{ width: "100%", height: "30px" }} />
                                            </div>
                                            <div>
                                                <label style={labelStyle}>GIÃN CHỮ (PX)</label>
                                                <input type="number" step={0.1} value={styleConfig.sectionStyles[selectedSectionId]?.body?.letterSpacing || 0}
                                                    onChange={e => setStyleConfig((p: any) => ({
                                                        ...p,
                                                        sectionStyles: {
                                                            ...p.sectionStyles,
                                                            [selectedSectionId]: { ...p.sectionStyles[selectedSectionId], body: { ...p.sectionStyles[selectedSectionId]?.body, letterSpacing: parseFloat(e.target.value) } }
                                                        }
                                                    }))} style={inputStyle} />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {selectionTab === "block" && (
                                    <>
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                            <div>
                                                <label style={labelStyle}>LỀ TRÊN (PX)</label>
                                                <input type="number" value={styleConfig.sectionStyles[selectedSectionId]?.marginTop || 0}
                                                    onChange={e => setStyleConfig((p: any) => ({
                                                        ...p,
                                                        sectionStyles: {
                                                            ...p.sectionStyles,
                                                            [selectedSectionId]: { ...p.sectionStyles[selectedSectionId], marginTop: parseInt(e.target.value) }
                                                        }
                                                    }))} style={inputStyle} />
                                            </div>
                                            <div>
                                                <label style={labelStyle}>LỀ DƯỚI (PX)</label>
                                                <input type="number" value={styleConfig.sectionStyles[selectedSectionId]?.marginBottom || 0}
                                                    onChange={e => setStyleConfig((p: any) => ({
                                                        ...p,
                                                        sectionStyles: {
                                                            ...p.sectionStyles,
                                                            [selectedSectionId]: { ...p.sectionStyles[selectedSectionId], marginBottom: parseInt(e.target.value) }
                                                        }
                                                    }))} style={inputStyle} />
                                            </div>
                                        </div>
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                            <div>
                                                <label style={labelStyle}>CĂN LỀ RIÊNG</label>
                                                <div style={{ display: "flex", border: "1px solid #ddd", borderRadius: "6px", overflow: "hidden" }}>
                                                    {["left", "center", "right"].map(align => (
                                                        <button key={align} 
                                                            onClick={() => setStyleConfig((p: any) => ({
                                                                ...p,
                                                                sectionStyles: {
                                                                    ...p.sectionStyles,
                                                                    [selectedSectionId]: { ...p.sectionStyles[selectedSectionId], textAlign: align }
                                                                }
                                                            }))}
                                                            style={{ 
                                                                flex: 1, padding: "6px", fontSize: "10px", 
                                                                background: (styleConfig.sectionStyles[selectedSectionId]?.textAlign || styleConfig.textAlign) === align ? "var(--primary)" : "#fff", 
                                                                color: (styleConfig.sectionStyles[selectedSectionId]?.textAlign || styleConfig.textAlign) === align ? "#fff" : "#333", 
                                                                border: "none" 
                                                            }}>
                                                            {align[0].toUpperCase()}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <label style={labelStyle}>LỀ TRONG (PADDING PX)</label>
                                                <input type="number" value={parseInt(styleConfig.sectionStyles[selectedSectionId]?.padding) || 0}
                                                    onChange={e => setStyleConfig((p: any) => ({
                                                        ...p,
                                                        sectionStyles: {
                                                            ...p.sectionStyles,
                                                            [selectedSectionId]: { ...p.sectionStyles[selectedSectionId], padding: `${e.target.value}px` }
                                                        }
                                                    }))} style={inputStyle} />
                                            </div>
                                        </div>
                                        <div>
                                            <label style={labelStyle}>MÀU NỀN MỤC</label>
                                            <input type="color" value={styleConfig.sectionStyles[selectedSectionId]?.backgroundColor || "#ffffff"}
                                                onChange={e => setStyleConfig((p: any) => ({
                                                    ...p,
                                                    sectionStyles: {
                                                        ...p.sectionStyles,
                                                        [selectedSectionId]: { ...p.sectionStyles[selectedSectionId], backgroundColor: e.target.value }
                                                    }
                                                }))} style={{ width: "100%", height: "30px" }} />
                                        </div>
                                    </>
                                )}

                                <button 
                                    onClick={() => {
                                        const newStyles = { ...styleConfig.sectionStyles };
                                        delete newStyles[selectedSectionId!];
                                        setStyleConfig((p: any) => ({ ...p, sectionStyles: newStyles }));
                                    }}
                                    style={{ background: "#fff", border: "1px solid #ff4444", color: "#ff4444", borderRadius: "8px", fontSize: "0.75rem", padding: "8px", fontWeight: 700, cursor: "pointer", marginTop: "0.5rem" }}
                                >
                                    XÓA TẤT CẢ TÙY CHỈNH RIÊNG
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "content" && (
                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            <div className="section-group">
                                <h4 style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 700, marginBottom: "1rem", textTransform: "uppercase" }}>Thông tin mẫu CV</h4>
                                <div style={{ display: "grid", gap: "1rem" }}>
                                    <div>
                                        <label style={labelStyle}>Tên mẫu CV *</label>
                                        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="VD: Modern Minimalist" style={inputStyle} />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Mô tả mẫu</label>
                                        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Mô tả ngắn về mẫu..." rows={2} style={{ ...inputStyle, resize: "vertical" }} />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Phân loại</label>
                                        <select value={category} onChange={e => setCategory(e.target.value)} style={inputStyle}>
                                            {CATEGORY_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "design" && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            {/* Phông chữ & Màu sắc */}
                            <div className="section-group" style={{ background: "rgba(var(--primary-rgb), 0.02)", padding: "1.25rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                                <h4 style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: 800, marginBottom: "1.25rem", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
                                    <span style={{ width: "4px", height: "16px", background: "var(--primary)", borderRadius: "2px" }}></span>
                                    Phông chữ & Màu sắc
                                </h4>
                                <div style={{ display: "grid", gap: "1.25rem" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                        <div>
                                            <label style={labelStyle}>MÀU CHỦ ĐỀ</label>
                                            <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginTop: "4px" }}>
                                                {COLOR_PRESETS.map(cp => (
                                                    <button key={cp.primary} onClick={() => setStyleConfig((p: any) => ({ ...p, primaryColor: cp.primary }))}
                                                        style={{ width: "20px", height: "20px", borderRadius: "4px", background: cp.primary, border: styleConfig.primaryColor === cp.primary ? "2px solid #000" : "1px solid #ddd" }} />
                                                ))}
                                                <input type="color" value={styleConfig.primaryColor} onChange={e => setStyleConfig((p: any) => ({ ...p, primaryColor: e.target.value }))} style={{ width: "20px", height: "20px", border: "none", padding: 0, background: "none" }} />
                                            </div>
                                        </div>
                                        <div>
                                            <label style={labelStyle}>PHÔNG CHỮ</label>
                                            <select value={styleConfig.fontFamily} onChange={e => setStyleConfig((p: any) => ({ ...p, fontFamily: e.target.value }))} style={inputStyle}>
                                                {FONT_OPTIONS.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                        <div>
                                            <label style={labelStyle}>CỠ CHỮ: {styleConfig.fontSize}px</label>
                                            <input type="range" min={8} max={16} step={0.5} value={styleConfig.fontSize}
                                                onChange={e => setStyleConfig((p: any) => ({ ...p, fontSize: parseFloat(e.target.value) }))} style={{ width: "100%" }} />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>CĂN LỀ</label>
                                            <div style={{ display: "flex", border: "1px solid #ddd", borderRadius: "6px", overflow: "hidden" }}>
                                                {["left", "center", "right"].map(align => (
                                                    <button key={align} onClick={() => setStyleConfig((p: any) => ({ ...p, textAlign: align }))}
                                                        style={{ flex: 1, padding: "6px", fontSize: "10px", background: styleConfig.textAlign === align ? "var(--primary)" : "#fff", color: styleConfig.textAlign === align ? "#fff" : "#333", border: "none" }}>
                                                        {align[0].toUpperCase()}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                        <div>
                                            <label style={labelStyle}>MÀU NỀN SIDEBAR</label>
                                            <input type="color" value={styleConfig.sidebarBg || styleConfig.primaryColor} 
                                                onChange={e => setStyleConfig((p: any) => ({ ...p, sidebarBg: e.target.value }))} 
                                                style={{ width: "100%", height: "30px", border: "1px solid var(--border)", borderRadius: "4px" }} />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>MÀU CHỮ SIDEBAR</label>
                                            <input type="color" value={styleConfig.sidebarText || "#ffffff"} 
                                                onChange={e => setStyleConfig((p: any) => ({ ...p, sidebarText: e.target.value }))} 
                                                style={{ width: "100%", height: "30px", border: "1px solid var(--border)", borderRadius: "4px" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bố cục & Khoảng cách */}
                            <div className="section-group" style={{ background: "rgba(var(--primary-rgb), 0.02)", padding: "1.25rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                                <h4 style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: 800, marginBottom: "1.25rem", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
                                    <span style={{ width: "4px", height: "16px", background: "var(--primary)", borderRadius: "2px" }}></span>
                                    Bố cục & Khoảng cách
                                </h4>
                                <div style={{ display: "grid", gap: "1.25rem" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                        <div>
                                            <label style={labelStyle}>ĐỘ RỘNG SIDEBAR</label>
                                            <input type="range" min={20} max={50} value={parseInt(styleConfig.sidebarWidth) || 35}
                                                onChange={e => setStyleConfig((p: any) => ({ ...p, sidebarWidth: `${e.target.value}%` }))} style={{ width: "100%" }} />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>KHOẢNG CÁCH MỤC</label>
                                            <input type="range" min={10} max={60} value={parseInt(styleConfig.sectionSpacing) || 20}
                                                onChange={e => setStyleConfig((p: any) => ({ ...p, sectionSpacing: `${e.target.value}px` }))} style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                        <div>
                                            <label style={labelStyle}>LỀ TRANG (PADD)</label>
                                            <input type="range" min={20} max={80} value={parseInt(styleConfig.pagePadding) || 40}
                                                onChange={e => setStyleConfig((p: any) => ({ ...p, pagePadding: `${e.target.value}px` }))} style={{ width: "100%" }} />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>CÁCH DÒNG</label>
                                            <input type="range" min={1.2} max={2.2} step={0.1} value={styleConfig.lineHeight || 1.6}
                                                onChange={e => setStyleConfig((p: any) => ({ ...p, lineHeight: parseFloat(e.target.value) }))} style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Hiệu ứng & Trang trí */}
                            <div className="section-group" style={{ background: "rgba(var(--primary-rgb), 0.02)", padding: "1.25rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                                <h4 style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: 800, marginBottom: "1.25rem", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
                                    <span style={{ width: "4px", height: "16px", background: "var(--primary)", borderRadius: "2px" }}></span>
                                    Hiệu ứng & Trang trí
                                </h4>
                                <div style={{ display: "grid", gap: "1.25rem" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                        <div>
                                            <label style={labelStyle}>ĐƯỜNG KẺ TIÊU ĐỀ</label>
                                            <button 
                                                onClick={() => setStyleConfig((p: any) => ({ ...p, headingLineHeight: p.headingLineHeight > 0 ? 0 : 2 }))}
                                                style={{
                                                    width: "100%", padding: "8px", borderRadius: "8px", fontSize: "0.75rem", fontWeight: 600,
                                                    background: styleConfig.headingLineHeight > 0 ? "var(--primary)" : "#f1f5f9",
                                                    color: styleConfig.headingLineHeight > 0 ? "#fff" : "#64748b",
                                                    border: "1px solid " + (styleConfig.headingLineHeight > 0 ? "var(--primary)" : "#e2e8f0"),
                                                    cursor: "pointer", transition: "all 0.2s"
                                                }}
                                            >
                                                {styleConfig.headingLineHeight > 0 ? "ĐANG BẬT" : "ĐANG TẮT"}
                                            </button>
                                        </div>
                                        <div>
                                            <label style={labelStyle}>KIỂU ĐÁNH SỐ</label>
                                            <select style={inputStyle} value={styleConfig.numberingStyle || "bullet"}
                                                onChange={e => setStyleConfig((p: any) => ({ ...p, numberingStyle: e.target.value }))}>
                                                <option value="bullet">Dấu chấm (•)</option>
                                                <option value="dash">Dấu gạch (-)</option>
                                                <option value="numeric">Số thứ tự (1.)</option>
                                                <option value="none">Trống (None)</option>
                                            </select>
                                        </div>
                                    </div>

                                    {styleConfig.headingLineHeight > 0 && (
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                            <div>
                                                <label style={labelStyle}>ĐỘ DÀY KẺ (PX): {styleConfig.headingLineHeight}</label>
                                                <input type="range" min={1} max={10} value={styleConfig.headingLineHeight}
                                                    onChange={e => setStyleConfig((p: any) => ({ ...p, headingLineHeight: parseInt(e.target.value) }))} style={{ width: "100%" }} />
                                            </div>
                                            <div>
                                                <label style={labelStyle}>ĐỘ DÀI KẺ (%): {styleConfig.headingLineWidth}</label>
                                                <input type="range" min={10} max={100} value={parseInt(styleConfig.headingLineWidth) || 100}
                                                    onChange={e => setStyleConfig((p: any) => ({ ...p, headingLineWidth: `${e.target.value}%` }))} style={{ width: "100%" }} />
                                            </div>
                                        </div>
                                    )}

                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                        <div>
                                            <label style={labelStyle}>MÀU ĐƯỜNG KẺ</label>
                                            <input type="color" value={styleConfig.headingLineColor || styleConfig.primaryColor} 
                                                onChange={e => setStyleConfig((p: any) => ({ ...p, headingLineColor: e.target.value }))} 
                                                style={{ width: "100%", height: "30px", border: "1px solid var(--border)", borderRadius: "4px" }} />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>KIỂU ĐƯỜNG KẺ</label>
                                            <select style={inputStyle} value={styleConfig.headingStyle || "solid"}
                                                onChange={e => setStyleConfig((p: any) => ({ ...p, headingStyle: e.target.value }))}>
                                                <option value="solid">Nét liền (Solid)</option>
                                                <option value="dashed">Nét đứt (Dashed)</option>
                                                <option value="dotted">Chấm bi (Dotted)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tùy chỉnh Nền CV */}
                            <div className="section-group" style={{ background: "rgba(var(--primary-rgb), 0.02)", padding: "1.25rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                                <h4 style={{ fontSize: "0.8rem", color: "var(--primary)", fontWeight: 800, marginBottom: "1.25rem", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "8px" }}>
                                    <span style={{ width: "4px", height: "16px", background: "var(--primary)", borderRadius: "2px" }}></span>
                                    Tùy chỉnh Nền CV
                                </h4>
                                <div style={{ display: "grid", gap: "1.25rem" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                        <div>
                                            <label style={labelStyle}>MÀU NỀN TRANG</label>
                                            <input type="color" value={styleConfig.pageBgColor || "#ffffff"} onChange={e => setStyleConfig((p: any) => ({ ...p, pageBgColor: e.target.value }))} style={{ width: "100%", height: "30px" }} />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>ĐỘ MỜ NỀN: {styleConfig.bgOpacity}</label>
                                            <input type="range" min={0} max={1} step={0.1} value={styleConfig.bgOpacity || 1} onChange={e => setStyleConfig((p: any) => ({ ...p, bgOpacity: parseFloat(e.target.value) }))} style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={labelStyle}>HÌNH NỀN (URL)</label>
                                        <input type="text" value={styleConfig.bgImage === "none" ? "" : styleConfig.bgImage} 
                                            placeholder="https://..."
                                            onChange={e => setStyleConfig((p: any) => ({ ...p, bgImage: e.target.value ? `url(${e.target.value})` : "none" }))} style={inputStyle} />
                                    </div>
                                </div>
                            </div>

                            {/* Custom CSS */}
                            <div className="section-group">
                                <label style={labelStyle}>CSS NÂNG CAO</label>
                                <textarea
                                    value={styleConfig.customCss || ""}
                                    onChange={e => setStyleConfig((p: any) => ({ ...p, customCss: e.target.value }))}
                                    placeholder=".cv-name { color: red; }"
                                    rows={2}
                                    style={{ ...inputStyle, fontFamily: "monospace", fontSize: "11px" }}
                                />
                            </div>
                        </div>
                    )}

                    {activeTab === "layout" && (
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
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

                            <div className="section-group">
                                <h4 style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 700, marginBottom: "1rem", textTransform: "uppercase" }}>Thứ tự hiển thị các mục</h4>
                                <SectionOrderManager
                                    sections={layoutConfig.sections || ["contact", "objective", "experience", "education", "skills", "hobbies"]}
                                    onOrderChange={(newOrder) => setLayoutConfig((p: any) => ({ ...p, sections: newOrder }))}
                                    onToggleVisibility={(id) => {
                                        const sections = layoutConfig.sections || ["contact", "objective", "experience", "education", "skills", "hobbies"];
                                        const isVisible = sections.includes(id);
                                        if (isVisible) {
                                            setLayoutConfig((p: any) => ({ ...p, sections: sections.filter((s: string) => s !== id) }));
                                        } else {
                                            setLayoutConfig((p: any) => ({ ...p, sections: [...sections, id] }));
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    )}

                </div>

                <div style={{ padding: "1.25rem", borderTop: "1px solid var(--border)", display: "flex", gap: "0.75rem", background: "var(--bg)" }}>
                    <button className="dash-btn" style={{ flex: 1 }} onClick={() => router.back()}>
                        Hủy
                    </button>
                    <button className="dash-btn dash-btn-primary" style={{ flex: 2 }} onClick={handleSave} disabled={loading}>
                        {loading ? "Đang lưu..." : (mode === "create" ? "Tạo mẫu" : "Lưu thay đổi")}
                    </button>
                </div>
            </div>

            <div className="dash-card" style={{ padding: "1.25rem", borderRadius: "12px", overflow: "hidden" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "1rem", gap: "1rem" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0, color: "var(--text)" }}>
                        Xem trước kết quả
                    </h3>
                </div>
                <div style={{
                    display: "flex", justifyContent: "center", overflow: "hidden",
                    background: "#e5e7eb", borderRadius: "8px", padding: "1rem",
                }}>
                    <div style={{
                        width: `${794 * previewScale}px`,
                        height: `${1123 * previewScale}px`,
                        overflow: "hidden",
                        margin: "0 auto",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                        borderRadius: "8px",
                    }}>
                        <div
                            style={{
                                width: "794px", minHeight: "1123px",
                                transform: `scale(${previewScale})`,
                                transformOrigin: "top left",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                                cursor: "crosshair"
                            }}
                            ref={cvPreviewRef}
                        >
                            <CVRenderer
                                data={sampleData}
                                template={{ styleConfig, layoutConfig }}
                                readOnly={false}
                                onDataChange={handleSampleDataChange}
                                onConfigChange={handleConfigChange}
                                onSectionSelect={handleSectionSelect}
                                selectedSectionId={selectedSectionId}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
