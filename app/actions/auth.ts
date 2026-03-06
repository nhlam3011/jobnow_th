"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function registerUser(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;
    const role = formData.get("role") as "CANDIDATE" | "EMPLOYER";

    if (!email || !password || !name || !role) {
        return { error: "Vui lòng điền đầy đủ thông tin" };
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return { error: "Email đã được sử dụng" };

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            email,
            password: passwordHash,
            name,
            role,
        },
    });

    // Create profile
    if (role === "CANDIDATE") {
        await prisma.candidateProfile.create({ data: { userId: user.id } });
    } else if (role === "EMPLOYER") {
        await prisma.employerProfile.create({ data: { userId: user.id } });
    }

    return { success: true };
}

export async function loginUser(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        await signIn("credentials", { email, password, redirect: false });
        return { success: true };
    } catch {
        return { error: "Email hoặc mật khẩu không đúng" };
    }
}

export async function logoutUser() {
    await signOut();
    redirect("/login");
}
