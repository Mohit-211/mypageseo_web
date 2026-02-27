import type { Metadata } from "next";
import FAQsClient from "./FAQsClient";

export const metadata: Metadata = {
  title: "FAQs | MyPageSEO",
  description:
    "Frequently asked questions about local SEO services, pricing, engagement models, and the MyPageSEO reporting platform.",
};

export default function FAQsPage() {
  return (
    <main className="min-h-screen">
      <FAQsClient />
    </main>
  );
}
