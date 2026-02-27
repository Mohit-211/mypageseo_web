import type { Metadata } from "next";

import { HeroSection } from "@/components/home/HeroSection";
import { CredibilitySection } from "@/components/home/CredibilitySection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StrategySection } from "@/components/home/StrategySection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BoldCTASection } from "@/components/home/BoldCTASection";

export const metadata: Metadata = {
  title: "Local SEO Agency | Google Maps Optimization | MyPageSEO",
  description:
    "MyPageSEO helps local businesses dominate Google Maps and local search results across India and North America. Specialized in GBP optimization, citation consistency, and measurable local growth.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredibilitySection />
      <ServicesSection />
      <StrategySection />
      <IndustriesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <BoldCTASection />
    </>
  );
}
