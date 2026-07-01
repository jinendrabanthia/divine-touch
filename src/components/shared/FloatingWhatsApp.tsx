"use client";

import { MessageCircle } from "lucide-react";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getDefaultWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp hover:bg-whatsapp-dark rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-gentle"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
