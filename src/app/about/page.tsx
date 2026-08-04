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
  title: "About Kankeshwari Coconut Supplier | Trusted Supplier in Gujarat & All Over India",
  description:
    "Learn about Kankeshwari Coconut Supplier, a quality-focused coconut supplier based in Gadu near Chorvad, Junagadh, Gujarat supplying tender coconuts across India.",
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