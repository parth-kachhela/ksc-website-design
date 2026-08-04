import Image from "next/image";
import { MessageCircle, PhoneCall } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { callHref } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { aboutHero } from "@/app/about/_components/about.data";

export function AboutHero() {
  return (
    <section className="overflow-hidden bg-brand-pale" aria-labelledby="about-hero-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase"
          >
            {aboutHero.eyebrow}
          </Badge>
          <BrandLogo width={200} height={142} imgClassName="max-h-16 w-auto" />
          <h1
            id="about-hero-title"
            className="max-w-xl font-heading text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            {aboutHero.title}
          </h1>
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {aboutHero.intro}
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] text-white hover:bg-[#1fb257]"
            >
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp Inquiry
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={callHref}>
                <PhoneCall className="size-4" aria-hidden="true" />
                Call {siteConfig.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -top-8 -right-8 size-40 rounded-[2.5rem] bg-brand-lime/30"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white shadow-xl shadow-black/5">
            <Image
              src="/images/about/about-garden.svg"
              alt="Green coconut garden connected with Kankeshwari Coconut Supplier near Gadu Junagadh Gujarat"
              width={1200}
              height={640}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[16/10] h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}