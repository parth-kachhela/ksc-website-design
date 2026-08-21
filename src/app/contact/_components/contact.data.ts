import type {
  CoconutSizeGrade,
  CoconutType,
  InquiryType,
  RequirementFrequency,
} from "@/types/contact";

export const contactHero = {
  eyebrow: "Wholesale Inquiry",
  title: "Contact Kankeshwari Coconut Supplier",
  description:
    "Looking for a reliable wholesale tender coconut supplier? Share your preferred size grade, required bulk quantity and delivery location. Your inquiry will be prepared as a WhatsApp message so you only need to review it and press Send.",
};

export const inquiryTypes: InquiryType[] = [
  "Tender Coconut Supply",
  "Bulk Coconut Order",
  "Size-Graded Coconut Supply",
  "Recurring Wholesale Supply",
  "Wholesale Business Inquiry",
  "General Inquiry",
];

export const coconutTypesOptions: CoconutType[] = [
  "Tender Coconut",
  "Not Sure / Need Guidance",
];

export const coconutSizeGradeOptions: CoconutSizeGrade[] = [
  "Big–Small",
  "Small–Big",
  "Medium Size",
  "Small Size",
  "Mixed Size Requirement",
  "Not Sure / Need Guidance",
];

export const requirementFrequencies: RequirementFrequency[] = [
  "One-Time Requirement",
  "Daily Requirement",
  "Weekly Requirement",
  "Monthly Requirement",
  "Recurring Requirement",
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
  title: "Ready to Discuss Your Bulk Requirement?",
  description:
    "Contact Kankeshwari Coconut Supplier for bulk requirements and wholesale enquiries. Share your preferred size, quantity and delivery location.",
  footer: "+91 63522 95050 · Gadu, Junagadh, Gujarat - 362255",
};
