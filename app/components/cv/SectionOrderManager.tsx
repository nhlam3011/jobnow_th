import React, { useState } from "react";
import { Bars3Icon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

interface SectionOrderManagerProps {
    sections: string[];
    onOrderChange: (newOrder: string[]) => void;
    onToggleVisibility: (sectionId: string) => void;
}

const SECTION_LABELS: Record<string, string> = {
    objective: "Mục tiêu nghề nghiệp",
    experience: "Kinh nghiệm làm việc",
    education: "Học vấn",
    skills: "Kỹ năng",
    hobbies: "Sở thích & khác",
    contact: "Thông tin liên hệ",
    divider: "Đường kẻ ngang",
};

export const SectionOrderManager: React.FC<SectionOrderManagerProps> = ({
    sections,
    onOrderChange,
    onToggleVisibility
}) => {
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

    const handleDragStart = (e: React.DragEvent, index: number) => {
        setDraggedIndex(index);
        e.dataTransfer.effectAllowed = "move";
        // Create a custom drag ghost if needed
    };

    const handleDragOver = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        if (draggedIndex === null || draggedIndex === index) return;

        const newItems = [...sections];
        const draggedItem = newItems[draggedIndex];
        newItems.splice(draggedIndex, 1);
        newItems.splice(index, 0, draggedItem);
        
        setDraggedIndex(index);
        onOrderChange(newItems);
    };

    const handleDragEnd = () => {
        setDraggedIndex(null);
    };

    return (
        <div style={{ display: "grid", gap: "0.5rem" }}>
            {Object.keys(SECTION_LABELS).sort((a, b) => {
                const indexA = sections.indexOf(a);
                const indexB = sections.indexOf(b);
                if (indexA === -1 && indexB === -1) return 0;
                if (indexA === -1) return 1;
                if (indexB === -1) return -1;
                return indexA - indexB;
            }).map((id, index) => {
                const isVisible = sections.includes(id);
                return (
                    <div
                        key={id}
                        draggable={isVisible}
                        onDragStart={(e) => isVisible && handleDragStart(e, sections.indexOf(id))}
                        onDragOver={(e) => isVisible && handleDragOver(e, sections.indexOf(id))}
                        onDragEnd={handleDragEnd}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            padding: "0.75rem",
                            background: isVisible ? (draggedIndex === sections.indexOf(id) ? "rgba(var(--primary-rgb), 0.1)" : "var(--bg)") : "rgba(0,0,0,0.02)",
                            borderRadius: "10px",
                            border: isVisible ? "1px solid var(--border)" : "1px dashed #ccc",
                            cursor: isVisible ? "grab" : "default",
                            transition: "all 0.2s",
                            opacity: isVisible ? (draggedIndex === sections.indexOf(id) ? 0.5 : 1) : 0.5,
                            boxShadow: isVisible && draggedIndex === sections.indexOf(id) ? "var(--shadow-md)" : "none",
                        }}
                    >
                        {isVisible ? <Bars3Icon className="w-5 h-5 text-gray-400" /> : <div className="w-5" />}
                        <span style={{ flex: 1, fontSize: "0.875rem", fontWeight: isVisible ? 600 : 400, color: isVisible ? "var(--text)" : "#888" }}>
                            {SECTION_LABELS[id] || id}
                        </span>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onToggleVisibility(id);
                            }}
                            style={{
                                padding: "4px",
                                borderRadius: "4px",
                                border: "none",
                                background: isVisible ? "rgba(var(--primary-rgb), 0.1)" : "transparent",
                                cursor: "pointer",
                                color: isVisible ? "var(--primary)" : "#aaa"
                            }}
                            title={isVisible ? "Ẩn mục này" : "Hiện mục này"}
                        >
                            {isVisible ? <EyeIcon className="w-4 h-4" /> : <EyeSlashIcon className="w-4 h-4" />}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
