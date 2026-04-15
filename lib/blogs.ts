export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  category: string;
  tags: string[];
  isPublished: boolean;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Kỹ Năng Quan Trọng Nhất Để Thành Công Trong Sự Nghiệp Năm 2024",
    slug: "5-ky-nang-quan-trong-nhat-2024",
    excerpt: "Khám phá 5 kỹ năng mà mọi nhà tuyển dụng đang tìm kiếm ở ứng viên trong năm 2024. Từ kỹ năng AI đến khả năng lãnh đạo.",
    content: `<h2>Tại Sao Kỹ Năng Quan Trọng Trong Năm 2024?</h2>
<p>Thị trường lao động năm 2024 đang thay đổi nhanh chóng với sự phát triển của trí tuệ nhân tạo và tự động hóa. Để tồn tại và phát triển trong môi trường này, bạn cần trang bị những kỹ năng phù hợp.</p>

<h2>1. Kỹ Năng AI và Data Literacy</h2>
<p>Không cần phải trở thành một nhà khoa học dữ liệu, nhưng việc hiểu cách sử dụng các công cụ AI như ChatGPT, Claude hay các công cụ tự động hóa là rất quan trọng. Theo khảo sát của LinkedIn, 75% nhà tuyển dụng cho biết họ ưu tiên ứng viên có khả năng làm việc với AI.</p>

<h3>Mẹo để phát triển:</h3>
<ul>
<li>Tham gia các khóa học AI cơ bản trên Coursera hoặc edX</li>
<li>Thực hành sử dụng các công cụ AI trong công việc hàng ngày</li>
<li>Tìm hiểu cách tích hợp AI vào quy trình làm việc của bạn</li>
</ul>

<h2>2. Tư Duy Phản Biện và Giải Quyết Vấn Đề</h2>
<p>Trong thời đại mà máy móc có thể làm nhiều công việc lặp đi lặp lại, khả năng tư duy phản biện và giải quyết vấn đề phức tạp trở nên quan trọng hơn bao giờ hết. Nhà tuyển dụng tìm kiếm những người có thể:</p>
<ul>
<li>Phân tích vấn đề từ nhiều góc độ</li>
<li>Đưa ra quyết định dựa trên dữ liệu</li>
<li>Sáng tạo trong việc tìm giải pháp</li>
</ul>

<h2>3. Kỹ Năng Giao Tiếp và Thuyết Trình</h2>
<p>Dù công nghệ có phát triển đến đâu, kỹ năng giao tiếp vẫn là yếu tố then chốt. Khả năng trình bày ý tưởng một cách rõ ràng, thuyết phục và lắng nghe hiệu quả là điều không thể thay thế bằng máy móc.</p>

<h2>4. Khả Năng Thích Ứng và Học Tập Liên Tục</h2>
<p>Với tốc độ thay đổi công nghệ hiện nay, kỹ năng bạn có hôm nay có thể lỗi thời trong 2-3 năm tới. Hãy trở thành người học liên tục, luôn cập nhật xu hướng mới và sẵn sàng thay đổi.</p>

<h2>5. Kỹ Năng Quản Lý Dự Án</h2>
<p>Khả năng quản lý dự án, tổ chức công việc và đảm bảo tiến độ là kỹ năng được nhiều nhà tuyển dụng tìm kiếm. Các công cụ như Jira, Trello, Asana đã trở thành tiêu chuẩn trong nhiều ngành.</p>

<h2>Kết Luận</h2>
<p>Đầu tư vào việc phát triển những kỹ năng này không chỉ giúp bạn tìm được công việc tốt hơn mà còn xây dựng nền tảng vững chắc cho sự nghiệp dài hạn. Hãy bắt đầu từ hôm nay!</p>`,
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    author: "Nguyễn Thị Hương",
    category: "career",
    tags: ["kỹ năng", "sự nghiệp", "2024", "phát triển"],
    isPublished: true,
    viewCount: 1250,
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    title: "Hướng Dẫn Chi Tiết Cách Trả Lời Câu Hỏi 'Hãy Kể Về Bản Thân Bạn'",
    slug: "huong-dan-tra-loi-gioi-thieu-ban-than",
    excerpt: "Câu hỏi phỏng vấn kinh điển này thường là bước đầu tiên quyết định ấn tượng của nhà tuyển dụng. Học cách trả lời thông minh và ấn tượng.",
    content: `<h2>Tại Sao Câu Hỏi Này Quan Trọng?</h2>
<p>"Hãy kể về bản thân bạn" là câu hỏi mở đầu phổ biến nhất trong các buổi phỏng vấn. Nhà tuyển dụng sử dụng câu trả lời này để:</p>
<ul>
<li>Đánh giá khả năng giao tiếp của bạn</li>
<li>Xem bạn có phù hợp với văn hóa công ty không</li>
<li>Hiểu điểm mạnh và định hướng của bạn</li>
</ul>

<h2>Cấu Trúc Trả Lời Hiệu Quả</h2>
<h3>1. Mở Đầu (30 giây)</h3>
<p>Bắt đầu với thông tin cơ bản: tên, vị trí hiện tại hoặc gần nhất, và một câu tóm tắt về chuyên môn của bạn.</p>

<p><em>Ví dụ:</em> "Tôi là Nguyễn Văn A, hiện là Kỹ sư phần mềm tại Công ty XYZ với 5 năm kinh nghiệm trong lĩnh vực phát triển web."</p>

<h3>2. Quá Khứ - Hiện Tại - Tương Lai (1-2 phút)</h3>
<p> Chia sẻ hành trình nghề nghiệp một cách logic:</p>
<ul>
<li><strong>Quá khứ:</strong> Bạn bắt đầu như thế nào, học vấn, kinh nghiệm đầu tiên</li>
<li><strong>Hiện tại:</strong> Bạn đang làm gì, đạt được thành tựu gì</li>
<li><strong>Tương lai:</strong> Mục tiêu nghề nghiệp và lý do ứng tuyển</li>
</ul>

<h3>3. Kết Thúc (30 giây)</h3>
<p>Nêu rõ lý do bạn quan tâm đến vị trí này và công ty này. Điều này cho thấy bạn đã nghiên cứu và thực sự quan tâm.</p>

<h2>Những Điều Nên Tránh</h2>
<ul>
<li>Không kể chi tiết cuộc sống cá nhân không liên quan</li>
<li>Không đọc thuộc lòng CV</li>
<li>Không nói dối hoặc thổi phồng</li>
<li>Không nói quá dài (giữ dưới 2 phút)</li>
</ul>

<h2>Mẹo Để Tạo Ấn Tượng</h2>
<ol>
<li><strong>Chuẩn bị kỹ:</strong> Luyện tập trước gương hoặc với bạn bè</li>
<li><strong>Tùy biến theo vị trí:</strong> Điều chỉnh nội dung phù hợp với job description</li>
<li><strong>Sử dụng con số:</strong> Đưa ra thành tựu cụ thể đo được</li>
<li><strong>Thể hiện đam mê:</strong> Cho thấy bạn yêu thích ngành nghề</li>
</ol>

<h2>Kết Luận</h2>
<p>Câu trả lời cho "Hãy kể về bản thân bạn" là cơ hội để bạn định hình ấn tượng đầu tiên. Hãy chuẩn bị kỹ và trả lời một cách tự tin, chân thực!</p>`,
    coverImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800",
    author: "Trần Thị Mai",
    category: "interview",
    tags: ["phỏng vấn", "giới thiệu bản thân", "mẹo", "hướng dẫn"],
    isPublished: true,
    viewCount: 2340,
    createdAt: "2024-01-20T10:00:00Z",
    updatedAt: "2024-01-20T10:00:00Z",
  },
  {
    id: "3",
    title: "Bảng Lương Ngành Công Nghệ Thông Tin 2024 - Cập Nhật Mới Nhất",
    slug: "bang-luong-nganh-cntt-2024",
    excerpt: "Cập nhật mức lương mới nhất cho các vị trí trong ngành CNTT tại Việt Nam. Từ Junior đến Senior, từ Developer đến Manager.",
    content: `<h2>Tổng Quan Thị Trường CNTT 2024</h2>
<p>Ngành Công nghệ Thông tin tiếp tục là một trong những ngành có nhu cầu tuyển dụng cao nhất tại Việt Nam. Với sự phát triển của AI, Cloud Computing và Cybersecurity, mức lương trong ngành này vẫn đang tăng trưởng ổn định.</p>

<h2>Mức Lương Theo Vị Trí</h2>

<h3>1. Lập Trình Viên (Developer)</h3>
<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
<tr><th>Vị trí</th><th>Mức lương (VND/tháng)</th></tr>
<tr><td>Junior Developer (0-2 năm)</td><td>8 - 15 triệu</td></tr>
<tr><td>Mid-level Developer (2-4 năm)</td><td>15 - 25 triệu</td></tr>
<tr><td>Senior Developer (4-6 năm)</td><td>25 - 40 triệu</td></tr>
<tr><td>Lead/Principal Developer (6+ năm)</td><td>40 - 70 triệu</td></tr>
</table>

<h3>2. Data & AI</h3>
<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
<tr><th>Vị trí</th><th>Mức lương (VND/tháng)</th></tr>
<tr><td>Data Analyst</td><td>12 - 20 triệu</td></tr>
<tr><td>Data Scientist</td><td>20 - 35 triệu</td></tr>
<tr><td>Machine Learning Engineer</td><td>25 - 45 triệu</td></tr>
<tr><td>AI Specialist</td><td>30 - 60 triệu</td></tr>
</table>

<h3>3. DevOps & Cloud</h3>
<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
<tr><th>Vị trí</th><th>Mức lương (VND/tháng)</th></tr>
<tr><td>DevOps Engineer</td><td>20 - 35 triệu</td></tr>
<tr><td>Cloud Architect</td><td>35 - 60 triệu</td></tr>
<tr><td>SRE (Site Reliability Engineer)</td><td>25 - 45 triệu</td></tr>
</table>

<h3>4. Security</h3>
<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
<tr><th>Vị trí</th><th>Mức lương (VND/tháng)</th></tr>
<tr><td>Security Engineer</td><td>20 - 35 triệu</td></tr>
<tr><td>Penetration Tester</td><td>25 - 45 triệu</td></tr>
<tr><td>Security Architect</td><td>40 - 80 triệu</td></tr>
</table>

<h2>Các Yếu Tố Ảnh Hưởng Đến Lương</h2>
<ul>
<li><strong>Kỹ năng kỹ thuật:</strong> Ngôn ngữ lập trình, framework, certifications</li>
<li><strong>Kinh nghiệm:</strong> Số năm kinh nghiệm và dự án đã làm</li>
<li><strong>Quy mô công ty:</strong> Startup, SME, hay Big Tech</li>
<li><strong>Địa điểm:</strong> Hà Nội, TP.HCM thường cao hơn các tỉnh</li>
<li><strong>Ngôn ngữ:</strong> Tiếng Anh tốt là lợi thế lớn</li>
</ul>

<h2>Mẹo Đàm Phán Lương</h2>
<ol>
<li><strong>Nghiên cứu thị trường:</strong> Tìm hiểu mức lương phổ biến cho vị trí tương đương</li>
<li><strong>Chuẩn bị portfolio:</strong> Showreel, GitHub, các dự án cá nhân</li>
<li><strong>Đàm phán toàn diện:</strong> Bao gồm bonus, stock options, benefits</li>
<li><strong>Tự tin nhưng linh hoạt:</strong> Biết giá trị của mình nhưng cũng mở cho thỏa luận</li>
</ol>

<h2>Kết Luận</h2>
<p>Mức lương trong ngành CNTT vẫn đang ở mức hấp dẫn so với nhiều ngành khác. Tuy nhiên, để đạt được mức lương cao, bạn cần không ngừng học hỏi và nâng cao kỹ năng.</p>`,
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    author: "Phạm Minh Đức",
    category: "salary",
    tags: ["lương", "CNTT", "2024", "thị trường"],
    isPublished: true,
    viewCount: 3420,
    createdAt: "2024-01-25T10:00:00Z",
    updatedAt: "2024-01-25T10:00:00Z",
  },
  {
    id: "4",
    title: "Cách Viết CV Xin Việc Đạt Tỷ Lệ Phỏng Vấn 90%",
    slug: "cach-viet-cv-xin-viec-hieu-qua",
    excerpt: "Hướng dẫn chi tiết cách viết CV ấn tượng giúp bạn vượt qua ATS và thu hút sự chú ý của nhà tuyển dụng ngay lần đầu.",
    content: `<h2>Tại Sao CV Quan Trọng?</h2>
<p>CV là bộ mặt của bạn trong mắt nhà tuyển dụng. Trung bình, một nhà tuyển dụng dành chỉ 6 giây để quét qua một CV. Nếu CV của bạn không nổi bật trong 6 giây đó, cơ hội phỏng vấn sẽ giảm đáng kể.</p>

<h2>Cấu Trúc CV Hoàn Hảo</h2>

<h3>1. Thông Tin Cá Nhân (Header)</h3>
<p>Đặt ở đầu trang với thông tin cần thiết:</p>
<ul>
<li>Họ và tên (font size lớn, đậm)</li>
<li>Email và số điện thoại</li>
<li>Liên kết LinkedIn (nếu có)</li>
<li>Portfolio/GitHub (cho ngành kỹ thuật)</li>
<li>Địa chỉ (không cần chi tiết quá)</li>
</ul>

<h3>2. Tóm Tắt Chuyên Môn (Summary)</h3>
<p>3-4 câu ngắn gọn về:</p>
<ul>
<li>Kinh nghiệm chính của bạn</li>
<li>Điểm mạnh nổi bật</li>
<li>Mục tiêu nghề nghiệp</li>
</ul>

<p><em>Ví dụ:</em> "Kỹ sư phần mềm với 5 năm kinh nghiệm phát triển ứng dụng web. Chuyên môn về React, Node.js và Cloud Architecture. Đã dẫn dắt team 8 người hoàn thành dự án enterprise."</p>

<h3>3. Kinh Nghiệm Làm Việc</h3>
<p>Sử dụng công thức STAR:</p>
<ul>
<li><strong>S</strong>ituation: Bối cảnh</li>
<li><strong>T</strong>ask: Nhiệm vụ của bạn</li>
<li><strong>A</strong>ction: Hành động bạn đã làm</li>
<li><strong>R</strong>esult: Kết quả đạt được (có số liệu cụ thể)</li>
</ul>

<h3>4. Kỹ Năng</h3>
<p>Chia thành 2 phần:</p>
<ul>
<li><strong>Kỹ năng kỹ thuật:</strong> Ngôn ngữ lập trình, công cụ, framework</li>
<li><strong>Kỹ năng mềm:</strong> Giao tiếp, lãnh đạo, làm việc nhóm</li>
</ul>

<h3>5. Học Vấn</h3>
<p>Liệt kê theo thứ tự thời gian ngược. Không cần quá chi tiết nếu bạn đã có kinh nghiệm.</p>

<h2>Những Lỗi Cần Tránh</h2>
<ul>
<li>CV quá dài (giữ 1-2 trang)</li>
<li>Sử dụng template quá cầu kỳ</li>
<li>Đánh máy sai chính tả</li>
<li>Thông tin không liên quan</li>
<li>Không có action verbs</li>
<li>Copy job description</li>
</ul>

<h2>Mẹo Vượt Qua ATS</h2>
<p>Applicant Tracking System (Hệ thống theo dõi ứng viên) được nhiều công ty sử dụng để lọc CV tự động:</p>
<ol>
<li>Sử dụng từ khóa từ job description</li>
<li>Tránh sử dụng bảng, cột phức tạp</li>
<li>Không đặt thông tin trong header/footer</li>
<li>Sử dụng font chuẩn (Arial, Calibri)</li>
</ol>

<h2>Kết Luận</h2>
<p>Một CV tốt là CV được cá nhân hóa cho từng vị trí ứng tuyển. Hãy dành thời gian để tạo CV hoàn hảo và bạn sẽ thấy sự khác biệt trong số lượng phỏng vấn nhận được.</p>`,
    coverImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800",
    author: "Lê Thị Hồng Nhung",
    category: "career",
    tags: ["CV", "xin việc", "hướng dẫn", "tìm việc"],
    isPublished: true,
    viewCount: 4560,
    createdAt: "2024-02-01T10:00:00Z",
    updatedAt: "2024-02-01T10:00:00Z",
  },
  {
    id: "5",
    title: "10 Câu Hỏi Phỏng Vấn Thường Gặp Và Cách Trả Lời Chuyên Nghiệp",
    slug: "10-cau-hoi-phong-van-thuong-gap",
    excerpt: "Tổng hợp 10 câu hỏi phỏng vấn phổ biến nhất và chiến lược trả lời thông minh để ghi điểm với nhà tuyển dụng.",
    content: `<h2>Giới Thiệu</h2>
<p>Trong mỗi buổi phỏng vấn, có những câu hỏi xuất hiện gần như bắt buộc. Việc chuẩn bị kỹ trước cho những câu hỏi này sẽ giúp bạn tự tin hơn và tạo ấn tượng tốt với nhà tuyển dụng.</p>

<h2>1. Điểm Mạnh Của Bạn Là Gì?</h2>
<p><strong>Cách trả lời:</strong> Chọn 2-3 điểm mạnh liên quan trực tiếp đến vị trí ứng tuyển. Kèm theo ví dụ cụ thể.</p>
<p><em>Tránh:</em> Nói quá chung chung hoặc không có bằng chứng.</p>

<h2>2. Điểm Yếu Của Bạn Là Gì?</h2>
<p><strong>Cách trả lời:</strong> Chọn điểm yếu thực tế nhưng đang cải thiện. Quan trọng là cho thấy bạn đang nỗ lực khắc phục.</p>
<p><em>Ví dụ:</em> "Tôi đôi khi thiếu kiên nhẫn khi làm việc với deadline gấp, nhưng tôi đã học cách quản lý thời gian tốt hơn."</p>

<h2>3. Tại Sao Bạn Muốn Làm Việc Tại Đây?</h2>
<p><strong>Cách trả lời:</strong> Thể hiện sự nghiên cứu về công ty. Nói về giá trị phù hợp, văn hóa công ty, hoặc cơ hội phát triển.</p>
<p><em>Tránh:</em> Nói chỉ vì lương cao hoặc cần việc.</p>

<h2>4. Bạn Có Thể Mang Lại Điều Gì Cho Công Ty?</h2>
<p><strong>Cách trả lời:</strong> Kết hợp kỹ năng và kinh nghiệm của bạn với nhu cầu của công ty.</p>

<h2>5. Bạn Làm Việc Như Thế Nào Dưới Áp Lực?</h2>
<p><strong>Cách trả lời:</strong> Kể một ví dụ cụ thể về cách bạn xử lý tình huống áp lực cao.</p>

<h2>6. Mục Tiêu Nghề Nghiệp Của Bạn Là Gì?</h2>
<p><strong>Cách trả lời:</strong> Chia thành ngắn hạn (1-3 năm) và dài hạn (3-5 năm). Đảm bảo phù hợp với hướng phát triển của công ty.</p>

<h2>7. Bạn Có Vấn Đề Gì Với Việc Làm Việc Ngoài Giờ?</h2>
<p><strong>Cách trả lời:</strong> Thể hiện sự linh hoạt nhưng cũng đặt ranh giới hợp lý.</p>

<h2>8. Mô Tả Một Dự Án Thành Công Của Bạn</h2>
<p><strong>Cách trả lời:</strong> Sử dụng phương pháp STAR. Nhấn mạnh vai trò của bạn và kết quả đo được.</p>

<h2>9. Bạn Có Câu Hỏi Gì Cho Chúng Tôi Không?</h2>
<p><strong>Cách trả lời:</strong> LUÔN LUÔN có câu hỏi! Hỏi về văn hóa, đội nhóm, thách thức hiện tại của công ty.</p>

<h2>10. Bạn Mong Muốn Mức Lương Bao Nhiêu?</h2>
<p><strong>Cách trả lời:</strong> Nghiên cứu trước và đưa ra range hợp lý. Có thể nói "tùy thuộc vào phúc lợi tổng thể".</p>

<h2>Kết Luận</h2>
<p>Việc chuẩn bị trước cho những câu hỏi này không có nghĩa là học thuộc lòng câu trả lời. Hãy hiểu bản chất và luyện tập để có thể trả lời tự nhiên, linh hoạt.</p>`,
    coverImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800",
    author: "Hoàng Minh Tuấn",
    category: "interview",
    tags: ["phỏng vấn", "câu hỏi", "mẹo", "chuẩn bị"],
    isPublished: true,
    viewCount: 3890,
    createdAt: "2024-02-10T10:00:00Z",
    updatedAt: "2024-02-10T10:00:00Z",
  },
  {
    id: "6",
    title: "Lương Ngành Marketing 2024: Xu Hướng Và Cơ Hội",
    slug: "luong-nganh-marketing-2024",
    excerpt: "Khám phá mức lương các vị trí trong ngành marketing tại Việt Nam. Từ Content Marketing đến Digital Marketing.",
    content: `<h2>Tổng Quan Ngành Marketing 2024</h2>
<p>Ngành marketing đang chuyển đổi số mạnh mẽ. Các vị trí liên quan đến Digital Marketing, Content Marketing và Data Marketing có mức lương cao hơn bao giờ hết.</p>

<h2>Mức Lương Theo Vị Trí</h2>

<h3>1. Content & Creative</h3>
<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
<tr><th>Vị trí</th><th>Mức lương (VND/tháng)</th></tr>
<tr><td>Content Writer/Editor</td><td>8 - 15 triệu</td></tr>
<tr><td>Content Manager</td><td>15 - 25 triệu</td></tr>
<tr><td>Creative Director</td><td>30 - 60 triệu</td></tr>
</table>

<h3>2. Digital Marketing</h3>
<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
<tr><th>Vị trí</th><th>Mức lương (VND/tháng)</th></tr>
<tr><td>SEO Specialist</td><td>10 - 18 triệu</td></tr>
<tr><td>PPC/Google Ads Specialist</td><td>12 - 22 triệu</td></tr>
<tr><td>Social Media Manager</td><td>15 - 28 triệu</td></tr>
<tr><td>Digital Marketing Manager</td><td>25 - 45 triệu</td></tr>
</table>

<h3>3. Data & Performance</h3>
<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
<tr><th>Vị trí</th><th>Mức lương (VND/tháng)</th></tr>
<tr><td>Marketing Analyst</td><td>12 - 20 triệu</td></tr>
<tr><td>Performance Marketing</td><td>15 - 28 triệu</td></tr>
<tr><td>Marketing Technologist</td><td>20 - 35 triệu</td></tr>
</table>

<h2>Kỹ Năng Giúp Tăng Lương</h2>
<ul>
<li>Marketing Automation (HubSpot, Marketo)</li>
<li>Google Analytics 4 & Data Studio</li>
<li>AI Tools cho Marketing</li>
<li>Performance Marketing & Attribution</li>
<li>SEO/SEM chuyên sâu</li>
</ul>

<h2>Kết Luận</h2>
<p>Ngành marketing rewards những người có kỹ năng data-driven và có khả năng adapt với xu hướng mới.</p>`,
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    author: "Nguyễn Thị Lan Anh",
    category: "salary",
    tags: ["marketing", "lương", "2024", "digital"],
    isPublished: true,
    viewCount: 2180,
    createdAt: "2024-02-15T10:00:00Z",
    updatedAt: "2024-02-15T10:00:00Z",
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getAllBlogs(): BlogPost[] {
  return blogPosts;
}

export function getRecentBlogs(limit: number = 3): BlogPost[] {
  return [...blogPosts].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, limit);
}

export function getPopularBlogs(limit: number = 3): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.viewCount - a.viewCount).slice(0, limit);
}
