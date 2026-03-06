"use client";

import React from "react";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font,
    Image,
} from "@react-pdf/renderer";

// Đăng ký font Roboto từ Google Fonts để hỗ trợ hiển thị Tiếng Việt đầy đủ các dấu
Font.register({
    family: "Roboto",
    fonts: [
        { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf", fontWeight: 300 },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf", fontWeight: 400 },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf", fontWeight: 500 },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf", fontWeight: 700 },
    ],
});

interface CVRendererProps {
    data: any;
    template: any;
}

/**
 * Component CVRenderer: Chuyển đổi dữ liệu JSON của người dùng thành giao diện PDF chuyên nghiệp.
 * Hỗ trợ các mẫu (template) khác nhau dựa trên layoutConfig và styleConfig.
 */
const CVRenderer: React.FC<CVRendererProps> = ({ data, template }) => {
    const { styleConfig, layoutConfig } = template;

    // Khởi tạo styles dựa trên template config
    const styles = StyleSheet.create({
        page: {
            flexDirection: layoutConfig.layout === "sidebar-left" ? "row" : "column",
            backgroundColor: styleConfig.secondaryColor || "#FFFFFF",
            padding: 0,
            fontFamily: "Roboto",
        },
        sidebar: {
            width: "30%",
            backgroundColor: styleConfig.primaryColor || "#0056b3",
            color: "#FFFFFF",
            padding: 20,
            height: "100%",
        },
        main: {
            width: layoutConfig.layout === "sidebar-left" ? "70%" : "100%",
            padding: 30,
        },
        section: {
            marginBottom: styleConfig.spacing || 10,
        },
        title: {
            fontSize: (styleConfig.fontSize || 10) + 8,
            fontWeight: "bold",
            marginBottom: 5,
            color: layoutConfig.layout === "sidebar-left" ? "#FFFFFF" : styleConfig.primaryColor,
        },
        subtitle: {
            fontSize: (styleConfig.fontSize || 10) + 2,
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 5,
            borderBottomWidth: 1,
            borderBottomColor: styleConfig.primaryColor || "#EEEEEE",
            color: styleConfig.primaryColor,
        },
        text: {
            fontSize: styleConfig.fontSize || 10,
            lineHeight: 1.5,
            color: "#333333",
        },
        sidebarText: {
            fontSize: (styleConfig.fontSize || 10) - 1,
            color: "#EEEEEE",
            marginBottom: 3,
        },
        sidebarLabel: {
            fontSize: styleConfig.fontSize || 10,
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 5,
            color: "#FFFFFF",
        },
        experienceItem: {
            marginBottom: 10,
        },
        company: {
            fontWeight: "bold",
            fontSize: styleConfig.fontSize || 10,
        },
        date: {
            fontSize: (styleConfig.fontSize || 10) - 1,
            color: "#666666",
            fontStyle: "italic",
        }
    });

    return (
        <Document title={data.title || "My CV"}>
            <Page size="A4" style={styles.page}>
                {/* Sidebar nếu layout yêu cầu */}
                {layoutConfig.layout === "sidebar-left" && (
                    <View style={styles.sidebar}>
                        <Text style={styles.title}>{data.name}</Text>
                        <Text style={styles.sidebarText}>{data.email}</Text>
                        <Text style={styles.sidebarText}>{data.phone}</Text>
                        <Text style={styles.sidebarText}>{data.location}</Text>

                        <Text style={styles.sidebarLabel}>KỸ NĂNG</Text>
                        {data.skills?.map((skill: string, i: number) => (
                            <Text key={i} style={styles.sidebarText}>• {skill}</Text>
                        ))}
                    </View>
                )}

                {/* Main Content */}
                <View style={styles.main}>
                    {layoutConfig.layout !== "sidebar-left" && (
                        <View style={styles.section}>
                            <Text style={styles.title}>{data.name}</Text>
                            <Text style={styles.text}>{data.email} | {data.phone} | {data.location}</Text>
                        </View>
                    )}

                    <View style={styles.section}>
                        <Text style={styles.subtitle}>GIỚI THIỆU</Text>
                        <Text style={styles.text}>{data.bio || data.summary}</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.subtitle}>KINH NGHIỆM LÀM VIỆC</Text>
                        {data.experience?.map((exp: any, i: number) => (
                            <View key={i} style={styles.experienceItem}>
                                <Text style={styles.company}>{exp.position} - {exp.company}</Text>
                                <Text style={styles.date}>{exp.startDate} - {exp.endDate || "Hiện tại"}</Text>
                                <Text style={styles.text}>{exp.description}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.subtitle}>HỌC VẤN</Text>
                        {data.education?.map((edu: any, i: number) => (
                            <View key={i} style={styles.experienceItem}>
                                <Text style={styles.company}>{edu.degree} - {edu.school}</Text>
                                <Text style={styles.date}>{edu.startYear} - {edu.endYear}</Text>
                                <Text style={styles.text}>{edu.field}</Text>
                            </View>
                        ))}
                    </View>

                    {layoutConfig.layout !== "sidebar-left" && (
                        <View style={styles.section}>
                            <Text style={styles.subtitle}>KỸ NĂNG</Text>
                            <Text style={styles.text}>{data.skills?.join(", ")}</Text>
                        </View>
                    )}
                </View>
            </Page>
        </Document>
    );
};

export default CVRenderer;
