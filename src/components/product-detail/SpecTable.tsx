"use client";

import { CheckCircle2 } from "lucide-react";

interface SpecTableProps {
  specs: string[];
}

export default function SpecTable({ specs }: SpecTableProps) {
  if (!specs || specs.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="font-heading text-2xl font-bold text-brown-900 mb-6">
        Key Features & Specifications
      </h2>
      
      <div className="bg-white rounded-2xl border border-cream-200 overflow-hidden shadow-sm">
        <div className="divide-y divide-cream-200">
          {specs.map((spec, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-4 hover:bg-cream-50 transition-colors duration-200"
            >
              <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <span className="text-brown-700 text-sm leading-relaxed">
                {spec}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
