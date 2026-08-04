import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/global/Reveal";
import { Button } from "@/components/ui/button";

type StartupVariant = "dark" | "light";

interface StartupSectionProps {
  variant?: StartupVariant;
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  paragraphs?: string[];
  checklistTitle?: string;
  points: string[];
  asideNote?: string;
  ctaLabel: string;
  ctaHref: string;
}

export function StartupSection({
  variant = "dark",
  id,
  eyebrow,
  title,
  description,
  paragraphs,
  checklistTitle,
  points,
  asideNote,
  ctaLabel,
  ctaHref,
}: StartupSectionProps) {
  const isLight = variant === "light";
  const titleId = id ? `${id}-title` : undefined;

  const checklist = (
    <ul className={cn("flex flex-col", isLight ? "gap-3" : "gap-4")}>
      {points.map((point) => (
        <li
          key={point}
          className={cn(
            "flex items-start gap-3 rounded-2xl",
            isLight
              ? "text-base leading-6 text-foreground"
              : "border border-white/15 bg-white/5 p-4 text-base leading-6 text-white/90",
          )}
        >
          <CheckCircle2
            className={cn(
              "mt-0.5 size-5 shrink-0",
              isLight ? "text-secondary" : "text-[#91CE38]",
            )}
            aria-hidden="true"
          />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );

  if (isLight) {
    return (
      <section
        id={id}
        className="scroll-mt-20 bg-white py-16 sm:py-20"
        aria-labelledby={titleId}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-brand-pale">
            <div className="grid gap-10 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
              <Reveal>
                <div className="flex flex-col items-start gap-4">
                  <span className="text-sm font-semibold tracking-wide text-secondary uppercase">
                    {eyebrow}
                  </span>
                  <h2
                    id={titleId}
                    className="font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl"
                  >
                    {title}
                  </h2>
                </div>
                <div className="mt-5 space-y-4">
                  {paragraphs?.map((paragraph, index) => (
                    <p
                      key={index}
                      className="max-w-xl text-base leading-7 text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <Button asChild size="lg" className="mt-6">
                  <Link href={ctaHref}>
                    {ctaLabel}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </Reveal>

              <Reveal delay={0.1}>
                <aside className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-6">
                  {checklistTitle ? (
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {checklistTitle}
                    </h3>
                  ) : null}
                  {checklist}
                  {asideNote ? (
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {asideNote}
                    </p>
                  ) : null}
                </aside>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className="scroll-mt-20 bg-brand-deep py-16 text-white sm:py-20"
      aria-labelledby={titleId}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="flex flex-col gap-5">
              <span className="text-sm font-semibold tracking-wide text-[#91CE38] uppercase">
                {eyebrow}
              </span>
              <h2
                id={titleId}
                className="max-w-xl font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
              >
                {title}
              </h2>
              <p className="max-w-xl text-base leading-7 text-white/80">
                {description}
              </p>
              <Button
                asChild
                size="lg"
                className="w-fit bg-[#91CE38] text-[#173018] hover:bg-white"
              >
                <Link href={ctaHref}>
                  {ctaLabel}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>{checklist}</Reveal>
        </div>
      </div>
    </section>
  );
}
