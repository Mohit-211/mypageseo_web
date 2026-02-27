import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClosingCTASection = () => (
  <section className="py-20 lg:py-24 bg-brand-slate-dark">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-primary-foreground leading-tight">
          Partner With a Team That Understands Local Growth
        </h2>

        <p className="text-primary-foreground/65 text-lg leading-relaxed max-w-2xl mx-auto">
          Your local market is competitive. Your customers are searching right
          now. The question is whether they're finding you — or your competitor.
          Let's build the visibility, authority, and conversion systems that put
          your business first.
        </p>

        <div className="pt-4">
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Book a Strategy Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export { ClosingCTASection };
