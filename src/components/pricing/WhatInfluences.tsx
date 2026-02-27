import {
  Target,
  Globe,
  Layers,
  Building,
  FileText,
  BarChart3,
} from "lucide-react";

const influences = [
  {
    icon: Target,
    label: "Industry Competitiveness",
    desc: "Highly competitive industries require deeper strategy and sustained effort",
  },
  {
    icon: Globe,
    label: "Geographic Market Size",
    desc: "Larger service areas demand broader keyword and content strategies",
  },
  {
    icon: Layers,
    label: "Number of Services Offered",
    desc: "More service lines require expanded keyword targeting and content depth",
  },
  {
    icon: Building,
    label: "Number of Locations",
    desc: "Multi-location businesses need scalable architecture and localized pages",
  },
  {
    icon: FileText,
    label: "Content Requirements",
    desc: "Content depth affects strategy scope, from basic pages to full content ecosystems",
  },
  {
    icon: BarChart3,
    label: "Ad Budget Scope",
    desc: "If paid advertising is included, campaign management scales with budget",
  },
];

const WhatInfluences = () => (
  <section className="py-20 lg:py-24 bg-brand-light">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Transparency
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          What Influences Pricing
        </h2>

        <p className="text-muted-foreground text-[1.05rem] leading-relaxed">
          Every business operates in a unique competitive environment. Our
          pricing reflects the actual scope of work required to achieve
          measurable outcomes — not arbitrary package structures. The following
          factors determine engagement scope and investment level:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          {influences.map((item) => (
            <div
              key={item.label}
              className="flex gap-4 p-5 rounded-xl bg-card border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>

              <div>
                <h4 className="text-sm font-heading font-bold text-foreground">
                  {item.label}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhatInfluences;
