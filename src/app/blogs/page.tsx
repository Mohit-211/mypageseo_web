import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  MapPin,
  Star,
  Megaphone,
  Share2,
  Monitor,
  PenTool,
} from "lucide-react";
import { getAllBlogs } from "@/lib/blogs";

export const revalidate = 60;

/* ═══ HERO ═══ */
function Hero() {
  return (
    <section className="relative min-h-[72vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/blogs-hero.jpg"
          alt="Professional workspace with marketing strategy documents and SEO analytics dashboard on laptop"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-slate-dark/80" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl space-y-7">
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 rounded-full px-5 py-2 text-sm text-accent font-semibold">
            <BookOpen className="w-4 h-4" />
            Insights & Resources
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-[1.1] text-primary-foreground">
            Strategic Insights for{" "}
            <span className="text-accent">Local Digital Growth.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl leading-relaxed">
            Actionable local SEO strategies and performance-driven growth
            expertise.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══ BLOG GRID ═══ */
function BlogGrid({ blogs }: { blogs: any[] }) {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Latest Articles
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Insights & Strategic Resources
          </h2>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              No Articles Published Yet
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We’re preparing high-quality insights. Check back shortly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {blogs.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={post.bannerImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-3">
                  {post.category && (
                    <span className="inline-block text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-accent text-accent-foreground">
                      {post.category}
                    </span>
                  )}

                  <h3 className="text-lg font-heading font-bold text-foreground leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors pt-1"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══ TOPICS SECTION (unchanged UI) ═══ */
const topics = [
  {
    icon: MapPin,
    title: "Local SEO & Google Maps Ranking",
    desc: "Improving map pack visibility and geographic ranking analysis.",
  },
  {
    icon: Megaphone,
    title: "Paid Advertising & Performance Campaigns",
    desc: "Structuring geo-targeted ad campaigns and optimizing ROI.",
  },
  {
    icon: Star,
    title: "Reputation & Review Strategy",
    desc: "Ethical review acquisition and credibility building.",
  },
  {
    icon: Share2,
    title: "Social Media Optimization",
    desc: "Strategic engagement that supports visibility.",
  },
  {
    icon: Monitor,
    title: "Website Performance & SEO Architecture",
    desc: "Core Web Vitals and structured data optimization.",
  },
  {
    icon: PenTool,
    title: "Content & Authority Building",
    desc: "Long-term topical authority development.",
  },
];

function TopicsCovered() {
  return (
    <section className="py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Content Categories
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight">
            Topics We Cover
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {topics.map((t) => (
            <div
              key={t.title}
              className="p-7 rounded-xl bg-card border border-border shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <t.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-heading font-bold text-foreground mb-3">
                {t.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ PAGE EXPORT (ASYNC HERE ONLY) ═══ */
export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <>
      <Hero />
      <BlogGrid blogs={blogs} />
      <TopicsCovered />
    </>
  );
}
