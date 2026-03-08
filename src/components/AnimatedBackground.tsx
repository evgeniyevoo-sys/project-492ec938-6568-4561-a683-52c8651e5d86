import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import * as THREE from "three";

extend({ Line_: THREE.Line });

declare module "@react-three/fiber" {
  interface ThreeElements {
    line_: any;
  }
}

const LINE_COUNT = 8;
const POINTS_PER_LINE = 160;
const FUZZ_STRANDS = 4;

const COLORS = ["#4db8ff", "#29a3e6", "#66ccff", "#7ac8f5", "#e8f4ff", "#b8d8f0"];

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

const mouseNorm = { x: 0.5, y: 0.5 };

function createLine(time: number): LineState {
  return {
    offset: Math.random() * Math.PI * 2,
    speed: 0.0005 + Math.random() * 0.0008,
    amplitude: 0.15 + Math.random() * 0.5,
    frequency: 0.06 + Math.random() * 0.14,
    maxOpacity: 0.04 + Math.random() * 0.1,
    yBase: (Math.random() - 0.5) * 1.8,
    phase: Math.random() * Math.PI * 2,
    colorIdx: Math.floor(Math.random() * COLORS.length),
    born: time,
    maxLife: 25 + Math.random() * 30,
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
    const mx = (mouseNorm.x * 2 - 1) * w * 0.5;
    const my = -(mouseNorm.y * 2 - 1) * h * 0.5;

    linesRef.current.forEach((line, i) => {
      const age = t - line.born;
      const lifeFrac = Math.min(age / line.maxLife, 1);
      let envelope = 1;
      if (lifeFrac < 0.2) envelope = lifeFrac / 0.2;
      else if (lifeFrac > 0.75) envelope = (1 - lifeFrac) / 0.25;

      if (lifeFrac >= 1) {
        const newLine = createLine(t);
        linesRef.current[i] = newLine;
        allMats[i].forEach(m => m.color.set(COLORS[newLine.colorIdx]));
        return;
      }

      allGeos[i].forEach((geo, s) => {
        const sf = FUZZ_STRANDS > 1 ? (s / (FUZZ_STRANDS - 1)) - 0.5 : 0;
        const sw = Math.exp(-sf * sf * 7);
        const positions = geo.attributes.position.array as Float32Array;

        for (let j = 0; j < POINTS_PER_LINE; j++) {
          const frac = j / (POINTS_PER_LINE - 1);
          const x = (frac - 0.5) * w * 1.5;
          const baseY = line.yBase * h * 0.47;

          const wave =
            Math.sin(frac * line.frequency * 6.5 + t * line.speed + line.offset) * line.amplitude * 0.55 +
            Math.cos(frac * line.frequency * 2.8 + t * line.speed * 0.45 + line.phase) * line.amplitude * 0.2;

          const dx = x - mx;
          const dy = (baseY + wave) - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const infl = Math.max(0, 1 - dist / (w * 0.14));
          const push = infl * infl * (dy > 0 ? 1 : -1) * h * 0.032;

          const tipF = 1 + Math.pow(Math.abs(frac - 0.5) * 2, 3) * 2;
          const spread = sf * 0.04 * tipF;

          positions[j * 3]     = x;
          positions[j * 3 + 1] = baseY + wave + spread + push;
          positions[j * 3 + 2] = sf * 0.02 * tipF;
        }

        geo.attributes.position.needsUpdate = true;
        allMats[i][s].opacity = Math.max(0, line.maxOpacity * envelope * sw);
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

const AnimatedBackground = () => {
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouseNorm.x = e.clientX / window.innerWidth;
      mouseNorm.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "#050d1a",
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <FlowLines />
        </Canvas>
      </div>
    </div>
  );
};

export default AnimatedBackground;
