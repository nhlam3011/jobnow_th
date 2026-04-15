import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import fs from "fs/promises";
import path from "path";

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

        // Save file to public directory
        const uploadDir = path.join(process.cwd(), "public", "uploads", "resumes", session.user.id);

        // Ensure directory exists
        await fs.mkdir(uploadDir, { recursive: true });

        const filePath = path.join(uploadDir, fileName);
        const buffer = Buffer.from(await file.arrayBuffer());
        await fs.writeFile(filePath, buffer);

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

        // Update CandidateProfile with the new resumeUrl
        await prisma.candidateProfile.update({
            where: { userId: session.user.id },
            data: { resumeUrl: fileUrl },
        });

        return NextResponse.json({ success: true, resume });
    } catch (error) {
        console.error("Resume upload error:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
