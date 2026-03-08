import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import * as THREE from "three";

extend({ Line_: THREE.Line });

declare module "@react-three/fiber" {
  interface ThreeElements {
    line_: any;
  }
}

const LINE_COUNT = 18;
const POINTS_PER_LINE = 120;

function FlowLines() {
  const groupRef = useRef<THREE.Group>(null);
  const scrollRef = useRef(0);
  const { viewport } = useThree();

  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lines = useMemo(() => {
    return Array.from({ length: LINE_COUNT }, (_, i) => ({
      offset: (i / LINE_COUNT) * Math.PI * 2,
      speed: 0.08 + Math.random() * 0.12,
      amplitude: 0.8 + Math.random() * 1.8,
      frequency: 0.3 + Math.random() * 0.5,
      thickness: 0.5 + Math.random() * 2.5,
      opacity: 0.12 + Math.random() * 0.28,
      yBase: (i / LINE_COUNT) * 2 - 1,
      phase: Math.random() * Math.PI * 2,
    }));
  }, []);

  const geometries = useMemo(() => {
    return lines.map(() => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(POINTS_PER_LINE * 3);
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      return geometry;
    });
  }, [lines]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const scrollFactor = 1 + scrollRef.current * 0.0004;
    const w = viewport.width;
    const h = viewport.height;

    lines.forEach((line, i) => {
      const positions = geometries[i].attributes.position.array as Float32Array;
      for (let j = 0; j < POINTS_PER_LINE; j++) {
        const frac = j / (POINTS_PER_LINE - 1);
        const x = (frac - 0.5) * w * 1.3;
        const baseY = line.yBase * h * 0.6;
        const y =
          baseY +
          Math.sin(frac * line.frequency * 8 + t * line.speed * scrollFactor + line.offset) *
            line.amplitude *
            scrollFactor *
            0.5 +
          Math.cos(frac * line.frequency * 4 + t * line.speed * 0.6 + line.phase) *
            line.amplitude *
            0.3;
        positions[j * 3] = x;
        positions[j * 3 + 1] = y;
        positions[j * 3 + 2] = 0;
      }
      geometries[i].attributes.position.needsUpdate = true;
    });
  });

  return (
    <group ref={groupRef}>
      {lines.map((line, i) => (
        <line_ key={i} geometry={geometries[i]}>
          <lineBasicMaterial
            color="#222222"
            transparent
            opacity={line.opacity}
            linewidth={line.thickness}
          />
        </line_>
      ))}
    </group>
  );
}

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <FlowLines />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
