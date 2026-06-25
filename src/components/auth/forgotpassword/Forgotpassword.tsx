"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { sendOtp, verifyOtp, forgotPassword } from "@/api/Api";

type FormStep = "email" | "otp" | "password";

const passwordRules = [
    { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
    { label: "One uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
    { label: "One number", test: (p: string) => /\d/.test(p) },
];

export default function ForgotPassword() {
    const router = useRouter();

    // Form states
    const [step, setStep] = useState<FormStep>("email");
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // UI states
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [resendTimer, setResendTimer] = useState(0);
    const [resendLoading, setResendLoading] = useState(false);
    const [datatoken, setDataToken] = useState<string>("");
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

    const validateEmail = () => {
        if (!email.trim()) {
            setError("Email is required");
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Enter a valid email address");
            return false;
        }
        return true;
    };

    const validatePassword = () => {
        if (!passwordRules.every((r) => r.test(password))) {
            setError("Password doesn't meet the requirements below");
            return false;
        }
        if (password !== confirmPassword) {
            setError("Passwords don't match");
            return false;
        }
        return true;
    };

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!validateEmail()) return;

        setLoading(true);
        try {
            const response = await sendOtp({
                type: "FORGOT_PASSWORD",
                email: email,
            });

            if (response?.success) {
                setStep("otp");
                setResendTimer(60);
            } else {
                setError(response?.message || "Failed to send OTP");
            }
        } catch (err: any) {
            setError(
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                "Failed to send OTP. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!otp || otp.length !== 6) {
            setError("Please enter a valid 6-digit OTP");
            return;
        }

        setLoading(true);
        try {
            const response = await verifyOtp({
                type: "FORGOT_PASSWORD",
                email: email,
                otp: otp,
            });
            setDataToken(response?.data)
            if (response?.success) {
                setStep("password");
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

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!validatePassword()) return;

        setLoading(true);
        try {
            const response = await forgotPassword({
                email: email,
                password: password,
                confirm_password: confirmPassword,
                token: datatoken,
            });

            if (response?.success) {
                router.push("/auth/login?reset=success");
            } else {
                setError(response?.message || "Failed to reset password");
            }
        } catch (err: any) {
            setError(
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                err?.message ||
                "Failed to reset password. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const handleResendOtp = async () => {
        setResendLoading(true);
        setError(null);

        try {
            const response = await sendOtp({
                type: "FORGOT_PASSWORD",
                email: email,
            });

            if (response?.success) {
                setResendTimer(60);
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

    const inputClass = (field: string, hasError?: boolean) =>
        `w-full px-4 py-3 rounded-lg border-2 text-sm outline-none transition-all duration-200
    ${hasError
            ? "border-red-400 bg-red-50"
            : "border-border bg-white hover:border-slate-300 focus:border-brand-red"
        }`;

    const passwordStrength = passwordRules.filter((r) => r.test(password)).length;
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
                        Reset in seconds
                    </p>
                    <h2 className="font-heading font-bold text-4xl text-white leading-tight">
                        Forgotten your<br />
                        password? No<br />
                        <span className="text-brand-red">problem at all.</span>
                    </h2>
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                        We'll verify your identity with a code sent to your email, then let you set a new password to get back into your account.
                    </p>
                </div>

                <div className="relative z-10 space-y-3">
                    {[
                        "Secure email verification",
                        "Set a new password",
                        "Instant account access",
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
                        {/* Step 1: Email */}
                        {step === "email" && (
                            <>
                                <div className="mb-8">
                                    <h1 className="font-heading font-bold text-2xl text-foreground">
                                        Reset your password
                                    </h1>
                                    <p className="text-muted-foreground text-sm mt-1">
                                        Enter your email and we'll send you a verification code
                                    </p>
                                </div>

                                {error && (
                                    <div className="mb-6 flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-red-800">{error}</p>
                                    </div>
                                )}

                                <form onSubmit={handleSendOtp} noValidate className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-1.5">
                                            Email address <span className="text-brand-red">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            autoComplete="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (error) setError(null);
                                            }}
                                            placeholder="you@agency.com"
                                            className={inputClass("email")}
                                        />
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
                                                Sending code...
                                            </>
                                        ) : (
                                            "Send verification code"
                                        )}
                                    </button>
                                </form>

                                <p className="text-center text-xs text-muted-foreground mt-6">
                                    Remember your password?{" "}
                                    <Link href="/auth/login" className="text-brand-red font-medium hover:underline">
                                        Sign in
                                    </Link>
                                </p>
                            </>
                        )}

                        {/* Step 2: OTP */}
                        {step === "otp" && (
                            <>
                                <div className="mb-8">
                                    <button
                                        type="button"
                                        onClick={() => setStep("email")}
                                        className="text-brand-red text-sm font-medium hover:underline mb-4"
                                    >
                                        ← Back
                                    </button>
                                    <h1 className="font-heading font-bold text-2xl text-foreground">
                                        Enter verification code
                                    </h1>
                                    <p className="text-muted-foreground text-sm mt-1">
                                        We sent a code to <span className="font-medium text-foreground">{email}</span>
                                    </p>
                                </div>

                                {error && (
                                    <div className="mb-6 flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-red-800">{error}</p>
                                    </div>
                                )}

                                <form onSubmit={handleVerifyOtp} noValidate className="space-y-6">
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
                        ${error
                                                    ? "border-red-400 bg-red-50"
                                                    : "border-border bg-white hover:border-slate-300 focus:border-brand-red"
                                                }`}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading || otp.length !== 6}
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
                                        ) : (
                                            "Verify code"
                                        )}
                                    </button>
                                </form>

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
                            </>
                        )}

                        {/* Step 3: New Password */}
                        {step === "password" && (
                            <>
                                <div className="mb-8">
                                    <h1 className="font-heading font-bold text-2xl text-foreground">
                                        Create new password
                                    </h1>
                                    <p className="text-muted-foreground text-sm mt-1">
                                        Enter a strong password for your account
                                    </p>
                                </div>

                                {error && (
                                    <div className="mb-6 flex gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-red-800">{error}</p>
                                    </div>
                                )}

                                <form onSubmit={handleResetPassword} noValidate className="space-y-4">
                                    {/* Password */}
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-1.5">
                                            Password <span className="text-brand-red">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                autoComplete="new-password"
                                                value={password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                    if (error) setError(null);
                                                }}
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

                                        {password && (
                                            <div className="mt-2 space-y-1.5">
                                                <div className="flex gap-1">
                                                    {[0, 1, 2].map((i) => (
                                                        <div
                                                            key={i}
                                                            className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < passwordStrength ? strengthColor : "bg-border"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="flex flex-wrap gap-x-4 gap-y-1">
                                                    {passwordRules.map((r) => (
                                                        <span
                                                            key={r.label}
                                                            className={`text-xs flex items-center gap-1 ${r.test(password)
                                                                    ? "text-green-600"
                                                                    : "text-muted-foreground"
                                                                }`}
                                                        >
                                                            <CheckCircle
                                                                className={`w-3 h-3 ${r.test(password)
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

                                    {/* Confirm Password */}
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-1.5">
                                            Confirm password <span className="text-brand-red">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showConfirm ? "text" : "password"}
                                                autoComplete="new-password"
                                                value={confirmPassword}
                                                onChange={(e) => {
                                                    setConfirmPassword(e.target.value);
                                                    if (error) setError(null);
                                                }}
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
                                                Resetting...
                                            </>
                                        ) : (
                                            "Reset password"
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}