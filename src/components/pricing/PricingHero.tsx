import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const PricingHero = () => (
  <section className="relative min-h-[72vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/pricing-hero.jpg"
        alt="Professional strategy meeting with team reviewing performance reports and growth analytics"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>

    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-7">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 text-sm text-accent font-semibold">
          <TrendingUp className="w-4 h-4" />
          Service Pricing
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
          Invest in Measurable{" "}
          <span className="text-accent">Local Growth.</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
          MyPageSEO's service pricing is structured around scope, competition
          level, geographic reach, and growth objectives — delivering
          performance-aligned engagement models for businesses across India and
          North America.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Request a Custom Proposal
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>

          <Button variant="hero-outline" size="lg" asChild>
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingHero;
