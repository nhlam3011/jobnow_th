"use client";

import React, { useState, useEffect, useRef } from "react";

interface InlineEditProps {
    value: string;
    onChange?: (val: string) => void;
    placeholder?: string;
    style?: React.CSSProperties;
    multiline?: boolean;
    readOnly?: boolean;
    className?: string;
}

export default function InlineEdit({
    value,
    onChange,
    placeholder = "Nhập nội dung...",
    style,
    multiline = false,
    readOnly = false,
    className = ""
}: InlineEditProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(value);
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    useEffect(() => {
        setTempValue(value);
    }, [value]);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
            if ('select' in inputRef.current) {
                // optional: select all text when focus
                // inputRef.current.select();
            }
        }
    }, [isEditing]);

    const handleSave = () => {
        setIsEditing(false);
        if (onChange && tempValue !== value) {
            onChange(tempValue);
        } else {
            setTempValue(value); // reset if no change
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !multiline) {
            e.preventDefault();
            handleSave();
        }
        if (e.key === "Escape") {
            setIsEditing(false);
            setTempValue(value); // cancel
        }
    };

    if (readOnly) {
        return <div style={style} className={className}>{value || placeholder}</div>;
    }

    if (isEditing) {
        const commonStyle: React.CSSProperties = {
            ...style,
            width: "100%",
            background: "rgba(255,255,255,0.9)",
            color: "#000",
            border: "1px dashed #0056b3",
            outline: "none",
            borderRadius: "4px",
            padding: "2px 4px",
            margin: "-2px -4px",
            fontFamily: "inherit",
            fontSize: "inherit",
            fontWeight: "inherit",
            lineHeight: "inherit",
            boxSizing: "border-box"
        };

        if (multiline) {
            return (
                <textarea
                    ref={inputRef as any}
                    value={tempValue}
                    onChange={(e) => setTempValue(e.target.value)}
                    onBlur={handleSave}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    style={{ ...commonStyle, resize: "vertical", minHeight: "80px" }}
                    className={className}
                />
            );
        }

        return (
            <input
                ref={inputRef as any}
                type="text"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                onBlur={handleSave}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                style={commonStyle}
                className={className}
            />
        );
    }

    return (
        <div
            onClick={() => setIsEditing(true)}
            style={{
                ...style,
                cursor: "pointer",
                outline: "1px solid transparent",
                display: "inline-block",
                minWidth: "20px",
            }}
            title="Click để sửa"
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.05)";
                e.currentTarget.style.outline = "1px dashed #ccc";
                e.currentTarget.style.borderRadius = "4px";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.outline = "1px solid transparent";
            }}
            className={className}
        >
            {value || <span style={{ opacity: 0.5 }}>{placeholder}</span>}
        </div>
    );
}
