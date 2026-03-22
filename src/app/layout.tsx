import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import CursorCopeau from "@/components/CursorCopeau";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Atelier Marchand | Ebeniste Menuisier depuis 1948 | Uzes",
  description:
    "Atelier Marchand, ebeniste menuisier de 3eme generation a Uzes dans le Gard. Meubles sur mesure, restauration et agencement interieur. Sur commande uniquement depuis 1948.",
  keywords: [
    "ebeniste",
    "menuisier",
    "Uzes",
    "Gard",
    "meubles sur mesure",
    "restauration",
    "agencement interieur",
    "artisan",
    "bois",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${notoSerif.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-surface text-on-surface">
        <CursorCopeau />
        {children}
      </body>
    </html>
  );
}
