import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BoldCTASection = () => (
  <section className="py-20 lg:py-24 bg-accent">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-accent-foreground leading-tight">
          Ready to Dominate Your Local Market?
        </h2>

        <p className="text-accent-foreground/85 text-lg leading-relaxed max-w-2xl mx-auto">
          Every day your business isn't ranking in the local map pack, your
          competitors are capturing the leads and calls that should be yours.
          Stop leaving revenue on the table. Let's build your local dominance —
          starting now.
        </p>

        <div className="pt-4">
          <Button
            size="lg"
            className="bg-primary-foreground text-accent hover:bg-primary-foreground/90 font-bold text-base px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link href="/contact">
              Request a Proposal
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export { BoldCTASection };
