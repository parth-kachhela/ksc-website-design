import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { overviewCards } from "@/app/coconut-supplier-services/_components/services.data";

export function SupplyServices() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="supply-services-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Supply Services"
            title="Main Coconut Supply Services"
            description="Select the service that matches your requirement and share your quantity and location directly."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {overviewCards.map((card, index) => (
            <Reveal key={card.id} delay={index * 0.08}>
              <Link
                href={`/coconut-supplier-services#${card.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="flex-1 text-base leading-7 text-muted-foreground">
                    {card.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary">
                    View details
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}