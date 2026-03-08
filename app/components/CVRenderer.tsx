"use client";

import React, { forwardRef } from "react";
import InlineEdit from "./InlineEdit";

interface CVRendererProps {
    data: any;
    template: any;
    onDataChange?: (field: string, value: string, index?: number, subfield?: string) => void;
    onConfigChange?: (type: "style" | "layout", field: string, value: any) => void;
    readOnly?: boolean;
}

/**
 * CVRenderer: Render CV từ data + template config.
 * Hỗ trợ 4 layout: sidebar-left, sidebar-right, top-header, two-column
 * Hỗ trợ Inline Editing khi truyền onDataChange và readOnly=false
 */
const CVRenderer = forwardRef<HTMLDivElement, CVRendererProps>(({ data, template, onDataChange, onConfigChange, readOnly = true }, ref) => {
    const { styleConfig, layoutConfig } = template;
    const layout = layoutConfig?.layout || "sidebar-left";
    const baseFontSize = (styleConfig?.fontSize || 10) * 1.2;
    const primaryColor = styleConfig?.primaryColor || "#0056b3";
    const secondaryColor = styleConfig?.secondaryColor || "#FFFFFF";
    const fontFamily = styleConfig?.fontFamily || "'Inter', 'Roboto', sans-serif";
    const lineHeightVal = styleConfig?.lineHeight || 1.6;
    const bgImage = styleConfig?.bgImage || "none";
    const customCss = styleConfig?.customCss || "";

    // New style configs
    const avatarRadius = styleConfig?.avatarRadius ?? "50%";
    const sectionSpacing = styleConfig?.sectionSpacing ?? "20px";
    const tagRadius = styleConfig?.tagRadius ?? "4px";
    const sidebarWidthPerc = styleConfig?.sidebarWidth || "35%";
    const bgOpacity = styleConfig?.bgOpacity ?? 1;

    const isVisible = (sectionId: string) => {
        if (!layoutConfig?.sections) return true;
        return layoutConfig.sections.includes(sectionId);
    };

    const getLabel = (id: string, defaultLabel: string) => {
        return layoutConfig?.labels?.[id] || defaultLabel;
    };

    const isSidebar = layout === "sidebar-left" || layout === "sidebar-right";
    const isDarkSidebar = isSidebar;

    const sidebarBg = isDarkSidebar ? primaryColor : "#f8f9fa";
    const sidebarText = isDarkSidebar ? "#ffffff" : "#333333";
    const sidebarMuted = isDarkSidebar ? "rgba(255,255,255,0.8)" : "#666";
    const sidebarBorder = isDarkSidebar ? "rgba(255,255,255,0.3)" : primaryColor;

    const handleFieldChange = (field: string, value: string) => {
        if (onDataChange) onDataChange(field, value);
    };

    const handleArrayChange = (field: string, index: number, subfield: string, value: string) => {
        if (onDataChange) onDataChange(field, value, index, subfield);
    };

    const handleTagChange = (field: "skills" | "hobbies", oldTags: string[], index: number, newValue: string) => {
        if (!onDataChange) return;
        const newTags = [...oldTags];
        newTags[index] = newValue;
        onDataChange(field, newTags.join(", "));
    };

    const handleLabelChange = (labelId: string, value: string) => {
        if (onConfigChange) {
            onConfigChange("layout", "labels", {
                ...(layoutConfig?.labels || {}),
                [labelId]: value
            });
        }
    };

    const handleDragStart = (e: React.DragEvent, sectionId: string) => {
        if (readOnly) return;
        e.dataTransfer.setData("sectionId", sectionId);
    };

    const handleDrop = (e: React.DragEvent, targetId: string) => {
        if (readOnly || !onConfigChange) return;
        e.preventDefault();
        const draggedId = e.dataTransfer.getData("sectionId");
        if (!draggedId || draggedId === targetId) return;

        const sections = [...(layoutConfig?.sections || [])];
        const dragIndex = sections.indexOf(draggedId);
        const dropIndex = sections.indexOf(targetId);

        if (dragIndex !== -1 && dropIndex !== -1) {
            sections.splice(dragIndex, 1);
            sections.splice(dropIndex, 0, draggedId);
            onConfigChange("layout", "sections", sections);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        if (readOnly) return;
        e.preventDefault();
    };

    // ===== STYLES =====
    const s = {
        page: {
            display: "flex",
            flexDirection: (layout === "top-header" ? "column" : "row") as "row" | "column",
            backgroundColor: secondaryColor,
            minHeight: "1123px", width: "794px",
            padding: 0, fontFamily, color: "#333",
            margin: "0 auto", boxSizing: "border-box" as const,
            overflow: "hidden",
            position: "relative" as const,
        },
        bgOverlay: {
            position: "absolute" as const,
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: bgImage !== "none" ? bgImage : "none",
            backgroundSize: "cover",
            opacity: bgOpacity,
            zIndex: 0,
            pointerEvents: "none" as const,
        },
        sidebar: {
            width: layout === "top-header" ? "100%" : layout === "two-column" ? "50%" : sidebarWidthPerc,
            backgroundColor: layout === "two-column" ? secondaryColor : sidebarBg,
            color: layout === "two-column" ? "#333" : sidebarText,
            padding: layout === "top-header" ? "36px 40px" : "40px 28px",
            boxSizing: "border-box" as const,
            display: "flex", flexDirection: "column" as const, gap: sectionSpacing,
            order: layout === "sidebar-right" ? 2 : 1,
            borderRight: layout === "two-column" ? `2px solid ${primaryColor}` : "none",
            position: "relative" as const, zIndex: 1,
        },
        main: {
            width: layout === "top-header" ? "100%" : layout === "two-column" ? "50%" : `calc(100% - ${sidebarWidthPerc})`,
            backgroundColor: "#FFFFFF",
            padding: layout === "top-header" ? "32px 40px" : "40px 32px",
            boxSizing: "border-box" as const,
            display: "flex", flexDirection: "column" as const, gap: sectionSpacing,
            order: layout === "sidebar-right" ? 1 : 2,
            position: "relative" as const, zIndex: 1,
        },
        avatar: {
            width: layout === "top-header" ? "100px" : "110px",
            height: layout === "top-header" ? "100px" : "110px",
            borderRadius: avatarRadius, objectFit: "cover" as const,
            border: `3px solid ${isDarkSidebar && layout !== "two-column" ? "rgba(255,255,255,0.25)" : primaryColor}`,
        },
        nameTitle: {
            fontSize: `${baseFontSize + 14}px`, fontWeight: 800,
            color: layout === "two-column" ? primaryColor : (isDarkSidebar ? "#FFF" : primaryColor),
            textTransform: "uppercase" as const, letterSpacing: "1px", lineHeight: 1.2,
            marginBottom: "2px",
        },
        jobTitle: {
            fontSize: `${baseFontSize + 3}px`, fontWeight: 500,
            color: layout === "two-column" ? "#666" : sidebarMuted,
            textTransform: "uppercase" as const, letterSpacing: "2px",
            marginBottom: "12px",
        },
        contactList: {
            display: "flex", flexDirection: (layout === "top-header" ? "row" : "column") as "row" | "column",
            gap: layout === "top-header" ? "16px" : "7px",
            flexWrap: "wrap" as const,
            fontSize: `${baseFontSize}px`,
            color: layout === "two-column" ? "#444" : (isDarkSidebar ? "rgba(255,255,255,0.9)" : "#444"),
        },
        sectionTitle: {
            fontSize: `${baseFontSize + 3}px`, fontWeight: 700,
            color: layout === "two-column" ? primaryColor : (isDarkSidebar ? "#FFF" : primaryColor),
            textTransform: "uppercase" as const, letterSpacing: "1px",
            borderBottom: `2px solid ${layout === "two-column" ? primaryColor : sidebarBorder}`,
            paddingBottom: "5px", marginBottom: "12px",
        },
        mainSectionTitle: {
            fontSize: `${baseFontSize + 5}px`, fontWeight: 800,
            color: primaryColor, textTransform: "uppercase" as const,
            letterSpacing: "1px",
            borderBottom: `2px solid ${primaryColor}`,
            paddingBottom: "6px", marginBottom: "14px",
        },
        text: { fontSize: `${baseFontSize}px`, lineHeight: lineHeightVal, color: "#444" },
        tagContainer: { display: "flex", flexWrap: "wrap" as const, gap: "6px" },
        tag: {
            background: layout === "two-column" ? "rgba(0,0,0,0.06)" : (isDarkSidebar ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.05)"),
            color: layout === "two-column" ? "#333" : (isDarkSidebar ? "#FFF" : "#333"),
            padding: "3px 10px", borderRadius: tagRadius,
            fontSize: `${baseFontSize - 1}px`, fontWeight: 500,
        },
        expItem: { marginBottom: sectionSpacing },
        company: { fontWeight: 700, fontSize: `${baseFontSize + 1}px`, color: "#111" },
        position: { fontWeight: 600, fontSize: `${baseFontSize}px`, color: primaryColor, marginBottom: "3px" },
        date: { fontSize: `${baseFontSize - 1}px`, color: "#777", fontStyle: "italic", marginBottom: "6px", display: "block" },
    };

    // Map sections to their render logic
    const sectionMap: Record<string, () => React.ReactNode> = {
        contact: () => (
            <div style={s.contactList}>
                {(() => {
                    const ContactItem = ({ label, field, placeholder, onLabelChange }: { label: string, field: string, placeholder: string, onLabelChange?: (val: string) => void }) => {
                        if (!data[field] && readOnly) return null;
                        return (
                            <div style={{ display: "flex", gap: "6px", width: "100%", alignItems: "flex-start" }}>
                                <span style={{ fontWeight: 600, minWidth: layout === "top-header" ? "auto" : "90px" }}>
                                    <InlineEdit value={label} onChange={onLabelChange} readOnly={readOnly} />:
                                </span>
                                <div style={{ flex: 1, wordBreak: "break-word" }}>
                                    <InlineEdit value={data[field] || ""} onChange={(val) => handleFieldChange(field, val)} readOnly={readOnly} placeholder={placeholder} />
                                </div>
                            </div>
                        );
                    };
                    return (
                        <>
                            <ContactItem label={getLabel("dob", "Ngày sinh")} field="dob" placeholder="18/12/1997" onLabelChange={(val) => handleLabelChange("dob", val)} />
                            <ContactItem label={getLabel("gender", "Giới tính")} field="gender" placeholder="Nam / Nữ" onLabelChange={(val) => handleLabelChange("gender", val)} />
                            <ContactItem label={getLabel("phone", "Điện thoại")} field="phone" placeholder="0123 456 789" onLabelChange={(val) => handleLabelChange("phone", val)} />
                            <ContactItem label={getLabel("email", "Email")} field="email" placeholder="email@..." onLabelChange={(val) => handleLabelChange("email", val)} />
                            <ContactItem label={getLabel("location", "Địa chỉ")} field="location" placeholder="Quận 1, TP. HCM" onLabelChange={(val) => handleLabelChange("location", val)} />
                            <ContactItem label={getLabel("linkedin", "LinkedIn")} field="linkedin" placeholder="linkedin.com/in/..." onLabelChange={(val) => handleLabelChange("linkedin", val)} />
                            <ContactItem label={getLabel("portfolio", "Website")} field="portfolio" placeholder="your-portfolio.com" onLabelChange={(val) => handleLabelChange("portfolio", val)} />
                        </>
                    );
                })()}
            </div>
        ),
        skills: () => data.skills && data.skills.length > 0 && (
            <div>
                <div style={s.sectionTitle}>
                    <InlineEdit
                        value={getLabel("skills", "Kỹ năng")}
                        onChange={(val) => handleLabelChange("skills", val)}
                        readOnly={readOnly}
                        style={s.sectionTitle}
                    />
                </div>
                <div style={s.tagContainer}>
                    {data.skills.map((skill: string, i: number) => (
                        <InlineEdit
                            key={`skill-${i}`}
                            value={skill}
                            onChange={(val) => handleTagChange("skills", data.skills, i, val)}
                            readOnly={readOnly}
                            style={s.tag}
                        />
                    ))}
                </div>
            </div>
        ),
        hobbies: () => data.hobbies && data.hobbies.length > 0 && (
            <div>
                <div style={s.sectionTitle}>
                    <InlineEdit
                        value={getLabel("hobbies", "Sở thích")}
                        onChange={(val) => handleLabelChange("hobbies", val)}
                        readOnly={readOnly}
                        style={s.sectionTitle}
                    />
                </div>
                <div style={s.tagContainer}>
                    {data.hobbies.map((hobby: string, i: number) => (
                        <InlineEdit
                            key={`hobby-${i}`}
                            value={hobby}
                            onChange={(val) => handleTagChange("hobbies", data.hobbies, i, val)}
                            readOnly={readOnly}
                            style={s.tag}
                        />
                    ))}
                </div>
            </div>
        ),
        objective: () => (data.objective || data.summary) && (
            <div>
                <div style={layout === "two-column" ? s.sectionTitle : s.mainSectionTitle}>
                    <InlineEdit
                        value={getLabel("objective", layout === "two-column" ? "Mục tiêu" : "Mục tiêu nghề nghiệp")}
                        onChange={(val) => handleLabelChange("objective", val)}
                        readOnly={readOnly}
                        style={layout === "two-column" ? s.sectionTitle : s.mainSectionTitle}
                    />
                </div>
                <InlineEdit
                    value={data.objective || data.summary}
                    onChange={(val) => handleFieldChange("summary", val)}
                    readOnly={readOnly}
                    placeholder="Thêm mục tiêu nghề nghiệp"
                    style={{ ...s.text, color: "#444" }}
                    multiline
                />
            </div>
        ),
        experience: () => data.experience && data.experience.length > 0 && (
            <div>
                <div style={s.mainSectionTitle}>
                    <InlineEdit
                        value={getLabel("experience", "Kinh nghiệm làm việc")}
                        onChange={(val) => handleLabelChange("experience", val)}
                        readOnly={readOnly}
                        style={s.mainSectionTitle}
                    />
                </div>
                {data.experience.map((exp: any, i: number) => (
                    <div key={i} style={s.expItem}>
                        <div style={s.position}>
                            <InlineEdit value={exp.position} onChange={(val) => handleArrayChange("experience", i, "position", val)} readOnly={readOnly} placeholder="Vị trí" style={s.position} />
                        </div>
                        <div style={s.company}>
                            <InlineEdit value={exp.company} onChange={(val) => handleArrayChange("experience", i, "company", val)} readOnly={readOnly} placeholder="Tên công ty" style={s.company} />
                        </div>
                        <span style={s.date}>
                            <InlineEdit value={exp.startDate} onChange={(val) => handleArrayChange("experience", i, "startDate", val)} readOnly={readOnly} placeholder="Bắt đầu" /> -
                            <InlineEdit value={exp.endDate} onChange={(val) => handleArrayChange("experience", i, "endDate", val)} readOnly={readOnly} placeholder="Kết thúc" />
                        </span>
                        <InlineEdit
                            value={exp.description}
                            onChange={(val) => handleArrayChange("experience", i, "description", val)}
                            readOnly={readOnly}
                            placeholder="Mô tả công việc"
                            style={s.text}
                            multiline
                        />
                    </div>
                ))}
            </div>
        ),
        education: () => data.education && data.education.length > 0 && (
            <div>
                <div style={s.mainSectionTitle}>
                    <InlineEdit
                        value={getLabel("education", "Học vấn")}
                        onChange={(val) => handleLabelChange("education", val)}
                        readOnly={readOnly}
                        style={s.mainSectionTitle}
                    />
                </div>
                {data.education.map((edu: any, i: number) => (
                    <div key={i} style={s.expItem}>
                        <div style={s.position}>
                            <InlineEdit value={edu.degree} onChange={(val) => handleArrayChange("education", i, "degree", val)} readOnly={readOnly} placeholder="Bằng cấp" /> -
                            <InlineEdit value={edu.field} onChange={(val) => handleArrayChange("education", i, "field", val)} readOnly={readOnly} placeholder="Ngành học" />
                        </div>
                        <div style={s.company}>
                            <InlineEdit value={edu.school} onChange={(val) => handleArrayChange("education", i, "school", val)} readOnly={readOnly} placeholder="Trường / Cơ sở" style={s.company} />
                        </div>
                        <span style={s.date}>
                            <InlineEdit value={edu.startYear} onChange={(val) => handleArrayChange("education", i, "startYear", val)} readOnly={readOnly} placeholder="Năm bắt đầu" /> -
                            <InlineEdit value={edu.endYear} onChange={(val) => handleArrayChange("education", i, "endYear", val)} readOnly={readOnly} placeholder="Năm kết thúc" />
                        </span>
                    </div>
                ))}
            </div>
        ),
    };

    const sidebarSections = ["contact", "skills", "hobbies"];
    if (layout === "two-column") sidebarSections.push("objective");

    const renderSections = (availableIds: string[]) => {
        const currentSections = layoutConfig?.sections || ["objective", "experience", "education", "skills", "hobbies", "contact"];
        const sectionsToRender = currentSections.filter((id: string) => availableIds.includes(id));

        return sectionsToRender.map((id: string) => {
            const renderer = sectionMap[id];
            if (!renderer) return null;
            const content = renderer();
            if (!content) return null;
            return (
                <div
                    key={id}
                    draggable={!readOnly}
                    onDragStart={(e) => handleDragStart(e, id)}
                    onDrop={(e) => handleDrop(e, id)}
                    onDragOver={handleDragOver}
                    style={{
                        position: "relative",
                        cursor: readOnly ? "default" : "grab",
                        padding: !readOnly ? "4px" : "0",
                        margin: !readOnly ? "-4px" : "0",
                        borderRadius: "4px",
                        border: "1px solid transparent",
                        transition: "all 0.2s"
                    }}
                    onMouseEnter={e => !readOnly && (e.currentTarget.style.border = "1px dashed rgba(0,0,0,0.15)")}
                    onMouseLeave={e => !readOnly && (e.currentTarget.style.border = "1px solid transparent")}
                >
                    {content}
                </div>
            );
        });
    };

    // Final layout parts
    return (
        <div ref={ref} style={s.page} className="cv-page">
            {customCss && <style dangerouslySetInnerHTML={{ __html: customCss }} />}
            <div style={s.bgOverlay} />

            <div style={s.sidebar} data-section="sidebar">
                {data.avatar && (
                    <div style={{ display: "flex", justifyContent: layout === "top-header" ? "flex-start" : "center", marginBottom: "4px" }}>
                        <img src={data.avatar} alt="Avatar" style={s.avatar} />
                    </div>
                )}
                <div>
                    <h1 style={s.nameTitle}>
                        <InlineEdit value={data.name || data.fullName} onChange={(val) => handleFieldChange("fullName", val)} readOnly={readOnly} placeholder="Nguyễn Văn A" style={s.nameTitle} />
                    </h1>
                    <div style={s.jobTitle}>
                        <InlineEdit value={data.jobTitle} onChange={(val) => handleFieldChange("jobTitle", val)} readOnly={readOnly} placeholder="Vị trí ứng tuyển" style={s.jobTitle} />
                    </div>
                </div>
                {renderSections(sidebarSections)}
            </div>

            <div style={s.main} data-section="main">
                {renderSections(layout === "two-column" ? ["experience", "education"] : ["objective", "experience", "education"])}
            </div>
        </div>
    );
});

CVRenderer.displayName = "CVRenderer";
export default CVRenderer;
