"use client";

import React from "react";
import SectionReveal from "@/components/shared/SectionReveal";
import FadeContent from "@/components/shared/FadeContent";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

import { CONTACT } from "@/lib/constants";

const posts = [
  { id: 1, image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=400&auto=format&fit=crop", size: "small" },
  { id: 2, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop", size: "large" },
  { id: 3, image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=400&auto=format&fit=crop", size: "medium" },
  { id: 4, image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=400&auto=format&fit=crop", size: "small" },
  { id: 5, image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop", size: "large" },
  { id: 6, image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=400&auto=format&fit=crop", size: "medium" },
];

export default function SocialFeed() {
  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <span className="text-gold-600 font-medium text-sm tracking-widest uppercase">
                Join the Community
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown-900 mt-2">
                @divin_touch_
              </h2>
            </div>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brown-900 text-white rounded-full hover:bg-gold-600 transition-colors duration-300 font-medium"
            >
              <InstagramIcon className="w-5 h-5" />
              Follow Us
            </a>
          </div>
        </SectionReveal>

        <FadeContent blur duration={1200} delay={0.2}>
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {posts.map((post, index) => (
              <a 
                key={post.id} 
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group rounded-2xl overflow-hidden cursor-pointer inline-block w-full"
              >
                <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/30 transition-colors duration-300 z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <InstagramIcon className="w-8 h-8 text-white drop-shadow-md" />
                </div>
                <img
                  src={post.image}
                  alt={`Social post ${post.id}`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </a>
            ))}
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
