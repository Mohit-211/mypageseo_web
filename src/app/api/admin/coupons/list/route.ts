import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminSession } from "@/lib/admin";

export async function GET() {
  if (!isAdminSession()) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const coupons = await prisma.coupon.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ coupons });
  } catch (err) {
    console.error(err);
    return new Response("Failed to fetch coupons", { status: 500 });
  }
}
