import React from "react";
import { ArrowRight, ExternalLink, Calendar, Megaphone, Bell } from "lucide-react";
import Link from "next/link";

export default function NewsAndEvents() {
  return (
    <section className="w-full bg-white border-t border-gray-100 overflow-hidden">
      <div className="flex flex-col md:flex-row w-full min-h-[650px]">
        
        {/* LEFT SIDE: Content Details */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-20 bg-white relative order-2 md:order-1">
          <div className="max-w-xl w-full relative z-10">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-bold tracking-wider bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-full uppercase shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              LGU Updates
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Sierra Bullones <br/>
              <span className="text-emerald-700">Community Board</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              We are dedicated to transparency and engagement. Stay connected with the latest executive orders, municipal activities, and tourism advisories directly from the local government.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="group p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-md hover:bg-white transition-all duration-300">
                <div className="w-10 h-10 mb-4 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Megaphone size={20} />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Announcements</h4>
                <p className="text-sm text-slate-500 leading-snug">Latest public advisories and executive orders.</p>
              </div>

              <div className="group p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-md hover:bg-white transition-all duration-300">
                <div className="w-10 h-10 mb-4 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar size={20} />
                </div>
                <h4 className="font-bold text-slate-900 mb-1">Events Calendar</h4>
                <p className="text-sm text-slate-500 leading-snug">Fiestas, holidays, and official gatherings.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
               <Link 
                href="/news"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 hover:-translate-y-0.5 transition-all shadow-lg shadow-emerald-700/20"
               >
                 View All News <ArrowRight size={18} className="ml-2" />
               </Link>
               
               <a 
                 href="https://www.facebook.com/abantesierrabullones" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center px-8 py-3.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all"
               >
                 <ExternalLink size={18} className="mr-2" /> Facebook Page
               </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Social Feed (Light Theme) */}
        <div className="w-full md:w-1/2 bg-slate-50 relative flex items-center justify-center p-8 md:p-12 lg:p-20 overflow-hidden border-l border-gray-100 order-1 md:order-2">
           
           {/* Decorative Background Blobs */}
           <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-200/40 rounded-full blur-[80px]"></div>
             <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-amber-200/40 rounded-full blur-[60px]"></div>
           </div>
           
           {/* The Feed Container - Phone Style */}
           <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500 ease-out">
              {/* Phone Frame */}
              <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl ring-1 ring-black/5 backdrop-blur-sm">
                <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-200 relative h-[500px] w-[340px]">
                  
                  {/* Fake Phone Header */}
                  <div className="absolute top-0 left-0 w-full h-14 bg-white/95 backdrop-blur z-20 border-b border-gray-100 flex items-center justify-between px-6">
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Feed</span>
                     <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-300"></div>
                     </div>
                  </div>

                  {/* Iframe */}
                  <iframe 
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fabantesierrabullones&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
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
                    <span className="animate-pulse text-gray-400 font-medium">Loading Feed...</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Changed from Blue to Emerald */}
              <div className="absolute -bottom-6 -right-6 bg-emerald-800 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow hidden sm:flex border border-emerald-700">
                 <div className="p-2 bg-white/20 rounded-full">
                    <Bell size={20} fill="currentColor" />
                 </div>
                 <div>
                    <div className="text-xs font-medium opacity-80 text-emerald-100">Follow us</div>
                    <div className="font-bold text-sm">@abantesierrabullones</div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}