"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  BarChart3,
  Palette,
  ChevronDown,
  ChevronUp,
  Star,
  Shield,
  Zap,
  Eye,
  Settings,
  RefreshCw,
  Users,
  FileText,
} from "lucide-react";
import { useState } from "react";

export const metadata: Metadata = {
  title: "MyPageSEO Pricing | Local SEO Reporting Plans",
  description:
    "Explore MyPageSEO pricing plans for businesses and agencies. Structured local SEO reporting, white-label capabilities, scalable keyword tracking, and flexible billing options.",
};

/* ═══ HERO ═══ */
const Hero = () => (
  <section className="relative min-h-[72vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/product-pricing-hero.jpg"
        alt="Performance reporting analytics dashboard on professional monitor"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>
    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-7">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 text-sm text-accent font-semibold">
          <BarChart3 className="w-4 h-4" />
          Product — Pricing
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
          Scalable Access to{" "}
          <span className="text-accent">Local SEO Reporting.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
          The MyPageSEO platform offers flexible pricing for businesses and
          agencies seeking structured local SEO performance tracking, auditing,
          and white-labeled reporting.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Get Started Today
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
          Transparent Pricing
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Plans Aligned with Your Operational Scale
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            Pricing is designed to scale based on usage needs, number of
            business profiles, and reporting requirements. Whether you're a
            single-location business monitoring your own performance or an
            agency managing dozens of client portfolios, there is a plan
            structured to match your operational demands.
          </p>
          <p>
            Every plan provides access to the platform's core local SEO
            reporting capabilities — with higher tiers unlocking expanded
            tracking limits, advanced features, and white-label customization.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PRICING GRID ═══ */
const plans = [
  {
    name: "Starter",
    tagline: "For single businesses",
    price: "$49",
    period: "/month",
    featured: false,
    features: [
      "Local Rank Tracker",
      "Google Business Profile Audit",
      "Reputation Monitoring",
      "Up to 50 keyword tracking slots",
      "1 business profile",
      "Standard reporting",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tagline: "For growing businesses",
    price: "$129",
    period: "/month",
    featured: true,
    features: [
      "Everything in Starter",
      "Citation Tracker access",
      "Local Search Grid",
      "Local Search Audit",
      "Up to 200 keyword tracking slots",
      "Up to 5 business profiles",
      "Advanced reporting & exports",
      "Priority email support",
    ],
  },
  {
    name: "Agency",
    tagline: "For agencies & consultants",
    price: "$299",
    period: "/month",
    featured: false,
    features: [
      "Everything in Growth",
      "Multi-client management dashboard",
      "White-label report customization",
      "Unlimited keyword tracking",
      "Google Business Profile sync",
      "Custom branded report URLs",
      "Up to 25 business profiles",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Tailored for scale",
    price: "Custom",
    period: "",
    featured: false,
    features: [
      "Everything in Agency",
      "Unlimited business profiles",
      "Dedicated account manager",
      "Custom integrations",
      "Multi-location brand support",
      "SLA & onboarding assistance",
      "Volume-based pricing",
    ],
  },
];

const PricingGrid = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Choose Your Plan
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Structured Plans for Every Scale
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-5 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col p-7 lg:p-8 rounded-2xl bg-card shadow-card transition-shadow hover:shadow-elevated ${
              plan.featured ? "border-2 border-accent" : "border border-border"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                Recommended
              </span>
            )}
            <div className="mb-6">
              <h3 className="text-xl font-heading font-bold text-foreground">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {plan.tagline}
              </p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-heading font-bold text-foreground">
                {plan.price}
              </span>
              <span className="text-muted-foreground text-sm">
                {plan.period}
              </span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-2.5 text-sm text-muted-foreground"
                >
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.featured ? "cta" : "outline"}
              className="w-full"
              asChild
            >
              <Link href="/contact">
                {plan.name === "Enterprise" ? "Contact Sales" : "Choose Plan"}
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══ INCLUDED ACROSS ALL ═══ */
const IncludedAll = () => (
  <section className="py-20 lg:py-24 bg-brand-light">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Universal Access
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          What's Included Across All Plans
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            Every plan includes structured local SEO reporting, secure data
            handling with encrypted storage, performance tracking dashboards,
            and consistent platform updates. Regardless of the tier selected,
            users access the same reliable infrastructure — with higher plans
            unlocking expanded capacity, advanced modules, and customization
            features.
          </p>
          <p>
            The platform is continuously maintained to reflect changes in local
            search algorithms, directory ecosystems, and reporting best
            practices — ensuring that every user benefits from an up-to-date,
            stable reporting environment.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          {[
            { icon: Shield, label: "Secure Data Handling" },
            { icon: BarChart3, label: "Performance Dashboards" },
            { icon: Zap, label: "Regular Updates" },
            { icon: Eye, label: "Transparent Reporting" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
            >
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
  </section>
);

/* ═══ BILLING FLEXIBILITY ═══ */
const BillingFlexibility = () => (
  <section className="py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Billing
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Flexible Billing Options
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            All plans are available with monthly billing, providing full
            flexibility without long-term commitments. Annual billing options
            are also available at a discounted rate for businesses and agencies
            seeking predictable budgeting.
          </p>
          <p>
            Upgrades and downgrades can be applied at any point during your
            billing cycle, with changes prorated accordingly. There are no
            hidden charges, setup fees, or surprise costs — pricing is
            transparent and consistent from the first day.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ WHITE LABEL VALUE — 2 COL ═══ */
const WhiteLabelValue = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-elevated">
          <img
            src="/assets/product-pricing-whitelabel.jpg"
            alt="White-labeled SEO performance report on tablet showing branded charts and ranking data"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Agency Advantage
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            White Label Reporting That Elevates Your Brand
          </h2>
          <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
            <p>
              For agencies, white-label reporting isn't just a feature — it's a
              strategic advantage. Every report generated through MyPageSEO can
              carry your agency's branding, logo, and contact details,
              transforming platform data into professional deliverables that
              reinforce your expertise.
            </p>
            <p>
              Custom branded URLs allow clients to access their reports through
              links that maintain your agency's identity throughout. This
              seamless brand experience builds trust, elevates professionalism,
              and distinguishes your agency from competitors still relying on
              generic tools.
            </p>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <Palette className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm font-heading font-semibold text-foreground">
              Available on Agency & Enterprise plans
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ FAQ ═══ */
const faqs = [
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes. You can upgrade or downgrade your plan at any time during your billing cycle. Changes are prorated, and you'll only pay the difference or receive credit for unused time on your current plan.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. All plans are available on a month-to-month basis with no long-term commitment required. Annual billing is available at a discount for those who prefer it, but it's entirely optional.",
  },
  {
    q: "Do agencies get white-label features on all plans?",
    a: "White-label report customization and branded URLs are available on the Agency and Enterprise plans. Starter and Growth plans include standard MyPageSEO-branded reporting.",
  },
  {
    q: "How many keywords can I track?",
    a: "Keyword tracking limits vary by plan: Starter includes up to 50 keywords, Growth includes up to 200 keywords, and Agency plans include unlimited keyword tracking. Enterprise plans offer custom limits based on your requirements.",
  },
  {
    q: "Is support included?",
    a: "Yes. All plans include email support. Agency and Enterprise plans receive priority support with faster response times. Enterprise clients also have access to a dedicated account manager.",
  },
  {
    q: "Can I try the platform before committing?",
    a: "Contact our team to discuss a guided demo or trial access. We're happy to walk you through the platform's capabilities so you can evaluate fit before choosing a plan.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left hover:bg-muted/50 transition-colors"
      >
        <span className="text-sm font-heading font-bold text-foreground">
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 lg:px-6 pb-5 lg:pb-6">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => (
  <section className="py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Support
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight mb-10">
          Frequently Asked Questions About Pricing
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══ DIFFERENTIATOR — DARK ═══ */
const DarkDiff = () => (
  <section className="py-20 lg:py-28 bg-brand-slate-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Value Proposition
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground leading-tight">
          Invest in Structured Visibility
        </h2>
        <p className="text-primary-foreground/65 text-[1.05rem] leading-relaxed max-w-2xl mx-auto">
          Local SEO performance improves when it's measured with clarity,
          tracked with precision, and reported with structure. MyPageSEO
          transforms fragmented local search data into scalable, actionable
          intelligence — giving businesses and agencies the foundation for
          confident, data-backed growth decisions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          {[
            { icon: Star, label: "Local Specialization" },
            { icon: Zap, label: "Operational Efficiency" },
            { icon: Palette, label: "White Label Power" },
            { icon: Eye, label: "Full Transparency" },
          ].map((d) => (
            <div
              key={d.label}
              className="flex flex-col items-center gap-3 p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <d.icon className="w-6 h-6 text-accent" />
              <span className="text-sm font-heading font-semibold text-primary-foreground text-center">
                {d.label}
              </span>
            </div>
          ))}
        </div>
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
          Choose the Right Plan. Gain Clarity Over Local SEO.
        </h2>
        <p className="text-accent-foreground/85 text-lg leading-relaxed max-w-2xl mx-auto">
          Select a plan that matches your scale, access structured reporting
          tools, and start making data-backed local SEO decisions today.
        </p>
        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 font-bold text-base px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link href="/contact">
              Start with MyPageSEO Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PAGE ═══ */
export default function PricingClient() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <PricingGrid />
      <IncludedAll />
      <BillingFlexibility />
      <WhiteLabelValue />
      <FAQ />
      <DarkDiff />
      <BoldCTA />
    </main>
  );
}
