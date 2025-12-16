import React from "react";
import { Trophy, BookOpen, Sprout, HandHeart, ArrowUpRight } from "lucide-react";

export default function SKSection() {
  const pillars = [
    {
      icon: Trophy,
      title: "Sports Dev",
      desc: "Leagues & clinics",
      bg: "bg-blue-100",
      text: "text-blue-600",
      border: "hover:border-blue-200"
    },
    {
      icon: BookOpen,
      title: "Education",
      desc: "Scholarship support",
      bg: "bg-amber-100",
      text: "text-amber-600",
      border: "hover:border-amber-200"
    },
    {
      icon: Sprout,
      title: "Environment",
      desc: "Tree planting drives",
      bg: "bg-emerald-100",
      text: "text-emerald-600",
      border: "hover:border-emerald-200"
    },
    {
      icon: HandHeart,
      title: "Welfare",
      desc: "Community outreach",
      bg: "bg-rose-100",
      text: "text-rose-600",
      border: "hover:border-rose-200"
    },
  ];

  return (
    <section className="w-full bg-white border-t border-gray-100 overflow-hidden">
      <div className="flex flex-col md:flex-row w-full min-h-[650px]">
        
        {/* LEFT SIDE: Content Details */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-20 bg-white order-2 md:order-1 relative">
          {/* Subtle geometric pattern */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent opacity-60 pointer-events-none"></div>

          <div className="max-w-xl w-full relative z-10">
             {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-bold tracking-wider bg-amber-50 border border-amber-100 text-amber-700 rounded-full uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Sangguniang Kabataan
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Empowering the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Youth of Tomorrow
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              We are building a future-ready generation. The Sierra Bullones SK Federation is committed to transparency, active engagement, and holistic development for every young constituent.
            </p>

            {/* Enhanced Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {pillars.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`group flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 ${item.border}`}
                >
                  <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${item.bg} ${item.text}`}>
                    <item.icon size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base mb-0.5">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Link */}
            <a 
              href="https://www.facebook.com/profile.php?id=100069311465555" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 border-b-2 border-amber-400 hover:text-amber-600 hover:border-amber-500 transition-colors pb-1"
            >
              Visit SK Official Page <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Social Feed (Amber Theme for Youth/Energy) */}
        <div className="w-full md:w-1/2 bg-amber-50/50 relative flex items-center justify-center p-8 md:p-12 lg:p-20 overflow-hidden border-l border-gray-100 order-1 md:order-2">
           
           {/* Abstract Shapes */}
           <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-amber-200/30 rounded-full blur-[80px]"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-emerald-200/30 rounded-full blur-[80px]"></div>
           </div>

           {/* Phone Container */}
           <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500 ease-out">
              <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl ring-1 ring-black/5 backdrop-blur-sm">
                <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-200 relative h-[500px] w-[340px]">
                  
                  {/* Phone Header */}
                  <div className="absolute top-0 left-0 w-full h-14 bg-white/95 backdrop-blur z-20 border-b border-gray-100 flex items-center justify-between px-6">
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">SK Updates</span>
                     <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                     </div>
                  </div>

                  {/* Iframe */}
                  <iframe 
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100069311465555&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                    width="340" 
                    height="500" 
                    style={{ border: 'none', overflow: 'hidden' }} 
                    scrolling="no" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="block mt-[-5px]"
                  ></iframe>

                   {/* Loading Placeholder */}
                   <div className="absolute inset-0 bg-gray-50 -z-10 flex items-center justify-center">
                    <span className="animate-pulse text-gray-400 font-medium">Loading SK Feed...</span>
                  </div>
                </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}