import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import JobsPageContent from "./JobsPageContent";
import { getJobs, getJobFilters, getSavedJobIds } from "@/app/actions/jobs";

export default async function JobsPage({
    searchParams,
}: {
    searchParams: Promise<{ q?: string; loc?: string; type?: string; industry?: string; salary?: string; exp?: string; age?: string; page?: string }>;
}) {
    const params = await searchParams;
    const page = params.page ? parseInt(params.page) : 1;

    const filters = await getJobFilters();

    let industryId: string | undefined = undefined;
    if (params.industry) {
        const industry = filters.industries.find(i => i.slug === params.industry);
        if (industry) {
            industryId = industry.id;
        }
    }

    const [jobsResult, savedJobIds] = await Promise.all([
        getJobs({
            q: params.q,
            loc: params.loc,
            type: params.type,
            industryId: industryId,
            salary: params.salary,
            exp: params.exp,
            age: params.age,
            status: "ACTIVE",
            page,
            limit: 12
        }).catch(() => ({ jobs: [], total: 0 })),
        getSavedJobIds().catch(() => [] as string[])
    ]);

    const jobs = jobsResult.jobs.map(job => ({
        id: job.id,
        slug: job.slug,
        title: job.title,
        location: job.location,
        salaryMin: job.salaryMin ?? undefined,
        salaryMax: job.salaryMax ?? undefined,
        jobType: job.jobType,
        skills: job.skills,
        experienceYears: (job as any).experienceYears ?? undefined,
        ageMin: (job as any).ageMin ?? undefined,
        ageMax: (job as any).ageMax ?? undefined,
        createdAt: job.createdAt.toISOString(),
        company: {
            name: job.company.name,
            logo: job.company.logo ?? undefined,
            verified: job.company.verified ?? false,
        },
    }));

    return (
        <JobsPageContent
            industries={filters.industries}
            locations={filters.locations}
            jobTypes={filters.jobTypes}
            salaryRanges={filters.salaryRanges}
            initialJobs={jobs}
            initialIndustry={params.industry}
            searchParams={params}
            savedJobIds={savedJobIds}
            totalJobs={jobsResult.total}
            currentPage={page}
        />
    );
}
