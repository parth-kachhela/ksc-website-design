import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessValues.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06}>
              <Card className="h-full rounded-2xl border-border bg-brand-pale">
                <CardHeader>
                  <span className="flex size-12 items-center justify-center rounded-xl bg-white shadow-sm">
                    <value.icon className="size-6 text-secondary" aria-hidden="true" />
                  </span>
                  <CardTitle className="font-heading text-xl font-semibold text-foreground">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base leading-7 text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}