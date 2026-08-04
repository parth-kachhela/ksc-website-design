import { StartupSection } from "@/components/global/StartupSection";
import { startupSection } from "@/app/_components/home.data";

export function HomeStartupCTA() {
  return (
    <StartupSection
      id="startup"
      eyebrow={startupSection.eyebrow}
      title={startupSection.title}
      description={startupSection.description}
      points={startupSection.points}
      ctaLabel={startupSection.ctaLabel}
      ctaHref="/contact"
    />
  );
}