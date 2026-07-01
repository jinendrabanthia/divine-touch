"use client";

import { CATEGORIES } from "@/lib/constants";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { Product } from "@/data/products";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const categoryName = CATEGORIES.find((c) => c.slug === product.category)?.name;

  return (
    <div>
      <div className="mb-2">
        <span className="inline-block px-3 py-1 bg-cream-100 text-gold-600 text-xs font-semibold uppercase tracking-wider rounded-full border border-gold-300">
          {categoryName}
        </span>
        {product.isSample && (
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold uppercase tracking-wider rounded-full border border-amber-300 ml-2">
            Sample Product
          </span>
        )}
      </div>

      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-brown-900 mb-4">
        {product.name}
      </h1>

      <div className="mb-6">
        {product.price ? (
          <div className="text-3xl font-bold text-brown-900">
            ₹{product.price.toLocaleString("en-IN")}
          </div>
        ) : (
          <div className="text-lg font-medium text-gold-600 p-4 bg-gold-500/10 rounded-xl border border-gold-500/20 inline-block">
            Price available on request
          </div>
        )}
      </div>

      {product.description && (
        <div className="prose prose-brown prose-sm max-w-none mb-8 text-brown-500">
          <p className="leading-relaxed">{product.description}</p>
        </div>
      )}

      {/* Desktop CTA Box */}
      <div className="hidden sm:block p-6 bg-cream-50 rounded-2xl border border-gold-300 shadow-sm mt-8">
        <h3 className="font-heading font-semibold text-lg text-brown-900 mb-2">
          Interested in this product?
        </h3>
        <p className="text-brown-500 text-sm mb-5">
          Get in touch with our wellness experts on WhatsApp for pricing, features, and delivery details.
        </p>
        <WhatsAppButton productName={product.name} variant="primary" />
      </div>
    </div>
  );
}
