import Image from "next/image";

import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { gardenSourcing } from "@/app/about/_components/about.data";

export function GardenAndSourcing() {
  return (
    <section className="bg-brand-pale py-16 sm:py-20" aria-labelledby="garden-sourcing-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Garden & Sourcing"
            title={gardenSourcing.title}
          />
        </Reveal>
        <div className="mt-6 space-y-5">
          {gardenSourcing.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {gardenSourcing.images.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.08}>
              <figure className="overflow-hidden rounded-2xl border border-border bg-white">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={700}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[12/7] h-auto w-full object-cover"
                />
                {image.caption ? (
                  <figcaption className="border-t border-border bg-white px-4 py-3 text-sm font-medium text-muted-foreground">
                    {image.caption}
                  </figcaption>
                ) : null}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}