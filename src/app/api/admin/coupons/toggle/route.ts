import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminSession } from "@/lib/admin";

export async function POST(req: Request) {
  if (!isAdminSession()) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const { id } = await req.json();

    const coupon = await prisma.coupon.findUnique({
      where: { id },
    });

    if (!coupon) {
      return new Response("Coupon not found", { status: 404 });
    }

    const updated = await prisma.coupon.update({
      where: { id },
      data: {
        isActive: !coupon.isActive,
      },
    });

    return NextResponse.json({ success: true, coupon: updated });
  } catch (err) {
    console.error(err);
    return new Response("Toggle failed", { status: 500 });
  }
}
