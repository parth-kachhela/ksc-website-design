import { StartupSection } from "@/components/global/StartupSection";
import { startupSection } from "@/app/coconut-supplier-services/_components/services.data";

export function StartupSupplySection() {
  return (
    <StartupSection
      variant="light"
      id="startup"
      eyebrow={startupSection.eyebrow}
      title={startupSection.title}
      paragraphs={startupSection.paragraphs}
      checklistTitle={startupSection.checklistTitle}
      points={startupSection.checklist}
      asideNote={startupSection.asideNote}
      ctaLabel={startupSection.ctaLabel}
      ctaHref="/contact?type=Coconut+Business+Startup"
    />
  );
}