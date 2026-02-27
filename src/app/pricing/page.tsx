// app/pricing/page.tsx

import type { Metadata } from "next";

import PricingHero from "@/components/pricing/PricingHero";
import PricingIntro from "@/components/pricing/PricingIntro";
import PricingGrid from "@/components/pricing/PricingGrid";
import WhatInfluences from "@/components/pricing/WhatInfluences";
import CustomSolutions from "@/components/pricing/CustomSolutions";
import ValueProp from "@/components/pricing/ValueProp";
import Differentiators from "@/components/pricing/Differentiators";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingBoldCTA from "@/components/pricing/PricingBoldCTA";

export const metadata: Metadata = {
  title: "Pricing | MyPageSEO",
  description:
    "Explore MyPageSEO service pricing structured around competition level, market size, and growth objectives. Transparent engagement models for measurable local growth.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PricingHero />
      <PricingIntro />
      <PricingGrid />
      <WhatInfluences />
      <CustomSolutions />
      <ValueProp />
      <Differentiators />
      <PricingFAQ />
      <PricingBoldCTA />
    </main>
  );
}
