import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/global/Reveal";
import { Button, PrimaryButton } from "@/components/base/button";

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
    <ul
      className={cn(
        "flex w-full flex-col",
        isLight ? "gap-3" : "gap-3 sm:gap-4",
      )}
    >
      {points.map((point) => (
        <li
          key={point}
          className={cn(
            "flex min-w-0 items-start gap-3 rounded-xl sm:rounded-2xl",
            isLight
              ? "text-sm leading-6 text-foreground sm:text-base"
              : "border border-white/15 bg-white/5 p-3 text-sm leading-6 text-white/90 sm:p-4 sm:text-base",
          )}
        >
          <CheckCircle2
            className={cn(
              "mt-0.5 size-5 shrink-0",
              isLight ? "text-secondary" : "text-[#91CE38]",
            )}
            aria-hidden="true"
          />

          <span className="min-w-0 break-words">{point}</span>
        </li>
      ))}
    </ul>
  );

  if (isLight) {
    return (
      <section
        id={id}
        className="scroll-mt-20 bg-white py-12 sm:py-16 lg:py-20"
        aria-labelledby={titleId}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border bg-brand-pale sm:rounded-[2rem]">
            <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:p-12">
              <Reveal>
                <div className="flex min-w-0 flex-col items-start">
                  <span className="text-xs font-semibold tracking-wide text-secondary uppercase sm:text-sm">
                    {eyebrow}
                  </span>

                  <h2
                    id={titleId}
                    className="mt-3 max-w-2xl font-heading text-2xl leading-tight font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl"
                  >
                    {title}
                  </h2>

                  {paragraphs?.length ? (
                    <div className="mt-5 space-y-4">
                      {paragraphs.map((paragraph, index) => (
                        <p
                          key={`${paragraph}-${index}`}
                          className="max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : description ? (
                    <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {description}
                    </p>
                  ) : null}

                  <PrimaryButton
                    asChild
                    size="lg"
                    className="mt-6 w-full justify-center sm:w-auto"
                  >
                    <Link href={ctaHref}>
                      <span>{ctaLabel}</span>
                      <ArrowRight
                        className="size-4 shrink-0"
                        aria-hidden="true"
                      />
                    </Link>
                  </PrimaryButton>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <aside className="flex min-w-0 flex-col gap-4 rounded-xl border border-border bg-white p-5 sm:rounded-2xl sm:p-6">
                  {checklistTitle ? (
                    <h3 className="font-heading text-lg font-semibold text-foreground sm:text-xl">
                      {checklistTitle}
                    </h3>
                  ) : null}

                  {checklist}

                  {asideNote ? (
                    <p className="mt-1 text-sm leading-6 text-muted-foreground sm:mt-2">
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
      className="scroll-mt-20 bg-brand-deep py-12 text-white sm:py-16 lg:py-20"
      aria-labelledby={titleId}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <Reveal>
            <div className="flex min-w-0 flex-col items-start">
              <span className="text-xs font-semibold tracking-wide text-[#91CE38] uppercase sm:text-sm">
                {eyebrow}
              </span>

              <h2
                id={titleId}
                className="mt-3 max-w-xl font-heading text-2xl leading-tight font-semibold tracking-tight sm:text-3xl lg:text-4xl"
              >
                {title}
              </h2>

              {description ? (
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/80 sm:mt-5 sm:text-base sm:leading-7">
                  {description}
                </p>
              ) : null}

              <Button
                asChild
                size="lg"
                className="mt-6 w-full justify-center bg-[#91CE38] text-[#173018] hover:bg-white sm:w-auto"
              >
                <Link href={ctaHref}>
                  <span>{ctaLabel}</span>
                  <ArrowRight
                    className="size-4 shrink-0"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="min-w-0">{checklist}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
