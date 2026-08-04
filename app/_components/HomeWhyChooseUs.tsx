import { Leaf, MessagesSquare, Clock, MapPin, Package } from "lucide-react";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { benefits } from "@/app/_components/home.data";

const icons = [Leaf, MessagesSquare, Clock, MapPin, Package];

export function HomeWhyChooseUs() {
  return (
    <section className="bg-brand-pale py-16 sm:py-20" aria-labelledby="why-choose-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why KCS"
            title="Why Buyers Choose Kankeshwari Coconut Supplier"
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = icons[index] ?? Leaf;
            return (
              <Reveal key={benefit.title} delay={index * 0.06}>
                <Card className="h-full rounded-2xl border-border bg-white transition-shadow duration-300 hover:shadow-lg">
                  <CardHeader>
                    <span className="flex size-12 items-center justify-center rounded-xl bg-brand-leaf">
                      <Icon className="size-6 text-primary" aria-hidden="true" />
                    </span>
                    <CardTitle className="font-heading text-xl font-semibold text-foreground">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base leading-7 text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
          <Reveal delay={0.3}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-secondary/30 bg-brand-leaf p-6">
              <p className="text-sm leading-6 text-foreground">
                Supply availability depends on quantity, location and current
                stock. Contact the supplier for confirmation.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}