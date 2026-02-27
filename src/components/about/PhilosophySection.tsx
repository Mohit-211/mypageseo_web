const PhilosophySection = () => (
  <section className="py-20 lg:py-28 bg-brand-light">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-elevated">
          <img
            src="/assets/about-philosophy.jpg"
            alt="Analytics dashboard showing local search performance data and business location mapping"
            className="w-full h-auto object-cover aspect-[1/1]"
          />
        </div>

        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Our Philosophy
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Structure Over Shortcuts. Consistency Over Hype.
          </h2>

          <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
            <p>
              Local search is not a game of tricks. It is a discipline. Rankings
              in the local map pack are earned through consistent optimization,
              accurate data across every platform, active reputation management,
              and content that matches real local search intent. There are no
              shortcuts that compound over time — only structured, data-backed
              execution.
            </p>

            <p>
              At MyPageSEO, we believe in long-term growth over temporary
              ranking spikes. Every campaign we build is designed for
              sustainability — grounded in precision, measured through
              transparent reporting, and refined based on real performance data.
              Our clients don't just see rankings improve. They see calls
              increase, inquiries grow, and revenue compound.
            </p>

            <p>
              Precision. Transparency. Sustainable visibility. That is the
              standard we hold ourselves to — and the standard our clients have
              come to expect.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { PhilosophySection };
