import { MapPin, Navigation } from "lucide-react";

import { Reveal } from "@/components/global/Reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { mapEmbedUrl, directionsUrl } from "@/app/contact/_components/contact.data";

export function LocationMap() {
  return (
    <section className="bg-brand-pale py-16 sm:py-20" aria-labelledby="location-map-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-secondary uppercase">
              <MapPin className="size-4" aria-hidden="true" />
              Our Location
            </span>
            <h2
              id="location-map-title"
              className="font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Find Us Near the Gadu–Chorvad Highway
            </h2>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              {siteConfig.addressFull}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-border bg-white shadow-lg">
            <iframe
              src={mapEmbedUrl}
              title="Map showing Kankeshwari Coconut Supplier, Gadu, Chorvad Highway, Junagadh, Gujarat"
              width="100%"
              height="440"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block w-full border-0"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              The address on the map is based on the registered business
              location in Gadu, Junagadh, Gujarat.
            </p>
            <Button asChild size="lg" variant="outline">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="size-4" aria-hidden="true" />
                Get Directions
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}