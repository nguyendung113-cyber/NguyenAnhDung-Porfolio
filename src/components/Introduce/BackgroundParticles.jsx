import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * BackgroundParticles - 3D particle system for Introduce section
 * Tạo hiệu ứng hạt dữ liệu chuyển động nhẹ trong không gian
 */
const BackgroundParticles = ({ count = 1500 }) => {
  const points = useRef();

  // Tạo tọa độ ngẫu nhiên cho các hạt
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
    if (!points.current) return;

    const t = state.clock.getElapsedTime();
    points.current.rotation.y = t * 0.05;
    points.current.rotation.x = Math.sin(t * 0.1) * 0.1;

    // Phản hồi theo vị trí chuột
    if (state.mouse) {
      points.current.position.x = THREE.MathUtils.lerp(
        points.current.position.x,
        (state.mouse.x || 0) * 2,
        0.1,
      );
      points.current.position.y = THREE.MathUtils.lerp(
        points.current.position.y,
        (state.mouse.y || 0) * 2,
        0.1,
      );
    }
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
        color="#E9E5D6"
        transparent
        opacity={0.3}
        sizeAttenuation={true}
      />
    </points>
  );
};

export default BackgroundParticles;
