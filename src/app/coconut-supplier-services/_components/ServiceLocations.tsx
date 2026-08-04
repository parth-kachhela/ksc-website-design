import { MapPin } from "lucide-react";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { FeatureCard } from "@/components/base/card";
import { locations } from "@/app/coconut-supplier-services/_components/services.data";

export function ServiceLocations() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="service-locations-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Service Locations"
            title="Serving Buyers From Gadu, Chorvad, Junagadh and Gujarat"
            description="The supplier is based in Gadu, Junagadh, and accepts inquiries from buyers across the region and beyond."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((location, index) => (
            <Reveal key={location.name} delay={index * 0.06}>
              <FeatureCard
                icon={MapPin}
                title={location.name}
                description={location.description}
                cardVariant="pale"
                iconTone="white"
                descriptionSize="sm"
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-muted-foreground">
            Buyers outside the immediate area can contact the supplier with
            their quantity and destination to confirm available supply options.
            Delivery and supply availability depend on quantity, destination and
            current stock.
          </p>
        </Reveal>
      </div>
    </section>
  );
}