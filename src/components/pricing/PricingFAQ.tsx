"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is there a minimum contract period?",
    a: "We recommend a minimum engagement of 3–6 months for local SEO services, as meaningful ranking improvements require sustained, consistent effort. However, there are no rigid lock-in contracts — we believe results should earn your continued partnership.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely. Engagement models are designed to scale with your growth. As your business expands into new markets or adds locations, your strategy and plan can be upgraded to match your evolving objectives.",
  },
  {
    q: "Do you guarantee rankings?",
    a: "No ethical SEO provider can guarantee specific ranking positions, as search algorithms are controlled by Google. What we guarantee is disciplined execution, transparent reporting, and a strategy built on proven local SEO frameworks that consistently deliver measurable improvements.",
  },
  {
    q: "How soon can I expect results?",
    a: "Initial improvements in citation consistency, GBP optimization, and review signals can appear within the first 4–6 weeks. Meaningful ranking movements typically emerge within 3–4 months, with compounding improvements over 6–12 months of sustained effort.",
  },
  {
    q: "Are ads included in SEO packages?",
    a: "Paid advertising (Google Ads, social media ads) is managed through our mypageAds service and is priced separately based on ad budget and campaign scope. However, integrated packages combining SEO and ads can be structured through a custom proposal.",
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

const PricingFAQ = () => (
  <section className="py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Common Questions
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight mb-10">
          Frequently Asked Questions
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

export default PricingFAQ;
