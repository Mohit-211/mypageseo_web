"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { loginUser } from "@/api/Api";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const resetSuccess = searchParams.get("reset");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [unverifiedEmail, setUnverifiedEmail] = useState<string | null>(null);

  useEffect(() => {
    if (resetSuccess === "success") {
      setError(null);
    }
  }, [resetSuccess]);

  const validate = () => {
    const e: Record<string, string> = {};

    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address";
    }

    if (!form.password) {
      e.password = "Password is required";
    }

    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    setError(null);
    setUnverifiedEmail(null);

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await loginUser({
        email: form.email,
        password: form.password,
      });

      console.log("Login Response:", res);

      if (res?.success) {
        const token = res?.data?.tokens?.access?.token;

        if (token) {
          localStorage.setItem("seotoken", token);
        }

        if (res?.data?.user) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }

        router.push("/dashboard");
      } else {
        // Check if error is due to unverified email
        const errorMessage =
          res?.message || res?.error || "Login failed";

        if (
          errorMessage.toLowerCase().includes("not verified") ||
          errorMessage.toLowerCase().includes("verify") ||
          res?.error_code === "EMAIL_NOT_VERIFIED"
        ) {
          setUnverifiedEmail(form.email);
          setError(
            "Your email hasn't been verified yet. Please verify it first."
          );
        } else {
          setError(errorMessage);
        }
      }
    } catch (err: any) {
      console.error(err);

      const errorMessage =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Couldn't sign in. Please try again.";

      // Check if error is due to unverified email
      if (
        errorMessage.toLowerCase().includes("not verified") ||
        errorMessage.toLowerCase().includes("verify") ||
        err?.response?.data?.error_code === "EMAIL_NOT_VERIFIED"
      ) {
        setUnverifiedEmail(form.email);
        setError(
          "Your email hasn't been verified yet. Please verify it first."
        );
      } else {
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

 const handleRedirectToVerify = () => {
  if (unverifiedEmail) {
    localStorage.setItem("registration_email", unverifiedEmail);

    router.push(
      `/auth/verify-otp?email=${encodeURIComponent(
        unverifiedEmail
      )}&type=EMAIL_VERIFICATION`
    );
  }
};

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border-2 text-sm outline-none transition-all duration-200
    ${errors[field]
      ? "border-red-400 bg-red-50"
      : "border-border bg-white hover:border-slate-300 focus:border-brand-red"
    }`;

  return (
    <div className="min-h-screen bg-brand-light flex">
      {/* Left Panel */}
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
            Trusted by 2,000+ agencies
          </p>

          <h2 className="font-heading font-bold text-4xl text-white leading-tight">
            Every local ranking.
            <br />
            Every client report.
            <br />
            <span className="text-brand-red">One dashboard.</span>
          </h2>

          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            White-label SEO reports, GBP audits, citation tracking — all under
            your brand.
          </p>
        </div>

        <div className="relative z-10 flex gap-8">
          {[
            ["98%", "Client retention"],
            ["4.9★", "Average rating"],
            ["2M+", "Reports generated"],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="text-white font-heading font-bold text-xl">
                {val}
              </p>
              <p className="text-white/50 text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
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
                Sign in to your account
              </h1>

              <p className="text-muted-foreground text-sm mt-1">
                Don't have an account?{" "}
                <Link
                  href="/auth/register"
                  className="text-brand-red font-medium hover:underline"
                >
                  Create one free
                </Link>
              </p>
            </div>

            {/* Password reset success message */}
            {resetSuccess === "success" && (
              <div className="mb-6 flex gap-3 bg-green-50 border border-green-200 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-800">
                  Password reset successfully! You can now sign in with your new
                  password.
                </p>
              </div>
            )}

            {error && (
              <div className="mb-6">
                <div className="flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4 mb-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">{error}</p>
                </div>

                {/* Verify email button if email is unverified */}
                {unverifiedEmail && (
                  <button
                    onClick={handleRedirectToVerify}
                    className="w-full py-2.5 rounded-lg bg-brand-red/10 border border-brand-red text-brand-red
                      font-medium text-sm transition-all duration-200 hover:bg-brand-red/20
                      active:scale-[0.98]"
                  >
                    Verify email instead
                  </button>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email address
                </label>

                <input
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      email: e.target.value,
                    });

                    if (errors.email) {
                      setErrors({
                        ...errors,
                        email: "",
                      });
                    }
                  }}
                  placeholder="you@agency.com"
                  className={inputClass("email")}
                />

                {errors.email && (
                  <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Password
                  </label>

                  <Link
                    href="/auth/forgot-password"
                    className="text-xs text-brand-red hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={form.password}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        password: e.target.value,
                      });

                      if (errors.password) {
                        setErrors({
                          ...errors,
                          password: "",
                        });
                      }
                    }}
                    placeholder="••••••••"
                    className={`${inputClass("password")} pr-11`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
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
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-lg bg-brand-red hover:bg-brand-red-hover text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            By signing in you agree to our{" "}
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