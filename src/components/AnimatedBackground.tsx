import { useEffect, useRef } from "react";

interface FlowLine {
  points: { x: number; y: number }[];
  speed: number;
  thickness: number;
  opacity: number;
  offset: number;
  amplitude: number;
  frequency: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);
  const linesRef = useRef<FlowLine[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(document.documentElement);

    // Create lines
    const lineCount = 12;
    const lines: FlowLine[] = [];
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        points: [],
        speed: 0.2 + Math.random() * 0.4,
        thickness: 0.5 + Math.random() * 1.5,
        opacity: 0.04 + Math.random() * 0.08,
        offset: Math.random() * Math.PI * 2,
        amplitude: 30 + Math.random() * 80,
        frequency: 0.001 + Math.random() * 0.002,
      });
    }
    linesRef.current = lines;

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    let time = 0;
    const animate = () => {
      if (!canvas || !ctx) return;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const scrollFactor = 1 + scrollRef.current * 0.0003;
      time += 0.005 * scrollFactor;

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(30, 30, 30, ${line.opacity})`;
        ctx.lineWidth = line.thickness;
        ctx.lineCap = "round";

        const startY = (line.offset / (Math.PI * 2)) * h;
        const steps = 200;

        for (let j = 0; j <= steps; j++) {
          const t = j / steps;
          const x = t * w;
          const y =
            startY +
            Math.sin(x * line.frequency + time * line.speed + line.offset) *
              line.amplitude *
              scrollFactor +
            Math.cos(x * line.frequency * 0.5 + time * line.speed * 0.7) *
              line.amplitude *
              0.5;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default AnimatedBackground;
