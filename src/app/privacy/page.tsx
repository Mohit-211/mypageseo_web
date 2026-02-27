import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const lastUpdated = "February 23, 2026";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <p>This Privacy Policy outlines how MyPageSEO, a brand operating under Devereaux and Bhagat Private Limited, collects, uses, discloses, and safeguards information when you visit our website, use our services, or access the MyPageSEO platform. By using our website or services, you consent to the practices described in this policy.</p>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <div className="space-y-5">
        <p>We may collect the following categories of information:</p>
        <div>
          <h4 className="text-base font-heading font-semibold text-foreground mb-2">Personal Information</h4>
          <p>Name, email address, phone number, and business details submitted through contact forms, consultation requests, or service agreements.</p>
        </div>
        <div>
          <h4 className="text-base font-heading font-semibold text-foreground mb-2">Business Information</h4>
          <p>Company name, website URL, Google Business Profile details, and other business-related data provided for the purpose of service execution and campaign management.</p>
        </div>
        <div>
          <h4 className="text-base font-heading font-semibold text-foreground mb-2">Technical Information</h4>
          <p>IP address, browser type and version, device type, operating system, referring URLs, pages visited, time spent on pages, cookies, and analytics data collected through standard web technologies.</p>
        </div>
        <div>
          <h4 className="text-base font-heading font-semibold text-foreground mb-2">Platform Account Information</h4>
          <p>For users of the MyPageSEO platform, we collect account registration details, login credentials, and usage data necessary for providing platform functionality and support.</p>
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
          <li>Responding to inquiries, consultation requests, and support tickets</li>
          <li>Executing SEO, advertising, and digital marketing campaigns on behalf of clients</li>
          <li>Generating performance reports and analytics dashboards</li>
          <li>Communicating service updates, policy changes, and relevant information</li>
          <li>Improving website functionality, user experience, and content relevance</li>
          <li>Complying with legal and regulatory obligations</li>
        </ul>
      </div>
    ),
  },
  {
    title: "4. Cookies and Tracking Technologies",
    content: (
      <div className="space-y-4">
        <p>Our website may use cookies, web beacons, and similar tracking technologies to improve user experience, analyze website traffic, and optimize performance. Cookies are small data files stored on your device that help us understand how visitors interact with our website.</p>
        <p>You may manage your cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of some features on our website.</p>
      </div>
    ),
  },
  {
    title: "5. Data Sharing and Disclosure",
    content: (
      <div className="space-y-4">
        <p>MyPageSEO does not sell, rent, or trade personal information to third parties for marketing purposes.</p>
        <p>We may share information with trusted service providers, hosting partners, analytics platforms, and technology vendors who assist in operating our website and delivering services. These parties are contractually obligated to handle data responsibly and in accordance with applicable privacy standards.</p>
        <p>We may also disclose information if required by law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of MyPageSEO, our clients, or others.</p>
      </div>
    ),
  },
  {
    title: "6. Data Security",
    content: (
      <p>We implement reasonable administrative, technical, and physical safeguards designed to protect the information we collect from unauthorized access, use, alteration, or disclosure. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security of your data.</p>
    ),
  },
  {
    title: "7. Data Retention",
    content: (
      <p>Personal data is retained only for as long as necessary to fulfill the purposes for which it was collected, including satisfying service delivery, legal, accounting, or reporting requirements. When data is no longer required, it is securely deleted or anonymized in accordance with our internal data management policies.</p>
    ),
  },
  {
    title: "8. Third-Party Links",
    content: (
      <p>Our website may contain links to third-party websites, platforms, or services that are not operated or controlled by MyPageSEO. We are not responsible for the privacy practices, content, or security of any third-party websites. We encourage users to review the privacy policies of any external websites before providing personal information.</p>
    ),
  },
  {
    title: "9. User Rights",
    content: (
      <div className="space-y-4">
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Request access to the personal data we hold about you</li>
          <li>Request correction of inaccurate or incomplete data</li>
          <li>Request deletion of your personal data, subject to legal and contractual obligations</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
        <p>To exercise any of these rights, please contact us at <a href="mailto:info@mypageseo.com" className="text-accent hover:underline font-medium">info@mypageseo.com</a>.</p>
      </div>
    ),
  },
  {
    title: "10. Children's Privacy",
    content: (
      <p>Our services and website are not directed toward individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected data from an individual under 18, we will take steps to delete such information promptly.</p>
    ),
  },
  {
    title: "11. Updates to This Policy",
    content: (
      <p>MyPageSEO reserves the right to update or modify this Privacy Policy at any time. Changes will be reflected on this page with a revised "Last Updated" date. We encourage users to review this policy periodically to remain informed about how we protect and manage information.</p>
    ),
  },
  {
    title: "12. Contact Information",
    content: (
      <div className="space-y-2">
        <p>For questions, concerns, or requests related to this Privacy Policy, please contact us:</p>
        <div className="mt-4 space-y-1 text-foreground">
          <p><strong>Company:</strong> MyPageSEO</p>
          <p><strong>Operating Under:</strong> Devereaux and Bhagat Private Limited</p>
          <p><strong>Address:</strong> Noida Sector-62, India</p>
          <p><strong>Email:</strong> <a href="mailto:info@mypageseo.com" className="text-accent hover:underline">info@mypageseo.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+919667698440" className="text-accent hover:underline">+91 9667698440</a></p>
        </div>
      </div>
    ),
  },
];

const Privacy = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      {/* Hero */}
      <section className="pt-28 pb-14 lg:pt-36 lg:pb-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground leading-relaxed">
            MyPageSEO, a brand of Devereaux and Bhagat Private Limited, is committed to protecting the privacy of website visitors, clients, and platform users across India and North America. This document describes how we handle your information.
          </p>
          <p className="text-sm text-muted-foreground/70 mt-4">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl space-y-12">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-heading font-bold text-foreground mb-4">{s.title}</h2>
              <div className="text-[0.95rem] text-muted-foreground leading-relaxed">{s.content}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <Separator />
      </div>
    </main>
    <Footer />
  </div>
);

export default Privacy;
