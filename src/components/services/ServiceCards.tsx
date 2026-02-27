import Link from "next/link";
import {
  ArrowRight,
  Search,
  TrendingUp,
  Globe,
  Star,
  FileText,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    slug: "mypageseo",
    title: "mypageSEO",
    subtitle: "Local SEO & Google Maps Ranking",
    desc: "Our core service — systematic local search optimization that puts your business in the Google Map Pack and top local results. We execute keyword targeting aligned to local intent, optimize proximity signals, build and manage your Google Business Profile for maximum visibility, create and correct citations across 100+ directories, develop local link signals, and continuously monitor ranking positions. The outcome: your business appears first when customers search for what you offer — driving calls, directions, and inquiries directly from search.",
    href: "/services/mypageseo",
  },
  {
    icon: TrendingUp,
    slug: "mypageads",
    title: "mypageAds",
    subtitle: "Local Ads & Performance Campaigns",
    desc: "Performance-driven paid advertising designed specifically for local markets. We build and manage Google Ads campaigns with precise location-based targeting, create lead generation funnels that capture high-intent local searchers, implement conversion tracking for calls and form submissions, and optimize budgets based on real ROI data. Every campaign is structured to deliver qualified local leads — not just impressions.",
    href: "/services/mypageads",
  },
  {
    icon: Globe,
    slug: "mypagesmo",
    title: "mypageSMO",
    subtitle: "Social Media Optimization",
    desc: "Strategic social media optimization that builds local brand presence and community engagement. We develop content strategies aligned to your local audience, grow engagement through consistent and relevant posting, build local audience segments, and maintain brand consistency across all social platforms. Social presence reinforces search authority — and we make sure yours works for you.",
    href: "/services/mypagesmo",
  },
  {
    icon: Star,
    slug: "mypagerepo",
    title: "mypageRepo",
    subtitle: "Reputation & Review Management",
    desc: "Your online reputation directly impacts both rankings and conversions. We implement systematic review generation workflows, monitor review platforms for sentiment and volume, craft professional responses that build trust, and execute strategies to improve average star ratings and review velocity. The result: stronger social proof, higher click-through rates, and more conversions from every search impression.",
    href: "/services/mypagerepo",
  },
  {
    icon: FileText,
    slug: "mypagecontent",
    title: "mypageContent",
    subtitle: "Conversion-Focused Local Content",
    desc: "Content that ranks locally and converts visitors into leads. We develop localized landing pages targeting specific service areas and keywords, create SEO-optimized service pages, build blog strategies that capture long-tail local search traffic, and write conversion-focused copy aligned to search intent. Every piece of content is engineered for both visibility and action.",
    href: "/services/mypagecontent",
  },
  {
    icon: MapPin,
    slug: "mypagesites",
    title: "mypageSites",
    subtitle: "SEO-Optimized Website Development",
    desc: "High-performance websites built from the ground up for local search visibility and lead capture. We deliver fast-loading, mobile-first designs with structured schema markup, conversion-optimized layouts, clear calls-to-action, and SEO-ready architecture that search engines and customers both prefer. Your website becomes your most powerful local marketing asset.",
    href: "/services/mypagesites",
  },
];

const ServiceCards = () => (
  <section className="py-20 lg:py-28 bg-brand-light">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
          Service Portfolio
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
          Six Pillars of Local Market Dominance
        </h2>

        <p className="text-muted-foreground mt-5 leading-relaxed text-lg">
          Each service is built around measurable outcomes — more visibility,
          more calls, more leads. We execute every detail so you can focus on
          running your business.
        </p>
      </div>

      <div className="space-y-6 lg:space-y-8">
        {services.map((s) => (
          <div
            key={s.slug}
            className="grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-10 p-7 lg:p-10 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-shadow duration-300"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-foreground">
                {s.title}
              </h3>

              <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                {s.subtitle}
              </p>

              <Button variant="cta" size="default" className="mt-2" asChild>
                <Link href={s.href}>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

            <div>
              <p className="text-muted-foreground leading-relaxed text-[1.02rem]">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { ServiceCards };
