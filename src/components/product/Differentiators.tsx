const differentiators = [
  {
    title: "Local SEO Specialization",
    desc: "Unlike generic SEO platforms that dilute focus across enterprise, e-commerce, and technical SEO, MyPageSEO is purpose-built for local search performance. Every feature, metric, and report is designed around the specific signals that drive local rankings — proximity, relevance, prominence, and reputation.",
  },
  {
    title: "Agency-Centric Design",
    desc: "The platform is architecturally designed for agency workflows — multi-client management, centralized dashboards, scalable reporting, and team collaboration. Agency operations don't need to bend to fit the tool. The tool is built to fit agency operations.",
  },
  {
    title: "White Label Capabilities",
    desc: "Full branding customization across reports, dashboards, and client-facing URLs ensures your agency identity is front and center. White labeling isn't an add-on — it's a core platform capability that elevates your professional positioning with every client interaction.",
  },
  {
    title: "Structured Performance Insights",
    desc: "Data without structure is noise. MyPageSEO transforms raw local SEO data into structured, prioritized insights with clear recommendations. Reports are designed for decision-making, not data overload — ensuring every stakeholder understands performance status and next steps.",
  },
];

const DifferentiatorsSection = () => (
  <section className="py-20 lg:py-28 bg-brand-slate-dark">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Platform Advantage
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary-foreground leading-tight">
          Why Choose MyPageSEO Platform
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

export { DifferentiatorsSection };
