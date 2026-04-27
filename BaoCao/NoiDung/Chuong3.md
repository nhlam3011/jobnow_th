<!-- CHECKLIST TIẾN ĐỘ CHƯƠNG 3 -->
<!-- Cập nhật lần cuối: 2026-04-25 -->

> **📋 CHECKLIST TIẾN ĐỘ CHƯƠNG 3**
>
> - [x] **3.1. Hiện trạng và khảo sát thực tế** ✅
>   - [x] 3.1.1. Hiện trạng các hệ thống tuyển dụng hiện nay ✅
>   - [x] 3.1.2. Khảo sát nhu cầu người dùng ✅
> - [x] **3.2. Phân tích các yêu cầu** ✅
>   - [x] 3.2.1. Yêu cầu chức năng ✅
>   - [x] 3.2.2. Yêu cầu phi chức năng ✅
> - [x] **3.3. Mô hình hoá chức năng** ✅
>   - [x] 3.3.1. Sơ đồ Use Case tổng quát *(UC-00 — UseCaseDiagrams.md)* ✅
>   - [x] 3.3.2. Sơ đồ Use Case phân rã *(UC-01, UC-02, UC-03 — UseCaseDiagrams.md)* ✅
>   - [x] 3.3.3. Đặc tả Use Case (4 bảng: Ứng tuyển, Đăng tin, Nạp tiền & VIP, CV Builder) ✅
> - [x] **3.4. Cấu trúc hệ thống (Sơ đồ Class)** ✅
>   - [x] 3.4.1. Sơ đồ Class tổng thể CD-01 *(ClassDiagrams.md)* ✅
>   - [x] 3.4.2. Sơ đồ Class phân rã CD-02, CD-03, CD-04 *(ClassDiagrams.md)* ✅
> - [x] **3.5. Mô hình hoá hành vi** ✅
>   - [x] 3.5.1. Sơ đồ tuần tự (Sequence Diagram) — SD-01, SD-02a, SD-02b, SD-03, SD-04 *(SequenceActivityDiagrams.md)* ✅
>   - [x] 3.5.2. Sơ đồ hoạt động (Activity Diagram) — AD-01, AD-02, AD-03a, AD-03b *(SequenceActivityDiagrams.md)* ✅
> - [x] **3.6. Kiến trúc hệ thống** ✅
>   - [x] 3.6.1. Sơ đồ gói (Package Diagram) — PD-01 *(PackageERDDiagrams.md)* ✅
>   - [x] 3.6.2. Sơ đồ quan hệ thực thể (ERD) — ERD-01 *(PackageERDDiagrams.md)* ✅
> - [x] **3.7. Cơ sở dữ liệu** ✅
>   - [x] Mô tả chi tiết các bảng trong database ✅

---

# CHƯƠNG 3: PHÂN TÍCH HỆ THỐNG

## 3.1. Hiện trạng và khảo sát thực tế

### 3.1.1. Hiện trạng các hệ thống tuyển dụng hiện nay
Qua khảo sát thực tế các nền tảng tuyển dụng phổ biến tại Việt Nam và trên thế giới, có thể rút ra một số nhận định về hiện trạng như sau:
- **Ưu điểm**:
    - Hệ thống dữ liệu người dùng lớn, đa dạng ngành nghề.
    - Quy trình đăng ký và đăng tin đã được chuẩn hóa, dễ tiếp cận.
    - Hỗ trợ tốt các bộ lọc cơ bản (địa điểm, mức lương, kinh nghiệm).
- **Nhược điểm**:
    - **Sự khớp lệch (Mismatch)**: Ứng viên vẫn nhận được nhiều gợi ý việc làm không liên quan do hệ thống chỉ lọc theo từ khóa cứng nhắc.
    - **Sàng lọc thủ công**: Nhà tuyển dụng mất quá nhiều thời gian để duyệt CV vì thiếu công cụ xếp hạng ứng viên tự động dựa trên năng lực thực tế.
    - **Tính tương tác thấp**: Quá trình từ lúc nộp hồ sơ đến lúc nhận phản hồi thường kéo dài và thiếu minh bạch về trạng thái hồ sơ.

### 3.1.2. Khảo sát nhu cầu người dùng
Dựa trên các nhược điểm nêu trên, một cuộc khảo sát sơ bộ đã được thực hiện để xác định mong muốn của các nhóm đối tượng:
1. **Đối với ứng viên**: Mong muốn có công cụ đánh giá ngay độ phù hợp với công việc trước khi nộp hồ sơ, đồng thời được hỗ trợ tạo CV và thư xin việc một cách chuyên nghiệp nhất.
2. **Đối với doanh nghiệp**: Cần một hệ thống quản lý tin đăng linh hoạt, có thể chủ động đẩy tin (VIP) để thu hút nhân tài và đặc biệt là công cụ AI xếp hạng ứng viên để giảm tải cho bộ phận HR.
3. **Đối với nhà quản trị**: Cần một hệ thống quản lý tập trung, minh bạch về tài chính và các giao dịch của doanh nghiệp trên nền tảng.

Kết quả khảo sát khẳng định việc xây dựng hệ thống **JobNow** với các tính năng đột phá về AI và hệ thống ví điện tử là hướng đi đúng đắn và có tiềm năng ứng dụng cao.

## 3.2. Phân tích các yêu cầu

### 3.2.1. Yêu cầu chức năng
Dựa trên mục tiêu đề tài, hệ thống JobNow cần đáp ứng các nhóm chức năng chính sau cho từng đối tượng người dùng:

**A. Nhóm chức năng dành cho Ứng viên (Candidate)**
- **Quản lý hồ sơ**: Đăng ký/đăng nhập, cập nhật thông tin cá nhân, kinh nghiệm làm việc và kỹ năng.
- **Xây dựng CV (CV Builder)**: Công cụ trực tuyến cho phép tạo CV chuyên nghiệp từ các mẫu có sẵn và xuất file PDF.
- **Tìm kiếm & Gợi ý**: Tìm kiếm việc làm theo nhiều tiêu chí. Hệ thống tự động gợi ý việc làm dựa trên Match Score.
- **Ứng tuyển & Theo dõi**: Nộp hồ sơ ứng tuyển, tự động tạo Cover Letter bằng AI và theo dõi trạng thái hồ sơ (Pending, Reviewing, Accepted...).

**B. Nhóm chức năng dành cho Nhà tuyển dụng (Employer)**
- **Quản lý Doanh nghiệp**: Cập nhật thông tin công ty, logo, quy mô và lĩnh vực hoạt động.
- **Đăng tin & Nâng cấp VIP**: Đăng tin tuyển dụng mới. Sử dụng số dư ví để nâng cấp tin lên trạng thái VIP nhằm tăng lượt hiển thị.
- **Quản lý ứng viên**: Xem danh sách người nộp đơn, xem điểm Match Score do AI tính toán và thay đổi trạng thái hồ sơ.
- **Quản lý tài chính (Wallet)**: Nạp tiền vào ví hệ thống và theo dõi lịch sử giao dịch.

**C. Nhóm chức năng dành cho Quản trị viên (Admin)**
- **Kiểm duyệt nội dung**: Phê duyệt tin tuyển dụng, xác thực thông ty và quản lý bài viết Blog.
- **Thống kê & Báo cáo**: Theo dõi biểu đồ doanh thu, số lượng người dùng và số lượng tin đăng.
- **Cấu trúc hệ thống**: Quản lý các mẫu CV, ngành nghề và các gói dịch vụ VIP.

### 3.2.2. Yêu cầu phi chức năng
Để hệ thống vận hành hiệu quả và bền vững, các yêu cầu phi chức năng sau cần được đảm bảo:
- **Tính bảo mật**: Mã hóa mật khẩu người dùng, bảo vệ các giao dịch tài chính và quyền riêng tư của hồ sơ ứng viên.
- **Tính sẵn sàng & Hiệu năng**: Hệ thống phải phản hồi nhanh (dưới 2 giây cho các tác vụ thông thường) và xử lý tốt khi có nhiều người truy cập cùng lúc.
- **Tính chính xác (AI Matching)**: Kết quả tính toán Match Score phải dựa trên thuật toán ngữ nghĩa chính xác để đảm bảo niềm tin của người dùng.
- **Tính khả dụng (UX/UI)**: Giao diện trực quan, dễ sử dụng, tương thích tốt trên các thiết bị di động (Responsive).
- **Tính mở rộng**: Kiến trúc hệ thống dễ dàng tích hợp thêm các tính năng mới mà không làm ảnh hưởng đến cấu trúc hiện tại.

## 3.3. Mô hình hoá chức năng

*(Phần sơ đồ Use Case tổng quát và phân rã được trình bày tại file UseCaseDiagrams.md)*

### 3.3.1. Sơ đồ Use Case tổng quát

*(Xem UC-00 tại UseCaseDiagrams.md)*

### 3.3.2. Sơ đồ Use Case phân rã

*(Xem UC-01, UC-02, UC-03 tại UseCaseDiagrams.md)*

### 3.3.3. Đặc tả Use Case

Phần này mô tả chi tiết luồng nghiệp vụ của bốn use case cốt lõi nhất trong hệ thống JobNow, bao gồm: Ứng tuyển việc làm, Đăng tin tuyển dụng, Nạp tiền và Mua gói VIP, Tạo CV bằng CV Builder.

---

#### Đặc tả UC: Ứng tuyển việc làm

| Mục | Nội dung |
|---|---|
| **Mã Use Case** | UC-APPLY |
| **Tên Use Case** | Ứng tuyển việc làm |
| **Tác nhân** | Ứng viên (Candidate) |
| **Mô tả** | Ứng viên chọn một công việc phù hợp, chọn CV/Resume để nộp, có thể sử dụng AI tạo thư xin việc (Cover Letter), sau đó gửi hồ sơ ứng tuyển. |
| **Tiền điều kiện** | 1. Ứng viên đã đăng nhập với vai trò CANDIDATE. <br> 2. Tin tuyển dụng có trạng thái ACTIVE. <br> 3. Ứng viên chưa ứng tuyển vào vị trí này trước đó. |
| **Luồng chính** | 1. Ứng viên truy cập trang chi tiết công việc (`/jobs/[slug]`). <br> 2. Hệ thống hiển thị thông tin công việc: tiêu đề, mô tả, yêu cầu, phúc lợi, mức lương, công ty. <br> 3. Ứng viên nhấn nút **"Ứng tuyển ngay"**. <br> 4. Hệ thống mở form ứng tuyển, hiển thị danh sách CV và Resume có sẵn của ứng viên. <br> 5. Ứng viên chọn một CV (từ CV Builder) hoặc một Resume (file PDF đã upload). <br> 6. *(Tuỳ chọn)* Ứng viên nhấn **"AI tạo Cover Letter"**: <br> &nbsp;&nbsp;6a. Hệ thống gọi `generateCoverLetter(jobId)`. <br> &nbsp;&nbsp;6b. Google Gemini API nhận thông tin ứng viên (tên, kỹ năng, kinh nghiệm) + thông tin công việc (tiêu đề, mô tả, yêu cầu) và tạo thư xin việc 300-400 từ. <br> &nbsp;&nbsp;6c. Hệ thống hiển thị Cover Letter để ứng viên xem trước và chỉnh sửa. <br> 7. Ứng viên nhấn **"Gửi hồ sơ"**. <br> 8. Hệ thống gọi `applyToJob(jobId, cvId, resumeId, coverLetter)`. <br> 9. Hệ thống kiểm tra ứng viên chưa ứng tuyển vào vị trí này (ràng buộc unique: `jobId_candidateId`). <br> 10. Hệ thống tạo bản ghi `Application` với trạng thái `PENDING`. <br> 11. Hệ thống tạo `Notification` cho Nhà tuyển dụng: *"[Tên ứng viên] vừa ứng tuyển vào [Tên công việc]"*. <br> 12. Hệ thống thông báo thành công và cập nhật trang danh sách ứng tuyển. |
| **Luồng thay thế** | **6-ALT**: Ứng viên không sử dụng AI mà tự viết Cover Letter hoặc bỏ qua phần này. <br> **5-ALT**: Ứng viên chưa có CV/Resume → Hệ thống gợi ý chuyển đến trang CV Builder hoặc Upload Resume. |
| **Ngoại lệ** | **E1**: Ứng viên chưa đăng nhập → Hệ thống hiển thị thông báo *"Bạn cần đăng nhập với tư cách Ứng viên"*. <br> **E2**: Ứng viên đã ứng tuyển trước đó → Hệ thống thông báo *"Bạn đã ứng tuyển vị trí này rồi"*. <br> **E3**: Lỗi kết nối Gemini API khi tạo Cover Letter → Thông báo *"Tạo thư xin việc thất bại. Vui lòng thử lại"*. |
| **Hậu điều kiện** | 1. Bản ghi `Application` mới được tạo trong CSDL với status = PENDING. <br> 2. Nhà tuyển dụng nhận được thông báo trong hệ thống. <br> 3. Ứng viên có thể theo dõi trạng thái hồ sơ (PENDING → REVIEWING → INTERVIEW → ACCEPTED/REJECTED). |

---

#### Đặc tả UC: Đăng tin tuyển dụng

| Mục | Nội dung |
|---|---|
| **Mã Use Case** | UC-POST-JOB |
| **Tên Use Case** | Đăng tin tuyển dụng |
| **Tác nhân** | Nhà tuyển dụng (Employer) |
| **Mô tả** | Nhà tuyển dụng tạo một tin tuyển dụng mới với đầy đủ thông tin công việc. Tin sau khi đăng sẽ ở trạng thái chờ duyệt, Admin kiểm duyệt và phê duyệt trước khi hiển thị công khai. |
| **Tiền điều kiện** | 1. Nhà tuyển dụng đã đăng nhập với vai trò EMPLOYER. <br> 2. Nhà tuyển dụng đã tạo và liên kết thông tin Công ty (có `companyId` hợp lệ). |
| **Luồng chính** | 1. Nhà tuyển dụng truy cập trang **"Đăng tin mới"** (`/employer/jobs/new`). <br> 2. Hệ thống hiển thị form đăng tin với các trường: <br> &nbsp;&nbsp;- Tiêu đề công việc (`title`) <br> &nbsp;&nbsp;- Mô tả chi tiết (`description` - Rich Text Editor) <br> &nbsp;&nbsp;- Yêu cầu ứng viên (`requirements`) <br> &nbsp;&nbsp;- Phúc lợi (`benefits`) <br> &nbsp;&nbsp;- Tỉnh/Thành phố (`province`) <br> &nbsp;&nbsp;- Loại hình công việc (`jobType`: Full-time, Part-time, Remote, Internship, Contract) <br> &nbsp;&nbsp;- Mức lương tối thiểu/tối đa (`salaryMin`, `salaryMax`) <br> &nbsp;&nbsp;- Kỹ năng yêu cầu (`skills` - nhập nhiều giá trị, phân tách bằng dấu phẩy) <br> &nbsp;&nbsp;- Ngành nghề (`industryId` - dropdown) <br> &nbsp;&nbsp;- Độ tuổi (`ageMin`, `ageMax`) và Kinh nghiệm (`experienceYears`) <br> 3. Nhà tuyển dụng điền đầy đủ thông tin và nhấn **"Đăng tin"**. <br> 4. Hệ thống gọi `createJob(formData)`. <br> 5. Hệ thống xác minh Employer đã có `companyId`. <br> 6. Hệ thống tự động tạo `slug` từ tiêu đề (format: `tieu-de-viec-lam-timestamp`). <br> 7. Hệ thống lưu bản ghi `Job` vào CSDL với trạng thái mặc định `PENDING`. <br> 8. Hệ thống gọi `generateJobEmbedding(jobId)` để tạo vector embedding cho tin tuyển dụng (phục vụ AI Smart Matching). <br> 9. Hệ thống chuyển hướng về trang quản lý tin đăng (`/employer/jobs`). <br> 10. *[Admin]* Admin truy cập trang kiểm duyệt, xem tin và nhấn **"Duyệt"** (ACTIVE) hoặc **"Từ chối"** (REJECTED). <br> 11. Hệ thống gọi `updateJobStatus(jobId, status)` và tạo `Notification` cho Employer: *"Tin [tên tin] đã được duyệt/bị từ chối bởi quản trị viên"*. <br> 12. Nếu được duyệt (ACTIVE), hệ thống tái tạo embedding và tin hiển thị công khai. |
| **Luồng thay thế** | **3-ALT**: Nhà tuyển dụng lưu nháp để chỉnh sửa sau. <br> **10-ALT**: Admin từ chối tin → Employer nhận thông báo, có thể chỉnh sửa và gửi lại. |
| **Ngoại lệ** | **E1**: Employer chưa có công ty → Hiển thị *"Bạn chưa có thông tin công ty. Vui lòng cập nhật trang Công ty trước"*. <br> **E2**: Lỗi tạo embedding → Hệ thống ghi log lỗi nhưng tin vẫn được tạo thành công (embedding không bắt buộc). |
| **Hậu điều kiện** | 1. Bản ghi `Job` mới được tạo trong CSDL. <br> 2. Vector embedding được tạo cho tin (nếu thành công). <br> 3. Tin hiển thị trạng thái PENDING cho đến khi Admin duyệt. <br> 4. Sau khi duyệt ACTIVE, tin xuất hiện trên trang tìm kiếm công khai. Tin VIP luôn hiển thị trên đầu (`orderBy: isVip desc`). |

---

#### Đặc tả UC: Nạp tiền & Mua gói VIP

| Mục | Nội dung |
|---|---|
| **Mã Use Case** | UC-BILLING |
| **Tên Use Case** | Nạp tiền vào ví & Mua gói VIP cho tin đăng |
| **Tác nhân** | Nhà tuyển dụng (Employer) |
| **Mô tả** | Nhà tuyển dụng nạp tiền vào ví điện tử của công ty, sau đó sử dụng số dư để mua gói VIP nhằm nâng cấp tin tuyển dụng lên trạng thái VIP (hiển thị ưu tiên). |
| **Tiền điều kiện** | 1. Nhà tuyển dụng đã đăng nhập với vai trò EMPLOYER. <br> 2. Nhà tuyển dụng đã liên kết với một Công ty. <br> 3. *(Đối với Mua VIP)* Công ty đã có số dư ví đủ để thanh toán gói VIP. |
| **Luồng chính — Phần A: Nạp tiền** | 1. Nhà tuyển dụng truy cập trang **"Quản lý tài chính"** (`/employer/billing`). <br> 2. Hệ thống hiển thị: số dư ví hiện tại, tổng tiền đã nạp, tổng tiền đã chi, lịch sử giao dịch. <br> 3. Nhà tuyển dụng nhập số tiền cần nạp và nhấn **"Nạp tiền"**. <br> 4. Hệ thống gọi `depositMoney(amount)`. <br> 5. Hệ thống thực hiện **database transaction**: <br> &nbsp;&nbsp;5a. Cập nhật `company.balance += amount`. <br> &nbsp;&nbsp;5b. Tạo bản ghi `Transaction` loại `DEPOSIT` với `balanceAfter`. <br> 6. Hệ thống cập nhật giao diện với số dư mới. |
| **Luồng chính — Phần B: Mua gói VIP** | 1. Nhà tuyển dụng truy cập trang quản lý tin đăng, chọn một tin muốn nâng cấp VIP. <br> 2. Hệ thống hiển thị danh sách các gói VIP đang hoạt động (`isActive = true`), sắp xếp theo số ngày tăng dần. <br> 3. Nhà tuyển dụng chọn gói VIP mong muốn và nhấn **"Mua gói"**. <br> 4. Hệ thống gọi `upgradeJobToVip(jobId, packageId)`. <br> 5. Hệ thống thực hiện **database transaction**: <br> &nbsp;&nbsp;5a. Kiểm tra công ty tồn tại và tin thuộc công ty. <br> &nbsp;&nbsp;5b. Kiểm tra `company.balance >= package.price`. <br> &nbsp;&nbsp;5c. Trừ tiền: `company.balance -= price`. <br> &nbsp;&nbsp;5d. Cập nhật tin: `job.isVip = true`, `job.vipUntil = now + package.days ngày`. <br> &nbsp;&nbsp;5e. Tạo bản ghi `Transaction` loại `DEDUCTION` với mô tả *"Thanh toán [Tên gói] - [Tên tin]"*. <br> 6. Hệ thống hiển thị thông báo thành công. Tin đăng có badge VIP và hiển thị ưu tiên. |
| **Luồng thay thế** | **B5b-ALT**: Số dư không đủ → Hệ thống thông báo *"Số dư không đủ. Vui lòng nạp thêm tiền"* → Chuyển về luồng Nạp tiền (Phần A). |
| **Ngoại lệ** | **E1**: Employer chưa có công ty → *"Chưa có cấu hình công ty"*. <br> **E2**: Số tiền nạp ≤ 0 → *"Số tiền không hợp lệ"*. <br> **E3**: Gói VIP không tồn tại hoặc đã bị khóa → *"Gói VIP không tồn tại hoặc đã bị khóa"*. <br> **E4**: Lỗi database transaction → Toàn bộ thao tác rollback, không có dữ liệu bị thay đổi. |
| **Hậu điều kiện** | 1. *(Nạp tiền)* Số dư công ty tăng; bản ghi `Transaction` DEPOSIT được tạo. <br> 2. *(Mua VIP)* Số dư giảm; tin đăng có `isVip = true` và `vipUntil` được cập nhật; bản ghi `Transaction` DEDUCTION được tạo. <br> 3. Tin VIP tự động hết hạn khi hệ thống phát hiện `vipUntil < now()` (lazy expiration tại `getJobs()`). |
| **Quy tắc nghiệp vụ** | - Mọi thao tác tài chính đều sử dụng `prisma.$transaction()` để đảm bảo tính toàn vẹn dữ liệu (ACID). <br> - VIP hết hạn được xử lý theo cơ chế **lazy expiration**: mỗi khi gọi `getJobs()`, hệ thống tự động cập nhật `isVip = false` cho các tin có `vipUntil < now()`. |

---

#### Đặc tả UC: Tạo CV bằng CV Builder

| Mục | Nội dung |
|---|---|
| **Mã Use Case** | UC-CV-BUILDER |
| **Tên Use Case** | Tạo CV trực tuyến bằng CV Builder |
| **Tác nhân** | Ứng viên (Candidate) |
| **Mô tả** | Ứng viên sử dụng công cụ CV Builder tích hợp trong hệ thống để tạo CV chuyên nghiệp từ các mẫu (Template) có sẵn do Admin quản lý, sau đó lưu lại và có thể xuất ra file PDF. |
| **Tiền điều kiện** | 1. Ứng viên đã đăng nhập. <br> 2. Hệ thống có ít nhất một mẫu CV đang hoạt động (`isActive = true`). |
| **Luồng chính** | 1. Ứng viên truy cập trang **"CV Builder"** (`/candidate/cv-builder`). <br> 2. Hệ thống gọi `getCVTemplates()` để lấy danh sách mẫu CV đang hoạt động. <br> 3. Hệ thống hiển thị danh sách mẫu CV với: tên mẫu, phân loại (category), ảnh minh họa (thumbnail). <br> 4. Ứng viên chọn một mẫu CV. <br> 5. Hệ thống hiển thị giao diện chỉnh sửa CV theo layout và style của mẫu đã chọn (`layoutConfig`, `styleConfig`). <br> 6. Ứng viên nhập nội dung CV: <br> &nbsp;&nbsp;- Thông tin cá nhân (họ tên, email, số điện thoại, địa chỉ) <br> &nbsp;&nbsp;- Mục tiêu nghề nghiệp <br> &nbsp;&nbsp;- Kinh nghiệm làm việc <br> &nbsp;&nbsp;- Học vấn <br> &nbsp;&nbsp;- Kỹ năng <br> &nbsp;&nbsp;- Chứng chỉ, dự án, sở thích... <br> 7. Hệ thống hiển thị **preview trực tiếp** (real-time) CV đang được tạo. <br> 8. Ứng viên nhập tiêu đề cho CV (ví dụ: *"CV Lập trình viên Frontend"*) và nhấn **"Lưu"**. <br> 9. Hệ thống gọi `saveUserCV({ templateId, title, content })`. <br> 10. Hệ thống tạo bản ghi `CV` trong CSDL, liên kết với `userId` và `templateId`. <br> 11. Hệ thống thông báo thành công. |
| **Luồng thay thế** | **8-ALT (Chỉnh sửa CV)**: Nếu ứng viên mở một CV đã có, hệ thống gọi `saveUserCV({ ..., cvId })` với tham số `cvId` → cập nhật thay vì tạo mới. <br> **11-ALT (Xuất PDF)**: Ứng viên nhấn **"Xuất PDF"** → Hệ thống sử dụng thư viện `html2pdf.js` để render CV thành file PDF và tải về máy. <br> **XOÁ**: Ứng viên nhấn **"Xóa CV"** → Hệ thống gọi `deleteUserCV(cvId)` → Xóa bản ghi CV. |
| **Ngoại lệ** | **E1**: Chưa đăng nhập → Thông báo *"Vui lòng đăng nhập"*. <br> **E2**: Lưu CV thất bại (lỗi database) → Thông báo *"Lưu CV thất bại"*. <br> **E3**: Không có mẫu CV nào khả dụng → Hiển thị thông báo trống. |
| **Hậu điều kiện** | 1. Bản ghi `CV` được tạo/cập nhật trong CSDL với `content` (JSON chứa toàn bộ nội dung). <br> 2. CV xuất hiện trong danh sách CV của ứng viên và có thể được chọn khi ứng tuyển. <br> 3. *(Nếu xuất PDF)* File PDF được tải về thiết bị của ứng viên. |

## 3.4. Cấu trúc hệ thống (Sơ đồ Class)

Sơ đồ Class thể hiện cấu trúc tĩnh của hệ thống JobNow, mô tả các lớp đối tượng (entity), thuộc tính, và mối quan hệ giữa chúng. Toàn bộ thiết kế được xây dựng dựa trên lược đồ Prisma ORM (`prisma/schema.prisma`), phản ánh chính xác cấu trúc cơ sở dữ liệu PostgreSQL của hệ thống.

### 3.4.1. Sơ đồ Class tổng thể (CD-01)

*(Xem mã PlantUML tại ClassDiagrams.md — CD-01)*

Sơ đồ Class tổng thể bao gồm **16 lớp thực thể chính** và **5 kiểu liệt kê (enum)**, thể hiện toàn bộ cấu trúc dữ liệu của hệ thống:

**Các lớp thực thể:**
- **User**: Lớp trung tâm đại diện cho tất cả người dùng (Ứng viên, Nhà tuyển dụng, Quản trị viên), phân biệt bởi thuộc tính `role` kiểu `UserRole`.
- **CandidateProfile**: Hồ sơ chi tiết của ứng viên, quan hệ 1-1 với `User`. Lưu trữ kỹ năng (`skills`), kinh nghiệm (`experience` - JSON), học vấn (`education` - JSON) và vector embedding cho AI Matching.
- **EmployerProfile**: Hồ sơ nhà tuyển dụng, quan hệ 1-1 với `User` và N-1 với `Company`.
- **Company**: Thông tin doanh nghiệp, bao gồm thuộc tính `balance` (số dư ví điện tử) và `verified` (trạng thái xác thực).
- **Job**: Tin tuyển dụng, thuộc về một `Company`, có thể thuộc một `Industry`. Chứa vector `embedding` phục vụ tìm kiếm ngữ nghĩa.
- **Application**: Hồ sơ ứng tuyển, kết nối `User` (ứng viên) với `Job`. Lưu `matchScore` (điểm AI matching) và `coverLetter`.
- **Resume**: File CV dạng PDF do ứng viên upload. **CV**: CV trực tuyến do ứng viên tạo bằng CV Builder.
- **Template**: Mẫu CV do Admin quản lý, chứa `layoutConfig` và `styleConfig` dưới dạng JSON.
- **Transaction**: Ghi nhận mọi giao dịch tài chính (nạp tiền, thanh toán VIP) của Company.
- **VipPackage**: Các gói dịch vụ VIP với giá và thời hạn khác nhau.
- **Notification**, **Skill**, **Industry**, **SavedJob**, **Blog**, **SearchKeyword**: Các lớp hỗ trợ chức năng thông báo, phân loại, lưu tin, nội dung blog và tối ưu tìm kiếm.

**Các kiểu liệt kê (Enum):**
- `UserRole` (CANDIDATE, EMPLOYER, ADMIN)
- `JobType` (FULL_TIME, PART_TIME, REMOTE, INTERNSHIP, CONTRACT)
- `JobStatus` (PENDING, ACTIVE, CLOSED, REJECTED)
- `ApplicationStatus` (PENDING, REVIEWING, INTERVIEW, ACCEPTED, REJECTED)
- `TransactionType` (DEPOSIT, DEDUCTION)

**Các mối quan hệ chính:**
- **1-1**: User ↔ CandidateProfile, User ↔ EmployerProfile
- **1-N**: Company → Job, Company → Transaction, User → Application, User → Resume, User → CV, User → Notification, Template → CV, Job → Application
- **N-N**: User ↔ Job *(thông qua bảng trung gian SavedJob)*

### 3.4.2. Sơ đồ Class phân rã

Để dễ dàng phân tích, hệ thống được chia thành 3 module chính:

#### a) Module Tuyển dụng (CD-02)

*(Xem mã PlantUML tại ClassDiagrams.md — CD-02)*

Module này tập trung vào luồng nghiệp vụ cốt lõi của hệ thống — quy trình từ đăng tin đến ứng tuyển:
- **Company** đăng nhiều **Job** (quan hệ 1-N), mỗi Job thuộc một **Industry** (N-1).
- **User** (ứng viên) tạo **Application** cho một **Job** (quan hệ N-N thông qua Application).
- Ràng buộc unique `(jobId, candidateId)` đảm bảo mỗi ứng viên chỉ ứng tuyển một lần cho mỗi công việc.
- Khi có Application mới, hệ thống tự động tạo **Notification** cho nhà tuyển dụng.
- **SavedJob** cho phép ứng viên lưu công việc yêu thích (quan hệ N-N giữa User và Job).
- Trường `embedding` (kiểu `vector`) trong Job được sử dụng cho tìm kiếm ngữ nghĩa bằng pgvector.

#### b) Module Hồ sơ & CV (CD-03)

*(Xem mã PlantUML tại ClassDiagrams.md — CD-03)*

Module này quản lý toàn bộ hồ sơ và tài liệu ứng tuyển của ứng viên:
- **User** có một **CandidateProfile** (1-1) chứa thông tin chi tiết: kỹ năng, kinh nghiệm, học vấn (dạng JSON array).
- **User** upload nhiều **Resume** (file PDF) và tạo nhiều **CV** trực tuyến (1-N).
- Mỗi **CV** được xây dựng từ một **Template** (N-1). Template chứa `layoutConfig` (cấu trúc dàn trang) và `styleConfig` (cấu hình giao diện) dưới dạng JSON.
- Khi ứng tuyển, **Application** có thể đính kèm một **CV** hoặc một **Resume** (quan hệ N-1 tuỳ chọn).
- CandidateProfile cũng có trường `embedding` (vector) để hỗ trợ AI Smart Matching từ phía ứng viên.

#### c) Module Tài chính (CD-04)

*(Xem mã PlantUML tại ClassDiagrams.md — CD-04)*

Module này quản lý hệ thống ví điện tử và dịch vụ VIP:
- **Company** có thuộc tính `balance` (số dư ví, đơn vị VND). Mỗi **EmployerProfile** liên kết với một Company (N-1).
- **Transaction** ghi nhận mọi biến động tài chính của Company, với `type` là `DEPOSIT` (nạp tiền) hoặc `DEDUCTION` (thanh toán). Mỗi giao dịch lưu `balanceAfter` (số dư sau giao dịch) để dễ dàng đối soát.
- **VipPackage** định nghĩa các gói dịch vụ (tên, giá, số ngày). Khi Employer mua gói VIP cho một **Job**, hệ thống trừ `balance`, cập nhật `job.isVip = true` và `job.vipUntil`.
- Tất cả thao tác tài chính được thực hiện trong `prisma.$transaction()` để đảm bảo tính toàn vẹn dữ liệu (ACID).
- VIP hết hạn theo cơ chế **lazy expiration**: mỗi khi gọi `getJobs()`, hệ thống tự động gỡ VIP cho các tin có `vipUntil < now()`.

## 3.5. Mô hình hoá hành vi

*(Toàn bộ mã PlantUML của các sơ đồ Tuần tự và Hoạt động được trình bày tại file SequenceActivityDiagrams.md)*

### 3.5.1. Sơ đồ tuần tự (Sequence Diagram)

Sơ đồ tuần tự mô tả trình tự tương tác giữa các đối tượng theo thời gian, giúp hiểu rõ luồng xử lý nghiệp vụ thực tế trong hệ thống. Dưới đây là bốn sơ đồ tuần tự cho các luồng cốt lõi nhất của JobNow.

#### a) SD-01: Luồng Ứng tuyển việc làm

*(Xem mã PlantUML tại SequenceActivityDiagrams.md — SD-01)*

Sơ đồ mô tả toàn bộ luồng ứng tuyển từ khi ứng viên nhấn nút "Ứng tuyển ngay" trên trang chi tiết công việc (`/jobs/[slug]`) đến khi hồ sơ được ghi nhận trong hệ thống:

1. **Client → Server Action**: Ứng viên chọn CV/Resume, nhập Cover Letter (có thể sử dụng AI — tham chiếu SD-04), sau đó gọi `applyToJob(jobId, cvId, resumeId, coverLetter)`.
2. **Xác thực & Kiểm tra trùng**: Server Action gọi `auth()` để xác thực phiên. Kiểm tra ràng buộc unique `(jobId, candidateId)` để đảm bảo không ứng tuyển trùng.
3. **Tạo Application**: Tạo bản ghi `Application` với trạng thái `PENDING` trong cơ sở dữ liệu.
4. **Thông báo**: Hệ thống tự động tạo `Notification` loại `NEW_APPLICATION` cho nhà tuyển dụng sở hữu tin đăng (`job.postedById`).
5. **Cập nhật cache**: Gọi `revalidatePath("/candidate/applications")` để làm mới dữ liệu trên trang quản lý hồ sơ.

**Các trường hợp ngoại lệ**: Ứng viên chưa đăng nhập, role không phải `CANDIDATE`, hoặc đã ứng tuyển trước đó — tất cả đều trả về message lỗi tương ứng mà không tạo bản ghi.

#### b) SD-02a: Luồng Nạp tiền vào ví

*(Xem mã PlantUML tại SequenceActivityDiagrams.md — SD-02a)*

Sơ đồ mô tả luồng nạp tiền vào ví điện tử của công ty thông qua server action `depositMoney(amount)`:

1. Nhà tuyển dụng truy cập trang `/employer/billing`, nhập số tiền cần nạp và nhấn "Nạp tiền".
2. Server xác thực phiên (`auth()`), kiểm tra `companyId` từ `EmployerProfile` và validate `amount > 0`.
3. Sử dụng `prisma.$transaction()` để thực hiện hai thao tác nguyên tử:
   - Cập nhật `company.balance` với `{ increment: amount }`.
   - Tạo bản ghi `Transaction` loại `DEPOSIT` với `balanceAfter` ghi nhận số dư sau giao dịch.
4. Giao diện được cập nhật ngay lập tức với số dư mới sau khi `revalidatePath()`.

**Các trường hợp ngoại lệ**: Chưa đăng nhập, chưa có công ty, hoặc số tiền ≤ 0 — tất cả đều trả về message lỗi tương ứng.

#### c) SD-02b: Luồng Mua gói VIP cho tin đăng

*(Xem mã PlantUML tại SequenceActivityDiagrams.md — SD-02b)*

Sơ đồ mô tả luồng thanh toán và nâng cấp tin tuyển dụng lên trạng thái VIP thông qua `upgradeJobToVip(jobId, packageId)`:

1. Nhà tuyển dụng chọn tin đăng và gói VIP (lấy từ `VipPackage` với `isActive = true`), nhấn "Mua gói".
2. Server mở `prisma.$transaction()` — đảm bảo ACID — gồm các bước kiểm tra tuần tự:
   - Kiểm tra `company.balance >= package.price`. Nếu không đủ → throw `INSUFFICIENT_FUNDS` → rollback.
   - Kiểm tra `job.companyId === company.id`. Nếu không khớp → throw `JOB_NOT_FOUND` → rollback.
   - Trừ tiền: `company.balance -= price`.
   - Cập nhật tin: `job.isVip = true`, `job.vipUntil = now() + days`.
   - Tạo `Transaction` loại `DEDUCTION` với mô tả *"Thanh toán [Tên gói] - [Tên tin]"*.
3. Nếu bất kỳ bước nào thất bại, toàn bộ transaction bị rollback — không có dữ liệu nào bị thay đổi.

**Điểm thiết kế quan trọng**: Tách riêng sơ đồ Nạp tiền và Mua VIP giúp thể hiện rõ ràng hai nghiệp vụ tài chính độc lập, mỗi nghiệp vụ đều sử dụng `prisma.$transaction()` riêng biệt để đảm bảo tính ACID.

#### d) SD-03: Luồng AI Smart Matching

*(Xem mã PlantUML tại SequenceActivityDiagrams.md — SD-03)*

Sơ đồ mô tả cách hệ thống tính toán **Match Score** — điểm phù hợp giữa ứng viên và công việc, kết hợp AI và các yếu tố truyền thống:

1. **Lấy dữ liệu**: Gọi `calculateMatchData(jobId)`, truy vấn thông tin `CandidateProfile` (kỹ năng, kinh nghiệm, mức lương mong muốn, vị trí) và `Job` (kỹ năng yêu cầu, mức lương, số năm kinh nghiệm).

2. **Bước 1 — AI Similarity (pgvector)**: Sử dụng truy vấn raw SQL với toán tử `<=>` (cosine distance) của pgvector để tính độ tương đồng ngữ nghĩa giữa vector embedding của công việc (`Job.embedding`) và hồ sơ ứng viên (`CandidateProfile.embedding`). Công thức: `similarity = 1 - (job.embedding <=> cp.embedding)`, kết quả từ 0.0 đến 1.0.

3. **Bước 2 — Các yếu tố bổ sung (JavaScript)**:
   - **Skill Score**: Tỷ lệ kỹ năng trùng khớp (case-insensitive) giữa ứng viên và yêu cầu công việc.
   - **Salary Score**: So sánh mức lương mong muốn của ứng viên với khoảng lương của công việc.
   - **Experience Score**: So sánh số năm kinh nghiệm thực tế với yêu cầu.
   - **Location Score**: Đánh giá độ khớp vị trí địa lý (100 điểm nếu trùng, 40 điểm nếu khác).

4. **Bước 3 — Composite Score**: Tính điểm tổng hợp theo trọng số: `AI Match (40%) + Kỹ năng (20%) + Lương (20%) + Kinh nghiệm (10%) + Vị trí (10%)`. Nếu không có embedding AI, hệ thống tự động điều chỉnh trọng số: `Kỹ năng (40%) + Lương (30%) + Kinh nghiệm (15%) + Vị trí (15%)`.

#### e) SD-04: Luồng tạo Cover Letter bằng AI

*(Xem mã PlantUML tại SequenceActivityDiagrams.md — SD-04)*

Sơ đồ mô tả luồng tích hợp Google Gemini API để tự động tạo thư xin việc:

1. **Thu thập ngữ cảnh**: Server Action `generateCoverLetter(jobId)` truy vấn ba nguồn dữ liệu: thông tin công việc (`Job` + `Company`), hồ sơ ứng viên (`CandidateProfile`), và thông tin người dùng (`User.name`).

2. **Xây dựng prompt**: Tổng hợp ngữ cảnh thành một prompt có cấu trúc, bao gồm:
   - Thông tin ứng viên: tên, kỹ năng, số năm kinh nghiệm, mô tả bản thân.
   - Thông tin công việc: vị trí, công ty, mô tả, yêu cầu, địa điểm.
   - Yêu cầu đầu ra: thư xin việc 300-400 từ, tiếng Việt, chuyên nghiệp.

3. **Gọi Gemini API**: Sử dụng `generateStructuredText()` với model `gemini-1.5-flash` và system instruction vai trò "Chuyên gia HR". Hàm này hỗ trợ fallback sang `gemini-pro` nếu model chính gặp lỗi 404.

4. **Trả kết quả**: Cover Letter được trả về dạng text, hiển thị trong textarea để ứng viên xem trước và chỉnh sửa trước khi gửi hồ sơ.

**Xử lý lỗi**: Nếu Gemini API không phản hồi (lỗi mạng, hết quota, API key không hợp lệ), hệ thống trả về message lỗi thân thiện: *"Tạo thư xin việc thất bại. Vui lòng thử lại"* — ứng viên vẫn có thể tự viết Cover Letter.

### 3.5.2. Sơ đồ hoạt động (Activity Diagram)

Sơ đồ hoạt động mô tả luồng công việc (workflow) của các quy trình nghiệp vụ, thể hiện các bước xử lý, điều kiện phân nhánh và sự phối hợp giữa các tác nhân. Dưới đây là ba sơ đồ hoạt động cho các quy trình quan trọng nhất.

#### a) AD-01: Quy trình Đăng tin tuyển dụng

*(Xem mã PlantUML tại SequenceActivityDiagrams.md — AD-01)*

Sơ đồ thể hiện quy trình đăng tin tuyển dụng qua **3 swimlane** (Nhà tuyển dụng, Hệ thống, Quản trị viên), bao quát từ khâu tạo tin đến khâu kiểm duyệt:

1. **Kiểm tra tiền điều kiện**: Hệ thống xác thực session (role = `EMPLOYER`) và kiểm tra nhà tuyển dụng đã liên kết công ty (`companyId` hợp lệ). Nếu chưa có công ty, hiển thị thông báo yêu cầu cập nhật.

2. **Tạo tin đăng**: Nhà tuyển dụng điền form với đầy đủ trường dữ liệu (tiêu đề, mô tả Rich Text, yêu cầu, phúc lợi, tỉnh/TP, loại hình, mức lương, kỹ năng, ngành nghề, độ tuổi, kinh nghiệm). Hệ thống tự động tạo `slug` từ tiêu đề kết hợp timestamp, lưu Job với trạng thái `PENDING`.

3. **Song song (Fork)**: Sau khi lưu, hệ thống thực hiện đồng thời hai tác vụ:
   - Gọi `generateJobEmbedding(jobId)` để tạo vector embedding phục vụ AI Matching (sử dụng Gemini Embedding API). Nếu thất bại, chỉ ghi log lỗi — tin vẫn được tạo thành công.
   - Gọi `revalidatePath()` để làm mới cache cho trang quản lý và trang tìm kiếm.

4. **Kiểm duyệt (Admin)**: Admin truy cập trang kiểm duyệt, xem danh sách tin `PENDING`, và đưa ra quyết định:
   - **Duyệt (ACTIVE)**: Tái tạo embedding, tạo thông báo cho Employer, tin hiển thị công khai. Tin VIP luôn được ưu tiên hiển thị đầu tiên (`orderBy: isVip desc`).
   - **Từ chối (REJECTED)**: Tạo thông báo từ chối, Employer có thể chỉnh sửa và gửi lại.

#### b) AD-02: Quy trình Ứng tuyển đầy đủ

*(Xem mã PlantUML tại SequenceActivityDiagrams.md — AD-02)*

Sơ đồ bao quát toàn bộ vòng đời ứng tuyển qua **3 swimlane** (Ứng viên, Hệ thống, Nhà tuyển dụng):

1. **Tìm kiếm → Chi tiết → Ứng tuyển**: Ứng viên tìm kiếm việc làm, xem chi tiết, rồi nhấn "Ứng tuyển ngay".

2. **Xác thực & Kiểm tra**: Hệ thống xác thực phiên (phải là `CANDIDATE`), kiểm tra ràng buộc unique `(jobId, candidateId)` để tránh ứng tuyển trùng.

3. **Chọn tài liệu & AI Cover Letter**: Ứng viên chọn CV hoặc Resume. Nếu muốn, có thể sử dụng AI tạo Cover Letter tự động (tham chiếu SD-04). Nếu API lỗi, ứng viên vẫn có thể tự viết.

4. **Gửi hồ sơ**: Tạo `Application` với status `PENDING`, đồng thời tạo `Notification` cho nhà tuyển dụng.

5. **Quy trình duyệt hồ sơ**: Nhà tuyển dụng xem danh sách ứng viên, thay đổi trạng thái hồ sơ qua các giai đoạn: `PENDING → REVIEWING → INTERVIEW → ACCEPTED / REJECTED`. Mỗi lần thay đổi, hệ thống tạo thông báo cho ứng viên.

#### c) AD-03a: Quy trình Nạp tiền vào ví

*(Xem mã PlantUML tại SequenceActivityDiagrams.md — AD-03a)*

Sơ đồ mô tả quy trình nhà tuyển dụng nạp tiền vào ví điện tử:
1. **Kiểm tra trước giao dịch**: Xác thực session, kiểm tra `companyId`. Yêu cầu số tiền nhập vào phải lớn hơn 0.
2. **Transaction ACID**: Bọc trong `prisma.$transaction()` thực hiện cộng tiền (`company.balance += amount`) và tạo log giao dịch (`Transaction` type `DEPOSIT`).

#### d) AD-03b: Quy trình Mua gói VIP cho tin đăng

*(Xem mã PlantUML tại SequenceActivityDiagrams.md — AD-03b)*

Sơ đồ mô tả chi tiết quy trình thanh toán và nâng cấp tin VIP, nhấn mạnh các điểm kiểm tra an toàn:

1. **Kiểm tra trước giao dịch**: Xác thực session, kiểm tra `companyId`, lấy danh sách gói VIP đang hoạt động (`isActive = true`, sắp xếp theo số ngày tăng dần).

2. **Transaction ACID**: Toàn bộ quy trình mua VIP được bọc trong `prisma.$transaction()` với 4 bước kiểm tra tuần tự:
   - Kiểm tra gói VIP tồn tại và đang hoạt động.
   - Kiểm tra số dư ví: `company.balance >= package.price`. Nếu không đủ → rollback toàn bộ → chuyển sang quy trình Nạp tiền (AD-03a).
   - Kiểm tra tin đăng thuộc công ty: `job.companyId === company.id`.
   - Thực hiện: trừ tiền, cập nhật VIP, ghi log giao dịch (type `DEDUCTION`).

3. **Cơ chế Lazy Expiration**: Sơ đồ kết thúc bằng ghi chú quan trọng — VIP không sử dụng cron job, mà được gỡ tự động mỗi khi hệ thống gọi `getJobs()`: cập nhật `isVip = false` cho tất cả tin có `vipUntil < now()`. Cách tiếp cận này đơn giản và hiệu quả, không cần thêm infrastructure bên ngoài.


## 3.6. Kiến trúc hệ thống

*(Toàn bộ mã PlantUML của Sơ đồ Gói và Sơ đồ ERD được trình bày tại file PackageERDDiagrams.md)*

### 3.6.1. Sơ đồ gói (Package Diagram)

Kiến trúc tổng thể của hệ thống JobNow được xây dựng dựa trên framework Next.js (App Router), kết hợp với Prisma ORM và các dịch vụ bên ngoài (Google Gemini API). Sơ đồ gói `PD-01` mô tả cách các thành phần trong hệ thống phân chia và tương tác với nhau:

1. **Next.js App Router (Client & Server)**:
   - Thư mục `app/`: Chứa các trang giao diện chia theo Role (Ứng viên, Nhà tuyển dụng, Admin) và các API Routes.
   - Thư mục `app/actions/`: Nơi chứa các Server Actions (`jobs.ts`, `billing.ts`, `applications.ts`, `match.ts`, `cover-letter.ts`) đóng vai trò là tầng Controller xử lý logic nghiệp vụ và bảo mật.
   - Thư mục `app/components/`: Chứa các UI Component dùng chung (React).

2. **Core Logic & Database**:
   - Thư mục `lib/`: Chứa các hàm tiện ích cốt lõi, đặc biệt là `ai.ts` quản lý việc gọi Gemini API và xử lý Vector Embeddings.
   - Thư mục `prisma/`: Định nghĩa Schema Database và Prisma Client đóng vai trò giao tiếp trực tiếp với PostgreSQL.

3. **External Services**:
   - **PostgreSQL (pgvector)**: Lưu trữ dữ liệu hệ thống và tính toán vector similarity (Cosine Distance).
   - **Google Gemini API**: Phân tích văn bản, tạo Cover Letter và tạo Vector Embeddings.
   - **NextAuth**: Quản lý phiên đăng nhập và phân quyền.

### 3.6.2. Sơ đồ quan hệ thực thể (ERD)

Sơ đồ `ERD-01` mô tả cấu trúc cơ sở dữ liệu rút gọn gồm các thực thể cốt lõi và các mối quan hệ logic trong hệ thống tuyển dụng:

1. **Quản lý Tài khoản (Auth & Profiles)**:
   - Thực thể trung tâm là `User`.
   - Một User có thể có 0 hoặc 1 `CandidateProfile` (Hồ sơ ứng viên) hoặc `EmployerProfile` (Hồ sơ nhà tuyển dụng) dựa trên `UserRole`.

2. **Quản lý Tuyển dụng (Jobs & Applications)**:
   - `Company` (Công ty) là thực thể tạo ra nhiều `Job` (Tin đăng).
   - `Job` nhận nhiều `Application` (Đơn ứng tuyển) từ các `User` (Ứng viên).
   - Điểm đặc biệt: Trong bảng `Job` và `CandidateProfile` có chứa trường `embedding` kiểu `vector` (Vector 768 chiều) để phục vụ AI Matching. Bảng `Application` lưu trữ `matchScore` được tính toán bằng Cosine Distance.

3. **Quản lý Tài chính (Monetization)**:
   - `Company` sở hữu trường `balance` (số dư ví).
   - Mọi biến động số dư được ghi log vào bảng `Transaction` (nhiều giao dịch thuộc về một công ty).
   - Bảng `Job` có các trường `isVip` và `vipUntil` để xác định trạng thái tin nổi bật, được cập nhật sau khi Employer mua thành công `VipPackage`.

4. **CV Builder**:
   - `User` có thể tạo nhiều `CV` từ các mẫu `Template` có sẵn (lưu trữ JSON Layout và Style).

## 3.7. Thiết kế Cơ sở dữ liệu

Hệ thống JobNow sử dụng PostgreSQL làm hệ quản trị cơ sở dữ liệu chính, kết hợp với extension `pgvector` để lưu trữ và tính toán khoảng cách vector cho tính năng AI Smart Matching. Dưới đây là mô tả chi tiết cấu trúc các bảng cốt lõi trong hệ thống.

### 3.7.1. Bảng User (Tài khoản người dùng)
Bảng lưu trữ thông tin đăng nhập và phân quyền cơ bản của tất cả người dùng trên hệ thống.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh duy nhất (CUID) |
| email | String | UK, Not Null | Địa chỉ email đăng nhập |
| password | String | Nullable | Mật khẩu đã mã hoá (nếu dùng Credentials) |
| name | String | Nullable | Tên hiển thị |
| role | UserRole | Enum | Vai trò: CANDIDATE, EMPLOYER, ADMIN |
| createdAt | DateTime | Not Null | Thời gian tạo tài khoản |

### 3.7.2. Bảng CandidateProfile (Hồ sơ ứng viên)
Bảng lưu trữ thông tin chi tiết của ứng viên, liên kết 1-1 với bảng `User`.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh duy nhất (CUID) |
| userId | String | FK, UK | Liên kết đến bảng User |
| phone | String | Nullable | Số điện thoại liên hệ |
| skills | String[] | Not Null | Danh sách kỹ năng |
| yearsExp | Int | Default(0) | Số năm kinh nghiệm làm việc |
| desiredSalary | Int | Nullable | Mức lương mong muốn (VND) |
| embedding | vector(768) | Nullable | Vector AI trích xuất từ kỹ năng và kinh nghiệm |

### 3.7.3. Bảng Company (Hồ sơ công ty)
Bảng lưu trữ thông tin của các doanh nghiệp tuyển dụng.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh duy nhất (CUID) |
| name | String | Not Null | Tên công ty |
| slug | String | UK | Đường dẫn thân thiện SEO |
| industry | String | Nullable | Ngành nghề hoạt động |
| verified | Boolean | Default(false) | Trạng thái xác thực công ty |
| balance | Int | Default(0) | Số dư ví điện tử của công ty (VND) |

### 3.7.4. Bảng Job (Tin tuyển dụng)
Bảng lưu trữ các tin đăng tuyển dụng do nhà tuyển dụng tạo ra.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh duy nhất (CUID) |
| companyId | String | FK | Liên kết đến bảng Company |
| title | String | Not Null | Tiêu đề tin tuyển dụng |
| status | JobStatus | Enum | Trạng thái: PENDING, ACTIVE, CLOSED, REJECTED |
| isVip | Boolean | Default(false) | Cờ đánh dấu tin VIP được ưu tiên hiển thị |
| vipUntil | DateTime | Nullable | Thời điểm hết hạn gói VIP (phục vụ Lazy Expiration) |
| embedding | vector(768) | Nullable | Vector AI trích xuất từ yêu cầu công việc |

### 3.7.5. Bảng Application (Đơn ứng tuyển)
Bảng lưu trữ thông tin ứng viên nộp hồ sơ vào các công việc.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh duy nhất (CUID) |
| jobId | String | FK | Liên kết đến bảng Job |
| candidateId | String | FK | Liên kết đến bảng User (Ứng viên) |
| status | ApplicationStatus| Enum | Trạng thái duyệt: PENDING, REVIEWING, ACCEPTED... |
| matchScore | Float | Nullable | Điểm AI Match (từ 0.0 đến 1.0) |
| coverLetter| String | Nullable | Thư xin việc (có thể được sinh tự động bởi Gemini AI) |

### 3.7.6. Bảng Transaction (Lịch sử giao dịch)
Bảng lưu vết tất cả các biến động số dư của ví điện tử công ty (Nạp tiền, Trừ tiền mua VIP).

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh duy nhất (CUID) |
| companyId | String | FK | Liên kết đến bảng Company |
| amount | Int | Not Null | Số tiền giao dịch (VND) |
| type | TransactionType| Enum | Loại giao dịch: DEPOSIT (Nạp), DEDUCTION (Trừ) |
| description| String | Nullable | Mô tả lý do giao dịch |
| balanceAfter| Int | Not Null | Số dư ví sau khi thực hiện giao dịch (đảm bảo tính minh bạch) |

### 3.7.7. Bảng VipPackage (Gói VIP)
Bảng danh mục các gói nâng cấp tin đăng VIP do Admin cấu hình.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh duy nhất (CUID) |
| name | String | Not Null | Tên gói VIP (VD: "Gói VIP 7 ngày") |
| days | Int | Not Null | Thời hạn của gói (số ngày) |
| price | Int | Not Null | Giá tiền của gói (VND) |
| isActive | Boolean | Default(true) | Cho phép hiển thị và mua gói hay không |

### 3.7.8. Bảng EmployerProfile (Hồ sơ nhà tuyển dụng)
Bảng lưu trữ thông tin cá nhân của người đại diện tuyển dụng, liên kết 1-1 với `User` và nhiều-1 với `Company`.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh duy nhất (CUID) |
| userId | String | FK, UK | Liên kết đến bảng User |
| companyId | String | FK, Nullable | Liên kết đến bảng Company |
| position | String | Nullable | Chức vụ trong công ty |

### 3.7.9. Bảng Resume (Hồ sơ đính kèm)
Bảng quản lý các file CV gốc (PDF/Word) do ứng viên tải lên.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh |
| userId | String | FK | Liên kết đến User (Ứng viên) |
| fileName | String | Not Null | Tên file hiển thị |
| fileUrl | String | Not Null | Đường dẫn lưu trữ (Cloud Storage) |
| parsedText | String | Nullable | Văn bản được parse từ CV (phục vụ đối chiếu AI) |
| isActive | Boolean | Default(true) | Trạng thái hiển thị |

### 3.7.10. Bảng Notification (Thông báo)
Hệ thống thông báo đẩy (push notifications) trong ứng dụng.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh |
| userId | String | FK | Người nhận thông báo |
| type | String | Not Null | Loại (VD: APPLICATION_STATUS) |
| title | String | Not Null | Tiêu đề thông báo |
| message | String | Not Null | Nội dung chi tiết |
| isRead | Boolean | Default(false) | Trạng thái đã đọc |

### 3.7.11. Bảng CV và Template (Hệ thống CV Builder)
Hỗ trợ ứng viên tạo CV trực tiếp trên nền tảng.

**Bảng Template (Mẫu CV):**
| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh |
| name | String | Not Null | Tên template |
| category | String | Default("Modern") | Phân loại mẫu |
| layoutConfig | Json | Not Null | Cấu trúc dàn trang |
| styleConfig | Json | Not Null | Cấu hình UI (màu sắc, font) |

**Bảng CV (Hồ sơ tự tạo):**
| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh |
| userId | String | FK | Chủ sở hữu (Ứng viên) |
| templateId | String | FK | Sử dụng mẫu nào |
| title | String | Not Null | Tiêu đề CV |
| content | Json | Not Null | Dữ liệu nội dung người dùng nhập |
| isPublic | Boolean | Default(false) | Cho phép NTD tìm kiếm |

### 3.7.12. Bảng Industry (Danh mục ngành nghề)
Bảng lưu trữ danh sách các ngành nghề phục vụ cho việc lọc và tìm kiếm việc làm.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh duy nhất (CUID) |
| name | String | UK, Not Null | Tên ngành nghề (VD: IT - Phần mềm) |
| slug | String | UK, Not Null | Đường dẫn thân thiện (VD: it-phan-mem) |

### 3.7.13. Bảng Skill (Từ điển kỹ năng)
Bảng chuẩn hóa các kỹ năng (skills) để ứng viên và nhà tuyển dụng có thể chọn từ danh sách thống nhất.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh duy nhất (CUID) |
| name | String | UK, Not Null | Tên kỹ năng (VD: ReactJS, Python) |
| category | String | Not Null | Phân loại kỹ năng (Frontend, Backend, Design...) |

### 3.7.14. Bảng SavedJob (Việc làm đã lưu)
Bảng lưu vết các tin tuyển dụng mà ứng viên đã nhấn nút "Lưu".

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh duy nhất (CUID) |
| userId | String | FK | Liên kết đến User (Ứng viên) |
| jobId | String | FK | Liên kết đến Job (Công việc) |
| createdAt | DateTime | Not Null | Thời điểm lưu công việc |

*(Lưu ý: Hệ thống đảm bảo tính duy nhất qua khoá phức hợp `[userId, jobId]` để tránh lưu trùng lặp).*

### 3.7.15. Bảng SearchKeyword (Gợi ý từ khóa AI)
Bảng phục vụ tính năng Smart Search, lưu trữ các từ khóa tìm kiếm phổ biến và vector nhúng (embedding).

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh duy nhất (CUID) |
| baseKeyword | String | Not Null | Từ khoá gốc (VD: "marketing") |
| keywordSuggestion | String | Not Null | Từ khoá gợi ý mở rộng (VD: "marketing online") |
| keywordType | String | Not Null | Phân loại: keyword_suggestion hoặc related_keyword |
| embedding | Float[] | Not Null | Vector từ khóa (sinh bởi Gemini) để tính độ tương đồng |
| isActive | Boolean | Default(true) | Trạng thái sử dụng |
| createdAt | DateTime | Not Null | Thời điểm tạo |

### 3.7.16. Bảng Blog (Bài viết và Tin tức)
Bảng quản lý hệ thống tin tức, cẩm nang nghề nghiệp.

| Tên trường | Kiểu dữ liệu | Ràng buộc | Mô tả |
|---|---|---|---|
| id | String | PK | Mã định danh duy nhất (CUID) |
| title | String | Not Null | Tiêu đề bài viết |
| slug | String | UK, Not Null | Đường dẫn thân thiện SEO |
| excerpt | String | Nullable | Đoạn trích dẫn ngắn |
| content | String | Not Null | Nội dung chi tiết bài viết (HTML/Markdown) |
| coverImage | String | Nullable | Ảnh bìa bài viết |
| author | String | Nullable | Tên tác giả |
| category | String | Not Null | Chuyên mục bài viết |
| tags | String[] | Not Null | Các thẻ (tags) phân loại |
| isPublished| Boolean | Default(true) | Trạng thái xuất bản |
| viewCount | Int | Default(0) | Lượt xem bài viết |
| createdAt | DateTime | Not Null | Thời điểm tạo bài |
