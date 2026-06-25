"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { verifyOtp, sendOtp } from "@/api/Api";

export default function VerifyOtp() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
const type = searchParams.get("type") || "";
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  // Countdown timer for resend
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email not found. Please register again.");
      return;
    }

    if (!otp || otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await verifyOtp({
        type: type,
        email: email,
        otp: otp,
      });

      if (response?.success) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
      } else {
        setError(response?.message || "Invalid OTP. Please try again.");
      }
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Verification failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!email) {
      setError("Email not found. Please register again.");
      return;
    }

    setResendLoading(true);
    setError(null);

    try {
      const response = await sendOtp({
        type: type,
        email: email,
      });

      if (response?.success) {
        setResendTimer(60);
        setError(null);
      } else {
        setError(response?.message || "Failed to resend OTP");
      }
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Failed to resend OTP. Please try again."
      );
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-light flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-[46%] bg-brand-slate-dark flex-col justify-between p-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%) 1px,transparent 1px),linear-gradient(90deg,hsl(0 0% 100%) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-0 w-1 h-full bg-brand-red" />

        <div className="relative z-10">
          <span className="text-white font-heading font-bold text-2xl tracking-tight">
            MyPage<span className="text-brand-red">SEO</span>
          </span>
        </div>

        <div className="relative z-10 space-y-6">
          <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">
            Secure & trusted
          </p>
          <h2 className="font-heading font-bold text-4xl text-white leading-tight">
            Email verification<br />
            keeps your account<br />
            <span className="text-brand-red">safe & secure.</span>
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            We've sent a verification code to your email. Enter it below to complete your registration and unlock your MyPageSEO dashboard.
          </p>
        </div>

        <div className="relative z-10 space-y-3">
          {[
            "Verify email ownership",
            "Complete account setup",
            "Access your dashboard",
          ].map((feat) => (
            <div key={feat} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 text-brand-red" />
              </div>
              <p className="text-white/70 text-sm">{feat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 text-center">
            <span className="font-heading font-bold text-2xl text-foreground">
              MyPage<span className="text-brand-red">SEO</span>
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-border shadow-elevated p-8 md:p-10">
            <div className="mb-8">
              <h1 className="font-heading font-bold text-2xl text-foreground">
                Verify your email
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                We've sent a 6-digit code to{" "}
                <span className="font-medium text-foreground">{email}</span>
              </p>
            </div>

            {error && (
              <div className="mb-6 flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {success && (
              <div className="mb-6 flex gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-800">Email verified! Redirecting to login...</p>
              </div>
            )}

            <form onSubmit={handleVerify} noValidate className="space-y-6">
              {/* OTP Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  6-digit code <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                    setOtp(val);
                    if (error) setError(null);
                  }}
                  placeholder="000000"
                  className={`w-full px-4 py-3 rounded-lg border-2 text-sm outline-none transition-all duration-200 text-center font-mono text-lg tracking-widest
                    ${
                      error
                        ? "border-red-400 bg-red-50"
                        : "border-border bg-white hover:border-slate-300 focus:border-brand-red"
                    }`}
                  disabled={loading || success}
                />
              </div>

              <button
                type="submit"
                disabled={loading || success || otp.length !== 6}
                className="w-full py-3.5 rounded-lg bg-brand-red hover:bg-brand-red-hover text-white
                  font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg
                  active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Verifying...
                  </>
                ) : success ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Verified!
                  </>
                ) : (
                  "Verify email"
                )}
              </button>
            </form>

            {/* Resend OTP */}
            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Didn't receive the code?
              </p>
              <button
                onClick={handleResendOtp}
                disabled={resendLoading || resendTimer > 0}
                className="text-sm font-medium text-brand-red hover:underline disabled:text-muted-foreground disabled:cursor-not-allowed transition-colors"
              >
                {resendLoading ? (
                  <span className="flex items-center gap-2 justify-center">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    Sending...
                  </span>
                ) : resendTimer > 0 ? (
                  `Resend in ${resendTimer}s`
                ) : (
                  "Resend code"
                )}
              </button>
            </div>

            {/* Back to login */}
            <p className="text-center text-xs text-muted-foreground mt-6">
              Already verified?{" "}
              <Link href="/auth/login" className="text-brand-red font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}