import type { Metadata } from "next";

import { ServicesHero } from "@/components/services/ServicesHero";
import { IntroSection } from "@/components/services/IntroSection";
import { ServiceCards } from "@/components/services/ServiceCards";
import { WorkflowSection } from "@/components/services/WorkflowSection";
import { Industries } from "@/components/services/Industries";
import { Differentiators } from "@/components/services/Differentiators";
import { BoldCTASection } from "@/components/services/BoldCTASection";

export const metadata: Metadata = {
  title: "Local SEO & Digital Marketing Services | MyPageSEO",
  description:
    "Explore MyPageSEO's precision-driven local SEO, Google Maps optimization, citation management, reputation growth, and paid advertising services for businesses across India and North America.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <IntroSection />
      <ServiceCards />
      <WorkflowSection />
      <Industries />
      <Differentiators />
      <BoldCTASection />
    </>
  );
}
