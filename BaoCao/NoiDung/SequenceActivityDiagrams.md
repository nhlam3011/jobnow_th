# Mã PlantUML - Sơ đồ Tuần tự & Hoạt động hệ thống JobNow

---

## SD-01: Luồng Ứng tuyển việc làm

```plantuml
@startuml SD01_UngTuyen
skinparam sequenceArrowThickness 1.5
skinparam sequenceParticipantPadding 20
skinparam maxMessageSize 200
title SD-01: Luồng Ứng tuyển việc làm

actor "Ứng viên" as C
participant "Trang chi tiết\nviệc làm\n(/jobs/[slug])" as UI
participant "Server Action\napplyToJob()" as SA
participant "Auth\n(NextAuth)" as Auth
database "PostgreSQL\n(Prisma)" as DB

C -> UI : Nhấn "Ứng tuyển ngay"
UI -> UI : Mở form ứng tuyển\n(hiển thị danh sách CV/Resume)
C -> UI : Chọn CV hoặc Resume
C -> UI : (Tuỳ chọn) Nhập Cover Letter

alt Sử dụng AI tạo Cover Letter
    C -> UI : Nhấn "AI tạo Cover Letter"
    ref over UI : Xem SD-04
    UI --> C : Hiển thị Cover Letter\nđể xem trước & chỉnh sửa
end

C -> UI : Nhấn "Gửi hồ sơ"
UI -> SA : applyToJob(jobId, cvId,\nresumeId, coverLetter)
SA -> Auth : auth()
Auth --> SA : session (user, role)

alt Chưa đăng nhập hoặc không phải CANDIDATE
    SA --> UI : { error: "Bạn cần đăng nhập\nvới tư cách Ứng viên" }
    UI --> C : Thông báo lỗi
else Đã xác thực
    SA -> DB : findUnique(Application)\nwhere: { jobId_candidateId }
    
    alt Đã ứng tuyển trước đó
        DB --> SA : existing != null
        SA --> UI : { error: "Bạn đã ứng tuyển\nvị trí này rồi" }
        UI --> C : Thông báo lỗi
    else Chưa ứng tuyển
        DB --> SA : null
        SA -> DB : create(Application)\nstatus = "PENDING"
        DB --> SA : application (include job.postedById)
        
        SA -> DB : create(Notification)\ncho Nhà tuyển dụng\ntype = "NEW_APPLICATION"
        DB --> SA : notification
        
        SA -> SA : revalidatePath\n("/candidate/applications")
        SA --> UI : { success: true }
        UI --> C : Thông báo thành công
    end
end

@enduml
```

---

## SD-02a: Luồng Nạp tiền vào ví

```plantuml
@startuml SD02a_NapTien
skinparam sequenceArrowThickness 1.5
skinparam sequenceParticipantPadding 20
skinparam maxMessageSize 200
title SD-02a: Luồng Nạp tiền vào ví

actor "Nhà tuyển dụng" as E
participant "Trang Tài chính\n(/employer/billing)" as UI
participant "Server Action\ndepositMoney()" as SA
participant "Auth\n(NextAuth)" as Auth
database "PostgreSQL\n(Prisma)" as DB

E -> UI : Truy cập trang Quản lý tài chính
UI -> UI : Hiển thị số dư, tổng nạp,\ntổng chi, lịch sử giao dịch

E -> UI : Nhập số tiền cần nạp\nNhấn **"Nạp tiền"**
UI -> SA : depositMoney(amount)
SA -> Auth : auth()
Auth --> SA : session (user, role)

alt Chưa đăng nhập hoặc không phải EMPLOYER
    SA --> UI : { error: "Không có quyền truy cập" }
    UI --> E : Thông báo lỗi
else Đã xác thực
    SA -> DB : findUnique(EmployerProfile)\nselect: companyId
    DB --> SA : employer

    alt Chưa có công ty (companyId = null)
        SA --> UI : { error: "Chưa có cấu hình công ty" }
        UI --> E : Gợi ý tạo công ty trước
    else amount <= 0
        SA --> UI : { error: "Số tiền không hợp lệ" }
        UI --> E : Thông báo lỗi
    else Hợp lệ

        group prisma.$transaction() [Đảm bảo ACID]
            SA -> DB : company.update()\nbalance: { increment: amount }
            DB --> SA : company (balance mới)

            SA -> DB : transaction.create()\ntype = "DEPOSIT"\ndescription = "Nạp tiền vào ví điện tử"\nbalanceAfter = company.balance
            DB --> SA : transaction record
        end

        SA -> SA : revalidatePath\n("/employer/billing")
        SA --> UI : { success: true,\nbalance: số_dư_mới }
        UI --> E : Cập nhật giao diện\nvới số dư mới
    end
end

@enduml
```

---

## SD-02b: Luồng Mua gói VIP cho tin đăng

```plantuml
@startuml SD02b_MuaVIP
skinparam sequenceArrowThickness 1.5
skinparam sequenceParticipantPadding 20
skinparam maxMessageSize 200
title SD-02b: Luồng Mua gói VIP cho tin đăng

actor "Nhà tuyển dụng" as E
participant "Trang quản lý tin\n(/employer/jobs)" as UI
participant "Server Action\nupgradeJobToVip()" as SA
participant "Auth\n(NextAuth)" as Auth
database "PostgreSQL\n(Prisma)" as DB

E -> UI : Chọn tin muốn nâng cấp VIP
UI -> UI : Hiển thị danh sách gói VIP\n(isActive = true, orderBy: days ↑)
E -> UI : Chọn gói VIP\nNhấn **"Mua gói"**

UI -> SA : upgradeJobToVip(jobId, packageId)
SA -> Auth : auth()
Auth --> SA : session (user, role)

alt Chưa đăng nhập hoặc không phải EMPLOYER
    SA --> UI : { error: "Không có quyền truy cập" }
else Đã xác thực
    SA -> DB : findUnique(EmployerProfile)\nselect: companyId
    DB --> SA : employer

    alt Chưa có công ty
        SA --> UI : { error: "Chưa cấu hình công ty" }
    else Có công ty
        SA -> DB : findUnique(VipPackage)\nwhere: { id: packageId }
        DB --> SA : pkg (name, price, days, isActive)

        alt Gói VIP không tồn tại hoặc isActive = false
            SA --> UI : { error: "Gói VIP không tồn tại\nhoặc đã bị khóa" }
        else Gói hợp lệ

            group prisma.$transaction() [Đảm bảo ACID]
                SA -> DB : findUnique(Company)\nwhere: { id: companyId }
                DB --> SA : company (balance)

                alt balance < price
                    SA -> SA : throw "INSUFFICIENT_FUNDS"
                    note right: Rollback toàn bộ transaction
                else balance >= price
                    SA -> DB : findUnique(Job)\nwhere: { id: jobId }
                    DB --> SA : job

                    alt Job không tồn tại hoặc\nkhông thuộc công ty
                        SA -> SA : throw "JOB_NOT_FOUND"
                    else Job hợp lệ
                        SA -> DB : company.update()\nbalance: { decrement: price }
                        DB --> SA : updatedCompany

                        SA -> DB : job.update()\nisVip = true\nvipUntil = now() + days
                        DB --> SA : job updated

                        SA -> DB : transaction.create()\ntype = "DEDUCTION"\ndescription = "Thanh toán\n[Tên gói] - [Tên tin]"\nbalanceAfter = updatedCompany.balance
                        DB --> SA : transaction record
                    end
                end
            end

            SA -> SA : revalidatePath\n("/employer/jobs",\n"/employer/billing")
            SA --> UI : { success: true }
            UI --> E : Tin đăng hiển thị badge VIP\nvà ưu tiên trên trang tìm kiếm
        end
    end
end

@enduml
```




## SD-03: Luồng AI Smart Matching

```plantuml
@startuml SD03_AIMatching
skinparam sequenceArrowThickness 1.5
skinparam sequenceParticipantPadding 20
skinparam maxMessageSize 200
title SD-03: Luồng AI Smart Matching (Tính điểm Match Score)

actor "Người dùng" as User
participant "Trang chi tiết\nviệc làm" as UI
participant "Server Action\ncalculateMatchData()" as SA
participant "Auth" as Auth
database "PostgreSQL\n(Prisma + pgvector)" as DB

User -> UI : Xem chi tiết công việc
UI -> SA : calculateMatchData(jobId)
SA -> Auth : auth()
Auth --> SA : session (userId)

SA -> DB : findUnique(CandidateProfile)\nwhere: { userId }
DB --> SA : profile (skills, yearsExp,\ndesiredSalary, location)

alt Profile không tồn tại
    SA --> UI : { status: "PROFILE_INCOMPLETE" }
    UI --> User : Gợi ý cập nhật hồ sơ
else Profile tồn tại
    SA -> DB : findUnique(Job)\nwhere: { id: jobId }
    DB --> SA : job (skills, salary,\nexperienceYears, location)

    == Bước 1: Tính AI Similarity (pgvector) ==
    SA -> DB : $queryRaw:\n1 - (job.embedding <=> cp.embedding)\nAS similarity
    note right of DB
        Toán tử <=> tính
        Cosine Distance
        giữa 2 vector embedding
    end note
    DB --> SA : similarity (0.0 ~ 1.0)
    SA -> SA : aiScore = round(similarity * 100)

    == Bước 2: Tính các yếu tố bổ sung (JavaScript) ==
    SA -> SA : skillScore = commonSkills / totalSkills * 100
    SA -> SA : salaryScore (so sánh desiredSalary\nvới salaryMax)
    SA -> SA : expScore (so sánh yearsExp\nvới experienceYears)
    SA -> SA : locationScore (so sánh\nlocation ứng viên vs công việc)

    == Bước 3: Tính điểm tổng hợp ==
    SA -> SA : compositeScore =\naiScore*0.4 + skillScore*0.2 +\nsalaryScore*0.2 + expScore*0.1 +\nlocationScore*0.1

    SA --> UI : { status: "SUCCESS",\nscore: compositeScore,\nfactors: [...] }
    UI --> User : Hiển thị Match Score\nvà chi tiết từng yếu tố
end

@enduml
```

---

## SD-04: Luồng tạo Cover Letter bằng AI

```plantuml
@startuml SD04_CoverLetter
skinparam sequenceArrowThickness 1.5
skinparam sequenceParticipantPadding 20
skinparam maxMessageSize 200
title SD-04: Luồng tạo Cover Letter bằng AI

actor "Ứng viên" as C
participant "Form Ứng tuyển\n(Client)" as UI
participant "Server Action\ngenerateCoverLetter()" as SA
participant "Gemini Module\n(lib/gemini.ts)" as Gemini
participant "Google Gemini API\n(gemini-1.5-flash)" as API
participant "Auth" as Auth
database "PostgreSQL\n(Prisma)" as DB

C -> UI : Nhấn "AI tạo Cover Letter"
UI -> SA : generateCoverLetter(jobId)
SA -> Auth : auth()
Auth --> SA : session

alt Chưa đăng nhập
    SA --> UI : { error: "Vui lòng đăng nhập" }
else Đã xác thực
    SA -> DB : findUnique(Job)\ninclude: company
    DB --> SA : job (title, description,\nrequirements, company.name)
    
    SA -> DB : findUnique(CandidateProfile)\nwhere: { userId }
    DB --> SA : profile (skills, yearsExp, bio)
    
    SA -> DB : findUnique(User)\nwhere: { id: userId }
    DB --> SA : user (name)

    alt Profile chưa có
        SA --> UI : { error: "Vui lòng cập nhật\nhồ sơ trước" }
    else Đủ dữ liệu
        SA -> SA : Xây dựng prompt:\n- Thông tin ứng viên\n(tên, kỹ năng, kinh nghiệm)\n- Thông tin công việc\n(tiêu đề, mô tả, yêu cầu)\n- Yêu cầu: 300-400 từ,\nchuyên nghiệp, tiếng Việt
        
        SA -> Gemini : generateStructuredText(\nprompt, systemInstruction)
        Gemini -> API : generateContent(contents)
        note right of API
            Model: gemini-1.5-flash
            System: "Chuyên gia HR"
        end note
        API --> Gemini : response.text()
        Gemini --> SA : coverLetter (string)
        
        SA --> UI : { success: true,\ncoverLetter: "...",\njob: { title, company } }
        UI --> C : Hiển thị Cover Letter\ntrong textarea để\nxem trước & chỉnh sửa
    end
end

@enduml
```

---

## AD-01: Quy trình Đăng tin tuyển dụng

```plantuml
@startuml AD01_DangTin
skinparam activityFontSize 11
title AD-01: Quy trình Đăng tin tuyển dụng

|Nhà tuyển dụng|
start
:Truy cập trang "Đăng tin mới"\n(/employer/jobs/new);

|Hệ thống|
:Kiểm tra session\n(auth());

if (Đã đăng nhập\nvới vai trò EMPLOYER?) then (Không)
    :Chuyển hướng về\ntrang đăng nhập;
    stop
else (Có)
endif

:Tìm EmployerProfile\nvà kiểm tra companyId;

if (Đã có công ty?) then (Không)
    :Hiển thị lỗi:\n"Vui lòng cập nhật\ntrang Công ty trước";
    stop
else (Có)
endif

|Nhà tuyển dụng|
:Điền form đăng tin:\n- Tiêu đề, Mô tả (Rich Text)\n- Yêu cầu, Phúc lợi\n- Tỉnh/TP, Loại hình\n- Mức lương, Kỹ năng\n- Ngành nghề, Tuổi, Kinh nghiệm;

:Nhấn **"Đăng tin"**;

|Hệ thống|
:Gọi createJob(formData);
:Tạo slug từ tiêu đề\n(slugify + timestamp);
:Lưu Job vào CSDL\nstatus = "PENDING";

fork
    :Gọi generateJobEmbedding(jobId);
    
    if (Tạo embedding\nthành công?) then (Có)
        :Lưu vector vào\ntrường embedding;
    else (Không)
        :Ghi log lỗi\n(tin vẫn được tạo);
    endif
fork again
    :revalidatePath\n("/employer/jobs", "/jobs");
end fork

:Chuyển hướng về\ntrang quản lý tin\n(/employer/jobs);

|Quản trị viên (Admin)|
:Truy cập trang kiểm duyệt\n(/admin/jobs);
:Xem danh sách tin PENDING;
:Chọn tin để kiểm duyệt;

if (Phê duyệt?) then (Duyệt)
    |Hệ thống|
    :updateJobStatus(jobId, "ACTIVE");
    :Tái tạo embedding\n(generateJobEmbedding);
    :Tạo Notification cho Employer:\n"Tin [tên] đã được duyệt";
    :Tin hiển thị công khai\n(VIP được ưu tiên);
else (Từ chối)
    |Hệ thống|
    :updateJobStatus(jobId, "REJECTED");
    :Tạo Notification cho Employer:\n"Tin [tên] đã bị từ chối";
    |Nhà tuyển dụng|
    :Nhận thông báo\nCó thể chỉnh sửa\nvà gửi lại;
endif

stop

@enduml
```

---

## AD-02: Quy trình Ứng tuyển đầy đủ

```plantuml
@startuml AD02_UngTuyen
skinparam activityFontSize 11
title AD-02: Quy trình Ứng tuyển việc làm

|Ứng viên|
start
:Tìm kiếm việc làm\n(/jobs);
:Xem chi tiết công việc\n(/jobs/[slug]);

|Hệ thống|
:Hiển thị thông tin công việc:\ntiêu đề, mô tả, yêu cầu,\nphúc lợi, mức lương, công ty;

|Ứng viên|
:Nhấn **"Ứng tuyển ngay"**;

|Hệ thống|
:Kiểm tra session (auth());

if (Đã đăng nhập\nlà CANDIDATE?) then (Không)
    :Hiển thị thông báo:\n"Bạn cần đăng nhập\nvới tư cách Ứng viên";
    stop
else (Có)
endif

:Kiểm tra trùng lặp\n(jobId_candidateId);

if (Đã ứng tuyển\ntrước đó?) then (Có)
    :Thông báo:\n"Bạn đã ứng tuyển\nvị trí này rồi";
    stop
else (Chưa)
endif

:Mở form ứng tuyển\nHiển thị danh sách\nCV và Resume;

|Ứng viên|
:Chọn CV (từ CV Builder)\nhoặc Resume (file PDF);

if (Muốn AI tạo\nCover Letter?) then (Có)
    |Hệ thống|
    :Gọi generateCoverLetter(jobId);
    :Lấy thông tin ứng viên\n(tên, kỹ năng, kinh nghiệm);
    :Lấy thông tin công việc\n(tiêu đề, mô tả, yêu cầu);
    :Xây dựng prompt\nvà gọi Gemini API;
    
    if (Tạo thành công?) then (Có)
        :Hiển thị Cover Letter\ntrong textarea;
        |Ứng viên|
        :Xem trước và\nchỉnh sửa (tuỳ chọn);
    else (Lỗi API)
        |Hệ thống|
        :Thông báo:\n"Tạo thư xin việc\nthất bại. Vui lòng\nthử lại";
        |Ứng viên|
        :Tự viết Cover Letter\nhoặc bỏ qua;
    endif
else (Không / Tự viết)
    |Ứng viên|
    :Tự viết Cover Letter\nhoặc bỏ qua;
endif

|Ứng viên|
:Nhấn **"Gửi hồ sơ"**;

|Hệ thống|
:Gọi applyToJob(jobId,\ncvId, resumeId, coverLetter);
:Tạo Application\nstatus = "PENDING";

:Tạo Notification\ncho Nhà tuyển dụng:\n"[Tên] vừa ứng tuyển\nvào [Tên công việc]";

:Thông báo thành công;

|Nhà tuyển dụng|
:Nhận thông báo\ntrong hệ thống;
:Xem danh sách ứng viên;
:Thay đổi trạng thái hồ sơ;

|Hệ thống|
:updateApplicationStatus()\nPENDING → REVIEWING →\nINTERVIEW → ACCEPTED/REJECTED;
:Tạo Notification cho Ứng viên\nvề trạng thái mới;

|Ứng viên|
:Theo dõi trạng thái\nhồ sơ ứng tuyển;

stop

@enduml
```

---

## AD-03a: Quy trình Nạp tiền vào ví

```plantuml
@startuml AD03a_NapTien
skinparam activityFontSize 11
title AD-03a: Quy trình Nạp tiền vào ví

|Nhà tuyển dụng|
start
:Truy cập trang quản lý tài chính\n(/employer/billing);
:Nhập số tiền cần nạp;
:Nhấn **"Nạp tiền"**;

|Hệ thống|
:Kiểm tra session (auth());

if (Đã đăng nhập\nlà EMPLOYER?) then (Không)
    :Lỗi: Không có quyền truy cập;
    stop
else (Có)
endif

:Tìm EmployerProfile\n→ companyId;

if (Có công ty?) then (Không)
    :Hiển thị lỗi:\n"Chưa cấu hình công ty";
    stop
else (Có)
endif

if (Số tiền > 0?) then (Không)
    :Hiển thị lỗi:\n"Số tiền không hợp lệ";
    stop
else (Có)
endif

:=== Bắt đầu Transaction (ACID) ===;

:Cộng tiền:\ncompany.balance += amount;

:Tạo Transaction record:\ntype = "DEPOSIT"\ndescription = "Nạp tiền vào ví điện tử"\nbalanceAfter = số dư mới;

:=== Commit Transaction ===;

:revalidatePath\n("/employer/billing");

:Thông báo thành công;

|Nhà tuyển dụng|
:Giao diện cập nhật\nsố dư mới;

stop

@enduml
```

---

## AD-03b: Quy trình Mua gói VIP cho tin đăng

```plantuml
@startuml AD03b_NangCapVIP
skinparam activityFontSize 11
title AD-03b: Quy trình Mua gói VIP cho tin đăng

|Nhà tuyển dụng|
start
:Truy cập trang quản lý tin\n(/employer/jobs);
:Chọn tin muốn nâng cấp VIP;

|Hệ thống|
:Kiểm tra session (auth());

if (Đã đăng nhập\nlà EMPLOYER?) then (Không)
    :Từ chối truy cập;
    stop
else (Có)
endif

:Tìm EmployerProfile\n→ companyId;

if (Có công ty?) then (Không)
    :Hiển thị lỗi:\n"Chưa cấu hình công ty";
    stop
else (Có)
endif

:Lấy danh sách gói VIP\n(isActive = true)\nSắp xếp theo days ↑;

|Nhà tuyển dụng|
:Xem các gói VIP\n(tên, giá, số ngày);
:Chọn gói VIP mong muốn;
:Nhấn **"Mua gói"**;

|Hệ thống|
:Gọi upgradeJobToVip\n(jobId, packageId);
:Tìm VipPackage\n(price, days);

if (Gói VIP tồn tại\nvà isActive?) then (Không)
    :Lỗi: "Gói VIP không\ntồn tại hoặc đã bị khóa";
    stop
else (Có)
endif

:=== Bắt đầu Transaction (ACID) ===;

:Lấy thông tin Company\n(balance hiện tại);

if (balance >= price?) then (Không đủ)
    :Rollback Transaction;
    :Thông báo:\n"Số dư không đủ.\nVui lòng nạp thêm tiền";
    
    |Nhà tuyển dụng|
    :Chuyển sang luồng\nNạp tiền (AD-03a);
    stop
else (Đủ)
endif

:Lấy thông tin Job;

if (Job thuộc\ncông ty này?) then (Không)
    :Rollback Transaction;
    :Lỗi: "Không tìm thấy\ntin đăng";
    stop
else (Có)
endif

:Trừ tiền:\ncompany.balance -= price;

:Cập nhật tin:\njob.isVip = true\njob.vipUntil = now() + days;

:Tạo Transaction record:\ntype = "DEDUCTION"\ndescription = "Thanh toán\n[Tên gói] - [Tên tin]"\nbalanceAfter = số dư mới;

:=== Commit Transaction ===;

:revalidatePath\n("/employer/jobs",\n"/employer/billing");

:Thông báo thành công;

|Nhà tuyển dụng|
:Tin đăng hiển thị\nbadge VIP;

|Hệ thống|
note right
    **Lazy Expiration:**
    Mỗi khi gọi getJobs(),
    hệ thống tự động gỡ VIP
    cho các tin có
    vipUntil < now()
end note

stop

@enduml
```

---

## Hướng dẫn sử dụng

1. **Online**: Copy đoạn code PlantUML và paste vào [PlantUML Online Server](https://www.plantuml.com/plantuml/uml/) để xem ngay.
2. **VS Code**: Cài extension "PlantUML" và nhấn `Alt+D` để preview.
3. **Export**: Xuất ra file PNG/SVG để chèn vào báo cáo Word.
