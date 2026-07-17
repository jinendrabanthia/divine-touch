"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { getFeaturedProducts } from "@/data/products";
import SectionReveal from "@/components/shared/SectionReveal";
import GlassIcons, { GlassItem } from "@/components/shared/GlassIcons";

export default function ProductCarousel() {
  const featured = getFeaturedProducts();
  const scrollX = useMotionValue(0);
  const smoothX = useSpring(scrollX, { stiffness: 120, damping: 24 });
  const prevScrollY = useRef(0);

  useEffect(() => {
    prevScrollY.current = window.scrollY;

    const clamp = (value: number) => Math.max(Math.min(value, 180), -180);

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - prevScrollY.current;
      if (Math.abs(delta) > 0) {
        scrollX.set(clamp(scrollX.get() + delta * 0.35));
      }
      prevScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollX]);

  const glassItems: GlassItem[] = featured.map((p) => ({
    image: p.images[0]?.src || "",
    label: p.name,
    href: `/products/${p.slug}`,
    color: "gold",
  }));

  return (
    <section className="py-20 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="text-gold-600 font-medium text-sm tracking-widest uppercase">
              Our Collection
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown-900 mt-2">
              Featured Products
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          </div>
        </SectionReveal>

        <motion.div style={{ x: smoothX }} className="relative mt-8">
          <GlassIcons items={glassItems} colorful={false} />
        </motion.div>
      </div>
    </section>
  );
}
