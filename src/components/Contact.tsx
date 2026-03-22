"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useFadeIn } from "@/lib/useFadeIn";

const infos = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "14 Rue de la Menuiserie, 30700 Uzes",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@ateliermarchand.fr",
  },
  {
    icon: Phone,
    label: "Tel",
    value: "+33 (0)4 66 22 00 00",
  },
];

export default function Contact() {
  const ref = useFadeIn();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-surface-container-high py-24 md:py-32"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left - Info */}
          <div className="fade-in">
            <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4">
              L&apos;Atelier
            </p>
            <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-on-surface mb-6 leading-tight">
              Visitez-nous a Uzes
            </h2>
            <p className="font-sans text-tertiary text-lg leading-relaxed mb-12">
              Situe au coeur de la cite ducale, notre atelier est ouvert sur
              rendez-vous pour discuter de vos projets les plus ambitieux.
            </p>

            <div className="space-y-8">
              {infos.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <info.icon
                    className="text-primary mt-1 flex-shrink-0"
                    size={20}
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="font-sans font-bold text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-1">
                      {info.label}
                    </p>
                    <p className="font-sans text-on-surface">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-surface shadow-2xl p-8 md:p-12 fade-in">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans font-bold text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-3"
                >
                  Nom Complet
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full bg-transparent border-b border-outline-variant text-on-surface font-sans py-3 px-0 focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-outline"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-sans font-bold text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-3"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full bg-transparent border-b border-outline-variant text-on-surface font-sans py-3 px-0 focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-outline"
                  placeholder="votre@email.fr"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-sans font-bold text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-3"
                >
                  Votre Projet
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="w-full bg-transparent border-b border-outline-variant text-on-surface font-sans py-3 px-0 focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-outline resize-none"
                  placeholder="Decrivez votre projet..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary text-surface font-sans font-bold text-sm uppercase tracking-[0.2em] py-4 hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {status === "loading" ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    <Send size={16} />
                    Envoyer la Demande
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle size={18} />
                  <p className="font-sans text-sm">
                    Message envoye avec succes. Nous vous recontacterons
                    rapidement.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-3 text-red-400">
                  <AlertCircle size={18} />
                  <p className="font-sans text-sm">
                    Une erreur est survenue. Veuillez reessayer.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
