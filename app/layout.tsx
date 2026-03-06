import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "JobNow – Tìm kiếm việc làm thông minh",
  description:
    "JobNow giúp bạn tìm việc làm phù hợp nhất dựa trên công nghệ AI Vector Semantic Search. Ứng tuyển nhanh, gợi ý việc làm thông minh.",
  keywords: "tìm việc làm, tuyển dụng, việc làm IT, tuyển dụng công nghệ, AI matching",
  openGraph: {
    title: "JobNow – Tìm kiếm việc làm thông minh",
    description: "Nền tảng tuyển dụng AI – kết nối ứng viên và nhà tuyển dụng theo độ tương đồng kỹ năng.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
