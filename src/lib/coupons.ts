import { prisma } from "@/lib/prisma";

export async function validateCoupon(
  code: string,
  monthly: number,
  setup: number
) {
  const coupon = await prisma.coupon.findUnique({
    where: { code: code.toUpperCase() },
  });

  // ❌ Not found
  if (!coupon) {
    return { valid: false, monthly, setup, discount: 0 };
  }

  // ❌ Inactive
  if (!coupon.isActive) {
    return { valid: false, monthly, setup, discount: 0 };
  }

  // ❌ Already used
  if (coupon.used) {
    return { valid: false, monthly, setup, discount: 0 };
  }

  // ❌ Expired
  if (new Date() > coupon.expiresAt) {
    return { valid: false, monthly, setup, discount: 0 };
  }

  let discountMonthly = 0;
  let discountSetup = 0;

  if (coupon.type === "flat") {
    discountSetup = coupon.value;
  } else {
    discountMonthly = Math.floor((monthly * coupon.value) / 100);
    discountSetup = Math.floor((setup * coupon.value) / 100);
  }

  return {
    valid: true,
    monthly: Math.max(0, monthly - discountMonthly),
    setup: Math.max(0, setup - discountSetup),
    discount: discountMonthly + discountSetup,
    couponId: coupon.id,
  };
}
