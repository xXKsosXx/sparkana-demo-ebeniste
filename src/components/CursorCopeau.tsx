"use client";

import { useEffect, useState } from "react";

export default function CursorCopeau() {
  const [positions, setPositions] = useState(Array(8).fill({ x: 0, y: 0 }));
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    const trail: { x: number; y: number }[] = Array(8)
      .fill(null)
      .map(() => ({ x: 0, y: 0 }));

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setRotation((r) => r + 2);
    };

    let rafId: number;
    const animate = () => {
      trail[0] = { x: mouseX, y: mouseY };
      for (let i = 1; i < trail.length; i++) {
        trail[i] = {
          x: trail[i].x + (trail[i - 1].x - trail[i].x) * 0.3,
          y: trail[i].y + (trail[i - 1].y - trail[i].y) * 0.3,
        };
      }
      setPositions([...trail]);
      rafId = requestAnimationFrame(animate);
    };

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", move);
    rafId = requestAnimationFrame(animate);

    const interactives = document.querySelectorAll("a, button, [data-hover]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <style>{`
        @media (min-width: 769px) {
          * { cursor: none !important; }
        }
      `}</style>

      {/* Traine de copeaux */}
      {positions.map((pos, i) => {
        const size = Math.max(4, 14 - i * 1.5);
        const opacity = Math.max(0, 1 - i * 0.13);

        return (
          <div
            key={i}
            className="fixed pointer-events-none z-[9998] hidden md:block"
            style={{
              left: pos.x,
              top: pos.y,
              transform: `translate(-50%, -50%) rotate(${rotation + i * 25}deg)`,
              opacity,
              transition: i === 0 ? "none" : undefined,
            }}
          >
            <svg width={size} height={size * 2.5} viewBox="0 0 10 25">
              <path
                d="M5 0 C8 5, 10 10, 8 15 C6 20, 4 22, 5 25 C4 22, 2 20, 2 15 C0 10, 2 5, 5 0Z"
                fill={
                  i === 0
                    ? "#c4973a"
                    : `hsl(${25 + i * 5}, ${60 - i * 5}%, ${40 + i * 3}%)`
                }
              />
            </svg>
          </div>
        );
      })}

      {/* Curseur principal */}
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: positions[0].x,
          top: positions[0].y,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        }}
      >
        <svg
          width={isHovering ? "22" : "16"}
          height={isHovering ? "55" : "40"}
          viewBox="0 0 10 25"
          style={{ transition: "all 0.3s ease" }}
        >
          <path
            d="M5 0 C8 5, 10 10, 8 15 C6 20, 4 22, 5 25 C4 22, 2 20, 2 15 C0 10, 2 5, 5 0Z"
            fill={isHovering ? "#f0bf5e" : "#c4973a"}
            style={{ transition: "fill 0.3s ease" }}
          />
          <path
            d="M5 3 C5.5 8, 5.5 12, 5 18"
            stroke="#8B5E3C"
            strokeWidth="0.5"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Halo dore au hover */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9997] rounded-full hidden md:block"
          style={{
            left: positions[0].x,
            top: positions[0].y,
            width: "40px",
            height: "40px",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(212,168,67,0.15) 0%, transparent 70%)",
            border: "1px solid rgba(212,168,67,0.2)",
          }}
        />
      )}
    </>
  );
}
