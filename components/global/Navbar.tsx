"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { mainNav, callHref } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { MobileNavigation } from "@/components/global/MobileNavigation";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-white/85 backdrop-blur-md"
          : "border-transparent bg-white/60 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-24 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center transition-opacity hover:opacity-90"
          aria-label="Kankeshwari Coconut Supplier - Home"
        >
          <BrandLogo
            width={220}
            height={156}
            imgClassName="h-16 w-auto sm:h-[4.5rem] lg:h-20"
          />
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="lg">
            <a href={callHref}>
              <Phone className="size-4" aria-hidden="true" />
              Call Now
            </a>
          </Button>
          <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#1fb257]">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp Inquiry
            </a>
          </Button>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}