import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const [
            topSkills,
            jobTypeDistribution,
            topLocations,
            salaryByTitle,
            monthlyTrend,
            totalStats,
        ] = await Promise.all([
            getTopSkills(),
            getJobTypeDistribution(),
            getTopLocations(),
            getSalaryByTitle(),
            getMonthlyTrend(),
            getTotalStats(),
        ]);

        return NextResponse.json({
            topSkills,
            jobTypeDistribution,
            topLocations,
            salaryByTitle,
            monthlyTrend,
            totalStats,
        });
    } catch (error) {
        console.error("Market insights API error:", error);
        return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
    }
}

// Top 10 kỹ năng được yêu cầu nhiều nhất
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

// Phân bố loại hình công việc
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

// Top 10 địa điểm tuyển dụng
async function getTopLocations(): Promise<Array<{ location: string; count: number }>> {
    try {
        const result = await prisma.job.groupBy({
            by: ["location"],
            where: { status: "ACTIVE" },
            _count: { id: true },
            orderBy: { _count: { id: "desc" } },
            take: 10,
        });
        return result.map(r => ({ location: r.location, count: r._count.id }));
    } catch {
        return [];
    }
}

// Mức lương trung bình theo vị trí phổ biến
async function getSalaryByTitle(): Promise<Array<{ title: string; avgSalary: number; count: number }>> {
    try {
        const result = await prisma.$queryRaw<Array<{ title: string; avg_salary: number; count: bigint }>>`
            SELECT 
                title,
                ROUND(AVG(("salaryMin" + COALESCE("salaryMax", "salaryMin")) / 2)) as avg_salary,
                COUNT(*) as count
            FROM "Job"
            WHERE status = 'ACTIVE'
                AND "salaryMin" IS NOT NULL
                AND "salaryMin" > 0
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
    } catch {
        return [];
    }
}

// Trend tuyển dụng theo tháng (6 tháng gần nhất)
async function getMonthlyTrend(): Promise<Array<{ month: string; count: number }>> {
    try {
        const result = await prisma.$queryRaw<Array<{ month: string; count: bigint }>>`
            SELECT 
                TO_CHAR("createdAt", 'YYYY-MM') as month,
                COUNT(*) as count
            FROM "Job"
            WHERE "createdAt" >= NOW() - INTERVAL '6 months'
            GROUP BY TO_CHAR("createdAt", 'YYYY-MM')
            ORDER BY month ASC
        `;
        return result.map(r => ({ month: r.month, count: Number(r.count) }));
    } catch {
        return [];
    }
}

// Thống kê tổng
async function getTotalStats() {
    try {
        const [totalJobs, totalCompanies, totalCandidates, totalApplications] = await Promise.all([
            prisma.job.count({ where: { status: "ACTIVE" } }),
            prisma.company.count(),
            prisma.user.count({ where: { role: "CANDIDATE" } }),
            prisma.application.count(),
        ]);
        return { totalJobs, totalCompanies, totalCandidates, totalApplications };
    } catch {
        return { totalJobs: 0, totalCompanies: 0, totalCandidates: 0, totalApplications: 0 };
    }
}
