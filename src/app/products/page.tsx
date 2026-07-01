"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { ProductCategory } from "@/lib/constants";
import CategoryFilter from "@/components/products/CategoryFilter";
import ProductGrid from "@/components/products/ProductGrid";
import SectionReveal from "@/components/shared/SectionReveal";
import CtaBanner from "@/components/home/CtaBanner";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");

  useEffect(() => {
    if (
      categoryParam && 
      ["massage-chairs", "leg-massagers", "foot-massagers", "scalp-massagers", "other-massage-products"].includes(categoryParam)
    ) {
      setActiveCategory(categoryParam as ProductCategory);
    }
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <div className="bg-cream-100 py-16 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-brown-900 mb-4">
              Our Collection
            </h1>
            <p className="text-brown-500 max-w-2xl mx-auto text-lg">
              Explore our premium range of wellness products designed to elevate your daily relaxation experience.
            </p>
          </SectionReveal>
        </div>
      </div>

      <div className="py-16 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal delay={0.1}>
            <CategoryFilter 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
          </SectionReveal>

          <ProductGrid products={filteredProducts} />
        </div>
      </div>

      <CtaBanner />
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream-50" />}>
      <ProductsContent />
    </Suspense>
  );
}
