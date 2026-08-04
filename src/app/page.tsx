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
  HomeStartupCTA,
  HomeReviews,
  HomeFAQ,
  HomeFinalCTA,
} from "@/app/_components";
import { faqs } from "@/app/_components/home.data";

export const metadata: Metadata = buildSeoMetadata({
  title: "Kankeshwari Coconut Supplier | Coconut Supplier in Gadu, Chorvad, Gujarat & All Over India",
  description:
    "Contact Kankeshwari Coconut Supplier for tender and bulk coconut supply in Gadu, Chorvad, Junagadh, Gujarat and all over India.",
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
      <HomeStartupCTA />
      <HomeReviews />
      <HomeFAQ />
      <HomeFinalCTA />
    </>
  );
}