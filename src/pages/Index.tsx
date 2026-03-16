import { useEffect } from "react";
import { useScrollFade } from "@/hooks/useScrollFade";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import MirrorSection from "@/components/landing/MirrorSection";
import PresentationSection from "@/components/landing/PresentationSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import OffersSection from "@/components/landing/OffersSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import CTAFinalSection from "@/components/landing/CTAFinalSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useScrollFade();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MirrorSection />
      <PresentationSection />
      <BeforeAfterSection />
      <OffersSection />
      <TestimonialsSection />
      <FAQSection />
      <CTAFinalSection />
      <Footer />
    </div>
  );
};

export default Index;
