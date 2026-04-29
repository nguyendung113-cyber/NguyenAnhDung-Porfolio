import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import portrait from "../../assets/portrait.png";

// --- Cấu phần 3D: Hệ thống hạt dữ liệu ---
const BackgroundParticles = ({ count = 1500 }) => {
  const points = useRef();

  // Tạo tọa độ ngẫu nhiên cho các hạt trong không gian
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z
    }
    return positions;
  }, [count]);

  // Animation: Hạt xoay nhẹ và phản ứng theo chuột
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    points.current.rotation.y = t * 0.05;
    points.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    // Phản hồi theo vị trí chuột
    points.current.position.x = THREE.MathUtils.lerp(
      points.current.position.x,
      state.mouse.x * 2,
      0.1,
    );
    points.current.position.y = THREE.MathUtils.lerp(
      points.current.position.y,
      state.mouse.y * 2,
      0.1,
    );
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#E9E5D6" // Ivory color để hợp với text
        transparent
        opacity={0.3}
        sizeAttenuation={true}
      />
    </points>
  );
};

const Introduce = () => {
  return (
    <section
      id="Introduce"
      className="relative w-full bg-[#1A1C23] flex items-center justify-center py-24 overflow-hidden"
    >
      {/* 1. LỚP THREE.JS CANVAS NỀN */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <BackgroundParticles />
        </Canvas>
      </div>

      <div className="container max-w-6xl mx-auto px-6 md:px-12 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* CỘT ẢNH - Giữ layout cũ nhưng bọc trong glassmorphism nhẹ */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Viền Olive có hiệu ứng mờ ảo hơn */}
              <div className="absolute -inset-4 border-2 border-[#8A8A64]/30 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700 blur-[1px]"></div>

              <div className="relative w-full max-w-[400px] aspect-[3/4] bg-[#2D3139]/40 backdrop-blur-md overflow-hidden shadow-2xl border border-white/5">
                <img
                  src={portrait}
                  alt="Nguyen Anh Dung"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>

              {/* Tag tên Cinnabar rực rỡ */}
              <div className="absolute -bottom-6 -right-6 bg-[#E14D3D] px-8 py-4 shadow-[10px_10px_30px_rgba(225,77,61,0.3)]">
                <p className="text-[#E9E5D6] font-black text-2xl tracking-tighter">
                  DUNG.
                </p>
              </div>
            </div>
          </div>

          {/* CỘT CHỮ - Tăng tính hiện đại với Outline Text */}
          <div className="lg:col-span-7 text-left">
            <h2 className="text-[#8A8A64] font-mono tracking-[0.3em] uppercase text-sm mb-6 flex items-center">
              <span className="w-12 h-[1px] bg-[#8A8A64] mr-4"></span>
              Introduce
            </h2>

            <h1 className="text-6xl md:text-8xl font-black text-[#E9E5D6] mb-8 leading-[0.9]">
              FullStack <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(233, 229, 214, 0.4)" }}
              >
                DEVELOPER
              </span>
            </h1>

            <div className="space-y-6 relative">
              {/* Thêm một vệt sáng đỏ mờ phía sau text để tăng chiều sâu */}
              <div className="absolute -left-10 top-0 w-20 h-20 bg-[#E14D3D]/10 blur-[50px] rounded-full"></div>

              <p className="text-[#E9E5D6]/90 text-lg md:text-xl leading-relaxed relative z-10">
                Tôi là một{" "}
                <span className="text-[#E14D3D] font-bold">
                  Full-stack Developer
                </span>
                . Tôi không chỉ viết code, tôi xây dựng những trải nghiệm số
                hiện đại bằng
                <span className="text-[#E9E5D6] font-semibold"> ReactJS </span>
                và{" "}
                <span className="text-[#E9E5D6] font-semibold">Laravel 12</span>
                .
              </p>

              <p className="text-[#E9E5D6]/60 text-base leading-relaxed max-w-xl">
                Với tư duy thiết kế hệ thống từ dự án Docker, React và Laravel,
                tôi tập trung vào việc tạo ra mã nguồn sạch, hiệu năng cao và
                giao diện người dùng tinh tế.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              <button className="px-10 py-4 bg-[#E14D3D] text-[#E9E5D6] font-bold hover:bg-[#E9E5D6] hover:text-[#1A1C23] transition-all duration-500 shadow-lg tracking-widest text-xs uppercase">
                XEM DỰ ÁN
              </button>
              <button className="px-10 py-4 border border-[#8A8A64]/50 text-[#8A8A64] font-bold hover:bg-[#8A8A64] hover:text-[#E9E5D6] transition-all duration-500 tracking-widest text-xs uppercase">
                TẢI CV (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
