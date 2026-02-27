import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Terms & Conditions | MyPageSEO",
  description:
    "Terms and Conditions governing the use of MyPageSEO services, website, and platform.",
};

const lastUpdated = "February 23, 2026";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <p>
        By accessing the MyPageSEO website, engaging our agency services, or
        using the MyPageSEO platform, you acknowledge that you have read,
        understood, and agree to be bound by these Terms &amp; Conditions. If
        you do not agree to these terms, you must discontinue use of our
        website, services, and platform immediately.
      </p>
    ),
  },
  {
    title: "2. Company Information",
    content: (
      <div className="space-y-1 text-foreground">
        <p>
          <strong>Company:</strong> MyPageSEO
        </p>
        <p>
          <strong>Operating Under:</strong> Devereaux and Bhagat Private Limited
        </p>
        <p>
          <strong>Location:</strong> Noida Sector-62, India
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@mypageseo.com"
            className="text-accent hover:underline"
          >
            info@mypageseo.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+919667698440" className="text-accent hover:underline">
            +91 9667698440
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "3. Scope of Services",
    content: (
      <p>
        MyPageSEO provides local SEO services, digital marketing solutions,
        website development, content creation services, reputation management,
        social media optimization, paid advertising management, and access to
        its proprietary reporting and tracking platform. The specific scope,
        deliverables, and timelines of services are defined within individual
        service agreements, proposals, or selected product plans.
      </p>
    ),
  },
  {
    title: "4. No Guarantee of Specific Results",
    content: (
      <p>
        While MyPageSEO employs structured strategies and industry best
        practices, search engine rankings and marketing outcomes cannot be
        guaranteed. Results are influenced by factors outside our control,
        including algorithm updates and competitive dynamics.
      </p>
    ),
  },
  {
    title: "5. Client Responsibilities",
    content: (
      <div className="space-y-4">
        <p>Clients are expected to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide accurate business information</li>
          <li>Grant timely approvals</li>
          <li>Provide required platform access</li>
          <li>Maintain cooperation and communication</li>
          <li>Ensure legal compliance of provided materials</li>
        </ul>
      </div>
    ),
  },
  {
    title: "6. Payment Terms",
    content: (
      <p>
        Fees and billing schedules are defined within service agreements or
        selected plans. Failure to make timely payments may result in suspension
        or termination of services.
      </p>
    ),
  },
  {
    title: "7. Intellectual Property",
    content: (
      <p>
        All proprietary systems, methodologies, branding, and software are the
        intellectual property of MyPageSEO unless otherwise agreed in writing.
      </p>
    ),
  },
  {
    title: "8. Platform Usage",
    content: (
      <p>
        Platform users must use services lawfully and refrain from unauthorized
        access, reverse engineering, or misuse. Violations may result in
        suspension or termination.
      </p>
    ),
  },
  {
    title: "9. Confidentiality",
    content: (
      <p>
        Both parties agree to maintain confidentiality of proprietary and
        business-sensitive information.
      </p>
    ),
  },
  {
    title: "10. Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by law, MyPageSEO shall not be liable
        for indirect or consequential damages. Liability is limited to fees paid
        in the twelve months preceding the claim.
      </p>
    ),
  },
  {
    title: "11. Termination",
    content: (
      <p>
        Either party may terminate agreements per contractual terms. Outstanding
        payments remain due upon termination.
      </p>
    ),
  },
  {
    title: "12. Third-Party Services",
    content: (
      <p>
        MyPageSEO utilizes third-party platforms and is not responsible for
        their independent policies or operational changes.
      </p>
    ),
  },
  {
    title: "13. Governing Law",
    content: (
      <p>
        These Terms &amp; Conditions are governed by the laws of India. Disputes
        shall fall under the jurisdiction of courts in Uttar Pradesh, India.
      </p>
    ),
  },
  {
    title: "14. Changes to Terms",
    content: (
      <p>
        MyPageSEO may update these Terms at any time. Continued use constitutes
        acceptance of revised terms.
      </p>
    ),
  },
  {
    title: "15. Contact Information",
    content: (
      <div className="space-y-1 text-foreground">
        <p>
          <strong>Company:</strong> MyPageSEO
        </p>
        <p>
          <strong>Operating Under:</strong> Devereaux and Bhagat Private Limited
        </p>
        <p>
          <strong>Email:</strong> info@mypageseo.com
        </p>
        <p>
          <strong>Phone:</strong> +91 9667698440
        </p>
      </div>
    ),
  },
];

export default function Terms() {
  return (
    <main className="min-h-screen">
      <section className="pt-28 pb-14 lg:pt-36 lg:pb-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            These Terms govern the use of MyPageSEO's website, services, and
            platform.
          </p>
          <p className="text-sm text-muted-foreground/70 mt-4">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl space-y-12">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">
                {s.title}
              </h2>
              <div className="text-[0.95rem] text-muted-foreground leading-relaxed">
                {s.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <Separator />
      </div>
    </main>
  );
}
