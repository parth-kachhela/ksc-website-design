import type { Metadata } from "next";

import { buildSeoMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/global/JsonLd";
import {
  ServicesHero,
  ServiceOverview,
  CoconutSizeGrades,
  SupplyServices,
  BuyerTypes,
  StartupSupplySection,
  OrderProcess,
  ServicesFAQ,
  ServicesCTA,
} from "@/app/coconut-supplier-services/_components";
import { servicesFaqs } from "@/app/coconut-supplier-services/_components/services.data";

export const metadata: Metadata = buildSeoMetadata({
  title:
    "Wholesale Tender Coconut Supply by Type & Size | Gadu, Junagadh, Gujarat",
  description:
    "Discuss fresh, farm-direct tender coconut supply in Big, Big-small, Medium Size and Small Size grades with Kankeshwari Coconut Supplier, Gadu, Gujarat.",
  path: "/coconut-supplier-services",
  keywords: [
    "wholesale tender coconut supplier",
    "farm-direct coconut supply",
    "size-graded coconut supplier",
    "tender coconut by size requirement",
    "bulk coconut supply by size",
    "medium-size coconut supplier",
    "small-size coconut supply",
    "Big coconut requirement",
    "Big-small coconut requirement",
    "mixed-size coconut order",
    "coconut supplier in Gadu",
    "coconut supplier near Somnath",
    "bulk coconut supplier in Gujarat",
  ],
  ogTitle:
    "Farm-Direct Tender Coconut Supply | Kankeshwari Coconut Supplier",
  ogDescription:
    "Send your preferred size grade, bulk quantity and delivery location directly through WhatsApp.",
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
      <OrderProcess />
      <ServicesFAQ />
      <ServicesCTA />
    </>
  );
}
