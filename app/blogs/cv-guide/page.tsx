import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Hướng dẫn viết CV ấn tượng - JobNow",
  description: "Hướng dẫn chi tiết cách viết CV xin việc ấn tượng, vượt qua ATS và gây ấn tượng với nhà tuyển dụng",
};

export default function CVGuidePage() {
  return (
    <>
      <Navbar />
      <div style={{ background: "var(--page-header-bg)", padding: "3rem 0" }}>
        <div className="container-xl">
          <div style={{ maxWidth: "800px" }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--primary)",
                background: "var(--primary-light)",
                padding: "0.375rem 0.75rem",
                borderRadius: "4px",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "1rem",
              }}
            >
              Hướng dẫn
            </span>
            <h1 style={{ fontSize: "2.25rem", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem", color: "var(--text)" }}>
              Hướng Dẫn Viết CV Xin Việc Ấn Tượng
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", color: "var(--text-muted)", fontSize: "0.9375rem" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 600, fontSize: "0.875rem" }}>
                  J
                </div>
                <span style={{ fontWeight: 500 }}>JobNow Team</span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Cập nhật tháng 3/2024
              </span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "2.5rem 0", minHeight: "60vh" }}>
        <div className="container-xl">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "2.5rem" }}>
              <img
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800"
                alt="Hướng dẫn viết CV"
                style={{ width: "100%", height: "auto", maxHeight: "450px", objectFit: "cover" }}
              />
            </div>

            <div style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "var(--text)" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>Tại Sao CV Quan Trọng?</h2>
              <p style={{ marginBottom: "1rem" }}>CV là bộ mặt của bạn trong mắt nhà tuyển dụng. Trung bình, một nhà tuyển dụng dành chỉ 6 giây để quét qua một CV. Nếu CV của bạn không nổi bật trong 6 giây đó, cơ hội phỏng vấn sẽ giảm đáng kể.</p>

              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>Cấu Trúc CV Hoàn Hảo</h2>

              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.75rem" }}>1. Thông Tin Cá Nhân (Header)</h3>
              <p style={{ marginBottom: "0.5rem" }}>Đặt ở đầu trang với thông tin cần thiết:</p>
              <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
                <li>Họ và tên (font size lớn, đậm)</li>
                <li>Email và số điện thoại</li>
                <li>Liên kết LinkedIn (nếu có)</li>
                <li>Portfolio/GitHub (cho ngành kỹ thuật)</li>
                <li>Địa chỉ (không cần chi tiết quá)</li>
              </ul>

              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.75rem" }}>2. Tóm Tắt Chuyên Môn (Summary)</h3>
              <p style={{ marginBottom: "0.5rem" }}>3-4 câu ngắn gọn về:</p>
              <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
                <li>Kinh nghiệm chính của bạn</li>
                <li>Điểm mạnh nổi bật</li>
                <li>Mục tiêu nghề nghiệp</li>
              </ul>

              <p style={{ marginBottom: "1rem" }}><em>Ví dụ:</em> "Kỹ sư phần mềm với 5 năm kinh nghiệm phát triển ứng dụng web. Chuyên môn về React, Node.js và Cloud Architecture. Đã dẫn dắt team 8 người hoàn thành dự án enterprise."</p>

              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.75rem" }}>3. Kinh Nghiệm Làm Việc</h3>
              <p style={{ marginBottom: "0.5rem" }}>Sử dụng công thức STAR:</p>
              <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
                <li><strong>S</strong>ituation: Bối cảnh</li>
                <li><strong>T</strong>ask: Nhiệm vụ của bạn</li>
                <li><strong>A</strong>ction: Hành động bạn đã làm</li>
                <li><strong>R</strong>esult: Kết quả đạt được (có số liệu cụ thể)</li>
              </ul>

              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.75rem" }}>4. Kỹ Năng</h3>
              <p style={{ marginBottom: "0.5rem" }}>Chia thành 2 phần:</p>
              <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
                <li><strong>Kỹ năng kỹ thuật:</strong> Ngôn ngữ lập trình, công cụ, framework</li>
                <li><strong>Kỹ năng mềm:</strong> Giao tiếp, lãnh đạo, làm việc nhóm</li>
              </ul>

              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.75rem" }}>5. Học Vấn</h3>
              <p style={{ marginBottom: "1rem" }}>Liệt kê theo thứ tự thời gian ngược. Không cần quá chi tiết nếu bạn đã có kinh nghiệm.</p>

              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>Những Lỗi Cần Tránh</h2>
              <ul style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
                <li>CV quá dài (giữ 1-2 trang)</li>
                <li>Sử dụng template quá cầu kỳ</li>
                <li>Đánh máy sai chính tả</li>
                <li>Thông tin không liên quan</li>
                <li>Không có action verbs</li>
                <li>Copy job description</li>
              </ul>

              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>Mẹo Vượt Qua ATS</h2>
              <p style={{ marginBottom: "0.5rem" }}>Applicant Tracking System (Hệ thống theo dõi ứng viên) được nhiều công ty sử dụng để lọc CV tự động:</p>
              <ol style={{ marginLeft: "1.5rem", marginBottom: "1rem" }}>
                <li>Sử dụng từ khóa từ job description</li>
                <li>Tránh sử dụng bảng, cột phức tạp</li>
                <li>Không đặt thông tin trong header/footer</li>
                <li>Sử dụng font chuẩn (Arial, Calibri)</li>
              </ol>

              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginTop: "2rem", marginBottom: "1rem" }}>Kết Luận</h2>
              <p style={{ marginBottom: "1rem" }}>Một CV tốt là CV được cá nhân hóa cho từng vị trí ứng tuyển. Hãy dành thời gian để tạo CV hoàn hảo và bạn sẽ thấy sự khác biệt trong số lượng phỏng vấn nhận được.</p>
            </div>

            <div style={{ marginTop: "2.5rem", padding: "1.5rem", background: "var(--bg-card)", borderRadius: "12px", border: "1.5px solid var(--border)", textAlign: "center" }}>
              <h4 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text)" }}>Sẵn sàng tạo CV của bạn?</h4>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                Sử dụng công cụ tạo CV miễn phí của JobNow để tạo CV chuyên nghiệp chỉ trong vài phút.
              </p>
              <a href="/candidate/cv-builder" className="btn-primary" style={{ display: "inline-block", padding: "0.75rem 1.5rem" }}>
                Tạo CV ngay
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
