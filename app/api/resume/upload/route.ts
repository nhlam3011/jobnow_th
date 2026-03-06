import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    const session = await auth();

    if (!session?.user || session.user.role !== "CANDIDATE") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
        const fileName = formData.get("fileName") as string;

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        // For now, we'll store the file URL as a placeholder
        // In production, you'd upload to Supabase Storage or S3
        const fileUrl = `/uploads/resumes/${session.user.id}/${fileName}`;

        // Create resume record
        const resume = await prisma.resume.create({
            data: {
                userId: session.user.id,
                fileName: fileName || file.name,
                fileUrl: fileUrl,
                isActive: true,
            },
        });

        return NextResponse.json({ success: true, resume });
    } catch (error) {
        console.error("Resume upload error:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
