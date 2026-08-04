import Image from "next/image";

import { Reveal } from "@/components/global/Reveal";
import { contactHero } from "@/app/contact/_components/contact.data";

export function ContactHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="contact-hero-title"
    >
      {/* Background Image */}
      <Image
        src="/images/about/about-garden.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark + Light Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-primary/5"
        aria-hidden="true"
      />

      {/* Decorative Blur */}
      <div
        className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-lime/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-105 max-w-4xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div>
            <h1 className="text-2xl font-semibold uppercase tracking-[0.25em] text-primary">
              Contact Us
            </h1>

            <h1
              id="contact-hero-title"
              className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {contactHero.title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {contactHero.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
