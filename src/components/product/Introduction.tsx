const IntroductionSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          The Platform
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Structured Local SEO Reporting. Built for Clarity.
        </h2>

        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            MyPageSEO is a report generation platform designed specifically for
            local SEO tracking and structured client reporting. Unlike generic
            analytics tools that overwhelm with data, MyPageSEO focuses on the
            metrics that matter for local search performance — rankings,
            citations, reviews, Google Business Profile health, and geographic
            visibility.
          </p>

          <p>
            The platform supports two primary user types:{" "}
            <strong className="text-foreground">businesses</strong> managing
            their own local presence who need clear, actionable performance
            insights, and <strong className="text-foreground">agencies</strong>{" "}
            managing multiple client portfolios who need scalable reporting,
            white-label customization, and centralized performance tracking.
            Both get clarity, transparency, and structured decision-making
            support.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export { IntroductionSection };
