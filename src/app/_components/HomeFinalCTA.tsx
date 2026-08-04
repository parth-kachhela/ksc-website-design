import { CTASection } from "@/components/global/CTASection";
import { finalCta } from "@/app/_components/home.data";

export function HomeFinalCTA() {
  return (
    <CTASection
      title={finalCta.title}
      description={finalCta.description}
      footer={finalCta.location}
    />
  );
}