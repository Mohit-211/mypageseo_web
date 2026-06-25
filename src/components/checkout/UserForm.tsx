"use client";

import { useState } from "react";

export type UserData = {
  name?: string;
  email?: string;
  mobile?: string;
  business?: string;
};

type UserFormProps = {
  user: UserData;
  setUser: (user: UserData) => void;
};

export default function UserForm({ user, setUser }: UserFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateMobile = (mobile: string) =>
    /^[6-9]\d{9}$/.test(mobile.replace(/\s/g, ""));

  const handleChange = (field: keyof UserData, value: string) => {
    setUser({ ...user, [field]: value });

    const newErrors = { ...errors };

    // Clear error for the field
    delete newErrors[field];

    // Live validation
    if (field === "email" && value && !validateEmail(value)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (field === "name" && value && value.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (field === "mobile" && value && !validateMobile(value)) {
      newErrors.mobile = "Enter a valid 10-digit Indian mobile number";
    }

    setErrors(newErrors);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 outline-none text-sm
    ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-border bg-white hover:border-slate-300 focus:border-brand-red"
    }`;

  return (
    <div className="space-y-4">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Full Name <span className="text-brand-red">*</span>
        </label>
        <input
          type="text"
          value={user.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="John Doe"
          className={inputClass("name")}
        />
        {errors.name && (
          <p className="text-xs text-red-600 mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Email Address <span className="text-brand-red">*</span>
        </label>
        <input
          type="email"
          value={user.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="john@example.com"
          className={inputClass("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-600 mt-1">{errors.email}</p>
        )}
      </div>

      {/* Mobile */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Mobile Number <span className="text-brand-red">*</span>
        </label>
        <div className="flex gap-2">
          <div className="flex items-center px-3 rounded-lg border-2 border-border bg-slate-50 text-sm text-muted-foreground select-none">
            🇮🇳 +91
          </div>
          <input
            type="tel"
            value={user.mobile || ""}
            onChange={(e) =>
              handleChange("mobile", e.target.value.replace(/\D/g, "").slice(0, 10))
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

      {/* Business Name (Optional) */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Business Name{" "}
          <span className="text-xs text-muted-foreground font-normal">(Optional)</span>
        </label>
        <input
          type="text"
          value={user.business || ""}
          onChange={(e) => handleChange("business", e.target.value)}
          placeholder="Your Agency or Business"
          className={inputClass("business")}
        />
      </div>

      {/* Trust badge */}
      <div className="px-3 py-2.5 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-xs text-blue-800">
          🔒 Your information is secure and used only to set up your account.
        </p>
      </div>
    </div>
  );
}