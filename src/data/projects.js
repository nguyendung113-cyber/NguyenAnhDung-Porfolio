/**
 * Projects Data
 */
import saisyutechno from "../assets/images/saisyutechno.png";

export const projects = [
  {
    id: 1,
    title: "Giải Pháp Làm Mát SAISYU",
    description:
      "Phát triển hệ thống Fullstack cho đối tác Nhật Bản. Tối ưu bộ lọc kỹ thuật và luồng đăng ký tư vấn y tế/kỹ thuật chuyên sâu.",
    tags: ["ReactJS", "Laravel", "Tailwind"],
    link: "https://vn.saisyu.jp/",
    year: "2024",
    type: "COMMERCIAL PROJECT",
    image: saisyutechno,
  },
  {
    id: 2,
    title: "Hệ Thống Khảo Sát Y Tế Nhật Bản",
    description:
      "Xây dựng Form đăng ký với logic Validation nghiêm ngặt, đảm bảo an toàn thông tin theo tiêu chuẩn khắt khe của thị trường Nhật.",
    tags: ["Laravel", "ReactJS", "Security"],
    link: "#",
    year: "2025",
    type: "HEALTHCARE PROJECT",
    image: null, // Use placeholder
  },
  {
    id: 3,
    title: "Job Tracking",
    description:
      "Ứng dụng quản lý quy trình ứng tuyển với tính năng kéo thả (Drag & Drop) và đồng bộ dữ liệu thời gian thực qua Supabase.",
    tags: ["ReactJS", "Supabase", "Tailwind"],
    link: "https://github.com/nguyendung113-cyber",
    year: "2026",
    type: "PERSONAL PROJECT",
    image: null, // Use placeholder
  },
];

export const projectsPlaceholder = {
  japanSurvey:
    "https://via.placeholder.com/600x400/1e1f26/ff4d4d?text=JAPAN+SURVEY+MEDICAL",
  kanban:
    "https://via.placeholder.com/600x400/1e1f26/ff4d4d?text=KANBAN+TRACKER",
};
