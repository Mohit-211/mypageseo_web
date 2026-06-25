"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2, AlertCircle, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/api/Api";

type FormData = {
  name: string;
  email: string;
  mobile: string;
  business: string;
  password: string;
  confirmPassword: string;
};

const passwordRules = [
  { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
  { label: "One uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  { label: "One number", test: (p: string) => /\d/.test(p) },
];

export default function Register() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    business: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Enter your full name (at least 2 characters)";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.mobile || !/^[6-9]\d{9}$/.test(form.mobile))
      e.mobile = "Enter a valid 10-digit mobile number";
    if (!passwordRules.every((r) => r.test(form.password)))
      e.password = "Password doesn't meet the requirements below";
    if (form.password !== form.confirmPassword)
      e.confirmPassword = "Passwords don't match";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    setError(null);

    const e = validate();

    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const response = await registerUser({
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        user_type: "CLIENT",
        password: form.password,
        confirm_password: form.confirmPassword,
        business_name: form.business || "",
      });

      if (response?.success) {
        // Store email temporarily for OTP verification
        localStorage.setItem("registration_email", form.email);

        // Redirect to OTP verification page
    router.push(
  `/auth/verify-otp?email=${encodeURIComponent(
    form.email
  )}&type=EMAIL_VERIFICATION`
);
      } else {
        setError(response?.message || "Failed to create account");
      }
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Couldn't create account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border-2 text-sm outline-none transition-all duration-200
    ${errors[field]
      ? "border-red-400 bg-red-50"
      : "border-border bg-white hover:border-slate-300 focus:border-brand-red"
    }`;

  const passwordStrength = passwordRules.filter((r) => r.test(form.password))
    .length;
  const strengthColor =
    passwordStrength === 0
      ? "bg-border"
      : passwordStrength === 1
        ? "bg-red-400"
        : passwordStrength === 2
          ? "bg-amber-400"
          : "bg-green-500";

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
            Free to start
          </p>
          <h2 className="font-heading font-bold text-4xl text-white leading-tight">
            Your first report<br />
            takes 3 minutes.<br />
            <span className="text-brand-red">Your clients will notice.</span>
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Join agencies already using MyPageSEO to deliver white-label local
            SEO reports that win and retain clients.
          </p>
        </div>

        <div className="relative z-10 space-y-3">
          {[
            "White-label reports with your logo",
            "GBP audits & citation tracking",
            "Cancel any time, no questions",
          ].map((feat) => (
            <div key={feat} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-brand-red" />
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
                Create your account
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Already have one?{" "}
                <Link
                  href="/auth/login"
                  className="text-brand-red font-medium hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>

            {error && (
              <div className="mb-6 flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Full name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Full name <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="Jane Smith"
                  className={inputClass("name")}
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email address <span className="text-brand-red">*</span>
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="you@agency.com"
                  className={inputClass("email")}
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Mobile number <span className="text-brand-red">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center px-3 rounded-lg border-2 border-border bg-slate-50 text-sm text-muted-foreground select-none whitespace-nowrap">
                    🇮🇳 +91
                  </div>
                  <input
                    type="tel"
                    value={form.mobile}
                    onChange={(e) =>
                      set(
                        "mobile",
                        e.target.value.replace(/\D/g, "").slice(0, 10)
                      )
                    }
                    placeholder="98765 43210"
                    maxLength={10}
                    className={`${inputClass("mobile")} flex-1`}
                  />
                </div>
                {errors.mobile && (
                  <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>
                )}
              </div>

              {/* Business */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Business / Agency name{" "}
                  <span className="text-xs text-muted-foreground font-normal">
                    (optional)
                  </span>
                </label>
                <input
                  type="text"
                  value={form.business}
                  onChange={(e) => set("business", e.target.value)}
                  placeholder="Your Agency"
                  className={inputClass("business")}
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Password <span className="text-brand-red">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={form.password}
                    onChange={(e) => set("password", e.target.value)}
                    placeholder="••••••••"
                    className={`${inputClass("password")} pr-11`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-600 mt-1">{errors.password}</p>
                )}

                {/* Strength meter */}
                {form.password && (
                  <div className="mt-2 space-y-1.5">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                            i < passwordStrength ? strengthColor : "bg-border"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {passwordRules.map((r) => (
                        <span
                          key={r.label}
                          className={`text-xs flex items-center gap-1 ${
                            r.test(form.password)
                              ? "text-green-600"
                              : "text-muted-foreground"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              r.test(form.password)
                                ? "opacity-100"
                                : "opacity-30"
                            }`}
                          />
                          {r.label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm password */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Confirm password <span className="text-brand-red">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    autoComplete="new-password"
                    value={form.confirmPassword}
                    onChange={(e) => set("confirmPassword", e.target.value)}
                    placeholder="••••••••"
                    className={`${inputClass("confirmPassword")} pr-11`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    tabIndex={-1}
                  >
                    {showConfirm ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-lg bg-brand-red hover:bg-brand-red-hover text-white
                  font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg
                  active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Creating account…
                  </>
                ) : (
                  "Create account"
                )}
              </button>
            </form>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            By creating an account you agree to our{" "}
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}