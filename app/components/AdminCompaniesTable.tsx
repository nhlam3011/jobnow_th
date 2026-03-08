"use client";

import { useState } from "react";
import Link from "next/link";
import CompanyVerifyButton from "@/app/components/CompanyVerifyButton";

interface Company {
    id: string;
    name: string;
    slug: string;
    website: string | null;
    industry: string | null;
    verified: boolean;
    _count: { jobs: number };
}

export default function AdminCompaniesTable({ companies }: { companies: Company[] }) {
    const [verifyFilter, setVerifyFilter] = useState("ALL");
    const [search, setSearch] = useState("");

    const filtered = companies.filter((c) => {
        const matchVerify = verifyFilter === "ALL" || (verifyFilter === "VERIFIED" && c.verified) || (verifyFilter === "UNVERIFIED" && !c.verified);
        const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.industry?.toLowerCase().includes(search.toLowerCase());
        return matchVerify && matchSearch;
    });

    const counts = {
        ALL: companies.length,
        VERIFIED: companies.filter(c => c.verified).length,
        UNVERIFIED: companies.filter(c => !c.verified).length,
    };

    return (
        <>
            <div className="dash-filter-bar">
                <input className="dash-input" placeholder="Tìm theo tên, ngành nghề..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="dash-filter-tabs">
                    {[
                        { key: "ALL", label: "Tất cả" },
                        { key: "VERIFIED", label: "Đã xác thực" },
                        { key: "UNVERIFIED", label: "Chưa xác thực" },
                    ].map((tab) => (
                        <button key={tab.key} className={`dash-filter-tab ${verifyFilter === tab.key ? "active" : ""}`} onClick={() => setVerifyFilter(tab.key)}>
                            {tab.label}
                            {counts[tab.key as keyof typeof counts] > 0 && (
                                <span className="dash-filter-count">{counts[tab.key as keyof typeof counts]}</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div className="dash-table-wrap">
                <table className="dash-table">
                    <thead>
                        <tr>
                            <th>Công ty</th>
                            <th className="hide-mobile">Ngành nghề</th>
                            <th className="hide-mobile">Việc làm</th>
                            <th style={{ textAlign: "center" }}>Trạng thái</th>
                            <th style={{ textAlign: "center" }}>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.length === 0 ? (
                            <tr><td colSpan={5} className="dash-empty">Không có công ty nào phù hợp</td></tr>
                        ) : (
                            filtered.map((company) => (
                                <tr key={company.id}>
                                    <td>
                                        <Link href={`/companies/${company.slug}`} target="_blank" style={{ color: "var(--text)", textDecoration: "none", fontWeight: 600, fontSize: "0.9375rem" }}>
                                            {company.name}
                                        </Link>
                                        {company.website && (
                                            <div style={{ fontSize: "0.8125rem", color: "var(--primary)", marginTop: "0.2rem" }}>{company.website}</div>
                                        )}
                                    </td>
                                    <td className="muted hide-mobile">{company.industry || "Chưa cập nhật"}</td>
                                    <td style={{ fontWeight: 600 }} className="hide-mobile">{company._count.jobs}</td>
                                    <td style={{ textAlign: "center" }}>
                                        {company.verified ? (
                                            <span className="dash-badge" style={{ background: "rgba(34,197,94,0.1)", color: "#16A34A" }}>Đã xác thực</span>
                                        ) : (
                                            <span className="dash-badge" style={{ background: "rgba(100,116,139,0.1)", color: "#64748B" }}>Chưa xác thực</span>
                                        )}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <CompanyVerifyButton id={company.id} verified={company.verified} />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
