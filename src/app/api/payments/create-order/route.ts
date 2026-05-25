import { razorpay } from "@/lib/razorpay";
import { NextResponse } from "next/server";
import { toCents } from "@/lib/currency";
import { PRICING } from "@/lib/pricing";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { plan, couponCode, name, email, business } = await req.json();

    const selectedPlan = PRICING[plan as keyof typeof PRICING];

    if (!selectedPlan) {
      return new Response("Invalid plan", { status: 400 });
    }

    let amount = toCents(selectedPlan.setup);

    const order = await razorpay.orders.create({
      amount,
      currency: "USD",
      receipt: `receipt_${Date.now()}`,
    });

    // ✅ Save pending order
    await prisma.subscription.create({
      data: {
        name,
        email,
        business,
        plan,
        status: "pending",
        amount,
        currency: "USD",
      },
    });

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (err) {
    console.error(err);
    return new Response("Order creation failed", { status: 500 });
  }
}
