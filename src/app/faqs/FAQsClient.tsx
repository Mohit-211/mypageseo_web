"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

/* ===== HERO ===== */
const Hero = () => (
  <section className="relative min-h-[72vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/faqs-hero.jpg"
        alt="Professional team reviewing strategy and analytics"
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
          Clarity & Transparency.
          <span className="text-accent"> Your Questions Answered.</span>
        </h1>

        <div className="pt-2">
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

/* ===== FAQ DATA ===== */

type FAQCategory = {
  category: string;
  items: { q: string; a: string }[];
};

const faqData: FAQCategory[] = [
  {
    category: "Local SEO & Services",
    items: [
      {
        q: "How long does it take to see results?",
        a: "Timelines depend on competition and market conditions.",
      },
      {
        q: "Do you guarantee #1 rankings?",
        a: "No ethical SEO provider can guarantee rankings.",
      },
    ],
  },
];

/* ===== FAQ ITEM ===== */

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50"
      >
        <span className="font-bold">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>

      {open && (
        <div className="px-5 pb-5">
          <p className="text-muted-foreground">{a}</p>
        </div>
      )}
    </div>
  );
};

/* ===== MAIN CLIENT COMPONENT ===== */

export default function FAQsClient() {
  return (
    <>
      <Hero />

      <section className="py-20 bg-secondary">
        <div className="container mx-auto max-w-4xl px-4">
          {faqData.map((cat) => (
            <div key={cat.category} className="mb-12">
              <h3 className="text-xl font-bold mb-6">{cat.category}</h3>

              <div className="space-y-3">
                {cat.items.map((faq) => (
                  <FAQItem key={faq.q} {...faq} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
