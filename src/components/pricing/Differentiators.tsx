const differentiators = [
  {
    title: "Performance-Based Strategy",
    desc: "Every recommendation, every action, every deliverable is connected to a measurable outcome. We don't execute tasks for the sake of activity — we execute strategies designed to move rankings, increase visibility, and generate inquiries.",
  },
  {
    title: "Local Market Specialization",
    desc: "We specialize exclusively in local SEO and digital marketing for businesses competing in geographically defined markets. This focus delivers deeper expertise, more relevant strategies, and better results than generalist agencies.",
  },
  {
    title: "Transparent Reporting",
    desc: "Structured performance reports provide complete visibility into what's been executed, what's changed, and what the data indicates. No black-box processes. No unexplained charges. Full accountability at every stage.",
  },
  {
    title: "Scalable Growth Planning",
    desc: "Engagement models are designed to evolve with your business. As you grow, your strategy scales — expanding into new locations, new service lines, and new competitive markets with a clear, structured roadmap.",
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
          Invest in Structured Growth
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

export default Differentiators;
