import type { Metadata } from "next";
import {
  ArrowRight,
  MessageSquare,
  Search,
  ClipboardList,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import ContactSection from "@/components/contact/ContactSection";
import MapSection from "@/components/contact/MapSection";

export const metadata: Metadata = {
  title: "Contact | MyPageSEO",
  description:
    "Connect with MyPageSEO for local SEO services, digital marketing strategy, and platform inquiries. Serving businesses across India and North America.",
};

/* ═══ HERO ═══ */
const Hero = () => (
  <section className="relative min-h-[72vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/contact-hero.jpg"
        alt="Professional team discussing local SEO strategy in modern corporate office"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>

    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-7">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 text-sm text-accent font-semibold">
          <MessageSquare className="w-4 h-4" />
          Get in Touch
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
          Let's Discuss Your{" "}
          <span className="text-accent">Local Growth Strategy.</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
          Businesses across India and North America connect with MyPageSEO for
          local SEO strategy, digital marketing services, and platform
          inquiries. Every conversation starts with understanding your
          objectives.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact-form">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
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
          Start the Conversation
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Every Growth Strategy Begins with Understanding
        </h2>

        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            Every business faces unique growth challenges — different markets,
            different competition levels, different objectives. The team at
            MyPageSEO approaches each inquiry with strategic clarity, taking
            time to understand your current position, competitive landscape, and
            growth ambitions before recommending any course of action.
          </p>

          <p>
            Whether you're exploring local SEO for the first time, considering a
            platform for structured reporting, or looking to scale your digital
            marketing across multiple locations — our consultations are
            structured, data-driven, and goal-oriented. No pressure. Just
            clarity.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ WHY REACH OUT ═══ */
const WhyReachOut = () => (
  <section className="py-20 lg:py-24 bg-brand-light">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Why Connect
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Why Reach Out to Us?
        </h2>

        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            Whether your business is looking to improve map rankings, launch
            targeted paid campaigns, strengthen online reputation, develop a
            high-performance website, or gain clarity through structured
            reporting — MyPageSEO provides disciplined execution and measurable
            growth strategy tailored to your specific market.
          </p>

          <p>
            We work with single-location businesses building their first digital
            presence and multi-location brands scaling across competitive urban
            markets. Every engagement begins with understanding your position,
            your goals, and the competitive dynamics of your market — ensuring
            that every recommendation is grounded in strategic clarity, not
            generic assumptions.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ CONSULTATION PROCESS ═══ */
const steps = [
  {
    icon: MessageSquare,
    title: "Initial Discussion",
    desc: "We begin with a focused conversation to understand your business model, market position, current challenges, and growth objectives. No forms. No automation. A real strategic discussion.",
  },
  {
    icon: Search,
    title: "Market & Visibility Review",
    desc: "Our team conducts a preliminary review of your local search presence — analyzing rankings, citations, reputation signals, and competitive positioning to identify opportunities and gaps.",
  },
  {
    icon: ClipboardList,
    title: "Strategy Outline",
    desc: "Based on our review, we outline a structured strategy aligned with your objectives — including recommended services, priority actions, and expected timelines for measurable outcomes.",
  },
  {
    icon: FileText,
    title: "Proposal & Execution Plan",
    desc: "You receive a clear, transparent proposal with scope, deliverables, pricing, and an execution roadmap. Once approved, we move into disciplined implementation with regular performance reporting.",
  },
];

const ConsultationProcess = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Our Process
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight mb-12">
          Consultation Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="p-7 rounded-xl bg-card border border-border shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center text-sm font-bold text-accent font-heading">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="text-base font-heading font-bold text-foreground">
                  {step.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ═══ DARK CTA ═══ */
const DarkCTA = () => (
  <section className="py-20 lg:py-24 bg-brand-slate-dark">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-primary-foreground leading-tight">
          Start Your Local Growth Journey Today
        </h2>

        <p className="text-primary-foreground/65 text-lg leading-relaxed max-w-2xl mx-auto">
          Connect with our team for a structured strategy discussion. No
          commitments — just clarity on how your business can achieve measurable
          local visibility and sustainable growth.
        </p>

        <div className="pt-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact-form">
              Schedule Your Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PAGE ═══ */
export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <ContactSection />
      <WhyReachOut />
      <ConsultationProcess />
      <MapSection />
      <DarkCTA />
    </main>
  );
}
