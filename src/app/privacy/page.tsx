import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Privacy Policy | MyPageSEO",
  description:
    "Privacy Policy of MyPageSEO, operated by Devereaux and Bhagat Private Limited. Learn how we collect, use, and safeguard your information.",
};

const lastUpdated = "February 23, 2026";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <p>
        This Privacy Policy outlines how MyPageSEO, a brand operating under
        Devereaux and Bhagat Private Limited, collects, uses, discloses, and
        safeguards information when you visit our website, use our services, or
        access the MyPageSEO platform. By using our website or services, you
        consent to the practices described in this policy.
      </p>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <div className="space-y-5">
        <p>We may collect the following categories of information:</p>
        <div>
          <h4 className="text-base font-heading font-semibold text-foreground mb-2">
            Personal Information
          </h4>
          <p>
            Name, email address, phone number, and business details submitted
            through contact forms, consultation requests, or service agreements.
          </p>
        </div>
        <div>
          <h4 className="text-base font-heading font-semibold text-foreground mb-2">
            Business Information
          </h4>
          <p>
            Company name, website URL, Google Business Profile details, and
            other business-related data provided for the purpose of service
            execution and campaign management.
          </p>
        </div>
        <div>
          <h4 className="text-base font-heading font-semibold text-foreground mb-2">
            Technical Information
          </h4>
          <p>
            IP address, browser type and version, device type, operating system,
            referring URLs, pages visited, time spent on pages, cookies, and
            analytics data collected through standard web technologies.
          </p>
        </div>
        <div>
          <h4 className="text-base font-heading font-semibold text-foreground mb-2">
            Platform Account Information
          </h4>
          <p>
            For users of the MyPageSEO platform, we collect account registration
            details, login credentials, and usage data necessary for providing
            platform functionality and support.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "3. How We Use Information",
    content: (
      <div className="space-y-3">
        <p>Information collected is used for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Providing, managing, and improving our services and platform</li>
          <li>Responding to inquiries and support requests</li>
          <li>Executing SEO and marketing campaigns for clients</li>
          <li>Generating performance reports and analytics dashboards</li>
          <li>Communicating service updates and policy changes</li>
          <li>Improving website functionality and user experience</li>
          <li>Complying with legal obligations</li>
        </ul>
      </div>
    ),
  },
  {
    title: "4. Cookies and Tracking Technologies",
    content: (
      <div className="space-y-4">
        <p>
          Our website may use cookies and similar technologies to improve user
          experience and analyze website performance. Cookies help us understand
          how visitors interact with our website.
        </p>
        <p>
          You may manage cookie preferences through your browser settings.
          Disabling cookies may affect certain website functionality.
        </p>
      </div>
    ),
  },
  {
    title: "5. Data Sharing and Disclosure",
    content: (
      <div className="space-y-4">
        <p>
          We do not sell, rent, or trade personal information to third parties
          for marketing purposes.
        </p>
        <p>
          We may share data with trusted service providers and technology
          partners who assist in delivering our services. These parties are
          contractually obligated to safeguard your information.
        </p>
        <p>
          We may disclose information if required by law or to protect the
          rights and safety of our company and clients.
        </p>
      </div>
    ),
  },
  {
    title: "6. Data Security",
    content: (
      <p>
        We implement administrative, technical, and physical safeguards to
        protect collected information. However, no transmission method is
        completely secure, and absolute security cannot be guaranteed.
      </p>
    ),
  },
  {
    title: "7. Data Retention",
    content: (
      <p>
        Data is retained only as long as necessary to fulfill service delivery,
        legal, and regulatory requirements. When no longer required, it is
        securely deleted or anonymized.
      </p>
    ),
  },
  {
    title: "8. Third-Party Links",
    content: (
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for their privacy practices and encourage users to review
        external privacy policies before sharing information.
      </p>
    ),
  },
  {
    title: "9. User Rights",
    content: (
      <div className="space-y-4">
        <p>You may have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access your personal data</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion (subject to legal obligations)</li>
          <li>Withdraw consent where applicable</li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a
            href="mailto:info@mypageseo.com"
            className="text-accent hover:underline font-medium"
          >
            info@mypageseo.com
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    title: "10. Children's Privacy",
    content: (
      <p>
        Our services are not directed toward individuals under 18. We do not
        knowingly collect personal information from children.
      </p>
    ),
  },
  {
    title: "11. Updates to This Policy",
    content: (
      <p>
        We may update this Privacy Policy periodically. Changes will be
        reflected with a revised "Last Updated" date on this page.
      </p>
    ),
  },
  {
    title: "12. Contact Information",
    content: (
      <div className="space-y-2">
        <p>For questions regarding this Privacy Policy, contact:</p>
        <div className="mt-4 space-y-1 text-foreground">
          <p>
            <strong>Company:</strong> MyPageSEO
          </p>
          <p>
            <strong>Operating Under:</strong> Devereaux and Bhagat Private
            Limited
          </p>
          <p>
            <strong>Address:</strong> Noida Sector-62, India
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
      </div>
    ),
  },
];

export default function Privacy() {
  return (
    <main className="min-h-screen">
      <section className="pt-28 pb-14 lg:pt-36 lg:pb-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            MyPageSEO is committed to protecting your privacy and handling your
            information responsibly.
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
