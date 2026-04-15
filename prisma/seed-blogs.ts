import { prisma } from '../lib/prisma';
import { blogPosts } from '../lib/blogs';

async function main() {
    console.log('Starting seed blogs...');

    let count = 0;
    for (const post of blogPosts) {
        const exists = await prisma.blog.findUnique({
            where: { slug: post.slug }
        });

        if (!exists) {
            await prisma.blog.create({
                data: {
                    title: post.title,
                    slug: post.slug,
                    excerpt: post.excerpt,
                    content: post.content,
                    coverImage: post.coverImage,
                    author: post.author,
                    category: post.category,
                    tags: post.tags,
                    isPublished: post.isPublished,
                    viewCount: post.viewCount,
                    createdAt: new Date(post.createdAt),
                    updatedAt: new Date(post.updatedAt)
                }
            });
            console.log(`Created blog: ${post.title}`);
            count++;
        } else {
            console.log(`Blog already exists: ${post.title}, skipping...`);
        }
    }

    console.log(`Finished seeding blogs (Created ${count} new blogs)`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
