import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import * as THREE from "three";

extend({ Line_: THREE.Line });

declare module "@react-three/fiber" {
  interface ThreeElements {
    line_: any;
  }
}

const LINE_COUNT = 8;
const POINTS_PER_LINE = 120;
const COLORS = ["#00d4ff", "#0099cc", "#00ffcc", "#0077ff", "#00eeff"];

interface LineState {
  offset: number;
  speed: number;
  amplitude: number;
  frequency: number;
  maxOpacity: number;
  yBase: number;
  phase: number;
  colorIdx: number;
  width: number;
  born: number;
  maxLife: number;
}

function createLine(time: number): LineState {
  return {
    offset: Math.random() * Math.PI * 2,
    speed: 0.003 + Math.random() * 0.005,
    amplitude: 0.3 + Math.random() * 0.8,
    frequency: 0.15 + Math.random() * 0.25,
    maxOpacity: 0.08 + Math.random() * 0.18,
    yBase: (Math.random() - 0.5) * 1.8,
    phase: Math.random() * Math.PI * 2,
    colorIdx: Math.floor(Math.random() * COLORS.length),
    width: 0.5 + Math.random() * 2,
    born: time,
    maxLife: 20 + Math.random() * 25,
  };
}

function FlowLines() {
  const { viewport } = useThree();
  const linesRef = useRef<LineState[]>([]);
  const materialsRef = useRef<THREE.LineBasicMaterial[]>([]);
  const geometriesRef = useRef<THREE.BufferGeometry[]>([]);

  const { geometries, materials } = useMemo(() => {
    const geos: THREE.BufferGeometry[] = [];
    const mats: THREE.LineBasicMaterial[] = [];
    const lines: LineState[] = [];

    for (let i = 0; i < LINE_COUNT; i++) {
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(POINTS_PER_LINE * 3);
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geos.push(geo);

      const line = createLine(-(i * 7));
      lines.push(line);

      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color(COLORS[line.colorIdx]),
        transparent: true,
        opacity: 0,
        linewidth: 1,
      });
      mats.push(mat);
    }

    linesRef.current = lines;
    materialsRef.current = mats;
    geometriesRef.current = geos;
    return { geometries: geos, materials: mats };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const w = viewport.width;
    const h = viewport.height;

    linesRef.current.forEach((line, i) => {
      const age = t - line.born;
      const lifeFrac = Math.min(age / line.maxLife, 1);

      let alpha = line.maxOpacity;
      if (lifeFrac < 0.3) {
        alpha *= lifeFrac / 0.3;
      } else if (lifeFrac > 0.7) {
        alpha *= (1 - lifeFrac) / 0.3;
      }

      if (lifeFrac >= 1) {
        const newLine = createLine(t);
        linesRef.current[i] = newLine;
        materialsRef.current[i].color.set(COLORS[newLine.colorIdx]);
        return;
      }

      materialsRef.current[i].opacity = Math.max(0, alpha);

      const positions = geometriesRef.current[i].attributes.position.array as Float32Array;
      for (let j = 0; j < POINTS_PER_LINE; j++) {
        const frac = j / (POINTS_PER_LINE - 1);
        const x = (frac - 0.5) * w * 1.5;
        const baseY = line.yBase * h * 0.5;
        const y =
          baseY +
          Math.sin(frac * line.frequency * 6 + t * line.speed + line.offset) * line.amplitude * 0.6 +
          Math.cos(frac * line.frequency * 2.5 + t * line.speed * 0.4 + line.phase) * line.amplitude * 0.2;
        positions[j * 3] = x;
        positions[j * 3 + 1] = y;
        positions[j * 3 + 2] = 0;
      }
      geometriesRef.current[i].attributes.position.needsUpdate = true;
    });
  });

  return (
    <group>
      {geometries.map((geo, i) => (
        <line key={i} geometry={geo} material={materials[i]} />
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