import "./globals.css";

import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { Toaster } from "sonner";
import { ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

/* ---------------- Fonts ---------------- */

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

/* ---------------- SEO Metadata ---------------- */

export const metadata: Metadata = {
  metadataBase: new URL("https://mypageseo.com"),

  title: {
    default: "MyPageSEO – Local SEO & White Label SEO Reporting Software",
    template: "%s | MyPageSEO",
  },

  description:
    "MyPageSEO is a powerful local SEO and white label reporting software built for agencies and businesses. Generate local rank tracking, Google Business Profile audits, citation tracking, reputation monitoring, and agency-ready white label reports.",

  keywords: [
    "Local SEO Software",
    "White Label SEO Reports",
    "Google Business Profile Audit Tool",
    "Local Rank Tracker",
    "Citation Tracker Software",
    "Reputation Management Tool",
    "SEO Reporting Software for Agencies",
  ],

  authors: [{ name: "MyPageSEO Team" }],
  creator: "MyPageSEO",
  publisher: "MyPageSEO",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "MyPageSEO – Local SEO Reporting & Agency Software",
    description:
      "Generate powerful white-label SEO reports. Track rankings, audit GBP listings, manage reputation, and scale your agency with precision.",
    url: "https://mypageseo.com",
    siteName: "MyPageSEO",
    images: [
      {
        url: "/assets/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "MyPageSEO SEO Reporting Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MyPageSEO – White Label SEO Reporting Software",
    description: "Local SEO reporting built for agencies and businesses.",
    images: ["/assets/hero-bg.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  category: "technology",
};

/* ---------------- Viewport ---------------- */

export const viewport: Viewport = {
  themeColor: "#CE2C29",
  width: "device-width",
  initialScale: 1,
};

/* ---------------- Root Layout ---------------- */

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} font-body antialiased`}
        suppressHydrationWarning
      >
        <TooltipProvider>
          <ScrollToTop />
          <Navbar />

          <main className="min-h-screen">{children}</main>

          <Footer />
          <WhatsAppFloat />

          <Toaster richColors position="top-right" />
        </TooltipProvider>

        {/* -------- Structured Data -------- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "MyPageSEO",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Local SEO and white-label reporting software for agencies and businesses.",
              url: "https://mypageseo.com",
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
