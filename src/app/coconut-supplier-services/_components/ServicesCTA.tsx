import { CTASection } from "@/components/global/CTASection";
import { servicesCta } from "@/app/coconut-supplier-services/_components/services.data";

export function ServicesCTA() {
  return (
    <CTASection
      eyebrow={servicesCta.eyebrow}
      title={servicesCta.title}
      description={servicesCta.description}

    />
  );
}
