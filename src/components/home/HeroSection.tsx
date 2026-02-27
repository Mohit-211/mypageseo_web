import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-[92vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/hero-bg.jpg"
        alt="Local SEO analytics and Google Maps optimization dashboard"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>

    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-7">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 text-sm text-accent font-semibold">
          <MapPin className="w-4 h-4" />
          Local SEO Agency — India & North America
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-heading font-bold leading-[1.08] text-primary-foreground">
          Dominate Google Maps.{" "}
          <span className="text-accent">Own Every Local Search.</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/75 max-w-2xl leading-relaxed">
          MyPageSEO helps local businesses and multi-location brands increase
          visibility, drive real inquiries, and win in competitive markets. We
          specialize in Google Business Profile optimization, map pack
          dominance, citation consistency, and conversion-focused local
          strategies — across India and North America.
        </p>

        <div className="flex flex-wrap gap-4 pt-3">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Get a Free Local SEO Audit
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>

          <Button variant="hero-outline" size="lg" asChild>
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export { HeroSection };
