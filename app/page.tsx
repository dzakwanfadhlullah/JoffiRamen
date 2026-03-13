"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import QuickAccessGrid from "./components/QuickAccessGrid";
import BestSellerCarousel from "./components/BestSellerCarousel";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import MenuPopup from "./components/MenuPopup";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenMenu={() => setIsMenuOpen(true)} />
      
      {/* Increased vertical spacing between sections (Improvement #11) */}
      <main className="px-6 py-12 space-y-20 relative z-10">
        <QuickAccessGrid onOpenMenu={() => setIsMenuOpen(true)} />
        <BestSellerCarousel />
        
        <div className="space-y-6">
          <LocationSection />
          <Footer />
        </div>
      </main>

      <MenuPopup isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
