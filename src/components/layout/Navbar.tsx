"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Industries We Serve", href: "/industries" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "mypageSEO", href: "/services/mypageseo" },
      { label: "mypageAds", href: "/services/mypageads" },
      { label: "mypageSMO", href: "/services/mypagesmo" },
      { label: "mypageRepo", href: "/services/mypagerepo" },
      { label: "mypageContent", href: "/services/mypagecontent" },
      { label: "mypageSites", href: "/services/mypagesites" },
    ],
  },
  {
    label: "Product",
    href: "/product",
    children: [
      { label: "Overview", href: "/product" },
      { label: "About", href: "/product/about" },
      { label: "Features", href: "/product/features" },
      { label: "Pricing", href: "/product/pricing" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b shadow-sm h-16"
          : "bg-white/80 backdrop-blur-md border-b h-20"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="MyPageSEO Logo"
            width={72}
            height={18}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                href={item.href}
                exact={item.href === "/"}
                className="flex items-center gap-1 text-base font-medium text-foreground/85 hover:text-accent transition-colors"
                activeClassName="text-accent font-semibold"
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                )}
              </NavLink>

              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 w-56 pt-2">
                  <div className="bg-white border rounded-xl shadow-xl py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-foreground/75 hover:text-accent hover:bg-muted/50 transition-colors rounded-md"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Secondary - Contact */}
          <Link href="/contact">
            <button
              className="px-5 py-2.5 rounded-lg font-medium
    text-foreground bg-white border border-border
    hover:bg-muted/50 transition-all duration-200
    cursor-pointer"
            >
              Contact Us
            </button>
          </Link>

          {/* Primary - Get Started */}
          <Link href="/checkout">
            <button
              className="group flex items-center justify-center gap-1.5
    px-6 py-2.5 rounded-lg font-semibold text-white
    bg-gradient-to-r from-[#CE2C29] to-[#b82624]
    hover:from-[#b82624] hover:to-[#a3201e]
    transition-all duration-200
    shadow-[0_6px_20px_rgba(206,44,41,0.25)]
    hover:shadow-[0_10px_30px_rgba(206,44,41,0.35)]
    active:scale-[0.97]
    cursor-pointer"
            >
              Get Started
              <span className="text-lg leading-none transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </Link>
        </div>
        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="container mx-auto px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <div key={item.label}>
                <NavLink
                  href={item.href}
                  exact={item.href === "/"}
                  className="block py-3 text-base font-medium text-foreground/85 hover:text-accent"
                  activeClassName="text-accent font-semibold"
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>

                {item.children && (
                  <div className="pl-4 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-accent"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 space-y-3">
              {/* Contact */}
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <button
                  className="w-full py-3 rounded-lg font-medium
    text-foreground bg-white border border-border
    hover:bg-muted/50 transition-all duration-200
    cursor-pointer"
                >
                  Contact
                </button>
              </Link>

              {/* Get Started */}
              <Link href="/checkout" onClick={() => setMobileOpen(false)}>
                <button
                  className="group w-full flex items-center justify-center gap-1.5
    py-3 rounded-lg font-semibold text-white
    bg-gradient-to-r from-[#CE2C29] to-[#b82624]
    transition-all duration-200
    shadow-[0_6px_20px_rgba(206,44,41,0.25)]
    active:scale-[0.97]
    cursor-pointer"
                >
                  Get Started
                  <span className="text-lg leading-none transition-transform group-active:translate-x-1">
                    →
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
