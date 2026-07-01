"use client";

import { Camera } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function ImagePlaceholder({
  label,
  aspectRatio = "1/1",
  className = "",
  size = "md",
}: ImagePlaceholderProps) {
  const textSize = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-2 border-dashed border-gold-300 bg-cream-100 placeholder-pattern flex flex-col items-center justify-center gap-2 ${className}`}
      style={{ aspectRatio }}
    >
      <Camera className="w-8 h-8 text-gold-400 opacity-60" />
      <span
        className={`text-brown-500 text-center px-4 font-medium opacity-70 ${textSize[size]}`}
      >
        [Image: {label}]
      </span>
    </div>
  );
}
