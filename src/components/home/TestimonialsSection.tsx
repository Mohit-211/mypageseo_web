import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Dental Clinic Owner, Delhi NCR",
    text: "Within 90 days, our clinic went from page 3 to the top 3 in Google Maps for 12 high-value keywords. New patient inquiries increased by 140%. MyPageSEO's execution was methodical and transparent.",
  },
  {
    name: "James Mitchell",
    role: "Real Estate Agency, Toronto",
    text: "We manage 6 locations across the GTA. MyPageSEO built a scalable local SEO strategy that improved our map visibility by 3x in 6 months. Their citation work alone resolved over 200 inconsistencies.",
  },
  {
    name: "Rajesh Verma",
    role: "Home Services Company, Noida",
    text: "Our Google Business Profile was barely optimized before MyPageSEO took over. Within 4 months, we were averaging 80+ calls per month from Maps alone. The reporting is crystal clear and actionable.",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Client Results
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Measured in Rankings, Calls, and Growth
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="p-7 lg:p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-shadow duration-300"
          >
            <Quote className="w-8 h-8 text-accent/30 mb-4" />

            <p className="text-sm text-foreground/80 leading-relaxed mb-6">
              {t.text}
            </p>

            <div className="border-t border-border pt-4">
              <p className="text-sm font-heading font-bold text-foreground">
                {t.name}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { TestimonialsSection };
