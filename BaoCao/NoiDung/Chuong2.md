# CHƯƠNG 2: CƠ SỞ LÝ THUYẾT

## 2.1. Tổng quan, nhu cầu bài toán

### 2.1.1. Bối cảnh thị trường tuyển dụng trực tuyến
Trong kỷ nguyên công nghiệp 4.0, thị trường lao động đã có những bước chuyển mình mạnh mẽ từ hình thức truyền thống sang môi trường số hóa. Các nền tảng kết nối việc làm (Job Board) không còn đơn thuần là những trang web liệt kê tin tuyển dụng mà đã trở thành những hệ sinh thái phức tạp. Sự bùng nổ của dữ liệu người dùng và nhu cầu tìm kiếm việc làm từ xa (Remote work) sau đại dịch đã thúc đẩy các doanh nghiệp phải tìm kiếm những giải pháp công nghệ có khả năng xử lý dữ liệu lớn và mang tính tương tác cao để kết nối với các ứng viên tiềm năng trên quy mô toàn cầu.

### 2.1.2. Thực trạng và thách thức
Mặc dù các nền tảng trực tuyến đã giúp việc đăng tin và ứng tuyển trở nên dễ dàng hơn, nhưng cả ứng viên và nhà tuyển dụng vẫn đang đối mặt với những rào cản lớn:
- **Đối với ứng viên**: 
    - Việc sàng lọc hàng ngàn công việc để tìm ra vị trí thực sự phù hợp với kỹ năng và kinh nghiệm cá nhân tốn rất nhiều thời gian.
    - Thiếu các công cụ hỗ trợ cá nhân hóa hồ sơ (như tự động viết Cover Letter phù hợp với từng JD cụ thể).
- **Đối với nhà tuyển dụng**:
    - Tình trạng hồ sơ "rác" (không đạt yêu cầu) gửi về quá nhiều gây quá tải cho bộ phận nhân sự.
    - Việc đánh giá thủ công mức độ phù hợp của một ứng viên dựa trên văn bản (CV) mang tính cảm tính và độ chính xác không cao.
- **Đối với quản lý hệ thống**:
    - Các website tuyển dụng hiện nay thường thiếu đi cơ chế thương mại hóa linh hoạt và tiện ích để nhà tuyển dụng có thể tự quản lý ngân sách và tối ưu hóa hiệu quả hiển thị của tin tuyển dụng.

### 2.1.3. Nhu cầu hệ thống thông minh
Đứng trước những thách thức đó, việc xây dựng một hệ thống tuyển dụng thông minh như JobNow là vô cùng cấp thiết, với các yêu cầu trọng tâm:
1. **AI Matching**: Khả năng chấm điểm mức độ phù hợp (Match Score) dựa trên thuật toán phân tích ngữ nghĩa giữa CV và JD, giúp giảm thiểu 80% thời gian sàng lọc hồ sơ.
2. **Tự động hóa hồ sơ**: Hỗ trợ ứng viên xây dựng CV chuyên nghiệp và tự động tạo thư xin việc bằng AI theo nội dung công việc thực tế.
3. **Quản lý tài chính (Wallet System)**: Cung cấp hệ thống ví điện tử và các gói tin VIP để doanh nghiệp có thể chủ động trong việc quảng bá hình ảnh và tin tuyển dụng.

## 2.2. Phương pháp hệ thống (Hướng đối tượng & UML)

### 2.2.1. Tổng quan về phân tích thiết kế hướng đối tượng (OOAD)
Phân tích và thiết kế hướng đối tượng (Object-Oriented Analysis and Design - OOAD) là phương pháp luận chủ đạo được áp dụng trong quá trình phát triển hệ thống JobNow. Phương pháp này tập trung vào việc mô hình hóa các thực thể trong thế giới thực thành các đối tượng (Objects) trong phần mềm. Bằng cách xác định rõ các lớp (Classes) như `User`, `Job`, `Company`, hệ thống có thể dễ dàng quản lý các trạng thái và hành vi riêng biệt, đảm bảo tính tái sử dụng và khả năng bảo trì cao trong tương lai.

### 2.2.2. Ngôn ngữ mô hình hóa thống nhất (UML)
UML (Unified Modeling Language) đóng vai trò là "ngôn ngữ chung" để đặc tả, trực quan hóa và xây dựng các thành phần của hệ thống phần mềm. Trong dự án JobNow, UML được sử dụng để:
- **Biểu diễn chức năng**: Sử dụng sơ đồ Use Case để làm rõ tương tác giữa các tác nhân (Candidate, Employer, Admin) và hệ thống.
- **Biểu diễn cấu trúc**: Sử dụng sơ đồ Class để mô tả cấu trúc dữ liệu và mối quan hệ giữa các thực thể (như quan hệ 1-n giữa Công ty và Việc làm).
- **Biểu diễn hành vi**: Sử dụng sơ đồ Sequence (Tuần tự) và Activity (Hoạt động) để mô hình hóa các luồng nghiệp vụ phức tạp như quy trình ứng tuyển và thanh toán tin VIP.

### 2.2.3. Áp dụng UML vào hệ thống JobNow
Việc áp dụng UML không chỉ dừng lại ở mức bản vẽ mà được ánh xạ trực tiếp vào cấu trúc mã nguồn:
- **Tính đóng gói**: Các logic nghiệp vụ về xử lý AI hay tính toán số dư ví được đóng gói trong các Service/Action riêng biệt.
- **Quản lý quan hệ**: Các mối quan hệ 1-1, 1-n trong sơ đồ Class được hiện thực hóa thông qua các định nghĩa Schema trong Prisma, đảm bảo tính toàn vẹn dữ liệu.
- **Logic tuần tự**: Các bước kiểm tra điều kiện (ví dụ: kiểm tra số dư trước khi mua gói VIP) được thiết kế chặt chẽ thông qua sơ đồ hành vi, giúp tránh các lỗi logic trong quá trình triển khai thực tế.

## 2.3. Technology stack

### 2.3.1. Framework Next.js 15/16 & React 19
Hệ thống sử dụng phiên bản mới nhất của Next.js và React để tận dụng các tính năng hiện đại:
- **App Router & Server Actions**: Tối ưu hóa việc xử lý dữ liệu từ phía server, loại bỏ nhu cầu về các API endpoints trung gian, giúp tăng tốc độ phản hồi và bảo mật dữ liệu.
- **Concurrent Rendering**: Tận dụng khả năng của React 19 để tối ưu hóa trải nghiệm người dùng, giúp giao diện luôn mượt mà ngay cả khi xử lý các tác vụ phức tạp.
- **Middleware & Edge Runtime**: Hỗ trợ xử lý xác thực và phân quyền ngay tại tầng Edge, đảm bảo tốc độ truy cập nhanh chóng từ mọi vị trí.

### 2.3.2. Prisma ORM & PostgreSQL (pgvector)
Hệ thống lưu trữ và truy vấn dữ liệu được thiết kế tối ưu cho các bài toán về AI và tài chính:
- **PostgreSQL**: Lựa chọn hàng đầu cho tính nhất quán và toàn vẹn dữ liệu (ACID), cực kỳ quan trọng cho hệ thống ví (Wallet) và giao dịch (Transaction).
- **Extension pgvector**: Điểm nhấn công nghệ cho phép hệ thống thực hiện tìm kiếm tương đồng vector trực tiếp trong cơ sở dữ liệu, phục vụ cho tính năng AI Smart Matching.
- **Prisma Client**: Cung cấp khả năng tự động tạo types cho toàn bộ cơ sở dữ liệu, giúp giảm thiểu lỗi runtime và tăng tốc độ phát triển.

### 2.3.3. Giao diện & Styling (Tailwind CSS 4 & Vanilla CSS)
Sự kết hợp giữa framework hiện đại và CSS thuần túy tạo nên trải nghiệm người dùng cao cấp:
- **Tailwind CSS 4**: Sử dụng engine CSS thế hệ mới nhất với hiệu năng vượt trội, hỗ trợ "Zero-runtime" và khả năng tùy biến cực cao thông qua các tiện ích (utilities) mà không cần viết file CSS rời.
- **CSS Variables & Themes**: Quản lý hệ thống màu sắc và font chữ tập trung, cho phép hệ thống chuyển đổi linh hoạt giữa các chế độ hiển thị mà vẫn đảm bảo tính nhất quán.
- **Micro-interactions**: Sử dụng CSS transitions và animations để tạo hiệu ứng phản hồi sinh động khi người dùng tương tác với các nút bấm, thẻ việc làm hoặc bảng điều khiển.

### 2.3.4. Các thư viện và công nghệ bổ trợ
Ngoài các công nghệ cốt lõi, JobNow còn tích hợp các thư viện chuyên dụng:
- **Auth.js (NextAuth)**: Hệ thống xác thực mạnh mẽ, hỗ trợ đăng nhập qua Email/Password và các nhà cung cấp OAuth, đảm bảo an toàn thông tin người dùng.
- **html2pdf.js & react-to-print**: Bộ công cụ cho phép chuyển đổi giao diện CV trực tuyến thành tệp tin PDF chất lượng cao, phục vụ nhu cầu tải hồ sơ của ứng viên.
- **React Quill**: Trình soạn thảo văn bản phong phú (Rich Text Editor) giúp nhà tuyển dụng dễ dàng định dạng mô tả công việc và ứng viên tạo nội dung CV đẹp mắt.
- **Zod**: Thư viện kiểm tra dữ liệu (Schema validation) giúp đảm bảo mọi thông tin nhập vào từ form đều chính xác và an toàn trước khi lưu vào cơ sở dữ liệu.

## 2.4. Ngôn ngữ AI (LLM) và tích hợp vào website

### 2.4.1. Google Gemini API
Google Gemini là mô hình ngôn ngữ lớn (LLM) đa phương thức mạnh mẽ được JobNow tích hợp để xử lý các tác vụ thông minh:
- **Xử lý ngôn ngữ tự nhiên (NLP)**: Gemini giúp hệ thống hiểu sâu sắc nội dung mô tả công việc (JD) và hồ sơ ứng viên (CV), thay vì chỉ dựa vào việc khớp các từ khóa đơn lẻ.
- **Tạo nội dung tự động**: Hỗ trợ ứng viên tạo thư xin việc (Cover Letter) cá nhân hóa dựa trên sự kết hợp giữa kỹ năng của họ và yêu cầu cụ thể của từng vị trí tuyển dụng.
- **Tối ưu hóa dữ liệu**: Tự động phân tích và trích xuất các kỹ năng, kinh nghiệm từ CV văn bản thô để đưa vào hệ thống một cách có cấu trúc.

### 2.4.2. Kỹ thuật Vector Embedding
Để máy tính có thể so sánh sự tương đồng giữa hai đoạn văn bản một cách logic, JobNow sử dụng kỹ thuật Vector Embedding:
- **Chuyển đổi dữ liệu**: Nội dung văn bản (JD hoặc CV) được đưa qua mô hình embedding của Google để chuyển đổi thành một chuỗi các con số (vector) trong không gian đa chiều. 
- **Ngữ nghĩa hóa**: Các văn bản có nội dung tương đồng về mặt ý nghĩa (ví dụ: "Lập trình viên React" và "Frontend Developer") sẽ có vị trí gần nhau trong không gian vector này, ngay cả khi chúng không dùng chung từ ngữ.

### 2.4.3. Tìm kiếm tương đồng với pgvector
Sau khi có dữ liệu vector, hệ thống sử dụng extension `pgvector` trên PostgreSQL để thực hiện các phép toán tìm kiếm:
- **Cosine Similarity**: Đây là thuật toán chính được sử dụng để tính toán khoảng cách giữa vector của ứng viên và vector của công việc. Kết quả trả về là một con số đại diện cho độ phù hợp (Match Score).
- **Hiệu năng cao**: pgvector cho phép hệ thống tìm kiếm và xếp hạng hàng ngàn hồ sơ ứng viên trong thời gian thực, giúp nhà tuyển dụng ngay lập tức thấy được những ứng viên tiềm năng nhất ở đầu danh sách.

## 2.5. Các nghiên cứu liên quan và ứng dụng vào website

### 2.5.1. Phân tích các nền tảng phổ biến (TopCV, LinkedIn)
Trong quá trình phát triển JobNow, chúng tôi đã tiến hành nghiên cứu và phân tích các mô hình thành công của các nền tảng tuyển dụng hàng đầu:
- **TopCV**: Một nền tảng dẫn đầu tại Việt Nam về công cụ tạo CV và kết nối việc làm. Điểm mạnh của TopCV là hệ sinh thái mẫu CV phong phú và khả năng tối ưu hóa SEO cho tin tuyển dụng. Tuy nhiên, việc kết nối thông minh giữa CV và JD vẫn chủ yếu dựa trên các tiêu chí lọc cơ bản.
- **LinkedIn**: Nền tảng mạng xã hội nghề nghiệp lớn nhất thế giới. LinkedIn mạnh về khả năng kết nối mạng lưới (Networking) và thuật toán gợi ý việc làm dựa trên lịch sử hoạt động của người dùng. Tuy nhiên, đối với các doanh nghiệp vừa và nhỏ, việc tiếp cận các gói dịch vụ cao cấp trên LinkedIn thường có chi phí rất cao.

### 2.5.2. Các tính năng đặc thù của JobNow
Kế thừa những ưu điểm và khắc phục những hạn chế của các nền tảng đi trước, JobNow tập trung vào các tính năng đặc thù mang lại giá trị thực tiễn cao:
- **Smart AI Matching sâu**: Khác với các bộ lọc thông thường, JobNow sử dụng AI để "đọc hiểu" thực sự năng lực ứng viên. Điều này giúp giảm thiểu sai số và mang lại những gợi ý việc làm/ứng viên có độ chính xác cao nhất ngay cả khi họ không dùng chung từ khóa.
- **Hệ thống ví điện tử (Wallet) tích hợp**: Cho phép nhà tuyển dụng chủ động quản lý ngân sách tuyển dụng thông qua việc nạp tiền và mua các dịch vụ đẩy tin VIP, xác thực công ty một cách nhanh chóng và minh bạch.
- **Công cụ hỗ trợ ứng viên toàn diện**: Từ trình tạo CV trực tuyến (CV Builder) đến công cụ tự động viết Cover Letter bằng AI, giúp ứng viên chuyên nghiệp hóa hồ sơ chỉ trong vài phút.

## 2.6. Đánh giá và kết luận chương 2

### 2.6.1. Tổng kết các nền tảng lý thuyết đã chọn
Thông qua việc nghiên cứu chi tiết trong Chương 2, hệ thống JobNow đã xác định được nền tảng lý thuyết và công nghệ vững chắc:
- **Phương pháp luận**: OOAD và UML giúp đảm bảo hệ thống được thiết kế logic, dễ dàng mở rộng và bảo trì.
- **Công nghệ cốt lõi**: Sự kết hợp giữa Next.js 15, Prisma và PostgreSQL tạo ra một nền tảng Web hiện đại, tối ưu về cả tốc độ (Performance) lẫn trải nghiệm người dùng (UX).
- **Trí tuệ nhân tạo**: Tận dụng Google Gemini và pgvector để giải quyết triệt để bài toán khớp lệnh thông minh dựa trên ngữ nghĩa văn bản.

### 2.6.2. Đánh giá khả năng ứng dụng thực tế vào dự án
Các nền tảng lý thuyết và công nghệ được lựa chọn không chỉ mang tính xu hướng mà còn có khả năng ứng dụng thực tiễn rất cao:
- **Tính khả thi**: Các công nghệ như Next.js và Prisma có cộng đồng hỗ trợ lớn và tài liệu phong phú, giúp quá trình triển khai diễn ra thuận lợi.
- **Tính đột phá**: Việc tích hợp AI LLM và Vector Search trực tiếp vào cơ sở dữ liệu tạo ra lợi thế cạnh tranh lớn, giúp JobNow trở nên khác biệt so với các website tuyển dụng truyền thống.
- **Định hướng phát triển**: Cấu trúc hệ thống linh hoạt cho phép dễ dàng tích hợp thêm các tính năng mới trong tương lai như AI Chatbot tư vấn nghề nghiệp hoặc hệ thống phân tích xu hướng thị trường lao động thời gian thực.

Kết thúc Chương 2, chúng ta đã có cái nhìn tổng quan và sâu sắc về các công cụ và lý thuyết cần thiết. Đây là tiền đề quan trọng để tiến hành phân tích chi tiết các chức năng và kiến trúc hệ thống trong Chương tiếp theo.






