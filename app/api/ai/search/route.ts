import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getEmbedding, createEmbeddingTextForJob } from "@/lib/gemini";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { query, location, limit = 20 } = body;

        if (!query) {
            return NextResponse.json(
                { error: "Vui lòng nhập từ khóa tìm kiếm" },
                { status: 400 }
            );
        }

        // Try AI semantic search first
        try {
            const result = await performAISearch(query, location, limit);
            return NextResponse.json(result);
        } catch (aiError: any) {
            console.error("AI search failed, falling back to database search:", aiError);

            // Check if it's an API key or quota issue
            if (aiError.message?.includes("GEMINI_API_KEY is not set") ||
                aiError.message?.includes("403") ||
                aiError.message?.includes("quota") ||
                aiError.message?.includes("Quota")) {

                // Fall back to database search
                const fallbackResult = await performDatabaseSearch(query, location, limit) as any;
                return NextResponse.json({
                    ...fallbackResult,
                    usingFallback: true,
                    message: "Tìm kiếm cơ bản (AI tạm khả dụng)"
                });
            }

            // For other errors, still try fallback
            const fallbackResult = await performDatabaseSearch(query, location, limit) as any;
            return NextResponse.json({
                ...fallbackResult,
                usingFallback: true,
            });
        }
    } catch (error: any) {
        console.error("Search API error:", error);

        let errorMessage = "Tìm kiếm thất bại";

        if (error.message?.includes("GEMINI_API_KEY is not set")) {
            errorMessage = "Chưa cấu hình GEMINI_API_KEY. Vui lòng thêm API key vào file .env";
        } else if (error.message?.includes("403") || error.message?.includes("quyền truy cập")) {
            errorMessage = "API key không có quyền sử dụng Gemini Embedding. Vui lòng tạo API key mới tại https://aistudio.google.com/app/apikey và bật API.";
        } else if (error.message?.includes(" quota") || error.message?.includes("Quota")) {
            errorMessage = "Đã hết quota API. Vui lòng thử lại sau hoặc nâng cấp gói Google AI.";
        }

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}

// AI-powered semantic search using embeddings
async function performAISearch(query: string, location?: string, limit = 20) {
    const embedding = await getEmbedding(query);

    // Build where clause
    const whereClause: any = {
        status: "ACTIVE",
    };

    // Add location filter if provided
    if (location) {
        whereClause.location = { contains: location, mode: "insensitive" };
    }

    // Check if jobs have embeddings
    const jobsWithEmbeddings = await prisma.$queryRaw<Array<{ count: bigint }>>`
        SELECT COUNT(*) as count FROM "Job" 
        WHERE status = 'ACTIVE' 
        AND embedding IS NOT NULL 
        AND array_length(embedding, 1) > 0
    `;

    if (Number(jobsWithEmbeddings[0]?.count) === 0) {
        // No embeddings available, use fallback
        throw new Error("No embeddings available");
    }

    let jobs;

    if (location) {
        // Use raw query with location filter
        jobs = await prisma.$queryRaw`
            SELECT 
                j.*,
                c.name as "companyName",
                c.logo as "companyLogo",
                c.slug as "companySlug",
                1 - (j.embedding <=> ${embedding}::vector) as similarity
            FROM "Job" j
            JOIN "Company" c ON j."companyId" = c.id
            WHERE j.status = 'ACTIVE'
                AND j.embedding IS NOT NULL
                AND j.location ILIKE ${'%' + location + '%'}
            ORDER BY j.embedding <=> ${embedding}::vector
            LIMIT ${limit}
        `;
    } else {
        jobs = await prisma.$queryRaw`
            SELECT 
                j.*,
                c.name as "companyName",
                c.logo as "companyLogo",
                c.slug as "companySlug",
                1 - (j.embedding <=> ${embedding}::vector) as similarity
            FROM "Job" j
            JOIN "Company" c ON j."companyId" = c.id
            WHERE j.status = 'ACTIVE'
                AND j.embedding IS NOT NULL
            ORDER BY j.embedding <=> ${embedding}::vector
            LIMIT ${limit}
        `;
    }

    return {
        success: true,
        jobs,
        searchType: "ai-semantic"
    };
}

// Database fallback search with keyword matching and ranking
async function performDatabaseSearch(query: string, location?: string, limit = 20) {
    const queryLower = query.toLowerCase();
    const queryWords = queryLower.split(/\s+/).filter(w => w.length > 1);

    // Build search conditions
    const orConditions: any[] = [
        { title: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
        { requirements: { contains: query, mode: "insensitive" } },
        { skills: { hasSome: queryWords } },
    ];

    // Add company search
    const companies = await prisma.company.findMany({
        where: {
            name: { contains: query, mode: "insensitive" },
        },
        select: { id: true },
    });

    if (companies.length > 0) {
        orConditions.push({ companyId: { in: companies.map(c => c.id) } } as any);
    }

    // Add industry search
    const industries = await prisma.industry.findMany({
        where: {
            name: { contains: query, mode: "insensitive" },
        },
        select: { id: true },
    });

    if (industries.length > 0) {
        orConditions.push({ industryId: { in: industries.map(i => i.id) } } as any);
    }

    const whereClause: any = {
        status: "ACTIVE",
        OR: orConditions,
    };

    // Add location filter if provided
    if (location) {
        whereClause.location = { contains: location, mode: "insensitive" };
    }

    // Execute search with ranking
    const jobs = await prisma.job.findMany({
        where: whereClause,
        include: {
            company: {
                select: {
                    name: true,
                    logo: true,
                    slug: true,
                },
            },
        },
        orderBy: [
            { createdAt: "desc" },
            { viewCount: "desc" },
        ],
        take: limit,
    });

    // Calculate relevance score for each job
    const scoredJobs = jobs.map(job => {
        let score = 0;

        // Title match (highest weight)
        if (job.title.toLowerCase().includes(queryLower)) {
            score += 100;
            // Exact title match
            if (job.title.toLowerCase() === queryLower) {
                score += 50;
            }
            // Title starts with query
            if (job.title.toLowerCase().startsWith(queryLower)) {
                score += 25;
            }
        }

        // Skills match
        job.skills.forEach(skill => {
            if (skill.toLowerCase().includes(queryLower)) {
                score += 30;
            }
        });

        // Description match
        if (job.description?.toLowerCase().includes(queryLower)) {
            score += 20;
        }

        // Requirements match
        if (job.requirements?.toLowerCase().includes(queryLower)) {
            score += 15;
        }

        // Company name match
        if (job.company.name.toLowerCase().includes(queryLower)) {
            score += 10;
        }

        return { ...job, relevanceScore: score };
    });

    // Sort by relevance score
    scoredJobs.sort((a, b) => b.relevanceScore - a.relevanceScore);

    return {
        success: true,
        jobs: scoredJobs,
        searchType: "keyword"
    };
}
