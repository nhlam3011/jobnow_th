# Kế hoạch Thực hiện Báo cáo Khóa luận - Dự án JobNow

Danh sách các task cần thực hiện để hoàn thiện báo cáo dựa trên cấu trúc yêu cầu và thực tế dự án.

## Mở đầu
- [ ] Viết lời mở đầu, cảm ơn.

## C1. Tổng quan đề tài
- [ ] **1.1. Lý do chọn đề tài**: 
    - 1.1.1. Bối cảnh, thực trạng tìm kiếm việc làm hiện nay.
    - 1.1.2. Vai trò của website tuyển dụng tích hợp công nghệ.
    - 1.1.3. Động lực xây dựng website JobNow.
- [ ] **1.2. Mục tiêu nghiên cứu**: Xây dựng hệ thống tuyển dụng thông minh, tối ưu hóa quá trình khớp lệnh việc làm.
- [ ] **1.3. Đối tượng nghiên cứu**: Quy trình tuyển dụng, các thuật toán Matching AI, công nghệ Next.js & PostgreSQL.
- [ ] **1.4. Phương pháp**: Nghiên cứu lý thuyết, thực nghiệm xây dựng hệ thống.
- [ ] **1.5. Kết quả**: Hệ thống JobNow hoàn chỉnh với đầy đủ tính năng cho 3 đối tượng người dùng.
- [ ] **1.6. Ý nghĩa thực tiễn, khoa học**: Ứng dụng AI vào thực tiễn, giúp ứng viên và nhà tuyển dụng tiết kiệm thời gian.

## C2. Cơ sở lý thuyết

### 2.1. Tổng quan, nhu cầu bài toán
- [x] **2.1.1. Bối cảnh thị trường tuyển dụng trực tuyến**: Phân tích sự chuyển dịch sang môi trường số.
- [x] **2.1.2. Thực trạng và thách thức**: Khó khăn của ứng viên, nhà tuyển dụng và nhà quản lý.
- [x] **2.1.3. Nhu cầu hệ thống thông minh**: Yêu cầu về AI matching, tự động hóa hồ sơ và quản lý tài chính.

### 2.2. Phương pháp hệ thống (Hướng đối tượng & UML)
- [x] **2.2.1. Tổng quan về phân tích thiết kế hướng đối tượng (OOAD)**.
- [x] **2.2.2. Ngôn ngữ mô hình hóa thống nhất (UML)**: Vai trò của các sơ đồ trong dự án.
- [x] **2.2.3. Áp dụng UML vào hệ thống JobNow**: Các nguyên tắc đóng gói và quản lý logic.

### 2.3. Technology stack
- [x] **2.3.1. Framework Next.js 15**: Lợi ích của App Router, SSR và hiệu năng.
- [x] **2.3.2. Prisma ORM & PostgreSQL**: Quản lý cơ sở dữ liệu và Type-safety.
- [x] **2.3.3. Giao diện & Styling**: Sử dụng Vanilla CSS/Tailwind cho thiết kế hiện đại.
- [x] **2.3.4. Thư viện bổ trợ**: Auth.js, Zod, html2pdf, React Quill.

### 2.4. Ngôn ngữ AI (LLM) và tích hợp vào website
- [x] **2.4.1. Google Gemini API**: Cơ chế hoạt động của mô hình ngôn ngữ lớn.
- [x] **2.4.2. Kỹ thuật Vector Embedding**: Chuyển đổi dữ liệu văn bản sang không gian vector.
- [x] **2.4.3. Tìm kiếm tương đồng với pgvector**: Thuật toán tính toán Match Score.

### 2.5. Các nghiên cứu liên quan và ứng dụng vào website
- [x] **2.5.1. Phân tích các nền tảng phổ biến (TopCV, LinkedIn)**.
- [x] **2.5.2. Các tính năng đặc thù của JobNow**: Ví điện tử, Smart AI Matching.

### 2.6. Đánh giá và kết luận chương 2
- [x] **2.6.1. Tổng kết các nền tảng lý thuyết đã chọn**.
- [x] **2.6.2. Đánh giá khả năng ứng dụng thực tế vào dự án**.

## C3. Phân tích hệ thống
- [x] **3.1. Hiện trạng và khảo sát thực tế**: Khảo sát các website tuyển dụng thực tế.
- [x] **3.2. Phân tích các yêu cầu**:
    - [x] 3.2.1. Yêu cầu chức năng (Đăng tin, Ứng tuyển, Build CV, Nạp tiền...).
    - [x] 3.2.2. Yêu cầu phi chức năng (Bảo mật, Hiệu năng, Giao diện).
- [x] **3.3. Mô hình hoá chức năng**: 
    - [x] 3.3.1. Use case tổng quát *(UC-00 — UseCaseDiagrams.md)*.
    - [x] 3.3.2. Use case phân rã *(UC-01, UC-02, UC-03 — UseCaseDiagrams.md)*.
    - [x] 3.3.3. Đặc tả use case *(4 bảng đặc tả — Chuong3.md)*.
- [x] **3.4. Cấu trúc hệ thống**:
    - [x] 3.4.1. Sơ đồ class tổng thể *(CD-01 — ClassDiagrams.md)*.
    - [x] 3.4.2. Sơ đồ class phân rã *(CD-02, CD-03, CD-04 — ClassDiagrams.md)*.
- [x] **3.5. Mô hình hoá hành vi**:
    - [x] 3.5.1. Sơ đồ tuần tự (Sequence Diagram) *(SD-01→SD-04 — SequenceActivityDiagrams.md)*.
    - [x] 3.5.2. Sơ đồ hoạt động (Activity Diagram) *(AD-01→AD-03b — SequenceActivityDiagrams.md)*.
- [x] **3.6. Kiến trúc hệ thống**:
    - [x] 3.6.1. Sơ đồ gói (Package Diagram) *(PD-01 — PackageERDDiagrams.md)*.
    - [x] 3.6.2. Sơ đồ bảng (ERD rút gọn) *(ERD-01 — PackageERDDiagrams.md)*.
- [x] **3.7. Cơ sở dữ liệu**: Mô tả chi tiết các bảng trong database.

## C4. Kết quả dự án
- [x] **4.1. Giao diện, hệ thống**: Chụp ảnh và mô tả các module thực tế.
- [x] **Hướng phát triển đề tài**.
- [x] **Kết luận**.
- [x] **Tài liệu tham khảo**.
