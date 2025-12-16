import React from "react";
import Image from "next/image";
import { ArrowRight, PlayCircle, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-emerald-950">
      
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {/* Animated Image Wrapper */}
        <div className="relative w-full h-full animate-slow-zoom">
          <Image
            src="/images/sb-hall2.jpg" 
            alt="Sierra Bullones Highlands"
            fill
            className="object-cover opacity-90"
            priority
            quality={90}
          />
        </div>
        
        {/* Gradient Overlay: Top (Dark) -> Center (Clear) -> Bottom (Brand Color) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-emerald-950/90" />
        
        {/* Texture Overlay (Optional: Adds film grain look) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10 container mx-auto px-6 pt-20 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-bold text-amber-300 shadow-2xl animate-fade-in-down">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="tracking-widest uppercase">The Golden Town</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1] drop-shadow-2xl animate-fade-in-up">
          Discover the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-200">
            Highlands of Bohol
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-200/90 mb-12 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in-up delay-100">
          Escape the heat and immerse yourself in the emerald rice terraces, 
          cold springs, and serene hills of Sierra Bullones.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up delay-200">
          
          <button className="group relative px-8 py-4 bg-emerald-600 text-white rounded-full font-bold overflow-hidden shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 hover:shadow-emerald-500/50">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative flex items-center gap-2">
              Explore Attractions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-full font-bold transition-all hover:bg-white/10 hover:border-white/40 flex items-center gap-3">
            <PlayCircle className="w-5 h-5 text-amber-400 fill-current opacity-80" />
            <span>Watch Video</span>
          </button>

        </div>
        
        {/* Quick Stats / Info Pill (Optional addition for "Pro" feel) */}
        <div className="mt-16 inline-flex items-center gap-6 py-3 px-6 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 text-xs font-medium text-white/60 animate-fade-in-up delay-300">
          <div className="flex items-center gap-2">
             <MapPin size={14} className="text-emerald-400" /> 75km from Tagbilaran
          </div>
          <div className="w-px h-4 bg-white/10"></div>
          <div className="flex items-center gap-2">
             <span className="text-amber-400">24°C</span> Average Temp
          </div>
        </div>

      </div>

      {/* 3. SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in delay-500 text-white/50">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to Explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <div className="w-1 h-1.5 bg-white rounded-full animate-scroll-down"></div>
        </div>
      </div>
      
    </div>
  );
}