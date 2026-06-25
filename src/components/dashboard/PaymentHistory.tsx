"use client";

import { useState } from "react";
import {
    CheckCircle2, XCircle, Clock,
    ChevronDown, Wallet, CalendarClock,
} from "lucide-react";

type Payment = {
    _id: string;
    razorpay_payment_id: string;
    amount: number;
    final_amount: number;
    discount_amount: number;
    customer_name: string;
    customer_email: string;
    customer_mobile: string;
    subscription_start_date: string;
    status: "SUCCESS" | "FAILED" | "PENDING";
    is_active: boolean;
    plan_id?: {
        _id: string;
        name: string;
        monthly_price: number;
        setup_fee: number;
    };
    coupon_id?: {
        _id: string;
        code: string;
    };
};

type Props = {
    payments: Payment[];
    loading: boolean;
};

const STATUS_MAP = {
    SUCCESS: { icon: CheckCircle2, label: "Paid",    cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    FAILED:  { icon: XCircle,      label: "Failed",  cls: "bg-red-50 text-red-700 border-red-200" },
    PENDING: { icon: Clock,        label: "Pending", cls: "bg-amber-50 text-amber-700 border-amber-200" },
};

const StatusBadge = ({ status }: { status: "SUCCESS" | "FAILED" | "PENDING" }) => {
    const { icon: Icon, label, cls } = STATUS_MAP[status] || STATUS_MAP.PENDING;
    return (
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-semibold ${cls}`}>
            <Icon className="w-3 h-3" />
            {label}
        </span>
    );
};

export default function PaymentHistorySection({ payments, loading }: Props) {
    const [expanded, setExpanded] = useState<string | null>(null);

    const totalPaid = payments
        .filter((p) => p.status === "SUCCESS")
        .reduce((sum, p) => sum + p.final_amount, 0);

    const currentYear = new Date().getFullYear();

    const thisYearPaid = payments
        .filter((p) =>
            p.status === "SUCCESS" &&
            new Date(p.subscription_start_date).getFullYear() === currentYear
        )
        .reduce((sum, p) => sum + p.final_amount, 0);

    const nextCharge = payments.length > 0
        ? payments.find((p) => p.is_active)?.plan_id?.monthly_price || 0
        : 0;

    return (
        <div className="space-y-6">
            <div>
                <h2 className="font-heading font-bold text-xl text-foreground">Payment History</h2>
                <p className="text-muted-foreground text-sm mt-1">All charges and invoices for your account.</p>
            </div>

            {/* Summary Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl border border-border px-5 py-4 flex items-start gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 bg-blue-50 text-blue-600">
                        <Wallet className="w-4 h-4" />
                    </span>
                    <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Total Paid</p>
                        <p className="font-heading font-bold text-xl text-foreground mt-0.5">
                            ${totalPaid.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">Lifetime</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-border px-5 py-4 flex items-start gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 bg-violet-50 text-violet-600">
                        <CalendarClock className="w-4 h-4" />
                    </span>
                    <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">This Year</p>
                        <p className="font-heading font-bold text-xl text-foreground mt-0.5">
                            ${thisYearPaid.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{currentYear}</p>
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-border px-5 py-4 flex items-start gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 bg-amber-50 text-amber-600">
                        <Clock className="w-4 h-4" />
                    </span>
                    <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Next Charge</p>
                        <p className="font-heading font-bold text-xl text-foreground mt-0.5">
                            ${nextCharge.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">Monthly Plan</p>
                    </div>
                </div>
            </div>

            {/* Loading */}
            {loading && (
                <div className="bg-white rounded-xl border border-border p-10 text-center text-muted-foreground">
                    Loading payment history...
                </div>
            )}

            {/* Empty */}
            {!loading && payments.length === 0 && (
                <div className="bg-white rounded-xl border border-border p-10 text-center text-muted-foreground">
                    No payment history found.
                </div>
            )}

            {/* Table */}
            {!loading && payments.length > 0 && (
                <div className="bg-white rounded-xl border border-border overflow-hidden">
                    <div className="hidden sm:grid grid-cols-[1fr_auto_auto] gap-4 px-6 py-3 bg-slate-50 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        <span>Description</span>
                        <span className="text-right">Amount</span>
                        <span className="text-right">Status</span>
                    </div>

                    {payments.map((p) => {
                        const isOpen    = expanded === p._id;
                        const StatusIcon = STATUS_MAP[p.status]?.icon || Clock;

                        return (
                            <div key={p._id}>
                                <button
                                    onClick={() => setExpanded(isOpen ? null : p._id)}
                                    className="w-full grid grid-cols-[1fr_auto_auto] gap-4 px-6 py-4 border-b border-border hover:bg-slate-50/70 transition-colors text-left items-center"
                                >
                                    <div className="flex items-center gap-3 min-w-0">
                                        <span className={`hidden sm:flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0
                                            ${p.status === "SUCCESS" ? "bg-emerald-50 text-emerald-600"
                                            : p.status === "FAILED"  ? "bg-red-50 text-red-600"
                                            : "bg-amber-50 text-amber-600"}`}>
                                            <StatusIcon className="w-3.5 h-3.5" />
                                        </span>
                                        <div className="min-w-0">
                                            <p className="text-sm font-medium text-foreground truncate">
                                                {p.plan_id?.name || "Subscription"}
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                {new Date(p.subscription_start_date).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-semibold text-foreground text-right tabular-nums">
                                        ${p.final_amount.toLocaleString()}
                                    </span>
                                    <div className="flex items-center justify-end gap-2">
                                        <StatusBadge status={p.status} />
                                        <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-6 py-4 bg-slate-50 border-b border-border text-xs text-muted-foreground space-y-2">
                                        <p><span className="font-medium text-foreground">Payment ID:</span> {p.razorpay_payment_id}</p>
                                        <p><span className="font-medium text-foreground">Customer:</span> {p.customer_name}</p>
                                        <p><span className="font-medium text-foreground">Email:</span> {p.customer_email}</p>
                                        <p><span className="font-medium text-foreground">Mobile:</span> {p.customer_mobile}</p>
                                        <p><span className="font-medium text-foreground">Plan:</span> {p.plan_id?.name}</p>
                                        <p><span className="font-medium text-foreground">Original Amount:</span> ${p.amount.toLocaleString()}</p>
                                        <p><span className="font-medium text-foreground">Discount:</span> ${p.discount_amount.toLocaleString()}</p>
                                        <p><span className="font-medium text-foreground">Final Amount:</span> ${p.final_amount.toLocaleString()}</p>
                                        {p.coupon_id?.code && (
                                            <p><span className="font-medium text-foreground">Coupon:</span> {p.coupon_id.code}</p>
                                        )}
                                        <p><span className="font-medium text-foreground">Active:</span> {p.is_active ? "Yes" : "No"}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
