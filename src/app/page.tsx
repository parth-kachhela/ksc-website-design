import type { Metadata } from "next";

import { buildSeoMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/global/JsonLd";
import {
  HomeHero,
  HomeTrustBar,
  HomeServiceOverview,
  HomeWhyChooseUs,
  HomeGardenStory,
  HomeSupplyProcess,
  HomeServiceAreas,
  HomeWhoWeSupply,
  HomeReviews,
  HomeFAQ,
  HomeFinalCTA,
} from "@/app/_components";
import { faqs } from "@/app/_components/home.data";

export const metadata: Metadata = buildSeoMetadata({
  title:
    "Kankeshwari Coconut Supplier | Wholesale Tender Coconut Supplier in Gadu, Junagadh, Gujarat",
  description:
    "Wholesale tender coconut supplier in Gadu, District Junagadh, Gujarat. Fresh coconuts sourced directly from farms in Gadu and coastal areas near Somnath for bulk buyers.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <HomeHero />
      <HomeTrustBar />
      <HomeServiceOverview />
      <HomeWhyChooseUs />
      <HomeGardenStory />
      <HomeSupplyProcess />
      <HomeServiceAreas />
      <HomeWhoWeSupply />
      <HomeReviews />
      <HomeFAQ />
      <HomeFinalCTA />
    </>
  );
}