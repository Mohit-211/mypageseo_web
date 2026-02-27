import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  MapPin,
  FileText,
  Star,
  Globe,
  Code2,
  BarChart3,
  Zap,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Target,
  PhoneCall,
  Navigation,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "mypageSEO | Local SEO Service | MyPageSEO",
  description:
    "mypageSEO delivers structured local search optimization, Google Business Profile management, citation alignment, and map pack ranking strategies across India and North America.",
};

/* ═══ HERO ═══ */
const Hero = () => (
  <section className="relative min-h-[72vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/seo-service-hero.jpg"
        alt="Google Maps local search dominance with glowing business location pins and ranking analytics"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>
    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-7">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 text-sm text-accent font-semibold">
          <MapPin className="w-4 h-4" />
          Core Service — Local SEO
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
          Map Pack Dominance.{" "}
          <span className="text-accent">Total Local Visibility Control.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
          mypageSEO focuses on ranking your business in Google's local pack,
          Google Maps, and geographically targeted search queries — driving
          calls, directions, and inquiries across India and North America.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Get a Free Local SEO Audit
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link href="/contact">Talk to a Local SEO Expert</Link>
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
          What Is mypageSEO
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Precision-Engineered Local Search Optimization
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            mypageSEO is our core local search engine optimization service —
            built specifically for businesses that need to rank in Google's
            local map pack, Google Maps results, and geo-targeted organic
            queries. This service targets every signal that Google uses to
            determine local relevance: search intent alignment, proximity
            signals, business relevance indicators, authority signals, NAP
            consistency, and Google Business Profile optimization.
          </p>
          <p>
            Ranking in local search is not accidental. It requires structured
            technical optimization, data-backed keyword targeting aligned to
            real local search behavior, citation alignment across 100+
            directories and aggregators, systematic review growth strategies,
            and continuous refinement based on ranking performance data.
            mypageSEO delivers all of this through a disciplined execution
            framework — not guesswork.
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
    title: "Local Keyword & Intent Mapping",
    desc: "We perform deep geographic keyword research that goes beyond generic volume analysis. This includes neighborhood-level targeting, service-area mapping across your operational radius, competitor gap analysis to identify underserved keyword opportunities, and intent classification to distinguish between informational, navigational, and transactional local queries. The result is a keyword architecture that precisely matches how your customers actually search — not how agencies assume they do.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    desc: "Your GBP is the single most influential factor in local map rankings. We execute complete listing optimization — primary and secondary category alignment, service and product configuration, attribute selection, media optimization with geo-tagged images, strategic post scheduling, Q&A population, and structured update routines. Every element is tuned for maximum visibility in both the local pack and Google Maps discovery results.",
  },
  {
    icon: Globe,
    title: "NAP & Citation Consistency",
    desc: "Inconsistent Name, Address, and Phone data across the web is one of the most common — and most damaging — local ranking issues. We conduct comprehensive citation audits, identify and correct inconsistencies across 100+ directories, data aggregators, and industry platforms, build structured citations on authoritative local sources, and continuously monitor for data drift. Clean, consistent citations reinforce Google's confidence in your business legitimacy.",
  },
  {
    icon: Target,
    title: "Local Authority & Link Signals",
    desc: "Local authority is built through contextually relevant link signals from geographically and topically aligned sources. We develop local link acquisition strategies that include business associations, community partnerships, local media coverage, sponsorship opportunities, and niche directory placements. Every link signal is evaluated for geographic relevance, domain authority, and contextual fit — not just volume.",
  },
  {
    icon: Star,
    title: "Review & Engagement Strategy",
    desc: "Reviews directly influence both local ranking positions and click-through conversion rates. We implement structured review acquisition systems — including request workflows, timing optimization, and platform diversification. Our response strategy covers positive reinforcement, professional handling of negative feedback, and sentiment monitoring. Higher review velocity and improved star ratings translate directly into stronger rankings and more conversions.",
  },
  {
    icon: Code2,
    title: "On-Page Local Optimization",
    desc: "On-page signals must explicitly communicate local relevance to search engines. We implement LocalBusiness schema markup, create location-specific landing pages optimized for geo-modified keywords, build structured internal linking architectures that reinforce geographic relevance, and ensure technical alignment — mobile responsiveness, Core Web Vitals compliance, and crawlability. Every on-page element works together to strengthen your local search footprint.",
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
          Six Pillars of Local Search Optimization
        </h2>
        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          Each component targets a specific ranking signal. Together, they
          create a comprehensive local visibility system that compounds over
          time.
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
            src="/assets/strategy-session.jpg"
            alt="MyPageSEO team reviewing local search ranking performance data and analytics dashboards"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Our Execution Workflow
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Audit. Implement. Track. Refine. Scale.
          </h2>
          <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
            <p>
              Every mypageSEO engagement begins with a comprehensive local SEO
              audit — analyzing your Google Business Profile health, citation
              accuracy, keyword positioning, competitive landscape, review
              profile, and website technical signals. This audit produces a
              clear baseline and identifies every optimization opportunity.
            </p>
            <p>
              From there, we build a structured implementation roadmap —
              prioritizing optimizations by impact potential and executing
              methodically. Ongoing performance monitoring tracks ranking
              movements, call volume, direction requests, review velocity, and
              citation health. Monthly reports deliver complete transparency
              into what's working and what we're refining.
            </p>
            <p>
              This is not a one-time setup. It is an ongoing performance
              optimization system designed to compound your local visibility
              month over month.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { icon: BarChart3, label: "Performance Tracking" },
              { icon: FileText, label: "Monthly Reporting" },
              { icon: Zap, label: "Continuous Refinement" },
              { icon: ShieldCheck, label: "Transparent Process" },
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
          Who This Is For
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Designed for Businesses That Depend on Local Visibility
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            mypageSEO is built for businesses whose revenue depends on being
            found locally. If you're a{" "}
            <strong className="text-foreground">
              single-location business
            </strong>{" "}
            — a dental clinic, law firm, restaurant, or retail store — competing
            for visibility in your immediate neighborhood, this service ensures
            you appear in the top local results when customers search for what
            you offer.
          </p>
          <p>
            For{" "}
            <strong className="text-foreground">service-area businesses</strong>{" "}
            — plumbers, electricians, cleaning services, contractors — that
            cover a wider geographic region without a storefront customers
            visit, we optimize your visibility across your entire operational
            radius, ensuring you capture leads from every area you serve.
          </p>
          <p>
            <strong className="text-foreground">Multi-location brands</strong>{" "}
            face a different challenge: maintaining consistent optimization
            across dozens or hundreds of locations, each with unique competitive
            dynamics. We build scalable local SEO systems that manage each
            location individually while maintaining brand-level consistency.
          </p>
          <p>
            Whether you're struggling with inconsistent map visibility, losing
            ground to competitors who rank above you, or entering a new
            competitive local market — mypageSEO provides the structured
            optimization framework needed to win.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ MEASURABLE RESULTS ═══ */
const results = [
  {
    icon: Eye,
    label: "Increased Map Impressions",
    desc: "More searchers seeing your business in Google Maps and local pack results.",
  },
  {
    icon: TrendingUp,
    label: "Higher Ranking Positions",
    desc: "Top-3 local pack placement for high-intent, high-value target keywords.",
  },
  {
    icon: Navigation,
    label: "More Direction Requests",
    desc: "Increased foot traffic signals from Google Maps driving real store visits.",
  },
  {
    icon: PhoneCall,
    label: "Higher Call Volume",
    desc: "More direct phone calls from search results — tracked and measurable.",
  },
  {
    icon: Star,
    label: "Improved Review Ratings",
    desc: "Better star ratings and higher review velocity building trust and conversion.",
  },
  {
    icon: Globe,
    label: "Stronger Geographic Dominance",
    desc: "Expanded visibility across your entire service area and target neighborhoods.",
  },
];

const MeasurableResults = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Outcomes
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Measurable Results That Matter
        </h2>
        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          Every optimization we execute is tied to business outcomes you can
          track, measure, and tie directly to revenue growth.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {results.map((r) => (
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
    title: "Local-Only Focus",
    desc: "We don't split attention across enterprise SEO, e-commerce optimization, or content marketing at scale. Local search is our entire discipline — every methodology, tool, and team member is purpose-built for one objective: making local businesses dominate their geographic market.",
  },
  {
    title: "Data-Driven Optimization",
    desc: "Every decision is backed by ranking data, search volume analysis, competitive intelligence, and conversion tracking. We don't rely on assumptions or outdated best practices. We analyze real performance data, identify opportunities, and execute optimizations that move rankings.",
  },
  {
    title: "Transparent Reporting",
    desc: "Monthly reports include detailed ranking position tracking, call volume data, citation audit results, review velocity trends, and clear next-step recommendations. You always know exactly what we're doing, why we're doing it, and what impact it's having.",
  },
  {
    title: "Long-Term Ranking Stability",
    desc: "We don't chase algorithm shortcuts that produce temporary spikes. Our strategies build sustainable local authority through consistent citation development, ongoing optimization, reputation building, and technical refinement that compounds over time.",
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
          Why Our Local SEO Approach Wins
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
          Ready to Rank Higher in Your Local Market?
        </h2>
        <p className="text-accent-foreground/85 text-lg leading-relaxed max-w-2xl mx-auto">
          Your competitors are already optimizing for local search. Every day
          without a structured local SEO strategy is another day they capture
          the calls, leads, and customers that should be yours. Let's change
          that.
        </p>
        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 font-bold text-base px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link href="/contact">
              Request Your Local SEO Strategy
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PAGE ═══ */
export default function MypageSEOService() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <ServiceCoverage />
      <StrategyWorkflow />
      <WhoIsItFor />
      <MeasurableResults />
      <Differentiators />
      <BoldCTA />
    </main>
  );
}
