"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export async function getCompanyBalance() {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") {
        return { error: "Không có quyền truy cập" };
    }

    const employer = await prisma.employerProfile.findUnique({
        where: { userId: session.user.id },
        include: { company: true }
    });

    if (!employer?.company) {
        return { error: "Không tìm thấy công ty" };
    }

    return { success: true, balance: employer.company.balance };
}

export async function getVipPackages() {
    return prisma.vipPackage.findMany({
        where: { isActive: true },
        orderBy: { days: "asc" }
    });
}

export async function depositMoney(amount: number) {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") {
        return { error: "Không có quyền truy cập" };
    }

    if (amount <= 0) return { error: "Số tiền không hợp lệ" };

    const employer = await prisma.employerProfile.findUnique({
        where: { userId: session.user.id },
        select: { companyId: true }
    });

    if (!employer?.companyId) return { error: "Chưa có cấu hình công ty" };

    try {
        const result = await prisma.$transaction(async (tx) => {
            const company = await tx.company.update({
                where: { id: employer.companyId! },
                data: { balance: { increment: amount } }
            });

            await tx.transaction.create({
                data: {
                    companyId: company.id,
                    amount,
                    type: "DEPOSIT",
                    description: "Nạp tiền vào ví điện tử",
                    balanceAfter: company.balance
                }
            });

            return company;
        });

        revalidatePath("/employer/billing");
        return { success: true, balance: result.balance };
    } catch (e) {
        console.error("Deposit error:", e);
        return { error: "Đã xảy ra lỗi khi nạp tiền" };
    }
}

export async function upgradeJobToVip(jobId: string, packageId: string) {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") {
        return { error: "Không có quyền truy cập" };
    }

    const employer = await prisma.employerProfile.findUnique({
        where: { userId: session.user.id },
        select: { companyId: true }
    });

    if (!employer?.companyId) return { error: "Chưa cấu hình công ty" };

    try {
        const pkg = await prisma.vipPackage.findUnique({ where: { id: packageId } });
        if (!pkg || !pkg.isActive) return { error: "Gói VIP không tồn tại hoặc đã bị khóa" };

        const price = pkg.price;
        const days = pkg.days;

        const result = await prisma.$transaction(async (tx) => {
            const company = await tx.company.findUnique({
                where: { id: employer.companyId! }
            });

            if (!company) throw new Error("COMPANY_NOT_FOUND");
            if (company.balance < price) throw new Error("INSUFFICIENT_FUNDS");

            const job = await tx.job.findUnique({ where: { id: jobId } });
            if (!job || job.companyId !== company.id) throw new Error("JOB_NOT_FOUND");

            // Deduct balance
            const updatedCompany = await tx.company.update({
                where: { id: company.id },
                data: { balance: { decrement: price } }
            });

            // Set VIP
            const vipUntil = new Date();
            vipUntil.setDate(vipUntil.getDate() + days);

            await tx.job.update({
                where: { id: jobId },
                data: { isVip: true, vipUntil }
            });

            // Ghi log giao dịch
            await tx.transaction.create({
                data: {
                    companyId: company.id,
                    amount: price,
                    type: "DEDUCTION",
                    description: `Thanh toán ${pkg.name} - ${job.title}`,
                    balanceAfter: updatedCompany.balance
                }
            });

            return { success: true };
        });

        revalidatePath("/employer/jobs");
        revalidatePath("/employer/billing");
        return result;
    } catch (e: any) {
        console.error("VIP upgrade error:", e);
        if (e.message === "INSUFFICIENT_FUNDS") return { error: "Số dư không đủ. Vui lòng nạp thêm tiền." };
        if (e.message === "JOB_NOT_FOUND") return { error: "Không tìm thấy tin đăng" };
        return { error: "Lỗi hệ thống khi nâng cấp" };
    }
}

export async function getTransactionHistory() {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") {
        return [];
    }

    const employer = await prisma.employerProfile.findUnique({
        where: { userId: session.user.id },
        select: { companyId: true }
    });

    if (!employer?.companyId) return [];

    return prisma.transaction.findMany({
        where: { companyId: employer.companyId },
        orderBy: { createdAt: "desc" }
    });
}

export async function getBillingStats() {
    const session = await auth();
    if (!session?.user || session.user.role !== "EMPLOYER") {
        return { totalDeposit: 0, totalSpent: 0 };
    }

    const employer = await prisma.employerProfile.findUnique({
        where: { userId: session.user.id },
        select: { companyId: true }
    });

    if (!employer?.companyId) return { totalDeposit: 0, totalSpent: 0 };

    const aggregates = await prisma.transaction.groupBy({
        by: ['type'],
        where: { companyId: employer.companyId },
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
