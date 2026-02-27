import {
  Search,
  ClipboardCheck,
  Star,
  Globe,
  Grid3X3,
  Target,
} from "lucide-react";

const capabilities = [
  {
    icon: Search,
    title: "Local Rank Tracker",
    desc: "Track local search rankings for your targeted keywords with granular precision — monitoring position changes across Google's local pack, Maps, and organic results. Performance trend analysis reveals ranking trajectories over time, while competitive benchmarking shows exactly where you stand against local rivals. Every data point is actionable, not just informational.",
  },
  {
    icon: ClipboardCheck,
    title: "Google Business Profile Audit",
    desc: "Comprehensive audits that assess your GBP listing across every optimization dimension — category accuracy, attribute completeness, media quality, post activity, Q&A status, and review responsiveness. Each audit identifies specific optimization opportunities with clear impact assessments, giving you a prioritized action plan rather than a generic score.",
  },
  {
    icon: Star,
    title: "Reputation Monitoring",
    desc: "Track reviews, ratings, and customer sentiment across Google and relevant platforms with structured reporting. Monitor review velocity, rating trends, response rates, and sentiment patterns. Identify reputation strengths and vulnerabilities before they impact rankings or customer perception. Reporting transforms raw review data into strategic insights.",
  },
  {
    icon: Globe,
    title: "Citation Tracking",
    desc: "Monitor your business listings across 100+ directories and data aggregators for consistency and visibility alignment. Identify NAP inconsistencies, missing listings, and duplicate entries that undermine local ranking signals. Citation health reports provide clear visibility into your listing ecosystem with prioritized correction recommendations.",
  },
  {
    icon: Grid3X3,
    title: "Local Search Grid",
    desc: "Visualize your ranking positions across different geographic points within a city — revealing exactly where your business ranks strong and where visibility drops off. The search grid maps ranking performance to physical locations, enabling precision-targeted optimization strategies that address specific geographic weaknesses in your visibility footprint.",
  },
  {
    icon: Target,
    title: "Local Search Audit",
    desc: "Evaluate the complete local SEO health of your digital presence — NAP consistency across the web, on-page local optimization factors, listing accuracy, schema implementation, and technical signals. The audit produces a structured health score with specific, actionable recommendations ranked by impact potential.",
  },
];

const CoreCapabilitiesSection = () => (
  <section className="py-20 lg:py-28 bg-brand-light">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Core Capabilities
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Six Reporting Modules. One Unified Platform.
        </h2>

        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          Each module delivers actionable insights — not just data. Together,
          they provide complete visibility into local SEO performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {capabilities.map((cap) => (
          <div
            key={cap.title}
            className="p-7 lg:p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <cap.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">
                {cap.title}
              </h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {cap.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { CoreCapabilitiesSection };
