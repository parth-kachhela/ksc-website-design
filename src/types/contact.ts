export type InquiryType =
  | "Tender Coconut Supply"
  | "Green Coconut Supply"
  | "Bulk Coconut Order"
  | "Recurring Business Supply"
  | "Coconut Business Startup"
  | "General Inquiry";

export type RequirementFrequency =
  | "One-Time Requirement"
  | "Daily Requirement"
  | "Weekly Requirement"
  | "Monthly Requirement"
  | "Not Sure Yet";

export interface ContactFormValues {
  fullName: string;
  mobileNumber: string;
  businessName?: string;
  inquiryType: InquiryType;
  quantity: string;
  frequency: RequirementFrequency;
  deliveryLocation: string;
  expectedDate?: string;
  message?: string;
  consent: boolean;
}