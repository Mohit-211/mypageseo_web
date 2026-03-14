"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  /* Scroll shrink effect */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-md h-16"
          : "bg-background/80 backdrop-blur-md h-20"
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
              <Link
                href={item.href}
                className="flex items-center gap-1 text-base font-medium text-foreground/85 hover:text-accent transition-colors"
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                )}
              </Link>

              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 w-56 pt-2">
                  <div className="bg-card border border-border rounded-xl shadow-xl py-3 animate-in fade-in slide-in-from-top-2 duration-200">
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
        <div className="hidden lg:flex items-center">
          <Button variant="cta" size="lg" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
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
        <div className="lg:hidden bg-background border-t border-border shadow-lg max-h-[calc(100vh-64px)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="container mx-auto px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-3 text-base font-medium text-foreground/85 hover:text-accent transition-colors"
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {item.label}
                </Link>

                {item.children && (
                  <div className="pl-4 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4">
              <Button variant="cta" className="w-full" size="lg" asChild>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
