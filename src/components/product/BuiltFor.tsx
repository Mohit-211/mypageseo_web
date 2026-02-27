import Image from "next/image";
import { Users, Palette, BarChart3, FileText } from "lucide-react";

const BuiltForSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
          <Image
            src="/assets/product-agencies.jpg"
            alt="Professional reviewing white-labeled SEO performance reports on tablet with branded client data"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">
            Built for Two Audiences
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Built for Agencies and Businesses
          </h2>

          <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
            <div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                For Agencies
              </h3>
              <p>
                Manage entire client portfolios from a centralized dashboard.
                Sync Google Business Profiles, generate comprehensive
                performance reports, and deliver white-labeled documentation
                that reinforces your agency brand. Track performance across
                multiple clients simultaneously with structured reporting that
                saves hours of manual data compilation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                For Businesses
              </h3>
              <p>
                Access clear, structured insights into your local search
                performance without needing SEO expertise to interpret them.
                Monitor ranking positions, reputation health, citation accuracy,
                and competitive standing through intuitive dashboards designed
                for business decision-makers — not just marketing specialists.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { icon: Users, label: "Multi-Client Management" },
              { icon: Palette, label: "White Label Reports" },
              { icon: BarChart3, label: "Performance Dashboards" },
              { icon: FileText, label: "Structured Reporting" },
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

export { BuiltForSection };
