import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Code2,
  Zap,
  ShieldCheck,
  TrendingUp,
  Target,
  Eye,
  BarChart3,
  MapPin,
  MousePointerClick,
  Layers,
  Lock,
  Monitor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "mypageSites | SEO-Ready Website Development | MyPageSEO",
  description:
    "mypageSites builds fast, SEO-ready, mobile-first websites engineered for local search visibility, structured architecture, and measurable conversion growth across India and North America.",
};

/* ═══ HERO ═══ */
const Hero = () => (
  <section className="relative min-h-[72vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/sites-service-hero.jpg"
        alt="Modern website displayed on desktop and mobile with PageSpeed Insights performance score of 98"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>
    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-7">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 text-sm text-accent font-semibold">
          <Monitor className="w-4 h-4" />
          Development Service — SEO-Ready Websites
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
          Websites Engineered for{" "}
          <span className="text-accent">Local Growth & Visibility.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
          mypageSites delivers SEO-ready, fast-loading, mobile-first websites
          designed to rank in local search and convert visitors into inquiries —
          across India and North America.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Build My SEO-Ready Website
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link href="/contact">Request a Website Consultation</Link>
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
          What Is mypageSites
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Your Website Is the Structural Foundation of Local Visibility
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            A website is not a digital brochure. It is the structural foundation
            upon which every local SEO signal, every conversion pathway, and
            every ranking opportunity is built. Without SEO-ready architecture,
            proper schema integration, fast load speeds, and mobile-first
            responsiveness, your business is invisible to the search algorithms
            that determine local visibility.
          </p>
          <p>
            mypageSites focuses on technical SEO architecture, structured
            content hierarchy, schema integration, Core Web Vitals compliance,
            and conversion flow design. Every design decision is driven by
            search performance data and user behavior analysis — not just
            aesthetics. The result is a website that ranks, loads fast, converts
            visitors, and scales as your business grows.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ SERVICE COVERAGE BLOCKS ═══ */
const coverageBlocks = [
  {
    icon: Code2,
    title: "SEO-First Architecture",
    desc: "Every website we build starts with search architecture — clean, semantic URL structures that communicate page hierarchy to crawlers, strategic internal linking that distributes authority across your most important pages, keyword-aligned page hierarchies that match how your customers search, and crawl-friendly frameworks that ensure Google can efficiently discover and index every page. Architecture decisions made at build time determine ranking potential for years.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First & Speed Optimization",
    desc: "Google uses mobile-first indexing and Core Web Vitals as ranking factors. We build with mobile responsiveness as the foundation — not an afterthought. Performance optimization includes advanced image compression, lazy loading, efficient caching strategies, minified assets, and server-side rendering where appropriate. Every millisecond of load time impacts both rankings and user experience. We target sub-2-second load times consistently.",
  },
  {
    icon: Globe,
    title: "Local Schema & Structured Data",
    desc: "Schema markup tells search engines exactly what your business does, where you operate, and what services you offer. We implement comprehensive LocalBusiness schema, Service schema, FAQ schema, and multi-location structured data that improves rich result eligibility, enhances search listing appearance, and strengthens Google's understanding of your business relevance to local search queries.",
  },
  {
    icon: Target,
    title: "Conversion-Focused Design",
    desc: "Traffic without conversion is wasted ranking power. We design with strategic call-to-action placement based on user behavior data, optimized inquiry forms with minimal friction, prominent click-to-call buttons for mobile users, trust elements positioned at decision points, and clear service navigation that guides visitors from landing to action. Every design element serves the conversion funnel.",
  },
  {
    icon: Layers,
    title: "Multi-Location Structure",
    desc: "Businesses operating across multiple cities need scalable page architecture — not duplicate content. We build location-specific landing pages with unique, locally relevant content, city-targeted keyword optimization, and location-specific schema markup. Each location page is a standalone ranking asset designed to capture search demand in its specific geographic market.",
  },
  {
    icon: Lock,
    title: "Security & Technical Stability",
    desc: "SSL integration is mandatory for both rankings and user trust. We implement HTTPS across all pages, configure secure hosting environments, establish automated backup systems, and set up technical monitoring that detects issues before they impact performance. A secure, stable website builds credibility with both search engines and visitors.",
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
          Six Pillars of SEO-Ready Web Development
        </h2>
        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          Each pillar addresses a critical dimension of website performance.
          Together, they create a digital foundation engineered for local
          ranking dominance and lead generation.
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
            src="/assets/sites-workflow.jpg"
            alt="Website performance audit showing SEO health scores, Core Web Vitals, and Lighthouse report results"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Our Development Workflow
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Discover. Architect. Build. Test. Launch. Track.
          </h2>
          <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
            <p>
              Every mypageSites project begins with discovery — understanding
              your business model, target markets, competitive landscape, and
              conversion objectives. This informs the architecture plan: page
              hierarchy, URL structure, content mapping, schema requirements,
              and technical specifications.
            </p>
            <p>
              Design alignment ensures visual identity matches brand standards
              while serving conversion objectives. Technical implementation
              follows structured development sprints with SEO integration at
              every stage — not bolted on at the end. Pre-launch testing covers
              cross-device responsiveness, performance benchmarks, schema
              validation, and crawlability verification.
            </p>
            <p>
              This is a strategic build process — not a template deployment.
              Post-launch performance tracking monitors Core Web Vitals, ranking
              movements, and conversion metrics to ensure the site delivers
              measurable results.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { icon: Code2, label: "SEO-Integrated Build" },
              { icon: Zap, label: "Performance Testing" },
              { icon: ShieldCheck, label: "Security Hardening" },
              { icon: BarChart3, label: "Post-Launch Tracking" },
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

/* ═══ WHO THIS IS FOR ═══ */
const WhoIsItFor = () => (
  <section className="py-20 lg:py-24 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Who This Service Is Designed For
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          For Businesses That Need a Website Built to Perform
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            If you're a{" "}
            <strong className="text-foreground">
              new business launching your first digital presence
            </strong>
            , the architecture decisions made during your initial build will
            determine your ranking potential for years. mypageSites ensures your
            foundation is built right from day one — SEO-ready, fast, and
            conversion-optimized.
          </p>
          <p>
            <strong className="text-foreground">
              Companies redesigning outdated or slow websites
            </strong>{" "}
            face a critical challenge: migrating existing authority while
            upgrading technical infrastructure. We handle URL migration
            planning, redirect mapping, and authority preservation alongside the
            complete technical rebuild.
          </p>
          <p>
            For{" "}
            <strong className="text-foreground">multi-location brands</strong>{" "}
            needing scalable structure, we build page architectures that support
            dozens or hundreds of location-specific landing pages — each
            optimized independently for its geographic market while maintaining
            brand consistency and centralized management.
          </p>
          <p>
            Whether you're a{" "}
            <strong className="text-foreground">
              service provider in a high-visibility local market
            </strong>{" "}
            who needs every technical advantage, or a{" "}
            <strong className="text-foreground">
              business struggling with low website conversion rates
            </strong>{" "}
            despite decent traffic, mypageSites delivers the technical
            foundation that turns your website from a cost center into a
            lead-generating asset.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PERFORMANCE IMPACT ═══ */
const impactItems = [
  {
    icon: TrendingUp,
    label: "Improved Search Rankings",
    desc: "SEO-first architecture that gives search engines clear signals about your relevance and authority.",
  },
  {
    icon: Zap,
    label: "Faster Load Times",
    desc: "Sub-2-second page loads that satisfy Core Web Vitals and keep visitors engaged.",
  },
  {
    icon: Eye,
    label: "Reduced Bounce Rates",
    desc: "Fast, well-structured pages that match user intent and encourage deeper exploration.",
  },
  {
    icon: MousePointerClick,
    label: "Higher Lead Conversions",
    desc: "Conversion-optimized design that turns more visitors into calls, form fills, and inquiries.",
  },
  {
    icon: MapPin,
    label: "Stronger Local Presence",
    desc: "Schema markup and location pages that strengthen your visibility in local search results.",
  },
  {
    icon: ShieldCheck,
    label: "Technical Reliability",
    desc: "Secure, stable infrastructure that builds trust with both search engines and visitors.",
  },
];

const PerformanceImpact = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Performance Impact
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Measurable Website Performance Outcomes
        </h2>
        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          Every technical decision is tied to measurable performance
          improvements — speed, rankings, engagement, and conversions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {impactItems.map((r) => (
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
    title: "SEO-Integrated Development",
    desc: "SEO is not added after the website is built — it is integrated into every development decision from architecture planning to deployment. URL structures, internal linking, schema markup, heading hierarchies, and content placement are all determined by search strategy before a single line of code is written. This foundational approach produces websites that rank from launch.",
  },
  {
    title: "Technical Precision",
    desc: "We obsess over the technical details that separate high-performing websites from average ones — render-blocking resource elimination, efficient DOM structures, optimized critical rendering paths, proper caching headers, and image delivery optimization. These micro-optimizations compound into significant performance advantages that directly impact rankings and user experience.",
  },
  {
    title: "Conversion Psychology",
    desc: "Design decisions are informed by user behavior data and conversion psychology — not personal preferences. CTA placement, color contrast, form length, trust signal positioning, and content flow are all determined by what drives action. Every page is designed to move visitors from awareness to inquiry with minimum friction.",
  },
  {
    title: "Long-Term Scalability",
    desc: "Websites built on rigid templates break when businesses grow. We build scalable architectures that accommodate new service pages, additional locations, blog content expansion, and feature integrations without requiring structural overhauls. Your website grows with your business — not against it.",
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
          Why Our Websites Perform
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
          Build a Website That Actually Drives Growth
        </h2>
        <p className="text-accent-foreground/85 text-lg leading-relaxed max-w-2xl mx-auto">
          Your website is either working for your business or against it. A
          slow, unstructured, SEO-blind website costs you rankings, leads, and
          revenue every single day. Let's build one that performs.
        </p>
        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 font-bold text-base px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link href="/contact">
              Start Your Website Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PAGE ═══ */
export default function MypageSitesService() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <ServiceCoverage />
      <StrategyWorkflow />
      <WhoIsItFor />
      <PerformanceImpact />
      <Differentiators />
      <BoldCTA />
    </main>
  );
}
