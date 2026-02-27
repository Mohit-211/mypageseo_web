import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Palette,
  CalendarDays,
  BarChart3,
  Zap,
  ShieldCheck,
  TrendingUp,
  Target,
  Heart,
  Eye,
  MessageCircle,
  Share2,
  Layers,
  Megaphone,
  Monitor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "mypageSMO | Social Media Optimization | MyPageSEO",
  description:
    "mypageSMO delivers structured social media optimization, strategic brand positioning, engagement management, and local audience growth across India and North America.",
};

/* ═══ HERO ═══ */
const Hero = () => (
  <section className="relative min-h-[72vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/smo-service-hero.jpg"
        alt="Social media analytics dashboard showing engagement metrics, follower growth, and audience demographics"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>
    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-7">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 text-sm text-accent font-semibold">
          <Share2 className="w-4 h-4" />
          Brand Service — Social Media Optimization
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
          Structured Social Visibility.{" "}
          <span className="text-accent">Strategic Brand Influence.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
          mypageSMO focuses on strategic content positioning, audience growth,
          engagement management, and consistent local brand presence — building
          trust and authority across India and North America.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Build Your Social Presence
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link href="/contact">Request a Social Strategy Call</Link>
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
          What Is mypageSMO
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Strategic Brand Positioning, Not Random Posting
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            mypageSMO is not about filling a content calendar with generic posts
            and hoping for engagement. It is structured brand positioning —
            aligning your social media presence with your local market identity,
            audience expectations, and business objectives. Every piece of
            content, every interaction, and every campaign is deliberate.
          </p>
          <p>
            Businesses today are evaluated not just by search rankings, but by
            social proof, engagement quality, and perceived authority. Prospects
            check your social profiles before they call. They assess
            consistency, professionalism, and relevance. mypageSMO builds that
            layer of trust — creating a visible, active, and credible brand
            presence across the platforms that matter to your audience.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ SERVICE COVERAGE BLOCKS ═══ */
const coverageBlocks = [
  {
    icon: Target,
    title: "Platform Strategy & Positioning",
    desc: "Not every platform serves every business equally. We analyze your audience demographics, competitive landscape, and business model to determine where your brand needs to be — Facebook for local community engagement, Instagram for visual storytelling, LinkedIn for professional authority, or a multi-platform approach. Each platform gets a tailored strategy aligned to specific audience personas and brand voice guidelines.",
  },
  {
    icon: CalendarDays,
    title: "Content Planning & Development",
    desc: "We build structured content calendars that balance brand storytelling, educational value, local event integration, and engagement-focused formats. Content is planned weeks in advance with strategic themes, seasonal alignment, and audience intent mapping. Every post serves a purpose — whether it's building authority, driving engagement, promoting services, or strengthening community connection.",
  },
  {
    icon: Palette,
    title: "Visual Branding Consistency",
    desc: "Your social presence must look and feel like your brand — consistently. We establish and maintain a cohesive visual language across all platforms: brand colors, typography standards, image treatment, template systems, and tone guidelines. Consistency builds recognition. When every post reinforces the same professional identity, your brand becomes instantly identifiable in crowded local feeds.",
  },
  {
    icon: Users,
    title: "Audience Growth & Engagement",
    desc: "Growing followers means nothing without engagement. We implement community building strategies that attract relevant local audiences — not vanity metrics. Engagement systems include response protocols for comments and messages, proactive outreach to local community groups, strategic hashtag targeting, and audience interaction campaigns that transform passive followers into active brand advocates.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking & Insights",
    desc: "Every content piece and campaign is tracked against engagement metrics, reach analysis, follower growth velocity, and audience sentiment. Monthly performance reviews identify what content formats resonate, which topics drive interaction, and where strategy adjustments are needed. Data-driven refinement ensures your social presence compounds in effectiveness — not stagnates.",
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
          Five Pillars of Social Media Optimization
        </h2>
        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          Each pillar addresses a critical dimension of brand presence —
          together they build a social ecosystem that drives trust, engagement,
          and business growth.
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
            src="/assets/smo-workflow.jpg"
            alt="Marketing team reviewing social media content calendar and engagement performance metrics"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Our Execution Workflow
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Audit. Plan. Publish. Engage. Refine.
          </h2>
          <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
            <p>
              Every mypageSMO engagement begins with a comprehensive brand audit
              — evaluating your current social presence, competitor positioning,
              audience demographics, content gaps, and engagement health. This
              audit establishes a clear baseline and identifies the strategic
              opportunities unique to your market.
            </p>
            <p>
              From there, we build a structured content plan with defined
              themes, publishing schedules, and engagement protocols. Content is
              created in advance, reviewed for brand alignment, and published on
              schedule. Engagement management ensures every comment, message,
              and interaction is handled professionally and promptly.
            </p>
            <p>
              Monthly performance reviews analyze what's working and what needs
              adjustment. This is a long-term brand equity play — consistency
              and strategic refinement compound your social authority over time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { icon: Layers, label: "Brand Consistency" },
              { icon: CalendarDays, label: "Scheduled Publishing" },
              { icon: MessageCircle, label: "Engagement Management" },
              { icon: BarChart3, label: "Monthly Analytics" },
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
          For Businesses That Understand Brand Is a Growth Asset
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            If you're a{" "}
            <strong className="text-foreground">
              local business building brand identity
            </strong>{" "}
            — a new restaurant establishing community presence, a boutique
            showcasing its personality, or a clinic communicating trust and
            expertise — mypageSMO creates the structured social foundation that
            turns your business into a recognized local brand.
          </p>
          <p>
            <strong className="text-foreground">
              Professional service providers
            </strong>{" "}
            — lawyers, accountants, consultants, architects — need
            authority-driven social presence that communicates expertise without
            hard selling. We build content strategies that position you as the
            knowledgeable, trustworthy choice in your market.
          </p>
          <p>
            For{" "}
            <strong className="text-foreground">multi-location brands</strong>{" "}
            maintaining consistent messaging across cities and regions,
            mypageSMO ensures every location's social presence reflects the same
            brand standards while allowing for local market nuances — local
            events, community references, and regional audience preferences.
          </p>
          <p>
            Whether you're{" "}
            <strong className="text-foreground">launching new services</strong>{" "}
            that need market awareness, or seeking{" "}
            <strong className="text-foreground">
              stronger community engagement
            </strong>{" "}
            that turns followers into customers, this service provides the
            strategic structure to make social media a genuine business asset —
            not a time-consuming obligation.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ BUSINESS IMPACT ═══ */
const impactItems = [
  {
    icon: Heart,
    label: "Increased Engagement Rate",
    desc: "Higher interaction rates through strategic content that resonates with your local audience.",
  },
  {
    icon: Eye,
    label: "Stronger Brand Recognition",
    desc: "Consistent visual identity and messaging that makes your brand instantly identifiable.",
  },
  {
    icon: MessageCircle,
    label: "Improved Customer Interaction",
    desc: "Professional engagement management that builds relationships and converts inquiries.",
  },
  {
    icon: ShieldCheck,
    label: "Online Reputation Alignment",
    desc: "Social presence that reinforces your review profile and overall digital credibility.",
  },
  {
    icon: Megaphone,
    label: "Higher Content Reach",
    desc: "Strategic publishing and targeting that expands your visibility beyond existing followers.",
  },
  {
    icon: TrendingUp,
    label: "Compounding Brand Equity",
    desc: "Long-term presence building that increases your brand's perceived authority month over month.",
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
          Measurable Brand Growth Outcomes
        </h2>
        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          Social media optimization delivers tangible business value when
          executed with strategy and consistency.
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
    title: "Strategic Brand Alignment",
    desc: "Every post, story, and interaction is aligned to your brand positioning and business objectives. We don't create content for the sake of activity — we create content that builds the specific perception you need in your market. Strategy drives content, not the other way around.",
  },
  {
    title: "Consistency & Discipline",
    desc: "The brands that win on social media are the ones that show up consistently — with quality, on schedule, with purpose. We maintain rigorous publishing schedules, engagement response times, and brand standards that ensure your presence never feels neglected or disorganized.",
  },
  {
    title: "Local Audience Focus",
    desc: "We don't chase global vanity metrics. Every growth strategy, content theme, and engagement tactic is designed to attract and retain your local target audience — the people who actually become your customers. Local relevance beats global reach for businesses that serve geographic markets.",
  },
  {
    title: "Performance-Based Adjustments",
    desc: "Monthly analytics reviews drive real strategy changes. If a content format isn't performing, we pivot. If a platform is underdelivering, we reallocate effort. If engagement patterns shift, we adapt. Data informs every decision — ensuring your social investment delivers measurable returns.",
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
          Why Our Social Strategy Works
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
          Strengthen Your Brand Presence in Your Local Market
        </h2>
        <p className="text-accent-foreground/85 text-lg leading-relaxed max-w-2xl mx-auto">
          Your competitors are building social authority while you deliberate.
          Every week without a structured social strategy is another week your
          brand falls behind in the minds of your local audience. Let's build
          presence that converts.
        </p>
        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 font-bold text-base px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link href="/contact">
              Start Your Social Growth Plan
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PAGE ═══ */
export default function MypageSMOService() {
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
