"use client";

import Link from "next/link";
import { Armchair, Footprints, Brain, Activity } from "lucide-react";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";
import SectionReveal from "@/components/shared/SectionReveal";

const categories = [
  {
    slug: "massage-chairs",
    name: "Massage Chairs",
    icon: Armchair,
    description: "Full body luxury massage chairs",
    imageLabel: "Category — Massage Chairs",
  },
  {
    slug: "leg-massagers",
    name: "Leg & Foot Massagers",
    icon: Footprints,
    description: "Targeted leg and foot relief",
    imageLabel: "Category — Leg & Foot Massagers",
  },
  {
    slug: "scalp-massagers",
    name: "Scalp Massagers",
    icon: Brain,
    description: "Soothing scalp therapy",
    imageLabel: "Category — Scalp Massagers",
  },
  {
    slug: "other-massage-products",
    name: "Full Body Massagers",
    icon: Activity,
    description: "Complete body wellness",
    imageLabel: "Category — Full Body Massagers",
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="text-gold-600 font-medium text-sm tracking-widest uppercase">
              Browse By Category
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown-900 mt-2">
              Explore Our Range
            </h2>
            <div className="w-16 h-0.5 bg-gold-500 mx-auto mt-4" />
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <SectionReveal key={cat.slug} delay={index * 0.1}>
              <Link
                href={`/products?category=${cat.slug}`}
                className="group block relative overflow-hidden rounded-2xl bg-cream-50 border border-cream-200 hover:border-gold-400 transition-all duration-500 hover:shadow-xl"
              >
                <ImagePlaceholder
                  label={cat.imageLabel}
                  aspectRatio="4/3"
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <cat.icon className="w-5 h-5 text-gold-400" />
                    <h3 className="font-heading font-semibold text-white text-lg">
                      {cat.name}
                    </h3>
                  </div>
                  <p className="text-cream-200 text-sm">{cat.description}</p>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
