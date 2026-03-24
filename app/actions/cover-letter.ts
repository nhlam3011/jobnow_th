"use server";

import { generateStructuredText } from "@/lib/gemini";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

export async function generateCoverLetter(jobId: string) {
    const session = await auth();
    if (!session?.user) {
        return { error: "Vui lòng đăng nhập" };
    }

    try {
        const job = await prisma.job.findUnique({
            where: { id: jobId },
            include: { company: true },
        });

        if (!job) {
            return { error: "Không tìm thấy việc làm" };
        }

        const profile = await prisma.candidateProfile.findUnique({
            where: { userId: session.user.id },
        });

        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
        });

        if (!profile) {
            return { error: "Vui lòng cập nhật hồ sơ trước" };
        }

        const prompt = `
Bạn là một chuyên gia viết thư xin việc. Hãy viết một thư xin việc (cover letter) bằng tiếng Việt theo các yêu cầu sau:

**Thông tin ứng viên:**
- Tên: ${user?.name || "Ứng viên"}
- Kỹ năng: ${profile.skills?.join(", ") || "Chưa cập nhật"}
- Kinh nghiệm: ${profile.yearsExp || 0} năm
- Mô tả bản thân: ${profile.bio || "Chưa cập nhật"}

**Thông tin công việc:**
- Vị trí: ${job.title}
- Công ty: ${job.company.name}
- Mô tả: ${job.description}
- Yêu cầu: ${job.requirements || "Không có"}
- Địa điểm: ${job.location || "N/A"}

**Yêu cầu:**
1. Viết thư xin việc chuyên nghiệp, ngắn gọn (300-400 từ)
2. Giới thiệu bản thân và nêu rõ lý do phù hợp với vị trí
3. Liên kết kỹ năng của ứng viên với yêu cầu công việc
4. Thể hiện sự quan tâm và mong muốn được phỏng vấn
5. Kết thúc bằng lời cảm ơn

Viết thư xin việc ngay bây giờ:
        `.trim();

        const coverLetter = await generateStructuredText(
            prompt,
            "Bạn là một chuyên gia HR với nhiều năm kinh nghiệm trong việc đánh giá hồ sơ và viết thư xin việc. Hãy viết thư xin việc thuyết phục và chuyên nghiệp."
        );

        return { success: true, coverLetter, job: { title: job.title, company: job.company.name } };
    } catch (error) {
        console.error("Cover letter generation error:", error);
        return { error: "Tạo thư xin việc thất bại. Vui lòng thử lại." };
    }
}

export async function generateCoverLetterWithContext(
    jobId: string,
    additionalInfo?: string
) {
    const session = await auth();
    if (!session?.user) {
        return { error: "Vui lòng đăng nhập" };
    }

    try {
        const job = await prisma.job.findUnique({
            where: { id: jobId },
            include: { company: true },
        });

        if (!job) {
            return { error: "Không tìm thấy việc làm" };
        }

        const profile = await prisma.candidateProfile.findUnique({
            where: { userId: session.user.id },
        });

        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
        });

        const prompt = `
Bạn là một chuyên gia viết thư xin việc. Hãy viết một thư xin việc (cover letter) bằng tiếng Việt theo các yêu cầu sau:

**Thông tin ứng viên:**
- Tên: ${user?.name || "Ứng viên"}
- Kỹ năng: ${profile?.skills?.join(", ") || "Chưa cập nhật"}
- Kinh nghiệm: ${profile?.yearsExp || 0} năm
- Mô tả bản thân: ${profile?.bio || "Chưa cập nhật"}

**Thông tin công việc:**
- Vị trí: ${job.title}
- Công ty: ${job.company.name}
- Mô tả: ${job.description}
- Yêu cầu: ${job.requirements || "Không có"}
- Địa điểm: ${job.location}

**Thông tin bổ sung từ ứng viên:**
${additionalInfo || "Không có"}

**Yêu cầu:**
1. Viết thư xin việc chuyên nghiệp, ngắn gọn (300-400 từ)
2. Giới thiệu bản thân và nêu rõ lý do phù hợp với vị trí
3. Liên kết kỹ năng của ứng viên với yêu cầu công việc
4. Thể hiện sự quan tâm và mong muốn được phỏng vấn
5. Kết thúc bằng lời cảm ơn

Viết thư xin việc ngay bây giờ:
        `.trim();

        const coverLetter = await generateStructuredText(
            prompt,
            "Bạn là một chuyên gia HR với nhiều năm kinh nghiệm trong việc đánh giá hồ sơ và viết thư xin việc. Hãy viết thư xin việc thuyết phục và chuyên nghiệp."
        );

        return { success: true, coverLetter, job: { title: job.title, company: job.company.name } };
    } catch (error) {
        console.error("Cover letter generation error:", error);
        return { error: "Tạo thư xin việc thất bại. Vui lòng thử lại." };
    }
}
