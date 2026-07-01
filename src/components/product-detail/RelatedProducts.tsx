"use client";

import { Product } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import SectionReveal from "@/components/shared/SectionReveal";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className="py-20 bg-cream-50 border-t border-cream-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-brown-900 mt-2">
              You May Also Like
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <SectionReveal key={product.id} delay={index * 0.1}>
              <ProductCard product={product} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
