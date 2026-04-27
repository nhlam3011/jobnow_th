import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { unlink } from "fs/promises";
import path from "path";

export async function GET() {
    const session = await auth();
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { image: true }
    });

    return NextResponse.json({ image: user?.image });
}

export async function POST(request: Request) {
    const session = await auth();
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const formData = await request.formData();
        const file = formData.get("avatar") as File | null;

        if (!file || file.size === 0) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        // Check file type
        const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json({ error: "Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed." }, { status: 400 });
        }

        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            return NextResponse.json({ error: "File too large. Maximum size is 5MB." }, { status: 400 });
        }

        // Delete old avatar file if exists (for backwards compatibility with local uploads)
        const currentUser = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: { image: true }
        });
        if (currentUser?.image && currentUser.image.startsWith("/uploads/avatars/")) {
            try {
                const oldFilePath = path.join(process.cwd(), "public", currentUser.image);
                await unlink(oldFilePath);
            } catch (e) {
                // File might not exist
            }
        }

        // Convert file to Base64 to support serverless environments (like Vercel)
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const base64String = buffer.toString("base64");
        const avatarUrl = `data:${file.type};base64,${base64String}`;

        // Update user record with avatar URL
        await prisma.user.update({
            where: { id: session.user.id },
            data: { image: avatarUrl },
        });

        return NextResponse.json({ success: true, imageUrl: avatarUrl });
    } catch (error) {
        console.error("Error uploading avatar:", error);
        return NextResponse.json({ error: "Failed to upload avatar" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    const session = await auth();
    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        // Get current avatar
        const currentUser = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: { image: true }
        });

        if (currentUser?.image) {
            // Delete the file if it's a local upload
            if (currentUser.image.startsWith("/uploads/avatars/")) {
                try {
                    const filePath = path.join(process.cwd(), "public", currentUser.image);
                    await unlink(filePath);
                } catch (e) {
                    // File might not exist
                }
            }

            // Clear avatar in database
            await prisma.user.update({
                where: { id: session.user.id },
                data: { image: null },
            });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting avatar:", error);
        return NextResponse.json({ error: "Failed to delete avatar" }, { status: 500 });
    }
}
