import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const lastUpdated = "February 23, 2026";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <p>By accessing the MyPageSEO website, engaging our agency services, or using the MyPageSEO platform, you acknowledge that you have read, understood, and agree to be bound by these Terms &amp; Conditions. If you do not agree to these terms, you must discontinue use of our website, services, and platform immediately.</p>
    ),
  },
  {
    title: "2. Company Information",
    content: (
      <div className="space-y-1 text-foreground">
        <p><strong>Company:</strong> MyPageSEO</p>
        <p><strong>Operating Under:</strong> Devereaux and Bhagat Private Limited</p>
        <p><strong>Location:</strong> Noida Sector-62, India</p>
        <p><strong>Email:</strong> <a href="mailto:info@mypageseo.com" className="text-accent hover:underline">info@mypageseo.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+919667698440" className="text-accent hover:underline">+91 9667698440</a></p>
      </div>
    ),
  },
  {
    title: "3. Scope of Services",
    content: (
      <p>MyPageSEO provides local SEO services, digital marketing solutions, website development, content creation services, reputation management, social media optimization, paid advertising management, and access to its proprietary reporting and tracking platform. The specific scope, deliverables, and timelines of services are defined within individual service agreements, proposals, or selected product plans.</p>
    ),
  },
  {
    title: "4. No Guarantee of Specific Results",
    content: (
      <p>While MyPageSEO employs structured strategies, industry best practices, and disciplined execution methodologies, search engine rankings, advertising performance, and digital marketing outcomes cannot be guaranteed. Results are influenced by factors outside the company's control, including but not limited to search engine algorithm updates, competitive market dynamics, industry changes, and third-party platform policies. Any projections or estimates provided are based on professional experience and should not be construed as guarantees.</p>
    ),
  },
  {
    title: "5. Client Responsibilities",
    content: (
      <div className="space-y-4">
        <p>Clients engaging MyPageSEO services are expected to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide accurate and complete business information necessary for service execution</li>
          <li>Grant timely approvals for content, campaigns, and strategic recommendations</li>
          <li>Provide access credentials to relevant platforms and accounts where required</li>
          <li>Maintain reasonable cooperation and communication throughout the engagement</li>
          <li>Ensure that all information provided complies with applicable laws and regulations</li>
        </ul>
        <p>Delays or disruptions caused by failure to fulfill these responsibilities may affect service timelines and outcomes.</p>
      </div>
    ),
  },
  {
    title: "6. Payment Terms",
    content: (
      <p>Fees, billing cycles, payment methods, and payment schedules are defined within individual service agreements or selected product plans. All invoices are due according to the terms specified in the applicable agreement. Failure to make timely payments may result in suspension or termination of services. Outstanding balances may accrue interest as permitted by applicable law.</p>
    ),
  },
  {
    title: "7. Intellectual Property",
    content: (
      <div className="space-y-4">
        <p>All content, materials, branding, proprietary systems, software, methodologies, and documentation on the MyPageSEO website and platform are the intellectual property of MyPageSEO or its licensors and are protected by applicable intellectual property laws.</p>
        <p>Clients retain ownership of their existing business assets, brand materials, and content provided to MyPageSEO for service execution, unless otherwise agreed in writing. Work product created by MyPageSEO on behalf of clients is subject to the terms defined in the applicable service agreement.</p>
      </div>
    ),
  },
  {
    title: "8. Platform Usage",
    content: (
      <div className="space-y-4">
        <p>Users of the MyPageSEO platform agree to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the platform only for its intended purposes</li>
          <li>Not attempt unauthorized access to any part of the platform or its underlying systems</li>
          <li>Not reverse engineer, decompile, or disassemble any platform components</li>
          <li>Not use the platform for any unlawful, fraudulent, or harmful purposes</li>
          <li>Maintain the confidentiality of account credentials and notify MyPageSEO of any unauthorized access</li>
        </ul>
        <p>MyPageSEO reserves the right to suspend or terminate platform access for violations of these terms.</p>
      </div>
    ),
  },
  {
    title: "9. Confidentiality",
    content: (
      <p>MyPageSEO will treat all client information, business data, and account details as confidential and will not disclose such information to third parties except as required for service delivery or as mandated by law. Clients are similarly expected to maintain confidentiality regarding MyPageSEO's proprietary methods, strategies, reporting systems, and platform technology.</p>
    ),
  },
  {
    title: "10. Limitation of Liability",
    content: (
      <p>To the maximum extent permitted by applicable law, MyPageSEO shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to the use of our website, services, or platform. This includes, without limitation, damages for loss of profits, data, business opportunities, or goodwill. MyPageSEO's total liability for any claim arising under these terms shall not exceed the fees paid by the client for the specific service giving rise to the claim during the twelve months preceding the event.</p>
    ),
  },
  {
    title: "11. Termination",
    content: (
      <p>Either party may terminate service agreements in accordance with the termination provisions defined in the specific service contract or product plan. In the absence of specific termination provisions, either party may terminate with thirty days' written notice. Upon termination, all outstanding fees and payments remain due and payable. MyPageSEO reserves the right to retain work product until all outstanding balances are settled.</p>
    ),
  },
  {
    title: "12. Third-Party Services",
    content: (
      <p>The execution of MyPageSEO services may involve the use of third-party platforms, tools, and services, including but not limited to search engines, advertising platforms, analytics providers, hosting services, and social media networks. MyPageSEO is not responsible for the independent policies, terms of service, pricing changes, or operational decisions of any third-party platform. Changes made by third-party providers may affect service delivery and outcomes.</p>
    ),
  },
  {
    title: "13. Governing Law",
    content: (
      <p>These Terms &amp; Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts located in the State of Uttar Pradesh, India, unless otherwise agreed in a separate contractual arrangement.</p>
    ),
  },
  {
    title: "14. Changes to Terms",
    content: (
      <p>MyPageSEO reserves the right to update, modify, or replace these Terms &amp; Conditions at any time without prior notice. Changes will be reflected on this page with a revised "Last Updated" date. Continued use of the website, services, or platform following any changes constitutes acceptance of the updated terms. Users are encouraged to review this page periodically.</p>
    ),
  },
  {
    title: "15. Contact Information",
    content: (
      <div className="space-y-2">
        <p>For questions, concerns, or clarifications regarding these Terms &amp; Conditions, please contact us:</p>
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

const Terms = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <section className="pt-28 pb-14 lg:pt-36 lg:pb-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">Terms &amp; Conditions</h1>
          <p className="text-muted-foreground leading-relaxed">
            These Terms &amp; Conditions govern the use of MyPageSEO's website, agency services, and platform. By accessing or using any part of our offerings, you agree to be bound by these terms. Please read them carefully.
          </p>
          <p className="text-sm text-muted-foreground/70 mt-4">Last Updated: {lastUpdated}</p>
        </div>
      </section>

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

export default Terms;
