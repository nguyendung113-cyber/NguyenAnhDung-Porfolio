import React from "react";

const About = () => {
  // Dữ liệu kinh nghiệm thực tế từ CV của bạn
  const experiences = [
    {
      time: "2019 - 2023",
      title: "ĐẠI HỌC CÔNG NGHỆ TP.HCM (HUTECH)",
      desc: "Tốt nghiệp chuyên ngành Công nghệ Thông tin. Xây dựng nền tảng vững chắc và hoàn thành các chứng chỉ Cybersecurity (Cisco) & Web Development.",
      tag: "EDUCATION",
    },
    {
      time: "09/2024 - HIỆN TẠI",
      title: "WEB DEVELOPER (OUTSOURCE)",
      desc: "Làm việc tại Công ty CNTT Sao Kim, đối tác trực tiếp với Epoca Marketing Nhật Bản. Phát triển hệ thống y tế với tiêu chuẩn bảo mật và validation khắt khe.",
      tag: "SAO KIM IT",
    },
    {
      time: "MỤC TIÊU TƯƠNG LAI",
      title: "BRIDGE SOFTWARE ENGINEER (BrSE)",
      desc: "Kết hợp năng lực Fullstack (ReactJS/Laravel) và ngôn ngữ Nhật (Target N3) để trở thành cầu nối kỹ thuật chuyên nghiệp cho các dự án quốc tế.",
      tag: "CAREER GOAL",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#f8f9fa] py-24 px-6 md:px-20 overflow-hidden text-gray-800 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="relative mb-16">
          <h2 className="text-5xl font-black text-[#1e1f26] uppercase tracking-tighter">
            Về Tôi<span className="text-[#ff4d4d]">.</span>
          </h2>
          <div className="absolute -bottom-4 left-0 w-24 h-2 bg-[#ff4d4d]"></div>
          <p className="mt-8 text-gray-400 font-mono text-sm tracking-[0.3em] uppercase opacity-60">
            // SYSTEM.PROFILE_LOADED
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* CỘT TRÁI: Nội dung giới thiệu */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative p-8 bg-white border-l-8 border-[#1e1f26] shadow-xl rounded-r-lg">
              <p className="text-xl text-gray-800 leading-relaxed italic">
                "Tôi là <span className="text-[#ff4d4d] font-bold">Dũng</span>,
                một Fullstack Developer định hướng chuyên sâu vào các giải pháp
                phần mềm chất lượng cao cho thị trường quốc tế."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 border border-dashed border-gray-300 bg-white">
                <h4 className="font-black text-[#1e1f26] mb-3 flex items-center uppercase text-xs tracking-widest">
                  <span className="w-2 h-2 bg-[#ff4d4d] mr-3"></span> Giá trị
                  cốt lõi
                </h4>
                <ul className="text-[11px] space-y-2 text-gray-500 font-bold uppercase tracking-tighter">
                  <li>• Mã nguồn sạch & SOLID</li>
                  <li>• Tiêu chuẩn Bảo mật (Nhật Bản) </li>
                  <li>• Tối ưu hóa hệ thống </li>
                </ul>
              </div>

              <div className="p-5 border border-dashed border-gray-300 bg-white">
                <h4 className="font-black text-[#1e1f26] mb-3 flex items-center uppercase text-xs tracking-widest">
                  <span className="w-2 h-2 bg-[#ff4d4d] mr-3"></span> Thế mạnh
                  chuyên môn
                </h4>
                <ul className="text-[11px] space-y-2 text-gray-500 font-bold uppercase tracking-tighter">
                  <li>• ReactJS & Laravel </li>
                  <li>• Tối ưu hóa UI/UX </li>
                  <li>
                    • Tìm hiểu và nghiên cứu các công nghệ và kỹ thuật mới
                  </li>
                </ul>
              </div>
            </div>

            {/* Career Goal Card */}
            <div className="bg-[#1e1f26] p-6 text-white rounded-md shadow-lg border-b-8 border-[#ff4d4d] relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-1 font-bold">
                  Target Proficiency
                </p>
                <p className="text-2xl font-black text-[#ff4d4d] tracking-tight uppercase group-hover:tracking-wider transition-all duration-500">
                  JLPT N3 & BrSE
                </p>
              </div>
              <i className="fas fa-globe-asia absolute -right-4 -bottom-4 text-8xl opacity-5 transform group-hover:rotate-12 transition-transform"></i>
            </div>
          </div>

          {/* CỘT PHẢI: Timeline Kinh nghiệm */}
          <div className="lg:col-span-7 space-y-8 relative">
            {/* Đường kẻ dọc nối các mốc thời gian */}
            <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-gray-200"></div>

            {experiences.map((item, idx) => (
              <div key={idx} className="relative pl-10 group">
                {/* Nút mốc thời gian */}
                <div className="absolute left-0 top-1 w-6 h-6 bg-white border-4 border-[#1e1f26] group-hover:border-[#ff4d4d] rounded-full transition-all duration-300 z-10"></div>

                <div className="bg-white p-6 shadow-md border border-gray-50 group-hover:shadow-xl group-hover:border-[#ff4d4d]/30 transition-all duration-500 transform group-hover:-translate-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-black text-[#ff4d4d] tracking-widest uppercase">
                      {item.time}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-[9px] font-bold text-gray-500 uppercase tracking-tighter">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-[#1e1f26] uppercase leading-tight mb-3">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
