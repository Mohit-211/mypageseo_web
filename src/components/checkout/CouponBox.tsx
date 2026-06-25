"use client";

import { Check, AlertCircle, Loader2, Tag } from "lucide-react";
import { useState } from "react";
import { validateCoupon } from "@/api/Api";

export type CouponData = {
  coupon_id: string;
  coupon_code: string;
  discount_percentage: number;
  discount_amount: number;
};

type CouponBoxProps = {
  planId: string;
  onCouponValidated: (data: CouponData | null) => void;
};

export default function CouponBox({ planId, onCouponValidated }: CouponBoxProps) {
  const [inputValue, setInputValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);

  const handleInputChange = (value: string) => {
    setInputValue(value.toUpperCase());
    if (applied) {
      setApplied(false);
      setError(null);
      onCouponValidated(null);
    }
  };

  const handleApply = async () => {
    if (!inputValue.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const data = await validateCoupon(inputValue.trim(), planId);

      // Log the raw response so you can confirm field names from your API
      console.log("[CouponBox] validateCoupon raw response:", data);

      if (data?.success && data?.data) {
        const d = data.data;
        setApplied(true);
        onCouponValidated({
          coupon_id: d.coupon_id ?? d._id ?? "",
          coupon_code: d.coupon_code ?? inputValue.trim(),
          discount_percentage: d.discount_percentage ?? d.discountPercentage ?? 0,
          discount_amount: d.discount_amount ?? d.discountAmount ?? 0,
        });
      } else {
        setError(data?.message || "Invalid coupon code");
        onCouponValidated(null);
      }
    } catch (err: any) {
      const message =
        err?.response?.data?.message || "Failed to validate coupon. Try again.";
      setError(message);
      onCouponValidated(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleApply();
  };

  return (
    <div className="space-y-2">
      <div
        className={`relative flex items-center rounded-lg border-2 transition-all duration-200 overflow-hidden
          ${
            applied
              ? "border-green-500 bg-green-50"
              : error
              ? "border-red-400 bg-red-50"
              : focused
              ? "border-brand-red bg-white shadow-card"
              : "border-border bg-slate-50 hover:border-slate-300"
          }`}
      >
        <Tag className="w-4 h-4 text-muted-foreground ml-3 flex-shrink-0" />

        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder="Enter coupon code"
          disabled={applied || loading}
          className="flex-1 bg-transparent px-3 py-3 outline-none font-mono text-sm tracking-wider disabled:opacity-70"
        />

        {applied && (
          <div className="px-3 text-green-600">
            <Check className="w-5 h-5" />
          </div>
        )}
        {error && !applied && (
          <div className="px-3 text-red-500">
            <AlertCircle className="w-5 h-5" />
          </div>
        )}

        {!applied && (
          <button
            onClick={handleApply}
            disabled={!inputValue.trim() || loading}
            className="px-4 py-3 bg-brand-red text-white text-sm font-semibold
              hover:bg-brand-red-hover transition-colors duration-150
              disabled:opacity-40 disabled:cursor-not-allowed
              flex items-center gap-1.5 whitespace-nowrap flex-shrink-0"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Checking...
              </>
            ) : (
              "Apply"
            )}
          </button>
        )}

        {applied && (
          <button
            onClick={() => {
              setInputValue("");
              setApplied(false);
              setError(null);
              onCouponValidated(null);
            }}
            className="px-4 py-3 text-sm font-semibold text-red-600 hover:text-red-700
              hover:bg-red-50 transition-colors duration-150 whitespace-nowrap flex-shrink-0"
          >
            Remove
          </button>
        )}
      </div>

      {applied && (
        <p className="text-xs text-green-700 font-medium px-1 flex items-center gap-1">
          <Check className="w-3.5 h-3.5" />
          Coupon applied successfully!
        </p>
      )}
      {error && (
        <p className="text-xs text-red-600 px-1 flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5" />
          {error}
        </p>
      )}
      {!applied && !error && (
        <p className="text-xs text-muted-foreground px-1">
          Have a promo or referral code? Enter it above and press Apply.
        </p>
      )}
    </div>
  );
}