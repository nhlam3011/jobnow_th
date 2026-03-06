"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function verifyCompany(companyId: string, verified: boolean) {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") return { error: "Không có quyền" };

    await prisma.company.update({
        where: { id: companyId },
        data: { verified },
    });

    revalidatePath("/admin/companies");
    return { success: true };
}
