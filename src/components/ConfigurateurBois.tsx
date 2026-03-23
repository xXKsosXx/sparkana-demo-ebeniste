"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const essences = [
  {
    id: "noyer",
    nom: "Noyer",
    description: "Sombre, noble et onctueux.",
    couleur: "#5C3317",
    image: "/images/bois-noyer.png",
    caracteristiques: ["Tres dur", "Grain fin", "Teinte foncee"],
  },
  {
    id: "chene",
    nom: "Chene",
    description: "La force et le caractere eternel.",
    couleur: "#8B6914",
    image: "/images/bois-chene.png",
    caracteristiques: ["Robuste", "Grain prononce", "Teinte doree"],
  },
  {
    id: "frene",
    nom: "Frene",
    description: "Souple, clair et contemporain.",
    couleur: "#C4A882",
    image: "/images/bois-frene.png",
    caracteristiques: ["Flexible", "Grain droit", "Teinte claire"],
  },
  {
    id: "olivier",
    nom: "Olivier",
    description: "L'ame mediterraneenne tourmentee.",
    couleur: "#8B7355",
    image: "/images/bois-olivier.png",
    caracteristiques: ["Rare", "Grain onde", "Teinte chaude"],
  },
  {
    id: "merisier",
    nom: "Merisier",
    description: "Chaleur rosee, grain soyeux.",
    couleur: "#A0522D",
    image: "/images/bois-merisier.png",
    caracteristiques: ["Delicat", "Grain soyeux", "Teinte rosee"],
  },
  {
    id: "noyer-americain",
    nom: "Noyer Americain",
    description: "Veine, expressif, audacieux.",
    couleur: "#4A3728",
    image: "/images/bois-noyer-americain.png",
    caracteristiques: ["Tres dur", "Grain expressif", "Teinte profonde"],
  },
];

const meubles = [
  { id: "table", nom: "Table de salle a manger" },
  { id: "bibliotheque", nom: "Bibliotheque" },
  { id: "armoire", nom: "Armoire sur mesure" },
  { id: "cuisine", nom: "Cuisine d'art" },
  { id: "bureau", nom: "Bureau" },
  { id: "autre", nom: "Autre projet" },
];

export default function ConfigurateurBois() {
  const [selectedEssence, setSelectedEssence] = useState(essences[0]);
  const [selectedMeuble, setSelectedMeuble] = useState(meubles[0]);

  return (
    <section id="configurateur" className="py-32 bg-surface-container">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-sans tracking-[0.4em] uppercase text-primary mb-4">
            Configurateur
          </p>
          <h2 className="text-4xl md:text-5xl font-serif italic text-on-surface">
            Imaginez votre piece
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Colonne gauche - Selecteurs */}
          <div>
            {/* Choix essence */}
            <div className="mb-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-outline mb-5">
                01 - Choisissez votre essence
              </p>
              <div className="grid grid-cols-3 gap-3">
                {essences.map((essence) => (
                  <button
                    key={essence.id}
                    onClick={() => setSelectedEssence(essence)}
                    className={`relative aspect-square overflow-hidden group transition-all ${
                      selectedEssence.id === essence.id
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-surface-container"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={essence.image}
                      alt={essence.nom}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                      <span className="text-white text-[10px] tracking-wider uppercase font-medium">
                        {essence.nom}
                      </span>
                    </div>
                    {selectedEssence.id === essence.id && (
                      <div className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2 6L5 9L10 3"
                            stroke="#261900"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Choix meuble */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-outline mb-5">
                02 - Type de meuble
              </p>
              <div className="space-y-2">
                {meubles.map((meuble) => (
                  <button
                    key={meuble.id}
                    onClick={() => setSelectedMeuble(meuble)}
                    className={`w-full text-left px-5 py-3.5 transition-all flex items-center justify-between group ${
                      selectedMeuble.id === meuble.id
                        ? "bg-primary/10 border-l-2 border-primary text-primary"
                        : "border-l-2 border-transparent text-outline hover:text-tertiary hover:border-outline-variant"
                    }`}
                  >
                    <span className="text-sm tracking-wide">
                      {meuble.nom}
                    </span>
                    {selectedMeuble.id === meuble.id && (
                      <ArrowRight size={14} className="text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite - Apercu */}
          <div className="lg:sticky lg:top-24">
            {/* Apercu visuel */}
            <div className="relative aspect-[4/3] mb-6 overflow-hidden">
              <Image
                src={selectedEssence.image}
                alt={selectedEssence.nom}
                fill
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-4 h-4 rounded-full border border-white/30"
                    style={{ backgroundColor: selectedEssence.couleur }}
                  />
                  <span className="text-primary text-xs tracking-widest uppercase">
                    {selectedEssence.nom}
                  </span>
                </div>
                <p className="text-tertiary text-sm italic font-serif mb-3">
                  {selectedEssence.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedEssence.caracteristiques.map((c) => (
                    <span
                      key={c}
                      className="text-[9px] tracking-widest uppercase px-2 py-1 border border-white/20 text-white/60"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Resume selection */}
            <div className="bg-surface-container-high p-6 mb-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-outline mb-3">
                Votre projet
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded-full shrink-0"
                  style={{ backgroundColor: selectedEssence.couleur }}
                />
                <div>
                  <p className="text-on-surface font-serif italic">
                    {selectedMeuble.nom}
                  </p>
                  <p className="text-outline text-xs">
                    en {selectedEssence.nom}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="w-full flex items-center justify-center gap-3 bg-primary text-primary-container py-4 font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#c4973a] transition-colors group"
            >
              Demander un devis pour ce projet
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
