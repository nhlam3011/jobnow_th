import { prisma } from "@/lib/prisma";
import LandingContent from "./components/LandingContent";

async function getLandingData() {
  const [featuredJobs, industries, stats] = await Promise.all([
    prisma.job.findMany({
      where: { status: "ACTIVE" },
      include: { company: { select: { name: true, logo: true, slug: true } } },
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
    orderBy: { jobs: { _count: "desc" } },
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
      location: j.location,
      salary: j.salaryMin || j.salaryMax
        ? (j.salaryMin && j.salaryMax
          ? `${j.salaryMin.toLocaleString('vi-VN')}–${j.salaryMax.toLocaleString('vi-VN')} đ`
          : j.salaryMin
            ? `Từ ${j.salaryMin.toLocaleString('vi-VN')} đ`
            : `Đến ${j.salaryMax?.toLocaleString('vi-VN')} đ`)
        : "Thỏa thuận",
      type: j.jobType === "FULL_TIME" ? "Full-time" : j.jobType === "PART_TIME" ? "Part-time" : j.jobType === "REMOTE" ? "Remote" : j.jobType === "INTERNSHIP" ? "Intern" : "Contract",
      skills: j.skills.slice(0, 3),
      posted: getTimeAgo(j.createdAt),
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

function getTimeAgo(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Hôm nay";
  if (days === 1) return "Hôm qua";
  if (days < 7) return `${days} ngày trước`;
  if (days < 30) return `${Math.floor(days / 7)} tuần trước`;
  return `${Math.floor(days / 30)} tháng trước`;
}

export default async function Home() {
  const data = await getLandingData();
  return <LandingContent {...data} />;
}
