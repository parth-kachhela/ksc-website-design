import { StartupSection } from "@/components/global/StartupSection";
import { whoWeSupply } from "@/app/_components/home.data";

export function HomeWhoWeSupply() {
  return (
    <StartupSection
      id="who-we-supply"
      eyebrow={whoWeSupply.eyebrow}
      title={whoWeSupply.title}
      description={whoWeSupply.description}
      points={whoWeSupply.points}
      ctaLabel={whoWeSupply.ctaLabel}
      ctaHref="/contact"
    />
  );
}
