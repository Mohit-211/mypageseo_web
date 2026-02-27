import { CheckCircle2 } from "lucide-react";

const CredibilitySection = () => (
  <section className="py-16 lg:py-20 bg-brand-light">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground leading-tight">
          Structured for Serious Partnerships
        </h2>

        <p className="text-muted-foreground text-[1.05rem] leading-relaxed">
          MyPageSEO operates from Noida Sector-62, India, and serves clients
          across both Indian and North American markets. Our agency is
          structured for long-term partnerships — not short-term projects. We
          commit to accountability in every engagement, consistency in
          execution, and measurable outcomes in every report. When you work with
          MyPageSEO, you work with a team that treats your local visibility as
          seriously as you treat your business.
        </p>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-4">
          {[
            "Noida Sector-62 HQ",
            "India & North America",
            "Long-Term Partnerships",
            "Accountability-Driven",
          ].map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-2 text-sm font-medium text-foreground/80"
            >
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export { CredibilitySection };
