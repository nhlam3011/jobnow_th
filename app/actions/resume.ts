"use server";

import { generateStructuredText } from "@/lib/gemini";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function parseResumeFromText(text: string) {
    if (!text || text.trim().length === 0) {
        return { error: "Vui lòng cung cấp nội dung CV" };
    }

    const prompt = `
Bạn là một chuyên gia phân tích CV. Hãy phân tích nội dung CV dưới đây và trích xuất thông tin theo định dạng JSON:
{
    "name": "Tên đầy đủ",
    "email": "email@example.com", 
    "phone": "số điện thoại",
    "location": "địa chỉ",
    "bio": "tóm tắt về bản thân (2-3 câu)",
    "skills": ["danh sách kỹ năng"],
    "yearsExp": số năm kinh nghiệm,
    "education": [
        {
            "school": "tên trường",
            "degree": "bằng cấp",
            "field": "ngành học",
            "startYear": năm bắt đầu,
            "endYear": năm kết thúc
        }
    ],
    "experience": [
        {
            "company": "tên công ty",
            "position": "vị trí",
            "startDate": "tháng năm bắt đầu",
            "endDate": "tháng năm kết thúc hoặc Hiện tại",
            "description": "mô tả công việc"
        }
    ]
}

Chỉ trả về JSON, không giải thích gì thêm. Nếu không có thông tin nào thì để null hoặc mảng rỗng.

Nội dung CV:
${text}
    `.trim();

    try {
        const result = await generateStructuredText(prompt);
        const jsonMatch = result.match(/\{[\s\S]*\}/);
        
        if (!jsonMatch) {
            return { error: "Không thể phân tích CV. Vui lòng thử lại." };
        }

        const parsed = JSON.parse(jsonMatch[0]);
        return { success: true, data: parsed };
    } catch (error) {
        console.error("Resume parsing error:", error);
        return { error: "Phân tích CV thất bại. Vui lòng thử lại." };
    }
}

export async function updateProfileFromParsedResume(parsedData: any) {
    const session = await auth();
    if (!session?.user) {
        return { error: "Vui lòng đăng nhập" };
    }

    try {
        const profile = await prisma.candidateProfile.update({
            where: { userId: session.user.id },
            data: {
                bio: parsedData.bio,
                skills: parsedData.skills || [],
                yearsExp: parsedData.yearsExp || 0,
                education: parsedData.education || [],
                experience: parsedData.experience || [],
            },
        });

        revalidatePath("/candidate/profile");
        return { success: true, profile };
    } catch (error) {
        console.error("Update profile error:", error);
        return { error: "Cập nhật profile thất bại" };
    }
}
