import { CTASection } from "@/components/global/CTASection";
import { contactCta } from "@/app/contact/_components/contact.data";

export function ContactCTA() {
  return (
    <CTASection
      eyebrow={contactCta.eyebrow}
      title={contactCta.title}
      description={contactCta.description}
      footer={contactCta.footer}
    />
  );
}