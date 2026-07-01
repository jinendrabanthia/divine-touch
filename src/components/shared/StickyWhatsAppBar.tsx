"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { Product } from "@/data/products";

interface StickyWhatsAppBarProps {
  product: Product;
}

export default function StickyWhatsAppBar({ product }: StickyWhatsAppBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past the hero section roughly
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-cream-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] sm:hidden transform transition-transform duration-300 translate-y-0">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-xs text-brown-500 font-medium mb-0.5">Interested?</p>
          <p className="font-heading font-semibold text-brown-900 truncate">
            {product.name}
          </p>
        </div>
        <a
          href={getProductWhatsAppUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300"
        >
          <MessageCircle className="w-4 h-4" />
          Enquire
        </a>
      </div>
    </div>
  );
}
