import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcryptjs';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
    adapter,
    log: ['error', 'warn'],
});

// Password hash for "123456"
const hashedPassword = bcrypt.hashSync('123456', 10);

// Industry definitions
const industries = [
    'Công nghệ thông tin',
    'Kinh doanh / Marketing',
    'Tài chính / Ngân hàng',
    'Kế toán / Kiểm toán',
    'Nhân sự',
    'Kỹ thuật',
    'Sản xuất',
    'Y tế / Dược phẩm',
    'Giáo dục / Đào tạo',
    'Du lịch / Khách sạn',
    'Bất động sản',
    'Vận tải / Logistics',
    'Báo chí / Truyền thông',
    'Luật',
    'Thiết kế',
    'F&B / Nhà hàng',
];

// Skills by category
const skillsByCategory: Record<string, string[]> = {
    'Frontend': ['React', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Next.js'],
    'Backend': ['Node.js', 'Python', 'Java', 'Go', 'Ruby', 'PHP', 'C#', '.NET'],
    'Database': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL Server', 'Oracle'],
    'DevOps': ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'CI/CD', 'Linux'],
    'AI/ML': ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'Deep Learning', 'NLP'],
    'Mobile': ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS', 'Android'],
    'Data': ['SQL', 'Excel', 'Power BI', 'Tableau', 'Python', 'R', 'ETL'],
    'Design': ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'UI/UX', 'Sketch'],
    'Marketing': ['SEO', 'Content Marketing', 'Google Ads', 'Facebook Ads', 'Email Marketing', 'Analytics'],
    'Business': ['Excel', 'PowerPoint', 'Business Analysis', 'Project Management', 'Agile', 'Scrum'],
    'Finance': ['Excel', 'Financial Modeling', 'Accounting', 'Tax', 'Audit', 'SAP', 'Oracle Financials'],
    'HR': ['Recruitment', 'HRIS', 'Performance Management', 'Training', 'Labor Law'],
    'Sales': ['CRM', 'Salesforce', 'B2B Sales', 'Negotiation', 'Lead Generation'],
    'Engineering': ['CAD', 'SolidWorks', 'AutoCAD', 'MATLAB', 'Python', 'Simulation'],
    'Medical': ['Clinical Practice', 'Patient Care', 'Pharmaceutical', 'Medical Research', 'HIPAA'],
    'Education': ['Curriculum Development', 'Teaching', 'E-Learning', 'Instructional Design'],
    'Legal': ['Contract Drafting', 'Legal Research', 'Corporate Law', 'IP Law', 'Litigation'],
    'Logistics': ['Supply Chain', 'Warehouse Management', 'Fleet Management', 'Import/Export'],
    'Media': ['Content Writing', 'Video Editing', 'Social Media', 'Journalism', 'PR'],
    'Hospitality': ['Hotel Management', 'Customer Service', 'Event Planning', 'Restaurant Management'],
};

// Company data with realistic logos (using ui-avatars.com for initials-based logos)
const companiesData = [
    { name: 'FPT Software', industry: 'Công nghệ thông tin', size: '500+', location: 'Hà Nội', description: 'FPT Software là công ty CNTT hàng đầu Việt Nam, chuyên cung cấp các giải pháp outsourcing và sản phẩm công nghệ cho khách hàng toàn cầu.', website: 'https://fpt.com.vn' },
    { name: 'Viettel Group', industry: 'Viễn thông', size: '500+', location: 'Hà Nội', description: 'Tập đoàn Viettel là nhà mạng lớn nhất Việt Nam với hơn 70 triệu thuê bao, hoạt động trong lĩnh vực viễn thông, công nghệ cao.', website: 'https://viettel.com.vn' },
    { name: 'VNG Corporation', industry: 'Công nghệ thông tin', size: '500+', location: 'TP. Hồ Chí Minh', description: 'VNG là công ty game và internet hàng đầu Việt Nam, sở hữu Zalo, Zing và nhiều sản phẩm công nghệ phổ biến.', website: 'https://vng.com.vn' },
    { name: 'VNPT', industry: 'Viễn thông', size: '500+', location: 'Hà Nội', description: 'Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT) - nhà cung cấp dịch vụ viễn thông và CNTT hàng đầu.', website: 'https://vnpt.com.vn' },
    { name: 'MB Bank', industry: 'Tài chính / Ngân hàng', size: '500+', location: 'Hà Nội', description: 'Ngân hàng TMCP Quân đội (MB Bank) với hơn 10 triệu khách hàng, cung cấp đa dạng dịch vụ tài chính.', website: 'https://mbbank.com.vn' },
    { name: 'VPBank', industry: 'Tài chính / Ngân hàng', size: '500+', location: 'Hà Nội', description: 'Ngân hàng TMCP Việt Nam Thịnh Vượng (VPBank) - một trong những ngân hàng tư nhân lớn nhất Việt Nam.', website: 'https://vpbank.com.vn' },
    { name: 'Techcombank', industry: 'Tài chính / Ngân hàng', size: '500+', location: 'Hà Nội', description: 'Ngân hàng TMCP Kỹ thương Việt Nam (Techcombank) - ngân hàng hàng đầu về dịch vụ ngân hàng số.', website: 'https://techcombank.com.vn' },
    { name: 'Vietcombank', industry: 'Tài chính / Ngân hàng', size: '500+', location: 'Hà Nội', description: 'Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank) - một trong những ngân hàng thương mại lớn nhất.', website: 'https://vietcombank.com.vn' },
    { name: 'Vietnam Airlines', industry: 'Hàng không', size: '500+', location: 'Hà Nội', description: 'Hãng hàng không quốc gia Việt Nam với đường bay đến hơn 20 quốc gia trên thế giới.', website: 'https://vietnamairlines.com' },
    { name: 'Vinhomes', industry: 'Bất động sản', size: '500+', location: 'Hà Nội', description: 'Vinhomes - thương hiệu bất động sản hàng đầu Việt Nam, phát triển các khu đô thị và khu công nghiệp.', website: 'https://vinhomes.vn' },
    { name: 'Sun Group', industry: 'Bất động sản', size: '201-500', location: 'Hà Nội', description: 'Tập đoàn Sun Group - nhà phát triển bất động sản và du lịch nghỉ dưỡng hàng đầu Việt Nam.', website: 'https://sungroup.vn' },
    { name: 'Masan Group', industry: 'Sản xuất', size: '500+', location: 'TP. Hồ Chí Minh', description: 'Tập đoàn Masan - tập đoàn hàng tiêu dùng và bán lẻ hàng đầu Việt Nam.', website: 'https://masan.com' },
    { name: 'TH Group', industry: 'Sản xuất', size: '201-500', location: 'Hà Nội', description: 'TH Group - tập đoàn nông nghiệp công nghệ cao, khởi xước cuộc cách mạng sữa tươi sạch tại Việt Nam.', website: 'https://thgroup.vn' },
    { name: 'Việt Nam Airlines', industry: 'Hàng không', size: '500+', location: 'TP. Hồ Chí Minh', description: 'Hãng hàng không quốc gia với đội tàu bay hiện đại và dịch vụ chất lượng cao.', website: 'https://vietnamairlines.com' },
    { name: 'Grab', industry: 'Công nghệ thông tin', size: '201-500', location: 'TP. Hồ Chí Minh', description: 'Grab - siêu ứng dụng hàng đầu Đông Nam Á, cung cấp dịch vụ giao thông, giao hàng và tài chính.', website: 'https://grab.com' },
    { name: 'Shopee', industry: 'Thương mại điện tử', size: '500+', location: 'TP. Hồ Chí Minh', description: 'Shopee - nền tảng thương mại điện tử hàng đầu Đông Nam Á.', website: 'https://shopee.vn' },
    { name: 'Lazada', industry: 'Thương mại điện tử', size: '500+', location: 'TP. Hồ Chí Minh', description: 'Lazada - nền tảng thương mại điện tử hàng đầu khu vực Đông Nam Á.', website: 'https://lazada.vn' },
    { name: 'Tiki', industry: 'Thương mại điện tử', size: '201-500', location: 'TP. Hồ Chí Minh', description: 'Tiki - sàn thương mại điện tử Việt Nam với dịch vụ giao hàng nhanh TikiNOW.', website: 'https://tiki.vn' },
    { name: 'Bosch Vietnam', industry: 'Kỹ thuật', size: '201-500', location: 'TP. Hồ Chí Minh', description: 'Bosch Vietnam - chi nhánh của tập đoàn Bosch Đức, chuyên về công nghệ và giải pháp kỹ thuật.', website: 'https://bosch.com.vn' },
    { name: 'Siemens Vietnam', industry: 'Kỹ thuật', size: '51-200', location: 'Hà Nội', description: 'Siemens Vietnam - nhà cung cấp hàng đầu về tự động hóa và số hóa.', website: 'https://siemens.com.vn' },
    { name: 'Samsung Vietnam', industry: 'Sản xuất', size: '500+', location: 'Bắc Ninh', description: 'Samsung Vietnam - nhà sản xuất điện thoại và thiết bị điện tử lớn nhất Việt Nam.', website: 'https://samsung.com/vn' },
    { name: 'Intel Vietnam', industry: 'Công nghệ thông tin', size: '201-500', location: 'TP. Hồ Chí Minh', description: 'Intel Vietnam - trung tâm R&D và sản xuất chip bán dẫn của Intel tại Việt Nam.', website: 'https://intel.com.vn' },
    { name: 'Amazon Web Services Vietnam', industry: 'Công nghệ thông tin', size: '51-200', location: 'TP. Hồ Chí Minh', description: 'AWS Vietnam - cung cấp dịch vụ điện toán đám mây hàng đầu.', website: 'https://aws.amazon.com/vn' },
    { name: 'Google Vietnam', industry: 'Công nghệ thông tin', size: '51-200', location: 'TP. Hồ Chí Minh', description: 'Google Vietnam - văn phòng đại diện của Google tại Việt Nam.', website: 'https://google.com.vn' },
    { name: 'Microsoft Vietnam', industry: 'Công nghệ thông tin', size: '51-200', location: 'TP. Hồ Chí Minh', description: 'Microsoft Vietnam - cung cấp giải pháp phần mềm và dịch vụ đám mây.', website: 'https://microsoft.com/vn' },
    { name: 'Dentsu Vietnam', industry: 'Marketing', size: '201-500', location: 'TP. Hồ Chí Minh', description: 'Dentsu Vietnam - agency marketing và truyền thông hàng đầu.', website: 'https://dentsu.com/vn' },
    { name: 'Ogilvy Vietnam', industry: 'Marketing', size: '51-200', location: 'TP. Hồ Chí Minh', description: 'Ogilvy Vietnam - agency quảng cáo và truyền thông quốc tế.', website: 'https://ogilvy.com.vn' },
    { name: 'PwC Vietnam', industry: 'Kế toán / Kiểm toán', size: '201-500', location: 'TP. Hồ Chí Minh', description: 'PwC Vietnam - công ty kiểm toán và tư vấn hàng đầu thế giới.', website: 'https://pwc.com/vn' },
    { name: 'Deloitte Vietnam', industry: 'Kế toán / Kiểm toán', size: '201-500', location: 'TP. Hồ Chí Minh', description: 'Deloitte Vietnam - cung cấp dịch vụ kiểm toán, tư vấn tài chính.', website: 'https://deloitte.com/vn' },
    { name: 'KPMG Vietnam', industry: 'Kế toán / Kiểm toán', size: '201-500', location: 'TP. Hồ Chí Minh', description: 'KPMG Vietnam - công ty kiểm toán và tư vấn chuyên nghiệp.', website: 'https://kpmg.com.vn' },
    { name: 'EY Vietnam', industry: 'Kế toán / Kiểm toán', size: '201-500', location: 'TP. Hồ Chí Minh', description: 'EY Vietnam - thành viên của Ernst & Young Global.', website: 'https://ey.com/vn' },
    { name: 'Manulife Vietnam', industry: 'Bảo hiểm', size: '500+', location: 'TP. Hồ Chí Minh', description: 'Manulife Vietnam - công ty bảo hiểm nhân thọ hàng đầu Việt Nam.', website: 'https://manulife.com.vn' },
    { name: 'Prudential Vietnam', industry: 'Bảo hiểm', size: '500+', location: 'TP. Hồ Chí Minh', description: 'Prudential Vietnam - công ty bảo hiểm nhân thọ uy tín.', website: 'https://prudential.com.vn' },
    { name: 'Lotteria', industry: 'F&B / Nhà hàng', size: '201-500', location: 'TP. Hồ Chí Minh', description: 'Lotteria - chuỗi nhà hàng fast-food lớn tại Việt Nam.', website: 'https://lotteria.vn' },
    { name: 'Starbucks Vietnam', industry: 'F&B / Nhà hàng', size: '51-200', location: 'TP. Hồ Chí Minh', description: 'Starbucks Vietnam - chuỗi cà phê cao cấp tại Việt Nam.', website: 'https://starbucks.com.vn' },
    { name: 'Highlands Coffee', industry: 'F&B / Nhà hàng', size: '201-500', location: 'TP. Hồ Chí Minh', description: 'Highlands Coffee - thương hiệu cà phê Việt Nam.', website: 'https://highlandscoffee.com.vn' },
    { name: 'Marriott Vietnam', industry: 'Du lịch / Khách sạn', size: '51-200', location: 'TP. Hồ Chí Minh', description: 'Marriott Vietnam - chuỗi khách sạn cao cấp quốc tế.', website: 'https://marriott.com.vn' },
    { name: 'InterContinental Hanoi', industry: 'Du lịch / Khách sạn', size: '51-200', location: 'Hà Nội', description: 'InterContinental Hanoi - khách sạn 5 sao tại trung tâm Hà Nội.', website: 'https://ihg.com' },
    { name: 'Vinson Academy', industry: 'Giáo dục / Đào tạo', size: '51-200', location: 'TP. Hồ Chí Minh', description: 'Vinson Academy - trung tâm đào tạo tiếng Anh và kỹ năng.', website: 'https://vinson.edu.vn' },
    { name: 'FPT Aptech', industry: 'Giáo dục / Đào tạo', size: '201-500', location: 'TP. Hồ Chí Minh', description: 'FPT Aptech - trung tâm đào tạo CNTT chuyên nghiệp.', website: 'https://aptech.fpt.edu.vn' },
    { name: 'JTI Vietnam', industry: 'Sản xuất', size: '51-200', location: 'TP. Hồ Chí Minh', description: 'JTI Vietnam - công ty sản xuất thuốc lá quốc tế.', website: 'https://jti.com.vn' },
    { name: 'Unilever Vietnam', industry: 'Sản xuất', size: '500+', location: 'TP. Hồ Chí Minh', description: 'Unilever Vietnam - tập đoàn hàng tiêu dùng đa quốc gia.', website: 'https://unilever.com.vn' },
    { name: 'P&G Vietnam', industry: 'Sản xuất', size: '201-500', location: 'TP. Hồ Chí Minh', description: 'P&G Vietnam - tập đoàn hàng tiêu dùng quốc tế.', website: 'https://pg.com.vn' },
    { name: 'Nike Vietnam', industry: 'Sản xuất', size: '201-500', location: 'TP. Hồ Chí Minh', description: 'Nike Vietnam - trung tâm sản xuất giày thể thao.', website: 'https://nike.com' },
    { name: 'Adidas Vietnam', industry: 'Sản xuất', size: '51-200', location: 'TP. Hồ Chí Minh', description: 'Adidas Vietnam - trung tâm sản xuất giày thể thao.', website: 'https://adidas.com.vn' },
    { name: 'Vietjet Air', industry: 'Hàng không', size: '500+', location: 'TP. Hồ Chí Minh', description: 'Vietjet Air - hàng không giá rẻ hàng đầu Việt Nam.', website: 'https://vietjetair.com' },
    { name: 'CMC Corporation', industry: 'Công nghệ thông tin', size: '201-500', location: 'Hà Nội', description: 'CMC Corporation - tập đoàn CNTT hàng đầu Việt Nam.', website: 'https://cmc.com.vn' },
    { name: 'Viettel IDC', industry: 'Công nghệ thông tin', size: '201-500', location: 'Hà Nội', description: 'Viettel IDC - nhà cung cấp dịch vụ đám mây và trung tâm dữ liệu.', website: 'https://viettelidc.com.vn' },
    { name: 'Misa', industry: 'Công nghệ thông tin', size: '201-500', location: 'Hà Nội', description: 'Misa - công ty phần mềm kế toán và quản lý doanh nghiệp hàng đầu.', website: 'https://misa.com.vn' },
];

// Job templates - 50 jobs across all industries
const jobTemplates = [
    // IT/Software Development
    {
        title: 'Senior Frontend Developer',
        industry: 'Công nghệ thông tin',
        description: `Chúng tôi đang tìm kiếm Senior Frontend Developer có kinh nghiệm để tham gia phát triển các sản phẩm web hiện đại.

MÔ TẢ CÔNG VIỆC:
- Phát triển và duy trì các ứng dụng web sử dụng React/Next.js
- Tối ưu hóa hiệu suất và trải nghiệm người dùng
- Viết code sạch, có documentation và maintainable
- Làm việc với team để thiết kế và triển khai tính năng mới
- Tham gia code review và hỗ trợ junior developers
- Phối hợp với UX/UI designers để đảm bảo chất lượng sản phẩm

YÊU CẦU:
- Tối thiểu 4 năm kinh nghiệm trong phát triển Frontend
- Thành thạo React, TypeScript, HTML/CSS
- Có kinh nghiệm với Next.js và SSR
- Hiểu biết về performance optimization
- Kinh nghiệm với testing (Jest, React Testing Library)
- Khả năng làm việc độc lập và theo nhóm

QUYỀN LỢI:
- Lương tháng 13 + thưởng performance
- Bảo hiểm xã hội, y tế, thất nghiệp đầy đủ
- Ngày nghỉ phép có lương: 12 ngày/năm
- Chế độ làm việc linh hoạt (hybrid)
- Cơ hội đào tạo và phát triển nghề nghiệp
- Môi trường làm việc năng động, trẻ trung`,
        requirements: '- 4+ năm kinh nghiệm Frontend\n- React, TypeScript, Next.js\n- HTML/CSS, Tailwind\n- Git, CI/CD\n- Tiếng Anh giao tiếp',
        benefits: '- Lương: 30-50 triệu/tháng\n- Thưởng 13\n- Bảo hiểm đầy đủ\n- Hybrid work\n- Đào tạo chuyên sâu',
        salaryMin: 30000000,
        salaryMax: 50000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['React', 'TypeScript', 'Next.js', 'HTML/CSS', 'Tailwind']
    },
    {
        title: 'Backend Engineer (Node.js)',
        industry: 'Công nghệ thông tin',
        description: `Tuyển dụng Backend Engineer làm viết API và xử lý logic nghiệp vụ cho hệ thống.

MÔ TẢ CÔNG VIỆC:
- Thiết kế và phát triển RESTful APIs
- Xây dựng và tối ưu hóa database queries
- Phát triển microservices architecture
- Đảm bảo security và performance của hệ thống
- Viết unit tests và integration tests
- Tham gia thiết kế hệ thống và code review

YÊU CẦU:
- 3+ năm kinh nghiệm với Node.js
- Thành thạo Express hoặc NestJS
- Kinh nghiệm với PostgreSQL, MongoDB
- Hiểu biết về Docker, Kubernetes
- Kỹ năng giải quyết vấn đề tốt
- Đọc hiểu tài liệu tiếng Anh

QUYỀN LỢI:
- Lương competitive theo năng lực
- Thưởng quý và năm
- Chế độ bảo hiểm premium
- Team building hàng tháng
- Đào tạo công nghệ mới`,
        requirements: '- Node.js, Express/NestJS\n- PostgreSQL, MongoDB\n- Docker\n- RESTful API design\n- Git',
        benefits: '- Lương: 25-45 triệu/tháng\n- Thưởng quý\n- Bảo hiểm premium\n- Team building',
        salaryMin: 25000000,
        salaryMax: 45000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Docker']
    },
    {
        title: 'Fullstack Developer (React + Node.js)',
        industry: 'Công nghệ thông tin',
        description: `Tuyển dụng Fullstack Developer phát triển ứng dụng web toàn diện.

MÔ TẢ CÔNG VIỆC:
- Phát triển tính năng mới cho sản phẩm
- Xây dựng RESTful APIs
- Phát triển responsive UI
- Tối ưu hóa performance
- Viết clean, maintainable code
- Collaborative development

YÊU CẦU:
- 2+ năm kinh nghiệm Fullstack
- JavaScript/TypeScript thành thạo
- React + Node.js experience
- SQL và NoSQL databases
- Git workflow

QUYỀN LỢI:
- Lương: 20-40 triệu
- Thưởng dự án
- 14 ngày phép
- Đào tạo online`,
        requirements: '- React, Node.js\n- TypeScript\n- PostgreSQL/MongoDB\n- Git\n- REST API',
        benefits: '- Lương 20-40 triệu\n- Thưởng dự án\n- 14 ngày phép\n- Đào tạo',
        salaryMin: 20000000,
        salaryMax: 40000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB']
    },
    {
        title: 'Mobile Developer (React Native)',
        industry: 'Công nghệ thông tin',
        description: `Tuyển dụng Mobile Developer phát triển ứng dụng di động trên nền tảng React Native.

MÔ TẢ CÔNG VIỆC:
- Phát triển ứng dụng mobile cho iOS và Android
- Tích hợp API và third-party libraries
- Tối ưu performance và UX
- Fix bugs và maintain code
- Collaborate với design team

YÊU CẦU:
- 2+ năm React Native
- JavaScript/TypeScript
- iOS/Android deployment
- Redux/Context API
- UI/UX sense

QUYỀN LỢI:
- Lương 22-42 triệu
- Thưởng release
- Macbook provided
- Flexible hours`,
        requirements: '- React Native\n- JavaScript/TypeScript\n- iOS/Android\n- Redux\n- REST API',
        benefits: '- Lương 22-42 triệu\n- Thưởng release\n- Macbook\n- Giờ linh hoạt',
        salaryMin: 22000000,
        salaryMax: 42000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['React Native', 'JavaScript', 'TypeScript', 'iOS', 'Android']
    },
    {
        title: 'DevOps Engineer',
        industry: 'Công nghệ thông tin',
        description: `Tuyển dụng DevOps Engineer xây dựng và duy trì hệ thống CI/CD.

MÔ TẢ CÔNG VIỆC:
- Thiết lập và quản lý CI/CD pipelines
- Quản lý Kubernetes clusters
- Infrastructure as Code (Terraform)
- Monitor và optimize system performance
- Đảm bảo security compliance
- Automation testing

YÊU CẦU:
- 3+ năm DevOps experience
- Kubernetes, Docker expert
- AWS/GCP/Azure
- Terraform, Ansible
- Linux system admin
- Scripting (Bash, Python)

QUYỀN LỢI:
- Lương 30-55 triệu
- Cert support
- Conference attendance
- Remote options`,
        requirements: '- Kubernetes, Docker\n- AWS/GCP\n- Terraform\n- Linux\n- CI/CD',
        benefits: '- Lương 30-55 triệu\n- Hỗ trợ cert\n- Remote option',
        salaryMin: 30000000,
        salaryMax: 55000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Linux']
    },
    {
        title: 'Data Engineer',
        industry: 'Công nghệ thông tin',
        description: `Tuyển dụng Data Engineer xây dựng data pipelines và data infrastructure.

MÔ TẢ CÔNG VIỆC:
- Design và build ETL pipelines
- Quản lý data warehouses
- Optimize query performance
- Data modeling
- Collaborate với Data Scientists

YÊU CẦU:
- 3+ năm Data Engineering
- Python, SQL expert
- Spark, Kafka
- Snowflake/BigQuery
- Airflow, Luigi

QUYỀN LỢI:
- Lương competitive
- Stock options
- Learning budget
- Modern tech stack`,
        requirements: '- Python, SQL\n- Spark, Kafka\n- Snowflake\n- ETL\n- Data modeling',
        benefits: '- Lương 28-50 triệu\n- Stock options\n- Learning budget',
        salaryMin: 28000000,
        salaryMax: 50000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Python', 'SQL', 'Spark', 'Snowflake', 'Airflow']
    },
    {
        title: 'AI/ML Engineer',
        industry: 'Công nghệ thông tin',
        description: `Tuyển dụng AI/ML Engineer phát triển các giải pháp Machine Learning.

MÔ TẢ CÔNG VIỆC:
- Phát triển ML models cho recommendation, NLP
- Build và deploy ML pipelines
- Data preprocessing và feature engineering
- Model optimization và experimentation
- Research new AI/ML techniques

YÊU CẦU:
- 3+ năm ML experience
- Python, TensorFlow/PyTorch
- Deep Learning, NLP
- MLOps experience
- Strong math background

QUYỀN LỢI:
- Lương 35-60 triệu
- Research budget
- Publication support
- Cutting-edge projects`,
        requirements: '- Python\n- TensorFlow/PyTorch\n- Deep Learning\n- NLP\n- MLOps',
        benefits: '- Lương 35-60 triệu\n- Research budget\n- Dự án mới',
        salaryMin: 35000000,
        salaryMax: 60000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'NLP']
    },
    // Business/Marketing
    {
        title: 'Digital Marketing Manager',
        industry: 'Kinh doanh / Marketing',
        description: `Tuyển dụng Digital Marketing Manager quản lý chiến lược marketing online.

MÔ TẢ CÔNG VIỆC:
- Xây dựng và thực thi chiến lược digital marketing
- Quản lý các chiến dịch SEO, SEM, Social Media
- Phân tích data và optimize campaigns
- Quản lý budget marketing
- Team coordination

YÊU CẦU:
- 4+ năm Digital Marketing
- Google Ads, Facebook Ads expert
- SEO/SEM experience
- Analytics tools (GA4)
- Leadership skills
- Tiếng Anh tốt

QUYỀN LỢI:
- Lương 25-45 triệu
- Performance bonus
- Marketing budget
- Training abroad`,
        requirements: '- Digital Marketing\n- Google Ads, FB Ads\n- SEO\n- GA4\n- Leadership',
        benefits: '- Lương 25-45 triệu\n- Thưởng performance\n- Training abroad',
        salaryMin: 25000000,
        salaryMax: 45000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Google Ads', 'Facebook Ads', 'SEO', 'Analytics', 'Marketing Strategy']
    },
    {
        title: 'Content Marketing Specialist',
        industry: 'Kinh doanh / Marketing',
        description: `Tuyển dụng Content Marketing Specialist sáng tạo nội dung marketing.

MÔ TẢ CÔNG VIỆC:
- Sáng tạo nội dung blog, social media, email
- Xây dựng content strategy
- SEO content writing
- Content calendar management
- Performance tracking

YÊU CẦU:
- 2+ năm Content Marketing
- Excellent writing skills
- SEO knowledge
- Social media platforms
- Creative thinking

QUYỀN LỢI:
- Lương 15-28 triệu
- Content allowance
- Creative freedom
- Career growth`,
        requirements: '- Content Writing\n- SEO\n- Social Media\n- Marketing\n- Creative',
        benefits: '- Lương 15-28 triệu\n- Content allowance\n- Sáng tạo tự do',
        salaryMin: 15000000,
        salaryMax: 28000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Content Writing', 'SEO', 'Social Media', 'Copywriting', 'Marketing']
    },
    {
        title: 'SEO Specialist',
        industry: 'Kinh doanh / Marketing',
        description: `Tuyển dụng SEO Specialist tối ưu hóa công cụ tìm kiếm.

MÔ TẢ CÔNG VIỆC:
- SEO audit và analysis
- On-page và Off-page SEO
- Keyword research
- Content optimization
- Link building
- SEO reporting

YÊU CẦU:
- 2+ năm SEO experience
- Technical SEO knowledge
- Google Search Console
- Ahrefs/SEMrush
- Analytics

QUYỀN LỢI:
- Lương 18-32 triệu
- SEO tools access
- Certificate support
- Remote option`,
        requirements: '- SEO\n- Google Search Console\n- Ahrefs\n- Technical SEO\n- Analytics',
        benefits: '- Lương 18-32 triệu\n- Tools access\n- Remote option',
        salaryMin: 18000000,
        salaryMax: 32000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['SEO', 'Google Analytics', 'Ahrefs', 'SEMrush', 'Technical SEO']
    },
    {
        title: 'Brand Manager',
        industry: 'Kinh doanh / Marketing',
        description: `Tuyển dụng Brand Manager quản lý và phát triển thương hiệu.

MÔ TẢ CÔNG VIỆC:
- Xây dựng chiến lược thương hiệu
- Quản lý brand identity
- Marketing campaigns
- Market research
- Team leadership

YÊU CẦU:
- 5+ năm Brand Management
- Strategic thinking
- Creative direction
- Budget management
- Tiếng Anh lưu loát

QUYỀN LỢI:
- Lương 35-60 triệu
- Stock options
- Leadership role
- International exposure`,
        requirements: '- Brand Management\n- Marketing Strategy\n- Creative\n- Leadership\n- English',
        benefits: '- Lương 35-60 triệu\n- Stock options\n- Leadership',
        salaryMin: 35000000,
        salaryMax: 60000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Brand Strategy', 'Marketing', 'Creative Direction', 'Leadership', 'Market Research']
    },
    // Finance/Banking
    {
        title: 'Financial Analyst',
        industry: 'Tài chính / Ngân hàng',
        description: `Tuyển dụng Financial Analyst phân tích tài chính doanh nghiệp.

MÔ TẢ CÔNG VIỆC:
- Phân tích báo cáo tài chính
- Financial modeling
- Investment analysis
- Risk assessment
- Report preparation

YÊU CẦU:
- 3+ năm Financial Analysis
- CFA/CPA is a plus
- Advanced Excel
- Financial modeling
- Analytical skills

QUYỀN LỢI:
- Lương 25-45 triệu
- CFA support
- Performance bonus
- Career path`,
        requirements: '- Financial Analysis\n- Excel\n- Financial Modeling\n- CFA\n- Analytics',
        benefits: '- Lương 25-45 triệu\n- Hỗ trợ CFA\n- Thưởng',
        salaryMin: 25000000,
        salaryMax: 45000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Financial Analysis', 'Excel', 'Financial Modeling', 'CFA', 'Risk Assessment']
    },
    {
        title: 'Credit Officer',
        industry: 'Tài chính / Ngân hàng',
        description: `Tuyển dụng Credit Officer đánh giá và quản lý tín dụng.

MÔ TẢ CÔNG VIỆC:
- Đánh giá hồ sơ tín dụng
- Risk assessment
- Loan approval
- Customer relationship
- Compliance

YÊU CẦU:
- 3+ năm Credit experience
- Banking background
- Risk analysis
- Communication skills
- Detail-oriented

QUYỀN LỢI:
- Lương 20-40 triệu
- Commission
- Allowances
- Professional training`,
        requirements: '- Credit Analysis\n- Banking\n- Risk Assessment\n- Communication\n- Detail-oriented',
        benefits: '- Lương 20-40 triệu\n- Hoa hồng\n- Training',
        salaryMin: 20000000,
        salaryMax: 40000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Credit Analysis', 'Risk Assessment', 'Banking', 'Loan Processing', 'Compliance']
    },
    {
        title: 'Investment Analyst',
        industry: 'Tài chính / Ngân hàng',
        description: `Tuyển dụng Investment Analyst phân tích đầu tư.

MÔ TẢ CÔNG VIỆC:
- Market research
- Investment analysis
- Portfolio management support
- Due diligence
- Report writing

YÊU CẦU:
- 2+ năm Investment
- CFA candidate
- Financial modeling
- Research skills
- Tiếng Anh tốt

QUYỀN LỢI:
- Lương competitive
- Performance bonus
- Investment exposure
- Career growth`,
        requirements: '- Investment Analysis\n- CFA\n- Financial Modeling\n- Research\n- English',
        benefits: '- Lương competitive\n- Thưởng performance\n- Phát triển',
        salaryMin: 22000000,
        salaryMax: 45000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Investment Analysis', 'Financial Modeling', 'CFA', 'Research', 'Portfolio Management']
    },
    // Accounting/Audit
    {
        title: 'Senior Accountant',
        industry: 'Kế toán / Kiểm toán',
        description: `Tuyển dụng Senior Accountant quản lý kế toán doanh nghiệp.

MÔ TẢ CÔNG VIỆC:
- General ledger management
- Financial statements
- Tax compliance
- Month-end close
- Team supervision

YÊU CẦU:
- 4+ năm Accounting
- CPA preferred
- Accounting software
- Tax knowledge
- Leadership

QUYỀN LỢI:
- Lương 22-40 triệu
- CPA support
- Professional environment
- Work-life balance`,
        requirements: '- Accounting\n- CPA\n- Excel\n- Tax\n- Leadership',
        benefits: '- Lương 22-40 triệu\n- Hỗ trợ CPA\n- Cân bằng cuộc sống',
        salaryMin: 22000000,
        salaryMax: 40000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Accounting', 'CPA', 'Excel', 'Tax', 'Financial Statements']
    },
    {
        title: 'Audit Associate',
        industry: 'Kế toán / Kiểm toán',
        description: `Tuyển dụng Audit Associate thực hiện kiểm toán.

MÔ TẢ CÔNG VIỆC:
- Audit fieldwork
- Financial statement review
- Compliance testing
- Working papers
- Client communication

YÊU CẦU:
- 1-3 năm Audit
- CPA/CIA is a plus
- Audit software
- Analytical skills
- Travel willingness

QUYỀN LỢI:
- Lương 15-28 triệu
- Overtime pay
- Training program
- Certification support`,
        requirements: '- Audit\n- CPA/CIA\n- Analytical\n- Communication\n- Travel',
        benefits: '- Lương 15-28 triệu\n- Overtime pay\n- Đào tạo',
        salaryMin: 15000000,
        salaryMax: 28000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Audit', 'CPA', 'Financial Analysis', 'Compliance', 'Communication']
    },
    // HR
    {
        title: 'HR Manager',
        industry: 'Nhân sự',
        description: `Tuyển dụng HR Manager quản lý nhân sự toàn diện.

MÔ TẢ CÔNG VIỆC:
- HR strategy development
- Recruitment management
- Performance management
- Employee relations
- HR policies

YÊU CẦU:
- 5+ năm HR experience
- HR degree preferred
- Communication skills
- Problem-solving
- Leadership

QUYỀN LỢI:
- Lương 30-50 triệu
- Annual bonus
- HR projects
- Career growth`,
        requirements: '- HR Management\n- Recruitment\n- Performance Management\n- Labor Law\n- Leadership',
        benefits: '- Lương 30-50 triệu\n- Thưởng năm\n- Dự án HR',
        salaryMin: 30000000,
        salaryMax: 50000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['HR Management', 'Recruitment', 'Performance Management', 'Employee Relations', 'Labor Law']
    },
    {
        title: 'Recruiter',
        industry: 'Nhân sự',
        description: `Tuyển dụng Recruiter chuyên nghiệp.

MÔ TẢ CÔNG VIỆC:
- Job posting management
- Candidate sourcing
- Interview coordination
- Offer negotiation
- HR system management

YÊU CẦU:
- 2+ năm Recruitment
- Sourcing skills
- Communication
- Time management
- Tech-savvy

QUYỀN LỢI:
- Lương 15-30 triệu
- Recruitment bonus
- Training program
- Dynamic environment`,
        requirements: '- Recruitment\n- Sourcing\n- Interview\n- Communication\n- HRIS',
        benefits: '- Lương 15-30 triệu\n- Thưởng tuyển dụng\n- Đào tạo',
        salaryMin: 15000000,
        salaryMax: 30000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Recruitment', 'Sourcing', 'Interviewing', 'LinkedIn Recruiter', 'HRIS']
    },
    // Engineering
    {
        title: 'Mechanical Engineer',
        industry: 'Kỹ thuật',
        description: `Tuyển dụng Mechanical Engineer thiết kế và phát triển sản phẩm cơ khí.

MÔ TẢ CÔNG VIỆC:
- Mechanical design
- CAD modeling
- Product development
- Testing và validation
- Documentation

YÊU CẦU:
- 3+ năm Mechanical Engineering
- SolidWorks/AutoCAD
- Manufacturing knowledge
- Problem-solving
- Teamwork

QUYỀN LỢI:
- Lương 18-35 triệu
- Project bonus
- Training
- Modern tools`,
        requirements: '- Mechanical Engineering\n- SolidWorks\n- AutoCAD\n- Manufacturing\n- Problem-solving',
        benefits: '- Lương 18-35 triệu\n- Thưởng dự án\n- Công cụ hiện đại',
        salaryMin: 18000000,
        salaryMax: 35000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['SolidWorks', 'AutoCAD', 'Mechanical Design', 'Manufacturing', 'GD&T']
    },
    {
        title: 'Electrical Engineer',
        industry: 'Kỹ thuật',
        description: `Tuyển dụng Electrical Engineer thiết kế hệ thống điện.

MÔ TẢ CÔNG VIỆC:
- Electrical system design
- Circuit design
- Testing và commissioning
- Documentation
- Project support

YÊU CẦU:
- 3+ năm Electrical Engineering
- PCB design
- Microcontrollers
- Testing equipment
- Problem-solving

QUYỀN LỢI:
- Lương 20-38 triệu
- Equipment allowance
- Training
- Career path`,
        requirements: '- Electrical Engineering\n- PCB Design\n- Microcontrollers\n- Testing\n- Documentation',
        benefits: '- Lương 20-38 triệu\n- Thiết bị\n- Đào tạo',
        salaryMin: 20000000,
        salaryMax: 38000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Circuit Design', 'PCB Design', 'Microcontrollers', 'Electrical Systems', 'Testing']
    },
    // Manufacturing
    {
        title: 'Production Manager',
        industry: 'Sản xuất',
        description: `Tuyển dụng Production Manager quản lý sản xuất.

MÔ TẢ CÔNG VIỆC:
- Production planning
- Team management
- Quality control
- Process improvement
- Safety compliance

YÊU CẦU:
- 5+ năm Production
- Manufacturing background
- Lean/Six Sigma
- Leadership
- Problem-solving

QUYỀN LỢI:
- Lương 30-55 triệu
- Production bonus
- Housing allowance
- Career advancement`,
        requirements: '- Production Management\n- Lean/Six Sigma\n- Quality Control\n- Leadership\n- Planning',
        benefits: '- Lương 30-55 triệu\n- Thưởng sản xuất\n- Phụ cấp',
        salaryMin: 30000000,
        salaryMax: 55000000,
        location: 'Bắc Ninh',
        jobType: 'FULL_TIME',
        skills: ['Production Planning', 'Lean Manufacturing', 'Six Sigma', 'Quality Control', 'Team Management']
    },
    {
        title: 'Quality Assurance Manager',
        industry: 'Sản xuất',
        description: `Tuyển dụng QA Manager đảm bảo chất lượng sản phẩm.

MÔ TẢ CÔNG VIỆC:
- Quality management system
- Process auditing
- Customer complaints
- Continuous improvement
- Team leadership

YÊU CẦU:
- 5+ năm QA experience
- ISO 9001 knowledge
- Statistical tools
- Communication
- Leadership

QUYỀN LỢI:
- Lương 25-45 triệu
- ISO certification
- Travel opportunities
- Professional growth`,
        requirements: '- Quality Assurance\n- ISO 9001\n- Statistical Analysis\n- Auditing\n- Leadership',
        benefits: '- Lương 25-45 triệu\n- ISO cert\n- Du lịch',
        salaryMin: 25000000,
        salaryMax: 45000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Quality Management', 'ISO 9001', 'Statistical Process Control', 'Auditing', 'Root Cause Analysis']
    },
    // Medical/Pharma
    {
        title: 'Medical Representative',
        industry: 'Y tế / Dược phẩm',
        description: `Tuyển dụng Medical Representative giới thiệu sản phẩm dược.

MÔ TẢ CÔNG VIỆC:
- Product promotion
- Doctor visits
- Sales targets
- Market feedback
- Events coordination

YÊU CẦU:
- 1+ năm Medical Rep
- Medical/pharmacy background
- Communication skills
- Result-driven
- Travel willing

QUYỀN LỢI:
- Lương 15-30 triệu
- Commission
- Car allowance
- Health insurance`,
        requirements: '- Medical Sales\n- Communication\n- Medical Knowledge\n- Sales\n- Travel',
        benefits: '- Lương 15-30 triệu\n- Hoa hồng\n- Xe công ty\n- Bảo hiểm',
        salaryMin: 15000000,
        salaryMax: 30000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Medical Sales', 'Communication', 'Product Knowledge', 'Sales', 'Relationship Building']
    },
    {
        title: 'Pharmacist',
        industry: 'Y tế / Dược phẩm',
        description: `Tuyển dụng Pharmacist tại nhà thuốc/phòng khám.

MÔ TẢ CÔNG VIỆC:
- Prescription processing
- Drug information
- Customer counseling
- Inventory management
- Compliance

YÊU CẦU:
- Pharmacist license
- Pharmacy degree
- Communication
- Attention to detail
- Customer service

QUYỀN LỢI:
- Lương 12-22 triệu
- Professional environment
- Training
- Healthcare benefits`,
        requirements: '- Pharmacy License\n- Pharmacology\n- Communication\n- Detail-oriented\n- Customer Service',
        benefits: '- Lương 12-22 triệu\n- Môi trường chuyên nghiệp\n- Bảo hiểm',
        salaryMin: 12000000,
        salaryMax: 22000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Pharmacology', 'Prescription Processing', 'Drug Information', 'Patient Counseling', 'Inventory Management']
    },
    // Education
    {
        title: 'English Teacher',
        industry: 'Giáo dục / Đào tạo',
        description: `Tuyển dụng English Teacher giảng dạy tiếng Anh.

MÔ TẢ CÔNG VIỆC:
- English teaching
- Lesson planning
- Student assessment
- Curriculum development
- Class management

YÊU CẦU:
- English degree/CELTA
- Teaching experience
- Native/fluent English
- Energetic personality
- Creative

QUYỀN LỢI:
- Lương 18-35 triệu
- Teaching bonus
- Training abroad
- Modern facilities`,
        requirements: '- English Teaching\n- CELTA/TESOL\n- Lesson Planning\n- Classroom Management\n- Creativity',
        benefits: '- Lương 18-35 triệu\n- Thưởng giảng dạy\n- Training abroad',
        salaryMin: 18000000,
        salaryMax: 35000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['English Teaching', 'CELTA', 'Lesson Planning', 'Classroom Management', 'Curriculum Development']
    },
    {
        title: 'Instructional Designer',
        industry: 'Giáo dục / Đào tạo',
        description: `Tuyển dụng Instructional Designer phát triển khóa học.

MÔ TẢ CÔNG VIỆC:
- Course design
- Content development
- E-learning materials
- Assessment creation
- Technology integration

YÊU CẦU:
- 2+ năm Instructional Design
- E-learning experience
- Authoring tools
- Creative skills
- Project management

QUYỀN LỢI:
- Lương 20-38 triệu
- Creative projects
- Learning opportunities
- Flexible work`,
        requirements: '- Instructional Design\n- E-learning\n- Articulate Storyline\n- Content Development\n- Project Management',
        benefits: '- Lương 20-38 triệu\n- Dự án sáng tạo\n- Học tập',
        salaryMin: 20000000,
        salaryMax: 38000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Instructional Design', 'E-learning', 'Articulate Storyline', 'Content Development', 'ADDIE']
    },
    // Tourism/Hospitality
    {
        title: 'Hotel Manager',
        industry: 'Du lịch / Khách sạn',
        description: `Tuyển dụng Hotel Manager quản lý khách sạn.

MÔ TẢ CÔNG VIỆC:
- Hotel operations
- Staff management
- Guest satisfaction
- Revenue management
- Marketing

YÊU CẦU:
- 5+ năm Hotel management
- Hospitality degree
- Leadership
- Customer service
- Problem-solving

QUYỀN LỢI:
- Lương 35-60 triệu
- Performance bonus
- Housing
- Career advancement`,
        requirements: '- Hotel Management\n- Hospitality\n- Leadership\n- Revenue Management\n- Customer Service',
        benefits: '- Lương 35-60 triệu\n- Thưởng\n- Nhà ở\n- Thăng tiến',
        salaryMin: 35000000,
        salaryMax: 60000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Hotel Operations', 'Staff Management', 'Revenue Management', 'Customer Service', 'Marketing']
    },
    {
        title: 'Tour Guide',
        industry: 'Du lịch / Khách sạn',
        description: `Tuyển dụng Tour Guide hướng dẫn du lịch.

MÔ TẢ CÔNG VIỆC:
- Tour guiding
- Customer service
- Itinerary management
- Problem resolution
- Safety monitoring

YÊU CẦU:
- Tour guide license
- Communication skills
- Cultural knowledge
- Flexible hours
- Outgoing personality

QUYỀN LỢI:
- Lương 10-20 triệu
- Tour bonus
- Travel opportunities
- Dynamic work`,
        requirements: '- Tour Guide License\n- Communication\n- Cultural Knowledge\n- Customer Service\n- Flexibility',
        benefits: '- Lương 10-20 triệu\n- Thưởng tour\n- Đi du lịch',
        salaryMin: 10000000,
        salaryMax: 20000000,
        location: 'Đà Nẵng',
        jobType: 'FULL_TIME',
        skills: ['Tour Guiding', 'Communication', 'Customer Service', 'Local Knowledge', 'First Aid']
    },
    // Real Estate
    {
        title: 'Real Estate Sales',
        industry: 'Bất động sản',
        description: `Tuyển dụng Real Estate Sales tư vấn bất động sản.

MÔ TẢ CÔNG VIỆC:
- Property sales
- Client consultation
- Market analysis
- Marketing support
- Negotiation

YÊU CẦU:
- 1+ năm Real Estate
- Communication skills
- Negotiation
- Self-motivated
- Market knowledge

QUYỀN LỢI:
- Lương 12-25 triệu
- High commission
- Training
- Career growth`,
        requirements: '- Real Estate Sales\n- Communication\n- Negotiation\n- Marketing\n- Market Analysis',
        benefits: '- Lương 12-25 triệu\n- Hoa hồng cao\n- Đào tạo\n- Thăng tiến',
        salaryMin: 12000000,
        salaryMax: 25000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Real Estate Sales', 'Client Consultation', 'Negotiation', 'Market Analysis', 'Property Marketing']
    },
    {
        title: 'Property Manager',
        industry: 'Bất động sản',
        description: `Tuyển dụng Property Manager quản lý bất động sản.

MÔ TẢ CÔNG VIỆC:
- Property operations
- Tenant management
- Maintenance oversight
- Financial reporting
- Compliance

YÊU CẦU:
- 3+ năm Property Management
- Real estate knowledge
- Communication
- Problem-solving
- Organization

QUYỀN LỢI:
- Lương 20-38 triệu
- Performance bonus
- Allowances
- Professional development`,
        requirements: '- Property Management\n- Real Estate\n- Tenant Relations\n- Maintenance\n- Financial Reporting',
        benefits: '- Lương 20-38 triệu\n- Thưởng\n- Phụ cấp\n- Phát triển',
        salaryMin: 20000000,
        salaryMax: 38000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Property Management', 'Tenant Relations', 'Maintenance Management', 'Financial Reporting', 'Compliance']
    },
    // Logistics
    {
        title: 'Logistics Coordinator',
        industry: 'Vận tải / Logistics',
        description: `Tuyển dụng Logistics Coordinator điều phối vận chuyển.

MÔ TẢ CÔNG VIỆC:
- Shipment coordination
- Carrier management
- Documentation
- Problem resolution
- Tracking updates

YÊU CẦU:
- 2+ năm Logistics
- Shipping knowledge
- Documentation skills
- Communication
- Time management

QUYỀN LỢI:
- Lương 15-28 triệu
- Logistics bonus
- Allowance
- Training`,
        requirements: '- Logistics\n- Shipping\n- Documentation\n- Communication\n- Time Management',
        benefits: '- Lương 15-28 triệu\n- Thưởng logistics\n- Phụ cấp',
        salaryMin: 15000000,
        salaryMax: 28000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Logistics Coordination', 'Shipping', 'Documentation', 'Carrier Management', 'Tracking']
    },
    {
        title: 'Supply Chain Manager',
        industry: 'Vận tải / Logistics',
        description: `Tuyển dụng Supply Chain Manager quản lý chuỗi cung ứng.

MÔ TẢ CÔNG VIỆC:
- Supply chain strategy
- Vendor management
- Inventory control
- Process optimization
- Team leadership

YÊU CẦU:
- 5+ năm Supply Chain
- Procurement experience
- Optimization skills
- Leadership
- Analytics

QUYỀN LỢI:
- Lương 35-60 triệu
- Performance bonus
- Stock options
- Career advancement`,
        requirements: '- Supply Chain\n- Procurement\n- Inventory Management\n- Optimization\n- Leadership',
        benefits: '- Lương 35-60 triệu\n- Thưởng\n- Stock options\n- Thăng tiến',
        salaryMin: 35000000,
        salaryMax: 60000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Supply Chain Management', 'Procurement', 'Inventory Management', 'Vendor Management', 'Process Optimization']
    },
    // Media/Journalism
    {
        title: 'Content Writer',
        industry: 'Báo chí / Truyền thông',
        description: `Tuyển dụng Content Writer sáng tạo nội dung.

MÔ TẢ CÔNG VIỆC:
- Article writing
- Copywriting
- Research
- SEO content
- Social media content

YÊU CẦU:
- 2+ năm Writing
- Portfolio required
- SEO knowledge
- Creativity
- Research skills

QUYỀN LỢI:
- Lương 12-25 triệu
- Creative allowance
- Flexible work
- Publication opportunities`,
        requirements: '- Content Writing\n- Copywriting\n- SEO\n- Research\n- Creativity',
        benefits: '- Lương 12-25 triệu\n- Sáng tạo\n- Linh hoạt',
        salaryMin: 12000000,
        salaryMax: 25000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Content Writing', 'Copywriting', 'SEO', 'Research', 'Social Media']
    },
    {
        title: 'Video Editor',
        industry: 'Báo chí / Truyền thông',
        description: `Tuyển dụng Video Editor chỉnh sửa video.

MÔ TẢ CÔNG VIỆC:
- Video editing
- Post-production
- Motion graphics
- Color grading
- Sound editing

YÊU CẦU:
- 2+ năm Video Editing
- Premiere Pro/Final Cut
- After Effects
- Portfolio required
- Creativity

QUYỀN LỢI:
- Lương 15-30 triệu
- Equipment allowance
- Creative projects
- Career growth`,
        requirements: '- Video Editing\n- Premiere Pro\n- After Effects\n- Motion Graphics\n- Creativity',
        benefits: '- Lương 15-30 triệu\n- Thiết bị\n- Dự án sáng tạo',
        salaryMin: 15000000,
        salaryMax: 30000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Video Editing', 'Premiere Pro', 'After Effects', 'Motion Graphics', 'Color Grading']
    },
    // Legal
    {
        title: 'Legal Counsel',
        industry: 'Luật',
        description: `Tuyển dụng Legal Counsel tư vấn pháp luật.

MÔ TẢ CÔNG VIỆC:
- Legal consultation
- Contract drafting
- Compliance
- Risk management
- Dispute resolution

YÊU CẦU:
- 3+ năm Legal experience
- Law degree
- Bar license
- Corporate law
- Communication

QUYỀN LỢI:
- Lương 30-55 triệu
- Annual bonus
- Professional development
- Career path`,
        requirements: '- Legal Counsel\n- Corporate Law\n- Contract Drafting\n- Compliance\n- Bar License',
        benefits: '- Lương 30-55 triệu\n- Thưởng năm\n- Phát triển',
        salaryMin: 30000000,
        salaryMax: 55000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Corporate Law', 'Contract Drafting', 'Compliance', 'Risk Management', 'Dispute Resolution']
    },
    // Design
    {
        title: 'UI/UX Designer',
        industry: 'Thiết kế',
        description: `Tuyển dụng UI/UX Designer thiết kế giao diện.

MÔ TẢ CÔNG VIỆC:
- UI design
- UX research
- Prototyping
- Design systems
- User testing

YÊU CẦU:
- 3+ năm UI/UX
- Figma expert
- Portfolio required
- Design thinking
- Communication

QUYỀN LỢI:
- Lương 22-42 triệu
- Design bonus
- Latest tools
- Creative freedom`,
        requirements: '- UI/UX Design\n- Figma\n- Prototyping\n- Design Thinking\n- Portfolio',
        benefits: '- Lương 22-42 triệu\n- Thưởng design\n- Công cụ mới',
        salaryMin: 22000000,
        salaryMax: 42000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['UI Design', 'UX Research', 'Figma', 'Prototyping', 'Design Systems']
    },
    {
        title: 'Graphic Designer',
        industry: 'Thiết kế',
        description: `Tuyển dụng Graphic Designer thiết kế đồ họa.

MÔ TẢ CÔNG VIỆC:
- Graphic design
- Brand identity
- Print design
- Social media graphics
- Illustration

YÊU CẦU:
- 2+ năm Graphic Design
- Adobe suite expert
- Portfolio required
- Creativity
- Time management

QUYỀN LỢI:
- Lương 15-30 triệu
- Creative allowance
- Modern tools
- Dynamic projects`,
        requirements: '- Graphic Design\n- Adobe Creative Suite\n- Portfolio\n- Creativity\n- Branding',
        benefits: '- Lương 15-30 triệu\n- Sáng tạo\n- Công cụ',
        salaryMin: 15000000,
        salaryMax: 30000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Graphic Design', 'Adobe Photoshop', 'Adobe Illustrator', 'Branding', 'Illustration']
    },
    // F&B
    {
        title: 'Restaurant Manager',
        industry: 'F&B / Nhà hàng',
        description: `Tuyển dụng Restaurant Manager quản lý nhà hàng.

MÔ TẢ CÔNG VIỆC:
- Restaurant operations
- Staff management
- Customer service
- Quality control
- Financial management

YÊU CẦU:
- 3+ năm Restaurant Management
- F&B experience
- Leadership
- Customer service
- Problem-solving

QUYỀN LỢI:
- Lương 20-40 triệu
- Performance bonus
- Meals included
- Career growth`,
        requirements: '- Restaurant Management\n- F&B Operations\n- Staff Management\n- Customer Service\n- Quality Control',
        benefits: '- Lương 20-40 triệu\n- Thưởng\n- Ăn trưa\n- Thăng tiến',
        salaryMin: 20000000,
        salaryMax: 40000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Restaurant Operations', 'Staff Management', 'Customer Service', 'Quality Control', 'Financial Management']
    },
    {
        title: 'Barista',
        industry: 'F&B / Nhà hàng',
        description: `Tuyển dụng Barista chuyên pha chế cà phê.

MÔ TẢ CÔNG VIỆC:
- Coffee preparation
- Customer service
- Menu development
- Inventory management
- Cleanliness

YÊU CẦU:
- Barista experience preferred
- Coffee knowledge
- Customer service
- Energetic
- Morning shift

QUYỀN LỢI:
- Lương 8-15 triệu
- Tips
- Coffee training
- Uniform provided`,
        requirements: '- Barista\n- Coffee Preparation\n- Customer Service\n- Latte Art\n- Hygiene',
        benefits: '- Lương 8-15 triệu\n- Tips\n- Đào tạo coffee\n- Đồng phục',
        salaryMin: 8000000,
        salaryMax: 15000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Coffee Brewing', 'Latte Art', 'Customer Service', 'Menu Knowledge', 'Hygiene']
    },
    // IT - Additional roles
    {
        title: 'Python Developer',
        industry: 'Công nghệ thông tin',
        description: `Tuyển dụng Python Developer phát triển ứng dụng Python.

MÔ TẢ CÔNG VIỆC:
- Backend development với Python
- API development
- Database design
- Code review
- Documentation

YÊU CẦU:
- 3+ năm Python
- Django/FastAPI
- PostgreSQL
- REST API
- Git

QUYỀN LỢI:
- Lương 25-45 triệu
- Tech conferences
- Learning budget
- Remote options`,
        requirements: '- Python\n- Django/FastAPI\n- PostgreSQL\n- REST API\n- Git',
        benefits: '- Lương 25-45 triệu\n- Conference\n- Learning budget\n- Remote',
        salaryMin: 25000000,
        salaryMax: 45000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'REST API']
    },
    {
        title: 'Java Developer',
        industry: 'Công nghệ thông tin',
        description: `Tuyển dụng Java Developer phát triển ứng dụng Java.

MÔ TẢ CÔNG VIỆC:
- Java application development
- Spring framework
- Microservices
- Database integration
- Testing

YÊU CẦU:
- 3+ năm Java
- Spring Boot
- Microservices
- SQL
- Agile

QUYỀN LỢI:
- Lương 28-50 triệu
- Certification support
- Training
- Modern tech`,
        requirements: '- Java\n- Spring Boot\n- Microservices\n- SQL\n- Agile',
        benefits: '- Lương 28-50 triệu\n- Cert support\n- Training',
        salaryMin: 28000000,
        salaryMax: 50000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Java', 'Spring Boot', 'Microservices', 'SQL', 'Maven']
    },
    {
        title: 'QA Engineer',
        industry: 'Công nghệ thông tin',
        description: `Tuyển dụng QA Engineer đảm bảo chất lượng phần mềm.

MÔ TẢ CÔNG VIỆC:
- Test planning
- Test case creation
- Manual/Automation testing
- Bug reporting
- Quality metrics

YÊU CẦU:
- 2+ năm QA
- Testing tools
- SQL basics
- Analytical skills
- Communication

QUYỀN LỢI:
- Lương 15-30 triệu
- Testing certifications
- Training
- Career growth`,
        requirements: '- QA Testing\n- Selenium\n- SQL\n- Test Planning\n- Bug Reporting',
        benefits: '- Lương 15-30 triệu\n- Cert support\n- Training',
        salaryMin: 15000000,
        salaryMax: 30000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['QA Testing', 'Selenium', 'SQL', 'Test Planning', 'Bug Reporting']
    },
    {
        title: 'Business Analyst',
        industry: 'Kinh doanh / Marketing',
        description: `Tuyển dụng Business Analyst phân tích nghiệp vụ.

MÔ TẢ CÔNG VIỆC:
- Requirements gathering
- Process analysis
- Data analysis
- Stakeholder management
- Solution design

YÊU CẦU:
- 3+ năm BA experience
- Analytical skills
- Documentation
- Communication
- SQL basics

QUYỀN LỢI:
- Lương 22-40 triệu
- Certification support
- Training
- Career path`,
        requirements: '- Business Analysis\n- Requirements\n- Data Analysis\n- SQL\n- Communication',
        benefits: '- Lương 22-40 triệu\n- Cert support\n- Training\n- Career path',
        salaryMin: 22000000,
        salaryMax: 40000000,
        location: 'TP. Hồ Chí Minh',
        jobType: 'FULL_TIME',
        skills: ['Business Analysis', 'Requirements Gathering', 'Data Analysis', 'SQL', 'Process Modeling']
    },
    {
        title: 'Sales Manager',
        industry: 'Kinh doanh / Marketing',
        description: `Tuyển dụng Sales Manager quản lý kinh doanh.

MÔ TẢ CÔNG VIỆC:
- Sales strategy
- Team leadership
- Target achievement
- Client relationships
- Forecasting

YÊU CẦU:
- 5+ năm Sales
- Leadership experience
- Track record
- Communication
- Strategic thinking

QUYỀN LỢI:
- Lương 30-60 triệu
- High commission
- Car allowance
- Leadership role`,
        requirements: '- Sales Management\n- Leadership\n- B2B Sales\n- Negotiation\n- Strategy',
        benefits: '- Lương 30-60 triệu\n- Commission cao\n- Xe\n- Leader',
        salaryMin: 30000000,
        salaryMax: 60000000,
        location: 'Hà Nội',
        jobType: 'FULL_TIME',
        skills: ['Sales Management', 'Leadership', 'B2B Sales', 'Negotiation', 'Strategic Planning']
    },
    // Part-time/Remote jobs
    {
        title: 'Remote React Developer',
        industry: 'Công nghệ thông tin',
        description: `Tuyển dụng Remote React Developer làm việc từ xa.

MÔ TẢ CÔNG VIỆC:
- Frontend development
- Remote collaboration
- Code reviews
- Documentation

YÊU CẦU:
- 3+ năm React
- English communication
- Self-motivated
- Time management

QUYỀN LỢI:
- Lương competitive
- Fully remote
- Flexible hours
- Global team`,
        requirements: '- React\n- Remote Work\n- English\n- Self-motivated',
        benefits: '- Lương competitive\n- Remote 100%\n- Giờ linh hoạt',
        salaryMin: 25000000,
        salaryMax: 50000000,
        location: 'Remote',
        jobType: 'REMOTE',
        skills: ['React', 'TypeScript', 'Remote Work', 'Communication']
    },
    {
        title: 'Freelance Content Writer',
        industry: 'Báo chí / Truyền thông',
        description: `Tuyển dụng Freelance Content Writer viết nội dung.

MÔ TẢ CÔNG VIỆC:
- Article writing
- Blog posts
- SEO content
- Research

YÊU CẦU:
- 1+ năm writing
- Portfolio
- SEO knowledge
- Deadlines

QUYỀN LỢI:
- Per-project payment
- Flexible schedule
- Home office`,
        requirements: '- Content Writing\n- SEO\n- Research\n- Deadline',
        benefits: '- Thanh toán theo dự án\n- Linh hoạt\n- Làm ở nhà',
        salaryMin: 10000000,
        salaryMax: 25000000,
        location: 'Remote',
        jobType: 'PART_TIME',
        skills: ['Content Writing', 'SEO', 'Research', 'Copywriting']
    },
    {
        title: 'Intern Frontend Developer',
        industry: 'Công nghệ thông tin',
        description: `Tuyển dụng Intern Frontend Developer thực tập.

MÔ TẢ CÔNG VIỆC:
- Learn và assist
- Code development
- Bug fixing
- Documentation

YÊU CẦU:
- IT student/graduated
- HTML/CSS/JS basics
- Willing to learn
- Teamwork

QUYỀN LỢI:
- Stipend 5-8 triệu
- Mentorship
- Training
- Full-time opportunity`,
        requirements: '- HTML/CSS/JS\n- Basic React\n- Learning attitude\n- Teamwork',
        benefits: '- Stipend 5-8 triệu\n- Mentorship\n- Đào tạo\n- Cơ hội full-time',
        salaryMin: 5000000,
        salaryMax: 8000000,
        location: 'Hà Nội',
        jobType: 'INTERNSHIP',
        skills: ['HTML', 'CSS', 'JavaScript', 'React Basics', 'Git']
    },
];

function getLogoUrl(companyName: string): string {
    // Using UI Avatars for professional looking initials
    const initials = companyName.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=0D8ABC&color=fff&size=128&font-size=0.4&bold=true`;
}

function generateSlug(title: string, index: number): string {
    const slug = title.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, 'd')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
    return `${slug}-${Date.now()}-${index}`;
}

async function main() {
    console.log('🌱 Starting seed...');

    // 1. Clean existing data
    console.log('🧹 Cleaning existing data...');
    await prisma.application.deleteMany();
    await prisma.savedJob.deleteMany();
    await prisma.job.deleteMany();
    await prisma.resume.deleteMany();
    await prisma.cV.deleteMany();
    await prisma.notification.deleteMany();
    await prisma.employerProfile.deleteMany();
    await prisma.candidateProfile.deleteMany();
    await prisma.company.deleteMany();
    await prisma.skill.deleteMany();
    await prisma.industry.deleteMany();
    await prisma.searchKeyword.deleteMany();
    await prisma.user.deleteMany();

    console.log('✅ Cleaned existing data');

    // 2. Create Industries
    console.log('🏭 Creating industries...');
    const createdIndustries = await Promise.all(
        industries.map(async (name) => {
            const slug = name.toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-');
            return prisma.industry.create({
                data: { name, slug }
            });
        })
    );
    console.log(`✅ Created ${createdIndustries.length} industries`);

    // 3. Create Skills
    console.log('🎯 Creating skills...');
    const allSkills: string[] = [];
    Object.values(skillsByCategory).forEach(skills => {
        allSkills.push(...skills);
    });
    const uniqueSkills = [...new Set(allSkills)];

    const skillCategories = ['Frontend', 'Backend', 'Database', 'DevOps', 'AI/ML', 'Mobile', 'Data', 'Design', 'Marketing', 'Business', 'Finance', 'HR', 'Sales', 'Engineering', 'Medical', 'Education', 'Legal', 'Logistics', 'Media', 'Hospitality'];

    await Promise.all(
        uniqueSkills.map(async (skillName, index) => {
            const category = skillCategories[index % skillCategories.length];
            return prisma.skill.create({
                data: { name: skillName, category }
            });
        })
    );
    console.log(`✅ Created ${uniqueSkills.length} skills`);

    // 4. Create Users (3 roles)
    console.log('👥 Creating users...');

    // Admin user
    const adminUser = await prisma.user.create({
        data: {
            email: 'admin@jobnow.com',
            name: 'Admin JobNow',
            password: hashedPassword,
            role: 'ADMIN',
            image: 'https://ui-avatars.com/api/?name=AD&background=6366f1&color=fff&size=128',
        }
    });

    // Employer user
    const employerUser = await prisma.user.create({
        data: {
            email: 'employer@jobnow.com',
            name: 'Employer Demo',
            password: hashedPassword,
            role: 'EMPLOYER',
            image: 'https://ui-avatars.com/api/?name=EM&background=10b981&color=fff&size=128',
            employerProfile: {
                create: {
                    position: 'HR Manager',
                }
            }
        }
    });

    // Candidate user
    const candidateUser = await prisma.user.create({
        data: {
            email: 'candidate@jobnow.com',
            name: 'Candidate Demo',
            password: hashedPassword,
            role: 'CANDIDATE',
            image: 'https://ui-avatars.com/api/?name=CD&background=f59e0b&color=fff&size=128',
            candidateProfile: {
                create: {
                    phone: '0123456789',
                    location: 'Hà Nội',
                    bio: 'Tôi là một ứng viên năng động, luôn tìm kiếm cơ hội để phát triển sự nghiệp trong ngành Công nghệ thông tin.',
                    yearsExp: 2,
                    desiredSalary: 25000000,
                    desiredJobType: 'FULL_TIME',
                    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
                }
            }
        }
    });

    console.log(`✅ Created 3 users: admin@jobnow.com, employer@jobnow.com, candidate@jobnow.com (password: 123456)`);

    // 5. Create Companies
    console.log('🏢 Creating companies...');
    const createdCompanies = await Promise.all(
        companiesData.map(async (companyData) => {
            const slug = companyData.name.toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-');

            return prisma.company.create({
                data: {
                    name: companyData.name,
                    slug: `${slug}-${Date.now()}`,
                    logo: getLogoUrl(companyData.name),
                    website: companyData.website,
                    description: companyData.description,
                    industry: companyData.industry,
                    size: companyData.size,
                    locations: [companyData.location],
                    verified: Math.random() > 0.3, // 70% verified
                }
            });
        })
    );
    console.log(`✅ Created ${createdCompanies.length} companies`);

    // 6. Create Jobs (50 jobs)
    console.log('📋 Creating jobs...');

    const jobsData = jobTemplates.slice(0, 50); // Ensure we have 50 jobs

    await Promise.all(
        jobsData.map(async (jobData, index) => {
            const company = createdCompanies[index % createdCompanies.length];
            const industry = createdIndustries.find(i => i.name === jobData.industry) || createdIndustries[0];

            return prisma.job.create({
                data: {
                    title: jobData.title,
                    slug: generateSlug(jobData.title, index),
                    description: jobData.description,
                    requirements: jobData.requirements,
                    benefits: jobData.benefits,
                    salaryMin: jobData.salaryMin,
                    salaryMax: jobData.salaryMax,
                    location: jobData.location,
                    jobType: jobData.jobType as any,
                    status: 'ACTIVE',
                    skills: jobData.skills,
                    viewCount: Math.floor(Math.random() * 500) + 50,
                    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
                    companyId: company.id,
                    industryId: industry.id,
                    postedById: employerUser.id,
                }
            });
        })
    );
    console.log(`✅ Created ${jobsData.length} jobs`);

    // 7. Create some sample applications
    console.log('📝 Creating sample applications...');
    const allJobs = await prisma.job.findMany({ take: 10 });

    if (allJobs.length > 0 && candidateUser) {
        await Promise.all(
            allJobs.slice(0, 5).map(async (job) => {
                return prisma.application.create({
                    data: {
                        jobId: job.id,
                        candidateId: candidateUser.id,
                        status: 'PENDING',
                        coverLetter: 'Tôi rất quan tâm đến vị trí này và mong muốn được tham gia đóng góp vào công ty của quý vị.',
                    }
                });
            })
        );
        console.log(`✅ Created 5 sample applications`);
    }

    // 8. Create sample search keywords
    console.log('🔍 Creating search keywords...');
    const keywords = [
        { base: 'developer', suggestion: 'react developer', type: 'keyword_suggestion' },
        { base: 'developer', suggestion: 'javascript developer', type: 'keyword_suggestion' },
        { base: 'developer', suggestion: 'frontend developer jobs', type: 'related_keyword' },
        { base: 'marketing', suggestion: 'digital marketing', type: 'keyword_suggestion' },
        { base: 'marketing', suggestion: 'marketing manager', type: 'related_keyword' },
        { base: 'job', suggestion: 'tuyển dụng', type: 'keyword_suggestion' },
        { base: 'job', suggestion: 'việc làm it', type: 'related_keyword' },
    ];

    await Promise.all(
        keywords.map(async (kw) => {
            return prisma.searchKeyword.create({
                data: {
                    baseKeyword: kw.base,
                    keywordSuggestion: kw.suggestion,
                    keywordType: kw.type,
                    embedding: Array(1536).fill(0).map(() => Math.random()),
                    isActive: true,
                }
            });
        })
    );
    console.log(`✅ Created ${keywords.length} search keywords`);

    console.log('\n🎉 Seed completed successfully!');
    console.log('\n📧 Test accounts:');
    console.log('   Admin: admin@jobnow.com / 123456');
    console.log('   Employer: employer@jobnow.com / 123456');
    console.log('   Candidate: candidate@jobnow.com / 123456');
    console.log(`\n📊 Total: ${createdCompanies.length} companies, ${jobsData.length} jobs`);
}

main()
    .catch((e) => {
        console.error('❌ Seed error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
