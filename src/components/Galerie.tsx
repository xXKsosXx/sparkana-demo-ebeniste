"use client";

import Image from "next/image";
import { useFadeIn } from "@/lib/useFadeIn";

export default function Galerie() {
  const ref = useFadeIn();

  return (
    <section
      id="galerie"
      className="bg-surface-container-low py-24 md:py-32"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 fade-in">
          <div>
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">
              Galerie
            </p>
            <h2 className="font-serif italic text-3xl md:text-5xl text-on-surface">
              Nos Realisations
            </h2>
          </div>
          <p className="hidden md:block font-serif italic text-tertiary max-w-xs text-right">
            Chaque piece raconte une histoire de patience et de precision.
          </p>
        </div>

        {/* Grid editoriale asymetrique */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Ligne 1 */}
          <div className="col-span-12 md:col-span-8 relative aspect-video overflow-hidden fade-in group">
            <Image
              src="/images/table-noyer.png"
              alt="Table en noyer massif"
              fill
              className="object-cover grayscale-hover"
            />
            <div className="absolute bottom-4 left-4 bg-surface/80 backdrop-blur px-4 py-2">
              <span className="text-primary text-[10px] tracking-widest uppercase font-sans font-bold">
                Noyer Massif / 2023
              </span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 relative aspect-square overflow-hidden fade-in group">
            <Image
              src="/images/bibliotheque-chene.png"
              alt="Bibliotheque en chene fume"
              fill
              className="object-cover grayscale-hover"
            />
            <div className="absolute bottom-4 left-4 bg-surface/80 backdrop-blur px-4 py-2">
              <span className="text-primary text-[10px] tracking-widest uppercase font-sans font-bold">
                Chene Fume / Uzes
              </span>
            </div>
          </div>

          {/* Ligne 2 */}
          <div className="col-span-12 md:col-span-4 relative aspect-[4/5] overflow-hidden fade-in group">
            <Image
              src="/images/armoire-sur-mesure.png"
              alt="Armoire sur mesure"
              fill
              className="object-cover grayscale-hover"
            />
          </div>

          <div className="col-span-12 md:col-span-8 relative aspect-video overflow-hidden fade-in group">
            <Image
              src="/images/chaise-artisanale.png"
              alt="Chaise artisanale"
              fill
              className="object-cover grayscale-hover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-surface/30">
              <h3 className="font-serif italic text-2xl md:text-3xl text-on-surface text-center px-8">
                La Perfection du Trait
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
