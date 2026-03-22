import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero-atelier.png"
        alt="Atelier Marchand - Ebenisterie"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/40 to-surface" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-primary text-sm tracking-[0.3em] uppercase opacity-80 mb-8">
          Uzes &middot; Depuis 1948
        </p>

        <h1 className="font-serif italic text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-on-surface max-w-4xl leading-tight">
          Le bois est un murmure{" "}
          <span className="text-primary">sculpte par le temps.</span>
        </h1>

        <div className="w-px h-24 bg-primary/40 mx-auto mt-12" />
      </div>
    </section>
  );
}
