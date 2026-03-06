"use client";

import React, { forwardRef } from "react";

interface CVRendererProps {
    data: any;
    template: any;
}

/**
 * Component CVRenderer: Chuyển đổi dữ liệu JSON của người dùng thành HTML có thể in thành PDF.
 * Thiết kế theo dạng 2 cột (trái/phải) chuyên nghiệp.
 */
const CVRenderer = forwardRef<HTMLDivElement, CVRendererProps>(({ data, template }, ref) => {
    const { styleConfig, layoutConfig } = template;

    // Base font size
    const baseFontSize = (styleConfig.fontSize || 10) * 1.2;
    const primaryColor = styleConfig.primaryColor || "#0056b3";
    const sidebarBg = layoutConfig.layout === "sidebar-left" ? primaryColor : "#f8f9fa";
    const sidebarTextColor = layoutConfig.layout === "sidebar-left" ? "#ffffff" : "#333333";

    const styles = {
        page: {
            display: "flex",
            flexDirection: layoutConfig.layout === "sidebar-top" ? "column" as const : "row" as const,
            backgroundColor: styleConfig.secondaryColor || "#FFFFFF",
            minHeight: "1123px", // A4 height
            width: "794px",      // A4 width
            padding: 0,
            fontFamily: styleConfig.fontFamily || "'Inter', 'Roboto', sans-serif",
            color: "#333",
            margin: "0 auto",
            boxSizing: "border-box" as const,
            overflow: "hidden",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)", // For web preview only, doesn't print if overflow hidden covers
        },
        sidebar: {
            width: layoutConfig.layout === "sidebar-top" ? "100%" : "35%",
            backgroundColor: sidebarBg,
            color: sidebarTextColor,
            padding: layoutConfig.layout === "sidebar-top" ? "40px" : "40px 30px",
            boxSizing: "border-box" as const,
            display: "flex",
            flexDirection: "column" as const,
            gap: "24px",
        },
        main: {
            width: layoutConfig.layout === "sidebar-top" ? "100%" : "65%",
            backgroundColor: "#FFFFFF",
            padding: "40px",
            boxSizing: "border-box" as const,
            display: "flex",
            flexDirection: "column" as const,
            gap: "24px",
        },
        avatarContainer: {
            display: "flex",
            justifyContent: layoutConfig.layout === "sidebar-top" ? "center" : "center",
            marginBottom: "10px",
        },
        avatar: {
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover" as const,
            border: `4px solid ${layoutConfig.layout === "sidebar-left" ? "rgba(255,255,255,0.2)" : primaryColor}`,
        },
        nameTitle: {
            fontSize: `${baseFontSize + 16}px`,
            fontWeight: 800,
            marginBottom: "4px",
            color: layoutConfig.layout === "sidebar-left" ? "#FFFFFF" : primaryColor,
            textTransform: "uppercase" as const,
            letterSpacing: "1px",
            lineHeight: 1.2,
            textAlign: layoutConfig.layout === "sidebar-top" ? "center" as const : "left" as const,
        },
        jobTitle: {
            fontSize: `${baseFontSize + 4}px`,
            fontWeight: 500,
            color: layoutConfig.layout === "sidebar-left" ? "rgba(255,255,255,0.8)" : "#666",
            textTransform: "uppercase" as const,
            letterSpacing: "2px",
            marginBottom: "16px",
            textAlign: layoutConfig.layout === "sidebar-top" ? "center" as const : "left" as const,
        },
        contactList: {
            display: "flex",
            flexDirection: "column" as const,
            gap: "8px",
            fontSize: `${baseFontSize}px`,
            color: layoutConfig.layout === "sidebar-left" ? "rgba(255,255,255,0.9)" : "#444",
        },
        sectionTitle: {
            fontSize: `${baseFontSize + 4}px`,
            fontWeight: 700,
            color: layoutConfig.layout === "sidebar-left" ? "#FFFFFF" : primaryColor,
            textTransform: "uppercase" as const,
            letterSpacing: "1px",
            borderBottom: `2px solid ${layoutConfig.layout === "sidebar-left" ? "rgba(255,255,255,0.3)" : primaryColor}`,
            paddingBottom: "6px",
            marginBottom: "16px",
        },
        mainSectionTitle: {
            fontSize: `${baseFontSize + 6}px`,
            fontWeight: 800,
            color: layoutConfig.layout === "sidebar-left" ? primaryColor : primaryColor,
            textTransform: "uppercase" as const,
            letterSpacing: "1px",
            borderBottom: `2px solid ${layoutConfig.layout === "sidebar-left" ? primaryColor : primaryColor}`,
            paddingBottom: "8px",
            marginBottom: "16px",
        },
        text: {
            fontSize: `${baseFontSize}px`,
            lineHeight: 1.6,
            color: "#444",
        },
        tagContainer: {
            display: "flex",
            flexWrap: "wrap" as const,
            gap: "8px",
        },
        tag: {
            background: layoutConfig.layout === "sidebar-left" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.05)",
            color: layoutConfig.layout === "sidebar-left" ? "#FFFFFF" : "#333",
            padding: "4px 10px",
            borderRadius: "4px",
            fontSize: `${baseFontSize - 1}px`,
            fontWeight: 500,
        },
        experienceItem: {
            marginBottom: "16px",
        },
        company: {
            fontWeight: 700,
            fontSize: `${baseFontSize + 2}px`,
            color: "#111",
        },
        position: {
            fontWeight: 600,
            fontSize: `${baseFontSize}px`,
            color: primaryColor,
            marginBottom: "4px",
        },
        date: {
            fontSize: `${baseFontSize - 1}px`,
            color: "#777",
            fontStyle: "italic",
            marginBottom: "8px",
            display: "block"
        }
    };

    return (
        <div ref={ref} style={styles.page}>
            {/* Sidebar (Left or Top) */}
            <div style={styles.sidebar}>
                {data.avatar && (
                    <div style={styles.avatarContainer}>
                        <img src={data.avatar} alt="Avatar" style={styles.avatar} />
                    </div>
                )}

                <div style={{ textAlign: layoutConfig.layout === "sidebar-top" ? "center" : "left" }}>
                    <h1 style={styles.nameTitle} className="uppercase">{data.name || "Nguyễn Văn A"}</h1>
                    <div style={styles.jobTitle}>{data.jobTitle || "Vị trí ứng tuyển"}</div>
                </div>

                {/* Contact Info */}
                <div style={styles.contactList}>
                    {data.phone && <div>📞 {data.phone}</div>}
                    {data.email && <div>✉️ {data.email}</div>}
                    {data.location && <div>📍 {data.location}</div>}
                    {data.linkedin && <div>💼 {data.linkedin}</div>}
                    {data.portfolio && <div>🔗 {data.portfolio}</div>}
                </div>

                {/* Skills (Sidebar) */}
                {data.skills && data.skills.length > 0 && (
                    <div>
                        <div style={styles.sectionTitle}>Kỹ năng</div>
                        <div style={styles.tagContainer}>
                            {data.skills.map((skill: string, i: number) => (
                                <span key={i} style={styles.tag}>{skill}</span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Hobbies (Sidebar) */}
                {data.hobbies && data.hobbies.length > 0 && (
                    <div>
                        <div style={styles.sectionTitle}>Sở thích</div>
                        <div style={styles.tagContainer}>
                            {data.hobbies.map((hobby: string, i: number) => (
                                <span key={i} style={styles.tag}>{hobby}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div style={styles.main}>
                {/* Objective / Summary */}
                {(data.objective || data.summary) && (
                    <div>
                        <div style={styles.mainSectionTitle}>Mục tiêu nghề nghiệp</div>
                        <div style={styles.text}>{data.objective || data.summary}</div>
                    </div>
                )}

                {/* Work Experience */}
                {data.experience && data.experience.length > 0 && (
                    <div>
                        <div style={styles.mainSectionTitle}>Kinh nghiệm làm việc</div>
                        {data.experience.map((exp: any, i: number) => (
                            <div key={i} style={styles.experienceItem}>
                                <div style={styles.position}>{exp.position}</div>
                                <div style={styles.company}>{exp.company}</div>
                                <span style={styles.date}>{exp.startDate} - {exp.endDate || "Hiện tại"}</span>
                                <div style={styles.text}>{exp.description}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Education */}
                {data.education && data.education.length > 0 && (
                    <div>
                        <div style={styles.mainSectionTitle}>Học vấn</div>
                        {data.education.map((edu: any, i: number) => (
                            <div key={i} style={styles.experienceItem}>
                                <div style={styles.position}>{edu.degree} - {edu.field}</div>
                                <div style={styles.company}>{edu.school}</div>
                                <span style={styles.date}>{edu.startYear} - {edu.endYear}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
});

CVRenderer.displayName = "CVRenderer";

export default CVRenderer;
