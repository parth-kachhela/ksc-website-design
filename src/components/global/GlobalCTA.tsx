import { MessageCircle, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { callHref } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface GlobalCTAProps {
  whatsappLabel?: string;
  callLabel?: string;
  className?: string;
  align?: "left" | "center";
  callVariant?: "secondary" | "outline";
}

export function GlobalCTA({
  whatsappLabel = "Chat on WhatsApp",
  callLabel = `Call ${siteConfig.phoneDisplay}`,
  className,
  align = "left",
  callVariant = "secondary",
}: GlobalCTAProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row",
        align === "center" && "justify-center",
        className,
      )}
    >
      <Button
        asChild
        size="lg"
        className="bg-[#25D366] text-white hover:bg-[#1fb257]"
      >
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          {whatsappLabel}
        </a>
      </Button>
      <Button asChild size="lg" variant={callVariant}>
        <a href={callHref}>
          <Phone className="size-4" aria-hidden="true" />
          {callLabel}
        </a>
      </Button>
    </div>
  );
}