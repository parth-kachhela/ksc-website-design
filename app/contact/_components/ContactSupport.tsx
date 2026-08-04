import { HelpCircle, Phone, MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { callHref } from "@/lib/navigation";
import { Reveal } from "@/components/global/Reveal";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ContactSupport() {
  return (
    <section className="bg-white pb-16 sm:pb-20" aria-labelledby="support-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <Card className="h-full rounded-2xl border-border bg-brand-pale">
              <CardHeader>
                <span className="flex size-11 items-center justify-center rounded-xl bg-white shadow-sm">
                  <HelpCircle className="size-5 text-secondary" aria-hidden="true" />
                </span>
                <CardTitle className="font-heading text-xl font-semibold text-foreground">
                  Not Sure What to Ask?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  You can still send a general inquiry. Share your quantity or
                  location and the supplier will guide you on available options.
                </p>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.06}>
            <Card className="h-full rounded-2xl border-border bg-brand-pale">
              <CardHeader>
                <span className="flex size-11 items-center justify-center rounded-xl bg-white shadow-sm">
                  <MessageCircle className="size-5 text-secondary" aria-hidden="true" />
                </span>
                <CardTitle className="font-heading text-xl font-semibold text-foreground">
                  Prefer to Talk Directly?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  Call or WhatsApp {siteConfig.phoneDisplay} for a direct
                  discussion about coconut type, quantity and location.
                </p>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary"
                >
                  Open WhatsApp
                </a>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.12}>
            <Card className="h-full rounded-2xl border-border bg-brand-pale">
              <CardHeader>
                <span className="flex size-11 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Phone className="size-5 text-secondary" aria-hidden="true" />
                </span>
                <CardTitle className="font-heading text-xl font-semibold text-foreground">
                  Urgent Requirement?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  For urgent requirements, calling the supplier directly may be
                  the quickest way to confirm availability.
                </p>
                <a
                  href={callHref}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary"
                >
                  Call {siteConfig.phoneDisplay}
                </a>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}