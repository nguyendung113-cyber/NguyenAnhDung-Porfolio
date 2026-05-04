import React, { useState, useRef, useMemo, lazy, Suspense } from "react";
import portrait from "../../assets/portrait.png";

// Lazy load Three.js components
const Canvas = lazy(() =>
  import("@react-three/fiber").then((mod) => ({ default: mod.Canvas })),
);
const BackgroundParticles = lazy(() => import("./BackgroundParticles"));

/**
 * Loading fallback for Three.js canvas
 */
const CanvasLoader = () => (
  <div className="absolute inset-0 bg-[#1A1C23] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cinnabar border-t-transparent rounded-full animate-spin"></div>
  </div>
);

/**
 * Introduce Section - Hero/About section with 3D background
 */
const Introduce = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="Introduce"
      className="relative w-full bg-[#1A1C23] flex items-center justify-center py-24 overflow-hidden"
    >
      {/* 1. LỚP THREE.JS CANVAS NỀN - Lazy Load */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<CanvasLoader />}>
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
              <BackgroundParticles />
            </Suspense>
          </Canvas>
        </Suspense>
      </div>

      <div className="container max-w-6xl mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* CỘT ẢNH */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Viền Olive có hiệu ứng mờ ảo */}
              <div className="absolute -inset-4 border-2 border-[#8A8A64]/30 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 blur-[1px]"></div>

              <div className="relative w-full max-w-[400px] aspect-[3/4] bg-[#2D3139]/40 backdrop-blur-md overflow-hidden shadow-2xl border border-white/5">
                <img
                  src={portrait}
                  alt="Nguyen Anh Dung"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? "grayscale-[30%] group-hover:grayscale-0 scale-105 group-hover:scale-100" : "grayscale"}`}
                />
              </div>

              {/* Tag tên Cinnabar */}
              <div className="absolute -bottom-6 -right-6 bg-[#E14D3D] px-8 py-4 shadow-[10px_10px_30px_rgba(225,77,61,0.3)]">
                <p className="text-[#E9E5D6] font-black text-2xl tracking-tighter">
                  DUNG.
                </p>
              </div>
            </div>
          </div>

          {/* CỘT CHỮ */}
          <div className="lg:col-span-7 text-left">
            <div className="space-y-6">
              {/* Subtitle */}
              <p className="text-cinnabar font-bold tracking-[0.3em] uppercase text-sm">
                Junior Fullstack Developer
              </p>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-ivory leading-tight">
                XIN CHÀO<span className="text-cinnabar">.</span>
                <br />
                TÔI LÀ <span className="text-outline">DŨNG</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                Kết hợp <span className="text-cinnabar font-bold">ReactJS</span>{" "}
                và <span className="text-cinnabar font-bold">Laravel</span> để
                xây dựng giải pháp phần mềm chất lượng cao cho thị trường Nhật
                Bản.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <p className="text-3xl font-black text-cinnabar">1+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    Năm kinh nghiệm
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-black text-cinnabar">5+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    Dự án hoàn thành
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-black text-cinnabar">N3</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    Target JLPT
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="px-8 py-4 bg-cinnabar text-white font-black uppercase tracking-[0.2em] hover:bg-[#d13d2d] transition-all shadow-lg"
                >
                  Xem Dự Án
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-ivory/30 text-ivory font-black uppercase tracking-[0.2em] hover:bg-ivory hover:text-[#1e1f26] transition-all"
                >
                  Liên Hệ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
