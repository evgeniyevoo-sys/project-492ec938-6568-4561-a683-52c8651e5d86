import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import * as THREE from "three";

extend({ Line_: THREE.Line });

declare module "@react-three/fiber" {
  interface ThreeElements {
    line_: any;
  }
}

const LINE_COUNT = 6;
const POINTS_PER_LINE = 150;
const FUZZ_STRANDS = 5;

const COLORS = ["#ff6a00", "#ff8c00", "#ffaa00", "#ff5500", "#ffbb33", "#ff7700"];

interface LineState {
  offset: number;
  speed: number;
  amplitude: number;
  frequency: number;
  maxOpacity: number;
  yBase: number;
  phase: number;
  colorIdx: number;
  born: number;
  maxLife: number;
}

function createLine(time: number): LineState {
  return {
    offset: Math.random() * Math.PI * 2,
    speed: 0.002 + Math.random() * 0.004,
    amplitude: 0.25 + Math.random() * 0.7,
    frequency: 0.1 + Math.random() * 0.2,
    maxOpacity: 0.1 + Math.random() * 0.2,
    yBase: (Math.random() - 0.5) * 1.6,
    phase: Math.random() * Math.PI * 2,
    colorIdx: Math.floor(Math.random() * COLORS.length),
    born: time,
    maxLife: 22 + Math.random() * 28,
  };
}

function FlowLines() {
  const { viewport } = useThree();
  const linesRef = useRef<LineState[]>([]);

  const { allGeos, allMats } = useMemo(() => {
    const allGeos: THREE.BufferGeometry[][] = [];
    const allMats: THREE.LineBasicMaterial[][] = [];
    const lines: LineState[] = [];

    for (let i = 0; i < LINE_COUNT; i++) {
      const line = createLine(-(i * 7));
      lines.push(line);

      const geos: THREE.BufferGeometry[] = [];
      const mats: THREE.LineBasicMaterial[] = [];

      for (let s = 0; s < FUZZ_STRANDS; s++) {
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(POINTS_PER_LINE * 3);
        geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geos.push(geo);

        const mat = new THREE.LineBasicMaterial({
          color: new THREE.Color(COLORS[line.colorIdx]),
          transparent: true,
          opacity: 0,
        });
        mats.push(mat);
      }

      allGeos.push(geos);
      allMats.push(mats);
    }

    linesRef.current = lines;
    return { allGeos, allMats };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const w = viewport.width;
    const h = viewport.height;

    linesRef.current.forEach((line, i) => {
      const age = t - line.born;
      const lifeFrac = Math.min(age / line.maxLife, 1);

      let envelope = 1;
      if (lifeFrac < 0.25) envelope = lifeFrac / 0.25;
      else if (lifeFrac > 0.75) envelope = (1 - lifeFrac) / 0.25;

      if (lifeFrac >= 1) {
        const newLine = createLine(t);
        linesRef.current[i] = newLine;
        allMats[i].forEach(m => m.color.set(COLORS[newLine.colorIdx]));
        return;
      }

      allGeos[i].forEach((geo, s) => {
        const strandFrac = FUZZ_STRANDS > 1 ? (s / (FUZZ_STRANDS - 1)) - 0.5 : 0;
        const strandWeight = Math.exp(-strandFrac * strandFrac * 8);

        const positions = geo.attributes.position.array as Float32Array;

        for (let j = 0; j < POINTS_PER_LINE; j++) {
          const frac = j / (POINTS_PER_LINE - 1);
          const x = (frac - 0.5) * w * 1.5;

          const baseY = line.yBase * h * 0.48;
          const wave =
            Math.sin(frac * line.frequency * 7 + t * line.speed + line.offset) * line.amplitude * 0.55 +
            Math.cos(frac * line.frequency * 3 + t * line.speed * 0.5 + line.phase) * line.amplitude * 0.22;

          const tipFactor = 1 + Math.pow(Math.abs(frac - 0.5) * 2, 3) * 2;
          const spread = strandFrac * 0.05 * tipFactor;

          positions[j * 3] = x;
          positions[j * 3 + 1] = baseY + wave + spread;
          positions[j * 3 + 2] = strandFrac * 0.03 * tipFactor;
        }

        geo.attributes.position.needsUpdate = true;
        allMats[i][s].opacity = Math.max(0, line.maxOpacity * envelope * strandWeight);
      });
    });
  });

  return (
    <group>
      {allGeos.map((geos, i) =>
        geos.map((geo, s) => (
          <line_ key={`${i}-${s}`} geometry={geo} material={allMats[i][s]} />
        ))
      )}
    </group>
  );
}

const AnimatedBackground = () => (
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

export default AnimatedBackground;
