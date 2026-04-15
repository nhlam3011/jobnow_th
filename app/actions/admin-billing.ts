"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function getAdminVipPackages() {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") return [];

    return prisma.vipPackage.findMany({
        orderBy: { days: "asc" }
    });
}

export async function saveVipPackage(data: { id?: string; name: string; days: number; price: number; isActive: boolean }) {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") return { error: "Không có quyền" };

    try {
        if (data.id) {
            await prisma.vipPackage.update({
                where: { id: data.id },
                data: {
                    name: data.name,
                    days: data.days,
                    price: data.price,
                    isActive: data.isActive
                }
            });
        } else {
            await prisma.vipPackage.create({
                data: {
                    name: data.name,
                    days: data.days,
                    price: data.price,
                    isActive: data.isActive
                }
            });
        }
        revalidatePath("/admin/billing");
        return { success: true };
    } catch (e) {
        console.error("Save package error", e);
        return { error: "Lưu thất bại" };
    }
}

export async function deleteVipPackage(id: string) {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") return { error: "Không có quyền" };

    try {
        await prisma.vipPackage.delete({ where: { id } });
        revalidatePath("/admin/billing");
        return { success: true };
    } catch (e) {
        return { error: "Xóa thất bại" };
    }
}

export async function getAllTransactions() {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") return [];

    return prisma.transaction.findMany({
        include: { company: { select: { name: true, logo: true, slug: true } } },
        orderBy: { createdAt: "desc" }
    });
}

export async function getAllCompanyWallets() {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") return [];

    return prisma.company.findMany({
        select: { id: true, name: true, slug: true, logo: true, balance: true },
        orderBy: { balance: "desc" }
    });
}

export async function updateCompanyBalance(companyId: string, amount: number, type: "DEPOSIT" | "DEDUCTION", description: string) {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") return { error: "Không có quyền" };

    try {
        const result = await prisma.$transaction(async (tx) => {
            const company = await tx.company.findUnique({ where: { id: companyId } });
            if (!company) throw new Error("COMPANY_NOT_FOUND");
            if (type === "DEDUCTION" && company.balance < amount) throw new Error("INSUFFICIENT_FUNDS");

            const updatedCompany = await tx.company.update({
                where: { id: companyId },
                data: { balance: type === "DEPOSIT" ? { increment: amount } : { decrement: amount } }
            });

            await tx.transaction.create({
                data: {
                    companyId,
                    amount,
                    type,
                    description: `[ADMIN] ${description}`,
                    balanceAfter: updatedCompany.balance
                }
            });

            return updatedCompany;
        });

        revalidatePath("/admin/billing");
        return { success: true, balance: result.balance };
    } catch (e: any) {
        if (e.message === "INSUFFICIENT_FUNDS") return { error: "Số dư không đủ để trừ" };
        return { error: "Thao tác thất bại" };
    }
}

export async function getAdminBillingStats() {
    const session = await auth();
    if (!session?.user || session.user.role !== "ADMIN") return { totalDeposit: 0, totalSpent: 0 };

    const aggregates = await prisma.transaction.groupBy({
        by: ['type'],
        _sum: { amount: true }
    });

    let totalDeposit = 0;
    let totalSpent = 0;

    for (const group of aggregates) {
        if (group.type === "DEPOSIT") totalDeposit = group._sum.amount || 0;
        else if (group.type === "DEDUCTION") totalSpent = group._sum.amount || 0;
    }

    return { totalDeposit, totalSpent };
}
