import HeroSection from "./components/HeroSection";
import QuickAccessGrid from "./components/QuickAccessGrid";
import BestSellerCarousel from "./components/BestSellerCarousel";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Increased vertical spacing between sections (Improvement #11) */}
      <main className="px-6 py-12 space-y-20">
        <QuickAccessGrid />
        <BestSellerCarousel />
        
        <div className="space-y-6">
          <LocationSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
