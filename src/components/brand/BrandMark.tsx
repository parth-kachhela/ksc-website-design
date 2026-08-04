import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-10", className)}
      aria-hidden="true"
    >
      <circle cx="32" cy="38" r="16" fill="#4A9232" />
      <circle cx="32" cy="38" r="10" fill="#91CE38" />
      <circle cx="36" cy="34" r="2.5" fill="#234B20" opacity="0.55" />
      <circle cx="29" cy="42" r="2" fill="#234B20" opacity="0.45" />
      <path
        d="M32 22 C30 14 22 10 14 10 C14 18 18 26 26 28 C28 29 30 29 32 28 Z"
        fill="#183C1C"
      />
      <path
        d="M32 22 C34 14 42 10 50 10 C50 18 46 26 38 28 C36 29 34 29 32 28 Z"
        fill="#234B20"
      />
      <path
        d="M32 22 C32 16 34 12 38 8 C42 10 44 14 44 18 C42 22 37 24 32 24 Z"
        fill="#4A9232"
      />
      <path
        d="M22 60 C26 54 34 54 38 60 C36 62 26 62 22 60 Z"
        fill="#DDEFCB"
      />
    </svg>
  );
}
