import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LinkButton } from "@/components/base/button";
import { buildContactQuery } from "@/lib/whatsapp";
import {
  supplyCards,
  supplyNote,
} from "@/app/_components/home.data";

const cardLinks = [
  { href: buildContactQuery({ inquiryType: "Tender Coconut Supply" }), label: "Inquire for Tender Coconut" },
  { href: buildContactQuery({ inquiryType: "Size-Graded Coconut Supply" }), label: "Discuss Size-Based Supply" },
  { href: buildContactQuery({ inquiryType: "Bulk Coconut Order" }), label: "Request Bulk Supply" },
];

export function HomeServiceOverview() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="supply-overview-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Products"
            title="Fresh Tender Coconuts for Wholesale Supply"
            description="We supply fresh tender coconuts in bulk quantities, sourced directly from farms in Gadu and the surrounding coastal areas near Somnath, Gujarat."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {supplyCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <Card className="flex justify-between  h-full rounded-2xl border-border transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl font-semibold text-foreground">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <LinkButton asChild className="px-0 text-secondary">
                    <Link href={cardLinks[index].href}>
                      {cardLinks[index].label}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </LinkButton>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-6 text-muted-foreground">
          {supplyNote}
        </p>
      </div>
    </section>
  );
}
