import { NextResponse } from "next/server";
import { PRICING } from "@/lib/pricing";
import { validateCoupon } from "@/lib/coupons";
import { toCents } from "@/lib/currency";

export async function POST(req: Request) {
  try {
    const { plan, coupon } = await req.json();

    const selectedPlan = PRICING[plan as keyof typeof PRICING];

    if (!selectedPlan) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    let monthly = toCents(selectedPlan.monthly);
    let setup = toCents(selectedPlan.setup);

    let discount = 0;
    let valid = false;
    let message = "";

    if (coupon) {
      const result = await validateCoupon(coupon, monthly, setup);

      if (result.valid) {
        monthly = result.monthly;
        setup = result.setup;
        discount = result.discount;
        valid = true;
        message = "Coupon applied";
      } else {
        message = "Invalid or expired coupon";
      }
    }

    return NextResponse.json({
      monthly,
      setup,
      discount,
      valid,
      message,
    });
  } catch (err) {
    console.error(err);
    return new Response("Preview failed", { status: 500 });
  }
}
