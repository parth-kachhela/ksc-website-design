import { ArrowUpRight, Phone, Mail, MapPin, MessageSquare } from "lucide-react";

import { Reveal } from "@/components/global/Reveal";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contactCards } from "@/app/contact/_components/contact.data";

const cardIcons: Record<string, typeof Phone> = {
  Phone,
  Email: Mail,
  Address: MapPin,
  WhatsApp: MessageSquare,
};

export function ContactInformation() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="contact-info-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap">
          {contactCards.map((card, index) => {
            const Icon = cardIcons[card.label] ?? Phone;
            return (
              <Reveal key={card.label} delay={index * 0.06} className="sm:flex-1 sm:basis-64">
                <Card className="flex h-full flex-col rounded-2xl border-border bg-brand-pale">
                  <CardHeader>
                    <span className="flex size-11 items-center justify-center rounded-xl bg-white shadow-sm">
                      <Icon className="size-5 text-secondary" aria-hidden="true" />
                    </span>
                    <CardTitle className="font-heading text-lg font-semibold text-foreground">
                      {card.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm leading-6 font-medium break-words text-foreground">
                      {card.value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {card.hint}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        card.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary transition-colors hover:text-primary"
                    >
                      {card.action}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </CardFooter>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
