/**
 * Projects Data
 */
import saisyutechno from "../assets/images/saisyutechno.png";

export const projects = [
  {
    id: 1,
    title: "Giải Pháp Làm Mát SAISYU",
    description:
      "Tham gia phát triển hệ thống Fullstack cho đối tác Nhật Bản. Hỗ trợ xây dựng giao diện, xử lý bộ lọc kỹ thuật và luồng đăng ký tư vấn y tế/kỹ thuật chuyên sâu.",
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
      "Tham gia xây dựng Form đăng ký với logic Validation chặt chẽ. Đảm bảo xử lý dữ liệu đầu vào chính xác theo các tiêu chuẩn khắt khe của thị trường Nhật.",
    tags: ["Laravel", "ReactJS", "Security", "Internal"],
    link: "javascript:void(0);",
    year: "2025",
    type: "HEALTHCARE PROJECT (CONFIDENTIAL)",
    image: "https://via.placeholder.com/600x400/1e1f26/ff4d4d?text=JAPAN+SURVEY+MEDICAL",
  },
  {
    id: 3,
    title: "Job Tracking",
    description:
      "Ứng dụng cá nhân quản lý quy trình ứng tuyển với tính năng kéo thả (Drag & Drop) mượt mà. Tích hợp Supabase để quản lý và đồng bộ dữ liệu.",
    tags: ["ReactJS", "Supabase", "Tailwind"],
    link: "https://github.com/nguyendung113-cyber/job-hunt-tracker",
    year: "2026",
    type: "PERSONAL PROJECT",
    image: "https://via.placeholder.com/600x400/1e1f26/ff4d4d?text=KANBAN+TRACKER",
  },
];

export const projectsPlaceholder = {
  japanSurvey:
    "https://via.placeholder.com/600x400/1e1f26/ff4d4d?text=JAPAN+SURVEY+MEDICAL",
  kanban:
    "https://via.placeholder.com/600x400/1e1f26/ff4d4d?text=KANBAN+TRACKER",
};
