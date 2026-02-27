import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  MapPin,
  Star,
  Globe,
  BarChart3,
  ShieldCheck,
  Target,
  FileText,
  Palette,
  Users,
  Settings,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MyPageSEO Platform Features | Local SEO Reporting Tools",
  description:
    "Explore MyPageSEO platform features including local rank tracking, GBP audits, citation monitoring, reputation tracking, search grid mapping, and white-labeled reporting.",
};

/* ═══ HERO ═══ */
const Hero = () => (
  <section className="relative min-h-[72vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/product-features-hero.jpg"
        alt="Local SEO analytics dashboard showing ranking charts, geographic grid maps, citation indicators, and review analytics"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>
    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-7">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 text-sm text-accent font-semibold">
          <BarChart3 className="w-4 h-4" />
          Product — Features
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
          Full Visibility. Structured Reporting.{" "}
          <span className="text-accent">Local SEO Precision.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
          The MyPageSEO platform provides comprehensive local SEO tracking,
          auditing, and white-labeled reporting — built for agencies managing
          client portfolios and businesses seeking structured performance
          insights.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Start Using MyPageSEO
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
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
          Platform Overview
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          One Structured System for Local SEO Performance
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            The MyPageSEO platform is designed to centralize local search
            performance insights into one structured system. Rather than piecing
            together data from multiple sources, agencies and businesses access
            precision tracking, performance transparency, and actionable
            reporting from a single dashboard.
          </p>
          <p>
            Every feature within the platform serves a specific purpose —
            delivering measurable insights that inform strategy, validate
            execution, and support confident decision-making across local SEO
            campaigns.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ FEATURE BREAKDOWN ═══ */
const features = [
  {
    icon: Search,
    title: "Local Rank Tracker",
    desc: "Track targeted keywords across specific geographic locations with granular city-level precision. The Local Rank Tracker captures performance trends over time, enabling competitive benchmarking and visibility comparisons against direct competitors. Because local rankings vary across neighborhoods — a business ranking #1 in one area may rank #8 three miles away — this tool captures that geographic nuance, providing a realistic view of search visibility rather than a single, misleading average position.",
  },
  {
    icon: ShieldCheck,
    title: "Google Business Profile Audit",
    desc: "Run comprehensive audits that assess listing completeness, primary and secondary category alignment, optimization signals, content freshness, and key performance indicators. The audit generates structured insights highlighting specific improvement opportunities — from missing attributes and underutilized features to content gaps and competitive positioning. Rather than presenting a pass/fail score, the audit provides actionable recommendations prioritized by potential impact on local visibility.",
  },
  {
    icon: Star,
    title: "Reputation Monitoring",
    desc: "Centralize tracking of reviews, ratings, and customer sentiment across major review platforms. Monitor rating trends over time, track review velocity to identify momentum shifts, and maintain response tracking to ensure consistent engagement. Reputation signals directly influence local rankings and consumer trust — this module ensures agencies and businesses maintain full visibility into how their online credibility is evolving and where attention is needed.",
  },
  {
    icon: Globe,
    title: "Citation Tracker",
    desc: "Monitor business listings across directories and aggregators to ensure NAP (Name, Address, Phone) consistency. The Citation Tracker detects inconsistencies that can erode local search trust signals, generates structured reports on citation health, and tracks visibility alignment across the directory ecosystem. Consistent citations reinforce search engine confidence in business legitimacy — this tool ensures that foundation remains solid.",
  },
  {
    icon: MapPin,
    title: "Local Search Grid",
    desc: "Visualize ranking positions across different geographic points within a city through an intuitive grid map. The Local Search Grid reveals how ranking strength varies across service areas, identifies zones of competitive weakness, and highlights where competitors dominate. This geographic perspective is essential for businesses serving multiple neighborhoods or service areas — it transforms abstract ranking data into spatial intelligence that informs targeted optimization.",
  },
  {
    icon: Target,
    title: "Local Search Audit",
    desc: "Evaluate local on-page factors, listing accuracy, and structured data signals with a comprehensive audit framework. The Local Search Audit assesses NAP consistency across web properties, reviews on-page local optimization signals, evaluates schema markup implementation, and identifies technical factors affecting local visibility. Every insight is presented as an actionable recommendation — not raw data requiring interpretation.",
  },
];

const FeatureBreakdown = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Core Capabilities
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Detailed Feature Breakdown
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-7 lg:p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-shadow"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">
                {f.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══ WHITE LABEL REPORTING ═══ */
const WhiteLabel = () => (
  <section className="py-20 lg:py-24 bg-brand-light">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <Palette className="w-5 h-5 text-accent" />
          </div>
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Branding
          </p>
        </div>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          White Label Reporting System
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            Agencies can fully customize reports with their own branding —
            including logo, agency name, color scheme, and contact details.
            Every report generated through the platform can be white-labeled,
            transforming raw performance data into professionally branded
            deliverables that reinforce agency expertise.
          </p>
          <p>
            Unique branded URLs allow agencies to share reports with clients
            through custom links that maintain agency identity throughout the
            experience. Clients access structured performance insights without
            ever seeing the backend platform — enabling seamless, professional
            presentation that elevates how agencies communicate value and build
            trust.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ GBP SYNC ═══ */
const GBPSync = () => (
  <section className="py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <RefreshCw className="w-5 h-5 text-primary" />
          </div>
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Integration
          </p>
        </div>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Seamless Google Business Profile Sync
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            Agencies can synchronize client Google Business Profiles directly
            within the platform to retrieve live data — including listing
            details, performance metrics, review activity, and optimization
            signals. This synchronization ensures that every report reflects
            current, accurate information rather than outdated snapshots.
          </p>
          <p>
            GBP sync eliminates the need for manual data collection or
            third-party export tools. Once connected, data flows continuously
            into the reporting system, enabling agencies to monitor profile
            health, track changes over time, and identify optimization
            opportunities as they emerge — all from one centralized dashboard.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ WORKFLOW — 2 COL ═══ */
const workflowSteps = [
  {
    icon: Settings,
    label: "Account Setup",
    desc: "Registration, onboarding, and workspace configuration",
  },
  {
    icon: Users,
    label: "Client Profile Management",
    desc: "Create and organize client profiles with structured data",
  },
  {
    icon: RefreshCw,
    label: "Data Synchronization",
    desc: "Sync Google Business Profiles for live performance data",
  },
  {
    icon: FileText,
    label: "Report Generation",
    desc: "Generate comprehensive local SEO performance reports",
  },
  {
    icon: Palette,
    label: "Customization & Sharing",
    desc: "White-label branding and branded URL sharing",
  },
  {
    icon: BarChart3,
    label: "Performance Tracking",
    desc: "Ongoing monitoring, trend analysis, and refinement",
  },
];

const Workflow = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-elevated">
          <img
            src="/assets/product-features-workflow.jpg"
            alt="Professional reviewing structured SEO performance reports on laptop"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Streamlined Process
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Built for Structured Workflow
          </h2>
          <p className="text-muted-foreground text-[1.05rem] leading-relaxed">
            The platform workflow is designed for efficiency, intuition, and
            clarity. From initial setup to ongoing performance tracking, every
            step is structured to minimize friction and maximize insight
            delivery.
          </p>
          <div className="space-y-4 pt-2">
            {workflowSteps.map((s, i) => (
              <div key={s.label} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-foreground">
                    {s.label}
                  </h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ DIFFERENTIATORS — DARK ═══ */
const differentiators = [
  {
    title: "Local Specialization",
    desc: "Every feature is purpose-built for local search signals. No generic SEO modules dilute the platform's focus. This depth of specialization delivers richer, more actionable local insights than any general-purpose tool.",
  },
  {
    title: "Operational Efficiency",
    desc: "Automated data synchronization, streamlined report generation, and centralized client management eliminate hours of manual work. Agencies reinvest that time into strategy and client growth.",
  },
  {
    title: "Agency Empowerment",
    desc: "White-label capabilities, multi-client dashboards, and branded URLs elevate how agencies present performance insights. The platform is built to make agencies look professional, organized, and data-driven.",
  },
  {
    title: "Performance Transparency",
    desc: "Every metric is contextualized, every trend is tracked, and every recommendation is actionable. The platform transforms complex local SEO data into structured intelligence that supports confident decisions.",
  },
];

const Differentiators = () => (
  <section className="py-20 lg:py-28 bg-brand-slate-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Platform Advantage
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground leading-tight">
          Why These Features Matter
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
          Gain Structured Visibility Into Local Performance
        </h2>
        <p className="text-accent-foreground/85 text-lg leading-relaxed max-w-2xl mx-auto">
          Track rankings, audit profiles, monitor reputation, and generate
          white-labeled reports — all from one platform built exclusively for
          local SEO.
        </p>
        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 font-bold text-base px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link href="/contact">
              Get Started with MyPageSEO
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PAGE ═══ */
export default function ProductFeatures() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <FeatureBreakdown />
      <WhiteLabel />
      <GBPSync />
      <Workflow />
      <Differentiators />
      <BoldCTA />
    </main>
  );
}
