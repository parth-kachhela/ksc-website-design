"use client";

import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { siteConfig } from "@/lib/site-config";

export function FloatingWhatsAppButton() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Kankeshwari Coconut Supplier"
      initial={reducedMotion ? undefined : { opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
      className="fixed right-5 bottom-24 z-40 hidden items-center gap-2 rounded-full bg-[#25D366] py-3 pr-5 pl-4 text-sm font-semibold text-white shadow-lg shadow-black/15 transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:bottom-6 md:inline-flex"
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      <span>Chat on WhatsApp</span>
    </motion.a>
  );
}