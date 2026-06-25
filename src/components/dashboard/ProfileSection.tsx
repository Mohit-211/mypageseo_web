"use client";
import { useEffect, useState } from "react";
import { Loader2, CheckCircle2, Camera } from "lucide-react";
import { updateUserProfile } from "../../api/Api";

type Profile = {
    name: string;
    email: string;
    mobile: string;
    business: string;
};

type Props = {
    userData: any;
    onProfileUpdated: () => Promise<void>;
};

export default function ProfileSection({ userData, onProfileUpdated }: Props) {
    const [form, setForm]     = useState<Profile>({ name: "", email: "", mobile: "", business: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [saved, setSaved]   = useState(false);

    // Sync form whenever Dashboard passes fresh data
    useEffect(() => {
        if (!userData) return;
        setForm({
            name:     userData.user_profile?.name          || "",
            email:    userData.email                       || "",
            mobile:   userData.user_profile?.mobile        || "",
            business: userData.user_profile?.business_name || "",
        });
    }, [userData]);

    const setField = (field: keyof Profile, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
        setSaved(false);
    };

    const validate = () => {
        const e: Record<string, string> = {};
        if (!form.name.trim() || form.name.trim().length < 2)
            e.name = "Enter your full name";
        if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            e.email = "Enter a valid email address";
        if (form.mobile && !/^[6-9]\d{9}$/.test(form.mobile))
            e.mobile = "Enter a valid 10-digit number";
        return e;
    };

    const handleSave = async (ev: React.FormEvent) => {
        ev.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length) { setErrors(validationErrors); return; }

        setLoading(true);
        try {
            const res = await updateUserProfile({
                name:          form.name,
                mobile:        form.mobile,
                business_name: form.business,
            });
            if (res?.success) {
                setSaved(true);
                await onProfileUpdated(); // re-fetch in Dashboard → sidebar also updates
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (!userData) {
        return (
            <div className="bg-white rounded-2xl border border-border p-10 text-center">
                <Loader2 className="w-6 h-6 animate-spin mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Loading profile...</p>
            </div>
        );
    }

    const inputClass = (field: string) =>
        `w-full px-4 py-3 rounded-lg border-2 text-sm outline-none transition-all duration-200
        ${errors[field]
            ? "border-red-400 bg-red-50"
            : "border-border bg-white hover:border-slate-300 focus:border-brand-red"
        }
        disabled:bg-slate-100 disabled:text-slate-500 disabled:cursor-not-allowed disabled:hover:border-border`;

    return (
        <div className="space-y-6">
            <div>
                <h2 className="font-heading font-bold text-xl text-foreground">Profile</h2>
                <p className="text-muted-foreground text-sm mt-1">Update your personal information.</p>
            </div>

            <div className="bg-white rounded-2xl border border-border overflow-hidden">
                {/* Header */}
                <div className="px-6 md:px-8 py-7 bg-gradient-to-br from-brand-slate-dark via-brand-slate-dark to-rose-950">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-red to-rose-700
                                flex items-center justify-center text-white font-heading font-bold text-2xl ring-4 ring-white/10">
                                {form.name?.charAt(0)?.toUpperCase() || "U"}
                            </div>
                            <button type="button" className="absolute -bottom-1 -right-1 w-6 h-6 bg-white border-2
                                border-brand-slate-dark rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors">
                                <Camera className="w-3 h-3 text-muted-foreground" />
                            </button>
                        </div>
                        <div>
                            <p className="font-semibold text-white">{form.name}</p>
                            <p className="text-sm text-white/50">{form.email}</p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="px-6 md:px-8 py-7">
                    <form onSubmit={handleSave} noValidate className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1.5">
                                    Full name <span className="text-brand-red">*</span>
                                </label>
                                <input type="text" value={form.name}
                                    onChange={(e) => setField("name", e.target.value)}
                                    className={inputClass("name")} />
                                {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1.5">
                                    Business / Agency
                                </label>
                                <input type="text" value={form.business}
                                    onChange={(e) => setField("business", e.target.value)}
                                    className={inputClass("business")}
                                    placeholder="Your Agency" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1.5">
                                Email address <span className="text-brand-red">*</span>
                            </label>
                            <input type="email" value={form.email} disabled
                                className={`${inputClass("email")} cursor-not-allowed bg-slate-100 text-slate-500`} />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-foreground mb-1.5">
                                Mobile number
                            </label>
                            <div className="flex gap-2">
                                <div className="flex items-center px-3 rounded-lg border-2 border-border bg-slate-50
                                    text-sm text-muted-foreground select-none whitespace-nowrap">
                                    🇮🇳 +91
                                </div>
                                <input type="tel" value={form.mobile}
                                    onChange={(e) => setField("mobile", e.target.value.replace(/\D/g, "").slice(0, 10))}
                                    maxLength={10}
                                    className={`${inputClass("mobile")} flex-1`} />
                            </div>
                            {errors.mobile && <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>}
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            <button type="submit" disabled={loading}
                                className="px-6 py-2.5 rounded-lg bg-brand-red hover:bg-brand-red-hover text-white
                                    font-semibold text-sm transition-all duration-200 shadow-sm
                                    disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2">
                                {loading ? (
                                    <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</>
                                ) : "Save Changes"}
                            </button>
                            {saved && (
                                <span className="flex items-center gap-1.5 text-sm text-emerald-600 font-medium">
                                    <CheckCircle2 className="w-4 h-4" /> Saved Successfully
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
