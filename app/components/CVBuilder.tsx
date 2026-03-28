"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { getCVTemplates, saveUserCV } from "@/app/actions/cv";
import CVRenderer from "./CVRenderer";
import { useReactToPrint } from "react-to-print";

// ===== Icons =====
import { SparklesIcon, IdentificationIcon, UserIcon, BriefcaseIcon, AcademicCapIcon, PrinterIcon, ArrowDownTrayIcon, PencilSquareIcon, DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Education {
    school: string;
    degree: string;
    field: string;
    startYear: string;
    endYear: string;
}

interface Experience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
}

/**
 * CVBuilder: Split-screen editor với live preview bên phải (desktop),
 * tab switch edit/preview trên mobile.
 */
export default function CVBuilder() {
    const router = useRouter();
    const componentRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
    const [openSection, setOpenSection] = useState<string>("template");
    const [loading, setLoading] = useState(false);
    const [templates, setTemplates] = useState<any[]>([]);
    const [selectedTemplate, setSelectedTemplate] = useState<string>("");
    const [selectedTemplateData, setSelectedTemplateData] = useState<any>(null);
    const [cvTitle, setCvTitle] = useState("My Professional CV");
    const [previewScale, setPreviewScale] = useState(0.5);
    const [filterCategory, setFilterCategory] = useState("all");

    const [formData, setFormData] = useState({
        avatar: "",
        fullName: "",
        jobTitle: "",
        dob: "",
        gender: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        portfolio: "",
        summary: "",
        skills: "",
        hobbies: "",
        education: [] as Education[],
        experience: [] as Experience[],
    });

    useEffect(() => {
        const fetchTemplates = async () => {
            const res = await getCVTemplates();
            if (res.success && res.templates) {
                setTemplates(res.templates);
                if (res.templates.length > 0) {
                    setSelectedTemplate(res.templates[0].id);
                    setSelectedTemplateData(res.templates[0]);
                }
            }
        };
        fetchTemplates();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth;
            setIsMobile(w < 1024);
            if (w < 768) {
                setPreviewScale((w - 48) / 794);
            } else if (w < 1024) {
                setPreviewScale(0.6);
            } else {
                // Desktop split view: preview nửa phải
                const previewAreaWidth = Math.min(w * 0.48, 600);
                setPreviewScale(Math.min((previewAreaWidth - 40) / 794, 0.6));
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: cvTitle.replace(/ /g, "_") || "My_CV",
    });

    const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setFormData(prev => ({ ...prev, avatar: reader.result as string }));
            reader.readAsDataURL(file);
        }
    };

    const addEducation = () => setFormData(prev => ({ ...prev, education: [...prev.education, { school: "", degree: "", field: "", startYear: "", endYear: "" }] }));
    const removeEducation = (i: number) => setFormData(prev => ({ ...prev, education: prev.education.filter((_, idx) => idx !== i) }));
    const updateEducation = (i: number, field: keyof Education, val: string) => setFormData(prev => ({ ...prev, education: prev.education.map((edu, idx) => idx === i ? { ...edu, [field]: val } : edu) }));
    const addExperience = () => setFormData(prev => ({ ...prev, experience: [...prev.experience, { company: "", position: "", startDate: "", endDate: "", description: "" }] }));
    const removeExperience = (i: number) => setFormData(prev => ({ ...prev, experience: prev.experience.filter((_, idx) => idx !== i) }));
    const updateExperience = (i: number, field: keyof Experience, val: string) => setFormData(prev => ({ ...prev, experience: prev.experience.map((exp, idx) => idx === i ? { ...exp, [field]: val } : exp) }));

    const handleSubmit = async () => {
        if (!selectedTemplate) { alert("Vui lòng chọn một mẫu CV"); return; }
        setLoading(true);
        try {
            const parsedSkills = formData.skills ? formData.skills.split(",").map(s => s.trim()).filter(s => s) : [];
            const parsedHobbies = formData.hobbies ? formData.hobbies.split(",").map(s => s.trim()).filter(s => s) : [];
            const res = await saveUserCV({
                templateId: selectedTemplate,
                title: cvTitle,
                content: { ...formData, skills: parsedSkills, hobbies: parsedHobbies }
            });
            if (res.success) {
                alert("CV của bạn đã được lưu thành công!");
                if (isMobile) setActiveTab("preview");
            } else {
                alert(res.error || "Có lỗi xảy ra khi lưu CV");
            }
        } catch {
            alert("Lỗi kết nối. Vui lòng thử lại.");
        } finally {
            setLoading(false);
        }
    };

    const formatDataForRenderer = () => ({
        ...formData,
        name: formData.fullName,
        skills: formData.skills ? formData.skills.split(",").map(s => s.trim()).filter(s => s) : [],
        hobbies: formData.hobbies ? formData.hobbies.split(",").map(s => s.trim()).filter(s => s) : [],
    });

    const categories = ["all", ...Array.from(new Set(templates.map(t => t.category || "Khác")))];
    const filteredTemplates = filterCategory === "all" ? templates : templates.filter(t => (t.category || "Khác") === filterCategory);

    // Styles
    const inputStyle: React.CSSProperties = {
        width: "100%", padding: "0.75rem 1rem", borderRadius: "8px",
        border: "1px solid var(--border)", background: "var(--bg-card)",
        color: "var(--text)", fontSize: "0.9375rem", outline: "none",
        transition: "border-color 0.2s",
    };
    const labelStyle: React.CSSProperties = {
        display: "block", fontSize: "0.875rem", fontWeight: 600,
        color: "var(--text)", marginBottom: "0.5rem",
    };
    const dashedBtnStyle: React.CSSProperties = {
        padding: "0.75rem 1.5rem", borderRadius: "8px", border: "1.5px dashed var(--primary)",
        background: "rgba(var(--primary-rgb), 0.05)", color: "var(--primary)",
        fontWeight: 600, fontSize: "0.9375rem", cursor: "pointer", width: "100%",
    };

    const renderAccordionHeader = (id: string, title: string, icon: React.ReactNode) => (
        <div
            onClick={() => setOpenSection(openSection === id ? "" : id)}
            style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "0.875rem 1.25rem",
                background: openSection === id ? "rgba(var(--primary-rgb), 0.06)" : "transparent",
                borderBottom: "1px solid var(--border)", cursor: "pointer",
                transition: "all 0.2s", borderLeft: openSection === id ? "3px solid var(--primary)" : "3px solid transparent",
            }}
        >
            <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, color: openSection === id ? "var(--primary)" : "var(--text)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ width: "20px", height: "20px", display: "inline-block" }}>{icon}</span>
                {title}
            </h3>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", transform: openSection === id ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>▼</span>
        </div>
    );

    // ===== Realtime data change from Inline Editor =====
    const handleDataChange = (field: string, value: string, index?: number, subfield?: string) => {
        if (index !== undefined && subfield) {
            // Handle array types: experience, education
            if (field === "experience") {
                updateExperience(index, subfield as keyof Experience, value);
            } else if (field === "education") {
                updateEducation(index, subfield as keyof Education, value);
            }
        } else {
            // Handle normal mapping
            if (field === "fullName") setFormData(prev => ({ ...prev, fullName: value }));
            else if (field === "jobTitle") setFormData(prev => ({ ...prev, jobTitle: value }));
            else if (field === "dob") setFormData(prev => ({ ...prev, dob: value }));
            else if (field === "gender") setFormData(prev => ({ ...prev, gender: value }));
            else if (field === "email") setFormData(prev => ({ ...prev, email: value }));
            else if (field === "phone") setFormData(prev => ({ ...prev, phone: value }));
            else if (field === "location") setFormData(prev => ({ ...prev, location: value }));
            else if (field === "linkedin") setFormData(prev => ({ ...prev, linkedin: value }));
            else if (field === "portfolio") setFormData(prev => ({ ...prev, portfolio: value }));
            else if (field === "summary") setFormData(prev => ({ ...prev, summary: value }));
            else if (field === "skills") setFormData(prev => ({ ...prev, skills: value }));
            else if (field === "hobbies") setFormData(prev => ({ ...prev, hobbies: value }));
        }
    };

    // ===== Preview Panel =====
    const renderPreviewPanel = () => (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", padding: "1rem" }}>
            {/* Action buttons */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
                <button onClick={() => handlePrint()} className="dash-btn dash-btn-primary" style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <PrinterIcon className="w-4 h-4" /> In / Tải PDF
                </button>
                <button onClick={handleSubmit} disabled={loading} className="dash-btn dash-btn-outline" style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <ArrowDownTrayIcon className="w-4 h-4" /> {loading ? "Đang lưu..." : "Lưu CV"}
                </button>
            </div>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center", maxWidth: "400px" }}>
                Click trực tiếp vào các đoạn văn bản trong CV để chỉnh sửa nội dung nhanh.
                <br />Ấn In → chọn <strong>Save as PDF</strong>, bỏ Header & Footer, bật Background Graphics
            </p>
            {/* CV Preview */}
            <div style={{
                background: "#e5e7eb", borderRadius: "8px", padding: "1rem",
                display: "flex", justifyContent: "center", width: "100%",
            }}>
                <div style={{
                    width: `${794 * previewScale}px`,
                    height: `${1123 * previewScale}px`,
                    overflow: "hidden",
                }}>
                    <div style={{
                        width: "794px", minHeight: "1123px", background: "#fff",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                        transform: `scale(${previewScale})`,
                        transformOrigin: "top left",
                    }}>
                        {selectedTemplateData ? (
                            <CVRenderer
                                ref={componentRef}
                                data={formatDataForRenderer()}
                                template={selectedTemplateData}
                                onDataChange={handleDataChange}
                                readOnly={false}
                            />
                        ) : (
                            <div style={{ padding: "40px", textAlign: "center", color: "#666" }}>Vui lòng chọn mẫu CV.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    // ===== Edit Panel =====
    const renderEditPanel = () => (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {/* CV Title */}
            <div style={{ padding: "1.25rem", borderBottom: "1px solid var(--border)" }}>
                <label style={labelStyle}>Tên file CV</label>
                <input type="text" value={cvTitle} onChange={e => setCvTitle(e.target.value)} style={{ ...inputStyle, fontSize: "1.125rem", fontWeight: 700, padding: "0.875rem 1rem" }} />
            </div>

            {/* 0. Template Selection */}
            {renderAccordionHeader("template", "Giao diện CV", <SparklesIcon />)}
            {openSection === "template" && (
                <div style={{ padding: "1.25rem" }}>
                    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", overflowX: "auto", paddingBottom: "0.5rem", scrollbarWidth: "none" }}>
                        {categories.map(cat => (
                            <button key={cat} onClick={() => setFilterCategory(cat)}
                                style={{
                                    padding: "0.375rem 1rem", borderRadius: "20px", fontSize: "0.8125rem", fontWeight: 500, whiteSpace: "nowrap",
                                    background: filterCategory === cat ? "var(--primary)" : "var(--bg)",
                                    color: filterCategory === cat ? "#fff" : "var(--text)", border: "1px solid",
                                    borderColor: filterCategory === cat ? "var(--primary)" : "var(--border)", cursor: "pointer", transition: "all 0.2s"
                                }}>
                                {cat === "all" ? "Tất cả" : cat}
                            </button>
                        ))}
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: "1rem" }}>
                        {filteredTemplates.map(t => (
                            <div key={t.id} onClick={() => { setSelectedTemplate(t.id); setSelectedTemplateData(t); }}
                                style={{
                                    border: selectedTemplate === t.id ? "2px solid var(--primary)" : "1px solid var(--border)",
                                    borderRadius: "8px", overflow: "hidden", cursor: "pointer", transition: "all 0.2s",
                                    boxShadow: selectedTemplate === t.id ? "0 4px 12px rgba(var(--primary-rgb), 0.2)" : "none",
                                }}>
                                <div style={{ height: "160px", background: "#f0f2f5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {t.thumbnailUrl ? <img src={t.thumbnailUrl} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        : <div style={{ fontSize: "0.75rem", color: "#999" }}>Không có ảnh</div>}
                                </div>
                                <div style={{ padding: "0.75rem", background: selectedTemplate === t.id ? "rgba(var(--primary-rgb), 0.04)" : "#fff" }}>
                                    <h4 style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text)", margin: 0 }}>{t.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 1. Basic Info */}
            {renderAccordionHeader("basic", "Thông tin cơ bản", <IdentificationIcon />)}
            {openSection === "basic" && (
                <div style={{ padding: "1.25rem", display: "grid", gap: "1.25rem" }}>
                    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                        <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", border: "1px solid var(--border)" }}>
                            {formData.avatar ? <img src={formData.avatar} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontSize: "2rem", color: "#ccc" }}><UserIcon className="w-8 h-8" /></span>}
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={labelStyle}>Ảnh đại diện</label>
                            <input type="file" accept="image/*" onChange={handleAvatarUpload} style={{ fontSize: "0.875rem", color: "var(--text-muted)" }} />
                        </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.25rem" }}>
                        <div>
                            <label style={labelStyle}>Họ và tên *</label>
                            <input type="text" value={formData.fullName} onChange={e => setFormData(p => ({ ...p, fullName: e.target.value }))} placeholder="Nguyễn Văn A" style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>Vị trí ứng tuyển</label>
                            <input type="text" value={formData.jobTitle} onChange={e => setFormData(p => ({ ...p, jobTitle: e.target.value }))} placeholder="Frontend Developer" style={inputStyle} />
                        </div>
                        <div className="dash-grid-2" style={{ gap: "1.25rem" }}>
                            <div>
                                <label style={labelStyle}>Ngày sinh</label>
                                <input type="text" value={formData.dob} onChange={e => setFormData(p => ({ ...p, dob: e.target.value }))} placeholder="18/12/1997" style={inputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>Giới tính</label>
                                <input type="text" value={formData.gender} onChange={e => setFormData(p => ({ ...p, gender: e.target.value }))} placeholder="Nam" style={inputStyle} />
                            </div>
                        </div>
                        <div>
                            <label style={labelStyle}>Email *</label>
                            <input type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} placeholder="email@example.com" style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>Số điện thoại</label>
                            <input type="tel" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} placeholder="0123 456 789" style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>Địa chỉ</label>
                            <input type="text" value={formData.location} onChange={e => setFormData(p => ({ ...p, location: e.target.value }))} placeholder="TP.HCM" style={inputStyle} />
                        </div>
                        <div>
                            <label style={labelStyle}>LinkedIn / Website</label>
                            <input type="text" value={formData.linkedin} onChange={e => setFormData(p => ({ ...p, linkedin: e.target.value }))} placeholder="https://linkedin.com/in/..." style={inputStyle} />
                        </div>
                    </div>
                </div>
            )}

            {/* 3. Objective & Skills */}
            {renderAccordionHeader("objective", "Mục tiêu & Kỹ năng", <SparklesIcon />)}
            {openSection === "objective" && (
                <div style={{ padding: "1.25rem", display: "grid", gap: "1.25rem" }}>
                    <div>
                        <label style={labelStyle}>Mục tiêu nghề nghiệp</label>
                        <textarea value={formData.summary} onChange={e => setFormData(p => ({ ...p, summary: e.target.value }))} placeholder="Tôi là một lập trình viên với 3 năm kinh nghiệm..." rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <div>
                        <label style={labelStyle}>Kỹ năng (phân cách dấu phẩy)</label>
                        <input type="text" value={formData.skills} onChange={e => setFormData(p => ({ ...p, skills: e.target.value }))} placeholder="ReactJS, Node.js, TypeScript..." style={inputStyle} />
                    </div>
                    <div>
                        <label style={labelStyle}>Sở thích (phân cách dấu phẩy)</label>
                        <input type="text" value={formData.hobbies} onChange={e => setFormData(p => ({ ...p, hobbies: e.target.value }))} placeholder="Đọc sách, Du lịch..." style={inputStyle} />
                    </div>
                </div>
            )}

            {/* 4. Experience */}
            {renderAccordionHeader("experience", "Kinh nghiệm làm việc", <BriefcaseIcon />)}
            {openSection === "experience" && (
                <div style={{ padding: "1.25rem" }}>
                    {formData.experience.map((exp, i) => (
                        <div key={i} style={{ padding: "1.25rem", background: "var(--bg)", borderRadius: "8px", position: "relative", marginBottom: "0.75rem", border: "1px solid var(--border)" }}>
                            <button onClick={() => removeExperience(i)} style={{ position: "absolute", top: "0.5rem", right: "0.5rem", background: "none", border: "none", color: "var(--danger)", cursor: "pointer", fontSize: "1.25rem", fontWeight: "bold" }}>×</button>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", marginBottom: "0.75rem" }}>
                                <div>
                                    <label style={labelStyle}>Công ty</label>
                                    <input type="text" value={exp.company} onChange={e => updateExperience(i, "company", e.target.value)} placeholder="Tên công ty" style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Vị trí</label>
                                    <input type="text" value={exp.position} onChange={e => updateExperience(i, "position", e.target.value)} placeholder="Backend Developer" style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Bắt đầu</label>
                                    <input type="text" value={exp.startDate} onChange={e => updateExperience(i, "startDate", e.target.value)} placeholder="01/2021" style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Kết thúc</label>
                                    <input type="text" value={exp.endDate} onChange={e => updateExperience(i, "endDate", e.target.value)} placeholder="Hiện tại" style={inputStyle} />
                                </div>
                            </div>
                            <label style={labelStyle}>Mô tả</label>
                            <textarea value={exp.description} onChange={e => updateExperience(i, "description", e.target.value)} placeholder="Mô tả chi tiết..." rows={2} style={{ ...inputStyle, resize: "vertical" }} />
                        </div>
                    ))}
                    <button onClick={addExperience} style={dashedBtnStyle}>+ Thêm Kinh Nghiệm</button>
                </div>
            )}

            {/* 5. Education */}
            {renderAccordionHeader("education", "Học vấn", <AcademicCapIcon />)}
            {openSection === "education" && (
                <div style={{ padding: "1.25rem" }}>
                    {formData.education.map((edu, i) => (
                        <div key={i} style={{ padding: "1.25rem", background: "var(--bg)", borderRadius: "8px", position: "relative", marginBottom: "0.75rem", border: "1px solid var(--border)" }}>
                            <button onClick={() => removeEducation(i)} style={{ position: "absolute", top: "0.5rem", right: "0.5rem", background: "none", border: "none", color: "var(--danger)", cursor: "pointer", fontSize: "1.25rem", fontWeight: "bold" }}>×</button>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.75rem" }}>
                                <div>
                                    <label style={labelStyle}>Trường</label>
                                    <input type="text" value={edu.school} onChange={e => updateEducation(i, "school", e.target.value)} placeholder="Đại học Bách Khoa" style={inputStyle} />
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.75rem" }}>
                                    <div>
                                        <label style={labelStyle}>Bằng cấp</label>
                                        <input type="text" value={edu.degree} onChange={e => updateEducation(i, "degree", e.target.value)} placeholder="Cử nhân" style={inputStyle} />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Ngành</label>
                                        <input type="text" value={edu.field} onChange={e => updateEducation(i, "field", e.target.value)} placeholder="CNTT" style={inputStyle} />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Bắt đầu</label>
                                        <input type="text" value={edu.startYear} onChange={e => updateEducation(i, "startYear", e.target.value)} placeholder="2018" style={inputStyle} />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Kết thúc</label>
                                        <input type="text" value={edu.endYear} onChange={e => updateEducation(i, "endYear", e.target.value)} placeholder="2022" style={inputStyle} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button onClick={addEducation} style={dashedBtnStyle}>+ Thêm Học Vấn</button>
                </div>
            )}
        </div>
    );

    // ===== RENDER =====
    return (
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "1rem" }}>

            {/* Mobile Tabs */}
            {isMobile && (
                <div style={{ display: "flex", background: "var(--bg-card)", padding: "0.5rem", borderRadius: "12px", marginBottom: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                    <button onClick={() => setActiveTab("edit")} style={{ flex: 1, padding: "0.75rem", borderRadius: "8px", fontWeight: 600, fontSize: "0.875rem", background: activeTab === "edit" ? "var(--primary)" : "transparent", color: activeTab === "edit" ? "#fff" : "var(--text-muted)", transition: "all 0.2s", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.25rem" }}>
                        <PencilSquareIcon className="w-5 h-5" /> Chỉnh sửa
                    </button>
                    <button onClick={() => setActiveTab("preview")} style={{ flex: 1, padding: "0.75rem", borderRadius: "8px", fontWeight: 600, fontSize: "0.875rem", background: activeTab === "preview" ? "var(--primary)" : "transparent", color: activeTab === "preview" ? "#fff" : "var(--text-muted)", transition: "all 0.2s", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.25rem" }}>
                        <DocumentMagnifyingGlassIcon className="w-5 h-5" /> Xem CV
                    </button>
                </div>
            )}

            <div style={{ display: "flex", gap: "1.5rem", position: "relative" }}>
                {/* Left: Editor (Desktop: half width, Mobile: full if active) */}
                {(!isMobile || activeTab === "edit") && (
                    <div className="dash-card" style={{ flex: 1, borderRadius: "12px", background: "var(--bg-card)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", overflow: "hidden" }}>
                        {renderEditPanel()}
                    </div>
                )}

                {/* Right: Live Preview (Desktop: sticky wrapper half width, Mobile: full if active) */}
                {(!isMobile || activeTab === "preview") && (
                    <div style={{ flex: 1, position: isMobile ? "relative" : "sticky", top: "1rem", height: isMobile ? "auto" : "calc(100vh - 2rem)", alignSelf: "start", background: "var(--bg-card)", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", overflowY: "auto" }}>
                        {renderPreviewPanel()}
                    </div>
                )}
            </div>
        </div>
    );
}
