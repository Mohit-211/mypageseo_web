import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutHeroSection = () => (
  <section className="relative min-h-[70vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/assets/about-hero.jpg"
        alt="MyPageSEO marketing team reviewing local search strategy and analytics"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-slate-dark/80" />
    </div>

    <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
      <div className="max-w-3xl space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          About MyPageSEO
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
          Built on Execution.{" "}
          <span className="text-accent">Measured by Visibility.</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
          MyPageSEO is built on strategic execution, local market intelligence,
          and measurable growth — not guesswork. We help businesses become the
          most visible, most trusted option when customers search locally.
        </p>

        <Button variant="hero" size="lg" asChild>
          <Link href="/contact">
            Talk to Our Team
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export { AboutHeroSection };
