import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  FileText,
  BarChart3,
  Zap,
  ShieldCheck,
  TrendingUp,
  Target,
  Eye,
  PenTool,
  BookOpen,
  Code2,
  RefreshCw,
  MapPin,
  MousePointerClick,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "mypageContent | SEO Content Strategy | MyPageSEO",
  description:
    "mypageContent delivers structured, locally targeted, search-optimized content strategies that drive rankings, visibility, and measurable organic growth across India and North America.",
};

/* ═══ HERO ═══ */
const Hero = () => (
  <section className="relative min-h-[72vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/content-service-hero.jpg"
        alt="SEO content strategy workspace with keyword research tools, content outlines, and performance metrics"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>
    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-7">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 text-sm text-accent font-semibold">
          <PenTool className="w-4 h-4" />
          Growth Service — SEO Content Strategy
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
          Content That Ranks.{" "}
          <span className="text-accent">Content That Converts.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
          mypageContent focuses on search-optimized, locally targeted, and
          conversion-focused content development — driving organic visibility
          and qualified inquiries across India and North America.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Build SEO-Driven Content
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link href="/contact">Request a Content Strategy Call</Link>
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
          What Is mypageContent
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          The Foundation of Search Visibility Is Structured Content
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            Content is the foundation of every search ranking. Without
            structured, keyword-aligned, and conversion-optimized content, no
            amount of technical SEO or link building will produce sustainable
            organic visibility. Ranking for local and competitive keywords
            requires precise keyword mapping, geographic targeting, search
            intent alignment, and strategic content architecture — not generic
            blog posts.
          </p>
          <p>
            mypageContent is built on research, optimization discipline, and
            measurable performance tracking. Every piece of content we develop
            is engineered to serve a specific search intent, target a defined
            geographic market, and drive a measurable business outcome — whether
            that's a phone call, a form submission, or a direction request. This
            is content as a growth system, not content as a checkbox.
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
    title: "Local Keyword Research & Mapping",
    desc: "We perform deep geographic keyword clustering — identifying search terms by city, neighborhood, and service area. Competitor gap analysis reveals keyword opportunities your rivals are ranking for that you're missing. Intent segmentation separates informational queries from commercial and transactional searches, ensuring every piece of content targets the right stage of the buyer journey with the right messaging.",
  },
  {
    icon: Target,
    title: "Conversion-Focused Landing Pages",
    desc: "Service pages optimized for specific cities and service areas are the highest-converting content assets in local SEO. We develop structured landing pages with clear value propositions, strategic call-to-action placement, social proof integration, and conversion psychology — designed to transform organic visitors into phone calls and form submissions. Each page targets a specific keyword cluster and geographic market.",
  },
  {
    icon: BookOpen,
    title: "SEO Blog Strategy",
    desc: "Blog content builds topical authority — signaling to Google that your site is a comprehensive resource in your field. We develop content calendars aligned with actual search demand, targeting long-tail keywords that capture question-based and informational queries. Strategic internal linking connects blog content to service pages, distributing authority and guiding visitors toward conversion points.",
  },
  {
    icon: Code2,
    title: "On-Page SEO Optimization",
    desc: "Every content piece is technically optimized for search engines: meta titles and descriptions crafted for click-through rates, schema markup for rich results eligibility, heading hierarchies that communicate content structure, semantic keyword integration that reinforces topical relevance, and image optimization for Core Web Vitals compliance. Technical alignment ensures content performs to its full ranking potential.",
  },
  {
    icon: RefreshCw,
    title: "Content Refresh & Optimization",
    desc: "Existing content often underperforms due to outdated information, keyword drift, or structural weaknesses. We audit your current content library, identify pages with ranking potential that aren't being realized, update keyword targeting, improve content depth and structure, and refresh outdated information. Content refresh is one of the highest-ROI activities in SEO — often producing ranking improvements within weeks.",
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
          Five Pillars of SEO Content Strategy
        </h2>
        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          Each pillar targets a critical dimension of organic visibility.
          Together, they build a content ecosystem that compounds authority and
          drives sustainable growth.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {coverageBlocks.map((block, i) => (
          <div
            key={block.title}
            className={`p-7 lg:p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-shadow duration-300 ${
              i === coverageBlocks.length - 1
                ? "md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto"
                : ""
            }`}
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
            src="/assets/content-workflow.jpg"
            alt="SEO keyword ranking improvements and organic traffic growth analytics on laptop screen"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Our Execution Workflow
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Audit. Research. Architect. Optimize. Refine.
          </h2>
          <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
            <p>
              Every mypageContent engagement begins with a comprehensive content
              audit — analyzing your existing content assets, identifying
              keyword gaps, evaluating competitor content strategies, and
              mapping search demand in your target markets. This audit produces
              a clear content roadmap prioritized by impact potential.
            </p>
            <p>
              From there, we build a structured content architecture — defining
              page hierarchies, keyword assignments, internal linking
              strategies, and publishing schedules. Content is drafted with SEO
              precision, reviewed for quality and brand alignment, and optimized
              before publication. Post-publish performance tracking monitors
              ranking movements, traffic growth, and conversion metrics.
            </p>
            <p>
              Content strategy is iterative. Monthly performance reviews
              identify what's ranking, what needs refinement, and where new
              content opportunities have emerged. This continuous optimization
              cycle ensures your content investment compounds over time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { icon: Search, label: "Keyword Mapping" },
              { icon: FileText, label: "Content Architecture" },
              { icon: BarChart3, label: "Performance Tracking" },
              { icon: RefreshCw, label: "Continuous Refinement" },
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
          For Businesses That Need Content to Drive Growth
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            If you're{" "}
            <strong className="text-foreground">launching a new website</strong>{" "}
            and need a complete content foundation — service pages, location
            pages, blog content, and supporting pages — mypageContent builds the
            entire content architecture from the ground up, ensuring every page
            is optimized for search from day one.
          </p>
          <p>
            <strong className="text-foreground">
              Companies expanding into new cities
            </strong>{" "}
            need localized landing pages that target geographic keywords
            specific to each market. Generic service pages won't rank in local
            search. We create city-specific, service-specific content that
            captures local search demand and drives inquiries from each target
            geography.
          </p>
          <p>
            For{" "}
            <strong className="text-foreground">
              service providers in saturated markets
            </strong>{" "}
            — where dozens of competitors target the same keywords — topical
            authority through comprehensive content strategies is the
            differentiator. We build content ecosystems that signal expertise,
            depth, and relevance to search engines.
          </p>
          <p>
            Whether you're a{" "}
            <strong className="text-foreground">
              multi-location brand requiring localized pages
            </strong>{" "}
            at scale or a{" "}
            <strong className="text-foreground">
              business struggling with low organic visibility
            </strong>{" "}
            despite having a website, mypageContent provides the structured
            content strategy needed to turn your site into a lead-generating
            asset.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ BUSINESS IMPACT ═══ */
const impactItems = [
  {
    icon: Eye,
    label: "Increased Organic Visibility",
    desc: "More of your pages appearing in search results for keywords your customers actually use.",
  },
  {
    icon: TrendingUp,
    label: "Improved Keyword Rankings",
    desc: "Structured content that climbs search positions for high-value local and service keywords.",
  },
  {
    icon: Layers,
    label: "Stronger Engagement Metrics",
    desc: "Lower bounce rates and longer session durations as content matches user intent precisely.",
  },
  {
    icon: MousePointerClick,
    label: "Higher Lead Conversions",
    desc: "Conversion-optimized content that turns organic visitors into phone calls and form submissions.",
  },
  {
    icon: MapPin,
    label: "Local Market Penetration",
    desc: "City-specific content that captures geographic search demand across your service areas.",
  },
  {
    icon: Zap,
    label: "Compounding Authority",
    desc: "Topical depth that builds domain authority over time, making every new page rank faster.",
  },
];

const BusinessImpact = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Business Impact
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Measurable Content-Driven Growth
        </h2>
        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          Every content asset is tied to measurable outcomes — rankings,
          traffic, engagement, and conversions.
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
    title: "Search Intent Precision",
    desc: "Every piece of content is mapped to a specific search intent — informational, commercial, or transactional. We don't create content hoping it ranks for something. We identify exactly what your target audience is searching for, understand the intent behind those searches, and create content that delivers precisely what they need. Intent alignment is what separates ranking content from ignored content.",
  },
  {
    title: "Local Market Relevance",
    desc: "Generic content doesn't rank in local search. We create content with geographic specificity — referencing local landmarks, neighborhoods, service areas, and market conditions that signal to Google and to readers that your business genuinely serves their community. Local relevance builds trust with both search engines and potential customers.",
  },
  {
    title: "Conversion-Oriented Structure",
    desc: "Content that ranks but doesn't convert is a wasted investment. Every page is structured with clear conversion pathways — strategic CTA placement, trust signals, social proof integration, and user experience flow that guides visitors from information consumption to action. Rankings drive traffic; structure drives conversions.",
  },
  {
    title: "Continuous Optimization Discipline",
    desc: "Content performance is monitored, analyzed, and refined continuously. Pages that plateau in rankings receive structural updates. Content that performs well gets expanded. New keyword opportunities identified through search data are addressed with fresh content. This iterative approach ensures your content investment compounds rather than decays.",
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
          Why Our Content Strategy Delivers Rankings
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
          Turn Content Into Measurable Growth
        </h2>
        <p className="text-accent-foreground/85 text-lg leading-relaxed max-w-2xl mx-auto">
          Every page your competitors publish widens the content gap. Every
          month without a structured content strategy is another month of missed
          organic traffic, missed rankings, and missed leads. Let's build
          content that works.
        </p>
        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 font-bold text-base px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link href="/contact">
              Start Your SEO Content Plan
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PAGE ═══ */
export default function MypageContentService() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <ServiceCoverage />
      <StrategyWorkflow />
      <WhoIsItFor />
      <BusinessImpact />
      <Differentiators />
      <BoldCTA />
    </main>
  );
}
