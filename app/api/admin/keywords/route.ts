import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateText, getEmbedding } from "@/lib/gemini";

// Common base keywords for seeding
const COMMON_BASE_KEYWORDS = [
    "marketing", "developer", "designer", "engineer", "manager", "sales", "accountant",
    "hr", "it", "data", "content", "product", "project", "operation", "admin",
    "customer service", "finance", "legal", "consultant", " analyst"
];

// Common keyword suffixes
const KEYWORD_SUFFIXES = [
    "online", "intern", "thực tập sinh", "leader", "manager", "senior", "junior",
    "assistant", "coordinator", "specialist", "director", "executive"
];

// GET /api/admin/keywords - List all keywords
export async function GET() {
    try {
        const keywords = await prisma.searchKeyword.findMany({
            orderBy: { createdAt: "desc" },
            take: 200,
        });
        return NextResponse.json({ keywords });
    } catch (error) {
        console.error("Error fetching keywords:", error);
        return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
    }
}

// POST /api/admin/keywords - Generate keywords using AI
export async function POST(request: NextRequest) {
    try {
        const { baseKeyword } = await request.json();

        if (!baseKeyword || !baseKeyword.trim()) {
            return NextResponse.json({ error: "Thiếu từ khoá cơ sở" }, { status: 400 });
        }

        const keyword = baseKeyword.toLowerCase().trim();
        let createdCount = 0;

        // Generate keyword suggestions using AI
        const keywordPrompt = `
Dựa vào từ khoá tìm kiếm: "${keyword}"

Hãy tạo ra 10 từ khoá gợi ý bằng cách thêm các hậu tố phổ biến vào từ khoá trên.
Các hậu tố có thể dùng: online, intern, thực tập sinh, leader, manager, senior, junior, assistant, coordinator, specialist, director, executive, trưởng nhóm, trưởng phòng.

Ví dụ nếu input là "marketing": output là ["marketing online", "marketing intern", "marketing leader", "marketing manager", "senior marketing", "chuyên viên marketing", "trưởng nhóm marketing", "thực tập sinh marketing", "marketing coordinator", "marketing specialist"]

Chỉ trả lời bằng một mảng JSON array các từ khoá, không giải thích gì thêm.
`;

        const keywordResult = await generateText(keywordPrompt);
        const keywordSuggestions = parseAIResponse(keywordResult);

        // Save keyword suggestions with embeddings
        for (const suggestion of keywordSuggestions) {
            try {
                // Generate embedding for the keyword
                const embedding = await getEmbedding(suggestion);

                await prisma.searchKeyword.upsert({
                    where: {
                        baseKeyword_keywordSuggestion_keywordType: {
                            baseKeyword: keyword,
                            keywordSuggestion: suggestion,
                            keywordType: "keyword_suggestion",
                        },
                    },
                    update: { embedding },
                    create: {
                        baseKeyword: keyword,
                        keywordSuggestion: suggestion,
                        keywordType: "keyword_suggestion",
                        embedding,
                    },
                });
                createdCount++;
            } catch (e) {
                console.error("Error saving keyword:", e);
            }
        }

        // Generate related keywords using AI
        const relatedPrompt = `
Dựa vào từ khoá tìm kiếm: "${keyword}"

Hãy tạo ra 10 từ khoá liên quan thường được tìm kiếm cùng với từ khoá trên.
Các từ khoá liên quan có thể là: các vị trí công việc liên quan, ngành nghề liên quan, các combination phổ biến.

Ví dụ nếu input là "marketing": output là ["content marketing", "digital marketing", "email marketing", "social media marketing", "seo marketing", "brand marketing", "marketing communications", "marketing automation", "marketing strategy", "marketing analytics"]

Chỉ trả lời bằng một mảng JSON array các từ khoá, không giải thích gì thêm.
`;

        const relatedResult = await generateText(relatedPrompt);
        const relatedKeywords = parseAIResponse(relatedResult);

        // Save related keywords with embeddings
        for (const suggestion of relatedKeywords) {
            try {
                const embedding = await getEmbedding(suggestion);

                await prisma.searchKeyword.upsert({
                    where: {
                        baseKeyword_keywordSuggestion_keywordType: {
                            baseKeyword: keyword,
                            keywordSuggestion: suggestion,
                            keywordType: "related_keyword",
                        },
                    },
                    update: { embedding },
                    create: {
                        baseKeyword: keyword,
                        keywordSuggestion: suggestion,
                        keywordType: "related_keyword",
                        embedding,
                    },
                });
                createdCount++;
            } catch (e) {
                console.error("Error saving related keyword:", e);
            }
        }

        return NextResponse.json({
            message: "Tạo từ khoá thành công",
            createdCount
        });
    } catch (error) {
        console.error("Error generating keywords:", error);
        return NextResponse.json({ error: "Lỗi khi tạo từ khoá" }, { status: 500 });
    }
}

// Parse AI response to extract array of keywords
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
