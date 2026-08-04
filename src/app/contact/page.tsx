import type { Metadata } from "next";

import { buildSeoMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/global/JsonLd";
import {
  ContactHero,
  ContactInformation,
  WhatsAppInquiryForm,
  LocationMap,
  ContactCTA,
} from "@/app/contact/_components";

export const metadata: Metadata = buildSeoMetadata({
  title: "Contact Kankeshwari Coconut Supplier | Bulk Coconut Inquiry",
  description:
    "Call or WhatsApp Kankeshwari Coconut Supplier for bulk tender and green coconut requirements in Gadu, Chorvad, Junagadh and Gujarat.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />
      <ContactHero />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:gap-10 lg:px-8">
        <WhatsAppInquiryForm />
        <div className="flex flex-col gap-10">
          <ContactInformation />
        </div>
      </div>
      <LocationMap />

      <ContactCTA />
    </>
  );
}
