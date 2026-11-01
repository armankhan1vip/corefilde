import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FM App - Secure Facilities Management",
  description: "Secure Facilities Management Application",
  // Security metadata
  robots: {
    index: false,
    follow: false,
  },
  // Prevent search engines from caching
  other: {
    "googlebot": "noindex, nofollow",
    "bingbot": "noindex, nofollow",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        {/* Security meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="theme-color" content="#ffffff" />

        {/* Disable autocomplete on forms */}
        <meta name="autocomplete" content="off" />

        {/* Prevent phone number detection */}
        <meta name="format-detection" content="telephone=no" />

        {/* CSP meta tag as fallback */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
