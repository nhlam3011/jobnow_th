# Mã PlantUML - Sơ đồ Use Case hệ thống JobNow

---

## UC-00: Use Case Tổng quát hệ thống JobNow

```plantuml
@startuml UC00_TongQuat
left to right direction
skinparam packageStyle rectangle

actor "Ứng viên\n(Candidate)" as Candidate
actor "Nhà tuyển dụng\n(Employer)" as Employer
actor "Quản trị viên\n(Admin)" as Admin

rectangle "Hệ thống JobNow" {

  ' === CHUNG ===
  usecase "Đăng ký tài khoản" as UC_Register
  usecase "Đăng nhập" as UC_Login
  usecase "Quản lý thông tin\ncá nhân" as UC_Profile

  ' === ỨNG VIÊN ===
  usecase "Tìm kiếm việc làm" as UC_Search
  usecase "Xem chi tiết\ncông việc" as UC_JobDetail
  usecase "Ứng tuyển việc làm" as UC_Apply
  usecase "Xây dựng CV\n(CV Builder)" as UC_CVBuilder
  usecase "Lưu việc làm" as UC_SaveJob
  usecase "AI tạo Cover Letter" as UC_CoverLetter

  ' === NHÀ TUYỂN DỤNG ===
  usecase "Đăng tin tuyển dụng" as UC_PostJob
  usecase "Quản lý ứng viên" as UC_ManageApplicants
  usecase "Nạp tiền vào ví" as UC_Deposit
  usecase "Nâng cấp tin VIP" as UC_VIP
  usecase "Quản lý công ty" as UC_Company
  usecase "AI Smart Matching" as UC_Match

  ' === QUẢN TRỊ ===
  usecase "Kiểm duyệt\ntin tuyển dụng" as UC_Approve
  usecase "Xác thực công ty" as UC_Verify
  usecase "Quản lý nội dung\n(Blog, Template)" as UC_Content
  usecase "Thống kê\ndoanh thu" as UC_Stats
}

' --- Quan hệ Ứng viên ---
Candidate --> UC_Register
Candidate --> UC_Login
Candidate --> UC_Profile
Candidate --> UC_Search
Candidate --> UC_JobDetail
Candidate --> UC_Apply
Candidate --> UC_CVBuilder
Candidate --> UC_SaveJob

' --- Quan hệ Nhà tuyển dụng ---
Employer --> UC_Register
Employer --> UC_Login
Employer --> UC_Profile
Employer --> UC_PostJob
Employer --> UC_ManageApplicants
Employer --> UC_Deposit
Employer --> UC_VIP
Employer --> UC_Company

' --- Quan hệ Admin ---
Admin --> UC_Login
Admin --> UC_Approve
Admin --> UC_Verify
Admin --> UC_Content
Admin --> UC_Stats

' --- Include / Extend ---
UC_Apply ..> UC_Match : <<include>>
UC_Apply ..> UC_CoverLetter : <<include>>
UC_ManageApplicants ..> UC_Match : <<include>>

@enduml
```

---

## UC-01: Use Case phân rã - Ứng viên (Candidate)

```plantuml
@startuml UC01_Candidate
left to right direction
skinparam packageStyle rectangle

actor "Ứng viên\n(Candidate)" as Candidate

rectangle "Module Ứng viên" {

  ' --- Xác thực ---
  usecase "Đăng ký tài khoản" as UC_Register
  usecase "Đăng nhập /\nĐăng nhập OAuth" as UC_Login

  ' --- Hồ sơ ---
  usecase "Cập nhật hồ sơ\ncá nhân" as UC_Profile
  usecase "Thêm kỹ năng" as UC_Skills
  usecase "Thêm kinh nghiệm\nlàm việc" as UC_Experience
  usecase "Thêm học vấn" as UC_Education

  ' --- CV & Resume ---
  usecase "Tạo CV trực tuyến\n(CV Builder)" as UC_CVBuilder
  usecase "Chọn mẫu CV\n(Template)" as UC_Template
  usecase "Xuất CV ra PDF" as UC_ExportPDF
  usecase "Upload Resume\n(PDF)" as UC_UploadResume

  ' --- Tìm kiếm & Việc làm ---
  usecase "Tìm kiếm việc làm" as UC_Search
  usecase "Lọc theo tiêu chí\n(Ngành, Địa điểm,\nMức lương, Loại hình)" as UC_Filter
  usecase "Xem chi tiết\ncông việc" as UC_JobDetail
  usecase "Lưu việc làm\nyêu thích" as UC_SaveJob

  ' --- Ứng tuyển ---
  usecase "Ứng tuyển việc làm" as UC_Apply
  usecase "Chọn CV / Resume\nđể nộp" as UC_SelectCV
  usecase "AI tạo Cover Letter" as UC_CoverLetter
  usecase "Theo dõi trạng thái\nhồ sơ ứng tuyển" as UC_TrackStatus

  ' --- Thông báo ---
  usecase "Xem thông báo" as UC_Notification
}

' --- Quan hệ chính ---
Candidate --> UC_Register
Candidate --> UC_Login
Candidate --> UC_Profile
Candidate --> UC_CVBuilder
Candidate --> UC_UploadResume
Candidate --> UC_Search
Candidate --> UC_Apply
Candidate --> UC_SaveJob
Candidate --> UC_Notification
Candidate --> UC_TrackStatus

' --- Include / Extend ---
UC_Profile ..> UC_Skills : <<include>>
UC_Profile ..> UC_Experience : <<include>>
UC_Profile ..> UC_Education : <<include>>

UC_CVBuilder ..> UC_Template : <<include>>
UC_CVBuilder ..> UC_ExportPDF : <<extend>>

UC_Search ..> UC_Filter : <<include>>
UC_Search ..> UC_JobDetail : <<extend>>

UC_Apply ..> UC_SelectCV : <<include>>
UC_Apply ..> UC_CoverLetter : <<extend>>

@enduml
```

---

## UC-02: Use Case phân rã - Nhà tuyển dụng (Employer)

```plantuml
@startuml UC02_Employer
left to right direction
skinparam packageStyle rectangle

actor "Nhà tuyển dụng\n(Employer)" as Employer

rectangle "Module Nhà tuyển dụng" {

  ' --- Xác thực ---
  usecase "Đăng ký tài khoản\nEmployer" as UC_Register
  usecase "Đăng nhập" as UC_Login

  ' --- Quản lý Công ty ---
  usecase "Tạo / Cập nhật\nthông tin công ty" as UC_Company
  usecase "Upload Logo\n& Ảnh bìa" as UC_Logo
  usecase "Yêu cầu xác thực\ncông ty" as UC_RequestVerify

  ' --- Đăng tin ---
  usecase "Đăng tin\ntuyển dụng mới" as UC_PostJob
  usecase "Nhập mô tả,\nyêu cầu, phúc lợi" as UC_JobContent
  usecase "Chọn ngành nghề\n& Kỹ năng" as UC_JobMeta
  usecase "Chỉnh sửa /\nXóa tin đăng" as UC_EditJob

  ' --- Tài chính (Wallet) ---
  usecase "Nạp tiền\nvào ví" as UC_Deposit
  usecase "Xem lịch sử\ngiao dịch" as UC_TransHistory
  usecase "Mua gói VIP\ncho tin đăng" as UC_BuyVIP
  usecase "Kiểm tra số dư ví" as UC_CheckBalance

  ' --- Quản lý Ứng viên ---
  usecase "Xem danh sách\nứng viên" as UC_ViewApplicants
  usecase "Xem CV / Resume\nứng viên" as UC_ViewCV
  usecase "Xem điểm\nAI Match Score" as UC_MatchScore
  usecase "Cập nhật trạng thái\nhồ sơ" as UC_UpdateStatus
}

' --- Quan hệ chính ---
Employer --> UC_Register
Employer --> UC_Login
Employer --> UC_Company
Employer --> UC_PostJob
Employer --> UC_EditJob
Employer --> UC_Deposit
Employer --> UC_BuyVIP
Employer --> UC_ViewApplicants
Employer --> UC_TransHistory

' --- Include / Extend ---
UC_Company ..> UC_Logo : <<include>>
UC_Company ..> UC_RequestVerify : <<extend>>

UC_PostJob ..> UC_JobContent : <<include>>
UC_PostJob ..> UC_JobMeta : <<include>>

UC_BuyVIP ..> UC_CheckBalance : <<include>>

UC_ViewApplicants ..> UC_ViewCV : <<include>>
UC_ViewApplicants ..> UC_MatchScore : <<include>>
UC_ViewApplicants ..> UC_UpdateStatus : <<include>>

@enduml
```

---

## UC-03: Use Case phân rã - Quản trị viên (Admin)

```plantuml
@startuml UC03_Admin
left to right direction
skinparam packageStyle rectangle

actor "Quản trị viên\n(Admin)" as Admin

rectangle "Module Quản trị" {

  ' --- Xác thực ---
  usecase "Đăng nhập Admin" as UC_Login

  ' --- Kiểm duyệt ---
  usecase "Duyệt tin\ntuyển dụng" as UC_ApproveJob
  usecase "Phê duyệt (Approve)\nhoặc Từ chối (Reject)" as UC_Decision
  usecase "Xác thực công ty\n(Verified)" as UC_VerifyCompany

  ' --- Quản lý Người dùng ---
  usecase "Xem danh sách\nngười dùng" as UC_UserList
  usecase "Quản lý công ty" as UC_CompanyList

  ' --- Quản lý Nội dung ---
  usecase "Quản lý Blog\n(CRUD)" as UC_Blog
  usecase "Quản lý mẫu CV\n(Template Designer)" as UC_Templates
  usecase "Quản lý ngành nghề\n(Industry)" as UC_Industry

  ' --- Tài chính ---
  usecase "Quản lý gói VIP" as UC_VipPackage
  usecase "Xem thống kê\ndoanh thu" as UC_Revenue
  usecase "Xem lịch sử\ngiao dịch toàn hệ thống" as UC_AllTrans
  usecase "Duyệt yêu cầu\nnạp tiền" as UC_ApproveDeposit
}

' --- Quan hệ chính ---
Admin --> UC_Login
Admin --> UC_ApproveJob
Admin --> UC_VerifyCompany
Admin --> UC_UserList
Admin --> UC_CompanyList
Admin --> UC_Blog
Admin --> UC_Templates
Admin --> UC_Industry
Admin --> UC_VipPackage
Admin --> UC_Revenue
Admin --> UC_AllTrans
Admin --> UC_ApproveDeposit

' --- Include / Extend ---
UC_ApproveJob ..> UC_Decision : <<include>>

@enduml
```

---

## Hướng dẫn sử dụng

1. **Online**: Copy đoạn code và paste vào [PlantUML Online Server](https://www.plantuml.com/plantuml/uml/) để xem ngay.
2. **VS Code**: Cài extension "PlantUML" và nhấn `Alt+D` để preview.
3. **Export**: Xuất ra file PNG/SVG để chèn vào báo cáo Word.
