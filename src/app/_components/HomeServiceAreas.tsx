import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Reveal } from "@/components/global/Reveal";
import { LinkButton, OutlineButton, PrimaryButton } from "@/components/base/button";
import { siteConfig } from "@/lib/site-config";
import {
  serviceAreaTitle,
  serviceAreaParagraphs,
} from "@/app/_components/home.data";

export function HomeServiceAreas() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="service-areas-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <Reveal>
              <h2
                id="service-areas-title"
                className="font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                {serviceAreaTitle}
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5">
              {serviceAreaParagraphs.map((paragraph, index) => (
                <Reveal key={index} delay={index * 0.05}>
                  <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton asChild size="lg">
                  <Link href="/coconut-supplier-services">
                    Explore our supplier services
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </PrimaryButton>
                <OutlineButton asChild size="lg">
                  <Link href="/contact">
                    Send a bulk inquiry
                  </Link>
                </OutlineButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <aside className="rounded-2xl border border-border bg-brand-pale p-6">
              <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-secondary uppercase">
                <MapPin className="size-4" aria-hidden="true" />
                Our Location
              </div>
              <p className="mt-3 font-heading text-xl font-semibold text-foreground">
                {siteConfig.name}
              </p>
              <p className="mt-2 text-base leading-7 text-muted-foreground">
                {siteConfig.addressFull}
              </p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Wholesale buyers can contact the supplier directly to confirm
                quantity, coconut size and delivery location.
              </p>
              <LinkButton asChild className="px-0 text-secondary">
                <Link href="https://maps.app.goo.gl/1Cyg2YJoCXqCZ46g6">
                  Get directions on Google Maps
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </LinkButton>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
