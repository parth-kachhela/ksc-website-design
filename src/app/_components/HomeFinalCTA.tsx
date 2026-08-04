import { CTASection } from "@/components/global/CTASection";
import { siteConfig } from "@/lib/site-config";
import { finalCta } from "@/app/_components/home.data";

export function HomeFinalCTA() {
  return (
    <CTASection
      title={finalCta.title}
      description={finalCta.description}
      footer={finalCta.location}
      whatsappLabel="Chat on WhatsApp"
      callLabel={`Call ${siteConfig.phoneDisplay}`}
    />
  );
}