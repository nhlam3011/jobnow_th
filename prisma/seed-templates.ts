import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import * as dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log("Seeding CV Templates...");

    const templates = [
        {
            name: "Modern Professional",
            description: "Mẫu CV hiện đại, chuyên nghiệp với thanh bên màu xanh dương.",
            thumbnailUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80",
            layoutConfig: {
                layout: "sidebar-left",
                sections: ["header", "summary", "experience", "education", "skills"],
                sidebar: ["contact", "skills", "languages"]
            },
            styleConfig: {
                primaryColor: "#0056b3",
                secondaryColor: "#f8f9fa",
                fontFamily: "Inter, sans-serif",
                fontSize: 10,
                spacing: 12
            }
        },
        {
            name: "Creative Minimalist",
            description: "Thiết kế tối giản, tập trung vào nội dung với font chữ thanh lịch.",
            thumbnailUrl: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c848?w=400&q=80",
            layoutConfig: {
                layout: "sidebar-left",
                sections: ["header", "summary", "experience", "skills", "education"],
            },
            styleConfig: {
                primaryColor: "#333333",
                secondaryColor: "#ffffff",
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                spacing: 15
            }
        },
        {
            name: "Professional Classic",
            description: "Cấu trúc rõ ràng, chuyên nghiệp với thanh ngang bên trên, phù hợp cho quản lý.",
            thumbnailUrl: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&q=80",
            layoutConfig: {
                layout: "sidebar-top",
                sections: ["header", "summary", "experience", "education", "skills"],
            },
            styleConfig: {
                primaryColor: "#1d4ed8",
                secondaryColor: "#ffffff",
                fontFamily: "Roboto, sans-serif",
                fontSize: 10,
                spacing: 14
            }
        },
        {
            name: "Executive Elegant",
            description: "Sang trọng và đẳng cấp dành cho cấp quản lý cấp cao và giám đốc.",
            thumbnailUrl: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&q=80",
            layoutConfig: {
                layout: "sidebar-top",
                sections: ["header", "summary", "experience", "education", "skills"],
            },
            styleConfig: {
                primaryColor: "#0f172a",
                secondaryColor: "#f1f5f9",
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                spacing: 16
            }
        }
    ];

    for (const t of templates) {
        await prisma.template.upsert({
            where: { id: "temp-" + t.name.toLowerCase().replace(/ /g, "-") },
            update: t,
            create: {
                id: "temp-" + t.name.toLowerCase().replace(/ /g, "-"),
                ...t
            }
        });
    }

    console.log("✅ Seeded 4 CV Templates.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        await pool.end();
    });
