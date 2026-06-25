"use client";

import { useState, useEffect } from "react";
import { AlertCircle, Loader2, CheckCircle2 } from "lucide-react";

import PlanSelector from "@/components/checkout/PlanSelector";
import CouponBox, { type CouponData } from "@/components/checkout/CouponBox";
import OrderSummary from "@/components/checkout/OrderSummary";
import UserForm, { type UserData } from "@/components/checkout/UserForm";
import { getSubscriptionPlans, createSubscriptionOrder } from "../../api/Api";

export type Plan = {
  _id: string;
  name: string;
  monthly_price: number;
  setup_fee: number;
  is_active: boolean;
  description?: string | null;
};

type PricingResult = {
  monthly: number;
  setup: number;
  discount: number;
};

// Dynamically load the Razorpay script (same approach as your working test)
const loadRazorpay = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if ((window as any).Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function CheckoutClient() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [plansLoading, setPlansLoading] = useState(true);
  const [plansError, setPlansError] = useState<string | null>(null);

  const [plan, setPlan] = useState<string | null>(null);
  const [couponData, setCouponData] = useState<CouponData | null>(null);
  const [pricing, setPricing] = useState<PricingResult | null>(null);
  const [user, setUser] = useState<UserData>({});
  const [loading, setLoading] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setPlansLoading(true);
        setPlansError(null);
        const response = await getSubscriptionPlans();
        setPlans(response.data || []);
      } catch (error) {
        console.error("Failed to load plans:", error);
        setPlansError("Failed to load subscription plans. Please refresh the page.");
      } finally {
        setPlansLoading(false);
      }
    };
    fetchPlans();
  }, []);

  const isFormValid =
    !!plan &&
    !!pricing &&
    !!user.name?.trim() &&
    !!user.email?.trim() &&
    !!user.mobile?.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email || "") &&
    /^[6-9]\d{9}$/.test(user.mobile || "");

  const handlePayment = async () => {
    setPaymentError(null);

    if (!plan || !pricing || !user.name || !user.email || !user.mobile) {
      setPaymentError("Please fill in all required fields");
      return;
    }

    try {
      setLoading(true);

      // 1. Load Razorpay SDK dynamically (same as your working test)
      const loaded = await loadRazorpay();
      if (!loaded) {
        throw new Error("Failed to load Razorpay SDK. Please refresh and try again.");
      }

      // 2. Create order via your API
      const res = await createSubscriptionOrder({
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        plan_id: plan,
        ...(couponData?.coupon_code ? { coupon_code: couponData.coupon_code } : {}),
      });

      console.log("ORDER RESPONSE", res);

      if (!res?.success) {
        throw new Error(res?.message || "Failed to create order");
      }

      // 3. Your API returns: { key, amount, currency, order_id }
      const data = res.data;

      // 4. Open Razorpay — exactly like your working test
      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        order_id: data.order_id,
        name: "My Page SEO",
        description: `${plans.find((p) => p._id === plan)?.name || ""} Plan`,
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.mobile,
        },
        handler: function (response: any) {
          console.log("PAYMENT SUCCESS", response);
          // Redirect to thank-you — add server-side verification here if needed
          window.location.href = `/thank-you?payment_id=${response.razorpay_payment_id}`;
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
            setPaymentError("Payment was cancelled. You can try again.");
          },
        },
        theme: {
          color: "#E53E3E",
        },
      };

      const razorpay = new (window as any).Razorpay(options);

      razorpay.on("payment.failed", (response: any) => {
        console.error("Payment failed:", response.error);
        setPaymentError(response.error?.description || "Payment failed. Please try again.");
        setLoading(false);
      });

      razorpay.open();

    } catch (err: any) {
      console.error("Payment error:", err);
      setPaymentError(
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong. Please try again."
      );
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-light min-h-screen">
      {/* HERO */}
      <div className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 pt-24 pb-10">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Complete Your Setup
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose your plan and start generating powerful SEO reports today.
            </p>
          </div>
        </div>
      </div>

      {/* LOADING */}
      {plansLoading && (
        <div className="max-w-6xl mx-auto px-4 py-20 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="w-8 h-8 text-brand-red animate-spin" />
            <p className="text-muted-foreground">Loading plans...</p>
          </div>
        </div>
      )}

      {/* ERROR */}
      {plansError && !plansLoading && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex gap-4">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900">Unable to load plans</h3>
              <p className="text-red-800 text-sm mt-1">{plansError}</p>
            </div>
          </div>
        </div>
      )}

      {/* MAIN */}
      {!plansLoading && plans.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* LEFT */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">
                  Select Your Plan
                </h2>
                <PlanSelector plans={plans} selected={plan} onSelect={setPlan} />
              </div>

              {plan && (
                <>
                  <div className="bg-white border border-border rounded-xl p-6 shadow-card">
                    <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
                      <span>Apply Coupon</span>
                      {couponData && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                    </h3>
                    <CouponBox
                      planId={plan}
                      onCouponValidated={setCouponData}
                    />
                  </div>

                  <div className="bg-white border border-border rounded-xl p-6 shadow-card">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">
                      Your Details
                    </h3>
                    <UserForm user={user} setUser={setUser} />
                  </div>
                </>
              )}
            </div>
{plan &&
            
            <div className="lg:sticky lg:top-28 h-fit">
              <div className="bg-white border border-border rounded-2xl p-8 shadow-elevated">
                <h3 className="text-2xl font-heading font-bold mb-8 text-foreground">
                  Order Summary
                </h3>

                {plan ? (
                  <>
                    <OrderSummary
                      plan={plans.find((p) => p._id === plan) || null}
                      couponData={couponData}
                      setPricing={setPricing}
                    />

                    {paymentError && (
                      <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-800">{paymentError}</p>
                      </div>
                    )}

                    <button
                      onClick={handlePayment}
                      disabled={!isFormValid || loading}
                      className="mt-8 w-full py-4 rounded-lg font-semibold text-white text-lg
                        bg-brand-red hover:bg-brand-red-hover transition-all duration-200
                        shadow-md hover:shadow-lg active:scale-[0.98]
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
                        flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Secure Payment"
                      )}
                    </button>

                    <p className="text-xs text-muted-foreground mt-4 text-center">
                      🔒 Secured by Razorpay • Cancel anytime
                    </p>
                  </>
                ) : (
                  <div className="py-8 text-center text-muted-foreground">
                    <p>Select a plan to see pricing</p>
                  </div>
                )}
              </div>
            </div>
}
          </div>
        </div>
      )}
    </div>
  );
}