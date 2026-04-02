"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { generateText } from "@/lib/gemini";

export async function generateAIPath(customProfession?: string) {
    const session = await auth();

    let baseContext = "";

    if (customProfession && customProfession.trim().length > 0) {
        // Use the profession provided by the user (works for guests and logged-in users)
        baseContext = `Lộ trình phát triển chuyên sâu cho ngành nghề: "${customProfession}". Hãy bắt đầu từ vị trí nhập môn (Entry-level) và phát triển lên các cấp bậc cao nhất.`;
    } else if (session?.user) {
        // Only query DB when we have an authenticated user
        const [profile, savedJobs] = await Promise.all([
            prisma.candidateProfile.findUnique({
                where: { userId: session.user.id },
                select: { skills: true, yearsExp: true, bio: true }
            }),
            prisma.savedJob.findMany({
                where: { userId: session.user.id },
                include: { job: { select: { title: true, skills: true } } },
                take: 3
            })
        ]);

        baseContext = `Dựa trên hồ sơ của người dùng: 
        - Kỹ năng hiện tại: ${profile?.skills?.length ? profile.skills.join(", ") : "Chưa có"}
        - Số năm kinh nghiệm: ${profile?.yearsExp ?? 0}
        - Việc làm quan tâm: ${savedJobs.length ? savedJobs.map(sj => sj.job.title).join(", ") : "Chưa có"}`;
    } else {
        // Guest without a custom profession -> use a general default context
        baseContext = `Người dùng chưa đăng nhập và chưa cung cấp ngành nghề cụ thể. Hãy tạo một lộ trình phát triển sự nghiệp tổng quát cho ngành Công nghệ thông tin (Software Engineer), bắt đầu từ Entry-level đến Lead, bao gồm các kỹ năng phổ biến, thời gian thăng tiến ước tính và mức lương tham khảo.`;
    }

    const prompt = `
        Hãy đóng vai là một chuyên gia tư vấn sự nghiệp (Career Coach). 
        Bối cảnh: ${baseContext}

        Hãy tạo ra một lộ trình phát triển sự nghiệp (Career Roadmap) dưới định dạng JSON.
        Cấu trúc JSON phải là một đối tượng duy nhất đại diện cho node gốc.
        Mỗi node có: 
        - "id": string duy nhất
        - "label": tên vị trí công việc
        - "level": một trong ["junior", "mid", "senior", "lead"]
        - "salary": ví dụ "30M - 45M VND"
        - "demand": một trong ["Low", "Medium", "High"]
        - "description": "Mô tả ngắn về vai trò chính (2 câu)"
        - "promotion_time": thời gian thăng tiến dự kiến lên nốt này (ví dụ "6 tháng - 1 năm")
        - "skills": mảng các kỹ năng cần học (ví dụ: ["React", "System Design"]) 
        - "children": mảng các node tiếp theo (tối đa 2 con mỗi node)

        Lộ trình nên có ít nhất 4 cấp độ phát triển.
        CHỈ TRẢ VỀ JSON, không thêm văn bản giải thích.
    `;

    try {
        const response = await generateText(prompt);
        const jsonMatch = response.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
        return null;
    } catch (e) {
        console.error("AI Roadmap Error:", e);
        return null;
    }
}