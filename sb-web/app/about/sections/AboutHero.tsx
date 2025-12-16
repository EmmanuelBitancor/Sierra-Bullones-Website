import React from "react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sb-hall.jpg" // Reuse your main image or specific heritage image
          alt="Sierra Bullones Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-emerald-950/80" />{" "}
        {/* Darker overlay for text readability */}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Heart of the <span className="text-amber-400">Interior</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Discover the rich history, agricultural heritage, and the cool
          mountain breeze that defines our beloved town.
        </p>
      </div>
    </div>
  );
}