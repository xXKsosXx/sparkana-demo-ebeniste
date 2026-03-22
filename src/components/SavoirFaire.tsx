"use client";

import Image from "next/image";
import { useFadeIn } from "@/lib/useFadeIn";

const specialites = [
  {
    num: "01",
    title: "Meubles sur mesure",
    image: "/images/meubles-mesure.png",
    description:
      "Des pieces uniques concues pour habiter votre espace avec une elegance intemporelle et une fonctionnalite precise.",
  },
  {
    num: "02",
    title: "Restauration",
    image: "/images/restauration.png",
    description:
      "Redonner vie aux tresors du passe en respectant l'ame de l'objet et les techniques d'ebenisterie d'epoque.",
  },
  {
    num: "03",
    title: "Agencement interieur",
    image: "/images/agencement.png",
    description:
      "Bibliotheques monumentales, cuisines d'art et dressings integres : l'architecture interieure sublimee par le bois.",
  },
];

export default function SavoirFaire() {
  const ref = useFadeIn();

  return (
    <section id="savoir-faire" className="bg-surface py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 fade-in">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">
            Savoir-faire
          </p>
          <h2 className="font-serif italic text-3xl md:text-5xl text-on-surface">
            Trois generations d&apos;excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {specialites.map((spec, i) => (
            <div
              key={spec.num}
              className={`fade-in ${i === 1 ? "md:mt-16" : i === 2 ? "md:mt-32" : ""}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden group">
                <Image
                  src={spec.image}
                  alt={spec.title}
                  fill
                  className="object-cover grayscale-hover"
                />
                <div className="absolute bottom-4 left-4 bg-surface-container-low/90 backdrop-blur-sm px-4 py-2">
                  <span className="text-primary font-sans font-bold text-sm tracking-wider">
                    {spec.num}
                  </span>
                </div>
              </div>
              <h3 className="font-serif italic text-2xl text-on-surface mt-6 mb-3">
                {spec.title}
              </h3>
              <p className="font-sans text-tertiary leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
