"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { getCVTemplates, saveUserCV } from "@/app/actions/cv";
import CVRenderer from "./CVRenderer";
import { useReactToPrint } from "react-to-print";

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
 * Component CVBuilder: Giao diện tạo CV với 2 Tab (Chỉnh sửa / Xem trước).
 * Trực quan, dễ sử dụng, cho phép tải lên avatar, chỉnh sửa các mục cần thiết.
 */
export default function CVBuilder() {
    const router = useRouter();
    const componentRef = useRef<HTMLDivElement>(null);

    // Tabs state
    const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit");
    const [openSection, setOpenSection] = useState<string>("template"); // Accordion state

    const [loading, setLoading] = useState(false);
    const [templates, setTemplates] = useState<any[]>([]);
    const [selectedTemplate, setSelectedTemplate] = useState<string>("");
    const [selectedTemplateData, setSelectedTemplateData] = useState<any>(null);
    const [cvTitle, setCvTitle] = useState("My Professional CV");
    const [previewScale, setPreviewScale] = useState(0.85);

    const [formData, setFormData] = useState({
        // Personal Info
        avatar: "",
        fullName: "",
        jobTitle: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        portfolio: "",
        // Summary / Objective
        summary: "",
        // Skills & Hobbies
        skills: "",
        hobbies: "",
        // Education
        education: [] as Education[],
        // Experience
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

    // Handle dynamic scaling for the CV preview to ensure it fits on mobile
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 850) {
                // Determine padding (using 48px to be safe - 24px each side)
                const availableWidth = width - 48;
                setPreviewScale(availableWidth / 794);
            } else {
                setPreviewScale(0.85); // Standard scale for PC
            }
        };

        if (activeTab === "preview") {
            handleResize();
            window.addEventListener("resize", handleResize);
        }

        return () => window.removeEventListener("resize", handleResize);
    }, [activeTab]);

    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: cvTitle.replace(/ /g, "_") || "My_CV",
    });

    // Avatar upload handler
    const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, avatar: reader.result as string }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Array manipulation
    const addEducation = () => {
        setFormData(prev => ({
            ...prev,
            education: [...prev.education, { school: "", degree: "", field: "", startYear: "", endYear: "" }]
        }));
    };

    const removeEducation = (index: number) => {
        setFormData(prev => ({
            ...prev,
            education: prev.education.filter((_, i) => i !== index)
        }));
    };

    const updateEducation = (index: number, field: keyof Education, value: string) => {
        setFormData(prev => ({
            ...prev,
            education: prev.education.map((edu, i) => i === index ? { ...edu, [field]: value } : edu)
        }));
    };

    const addExperience = () => {
        setFormData(prev => ({
            ...prev,
            experience: [...prev.experience, { company: "", position: "", startDate: "", endDate: "", description: "" }]
        }));
    };

    const removeExperience = (index: number) => {
        setFormData(prev => ({
            ...prev,
            experience: prev.experience.filter((_, i) => i !== index)
        }));
    };

    const updateExperience = (index: number, field: keyof Experience, value: string) => {
        setFormData(prev => ({
            ...prev,
            experience: prev.experience.map((exp, i) => i === index ? { ...exp, [field]: value } : exp)
        }));
    };

    const handleSubmit = async () => {
        if (!selectedTemplate) {
            alert("Vui lòng chọn một mẫu CV");
            setActiveTab("edit");
            setOpenSection("template");
            return;
        }

        setLoading(true);
        try {
            const parsedSkills = formData.skills ? formData.skills.split(",").map(s => s.trim()).filter(s => s) : [];
            const parsedHobbies = formData.hobbies ? formData.hobbies.split(",").map(s => s.trim()).filter(s => s) : [];

            const res = await saveUserCV({
                templateId: selectedTemplate,
                title: cvTitle,
                content: {
                    ...formData,
                    skills: parsedSkills,
                    hobbies: parsedHobbies
                }
            });

            if (res.success) {
                alert("CV của bạn đã được lưu thành công!");
                setActiveTab("preview");
            } else {
                alert(res.error || "Có lỗi xảy ra khi lưu CV");
            }
        } catch (error) {
            console.error("Error saving CV:", error);
            alert("Lỗi kết nối. Vui lòng thử lại.");
        } finally {
            setLoading(false);
        }
    };

    // UI Styles
    const inputStyle = {
        width: "100%", padding: "0.75rem 1rem", borderRadius: "8px",
        border: "1px solid var(--border)", background: "var(--bg-card)",
        color: "var(--text)", fontSize: "0.9375rem", outline: "none",
        transition: "border-color 0.2s",
    };

    const labelStyle = {
        display: "block", fontSize: "0.875rem", fontWeight: 600,
        color: "var(--text)", marginBottom: "0.5rem",
    };

    const primaryButtonStyle = {
        padding: "0.875rem 2rem", borderRadius: "8px", border: "none", background: "var(--primary)",
        color: "#fff", fontWeight: 600, fontSize: "1rem", cursor: "pointer",
        transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem"
    };

    const outlineButtonStyle = {
        padding: "0.875rem 2rem", borderRadius: "8px", border: "1.5px solid var(--primary)", background: "transparent",
        color: "var(--primary)", fontWeight: 600, fontSize: "1rem", cursor: "pointer",
        transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem"
    };

    const dashedButtonStyle = {
        padding: "0.75rem 1.5rem", borderRadius: "8px", border: "1.5px dashed var(--primary)", background: "rgba(var(--primary-rgb), 0.05)",
        color: "var(--primary)", fontWeight: 600, fontSize: "0.9375rem", cursor: "pointer", width: "100%",
        transition: "all 0.2s"
    };

    const AccordionHeader = ({ id, title }: { id: string, title: string }) => (
        <div
            onClick={() => setOpenSection(openSection === id ? "" : id)}
            style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "1rem 1.5rem", background: openSection === id ? "rgba(var(--primary-rgb), 0.05)" : "var(--bg)",
                borderBottom: "1px solid var(--border)", cursor: "pointer",
                transition: "all 0.2s"
            }}
        >
            <h3 style={{ fontSize: "1rem", fontWeight: 400, color: openSection === id ? "var(--primary)" : "var(--text)" }}>
                {title}
            </h3>
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", transform: openSection === id ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
                ▼
            </span>
        </div>
    );

    const formatDataForRenderer = () => ({
        ...formData,
        name: formData.fullName,
        skills: formData.skills ? formData.skills.split(",").map(s => s.trim()).filter(s => s) : [],
        hobbies: formData.hobbies ? formData.hobbies.split(",").map(s => s.trim()).filter(s => s) : [],
    });

    return (
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>

            {/* TABS HEADER */}
            <div className="flex flex-col sm:flex-row justify-center" style={{ gap: "1rem", marginBottom: "2rem" }}>
                <button
                    onClick={() => setActiveTab("edit")}
                    style={{
                        padding: "0.75rem 2rem", borderRadius: "30px", fontWeight: 600,
                        border: activeTab === "edit" ? "none" : "1.5px solid var(--border)",
                        background: activeTab === "edit" ? "var(--primary)" : "transparent",
                        color: activeTab === "edit" ? "#fff" : "var(--text)",
                        cursor: "pointer", fontSize: "1rem", transition: "all 0.2s",
                        width: "100%"
                    }}
                    className="sm:w-auto"
                >
                    Chỉnh sửa CV
                </button>
                <button
                    onClick={() => setActiveTab("preview")}
                    style={{
                        padding: "0.75rem 2rem", borderRadius: "30px", fontWeight: 600,
                        border: activeTab === "preview" ? "none" : "1.5px solid var(--border)",
                        background: activeTab === "preview" ? "var(--primary)" : "transparent",
                        color: activeTab === "preview" ? "#fff" : "var(--text)",
                        cursor: "pointer", fontSize: "1rem", transition: "all 0.2s",
                        width: "100%"
                    }}
                    className="sm:w-auto"
                >
                    Xem trước & In ấn
                </button>
            </div>

            <div className="card" style={{ display: "flex", flexDirection: "column", minHeight: "70vh", overflow: "hidden", borderRadius: "12px", border: "1px solid var(--border)" }}>

                {/* --- EDITOR TAB --- */}
                {activeTab === "edit" && (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", background: "var(--bg-card)" }}>

                        {/* 1. MẪU CV */}
                        <div>
                            <AccordionHeader id="template" title="1. Chọn Mẫu CV & Tiêu đề" />
                            {openSection === "template" && (
                                <div style={{ padding: "1.5rem" }}>
                                    <div style={{ marginBottom: "1.5rem" }}>
                                        <label style={labelStyle}>Tên File CV của bạn (để quản lý)</label>
                                        <input type="text" value={cvTitle} onChange={(e) => setCvTitle(e.target.value)} placeholder="VD: CV_Backend_NguyenVanA" style={inputStyle} />
                                    </div>

                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1.5rem" }}>
                                        {templates.map((t) => (
                                            <div
                                                key={t.id}
                                                onClick={() => { setSelectedTemplate(t.id); setSelectedTemplateData(t); }}
                                                style={{
                                                    cursor: "pointer", borderRadius: "12px", padding: "4px", transition: "all 0.2s",
                                                    border: selectedTemplate === t.id ? "2px solid var(--primary)" : "2px solid transparent",
                                                    background: selectedTemplate === t.id ? "rgba(var(--primary-rgb), 0.05)" : "transparent"
                                                }}
                                            >
                                                <div style={{
                                                    aspectRatio: "1/1.4", background: "var(--bg-card)", borderRadius: "8px",
                                                    marginBottom: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center",
                                                    overflow: "hidden", border: "1px solid var(--border)"
                                                }}>
                                                    {t.thumbnailUrl ? (
                                                        <img src={t.thumbnailUrl} alt={t.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                    ) : (
                                                        <div style={{
                                                            width: "100%", height: "100%", background: t.styleConfig?.primaryColor || "#ddd",
                                                            color: "#fff", fontSize: "0.875rem", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "1rem"
                                                        }}>
                                                            {t.name}
                                                        </div>
                                                    )}
                                                </div>
                                                <h3 style={{ fontSize: "1rem", fontWeight: 700, textAlign: "center", marginBottom: "0.25rem" }}>{t.name}</h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 2. THÔNG TIN CÁ NHÂN */}
                        <div>
                            <AccordionHeader id="personal" title="2. Thông tin cá nhân & Liên hệ" />
                            {openSection === "personal" && (
                                <div style={{ padding: "1.5rem", display: "grid", gap: "1.5rem" }}>
                                    <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start w-full">
                                        <div style={{
                                            width: "100px", height: "100px", borderRadius: "50%", background: "var(--bg)",
                                            border: "2px dashed var(--border)", display: "flex", alignItems: "center", justifyContent: "center",
                                            overflow: "hidden", position: "relative", flexShrink: 0
                                        }}>
                                            {formData.avatar ? (
                                                <img src={formData.avatar} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                            ) : (
                                                <span style={{ fontSize: "2rem", color: "var(--text-muted)" }}>📷</span>
                                            )}
                                        </div>
                                        <div style={{ flex: 1, width: "100%", textAlign: "center" }} className="sm:text-left">
                                            <label style={labelStyle}>Ảnh đại diện</label>
                                            <input type="file" accept="image/*" onChange={handleAvatarUpload} style={{ paddingTop: "0.5rem", width: "100%" }} />
                                            <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>Chọn ảnh vuông, kích thước nhỏ gọn (dưới 2MB).</p>
                                        </div>
                                    </div>

                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                                        <div>
                                            <label style={labelStyle}>Họ và tên *</label>
                                            <input type="text" value={formData.fullName} onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))} placeholder="Nguyễn Văn A" style={inputStyle} />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Vị trí ứng tuyển (Job Title)</label>
                                            <input type="text" value={formData.jobTitle} onChange={(e) => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))} placeholder="Frontend Developer" style={inputStyle} />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Email *</label>
                                            <input type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} placeholder="email@example.com" style={inputStyle} />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Số điện thoại</label>
                                            <input type="tel" value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))} placeholder="0123 456 789" style={inputStyle} />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>Địa chỉ</label>
                                            <input type="text" value={formData.location} onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))} placeholder="Hà Nội, TP.HCM,..." style={inputStyle} />
                                        </div>
                                        <div>
                                            <label style={labelStyle}>LinkedIn / Website (Tuỳ chọn)</label>
                                            <input type="text" value={formData.linkedin} onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))} placeholder="https://linkedin.com/in/yourname" style={inputStyle} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 3. MỤC TIÊU & KỸ NĂNG */}
                        <div>
                            <AccordionHeader id="objective" title="3. Mục tiêu & Kỹ năng" />
                            {openSection === "objective" && (
                                <div style={{ padding: "1.5rem", display: "grid", gap: "1.5rem" }}>
                                    <div>
                                        <label style={labelStyle}>Mục tiêu nghề nghiệp / Giới thiệu bản thân</label>
                                        <textarea value={formData.summary} onChange={(e) => setFormData(prev => ({ ...prev, summary: e.target.value }))} placeholder="Tôi là một lập trình viên với 3 năm kinh nghiệm, mong muốn tìm kiếm một môi trường năng động..." rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Kỹ năng chuyên môn (phân cách bằng dấu phẩy)</label>
                                        <input type="text" value={formData.skills} onChange={(e) => setFormData(prev => ({ ...prev, skills: e.target.value }))} placeholder="ReactJS, Node.js, Typescript, SQL..." style={inputStyle} />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Sở thích cá nhân (phân cách bằng dấu phẩy)</label>
                                        <input type="text" value={formData.hobbies} onChange={(e) => setFormData(prev => ({ ...prev, hobbies: e.target.value }))} placeholder="Đọc sách, Du lịch, Code dạo..." style={inputStyle} />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 4. KINH NGHIỆM */}
                        <div>
                            <AccordionHeader id="experience" title="4. Kinh nghiệm làm việc" />
                            {openSection === "experience" && (
                                <div style={{ padding: "1.5rem" }}>
                                    {formData.experience.map((exp, index) => (
                                        <div key={index} style={{ padding: "1.5rem", background: "var(--bg)", borderRadius: "8px", position: "relative", marginBottom: "1rem", border: "1px solid var(--border)" }}>
                                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
                                                <div>
                                                    <label style={labelStyle}>Công ty</label>
                                                    <input type="text" value={exp.company} onChange={(e) => updateExperience(index, "company", e.target.value)} placeholder="Tên công ty" style={inputStyle} />
                                                </div>
                                                <div>
                                                    <label style={labelStyle}>Vị trí / Chức vụ</label>
                                                    <input type="text" value={exp.position} onChange={(e) => updateExperience(index, "position", e.target.value)} placeholder="VD: Backend Developer" style={inputStyle} />
                                                </div>
                                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "1rem", gridColumn: "1 / -1" }}>
                                                    <div>
                                                        <label style={labelStyle}>Bắt đầu (Tháng/Năm)</label>
                                                        <input type="text" value={exp.startDate} onChange={(e) => updateExperience(index, "startDate", e.target.value)} placeholder="01/2021" style={inputStyle} />
                                                    </div>
                                                    <div>
                                                        <label style={labelStyle}>Kết thúc (Tháng/Năm hoặc 'Hiện tại')</label>
                                                        <input type="text" value={exp.endDate} onChange={(e) => updateExperience(index, "endDate", e.target.value)} placeholder="Hiện tại" style={inputStyle} />
                                                    </div>
                                                </div>
                                            </div>
                                            <label style={labelStyle}>Mô tả công việc</label>
                                            <textarea value={exp.description} onChange={(e) => updateExperience(index, "description", e.target.value)} placeholder="Mô tả chi tiết những gì bạn đã làm và đạt được..." rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                                        </div>
                                    ))}
                                    <button onClick={addExperience} style={dashedButtonStyle}>+ Thêm Kinh Nghiệm</button>
                                </div>
                            )}
                        </div>

                        {/* 5. HỌC VẤN */}
                        <div>
                            <AccordionHeader id="education" title="5. Học vấn" />
                            {openSection === "education" && (
                                <div style={{ padding: "1.5rem" }}>
                                    {formData.education.map((edu, index) => (
                                        <div key={index} style={{ padding: "1.5rem", background: "var(--bg)", borderRadius: "8px", position: "relative", marginBottom: "1rem", border: "1px solid var(--border)" }}>
                                            <button onClick={() => removeEducation(index)} style={{ position: "absolute", top: "0.5rem", right: "0.5rem", background: "none", border: "none", color: "var(--danger)", cursor: "pointer", fontSize: "1.5rem", fontWeight: "bold" }}>×</button>
                                            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "1rem" }}>
                                                <div>
                                                    <label style={labelStyle}>Trường / Tổ chức</label>
                                                    <input type="text" value={edu.school} onChange={(e) => updateEducation(index, "school", e.target.value)} placeholder="VD: Đại học Bách Khoa" style={inputStyle} />
                                                </div>
                                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
                                                    <div>
                                                        <label style={labelStyle}>Bằng cấp</label>
                                                        <input type="text" value={edu.degree} onChange={(e) => updateEducation(index, "degree", e.target.value)} placeholder="VD: Cử nhân" style={inputStyle} />
                                                    </div>
                                                    <div>
                                                        <label style={labelStyle}>Ngành học</label>
                                                        <input type="text" value={edu.field} onChange={(e) => updateEducation(index, "field", e.target.value)} placeholder="VD: Khoa học máy tính" style={inputStyle} />
                                                    </div>
                                                </div>
                                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
                                                    <div>
                                                        <label style={labelStyle}>Năm học (Bắt đầu)</label>
                                                        <input type="text" value={edu.startYear} onChange={(e) => updateEducation(index, "startYear", e.target.value)} placeholder="2018" style={inputStyle} />
                                                    </div>
                                                    <div>
                                                        <label style={labelStyle}>Năm học (Kết thúc)</label>
                                                        <input type="text" value={edu.endYear} onChange={(e) => updateEducation(index, "endYear", e.target.value)} placeholder="2022" style={inputStyle} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={addEducation} style={dashedButtonStyle}>+ Thêm Học Vấn</button>
                                </div>
                            )}
                        </div>

                        {/* SUBMIT BUTTON SECTION */}
                        <div style={{ padding: "1.5rem", background: "var(--bg)", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "flex-end" }}>
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                style={{ ...primaryButtonStyle, opacity: loading ? 0.7 : 1, width: "100%", maxWidth: "300px" }}
                            >
                                {loading ? "Đang lưu..." : "Lưu CV & Preview"}
                            </button>
                        </div>
                    </div>
                )}

                {/* --- PREVIEW TAB --- */}
                {activeTab === "preview" && (
                    <div style={{ background: "var(--bg)", padding: "2rem 1rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem", width: "100%" }}>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                            <button
                                onClick={() => handlePrint()}
                                style={{ ...primaryButtonStyle, width: "100%", padding: "0.5rem 1rem" }}
                                className="w-full"
                            >
                                In / Tải Xuống
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                style={{ ...outlineButtonStyle, opacity: loading ? 0.7 : 1, width: "100%", padding: "0.5rem 1rem" }}
                                className="w-full"
                            >
                                {loading ? "Đang lưu..." : "Lưu Thay Đổi"}
                            </button>
                        </div>
                        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", textAlign: "center", maxWidth: "600px" }}>
                            Mẹo: Ấn nút In, sau đó chọn <strong>Save as PDF (Lưu thành PDF)</strong>, bỏ tuỳ chọn <strong>Header & Footer</strong> và bật <strong>Background Graphics</strong> để chất lượng hoàn hảo.
                        </p>

                        <div className="w-full flex justify-center pb-8">
                            <div style={{
                                width: `${794 * previewScale}px`,
                                height: `${1123 * previewScale}px`,
                            }}>
                                <div style={{
                                    width: "794px", minWidth: "794px", minHeight: "1123px", background: "#fff",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)", transformOrigin: "top left",
                                    transform: `scale(${previewScale})`,
                                }}>
                                    {selectedTemplateData ? (
                                        <CVRenderer
                                            ref={componentRef}
                                            data={formatDataForRenderer()}
                                            template={selectedTemplateData}
                                        />
                                    ) : (
                                        <div style={{ padding: "40px", textAlign: "center", color: "#666" }}>Vui lòng chọn mẫu CV ở tab Chỉnh sửa.</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
}
