export type InquiryType =
  | "Tender Coconut Supply"
  | "Green Coconut Supply"
  | "Bulk Coconut Order"
  | "Size-Graded Coconut Supply"
  | "Recurring Business Supply"
  | "Coconut Business Startup"
  | "General Inquiry";

export type CoconutType =
  | "Tender Coconut"
  | "Green Coconut"
  | "Not Sure / Need Guidance";

export type CoconutSizeGrade =
  | "Big–Small"
  | "Small–Big"
  | "Medium Size"
  | "Small Size"
  | "Mixed Size Requirement"
  | "Not Sure / Need Guidance";

export type RequirementFrequency =
  | "One-Time Requirement"
  | "Daily Requirement"
  | "Weekly Requirement"
  | "Monthly Requirement"
  | "Recurring Requirement"
  | "Not Sure Yet";

export interface ContactFormValues {
  fullName: string;
  mobileNumber: string;
  businessName?: string;
  inquiryType: InquiryType;
  coconutType: CoconutType;
  sizeGrade: CoconutSizeGrade;
  quantity: string;
  frequency: RequirementFrequency;
  deliveryLocation: string;
  expectedDate?: string;
  message?: string;
  consent: boolean;
}