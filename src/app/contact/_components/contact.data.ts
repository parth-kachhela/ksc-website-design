import type { InquiryType, RequirementFrequency } from "@/types/contact";

export const contactHero = {
  eyebrow: "Bulk Coconut Inquiry",
  title: "Contact Kankeshwari Coconut Supplier",
  description:
    "Share your coconut type, required quantity and delivery location. Your inquiry will be prepared as a WhatsApp message so you only need to review it and press Send.",
};

export const inquiryTypes: InquiryType[] = [
  "Tender Coconut Supply",
  "Green Coconut Supply",
  "Bulk Coconut Order",
  "Recurring Business Supply",
  "Coconut Business Startup",
  "General Inquiry",
];

export const requirementFrequencies: RequirementFrequency[] = [
  "One-Time Requirement",
  "Daily Requirement",
  "Weekly Requirement",
  "Monthly Requirement",
  "Not Sure Yet",
];

export const contactCards = [
  {
    label: "Phone",
    value: "+91 63522 95050",
    href: "tel:+916352295050",
    action: "Call Now",
    hint: "Available for direct inquiries",
  },
  {
    label: "Email",
    value: "kcsgadu@gmail.com",
    href: "mailto:kcsgadu@gmail.com",
    action: "Send Email",
    hint: "For written inquiries",
  },
  {
    label: "Address",
    value: "Gadu, Junagadh, Gujarat - 362255",
    href: "https://www.google.com/maps?q=Kankeshwari%20Coconut%20Supplier%20Gadu%20Chorvad%20Highway%20Junagadh%20Gujarat%20362255&output=embed",
    action: "Get Directions",
    hint: "Detailed address below",
  },
  {
    label: "WhatsApp",
    value: "+91 63522 95050",
    href: "https://wa.me/916352295050",
    action: "Open WhatsApp",
    hint: "Quickest way to share your requirement",
  },
];

export const detailedAddress = [
  "At Gadu - Chorvad Highway",
  "Opposite Vishanvel Road, Patiya",
  "Gadu, Junagadh",
  "Gujarat - 362255",
];

export const mapEmbedUrl =
  "https://www.google.com/maps?q=Kankeshwari%20Coconut%20Supplier%20Gadu%20Chorvad%20Highway%20Junagadh%20Gujarat%20362255&output=embed";

export const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Kankeshwari+Coconut+Supplier+Gadu+Chorvad+Highway+Junagadh+Gujarat+362255";

export const contactCta = {
  eyebrow: "Get in Touch",
  title: "Ready to Discuss Your Coconut Requirement?",
  description:
    "Share your coconut type, quantity and delivery location. The supplier will respond with available supply details.",
  footer: "+91 63522 95050 · Gadu, Junagadh, Gujarat - 362255",
};
