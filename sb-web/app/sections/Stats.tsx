import React from "react";
import { Mountain, Map, History, Car } from "lucide-react";

export default function Stats() {
  const stats = [
    { label: "Founded", value: "1863", icon: History, suffix: "" },
    { label: "Barangays", value: "22", icon: Map, suffix: "" },
    { label: "Elevation", value: "874", icon: Mountain, suffix: "m" },
    { label: "From City", value: "71", icon: Car, suffix: "km" },
  ];

  return (
    // 1. '-mt-24' pulls the section UP by 96px to overlap the previous section
    // 2. 'relative z-20' ensures it sits ON TOP of the hero image
    // 3. 'pointer-events-none' on the wrapper allows clicks to pass through empty side areas (optional but good practice)
    <section className="relative z-20 -mt-16 md:-mt-24 px-4 pointer-events-none">
      
      {/* 4. The actual Card container. We re-enable pointer-events here. */}
      <div className="max-w-5xl mx-auto bg-emerald-900 text-white rounded-3xl shadow-2xl pointer-events-auto overflow-hidden ring-1 ring-white/10">
        
        {/* Decorative Background Elements inside the card */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-emerald-400 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-amber-400 blur-3xl"></div>
        </div>

        <div className="relative grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              // 5. Removed margins/gaps and used 'py-8' to make it look like a cohesive bar
              className={`flex flex-col items-center justify-center py-8 md:py-10 px-4 group hover:bg-white/5 transition-colors duration-300
                ${index >= 2 ? "border-t border-white/10 md:border-t-0" : ""} /* Adds border for mobile grid */
              `}
            >
              {/* Icon */}
              <div className="mb-3 text-emerald-400 group-hover:scale-110 group-hover:text-amber-400 transition-all duration-300">
                <stat.icon size={28} strokeWidth={1.5} />
              </div>

              {/* Number */}
              <div className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
                {stat.value}
                <span className="text-lg text-emerald-300 ml-0.5 font-medium">{stat.suffix}</span>
              </div>

              {/* Label */}
              <div className="text-emerald-200/60 text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}