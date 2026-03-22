"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Savoir-faire", href: "#savoir-faire" },
  { label: "Galerie", href: "#galerie" },
  { label: "Matieres", href: "#matieres" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-serif italic text-primary text-xl tracking-wide">
          Atelier Marchand
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans font-bold text-[11px] uppercase tracking-[0.25em] text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-surface font-sans font-bold text-[11px] uppercase tracking-[0.2em] px-6 py-3 hover:bg-primary/90 transition-colors duration-300"
          >
            Devis
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-on-surface"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md border-t border-outline-variant/20 px-6 py-8 space-y-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block font-sans font-bold text-sm uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block bg-primary text-surface font-sans font-bold text-sm uppercase tracking-[0.2em] px-6 py-3 text-center hover:bg-primary/90 transition-colors duration-300"
          >
            Devis
          </a>
        </div>
      )}
    </nav>
  );
}
