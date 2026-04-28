const fs = require('fs');

const seedFile = 'prisma/seed.ts';
let code = fs.readFileSync(seedFile, 'utf8');

// Find the start and end of jobTemplates array
const startIndex = code.indexOf('const jobTemplates = [');
const endIndex = code.indexOf('function getLogoUrl');

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find jobTemplates in seed.ts");
    process.exit(1);
}

// Find the actual end of the array (];) before getLogoUrl
const arrayEndIndex = code.lastIndexOf('];', endIndex);

if (arrayEndIndex === -1 || arrayEndIndex < startIndex) {
    console.error("Could not find end of jobTemplates array in seed.ts");
    process.exit(1);
}

const jobsByIndustryCode = `const jobsByIndustry: Record<string, any[]> = {
    'Công nghệ thông tin': [
        { title: 'Senior Fullstack Developer', exp: 4, ageMin: 25, ageMax: 35, sMin: 40000000, sMax: 65000000, skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'] },
        { title: 'System Analyst', exp: 3, ageMin: 24, ageMax: 40, sMin: 30000000, sMax: 50000000, skills: ['System Design', 'SQL', 'UML', 'Business Analysis'] }
    ],
    'Viễn thông': [
        { title: 'Kỹ Sư Mạng Viễn Thông', exp: 2, ageMin: 23, ageMax: 35, sMin: 20000000, sMax: 35000000, skills: ['Networking', 'Cisco', 'Linux', 'Telecommunication'] },
        { title: 'Chuyên Viên Tối Ưu Mạng', exp: 3, ageMin: 25, ageMax: 45, sMin: 25000000, sMax: 45000000, skills: ['RF Optimization', '4G/5G', 'Data Analysis'] }
    ],
    'Tài chính / Ngân hàng': [
        { title: 'Chuyên Viên Phân Tích Tín Dụng', exp: 2, ageMin: 24, ageMax: 35, sMin: 20000000, sMax: 35000000, skills: ['Credit Analysis', 'Finance', 'Risk Management'] },
        { title: 'Quản Lý Khách Hàng Doanh Nghiệp (RM)', exp: 3, ageMin: 26, ageMax: 40, sMin: 25000000, sMax: 50000000, skills: ['B2B Sales', 'Banking', 'Relationship Management'] }
    ],
    'Hàng không': [
        { title: 'Kỹ Sư Bảo Dưỡng Tàu Bay', exp: 3, ageMin: 25, ageMax: 45, sMin: 30000000, sMax: 60000000, skills: ['Aviation Maintenance', 'Mechanical Engineering', 'Safety Standards'] },
        { title: 'Chuyên Viên Điều Hành Bay', exp: 2, ageMin: 24, ageMax: 35, sMin: 25000000, sMax: 45000000, skills: ['Flight Operations', 'English', 'Time Management'] }
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
    return \`Chúng tôi đang tìm kiếm \${title} đầy tài năng để gia nhập đội ngũ của công ty.

MÔ TẢ CÔNG VIỆC CHI TIẾT:
- Chịu trách nhiệm chính trong việc thực hiện và hoàn thành các mục tiêu công việc liên quan đến vị trí \${title}.
- Lên kế hoạch, giám sát và báo cáo tiến độ công việc định kỳ cho cấp quản lý.
- Phối hợp chặt chẽ với các phòng ban liên quan để đảm bảo luồng công việc xuyên suốt và hiệu quả.
- Chủ động phát hiện các rủi ro, vướng mắc trong quá trình làm việc và đề xuất giải pháp xử lý kịp thời.
- Cập nhật kiến thức chuyên môn, áp dụng công nghệ và quy trình mới để nâng cao chất lượng công việc.

YÊU CẦU CÔNG VIỆC:
- Tối thiểu \${exp} năm kinh nghiệm ở vị trí tương đương trong ngành \${industry}.
- Độ tuổi từ \${ageMin} đến \${ageMax} tuổi, sức khỏe tốt.
- Tốt nghiệp Đại học trở lên các chuyên ngành liên quan.
- Có kỹ năng giao tiếp, đàm phán và giải quyết vấn đề tốt.
- Thành thạo các công cụ, phần mềm chuyên dụng: \${skills.join(', ')}.\`;
}

function generateBenefits(sMin, sMax) {
    const minFmt = new Intl.NumberFormat('vi-VN').format(sMin);
    const maxFmt = new Intl.NumberFormat('vi-VN').format(sMax);
    return \`- Mức lương cạnh tranh: \${minFmt} - \${maxFmt} VNĐ/tháng.
- Lương tháng 13, thưởng Lễ, Tết và thưởng hiệu quả công việc (KPI).
- Đóng BHXH, BHYT, BHTN đầy đủ theo quy định của pháp luật.
- Bảo hiểm sức khỏe cao cấp (PVI/Bảo Việt) cho nhân sự và người thân.
- Môi trường làm việc chuyên nghiệp, năng động, có lộ trình thăng tiến rõ ràng.
- Khám sức khỏe định kỳ hàng năm và các chuyến du lịch nghỉ mát do công ty tổ chức.
- Tham gia các khóa đào tạo nâng cao nghiệp vụ trong và ngoài nước.\`;
}

function generateRequirements(exp, ageMin, ageMax, skills) {
    return \`- Kinh nghiệm: \${exp}+ năm
- Độ tuổi: \${ageMin} - \${ageMax}
- Kỹ năng: \${skills.join(', ')}\`;
}
`;

const newCode = code.slice(0, startIndex) + jobsByIndustryCode + code.slice(arrayEndIndex + 2); // +2 for '];'

// Now we need to modify the job creation loop
const creationStartMarker = "const jobsData = jobTemplates.slice(0, 50);";
const creationEndIndex = newCode.indexOf("console.log(`✅ Created ${jobsData.length} jobs`);");

if (creationEndIndex === -1) {
    console.error("Could not find job creation loop end marker");
    process.exit(1);
}

// Find the line containing `const jobsData = ` up to the actual loop start
const startSearchMarker = "const jobsData =";
const loopStartIndex = newCode.indexOf(startSearchMarker, startIndex);

if (loopStartIndex === -1) {
    console.error("Could not find job creation loop start marker");
    process.exit(1);
}

const jobCreationCode = `
    let totalJobsCreated = 0;
    
    await Promise.all(
        createdCompanies.map(async (company, index) => {
            const industry = createdIndustries.find(i => i.name === company.industry) || createdIndustries[0];
            const jobsForIndustry = jobsByIndustry[industry.name];
            
            if (!jobsForIndustry) return;

            // Generate 2 jobs for each company based on its industry
            for (let i = 0; i < 2; i++) {
                const jobTemplate = jobsForIndustry[i % jobsForIndustry.length];
                const jobTitle = jobTemplate.title;
                const location = company.locations && company.locations.length > 0 ? company.locations[0] : 'Hà Nội';
                
                await prisma.job.create({
                    data: {
                        title: jobTitle,
                        slug: generateSlug(jobTitle, index * 10 + i),
                        description: generateJobDescription(jobTitle, industry.name, jobTemplate.exp, jobTemplate.ageMin, jobTemplate.ageMax, jobTemplate.skills),
                        requirements: generateRequirements(jobTemplate.exp, jobTemplate.ageMin, jobTemplate.ageMax, jobTemplate.skills),
                        benefits: generateBenefits(jobTemplate.sMin, jobTemplate.sMax),
                        salaryMin: jobTemplate.sMin,
                        salaryMax: jobTemplate.sMax,
                        location: location,
                        jobType: 'FULL_TIME',
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
                totalJobsCreated++;
            }
        })
    );
    
    console.log(\`✅ Created \${totalJobsCreated} jobs\`);`;

const finalCode = newCode.slice(0, loopStartIndex) + jobCreationCode + newCode.slice(creationEndIndex + "console.log(`✅ Created ${jobsData.length} jobs`);".length);

fs.writeFileSync(seedFile, finalCode);
console.log("Seed file updated successfully.");
