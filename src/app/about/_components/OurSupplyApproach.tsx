import { ClipboardList, MessageSquare, MapPinCheck, PhoneCall } from "lucide-react";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { FeatureCard } from "@/components/base/card";
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
          {introduction.supplyApproach.map((point, index) => (
              <Reveal key={point} delay={index * 0.08}>
                <FeatureCard
                  icon={icons[index] ?? MessageSquare}
                  title={point}
                  titleSize="lg"
                />
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}