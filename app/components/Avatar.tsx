"use client";

import { useState } from "react";

interface AvatarProps {
    src?: string | null;
    alt: string;
    fallback?: string | null;
    size?: number;
    className?: string;
    style?: React.CSSProperties;
}

export default function Avatar({
    src,
    alt,
    fallback,
    size = 40,
    className,
    style,
}: AvatarProps) {
    const [error, setError] = useState(false);

    // Generate initials from fallback or alt text
    const getInitials = () => {
        if (fallback && typeof fallback === 'string') {
            return fallback.charAt(0).toUpperCase();
        }
        // Try to get first letter from alt text
        const name = alt.split(" ").pop() || alt;
        return name.charAt(0).toUpperCase();
    };

    // If no src, error state, or empty src, show fallback
    const showFallback = !src || error || src === "" || src === "null" || src === "undefined";

    if (showFallback) {
        return (
            <div
                className={className}
                style={{
                    width: size,
                    height: size,
                    borderRadius: "50%",
                    background: "var(--primary-light, #E0E7FF)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: size > 30 ? `${size * 0.4}px` : "0.875rem",
                    flexShrink: 0,
                    ...style,
                }}
            >
                {getInitials()}
            </div>
        );
    }

    return (
        <div
            className={className}
            style={{
                width: size,
                height: size,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                flexShrink: 0,
                ...style,
            }}
        >
            <img
                src={src}
                alt={alt}
                onError={() => setError(true)}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    );
}
