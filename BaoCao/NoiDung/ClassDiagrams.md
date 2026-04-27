# Mã PlantUML - Sơ đồ Class hệ thống JobNow

---

## CD-01: Sơ đồ Class tổng thể

Chỉ gồm 12 bảng cốt lõi. Bỏ: Blog, Skill, SearchKeyword, Notification, SavedJob.

```plantuml
@startuml CD01_TongThe
skinparam classAttributeIconSize 0
skinparam classFontSize 10
hide empty methods

class User {
  email : String
  name : String
  role : UserRole
}

class CandidateProfile {
  skills : String[]
  education : Json
  experience : Json
  embedding : vector
}

class EmployerProfile {
  companyId : String
  position : String
}

class Company {
  name : String
  slug : String
  verified : Boolean
  balance : Int
}

class Job {
  title : String
  jobType : JobType
  status : JobStatus
  skills : String[]
  isVip : Boolean
  vipUntil : DateTime
  embedding : vector
}

class Application {
  status : ApplicationStatus
  matchScore : Float
  coverLetter : String
}

class Resume {
  fileName : String
  fileUrl : String
}

class CV {
  title : String
  content : Json
}

class Template {
  name : String
  category : String
  layoutConfig : Json
  styleConfig : Json
}

class Industry {
  name : String
  slug : String
}

class Transaction {
  amount : Int
  type : TransactionType
  balanceAfter : Int
}

class VipPackage {
  name : String
  days : Int
  price : Int
}

User "1" -- "0..1" CandidateProfile
User "1" -- "0..1" EmployerProfile
User "1" -- "*" Application
User "1" -- "*" Resume
User "1" -- "*" CV

Company "1" -- "*" EmployerProfile
Company "1" -- "*" Job
Company "1" -- "*" Transaction

Job "*" -- "0..1" Industry
Job "1" -- "*" Application
Application "*" -- "0..1" CV
Application "*" -- "0..1" Resume
CV "*" -- "1" Template

@enduml
```

---

## CD-02: Module Tuyển dụng

```plantuml
@startuml CD02_TuyenDung
skinparam classAttributeIconSize 0
hide empty methods
title Module Tuyển dụng

class Company {
  name : String
  verified : Boolean
}

class Job {
  title : String
  status : JobStatus
  isVip : Boolean
  embedding : vector
}

class Application {
  status : ApplicationStatus
  matchScore : Float
}

class User {
  name : String
  role : UserRole
}

class Industry {
  name : String
}

Company "1" -- "*" Job : posts >
Job "*" -- "0..1" Industry
Job "1" -- "*" Application
Application "*" -- "1" User

note right of Application : unique(jobId, candidateId)

@enduml
```

---

## CD-03: Module Hồ sơ & CV

```plantuml
@startuml CD03_HoSoCV
skinparam classAttributeIconSize 0
hide empty methods
title Module Hồ sơ & CV

class User {
  name : String
  role : UserRole
}

class CandidateProfile {
  skills : String[]
  education : Json
  experience : Json
  embedding : vector
}

class Resume {
  fileName : String
  fileUrl : String
}

class CV {
  title : String
  content : Json
}

class Template {
  name : String
  layoutConfig : Json
  styleConfig : Json
}

User "1" -- "0..1" CandidateProfile
User "1" -- "*" Resume
User "1" -- "*" CV
CV "*" -- "1" Template

@enduml
```

---

## CD-04: Module Tài chính

```plantuml
@startuml CD04_TaiChinh
skinparam classAttributeIconSize 0
hide empty methods
title Module Tài chính - Wallet & VIP

class Company {
  name : String
  balance : Int
}

class Job {
  title : String
  isVip : Boolean
  vipUntil : DateTime
}

class Transaction {
  amount : Int
  type : TransactionType
  balanceAfter : Int
}

class VipPackage {
  name : String
  days : Int
  price : Int
}

Company "1" -- "*" Job
Company "1" -- "*" Transaction
Job ..> VipPackage : upgraded by >

note right of Transaction : ACID: prisma.$transaction()

@enduml
```

---

## Hướng dẫn

1. Paste vào [PlantUML Online](https://www.plantuml.com/plantuml/uml/).
2. VS Code: Extension "PlantUML" → `Alt+D`.
3. Export PNG/SVG chèn vào Word.
