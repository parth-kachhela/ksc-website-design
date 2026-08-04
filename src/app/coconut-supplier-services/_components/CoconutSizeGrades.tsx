import Image from "next/image";
import { CheckCircle2, MessageSquare } from "lucide-react";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { WhatsAppButton } from "@/components/base/button";
import { Badge } from "@/components/ui/badge";
import { buildServiceWhatsAppUrl } from "@/lib/whatsapp";
import {
  coconutSizeGrades,
  sizeGradeDisclaimer,
  sizeGradeImageNote,
} from "@/app/coconut-supplier-services/_components/services.data";

export function CoconutSizeGrades() {
  return (
    <section
      id="size-grades"
      className="scroll-mt-20 bg-white py-16 sm:py-20"
      aria-labelledby="coconut-size-grades-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Coconut Size Options"
            title="Choose Coconut Supply According to Your Size Requirement"
            description="Different buyers may require different coconut sizes or size combinations. Kankeshwari Coconut Supplier accepts inquiries for Big–Small, Small–Big, Medium Size and Small Size coconut requirements, subject to current availability."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coconutSizeGrades.map((grade, index) => {
            const whatsappUrl = buildServiceWhatsAppUrl(
              "Size-Graded Coconut Supply",
              undefined,
              grade.name,
            );
            return (
              <Reveal key={grade.id} delay={index * 0.06}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-lg">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={grade.image ?? "/images/services/tender-coconut.svg"}
                      alt={grade.imageAlt ?? `${grade.name} coconut`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <Badge
                      variant="secondary"
                      className="w-fit rounded-full px-3 py-1 text-sm font-semibold uppercase"
                    >
                      {grade.name}
                    </Badge>
                    <p className="text-base leading-7 text-foreground">
                      {grade.shortDescription}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {grade.suitableFor.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm leading-6 text-muted-foreground"
                        >
                          <CheckCircle2
                            className="mt-0.5 size-4 shrink-0 text-secondary"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {grade.availabilityNote ? (
                      <p className="rounded-xl bg-brand-pale p-3 text-xs leading-5 text-muted-foreground">
                        {grade.availabilityNote}
                      </p>
                    ) : null}
                    <div className="mt-auto pt-1">
                      <WhatsAppButton
                        asChild
                        size="lg"
                        className="w-full"
                      >
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageSquare className="size-4" aria-hidden="true" />
                          Inquire for This Size
                        </a>
                      </WhatsAppButton>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8 space-y-3">
          <p className="mx-auto max-w-3xl text-center text-sm leading-6 text-muted-foreground">
            {sizeGradeDisclaimer}
          </p>
          <p className="mx-auto max-w-3xl text-center text-xs leading-5 text-muted-foreground">
            {sizeGradeImageNote}
          </p>
        </div>
      </div>
    </section>
  );
}
