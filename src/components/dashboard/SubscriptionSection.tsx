"use client";

import { useState } from "react";
import {
    CheckCircle2, AlertTriangle, Loader2, X, TrendingUp, Calendar,
    CreditCard, Sparkles, ArrowRight, FileBarChart,
} from "lucide-react";

const PLANS = [
    { id: "local-growth",     name: "Local Growth",     price: 2999,  reportCap: 50,   features: ["Up to 50 reports/mo",  "GBP audit", "Citation tracking"] },
    { id: "local-expansion",  name: "Local Expansion",  price: 5999,  reportCap: 150,  features: ["Up to 150 reports/mo", "GBP audit", "Competitor tracking", "White-label"] },
    { id: "regional-growth",  name: "Regional Growth",  price: 9999,  reportCap: null, features: ["Unlimited reports", "All features", "Priority support", "API access"] },
];

type Payment = {
    _id: string;
    is_active: boolean;
    status: "SUCCESS" | "FAILED" | "PENDING";
    subscription_start_date: string;
    final_amount: number;
    plan_id?: {
        _id: string;
        name: string;
        monthly_price: number;
        setup_fee: number;
    };
};

type Props = {
    payments: Payment[];
    loading: boolean;
};

type ModalType = "cancel" | "upgrade" | null;

export default function SubscriptionSection({ payments, loading }: Props) {
    const [modal,        setModal]        = useState<ModalType>(null);
    const [cancelReason, setCancelReason] = useState("");
    const [cancelling,   setCancelling]   = useState(false);
    const [cancelled,    setCancelled]    = useState(false);

    // ── Derive active subscription from payments ─────────────────────────
    const activePayment = payments.find((p) => p.is_active && p.status === "SUCCESS");
    const activePlanName = activePayment?.plan_id?.name?.toLowerCase().replace(/\s+/g, "-") || "";
    // Match against our known PLANS list; fall back to first plan
    const currentPlan = PLANS.find((p) => activePlanName.includes(p.id)) || PLANS[0];

    const nextBillingDate = activePayment
        ? new Date(
            new Date(activePayment.subscription_start_date).setMonth(
                new Date(activePayment.subscription_start_date).getMonth() + 1
            )
          ).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
        : "—";

    const memberSince = activePayment
        ? new Date(activePayment.subscription_start_date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
        : "—";

    // Reports used: derive from active payment or default 0
    const reportsUsed = 0; // wire to your actual API field when available
    const usagePct = currentPlan.reportCap
        ? Math.min(100, Math.round((reportsUsed / currentPlan.reportCap) * 100))
        : 0;

    const handleCancel = async () => {
        setCancelling(true);
        try {
            // TODO: await cancelSubscription({ reason: cancelReason });
            await new Promise((r) => setTimeout(r, 1200));
            setCancelled(true);
            setModal(null);
        } finally {
            setCancelling(false);
        }
    };

    if (loading) {
        return (
            <div className="bg-white rounded-2xl border border-border p-10 text-center text-muted-foreground">
                Loading subscription...
            </div>
        );
    }

    if (!activePayment && !loading) {
        return (
            <div className="space-y-6">
                <div>
                    <h2 className="font-heading font-bold text-xl text-foreground">Subscription</h2>
                    <p className="text-muted-foreground text-sm mt-1">Manage your plan, billing cycle, and cancellation.</p>
                </div>
                <div className="bg-white rounded-2xl border border-border p-10 text-center text-muted-foreground">
                    No active subscription found.
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h2 className="font-heading font-bold text-xl text-foreground">Subscription</h2>
                <p className="text-muted-foreground text-sm mt-1">Manage your plan, billing cycle, and cancellation.</p>
            </div>

            {/* Current plan card */}
            {!cancelled ? (
                <div className="bg-white rounded-2xl border border-border overflow-hidden">
                    {/* Header band */}
                    <div className="relative px-6 md:px-8 py-7 bg-gradient-to-br from-brand-slate-dark via-brand-slate-dark to-rose-950 overflow-hidden">
                        <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-brand-red/20 blur-2xl" />
                        <div className="relative flex flex-wrap items-start justify-between gap-4">
                            <div>
                                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-1.5">
                                    Current plan
                                </p>
                                <h3 className="font-heading font-bold text-2xl text-white">
                                    {activePayment?.plan_id?.name || currentPlan.name}
                                </h3>
                                <p className="text-white font-semibold text-lg mt-1">
                                    ${(activePayment?.plan_id?.monthly_price || currentPlan.price).toLocaleString()}
                                    <span className="text-white/40 font-normal text-sm">/month</span>
                                </p>
                            </div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-400/15 border border-emerald-400/30
                                text-emerald-300 rounded-full text-xs font-semibold">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Active
                            </span>
                        </div>
                    </div>

                    <div className="px-6 md:px-8">
                        {/* Billing details */}
                        <div className="grid sm:grid-cols-3 gap-6 py-6 border-b border-border">
                            <div className="flex items-start gap-3">
                                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                                    <Calendar className="w-4 h-4" />
                                </span>
                                <div>
                                    <p className="text-xs text-muted-foreground">Next billing</p>
                                    <p className="text-sm font-semibold text-foreground mt-0.5">{nextBillingDate}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-violet-50 text-violet-600 flex-shrink-0">
                                    <CreditCard className="w-4 h-4" />
                                </span>
                                <div>
                                    <p className="text-xs text-muted-foreground">Payment method</p>
                                    <p className="text-sm font-semibold text-foreground mt-0.5">Razorpay · Auto-debit</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex-shrink-0">
                                    <TrendingUp className="w-4 h-4" />
                                </span>
                                <div>
                                    <p className="text-xs text-muted-foreground">Member since</p>
                                    <p className="text-sm font-semibold text-foreground mt-0.5">{memberSince}</p>
                                </div>
                            </div>
                        </div>

                        {/* Usage meter */}
                        <div className="py-6 border-b border-border">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                                    <FileBarChart className="w-3.5 h-3.5 text-brand-red" /> Reports this cycle
                                </p>
                                <p className="text-sm font-semibold text-foreground">
                                    {reportsUsed}{currentPlan.reportCap ? ` / ${currentPlan.reportCap}` : " · Unlimited"}
                                </p>
                            </div>
                            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                                <div
                                    className="h-full rounded-full bg-gradient-to-r from-brand-red to-rose-500 transition-all duration-500"
                                    style={{ width: currentPlan.reportCap ? `${usagePct}%` : "100%" }}
                                />
                            </div>
                            {currentPlan.reportCap && usagePct >= 80 && (
                                <p className="text-xs text-amber-600 mt-1.5">
                                    You're close to your monthly limit — consider upgrading.
                                </p>
                            )}
                        </div>

                        {/* Included features */}
                        {/* <div className="py-6 border-b border-border">
                            <p className="text-sm font-semibold text-foreground mb-3">Included in your plan</p>
                            <div className="flex flex-wrap gap-2">
                                {currentPlan.features.map((f) => (
                                    <span key={f} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50
                                        border border-border rounded-full text-xs text-foreground">
                                        <CheckCircle2 className="w-3 h-3 text-brand-red" />
                                        {f}
                                    </span>
                                ))}
                            </div>
                        </div> */}

                        {/* Actions */}
                        <div className="py-6 flex flex-wrap gap-3">
                            <button onClick={() => setModal("upgrade")}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-red hover:bg-brand-red-hover text-white
                                    font-semibold text-sm transition-all duration-200 shadow-sm">
                                <Sparkles className="w-4 h-4" /> Upgrade plan
                            </button>
                            <button onClick={() => setModal("cancel")}
                                className="px-5 py-2.5 rounded-lg border-2 border-border hover:border-red-300
                                    hover:text-red-600 font-semibold text-sm text-muted-foreground transition-all duration-200">
                                Cancel subscription
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                /* Cancelled state */
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 text-center space-y-3">
                    <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto" />
                    <h3 className="font-heading font-bold text-lg text-foreground">Subscription cancelled</h3>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                        Your plan will remain active until <strong>{nextBillingDate}</strong>. After that, your account will be downgraded.
                    </p>
                    <button className="mt-2 px-5 py-2.5 rounded-lg bg-brand-red hover:bg-brand-red-hover text-white
                        font-semibold text-sm transition-all duration-200 shadow-sm">
                        Reactivate subscription
                    </button>
                </div>
            )}

            {/* Upgrade modal */}
            {modal === "upgrade" && (
                <Modal title="Choose a new plan" onClose={() => setModal(null)}>
                    <div className="space-y-3">
                        {PLANS.filter((p) => p.id !== currentPlan.id).map((p) => (
                            <div key={p.id} className="border-2 border-border rounded-xl p-4 hover:border-brand-red transition-colors">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-semibold text-foreground">{p.name}</p>
                                        <div className="flex flex-wrap gap-1.5 mt-2">
                                            {p.features.map((f) => (
                                                <span key={f} className="text-xs text-muted-foreground bg-slate-50
                                                    border border-border px-2 py-0.5 rounded-full">{f}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="font-heading font-bold text-lg text-brand-red flex-shrink-0 ml-4">
                                        ${p.price.toLocaleString()}<span className="text-xs font-normal text-muted-foreground">/mo</span>
                                    </p>
                                </div>
                                <button className="mt-3 w-full py-2 rounded-lg bg-brand-red hover:bg-brand-red-hover
                                    text-white font-semibold text-sm transition-colors inline-flex items-center justify-center gap-1.5">
                                    Switch to {p.name} <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        ))}
                    </div>
                </Modal>
            )}

            {/* Cancel modal */}
            {modal === "cancel" && (
                <Modal title="Cancel subscription" onClose={() => setModal(null)}>
                    <div className="space-y-4">
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
                            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-amber-800">
                                Your plan stays active until the end of the current billing period. You won't be charged again.
                            </p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1.5">
                                Reason for cancelling{" "}
                                <span className="text-muted-foreground font-normal">(optional)</span>
                            </label>
                            <select value={cancelReason} onChange={(e) => setCancelReason(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border-2 border-border bg-white text-sm
                                    outline-none focus:border-brand-red transition-colors">
                                <option value="">Select a reason…</option>
                                <option value="too-expensive">Too expensive</option>
                                <option value="missing-features">Missing features I need</option>
                                <option value="not-using">Not using it enough</option>
                                <option value="switching">Switching to another tool</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="flex gap-3 pt-2">
                            <button onClick={handleCancel} disabled={cancelling}
                                className="flex-1 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white
                                    font-semibold text-sm transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                                {cancelling
                                    ? <><Loader2 className="w-4 h-4 animate-spin" /> Cancelling…</>
                                    : "Yes, cancel my subscription"}
                            </button>
                            <button onClick={() => setModal(null)}
                                className="px-4 py-2.5 rounded-lg border-2 border-border hover:bg-slate-50
                                    font-semibold text-sm text-foreground transition-colors">
                                Keep plan
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

/* ── Shared modal shell ── */
function Modal({ title, children, onClose }: {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40" onClick={onClose} />
            <div className="relative bg-white rounded-2xl shadow-elevated w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                    <h3 className="font-heading font-bold text-lg text-foreground">{title}</h3>
                    <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="px-6 py-6">{children}</div>
            </div>
        </div>
    );
}
