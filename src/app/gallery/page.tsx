"use client";

import React from "react";
import dynamic from "next/dynamic";
import SectionReveal from "@/components/shared/SectionReveal";
import GalleryGrid from "@/components/gallery/GalleryGrid";

const InfiniteMenu = dynamic(() => import("@/components/shared/InfiniteMenu"), { ssr: false });

const items = [
  {
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
    link: '/products/am-006-b',
    title: 'Relax',
    description: 'Find inner peace with our massage chairs.'
  },
  {
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop',
    link: '/products/amb-007-b',
    title: 'Comfort',
    description: 'Ultimate support for your body.'
  },
  {
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=600&auto=format&fit=crop',
    link: '/products/am-009',
    title: 'Rejuvenate',
    description: 'Renew your spirit and energy.'
  },
  {
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=600&auto=format&fit=crop',
    link: '/',
    title: 'Zen',
    description: 'Balance and harmony in your home.'
  },
  {
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop',
    link: '/products',
    title: 'Relief',
    description: 'Soothe your tired muscles.'
  }
];

export default function GalleryPage() {
  return (
    <div className="bg-charcoal-900 min-h-screen relative">
      {/* 3D Hero Section */}
      <div className="w-full pt-32 pb-16">
        <div className="w-full z-10 mb-12 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionReveal>
              <span className="text-gold-400 font-medium text-sm tracking-widest uppercase bg-charcoal-900/50 px-3 py-1 rounded-full backdrop-blur-sm">
                Product Gallery
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-50 mt-4 drop-shadow-lg">
                Explore Every Angle
              </h1>
            </SectionReveal>
          </div>
        </div>

        <div className="w-full mx-auto relative" style={{ height: '700px', maxWidth: '1400px' }}>
          <InfiniteMenu items={items} scale={1.2} />
        </div>
      </div>

      {/* Grid Section */}
      <GalleryGrid />
    </div>
  );
}
