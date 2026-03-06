# jobnow_th

# 📄 TÀI LIỆU ĐẶC TẢ CHỨC NĂNG HỆ THỐNG JOBNOW

**Dự án:** Website Tìm kiếm và Tư vấn việc làm thông minh (JobNow)  
**Đối tượng:** Khóa luận tốt nghiệp ngành Công nghệ thông tin  
**Tech Stack:** Next.js 15, Supabase (PostgreSQL), Prisma, pgvector, OpenAI Embedding.

---

## 📑 1. TỔNG QUAN HỆ THỐNG
Hệ thống JobNow không chỉ là một sàn giao dịch việc làm thông thường (CRUD), mà tập trung vào bài toán **Matching (Gợi ý phù hợp)** dựa trên công nghệ **Vector Semantic Search**. Hệ thống giúp kết nối ứng viên và nhà tuyển dụng thông qua độ tương đồng về kỹ năng và kinh nghiệm (ngữ nghĩa), thay vì chỉ khớp từ khóa đơn thuần.

---

## 🛠 2. KIẾN TRÚC CÔNG NGHỆ (TECH STACK)
| Thành phần | Công nghệ đề xuất | Lý do lựa chọn |
| :--- | :--- | :--- |
| **Frontend** | Next.js 15 (App Router) | Tối ưu SEO tin tuyển dụng, hiệu năng cao với SSR/ISR. |
| **Backend** | Next.js Server Actions | Bảo mật, giảm thiểu độ trễ API, Type-safe với TypeScript. |
| **Database** | PostgreSQL (Supabase) | Cơ sở dữ liệu quan hệ mạnh mẽ, hỗ trợ mở rộng tốt. |
| **AI Engine** | **pgvector** + OpenAI | Xử lý tìm kiếm vector và tư vấn việc làm thông minh. |
| **ORM** | Prisma | Quản lý Schema chặt chẽ, hỗ trợ Migration chuyên nghiệp. |
| **Storage** | Supabase Storage | Lưu trữ CV (PDF) và hình ảnh doanh nghiệp. |

---

## 🎯 3. DANH SÁCH CHỨC NĂNG CHI TIẾT

### 👤 3.1. Phân hệ Ứng viên (Candidate)
* **Quản lý Tài khoản:** Đăng ký/Đăng nhập (Google/LinkedIn), cập nhật Profile chuyên sâu.
* **Quản lý CV (Resume Management):** * Tải lên CV bản cứng (PDF/Word).
    * Hệ thống tự động trích xuất thông tin sơ bộ từ CV.
* **Tìm kiếm Thông minh (Semantic Search):** Tìm kiếm việc làm theo ý nghĩa (ví dụ: tìm "làm giao diện" sẽ ra cả các job "Frontend Developer").
* **Hệ thống Tư vấn (Job Recommendation):** * Gợi ý "Công việc phù hợp nhất" dựa trên điểm số tương đồng Vector giữa CV và JD.
* **Ứng tuyển & Theo dõi:** Nộp hồ sơ, quản lý trạng thái (Đang chờ, Phỏng vấn, Từ chối).
* **Thông báo Realtime:** Nhận thông báo tức thời khi trạng thái hồ sơ thay đổi hoặc có Job mới phù hợp.

### 🏢 3.2. Phân hệ Nhà tuyển dụng (Employer)
* **Quản lý Tin tuyển dụng (Job Posting):** Đăng tin với trình soạn thảo chuyên nghiệp, đặt tiêu chí lọc ứng viên.
* **Quản lý Ứng viên (ATS):** * Hệ thống xếp hạng ứng viên theo mức độ phù hợp (Ranking).
    * Xem chi tiết CV và thay đổi trạng thái ứng tuyển.
* **Gợi ý Ứng viên (Candidate Recommendation):** Chủ động tìm kiếm các CV có trong hệ thống khớp với yêu cầu công việc vừa đăng.
* **Trang Thương hiệu:** Xây dựng Profile công ty để thu hút nhân tài.

### 🛡️ 3.3. Phân hệ Quản trị viên (Admin)
* **Kiểm duyệt (Moderation):** Phê duyệt tin tuyển dụng và xác thực tài khoản doanh nghiệp.
* **Quản lý Danh mục:** Cập nhật bộ từ điển kỹ năng, ngành nghề, vị trí địa lý.
* **Báo cáo & Thống kê (Dashboard):** * Thống kê thị trường: Kỹ năng nào đang được tìm kiếm nhiều nhất?
    * Báo cáo tăng trưởng người dùng và tỷ lệ kết nối thành công.

---

## 🧠 4. QUY TRÌNH XỬ LÝ AI MATCHING (ĐIỂM NHẤN KLTN)
Hệ thống áp dụng mô hình toán học để giải quyết bài toán tư vấn:

1.  **Chuyển đổi dữ liệu:** Sử dụng `text-embedding-3-small` để chuyển văn bản (CV/JD) thành Vector 1536 chiều.
2.  **Lưu trữ:** Lưu vào cột `embedding` kiểu dữ liệu `vector` trong PostgreSQL.
3.  **So sánh:** Sử dụng toán tử `<=>` (Cosine Distance) để tính độ lệch giữa hai Vector.



---

## 🚀 5. KẾ HOẠCH TRIỂN KHAI (MILESTONES)
- **Giai đoạn 1:** Phân tích yêu cầu, thiết kế Database Schema (ERD).
- **Giai đoạn 2:** Xây dựng Core Web (Auth, CRUD Jobs, CRUD CV).
- **Giai đoạn 3:** Tích hợp AI (Vector Search, Recommendation Engine).
- **Giai đoạn 4:** Hoàn thiện UI/UX, tối ưu SEO và viết báo cáo khóa luận.