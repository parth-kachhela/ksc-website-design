import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { SupplySection } from "@/app/coconut-supplier-services/_components/SupplySection";
import {
  supplyServices,
  supplyDisclaimer,
} from "@/app/coconut-supplier-services/_components/services.data";

export function SupplyServices() {
  return (
    <section
      id="detailed-services"
      className="bg-white pb-4"
      aria-labelledby="supply-services-title"
    >
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Detailed Supply Services"
            title="Coconut Supply Services in Detail"
            description="Explore each supply option by coconut type, preferred size grade, quantity and one-time or recurring requirement."
            align="center"
          />
        </Reveal>
      </div>
      {supplyServices.map((service, index) => (
        <SupplySection
          key={service.id}
          {...service}
          reversed={index % 2 === 1}
        />
      ))}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Reveal>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            {supplyDisclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
