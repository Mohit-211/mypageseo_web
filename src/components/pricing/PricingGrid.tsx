import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, MapPin, Target, Building } from "lucide-react";

const plans = [
  {
    name: "Local Growth",
    tagline: "For single-location businesses in moderately competitive markets",
    price: "₹25,000",
    priceUsd: "$499",
    period: "/month",
    featured: false,
    icon: MapPin,
    features: [
      "Google Business Profile optimization",
      "Local keyword targeting (up to 20 keywords)",
      "Citation cleanup & alignment",
      "Review monitoring support",
      "Monthly performance reporting",
      "Service-area keyword strategy",
      "Email support",
    ],
  },
  {
    name: "Authority Expansion",
    tagline: "For competitive markets or growing brands seeking dominance",
    price: "₹55,000",
    priceUsd: "$999",
    period: "/month",
    featured: true,
    icon: Target,
    features: [
      "Everything in Local Growth",
      "Advanced local SEO strategy",
      "Multi-service keyword targeting",
      "Citation building & authority signals",
      "Reputation management framework",
      "Conversion-focused content support",
      "Structured reporting & review sessions",
      "Priority support",
    ],
  },
  {
    name: "Multi-Location Dominance",
    tagline: "For multi-location brands or aggressive expansion goals",
    price: "₹1,20,000",
    priceUsd: "$1,999",
    period: "/month",
    featured: false,
    icon: Building,
    features: [
      "Everything in Authority Expansion",
      "Multi-location page architecture",
      "Geo-targeted keyword clusters",
      "Centralized reputation strategy",
      "Performance tracking across all locations",
      "Dedicated account management",
      "Strategic scaling roadmap",
      "Monthly strategy sessions",
    ],
  },
];

const PricingGrid = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Engagement Models
        </p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Structured Plans for Strategic Growth
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col p-7 lg:p-8 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-shadow ${
              plan.featured ? "border-2 border-accent" : "border border-border"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                Recommended
              </span>
            )}

            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <plan.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-foreground">
                  {plan.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-6">{plan.tagline}</p>

            <div className="mb-2">
              <span className="text-sm text-muted-foreground">
                Starting from
              </span>
            </div>

            <div className="mb-1">
              <span className="text-3xl font-heading font-bold text-foreground">
                {plan.price}
              </span>
              <span className="text-muted-foreground text-sm">
                {plan.period}
              </span>
            </div>

            <div className="mb-6">
              <span className="text-sm text-muted-foreground">
                or {plan.priceUsd}
                {plan.period}
              </span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-2.5 text-sm text-muted-foreground"
                >
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <Button
              variant={plan.featured ? "cta" : "outline"}
              className="w-full"
              asChild
            >
              <Link href="/contact">Request Proposal</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingGrid;
