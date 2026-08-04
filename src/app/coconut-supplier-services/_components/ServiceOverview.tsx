import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { overviewCards } from "@/app/coconut-supplier-services/_components/services.data";

const cardAnchors: Record<string, string> = {
  "tender-coconut": "#tender-coconut",
  "size-graded-coconut": "#size-grades",
  "bulk-coconut-orders": "#bulk-order",
};

export function ServiceOverview() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="service-overview-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Supply Overview"
            title="Coconut Supply Services"
            description="Discuss coconut type, preferred size grade, quantity and supply frequency for a requirement that matches your business."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {overviewCards.map((card, index) => (
            <Reveal key={card.id} delay={index * 0.08}>
              <Link
                href={`/coconut-supplier-services${cardAnchors[card.id] ?? "#tender-coconut"}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-heading text-xl leading-7 font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="flex-1 text-sm leading-6 text-muted-foreground">
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
