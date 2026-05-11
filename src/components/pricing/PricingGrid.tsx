"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, MapPin, Target, Building, Briefcase } from "lucide-react";

const plans = [
  {
    name: "Local Growth",
    label: "BEST FOR: Getting started",
    tagline: "Start showing up when people search nearby",
    pricing: {
      INR: { monthly: "₹17,500", setup: "₹5,000" },
      USD: { monthly: "$249", setup: "$200" },
      EUR: { monthly: "€199", setup: "€150" },
    },
    featured: false,
    icon: MapPin,
    features: [
      "Set up & optimize your Google Business Profile",
      "Show up for 10 important local searches",
      "Fix your business details across websites",
      "Start building customer reviews",
      "Simple monthly report (clear progress)",
      "Email support",
    ],
  },
  {
    name: "Local Expansion",
    label: "MOST POPULAR",
    tagline: "Turn visibility into real calls & leads",
    pricing: {
      INR: { monthly: "₹32,500", setup: "₹10,000" },
      USD: { monthly: "$399", setup: "$350" },
      EUR: { monthly: "€349", setup: "€300" },
    },
    featured: true,
    icon: Target,
    features: [
      "Everything in Local Growth",
      "Rank for up to 25 high-intent searches",
      "Understand & beat local competitors",
      "Stronger presence across directories",
      "Help you get more & better reviews",
      "Clear reports with insights",
      "Priority support",
    ],
  },
  {
    name: "Regional Growth",
    label: "BEST FOR: Scaling",
    tagline: "Expand into multiple areas or cities",
    pricing: {
      INR: { monthly: "₹47,500", setup: "₹15,000" },
      USD: { monthly: "$549", setup: "$500" },
      EUR: { monthly: "€499", setup: "€450" },
    },
    featured: false,
    icon: Building,
    features: [
      "Everything in Local Expansion",
      "Rank across multiple areas or cities",
      "Build presence for each location",
      "Track performance across locations",
      "Monthly strategy call",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise",
    label: "CUSTOM SOLUTION",
    tagline: "Built specifically for your business goals",
    pricing: null,
    featured: false,
    icon: Briefcase,
    features: [
      "Custom SEO strategy for your business",
      "Multiple locations & large scale support",
      "Dedicated SEO team",
      "Priority execution & support",
      "Custom reporting & dashboards",
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
