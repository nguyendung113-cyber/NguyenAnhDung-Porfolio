import React from "react";
import portrait from "../../assets/portrait.png";

const About = () => {
  return (
    // Section bao quanh toàn màn hình, nền màu Dark Blue
    <section
      id="about"
      className="relative min-h-screen w-full bg-darkblue flex items-center justify-center py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* CỘT ẢNH - Chiếm 5/12 cột */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Khung viền nghệ thuật màu Olive */}
              <div className="absolute -inset-4 border-2 border-olive/30 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500"></div>

              <div className="relative w-full max-w-[400px] aspect-[3/4] bg-slate-800 overflow-hidden shadow-2xl border-2 border-ivory/10">
                <img
                  src={portrait}
                  alt="Nguyen Anh Dung"
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>

              {/* Tag tên nổi bật màu Cinnabar */}
              <div className="absolute -bottom-6 -right-6 bg-cinnabar px-8 py-4 shadow-2xl">
                <p className="text-ivory font-black text-2xl tracking-tighter">
                  DUNG.
                </p>
              </div>
            </div>
          </div>

          {/* CỘT CHỮ - Chiếm 7/12 cột */}
          <div className="lg:col-span-7 text-left">
            <h2 className="text-olive font-mono tracking-[0.3em] uppercase text-sm mb-6 flex items-center">
              <span className="w-12 h-[1px] bg-olive mr-4"></span>
              Introduce
            </h2>

            <h1 className="text-5xl md:text-7xl font-black text-ivory mb-8 leading-none">
              FullStack <br />
              <span className="text-outline">DEVELOPER</span>
            </h1>

            <div className="space-y-6">
              <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
                Tôi là một{" "}
                <span className="text-cinnabar font-bold">
                  Full-stack Developer
                </span>
                . Tôi không chỉ viết code, tôi xây dựng những trải nghiệm số
                hiện đại bằng
                <span className="text-ivory font-semibold">
                  {" "}
                  ReactJS
                </span> và{" "}
                <span className="text-ivory font-semibold">Laravel 12</span>.
              </p>

              <p className="text-ivory/60 text-base leading-relaxed max-w-xl">
                Với tư duy thiết kế hệ thống từ dự án Docker, React và Laravel,
                tôi tập trung vào việc tạo ra mã nguồn sạch, hiệu năng cao và
                giao diện người dùng tinh tế.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              <button className="px-10 py-4 bg-cinnabar text-ivory font-bold hover:bg-ivory hover:text-darkblue transition-all duration-300 shadow-lg tracking-widest text-sm">
                XEM DỰ ÁN
              </button>
              <button className="px-10 py-4 border-2 border-olive text-olive font-bold hover:bg-olive hover:text-ivory transition-all duration-300 tracking-widest text-sm">
                TẢI CV (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
