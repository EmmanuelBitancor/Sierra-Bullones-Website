import React from "react";
import { ArrowRight, Phone, MapPin } from "lucide-react";

export default function CallToAction() {
  return (
    // SECTION: The background color now applies to the entire section (Edge-to-Edge)
    <section className="relative w-full py-24 bg-emerald-950 overflow-hidden">
      
      {/* Decorative Background Pattern (Grid) - Covers the whole section */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>
      
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      {/* CONTAINER: Keeps the content centered and bounded so it's not too wide to read */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 text-emerald-300 text-sm font-medium backdrop-blur-sm">
              <MapPin size={16} className="text-amber-400" />
              <span>Experience Bohol&#39;s Interior</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              Ready to Feel the <br/>
              <span className="text-amber-400">Cold Breeze?</span>
            </h2>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-emerald-100/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Escape the city heat. Book your stay at Paradise Hills or schedule a guided tour of the famous rice terraces today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-950 font-bold rounded-xl hover:bg-emerald-50 hover:scale-105 transition-all shadow-xl shadow-black/20">
                Stay Connected<Phone size={18} className="ml-2 text-emerald-600" />
              </button>
              
              <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border border-white/20 font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm">
                View Gallery <ArrowRight size={18} className="ml-2 text-emerald-300" />
              </button>
            </div>

        </div>
      </div>
    </section>
  );
}