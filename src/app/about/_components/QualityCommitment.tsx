import { ShieldCheck } from "lucide-react";
import Image from "next/image";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { qualityCommitment } from "@/app/about/_components/about.data";

export function QualityCommitment() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="quality-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="flex flex-col gap-5">
              <SectionHeading
                eyebrow="Quality"
                title={qualityCommitment.title}
              />
              {qualityCommitment.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-xl text-base leading-7 text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-lg">
              <Image
                src="/images/about/quality-commitment.png"
                alt="Fresh tender coconuts prepared for bulk supply"
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
