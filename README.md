# JobNow - Hệ thống Tìm kiếm và Tư vấn việc làm thông minh

**Dự án:** Website Tìm kiếm và Tư vấn việc làm thông minh (JobNow)  
**Đối tượng:** Khóa luận tốt nghiệp ngành Công nghệ thông tin  
**Tech Stack:** Next.js 15, Supabase (PostgreSQL), Prisma, pgvector, Gemini (Google AI).

---

## 📑 1. TỔNG QUAN HỆ THỐNG

JobNow là hệ thống kết nối người tìm việc và nhà tuyển dụng, tích hợp AI để gợi ý việc làm phù hợp dựa trên Vector Semantic Search.

---

## 🛠 2. KIẾN TRÚC CÔNG NGHỆ

| Thành phần | Công nghệ |
| :--- | :--- |
| **Frontend** | Next.js 15 (App Router), React, Tailwind CSS |
| **Backend** | Next.js Server Actions |
| **Database** | PostgreSQL (Supabase), Prisma ORM |
| **AI Engine** | pgvector + Gemini (Google AI) |
| **Storage** | Supabase Storage |
| **Auth** | NextAuth.js |

---

## 🎯 3. DANH SÁCH CHỨC NĂNG WEBSITE

### 🔐 3.1. Xác thực & Tài khoản
- [x] Đăng ký tài khoản
- [x] Đăng nhập (Google, LinkedIn)
- [x] Quản lý thông tin tài khoản
- [x] Cập nhật avatar hồ sơ
- [x] Đăng xuất

### 👤 3.2. Phân hệ Ứng viên (Candidate)

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | **Dashboard** | Trang tổng quan với thống kê việc làm, đơn ứng tuyển |
| 2 | **Tìm kiếm việc làm** | Tìm kiếm với bộ lọc (địa điểm, lương, kinh nghiệm, kỹ năng) |
| 3 | **Semantic Search** | Tìm kiếm theo ngữ nghĩa AI |
| 4 | **Chi tiết việc làm** | Xem thông tin JD, yêu cầu, mô tả công việc |
| 5 | **Ứng tuyển** | Nộp hồ sơ (cv, thư xin việc) |
| 6 | **Theo dõi đơn** | Xem trạng thái đơn (Đang chờ, Phỏng vấn, Từ chối, Nhận việc) |
| 7 | **Việc đã lưu** | Lưu tin tuyển dụng yêu thích |
| 8 | **Việc làm đề xuất** | AI gợi ý công việc phù hợp với profile |
| 9 | **CV Builder** | Tạo CV trực tuyến với nhiều mẫu template |
| 10 | **Resume Upload** | Tải lên CV (PDF) lên hệ thống |
| 11 | **Trích xuất thông tin CV** | AI tự động trích xuất thông tin từ CV |
| 12 | **Mock Interview** | Phỏng vấn thử với AI |
| 13 | **Tạo Cover Letter** | AI tạo thư xin việc tự động |
| 14 | **Hồ sơ cá nhân** | Quản lý thông tin profile, kỹ năng, kinh nghiệm |
| 15 | **Thông báo** | Nhận thông báo về việc làm, trạng thái đơn |
| 16 | **Cài đặt** | Cấu hình tài khoản |

### 🏢 3.3. Phân hệ Nhà tuyển dụng (Employer)

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | **Dashboard** | Thống kê tin tuyển dụng, số lượng ứng viên |
| 2 | **Quản lý công ty** | Tạo/chỉnh sửa thông tin công ty |
| 3 | **Xác thực công ty** | Yêu cầu xác thực doanh nghiệp |
| 4 | **Đăng tin tuyển dụng** | Tạo tin với trình soạn thảo rich text |
| 5 | **Quản lý tin** | Chỉnh sửa, xóa, đóng/mở tin |
| 6 | **Danh sách ứng viên** | Xem tất cả đơn ứng tuyển |
| 7 | **Xếp hạng ứng viên** | AI xếp hạng theo mức độ phù hợp |
| 8 | **Lọc ứng viên** | Lọc theo kỹ năng, kinh nghiệm |
| 9 | **Xem chi tiết CV** | Xem thông tin CV ứng viên |
| 10 | **Cập nhật trạng thái** | Thay đổi trạng thái đơn (Đang chờ → Phỏng vấn → Từ chối/Nhận việc) |
| 11 | **Gợi ý ứng viên** | AI tìm kiếm CV phù hợp với JD |
| 12 | **Trang thương hiệu** | Trang profile công ty công khai |

### 🛡️ 3.4. Phân hệ Quản trị (Admin)

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | **Dashboard** | Thống kê tổng quan hệ thống |
| 2 | **Quản lý người dùng** | Danh sách, xem, khóa/mở tài khoản |
| 3 | **Quản lý nhà tuyển dụng** | Danh sách, duyệt/xác thực tài khoản |
| 4 | **Quản lý công ty** | Danh sách, quản lý thông tin công ty |
| 5 | **Quản lý tin tuyển dụng** | Danh sách, duyệt/kiểm duyệt tin |
| 6 | **Quản lý blog** | Tạo, sửa, xóa bài viết |
| 7 | **Quản lý CV templates** | Thiết kế, chỉnh sửa mẫu CV |
| 8 | **Quản lý keywords** | Bộ từ điển kỹ năng, ngành nghề |
| 9 | **Cài đặt** | Cấu hình hệ thống |

### 🤖 3.5. Tính năng AI

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | **Semantic Search** | Tìm kiếm theo ngữ nghĩa (Vector) |
| 2 | **Job Recommendation** | Gợi ý việc làm cho ứng viên |
| 3 | **Candidate Recommendation** | Gợi ý ứng viên cho nhà tuyển dụng |
| 4 | **Cover Letter** | Tạo thư xin việc tự động |
| 5 | **Mock Interview** | Phỏng vấn thử với AI |
| 6 | **Search Suggestions** | Gợi ý từ khóa tìm kiếm |
| 7 | **CV Extraction** | Trích xuất thông tin từ CV |
| 8 | **Market Insights** | Phân tích xu hướng thị trường |

### 📄 3.6. Trang công khai

| STT | Trang | Đường dẫn |
|-----|-------|-----------|
| 1 | Trang chủ | `/` |
| 2 | Danh sách việc làm | `/jobs` |
| 3 | Chi tiết việc làm | `/jobs/[slug]` |
| 4 | Danh sách công ty | `/companies` |
| 5 | Trang công ty | `/companies/[slug]` |
| 6 | Danh sách blog | `/blogs` |
| 7 | Chi tiết bài viết | `/blogs/[slug]` |
| 8 | Blog Career | `/blogs/career` |
| 9 | Blog CV Guide | `/blogs/cv-guide` |
| 10 | Blog Interview | `/blogs/interview` |
| 11 | Blog Salary | `/blogs/salary` |
| 12 | Market Insights | `/market-insights` |
| 13 | Đăng nhập | `/login` |
| 14 | Đăng ký | `/register` |

---

## 📂 4. CẤU TRÚC DỰ ÁN

```
app/
├── (auth)/                 # Authentication pages
│   ├── login/
│   └── register/
├── actions/                # Server Actions
│   ├── account.ts         # Account management
│   ├── admin.ts           # Admin actions
│   ├── ai.ts              # AI actions
│   ├── applications.ts    # Application management
│   ├── auth.ts            # Auth actions
│   ├── blogs.ts           # Blog management
│   ├── cover-letter.ts    # Cover letter generation
│   ├── cv.ts              # CV management
│   ├── jobs.ts            # Job management
│   ├── profile.ts         # Profile management
│   └── resume.ts          # Resume upload
├── admin/                  # Admin pages
│   ├── dashboard/
│   ├── users/
│   ├── employers/
│   ├── companies/
│   ├── jobs/
│   ├── blogs/
│   ├── cv-templates/
│   ├── keywords/
│   └── settings/
├── api/                    # API Routes
│   ├── ai/
│   │   ├── search/
│   │   ├── recommend/
│   │   ├── cover-letter/
│   │   ├── mock-interview/
│   │   └── suggestions/
│   ├── admin/
│   ├── employer/
│   └── market-insights/
├── candidate/              # Candidate pages
│   ├── dashboard/
│   ├── profile/
│   ├── applications/
│   ├── saved/
│   ├── recommended/
│   ├── cv-builder/
│   ├── resume/
│   ├── mock-interview/
│   ├── notifications/
│   └── settings/
├── employer/               # Employer pages
│   ├── dashboard/
│   ├── company/
│   └── jobs/
├── blogs/                  # Blog pages
├── companies/             # Company pages
├── jobs/                   # Job listing
├── market-insights/       # Market insights
├── components/            # Reusable components
│   ├── Navbar.tsx
│   ├── CVBuilder.tsx
│   ├── CVRenderer.tsx
│   ├── JobCard.tsx
│   └── ...
└── tools/                  # Utility tools
```

---

## 🧠 5. QUY TRÌNH AI MATCHING

1. **Embedding:** Sử dụng Gemini Embedding để chuyển văn bản (CV/JD) thành Vector.
2. **Lưu trữ:** Lưu vào cột `embedding` kiểu `vector` trong PostgreSQL (pgvector).
3. **So sánh:** Sử dụng toán tử `<=>` (Cosine Distance) để tính độ tương đồng.

---

## 🚀 6. CÁC BƯỚC TRIỂN KHAI

1. **Giai đoạn 1:** Phân tích yêu cầu, thiết kế Database Schema
2. **Giai đoạn 2:** Xây dựng Core Web (Auth, CRUD Jobs, CRUD CV)
3. **Giai đoạn 3:** Tích hợp AI (Vector Search, Recommendation)
4. **Giai đoạn 4:** Hoàn thiện UI/UX, tối ưu SEO

---

## 📦 7. THƯ VIỆN CHÍNH

```json
{
  "dependencies": {
    "next": "15.x",
    "react": "^18",
    "@prisma/client": "^5.x",
    "prisma": "^5.x",
    "next-auth": "^4.x",
    "@supabase/supabase-js": "^2.x",
    "@google/generative-ai": "^0.x",
    "pgvector": "^0.2.x",
    "zustand": "^4.x",
    "react-hook-form": "^7.x",
    "zod": "^3.x",
    "lucide-react": "^0.x"
  }
}
```
