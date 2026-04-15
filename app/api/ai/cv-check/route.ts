import { NextResponse } from "next/server";
import { generateStructuredText } from "@/lib/gemini";

export async function POST(req: Request) {
    try {
        const { cvText, fileData } = await req.json();

        if (!cvText && !fileData) {
            return NextResponse.json({ error: "Missing CV content" }, { status: 400 });
        }

        const prompt = `
            FIRST STEP: Verify if the following content is truly a Resume/CV or professional background.
            If NOT a CV (e.g., random image, joke, generic document, or blank), return:
            { "score": 0, "summary": "⚠️ Đây không phải là một bản CV hợp lệ. Vui lòng tải lên tài liệu liên quan đến kinh nghiệm làm việc hoặc học vấn của bạn.", "checklist": [], "strengths": [], "weaknesses": ["Vui lòng tải lên CV thực tế"] }

            SECOND STEP: If it is a CV, provide a structured JSON feedback including:
            - score (0-100)
            - summary (short encouraging text in Vietnamese)
            - checklist (Array of {title, status: 'pass'|'warning'|'fail', description, suggestion})
            - strengths (Array of strings)
            - weaknesses (Array of strings)
            
            Return ONLY the valid JSON object. All text content should be in Vietnamese.
        `;

        const resultText = await generateStructuredText(
            prompt, 
            cvText ? `CV TEXT:\n${cvText}` : "Please analyze the attached file.",
            undefined,
            fileData
        );
        // Extract JSON if AI wrapped it in markdown
        const jsonMatch = resultText.match(/\{[\s\S]*\}/);
        const data = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(resultText);

        return NextResponse.json(data);
    } catch (error) {
        console.error("CV Check API Error:", error);
        return NextResponse.json({ 
            score: 0, 
            summary: "Không thể phân tích CV lúc này.", 
            checklist: [],
            strengths: [],
            weaknesses: ["Lỗi kết nối AI"]
        }, { status: 500 });
    }
}