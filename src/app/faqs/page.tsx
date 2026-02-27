"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
export const metadata = {
  title: "FAQs | MyPageSEO",
  description:
    "Frequently asked questions about local SEO services, pricing, engagement models, and the MyPageSEO reporting platform.",
};

/* ═══ HERO ═══ */
const Hero = () => (
  <section className="relative min-h-[72vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/faqs-hero.jpg"
        alt="Professional team reviewing strategy and analytics in a modern boardroom"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>
    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-7">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 text-sm text-accent font-semibold">
          <HelpCircle className="w-4 h-4" />
          Frequently Asked Questions
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
          Clarity & Transparency.{" "}
          <span className="text-accent">Your Questions Answered.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
          Find answers to common questions about local SEO services, digital
          marketing strategy, pricing, engagement models, and the MyPageSEO
          reporting platform.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Book a Strategy Call
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
          Understanding Our Approach
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          We Believe in Structured Communication
        </h2>
        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            Local SEO and digital marketing often raise questions regarding
            timelines, pricing structures, expected outcomes, and technical
            processes. These are important questions — and they deserve clear,
            honest answers.
          </p>
          <p>
            At MyPageSEO, we value transparency and structured communication.
            Below you'll find answers to the most common questions we receive
            from businesses and agencies. If your question isn't addressed here,
            our team is always available for a direct conversation.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ FAQ ACCORDION ═══ */
type FAQCategory = { category: string; items: { q: string; a: string }[] };

const faqData: FAQCategory[] = [
  {
    category: "Local SEO & Services",
    items: [
      {
        q: "How long does it take to see results from Local SEO?",
        a: "Timelines depend on several factors including competition intensity, market size, current positioning, and the condition of existing digital assets. Initial improvements in citation consistency, Google Business Profile health, and on-page optimization can appear within 4–6 weeks. Meaningful ranking movements in moderately competitive markets typically emerge within 3–4 months, with compounding improvements over 6–12 months of sustained, disciplined execution. Highly competitive markets may require longer timelines and deeper strategic investment.",
      },
      {
        q: "Do you guarantee #1 rankings?",
        a: "No ethical SEO provider can guarantee specific ranking positions. Search algorithms are controlled by Google and influenced by hundreds of factors that change continuously. What we guarantee is disciplined execution, structured strategy built on proven local SEO frameworks, transparent reporting, and consistent effort directed toward measurable improvements in visibility, traffic, and inquiry generation.",
      },
      {
        q: "What industries do you specialize in?",
        a: "We work across a range of industries where local visibility directly impacts business growth. Our experience spans healthcare and medical practices, legal services, real estate, education and training institutes, home services, retail and multi-location brands, hospitality, and professional services. Our local SEO frameworks are adaptable to any industry where geographic relevance drives customer acquisition.",
      },
      {
        q: "Do you work with businesses outside India?",
        a: "Yes. MyPageSEO provides local SEO and digital marketing services across both India and North America. Our strategies are tailored to the specific search dynamics, directory ecosystems, and competitive landscapes of each region. Whether you operate in a single city or across multiple markets internationally, we structure engagement models to match your geographic scope.",
      },
      {
        q: "Are paid ads included in SEO packages?",
        a: "Paid advertising — including Google Ads and social media campaigns — is managed through our mypageAds service and is priced separately based on ad budget and campaign scope. However, integrated packages combining SEO and paid advertising can be structured through a custom proposal, ensuring both channels work together strategically for maximum impact.",
      },
    ],
  },
  {
    category: "Pricing & Engagement",
    items: [
      {
        q: "What influences pricing?",
        a: "Pricing is determined by several factors: industry competitiveness, geographic market size, number of business locations, scope of services required, content depth, and growth objectives. Every engagement is scoped based on the actual workload required to deliver measurable outcomes — not generic fixed templates. This ensures you invest in strategy aligned with your specific market reality.",
      },
      {
        q: "Is there a minimum contract period?",
        a: "We recommend a minimum engagement of 3–6 months for local SEO services, as meaningful ranking improvements require sustained, consistent effort. However, we do not enforce rigid lock-in contracts. We believe results should earn your continued partnership. Monthly billing is available, and engagements can be adjusted based on performance and evolving business needs.",
      },
      {
        q: "Can I upgrade my plan later?",
        a: "Absolutely. Our engagement models are designed to scale with your business growth. As you expand into new markets, add locations, or increase competitive ambitions, your strategy and plan can be upgraded to match your evolving objectives. Transitions between plans are seamless, with strategy adjustments applied immediately.",
      },
      {
        q: "Do you provide custom strategies?",
        a: "Yes. Businesses with unique operational needs, aggressive expansion goals, or specialized industry requirements can request tailored strategy packages. Every custom engagement begins with a detailed consultation to understand your market position, competitive landscape, growth targets, and operational constraints — ensuring the strategy is built specifically around your objectives.",
      },
    ],
  },
  {
    category: "Reputation & Social Media",
    items: [
      {
        q: "How do you improve online reviews?",
        a: "We implement structured, ethical review acquisition systems that encourage satisfied customers to share their experiences. This includes review request workflows, timing optimization, platform-specific strategies, and response management frameworks. We never engage in fake review practices or incentivized reviews — our approach builds genuine, sustainable reputation signals that influence both search rankings and consumer trust.",
      },
      {
        q: "Do you manage social media accounts completely?",
        a: "Our social media optimization service (mypageSMO) includes strategic management, content planning, engagement frameworks, and performance tracking. The depth of management depends on your engagement model — ranging from strategic oversight and content calendar creation to full content production, scheduling, community management, and analytics reporting. Every aspect is aligned with your brand voice and growth objectives.",
      },
    ],
  },
  {
    category: "Product & Platform",
    items: [
      {
        q: "What is the MyPageSEO platform?",
        a: "MyPageSEO is a structured local SEO reporting and performance tracking system. It centralizes local rank tracking, Google Business Profile audits, reputation monitoring, citation tracking, and geographic grid analysis into unified, structured reports — designed for both agencies managing client portfolios and businesses seeking direct visibility into their own local search performance.",
      },
      {
        q: "Is the platform only for agencies?",
        a: "No. The platform is built for two distinct user types. Agencies use it to manage multiple client profiles, generate white-labeled reports, and track performance across portfolios. Businesses use it to monitor their own rankings, review metrics, citation health, and local visibility — without relying solely on external agency updates. Both user types access the same powerful reporting infrastructure.",
      },
      {
        q: "Do reports support white labeling?",
        a: "Yes. Agencies on eligible plans can fully customize reports with their own branding — including logo, agency name, color scheme, and contact details. Custom branded URLs allow agencies to share reports with clients through links that maintain agency identity throughout the experience. White labeling is a core capability of the platform, not an afterthought.",
      },
      {
        q: "Is there training or onboarding support?",
        a: "Yes. All platform users receive structured onboarding guidance to ensure efficient setup and maximum value from day one. This includes account configuration assistance, feature walkthroughs, and best practice recommendations. Agency and Enterprise plans include priority onboarding support with dedicated setup assistance.",
      },
    ],
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

const FAQSection = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {faqData.map((cat, ci) => (
          <div key={cat.category} className={ci > 0 ? "mt-14" : ""}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-sm font-bold text-accent font-heading">
                {String(ci + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-heading font-bold text-foreground">
                {cat.category}
              </h3>
            </div>
            <div className="space-y-3">
              {cat.items.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══ STILL HAVE QUESTIONS — 2 COL ═══ */
const StillHaveQuestions = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-elevated">
          <img
            src="/assets/faqs-contact.jpg"
            alt="Professional reviewing reports and answering client inquiries"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>
        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Need More Clarity?
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Your Question Not Listed?
          </h2>
          <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
            <p>
              Every business situation is unique, and some questions require a
              more detailed, personalized response. If you haven't found the
              answer you're looking for above, our team is ready to help.
            </p>
            <p>
              Whether it's a question about specific services, technical
              capabilities, pricing for your market, or how local SEO applies to
              your industry — we're here for a straightforward, no-pressure
              conversation.
            </p>
          </div>
          <div className="pt-2">
            <Button variant="cta" size="lg" asChild>
              <Link href="/contact">
                Contact Our Team
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
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
          Still Have Questions? Let's Talk.
        </h2>
        <p className="text-primary-foreground/65 text-lg leading-relaxed max-w-2xl mx-auto">
          Schedule a consultation with our team. We'll discuss your business
          objectives, competitive landscape, and how structured local SEO can
          drive measurable growth.
        </p>
        <div className="pt-4">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

/* ═══ PAGE ═══ */
export default function FAQs() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <FAQSection />
      <StillHaveQuestions />
      <DarkCTA />
    </main>
  );
}
