import crypto from "crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get("x-razorpay-signature")!;

  const expected = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET!)
    .update(body)
    .digest("hex");

  if (expected !== signature) {
    return new Response("Invalid webhook signature", { status: 400 });
  }

  const event = JSON.parse(body);

  try {
    switch (event.event) {
      case "subscription.charged":
        await prisma.subscription.update({
          where: {
            razorpaySubscriptionId: event.payload.subscription.entity.id,
          },
          data: {
            status: "active",
            razorpayPaymentId: event.payload.payment.entity.id,
          },
        });
        break;

      case "subscription.cancelled":
        await prisma.subscription.update({
          where: {
            razorpaySubscriptionId: event.payload.subscription.entity.id,
          },
          data: {
            status: "cancelled",
          },
        });
        break;

      case "payment.failed":
        await prisma.subscription.updateMany({
          where: {
            OR: [
              {
                razorpaySubscriptionId:
                  event.payload.payment.entity.subscription_id,
              },
              {
                razorpayOrderId: event.payload.payment.entity.order_id,
              },
            ],
          },
          data: {
            status: "failed",
          },
        });
        break;

      case "payment.captured":
        await prisma.subscription.updateMany({
          where: {
            razorpayOrderId: event.payload.payment.entity.order_id,
          },
          data: {
            status: "active",
            razorpayPaymentId: event.payload.payment.entity.id,
          },
        });
        break;

      default:
        console.log("Unhandled event:", event.event);
    }

    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error(err);
    return new Response("Webhook handling failed", { status: 500 });
  }
}
