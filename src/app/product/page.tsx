import type { Metadata } from "next";

import { HeroSection } from "@/components/product/ProductHero";
import { IntroductionSection } from "@/components/product/Introduction";
import { CoreCapabilitiesSection } from "@/components/product/CoreCapabilities";
import { BuiltForSection } from "@/components/product/BuiltFor";
import { WhiteLabelSection } from "@/components/product/WhiteLabel";
import { PlatformWorkflowSection } from "@/components/product/PlatformWorkflow";
import { DifferentiatorsSection } from "@/components/product/Differentiators";
import { BoldCTASection } from "@/components/product/BoldCTA";

export const metadata: Metadata = {
  title: "MyPageSEO Platform | Local SEO Reporting & White Label Software",
  description:
    "MyPageSEO is a structured local SEO reporting and performance tracking platform built for agencies and businesses. Track rankings, citations, reviews, and Google Business Profile health with white-labeled reports and actionable insights.",
  keywords: [
    "local SEO software",
    "Google Business Profile reporting tool",
    "white label SEO reports",
    "local rank tracker",
    "citation tracking software",
    "SEO reporting platform for agencies",
  ],
  openGraph: {
    title: "MyPageSEO Platform | Local SEO Reporting & White Label Software",
    description:
      "Structured local SEO reporting platform built for agencies and businesses. Gain clarity over rankings, reviews, citations, and GBP health.",
    url: "https://mypageseo.com/product",
    siteName: "MyPageSEO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyPageSEO Platform",
    description:
      "Local SEO reporting and white label platform for agencies and businesses.",
  },
  alternates: {
    canonical: "https://mypageseo.com/product",
  },
};

export default function ProductPage() {
  return (
    <main>
      <HeroSection />
      <IntroductionSection />
      <CoreCapabilitiesSection />
      <BuiltForSection />
      <WhiteLabelSection />
      <PlatformWorkflowSection />
      <DifferentiatorsSection />
      <BoldCTASection />
    </main>
  );
}
