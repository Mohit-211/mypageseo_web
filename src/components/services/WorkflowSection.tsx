import { BarChart3, Target, Zap, ShieldCheck } from "lucide-react";

const WorkflowSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-elevated">
          <img
            src="/assets/services-workflow.jpg"
            alt="Marketing team analyzing local SEO performance tracking dashboards with ranking and call data"
            className="w-full h-auto object-cover aspect-[1/1]"
          />
        </div>

        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            How Our Service Model Works
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            An Ongoing Growth Partnership — Not a One-Time Setup
          </h2>

          <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
            <p>
              Every engagement begins with a comprehensive local SEO audit —
              analyzing your Google Business Profile health, citation accuracy,
              competitive keyword landscape, review profile, and website
              technical foundation. From this audit, we build a strategic
              alignment plan tailored to your market position and growth
              objectives.
            </p>

            <p>
              Implementation follows a structured roadmap: optimizations are
              prioritized by impact, executed methodically, and tracked through
              performance dashboards. Monthly reporting includes ranking
              movements, call volume data, inquiry trends, citation health
              audits, and clear next-step recommendations.
            </p>

            <p>
              This is not a set-it-and-forget-it model. We continuously refine
              strategies based on real data — adapting to algorithm changes,
              competitive shifts, and seasonal patterns. The result is
              compounding local visibility that doesn't plateau.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { icon: BarChart3, label: "Data-Driven Decisions" },
              { icon: Target, label: "Impact-First Execution" },
              { icon: Zap, label: "Continuous Refinement" },
              { icon: ShieldCheck, label: "Transparent Reporting" },
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

export { WorkflowSection };
