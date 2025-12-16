import React from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Hero from "./sections/Hero";
import Attractions from "./sections/Attractions";
import Stats from "./sections/Stats";
import CallToAction from "./sections/CallToAction";
import NewsAndEvents from "./sections/News&Events";
import SKSection from "./sections/SKSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <Hero />
      <Stats />
      <NewsAndEvents/>
      <Attractions />
      <SKSection />
      <CallToAction />
      <Footer />
    </main>
  );
}