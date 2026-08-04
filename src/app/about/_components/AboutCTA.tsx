import { CTASection } from "@/components/global/CTASection";
import { aboutCta } from "@/app/about/_components/about.data";

export function AboutCTA() {
  return (
    <CTASection
      bg="deep"
      eyebrow={aboutCta.eyebrow}
      title={aboutCta.title}
      description={aboutCta.description}
      footer={aboutCta.footer}
      whatsappLabel="WhatsApp Inquiry"
      callLabel="Call Supplier"
    />
  );
}