"use client";

import { Plan } from "@/app/checkout/CheckoutClient";
import { Check, Zap } from "lucide-react";

type PlanSelectorProps = {
  plans: Plan[];
  selected: string | null;
  onSelect: (planId: string) => void;
};

const PlanBadges: Record<string, { color: string; icon: React.ReactNode; label: string }> = {
  "Local Growth": {
    color: "bg-blue-100 text-blue-700",
    icon: <Zap className="w-4 h-4" />,
    label: "Starter",
  },
  "Local Expansion": {
    color: "bg-purple-100 text-purple-700",
    icon: <Zap className="w-4 h-4" />,
    label: "Popular",
  },
  "Regional Growth": {
    color: "bg-amber-100 text-amber-700",
    icon: <Zap className="w-4 h-4" />,
    label: "Premium",
  },
};

export default function PlanSelector({
  plans,
  selected,
  onSelect,
}: PlanSelectorProps) {
  const sortedPlans = [...plans].sort(
    (a, b) => a.monthly_price - b.monthly_price
  );

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {sortedPlans.map((plan) => {
        const badge = PlanBadges[plan.name] || {
          color: "bg-slate-100 text-slate-700",
          icon: null,
          label: "Plan",
        };
        const isSelected = selected === plan._id;

        return (
          <button
            key={plan._id}
            onClick={() => onSelect(plan._id)}
            className={`relative group rounded-xl border-2 transition-all duration-300 text-left
              ${
                isSelected
                  ? "border-brand-red bg-red-50 shadow-elevated"
                  : "border-border bg-white hover:border-border hover:shadow-card"
              }`}
          >
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground">
                      {plan.name}
                    </h3>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${badge.color}`}>
                    {badge.icon}
                    {badge.label}
                  </div>
                </div>

                {plan.description && (
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                )}
              </div>

              {/* Pricing */}
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-heading font-bold text-foreground">
                    ${plan.monthly_price}
                  </span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Setup fee: <span className="font-semibold text-foreground">${plan.setup_fee}</span>
                </p>
              </div>

              {/* Selection Indicator */}
              {isSelected && (
                <div className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-brand-red text-white font-semibold">
                  <Check className="w-5 h-5" />
                  Selected
                </div>
              )}

              {!isSelected && (
                <button className="w-full py-3 px-4 rounded-lg border border-brand-red text-brand-red font-semibold hover:bg-red-50 transition-colors">
                  Choose Plan
                </button>
              )}
            </div>

            {/* Highlight border on hover when not selected */}
            {!isSelected && (
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-brand-red opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            )}
          </button>
        );
      })}
    </div>
  );
}