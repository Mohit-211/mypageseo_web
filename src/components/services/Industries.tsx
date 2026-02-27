import {
  Stethoscope,
  Scale,
  Building2,
  GraduationCap,
  Home,
  Briefcase,
  Hotel,
  Users,
} from "lucide-react";

const industries = [
  { icon: Stethoscope, name: "Clinics & Healthcare" },
  { icon: Scale, name: "Legal & Law Firms" },
  { icon: Building2, name: "Real Estate Agencies" },
  { icon: GraduationCap, name: "Educational Institutions" },
  { icon: Home, name: "Home Service Providers" },
  { icon: Briefcase, name: "Retail & Local Stores" },
  { icon: Hotel, name: "Hospitality Brands" },
  { icon: Users, name: "Professional Services" },
];

const Industries = () => (
  <section className="py-20 lg:py-24 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Industries We Serve
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Deep Expertise Across Verticals and Markets
          </h2>

          <p className="text-muted-foreground text-[1.05rem] leading-relaxed">
            MyPageSEO works across a wide range of industries — each with unique
            local search dynamics, customer behaviors, and competitive
            landscapes. Our strategies adapt to the nuances of each vertical,
            whether it's a single-location dental practice competing in a dense
            urban market or a multi-location home services brand scaling across
            regions. We understand the directory ecosystems, review platforms,
            and search intent patterns that matter for your industry.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="flex items-center gap-3.5 p-4 rounded-xl bg-card border border-border hover:border-accent/20 hover:shadow-soft transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <ind.icon className="w-5 h-5 text-primary" />
              </div>

              <span className="text-sm font-semibold text-foreground">
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export { Industries };
