"use client";

import { useState, useEffect, useRef } from "react";
import SearchableSelect from "./SearchableSelect";
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

interface Province {
    name: string;
    code: number;
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

const EXPERIENCE_RANGES = [
    { value: "0-1", label: "Dưới 1 năm" },
    { value: "1-3", label: "1 - 3 năm" },
    { value: "3-5", label: "3 - 5 năm" },
    { value: "5-10", label: "5 - 10 năm" },
    { value: "10-99", label: "Trên 10 năm" },
];

const AGE_RANGES = [
    { value: "18-25", label: "18 - 25 tuổi" },
    { value: "25-30", label: "25 - 30 tuổi" },
    { value: "30-35", label: "30 - 35 tuổi" },
    { value: "35-45", label: "35 - 45 tuổi" },
    { value: "45-60", label: "45 - 60 tuổi" },
];



export default function JobFilters({ industries, locations, jobTypes, salaryRanges }: JobFiltersProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [provinces, setProvinces] = useState<Province[]>([]);

    const industry = searchParams.get("industry") || "";
    const loc = searchParams.get("loc") || "";
    const type = searchParams.get("type") || "";
    const salary = searchParams.get("salary") || "";
    const exp = searchParams.get("exp") || "";
    const age = searchParams.get("age") || "";

    // Fetch provinces from API
    useEffect(() => {
        fetch("https://provinces.open-api.vn/api/v1/p/")
            .then((res) => res.json())
            .then((data: Province[]) => setProvinces(data))
            .catch(() => setProvinces([]));
    }, []);

    const handleFilterChange = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        // Always reset to page 1 on filter change
        params.delete("page");
        router.push(`/jobs?${params.toString()}`);
    };

    const iconColor = "var(--primary)";

    const industryIcon = (
        <svg width="16" height="16" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    );

    const locationIcon = (
        <svg width="16" height="16" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        </svg>
    );

    const typeIcon = (
        <svg width="16" height="16" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
        </svg>
    );

    const salaryIcon = (
        <svg width="16" height="16" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    const expIcon = (
        <svg width="16" height="16" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    const ageIcon = (
        <svg width="16" height="16" fill="none" stroke={iconColor} strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    );

    // Build location options: provinces from API + existing DB locations
    const provinceOptions = provinces.map((p) => ({
        value: p.name.replace(/^(Thành phố |Tỉnh )/, ""),
        label: p.name,
    }));

    const industryOptions = industries.map((cat) => ({ value: cat.slug, label: cat.name }));
    const typeOptions = jobTypes.map((t) => ({ value: t, label: JOB_TYPE_LABELS[t] || t }));
    const salaryOptions = salaryRanges.map((r) => ({ value: r.value, label: r.label }));

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <SearchableSelect
                label="Ngành nghề"
                icon={industryIcon}
                value={industry}
                options={industryOptions}
                onChange={(v) => handleFilterChange("industry", v)}
                placeholder="Tất cả ngành"
                searchPlaceholder="Tìm ngành nghề..."
            />
            <SearchableSelect
                label="Địa điểm"
                icon={locationIcon}
                value={loc}
                options={provinceOptions}
                onChange={(v) => handleFilterChange("loc", v)}
                placeholder="Tất cả địa điểm"
                searchPlaceholder="Tìm tỉnh/thành phố..."
            />
            <SearchableSelect
                label="Loại hình"
                icon={typeIcon}
                value={type}
                options={typeOptions}
                onChange={(v) => handleFilterChange("type", v)}
                placeholder="Tất cả loại hình"
                searchPlaceholder="Tìm loại hình..."
            />
            <SearchableSelect
                label="Mức lương"
                icon={salaryIcon}
                value={salary}
                options={salaryOptions}
                onChange={(v) => handleFilterChange("salary", v)}
                placeholder="Tất cả mức lương"
                searchPlaceholder="Tìm mức lương..."
            />
            <SearchableSelect
                label="Kinh nghiệm"
                icon={expIcon}
                value={exp}
                options={EXPERIENCE_RANGES}
                onChange={(v) => handleFilterChange("exp", v)}
                placeholder="Tất cả kinh nghiệm"
                searchPlaceholder="Tìm mức kinh nghiệm..."
            />
            <SearchableSelect
                label="Độ tuổi"
                icon={ageIcon}
                value={age}
                options={AGE_RANGES}
                onChange={(v) => handleFilterChange("age", v)}
                placeholder="Tất cả độ tuổi"
                searchPlaceholder="Tìm độ tuổi..."
            />

            {(industry || loc || type || salary || exp || age) && (
                <button
                    onClick={() => router.push("/jobs")}
                    style={{
                        padding: "0.5rem",
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                        color: "var(--text-muted)",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        marginTop: "0.5rem",
                        transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--primary)";
                        e.currentTarget.style.borderColor = "var(--primary)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--text-muted)";
                        e.currentTarget.style.borderColor = "var(--border)";
                    }}
                >
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Xoá tất cả bộ lọc
                </button>
            )}
        </div>
    );
}
