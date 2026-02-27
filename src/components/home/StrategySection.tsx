import { BarChart3, FileText, Zap, ShieldCheck } from "lucide-react";

const StrategySection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-elevated">
          <img
            src="/assets/strategy-session.jpg"
            alt="MyPageSEO team reviewing local search ranking analytics and performance dashboards"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
          <div className="absolute inset-0 bg-brand-slate-dark/15" />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Our Execution Model
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            We Don't Just Strategize — We Audit, Optimize, Track, and Scale
          </h2>

          <p className="text-muted-foreground leading-relaxed text-[1.05rem]">
            Most agencies hand you a strategy deck and disappear. At MyPageSEO,
            strategy and execution go hand in hand. We begin with a
            comprehensive local SEO audit — analyzing your Google Business
            Profile, citation health, competitive landscape, and on-page
            signals. From there, we build a structured optimization roadmap and
            execute every step.
          </p>

          <p className="text-muted-foreground leading-relaxed text-[1.05rem]">
            Every campaign includes structured reporting with real ranking data,
            traffic insights, call tracking, and clear ROI analysis. We refine
            based on performance — not assumptions. Continuous optimization
            means your local visibility doesn't plateau. It compounds.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { icon: BarChart3, label: "Measurable Growth" },
              { icon: FileText, label: "Structured Reporting" },
              { icon: Zap, label: "Continuous Optimization" },
              { icon: ShieldCheck, label: "Transparent Timelines" },
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

export { StrategySection };
