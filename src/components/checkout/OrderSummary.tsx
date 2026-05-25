"use client";

import { PRICING, PlanKey } from "@/lib/pricing";
import { useEffect, useState } from "react";

type PricingResult = {
  monthly: number;
  setup: number;
  discount: number;
  valid?: boolean;
  message?: string;
};

type Props = {
  plan: PlanKey | null;
  coupon: string;
  setPricing: (val: PricingResult) => void;
};

export default function OrderSummary({ plan, coupon, setPricing }: Props) {
  const [pricing, setLocalPricing] = useState<PricingResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPricing = async () => {
      if (!plan) return;

      setLoading(true);

      try {
        const res = await fetch("/api/payments/preview", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ plan, coupon }),
        });

        const data = await res.json();

        setLocalPricing(data);
        setPricing(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, [plan, coupon]);

  if (!plan || !pricing) return null;

  const base = PRICING[plan];

  return (
    <div className="space-y-3 text-sm">
      <div className="flex justify-between">
        <span>Plan</span>
        <span className="font-medium">{base.name}</span>
      </div>

      {loading ? (
        <p className="text-muted-foreground">Updating price...</p>
      ) : (
        <>
          <div className="flex justify-between">
            <span>Monthly</span>
            <span>${(pricing.monthly / 100).toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Setup Fee</span>
            <span>${(pricing.setup / 100).toFixed(2)}</span>
          </div>

          {pricing.discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>-${(pricing.discount / 100).toFixed(2)}</span>
            </div>
          )}

          {coupon && (
            <p
              className={`text-xs ${
                pricing.valid ? "text-green-600" : "text-red-500"
              }`}
            >
              {pricing.message}
            </p>
          )}

          <div className="border-t pt-4 flex justify-between text-base font-semibold">
            <span>Total Today</span>
            <span>${((pricing.monthly + pricing.setup) / 100).toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
}
