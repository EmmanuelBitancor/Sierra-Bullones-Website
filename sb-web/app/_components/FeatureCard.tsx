import React from "react";
import Image from "next/image";
import { LucideIcon, ArrowUpRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  image,
}: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-xl h-[450px] cursor-pointer ring-1 ring-white/10">
      
      {/* BACKGROUND IMAGE with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Gradient Overlay - Tinted Emerald for branding */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
        
        {/* Icon - Glass Effect */}
        <div className="mb-4 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
          <Icon className="w-7 h-7 text-amber-400" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight transition-transform duration-300 group-hover:-translate-y-2">
          {title}
        </h3>

        {/* Description - Hidden by default, slides up and fades in */}
        <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
           <p className="text-emerald-100/80 text-sm leading-relaxed mb-6 font-medium line-clamp-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {description}
          </p>
          
          {/* Action Button */}
          <span className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            Explore Location <ArrowUpRight size={16} />
          </span>
        </div>

      </div>
    </div>
  );
}