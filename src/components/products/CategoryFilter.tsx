"use client";

import { motion } from "framer-motion";
import { CATEGORIES, ProductCategory } from "@/lib/constants";

interface CategoryFilterProps {
  activeCategory: ProductCategory | "all";
  onCategoryChange: (category: ProductCategory | "all") => void;
}

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const categories = [
    { slug: "all" as const, name: "All Products" },
    ...CATEGORIES,
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
      {categories.map((category) => {
        const isActive = activeCategory === category.slug;

        return (
          <button
            key={category.slug}
            onClick={() => onCategoryChange(category.slug)}
            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
              isActive
                ? "text-white"
                : "text-brown-700 hover:bg-cream-200"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-gold-500 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
}
