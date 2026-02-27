const differentiators = [
  {
    title: "Local-Only Specialization",
    desc: "We don't dilute our focus across global SEO, e-commerce optimization, or enterprise content strategies. Local search is our entire discipline. Every methodology, tool, and team member is built around one objective — making local businesses dominate their geographic market. This singular focus produces depth of expertise that generalist agencies simply cannot match.",
  },
  {
    title: "Structured Performance Tracking",
    desc: "Every campaign is tracked against clear KPIs — ranking positions for target keywords, Google Maps visibility, call volume, form submissions, review velocity, and citation accuracy. Our reporting dashboards give you real-time visibility into what's working, what's improving, and what we're optimizing next. No vanity metrics. Only data that connects to business outcomes.",
  },
  {
    title: "Transparent Communication",
    desc: "You will never wonder what your agency is doing. Monthly reports include detailed breakdowns of every optimization executed, every ranking change tracked, and every next step planned. We communicate proactively — surfacing insights, flagging opportunities, and keeping you fully informed at every stage of the engagement.",
  },
  {
    title: "Long-Term Growth Planning",
    desc: "We don't optimize for quick wins that fade. Our strategies are built for sustainable ranking growth — through consistent citation development, ongoing content creation, reputation building, and technical refinement. Local authority compounds over time, and our planning reflects that reality. We're building your market position for the long run.",
  },
];

const Differentiators = () => (
  <section className="py-20 lg:py-28 bg-brand-slate-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Why MyPageSEO
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground leading-tight">
          Why Businesses Choose Us Over Generic Agencies
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {differentiators.map((d, i) => (
          <div
            key={d.title}
            className="p-7 lg:p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent font-heading">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="text-lg font-heading font-bold text-primary-foreground">
                {d.title}
              </h3>
            </div>

            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              {d.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { Differentiators };
