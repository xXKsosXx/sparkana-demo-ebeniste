"use client";

import Image from "next/image";
import { useFadeIn } from "@/lib/useFadeIn";

const bois = [
  {
    nom: "Noyer",
    image: "/images/bois-noyer.png",
    description: "Sombre, noble et onctueux.",
  },
  {
    nom: "Chene",
    image: "/images/bois-chene.png",
    description: "La force et le caractere eternel.",
  },
  {
    nom: "Frene",
    image: "/images/bois-frene.png",
    description: "Souple, clair et contemporain.",
  },
  {
    nom: "Olivier",
    image: "/images/bois-olivier.png",
    description: "L'ame mediterraneenne tourmentee.",
  },
  {
    nom: "Merisier",
    image: "/images/bois-merisier.png",
    description: "Chaleur rosee, grain soyeux.",
  },
  {
    nom: "Noyer Americain",
    image: "/images/bois-noyer-americain.png",
    description: "Veine, expressif, audacieux.",
  },
];

export default function Matieres() {
  const ref = useFadeIn();

  return (
    <section
      id="matieres"
      className="bg-surface-container py-24 md:py-32"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">
            Matieres Premieres
          </p>
          <h2 className="font-serif italic text-3xl md:text-5xl text-on-surface">
            L&apos;Essence de l&apos;Excellence
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {bois.map((b, i) => (
            <div
              key={b.nom}
              className="relative h-80 w-64 overflow-hidden group fade-in"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Image
                src={b.image}
                alt={b.nom}
                fill
                className="object-cover opacity-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-primary text-xs tracking-[0.3em] uppercase font-sans font-bold mb-2">
                  {b.nom}
                </h3>
                <p className="font-sans text-tertiary text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
