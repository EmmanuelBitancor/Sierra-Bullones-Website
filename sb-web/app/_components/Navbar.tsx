"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MapPin } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Attractions", href: "/#attractions" },
    { name: "News", href: "#news" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-emerald-100/50 py-3 shadow-sm"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative w-10 h-10 md:w-11 md:h-11 shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/sb-logo.png" 
                alt="Sierra Bullones Logo"
                fill
                className="object-contain drop-shadow-md"
                priority 
                sizes="48px"
              />
            </div>
            
            <div className={`text-xl md:text-2xl font-extrabold tracking-tight leading-none transition-colors duration-300 ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}>
              Sierra<span className="text-amber-500">Bullones</span>
              <span className={`block text-[0.65rem] font-medium uppercase tracking-widest ${
                 isScrolled ? "text-emerald-600" : "text-emerald-300"
              }`}>
                Bohol
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
                  isScrolled 
                    ? "text-slate-600 hover:text-emerald-600" 
                    : "text-white/90 hover:text-white hover:drop-shadow-md"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className={`md:hidden relative z-50 p-2 rounded-full transition-colors ${
              isScrolled 
                ? "text-slate-900 hover:bg-slate-100" 
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY (Full Screen) */}
      <div className={`fixed inset-0 bg-emerald-950 z-40 md:hidden transition-transform duration-500 ease-in-out ${
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/20 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col h-full justify-center px-8 space-y-8 relative z-10">
          
          <div className="space-y-6">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-4xl font-bold text-white hover:text-amber-400 transition-colors tracking-tight"
                onClick={() => setMobileMenuOpen(false)}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-px w-20 bg-white/20"></div>

          <div className="space-y-4">
             <Link
                href="/plan-visit"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 text-xl font-medium text-emerald-300 hover:text-white transition-colors"
             >
                <MapPin size={24} /> Plan Your Trip
             </Link>
             <p className="text-white/40 text-sm max-w-xs leading-relaxed">
               Discover the Vegetable Basket of Bohol. Experience nature, culture, and serenity.
             </p>
          </div>

        </div>
      </div>
    </>
  );
}