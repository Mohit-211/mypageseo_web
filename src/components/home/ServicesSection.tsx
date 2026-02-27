import {
  Search,
  MapPin,
  TrendingUp,
  Star,
  FileText,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Local SEO & Google Maps Ranking",
    desc: "Systematic optimization for top-3 map pack positions. We build local authority through keyword strategy, on-page signals, and geo-targeted content that puts your business in front of high-intent searchers.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    desc: "Complete GBP setup, verification, and ongoing management — from category selection and attribute optimization to post scheduling and Q&A management. Every detail tuned for maximum local visibility.",
  },
  {
    icon: TrendingUp,
    title: "Local Ads & Performance Campaigns",
    desc: "Hyper-targeted local advertising campaigns across Google Ads and social platforms designed to drive qualified foot traffic, phone calls, and form submissions from your service area.",
  },
  {
    icon: Star,
    title: "Reputation & Review Management",
    desc: "Proactive review generation, monitoring, and response strategies that build social proof, improve star ratings, and convert searchers into customers. Protect and grow your online reputation systematically.",
  },
  {
    icon: FileText,
    title: "Citation & NAP Consistency",
    desc: "Accurate business listings across 100+ directories, aggregators, and platforms — continuously monitored and corrected. Inconsistent NAP data destroys local rankings. We eliminate that risk entirely.",
  },
  {
    icon: Target,
    title: "Conversion-Focused Landing Pages",
    desc: "High-performance, SEO-optimized landing pages engineered specifically for local search intent. Every element — headline, CTA, trust signals — designed to turn visitors into calls and form submissions.",
  },
];

const ServicesSection = () => (
  <section className="py-20 lg:py-28 bg-brand-light">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          What We Do
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Full-Spectrum Local Marketing Execution
        </h2>

        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          Every service is built around measurable outcomes — more visibility,
          more calls, more leads, more dominance. We don't just run tasks. We
          deliver results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="group p-7 lg:p-8 rounded-xl border border-border bg-card hover:shadow-elevated transition-all duration-300 hover:border-accent/30"
          >
            <div className="w-13 h-13 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors">
              <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
            </div>

            <h3 className="text-lg font-heading font-bold text-foreground mb-3">
              {service.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { ServicesSection };
