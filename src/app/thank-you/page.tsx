"use client";

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-brand-light/40 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white border rounded-2xl shadow-elevated p-10 text-center">
        {/* SUCCESS ICON */}
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
          <span className="text-green-600 text-2xl">✓</span>
        </div>

        {/* HEADLINE */}
        <h1 className="text-3xl font-heading font-bold mb-3">
          Payment Successful 🎉
        </h1>

        <p className="text-muted-foreground mb-6">
          You’re officially onboard. Your MyPageSEO journey begins now.
        </p>

        {/* DIVIDER */}
        <div className="border-t my-6" />

        {/* NEXT STEPS */}
        <div className="text-left space-y-4">
          <h2 className="font-semibold text-lg mb-2">What happens next?</h2>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>✅ Your subscription has been activated</li>
            <li>📧 A confirmation email has been sent</li>
            <li>⚙️ Our team will begin onboarding setup</li>
            <li>🚀 You’ll be ready to generate reports shortly</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8 space-y-3">
          <Link href="/">
            <button
              className="w-full py-3 rounded-lg font-semibold text-white
              bg-brand-red hover:bg-brand-red-hover transition-all duration-200
              shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Go to Homepage
            </button>
          </Link>

          <p className="text-xs text-muted-foreground">
            Need help? Reach out to our support team anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
