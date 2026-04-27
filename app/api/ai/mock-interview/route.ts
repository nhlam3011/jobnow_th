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
    } catch (error: any) {
        console.error("Mock interview API error:", error);
        const errorMessage = error instanceof Error ? error.message : "Lỗi server";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
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
Địa điểm: ${job.location || "N/A"}

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
        console.error("Gemini response did not contain JSON array:", result);
        return NextResponse.json({ error: "AI phản hồi không đúng định dạng câu hỏi" }, { status: 500 });
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
  "strengths": ["Điểm mạnh 1", "Điểm mạnh 2"...],
  "weaknesses": ["Điểm yếu 1", "Điểm yếu 2"...],
  "feedback": [
    {
      "questionIndex": 0,
      "score": 80,
      "comment": "Nhận xét cho câu trả lời, thẳng thắn thái độ trả lời mà đánh giá luôn buổi phỏng vấn",
      "suggestion": "Gợi ý cách trả lời tốt hơn, kiến thức chi tiết, có thể ví dụ cụ thể"
    }
  ]
}

- overallScore: điểm tổng 0-100.
- feedback: PHẢI CÓ ĐỦ 5 phần tử cho 5 câu hỏi. 
- questionIndex: là chỉ số của câu hỏi trong mảng (bắt đầu từ 0). Ví dụ "Câu hỏi 1" có "questionIndex": 0.
- Các phần tử trong mảng "feedback" PHẢI theo đúng thứ tự từ câu 1 đến câu 5 (questionIndex từ 0 đến 4).
- score: điểm cho từng câu (0-100). 
  * QUY TẮC CHẤM ĐIỂM NGHIÊM NGẶT:
    - Nếu câu trả lời là nhập bừa, vô nghĩa, quá ngắn (dưới 5 từ), hoặc không liên quan đến câu hỏi: TRỪ NẶNG, điểm chỉ được từ 0-10.
    - Nếu câu trả lời chung chung, thiếu dẫn chứng: 40-50 điểm.
    - Nếu câu trả lời tốt, có ví dụ cụ thể và liên hệ được với JD: 80-100 điểm.
- comment/suggestion: nhận xét thẳng thắn, không ngại chỉ ra lỗi sai. Nếu ứng viên trả lời quá tệ, hãy nhận xét đúng thực tế.

CHỈ TRẢ VỀ JSON, KHÔNG GIẢI THÍCH.`;

    const systemInstruction = "Bạn là một nhà tuyển dụng chuyên nghiệp tại Việt Nam. Bạn đánh giá câu trả lời dựa trên tính thực tế, thái độ, độ sâu kiến thức và sự phù hợp với JD. Đừng ngại cho điểm thấp (thậm chí 0 điểm) nếu câu trả lời không nghiêm túc hoặc nhập bừa. Hãy nhận xét thẳng thắn và sắc sảo. Trả lời bằng tiếng Việt.";

    const result = await generateStructuredText(prompt, systemInstruction);

    // Parse JSON
    const jsonMatch = result.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
        console.error("Gemini response did not contain JSON object:", result);
        return NextResponse.json({ error: "AI phản hồi không đúng định dạng đánh giá" }, { status: 500 });
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
