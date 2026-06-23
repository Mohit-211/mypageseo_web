"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, MapPin, Target, Building, Briefcase } from "lucide-react";

const plans = [
  {
    name: "Base",
    label: "BEST FOR: Getting started",
    tagline: "Local SEO setup for one business location",
    pricing: {
      INR: { monthly: "₹17,500", setup: "₹5,000" },
      USD: { monthly: "$249", setup: "$200" },
      EUR: { monthly: "€199", setup: "€150" },
    },
    featured: false,
    icon: MapPin,
    features: [
      "Local SEO audit of your website & Google Business Profile",
      "Google Business Profile setup & full optimization",
      "Keyword rank tracking report",
      "Optimization for 7 keywords",
      "Local SEO setup for one business location",
      "Business listing correction across 2+ local directories",
      "3 Google Business Profile posts every month",
      "Monthly performance report",
      "Email support",
      // "On-page SEO for 7 target keywords",
      // "Keyword rank tracking report (10 keywords)",
    ],
  },
  {
    name: "Standard",
    label: "MOST POPULAR",
    tagline: "Full local SEO management for one location",
    pricing: {
      INR: { monthly: "₹32,500", setup: "₹10,000" },
      USD: { monthly: "$399", setup: "$350" },
      EUR: { monthly: "€349", setup: "€300" },
    },
    featured: true,
    icon: Target,
    features: [
      "Everything in Base +",
      "Optimization for 15 keywords",
      "Local SEO setup for up to 3 business locations",
      "Business listing correction across 5+ local directories",
      "7 Google Business Profile posts every month",
      "Monthly strategy call",
      "Priority support",
    ],
  },
  {
    name: "Elite",
    label: "BEST FOR: Scaling",
    tagline: "Local SEO management across multiple locations",
    pricing: {
      INR: { monthly: "₹47,500", setup: "₹15,000" },
      USD: { monthly: "$549", setup: "$500" },
      EUR: { monthly: "€499", setup: "€450" },
    },
    featured: false,
    icon: Building,
    features: [
      "Everything in Standard +",
      "Optimization for 25 keywords",
      "Local SEO setup for up to 5 business locations",
      "Business listing correction across multiple directories",
      "12 Google Business Profile posts every month",
      "Bi-weekly strategy call",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise",
    label: "CUSTOM SOLUTION",
    tagline: "A custom-built local SEO plan for your business",
    pricing: null,
    featured: false,
    icon: Briefcase,
    features: [
      "Custom local SEO strategy based on your business goals",
      "SEO setup & management for unlimited locations",
      "Dedicated SEO team & account manager",
      "Custom reporting dashboard",
      "Priority execution & support SLA",
    ],
  },
];

const PricingGrid = () => {
  const [currency, setCurrency] = useState("INR");
  useEffect(() => {
    const detected = document.body.dataset.currency;
    if (detected) setCurrency(detected);
  }, []);
  const handleToggle = (cur: string) => {
    setCurrency(cur);
    document.cookie = `currency=${cur}; path=/`;
  };
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Pick a plan based on how fast you want to grow
          </h2>
          <p className="text-muted-foreground">
            No confusing jargon. No hidden tricks. Just clear work and
            measurable results.
          </p>
        </div>
        {/* Toggle */}
        <div className="flex justify-center mb-14">
          <div className="flex bg-background border border-border rounded-xl p-1 shadow-sm">
            {["INR", "USD", "EUR"].map((cur) => (
              <button
                key={cur}
                onClick={() => handleToggle(cur)}
                className={`px-5 py-2 text-sm rounded-lg transition-all ${
                  currency === cur
                    ? "bg-accent text-white shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cur}
              </button>
            ))}
          </div>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const price = plan.pricing?.[currency as keyof typeof plan.pricing];
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                  plan.featured
                    ? "bg-card border-2 border-accent shadow-xl scale-[1.02]"
                    : "bg-card border border-border hover:shadow-lg"
                }`}
              >
                {/* Label */}
                <span className="text-xs font-semibold text-accent mb-3">
                  {plan.label}
                </span>
                {/* Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <plan.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.tagline}
                </p>
                {/* Price */}
                {price ? (
                  <>
                    <div className="mb-2">
                      <span className="text-3xl font-bold">
                        {price.monthly}
                      </span>
                      <span className="text-xs text-muted-foreground ml-1">
                        /month
                      </span>
                    </div>
                    <div className="mb-6 text-sm text-muted-foreground">
                      Setup: {price.setup}
                    </div>
                  </>
                ) : (
                  <div className="mb-6 text-lg font-semibold">
                    Custom Pricing
                  </div>
                )}
                {/* What you get */}
                <p className="text-sm font-medium mb-3">What you get:</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-accent mt-1" />
                      {f}
                    </li>
                  ))}
                </ul>
                {/* CTA */}
                <Button
                  variant={plan.featured ? "cta" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link href="/contact">
                    {plan.pricing ? "Get Started" : "Talk to Us"}
                  </Link>
                </Button>
                {/* Trust line */}
                <p className="text-xs text-muted-foreground text-center mt-3">
                  No long-term contracts
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingGrid;
