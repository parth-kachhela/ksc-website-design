import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { FeatureCard } from "@/components/base/card";
import { businessValues } from "@/app/about/_components/about.data";

export function BusinessValues() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="values-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Business Values"
            title="Values Behind Every Requirement"
            description="The supplier works with a simple, buyer-focused approach built around quality, communication and dependable coordination."
            align="left"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessValues.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06}>
              <FeatureCard
                icon={value.icon}
                title={value.title}
                description={value.description}
                cardVariant="pale"
                iconTone="white"
                iconSize="lg"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
