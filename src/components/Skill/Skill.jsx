import React from "react";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend Development",
      skills: [
        { name: "ReactJS", icon: "fab fa-react", color: "text-[#61DAFB]" },
        {
          name: "Tailwind CSS",
          icon: "fab fa-css3-alt",
          color: "text-[#38BDF8]",
        },
        { name: "jQuery", icon: "fas fa-code", color: "text-[#0769AD]" },
        {
          name: "JavaScript (ES6+)",
          icon: "fab fa-js",
          color: "text-[#F7DF1E]",
        },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Laravel 12", icon: "fab fa-laravel", color: "text-[#FF2D20]" },
        { name: "MySQL", icon: "fas fa-database", color: "text-[#4479A1]" },
        { name: "PHP", icon: "fab fa-php", color: "text-[#777BB4]" },
        {
          name: "RESTful API",
          icon: "fas fa-network-wired",
          color: "text-[#009688]",
        },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: "fab fa-docker", color: "text-[#2496ED]" },
        { name: "Git / GitHub", icon: "fab fa-github", color: "text-white" },
        {
          name: "Postman",
          icon: "fas fa-satellite-dish",
          color: "text-[#FF6C37]",
        },
        {
          name: "AI Tools (Copilot/GPT)",
          icon: "fas fa-robot",
          color: "text-[#ff4d4d]",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#1e1f26] py-24 px-6 md:px-20 text-white border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="relative mb-16 text-right md:text-left">
          <h2 className="text-5xl font-black uppercase tracking-tighter">
            Kỹ Năng<span className="text-[#ff4d4d]">.</span>
          </h2>
          <div className="absolute -bottom-4 right-0 md:left-0 w-24 h-2 bg-[#ff4d4d]"></div>
          <p className="mt-8 text-gray-500 font-mono text-sm tracking-[0.3em] uppercase opacity-60">
            // Technical_Stack_V2.0
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-gray-800/30 border border-gray-700 p-8 rounded-sm hover:border-[#ff4d4d]/50 transition-all group"
            >
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#ff4d4d] mb-8 border-b border-gray-700 pb-4">
                {group.title}
              </h3>

              <div className="space-y-6">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between group/item"
                  >
                    <div className="flex items-center space-x-4">
                      <i
                        className={`${skill.icon} ${skill.color} text-2xl transition-transform group-hover/item:scale-110`}
                      ></i>
                      <span className="text-sm font-bold tracking-wide text-gray-300 group-hover/item:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    {/* Đường line trang trí nhỏ */}
                    <div className="h-[1px] w-12 bg-gray-700 group-hover/item:w-16 group-hover/item:bg-[#ff4d4d] transition-all"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Phần bổ sung: Japanese & DSA lấp đầy phía dưới */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#ff4d4d] p-4 flex items-center justify-between group cursor-default">
            <span className="font-black uppercase tracking-widest text-sm">
              Japanese Proficiency
            </span>
            <span className="font-mono font-bold bg-white text-[#ff4d4d] px-3 py-1 rounded-full text-xs">
              Target N3
            </span>
          </div>
          <div className="bg-white p-4 flex items-center justify-between group cursor-default">
            <span className="font-black uppercase tracking-widest text-sm text-[#1e1f26]">
              Problem Solving
            </span>
            <span className="font-mono font-bold bg-[#1e1f26] text-white px-3 py-1 rounded-full text-xs">
              DSA Mastery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
