import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-[72vh] flex items-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0">
      <Image
        src="/assets/product-hero.jpg"
        alt="MyPageSEO local SEO analytics dashboard showing keyword rankings, citation health, review ratings, and performance trends"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>

    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-7">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 text-sm text-accent font-semibold">
          <BarChart3 className="w-4 h-4" />
          Platform — Local SEO Reporting Engine
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
          Clarity & Control Over{" "}
          <span className="text-accent">Local SEO Performance.</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
          The MyPageSEO platform is a powerful local SEO reporting and
          performance tracking system — built for agencies and businesses
          seeking structured insights, white-labeled reporting, and data-driven
          decision-making.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button variant="hero" size="lg" asChild>
            <Link href="/product/features">
              Explore Platform Features
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>

          <Button variant="hero-outline" size="lg" asChild>
            <Link href="/product/pricing">View Product Pricing</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export { HeroSection };
