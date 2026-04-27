import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateText } from "@/lib/gemini";

let cachedAiAnalysis: { text: string; timestamp: number } | null = null;
const CACHE_DURATION = 2 * 60 * 60 * 1000; // 2 hours

export async function GET() {
    try {
        const [
            topSkills,
            jobTypeDistribution,
            topLocations,
            salaryByTitle,
            monthlyTrend,
            totalStats,
            topIndustries,
            topCompanies,
            experienceDistribution,
            latestInsights,
        ] = await Promise.all([
            getTopSkills(),
            getJobTypeDistribution(),
            getTopLocations(),
            getSalaryByTitle(),
            getMonthlyTrend(),
            getTotalStats(),
            getTopIndustries(),
            getTopCompanies(),
            getExperienceDistribution(),
            getLatestInsights(),
        ]);

        let aiAnalysis = "";
        const now = Date.now();
        
        if (cachedAiAnalysis && (now - cachedAiAnalysis.timestamp < CACHE_DURATION)) {
            aiAnalysis = cachedAiAnalysis.text;
        } else {
            try {
                const prompt = `Bạn là chuyên gia phân tích thị trường lao động. Dựa vào số liệu sau đây từ hệ thống JobNow, viết một đoạn tóm tắt ngắn (3-4 câu) về xu hướng thị trường hiện tại.
- Kỹ năng top đầu: ${topSkills.slice(0,3).map(s => s.skill).join(', ')}
- Ngành nghề tuyển dụng nhiều: ${topIndustries.slice(0,2).map(i => i.name).join(', ')}
- Tổng số việc làm đang tuyển: ${totalStats.totalJobs}
- Xu hướng 3 tháng gần nhất: ${monthlyTrend.slice(-3).map(m => m.month + ' ('+m.count+' tin)').join(', ')}

Viết bằng tiếng Việt, giọng điệu chuyên nghiệp, khách quan. Không dùng markdown phức tạp, chỉ được phép in đậm bằng thẻ HTML <strong>. Đi thẳng vào phân tích, không có câu mở đầu chào hỏi.`;
                
                aiAnalysis = await generateText(prompt);
                cachedAiAnalysis = { text: aiAnalysis, timestamp: now };
            } catch (aiError) {
                console.error("Failed to generate AI analysis:", aiError);
                aiAnalysis = `Dữ liệu cho thấy ngành <strong>${topIndustries[0]?.name || 'nổi bật'}</strong> và kỹ năng <strong>${topSkills[0]?.skill || 'chuyên môn'}</strong> đang dẫn đầu thị trường. Tổng cộng có <strong>${totalStats.totalJobs}</strong> cơ hội việc làm đang chờ đón ứng viên.`;
            }
        }

        return NextResponse.json({
            topSkills,
            jobTypeDistribution,
            topLocations,
            salaryByTitle,
            monthlyTrend,
            totalStats,
            topIndustries,
            topCompanies,
            experienceDistribution,
            latestInsights,
            aiAnalysis,
        });
    } catch (error) {
        console.error("Market insights API error:", error);
        return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
    }
}

async function getTopSkills(): Promise<Array<{ skill: string; count: number }>> {
    try {
        const result = await prisma.$queryRaw<Array<{ skill: string; count: bigint }>>`
            SELECT unnest(skills) as skill, COUNT(*) as count
            FROM "Job"
            WHERE status = 'ACTIVE'
            GROUP BY skill
            ORDER BY count DESC
            LIMIT 10
        `;
        return result.map(r => ({ skill: r.skill, count: Number(r.count) }));
    } catch {
        return [];
    }
}

async function getJobTypeDistribution(): Promise<Array<{ jobType: string; count: number }>> {
    try {
        const result = await prisma.job.groupBy({
            by: ["jobType"],
            where: { status: "ACTIVE" },
            _count: { id: true },
            orderBy: { _count: { id: "desc" } },
        });
        return result.map(r => ({ jobType: r.jobType, count: r._count.id }));
    } catch {
        return [];
    }
}

async function getTopLocations(): Promise<Array<{ location: string; count: number }>> {
    try {
        const result = await prisma.job.groupBy({
            by: ["location"],
            where: { status: "ACTIVE" },
            _count: { id: true },
            orderBy: { _count: { id: "desc" } },
            take: 10,
        });
        return result.map(r => ({ location: r.location || "N/A", count: r._count.id }));
    } catch {
        return [];
    }
}

async function getSalaryByTitle(): Promise<Array<{ title: string; avgSalary: number; count: number }>> {
    try {
        const result = await prisma.$queryRaw<Array<{ title: string; avg_salary: number; count: bigint }>>`
            SELECT 
                title,
                ROUND(AVG(("salaryMin" + COALESCE("salaryMax", "salaryMin")) / 2)) as avg_salary,
                COUNT(*) as count
            FROM "Job"
            WHERE status = 'ACTIVE' AND "salaryMin" IS NOT NULL AND "salaryMin" > 0
            GROUP BY title
            HAVING COUNT(*) >= 1
            ORDER BY count DESC
            LIMIT 8
        `;
        return result.map(r => ({
            title: r.title,
            avgSalary: Number(r.avg_salary),
            count: Number(r.count),
        }));
    } catch { return []; }
}

async function getMonthlyTrend(): Promise<Array<{ month: string; count: number }>> {
    try {
        const result = await prisma.$queryRaw<Array<{ month: string; count: bigint }>>`
            SELECT TO_CHAR("createdAt", 'YYYY-MM') as month, COUNT(*) as count
            FROM "Job"
            WHERE "createdAt" >= NOW() - INTERVAL '6 months'
            GROUP BY TO_CHAR("createdAt", 'YYYY-MM')
            ORDER BY month ASC
        `;
        return result.map(r => ({ month: r.month, count: Number(r.count) }));
    } catch { return []; }
}

async function getTotalStats() {
    try {
        const [totalJobs, totalCompanies, totalCandidates, totalApplications] = await Promise.all([
            prisma.job.count({ where: { status: "ACTIVE" } }),
            prisma.company.count(),
            prisma.user.count({ where: { role: "CANDIDATE" } }),
            prisma.application.count(),
        ]);
        return { totalJobs, totalCompanies, totalCandidates, totalApplications };
    } catch { return { totalJobs: 0, totalCompanies: 0, totalCandidates: 0, totalApplications: 0 }; }
}

// BỔ SUNG MỚI: Top Ngành nghề
async function getTopIndustries() {
    try {
        const result = await prisma.industry.findMany({
            include: {
                _count: {
                    select: { jobs: { where: { status: "ACTIVE" } } }
                }
            },
            take: 6,
            orderBy: { jobs: { _count: "desc" } }
        });
        return result.map(i => ({ name: i.name, count: i._count.jobs }));
    } catch { return []; }
}

// BỔ SUNG MỚI: Top Công ty đang tuyển
async function getTopCompanies() {
    try {
        const result = await prisma.company.findMany({
            include: {
                _count: {
                    select: { jobs: { where: { status: "ACTIVE" } } }
                }
            },
            take: 5,
            orderBy: { jobs: { _count: "desc" } }
        });
        return result.map(c => ({ 
            name: c.name, 
            logo: c.logo, 
            slug: c.slug,
            industry: c.industry,
            count: c._count.jobs 
        }));
    } catch { return []; }
}

// BỔ SUNG MỚI: Phân bổ kinh nghiệm
async function getExperienceDistribution() {
    try {
        const result = await prisma.$queryRaw<Array<{ exp: string; count: bigint }>>`
            SELECT 
                CASE 
                    WHEN "experienceYears" <= 1 THEN '0-1 năm'
                    WHEN "experienceYears" <= 3 THEN '2-3 năm'
                    WHEN "experienceYears" <= 5 THEN '3-5 năm'
                    ELSE 'Trên 5 năm'
                END as exp,
                COUNT(*) as count
            FROM "Job"
            WHERE status = 'ACTIVE' AND "experienceYears" IS NOT NULL
            GROUP BY exp
            ORDER BY count DESC
        `;
        return result.map(r => ({ label: r.exp, count: Number(r.count) }));
    } catch { return []; }
}

// BỔ SUNG MỚI: 3 bài Blog thị trường mới nhất
async function getLatestInsights() {
    try {
        return await prisma.blog.findMany({
            where: { isPublished: true, category: { contains: "Thị trường" } },
            take: 3,
            orderBy: { createdAt: "desc" },
            select: { title: true, slug: true, coverImage: true, excerpt: true, createdAt: true }
        });
    } catch { return []; }
}
