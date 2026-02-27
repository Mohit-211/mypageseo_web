import { TrendingUp, Eye, Shield, Users } from "lucide-react";

const ValueProp = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-elevated">
          <img
            src="/assets/pricing-value.jpg"
            alt="Professional reviewing SEO analytics performance dashboard and growth reports"
            className="w-full h-auto object-cover aspect-[4/3]"
          />
        </div>

        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Partnership Value
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Measurable Growth Through Disciplined Execution
          </h2>

          <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
            <p>
              Our engagement model is built around one principle: every
              investment must produce measurable outcomes. That means
              transparent reporting that shows exactly what's working,
              disciplined execution that follows proven local SEO frameworks,
              and long-term partnership focused on sustainable growth.
            </p>

            <p>
              You won't receive vague progress updates or vanity metrics. You'll
              receive structured performance reports, clear visibility into
              ranking movements, citation health, reputation signals, and
              conversion impact — giving you the confidence that your investment
              is driving real business results.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { icon: TrendingUp, label: "Measurable Growth" },
              { icon: Eye, label: "Transparent Reporting" },
              { icon: Shield, label: "Disciplined Execution" },
              { icon: Users, label: "Long-Term Partnership" },
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

export default ValueProp;
