import { CheckCircle2 } from "lucide-react";

const CredibilitySection = () => (
  <section className="py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Built for Local Dominance
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          A Dedicated Local SEO Agency — Not a Generalist
        </h2>

        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
          MyPageSEO is a focused local SEO and digital marketing agency that
          specializes in Google Business Profile optimization, local map
          rankings, citation consistency, reputation growth, and
          conversion-focused local strategies. We don't spread thin across every
          digital channel. We go deep where it matters — making your business
          the first result customers see when they search locally.
        </p>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-6">
          {[
            "Google Maps Ranking",
            "GBP Optimization",
            "Citation Consistency",
            "Review Management",
            "Local Landing Pages",
            "Structured Reporting",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-foreground/80"
            >
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export { CredibilitySection };
