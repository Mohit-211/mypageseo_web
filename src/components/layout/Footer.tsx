import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowUpRight,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Blogs", href: "/blogs" },
    { label: "FAQs", href: "/faqs" },
    { label: "Services", href: "/services" },
    { label: "Get in Touch", href: "/contact" },
  ];

  const services = [
    { label: "mypageSEO", href: "/services/mypageseo" },
    { label: "mypageAds", href: "/services/mypageads" },
    { label: "mypageSMO", href: "/services/mypagesmo" },
    { label: "mypageRepo", href: "/services/mypagerepo" },
    { label: "mypageContent", href: "/services/mypagecontent" },
    { label: "mypageSites", href: "/services/mypagesites" },
  ];

  const socials = [
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-brand-slate-dark">
      <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo_white.png"
                alt="MyPageSEO Logo"
                width={160}
                height={40}
                priority
                className="object-contain brightness-110"
              />
            </Link>

            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-accent">
              Local Visibility. Real Growth.
            </p>

            <p className="text-sm text-white/70 leading-relaxed">
              A brand of Devereaux and Bhagat Private Limited — delivering
              strategic local SEO and digital marketing for businesses across
              India and North America.
            </p>

            <div className="flex gap-3 pt-2">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-sm text-white/75 hover:text-white transition-colors"
                  >
                    <span>{label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
              Services
            </p>
            <ul className="space-y-3">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/75 hover:text-accent transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@mypageseo.com"
                  className="flex items-center gap-4 text-sm text-white/75 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Mail className="w-4 h-4 text-accent group-hover:text-white" />
                  </div>
                  info@mypageseo.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+919667698440"
                  className="flex items-center gap-4 text-sm text-white/75 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Phone className="w-4 h-4 text-accent group-hover:text-white" />
                  </div>
                  +91 9667698440
                </a>
              </li>

              <li className="flex items-center gap-4 text-sm text-white/75">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                Noida Sector-62, India
              </li>

              <li className="flex items-center gap-4 text-sm text-white/75">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-accent" />
                </div>
                India & North America
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Devereaux and Bhagat Private Limited.
            All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <Link
              href="/privacy"
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link
              href="/terms"
              className="text-xs text-white/40 hover:text-white transition-colors"
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
