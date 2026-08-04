import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  imgClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function BrandLogo({
  className,
  imgClassName,
  width = 180,
  height = 128,
  priority = false,
}: BrandLogoProps) {
  return (
    <span
      className={cn("inline-flex items-center", className)}
      aria-label="Kankeshwari Coconut Supplier"
    >
      <Image
        src="/images/brand/kcs-logo.avif"
        alt="Kankeshwari Coconut Supplier logo"
        width={width}
        height={height}
        priority={priority}
        className={cn("h-auto w-auto object-contain", imgClassName)}
      />
    </span>
  );
}
