import Image from "next/image";
import { Reveal } from "@/components/global/Reveal";
import { aboutHero } from "@/app/about/_components/about.data";

export function AboutHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="about-hero-title"
    >
      {/* Background Image */}
      <Image
        src="/images/about/about-garden.svg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Dark + Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80" />
      <div className="absolute inset-0 bg-primary/5" />

      {/* Decorative Blur */}
      <div
        className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-lime/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-105 max-w-4xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div>
            <div className="mb-4">
              <h1 className="text-2xl font-semibold uppercase tracking-[0.25em] text-primary">
                About Us
              </h1>
            </div>
            <h1
              id="about-hero-title"
              className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {aboutHero.title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {aboutHero.intro}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
