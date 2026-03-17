import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { prisma } from "@/lib/prisma";
import CompaniesPageContent from "./CompaniesPageContent";

export const metadata = {
    title: "Danh sách công ty - JobNow",
    description: "Khám phá các công ty uy tín hàng đầu tuyển dụng",
};

export default async function CompaniesPage({
    searchParams,
}: {
    searchParams: Promise<{ q?: string; industry?: string; page?: string }>;
}) {
    const params = await searchParams;
    const page = params.page ? parseInt(params.page) : 1;
    const limit = 12;
    const skip = (page - 1) * limit;

    // Fetch companies with job counts
    const where = {
        ...(params.q && {
            OR: [
                { name: { contains: params.q, mode: "insensitive" as const } },
                { industry: { contains: params.q, mode: "insensitive" as const } },
                { description: { contains: params.q, mode: "insensitive" as const } },
            ],
        }),
        ...(params.industry && { industry: { contains: params.industry, mode: "insensitive" as const } }),
    };

    const [companies, total, industries] = await Promise.all([
        prisma.company.findMany({
            where,
            include: {
                _count: {
                    select: { jobs: { where: { status: "ACTIVE" } } },
                },
            },
            orderBy: { createdAt: "desc" },
            skip,
            take: limit,
        }),
        prisma.company.count({ where }),
        prisma.company.findMany({
            select: { industry: true },
            distinct: ["industry"],
            where: { industry: { not: null } },
        }),
    ]);

    const industryList = industries
        .map((c) => c.industry)
        .filter((i): i is string => i !== null);

    return (
        <CompaniesPageContent
            companies={companies}
            total={total}
            page={page}
            limit={limit}
            currentQ={params.q}
            currentIndustry={params.industry}
            industryList={[...new Set(industryList)]}
        />
    );
}
