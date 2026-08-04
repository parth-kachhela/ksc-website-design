import type { Metadata } from "next";

import { buildSeoMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/global/JsonLd";
import {
  ServicesHero,
  ServiceOverview,
  CoconutTypeOptions,
  CoconutSizeGrades,
  SupplyServices,
  BuyerTypes,
  StartupSupplySection,
  ServiceLocations,
  OrderProcess,
  ServicesFAQ,
  ServicesCTA,
} from "@/app/coconut-supplier-services/_components";
import { servicesFaqs } from "@/app/coconut-supplier-services/_components/services.data";

export const metadata: Metadata = buildSeoMetadata({
  title: "Coconut Supply by Type & Size in Gadu, Chorvad, Gujarat and All Over India",
  description:
    "Discuss tender, Big, Big-small, Medium Size and Small Size coconut supply requirements with Kankeshwari Coconut Supplier.",
  path: "/coconut-supplier-services",
  keywords: [
    "coconut supply by size",
    "size-graded coconut supplier",
    "tender coconut by size requirement",
    "bulk coconut supply by size",
    "medium-size coconut supplier",
    "small-size coconut supply",
    "Big coconut requirement",
    "Big-small coconut requirement",
    "mixed-size coconut order",
    "coconut supplier in Gadu",
    "coconut supplier near Chorvad",
    "bulk coconut supplier in Gujarat",
    "coconut supplier all over India",
  ],
  ogTitle: "Type and Size-Based Coconut Supply | Kankeshwari Coconut Supplier",
  ogDescription:
    "Send your coconut type, preferred size grade, quantity and delivery location directly through WhatsApp.",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            {
              name: "Coconut Supplier Services",
              path: "/coconut-supplier-services",
            },
          ]),
          faqSchema(servicesFaqs),
        ]}
      />
      <ServicesHero />
      <ServiceOverview />
      <CoconutSizeGrades />
      <SupplyServices />
      <BuyerTypes />
      <StartupSupplySection />
      <ServiceLocations />
      <OrderProcess />
      <ServicesFAQ />
      <ServicesCTA />
    </>
  );
}
