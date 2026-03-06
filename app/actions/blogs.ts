"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// --- Types ---
export interface GetBlogsParams {
    category?: string;
    search?: string;
    isPublished?: boolean;
    limit?: number;
    orderBy?: "createdAt" | "viewCount";
}

export interface CreateBlogData {
    title: string;
    slug: string;
    excerpt?: string;
    content: string;
    coverImage?: string;
    category: string;
    tags: string[];
    isPublished: boolean;
}

export interface UpdateBlogData extends Partial<CreateBlogData> {
    id: string;
}

// --- Queries ---

export async function getBlogs(params?: GetBlogsParams) {
    try {
        const { category, search, isPublished, limit, orderBy = "createdAt" } = params || {};

        const whereClause: any = {};

        if (category) {
            whereClause.category = category;
        }

        if (isPublished !== undefined) {
            whereClause.isPublished = isPublished;
        }

        if (search) {
            whereClause.title = { contains: search, mode: "insensitive" };
        }

        const blogs = await prisma.blog.findMany({
            where: whereClause,
            orderBy: { [orderBy]: "desc" },
            take: limit,
        });

        return blogs;
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
        return [];
    }
}

export async function getBlogBySlug(slug: string) {
    try {
        const blog = await prisma.blog.findUnique({
            where: { slug }
        });

        return blog;
    } catch (error) {
        console.error(`Failed to fetch blog with slug ${slug}:`, error);
        return null;
    }
}

export async function getBlogById(id: string) {
    try {
        const blog = await prisma.blog.findUnique({
            where: { id }
        });

        return blog;
    } catch (error) {
        console.error(`Failed to fetch blog with id ${id}:`, error);
        return null;
    }
}

// --- Mutations ---

export async function createBlog(data: CreateBlogData, authorName?: string) {
    try {
        // Simple slug generation if needed: data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
        const blog = await prisma.blog.create({
            data: {
                ...data,
                author: authorName || "Admin",
            }
        });

        revalidatePath("/blogs");
        revalidatePath("/admin/blogs");

        return { success: true, blog };
    } catch (error) {
        console.error("Failed to create blog:", error);
        return { success: false, error: "Failed to create blog" };
    }
}

export async function updateBlog(data: UpdateBlogData) {
    try {
        const { id, ...updateData } = data;

        const blog = await prisma.blog.update({
            where: { id },
            data: updateData
        });

        revalidatePath("/blogs");
        revalidatePath(`/blogs/${blog.slug}`);
        revalidatePath("/admin/blogs");

        return { success: true, blog };
    } catch (error) {
        console.error(`Failed to update blog ${data.id}:`, error);
        return { success: false, error: "Failed to update blog" };
    }
}

export async function deleteBlog(id: string) {
    try {
        await prisma.blog.delete({
            where: { id }
        });

        revalidatePath("/blogs");
        revalidatePath("/admin/blogs");

        return { success: true };
    } catch (error) {
        console.error(`Failed to delete blog ${id}:`, error);
        return { success: false, error: "Failed to delete blog" };
    }
}

export async function incrementBlogView(slug: string) {
    try {
        await prisma.blog.update({
            where: { slug },
            data: {
                viewCount: {
                    increment: 1
                }
            }
        });
        return { success: true };
    } catch (error) {
        console.error(`Failed to increment view count for blog ${slug}:`, error);
        return { success: false };
    }
}
