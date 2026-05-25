export default function CouponBox({ coupon, setCoupon }: any) {
  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Enter coupon code"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value.toUpperCase())}
        className="w-full px-4 py-2 rounded-md border bg-background
        focus:outline-none focus:ring-2 focus:ring-brand-red transition"
      />
      <p className="text-xs text-muted-foreground">
        Limited-time coupons may apply
      </p>
    </div>
  );
}
