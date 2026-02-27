import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getBlogBySlug, getAllSlugs } from "@/lib/blogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const revalidate = 60;

/* ============================= */
/* Types */
/* ============================= */
type Blog = {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  bannerImage?: string;
  author?: string;
  status: string;
  createdAt: any;
  readingTime?: number;
};

/* ============================= */
/* Static Params */
/* ============================= */
export async function generateStaticParams() {
  return await getAllSlugs();
}

/* ============================= */
/* Metadata */
/* ============================= */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = (await getBlogBySlug(slug)) as Blog | null;

  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.excerpt || "",
    openGraph: {
      title: blog.title,
      description: blog.excerpt || "",
      images: blog.bannerImage ? [blog.bannerImage] : [],
    },
  };
}

/* ============================= */
/* Format Date */
/* ============================= */
function formatDate(createdAt: any) {
  if (!createdAt) return "";

  const date = createdAt?.seconds
    ? new Date(createdAt.seconds * 1000)
    : new Date(createdAt);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* ============================= */
/* Page */
/* ============================= */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = (await getBlogBySlug(slug)) as Blog | null;

  if (!blog) return notFound();

  return (
    <main className="min-h-screen bg-background">
      {/* ========================================= */}
      {/* HERO SECTION */}
      {/* ========================================= */}
      <section className="relative bg-brand-slate-dark text-white pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-4">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>

          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {blog.author || "MyPageSEO Team"}
            </span>

            {blog.createdAt && (
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(blog.createdAt)}
              </span>
            )}

            {blog.readingTime && (
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {blog.readingTime} min read
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* COVER IMAGE */}
      {/* ========================================= */}
      {blog.bannerImage && (
        <div className="container max-w-4xl mx-auto px-4 -mt-12 mb-16">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={blog.bannerImage}
              alt={blog.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>
        </div>
      )}

      {/* ========================================= */}
      {/* CONTENT */}
      {/* ========================================= */}
      <section className="container max-w-3xl mx-auto px-4 pb-28">
        <article
          className="
    prose
    prose-lg
    max-w-none

    prose-headings:!font-heading
    prose-headings:!font-bold
    prose-headings:!text-foreground

    prose-h2:!text-3xl
    prose-h3:!text-2xl

    prose-p:!text-muted-foreground
    prose-li:!text-muted-foreground

    prose-strong:!text-foreground

    prose-a:!text-accent
    prose-a:no-underline
    hover:prose-a:underline
  "
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog.content}
          </ReactMarkdown>
        </article>
      </section>
    </main>
  );
}
