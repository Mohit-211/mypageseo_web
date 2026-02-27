import {
  Stethoscope,
  Building2,
  Home,
  Scale,
  Briefcase,
  GraduationCap,
  Users,
  Globe,
} from "lucide-react";

const industries = [
  { icon: Stethoscope, name: "Clinics & Healthcare" },
  { icon: Building2, name: "Real Estate Firms" },
  { icon: Home, name: "Home Service Providers" },
  { icon: Scale, name: "Legal & Law Firms" },
  { icon: Briefcase, name: "Retail & Local Stores" },
  { icon: GraduationCap, name: "Educational Institutions" },
  { icon: Users, name: "Professional Services" },
  { icon: Globe, name: "Multi-Location Brands" },
];

const IndustriesSection = () => (
  <section className="py-20 lg:py-24 bg-brand-light">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Who We Work With
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Industries & Business Types We Serve
          </h2>

          <p className="text-muted-foreground leading-relaxed text-[1.05rem]">
            Whether you're a single-location business looking to dominate your
            neighborhood, a service-area business covering a wide region, or a
            multi-location brand scaling across cities — our local SEO
            strategies adapt to your structure and growth goals. We understand
            the nuances of each vertical and build campaigns that match your
            market reality.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex items-center gap-3.5 p-4 rounded-xl bg-card border border-border hover:border-accent/20 hover:shadow-soft transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <industry.icon className="w-5 h-5 text-primary" />
              </div>

              <span className="text-sm font-semibold text-foreground">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export { IndustriesSection };
