"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Globe, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Turnstile from "react-turnstile";

const serviceOptions = [
  "Local SEO",
  "Google Ads",
  "Social Media Optimization",
  "Reputation Management",
  "Content Strategy",
  "Website Development",
  "Platform Inquiry",
];

const budgetOptions = [
  "Under ₹25,000 / $500",
  "₹25,000 – ₹50,000 / $500 – $1,000",
  "₹50,000 – ₹1,00,000 / $1,000 – $2,000",
  "₹1,00,000 – ₹2,50,000 / $2,000 – $5,000",
  "Above ₹2,50,000 / $5,000+",
  "Not sure yet",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [turnstileToken, setTurnstileToken] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      alert("Please verify that you are human.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission failed");
      }

      alert("Thank you for your inquiry. Our team will be in touch shortly.");

      setFormData({
        fullName: "",
        businessName: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });

      setTurnstileToken("");
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors";

  const labelClass =
    "block text-sm font-heading font-semibold text-foreground mb-1.5";

  return (
    <section id="contact-form" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* FORM */}
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Send an Inquiry
            </p>

            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground leading-tight mb-8">
              Tell Us About Your Business
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Business Name</label>
                  <input
                    type="text"
                    name="businessName"
                    placeholder="Your business name"
                    value={formData.businessName}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Monthly Marketing Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select budget range</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>Message / Project Details</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your business objectives, current challenges, or what you're looking for..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass + " resize-none"}
                />
              </div>

              {/* TURNSTILE */}
              <div className="pt-2">
                <Turnstile
                  sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onVerify={(token) => setTurnstileToken(token)}
                />
              </div>

              <Button
                variant="cta"
                size="lg"
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-10"
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
            </form>
          </div>

          {/* INFO */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
              Contact Details
            </p>

            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground leading-tight mb-8">
              Reach Us Directly
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-foreground">
                      Company
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      MyPageSEO
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">
                      Operating under Devereaux and Bhagat Private Limited
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-foreground">
                      Location
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Noida Sector-62, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-foreground">
                      Email
                    </h4>
                    <a
                      href="mailto:info@mypageseo.com"
                      className="text-sm text-accent hover:underline mt-1 block"
                    >
                      info@mypageseo.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-foreground">
                      Phone
                    </h4>
                    <a
                      href="tel:+919667698440"
                      className="text-sm text-accent hover:underline mt-1 block"
                    >
                      +91 9667698440
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-bold text-foreground">
                      Service Regions
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      India & North America
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END INFO */}
        </div>
      </div>
    </section>
  );
}
