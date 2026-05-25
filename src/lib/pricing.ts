export const PRICING = {
  LOCAL_GROWTH: {
    name: "Local Growth",
    monthly: 249, // USD
    setup: 200,
    razorpayPlanId: "plan_Sswd0sQ7mwJSMJ",
  },
  LOCAL_EXPANSION: {
    name: "Local Expansion",
    monthly: 399,
    setup: 350,
    razorpayPlanId: "plan_StaZIqxLtHqYDU",
  },
  REGIONAL_GROWTH: {
    name: "Regional Growth",
    monthly: 549,
    setup: 500,
    razorpayPlanId: "plan_Staa3moHYXKXT3",
  },
} as const;

export type PlanKey = keyof typeof PRICING;
