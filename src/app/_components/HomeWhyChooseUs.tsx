import { Leaf, MessagesSquare, Clock, MapPin, Package } from "lucide-react";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { FeatureCard } from "@/components/base/card";
import { benefits } from "@/app/_components/home.data";

const icons = [Leaf, MessagesSquare, Clock, MapPin, Package];

export function HomeWhyChooseUs() {
  return (
    <section className="bg-brand-pale py-16 sm:py-20" aria-labelledby="why-choose-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why KCS"
            title="Why Choose Us?"
            description="We work with local farmers and wholesale buyers to create a simple and dependable supply chain — from the farm directly to the wholesale market."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.06}>
              <FeatureCard
                icon={icons[index] ?? Leaf}
                title={benefit.title}
                description={benefit.description}
                iconTone="leaf"
                iconSize="lg"
                titleSize="xl"
                hover
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
