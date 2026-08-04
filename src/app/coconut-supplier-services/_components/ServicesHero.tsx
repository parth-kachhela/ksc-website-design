import Link from "next/link";
import { CheckCircle2, PhoneCall } from "lucide-react";

import { callHref } from "@/lib/navigation";
import { OutlineButton, WhatsAppButton } from "@/components/base/button";
import { Badge } from "@/components/ui/badge";
import { servicesHero } from "@/app/coconut-supplier-services/_components/services.data";

export function ServicesHero() {
  return (
    <section
          className="relative overflow-hidden bg-brand-pale bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/services/coconut-services-hero-background.svg')",
          }}
          aria-labelledby="services-hero-title"
        >
          <div className="absolute inset-0 bg-brand-pale/20" aria-hidden="true" />

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:py-24">
        <h1
          id="services-hero-title"
          className="max-w-3xl font-heading text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          {servicesHero.title}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {servicesHero.description}
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-2.5">
          {servicesHero.trustLabels.map((label) => (
            <li
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-foreground"
            >
              <CheckCircle2 className="size-4 text-secondary" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton
            asChild
            size="lg"
          >
            <Link href="/contact">{servicesHero.primaryCta}</Link>
          </WhatsAppButton>
          <OutlineButton asChild size="lg">
            <a href={callHref}>
              <PhoneCall className="size-4 text-secondary" aria-hidden="true" />
              {servicesHero.secondaryCta}
            </a>
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
