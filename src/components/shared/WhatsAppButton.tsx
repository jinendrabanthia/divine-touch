"use client";

import { MessageCircle } from "lucide-react";
import { getDefaultWhatsAppUrl, getProductWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  productName?: string;
  variant?: "primary" | "outline" | "compact";
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({
  productName,
  variant = "primary",
  className = "",
  children,
}: WhatsAppButtonProps) {
  const url = productName
    ? getProductWhatsAppUrl(productName)
    : getDefaultWhatsAppUrl();

  const baseStyles = "inline-flex items-center gap-2 font-medium transition-all duration-300 rounded-full";

  const variantStyles = {
    primary:
      "bg-whatsapp hover:bg-whatsapp-dark text-white px-6 py-3 text-sm hover:scale-105 hover:shadow-lg shadow-md",
    outline:
      "border-2 border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white px-5 py-2.5 text-sm",
    compact:
      "bg-whatsapp hover:bg-whatsapp-dark text-white px-4 py-2 text-xs hover:scale-105",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <MessageCircle className={variant === "compact" ? "w-3.5 h-3.5" : "w-4 h-4"} />
      {children || (productName ? "Enquire on WhatsApp" : "Chat on WhatsApp")}
    </a>
  );
}
