import { SectionHeading } from "@/components/global/SectionHeading";
import { Reveal } from "@/components/global/Reveal";
import { introduction } from "@/app/about/_components/about.data";

export function BusinessIntroduction() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="introduction-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Business Introduction"
            title={introduction.title}
          />
        </Reveal>
        <div className="mt-6 space-y-5">
          {introduction.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}