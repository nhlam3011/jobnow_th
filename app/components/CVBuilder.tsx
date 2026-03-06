"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCVTemplates, saveUserCV } from "@/app/actions/cv";
import dynamic from "next/dynamic";

import { PDFDownloadLink } from "@react-pdf/renderer";

// Import CVRenderer dynamically to avoid SSR issues
const CVRenderer = dynamic(() => import("./CVRenderer"), { ssr: false });

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
 * Component CVBuilder: Giao diện từng bước (Multi-step form) giúp ứng viên tạo CV.
 * Luồng đi: 1. Chọn mẫu -> 2. Thông tin cá nhân -> 3. Tóm tắt -> 4. Học vấn -> 5. Kinh nghiệm -> 6. Preview & Tải về.
 */
export default function CVBuilder() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [templates, setTemplates] = useState<any[]>([]);
    const [selectedTemplate, setSelectedTemplate] = useState<string>("");
    const [selectedTemplateData, setSelectedTemplateData] = useState<any>(null);
    const [cvTitle, setCvTitle] = useState("My Professional CV");
    const [formData, setFormData] = useState({
        // Personal Info
        fullName: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        portfolio: "",
        // Summary
        summary: "",
        // Skills
        skills: "",
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
            education: prev.education.map((edu, i) =>
                i === index ? { ...edu, [field]: value } : edu
            )
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
            experience: prev.experience.map((exp, i) =>
                i === index ? { ...exp, [field]: value } : exp
            )
        }));
    };

    const handleSubmit = async () => {
        if (!selectedTemplate) {
            alert("Vui lòng chọn một mẫu CV");
            setStep(1);
            return;
        }

        setLoading(true);
        try {
            const res = await saveUserCV({
                templateId: selectedTemplate,
                title: cvTitle,
                content: {
                    ...formData,
                    skills: formData.skills.split(",").map(s => s.trim()).filter(s => s)
                }
            });

            if (res.success) {
                alert("CV của bạn đã được lưu thành công!");
                setStep(6); // Chuyển đến trang xem trước/tải về
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

    const inputStyle = {
        width: "100%",
        padding: "0.75rem 1rem",
        borderRadius: "8px",
        border: "1.5px solid var(--border)",
        background: "var(--bg-card)",
        color: "var(--text)",
        fontSize: "0.9375rem",
        outline: "none",
        transition: "border-color 0.2s",
    };

    const labelStyle = {
        display: "block",
        fontSize: "0.875rem",
        fontWeight: 600,
        color: "var(--text)",
        marginBottom: "0.5rem",
    };

    return (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {/* Progress Steps */}
            <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "2rem" }}>
                {[1, 2, 3, 4, 5, 6].map((s) => (
                    <div
                        key={s}
                        onClick={() => step >= s && setStep(s)}
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            cursor: step >= s ? "pointer" : "default",
                            background: step === s ? "var(--primary)" : step > s ? "var(--tag-bg)" : "var(--border)",
                            color: step === s ? "#fff" : step > s ? "var(--primary)" : "var(--text-muted)",
                            border: step === s ? "none" : "1.5px solid var(--border)",
                            transition: "all 0.2s",
                        }}
                    >
                        {s === 6 ? "✓" : s}
                    </div>
                ))}
            </div>

            <div className="card" style={{ padding: "2rem", minHeight: "500px" }}>
                {/* Step 1: Template Selection */}
                {step === 1 && (
                    <div>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                            Chọn mẫu CV
                        </h2>
                        <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                            Bắt đầu bằng việc chọn một thiết kế phù hợp với phong cách của bạn
                        </p>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                            {templates.map((t) => (
                                <div
                                    key={t.id}
                                    onClick={() => {
                                        setSelectedTemplate(t.id);
                                        setSelectedTemplateData(t);
                                    }}
                                    style={{
                                        cursor: "pointer",
                                        borderRadius: "12px",
                                        border: selectedTemplate === t.id ? "2px solid var(--primary)" : "2px solid transparent",
                                        padding: "4px",
                                        transition: "all 0.2s",
                                        background: selectedTemplate === t.id ? "rgba(var(--primary-rgb), 0.05)" : "transparent"
                                    }}
                                >
                                    <div style={{
                                        aspectRatio: "1/1.4",
                                        background: t.styleConfig.primaryColor,
                                        borderRadius: "8px",
                                        marginBottom: "0.75rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#fff",
                                        fontSize: "0.875rem",
                                        fontWeight: 600,
                                        textAlign: "center",
                                        padding: "1rem"
                                    }}>
                                        {t.name}
                                    </div>
                                    <h3 style={{ fontSize: "1rem", fontWeight: 700, textAlign: "center", marginBottom: "0.25rem" }}>{t.name}</h3>
                                    <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textAlign: "center" }}>{t.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 2: Personal Info & Title */}
                {step === 2 && (
                    <div>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem" }}>
                            Thông tin cá nhân & Tiêu đề
                        </h2>
                        <div style={{ display: "grid", gap: "1rem" }}>
                            <div>
                                <label style={labelStyle}>Tên CV của bạn (Ví dụ: CV Backend Developer)</label>
                                <input
                                    type="text"
                                    value={cvTitle}
                                    onChange={(e) => setCvTitle(e.target.value)}
                                    placeholder="My Professional CV"
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Họ và tên *</label>
                                <input
                                    type="text"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                                    placeholder="Nguyễn Văn A"
                                    style={inputStyle}
                                />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                <div>
                                    <label style={labelStyle}>Email *</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                        placeholder="email@example.com"
                                        style={inputStyle}
                                    />
                                </div>
                                <div>
                                    <label style={labelStyle}>Số điện thoại</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                        placeholder="0123 456 789"
                                        style={inputStyle}
                                    />
                                </div>
                            </div>
                            <div>
                                <label style={labelStyle}>Địa chỉ</label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                                    placeholder="Hà Nội, TP.HCM,..."
                                    style={inputStyle}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Summary & Skills */}
                {step === 3 && (
                    <div>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1.5rem" }}>
                            Tóm tắt & Kỹ năng
                        </h2>
                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            <div>
                                <label style={labelStyle}>Giới thiệu bản thân</label>
                                <textarea
                                    value={formData.summary}
                                    onChange={(e) => setFormData(prev => ({ ...prev, summary: e.target.value }))}
                                    placeholder="Mô tả ngắn về bản thân, mục tiêu nghề nghiệp..."
                                    rows={5}
                                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Kỹ năng (phân cách bằng dấu phẩy)</label>
                                <input
                                    type="text"
                                    value={formData.skills}
                                    onChange={(e) => setFormData(prev => ({ ...prev, skills: e.target.value }))}
                                    placeholder="React, TypeScript, Node.js,..."
                                    style={inputStyle}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: Education */}
                {step === 4 && (
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                            <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>Học vấn</h2>
                            <button
                                onClick={addEducation}
                                style={{
                                    padding: "0.5rem 1rem",
                                    borderRadius: "8px",
                                    border: "none",
                                    background: "var(--primary)",
                                    color: "#fff",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    fontSize: "0.875rem",
                                }}
                            >
                                + Thêm
                            </button>
                        </div>

                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            {formData.education.map((edu, index) => (
                                <div key={index} style={{ padding: "1rem", background: "var(--bg)", borderRadius: "8px", position: "relative" }}>
                                    <button
                                        onClick={() => removeEducation(index)}
                                        style={{
                                            position: "absolute",
                                            top: "0.5rem",
                                            right: "0.5rem",
                                            background: "none",
                                            border: "none",
                                            color: "var(--text-muted)",
                                            cursor: "pointer",
                                            fontSize: "1.25rem",
                                        }}
                                    >
                                        ×
                                    </button>
                                    <div style={{ display: "grid", gap: "0.75rem" }}>
                                        <input
                                            type="text"
                                            value={edu.school}
                                            onChange={(e) => updateEducation(index, "school", e.target.value)}
                                            placeholder="Tên trường đại học"
                                            style={inputStyle}
                                        />
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                                            <input
                                                type="text"
                                                value={edu.degree}
                                                onChange={(e) => updateEducation(index, "degree", e.target.value)}
                                                placeholder="Bằng cấp"
                                                style={inputStyle}
                                            />
                                            <input
                                                type="text"
                                                value={edu.field}
                                                onChange={(e) => updateEducation(index, "field", e.target.value)}
                                                placeholder="Ngành học"
                                                style={inputStyle}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 5: Experience */}
                {step === 5 && (
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                            <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>Kinh nghiệm làm việc</h2>
                            <button
                                onClick={addExperience}
                                style={{
                                    padding: "0.5rem 1rem",
                                    borderRadius: "8px",
                                    border: "none",
                                    background: "var(--primary)",
                                    color: "#fff",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    fontSize: "0.875rem",
                                }}
                            >
                                + Thêm
                            </button>
                        </div>

                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            {formData.experience.map((exp, index) => (
                                <div key={index} style={{ padding: "1rem", background: "var(--bg)", borderRadius: "8px", position: "relative" }}>
                                    <button
                                        onClick={() => removeExperience(index)}
                                        style={{
                                            position: "absolute",
                                            top: "0.5rem",
                                            right: "0.5rem",
                                            background: "none",
                                            border: "none",
                                            color: "var(--text-muted)",
                                            cursor: "pointer",
                                            fontSize: "1.25rem",
                                        }}
                                    >
                                        ×
                                    </button>
                                    <div style={{ display: "grid", gap: "0.75rem" }}>
                                        <input
                                            type="text"
                                            value={exp.company}
                                            onChange={(e) => updateExperience(index, "company", e.target.value)}
                                            placeholder="Tên công ty"
                                            style={inputStyle}
                                        />
                                        <textarea
                                            value={exp.description}
                                            onChange={(e) => updateExperience(index, "description", e.target.value)}
                                            placeholder="Mô tả công việc..."
                                            rows={3}
                                            style={{ ...inputStyle, resize: "vertical" }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 6: Preview & Export */}
                {step === 6 && (
                    <div style={{ textAlign: "center" }}>
                        <div style={{ marginBottom: "2rem" }}>
                            <div style={{
                                width: "64px",
                                height: "64px",
                                borderRadius: "50%",
                                background: "rgba(34, 197, 94, 0.1)",
                                color: "#22c55e",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0 auto 1rem",
                                fontSize: "2rem"
                            }}>
                                ✓
                            </div>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>Sẵn sàng tải về!</h2>
                            <p style={{ color: "var(--text-muted)" }}>Hệ thống đã tạo CV của bạn dưới dạng PDF chuyên nghiệp.</p>
                        </div>

                        <div style={{
                            background: "var(--bg)",
                            borderRadius: "12px",
                            padding: "2rem",
                            marginBottom: "2rem",
                            border: "1px dashed var(--border)"
                        }}>
                            {PDFDownloadLink && CVRenderer && selectedTemplateData && (
                                <PDFDownloadLink
                                    document={<CVRenderer
                                        data={{
                                            ...formData,
                                            name: formData.fullName,
                                            skills: formData.skills.split(",").map(s => s.trim()).filter(s => s)
                                        }}
                                        template={selectedTemplateData}
                                    />}
                                    fileName={`${cvTitle.replace(/ /g, "_")}.pdf`}
                                    style={{
                                        textDecoration: "none",
                                        padding: "1rem 2rem",
                                        color: "#fff",
                                        backgroundColor: "var(--primary)",
                                        borderRadius: "8px",
                                        fontWeight: 600,
                                        display: "inline-block"
                                    }}
                                >
                                    {({ blob, url, loading, error }: any) =>
                                        loading ? "Đang chuẩn bị file..." : "Tải xuống CV (PDF)"
                                    }
                                </PDFDownloadLink>
                            )}
                        </div>

                        <button
                            onClick={() => router.push("/candidate/profile")}
                            style={{
                                background: "transparent",
                                border: "none",
                                color: "var(--primary)",
                                fontWeight: 600,
                                cursor: "pointer",
                                textDecoration: "underline"
                            }}
                        >
                            Về trang cá nhân
                        </button>
                    </div>
                )}
            </div>

            {/* Navigation Buttons */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
                {step > 1 && step < 6 ? (
                    <button
                        onClick={() => setStep(prev => prev - 1)}
                        style={{
                            padding: "0.75rem 1.5rem",
                            borderRadius: "8px",
                            border: "1.5px solid var(--border)",
                            background: "transparent",
                            color: "var(--text)",
                            fontWeight: 600,
                            cursor: "pointer",
                        }}
                    >
                        Quay lại
                    </button>
                ) : (
                    <div />
                )}

                {step < 5 ? (
                    <button
                        onClick={() => setStep(prev => prev + 1)}
                        style={{
                            padding: "0.75rem 1.5rem",
                            borderRadius: "8px",
                            border: "none",
                            background: "var(--primary)",
                            color: "#fff",
                            fontWeight: 600,
                            cursor: "pointer",
                        }}
                    >
                        Tiếp theo
                    </button>
                ) : step === 5 ? (
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        style={{
                            padding: "0.75rem 2rem",
                            borderRadius: "8px",
                            border: "none",
                            background: "var(--cta)",
                            color: "#fff",
                            fontWeight: 600,
                            cursor: loading ? "not-allowed" : "pointer",
                            opacity: loading ? 0.7 : 1,
                        }}
                    >
                        {loading ? "Đang lưu..." : "Lưu & Xem PDF"}
                    </button>
                ) : (
                    <button
                        onClick={() => setStep(1)}
                        style={{
                            padding: "0.75rem 1.5rem",
                            borderRadius: "8px",
                            border: "1.5px solid var(--border)",
                            background: "transparent",
                            color: "var(--text)",
                            fontWeight: 600,
                            cursor: "pointer",
                        }}
                    >
                        Tạo CV mới
                    </button>
                )}
            </div>
        </div>
    );
}
