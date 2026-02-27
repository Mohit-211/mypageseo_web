import type { Metadata } from "next";

import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { IntroductionSection } from "@/components/about/IntroductionSection";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { WhatSetsUsApartSection } from "@/components/about/WhatSetsUsApartSection";
import { OurApproachSection } from "@/components/about/OurApproachSection";
import { CredibilitySection } from "@/components/about/CredibilitySection";
import { ClosingCTASection } from "@/components/about/ClosingCTASection";

export const metadata: Metadata = {
  title: "About MyPageSEO | Local SEO Agency India & North America",
  description:
    "Learn about MyPageSEO — a local SEO agency operating under Devereaux and Bhagat Private Limited, specializing in Google Maps rankings, citation consistency, and measurable local growth.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <IntroductionSection />
      <PhilosophySection />
      <WhatSetsUsApartSection />
      <OurApproachSection />
      <CredibilitySection />
      <ClosingCTASection />
    </>
  );
}
