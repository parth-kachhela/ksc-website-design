import { useId } from "react";

import { Reveal } from "@/components/global/Reveal";
import { GlobalCTA } from "@/components/global/GlobalCTA";
import { cn } from "@/lib/utils";

type CTASectionBg = "dark" | "deep";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  footer?: string;
  bg?: CTASectionBg;
  className?: string;
}

const BGS: Record<CTASectionBg, string> = {
  dark: "bg-[#102C16]",
  deep: "bg-brand-deep",
};

export function CTASection({
  eyebrow,
  title,
  description,
  bg = "dark",
  className,
}: CTASectionProps) {
  const titleId = useId();

  return (
    <section
      className={cn("py-16 text-white sm:py-20", BGS[bg], className)}
      aria-labelledby={titleId}
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        {eyebrow ? (
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#91CE38] uppercase">
              <span className="h-px w-8 bg-[#91CE38]/70" aria-hidden="true" />
              {eyebrow}
            </span>
          </Reveal>
        ) : null}
        <Reveal>
          <h2
            id={titleId}
            className="font-heading text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-xl text-base leading-7 text-white/80">
            {description}
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <GlobalCTA align="center" />
        </Reveal>
      </div>
    </section>
  );
}
