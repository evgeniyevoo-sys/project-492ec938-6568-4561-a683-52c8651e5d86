import { useRef, useEffect, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import * as THREE from "three";

extend({ Line_: THREE.Line });

declare module "@react-three/fiber" {
  interface ThreeElements {
    line_: any;
  }
}

const LINE_COUNT = 5;
const POINTS_PER_LINE = 100;

interface LineState {
  offset: number;
  speed: number;
  amplitude: number;
  frequency: number;
  opacity: number;
  yBase: number;
  phase: number;
  color: string;
  life: number;      // 0-1, current life
  maxLife: number;    // total life duration in seconds
  born: number;       // time born
}

const COLORS = ["#00d4ff", "#0099cc", "#00ffcc", "#0066ff"];

function createLine(time: number): LineState {
  return {
    offset: Math.random() * Math.PI * 2,
    speed: 0.01 + Math.random() * 0.02,
    amplitude: 0.6 + Math.random() * 1.4,
    frequency: 0.2 + Math.random() * 0.4,
    opacity: 0.2 + Math.random() * 0.3,
    yBase: Math.random() * 2 - 1,
    phase: Math.random() * Math.PI * 2,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    life: 0,
    maxLife: 12 + Math.random() * 18,
    born: time,
  };
}

function FlowLines() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const linesRef = useRef<LineState[]>([]);
  const materialsRef = useRef<THREE.LineBasicMaterial[]>([]);

  const geometries = useMemo(() => {
    const geos: THREE.BufferGeometry[] = [];
    const mats: THREE.LineBasicMaterial[] = [];
    const initialLines: LineState[] = [];

    for (let i = 0; i < LINE_COUNT; i++) {
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(POINTS_PER_LINE * 3);
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geos.push(geo);

      const line = createLine(i * -5); // stagger birth
      initialLines.push(line);

      const mat = new THREE.LineBasicMaterial({
        color: line.color,
        transparent: true,
        opacity: 0,
      });
      mats.push(mat);
    }

    linesRef.current = initialLines;
    materialsRef.current = mats;
    return geos;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const w = viewport.width;
    const h = viewport.height;
    const lines = linesRef.current;
    const mats = materialsRef.current;

    lines.forEach((line, i) => {
      const age = t - line.born;
      const lifeFrac = age / line.maxLife;

      // Fade in for first 20%, fade out for last 20%
      let alpha = line.opacity;
      if (lifeFrac < 0.2) {
        alpha *= lifeFrac / 0.2;
      } else if (lifeFrac > 0.8) {
        alpha *= (1 - lifeFrac) / 0.2;
      }

      // Regenerate if dead
      if (lifeFrac >= 1) {
        const newLine = createLine(t);
        lines[i] = newLine;
        mats[i].color.set(newLine.color);
        return;
      }

      mats[i].opacity = Math.max(0, alpha);

      const positions = geometries[i].attributes.position.array as Float32Array;
      for (let j = 0; j < POINTS_PER_LINE; j++) {
        const frac = j / (POINTS_PER_LINE - 1);
        const x = (frac - 0.5) * w * 1.4;
        const baseY = line.yBase * h * 0.55;
        const y =
          baseY +
          Math.sin(frac * line.frequency * 7 + t * line.speed + line.offset) *
            line.amplitude * 0.5 +
          Math.cos(frac * line.frequency * 3.5 + t * line.speed * 0.5 + line.phase) *
            line.amplitude * 0.25;
        positions[j * 3] = x;
        positions[j * 3 + 1] = y;
        positions[j * 3 + 2] = 0;
      }
      geometries[i].attributes.position.needsUpdate = true;
    });
  });

  return (
    <group ref={groupRef}>
      {geometries.map((geo, i) => (
        <line_ key={i} geometry={geo} material={materialsRef.current[i]} />
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
