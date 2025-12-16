import React from "react";
import { MapPin, Instagram, Facebook, Twitter, Phone, Mail} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 md:py-20 relative overflow-hidden">
      
      {/* Decorative Top Highlight */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-emerald-400 to-amber-400 opacity-70"></div>
      
      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* COLUMN 1: Brand & Socials */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
               <h2 className="text-2xl font-extrabold text-white tracking-tight">
                Sierra <span className="text-emerald-500">Bullones</span>
              </h2>
            </Link>
            <p className="mb-8 text-slate-400 leading-relaxed text-sm">
              The official tourism landing page for the Vegetable Basket of Bohol. 
              Discover the serenity of the interior highlands.
            </p>
            
            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Twitter, href: "https://twitter.com" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-500 hover:text-white transition-all duration-300 group"
                >
                  <item.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Tourism Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Explore</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/history" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span> History</Link></li>
              <li><Link href="/attractions" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span> Attractions</Link></li>
              <li><Link href="/accommodations" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span> Where to Stay</Link></li>
              <li><Link href="/dining" className="hover:text-emerald-400 transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span> Dining & Delicacies</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Government Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Government</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/mayor" className="hover:text-emerald-400 transition-colors">Mayor&#39;s Office</Link></li>
              <li><Link href="/council" className="hover:text-emerald-400 transition-colors">Sangguniang Bayan</Link></li>
              <li><Link href="/transparency" className="hover:text-emerald-400 transition-colors">Transparency Seal</Link></li>
              <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Full Disclosure</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Municipal Hall, Poblacion,<br/>Sierra Bullones, Bohol 6320</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>(038) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span>tourism@sierrabullones.gov.ph</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} LGU Sierra Bullones. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}