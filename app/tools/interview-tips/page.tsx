"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { LightBulbIcon, ChevronDownIcon, ChevronUpIcon, CheckCircleIcon, ClockIcon, UserGroupIcon, BriefcaseIcon, DocumentTextIcon, ChatBubbleLeftRightIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";

interface TipCategory { id: string; title: string; icon: React.ReactNode; tips: { title: string; content: string }[]; }

const TIP_CATEGORIES: TipCategory[] = [
    {
        id: "prepare", title: "Chuẩn bị trước phỏng vấn", icon: <DocumentTextIcon className="w-6 h-6" />,
        tips: [
            { title: "Nghiên cứu công ty", content: "Tìm hiểu kỹ về công ty: lịch sử, sản phẩm/dịch vụ, văn hóa doanh nghiệp, tin tức gần đây." },
            { title: "Phân tích JD", content: "Đọc kỹ mô tả công việc, xác định yêu cầu quan trọng và chuẩn bị ví dụ thể hiện kỹ năng." },
            { title: "Chuẩn bị câu hỏi thường gặp", content: "Luyện tập trả lời: 'Giới thiệu về bản thân', 'Điểm mạnh/yếu', 'Tại sao muốn làm việc ở đây'." },
            { title: "Chuẩn bị portfolio", content: "Mang theo portfolio, sản phẩm đã làm, hoặc các dự án tiêu biểu." }
        ]
    },
    {
        id: "dress", title: "Trang phục & Giao diện", icon: <UserGroupIcon className="w-6 h-6" />,
        tips: [
            { title: "Ăn mặc chỉnh tề", content: "Chọn trang phục lịch sự, phù hợp với văn hóa công ty. Với công ty truyền thống nên mặc vest." },
            { title: "Ảnh nền/video call", content: "Nếu phỏng vấn online, đảm bảo ảnh nền sạch sẽ, ánh sáng tốt, kiểm tra âm thanh trước 10-15 phút." },
            { title: "Ngôn ngữ cơ thể", content: "Giữ tư thế thẳng, giao tiếp mắt tự tin, mỉm cười thân thiện." }
        ]
    },
    {
        id: "during", title: "Trong phỏng vấn", icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
        tips: [
            { title: "Quy tắc 80/20", content: "Lắng nghe 80% thời gian, nói 20%. Đặt câu hỏi để hiểu rõ hơn." },
            { title: "Sử dụng phương pháp STAR", content: "Kể về kinh nghiệm: Situation → Task → Action → Result. Giúp câu trả lời mạch lạc." },
            { title: "Xử lý câu hỏi khó", content: "Nếu không biết, thừa nhận và nói sẽ tìm hiểu thêm. Không bao giờ nói dối." },
            { title: "Đặt câu hỏi", content: "Chuẩn bị 3-5 câu hỏi về đội nhóm, dự án sắp tới, cơ hội phát triển." }
        ]
    },
    {
        id: "after", title: "Sau phỏng vấn", icon: <HandThumbUpIcon className="w-6 h-6" />,
        tips: [
            { title: "Gửi email cảm ơn", content: "Gửi email cảm ơn trong vòng 24 giờ. Nhắc lại điểm mạnh và sự hứng thú với vị trí." },
            { title: "Theo dõi tiến trình", content: "Nếu sau thời gian hứa hẹn mà chưa phản hồi, có thể gửi email nhắc nhở nhẹ nhàng." },
            { title: "Rút kinh nghiệm", content: "Sau mỗi buổi phỏng vấn, ghi chú những điểm tốt và cần cải thiện." }
        ]
    }
];

export default function InterviewTipsPage() {
    const [expandedCategory, setExpandedCategory] = useState<string>("prepare");

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <main style={{ flex: 1, padding: "2rem 0", background: "var(--bg)" }}>
                <div className="container-xl">
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "64px", height: "64px", borderRadius: "16px", background: "var(--primary)", marginBottom: "1rem" }}>
                                <LightBulbIcon className="w-8 h-8" style={{ color: "white" }} />
                            </div>
                            <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.5rem" }}>Mẹo phỏng vấn</h1>
                            <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>Hướng dẫn toàn diện từ chuẩn bị đến kết thúc buổi phỏng vấn</p>
                        </div>

                        <div style={{ display: "grid", gap: "1rem" }}>
                            {TIP_CATEGORIES.map((category) => (
                                <div key={category.id} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px", overflow: "hidden" }}>
                                    <button onClick={() => setExpandedCategory(expandedCategory === category.id ? "" : category.id)} style={{ width: "100%", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>{category.icon}</div>
                                            <span style={{ fontWeight: 600, fontSize: "1.0625rem", color: "var(--text)" }}>{category.title}</span>
                                        </div>
                                        {expandedCategory === category.id ? <ChevronUpIcon className="w-5 h-5" style={{ color: "var(--text-muted)" }} /> : <ChevronDownIcon className="w-5 h-5" style={{ color: "var(--text-muted)" }} />}
                                    </button>
                                    {expandedCategory === category.id && (
                                        <div style={{ padding: "0 1.5rem 1.5rem", borderTop: "1px solid var(--border)" }}>
                                            <div style={{ display: "grid", gap: "1rem", marginTop: "1.25rem" }}>
                                                {category.tips.map((tip, index) => (
                                                    <div key={index} style={{ padding: "1rem", background: "var(--bg)", borderRadius: "10px" }}>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                                            <CheckCircleIcon className="w-5 h-5" style={{ color: "var(--primary)" }} />
                                                            <span style={{ fontWeight: 600, color: "var(--text)" }}>{tip.title}</span>
                                                        </div>
                                                        <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem", lineHeight: 1.6, margin: 0 }}>{tip.content}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: "2rem", padding: "1.5rem", background: "linear-gradient(135deg, var(--primary) 0%, #1d4ed8 100%)", borderRadius: "16px", color: "white" }}>
                            <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}><ClockIcon className="w-5 h-5" />Nhắc nhở quan trọng</h3>
                            <div style={{ display: "grid", gap: "0.75rem" }}>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}><span style={{ fontWeight: 700 }}>1.</span><span>Đến đúng giờ hoặc sớm 5-10 phút</span></div>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}><span style={{ fontWeight: 700 }}>2.</span><span>Mang theo CV bản cứng và giấy tờ cần thiết</span></div>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}><span style={{ fontWeight: 700 }}>3.</span><span>Tắt điện thoại hoặc để chế độ im lặng</span></div>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}><span style={{ fontWeight: 700 }}>4.</span><span>Trả lời trung thực và tự tin</span></div>
                                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}><span style={{ fontWeight: 700 }}>5.</span><span>Luôn giữ thái độ tích cực và sẵn sàng học hỏi</span></div>
                            </div>
                        </div>

                        <div style={{ marginTop: "2rem", textAlign: "center", padding: "1.5rem", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "16px" }}>
                            <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.75rem" }}>Luyện tập phỏng vấn với AI</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem", marginBottom: "1rem" }}>Thực hành phỏng vấn với AI để tự tin hơn</p>
                            <a href="/candidate/mock-interview" className="btn-primary" style={{ display: "inline-flex", padding: "0.75rem 1.5rem", textDecoration: "none" }}><BriefcaseIcon className="w-5 h-5" style={{ marginRight: "0.5rem" }} />Trải nghiệm ngay</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
