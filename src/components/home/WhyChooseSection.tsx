const pillars = [
  {
    title: "Local-First Specialization",
    desc: "We don't spread across every SEO discipline. Local search is our core. Every strategy, every tool, every team member is built around one mission — making local businesses visible, discoverable, and dominant in their market.",
  },
  {
    title: "Data-Driven Execution",
    desc: "Every decision we make is backed by ranking data, search volume analysis, competitive intelligence, and conversion metrics. We don't guess. We analyze, execute, measure, and optimize — in that order, every time.",
  },
  {
    title: "Transparent Reporting",
    desc: "You'll never wonder what we're doing or why. Monthly performance reports include ranking movements, traffic data, call tracking, citation audits, and clear next steps. Full visibility, zero ambiguity.",
  },
  {
    title: "Long-Term Growth Strategy",
    desc: "Quick fixes don't build local authority. We focus on sustainable ranking growth through consistent optimization, reputation building, content development, and technical improvements that compound over time.",
  },
];

const WhyChooseSection = () => (
  <section className="py-20 lg:py-28 bg-brand-slate-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Why MyPageSEO
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground leading-tight">
          A Declaration of Standards
        </h2>

        <p className="text-primary-foreground/60 mt-5 leading-relaxed text-lg">
          We hold ourselves to a higher standard than the industry norm. These
          four pillars define how we operate, how we deliver, and why our
          clients stay.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className="p-7 lg:p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="text-lg font-heading font-bold text-primary-foreground">
                {pillar.title}
              </h3>
            </div>

            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { WhyChooseSection };
