"use client";

import React, { forwardRef, useState, useEffect, useRef } from "react";
import InlineEdit from "./InlineEdit";
import { 
    PhoneIcon, 
    EnvelopeIcon, 
    MapPinIcon, 
    GlobeAltIcon,
    DevicePhoneMobileIcon,
    AtSymbolIcon
} from "@heroicons/react/24/outline";

interface CVRendererProps {
    data: any;
    template: any;
    onDataChange?: (field: string, value: string, index?: number, subfield?: string) => void;
    onConfigChange?: (type: "style" | "layout", field: string, value: any) => void;
    onSectionSelect?: (sectionId: string) => void;
    selectedSectionId?: string | null;
    readOnly?: boolean;
}

const CVRenderer = forwardRef<HTMLDivElement, CVRendererProps>(({
    data, template, onDataChange, onConfigChange, onSectionSelect, selectedSectionId, readOnly = true
}, ref) => {
    const { styleConfig, layoutConfig } = template;
    const layout = layoutConfig?.layout || "sidebar-left";

    const [isResizing, setIsResizing] = useState(false);
    const [isDragging, setIsDragging] = useState<string | null>(null);
    const pageRef = useRef<HTMLDivElement>(null);

    const {
        primaryColor = "#0056b3",
        secondaryColor = "#FFFFFF",
        fontFamily = "'Inter', 'Roboto', sans-serif",
        fontSize = 10,
        lineHeight: lineHeightVal = 1.6,
        bgImage = "none",
        avatarRadius = "50%",
        sectionSpacing = "20px",
        tagRadius = "4px",
        sidebarWidth: sidebarWidthPerc = "35%",
        bgOpacity = 1,
        customCss = "",
        headingLineColor,
        headingLineHeight = 2,
        headingLineWidth = "100%",
        pagePadding = "40px",
        textAlign = "left",
        letterSpacing = "0px",
        itemSpacing = "12px",
        headingStyle = "solid"
    } = styleConfig || {};

    const activeHeadingColor = headingLineColor || primaryColor;
    const baseFontSize = fontSize * 1.2;

    const getSectionTitle = (id: string) => {
        const defaults: Record<string, string> = {
            objective: "Mục tiêu nghề nghiệp",
            experience: "Kinh nghiệm làm việc",
            education: "Học vấn",
            skills: "Kỹ năng",
            hobbies: "Sở thích",
            contact: "Thông tin liên hệ"
        };
        return layoutConfig?.labels?.[id] || defaults[id] || id.toUpperCase();
    };

    const isSidebar = layout === "sidebar-left" || layout === "sidebar-right" || layout === "split-pro";
    const isDarkSidebar = isSidebar;

    const sidebarWidth = layout === "split-pro" ? "50%" : (layout === "minimal-center" ? "0%" : sidebarWidthPerc);
    const mainWidth = layout === "split-pro" ? "50%" : (layout === "minimal-center" ? "100%" : `calc(100% - ${sidebarWidth})`);

    const sidebarBg = isDarkSidebar ? (styleConfig?.sidebarBg || primaryColor) : "#f8f9fa";
    const sidebarText = isDarkSidebar ? (styleConfig?.sidebarText || "#ffffff") : "#333333";
    const sidebarMuted = isDarkSidebar ? "rgba(255,255,255,0.8)" : "#666";
    const sidebarBorder = isDarkSidebar ? "rgba(255,255,255,0.3)" : primaryColor;

    // Resize logic
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isResizing || !pageRef.current || !onConfigChange) return;
            const rect = pageRef.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            let newWidthPerc = (mouseX / rect.width) * 100;
            if (layout === "sidebar-right") newWidthPerc = 100 - newWidthPerc;
            if (newWidthPerc < 15) newWidthPerc = 15;
            if (newWidthPerc > 70) newWidthPerc = 70;
            onConfigChange("style", "sidebarWidth", `${Math.round(newWidthPerc)}%`);
        };
        const handleMouseUp = () => setIsResizing(false);
        if (isResizing) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isResizing, onConfigChange, layout]);

    // Drag and drop logic
    const handleDragStart = (e: React.DragEvent, id: string) => {
        if (readOnly) return;
        setIsDragging(id);
        e.dataTransfer.setData("sectionId", id);
    };

    const handleDrop = (e: React.DragEvent, targetId: string) => {
        if (readOnly || !onConfigChange) return;
        e.preventDefault();
        setIsDragging(null);
        const draggedId = e.dataTransfer.getData("sectionId");
        if (!draggedId || draggedId === targetId) return;

        const sections = [...(layoutConfig?.sections || ["contact", "objective", "experience", "education", "skills", "hobbies"])];
        const dragIndex = sections.indexOf(draggedId);
        const dropIndex = sections.indexOf(targetId);

        if (dragIndex !== -1 && dropIndex !== -1) {
            sections.splice(dragIndex, 1);
            sections.splice(dropIndex, 0, draggedId);
            onConfigChange("layout", "sections", sections);
        }
    };

    const getMergedStyle = (id: string, baseStyle: any) => {
        const overrides = styleConfig.sectionStyles?.[id] || {};
        return {
            ...baseStyle,
            ...(overrides.marginTop !== undefined ? { marginTop: `${overrides.marginTop}px` } : {}),
            ...(overrides.marginBottom !== undefined ? { marginBottom: `${overrides.marginBottom}px` } : {}),
            ...(overrides.padding ? { padding: overrides.padding } : {}),
            ...(overrides.backgroundColor ? { backgroundColor: overrides.backgroundColor } : {}),
            ...(overrides.textAlign ? { textAlign: overrides.textAlign } : {}),
        };
    };

    const getMergedTitleStyle = (id: string, baseStyle: any) => {
        const overrides = styleConfig.sectionStyles?.[id]?.title || {};
        return {
            ...baseStyle,
            ...(overrides.fontSize ? { fontSize: `${overrides.fontSize}px` } : {}),
            ...(overrides.color ? { color: overrides.color } : {}),
            ...(overrides.fontWeight ? { fontWeight: overrides.fontWeight } : {}),
            ...(overrides.textTransform ? { textTransform: overrides.textTransform } : {}),
        };
    };

    const getMergedBodyStyle = (id: string, baseStyle: any) => {
        const overrides = styleConfig.sectionStyles?.[id]?.body || {};
        return {
            ...baseStyle,
            ...(overrides.fontSize ? { fontSize: `${overrides.fontSize}px` } : {}),
            ...(overrides.color ? { color: overrides.color } : {}),
            ...(overrides.lineHeight ? { lineHeight: overrides.lineHeight } : {}),
            ...(overrides.letterSpacing !== undefined ? { letterSpacing: `${overrides.letterSpacing}px` } : {}),
        };
    };

    const getSectionLineStyle = (id: string) => {
        const customColor = styleConfig.sectionStyles?.[id]?.lineColor || activeHeadingColor;
        return {
            ...s.sectionLine,
            background: headingStyle === "solid" ? customColor : "transparent",
            borderBottom: headingStyle !== "solid" ? `${headingLineHeight}px ${headingStyle} ${customColor}` : "none",
        };
    };

    const handleDragOver = (e: React.DragEvent) => {
        if (readOnly) return;
        e.preventDefault();
    };

    // Styles
    const s = {
        page: {
            width: "794px", minHeight: "1123px",
            background: "none",
            backgroundColor: styleConfig.pageBgColor || "#ffffff",
            backgroundImage: bgImage && bgImage !== "none" ? (bgImage.startsWith("url") ? bgImage : `url(${bgImage})`) : "none",
            backgroundSize: (bgImage.includes("pattern") || bgImage.includes("data:")) ? "contain" : "cover",
            backgroundRepeat: "repeat",
            display: "flex", flexDirection: (layout === "top-header" ? "column" : "row") as any,
            position: "relative" as const,
            fontFamily: fontFamily, color: "#333",
            boxShadow: "0 0 20px rgba(0,0,0,0.15)",
            padding: layout === "minimal-center" ? pagePadding : "0",
            marginBottom: "40px",
        },
        bgOverlay: {
            position: "absolute" as const, inset: 0,
            backgroundColor: `rgba(255, 255, 255, ${1 - bgOpacity})`,
            zIndex: 0, pointerEvents: "none" as const,
        },
        sidebar: {
            width: isSidebar ? sidebarWidth : "0%",
            background: isSidebar ? (sidebarBg || (isDarkSidebar ? primaryColor : "#f8fafc")) : "transparent",
            color: isSidebar ? (sidebarText || (isDarkSidebar ? "#FFFFFF" : "var(--text)")) : "inherit",
            flexDirection: "column" as const,
            display: isSidebar ? "flex" : "none",
            gap: sectionSpacing,
            padding: isSidebar ? "40px 20px" : "0",
            zIndex: 1,
            position: "relative" as const,
            transition: "width 0.1s ease",
            overflow: "hidden"
        },
        main: {
            flex: 1,
            display: "flex", flexDirection: "column" as const, gap: sectionSpacing,
            padding: `${pagePadding} 40px`,
            background: "transparent",
            minHeight: "100%",
            zIndex: 1,
            textAlign: (textAlign) as any
        },
        avatar: {
            width: layout === "top-header" ? "120px" : "130px",
            height: layout === "top-header" ? "120px" : "130px",
            borderRadius: avatarRadius, objectFit: "cover" as const,
            border: `${styleConfig.avatarBorderWidth || 4}px solid ${sidebarText || "#FFFFFF"}`,
            boxShadow: styleConfig.avatarShadow || "0 4px 12px rgba(0,0,0,0.1)",
            marginBottom: "20px"
        },
        nameTitle: {
            fontSize: `${baseFontSize + 20}px`, fontWeight: 800,
            color: layout === "two-column" ? primaryColor : (isDarkSidebar && layout !== "top-header" ? "#FFF" : primaryColor),
            textTransform: "uppercase" as const, letterSpacing: "2px", lineHeight: 1.1,
            marginBottom: "4px",
        },
        jobTitle: {
            fontSize: `${baseFontSize + 6}px`, fontWeight: 500,
            color: layout === "two-column" ? "#555" : (isDarkSidebar && layout !== "top-header" ? "rgba(255,255,255,0.85)" : "#555"),
            textTransform: "uppercase" as const, letterSpacing: "3px",
            marginBottom: "16px",
        },
        sectionTitle: {
            fontSize: `${baseFontSize + 4}px`, fontWeight: 700,
            color: isDarkSidebar ? "inherit" : primaryColor,
            textTransform: "uppercase" as const, letterSpacing: "1px",
            width: headingLineWidth || "100%",
            paddingBottom: "4px", marginBottom: "4px",
            textAlign: textAlign as any,
        },
        mainSectionTitle: {
            fontSize: `${baseFontSize + 6}px`, fontWeight: 800,
            color: primaryColor, textTransform: "uppercase" as const,
            letterSpacing: "1.5px",
            width: headingLineWidth || "100%",
            paddingBottom: "4px", marginBottom: "4px",
            textAlign: textAlign as any,
        },
        sectionLine: {
            height: `${headingLineHeight}px`,
            width: headingLineWidth || "100%",
            background: headingStyle === "solid" ? activeHeadingColor : "transparent",
            borderBottom: headingStyle !== "solid" ? `${headingLineHeight}px ${headingStyle} ${activeHeadingColor}` : "none",
            marginBottom: "14px",
            marginLeft: textAlign === "center" ? "auto" : (textAlign === "right" ? "auto" : "0"),
            marginRight: textAlign === "center" ? "auto" : "0",
        },
        bodyText: {
            fontSize: `${baseFontSize}px`, lineHeight: lineHeightVal, color: "inherit",
            textAlign: textAlign as any, letterSpacing: letterSpacing,
        },
        tag: {
            background: isDarkSidebar ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.06)",
            color: isDarkSidebar ? "#FFF" : "#333",
            padding: "4px 12px", borderRadius: tagRadius,
            fontSize: `${baseFontSize - 1}px`, fontWeight: 600,
        },
        sectionWrapper: {
            position: "relative" as const, cursor: readOnly ? "default" : "pointer",
            padding: !readOnly ? "8px" : "0", margin: !readOnly ? "-8px" : "0",
            borderRadius: "8px", 
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "transparent",
            transition: "all 0.25s", zIndex: 2,
        },
        sectionSelected: { borderColor: primaryColor, backgroundColor: "rgba(var(--primary-rgb), 0.05)" },
        headerArea: {
            width: "100%", display: "flex",
            flexDirection: (layout === "top-header" ? "row" : "column") as any,
            gap: "24px", alignItems: layout === "top-header" ? "center" : "stretch",
            padding: layout === "top-header" ? pagePadding : "0",
            borderBottom: layout === "top-header" ? `1px solid ${sidebarBorder}` : "none",
            marginBottom: layout === "top-header" ? "20px" : "0",
        },
    };

    const contactIconMap: Record<string, any> = {
        phone: <PhoneIcon className="w-3.5 h-3.5" />,
        email: <EnvelopeIcon className="w-3.5 h-3.5" />,
        location: <MapPinIcon className="w-3.5 h-3.5" />,
        linkedin: <GlobeAltIcon className="w-3.5 h-3.5" />,
    };

    const renderMarker = (index?: number) => {
        const style = styleConfig.numberingStyle || "bullet";
        if (style === "none") return null;
        
        let content = "•";
        if (style === "dash") content = "-";
        if (style === "numeric" && index !== undefined) content = `${index + 1}.`;

        return (
            <span style={{ 
                fontWeight: 700, 
                minWidth: style === "numeric" ? "24px" : "15px", 
                color: isDarkSidebar ? "rgba(255,255,255,0.7)" : primaryColor,
                display: "inline-block"
            }}>
                {content}
            </span>
        );
    };

    const sectionMap: Record<string, () => React.ReactNode> = {
        contact: () => {
            const titleStyle = getMergedTitleStyle("contact", s.sectionTitle);
            const bodyStyle = getMergedBodyStyle("contact", s.bodyText);
            const contactLabels = layoutConfig?.contactLabels || {
                phone: "SĐT:",
                email: "Email:",
                location: "Địa chỉ:",
                linkedin: "LinkedIn:"
            };

            return (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h2 style={titleStyle}>
                        <InlineEdit
                            value={getSectionTitle("contact")}
                            onChange={(v) => onConfigChange?.("layout", "labels", { ...layoutConfig?.labels, contact: v })}
                            readOnly={readOnly} style={titleStyle}
                        />
                    </h2>
                    {headingLineHeight > 0 && <div style={getSectionLineStyle("contact")} />}
                    {["phone", "email", "location", "linkedin"].map(f => data[f] && (
                        <div key={f} style={{ ...bodyStyle, display: "flex", gap: "8px", alignItems: "center" }}>
                            <span style={{ 
                                display: "flex", alignItems: "center", 
                                color: isDarkSidebar ? "rgba(255,255,255,0.7)" : primaryColor 
                            }}>
                                {contactIconMap[f]}
                            </span>
                            {contactLabels[f] !== undefined && (
                                <InlineEdit 
                                    value={contactLabels[f]} 
                                    onChange={(v) => onConfigChange?.("layout", "contactLabels", { ...contactLabels, [f]: v })}
                                    readOnly={readOnly}
                                    style={{ fontWeight: 600, color: "inherit", fontSize: "0.95em" }}
                                />
                            )}
                            <InlineEdit value={data[f]} onChange={(v) => onDataChange?.(f, v)} readOnly={readOnly} style={bodyStyle} />
                        </div>
                    ))}
                </div>
            );
        },
        objective: () => {
            const titleStyle = getMergedTitleStyle("objective", isSidebar ? s.sectionTitle : s.mainSectionTitle);
            const bodyStyle = getMergedBodyStyle("objective", s.bodyText);
            return (
                <div>
                    <h2 style={titleStyle}>
                        <InlineEdit
                            value={getSectionTitle("objective")}
                            onChange={(v) => onConfigChange?.("layout", "labels", { ...layoutConfig?.labels, objective: v })}
                            readOnly={readOnly} style={titleStyle}
                        />
                    </h2>
                    {headingLineHeight > 0 && <div style={getSectionLineStyle("objective")} />}
                    <div style={bodyStyle}>
                        <InlineEdit value={data.objective || data.summary} onChange={(v) => onDataChange?.("summary", v)} readOnly={readOnly} multiline style={bodyStyle} />
                    </div>
                </div>
            );
        },
        experience: () => {
            const titleStyle = getMergedTitleStyle("experience", s.mainSectionTitle);
            const bodyStyle = getMergedBodyStyle("experience", s.bodyText);
            return (
                <div>
                    <h2 style={titleStyle}>
                        <InlineEdit
                            value={getSectionTitle("experience")}
                            onChange={(v) => onConfigChange?.("layout", "labels", { ...layoutConfig?.labels, experience: v })}
                            readOnly={readOnly} style={titleStyle}
                        />
                    </h2>
                    {headingLineHeight > 0 && <div style={getSectionLineStyle("experience")} />}
                    <div style={{ display: "flex", flexDirection: "column", gap: itemSpacing }}>
                        {data.experience?.map((exp: any, i: number) => (
                            <div key={i} style={{ borderLeft: styleConfig.numberingStyle === "numeric" ? "none" : `2px solid ${primaryColor}20`, paddingLeft: styleConfig.numberingStyle === "numeric" ? "0" : "15px", position: "relative" }}>
                                {styleConfig.numberingStyle !== "numeric" && (
                                    <div style={{ position: "absolute", left: "-6px", top: "4px", width: "10px", height: "10px", borderRadius: "50%", background: primaryColor }} />
                                )}
                                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                    {styleConfig.numberingStyle === "numeric" && renderMarker(i)}
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 800, fontSize: `${baseFontSize + 2}px`, color: titleStyle.color }}>
                                            <InlineEdit value={exp.position} onChange={(v) => onDataChange?.("experience", v, i, "position")} readOnly={readOnly} style={{ color: titleStyle.color }} />
                                        </div>
                                        <div style={{ color: primaryColor, fontWeight: 600 }}>
                                            <InlineEdit value={exp.company} onChange={(v) => onDataChange?.("experience", v, i, "company")} readOnly={readOnly} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ fontSize: `${baseFontSize - 1}px`, color: "#666", marginBottom: "8px" }}>
                                    <InlineEdit value={exp.startDate} onChange={(v) => onDataChange?.("experience", v, i, "startDate")} readOnly={readOnly} /> -
                                    <InlineEdit value={exp.endDate} onChange={(v) => onDataChange?.("experience", v, i, "endDate")} readOnly={readOnly} />
                                </div>
                                <InlineEdit value={exp.description} onChange={(v) => onDataChange?.("experience", v, i, "description")} readOnly={readOnly} multiline style={bodyStyle} />
                            </div>
                        ))}
                    </div>
                </div>
            );
        },
        education: () => {
            const titleStyle = getMergedTitleStyle("education", s.mainSectionTitle);
            const bodyStyle = getMergedBodyStyle("education", s.bodyText);
            return (
                <div>
                    <h2 style={titleStyle}>
                        <InlineEdit
                            value={getSectionTitle("education")}
                            onChange={(v) => onConfigChange?.("layout", "labels", { ...layoutConfig?.labels, education: v })}
                            readOnly={readOnly} style={titleStyle}
                        />
                    </h2>
                    {headingLineHeight > 0 && <div style={getSectionLineStyle("education")} />}
                    <div style={{ display: "flex", flexDirection: "column", gap: itemSpacing }}>
                        {data.education?.map((edu: any, i: number) => (
                            <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                {renderMarker(i)}
                                <div style={{ flex: 1 }}>
                                    <div style={{ ...bodyStyle, fontWeight: 700, fontSize: `${baseFontSize + 1}px` }}>
                                        <InlineEdit value={edu.degree} onChange={(v) => onDataChange?.("education", v, i, "degree")} readOnly={readOnly} style={{ ...bodyStyle, fontWeight: 700 }} />
                                    </div>
                                    <div style={{ ...bodyStyle }}>
                                        <InlineEdit value={edu.school} onChange={(v) => onDataChange?.("education", v, i, "school")} readOnly={readOnly} style={bodyStyle} />
                                    </div>
                                    <div style={{ fontSize: `${baseFontSize - 1}px`, color: "#777" }}>
                                        <InlineEdit value={edu.startYear} onChange={(v) => onDataChange?.("education", v, i, "startYear")} readOnly={readOnly} /> -
                                        <InlineEdit value={edu.endYear} onChange={(v) => onDataChange?.("education", v, i, "endYear")} readOnly={readOnly} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        },
        skills: () => {
            const isContactInSidebar = isSidebar; 
            const baseStyle = isContactInSidebar ? s.sectionTitle : s.mainSectionTitle;
            const titleStyle = getMergedTitleStyle("skills", baseStyle);
            return (
                <div>
                    <h2 style={titleStyle}>
                        <InlineEdit
                            value={getSectionTitle("skills")}
                            onChange={(v) => onConfigChange?.("layout", "labels", { ...layoutConfig?.labels, skills: v })}
                            readOnly={readOnly} style={titleStyle}
                        />
                    </h2>
                    {headingLineHeight > 0 && <div style={getSectionLineStyle("skills")} />}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {data.skills?.map((sk: string, i: number) => (
                            <InlineEdit key={i} value={sk} onChange={(v) => { /* logic tag change */ }} readOnly={readOnly} style={s.tag} />
                        ))}
                    </div>
                </div>
            );
        },
        hobbies: () => {
            const isContactInSidebar = isSidebar;
            const baseStyle = isContactInSidebar ? s.sectionTitle : s.mainSectionTitle;
            const titleStyle = getMergedTitleStyle("hobbies", baseStyle);
            return (
                <div>
                    <h2 style={titleStyle}>
                        <InlineEdit
                            value={getSectionTitle("hobbies")}
                            onChange={(v) => onConfigChange?.("layout", "labels", { ...layoutConfig?.labels, hobbies: v })}
                            readOnly={readOnly} style={titleStyle}
                        />
                    </h2>
                    {headingLineHeight > 0 && <div style={getSectionLineStyle("hobbies")} />}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {data.hobbies?.map((hb: string, i: number) => (
                            <InlineEdit key={i} value={hb} onChange={(v) => { /* logic tag change */ }} readOnly={readOnly} style={s.tag} />
                        ))}
                    </div>
                </div>
            );
        },
        divider: () => (
            <div style={{ 
                height: `${headingLineHeight || 2}px`, 
                width: headingLineWidth || "100%", 
                background: headingStyle === "solid" ? (headingLineColor || primaryColor) : "transparent",
                borderBottom: headingStyle !== "solid" ? `${headingLineHeight || 2}px ${headingStyle} ${headingLineColor || primaryColor}` : "none",
                margin: `${sectionSpacing} 0`,
                opacity: 0.6
            }} />
        )
    };

    const renderSections = (ids: string[]) => {
        return ids.filter(id => !layoutConfig?.sections || layoutConfig.sections.includes(id)).map(id => {
            const content = sectionMap[id]?.();
            if (!content) return null;
            const isSelected = selectedSectionId === id;
            const mergedStyle = getMergedStyle(id, s.sectionWrapper);

            return (
                <div
                    key={id} draggable={!readOnly}
                    onDragStart={(e) => handleDragStart(e, id)}
                    onDrop={(e) => handleDrop(e, id)}
                    onDragOver={handleDragOver}
                    onClick={(e) => { e.stopPropagation(); onSectionSelect?.(id); }}
                    style={{
                        ...mergedStyle,
                        ...(isSelected ? s.sectionSelected : {}),
                        opacity: isDragging === id ? 0.3 : 1
                    }}
                >
                    {content}
                </div>
            );
        });
    };

    const Header = () => (
        <div style={s.headerArea}>
            {data.avatar && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        src={data.avatar}
                        alt="Avatar"
                        style={s.avatar}
                        onError={e => {
                            e.currentTarget.style.opacity = '0';
                            console.warn("Avatar load error");
                        }}
                    />
                </div>
            )}
            <div style={{ flex: 1 }}>
                <h1 style={s.nameTitle}><InlineEdit value={data.name || data.fullName} onChange={v => onDataChange?.("fullName", v)} readOnly={readOnly} placeholder="Nguyễn Văn A" /></h1>
                <div style={s.jobTitle}><InlineEdit value={data.jobTitle} onChange={v => onDataChange?.("jobTitle", v)} readOnly={readOnly} placeholder="Vị trí công việc" /></div>
            </div>
        </div>
    );

    const sidebarSections = ["contact", "skills", "hobbies"];
    if (layout === "two-column") sidebarSections.push("objective");

    return (
        <div ref={(node) => { if (typeof ref === "function") ref(node); else if (ref) (ref as any).current = node; (pageRef as any).current = node; }} style={s.page} className="cv-page">
            {customCss && <style dangerouslySetInnerHTML={{ __html: customCss }} />}
            <div style={s.bgOverlay} />
            {layout === "top-header" && <Header />}

            <div style={{ display: "flex", flex: 1, flexDirection: layout === "sidebar-right" ? "row-reverse" : (layout === "top-header" ? "row" : "inherit") }}>
                <div style={s.sidebar}>
                    {layout !== "top-header" && <Header />}
                    {renderSections(sidebarSections)}
                </div>

                {!readOnly && isSidebar && (
                    <div
                        onMouseDown={() => setIsResizing(true)}
                        style={{
                            position: "absolute", zIndex: 100, top: 0, bottom: 0, width: "10px", cursor: "col-resize",
                            left: layout === "sidebar-right" ? "auto" : sidebarWidth,
                            right: layout === "sidebar-right" ? sidebarWidth : "auto",
                            background: isResizing ? primaryColor : "transparent", opacity: 0.2
                        }}
                    />
                )}

                <div style={s.main}>
                    {layout === "minimal-center" && <Header />}
                    {renderSections(layout === "minimal-center"
                        ? ["contact", "objective", "experience", "education", "skills", "hobbies"]
                        : (layout === "two-column" ? ["experience", "education"] : ["objective", "experience", "education"]))
                    }
                </div>
            </div>

            {/* Page indicators (Multi-page look) */}
            <div style={{ position: "absolute", bottom: "-30px", right: 0, fontSize: "12px", color: "#999", fontWeight: 600 }}>
                Trang 1 / 1
            </div>


            {/* Google Fonts Loader */}
            <link
                href={`https://fonts.googleapis.com/css2?family=${fontFamily.replace(/'/g, "").replace(/ /g, "+")}:wght@300;400;500;600;700;800&display=swap`}
                rel="stylesheet"
            />
        </div>
    );
});

CVRenderer.displayName = "CVRenderer";
export default CVRenderer;
