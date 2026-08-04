import { Badge } from "@/components/ui/badge";
import { contactHero } from "@/app/contact/_components/contact.data";

export function ContactHero() {
  return (
    <section className="bg-brand-pale" aria-labelledby="contact-hero-title">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:py-20">
        <Badge
          variant="secondary"
          className="rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase"
        >
          {contactHero.eyebrow}
        </Badge>
        <h1
          id="contact-hero-title"
          className="font-heading text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl"
        >
          {contactHero.title}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {contactHero.description}
        </p>
      </div>
    </section>
  );
}