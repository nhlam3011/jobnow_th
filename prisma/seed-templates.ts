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
            layoutConfig: {
                layout: "sidebar-left",
                sections: ["header", "summary", "experience", "education", "skills"],
                sidebar: ["contact", "skills", "languages"]
            },
            styleConfig: {
                primaryColor: "#0056b3",
                secondaryColor: "#f8f9fa",
                fontFamily: "Helvetica",
                fontSize: 10,
                spacing: 12
            }
        },
        {
            name: "Creative Minimalist",
            description: "Thiết kế tối giản, tập trung vào nội dung với font chữ thanh lịch.",
            layoutConfig: {
                layout: "single-column",
                sections: ["header", "summary", "experience", "skills", "education"],
            },
            styleConfig: {
                primaryColor: "#333333",
                secondaryColor: "#ffffff",
                fontFamily: "Times-Roman",
                fontSize: 11,
                spacing: 15
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

    console.log("✅ Seeded 2 CV Templates.");
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
