import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { FeatureCard } from "@/components/base/card";
import { buyerTypes } from "@/app/coconut-supplier-services/_components/services.data";

export function BuyerTypes() {
  return (
    <section
      id="buyers"
      className="scroll-mt-20 bg-brand-pale py-16 sm:py-20"
      aria-labelledby="buyers-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Who We Can Speak With"
            title="Buyers We Can Speak With"
            description="KCS welcomes inquiries from a range of buyers. Share your requirement and the supplier will confirm what is currently available."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {buyerTypes.map((buyer, index) => (
            <Reveal key={buyer.title} delay={index * 0.05}>
              <FeatureCard
                icon={buyer.icon}
                title={buyer.title}
                description={buyer.description}
                titleSize="lg"
                descriptionSize="sm"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}