import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/global/Reveal";
import { cn } from "@/lib/utils";

interface SupplySectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  ctaLabel: string;
  typeQuery: string;
  reversed?: boolean;
}

export function SupplySection({
  id,
  eyebrow,
  title,
  description,
  points,
  image,
  imageAlt,
  ctaLabel,
  typeQuery,
  reversed = false,
}: SupplySectionProps) {
  return (
    <section id={id} className="scroll-mt-20" aria-labelledby={`${id}-title`}>
      <div
        className={cn(
          "mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8",
          reversed ? "" : "",
        )}
      >
        <Reveal className={cn(reversed ? "lg:order-2" : "")}>
          <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-lg">
            <Image
              src={image}
              alt={imageAlt}
              width={1200}
              height={760}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[16/10] h-auto w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08} className={cn(reversed ? "lg:order-1" : "")}>
          <div className="flex flex-col items-start gap-5">
            <span className="text-sm font-semibold tracking-wide text-secondary uppercase">
              {eyebrow}
            </span>
            <h2
              id={`${id}-title`}
              className="font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {title}
            </h2>
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              {description}
            </p>
            <ul className="flex flex-col gap-2.5">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-base leading-6 text-foreground"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-secondary"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#1fb257]">
                <a
                  href={`${siteConfig.whatsappUrl}?text=${encodeURIComponent(
                    `Hello Kankeshwari Coconut Supplier, I would like to discuss a ${title.replace(/ Supply$/, "")} requirement.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  {ctaLabel}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={`/contact?type=${typeQuery}`}>
                  Use Inquiry Form
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}