import type { Metadata } from "next";

import { buildSeoMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/global/JsonLd";
import { PageBreadcrumb } from "@/components/global/PageBreadcrumb";
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
  title: "About Kankeshwari Coconut Supplier | Trusted Supplier in Gujarat",
  description:
    "Learn about Kankeshwari Coconut Supplier, a quality-focused coconut supplier based in Gadu near Chorvad, Junagadh, Gujarat.",
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
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <PageBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />
      </div>
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