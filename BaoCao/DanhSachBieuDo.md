# Danh sách các Biểu đồ chính cần vẽ - Dự án JobNow

Tài liệu này liệt kê tất cả các sơ đồ/biểu đồ cần thiết cho báo cáo khóa luận, dựa trên cấu trúc hệ thống thực tế.

---

## 1. Sơ đồ Use Case (Mục 3.3)

### 1.1. Use Case tổng quát
- [x] **UC-00: Use Case tổng quát hệ thống JobNow** ✅ *(đã vẽ PlantUML — UseCaseDiagrams.md)*
    - 3 tác nhân chính: Candidate, Employer, Admin
    - Tổng hợp tất cả chức năng lớn: Đăng nhập, Tìm việc, Ứng tuyển, Đăng tin, Nạp tiền, Kiểm duyệt...

### 1.2. Use Case phân rã
- [x] **UC-01: Use Case phân rã - Ứng viên (Candidate)** ✅ *(đã vẽ PlantUML — UseCaseDiagrams.md)*
    - Tìm kiếm việc làm, Xem chi tiết, Lưu việc làm, Ứng tuyển, Tạo CV, Upload Resume, Xem thông báo, Quản lý hồ sơ
- [x] **UC-02: Use Case phân rã - Nhà tuyển dụng (Employer)** ✅ *(đã vẽ PlantUML — UseCaseDiagrams.md)*
    - Đăng tin, Nâng cấp VIP, Quản lý ứng viên, Nạp tiền ví, Cập nhật công ty, Xem Match Score
- [x] **UC-03: Use Case phân rã - Quản trị viên (Admin)** ✅ *(đã vẽ PlantUML — UseCaseDiagrams.md)*
    - Duyệt tin tuyển dụng, Xác thực công ty, Quản lý Blog, Quản lý mẫu CV, Thống kê tài chính, Quản lý gói VIP

### 1.3. Đặc tả Use Case (viết mô tả chi tiết, không phải biểu đồ)
- [x] Đặc tả UC: Ứng tuyển việc làm ✅ *(đã viết — Chuong3.md mục 3.3.3)*
- [x] Đặc tả UC: Đăng tin tuyển dụng ✅ *(đã viết — Chuong3.md mục 3.3.3)*
- [x] Đặc tả UC: Nạp tiền & Mua gói VIP ✅ *(đã viết — Chuong3.md mục 3.3.3)*
- [x] Đặc tả UC: Tạo CV bằng CV Builder ✅ *(đã viết — Chuong3.md mục 3.3.3)*

---

## 2. Sơ đồ Class (Mục 3.4)

### 2.1. Class Diagram tổng thể
- [x] **CD-01: Sơ đồ Class tổng thể** ✅ *(đã vẽ PlantUML — ClassDiagrams.md)*
    - Tất cả 15 entities từ Prisma Schema: User, CandidateProfile, EmployerProfile, Company, Job, Application, Resume, CV, Template, Notification, Skill, Industry, SavedJob, Transaction, VipPackage, Blog, SearchKeyword
    - Quan hệ: 1-1 (User ↔ CandidateProfile), 1-n (Company → Job), n-n (User ↔ Job qua SavedJob)

### 2.2. Class Diagram phân rã
- [x] **CD-02: Class phân rã - Module Tuyển dụng** ✅ *(đã vẽ PlantUML — ClassDiagrams.md)*
    - Job, Company, Industry, Application, User
- [x] **CD-03: Class phân rã - Module Hồ sơ & CV** ✅ *(đã vẽ PlantUML — ClassDiagrams.md)*
    - User, CandidateProfile, Resume, CV, Template
- [x] **CD-04: Class phân rã - Module Tài chính** ✅ *(đã vẽ PlantUML — ClassDiagrams.md)*
    - Company, Transaction, VipPackage, Job (isVip, vipUntil)

---

## 3. Sơ đồ Tuần tự - Sequence Diagram (Mục 3.5.1)

- [x] **SD-01: Luồng Ứng tuyển việc làm** ✅ *(đã vẽ PlantUML — SequenceActivityDiagrams.md)*
    - Candidate → JobDetailPage → ApplyButton → `applyToJob()` → Prisma (Application) → Notification
- [x] **SD-02: Luồng Nạp tiền & Mua gói VIP** ✅ *(đã vẽ PlantUML — SequenceActivityDiagrams.md)*
    - Employer → BillingPage → `depositMoney()` → Transaction → `purchaseVipPackage()` → Job.isVip=true
- [x] **SD-03: Luồng AI Smart Matching** ✅ *(đã vẽ PlantUML — SequenceActivityDiagrams.md)*
    - Employer → ApplicationsList → `matchJobWithCandidate()` → Gemini Embedding → pgvector Cosine Similarity → matchScore
- [x] **SD-04: Luồng tạo Cover Letter bằng AI** ✅ *(đã vẽ PlantUML — SequenceActivityDiagrams.md)*
    - Candidate → CoverLetterButton → `generateCoverLetter()` → Gemini API → Response text

---

## 4. Sơ đồ Hoạt động - Activity Diagram (Mục 3.5.2)

- [x] **AD-01: Quy trình Đăng tin tuyển dụng** ✅ *(đã vẽ PlantUML — SequenceActivityDiagrams.md)*
    - Employer tạo tin → Admin duyệt (Approve/Reject) → Tin hiển thị (ACTIVE) → Hết hạn (CLOSED)
- [x] **AD-02: Quy trình Ứng tuyển đầy đủ** ✅ *(đã vẽ PlantUML — SequenceActivityDiagrams.md)*
    - Candidate tìm việc → Xem chi tiết → Chọn CV/Resume → AI tạo Cover Letter → Gửi Application → Employer review → Thay đổi trạng thái (PENDING → REVIEWING → INTERVIEW → ACCEPTED/REJECTED)
- [x] **AD-03a: Quy trình Nạp tiền vào ví** ✅ *(đã vẽ PlantUML — SequenceActivityDiagrams.md)*
    - Employer truy cập trang tài chính → Nhập số tiền → Kiểm tra điều kiện → Cộng tiền (transaction) → Ghi log
- [x] **AD-03b: Quy trình Mua gói VIP cho tin đăng** ✅ *(đã vẽ PlantUML — SequenceActivityDiagrams.md)*
    - Employer chọn gói VIP → Kiểm tra số dư ví → [Đủ] Trừ tiền + Cập nhật VIP / [Không đủ] Chuyển hướng nạp tiền

---

## 5. Sơ đồ Gói - Package Diagram (Mục 3.6.1)

- [x] **PD-01: Package Diagram kiến trúc tổng thể** ✅ *(đã vẽ PlantUML — PackageERDDiagrams.md)*
    - `app/` → Pages (Landing, Jobs, Companies, Candidate, Employer, Admin)
    - `app/actions/` → Server Actions (jobs, applications, billing, ai, cv, match...)
    - `app/api/` → API Routes (auth, admin, employer, ai, resume)
    - `app/components/` → UI Components
    - `lib/` → Utilities (prisma, utils)
    - `prisma/` → Database Schema

---

## 6. Sơ đồ ERD - Entity Relationship Diagram (Mục 3.6.2)

- [x] **ERD-01: Sơ đồ quan hệ thực thể (ERD) chính** ✅ *(đã vẽ PlantUML — PackageERDDiagrams.md)*
    - Tất cả 15 bảng với các khóa chính, khóa ngoại và kiểu quan hệ
    - Highlight các trường đặc biệt: `embedding (vector)`, `balance`, `matchScore`

---

## 7. Sơ đồ Kiến trúc hệ thống (bổ sung)

- [ ] **ARCH-01: Sơ đồ kiến trúc tổng thể hệ thống**
    - Client (Browser) → Next.js Server (SSR + Server Actions) → PostgreSQL + pgvector
    - Tích hợp bên ngoài: Google Gemini API

---

## Tổng kết

| Loại biểu đồ | Số lượng | Mục báo cáo |
|---|---|---|
| Use Case (tổng quát + phân rã) | 4 | 3.3 |
| Đặc tả Use Case (bảng) | 4 | 3.3.3 |
| Class Diagram | 4 | 3.4 |
| Sequence Diagram | 4 | 3.5.1 |
| Activity Diagram | 3 | 3.5.2 |
| Package Diagram | 1 | 3.6.1 |
| ERD | 1 | 3.6.2 |
| Kiến trúc hệ thống | 1 | 3.6 |
| **Tổng cộng** | **~22** | |
