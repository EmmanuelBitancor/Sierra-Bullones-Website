import React from "react";
import FeatureCard from "../_components/FeatureCard";
import { Leaf, CloudSun, Camera, MapPin } from "lucide-react";

export default function Attractions() {
  return (
    <section id="attractions" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Topographic Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-42c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-39 0c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm33 51c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-51 6c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm30-19c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23059669' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
      ></div>
      
      {/* Decorative ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-100/40 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section - Centered and Enhanced */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-amber-600 font-bold tracking-wider uppercase text-sm mb-4">
            <MapPin size={16} /> Discover Bohol&apos;s Interior
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Nature&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Hidden Gem</span>
          </h2>
          
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
            Known as the &quot;Vegetable Basket&quot; of the province, Sierra
            Bullones offers agro-tourism and eco-adventures unlike anywhere else
            in Bohol.
          </p>

          {/* Decorative separator */}
          <div className="mt-8 flex justify-center items-center gap-3 opacity-20">
            <div className="h-px w-12 bg-emerald-900"></div>
            <Leaf size={16} className="text-emerald-900" />
            <div className="h-px w-12 bg-emerald-900"></div>
          </div>
        </div>

        {/* Cards Grid - Assuming FeatureCard is already styled nicely */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          <FeatureCard
            icon={Leaf}
            title="Rice Terraces"
            description="Witness the breathtaking sculpted hills and agricultural marvels that feed the province."
            image="/images/sb-hall.jpg"
          />
          <FeatureCard
            icon={CloudSun}
            title="Paradise Hills"
            description="Experience panoramic views of the island from one of the highest points in Bohol."
            image="/images/sb-hall.jpg"
          />
          <FeatureCard
            icon={Camera}
            title="Eco-Trails"
            description="Trek through untouched forests and discover hidden springs in the town's interior."
            image="/images/sb-hall.jpg"
          />
        </div>
      </div>
    </section>
  );
}  