import type { Metadata } from "next";

import { buildSeoMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/global/JsonLd";
import { PageBreadcrumb } from "@/components/global/PageBreadcrumb";
import {
  ServicesHero,
  SupplyServices,
  TenderCoconutSupply,
  GreenCoconutSupply,
  BulkOrderSection,
  BuyerTypes,
  StartupSupplySection,
  ServiceLocations,
  OrderProcess,
  ServicesFAQ,
  ServicesCTA,
} from "@/app/coconut-supplier-services/_components";
import { servicesFaqs } from "@/app/coconut-supplier-services/_components/services.data";

export const metadata: Metadata = buildSeoMetadata({
  title: "Bulk Coconut Supplier Services in Gadu, Chorvad & Gujarat",
  description:
    "Discuss tender coconut, green coconut and bulk coconut supply requirements with Kankeshwari Coconut Supplier in Gadu, Junagadh.",
  path: "/coconut-supplier-services",
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
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <PageBreadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Coconut Supplier Services" },
          ]}
        />
      </div>
      <ServicesHero />
      <SupplyServices />
      <TenderCoconutSupply />
      <GreenCoconutSupply />
      <BulkOrderSection />
      <BuyerTypes />
      <StartupSupplySection />
      <ServiceLocations />
      <OrderProcess />
      <ServicesFAQ />
      <ServicesCTA />
    </>
  );
}