import { MessageSquare, PhoneCall } from "lucide-react";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { OutlineButton, WhatsAppButton } from "@/components/base/button";
import { siteConfig } from "@/lib/site-config";
import { callHref } from "@/lib/navigation";
import { processSteps } from "@/app/_components/home.data";

export function HomeSupplyProcess() {
  return (
    <section className="bg-brand-pale py-16 sm:py-20" aria-labelledby="supply-process-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Simple Process"
            title="From Farm to Wholesale Market"
            description="We believe in keeping the process simple. Share your wholesale requirement directly — the inquiry is handled over a call or WhatsApp."
            align="center"
          />
        </Reveal>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <li className="relative flex h-full flex-col gap-3 rounded-2xl border border-border bg-white p-6">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-base font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-muted-foreground">
              No online checkout. Discuss your requirement directly with the
              supplier.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton asChild size="lg">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="size-4" aria-hidden="true" />
                  Start a Bulk Inquiry
                </a>
              </WhatsAppButton>
              <OutlineButton asChild size="lg">
                <a href={callHref}>
                  <PhoneCall className="size-4" aria-hidden="true" />
                  Talk with Us
                </a>
              </OutlineButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
