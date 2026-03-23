export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant/20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + baseline */}
          <div className="md:col-span-2">
            <p className="font-serif italic text-primary text-xl tracking-wide mb-3">
              Atelier Marchand
            </p>
            <p className="font-sans text-tertiary text-sm leading-relaxed max-w-sm">
              Ebeniste menuisier de 3eme generation. Meubles sur mesure,
              restauration et agencement interieur a Uzes, dans le Gard.
            </p>
          </div>

          {/* Explorer */}
          <div>
            <h4 className="font-sans font-bold text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-6">
              Explorer
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Savoir-faire", href: "#savoir-faire" },
                { label: "Galerie", href: "#galerie" },
                { label: "Configurateur", href: "#configurateur" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-tertiary text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans font-bold text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-6">
              Social
            </h4>
            <ul className="space-y-3">
              {["Instagram", "Pinterest", "Facebook"].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="font-sans text-tertiary text-sm hover:text-primary transition-colors duration-300"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-outline text-xs">
            &copy; 2025 Atelier Marchand &middot; Uzes, Gard
          </p>
          <p className="font-sans text-outline text-xs">
            Site realise par{" "}
            <a
              href="https://sparkana.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-300"
            >
              sparkana
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
