import { prisma } from "@/lib/prisma";
import LandingContent from "./components/LandingContent";
import { getTimeAgo, formatSalary } from "@/lib/utils";

async function getLandingData() {
  const [featuredJobs, industries, stats] = await Promise.all([
    prisma.job.findMany({
      where: { status: "ACTIVE" },
      include: {
        company: {
          select: { name: true, logo: true, slug: true, verified: true }
        }
      },
      orderBy: { createdAt: "desc" },
      take: 9,
    }),
    prisma.industry.findMany({
      include: { _count: { select: { jobs: { where: { status: "ACTIVE" } } } } },
      orderBy: { name: "asc" },
    }),
    Promise.all([
      prisma.job.count({ where: { status: "ACTIVE" } }),
      prisma.company.count(),
      prisma.user.count({ where: { role: "CANDIDATE" } }),
      prisma.industry.count(),
    ]),
  ]);

  // Get top companies (with most active jobs)
  const companies = await prisma.company.findMany({
    include: { _count: { select: { jobs: { where: { status: "ACTIVE" } } } } },
    orderBy: { name: "asc" },
    take: 10,
  });

  return {
    featuredJobs: featuredJobs.map((j) => ({
      id: j.id,
      title: j.title,
      slug: j.slug,
      company: j.company.name,
      companyLogo: j.company.logo,
      companySlug: j.company.slug,
      location: j.location || "N/A",
      salary: formatSalary(j.salaryMin, j.salaryMax),
      type: j.jobType,
      skills: j.skills,
      posted: getTimeAgo(j.createdAt),
      deadlineDate: j.expiresAt ? j.expiresAt.toISOString() : undefined,
      experienceYears: j.experienceYears ?? undefined,
      ageMin: j.ageMin ?? undefined,
      ageMax: j.ageMax ?? undefined,
      verified: j.company.verified,
      featured: false,
    })),
    industries: industries.map((i) => ({
      id: i.id,
      name: i.name,
      slug: i.slug,
      count: i._count.jobs,
    })),
    companies: companies.filter(c => c._count.jobs > 0).map((c) => ({
      name: c.name,
      slug: c.slug,
      logo: c.logo,
      jobCount: c._count.jobs,
    })),
    stats: {
      jobs: stats[0],
      companies: stats[1],
      candidates: stats[2],
      industries: stats[3],
    },
    savedJobIds: await import("@/app/actions/jobs").then(m => m.getSavedJobIds()),
  };
}

export default async function Home() {
  const data = await getLandingData();
  return <LandingContent {...data} />;
}
