import {
  Store,
  ShoppingCart,
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
  eyebrow: "Wholesale Tender Coconut Supply from Gadu, Gujarat",
  title: "Fresh Tender Coconuts. Direct from the Farms.",
  description:
    "Kankeshwari Coconut Supplier supplies fresh tender coconuts sourced directly from farms in Gadu and the surrounding coastal areas near Somnath. Share your required quantity, preferred size, delivery destination and supply frequency directly through WhatsApp or phone.",
  primaryCta: "Share Coconut Requirement",
  secondaryCta: "Call Supplier",
  trustLabels: [
    "Farm-Direct Sourcing",
    "Multiple Size Categories",
    "Bulk Availability",
    "Wholesale Only",
  ],
};

export const overviewCards = [
  {
    id: "tender-coconut",
    title: "Tender Coconut Supply",
    description:
      "Fresh tender coconuts supplied in bulk quantities based on your required quantity, preferred size and business requirement.",
    image: "/images/services/tender-coconut.avif",
    imageAlt:
      "Fresh tender coconuts prepared for wholesale supply from farms near Somnath, Gujarat",
  },
  {
    id: "size-graded-coconut",
    title: "Size-Graded Coconut Supply",
    description:
      "Discuss Big, Big-small, Medium Size and Small Size coconut requirements according to your market and customer preference.",
    image: "/images/services/size-graded-coconut.avif",
    imageAlt:
      "Different tender coconut size grades prepared for wholesale buyers",
  },
  {
    id: "bulk-coconut-orders",
    title: "Bulk and Recurring Orders",
    description:
      "One-time, scheduled and recurring tender coconut supply supported by consistent farm-direct sourcing.",
    image: "/images/services/bulk-coconut.avif",
    imageAlt:
      "Bulk tender coconut order prepared for wholesale transportation",
  },
];

export const coconutTypes: CoconutTypeOption[] = [
  {
    id: "tender-coconut",
    name: "Tender Coconut",
    shortDescription:
      "Fresh tender coconuts for wholesalers, traders, distributors and other bulk buyers.",
    description:
      "Buyers can inquire about tender coconut supply by sharing their required quantity, preferred size category, delivery destination and expected supply frequency. Current availability, dispatch planning and transportation details are confirmed directly before the order is finalised.",
    availableGrades: ["Big", "Big-small", "Medium Size", "Small Size"],
    buyerExamples: [
      "Wholesalers",
      "Traders",
      "Distributors",
      "Fruit markets",
      "Large-volume buyers",
      "Businesses requiring regular bulk supply",
    ],
    image: "/images/services/tender-coconut.svg",
    imageAlt:
      "Tender coconuts arranged for size-based and quantity-based wholesale supply",
    whatsappValue: "Tender Coconut",
  },
];

export const coconutSizeGrades: CoconutSizeGrade[] = [
  {
    id: "big-small",
    name: "Big Size",
    shortDescription:
      "Large tender coconuts for bulk buyers looking for a prominent commercial size category.",
    description:
      "Buyers requiring Big Size tender coconuts can share their quantity, delivery destination and expected supply schedule. Current size availability is confirmed before finalising the order.",
    suitableFor: [
      "Bulk coconut buyers",
      "Wholesale and distribution requirements",
      "Fruit markets requesting larger tender coconuts",
      "Buyers with size-specific requirements",
    ],
    availabilityNote:
      "Exact availability depends on required quantity, destination, current stock and season.",
    image: "/images/services/big.avif",
    imageAlt: "Big Size tender coconuts prepared for bulk supply",
    whatsappValue: "Big",
  },
  {
    id: "big-small-mix",
    name: "Big-small",
    shortDescription:
      "A practical commercial size category suitable for different wholesale requirements.",
    description:
      "The Big-small category can be discussed by buyers looking for a balanced tender coconut size. Share the required quantity, delivery destination and supply frequency for availability confirmation.",
    suitableFor: [
      "Wholesale coconut buyers",
      "Trading and distribution requirements",
      "Fruit markets and resellers",
      "Recurring size-specific orders",
    ],
    availabilityNote:
      "The available size combination is confirmed directly before order finalisation.",
    image: "/images/services/big-small.avif",
    imageAlt:
      "Big-small tender coconut size category for wholesale buyers",
    whatsappValue: "Big-small",
  },
  {
    id: "medium-size",
    name: "Medium Size",
    shortDescription:
      "Medium-size tender coconuts for balanced and consistent commercial requirements.",
    description:
      "Buyers looking for Medium Size tender coconuts can share their required quantity, delivery destination, expected date and supply frequency directly with the supplier.",
    suitableFor: [
      "Wholesalers and traders",
      "Distributors supplying local markets",
      "Fruit markets with steady demand",
      "Recurring bulk supply",
    ],
    availabilityNote:
      "Medium Size availability is confirmed separately for every requirement.",
    image: "/images/services/medium.avif",
    imageAlt:
      "Medium Size tender coconuts arranged for wholesale supply",
    whatsappValue: "Medium Size",
  },
  {
    id: "small-size",
    name: "Small Size",
    shortDescription:
      "Compact tender coconut size requirements for resale and bulk commercial use.",
    description:
      "Small Size tender coconut supply can be discussed according to total quantity, delivery destination, expected date and one-time or recurring supply requirement.",
    suitableFor: [
      "Bulk order requirements",
      "Trading and resale businesses",
      "Fruit markets with compact-size demand",
      "Buyers requesting a compact commercial grade",
    ],
    availabilityNote:
      "Small Size availability depends on current stock, season and required quantity.",
    image: "/images/services/small.avif",
    imageAlt:
      "Small Size tender coconuts prepared for wholesale supply",
    whatsappValue: "Small Size",
  },
];

export const sizeGradeDisclaimer =
  "Size names represent commercial categories used while discussing tender coconut supply. Actual coconut size, shape, weight and appearance may vary naturally. Buyers should confirm their expected size category before finalising an order.";

export const sizeGradeImageNote =
  "Images are representative. Actual tender coconut size, colour, shape and appearance may vary according to season and availability.";

export const productImageNote =
  "Product images are representative. Tender coconuts are natural products, so their colour, size, shape and outer appearance may vary.";

export const supplyServices: SupplyService[] = [
  {
    id: "tender-coconut",
    eyebrow: "Tender Coconut",
    title: "Farm-Direct Tender Coconut Supply",
    description:
      "Kankeshwari Coconut Supplier provides fresh tender coconuts sourced directly from farms in Gadu and the surrounding coastal areas near Somnath. Wholesale buyers can select their preferred size category and discuss bulk supply requirements directly.",
    points: [
      "Fresh, farm-sourced tender coconuts",
      "Big, Big-small, Medium or Small size inquiry",
      "Required quantity confirmation",
      "Delivery city and state discussion",
      "Expected dispatch or supply date",
      "One-time, scheduled or recurring supply",
    ],
    image: "/images/services/tender-coconut.avif",
    imageAlt:
      "Tender coconuts supplied from farms in Gadu to wholesale buyers",
    ctaLabel: "Inquire for Tender Coconut",
    inquiryType: "Tender Coconut Supply",
  },
  {
    id: "bulk-order",
    eyebrow: "Bulk Orders",
    title: "Bulk Tender Coconut Orders",
    description:
      "For larger requirements, buyers can share their preferred tender coconut size, required quantity, delivery destination and expected date. Kankeshwari Coconut Supplier supports one-time, scheduled and recurring bulk supply inquiries.",
    points: [
      "Choose the preferred tender coconut size",
      "Share the required quantity",
      "Provide the delivery city and state",
      "Mention the expected supply date",
      "Specify one-time or recurring frequency",
      "Confirm availability and transportation details",
    ],
    image: "/images/services/bulk.avif",
    imageAlt:
      "Bulk tender coconut order prepared for wholesale supply",
    ctaLabel: "Request Bulk Supply",
    inquiryType: "Bulk Tender Coconut Order",
  },
];

export const supplyDisclaimer =
  "Tender coconut size and quantity availability may vary according to current stock, season and buyer requirements. Dispatch and delivery options depend on quantity, destination and transportation availability.";

export const buyerTypes: BuyerType[] = [
  {
    title: "Wholesalers",
    description:
      "Wholesale buyers looking for fresh, quality tender coconuts in bulk quantities.",
    icon: ShoppingBag,
  },
  {
    title: "Traders",
    description:
      "Coconut traders requiring dependable farm-direct sourcing for their trading requirements.",
    icon: Store,
  },
  {
    title: "Distributors",
    description:
      "Distributors managing tender coconut supply for multiple markets and business customers.",
    icon: Package,
  },
  {
    title: "Fruit Markets",
    description:
      "Fruit markets requiring regular tender coconut supply according to their sales volume.",
    icon: ShoppingCart,
  },
  {
    title: "Large-Volume Buyers",
    description:
      "Businesses placing larger, scheduled or recurring tender coconut orders.",
    icon: Users,
  },
  {
    title: "Businesses With Regular Bulk Requirements",
    description:
      "Businesses looking for dependable weekly, scheduled or recurring wholesale supply.",
    icon: Briefcase,
  },
];

export const startupSection = {
  eyebrow: "Start Buying in Bulk",
  title: "Planning to Buy Tender Coconuts in Bulk?",
  paragraphs: [
    "A reliable sourcing connection is important for any business buying tender coconuts in bulk. Kankeshwari Coconut Supplier welcomes inquiries from wholesalers, traders, distributors and businesses looking for a trusted farm-direct supplier in Gadu, Gujarat.",

    "Before contacting the supplier, estimate your expected quantity, preferred tender coconut size and supply frequency. Available categories may include Big, Big-small, Medium Size and Small Size tender coconuts. Buyers who are uncertain about the correct category can explain their market and business model during the inquiry.",

    "Share your city, state, delivery destination, preferred size, expected quantity and required supply schedule. Current availability, transportation options and other order details can then be discussed clearly before any commitment is made.",
  ],
  ctaLabel: "Discuss Your Bulk Requirement",
  checklistTitle: "Key Details to Share",
  checklist: [
    "Preferred tender coconut size",
    "Expected order quantity",
    "Delivery city and state",
    "Expected supply date",
    "One-time or recurring frequency",
    "Any mixed-size requirement",
  ],
  asideNote:
    "Availability, pricing and transportation details are confirmed before the order is finalised.",
};

export const locations: LocationCard[] = [
  {
    name: "Gadu",
    description:
      "Kankeshwari Coconut Supplier is based in Gadu, District Junagadh, Gujarat, sourcing fresh tender coconuts directly from local farms.",
  },
  {
    name: "Somnath Coastal Belt",
    description:
      "Our sourcing extends across the surrounding coastal areas near Somnath, working with local farmers and nearby growing areas.",
  },
  {
    name: "Junagadh District and Gujarat",
    description:
      "Wholesalers, traders, distributors and fruit markets across Junagadh district and Gujarat can discuss their tender coconut requirements directly.",
  },
  {
    name: "Beyond Gujarat",
    description:
      "Bulk supply inquiries from other regions can be discussed subject to quantity, availability and transportation planning.",
  },
];

export const orderProcess: ProcessStep[] = [
  {
    title: "Choose Tender Coconut Size",
    description:
      "Select Big, Big-small, Medium Size, Small Size or share a mixed-size requirement.",
    icon: Store,
  },
  {
    title: "Share Required Quantity",
    description:
      "Mention the total bulk quantity required for your wholesale requirement.",
    icon: Package,
  },
  {
    title: "Provide Delivery Destination",
    description:
      "Share the delivery city, state, expected date and one-time or recurring supply frequency.",
    icon: ShoppingCart,
  },
  {
    title: "Confirm Current Availability",
    description:
      "The supplier checks the requested size, quantity, current stock and possible supply schedule.",
    icon: Users,
  },
  {
    title: "Finalise Supply Details",
    description:
      "Pricing, quantity, size, dispatch planning and transportation details are finalised after mutual confirmation.",
    icon: Briefcase,
  },
];

export const servicesFaqs: FaqItem[] = [
  {
    question: "What type of coconut does Kankeshwari Coconut Supplier supply?",
    answer:
      "Kankeshwari Coconut Supplier supplies fresh tender coconuts in bulk quantities, sourced directly from farms in Gadu and the surrounding coastal areas near Somnath.",
  },
  {
    question: "What tender coconut sizes can I inquire about?",
    answer:
      "Buyers can discuss Big, Big-small, Medium Size and Small Size tender coconut requirements. Final availability depends on required quantity, current stock and season.",
  },
  {
    question: "Can I select a specific tender coconut size?",
    answer:
      "Yes. You can share your preferred size category along with the required quantity, delivery destination and expected supply date.",
  },
  {
    question: "What do Big and Big-small mean?",
    answer:
      "Big and Big-small are commercial size categories used while discussing tender coconut supply. Because coconuts are natural products, exact size, shape and appearance may vary.",
  },
  {
    question: "Can I request a mixed-size coconut order?",
    answer:
      "Yes. Buyers can share a mixed-size requirement. The supplier will confirm whether the requested size combination is available in the required quantity.",
  },
  {
    question: "Are all tender coconut sizes always available?",
    answer:
      "No fixed size availability is guaranteed. Size and quantity availability can change according to current stock, season and existing supply requirements.",
  },
  {
    question: "How should I send a tender coconut inquiry on WhatsApp?",
    answer:
      "Share your name, business name, preferred tender coconut size, required quantity, delivery city, state, expected date and whether the requirement is one-time or recurring.",
  },
  {
    question: "Does pricing change according to coconut size?",
    answer:
      "Pricing may depend on tender coconut size, required quantity, current availability, season, destination and transportation requirements. Final pricing is confirmed directly.",
  },
  {
    question: "Can I place a recurring tender coconut order?",
    answer:
      "Yes. Buyers with regular weekly, scheduled or recurring requirements can share their estimated quantity and preferred supply frequency.",
  },
  {
    question: "Is there a fixed minimum order quantity?",
    answer:
      "There is no publicly listed minimum order quantity. As a wholesale-only supplier, we focus on bulk requirements. The suitable order quantity and pricing are discussed based on destination, current availability and transportation requirements.",
  },
  {
    question: "How is tender coconut pricing decided?",
    answer:
      "Pricing depends on preferred size, total quantity, current market availability, delivery destination and transportation planning. Contact the supplier for a current quotation.",
  },
  {
    question: "Do you sell to individual customers?",
    answer:
      "No. Kankeshwari Coconut Supplier is focused on wholesale only, serving wholesalers, traders, distributors, fruit markets and large-volume buyers.",
  },
  {
    question: "Where do you source your coconuts from?",
    answer:
      "Our coconuts are sourced directly from farms in Gadu and nearby growing areas across the coastal belt near Somnath, in coordination with local farmers.",
  },
  {
    question: "Why choose Kankeshwari Coconut Supplier?",
    answer:
      "We offer farm-direct sourcing, carefully selected fresh coconuts, bulk availability, reliable supply from Gadu and nearby areas, and a wholesale-only focus dedicated to bulk buyers.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "Response time can depend on inquiry volume and availability. For urgent or time-sensitive requirements, buyers can contact the supplier directly by phone.",
  },
];

export const servicesCta = {
  eyebrow: "Place a Bulk Supply Inquiry",
  title: "Looking for a Reliable Wholesale Tender Coconut Supplier?",
  description:
    "Contact Kankeshwari Coconut Supplier for bulk requirements and wholesale enquiries. Share your preferred size, required quantity, delivery city, state and expected supply schedule.",
  whatsappLabel: "Send WhatsApp Inquiry",
  callLabel: "Call Kankeshwari Coconut Supplier",
};
