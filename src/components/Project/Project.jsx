import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Giải Pháp Làm Mát SAISYU",
      description:
        "Phát triển hệ thống Fullstack cho đối tác Nhật Bản. Tối ưu bộ lọc kỹ thuật và luồng đăng ký tư vấn y tế/kỹ thuật chuyên sâu.",
      tags: ["ReactJS", "Laravel", "Tailwind"],
      link: "https://vn.saisyu.jp/",
      year: "2024",
      type: "COMMERCIAL PROJECT",
      image:
        "https://via.placeholder.com/600x400/1e1f26/ff4d4d?text=SAISYU+SYSTEM",
    },
    {
      title: "Hệ Thống Khảo Sát Y Tế Nhật Bản",
      description:
        "Xây dựng Form đăng ký với logic Validation nghiêm ngặt, đảm bảo an toàn thông tin theo tiêu chuẩn khắt khe của thị trường Nhật.",
      tags: ["Laravel", "ReactJS", "Security"],
      link: "#",
      year: "2025",
      type: "HEALTHCARE PROJECT",
      image:
        "https://via.placeholder.com/600x400/1e1f26/ff4d4d?text=JAPAN+SURVEY+MEDICAL",
    },
    {
      title: "Job Tracking Kanban Board",
      description:
        "Ứng dụng quản lý quy trình ứng tuyển với tính năng kéo thả (Drag & Drop) và đồng bộ dữ liệu thời gian thực qua Supabase.",
      tags: ["ReactJS", "Supabase", "Tailwind"],
      link: "https://github.com/nguyendung113-cyber",
      year: "2024",
      type: "PERSONAL PROJECT",
      image:
        "https://via.placeholder.com/600x400/1e1f26/ff4d4d?text=KANBAN+TRACKER",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#f8f9fa] py-16 md:py-24 px-4 sm:px-8 md:px-20 text-[#1e1f26]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Responsive Text */}
        <div className="relative mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Dự Án Tiêu Biểu<span className="text-[#ff4d4d]">.</span>
          </h2>
          <div className="absolute -bottom-3 left-0 w-20 md:w-24 h-1.5 md:h-2 bg-[#ff4d4d]"></div>
          <p className="mt-6 md:mt-8 text-gray-400 font-mono text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase opacity-60">
            // Featured_Works
          </p>
        </div>

        {/* Project Grid - Responsive 1 to 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white overflow-hidden shadow-xl border border-gray-100 flex flex-col transition-all duration-500 hover:border-[#ff4d4d]/30"
            >
              {/* Image Container - Responsive Aspect Ratio */}
              <div className="relative h-56 sm:h-64 md:h-80 overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay - Optimized for Touch & Hover */}
                <div className="absolute inset-0 bg-[#1e1f26]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <div className="flex space-x-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 md:p-4 bg-[#ff4d4d] text-white rounded-full hover:scale-110 transition-transform shadow-lg"
                      title="Xem trực tiếp"
                    >
                      <i className="fas fa-external-link-alt text-sm md:text-base"></i>
                    </a>
                    <a
                      href="#"
                      className="p-3 md:p-4 bg-white text-[#1e1f26] rounded-full hover:scale-110 transition-transform shadow-lg"
                      title="Mã nguồn"
                    >
                      <i className="fab fa-github text-sm md:text-base"></i>
                    </a>
                  </div>
                  <p className="text-white text-[10px] md:text-xs font-mono tracking-widest uppercase mt-4">
                    View Project Details
                  </p>
                </div>
              </div>

              {/* Content Section - Responsive Padding & Text */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[8px] md:text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-[#1e1f26] text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-[#ff4d4d] border-b-2 border-[#ff4d4d] whitespace-nowrap">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-[#ff4d4d] transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-dashed border-gray-200 flex justify-between items-center mt-auto">
                  <span className="text-[9px] md:text-[10px] font-bold text-gray-400 tracking-widest">
                    {project.type}
                  </span>
                  <button className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] text-[#ff4d4d] flex items-center group/btn">
                    Chi tiết
                    <span className="ml-1.5 group-hover/btn:translate-x-1.5 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Fully Responsive Button */}
        <div className="mt-12 md:mt-20 text-center">
          <a
            href="https://github.com/nguyendung113-cyber"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-block px-8 md:px-12 py-4 md:py-5 bg-[#1e1f26] text-white font-black uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-[#ff4d4d] transition-all shadow-xl text-xs md:text-sm"
          >
            Xem tất cả tại GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
