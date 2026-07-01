import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import ProductCarousel from "@/components/home/ProductCarousel";
import CategoryTiles from "@/components/home/CategoryTiles";
import WhyDivineTouch from "@/components/home/WhyDivineTouch";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqAccordion from "@/components/home/FaqAccordion";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustStrip />
      <ProductCarousel />
      <CategoryTiles />
      <WhyDivineTouch />
      <TestimonialsSection />
      <FaqAccordion />
      <CtaBanner />
    </div>
  );
}
