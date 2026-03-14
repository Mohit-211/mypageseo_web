import "./globals.css";

import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { Toaster } from "sonner";
import { ReactNode } from "react";
import Script from "next/script";

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
    "MyPageSEO is a powerful local SEO and white label reporting software built for agencies and businesses. Track local rankings, audit Google Business Profiles, monitor citations, manage reputation, and generate agency-ready white label SEO reports.",

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
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MyPageSEO SEO Reporting Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MyPageSEO – Local SEO Reporting Software",
    description:
      "Powerful local SEO reporting software with white-label reports for agencies.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
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
    <html lang="en">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} font-body antialiased`}
      >
        <TooltipProvider>
          <ScrollToTop />

          <Navbar />

          <main className="min-h-screen">{children}</main>

          <Footer />
          <WhatsAppFloat />

          <Toaster richColors position="top-right" />
        </TooltipProvider>

        {/* ---------------- Google Analytics ---------------- */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7HSGLKENBB"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7HSGLKENBB');
          `}
        </Script>

        {/* ---------------- Structured Data ---------------- */}

        <Script
          id="schema-organization"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MyPageSEO",
            url: "https://mypageseo.com",
            logo: "https://mypageseo.com/assets/logo.png",
            sameAs: [
              "https://linkedin.com/company/mypageseo",
              "https://twitter.com/mypageseo",
            ],
          })}
        </Script>

        <Script
          id="schema-software"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
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
          })}
        </Script>
      </body>
    </html>
  );
}
