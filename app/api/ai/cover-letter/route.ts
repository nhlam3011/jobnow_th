import { NextRequest, NextResponse } from "next/server";
import { generateCoverLetter, generateCoverLetterWithContext } from "@/app/actions/cover-letter";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { jobId, additionalInfo } = body;

        if (!jobId) {
            return NextResponse.json(
                { error: "Thiếu ID công việc" },
                { status: 400 }
            );
        }

        const result = additionalInfo
            ? await generateCoverLetterWithContext(jobId, additionalInfo)
            : await generateCoverLetter(jobId);

        if (result.error) {
            return NextResponse.json(
                { error: result.error },
                { status: 400 }
            );
        }

        return NextResponse.json(result);
    } catch (error) {
        console.error("Cover letter API error:", error);
        return NextResponse.json(
            { error: "Tạo thư xin việc thất bại" },
            { status: 500 }
        );
    }
}
