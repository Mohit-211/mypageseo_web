"use client";

import { useState } from "react";
import Script from "next/script";

import PlanSelector from "@/components/checkout/PlanSelector";
import CouponBox from "@/components/checkout/CouponBox";
import OrderSummary from "@/components/checkout/OrderSummary";
import UserForm from "@/components/checkout/UserForm";
import { PlanKey } from "@/lib/pricing";

type PricingResult = {
  monthly: number;
  setup: number;
  discount: number;
};

type UserData = {
  name?: string;
  email?: string;
  business?: string;
};

export default function CheckoutClient() {
  const [plan, setPlan] = useState<PlanKey | null>(null);
  const [coupon, setCoupon] = useState("");
  const [pricing, setPricing] = useState<PricingResult | null>(null);
  const [user, setUser] = useState<UserData>({});
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!plan || !pricing) {
      alert("Select a plan first");
      return;
    }

    if (!user.name || !user.email) {
      alert("Enter your details");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/payments/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan,
          couponCode: coupon,
          name: user.name,
          email: user.email,
          business: user.business,
        }),
      });

      const data = await res.json();

      const Razorpay = (window as any).Razorpay;

      if (!Razorpay || !data?.subscription?.id) {
        alert("Payment init failed");
        setLoading(false);
        return;
      }

      const rzp = new Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        subscription_id: data.subscription.id,
        name: "MyPageSEO",
        description: `${plan} Plan`,
        handler: async (response: any) => {
          await fetch("/api/payments/verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...response,
              couponId: data.couponId,
            }),
          });

          window.location.href = "/thank-you";
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      });

      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />

      <div className="bg-brand-light/40 min-h-screen">
        {/* HERO (fixes navbar clash) */}
        <div className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 pt-24 pb-10">
            <h1 className="text-3xl md:text-4xl font-heading font-bold">
              Complete Your Setup
            </h1>
            <p className="text-muted-foreground mt-2">
              Choose your plan and start generating SEO reports.
            </p>
          </div>
        </div>

        {/* MAIN */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT */}
            <div className="space-y-8">
              <div className="bg-white border rounded-xl p-6 shadow-card">
                <h2 className="text-lg font-semibold mb-5">Choose Plan</h2>
                <PlanSelector selected={plan} onSelect={setPlan} />
              </div>

              {plan && (
                <>
                  <div className="bg-white border rounded-xl p-6 shadow-card">
                    <h3 className="font-semibold mb-3">Apply Coupon</h3>
                    <CouponBox coupon={coupon} setCoupon={setCoupon} />
                  </div>

                  <div className="bg-white border rounded-xl p-6 shadow-card">
                    <h3 className="font-semibold mb-3">Your Details</h3>
                    <UserForm user={user} setUser={setUser} />
                  </div>
                </>
              )}
            </div>

            {/* RIGHT */}
            <div className="lg:sticky lg:top-28 h-fit">
              <div className="bg-white border rounded-2xl p-8 shadow-elevated">
                <h3 className="text-xl font-semibold mb-6">Order Summary</h3>

                <OrderSummary
                  plan={plan}
                  coupon={coupon}
                  setPricing={setPricing}
                />

                <button
                  onClick={handlePayment}
                  disabled={!plan || !user.name || !user.email || loading}
                  className="mt-8 w-full py-3 rounded-lg font-semibold text-white
                  bg-brand-red hover:bg-brand-red-hover transition-all duration-200
                  shadow-md hover:shadow-lg active:scale-[0.98]
                  disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Processing..." : "Secure Payment"}
                </button>

                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Secured by Razorpay • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
