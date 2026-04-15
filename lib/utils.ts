
export function getTimeAgo(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "Hôm nay";
  if (days === 1) return "Hôm qua";
  if (days < 7) return `${days} ngày trước`;
  if (days < 30) return `${Math.floor(days / 7)} tuần trước`;
  return `${Math.floor(days / 30)} tháng trước`;
}

export function formatSalary(min: number | null | undefined, max: number | null | undefined): string {
  if (!min && !max) return "Thỏa thuận";
  if (min && max) return `${min.toLocaleString('vi-VN')} - ${max.toLocaleString('vi-VN')} đ`;
  if (min) return `Từ ${min.toLocaleString('vi-VN')} đ`;
  if (max) return `Đến ${max.toLocaleString('vi-VN')} đ`;
  return "Thỏa thuận";
}

export const JOB_TYPE_LABELS: Record<string, string> = {
  FULL_TIME: "Full-time",
  PART_TIME: "Part-time",
  REMOTE: "Remote",
  INTERNSHIP: "Internship",
  CONTRACT: "Contract",
  "Full-time": "Full-time",
  "Part-time": "Part-time",
  Remote: "Remote",
  Internship: "Internship",
  Contract: "Contract",
};

export const JOB_TYPE_COLORS: Record<string, string> = {
  "Full-time": "#0369A1",
  "Part-time": "#F59E0B",
  Remote: "#22C55E",
  Internship: "#A855F7",
  Contract: "#374151",
  FULL_TIME: "#0369A1",
  PART_TIME: "#F59E0B",
  REMOTE: "#22C55E",
  INTERNSHIP: "#A855F7",
  CONTRACT: "#374151",
};
