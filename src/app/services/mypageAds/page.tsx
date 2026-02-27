import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  MapPin,
  FileText,
  Megaphone,
  BarChart3,
  Zap,
  ShieldCheck,
  TrendingUp,
  Target,
  PhoneCall,
  DollarSign,
  MousePointerClick,
  SlidersHorizontal,
  LineChart,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "mypageAds | Paid Advertising Service | MyPageSEO",
  description:
    "mypageAds delivers structured, ROI-focused Google Ads campaigns for businesses across India and North America. Controlled visibility, measurable lead flow, scalable growth.",
};

/* ═══ HERO ═══ */
const Hero = () => (
  <section className="relative min-h-[72vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/ads-service-hero.jpg"
        alt="Google Ads campaign performance dashboard with cost-per-click metrics and conversion tracking"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>
    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-7">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 text-sm text-accent font-semibold">
          <Megaphone className="w-4 h-4" />
          Performance Service — Paid Advertising
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
          Controlled, Profitable Visibility.{" "}
          <span className="text-accent">Engineered for ROI.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
          mypageAds focuses on high-intent, location-targeted campaigns designed
          to generate qualified leads and measurable ROI — across India and
          North America. Every rupee and dollar works toward growth.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Launch a High-Performance Campaign
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link href="/contact">Request an Ads Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ INTRODUCTION ═══ */
const Introduction = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          What Is mypageAds
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Immediate Visibility. Predictable Lead Flow. Measurable Returns.
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            mypageAds is engineered for businesses that need immediate,
            controlled visibility and predictable lead generation. This is not
            about boosting traffic randomly or burning budget on impressions
            that don't convert. It is about targeting purchase-ready audiences
            at the exact moment they search for your services, optimizing
            cost-per-lead to maximize return, and aligning every campaign dollar
            with measurable business outcomes.
          </p>
          <p>
            Our paid advertising execution covers Google Ads search campaigns,
            location-based targeting across city, radius, and multi-location
            strategies, display retargeting to recapture interested prospects,
            and end-to-end performance tracking that ties ad spend directly to
            leads, calls, and revenue. Every campaign is built on structured
            data — not guesswork.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ SERVICE COVERAGE BLOCKS ═══ */
const coverageBlocks = [
  {
    icon: Search,
    title: "Search Campaign Strategy",
    desc: "We build campaigns around keyword intent segmentation — separating high-commercial-intent terms from informational queries to ensure budget flows to searches that convert. Geo-targeted campaign structures ensure your ads appear only in profitable markets. Aggressive negative keyword filtering eliminates wasted spend, while ad group architecture is designed for maximum Quality Score and conversion alignment.",
  },
  {
    icon: MapPin,
    title: "Location-Based Targeting",
    desc: "Local advertising demands precision targeting. We implement city-level targeting for single-market businesses, radius-based strategies for service-area companies, and multi-location campaign architectures for brands operating across regions. Each targeting layer is calibrated to maximize local relevance — ensuring your ads reach the right audience in the right geography at the right time.",
  },
  {
    icon: FileText,
    title: "Ad Copy & Creative Optimization",
    desc: "Every ad is crafted with data-backed messaging that speaks to buyer intent. We run systematic A/B testing across headlines, descriptions, and extensions — refining messaging based on click-through rates, conversion data, and competitive positioning. Creative alignment ensures your ads stand out in crowded local markets while maintaining brand consistency across all campaign assets.",
  },
  {
    icon: Layers,
    title: "Landing Page Alignment",
    desc: "Ads are only half the equation. We ensure every campaign points to conversion-optimized landing pages with clear value propositions, streamlined lead forms, and fast load speeds that directly impact Quality Scores. Proper landing page alignment reduces bounce rates, increases conversion rates, and lowers your effective cost per acquisition.",
  },
  {
    icon: SlidersHorizontal,
    title: "Budget & Bid Management",
    desc: "We implement structured bid strategies that balance visibility with cost efficiency. Real-time cost-per-click monitoring, automated bid adjustments based on performance data, ROAS tracking at the campaign and ad group level, and budget pacing controls ensure your spend delivers maximum lead volume without overspending. Every dollar is accountable.",
  },
  {
    icon: LineChart,
    title: "Conversion Tracking & Analytics",
    desc: "Complete conversion infrastructure — call tracking with dynamic number insertion, form submission tracking, lead source attribution, and custom performance dashboards that show exactly which campaigns, keywords, and ads generate revenue. Without accurate tracking, optimization is blind. We ensure every conversion is captured, attributed, and analyzed.",
  },
];

const ServiceCoverage = () => (
  <section className="py-20 lg:py-28 bg-brand-light">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          What This Service Covers
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Six Pillars of Performance Advertising
        </h2>
        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          Each component is designed to maximize lead quality and minimize
          acquisition cost. Together, they form a scalable paid growth engine.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {coverageBlocks.map((block) => (
          <div
            key={block.title}
            className="p-7 lg:p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <block.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">
                {block.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {block.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══ STRATEGY WORKFLOW — 2 COL ═══ */
const StrategyWorkflow = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-elevated">
          <img
            src="/assets/ads-workflow.jpg"
            alt="Marketing team reviewing Google Ads campaign performance analytics and conversion data"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Our Execution Workflow
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Research. Architect. Launch. Optimize. Scale.
          </h2>
          <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
            <p>
              Every mypageAds engagement starts with deep market research —
              analyzing competitor ad strategies, keyword opportunity gaps, cost
              benchmarks, and audience behavior in your target markets. This
              intelligence informs campaign architecture: structured ad groups,
              precise geo-targeting, conversion-focused ad copy, and landing
              page alignment.
            </p>
            <p>
              After launch, continuous optimization drives performance forward.
              We analyze search term reports daily, adjust bids based on
              conversion data, refine ad copy through systematic A/B testing,
              and reallocate budget toward top-performing campaigns. Monthly
              performance reports provide complete transparency into spend,
              leads, cost-per-acquisition, and ROI.
            </p>
            <p>
              This is not a set-and-forget approach. It is a disciplined,
              data-driven optimization cycle designed to compound campaign
              performance month over month.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { icon: BarChart3, label: "Real-Time Tracking" },
              { icon: Zap, label: "Daily Optimization" },
              { icon: ShieldCheck, label: "Budget Accountability" },
              { icon: TrendingUp, label: "Scalable Growth" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ WHO SHOULD USE ═══ */
const WhoShouldUse = () => (
  <section className="py-20 lg:py-24 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Who Should Use mypageAds
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Built for Businesses That Need Leads Now
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            If you're{" "}
            <strong className="text-foreground">
              entering a competitive market
            </strong>{" "}
            where organic rankings will take months to build, mypageAds provides
            immediate top-of-page visibility while your SEO foundation develops.
            You don't wait for rankings — you capture leads from day one.
          </p>
          <p>
            <strong className="text-foreground">
              Businesses launching new locations
            </strong>{" "}
            face a cold-start problem: no reviews, no local authority, no
            organic presence. Paid campaigns bridge that gap instantly, driving
            calls and inquiries from your target service area while your local
            presence matures.
          </p>
          <p>
            For{" "}
            <strong className="text-foreground">
              service providers who need predictable customer acquisition
            </strong>{" "}
            — healthcare clinics filling appointment slots, legal firms
            generating case inquiries, home service companies booking jobs —
            mypageAds creates a consistent, measurable lead pipeline that you
            can scale up or down based on capacity.
          </p>
          <p>
            <strong className="text-foreground">
              Brands expanding across multiple cities
            </strong>{" "}
            benefit from our multi-location campaign architecture, which manages
            geo-targeted campaigns independently for each market while
            maintaining centralized budget control, reporting, and optimization
            oversight.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PERFORMANCE OUTCOMES ═══ */
const outcomes = [
  {
    icon: Target,
    label: "Increased Qualified Leads",
    desc: "More high-intent prospects reaching your business through precisely targeted campaigns.",
  },
  {
    icon: DollarSign,
    label: "Lower Cost Per Acquisition",
    desc: "Systematic optimization that reduces what you pay for each new customer or lead.",
  },
  {
    icon: MousePointerClick,
    label: "Higher Click-Through Rates",
    desc: "Compelling ad copy and precise targeting that outperform industry benchmarks.",
  },
  {
    icon: MapPin,
    label: "Stronger Local Market Presence",
    desc: "Dominant ad visibility in your target cities and service areas.",
  },
  {
    icon: PhoneCall,
    label: "More Tracked Calls & Inquiries",
    desc: "Every call, form submission, and conversion attributed to specific campaigns.",
  },
  {
    icon: TrendingUp,
    label: "Scalable Campaign Growth",
    desc: "Proven campaign frameworks that scale spend profitably as your business grows.",
  },
];

const PerformanceOutcomes = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Outcomes
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Performance-Driven Results That Matter
        </h2>
        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          Every campaign decision is tied to measurable business outcomes — not
          vanity metrics.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {outcomes.map((r) => (
          <div
            key={r.label}
            className="flex gap-4 p-6 rounded-xl bg-brand-light border border-border"
          >
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <r.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-heading font-bold text-foreground mb-1">
                {r.label}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {r.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══ DIFFERENTIATORS — DARK ═══ */
const differentiators = [
  {
    title: "Local Market Intelligence",
    desc: "We don't run campaigns in a vacuum. Every strategy is informed by local competitive analysis, regional search behavior patterns, and market-specific cost benchmarks. Understanding how people search in Noida versus Toronto — and what they expect to find — is the difference between wasted spend and profitable campaigns.",
  },
  {
    title: "Structured Campaign Architecture",
    desc: "Our campaigns are built with deliberate, scalable architecture — segmented by location, intent level, and service line. This structure enables granular optimization, prevents budget bleed between campaigns, and ensures every ad group serves a specific, measurable purpose.",
  },
  {
    title: "Continuous Optimization Discipline",
    desc: "Campaign launch is the starting point, not the finish line. Daily search term analysis, weekly bid adjustments, bi-weekly ad copy tests, and monthly strategy reviews ensure performance compounds over time. We optimize relentlessly because stagnant campaigns waste money.",
  },
  {
    title: "Transparent ROI Reporting",
    desc: "Monthly reports show exactly where your money went and what it produced — impressions, clicks, conversions, cost-per-lead, and return on ad spend. No hidden metrics, no vanity numbers. You see the same data we see, with clear explanations of what's working and what we're improving.",
  },
];

const Differentiators = () => (
  <section className="py-20 lg:py-28 bg-brand-slate-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Our Advantage
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground leading-tight">
          Why Our Paid Strategy Delivers Results
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {differentiators.map((d, i) => (
          <div
            key={d.title}
            className="p-7 lg:p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent font-heading">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-heading font-bold text-primary-foreground">
                {d.title}
              </h3>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              {d.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══ BOLD CTA ═══ */
const BoldCTA = () => (
  <section className="py-20 lg:py-24 bg-accent">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-accent-foreground leading-tight">
          Turn Ad Spend Into Measurable Growth
        </h2>
        <p className="text-accent-foreground/85 text-lg leading-relaxed max-w-2xl mx-auto">
          Every day without a structured paid strategy is another day your
          competitors capture the leads, calls, and customers that should be
          yours. Let's build campaigns that deliver real, trackable returns.
        </p>
        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 font-bold text-base px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link href="/contact">
              Start Your Ads Strategy
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PAGE ═══ */
export default function MypageAdsService() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <ServiceCoverage />
      <StrategyWorkflow />
      <WhoShouldUse />
      <PerformanceOutcomes />
      <Differentiators />
      <BoldCTA />
    </main>
  );
}
