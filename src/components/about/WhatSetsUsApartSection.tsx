import { MapPin, Zap, BarChart3, Globe } from "lucide-react";

const differentiators = [
  {
    icon: MapPin,
    title: "Local-First Strategy",
    desc: "We don't dilute focus across every SEO discipline. Our specialization is local search — map pack visibility, proximity signals, local intent keywords, and NAP consistency. Every strategy we build starts with the local landscape your business operates in, not a generic SEO playbook. This depth of focus is what produces rankings that actually convert.",
  },
  {
    icon: Zap,
    title: "Execution Over Advice",
    desc: "MyPageSEO does not hand you a strategy deck and walk away. We implement every optimization — from Google Business Profile enhancements and citation corrections to review response workflows and local landing page builds. We audit continuously, optimize relentlessly, and monitor every ranking signal that matters.",
  },
  {
    icon: BarChart3,
    title: "Structured Reporting & Clarity",
    desc: "Performance tracking at MyPageSEO is transparent, data-driven, and built around metrics that matter — ranking positions, call volume, inquiry growth, citation accuracy, and review velocity. Monthly reports include clear analysis and actionable recommendations. You always know exactly where you stand and what's being done next.",
  },
  {
    icon: Globe,
    title: "Cross-Market Experience",
    desc: "We work with businesses across India and North America, understanding the nuances of competitive local markets — from dense urban centers like Delhi NCR and Toronto to suburban and regional service areas. Varying search behaviors, directory ecosystems, and competitive dynamics across markets are built into our approach from the start.",
  },
];

const WhatSetsUsApartSection = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          What Sets Us Apart
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Built Different. Measured by Results.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {differentiators.map((d) => (
          <div
            key={d.title}
            className="p-7 lg:p-8 rounded-xl bg-card border border-border hover:shadow-card transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <d.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="text-lg font-heading font-bold text-foreground">
                {d.title}
              </h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {d.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { WhatSetsUsApartSection };
