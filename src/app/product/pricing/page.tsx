import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "MyPageSEO Pricing | Local SEO Reporting Plans",
  description:
    "Explore MyPageSEO pricing plans for businesses and agencies. Structured local SEO reporting, white-label capabilities, scalable keyword tracking, and flexible billing options.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <PricingClient />
    </main>
  );
}
