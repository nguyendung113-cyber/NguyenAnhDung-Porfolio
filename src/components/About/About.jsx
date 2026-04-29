import React from "react";
import { experiences, coreValues, strengths } from "../../data";

/**
 * About Section - Giới thiệu về bản thân và kinh nghiệm
 */
const About = () => {
  return (
    <section id="about" className="bg-[#f8f9fa] py-24 px-6 md:px-20 overflow-hidden text-gray-800 font-sans">
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
                  <span className="w-2 h-2 bg-[#ff4d4d] mr-3"></span> Giá trị cốt lõi
                </h4>
                <ul className="text-[11px] space-y-2 text-gray-500 font-bold uppercase tracking-tighter">
                  {coreValues.map((value, idx) => (
                    <li key={idx}>• {value}</li>
                  ))}
                </ul>
              </div>

              <div className="p-5 border border-dashed border-gray-300 bg-white">
                <h4 className="font-black text-[#1e1f26] mb-3 flex items-center uppercase text-xs tracking-widest">
                  <span className="w-2 h-2 bg-[#ff4d4d] mr-3"></span> Thế mạnh chuyên môn
                </h4>
                <ul className="text-[11px] space-y-2 text-gray-500 font-bold uppercase tracking-tighter">
                  {strengths.map((strength, idx) => (
                    <li key={idx}>• {strength}</li>
                  ))}
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

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10">
                {/* Dot tròn */}
                <div className="absolute left-[2px] top-1 w-5 h-5 bg-[#ff4d4d] rounded-full border-4 border-white shadow-md"></div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-black text-[#ff4d4d] uppercase tracking-widest">
                      {exp.tag}
                    </span>
                    <span className="text-xs font-bold text-gray-400">{exp.time}</span>
                  </div>
                  <h3 className="text-lg font-black text-[#1e1f26] uppercase mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {exp.desc}
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