import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "NRI Solutions — Your Trusted Local Representative in India",
    template: "%s | NRI Solutions",
  },
  description:
    "Property management, home maintenance, paperwork assistance, and local coordination for NRIs. Your trusted presence in India.",
  keywords: [
    "NRI property management India",
    "NRI services India",
    "Property verification India",
    "NRI home maintenance",
    "NRI representative India",
    "NRI property verification",
    "NRI tenant management",
    "NRI elder care India",
    "NRI local assistance India",
  ],
  authors: [{ name: "NRI Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nrisolutions.in",
    siteName: "NRI Solutions",
    title: "NRI Solutions — Your Trusted Local Representative in India",
    description:
      "Property management, home maintenance, paperwork assistance, and local coordination for NRIs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NRI Solutions — Your Trusted Local Representative in India",
    description:
      "Property management, home maintenance, paperwork assistance, and local coordination for NRIs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
