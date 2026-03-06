import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

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

        // Create uploads directory if it doesn't exist
        const uploadsDir = path.join(process.cwd(), "public", "uploads", "avatars");
        try {
            await mkdir(uploadsDir, { recursive: true });
        } catch (e) {
            // Directory might already exist
        }

        // Generate unique filename
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filename = `${session.user.id}-${Date.now()}${path.extname(file.name)}`;
        const filepath = path.join(uploadsDir, filename);

        await writeFile(filepath, buffer);

        // Update user record with avatar URL
        const avatarUrl = `/uploads/avatars/${filename}`;
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
