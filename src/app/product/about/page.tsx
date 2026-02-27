import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  Target,
  Globe,
  Star,
  Clock,
  BarChart3,
  Eye,
  Palette,
  Layers,
  Users,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MyPageSEO Platform | Local SEO Reporting & Transparency",
  description:
    "MyPageSEO is a structured local SEO reporting platform built for agencies and businesses. Centralized rank tracking, citation monitoring, review management, and white-labeled reports.",
};

/* ═══ HERO ═══ */
const Hero = () => (
  <section className="relative min-h-[72vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/product-about-hero.jpg"
        alt="Local SEO ranking analytics displayed on laptop and tablet showing maps grid, review ratings, and performance data"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>
    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-7">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 text-sm text-accent font-semibold">
          <BarChart3 className="w-4 h-4" />
          Product — About the Platform
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
          Clarity & Structure in{" "}
          <span className="text-accent">Local SEO Reporting.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
          The MyPageSEO platform was built specifically to bring transparency,
          measurable insights, and white-labeled reporting to local SEO
          performance tracking — for agencies and businesses alike.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="hero" size="lg" asChild>
            <Link href="/product/features">
              Explore Platform Features
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
          Why We Built This
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Local SEO Performance Demanded Better Reporting
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            Local SEO performance is inherently fragmented. Rankings vary from
            one neighborhood to another. Citations become inconsistent as
            directories update independently. Reviews fluctuate across platforms
            without centralized visibility. Google Business Profile health
            degrades without continuous monitoring. And through all of this,
            reporting often lacks the clarity needed to make confident
            decisions.
          </p>
          <p>
            MyPageSEO was developed to centralize these fragmented insights into
            a single, structured reporting system. The platform consolidates
            local rank tracking, citation monitoring, review management, GBP
            audits, and geographic grid analysis into unified reports — designed
            for both agencies managing client portfolios and businesses seeking
            direct visibility into their own local performance.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ THE PROBLEM IT SOLVES ═══ */
const problems = [
  {
    icon: MapPin,
    text: "Lack of transparent ranking insights across different geographic areas within a city",
  },
  {
    icon: Target,
    text: "Difficulty tracking Google Business Profile performance consistently over time",
  },
  {
    icon: Globe,
    text: "Inconsistent citation data scattered across hundreds of directories and aggregators",
  },
  {
    icon: Star,
    text: "Scattered review monitoring without centralized sentiment analysis",
  },
  {
    icon: Clock,
    text: "Time-consuming manual reporting that drains agency resources every month",
  },
];

const ProblemSection = () => (
  <section className="py-20 lg:py-24 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          The Problem It Solves
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Local SEO Reporting Was Broken
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            Agencies and businesses alike face the same fundamental challenge:
            local SEO performance data is scattered, inconsistent, and difficult
            to act on. Without structured reporting, decision-making relies on
            assumptions rather than evidence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          {problems.map((p) => (
            <div
              key={p.text}
              className="flex gap-3 p-5 rounded-xl bg-card border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-[1.05rem] leading-relaxed pt-2">
          Structured, centralized reporting eliminates this confusion. When
          every local SEO signal is tracked, organized, and presented clearly,
          agencies communicate performance with confidence and businesses make
          informed growth decisions.
        </p>
      </div>
    </div>
  </section>
);

/* ═══ BUILT FOR LOCAL SEO ═══ */
const BuiltForLocal = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Specialization
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Built Specifically for Local SEO
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            Unlike general-purpose SEO platforms that spread functionality
            across enterprise SEO, e-commerce optimization, technical auditing,
            and content analysis, MyPageSEO focuses exclusively on local search
            signals. Every feature, every metric, and every report module is
            designed around the specific factors that determine local visibility
            — proximity, relevance, prominence, and reputation.
          </p>
          <p>
            The platform includes{" "}
            <strong className="text-foreground">local rank tracking</strong>{" "}
            with geographic precision,{" "}
            <strong className="text-foreground">
              Google Business Profile audits
            </strong>{" "}
            that assess every optimization dimension,{" "}
            <strong className="text-foreground">reputation monitoring</strong>{" "}
            with sentiment analysis,{" "}
            <strong className="text-foreground">citation tracking</strong>{" "}
            across 100+ directories, and{" "}
            <strong className="text-foreground">geographic grid mapping</strong>{" "}
            that visualizes ranking positions across different areas within a
            city.
          </p>
          <p>
            This is not a generic SEO dashboard with a local filter added. It is
            a purpose-built reporting engine where every feature exists to serve
            one objective: giving agencies and businesses structured clarity
            over local search performance.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PHILOSOPHY — 2 COL ═══ */
const Philosophy = () => (
  <section className="py-20 lg:py-28 bg-brand-light">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-elevated">
          <img
            src="/assets/product-about-philosophy.jpg"
            alt="Professional reviewing white-labeled SEO performance report with branded charts and ranking data"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Platform Philosophy
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Clarity. Structure. Empowerment.
          </h2>
          <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
            <p>
              The core philosophy behind MyPageSEO is simple: local SEO
              reporting should be clear, structured, and actionable. Data
              without structure is noise. The platform transforms fragmented
              local search data into organized, prioritized insights that
              support confident decision-making.
            </p>
            <p>
              For agencies, this means the ability to present clean,
              professionally branded reports that reinforce expertise and build
              client trust. White-labeled reporting elevates how agencies
              communicate performance — turning raw data into professional
              deliverables.
            </p>
            <p>
              For businesses, this means direct access to their own local
              performance metrics — rankings, reviews, citations, and GBP health
              — presented in formats designed for business decision-makers, not
              SEO specialists. Understanding performance shouldn't require
              technical expertise.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { icon: Eye, label: "Transparent Insights" },
              { icon: Palette, label: "White Label Reports" },
              { icon: Layers, label: "Structured Data" },
              { icon: Users, label: "Multi-User Design" },
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

/* ═══ DESIGNED FOR TWO USERS ═══ */
const DesignedForUsers = () => (
  <section className="py-20 lg:py-24 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Two User Types
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Designed for Two Types of Users
        </h2>
        <div className="space-y-8 pt-2">
          <div className="p-7 lg:p-8 rounded-xl bg-card border border-border shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">
                For Agencies
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Agencies use MyPageSEO to manage multiple client profiles from a
              centralized dashboard. Google Business Profile synchronization
              pulls live data automatically. White-labeled report generation
              transforms platform insights into professionally branded
              deliverables with your agency's logo, colors, and contact details.
              Performance tracking across all clients is unified — enabling
              pattern recognition, resource allocation, and proactive client
              communication. The platform is designed to save agencies hours of
              manual reporting while elevating the professionalism of every
              client interaction.
            </p>
          </div>
          <div className="p-7 lg:p-8 rounded-xl bg-card border border-border shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">
                For Businesses
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Businesses use MyPageSEO to monitor their own local search
              performance directly — without relying solely on agency updates or
              third-party reports. Ranking insights, review metrics, citation
              consistency, and Google Business Profile health are presented in
              clear, structured dashboards designed for business owners and
              marketing managers. Understanding your local visibility shouldn't
              require SEO expertise. The platform makes performance data
              accessible, understandable, and actionable for every business
              stakeholder.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PLATFORM VISION ═══ */
const PlatformVision = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Looking Forward
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Platform Vision
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            The long-term vision for MyPageSEO is to bring transparency,
            accountability, and structured performance measurement into every
            aspect of local SEO. Too many businesses invest in local search
            optimization without clear visibility into what's working, what's
            not, and where resources should be directed.
          </p>
          <p>
            We believe that local SEO performance should be simple to
            understand, structured in presentation, and grounded in data-backed
            evidence. The platform will continue to evolve around these
            principles — adding depth to existing modules, expanding geographic
            coverage, and refining reporting frameworks to ensure every insight
            is clear, every metric is actionable, and every report supports
            confident decision-making.
          </p>
          <p>
            Simplicity is not simplification. It is the discipline of presenting
            complex performance data in structured, accessible formats that
            drive better decisions. That discipline defines everything we build.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ DIFFERENTIATORS — DARK ═══ */
const differentiators = [
  {
    title: "Local-Only Focus",
    desc: "Every feature is built around local search signals — proximity, relevance, prominence, and reputation. No generic SEO features dilute the platform's purpose. This specialization means deeper, more actionable local insights than any general-purpose tool can provide.",
  },
  {
    title: "Agency Workflow Alignment",
    desc: "The platform is architecturally designed for how agencies actually work — multi-client management, centralized dashboards, scalable reporting, and team collaboration. Agency operations don't adapt to the tool. The tool is built around agency operations.",
  },
  {
    title: "White Label Capabilities",
    desc: "Full branding customization across reports, dashboards, and client-facing URLs ensures your agency identity is front and center. White labeling is a core capability — not an afterthought — elevating professional positioning with every client deliverable.",
  },
  {
    title: "Structured Reporting Architecture",
    desc: "Reports are designed for decision-making, not data overload. Every metric is contextualized, every insight is prioritized, and every recommendation is actionable. The platform transforms raw data into structured intelligence that drives better local SEO outcomes.",
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
          What Makes MyPageSEO Different
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
          Gain Structured Clarity Over Local Performance
        </h2>
        <p className="text-accent-foreground/85 text-lg leading-relaxed max-w-2xl mx-auto">
          Stop relying on fragmented data and manual reports. MyPageSEO brings
          structure, transparency, and actionable insights to every dimension of
          local SEO performance.
        </p>
        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 font-bold text-base px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link href="/product">
              See How the Platform Works
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PAGE ═══ */
export default function ProductAbout() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <ProblemSection />
      <BuiltForLocal />
      <Philosophy />
      <DesignedForUsers />
      <PlatformVision />
      <Differentiators />
      <BoldCTA />
    </main>
  );
}
