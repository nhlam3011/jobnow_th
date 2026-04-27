# Phân tích Dự án JobNow

Tài liệu này tổng hợp cấu trúc, các API/Actions chính và luồng vận hành của hệ thống JobNow.

## 1. Cấu trúc Công nghệ (Technology Stack)
- **Frontend/Backend**: Next.js 15+ (App Router)
- **Ngôn ngữ**: TypeScript
- **Database**: PostgreSQL với extension `pgvector` cho tìm kiếm AI.
- **ORM**: Prisma
- **Authentication**: Auth.js (NextAuth)
- **Styling**: Vanilla CSS (globals.css, dashboard.css)
- **AI Integration**: Google Gemini API (thông qua AI Actions)

## 2. Các Thực thể Chính (Core Entities - Prisma Schema)
- **User**: Quản lý tài khoản (Candidate, Employer, Admin).
- **Job**: Thông tin tin tuyển dụng, bao gồm trạng thái VIP và Embedding vector.
- **Company**: Thông tin doanh nghiệp, số dư ví, trạng thái xác thực.
- **Application**: Hồ sơ ứng tuyển, điểm match AI (matchScore).
- **CV & Resume**: Quản lý hồ sơ cá nhân và file tải lên.
- **Transaction & VipPackage**: Hệ thống nạp tiền và mua gói VIP.

## 3. Danh sách API & Server Actions Chính

### Tuyển dụng & Việc làm (`app/actions/jobs.ts`)
- `getJobs`: Lấy danh sách việc làm với bộ lọc.
- `getJobBySlug`: Chi tiết công việc.
- `createJob`: Nhà tuyển dụng đăng tin.
- `toggleSaveJob`: Lưu/Bỏ lưu việc làm.

### Ứng tuyển (`app/actions/applications.ts`)
- `applyToJob`: Gửi hồ sơ ứng tuyển.
- `updateApplicationStatus`: Nhà tuyển dụng duyệt/từ chối hồ sơ.
- `getApplicationsByEmployer`: Thống kê hồ sơ cho nhà tuyển dụng.

### AI & Tiện ích (`app/actions/ai.ts`, `match.ts`)
- `generateCoverLetter`: Tự động tạo thư xin việc bằng Gemini.
- `matchJobWithCandidate`: Tính toán độ phù hợp dựa trên Vector Similarity.
- `getMarketInsights`: Phân tích xu hướng thị trường lao động.

### Tài chính & Thanh toán (`app/actions/billing.ts`)
- `depositMoney`: Nạp tiền vào ví doanh nghiệp.
- `purchaseVipPackage`: Mua gói nâng cấp tin tuyển dụng.

### Xây dựng CV (`app/actions/cv.ts`)
- `createCV`: Lưu thông tin CV từ trình tạo trực tuyến.
- `getTemplates`: Lấy danh sách mẫu CV.

## 4. Luồng chạy của Web (User Flows)

### A. Luồng dành cho Ứng viên (Candidate Flow)
1. **Tìm kiếm**: Tìm theo từ khoá, ngành nghề, địa điểm (sử dụng Full-text search & AI gợi ý).
2. **Xây dựng Hồ sơ**: Sử dụng CV Builder hoặc upload Resume (PDF).
3. **Ứng tuyển**: Chọn công việc -> Chọn CV -> AI gợi ý Cover Letter -> Gửi ứng tuyển.
4. **Theo dõi**: Nhận thông báo khi trạng thái hồ sơ thay đổi.

### B. Luồng dành cho Nhà tuyển dụng (Employer Flow)
1. **Tạo Doanh nghiệp**: Đăng ký và cập nhật thông tin công ty.
2. **Nạp tiền**: Nạp tiền vào ví để sử dụng các dịch vụ cao cấp.
3. **Đăng tin**: Đăng tin tuyển dụng (có thể chọn nâng cấp lên VIP để hiển thị đầu trang).
4. **Quản lý Ứng viên**: Xem danh sách ứng tuyển, xem điểm match AI, thay đổi trạng thái hồ sơ.

### C. Luồng Quản trị (Admin Flow)
1. **Kiểm duyệt**: Phê duyệt tin tuyển dụng và xác thực công ty.
2. **Quản lý Tài chính**: Theo dõi các giao dịch và doanh thu.
3. **Quản lý Nội dung**: Đăng bài blog, quản lý các mẫu CV.

---
*Ghi chú: Thông tin này được trích xuất từ mã nguồn thực tế tại thời điểm phân tích.*
