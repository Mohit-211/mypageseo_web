import { PRICING } from "@/lib/pricing";

export default function PlanSelector({ selected, onSelect }: any) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {Object.entries(PRICING).map(([key, plan]: any) => {
        const active = selected === key;

        return (
          <div
            key={key}
            onClick={() => onSelect(key)}
            className={`cursor-pointer rounded-lg border p-5 transition-all
            ${
              active
                ? "border-brand-red bg-brand-light shadow-card"
                : "hover:border-brand-slate hover:shadow-soft"
            }`}
          >
            <h3 className="text-lg font-semibold">{plan.name}</h3>

            <p className="text-2xl font-bold mt-2">
              ${plan.monthly}
              <span className="text-sm text-muted-foreground"> /month</span>
            </p>

            <p className="text-sm text-muted-foreground mt-1">
              Setup: ${plan.setup}
            </p>
          </div>
        );
      })}
    </div>
  );
}
