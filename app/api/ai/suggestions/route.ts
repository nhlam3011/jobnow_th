import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateText } from "@/lib/gemini";

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get("q")?.toLowerCase().trim() || "";

        if (query.length < 2) {
            const popularSearches = await getPopularSearches();
            return NextResponse.json({ suggestions: popularSearches });
        }

        const suggestions: Array<{ type: string; value: string; label: string; extra?: string; score?: number }> = [];

        // 1. Search job titles từ database (ưu tiên cao nhất)
        const matchingJobs = await prisma.job.findMany({
            where: {
                status: "ACTIVE",
                title: { startsWith: query, mode: "insensitive" },
            },
            select: { title: true, company: { select: { name: true } }, location: true },
            distinct: ["title"],
            take: 5,
            orderBy: { viewCount: "desc" },
        });

        matchingJobs.forEach((job: any) => {
            if (!suggestions.find((s: any) => s.value === job.title)) {
                suggestions.push({
                    type: "job_title",
                    value: job.title,
                    label: job.title,
                    extra: job.company.name,
                    score: 1.0,
                });
            }
        });

        // 2. Search company names
        const matchingCompanies = await prisma.company.findMany({
            where: {
                name: { startsWith: query, mode: "insensitive" },
            },
            select: { name: true, industry: true },
            take: 3,
        });

        matchingCompanies.forEach((company: any) => {
            if (!suggestions.find((s: any) => s.value === company.name)) {
                suggestions.push({
                    type: "company",
                    value: company.name,
                    label: company.name,
                    extra: company.industry || undefined,
                    score: 0.95,
                });
            }
        });

        // 3. Search keywords từ bảng SearchKeyword (exact base match)
        const exactBaseKeywordMatch = await prisma.searchKeyword.findMany({
            where: {
                isActive: true,
                baseKeyword: { equals: query, mode: "insensitive" },
            },
            take: 20,
        });

        if (exactBaseKeywordMatch.length > 0) {
            exactBaseKeywordMatch
                .filter((k: any) => k.keywordType === "keyword_suggestion")
                .slice(0, 6)
                .forEach((kw: any) => {
                    if (!suggestions.find((s: any) => s.value === kw.keywordSuggestion)) {
                        suggestions.push({
                            type: "keyword_suggestion",
                            value: kw.keywordSuggestion,
                            label: kw.keywordSuggestion,
                            score: 0.9,
                        });
                    }
                });

            exactBaseKeywordMatch
                .filter((k: any) => k.keywordType === "related_keyword")
                .slice(0, 6)
                .forEach((kw: any) => {
                    if (!suggestions.find((s: any) => s.value === kw.keywordSuggestion)) {
                        suggestions.push({
                            type: "related_keyword",
                            value: kw.keywordSuggestion,
                            label: kw.keywordSuggestion,
                            score: 0.85,
                        });
                    }
                });
        }

        // 4. Prefix match trên keywordSuggestion
        if (exactBaseKeywordMatch.length === 0) {
            const prefixMatchKeywords = await prisma.searchKeyword.findMany({
                where: {
                    isActive: true,
                    keywordSuggestion: { startsWith: query, mode: "insensitive" },
                },
                take: 10,
            });

            prefixMatchKeywords.forEach((kw: any) => {
                if (!suggestions.find((s: any) => s.value === kw.keywordSuggestion)) {
                    suggestions.push({
                        type: kw.keywordType,
                        value: kw.keywordSuggestion,
                        label: kw.keywordSuggestion,
                        score: 0.8,
                    });
                }
            });
        }

        // 5. Contains match
        if (suggestions.length < 6) {
            const textMatchedKeywords = await prisma.searchKeyword.findMany({
                where: {
                    isActive: true,
                    keywordSuggestion: { startsWith: query, mode: "insensitive" },
                },
                take: 10,
            });

            textMatchedKeywords.forEach((kw: any) => {
                if (!suggestions.find((s: any) => s.value === kw.keywordSuggestion)) {
                    suggestions.push({
                        type: kw.keywordType,
                        value: kw.keywordSuggestion,
                        label: kw.keywordSuggestion,
                        score: 0.7,
                    });
                }
            });
        }

        // 6. Nếu chưa đủ gợi ý, dùng AI generate (context tìm việc)
        if (suggestions.length < 8) {
            try {
                const aiSuggestions = await generateJobKeywords(query);
                aiSuggestions.forEach(s => {
                    if (!suggestions.find(existing => existing.value === s.value)) {
                        suggestions.push(s);
                    }
                });
            } catch (aiError) {
                console.error("Error generating AI suggestions:", aiError);
            }
        }

        const [skills, industries] = await Promise.all([
            prisma.skill.findMany({
                where: { name: { startsWith: query, mode: "insensitive" } },
                select: { name: true, category: true },
                take: 3,
            }),
            prisma.industry.findMany({
                where: { name: { startsWith: query, mode: "insensitive" } },
                select: { name: true },
                take: 2,
            }),
        ]);

        skills.forEach((skill: any) => {
            if (!suggestions.find((s: any) => s.value === skill.name)) {
                suggestions.push({
                    type: "skill",
                    value: skill.name,
                    label: skill.name,
                    extra: skill.category,
                    score: 0.6,
                });
            }
        });

        industries.forEach((industry: any) => {
            if (!suggestions.find((s: any) => s.value === industry.name)) {
                suggestions.push({
                    type: "industry",
                    value: industry.name,
                    label: industry.name,
                    score: 0.5,
                });
            }
        });

        // Sort và giới hạn
        const sortedSuggestions = suggestions
            .sort((a, b) => (b.score || 0) - (a.score || 0))
            .slice(0, 15)
            .map(({ score, ...rest }) => rest);

        return NextResponse.json({ suggestions: sortedSuggestions });
    } catch (error) {
        console.error("Suggestions API error:", error);
        return NextResponse.json({ suggestions: [], error: "Lỗi server" }, { status: 500 });
    }
}

// Generate keywords bằng AI - context tìm việc làm
async function generateJobKeywords(query: string): Promise<Array<{ type: string; value: string; label: string; score: number }>> {
    const suggestions: Array<{ type: string; value: string; label: string; score: number }> = [];
    const keyword = query.toLowerCase().trim();

    // Prompt cho keyword suggestions - context tuyển dụng
    const keywordPrompt = `Bạn là hệ thống gợi ý tìm kiếm của website tuyển dụng việc làm tại Việt Nam.

Người dùng đang gõ: "${keyword}"

Hãy tạo 6 từ khóa tìm việc gợi ý mà người dùng có thể muốn tìm. Ví dụ:
- Nếu gõ "lập trình" → "lập trình viên Java", "lập trình web", "lập trình mobile", "lập trình viên Python"
- Nếu gõ "marketing" → "marketing online", "marketing manager", "digital marketing", "content marketing"
- Nếu gõ "kế toán" → "kế toán tổng hợp", "kế toán trưởng", "kế toán thuế", "kế toán nội bộ"

Chỉ trả lời bằng JSON array các string. Không giải thích.`;

    try {
        const keywordResult = await generateText(keywordPrompt);
        const keywordSuggestions = parseAIResponse(keywordResult);

        for (const suggestion of keywordSuggestions.slice(0, 6)) {
            try {
                await prisma.searchKeyword.upsert({
                    where: {
                        baseKeyword_keywordSuggestion_keywordType: {
                            baseKeyword: keyword,
                            keywordSuggestion: suggestion,
                            keywordType: "keyword_suggestion",
                        },
                    },
                    update: {},
                    create: {
                        baseKeyword: keyword,
                        keywordSuggestion: suggestion,
                        keywordType: "keyword_suggestion",
                        embedding: [],
                    },
                });
                suggestions.push({
                    type: "keyword_suggestion",
                    value: suggestion,
                    label: suggestion,
                    score: 0.65,
                });
            } catch (e) {
                console.error("Error saving keyword:", e);
            }
        }
    } catch (e) {
        console.error("Error generating keyword suggestions:", e);
    }

    // Prompt cho related keywords - vị trí/ngành liên quan
    const relatedPrompt = `Bạn là hệ thống gợi ý tìm kiếm của website tuyển dụng việc làm tại Việt Nam.

Người dùng tìm: "${keyword}"

Hãy gợi ý 4 từ khóa việc làm LIÊN QUAN mà người tìm "${keyword}" cũng hay tìm. Ví dụ:
- "frontend developer" → "React developer", "UI/UX designer", "fullstack developer"  
- "nhân viên kinh doanh" → "sales executive", "account manager", "business development"
- "graphic design" → "UI designer", "creative director", "brand designer"

Chỉ trả lời bằng JSON array các string. Không giải thích.`;

    try {
        const relatedResult = await generateText(relatedPrompt);
        const relatedKeywords = parseAIResponse(relatedResult);

        for (const suggestion of relatedKeywords.slice(0, 4)) {
            try {
                await prisma.searchKeyword.upsert({
                    where: {
                        baseKeyword_keywordSuggestion_keywordType: {
                            baseKeyword: keyword,
                            keywordSuggestion: suggestion,
                            keywordType: "related_keyword",
                        },
                    },
                    update: {},
                    create: {
                        baseKeyword: keyword,
                        keywordSuggestion: suggestion,
                        keywordType: "related_keyword",
                        embedding: [],
                    },
                });
                suggestions.push({
                    type: "related_keyword",
                    value: suggestion,
                    label: suggestion,
                    score: 0.55,
                });
            } catch (e) {
                console.error("Error saving related keyword:", e);
            }
        }
    } catch (e) {
        console.error("Error generating related keywords:", e);
    }

    return suggestions;
}

function parseAIResponse(response: string): string[] {
    try {
        const jsonMatch = response.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);
            if (Array.isArray(parsed)) {
                return parsed.map((item: string) => item.trim()).filter((item: string) => item.length > 0);
            }
        }
        return response
            .split(/[\n,]/)
            .map((item) => item.trim().replace(/^["']|["']$/g, ""))
            .filter((item) => item.length > 0);
    } catch {
        return [];
    }
}

async function getPopularSearches() {
    try {
        const [popularJobs, popularCompanies, popularIndustries] = await Promise.all([
            prisma.job.findMany({
                where: { status: "ACTIVE" },
                select: { title: true },
                distinct: ["title"],
                take: 5,
                orderBy: { viewCount: "desc" },
            }),
            prisma.company.findMany({
                where: { verified: true },
                select: { name: true },
                take: 3,
                orderBy: { createdAt: "desc" },
            }),
            prisma.industry.findMany({
                take: 3,
            }),
        ]);

        const suggestions: Array<{ type: string; value: string; label: string; extra?: string }> = [];

        popularJobs.forEach((job: any) => {
            suggestions.push({
                type: "job_title",
                value: job.title,
                label: job.title,
            });
        });

        popularCompanies.forEach((company: any) => {
            suggestions.push({
                type: "company",
                value: company.name,
                label: company.name,
            });
        });

        popularIndustries.forEach((industry: any) => {
            suggestions.push({
                type: "industry",
                value: industry.name,
                label: industry.name,
            });
        });

        return suggestions.slice(0, 10);
    } catch (error) {
        console.error("Error getting popular searches:", error);
        return [];
    }
}
