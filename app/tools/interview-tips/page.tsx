"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { 
    LightBulbIcon, 
    AcademicCapIcon, 
    ChatBubbleBottomCenterTextIcon, 
    ShieldCheckIcon,
    ArrowRightIcon,
    CheckIcon,
    ClockIcon,
    SparklesIcon
} from "@heroicons/react/24/outline";

const INTERVIEW_STAGES = [
    {
        id: "preparation",
        label: "CHUẨN BỊ",
        title: "Xây dựng nền tảng vững chắc",
        icon: <AcademicCapIcon className="w-6 h-6" />,
        tasks: [
            { t: "Nghiên cứu sâu về sản phẩm & đối thủ", d: "Hiểu rõ giá trị cốt lõi công ty mang lại." },
            { t: "Đối chiếu kỹ năng với JD", d: "Viết ra 3 ví dụ thực tế cho mỗi yêu cầu trong JD." },
            { t: "Soạn thảo bài giới thiệu 90 giây", d: "Tập trung vào thành tựu gần nhất liên quan." },
            { t: "Kiểm tra kỹ thuật (nếu Online)", d: "Đường truyền, mic, camera và ánh sáng." }
        ]
    },
    {
        id: "mindset",
        label: "TÂM THẾ",
        title: "Làm chủ cuộc đối thoại",
        icon: <SparklesIcon className="w-6 h-6" />,
        tasks: [
            { t: "Ngôn ngữ cơ thể tự tin", d: "Duy trì eye-contact 60-70% thời gian." },
            { t: "Nguyên tắc STAR cho mọi câu hỏi", d: "S: Tình huống, T: Nhiệm vụ, A: Hành động, R: Kết quả." },
            { t: "Kỹ năng lắng nghe chủ động", d: "Ghi chú lại các ý chính của người phỏng vấn." },
            { t: "Đặt câu hỏi ngược lại", d: "Thể hiện sự quan tâm đến mục tiêu dài hạn của team." }
        ]
    },
    {
        id: "execution",
        label: "TRẢ LỜI",
        title: "Xử lý các câu hỏi khó",
        icon: <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />,
        tasks: [
            { t: "Tại sao chúng tôi nên chọn bạn?", d: "Tập trung vào giá trị duy nhất bạn mang lại." },
            { t: "Điểm yếu lớn nhất của bạn là gì?", d: "Nói về một kỹ năng đang học và tiến độ hiện tại." },
            { t: "Mức lương mong muốn?", d: "Đưa ra một khoảng dựa trên nghiên cứu thị trường." },
            { t: "Giao tiếp khi không biết câu trả lời", d: "Nêu cách tiếp cận vấn đề thay vì nói 'Tôi không biết'." }
        ]
    }
];

export default function InterviewTipsPage() {
    const [activeStage, setActiveStage] = useState(INTERVIEW_STAGES[0].id);
    const currentData = INTERVIEW_STAGES.find(s => s.id === activeStage)!;

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />
            
            <main style={{ flex: 1, padding: "4rem 1rem" }}>
                <div className="container-xl">
                    <div className="tips-container">
                        {/* Hero Section */}
                        <div className="tips-hero">
                            <div className="hero-icon">
                                <LightBulbIcon className="w-8 h-8 text-white" />
                            </div>
                            <h1>Cẩm nang chinh phục phỏng vấn</h1>
                            <p>Hành trình 3 bước từ chuẩn bị tâm lý đến việc làm chủ mọi tình huống xoay quanh các vị trí Tech & Business.</p>
                        </div>

                        <div className="tips-layout">
                            {/* Navigation Sidebar */}
                            <div className="tips-nav">
                                {INTERVIEW_STAGES.map(stage => (
                                    <button 
                                        key={stage.id}
                                        className={`nav-item ${activeStage === stage.id ? 'active' : ''}`}
                                        onClick={() => setActiveStage(stage.id)}
                                    >
                                        <div className="nav-icon">{stage.icon}</div>
                                        <div className="nav-text">
                                            <label>{stage.label}</label>
                                            <span>{stage.title}</span>
                                        </div>
                                        <ArrowRightIcon className="w-4 h-4 arrow" />
                                    </button>
                                ))}
                            </div>

                            <div className="mock-promo-wrapper">
                                <div className="mock-promo">
                                    <div className="promo-tag">NEW FEATURE</div>
                                    <h4>Luyện tập Mock Interview</h4>
                                    <p>Thực hành phỏng vấn 1-1 với AI để nhận đánh giá chi tiết.</p>
                                    <a href="/candidate/mock-interview">Bắt đầu ngay</a>
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="tips-main">
                                <div className="content-card">
                                    <div className="content-header">
                                        <div className="header-meta">CHƯƠNG HIỆN TẠI</div>
                                        <h2>{currentData.title}</h2>
                                    </div>

                                    <div className="task-list">
                                        {currentData.tasks.map((task, idx) => (
                                            <div key={idx} className="task-item">
                                                <div className="task-check">
                                                    <CheckIcon className="w-5 h-5" />
                                                </div>
                                                <div className="task-body">
                                                    <div className="task-title">{task.t}</div>
                                                    <div className="task-desc">{task.d}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pro-tip-box">
                                        <ShieldCheckIcon className="w-6 h-6 text-primary" />
                                        <div>
                                            <strong>LỜI KHUYÊN CHUYÊN GIA:</strong>
                                            <p>Đừng cố gắng thuộc lòng câu trả lời. Hãy nhớ các "keyword" và câu chuyện nền tảng (Base Story) để linh hoạt thay đổi theo cách hỏi của HR.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="quick-checklist">
                                    <h3><ClockIcon className="w-5 h-5" /> Countdown 24h cuối</h3>
                                    <div className="check-grid">
                                        <div className="check-node">Trang phục phù hợp</div>
                                        <div className="check-node">In sẵn 3 bản CV giấy</div>
                                        <div className="check-node">Xem lại tên người PV</div>
                                        <div className="check-node">Nghỉ ngơi lúc 11h đêm</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <style jsx>{`
                .tips-container { max-width: 1200px; margin: 0 auto; position: relative; }
                .tips-hero { text-align: center; margin-bottom: 3rem; padding: 0 1rem; }
                .hero-icon { width: 64px; height: 64px; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem; box-shadow: 0 10px 20px rgba(var(--primary-rgb), 0.2); }
                .tips-hero h1 { font-size: 2.25rem; font-weight: 800; color: var(--text); letter-spacing: -0.02em; line-height: 1.1; }
                .tips-hero p { color: var(--text-muted); font-size: 1rem; max-width: 600px; margin: 0.75rem auto; line-height: 1.5; }
                @media (max-width: 640px) {
                    .tips-hero h1 { font-size: 1.75rem; }
                    .tips-hero p { font-size: 0.9rem; }
                }

                .tips-layout { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: flex-start; }
                @media (min-width: 1024px) { .tips-layout { grid-template-columns: 340px 1fr; } }

                .tips-nav { display: flex; flex-direction: column; gap: 0.75rem; }
                @media (max-width: 1023px) { 
                    .tips-nav { flex-direction: row; overflow-x: auto; padding: 0.5rem 1rem; margin: 0 -1rem 1.5rem; gap: 0.75rem; scrollbar-width: none; -ms-overflow-style: none; }
                    .tips-nav::-webkit-scrollbar { display: none; }
                    .nav-item { flex-shrink: 0; width: auto; min-width: 160px; padding: 1rem; border-radius: 18px; line-height: 1; }
                    .nav-item .nav-icon { width: 32px; height: 32px; }
                    .nav-item .nav-text label { font-size: 0.55rem; }
                    .nav-item .nav-text span { font-size: 0.8rem; }
                    .nav-item .arrow { display: none; }
                    
                    .mock-promo-wrapper { display: none; } /* Hide promo on mobile to keep focus on tips */
                }
                @media (min-width: 1024px) { .mock-promo-wrapper { display: block; } }

                .nav-item { display: flex; align-items: center; gap: 1.25rem; padding: 1.5rem; background: var(--bg-card); border: 1.5px solid var(--border); border-radius: 24px; cursor: pointer; transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1); text-align: left; position: relative; }
                .nav-item:hover { border-color: var(--primary); transform: translateX(4px); background: rgba(var(--primary-rgb), 0.02); }
                .nav-item.active { background: white; border-color: var(--primary); box-shadow: 0 10px 25px rgba(var(--primary-rgb), 0.12); }
                .nav-item.active:after { content: ''; position: absolute; left: -2px; top: 25%; bottom: 25%; width: 5px; background: var(--primary); border-radius: 0 4px 4px 0; }
                
                @media (max-width: 1023px) {
                    .nav-item.active:after { left: 25%; right: 25%; top: auto; bottom: -2px; width: auto; height: 4px; border-radius: 4px 4px 0 0; }
                    .nav-item:hover { transform: translateY(-4px); }
                }

                .nav-icon { width: 48px; height: 48px; border-radius: 14px; background: var(--bg); display: flex; align-items: center; justify-content: center; color: var(--text-muted); transition: all 0.3s; }
                .nav-item.active .nav-icon { background: rgba(var(--primary-rgb), 0.1); color: var(--primary); }
                
                .nav-text { flex: 1; min-width: 0; }
                .nav-text label { display: block; font-size: 0.65rem; font-weight: 800; color: var(--text-muted); margin-bottom: 0.25rem; letter-spacing: 0.05em; }
                .nav-text span { display: block; font-size: 0.9375rem; font-weight: 700; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                .nav-item .arrow { color: var(--border); transition: all 0.3s; }
                .nav-item.active .arrow { color: var(--primary); transform: translateX(4px); }

                .mock-promo { margin-top: 2rem; padding: 2rem; background: #0F172A; border-radius: 24px; color: white; position: relative; overflow: hidden; }
                .promo-tag { background: var(--cta); font-size: 0.55rem; font-weight: 800; padding: 0.2rem 0.6rem; border-radius: 100px; display: inline-block; margin-bottom: 1rem; }
                .mock-promo h4 { font-size: 1.125rem; margin-bottom: 0.5rem; }
                .mock-promo p { font-size: 0.8rem; opacity: 0.7; margin-bottom: 1.5rem; }
                .mock-promo a { display: block; text-align: center; padding: 0.75rem; background: var(--primary); color: white; border-radius: 12px; font-weight: 700; text-decoration: none; font-size: 0.9rem; transition: all 0.2s; }
                .mock-promo a:hover { filter: brightness(1.2); }

                .content-card { background: var(--bg-card); border: 1.5px solid var(--border); border-radius: 32px; padding: 3rem; box-shadow: var(--shadow-sm); margin-bottom: 2rem; }
                .header-meta { font-size: 0.75rem; font-weight: 800; color: var(--primary); letter-spacing: 0.1em; margin-bottom: 0.75rem; }
                .content-card h2 { font-size: 2rem; font-weight: 800; color: var(--text); margin-bottom: 2.5rem; letter-spacing: -0.02em; }
                @media (max-width: 640px) { 
                    .content-card { padding: 1.75rem 1.5rem; border-radius: 24px; } 
                    .content-card h2 { font-size: 1.5rem; margin-bottom: 1.5rem; }
                    .tips-hero h1 { font-size: 1.75rem; }
                }

                .task-list { display: flex; flex-direction: column; gap: 1.5rem; }
                .task-item { display: flex; gap: 1.25rem; align-items: flex-start; }
                .task-check { width: 28px; height: 28px; border-radius: 50%; background: rgba(var(--primary-rgb), 0.1); color: var(--primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
                .task-title { font-size: 1.0625rem; font-weight: 700; color: var(--text); margin-bottom: 0.375rem; }
                .task-desc { font-size: 0.9375rem; color: var(--text-muted); line-height: 1.6; }

                .pro-tip-box { margin-top: 3.5rem; background: rgba(var(--primary-rgb), 0.04); border-radius: 20px; padding: 1.5rem 2rem; display: flex; gap: 1rem; align-items: flex-start; }
                .pro-tip-box strong { display: block; font-size: 0.65rem; font-weight: 800; color: var(--primary); margin-bottom: 0.35rem; letter-spacing: 0.05em; }
                .pro-tip-box p { font-size: 0.9rem; color: var(--text); line-height: 1.6; margin: 0; }

                .quick-checklist { background: var(--bg-card); border-radius: 28px; border: 1.5px solid var(--border); padding: 2rem; }
                .quick-checklist h3 { font-size: 1.125rem; font-weight: 800; display: flex; align-items: center; gap: 0.625rem; margin-bottom: 1.5rem; }
                .check-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; }
                .check-node { background: var(--bg); padding: 1rem; border-radius: 12px; border: 1.2px solid var(--border); font-size: 0.85rem; font-weight: 600; text-align: center; color: var(--text-muted); }
            `}</style>
        </div>
    );
}
