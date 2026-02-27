import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  Bell,
  MessageSquare,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Eye,
  ThumbsUp,
  AlertTriangle,
  Search,
  Users,
  Shield,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "mypageRepo | Reputation Management Service | MyPageSEO",
  description:
    "mypageRepo delivers structured review monitoring, ethical rating growth, sentiment analysis, and reputation-driven visibility strategies for businesses across India and North America.",
};

/* ═══ HERO ═══ */
const Hero = () => (
  <section className="relative min-h-[72vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/repo-service-hero.jpg"
        alt="Online reputation management dashboard showing customer ratings, sentiment analysis, and review growth metrics"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>
    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-7">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 text-sm text-accent font-semibold">
          <Shield className="w-4 h-4" />
          Trust Service — Reputation Management
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
          Build Trust. Protect Credibility.{" "}
          <span className="text-accent">Engineer Brand Confidence.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
          mypageRepo focuses on structured review monitoring, strategic response
          frameworks, rating improvement, and reputation-driven visibility
          growth — across India and North America.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Strengthen Your Online Reputation
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link href="/contact">Request a Reputation Audit</Link>
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
          What Is mypageRepo
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Reputation Is Not Just Ratings — It's Your Growth Engine
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            Online reputation directly impacts local search rankings, customer
            purchase decisions, and long-term brand perception. Google uses
            review signals — volume, velocity, rating average, and response
            activity — as ranking factors in local search results. Customers
            check reviews before they call. A business with stronger ratings and
            consistent engagement converts more searchers into customers.
          </p>
          <p>
            mypageRepo provides structured systems to monitor, manage, and
            enhance your online reviews across Google and other relevant
            platforms. This is not about chasing five-star ratings through
            shortcuts — it is about building a sustainable reputation through
            consistent engagement, ethical review growth, professional response
            frameworks, and sentiment-driven operational improvements.
            Reputation management requires discipline, and discipline produces
            trust.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ SERVICE COVERAGE BLOCKS ═══ */
const coverageBlocks = [
  {
    icon: Bell,
    title: "Review Monitoring & Alerts",
    desc: "We implement continuous tracking systems that monitor new reviews as they appear across Google, Facebook, industry directories, and relevant platforms. Proactive notification alerts ensure your team is aware of every new review within hours — not days. Real-time monitoring means faster response times, which Google recognizes as an engagement signal and customers interpret as professionalism.",
  },
  {
    icon: MessageSquare,
    title: "Strategic Review Response Framework",
    desc: "Every review — positive, neutral, or negative — receives a professionally crafted response aligned to your brand voice. We develop response frameworks with tone guidelines, escalation protocols, and brand-consistent messaging templates. Positive reviews are reinforced with gratitude and engagement. Negative reviews are handled with empathy, accountability, and constructive resolution — turning potential reputation damage into trust-building moments.",
  },
  {
    icon: TrendingUp,
    title: "Rating Improvement Strategy",
    desc: "We implement ethical, structured systems to encourage satisfied customers to share their experiences. This includes optimized review request workflows, timing strategies that target peak satisfaction moments, multi-channel request touchpoints, and frictionless review pathways. Higher review velocity and improved star averages compound over time — strengthening both your ranking signals and customer conversion rates.",
  },
  {
    icon: Search,
    title: "Sentiment Analysis & Insights",
    desc: "Reviews contain more than ratings — they contain intelligence. We analyze patterns in customer feedback to identify recurring themes, operational improvement opportunities, and brand perception trends. Sentiment tracking reveals what customers consistently praise, where expectations aren't being met, and how perception shifts over time. These insights drive both reputation strategy and business decision-making.",
  },
  {
    icon: AlertTriangle,
    title: "Crisis & Negative Feedback Management",
    desc: "Critical reviews and reputation crises require structured handling — not panic. We implement de-escalation protocols, professional response strategies for high-impact negative feedback, and reputation recovery planning for businesses facing rating declines. When handled correctly, even negative reviews can demonstrate professionalism and commitment to customer satisfaction — reinforcing trust rather than eroding it.",
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
          Five Pillars of Reputation Management
        </h2>
        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          Each pillar targets a critical dimension of online trust. Together,
          they build a reputation system that compounds credibility and drives
          growth.
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
            src="/assets/repo-workflow.jpg"
            alt="Review analytics dashboard showing star rating trends and customer sentiment tracking metrics"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Our Execution Workflow
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Audit. Monitor. Respond. Grow. Refine.
          </h2>
          <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
            <p>
              Every mypageRepo engagement begins with a comprehensive reputation
              audit — analyzing your current review profile across all
              platforms, identifying rating trends, evaluating response gaps,
              and benchmarking against local competitors. This audit produces a
              clear picture of your reputation health and defines the strategic
              roadmap.
            </p>
            <p>
              From there, we implement monitoring systems, deploy response
              frameworks, and activate review growth strategies. Ongoing
              tracking captures rating trends, review velocity, sentiment
              patterns, and response effectiveness. Monthly reports deliver
              complete transparency into reputation performance and strategic
              refinements.
            </p>
            <p>
              This is an ongoing discipline — not a one-time cleanup. Reputation
              compounds with consistency, and consistency requires structured
              systems.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { icon: Bell, label: "Real-Time Alerts" },
              { icon: MessageSquare, label: "Response Protocols" },
              { icon: Star, label: "Rating Growth" },
              { icon: BarChart3, label: "Monthly Reporting" },
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

/* ═══ WHY REPUTATION MATTERS ═══ */
const WhyReputationMatters = () => (
  <section className="py-20 lg:py-24 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Why It Matters
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Why Reputation Matters for Local Growth
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            Google's local ranking algorithm uses review signals as a core
            factor in determining local pack and Google Maps positions.{" "}
            <strong className="text-foreground">Review volume</strong> signals
            business popularity.{" "}
            <strong className="text-foreground">Review velocity</strong> — the
            rate at which new reviews appear — indicates ongoing customer
            activity.{" "}
            <strong className="text-foreground">Rating consistency</strong>{" "}
            above 4.0 stars serves as a trust threshold.{" "}
            <strong className="text-foreground">Response activity</strong>{" "}
            demonstrates business engagement and professionalism.
          </p>
          <p>
            Beyond rankings, reputation directly drives conversion behavior.
            Studies consistently show that businesses with higher ratings and
            more reviews receive significantly more clicks, calls, and direction
            requests from local search results. A customer choosing between two
            similar businesses will almost always select the one with stronger
            reviews — making reputation a competitive advantage that directly
            impacts revenue.
          </p>
          <p>
            Neglecting reputation management doesn't mean your reputation stays
            static — it means competitors with active review strategies pull
            further ahead. Every unanswered negative review, every month without
            review growth, and every inconsistent response erodes the trust
            signals that Google and customers rely on to evaluate your business.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ WHO THIS IS FOR ═══ */
const WhoIsItFor = () => (
  <section className="py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Who This Service Is For
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          For Businesses That Understand Trust Drives Revenue
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            If your business has{" "}
            <strong className="text-foreground">
              inconsistent or declining ratings
            </strong>{" "}
            — perhaps due to a few negative reviews that went unanswered, or a
            period without active review solicitation — mypageRepo provides the
            structured system to stabilize, improve, and sustain your rating
            trajectory.
          </p>
          <p>
            <strong className="text-foreground">
              Companies expanding into competitive markets
            </strong>{" "}
            face established competitors with hundreds of reviews and strong
            ratings. Breaking into these markets requires an aggressive, ethical
            review growth strategy that rapidly builds social proof and trust
            signals in the new geography.
          </p>
          <p>
            For{" "}
            <strong className="text-foreground">
              multi-location businesses
            </strong>{" "}
            managing reputation across dozens of listings, consistency is the
            challenge. mypageRepo implements centralized monitoring,
            standardized response frameworks, and location-level performance
            tracking that ensures every location maintains brand-standard
            reputation health.
          </p>
          <p>
            Whether you're a{" "}
            <strong className="text-foreground">
              service provider dependent on local credibility
            </strong>{" "}
            — healthcare practices, legal firms, home service companies — or a{" "}
            <strong className="text-foreground">
              brand seeking stronger customer trust signals
            </strong>
            , reputation management is not optional. It is a strategic growth
            investment.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ DIFFERENTIATORS — DARK ═══ */
const differentiators = [
  {
    title: "Proactive Monitoring Systems",
    desc: "We don't wait for monthly reports to discover reputation issues. Real-time monitoring and alert systems ensure every new review is identified, assessed, and responded to promptly. Proactive monitoring means faster engagement, better customer perception, and stronger ranking signals.",
  },
  {
    title: "Structured Communication Protocols",
    desc: "Every response follows brand-aligned communication protocols — professional tone, constructive messaging, and strategic positioning. Whether it's a five-star praise or a one-star complaint, the response reinforces your brand's professionalism and commitment to customer satisfaction.",
  },
  {
    title: "Ethical Growth Strategies",
    desc: "We never purchase reviews, incentivize ratings, or engage in any practice that violates platform guidelines. Our review growth strategies focus on making it easy and natural for genuinely satisfied customers to share their experiences — building authentic social proof that withstands platform audits.",
  },
  {
    title: "Performance Transparency",
    desc: "Monthly reputation reports include rating trend analysis, review volume tracking, response time metrics, sentiment patterns, and competitive benchmarking. You always know exactly where your reputation stands, how it's trending, and what actions we're taking to strengthen it.",
  },
];

const Differentiators = () => (
  <section className="py-20 lg:py-28 bg-brand-slate-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Our Standard
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground leading-tight">
          Our Reputation Management Standard
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
          Protect and Strengthen Your Brand's Credibility
        </h2>
        <p className="text-accent-foreground/85 text-lg leading-relaxed max-w-2xl mx-auto">
          Every unanswered review and every month without reputation growth is a
          missed opportunity to build the trust that converts searchers into
          customers. Let's build a reputation system that works for your
          business — consistently and measurably.
        </p>
        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 font-bold text-base px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link href="/contact">
              Start Your Reputation Strategy
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PAGE ═══ */
export default function MypageRepoService() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <ServiceCoverage />
      <StrategyWorkflow />
      <WhyReputationMatters />
      <WhoIsItFor />
      <Differentiators />
      <BoldCTA />
    </main>
  );
}
