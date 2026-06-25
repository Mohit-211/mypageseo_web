"use client"
import { useState, useEffect, useCallback } from "react";
import {
    LayoutDashboard, KeyRound, CreditCard, User,
    LogOut, Menu, X, TrendingUp, FileText,
    Bell, ArrowUpRight, Loader2,
} from "lucide-react";
import ChangePasswordSection from "./ChangePassword";
import PaymentHistorySection from "./PaymentHistory";
import ProfileSection from "./ProfileSection";
import SubscriptionSection from "./SubscriptionSection";
import { getUserProfile, getSubscriptionPaymentsHistory } from "@/api/Api";
import { useRouter } from "next/navigation";

type Section = "overview" | "profile" | "password" | "payments" | "subscription";

const NAV = [
    { id: "overview" as Section,      label: "Overview",         icon: LayoutDashboard },
    { id: "profile" as Section,       label: "Profile",          icon: User },
    { id: "password" as Section,      label: "Change Password",  icon: KeyRound },
    { id: "payments" as Section,      label: "Payment History",  icon: CreditCard },
    { id: "subscription" as Section,  label: "Subscription",     icon: TrendingUp },
];

export default function Dashboard() {
    const router =useRouter()
    const [active, setActive]           = useState<Section>("overview");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // ── Shared data state ────────────────────────────────────────────────
    const [user, setUser]               = useState<any>(null);
    const [payments, setPayments]       = useState<any[]>([]);
    const [userLoading, setUserLoading] = useState(true);
    const [paymentsLoading, setPaymentsLoading] = useState(true);

    const go = (s: Section) => { setActive(s); setSidebarOpen(false); };

    // ── Fetchers (exposed as callbacks so children can trigger re-fetch) ─
    const fetchUserProfile = useCallback(async () => {
        try {
            const res = await getUserProfile();
            if (res?.success) setUser(res.data);
        } catch (err) {
            console.error("Profile Error:", err);
        } finally {
            setUserLoading(false);
        }
    }, []);

    const fetchPayments = useCallback(async () => {
        try {
            const res = await getSubscriptionPaymentsHistory();
            if (res?.success) setPayments(res.data || []);
        } catch (err) {
            console.error("Payments Error:", err);
        } finally {
            setPaymentsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUserProfile();
        fetchPayments();
    }, [fetchUserProfile, fetchPayments]);

    // ── Derived overview data ─────────────────────────────────────────────
    const activePayment    = payments.find((p) => p.is_active && p.status === "SUCCESS");
    const latestSuccess    = payments.find((p) => p.status === "SUCCESS");
    const totalReports     = user?.total_reports ?? 0; // adjust key to your actual API shape

    const overviewCards = [
        {
            label:   "Active Plan",
            value:   activePayment?.plan_id?.name || "—",
            sub:     activePayment
                ? `Renews ${new Date(activePayment.subscription_start_date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}`
                : "No active plan",
            accent:  "bg-blue-500",
            action:  "Manage",
            section: "subscription" as Section,
        },
        {
            label:   "Last Payment",
            value:   latestSuccess ? `$${latestSuccess.final_amount.toLocaleString()}` : "—",
            sub:     latestSuccess
                ? `${new Date(latestSuccess.subscription_start_date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} · Success`
                : "No payments yet",
            accent:  "bg-emerald-500",
            action:  "View history",
            section: "payments" as Section,
        },
        {
            label:   "Reports Generated",
            value:   totalReports > 0 ? String(totalReports) : "—",
            sub:     "This billing cycle",
            accent:  "bg-violet-500",
            action:  null,
            section: null,
        },
    ];

    const isLoading = userLoading || paymentsLoading;
const handleLogout =()=>{
localStorage.removeItem("seotoken")
 router.replace("/auth/login");

}
    return (
        <div className="h-screen bg-brand-light flex overflow-hidden">
            {/* ── Sidebar ── */}
            <>
                {sidebarOpen && (
                    <div className="fixed inset-0 bg-black/40 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
                )}
                <aside className={`fixed top-0 left-0 h-screen w-64 bg-brand-slate-dark z-30 flex flex-col
                    transition-transform duration-300
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0 lg:static lg:z-auto lg:h-screen`}
                >
                    <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
                        <span className="font-heading font-bold text-lg text-white tracking-tight">
                            MyPage<span className="text-brand-red">SEO</span>
                        </span>
                        <button className="lg:hidden text-white/50 hover:text-white" onClick={() => setSidebarOpen(false)}>
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* User pill */}
                    <div className="px-4 pt-5 pb-4">
                        <div className="flex items-center gap-3 px-2 py-2">
                            <div className="relative flex-shrink-0">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-red to-rose-700
                                    flex items-center justify-center text-white font-semibold text-sm">
                                    {user?.user_profile?.name?.charAt(0)?.toUpperCase() || "U"}
                                </div>
                                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full
                                    bg-emerald-400 ring-2 ring-brand-slate-dark" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-white text-sm font-semibold truncate leading-tight">
                                    {user?.user_profile?.name || "User"}
                                </p>
                                <p className="text-white/35 text-xs truncate">{user?.email || ""}</p>
                            </div>
                        </div>
                    </div>

                    {/* Nav */}
                    <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto">
                        <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-white/30">
                            Account
                        </p>
                        {NAV.map(({ id, label, icon: Icon }) => {
                            const isActive = active === id;
                            return (
                                <button key={id} onClick={() => go(id)}
                                    className={`relative w-full flex items-center gap-3 pl-3.5 pr-3 py-2.5 rounded-lg
                                        text-sm font-medium transition-all duration-150 text-left
                                        ${isActive ? "bg-white/[0.06] text-white" : "text-white/55 hover:text-white hover:bg-white/[0.04]"}`}
                                >
                                    {isActive && (
                                        <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-brand-red" />
                                    )}
                                    <span className={`flex items-center justify-center w-7 h-7 rounded-md flex-shrink-0 transition-colors
                                        ${isActive ? "bg-brand-red text-white" : "bg-white/[0.04] text-white/50"}`}>
                                        <Icon className="w-3.5 h-3.5" />
                                    </span>
                                    {label}
                                </button>
                            );
                        })}
                    </nav>

                    {/* Logout */}
                    <div className="px-3 py-4 border-t border-white/10" onClick={()=>{handleLogout()}}>
                        <button className="w-full flex items-center gap-3 pl-3.5 pr-3 py-2.5 rounded-lg text-sm font-medium
                            text-white/45 hover:text-rose-300 hover:bg-rose-400/[0.08] transition-all duration-150">
                            <span className="flex items-center justify-center w-7 h-7 rounded-md bg-white/[0.04] flex-shrink-0">
                                <LogOut className="w-3.5 h-3.5" />
                            </span>
                            Sign out
                        </button>
                    </div>
                </aside>
            </>

            {/* ── Main area ── */}
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
                <header className="bg-white/90 backdrop-blur-sm border-b border-border px-6 h-16 flex items-center gap-4 sticky top-0 z-10">
                    <button className="lg:hidden text-muted-foreground hover:text-foreground" onClick={() => setSidebarOpen(true)}>
                        <Menu className="w-5 h-5" />
                    </button>
                    <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-medium text-muted-foreground/70 uppercase tracking-wide leading-none">
                            Account
                        </p>
                        <h1 className="font-heading font-bold text-lg text-foreground leading-tight mt-0.5">
                            {NAV.find((n) => n.id === active)?.label ?? "Dashboard"}
                        </h1>
                    </div>
                    <button className="relative w-9 h-9 rounded-full flex items-center justify-center
                        text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors">
                        <Bell className="w-[18px] h-[18px]" />
                        <span className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-brand-red rounded-full ring-2 ring-white" />
                    </button>
                </header>

                <main className="flex-1 p-6 md:p-8 max-w-4xl w-full mx-auto">
                    {active === "overview" && (
                        <OverviewSection
                            onNavigate={go}
                            cards={overviewCards}
                            userName={user?.user_profile?.name || ""}
                            isLoading={isLoading}
                        />
                    )}
                    {active === "profile" && (
                        <ProfileSection
                            userData={user}
                            onProfileUpdated={fetchUserProfile}
                        />
                    )}
                    {active === "password" && (
                        <ChangePasswordSection />
                    )}
                    {active === "payments" && (
                        <PaymentHistorySection
                            payments={payments}
                            loading={paymentsLoading}
                        />
                    )}
                    {active === "subscription" && (
                        <SubscriptionSection
                            payments={payments}
                            loading={paymentsLoading}
                        />
                    )}
                </main>
            </div>
        </div>
    );
}

/* ── Overview Section ─────────────────────────────────────────────────── */
type OverviewCard = {
    label: string;
    value: string;
    sub: string;
    accent: string;
    action: string | null;
    section: Section | null;
};

function OverviewSection({
    onNavigate,
    cards,
    userName,
    isLoading,
}: {
    onNavigate: (s: Section) => void;
    cards: OverviewCard[];
    userName: string;
    isLoading: boolean;
}) {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="font-heading font-bold text-2xl text-foreground">
                    Welcome back{userName ? `, ${userName.split(" ")[0]}` : ""} 👋
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                    Here's what's happening with your account.
                </p>
            </div>

            {/* Summary cards */}
            <div className="grid sm:grid-cols-3 gap-4">
                {cards.map((c) => (
                    <div key={c.label}
                        className="relative bg-white rounded-xl border border-border p-5 overflow-hidden hover:shadow-sm transition-shadow duration-200">
                        <span className={`absolute top-0 left-0 right-0 h-[3px] ${c.accent}`} />
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                            {c.label}
                        </p>
                        {isLoading ? (
                            <div className="h-7 w-24 bg-slate-100 rounded animate-pulse mt-1 mb-2" />
                        ) : (
                            <p className="font-heading font-bold text-2xl text-foreground">{c.value}</p>
                        )}
                        <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>
                        {c.action && c.section && (
                            <button
                                onClick={() => onNavigate(c.section!)}
                                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-red hover:text-brand-red-hover"
                            >
                                {c.action} <ArrowUpRight className="w-3 h-3" />
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* Quick actions */}
            <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-4 h-4 text-brand-red" />
                    <h3 className="font-semibold text-foreground">Quick actions</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                    {[
                        { label: "Update profile",        section: "profile"      as Section, icon: User },
                        { label: "Change password",       section: "password"     as Section, icon: KeyRound },
                        { label: "View payment history",  section: "payments"     as Section, icon: CreditCard },
                        { label: "Manage subscription",   section: "subscription" as Section, icon: TrendingUp },
                    ].map((q) => (
                        <button key={q.label} onClick={() => onNavigate(q.section)}
                            className="group flex items-center gap-3 px-4 py-3 rounded-lg border border-border
                                hover:border-brand-red/40 hover:bg-red-50/40 transition-all duration-150 text-left">
                            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-slate-50 border border-border
                                text-muted-foreground group-hover:text-brand-red group-hover:bg-white group-hover:border-brand-red/30 flex-shrink-0">
                                <q.icon className="w-4 h-4" />
                            </span>
                            <span className="text-sm font-medium text-foreground flex-1">{q.label}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-brand-red transition-colors" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
