import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateStructuredText } from "@/lib/gemini";
import { auth } from "@/auth";

export async function POST(request: NextRequest) {
    try {
        const session = await auth();
        if (!session?.user) {
            return NextResponse.json({ error: "Vui lòng đăng nhập" }, { status: 401 });
        }

        const body = await request.json();
        const { action, jobId, questions, answers } = body;

        if (action === "generate") {
            return await generateQuestions(session.user.id, jobId);
        } else if (action === "evaluate") {
            return await evaluateAnswers(session.user.id, jobId, questions, answers);
        }

        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    } catch (error) {
        console.error("Mock interview API error:", error);
        return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
    }
}

async function generateQuestions(userId: string, jobId: string) {
    // Lấy thông tin Job (JD)
    const job = await prisma.job.findUnique({
        where: { id: jobId },
        include: { company: true },
    });

    if (!job) {
        return NextResponse.json({ error: "Không tìm thấy công việc" }, { status: 404 });
    }

    // Lấy CV/Profile của ứng viên
    const [profile, resume] = await Promise.all([
        prisma.candidateProfile.findUnique({ where: { userId } }),
        prisma.resume.findFirst({
            where: { userId, isActive: true },
            orderBy: { createdAt: "desc" },
        }),
    ]);

    const candidateInfo = buildCandidateInfo(profile, resume);

    const prompt = `Bạn là nhà tuyển dụng chuyên nghiệp đang phỏng vấn ứng viên cho vị trí "${job.title}" tại công ty "${job.company.name}".

=== MÔ TẢ CÔNG VIỆC (JD) ===
Tiêu đề: ${job.title}
Mô tả: ${job.description}
${job.requirements ? `Yêu cầu: ${job.requirements}` : ""}
Kỹ năng: ${job.skills.join(", ")}
Loại hình: ${job.jobType}
Địa điểm: ${job.location}

=== HỒ SƠ ỨNG VIÊN ===
${candidateInfo}

=== YÊU CẦU ===
Hãy đặt ra ĐÚNG 5 câu hỏi phỏng vấn:
- 2 câu hỏi kỹ thuật/chuyên môn liên quan đến JD và kỹ năng yêu cầu
- 2 câu hỏi tình huống thực tế (behavioral/situational)
- 1 câu hỏi về động lực và mục tiêu nghề nghiệp

Mỗi câu hỏi nên dựa trên thông tin trong JD và CV của ứng viên.

Trả lời bằng JSON array, ví dụ:
["Câu hỏi 1", "Câu hỏi 2", "Câu hỏi 3", "Câu hỏi 4", "Câu hỏi 5"]

CHỈ TRẢ VỀ JSON ARRAY, KHÔNG GIẢI THÍCH.`;

    const systemInstruction = "Bạn là nhà tuyển dụng chuyên nghiệp tại Việt Nam. Hãy đặt câu hỏi phỏng vấn thực tế, chuyên sâu và phù hợp với vị trí tuyển dụng. Trả lời bằng tiếng Việt.";

    const result = await generateStructuredText(prompt, systemInstruction);

    // Parse JSON từ response
    const jsonMatch = result.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
        return NextResponse.json({ error: "Không thể tạo câu hỏi" }, { status: 500 });
    }

    const parsedQuestions = JSON.parse(jsonMatch[0]);

    return NextResponse.json({
        questions: parsedQuestions,
        jobTitle: job.title,
        companyName: job.company.name,
    });
}

async function evaluateAnswers(
    userId: string,
    jobId: string,
    questions: string[],
    answers: string[]
) {
    const job = await prisma.job.findUnique({
        where: { id: jobId },
        include: { company: true },
    });

    if (!job) {
        return NextResponse.json({ error: "Không tìm thấy công việc" }, { status: 404 });
    }

    const [profile, resume] = await Promise.all([
        prisma.candidateProfile.findUnique({ where: { userId } }),
        prisma.resume.findFirst({
            where: { userId, isActive: true },
            orderBy: { createdAt: "desc" },
        }),
    ]);

    const candidateInfo = buildCandidateInfo(profile, resume);

    const qaText = questions
        .map((q: string, i: number) => `Câu hỏi ${i + 1}: ${q}\nCâu trả lời: ${answers[i] || "(Không trả lời)"}`)
        .join("\n\n");

    const prompt = `Bạn là nhà tuyển dụng chuyên nghiệp đang đánh giá bài phỏng vấn cho vị trí "${job.title}" tại "${job.company.name}".

=== MÔ TẢ CÔNG VIỆC ===
Tiêu đề: ${job.title}
Mô tả: ${job.description}
${job.requirements ? `Yêu cầu: ${job.requirements}` : ""}
Kỹ năng: ${job.skills.join(", ")}

=== HỒ SƠ ỨNG VIÊN ===
${candidateInfo}

=== BÀI PHỎNG VẤN ===
${qaText}

=== YÊU CẦU ĐÁNH GIÁ ===
Hãy đánh giá bài phỏng vấn và trả về JSON với format sau:
{
  "overallScore": 75,
  "overallComment": "Nhận xét tổng quan về buổi phỏng vấn",
  "strengths": ["Điểm mạnh 1", "Điểm mạnh 2"],
  "weaknesses": ["Điểm yếu 1", "Điểm yếu 2"],
  "feedback": [
    {
      "questionIndex": 0,
      "score": 80,
      "comment": "Nhận xét cho câu trả lời",
      "suggestion": "Gợi ý cách trả lời tốt hơn"
    }
  ]
}

- overallScore: điểm tổng 0-100
- Mỗi câu hỏi có score riêng (0-100), comment và suggestion
- strengths/weaknesses: mảng string, mỗi phần tử là 1 điểm mạnh/yếu

CHỈ TRẢ VỀ JSON, KHÔNG GIẢI THÍCH.`;

    const systemInstruction = "Bạn là chuyên gia tuyển dụng tại Việt Nam. Đánh giá trung thực, chi tiết, mang tính xây dựng. Trả lời bằng tiếng Việt.";

    const result = await generateStructuredText(prompt, systemInstruction);

    // Parse JSON
    const jsonMatch = result.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
        return NextResponse.json({ error: "Không thể đánh giá" }, { status: 500 });
    }

    const evaluation = JSON.parse(jsonMatch[0]);

    return NextResponse.json(evaluation);
}

function buildCandidateInfo(profile: any, resume: any): string {
    const parts: string[] = [];

    if (profile) {
        if (profile.bio) parts.push(`Giới thiệu: ${profile.bio}`);
        if (profile.skills?.length) parts.push(`Kỹ năng: ${profile.skills.join(", ")}`);
        if (profile.yearsExp) parts.push(`Kinh nghiệm: ${profile.yearsExp} năm`);

        if (profile.experience && Array.isArray(profile.experience)) {
            const expStr = (profile.experience as Array<{ company?: string; position?: string; description?: string }>)
                .map(e => `${e.position} tại ${e.company}: ${e.description}`)
                .join("; ");
            if (expStr) parts.push(`Lịch sử làm việc: ${expStr}`);
        }

        if (profile.education && Array.isArray(profile.education)) {
            const eduStr = (profile.education as Array<{ school?: string; degree?: string; field?: string }>)
                .map(e => `${e.degree} ${e.field} tại ${e.school}`)
                .join("; ");
            if (eduStr) parts.push(`Học vấn: ${eduStr}`);
        }
    }

    if (resume?.parsedText) {
        parts.push(`Nội dung CV: ${resume.parsedText.substring(0, 2000)}`);
    }

    return parts.length > 0 ? parts.join("\n") : "Không có thông tin hồ sơ";
}
