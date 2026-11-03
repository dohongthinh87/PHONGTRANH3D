// DỮ LIỆU 45 TÁC PHẨM - GIÁO VIÊN TÙY CHỈNH THÔNG TIN TẠI ĐÂY
const artworksData = [
  {
    id: 1,
    title: "Tác phẩm số 01: Mô hình nguyên tử",
    author: "Nhóm học sinh lớp 10A1",
    description: "Nghiên cứu về cấu trúc lớp vỏ electron và sự hình thành liên kết hóa học. Học sinh có thể tương tác trực tiếp với mô hình.",
    image: "images/1.webp",                     // Đường dẫn tới ảnh trong thư mục images/
    audio: "",                                  // [Tùy chọn] Link file .mp3 thuyết minh (VD: "audio/ bai1.mp3")
    externalLink: "https://forms.gle/xyz...",    // [Tùy chọn] Link Google Forms bài tập hoặc tài liệu
    linkButtonText: "Làm bài tập đánh giá"       // Tên hiển thị trên nút bấm mở link
  },
  {
    id: 2,
    title: "Tác phẩm số 02: Phản ứng hóa học",
    author: "Nguyễn Văn A",
    description: "Bộ sưu tập poster infographics về tốc độ phản ứng và các yếu tố ảnh hưởng trong đời sống.",
    image: "images/2.webp",
    audio: "",
    externalLink: "", 
    linkButtonText: "Xem thêm tài liệu"
  }
  // Bạn có thể tiếp tục bổ sung các tác phẩm khác theo mẫu trên...
];

// Tự động sinh dữ liệu mẫu cho các ô còn lại từ 3 đến 45 nếu chưa điền thủ công
for (let i = 3; i <= 45; i++) {
  if (!artworksData.find(item => item.id === i)) {
    artworksData.push({
      id: i,
      title: `Tác phẩm số ${i < 10 ? '0' + i : i}`,
      author: `Tác giả / Nhóm ${i}`,
      description: `Mô tả chi tiết nội dung, ý nghĩa của tác phẩm số ${i}. Giáo viên có thể thay đổi văn bản này bất cứ lúc nào trong file data.js.`,
      image: `images/${i}.webp`,
      audio: "",
      externalLink: "",
      linkButtonText: "Xem tài liệu học tập"
    });
  }
}