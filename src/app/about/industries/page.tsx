import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Stethoscope,
  Scale,
  Home,
  Wrench,
  GraduationCap,
  Store,
  Briefcase,
  Search,
  MapPin,
  Star,
  TrendingUp,
} from "lucide-react";
export const metadata: Metadata = {
  title: "Industries We Serve | MyPageSEO",
  description:
    "Industry-specific local SEO strategies for healthcare, legal, real estate, home services, retail, education, and professional services across India and North America.",
};

/* ═══ HERO ═══ */
const Hero = () => (
  <section className="relative min-h-[60vh] flex items-center">
    <img
      src="/assets/industries-hero.jpg"
      alt="Diverse business sectors across a commercial district"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div
      className="absolute inset-0"
      style={{ backgroundColor: "hsla(200,22%,33%,0.78)" }}
    />
    <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32 lg:py-40">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-heading font-bold text-primary-foreground leading-[1.12]">
          Industry-Specific Local Growth Expertise
        </h1>
        <p className="text-primary-foreground/75 text-lg lg:text-xl leading-relaxed max-w-2xl">
          MyPageSEO tailors local SEO and digital marketing strategies to the
          competitive realities of each industry — across India and North
          America.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link href="/contact">
            Request an Industry Strategy Call{" "}
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

/* ═══ INTRODUCTION ═══ */
const Introduction = () => (
  <section className="py-16 lg:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
      <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
        Why Industry Focus Matters
      </p>
      <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
        <p>
          Local search behavior differs fundamentally by industry. Customer
          intent, competition intensity, review sensitivity, keyword targeting
          patterns, and conversion paths vary significantly across sectors. A
          strategy built for a healthcare clinic will not perform the same way
          for a real estate agency or a home services company.
        </p>
        <p>
          MyPageSEO adapts every local SEO and digital marketing strategy based
          on sector-specific ranking factors, buyer psychology, and competitive
          benchmarks. This industry-aware approach ensures that resources are
          allocated toward the tactics that drive measurable outcomes — not
          generic checklists.
        </p>
      </div>
    </div>
  </section>
);

/* ═══ INDUSTRIES GRID ═══ */
const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare & Clinics",
    description:
      "Healthcare local SEO demands exceptional trust signals. Patients search with high urgency and strong proximity bias. We focus on review volume and quality management, appointment-driven conversion optimization, Google Business Profile completeness for medical categories, and proximity-based ranking strategies that ensure visibility when patients search for care near them.",
  },
  {
    icon: Scale,
    title: "Legal Services",
    description:
      "Legal search is among the most competitive in local SEO. Searchers demonstrate high commercial intent and low tolerance for unverified providers. Our strategies center on competitive keyword targeting for practice areas, content authority through structured legal resource pages, strong reputation signals that build trust before the first consultation, and geographic precision for multi-location firms.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description:
      "Real estate ranking success depends on hyperlocal precision. Buyers and sellers search by neighborhood, locality, and micro-market. We build location-specific landing pages, neighborhood-level keyword strategies, map pack optimization for agents and brokerages, and content architectures that establish local market authority across multiple service areas.",
  },
  {
    icon: Wrench,
    title: "Home Services",
    description:
      "Plumbing, electrical, HVAC, and similar trades are driven by emergency and immediate-need searches. Mobile-first optimization is critical. We prioritize service-area visibility beyond a single address, call-driven conversion strategies, rapid-response landing pages optimized for urgent intent, and review acquisition systems that build trust for high-ticket home services.",
  },
  {
    icon: GraduationCap,
    title: "Education & Coaching",
    description:
      "Educational institutions and coaching centers compete for enrollment-driven searches with strong seasonal patterns. Our approach includes local authority building through content and community signals, review influence strategies targeting parents and students, informational keyword targeting that captures research-phase traffic, and campaign timing aligned with admission and enrollment cycles.",
  },
  {
    icon: Store,
    title: "Retail & Local Stores",
    description:
      "Retail local SEO is driven by map pack visibility and product-based search intent. Foot traffic and local discovery are primary conversion metrics. We optimize for product-category local searches, review engagement and response management, location-based competitive positioning, and Google Business Profile features including product catalogs, offers, and updates.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description:
      "Consultants, agencies, accountants, and similar professionals compete on authority and reputation rather than volume. Our strategies focus on credibility-first positioning in local search, service-based landing pages targeting specific professional expertise, geographic targeting across service territories, and reputation management that converts reviews into trust signals for high-value engagements.",
  },
];

const IndustriesGrid = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Sector-Specific Strategies
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
          Industries We Serve
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {industries.map((ind) => (
          <div
            key={ind.title}
            className="bg-card border border-border rounded-2xl p-7 lg:p-8 shadow-card hover:shadow-elevated transition-shadow space-y-4"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <ind.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground">
              {ind.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {ind.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══ ADAPTING STRATEGY ═══ */
const AdaptingStrategy = () => (
  <section className="py-16 lg:py-24 bg-brand-light">
    <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
      <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
        Market Intelligence
      </p>
      <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-6">
        Adapting Strategy by Market &amp; Competition
      </h2>
      <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
        <p>
          Industry competition is not uniform — it varies dramatically by
          geography. A dental clinic in a tier-2 Indian city faces a
          fundamentally different competitive landscape than one in downtown
          Toronto. The keyword difficulty, review benchmarks, citation
          requirements, and content expectations are entirely different.
        </p>
        <p>
          Before defining any strategy, MyPageSEO analyzes local competitor
          density, keyword saturation levels, review volume benchmarks in the
          target market, and search behavior patterns specific to the geography.
          This market-first approach ensures that every recommendation is
          grounded in competitive reality — not theoretical best practices.
        </p>
      </div>
    </div>
  </section>
);

/* ═══ TWO COLUMN — FOUNDATION ═══ */
const FoundationSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-elevated">
          <img
            src="/assets/industries-analytics.jpg"
            alt="SEO analytics dashboard with industry-segmented performance charts"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Consistent Foundation
          </p>
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground leading-tight">
            Different Industries. Same Disciplined Framework.
          </h2>
          <div className="space-y-4 text-muted-foreground text-[1.05rem] leading-relaxed">
            <p>
              While every industry demands a unique tactical approach, the core
              foundation remains constant: structured optimization, disciplined
              execution, measurable tracking, and continuous refinement.
            </p>
            <p>
              Our methodology ensures that industry-specific tactics are built
              on top of a proven operational framework — so results are not left
              to chance, regardless of the sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ EXPANDING ═══ */
const ExpandingSection = () => (
  <section className="py-16 lg:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
      <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
        Beyond Established Sectors
      </p>
      <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-6">
        Expanding Into New Industries
      </h2>
      <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
        <p>
          MyPageSEO also works with emerging sectors, niche businesses, and
          specialized service providers that may not fit traditional industry
          categories. Our approach for new verticals is research-driven — we
          analyze the competitive landscape, search behavior, and market
          dynamics before defining a strategy.
        </p>
        <p>
          There are no one-size-fits-all templates. Every engagement starts with
          understanding the business, its market position, and its growth
          objectives. From there, strategy is built from the ground up.
        </p>
      </div>
    </div>
  </section>
);

/* ═══ DIFFERENTIATOR — DARK ═══ */
const differentiators = [
  {
    icon: Search,
    title: "Market Research Before Execution",
    description:
      "Every strategy begins with competitive analysis — not assumptions. We study local competitor density, keyword difficulty, and market benchmarks before making a single recommendation.",
  },
  {
    icon: MapPin,
    title: "Localized Keyword Precision",
    description:
      "We target keywords at the neighborhood, city, and regional level — aligning search intent with geographic relevance for maximum local visibility.",
  },
  {
    icon: Star,
    title: "Reputation-Centric Positioning",
    description:
      "Reviews and trust signals are central to our strategy — not an afterthought. We build systematic review acquisition and management into every engagement.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-Driven Implementation",
    description:
      "Rankings without conversions are meaningless. Every optimization decision is evaluated against its impact on inquiries, calls, and measurable business outcomes.",
  },
];

const Differentiators = () => (
  <section className="py-20 lg:py-28 bg-brand-slate-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground leading-tight">
          Industry-Specific Strategy.
          <br />
          Measurable Local Growth.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {differentiators.map((d) => (
          <div
            key={d.title}
            className="p-7 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 space-y-3"
          >
            <d.icon className="w-6 h-6 text-accent" />
            <h3 className="text-lg font-heading font-bold text-primary-foreground">
              {d.title}
            </h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              {d.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══ RED CTA ═══ */
const RedCTA = () => (
  <section className="py-20 lg:py-24 bg-accent">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-accent-foreground leading-tight">
          Dominate Your Industry in Your Local Market
        </h2>
        <p className="text-accent-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
          Let's build a strategy designed for your sector, your geography, and
          your growth objectives. No generic templates — only structured,
          measurable execution.
        </p>
        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-heading font-bold px-8 py-6 text-base"
            asChild
          >
            <Link href="/contact">
              Get Your Industry Growth Plan{" "}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PAGE ═══ */
export default function Industries() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <IndustriesGrid />
      <AdaptingStrategy />
      <FoundationSection />
      <ExpandingSection />
      <Differentiators />
      <RedCTA />
    </main>
  );
}
