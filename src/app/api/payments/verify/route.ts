import crypto from "crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      razorpay_payment_id,
      razorpay_subscription_id,
      razorpay_order_id,
      razorpay_signature,
      couponId,
    } = body;

    const generatedSignature = razorpay_order_id
      ? crypto
          .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
          .update(`${razorpay_order_id}|${razorpay_payment_id}`)
          .digest("hex")
      : crypto
          .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
          .update(`${razorpay_payment_id}|${razorpay_subscription_id}`)
          .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return new Response("Invalid signature", { status: 400 });
    }

    let updated;

    // ✅ Subscription flow
    if (razorpay_subscription_id) {
      updated = await prisma.subscription.updateMany({
        where: {
          razorpaySubscriptionId: razorpay_subscription_id,
        },
        data: {
          razorpayPaymentId: razorpay_payment_id,
          status: "active",
        },
      });
    }

    // ✅ Order flow
    else if (razorpay_order_id) {
      updated = await prisma.subscription.updateMany({
        where: {
          razorpayOrderId: razorpay_order_id,
        },
        data: {
          razorpayPaymentId: razorpay_payment_id,
          status: "active",
        },
      });
    }

    // ⚠️ If nothing updated → log (silent bugs killer)
    if (!updated || updated.count === 0) {
      console.warn("⚠️ No subscription record updated", {
        razorpay_subscription_id,
        razorpay_order_id,
      });
    }

    // ✅ Consume coupon ONLY after success
    if (couponId) {
      await prisma.coupon.update({
        where: { id: couponId },
        data: {
          used: true,
          isActive: false,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return new Response("Verification failed", { status: 500 });
  }
}
