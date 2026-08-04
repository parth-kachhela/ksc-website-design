import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  priority?: boolean;
}

export function BrandMark({ className, priority = false }: BrandMarkProps) {
  return (
    <span
      className={cn("inline-flex shrink-0", className)}
      aria-hidden="true"
    >
      <Image
        src="/images/brand/kcs-icon.svg"
        alt=""
        width={531}
        height={573}
        priority={priority}
        className="h-auto w-auto object-contain"
      />
    </span>
  );
}