import type { Metadata } from "next";

import { buildSeoMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/global/JsonLd";
import {
  AboutHero,
  BusinessIntroduction,
  OurSupplyApproach,
  QualityCommitment,
  GardenAndSourcing,
  BusinessValues,
  AboutCTA,
} from "@/app/about/_components";

export const metadata: Metadata = buildSeoMetadata({
  title:
    "About Kankeshwari Coconut Supplier | Wholesale Tender Coconut Supplier in Gadu, Gujarat",
  description:
    "Learn about Kankeshwari Coconut Supplier, a wholesale-only tender coconut supplier based in Gadu, District Junagadh, Gujarat, sourcing fresh coconuts directly from farms near Somnath.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <AboutHero />
      <BusinessIntroduction />
      <OurSupplyApproach />
      <QualityCommitment />
      <GardenAndSourcing />
      <BusinessValues />
      <AboutCTA />
    </>
  );
}