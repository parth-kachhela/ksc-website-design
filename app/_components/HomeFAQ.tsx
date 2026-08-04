import Link from "next/link";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/app/_components/home.data";

export function HomeFAQ() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Common questions from buyers looking for coconut supply in Gadu, Chorvad, Junagadh and Gujarat."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="multiple" className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="rounded-xl border border-border bg-white px-1 data-[state=open]:bg-brand-pale/40"
              >
                <AccordionTrigger className="px-4 py-4 text-left text-base font-semibold text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-base leading-7 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/contact">
                Contact Kankeshwari Coconut Supplier
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}