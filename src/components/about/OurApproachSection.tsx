const steps = [
  {
    num: "01",
    title: "Audit & Analysis",
    desc: "Every engagement begins with a comprehensive local SEO audit. We analyze your Google Business Profile health, citation accuracy across 100+ platforms, competitive keyword landscape, on-page local signals, review profile, and website technical foundation. This audit identifies every gap and opportunity — giving us a clear baseline to build from.",
  },
  {
    num: "02",
    title: "Optimization & Technical Alignment",
    desc: "Based on audit findings, we execute a structured optimization roadmap. This includes Google Business Profile category and attribute optimization, on-page schema markup, local keyword integration, landing page creation, and site technical improvements. Every optimization is prioritized by impact potential and executed with precision.",
  },
  {
    num: "03",
    title: "Local Authority Building",
    desc: "Visibility in local search requires authority signals — accurate citations across directories and aggregators, locally relevant backlinks, consistent NAP data, and geo-targeted content. We build these signals systematically, monitoring accuracy and expanding your local footprint across platforms that influence rankings.",
  },
  {
    num: "04",
    title: "Reputation & Engagement Strategy",
    desc: "Reviews are a ranking factor and a conversion factor. We implement review generation workflows, monitor sentiment, craft professional responses, and build strategies that increase review velocity and average star ratings. Reputation management is not optional — it is a core pillar of local dominance.",
  },
  {
    num: "05",
    title: "Performance Monitoring & Refinement",
    desc: "Local SEO is not a set-it-and-forget-it service. We track rankings across target keywords and map pack positions, monitor call volume and inquiry trends, audit citation health regularly, and refine strategies based on real performance data. Continuous optimization ensures your visibility doesn't plateau — it compounds.",
  },
];

const OurApproachSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Our Approach
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Structured Execution, From Audit to Scale
        </h2>

        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          Our process is built on operational discipline. Every phase connects
          to the next — creating a cycle of analysis, optimization, and
          measurable improvement.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {steps.map((step, i) => (
          <div key={step.num} className="flex gap-6 lg:gap-8">
            <div className="flex flex-col items-center shrink-0">
              <span className="w-12 h-12 rounded-full bg-accent/15 border-2 border-accent/40 flex items-center justify-center text-sm font-heading font-bold text-accent">
                {step.num}
              </span>

              {i < steps.length - 1 && (
                <div className="w-px flex-1 bg-border mt-3" />
              )}
            </div>

            <div className="pb-8">
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { OurApproachSection };
