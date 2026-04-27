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

        const buffer = Buffer.from(await file.arrayBuffer());
        const base64String = buffer.toString("base64");
        const fileUrl = `data:${file.type || "application/pdf"};base64,${base64String}`;

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
