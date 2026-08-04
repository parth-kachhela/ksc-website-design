import Image from "next/image";
import Link from "next/link";

import { callHref } from "@/lib/navigation";
import { OutlineButton, PrimaryButton } from "@/components/base/button";
import { Badge } from "@/components/ui/badge";
import { hero } from "@/app/_components/home.data";

export function HomeHero() {
  return (
    <section
      className="relative overflow-hidden bg-brand-pale"
      aria-labelledby="home-hero-title"
    >
      <div
        className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-brand-lime/10 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 size-96 rounded-full bg-secondary/10 blur-2xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase"
          >
            {hero.eyebrow}
          </Badge>
          <h1
            id="home-hero-title"
            className="max-w-xl text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            {hero.title}
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {hero.description}
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <PrimaryButton asChild size="lg" className="text-base">
              <Link href="/contact">{hero.primaryCta}</Link>
            </PrimaryButton>
            <OutlineButton asChild size="lg" className="text-base">
              <a href={callHref}>{hero.secondaryCta}</a>
            </OutlineButton>
          </div>
          <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <span className="flex text-secondary" aria-hidden="true">
              {"★".repeat(5)}
            </span>
            {hero.trustLine}
          </p>
        </div>

        <div className="relative">


          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white shadow-xl shadow-black/5">
            <Image
              src="/images/home/hero.avif"
              alt="Green coconut garden and fresh tender coconuts near Gadu, Chorvad, Junagadh, Gujarat"
              width={100}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-4/3 h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
