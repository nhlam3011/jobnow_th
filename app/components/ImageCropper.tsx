"use client";

import { useState, useRef, useCallback } from "react";
import ReactCrop, { Crop, PixelCrop, centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

interface ImageCropperProps {
    imageSrc: string;
    onCropComplete: (croppedImageUrl: string) => void;
    onCancel: () => void;
    aspectRatio?: number;
    square?: boolean;
}

function centerAspectCrop(
    mediaWidth: number,
    mediaHeight: number,
    aspect: number,
) {
    return centerCrop(
        makeAspectCrop(
            {
                unit: "%",
                width: 90,
            },
            aspect,
            mediaWidth,
            mediaHeight,
        ),
        mediaWidth,
        mediaHeight,
    );
}

export default function ImageCropper({
    imageSrc,
    onCropComplete,
    onCancel,
    aspectRatio = 1,
    square = true,
}: ImageCropperProps) {
    const [crop, setCrop] = useState<Crop>();
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
    const imgRef = useRef<HTMLImageElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const onImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
        const { width, height } = e.currentTarget;
        setCrop(centerAspectCrop(width, height, aspectRatio));
    }, [aspectRatio]);

    const getCroppedImage = useCallback(async () => {
        const image = imgRef.current;
        const canvas = canvasRef.current;

        if (!image || !canvas || !completedCrop) {
            return;
        }

        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size to the crop size
        const cropWidth = completedCrop.width * scaleX;
        const cropHeight = completedCrop.height * scaleY;

        // For square crop, use square canvas
        const size = Math.min(cropWidth, cropHeight);
        canvas.width = size;
        canvas.height = size;

        // Square crop - no clipping needed, draw directly
        // (clipping only for circular avatars)
        if (square) {
            // No clipping for square
        }

        // Draw the cropped image
        const sx = completedCrop.x * scaleX;
        const sy = completedCrop.y * scaleY;

        ctx.drawImage(
            image,
            sx,
            sy,
            cropWidth,
            cropHeight,
            0,
            0,
            size,
            size,
        );

        // Convert to blob and create URL
        canvas.toBlob((blob) => {
            if (blob) {
                const url = URL.createObjectURL(blob);
                onCropComplete(url);
            }
        }, "image/jpeg", 0.95);
    }, [completedCrop, square, onCropComplete]);

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
        }}>
            <div style={{
                background: "var(--bg-card)",
                borderRadius: "12px",
                padding: "1.5rem",
                maxWidth: "500px",
                width: "90%",
                maxHeight: "90vh",
                overflow: "auto",
            }}>
                <h3 style={{ marginBottom: "1rem", color: "var(--text)" }}>Cắt ảnh đại diện</h3>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    background: "#1a1a1a",
                    borderRadius: "8px",
                    padding: "0.5rem"
                }}>
                    <ReactCrop
                        crop={crop}
                        onChange={(_, percentCrop) => setCrop(percentCrop)}
                        onComplete={(c) => setCompletedCrop(c)}
                        aspect={aspectRatio}
                        style={{ maxHeight: "300px" }}
                    >
                        <img
                            ref={imgRef}
                            src={imageSrc}
                            onLoad={onImageLoad}
                            style={{ maxHeight: "300px", maxWidth: "100%" }}
                            alt="Crop preview"
                        />
                    </ReactCrop>
                </div>

                <canvas ref={canvasRef} style={{ display: "none" }} />

                <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end" }}>
                    <button
                        type="button"
                        onClick={onCancel}
                        style={{
                            padding: "0.5rem 1rem",
                            borderRadius: "8px",
                            border: "1px solid var(--border)",
                            background: "transparent",
                            color: "var(--text)",
                            cursor: "pointer",
                        }}
                    >
                        Hủy
                    </button>
                    <button
                        type="button"
                        onClick={getCroppedImage}
                        disabled={!completedCrop}
                        style={{
                            padding: "0.5rem 1rem",
                            borderRadius: "8px",
                            border: "none",
                            background: "var(--primary)",
                            color: "#fff",
                            cursor: "pointer",
                            opacity: completedCrop ? 1 : 0.5,
                        }}
                    >
                        Áp dụng
                    </button>
                </div>
            </div>
        </div>
    );
}
