import Image from "next/image";
import { CheckCircle2, MessageCircle } from "lucide-react";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { buildServiceWhatsAppUrl } from "@/lib/whatsapp";
import { coconutTypes } from "@/app/coconut-supplier-services/_components/services.data";

const inquiryTypeByType: Record<string, string> = {
  tender: "Tender Coconut Supply",
  green: "Green Coconut Supply",
};

export function CoconutTypeOptions() {
  return (
    <section className="bg-brand-pale py-16 sm:py-20" aria-labelledby="coconut-types-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Coconut Types"
            title="Select Your Coconut Type"
            description="Choose between tender and green coconut, then share your preferred size grade and quantity directly with the supplier."
            align="center"
          />
        </Reveal>
        <div className="mt-12 flex flex-col gap-8">
          {coconutTypes.map((type, index) => {
            const inquiryType =
              inquiryTypeByType[type.id] ?? `${type.name} Supply`;
            const whatsappUrl = buildServiceWhatsAppUrl(inquiryType, type.name);
            return (
              <Reveal key={type.id} delay={index * 0.08}>
                <article
                  className={cn(
                    "overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm",
                  )}
                >
                  <div
                    className={cn(
                      "grid lg:grid-cols-2",
                    )}
                  >
                    <div className={cn("relative min-h-64", index % 2 === 1 && "lg:order-2")}>
                      <Image
                        src={type.image}
                        alt={type.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className={cn("flex flex-col gap-5 p-7 sm:p-9", index % 2 === 1 && "lg:order-1")}>
                      <div>
                        <h3 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                          {type.name}
                        </h3>
                        <p className="mt-2 text-base leading-7 text-foreground">
                          {type.shortDescription}
                        </p>
                      </div>
                      <p className="text-base leading-7 text-muted-foreground">
                        {type.description}
                      </p>
                      <div>
                        <p className="text-sm font-semibold text-secondary uppercase">
                          Available Size Grades
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {type.availableGrades.map((grade) => (
                            <li key={grade}>
                              <Badge
                                variant="secondary"
                                className="rounded-full px-3 py-1 text-xs font-medium"
                              >
                                {grade}
                              </Badge>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-secondary uppercase">
                          Suitable Buyers
                        </p>
                        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                          {type.buyerExamples.map((buyer) => (
                            <li
                              key={buyer}
                              className="flex items-start gap-2 text-sm leading-6 text-foreground"
                            >
                              <CheckCircle2
                                className="mt-0.5 size-4 shrink-0 text-secondary"
                                aria-hidden="true"
                              />
                              {buyer}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button
                        asChild
                        size="lg"
                        className="w-fit bg-[#25D366] text-white hover:bg-[#1fb257]"
                      >
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="size-4" aria-hidden="true" />
                          Inquire for {type.name}
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}