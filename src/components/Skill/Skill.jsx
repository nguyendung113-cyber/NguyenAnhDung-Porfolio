import React from "react";
import { skillGroups } from "../../data";

/**
 * Skills Section - Hiển thị kỹ năng theo nhóm
 */
const Skills = () => {
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
      </div>
    </section>
  );
};

export default Skills;
