import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getEmbedding } from "@/lib/gemini";

// Common base keywords for seeding
const COMMON_BASE_KEYWORDS = [
    "marketing", "developer", "designer", "engineer", "manager", "sales", "accountant",
    "hr", "it", "data", "content", "product", "project", "operation", "admin",
    "customer service", "finance", "legal", "consultant", "analyst"
];

// Keyword suffixes for generating suggestions
const KEYWORD_SUFFIXES = [
    "online", "intern", "thực tập sinh", "leader", "manager", "senior", "junior",
    "assistant", "coordinator", "specialist", "director", "executive"
];

// Related keywords mapping
const RELATED_KEYWORDS_MAP: Record<string, string[]> = {
    "marketing": ["content marketing", "digital marketing", "email marketing", "social media marketing", "seo marketing", "brand marketing"],
    "developer": ["frontend developer", "backend developer", "fullstack developer", "mobile developer", "web developer"],
    "designer": ["ui designer", "ux designer", "graphic designer", "web designer", "product designer"],
    "engineer": ["software engineer", "mechanical engineer", "electrical engineer", "civil engineer", "qa engineer"],
    "manager": ["project manager", "product manager", "sales manager", "marketing manager", "hr manager"],
    "sales": ["sales executive", "sales manager", "sales representative", "business development", "account executive"],
    "accountant": ["kế toán", "tài chính", "accountant", "finance manager"],
    "hr": ["hr manager", "hr specialist", "recruiter", "nhân sự", "tuyển dụng"],
    "it": ["it support", "it administrator", "it manager", "it security", "system administrator"],
    "data": ["data analyst", "data scientist", "data engineer", "business analyst", "phân tích dữ liệu"],
    "content": ["content writer", "content marketing", "content creator", "copywriter", "biên tập viên"],
    "product": ["product manager", "product owner", "quản lý sản phẩm", "product marketing"],
    "project": ["project manager", "project coordinator", "quản lý dự án", "project executive"],
    "operation": ["vận hành", "operation manager", "operations coordinator", "quản lý vận hành"],
    "admin": ["admin staff", "nhân viên hành chính", "admin assistant", "hành chính văn phòng"],
    "customer service": ["customer service", "chăm sóc khách hàng", "customer support", "tư vấn"],
    "finance": ["tài chính", "tài chính doanh nghiệp", "finance manager", "financial analyst"],
};

// POST /api/admin/keywords/seed - Seed common keywords
export async function POST() {
    let createdCount = 0;

    try {
        for (const baseKeyword of COMMON_BASE_KEYWORDS) {
            // Generate keyword suggestions
            for (const suffix of KEYWORD_SUFFIXES) {
                const suggestion = `${baseKeyword} ${suffix}`;

                try {
                    const embedding = await getEmbedding(suggestion);

                    await prisma.searchKeyword.upsert({
                        where: {
                            baseKeyword_keywordSuggestion_keywordType: {
                                baseKeyword,
                                keywordSuggestion: suggestion,
                                keywordType: "keyword_suggestion",
                            },
                        },
                        update: { embedding },
                        create: {
                            baseKeyword,
                            keywordSuggestion: suggestion,
                            keywordType: "keyword_suggestion",
                            embedding,
                        },
                    });
                    createdCount++;
                } catch (e) {
                    console.error(`Error creating keyword ${suggestion}:`, e);
                }
            }

            // Generate related keywords
            const relatedKeywords = RELATED_KEYWORDS_MAP[baseKeyword] || [];
            for (const suggestion of relatedKeywords) {
                try {
                    const embedding = await getEmbedding(suggestion);

                    await prisma.searchKeyword.upsert({
                        where: {
                            baseKeyword_keywordSuggestion_keywordType: {
                                baseKeyword,
                                keywordSuggestion: suggestion,
                                keywordType: "related_keyword",
                            },
                        },
                        update: { embedding },
                        create: {
                            baseKeyword,
                            keywordSuggestion: suggestion,
                            keywordType: "related_keyword",
                            embedding,
                        },
                    });
                    createdCount++;
                } catch (e) {
                    console.error(`Error creating related keyword ${suggestion}:`, e);
                }
            }
        }

        return NextResponse.json({
            message: "Thêm từ khoá phổ biến thành công",
            createdCount
        });
    } catch (error) {
        console.error("Error seeding keywords:", error);
        return NextResponse.json({ error: "Lỗi khi thêm từ khoá" }, { status: 500 });
    }
}
