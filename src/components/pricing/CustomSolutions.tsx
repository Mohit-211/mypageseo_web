import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CustomSolutions = () => (
  <section className="py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          Tailored Engagements
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Custom Solutions Available
        </h2>

        <div className="space-y-5 text-muted-foreground text-[1.05rem] leading-relaxed">
          <p>
            Businesses with unique operational needs, aggressive market
            expansion goals, or specialized industry requirements may need
            strategy packages that extend beyond standard engagement models. For
            these scenarios, we build tailored solutions scoped entirely around
            your specific objectives.
          </p>

          <p>
            Every custom engagement begins with a consultation — understanding
            your market position, competitive landscape, growth targets, and
            operational constraints. From there, we architect a strategy and
            pricing model that reflects the actual work required to achieve your
            goals. No assumptions. No generic templates. Just strategic clarity
            aligned with measurable outcomes.
          </p>
        </div>

        <div className="pt-2">
          <Button variant="cta" size="lg" asChild>
            <Link href="/contact">
              Request a Custom Consultation
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CustomSolutions;
