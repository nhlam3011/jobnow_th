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

// Company data with realistic logos
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

// Job templates mapped by industry
const jobsByIndustry: Record<string, any[]> = {
    'Công nghệ thông tin': [
        { title: 'Senior Fullstack Developer', exp: 4, ageMin: 25, ageMax: 35, sMin: 40000000, sMax: 65000000, skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'] },
        { title: 'Frontend Developer (React)', exp: 2, ageMin: 22, ageMax: 30, sMin: 20000000, sMax: 35000000, skills: ['React', 'TypeScript', 'Tailwind CSS'] },
        { title: 'Backend Engineer (Node.js)', exp: 3, ageMin: 24, ageMax: 35, sMin: 25000000, sMax: 45000000, skills: ['Node.js', 'Express', 'PostgreSQL', 'Docker'] },
        { title: 'System Analyst', exp: 3, ageMin: 24, ageMax: 40, sMin: 30000000, sMax: 50000000, skills: ['System Design', 'SQL', 'UML', 'Business Analysis'] },
        { title: 'DevOps Engineer', exp: 3, ageMin: 25, ageMax: 38, sMin: 35000000, sMax: 60000000, skills: ['AWS', 'Kubernetes', 'CI/CD', 'Terraform'] }
    ],
    'Viễn thông': [
        { title: 'Kỹ Sư Mạng Viễn Thông', exp: 2, ageMin: 23, ageMax: 35, sMin: 20000000, sMax: 35000000, skills: ['Networking', 'Cisco', 'Linux', 'Telecommunication'] },
        { title: 'Chuyên Viên Tối Ưu Mạng', exp: 3, ageMin: 25, ageMax: 45, sMin: 25000000, sMax: 45000000, skills: ['RF Optimization', '4G/5G', 'Data Analysis'] },
        { title: 'Kỹ Sư Core Network', exp: 4, ageMin: 26, ageMax: 40, sMin: 30000000, sMax: 55000000, skills: ['Core Network', 'SIP', 'IP Networking'] }
    ],
    'Tài chính / Ngân hàng': [
        { title: 'Chuyên Viên Phân Tích Tín Dụng', exp: 2, ageMin: 24, ageMax: 35, sMin: 20000000, sMax: 35000000, skills: ['Credit Analysis', 'Finance', 'Risk Management'] },
        { title: 'Quản Lý Khách Hàng Doanh Nghiệp (RM)', exp: 3, ageMin: 26, ageMax: 40, sMin: 25000000, sMax: 50000000, skills: ['B2B Sales', 'Banking', 'Relationship Management'] },
        { title: 'Chuyên Viên Thẩm Định Tài Sản', exp: 2, ageMin: 23, ageMax: 35, sMin: 18000000, sMax: 30000000, skills: ['Asset Valuation', 'Real Estate', 'Banking Law'] }
    ],
    'Hàng không': [
        { title: 'Kỹ Sư Bảo Dưỡng Tàu Bay', exp: 3, ageMin: 25, ageMax: 45, sMin: 30000000, sMax: 60000000, skills: ['Aviation Maintenance', 'Mechanical Engineering', 'Safety Standards'] },
        { title: 'Chuyên Viên Điều Hành Bay', exp: 2, ageMin: 24, ageMax: 35, sMin: 25000000, sMax: 45000000, skills: ['Flight Operations', 'English', 'Time Management'] },
        { title: 'Tiếp Viên Hàng Không', exp: 0, ageMin: 20, ageMax: 28, sMin: 15000000, sMax: 30000000, skills: ['Communication', 'Customer Service', 'English'] }
    ],
    'Bất động sản': [
        { title: 'Trưởng Phòng Kinh Doanh BĐS', exp: 5, ageMin: 28, ageMax: 45, sMin: 30000000, sMax: 80000000, skills: ['Real Estate Sales', 'Leadership', 'Negotiation'] },
        { title: 'Chuyên Viên Tư Vấn Đầu Tư', exp: 2, ageMin: 23, ageMax: 35, sMin: 15000000, sMax: 40000000, skills: ['Investment Consulting', 'Communication', 'Market Analysis'] }
    ],
    'Sản xuất': [
        { title: 'Quản Đốc Phân Xưởng', exp: 5, ageMin: 30, ageMax: 50, sMin: 25000000, sMax: 45000000, skills: ['Production Management', 'Lean Manufacturing', 'Leadership'] },
        { title: 'Kỹ Sư Quản Lý Chất Lượng (QA/QC)', exp: 2, ageMin: 24, ageMax: 40, sMin: 18000000, sMax: 30000000, skills: ['QA/QC', 'ISO 9001', 'Process Improvement'] }
    ],
    'Thương mại điện tử': [
        { title: 'E-commerce Campaign Manager', exp: 3, ageMin: 25, ageMax: 35, sMin: 25000000, sMax: 45000000, skills: ['E-commerce', 'Campaign Management', 'Digital Marketing'] },
        { title: 'Chuyên Viên Phân Tích Dữ Liệu', exp: 2, ageMin: 23, ageMax: 35, sMin: 20000000, sMax: 40000000, skills: ['Data Analysis', 'SQL', 'Python', 'PowerBI'] }
    ],
    'Kỹ thuật': [
        { title: 'Kỹ Sư Thiết Kế Cơ Khí', exp: 3, ageMin: 25, ageMax: 40, sMin: 20000000, sMax: 35000000, skills: ['AutoCAD', 'SolidWorks', 'Mechanical Design'] },
        { title: 'Kỹ Sư Tự Động Hóa', exp: 2, ageMin: 24, ageMax: 35, sMin: 22000000, sMax: 40000000, skills: ['PLC', 'Automation', 'Robotics'] }
    ],
    'Marketing': [
        { title: 'Performance Marketing Manager', exp: 4, ageMin: 26, ageMax: 35, sMin: 30000000, sMax: 55000000, skills: ['Performance Marketing', 'Google Ads', 'Facebook Ads', 'Data Analysis'] },
        { title: 'Senior Content Creator', exp: 2, ageMin: 23, ageMax: 32, sMin: 18000000, sMax: 30000000, skills: ['Content Writing', 'Copywriting', 'SEO', 'Creativity'] }
    ],
    'Kế toán / Kiểm toán': [
        { title: 'Kiểm Toán Viên Trưởng (Senior Auditor)', exp: 4, ageMin: 26, ageMax: 40, sMin: 25000000, sMax: 45000000, skills: ['Auditing', 'CPA', 'Financial Analysis'] },
        { title: 'Kế Toán Tổng Hợp', exp: 3, ageMin: 25, ageMax: 45, sMin: 18000000, sMax: 30000000, skills: ['Accounting', 'Tax', 'Excel'] }
    ],
    'Bảo hiểm': [
        { title: 'Trưởng Nhóm Kinh Doanh Bảo Hiểm', exp: 3, ageMin: 25, ageMax: 45, sMin: 20000000, sMax: 50000000, skills: ['Insurance Sales', 'Team Management', 'Consulting'] },
        { title: 'Chuyên Viên Thẩm Định Bồi Thường', exp: 2, ageMin: 24, ageMax: 40, sMin: 18000000, sMax: 30000000, skills: ['Claims Assessment', 'Insurance Law', 'Attention to Detail'] }
    ],
    'F&B / Nhà hàng': [
        { title: 'Quản Lý Nhà Hàng (Restaurant Manager)', exp: 4, ageMin: 28, ageMax: 45, sMin: 25000000, sMax: 40000000, skills: ['F&B Management', 'Customer Service', 'Leadership'] },
        { title: 'Bếp Trưởng (Head Chef)', exp: 5, ageMin: 30, ageMax: 50, sMin: 30000000, sMax: 50000000, skills: ['Culinary Arts', 'Kitchen Management', 'Menu Creation'] }
    ],
    'Du lịch / Khách sạn': [
        { title: 'Giám Đốc Tiền Sảnh (Front Office Manager)', exp: 5, ageMin: 28, ageMax: 45, sMin: 25000000, sMax: 45000000, skills: ['Hospitality', 'Customer Service', 'English'] },
        { title: 'Chuyên Viên Điều Hành Tour', exp: 2, ageMin: 23, ageMax: 35, sMin: 15000000, sMax: 25000000, skills: ['Tour Operations', 'Planning', 'Problem Solving'] }
    ],
    'Giáo dục / Đào tạo': [
        { title: 'Trưởng Phòng Đào Tạo', exp: 5, ageMin: 30, ageMax: 50, sMin: 30000000, sMax: 50000000, skills: ['Education Management', 'Curriculum Design', 'Leadership'] },
        { title: 'Giảng Viên Tiếng Anh (IELTS)', exp: 3, ageMin: 24, ageMax: 40, sMin: 25000000, sMax: 45000000, skills: ['Teaching', 'IELTS 8.0+', 'Communication'] }
    ]
};

function generateJobDescription(title, industry, exp, ageMin, ageMax, skills) {
    return `Chúng tôi đang tìm kiếm ${title} đầy tài năng để gia nhập đội ngũ của công ty.

MÔ TẢ CÔNG VIỆC CHI TIẾT:
- Chịu trách nhiệm chính trong việc thực hiện và hoàn thành các mục tiêu công việc liên quan đến vị trí ${title}.
- Lên kế hoạch, giám sát và báo cáo tiến độ công việc định kỳ cho cấp quản lý.
- Phối hợp chặt chẽ với các phòng ban liên quan để đảm bảo luồng công việc xuyên suốt và hiệu quả.
- Chủ động phát hiện các rủi ro, vướng mắc trong quá trình làm việc và đề xuất giải pháp xử lý kịp thời.
- Cập nhật kiến thức chuyên môn, áp dụng công nghệ và quy trình mới để nâng cao chất lượng công việc.

YÊU CẦU CÔNG VIỆC:
- Tối thiểu ${exp} năm kinh nghiệm ở vị trí tương đương trong ngành ${industry}.
- Độ tuổi từ ${ageMin} đến ${ageMax} tuổi, sức khỏe tốt.
- Tốt nghiệp Đại học trở lên các chuyên ngành liên quan.
- Có kỹ năng giao tiếp, đàm phán và giải quyết vấn đề tốt.
- Thành thạo các công cụ, phần mềm chuyên dụng: ${skills.join(', ')}.`;
}

function generateBenefits(sMin, sMax) {
    const minFmt = new Intl.NumberFormat('vi-VN').format(sMin);
    const maxFmt = new Intl.NumberFormat('vi-VN').format(sMax);
    return `- Mức lương cạnh tranh: ${minFmt} - ${maxFmt} VNĐ/tháng.
- Lương tháng 13, thưởng Lễ, Tết và thưởng hiệu quả công việc (KPI).
- Đóng BHXH, BHYT, BHTN đầy đủ theo quy định của pháp luật.
- Bảo hiểm sức khỏe cao cấp (PVI/Bảo Việt) cho nhân sự và người thân.
- Môi trường làm việc chuyên nghiệp, năng động, có lộ trình thăng tiến rõ ràng.
- Khám sức khỏe định kỳ hàng năm và các chuyến du lịch nghỉ mát do công ty tổ chức.
- Tham gia các khóa đào tạo nâng cao nghiệp vụ trong và ngoài nước.`;
}

function generateRequirements(exp, ageMin, ageMax, skills) {
    return `- Kinh nghiệm: ${exp}+ năm
- Độ tuổi: ${ageMin} - ${ageMax}
- Kỹ năng: ${skills.join(', ')}`;
}

function getLogoUrl(companyName: string, website?: string): string {
    if (website && website.startsWith('http')) {
        try {
            const domain = new URL(website).hostname.replace('www.', '');
            // Clearbit provides a free logo API based on domain
            return `https://logo.clearbit.com/${domain}`;
        } catch (e) {
            // Fallback to initials if URL is invalid
        }
    }
    // Using UI Avatars for professional looking initials as fallback
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
                    logo: getLogoUrl(companyData.name, companyData.website),
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

    // 6. Create Jobs (70 jobs)
    console.log('📋 Creating jobs...');
    
    let totalJobsCreated = 0;
    const jobTypes = ['FULL_TIME', 'PART_TIME', 'REMOTE', 'INTERNSHIP', 'CONTRACT'] as const;
    
    const jobPromises = Array.from({ length: 70 }).map((_, i) => {
        const company = createdCompanies[i % createdCompanies.length];
        const industry = createdIndustries.find(ind => ind.name === company.industry) || createdIndustries[0];
        const jobsForIndustry = jobsByIndustry[industry.name] || jobsByIndustry['Công nghệ thông tin'];
        const jobTemplate = jobsForIndustry[i % jobsForIndustry.length];
        const jobTitle = jobTemplate.title;
        const location = company.locations && company.locations.length > 0 ? company.locations[0] : 'Hà Nội';
        const jobType = jobTypes[i % jobTypes.length];
        
        return prisma.job.create({
            data: {
                title: jobTitle,
                slug: generateSlug(jobTitle, i),
                description: generateJobDescription(jobTitle, industry.name, jobTemplate.exp, jobTemplate.ageMin, jobTemplate.ageMax, jobTemplate.skills),
                requirements: generateRequirements(jobTemplate.exp, jobTemplate.ageMin, jobTemplate.ageMax, jobTemplate.skills),
                benefits: generateBenefits(jobTemplate.sMin, jobTemplate.sMax),
                salaryMin: jobTemplate.sMin,
                salaryMax: jobTemplate.sMax,
                location: location,
                jobType: jobType,
                status: 'ACTIVE',
                skills: jobTemplate.skills,
                ageMin: jobTemplate.ageMin,
                ageMax: jobTemplate.ageMax,
                experienceYears: jobTemplate.exp,
                viewCount: Math.floor(Math.random() * 500) + 50,
                expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
                companyId: company.id,
                industryId: industry.id,
                postedById: employerUser.id,
            }
        });
    });

    await Promise.all(jobPromises);
    totalJobsCreated = 70;
    
    console.log(`✅ Created ${totalJobsCreated} jobs`);

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
    console.log(`\n📊 Total: ${createdCompanies.length} companies, ${totalJobsCreated} jobs`);
}

main()
    .catch((e) => {
        console.error('❌ Seed error:', e);
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
