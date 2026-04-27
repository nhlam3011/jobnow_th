# CHƯƠNG 4: KẾT QUẢ ĐẠT ĐƯỢC VÀ HƯỚNG PHÁT TRIỂN

Mục lục:
- [ ] 4.1. Giao diện và các chức năng hệ thống
- [ ] 4.2. Đánh giá kết quả thực hiện
- [ ] 4.3. Hướng phát triển đề tài
- [ ] Kết luận chung
- [ ] Tài liệu tham khảo

---

## 4.1. Giao diện và các chức năng hệ thống

Phần này trình bày chi tiết các giao diện chức năng của hệ thống JobNow, được chia thành các giao diện chung và các phân hệ cụ thể dành cho từng nhóm đối tượng người dùng (Ứng viên, Nhà tuyển dụng, Quản trị viên). Mỗi giao diện được thiết kế theo tiêu chí tối giản, hiện đại (UI/UX) và tối ưu hóa trải nghiệm người dùng.

*(Lưu ý: Bạn hãy chụp ảnh màn hình hệ thống thực tế và chèn vào các placeholder `[Chèn ảnh...]` bên dưới)*

### 4.1.1. Các giao diện chung (Common Interfaces)

**1. Giao diện Đăng nhập và Đăng ký**
- **Mô tả**: Giao diện đăng nhập và đăng ký được thiết kế với phong cách tối giản và hiện đại, tạo cảm giác chuyên nghiệp ngay từ lần đầu truy cập. Form nhập liệu được đặt ở vị trí trung tâm, nổi bật trên nền (background) sáng màu với hiệu ứng đổ bóng (box-shadow) nhẹ nhàng, giúp tách biệt khối nội dung chính khỏi không gian xung quanh. Các trường thông tin (input fields) có kích thước lớn, font chữ rõ ràng, kết hợp với các icon trực quan ở góc trái giúp người dùng dễ dàng nhận diện loại dữ liệu cần nhập. Nút bấm (button) chính mang màu sắc thương hiệu của nền tảng, có hiệu ứng chuyển màu khi di chuột (hover), kích thích hành động click. Đặc biệt, giao diện cung cấp hai tab (thẻ) chuyển đổi mượt mà giữa "Ứng viên" và "Nhà tuyển dụng", giúp không gian trên màn hình không bị quá tải bởi nhiều thông tin cùng lúc.
- **Hình ảnh**: 
  > *[Chèn ảnh chụp màn hình Giao diện Đăng nhập / Đăng ký]*

**2. Giao diện Thanh điều hướng và Chân trang**
- **Mô tả**: Thanh điều hướng (Header) được thiết kế cố định (sticky) trên cùng của trang, với phông nền trắng thanh lịch và thanh viền mảnh ngăn cách với nội dung bên dưới. Cấu trúc chia làm ba phần rõ rệt: bên trái là logo nền tảng với font chữ đậm, sắc nét; ở giữa là các liên kết menu ngang với hiệu ứng gạch chân uyển chuyển khi người dùng lướt chuột qua; bên phải là thanh tìm kiếm dạng thu gọn và khối avatar người dùng hình tròn. Khi sử dụng trên thiết bị di động, toàn bộ menu này sẽ tự động thu gọn thành biểu tượng "hamburger" gọn gàng. Chân trang (Footer) mang tông màu tối tương phản hoàn toàn với Header, được chia thành nhiều cột chứa các liên kết dạng danh sách (list), kết hợp với các biểu tượng mạng xã hội được thiết kế bo tròn tinh tế, tạo nên một kết cấu đầu cuối vững chắc cho toàn bộ website.
- **Hình ảnh**: 
  > *[Chèn ảnh chụp màn hình Header mở Menu Dropdown và Footer]*

**3. Giao diện Thông báo lỗi (Trang 404)**
- **Mô tả**: Trang thông báo lỗi 404 được xây dựng với mục tiêu xoa dịu cảm giác khó chịu của người dùng khi truy cập sai đường dẫn bằng một giao diện vui mắt và nhẹ nhàng. Nổi bật ở chính giữa màn hình là một hình ảnh minh họa (illustration) dạng vector 2D hoặc 3D mang tông màu pastel, thể hiện trạng thái "lạc đường" hoặc "đang sửa chữa". Ngay bên dưới là dòng chữ tiêu đề "404" với kích thước cực đại (hero text), kết hợp cùng dòng phụ đề có kích cỡ chữ nhỏ hơn, màu xám nhạt để giải thích tình trạng hiện tại. Điểm thu hút sự chú ý cuối cùng là một nút bấm (call-to-action button) hình chữ nhật bo góc, sử dụng màu nhấn chủ đạo (primary color) của website, mang thông điệp "Quay về trang chủ". Mọi phần tử đều được căn giữa (center-aligned) hoàn hảo, bao quanh bởi khoảng trắng (white-space) rộng rãi giúp giao diện không bị ngột ngạt.
- **Hình ảnh**: 
  > *[Chèn ảnh chụp màn hình Giao diện 404 Not Found]*

### 4.1.2. Phân hệ Ứng viên (Candidate)

**1. Giao diện Trang chủ**
- **Mô tả**: Trang chủ mở ra không gian tìm việc rộng lớn với khu vực đầu trang (Hero Banner) chiếm trọn màn hình đầu tiên. Tại đây, một hình ảnh nền chất lượng cao hoặc dải màu gradient êm dịu làm phông nền cho câu khẩu hiệu (slogan) viết bằng font chữ in đậm, kích thước lớn. Ngay bên dưới là bộ công cụ tìm kiếm được thiết kế dạng khối chữ nhật nổi, chia làm hai ô: nhập từ khóa và chọn địa điểm, kết thúc bằng một nút tìm kiếm màu sắc bắt mắt. Phần nội dung bên dưới được chia thành các dải ngang (sections), phân tách nhau bởi sự thay đổi nhẹ về màu nền (trắng sang xám nhạt). Danh sách các "Công việc nổi bật" được hiển thị dưới dạng các thẻ (cards) xếp thành lưới (grid layout). Mỗi thẻ công việc có viền mỏng, hiển thị logo công ty thu nhỏ, tên chức danh in đậm và các thẻ tag (nhãn) nhỏ xinh có màu sắc nhạt gọn gàng thể hiện mức lương và địa điểm làm việc.
- **Hình ảnh**: 
  > *[Chèn ảnh chụp màn hình Trang chủ (Landing Page)]*

**2. Giao diện Tìm kiếm việc làm**
- **Mô tả**: Giao diện trang tìm kiếm việc làm áp dụng bố cục hai cột kinh điển để tối ưu hóa khả năng đọc lướt của ứng viên. Cột bên trái đóng vai trò như một thanh công cụ chứa bộ lọc, bao gồm các tiêu đề danh mục in đậm và các ô đánh dấu (checkbox), thanh trượt chọn mức lương (range slider) với các nút kéo thiết kế mượt mà. Cột bên phải, chiếm 3/4 diện tích màn hình, là không gian cuộn dọc hiển thị danh sách kết quả. Mỗi kết quả là một thẻ khối lập phương nằm ngang, bao gồm logo công ty hình vuông bo góc bên trái, thông tin việc làm ở giữa, và các nút "Lưu" hình trái tim hoặc nút "Ứng tuyển ngay" ở cạnh phải. Khoảng cách giữa các thẻ (margin) được căn chỉnh đều đặn tạo cảm giác thông thoáng. Các nút chuyển trang (pagination) ở dưới cùng được thiết kế dưới dạng các ô vuông nhỏ bo tròn, sẽ đổi màu khi người dùng đang ở trang tương ứng.
- **Hình ảnh**:
  > *[Chèn ảnh chụp màn hình Trang Kết quả tìm kiếm và Lọc việc làm]*

**3. Giao diện Chi tiết công việc**
- **Mô tả**: Trang chi tiết công việc tập trung toàn bộ sự chú ý của người dùng vào nội dung văn bản. Phần đầu trang là một khối thông tin bao trùm (header banner) chứa logo kích thước lớn của nhà tuyển dụng, tên vị trí công việc hiển thị bằng font chữ lớn nhất trang (Heading 1), và một nút bấm "Ứng tuyển" luôn được ghim lơ lửng (sticky) khi cuộn trang xuống. Ngay dưới tiêu đề, một thanh tiến trình (progress bar) rực rỡ dạng cung tròn hoặc thanh ngang dài xuất hiện, đi kèm với con số phần trăm in đậm và biểu tượng ngôi sao lấp lánh để thể hiện điểm số phù hợp (Match Score). Các mục như "Mô tả công việc", "Yêu cầu ứng viên" và "Quyền lợi" được sắp xếp thành các khối văn bản rõ ràng, sử dụng cấu trúc danh sách gạch đầu dòng (bullet points) để người đọc dễ dàng nắm bắt ý chính mà không bị rối mắt bởi quá nhiều chữ.
- **Hình ảnh**:
  > *[Chèn ảnh chụp màn hình Chi tiết công việc hiển thị Match Score]*

**4. Giao diện Nộp hồ sơ ứng tuyển**
- **Mô tả**: Giao diện ứng tuyển không hiển thị thành một trang riêng mà xuất hiện dưới dạng một hộp thoại nổi (Modal) trên nền tối mờ (overlay), giúp ứng viên không bị mất mạch đọc JD trước đó. Hộp thoại có nền trắng tinh khôi, viền cong nhẹ nhàng và một nút tắt (X) thanh mảnh ở góc phải. Bên trong chia thành các khu vực nhập liệu có cấu trúc từ trên xuống dưới. Người dùng sẽ thấy một khu vực viền nét đứt (dashed border) thiết kế với biểu tượng đám mây để kéo thả file CV. Ngay phía dưới là khu vực điền thư xin việc (Cover Letter) dạng ô soạn thảo lớn (textarea). Điểm đặc biệt nổi bật nhất trên giao diện là một nút bấm phụ mang biểu tượng "tia chớp" hoặc "robot" màu gradient rực rỡ, kèm dòng chữ "Tự động tạo bằng AI", được đặt ở vị trí thu hút ánh nhìn nhằm kích thích người dùng trải nghiệm tiện ích sinh văn bản tự động.
- **Hình ảnh**:
  > *[Chèn ảnh chụp màn hình Modal Ứng tuyển với tính năng AI Cover Letter]*

**5. Giao diện Trình tạo CV**
- **Mô tả**: Giao diện thiết kế CV được xây dựng như một không gian làm việc kép (split-screen workspace) chuyên nghiệp và trực quan. Phía bên trái là khu vực điều khiển với các bảng biểu (panels) có thể mở rộng/thu gọn (accordion), chứa các trường điền thông tin văn bản, chọn ngày tháng (date picker) và tải ảnh đại diện. Phía bên phải là một bản xem trước (Live Preview) mô phỏng chính xác tờ giấy A4, hiển thị ngay lập tức mọi thay đổi về màu sắc, bố cục, hay font chữ khi ứng viên gõ phím ở bên trái. Các thanh công cụ phụ ở trên cùng cho phép thay đổi các mẫu thiết kế (template) qua việc click vào các khung thu nhỏ (thumbnails), hoặc chọn các bảng màu (color palette) có sẵn bằng các ô tròn màu sắc liền kề nhau. Tỷ lệ phân chia màn hình hoàn hảo kết hợp với các hoạt ảnh cuộn mượt mà mang lại cảm giác của một phần mềm thiết kế thực thụ.
- **Hình ảnh**:
  > *[Chèn ảnh chụp màn hình Trình tạo CV - CV Builder]*

**6. Giao diện Lịch sử ứng tuyển**
- **Mô tả**: Giao diện quản lý hồ sơ ứng tuyển mang hình thức một bảng dữ liệu (Data Table) nhưng được làm mềm mại hóa bằng các kỹ thuật UI hiện đại. Mỗi dòng (row) trong bảng đại diện cho một công việc, có chiều cao khá thoáng, đường kẻ ngang mỏng và mờ, tự động nổi bật (highlight) màu nền nhạt khi con trỏ chuột lướt qua. Các cột thôngত্তি được căn chỉnh lề (alignment) cẩn thận: tên công ty căn trái, ngày tháng căn giữa. Điểm nhấn trực quan quan trọng nhất của giao diện này là các thẻ trạng thái (Status Badges) được bo tròn dạng viên thuốc (pill-shape). Mỗi trạng thái sử dụng một màu nền nhẹ (pastel) kết hợp với màu chữ đậm tương ứng: xanh lá nhạt cho "Đã trúng tuyển", vàng nhạt cho "Đang chờ duyệt", đỏ nhạt cho "Đã từ chối", giúp ứng viên có thể quét nhanh toàn bộ tiến trình ứng tuyển chỉ bằng một cái nhìn lướt qua.
- **Hình ảnh**:
  > *[Chèn ảnh chụp màn hình Quản lý lịch sử ứng tuyển]*

### 4.1.3. Phân hệ Nhà tuyển dụng (Employer)

**1. Giao diện Tổng quan Nhà tuyển dụng**
- **Mô tả**: Bảng điều khiển dành cho nhà tuyển dụng đập vào mắt người dùng bằng một hệ thống lưới (Grid) bố trí các thẻ thông tin (Card) vô cùng hiện đại. Phần trên cùng là một dải ngang chứa 4 thẻ chỉ số tổng quan (KPI cards). Mỗi thẻ có nền trắng, viền mỏng, nội dung bao gồm một con số kích thước khổng lồ in đậm, dòng mô tả nhỏ bên dưới, và một biểu tượng icon màu sắc nhạt làm mờ ở góc phải làm nền. Ngay phía dưới là không gian rộng lớn dành cho các biểu đồ (Charts). Biểu đồ dạng đường (Line chart) hiển thị đường cong trơn tru nối các điểm dữ liệu, bên dưới đường cong là một dải gradient mờ dần xuống phía trục hoành, tạo chiều sâu cho biểu đồ. Các trục tọa độ và đường dóng (gridlines) được vẽ bằng các đường kẻ đứt nét màu xám nhạt, đảm bảo dữ liệu nổi bật nhất nhưng vẫn dễ dàng căn lề đọc số liệu.
- **Hình ảnh**:
  > *[Chèn ảnh chụp màn hình Employer Dashboard]*

**2. Giao diện Quản lý tin tuyển dụng**
- **Mô tả**: Giao diện này cung cấp một danh sách liệt kê chi tiết dưới dạng bảng hiển thị cấu trúc đa cột rộng rãi. Khác với bảng thông thường, bảng quản lý tin đăng sử dụng không gian trắng (white-space) lớn giữa các dòng để thông tin không bị dính vào nhau. Tại mỗi dòng hiển thị tiêu đề công việc bằng chữ màu đen đậm, kèm theo ngày đăng và ngày hết hạn in nhỏ màu xám. Cột trạng thái sử dụng các nhãn dán (badges) màu sắc rực rỡ như xanh lá (Đang hiển thị) hoặc xám (Đã đóng). Đặc biệt, cột hành động ở phía ngoài cùng bên phải hiển thị một loạt các nút biểu tượng (icon buttons) nhỏ gọn, được thiết kế đồng nhất như hình chiếc bút (sửa), hình thùng rác (xóa), hoặc biểu tượng ngôi sao (nâng cấp VIP). Khi người dùng nhấn vào một biểu tượng, hiệu ứng tooltip (chú giải nhỏ) sẽ nổi lên trên nền đen mờ để giải thích chức năng tương ứng.
- **Hình ảnh**:
  > *[Chèn ảnh chụp màn hình Danh sách quản lý tin tuyển dụng]*

**3. Giao diện Đăng tin tuyển dụng**
- **Mô tả**: Thay vì bày ra một biểu mẫu dài bất tận, giao diện đăng tin được thiết kế dưới dạng trình tự các bước (Stepper/Wizard) hoặc các khối thông tin được phân nhóm rõ rệt. Phía trên cùng thường có một thanh tiến trình (Step Indicator) với các con số nằm trong vòng tròn, giúp nhà tuyển dụng biết họ đang ở bước thứ mấy. Các vùng nhập liệu (input areas) được chia thành nhiều ô hình chữ nhật bo góc với viền nhạt, khi click chuột vào viền sẽ đổi sang màu nhấn mạnh (focus state) kèm hiệu ứng viền phát sáng mỏng. Đối với các kỹ năng yêu cầu, hệ thống cung cấp một ô nhập liệu có thể thêm nhiều thẻ (tag input). Khi gõ từ khóa và nhấn Enter, từ khóa đó sẽ biến thành một khối hình chữ nhật nhỏ (chip) có màu nền, bên cạnh có dấu 'X' để dễ dàng xóa bỏ. Thiết kế này mang lại cảm giác nhập liệu gọn gàng, giảm thiểu sự mệt mỏi cho thị giác.
- **Hình ảnh**:
  > *[Chèn ảnh chụp màn hình Form Đăng tin tuyển dụng]*

**4. Giao diện Quản lý hồ sơ ứng viên**
- **Mô tả**: Giao diện bảng Kanban nổi bật với một dải ngang chứa các cột dọc đại diện cho từng vòng tuyển dụng. Mỗi cột có một tiêu đề đậm kèm theo một con số nằm trong vòng tròn nhỏ báo hiệu số lượng hồ sơ hiện có. Nền của các cột sử dụng màu xám rất nhạt để phân biệt rõ rệt với màu trắng của giao diện chung. Bên trong mỗi cột là các tấm thẻ (cards) ứng viên, được thiết kế như những khối hộp có đổ bóng. Mỗi thẻ hiển thị ảnh đại diện hình tròn nhỏ bé bên cạnh tên người ứng tuyển in đậm, theo sau là vị trí công việc. Một chi tiết UI tinh tế là khi người dùng nhấn giữ chuột trái và kéo thẻ sang cột khác, thẻ sẽ hơi nghiêng đi và đổ bóng sâu hơn, tạo hiệu ứng vật lý nâng vật thể lên khỏi mặt phẳng màn hình, đồng thời cột đích sẽ xuất hiện một vùng viền nét đứt báo hiệu vị trí thả thẻ xuống.
- **Hình ảnh**:
  > *[Chèn ảnh chụp màn hình Quản lý ứng viên dạng bảng Kanban]*

**5. Giao diện Quản lý Ví và Nâng cấp VIP**
- **Mô tả**: Giao diện tài chính được thiết kế để gợi lên sự uy tín và sang trọng. Nằm ở vị trí trung tâm nổi bật nhất là một khu vực mô phỏng chiếc thẻ tín dụng hoặc ví tiền cách điệu, sử dụng màu nền gradient tối (ví dụ xanh đen hoặc tím than), làm nổi bật dòng chữ số dư ví được hiển thị bằng một font chữ mô phỏng số đồng hồ (monospace) màu trắng tinh. Ngay bên dưới là bảng giá các gói VIP được thiết kế dạng thẻ (Pricing Cards) đặt cạnh nhau. Mỗi thẻ giới thiệu một gói dịch vụ, với các đường viền dày hoặc icon vương miện cho gói cao cấp nhất. Danh sách các quyền lợi của mỗi gói được liệt kê với dấu tick xanh (checkmarks) ở đầu dòng. Giao diện sử dụng nhiều mảng màu đối lập để phân biệt rõ ràng giữa các gói, kèm theo các nút kêu gọi "Mua ngay" to bản, rực rỡ, được định hình để thu hút thao tác nhấp chuột.
- **Hình ảnh**:
  > *[Chèn ảnh chụp màn hình Giao diện Ví điện tử và Mua gói VIP]*

**6. Giao diện Hồ sơ Doanh nghiệp**
- **Mô tả**: Giao diện hồ sơ công ty được cấu trúc tương tự như trang cá nhân trên mạng xã hội, tập trung mạnh vào các yếu tố hình ảnh để xây dựng thương hiệu. Ở phần đỉnh là một khung ảnh bìa (Cover Banner) hình chữ nhật trải dài toàn chiều rộng màn hình, cho phép tải lên hình ảnh văn phòng hoặc tập thể. Ngay góc dưới bên trái của ảnh bìa là một hình vuông bo góc chứa logo công ty hơi lồi lên, tạo hiệu ứng phân tầng thị giác 3D nhẹ nhàng. Khu vực phía dưới dành cho việc hiển thị và chỉnh sửa thông tin được chia thành hai phần: thanh bên (sidebar) nhỏ gọn liệt kê các biểu tượng liên hệ, bản đồ và website; vùng không gian chính rộng rãi chứa các đoạn văn bản giới thiệu môi trường làm việc. Trình soạn thảo văn bản ở đây đi kèm một thanh công cụ (toolbar) gọn gàng nằm phía trên, chứa đầy đủ các nút định dạng (in đậm, nghiêng, căn lề) với thiết kế dạng phẳng tối giản.
- **Hình ảnh**:
  > *[Chèn ảnh chụp màn hình Cập nhật Hồ sơ Công ty]*

### 4.1.4. Phân hệ Quản trị viên (Admin)

**1. Giao diện Tổng quan Quản trị viên**
- **Mô tả**: Bảng điều khiển quản trị mang một dáng vẻ uy quyền và cực kỳ nhiều dữ liệu, nhưng không hề lộn xộn nhờ cách áp dụng thiết kế thẻ (Card-based UI). Giao diện lấy một màu nền xám rất nhạt (off-white) để làm phông nền, giúp các khối hình khối chứa biểu đồ màu trắng nổi bật lên rõ ràng. Có sự xuất hiện của đa dạng các loại biểu đồ: biểu đồ hình tròn (Pie chart) đa sắc dùng để phân chia tỉ lệ ngành nghề, biểu đồ cột (Bar chart) đơn sắc để thể hiện số lượng người dùng mới theo tháng. Đặc biệt, bảng điều khiển còn có thêm một thanh bên hông (Sidebar) dạng dải màu tối được khóa dọc bên trái màn hình, chứa vô số các biểu tượng quản trị và nhãn menu chữ trắng, giúp admin dễ dàng điều hướng sang bất kỳ phân hệ nào. Sự sắp xếp theo dạng lưới chuẩn xác giúp màn hình trông giống như một buồng lái máy bay hiện đại.
- **Hình ảnh**:
  > *[Chèn ảnh chụp màn hình Admin Dashboard]*

**2. Giao diện Kiểm duyệt tin tuyển dụng**
- **Mô tả**: Giao diện kiểm duyệt được thiết kế với hai chức năng chính: duyệt nhanh hoặc xem chi tiết. Nhìn tổng quan, đây là một danh sách các công việc dưới dạng danh sách trải dài (List view). Mỗi công việc nằm trên một khung hình chữ nhật nằm ngang. Để tối ưu tốc độ làm việc cho admin, ngay trên khung danh sách này hiển thị tóm tắt các nội dung quan trọng nhất, đi kèm với hai nút hành động được thiết kế đối lập hoàn toàn về màu sắc: nút "Duyệt" thường có màu xanh lá nổi bật với biểu tượng chữ 'V', trong khi nút "Từ chối" mang màu đỏ cảnh báo với biểu tượng chữ 'X'. Khi cần xem xét kỹ, admin nhấp vào tiêu đề, màn hình sẽ trượt ngang (slide-over) hoặc mở rộng (expand) để lộ ra một bảng xem trước toàn bộ nội dung tin đăng chi tiết, duy trì phong cách trình bày y hệt như ứng viên sẽ nhìn thấy, giúp admin có sự đánh giá thị giác khách quan nhất.
- **Hình ảnh**:
  > *[Chèn ảnh chụp màn hình Danh sách chờ duyệt tin tuyển dụng của Admin]*

**3. Giao diện Quản lý người dùng và Giao dịch**
- **Mô tả**: Giao diện này là tập hợp của các bảng biểu dữ liệu (Data Tables) được tối ưu hóa cho không gian màn hình lớn. Bảng dữ liệu có tính năng đóng băng tiêu đề (sticky header), giúp người dùng có thể cuộn xuống hàng trăm dòng mà vẫn không quên ý nghĩa của các cột. Ngay phía trên bảng là một thanh công cụ ngang (Toolbar) với đầy đủ các bộ lọc phức tạp: thanh tìm kiếm kết hợp biểu tượng kính lúp, các nút thả xuống (dropdown) để lọc theo vai trò (Role) hay trạng thái tài khoản. Các nút hành động nguy hiểm như "Khóa tài khoản" được cố tình thiết kế dưới dạng chữ màu xám, và chỉ chuyển sang viền đỏ sắc nét khi người dùng chủ động di chuột vào, kèm theo một hộp thoại xác nhận (Confirm Dialog) dạng popup có bóng đổ sâu nảy lên giữa màn hình để ngăn chặn những thao tác nhấp nhầm đáng tiếc, đảm bảo an toàn thao tác cho hệ thống.
- **Hình ảnh**:
  > *[Chèn ảnh chụp màn hình Quản lý Người dùng / Giao dịch]*


---

## 4.2. Đánh giá kết quả thực hiện

### 4.2.1. Ưu điểm và kết quả đạt được
Qua quá trình nghiên cứu và phát triển, dự án "JobNow - Nền tảng tuyển dụng thông minh" đã cơ bản hoàn thành các mục tiêu đề ra ban đầu:
- **Về công nghệ**: Ứng dụng thành công các công nghệ web hiện đại nhất (Next.js App Router, React Server Components) giúp hệ thống có tốc độ tải trang nhanh và tối ưu SEO tốt.
- **Về tính năng AI**: Tích hợp thành công giải pháp AI Vector Search (pgvector) với chi phí thấp nhưng mang lại độ chính xác cao trong việc ghép nối Ứng viên - Công việc (Smart Matching). Chức năng AI Cover Letter (Gemini 1.5 Flash) hoạt động mượt mà, mang lại trải nghiệm đột phá.
- **Về nghiệp vụ**: Số hoá toàn diện quy trình tuyển dụng từ lúc đăng tin, ứng tuyển đến theo dõi trạng thái. Luồng tài chính (Nạp tiền & Mua VIP) được đảm bảo tính toàn vẹn dữ liệu bằng ACID Transactions.

### 4.2.2. Hạn chế còn tồn tại
- Mặc dù hệ thống đã có ví điện tử, nhưng hiện tại mới dừng ở mức mô phỏng nạp tiền nội bộ. Chưa tích hợp trực tiếp với các cổng thanh toán online thực tế (VNPay, MoMo, PayPal).
- AI Smart Matching hoạt động tốt ở mức độ semantic (ngữ nghĩa), nhưng với cơ sở dữ liệu lên tới hàng triệu bản ghi, hệ thống có thể cần tối ưu thêm các index đặc thù như HNSW hoặc IVFFlat của pgvector.
- Chưa có tính năng chat trực tiếp (Real-time Chat) giữa ứng viên và nhà tuyển dụng.

---

## 4.3. Hướng phát triển đề tài

Để nền tảng có thể triển khai thực tế và cạnh tranh với các sản phẩm trên thị trường, định hướng phát triển trong tương lai bao gồm:
1. **Tích hợp cổng thanh toán trực tuyến**: Kết nối API với VNPay hoặc Momo để tự động hóa hoàn toàn luồng nạp tiền vào ví.
2. **Trợ lý AI tư vấn nghề nghiệp**: Phát triển thêm một Chatbot AI (tương tự ChatGPT) ngay trên nền tảng để hỗ trợ ứng viên viết lại CV, định hướng nghề nghiệp, luyện phỏng vấn mock-interview.
3. **Phát triển Mobile App**: Xây dựng phiên bản ứng dụng di động (React Native hoặc Flutter) giúp người dùng nhận thông báo (Push Notifications) nhanh chóng và ứng tuyển dễ dàng hơn.
4. **Phân tích dữ liệu lớn (Big Data)**: Thu thập và cung cấp cho nhà tuyển dụng các báo cáo insight chi tiết về thị trường lao động, xu hướng mức lương theo từng ngành nghề theo thời gian thực.

---

## KẾT LUẬN

Khoá luận "Xây dựng hệ thống tuyển dụng thông minh tích hợp trí tuệ nhân tạo JobNow" không chỉ giải quyết bài toán quản lý quy trình tuyển dụng truyền thống mà còn mạnh dạn ứng dụng các công nghệ AI mới (LLMs, Vector Search) để tối ưu hoá sự kết nối giữa nguồn cung và cầu lao động. 

Sản phẩm đã chứng minh được tính khả thi trong việc sử dụng AI để giảm thiểu thời gian sàng lọc hồ sơ, đồng thời tăng cơ hội tìm việc thành công cho ứng viên. Dù vẫn còn một số giới hạn nhất định về việc tích hợp thanh toán thực tế và xử lý ngôn ngữ đặc thù, dự án đã tạo ra một bộ khung vững chắc có khả năng mở rộng cao, sẵn sàng phục vụ cho việc thương mại hoá và áp dụng thực tiễn trong tương lai.

---

## TÀI LIỆU THAM KHẢO

1. Next.js Documentation (2024). *Building Your Application - Routing*. Vercel. [Online] Available at: https://nextjs.org/docs
2. Prisma ORM (2024). *Prisma Client API reference*. Prisma Data Inc. [Online] Available at: https://www.prisma.io/docs
3. Google Cloud (2024). *Gemini API Documentation*. Google. [Online] Available at: https://ai.google.dev/docs
4. pgvector (2024). *Open-source vector similarity search for Postgres*. [Online] Available at: https://github.com/pgvector/pgvector
5. Các website tuyển dụng tham khảo: TopCV (topcv.vn), VietnamWorks (vietnamworks.com), LinkedIn (linkedin.com).
