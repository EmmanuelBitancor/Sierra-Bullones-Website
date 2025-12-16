import React from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import AboutHero from "./sections/AboutHero";
import History from "./sections/History";
import TravelInfo from "./sections/TravelInfo";
import CallToAction from "../sections/CallToAction"; // Reusing the CTA from homepage

export const metadata = {
  title: "About | Sierra Bullones",
  description: "Learn about the history, culture, and geography of Sierra Bullones, Bohol.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      <AboutHero />
      <History />
      <TravelInfo />
      
      {/* Reusing the CTA for consistency */}
      <div className="bg-gray-50">
        <CallToAction />
      </div>
      
      <Footer />
    </main>
  );
}