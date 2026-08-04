import {
  Store,
  ShoppingCart,
  UtensilsCrossed,
  PartyPopper,
  Briefcase,
  Users,
  Package,
  ShoppingBag,
} from "lucide-react";

import type { FaqItem } from "@/types/service";

export const servicesHero = {
  eyebrow: "Tender, Green and Bulk Coconut Supply",
  title: "Coconut Supplier Services in Gadu, Chorvad and Gujarat",
  description:
    "Contact Kankeshwari Coconut Supplier for tender coconut, green coconut and bulk coconut requirements. Share your quantity, location and expected supply schedule directly through WhatsApp or phone.",
};

export const overviewCards = [
  {
    id: "tender-coconut",
    title: "Tender Coconut Supply",
    description:
      "Fresh tender coconut inquiries for business buyers and resellers.",
    image: "/images/services/tender-coconut.svg",
    imageAlt: "Fresh tender coconuts supplied for bulk buyers near Gadu Chorvad",
  },
  {
    id: "green-coconut",
    title: "Green Coconut Supply",
    description:
      "Green coconut requirements for retail and business supply inquiries.",
    image: "/images/services/green-coconut.svg",
    imageAlt: "Green coconuts sourced for retail and wholesale buyers",
  },
  {
    id: "bulk-order",
    title: "Bulk Coconut Orders",
    description:
      "Direct inquiry support for larger and recurring coconut orders.",
    image: "/images/services/bulk-coconut.svg",
    imageAlt: "Bulk coconut orders prepared for wholesale buyers",
  },
];

export const supplyServices = [
  {
    id: "tender-coconut",
    eyebrow: "Tender Coconut",
    title: "Tender Coconut Supply",
    description:
      "Kankeshwari Coconut Supplier accepts fresh tender coconut inquiries from buyers looking for dependable bulk availability. Buyers can discuss their expected quantity and confirm availability directly with the supplier.",
    points: [
      "Fresh tender coconut inquiries",
      "Bulk requirement discussion",
      "Quantity confirmation",
      "Location and availability check",
      "Suitable for business buyers and resellers",
    ],
    image: "/images/services/tender-coconut.svg",
    imageAlt: "Fresh tender coconuts supplied for bulk buyers near Gadu Chorvad",
    ctaLabel: "Inquire for Tender Coconut",
    typeQuery: "Tender+Coconut+Supply",
  },
  {
    id: "green-coconut",
    eyebrow: "Green Coconut",
    title: "Green Coconut Supply",
    description:
      "Quality green coconut supply for retailers, distributors, fruit sellers and other business requirements. Buyers can share their requirement directly through WhatsApp for a clear discussion.",
    points: [
      "Green coconut requirements",
      "Retail and business supply inquiries",
      "Bulk quantity discussions",
      "Direct WhatsApp communication",
    ],
    image: "/images/services/green-coconut.svg",
    imageAlt: "Green coconuts sourced for retail and wholesale buyers",
    ctaLabel: "Discuss Green Coconut Supply",
    typeQuery: "Green+Coconut+Supply",
  },
  {
    id: "bulk-order",
    eyebrow: "Bulk Orders",
    title: "Bulk Coconut Orders",
    description:
      "For larger coconut orders, buyers can share the required quantity, coconut type, delivery location and expected date. KCS helps discuss one-time and recurring requirements directly.",
    points: [
      "Share the required quantity",
      "Mention the coconut type",
      "Provide the delivery location",
      "Share the expected date",
      "Recurring or one-time requirement",
    ],
    image: "/images/services/bulk-coconut.svg",
    imageAlt: "Bulk coconut orders prepared for wholesale buyers",
    ctaLabel: "Request Bulk Supply",
    typeQuery: "Bulk+Coconut+Order",
  },
];

export const supplyDisclaimer =
  "MOQ and pricing are confirmed directly based on current availability and requirement details.";

export const buyerTypes = [
  {
    title: "Retail Coconut Sellers",
    description:
      "Sellers who stock and resell coconuts to local customers.",
    icon: Store,
  },
  {
    title: "Fruit Retailers",
    description:
      "Fruit shops and vendors looking for green coconut supply.",
    icon: ShoppingCart,
  },
  {
    title: "Coconut Distributors",
    description:
      "Distributors managing supply for multiple retail points.",
    icon: Package,
  },
  {
    title: "Wholesale Buyers",
    description:
      "Buyers placing larger and recurring coconut orders.",
    icon: ShoppingBag,
  },
  {
    title: "Hotels, Cafés and Food Businesses",
    description:
      "Food businesses requiring coconuts for daily requirements.",
    icon: UtensilsCrossed,
  },
  {
    title: "Event and Refreshment Requirements",
    description:
      "Event organisers needing coconuts for functions and gatherings.",
    icon: PartyPopper,
  },
  {
    title: "New Coconut Business Owners",
    description:
      "New business owners planning coconut sourcing and distribution.",
    icon: Briefcase,
  },
  {
    title: "Businesses With Recurring Requirements",
    description:
      "Businesses that need a dependable recurring coconut supply.",
    icon: Users,
  },
];

export const startupSection = {
  eyebrow: "Coconut Business Startup",
  title: "Coconut Supply Support for New Business Requirements",
  paragraphs: [
    "Starting a coconut selling business begins with understanding your expected quantity and choosing between tender or green coconut. Kankeshwari Coconut Supplier welcomes inquiries from new business owners who want to discuss coconut sourcing for their startup.",
    "Share your city or delivery location, your expected quantity and how often you may need supply. This helps the supplier confirm current availability and discuss options that fit the scale of your new business before you make any commitment.",
    "A new coconut seller can contact KCS by WhatsApp or phone to discuss recurring supply expectations. The goal is a clear conversation about sourcing, availability and the practical details of getting your coconut business started.",
  ],
  ctaLabel: "Discuss Coconut Sourcing for Your Startup",
  checklistTitle: "Key Details to Share",
  checklist: [
    "Expected quantity for your startup",
    "Tender or green coconut preference",
    "City or delivery location",
    "Recurring supply expectations",
    "Any current availability questions",
  ],
  asideNote: "Availability is confirmed before any commitment is made.",
};

export const locations = [
  {
    name: "Gadu",
    description:
      "KCS is based in Gadu, near the Gadu\u2013Chorvad Highway in Junagadh district.",
  },
  {
    name: "Chorvad",
    description:
      "Located close to Chorvad, the supplier can discuss requirements for buyers in the area.",
  },
  {
    name: "Junagadh",
    description:
      "Buyers across Junagadh can contact the supplier with their quantity and location.",
  },
  {
    name: "Other Gujarat Locations",
    description:
      "Buyers outside the immediate area can contact the supplier with their quantity and destination to confirm available supply options.",
  },
];

export const orderProcess = [
  {
    title: "Select Requirement Type",
    description: "Choose tender coconut, green coconut or a bulk coconut order.",
  },
  {
    title: "Share Quantity and Location",
    description:
      "Send your expected quantity, coconut type and delivery location.",
  },
  {
    title: "Discuss Availability",
    description:
      "The supplier reviews current availability and responds clearly.",
  },
  {
    title: "Confirm Final Details",
    description:
      "Finalise quantity, timing and location details after mutual confirmation.",
  },
];

export const servicesFaqs: FaqItem[] = [
  {
    question: "What coconut types can I inquire about?",
    answer:
      "Buyers can inquire about tender coconuts, green coconuts and bulk coconut requirements by sharing their quantity and location directly with the supplier.",
  },
  {
    question: "Can I place a recurring coconut supply inquiry?",
    answer:
      "Yes. Buyers with daily, weekly or monthly requirements can share their expected frequency and quantity to discuss recurring supply options.",
  },
  {
    question: "Is there a fixed minimum order quantity?",
    answer:
      "There is no published minimum order quantity. MOQ and pricing are confirmed directly based on current availability and requirement details.",
  },
  {
    question: "How is coconut pricing decided?",
    answer:
      "Pricing depends on coconut type, quantity, current availability and delivery location. Buyers are advised to confirm pricing directly with the supplier.",
  },
  {
    question: "Can a new coconut seller contact KCS?",
    answer:
      "Yes. New coconut sellers and business owners can discuss their expected quantity, location and sourcing requirement to understand available supply options.",
  },
  {
    question: "Can buyers outside Junagadh contact the supplier?",
    answer:
      "Yes. Buyers can contact the supplier with their quantity and destination to confirm available supply options for their location.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "Response time depends on availability. Calling may be suitable for urgent requirements.",
  },
  {
    question: "What details should I send on WhatsApp?",
    answer:
      "Share your name, coconut type, required quantity, requirement frequency and delivery city or location to help the supplier respond accurately.",
  },
];

export const servicesCta = {
  eyebrow: "Place an Inquiry",
  title: "Share Your Coconut Requirement Today",
  description:
    "Share your coconut type, quantity and delivery location to discuss current availability with Kankeshwari Coconut Supplier.",
  whatsappLabel: "Send WhatsApp Inquiry",
  callLabel: "Call Kankeshwari Coconut Supplier",
};
