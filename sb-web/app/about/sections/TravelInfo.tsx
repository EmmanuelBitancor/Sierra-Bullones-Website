import React from "react";
import { Bus, Clock, Map, Sun } from "lucide-react";

export default function TravelInfo() {
  const tips = [
    {
      icon: Bus,
      title: "How to Get There",
      desc: "Take a bus or van from Dao Integrated Terminal in Tagbilaran City. The trip usually takes 1.5 to 2 hours via the interior road.",
    },
    {
      icon: Sun,
      title: "Best Time to Visit",
      desc: "Visit between December and February to experience the coldest weather, often dropping below 20°C in the evenings.",
    },
    {
      icon: Map,
      title: "Getting Around",
      desc: "Habal-habal (motorcycle taxi) is the primary mode of transportation to reach interior barangays and mountain peaks.",
    },
    {
      icon: Clock,
      title: "Market Day",
      desc: "Experience the vibrant local trade every Tuesday. It is the best time to buy fresh, cheap vegetables directly from farmers.",
    },
  ];

  return (
    <section className="py-24 bg-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-emerald-900">
            Visitor Information
          </h2>
          <p className="text-emerald-700/70 mt-4">
            Everything you need to know before your ascent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6">
                <tip.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {tip.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}