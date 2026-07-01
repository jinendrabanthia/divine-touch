"use client";

import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

export default function TopBar() {
  return (
    <div className="bg-charcoal-900 text-cream-50 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
        <div className="flex items-center gap-6">
          <a
            href={getDefaultWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-whatsapp transition-colors duration-300"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp:</span>
            <span className="font-medium">{CONTACT.whatsapp.display}</span>
          </a>
          <a
            href={`tel:${CONTACT.phone.number}`}
            className="flex items-center gap-1.5 hover:text-gold-400 transition-colors duration-300"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Call:</span>
            <span className="font-medium">{CONTACT.phone.display}</span>
          </a>
        </div>
        <a
          href={`mailto:divinetouchhealthcare8@gmail.com`}
          className="hidden md:flex items-center gap-1.5 hover:text-gold-400 transition-colors duration-300 text-xs"
        >
          <span>✉ divinetouchhealthcare8@gmail.com</span>
        </a>
      </div>
    </div>
  );
}
