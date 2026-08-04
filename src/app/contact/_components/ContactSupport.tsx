import { HelpCircle, Phone, MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { callHref } from "@/lib/navigation";
import { Reveal } from "@/components/global/Reveal";
import { FeatureCard } from "@/components/base/card";

export function ContactSupport() {
  return (
    <section className="bg-white pb-16 sm:pb-20" aria-labelledby="support-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <FeatureCard
              icon={HelpCircle}
              title="Not Sure What to Ask?"
              description="You can still send a general inquiry. Share your quantity or location and the supplier will guide you on available options."
              cardVariant="pale"
              iconTone="white"
              descriptionSize="sm"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <FeatureCard
              icon={MessageCircle}
              title="Prefer to Talk Directly?"
              description={`Call or WhatsApp ${siteConfig.phoneDisplay} for a direct discussion about coconut type, quantity and location.`}
              cardVariant="pale"
              iconTone="white"
              descriptionSize="sm"
            >
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary"
              >
                Open WhatsApp
              </a>
            </FeatureCard>
          </Reveal>
          <Reveal delay={0.12}>
            <FeatureCard
              icon={Phone}
              title="Urgent Requirement?"
              description="For urgent requirements, calling the supplier directly may be the quickest way to confirm availability."
              cardVariant="pale"
              iconTone="white"
              descriptionSize="sm"
            >
              <a
                href={callHref}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary"
              >
                Call {siteConfig.phoneDisplay}
              </a>
            </FeatureCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}