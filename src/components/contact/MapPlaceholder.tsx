"use client";

import { MapPin } from "lucide-react";

export default function MapPlaceholder() {
  return (
    <div className="w-full h-full min-h-[300px] bg-cream-100 rounded-2xl border-2 border-dashed border-gold-300 flex flex-col items-center justify-center p-6 text-center placeholder-pattern">
      <MapPin className="w-10 h-10 text-gold-400 mb-3" />
      <h3 className="font-heading font-semibold text-brown-900 text-lg mb-1">
        Store Location Map
      </h3>
      <p className="text-brown-500 text-sm max-w-[250px]">
        [Placeholder for Google Maps iframe embed once physical address is provided]
      </p>
    </div>
  );
}
