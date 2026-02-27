import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-slate-dark text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-heading font-bold">
              MyPage<span className="text-accent">SEO</span>
            </span>

            <p className="text-sm font-medium text-primary-foreground/50 italic">
              Local Visibility. Real Growth.
            </p>

            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              A brand of Devereaux and Bhagat Private Limited. Expert local SEO
              and digital marketing execution for businesses across India and
              North America.
            </p>

            <div className="flex gap-3 pt-2">
              {["linkedin", "twitter", "facebook", "instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 rounded-md bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/50 hover:bg-accent hover:text-accent-foreground transition-colors text-xs font-semibold uppercase"
                    aria-label={social}
                  >
                    {social[0].toUpperCase()}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wider mb-6 text-primary-foreground/80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Product", href: "/product" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blogs", href: "/blogs" },
                { label: "FAQs", href: "/faqs" },
                { label: "Get in Touch", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wider mb-6 text-primary-foreground/80">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "mypageSEO", href: "/services/mypageseo" },
                { label: "mypageAds", href: "/services/mypageads" },
                { label: "mypageSMO", href: "/services/mypagesmo" },
                { label: "mypageRepo", href: "/services/mypagerepo" },
                { label: "mypageContent", href: "/services/mypagecontent" },
                { label: "mypageSites", href: "/services/mypagesites" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading font-semibold uppercase tracking-wider mb-6 text-primary-foreground/80">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a
                  href="mailto:info@mypageseo.com"
                  className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                >
                  info@mypageseo.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a
                  href="tel:+919667698440"
                  className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                >
                  +91 9667698440
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/50">
                  Noida Sector-62, India
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Globe className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/50">
                  Service Regions: India & North America
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/35">
            © {new Date().getFullYear()} Devereaux and Bhagat Private Limited.
            All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-primary-foreground/35 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-primary-foreground/35 hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
