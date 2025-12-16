import React from "react";
import Image from "next/image";
import { Scroll, Users, Wheat } from "lucide-react";

export default function History() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
              <Scroll size={16} />
              <span>Est. 1863</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              From <span className="text-amber-600">Bullones</span> to Sierra
              Bullones
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Legend has it that the town&apos;s name was derived from the Spanish
                word <strong>&quot;Bullones&quot;</strong> referring to gold bullions. As
                stories go, the early settlers found abundance not just in the
                fertile soil, but in the rumors of hidden treasures within the
                hills.
              </p>
              <p>
                Today, our true treasure is our land. Situated 71 kilometers
                from Tagbilaran City, Sierra Bullones stands as the
                &quot;Vegetable Basket&quot; of Bohol. Our elevation provides a distinct,
                cool climate that allows high-value crops to thrive, setting us
                apart from the coastal towns.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <Users className="w-8 h-8 text-emerald-600 mb-2" />
                    <h4 className="font-bold text-gray-900">Community</h4>
                    <p className="text-sm text-gray-500">Home to warm, resilient Boholanos.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <Wheat className="w-8 h-8 text-amber-500 mb-2" />
                    <h4 className="font-bold text-gray-900">Agriculture</h4>
                    <p className="text-sm text-gray-500">Primary producer of vegetables.</p>
                </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative h-[600px] hidden md:block">
            <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image
                src="/images/sb-hall.jpg"
                alt="Rice Terraces"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20">
               <Image
                src="/images/sb-hall.jpg"
                alt="Local Farmers"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Dot Pattern */}
            <div className="absolute top-10 left-0 w-32 h-32 opacity-20 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}