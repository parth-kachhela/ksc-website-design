import { ClipboardList, MessageSquare, MapPinCheck, PhoneCall } from "lucide-react";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { introduction } from "@/app/about/_components/about.data";

const icons = [ClipboardList, MessageSquare, MapPinCheck, PhoneCall];

export function OurSupplyApproach() {
  return (
    <section className="bg-brand-pale py-16 sm:py-20" aria-labelledby="supply-approach-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="Our Supply Approach"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {introduction.supplyApproach.map((point, index) => {
            const Icon = icons[index] ?? MessageSquare;
            return (
              <Reveal key={point} delay={index * 0.08}>
                <Card className="h-full rounded-2xl border-border bg-white">
                  <CardContent className="flex flex-col gap-3 p-6">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-brand-leaf">
                      <Icon className="size-5 text-primary" aria-hidden="true" />
                    </span>
                    <p className="font-heading text-lg font-semibold leading-6 text-foreground">
                      {point}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}