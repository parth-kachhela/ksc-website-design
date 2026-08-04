import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { Button } from "@/components/ui/button";
import { orderProcess } from "@/app/coconut-supplier-services/_components/services.data";

export function OrderProcess() {
  return (
    <section className="bg-brand-pale py-16 sm:py-20" aria-labelledby="order-process-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Order Process"
            title="How a Coconut Supply Inquiry Works"
            description="Follow these steps to share your coconut type, size requirement and quantity with the supplier."
            align="center"
          />
        </Reveal>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {orderProcess.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <li className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-white p-6">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-base font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">
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
          <div className="mt-10 flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#1fb257]"
            >
              <Link href="/contact">
                <MessageCircle className="size-4" aria-hidden="true" />
                Start on the WhatsApp Inquiry Form
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}