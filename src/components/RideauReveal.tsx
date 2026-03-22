"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  direction?: "left" | "right" | "top";
  delay?: number;
}

export default function RideauReveal({
  children,
  direction = "left",
  delay = 0,
}: Props) {
  const [revealed, setRevealed] = useState(false);
  const [curtainGone, setCurtainGone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setRevealed(true);
            setTimeout(() => setCurtainGone(true), 800);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const curtainStyle = {
    left: { initial: "translateX(0%)", final: "translateX(-100%)" },
    right: { initial: "translateX(0%)", final: "translateX(100%)" },
    top: { initial: "translateY(0%)", final: "translateY(-100%)" },
  }[direction];

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Contenu */}
      <div
        style={{
          filter: revealed ? "none" : "blur(4px)",
          transform: revealed ? "scale(1)" : "scale(1.05)",
          transition: "filter 0.8s ease, transform 0.8s ease",
          transitionDelay: `${delay + 200}ms`,
        }}
      >
        {children}
      </div>

      {/* Rideau */}
      {!curtainGone && (
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(135deg, #210f07 0%, #3b251c 50%, #210f07 100%)",
            transform: revealed ? curtainStyle.final : curtainStyle.initial,
            transition:
              "transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)",
            transitionDelay: `${delay}ms`,
          }}
        >
          {/* Texture bois sur le rideau */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 8px,
                rgba(212,168,67,0.1) 8px,
                rgba(212,168,67,0.1) 9px
              )`,
            }}
          />
          {/* Poignee decorative */}
          <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-40">
            <div className="w-1 h-12 bg-primary/60 rounded-full" />
          </div>
        </div>
      )}
    </div>
  );
}
