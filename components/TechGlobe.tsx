"use client";

import { useEffect, useRef } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiDotnet,
  SiPostgresql,
  SiHtml5,
  SiGithub,
  SiAngular,
  SiCss,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node JS", Icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "ASP.NET Core", Icon: SiDotnet, color: "#512BD4" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
];

export default function TechGlobe() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const runningRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const golden = Math.PI * (3 - Math.sqrt(5));

    const nodes = skills.map((_, i) => {
      const y = 1 - (i / (skills.length - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;

      return {
        x: Math.cos(theta) * r,
        y: y * 0.42,
        z: Math.sin(theta) * r,
        speed: 0.15 + Math.random() * 0.1,
        phase: Math.random() * Math.PI * 2,
      };
    });

    let time = 0;

    const animate = () => {
      if (!runningRef.current) return;

      time += 0.008;

      const size = container.clientWidth;
      const center = size / 2;
      const R = size * 0.42;

      nodes.forEach((n, i) => {
        const el = itemRefs.current[i];
        if (!el) return;

        const angle = time * n.speed + n.phase;

        const rx = n.x * Math.cos(angle) - n.z * Math.sin(angle);
        const rz = n.x * Math.sin(angle) + n.z * Math.cos(angle);

        const x = center + rx * R;
        const y = center + n.y * R;

        const depth = (rz + 1) / 2;

        const scale = 0.5 + depth * 0.7;
        const opacity = 0.3 + depth * 0.7;

        el.style.transform = `
          translate3d(${x}px, ${y}px, 0)
          translate(-50%, -50%)
          scale(${scale})
        `;

        el.style.opacity = String(opacity);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleVisibility = () => {
      runningRef.current = !document.hidden;

      if (runningRef.current) {
        animate();
      } else if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      runningRef.current = false;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[600px] aspect-square mx-auto"
    >
      {skills.map((s, i) => (
        <div
          key={s.name}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className="absolute left-0 top-0 flex flex-col items-center will-change-transform"
        >
          <div
            className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur border border-white/10"
            style={{
              boxShadow: `0 0 20px ${s.color}33`,
            }}
          >
            <s.Icon size={30} color={s.color} />
          </div>

          <span className="text-xs text-zinc-400 mt-1">
            {s.name}
          </span>
        </div>
      ))}
    </div>
  );
}