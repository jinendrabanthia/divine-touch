"use client";

import { Truck, Shield, BadgeCheck, Building2 } from "lucide-react";
import SectionReveal from "@/components/shared/SectionReveal";

const trustItems = [
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description: "Free delivery across all major cities",
  },
  {
    icon: Shield,
    title: "Warranty & Support",
    description: "Comprehensive after-sales service",
  },
  {
    icon: BadgeCheck,
    title: "Genuine Products",
    description: "100% authentic, quality assured",
  },
  {
    icon: Building2,
    title: "Homes & Offices",
    description: "Trusted by thousands nationwide",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center gap-3 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-300/30 to-gold-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-brown-900 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-brown-500 text-xs sm:text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
