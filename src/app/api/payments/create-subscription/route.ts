import { razorpay } from "@/lib/razorpay";
import { PRICING } from "@/lib/pricing";
import { validateCoupon } from "@/lib/coupons";
import { NextResponse } from "next/server";
import { toCents } from "@/lib/currency";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { plan, couponCode, name, email, business } = await req.json();

    const selectedPlan = PRICING[plan as keyof typeof PRICING];

    if (!selectedPlan) {
      return new Response("Invalid plan", { status: 400 });
    }

    let monthly = toCents(selectedPlan.monthly);
    let setup = toCents(selectedPlan.setup);

    let couponId: number | null = null;

    // ✅ FIX: async coupon
    if (couponCode) {
      const result = await validateCoupon(couponCode, monthly, setup);

      if (result.valid) {
        monthly = result.monthly;
        setup = result.setup;
        couponId = result.couponId ?? null;
      }
    }

    const subscription = await razorpay.subscriptions.create({
      plan_id: selectedPlan.razorpayPlanId,
      customer_notify: 1,
      total_count: 12,
      addons: [
        {
          item: {
            name: "Setup Fee",
            amount: setup,
            currency: "USD",
          },
        },
      ],
    });

    // ✅ Save pending record
    await prisma.subscription.create({
      data: {
        name,
        email,
        business,
        plan,
        razorpaySubscriptionId: subscription.id,
        status: "pending",
        amount: monthly + setup,
        currency: "USD",
      },
    });

    return NextResponse.json({
      success: true,
      subscription,
      couponId, // 👈 important for verify step
    });
  } catch (err) {
    console.error(err);
    return new Response("Something went wrong", { status: 500 });
  }
}
