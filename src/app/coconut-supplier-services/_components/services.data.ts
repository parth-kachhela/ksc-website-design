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

import type {
  BuyerType,
  CoconutSizeGrade,
  CoconutTypeOption,
  FaqItem,
  LocationCard,
  ProcessStep,
  SupplyService,
} from "@/types/service";

export const servicesHero = {
  eyebrow: "Tender, Green, Size-Graded and Bulk Coconut Supply",
  title:
    "Coconut Supply by Type, Size and Quantity in Gadu, Chorvad and Gujarat",
  description:
    "Kankeshwari Coconut Supplier accepts coconut inquiries based on coconut type, required size grade, quantity, supply frequency and delivery location. Buyers can discuss tender coconut, green coconut and bulk size-based requirements directly through WhatsApp or phone.",
  primaryCta: "Share Coconut Requirement",
  secondaryCta: "Call Supplier",
  trustLabels: [
    "Tender and Green Coconut",
    "Multiple Size Requirements",
    "Bulk Order Discussion",
    "Direct WhatsApp Support",
  ],
};

export const overviewCards = [
  {
    id: "tender-coconut",
    title: "Tender Coconut Supply",
    description:
      "Tender coconut inquiries based on required quantity, location and preferred size.",
    image: "/images/services/tender-coconut.svg",
    imageAlt:
      "Tender coconuts available for type and size-based bulk supply inquiries",
  },
  {
    id: "green-coconut",
    title: "Green Coconut Supply",
    description:
      "Green coconut requirements for retailers, distributors and other business buyers.",
    image: "/images/services/green-coconut.svg",
    imageAlt: "Green coconuts supplied to retail and wholesale business buyers",
  },
  {
    id: "size-graded-coconut",
    title: "Size-Graded Coconut Supply",
    description:
      "Discuss Big–Small, Small–Big, Medium Size and Small Size coconut requirements.",
    image: "/images/services/size-graded-coconut.svg",
    imageAlt: "Different coconut size grades prepared for buyer requirements",
  },
  {
    id: "bulk-coconut-orders",
    title: "Bulk and Recurring Orders",
    description:
      "One-time and recurring coconut supply inquiries based on quantity and destination.",
    image: "/images/services/bulk-coconut.svg",
    imageAlt:
      "Bulk coconut order prepared according to type size and quantity",
  },
];

export const coconutTypes: CoconutTypeOption[] = [
  {
    id: "tender-coconut",
    name: "Tender Coconut",
    shortDescription:
      "Tender coconut requirements for refreshing coconut water and business supply.",
    description:
      "Buyers can inquire for tender coconuts by sharing their expected quantity, preferred size requirement, delivery location and supply frequency. Final type and size availability must be confirmed directly with the supplier.",
    availableGrades: ["Big–Small", "Small–Big", "Medium Size", "Small Size"],
    buyerExamples: [
      "Retail coconut sellers",
      "Fruit shops",
      "Refreshment businesses",
      "Events and functions",
      "Recurring business buyers",
    ],
    image: "/images/services/tender-coconut.svg",
    imageAlt: "Tender coconuts arranged for size and quantity-based supply",
    whatsappValue: "Tender Coconut",
  },
  {
    id: "green-coconut",
    name: "Green Coconut",
    shortDescription:
      "Green coconut requirements for retailers, wholesalers and distributors.",
    description:
      "Green coconut inquiries can be discussed according to the buyer’s preferred grade, total quantity, destination and requirement frequency. Availability depends on current supply conditions.",
    availableGrades: ["Big–Small", "Small–Big", "Medium Size", "Small Size"],
    buyerExamples: [
      "Fruit retailers",
      "Wholesale buyers",
      "Coconut distributors",
      "Market sellers",
      "Businesses with recurring requirements",
    ],
    image: "/images/services/green-coconut.svg",
    imageAlt:
      "Green coconuts available in different commercial size requirements",
    whatsappValue: "Green Coconut",
  },
];

export const coconutSizeGrades: CoconutSizeGrade[] = [
  {
    id: "big-small",
    name: "Big–Small",
    shortDescription:
      "A size-based coconut requirement using the Big–Small commercial category.",
    description:
      "Buyers who require the Big–Small category can share their coconut type, quantity and delivery location. The supplier will confirm current grade availability before finalising the requirement.",
    suitableFor: [
      "Bulk coconut buyers",
      "Retail and distribution requirements",
      "Buyers requesting a specific commercial size mix",
    ],
    availabilityNote:
      "Exact availability depends on coconut type, quantity and current stock.",
    image: "/images/services/big-small-coconut.svg",
    imageAlt: "Big–Small coconut size requirement for bulk supply",
    whatsappValue: "Big–Small",
  },
  {
    id: "small-big",
    name: "Small–Big",
    shortDescription:
      "A size-based coconut requirement using the Small–Big commercial category.",
    description:
      "The Small–Big category can be discussed for buyers who require this particular size combination. Quantity, coconut type and destination should be shared during the inquiry.",
    suitableFor: [
      "Wholesale buyers",
      "Retail supply requirements",
      "Size-specific recurring orders",
    ],
    availabilityNote:
      "The supplier confirms the available size combination before order confirmation.",
    image: "/images/services/small-big-coconut.svg",
    imageAlt: "Small–Big coconut size category for wholesale buyers",
    whatsappValue: "Small–Big",
  },
  {
    id: "medium-size",
    name: "Medium Size",
    shortDescription:
      "Medium-size coconut inquiries for balanced and consistent business requirements.",
    description:
      "Buyers looking for medium-size coconuts can send their required coconut type, quantity, frequency and delivery location directly to the supplier.",
    suitableFor: [
      "Retail coconut sellers",
      "Food and refreshment businesses",
      "Recurring business supply",
    ],
    availabilityNote:
      "Medium-size availability must be confirmed for each requirement.",
    image: "/images/services/medium-coconut.svg",
    imageAlt: "Medium-size coconuts arranged for business supply",
    whatsappValue: "Medium Size",
  },
  {
    id: "small-size",
    name: "Small Size",
    shortDescription:
      "Small-size coconut requirements for buyers needing a compact grade.",
    description:
      "Small-size coconut supply can be discussed according to total quantity, coconut type, destination and expected supply schedule.",
    suitableFor: [
      "Bulk order requirements",
      "Retail and resale needs",
      "Buyers requesting a smaller commercial grade",
    ],
    availabilityNote:
      "Small-size availability depends on current stock and requirement quantity.",
    image: "/images/services/small-coconut.svg",
    imageAlt: "Small-size coconuts prepared for bulk business requirements",
    whatsappValue: "Small Size",
  },
];

export const sizeGradeDisclaimer =
  "Size names represent the commercial requirement categories used while discussing supply. Exact coconut appearance and availability can vary, so buyers should confirm the required grade before finalising an order.";

export const sizeGradeImageNote =
  "Images are representative. Actual coconut size, shape and appearance may vary according to type and availability.";

export const productImageNote =
  "Product images are representative. Actual coconut colour, size, shape and appearance may vary.";

export const supplyServices: SupplyService[] = [
  {
    id: "tender-coconut",
    eyebrow: "Tender Coconut",
    title: "Tender Coconut Supply",
    description:
      "Kankeshwari Coconut Supplier accepts fresh tender coconut inquiries from buyers looking for dependable bulk availability. Buyers can select their preferred size grade and discuss expected quantity directly with the supplier.",
    points: [
      "Tender coconut type selection",
      "Big–Small, Small–Big, Medium or Small size inquiry",
      "Required quantity confirmation",
      "Delivery location discussion",
      "One-time or recurring supply requirement",
    ],
    image: "/images/services/tender-coconut.svg",
    imageAlt: "Tender coconuts available for type and size-based bulk supply inquiries",
    ctaLabel: "Inquire for Tender Coconut",
    inquiryType: "Tender Coconut Supply",
  },
  {
    id: "green-coconut",
    eyebrow: "Green Coconut",
    title: "Green Coconut Supply",
    description:
      "Quality green coconut supply for retailers, distributors, fruit sellers and other business requirements. Buyers can share their preferred grade and quantity directly through WhatsApp for a clear discussion.",
    points: [
      "Green coconut requirement discussion",
      "Preferred size-grade selection",
      "Retail, wholesale or distribution quantity",
      "Direct WhatsApp communication",
      "Current availability confirmation",
    ],
    image: "/images/services/green-coconut.svg",
    imageAlt: "Green coconuts supplied to retail and wholesale business buyers",
    ctaLabel: "Inquire for Green Coconut",
    inquiryType: "Green Coconut Supply",
  },
  {
    id: "bulk-order",
    eyebrow: "Bulk Orders",
    title: "Bulk Coconut Orders",
    description:
      "For larger coconut orders, buyers can share the coconut type, preferred size grade, required quantity, delivery location and expected date. KCS helps discuss one-time and recurring requirements directly.",
    points: [
      "Select tender or green coconut",
      "Select the preferred size grade",
      "Share the required quantity",
      "Provide the delivery location",
      "Mention one-time or recurring frequency",
      "Confirm availability before finalisation",
    ],
    image: "/images/services/bulk-coconut.svg",
    imageAlt:
      "Bulk coconut order prepared according to type size and quantity",
    ctaLabel: "Request Bulk Supply",
    inquiryType: "Bulk Coconut Order",
  },
  {
    id: "size-based-supply",
    eyebrow: "Size-Based Supply",
    title: "Coconut Supply According to Size Requirement",
    description:
      "Buyers can discuss coconut supply according to their preferred commercial size category, including Big–Small, Small–Big, Medium Size and Small Size. The selected grade can be combined with tender or green coconut requirements.",
    points: [
      "Big–Small coconut requirement",
      "Small–Big coconut requirement",
      "Medium-size coconut requirement",
      "Small-size coconut requirement",
      "Type and size combination inquiry",
      "Availability confirmed directly",
    ],
    image: "/images/services/size-graded-coconut.svg",
    imageAlt: "Coconuts grouped according to different size requirements",
    ctaLabel: "Discuss Size-Based Supply",
    inquiryType: "Size-Graded Coconut Supply",
    supportedGrades: ["Big–Small", "Small–Big", "Medium Size", "Small Size"],
  },
];

export const supplyDisclaimer =
  "Coconut size, type and quantity availability may vary. Buyers should confirm their requirement directly with the supplier.";

export const buyerTypes: BuyerType[] = [
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
    "Starting a coconut selling business requires clarity about coconut type, preferred size category, expected quantity and target customers. Kankeshwari Coconut Supplier welcomes inquiries from new business owners who want to discuss tender coconut, green coconut and size-based sourcing requirements.",
    "Before contacting the supplier, new business owners should estimate their expected quantity and decide whether they need Big–Small, Small–Big, Medium Size, Small Size or a mixed requirement. Buyers who are unsure can explain their business model and request guidance based on current availability.",
    "Share your city, delivery location, preferred coconut type, required size grade and expected supply frequency. The supplier can then discuss available sourcing options without making an unverified stock or delivery commitment.",
  ],
  ctaLabel: "Discuss Coconut Sourcing for Your Startup",
  checklistTitle: "Key Details to Share",
  checklist: [
    "Tender or green coconut requirement",
    "Preferred size grade",
    "Expected order quantity",
    "City or delivery location",
    "One-time or recurring supply frequency",
    "Any mixed-size requirement",
  ],
  asideNote: "Availability is confirmed before any commitment is made.",
};

export const locations: LocationCard[] = [
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

export const orderProcess: ProcessStep[] = [
  {
    title: "Choose Coconut Type",
    description: "Select tender coconut, green coconut or ask for guidance.",
    icon: Store,
  },
  {
    title: "Select Size Requirement",
    description:
      "Choose Big–Small, Small–Big, Medium Size, Small Size or a mixed requirement.",
    icon: Package,
  },
  {
    title: "Share Quantity and Location",
    description:
      "Send the expected quantity, delivery location and supply frequency.",
    icon: ShoppingCart,
  },
  {
    title: "Confirm Availability",
    description:
      "The supplier checks the requested type, size and current availability.",
    icon: Users,
  },
  {
    title: "Finalise Supply Details",
    description:
      "Quantity, size, timing and location are finalised after mutual confirmation.",
    icon: Briefcase,
  },
];

export const servicesFaqs: FaqItem[] = [
  {
    question: "What coconut types can I inquire about?",
    answer:
      "Buyers can inquire about tender coconuts and green coconuts by sharing their quantity, preferred size grade and location directly with the supplier.",
  },
  {
    question: "What coconut sizes can I inquire about?",
    answer:
      "Buyers can discuss Big–Small, Small–Big, Medium Size and Small Size coconut requirements. Final size availability depends on coconut type, quantity and current stock.",
  },
  {
    question: "Can I select both coconut type and size?",
    answer:
      "Yes. Buyers can share whether they need tender or green coconut along with their preferred size grade.",
  },
  {
    question: "What do Big–Small and Small–Big mean?",
    answer:
      "These are commercial size requirement categories used while discussing coconut supply. Buyers should confirm the expected grade directly with the supplier because actual coconut appearance may vary.",
  },
  {
    question: "Can I request a mixed coconut size order?",
    answer:
      "Buyers can share a mixed-size requirement. The supplier will confirm whether the requested combination is available for the required quantity.",
  },
  {
    question: "Are all coconut sizes always available?",
    answer:
      "No fixed availability is guaranteed. Coconut type, size grade and quantity availability must be confirmed directly for every requirement.",
  },
  {
    question: "How should I send a size-based inquiry on WhatsApp?",
    answer:
      "Share your name, coconut type, preferred size grade, required quantity, requirement frequency and delivery location.",
  },
  {
    question: "Is pricing different for different coconut sizes?",
    answer:
      "Pricing may depend on coconut type, size requirement, quantity, current availability and delivery location. Final pricing is confirmed directly by the supplier.",
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
      "Pricing depends on coconut type, size requirement, quantity, current availability and delivery location. Buyers are advised to confirm pricing directly with the supplier.",
  },
  {
    question: "Can a new coconut seller contact KCS?",
    answer:
      "Yes. New coconut sellers and business owners can discuss their expected quantity, preferred size grade, location and sourcing requirement to understand available supply options.",
  },
  {
    question: "Can buyers outside Junagadh contact the supplier?",
    answer:
      "Yes. Buyers can contact the supplier with their quantity, size grade and destination to confirm available supply options for their location.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "Response time depends on availability. Calling may be suitable for urgent requirements.",
  },
];

export const servicesCta = {
  eyebrow: "Place an Inquiry",
  title: "Share Your Coconut Requirement Today",
  description:
    "Share your coconut type, preferred size grade, quantity and delivery location to discuss current availability with Kankeshwari Coconut Supplier.",
  whatsappLabel: "Send WhatsApp Inquiry",
  callLabel: "Call Kankeshwari Coconut Supplier",
};
