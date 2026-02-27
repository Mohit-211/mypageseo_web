import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesHero = () => (
  <section className="relative min-h-[72vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/services-hero.jpg"
        alt="MyPageSEO marketing operations center with analytics dashboards and Google Maps data"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>

    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-7">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Our Services
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
          Precision-Driven Services for{" "}
          <span className="text-accent">Local Search Dominance</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
          MyPageSEO provides structured, execution-based local SEO and digital
          marketing services that drive measurable calls, leads, and visibility
          — for single-location businesses and multi-location brands across
          India and North America.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Get a Free Local SEO Audit
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>

          <Button variant="hero-outline" size="lg" asChild>
            <Link href="/contact">Request a Proposal</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export { ServicesHero };
