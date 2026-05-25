import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminSession } from "@/lib/admin";

export async function POST(req: Request) {
  if (!isAdminSession()) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const { code, type, value } = await req.json();

    if (!code || !type || !value) {
      return new Response("Missing fields", { status: 400 });
    }

    if (!["flat", "percentage"].includes(type)) {
      return new Response("Invalid type", { status: 400 });
    }

    const existing = await prisma.coupon.findUnique({
      where: { code: code.toUpperCase() },
    });

    if (existing) {
      return new Response("Coupon already exists", { status: 400 });
    }

    const coupon = await prisma.coupon.create({
      data: {
        code: code.toUpperCase(),
        type,
        value,
        expiresAt: new Date(Date.now() + 12 * 60 * 60 * 1000),
      },
    });

    return NextResponse.json({ success: true, coupon });
  } catch (err) {
    console.error(err);
    return new Response("Failed to create coupon", { status: 500 });
  }
}
