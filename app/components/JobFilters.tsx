"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Industry {
    id: string;
    name: string;
    slug: string;
}

interface SalaryRange {
    value: string;
    label: string;
}

interface JobFiltersProps {
    industries: Industry[];
    locations: string[];
    jobTypes: string[];
    salaryRanges: SalaryRange[];
}

const JOB_TYPE_LABELS: Record<string, string> = {
    FULL_TIME: "Toàn thời gian",
    PART_TIME: "Bán thời gian",
    REMOTE: "Remote",
    INTERNSHIP: "Thực tập",
    CONTRACT: "Hợp đồng"
};

export default function JobFilters({ industries, locations, jobTypes, salaryRanges }: JobFiltersProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const industry = searchParams.get("industry") || "";
    const loc = searchParams.get("loc") || "";
    const type = searchParams.get("type") || "";
    const salary = searchParams.get("salary") || "";
    const exp = searchParams.get("exp") || "";

    const handleFilterChange = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        router.push(`/jobs?${params.toString()}`);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Industries */}
            <div className="card" style={{ padding: "1rem" }}>
                <label style={{ fontSize: "0.9375rem", fontWeight: 700, marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="16" height="16" fill="none" stroke="var(--primary)" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Ngành nghề
                </label>
                <select
                    value={industry}
                    onChange={(e) => handleFilterChange("industry", e.target.value)}
                    style={{
                        width: "100%",
                        padding: "0.5rem",
                        border: "1px solid var(--border)",
                        borderRadius: "0.5rem",
                        backgroundColor: "var(--bg)",
                        color: "var(--text)",
                        fontSize: "0.9rem",
                        cursor: "pointer"
                    }}
                >
                    <option value="">Tất cả ngành</option>
                    {industries.map((cat) => (
                        <option key={cat.id} value={cat.slug}>{cat.name}</option>
                    ))}
                </select>
            </div>

            {/* Locations */}
            <div className="card" style={{ padding: "1rem" }}>
                <label style={{ fontSize: "0.9375rem", fontWeight: 700, marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="16" height="16" fill="none" stroke="var(--primary)" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                    Địa điểm
                </label>
                <select
                    value={loc}
                    onChange={(e) => handleFilterChange("loc", e.target.value)}
                    style={{
                        width: "100%",
                        padding: "0.5rem",
                        border: "1px solid var(--border)",
                        borderRadius: "0.5rem",
                        backgroundColor: "var(--bg)",
                        color: "var(--text)",
                        fontSize: "0.9rem",
                        cursor: "pointer"
                    }}
                >
                    <option value="">Tất cả địa điểm</option>
                    {locations.map((location) => (
                        <option key={location} value={location}>{location}</option>
                    ))}
                </select>
            </div>

            {/* Job Types */}
            <div className="card" style={{ padding: "1rem" }}>
                <label style={{ fontSize: "0.9375rem", fontWeight: 700, marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="16" height="16" fill="none" stroke="var(--primary)" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                    </svg>
                    Loại hình
                </label>
                <select
                    value={type}
                    onChange={(e) => handleFilterChange("type", e.target.value)}
                    style={{
                        width: "100%",
                        padding: "0.5rem",
                        border: "1px solid var(--border)",
                        borderRadius: "0.5rem",
                        backgroundColor: "var(--bg)",
                        color: "var(--text)",
                        fontSize: "0.9rem",
                        cursor: "pointer"
                    }}
                >
                    <option value="">Tất cả loại hình</option>
                    {jobTypes.map((t) => (
                        <option key={t} value={t}>{JOB_TYPE_LABELS[t] || t}</option>
                    ))}
                </select>
            </div>

            {/* Salary Range */}
            <div className="card" style={{ padding: "1rem" }}>
                <label style={{ fontSize: "0.9375rem", fontWeight: 700, marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <svg width="16" height="16" fill="none" stroke="var(--primary)" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Mức lương
                </label>
                <select
                    value={salary}
                    onChange={(e) => handleFilterChange("salary", e.target.value)}
                    style={{
                        width: "100%",
                        padding: "0.5rem",
                        border: "1px solid var(--border)",
                        borderRadius: "0.5rem",
                        backgroundColor: "var(--bg)",
                        color: "var(--text)",
                        fontSize: "0.9rem",
                        cursor: "pointer"
                    }}
                >
                    <option value="">Tất cả mức lương</option>
                    {salaryRanges.map((range) => (
                        <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}
