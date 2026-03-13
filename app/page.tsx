"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import QuickAccessGrid from "./components/QuickAccessGrid";
import BestSellerCarousel from "./components/BestSellerCarousel";
import TikTokSection from "./components/TikTokSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import MenuPopup from "./components/MenuPopup";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenMenu={() => setIsMenuOpen(true)} />
      
      {/* Consistent vertical spacing between sections */}
      <main className="px-6 py-12 space-y-12 relative z-10">
        <QuickAccessGrid onOpenMenu={() => setIsMenuOpen(true)} />
        <BestSellerCarousel />
        <TikTokSection />
        
        <div className="space-y-6">
          <LocationSection />
          <Footer />
        </div>
      </main>

      <MenuPopup isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
