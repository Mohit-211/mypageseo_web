"use client";

import { useEffect } from "react";
import { Plan } from "@/app/checkout/CheckoutClient";
import { CouponData } from "@/components/checkout/CouponBox";

type OrderSummaryProps = {
  plan: Plan | null;
  couponData: CouponData | null;
  setPricing: (pricing: { monthly: number; setup: number; discount: number }) => void;
};

export default function OrderSummary({ plan, couponData, setPricing }: OrderSummaryProps) {
  const discount = couponData?.discount_amount ?? 0;
  const setupFee = plan?.setup_fee ?? 0;
  const monthlyPrice = plan?.monthly_price ?? 0;
  const totalFirstMonth = setupFee + monthlyPrice - discount;

  useEffect(() => {
    if (!plan) return;
    setPricing({ monthly: monthlyPrice, setup: setupFee, discount });
  }, [plan, couponData, monthlyPrice, setupFee, discount, setPricing]);

  if (!plan) {
    return (
      <div className="space-y-4 py-8 text-center text-muted-foreground">
        <p className="text-sm">Select a plan to see pricing details</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Plan Name */}
      <div className="pb-4 border-b border-border">
        <p className="text-sm text-muted-foreground">Selected Plan</p>
        <p className="text-xl font-semibold text-foreground mt-1">{plan.name}</p>
      </div>

      {/* Pricing Breakdown */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-foreground">Monthly Subscription</span>
          <span className="font-semibold text-foreground">${monthlyPrice}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-foreground">Setup Fee</span>
          <span className="font-semibold text-foreground">${setupFee}</span>
        </div>

        {/* Show coupon row whenever couponData exists, even if discount is 0 */}
        {couponData && (
          <div className="flex justify-between items-center text-green-700 bg-green-50 -mx-3 px-3 py-2 rounded">
            <span className="text-sm font-medium">
              {couponData.coupon_code}
              {couponData.discount_percentage > 0 && (
                <span className="ml-1 text-green-600">({couponData.discount_percentage}% off)</span>
              )}
            </span>
            <span className="font-semibold">
              {discount > 0 ? `-$${discount}` : "Applied"}
            </span>
          </div>
        )}
      </div>

      {/* Total for First Month */}
      <div className="bg-gradient-to-r from-brand-red/10 to-brand-red/5 rounded-lg p-4 space-y-2 border border-brand-red/20">
        <p className="text-sm text-muted-foreground">Total for First Month</p>
        <div className="flex justify-between items-baseline">
          <span className="text-3xl font-heading font-bold text-brand-red">
            ${totalFirstMonth}
          </span>
          <span className="text-sm text-muted-foreground">
            then ${monthlyPrice}/month
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="pt-2 text-xs text-muted-foreground space-y-2">
        <div className="flex gap-2">
          <span className="text-brand-red mt-0.5">•</span>
          <span>Setup fee is charged once at signup</span>
        </div>
        <div className="flex gap-2">
          <span className="text-brand-red mt-0.5">•</span>
          <span>Monthly billing starts immediately</span>
        </div>
        <div className="flex gap-2">
          <span className="text-brand-red mt-0.5">•</span>
          <span>Cancel anytime with no questions asked</span>
        </div>
      </div>
    </div>
  );
}