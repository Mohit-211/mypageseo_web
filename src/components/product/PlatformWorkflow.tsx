import {
  UserPlus,
  Settings,
  MapPin,
  FileText,
  Palette,
  RefreshCw,
} from "lucide-react";

const workflowSteps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Registration & Onboarding",
    desc: "Create your account and configure your organization profile — whether as a business or agency. Guided onboarding ensures you're operational in minutes.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Client Profile Setup",
    desc: "Add business profiles with location details, service areas, target keywords, and competitive benchmarks. Agencies can add unlimited client profiles.",
  },
  {
    icon: MapPin,
    step: "03",
    title: "Google Business Profile Sync",
    desc: "Connect Google Business Profiles directly for automated data synchronization — pulling live listing data, reviews, and performance metrics.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Report Generation",
    desc: "Generate comprehensive local SEO reports covering rankings, citations, reviews, GBP health, and search grid analysis — in minutes, not hours.",
  },
  {
    icon: Palette,
    step: "05",
    title: "White Labeling",
    desc: "Customize reports with your agency branding, logo, and contact details. Share via branded URLs that reinforce your professional identity.",
  },
  {
    icon: RefreshCw,
    step: "06",
    title: "Performance Tracking",
    desc: "Monitor ranking movements, reputation trends, and citation health over time. Data-driven refinement ensures continuous local SEO improvement.",
  },
];

const PlatformWorkflowSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Platform Workflow
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          From Setup to Insights in Minutes
        </h2>

        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          A streamlined system designed for clarity and efficiency — not
          complexity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {workflowSteps.map((s) => (
          <div
            key={s.step}
            className="p-6 rounded-xl bg-brand-light border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary font-heading">
                {s.step}
              </span>

              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <s.icon className="w-4 h-4 text-accent" />
              </div>
            </div>

            <h3 className="text-sm font-heading font-bold text-foreground mb-2">
              {s.title}
            </h3>

            <p className="text-xs text-muted-foreground leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { PlatformWorkflowSection };
