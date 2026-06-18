"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MessageSquare, ShieldCheck, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { SITE_NAME, SITE_TAGLINE, CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Pricing & Plans", href: "/pricing" },
  { label: "Client Testimonials", href: "/testimonials" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Property & Land", href: "/services/property-land" },
  { label: "House Help", href: "/services/house-help" },
  { label: "Personal Assistance", href: "/services/personal-assistance" },
  { label: "Client Portal", href: "/dashboard/login" },
];

/* Inline SVG social icons — lucide-react removed brand icons in recent versions */
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M13.232 10.768L20 4" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "Twitter", href: "#", icon: XIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
];

export function Footer() {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  if (isDashboard) return null;

  return (
    <footer className="relative">
      {/* ═══════════════════════════════════════════════════════════
          LARGE CTA BANNER
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative gradient-mesh overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/[0.03] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-navy-500/[0.08] rounded-full blur-[80px]" />
        </div>

        <div className="container-custom py-20 md:py-28 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center space-x-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-500/80 mb-6">
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold-500/50" />
                <span>Start Your Journey</span>
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gold-500/50" />
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Let&apos;s secure your{" "}
              <span className="text-gradient-premium">peace of mind.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-navy-300 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Book a free consultation with our team and discover how we can be your trusted presence in India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact?type=consultation">
                <Button className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-navy-950 font-semibold rounded-full px-8 py-3 text-sm tracking-wide shadow-[0_0_30px_rgba(212,168,83,0.2)] hover:shadow-[0_0_40px_rgba(212,168,83,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white/[0.1] text-white hover:bg-white/[0.04] hover:border-green-500/30 rounded-full px-8 py-3 text-sm tracking-wide transition-all duration-300">
                  <MessageSquare className="mr-2 h-4 w-4 text-green-400" />
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Gold Decorative Separator ──────────────────────────── */}
      <div className="relative h-[1px]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FOOTER COLUMNS
          ═══════════════════════════════════════════════════════════ */}
      <div className="relative bg-navy-950">
        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-navy-800/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-900/30 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom py-16 md:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* ─── Column 1: Brand & Info (4 cols) ───────────────── */}
            <div className="lg:col-span-4 space-y-6">
              <Link href="/" className="inline-flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-500 via-gold-400 to-gold-600 rotate-45 rounded-[5px] flex items-center justify-center shadow-lg shadow-gold-500/10 group-hover:shadow-gold-500/30 transition-shadow duration-300">
                  <ShieldCheck className="h-5 w-5 text-navy-950 -rotate-45" />
                </div>
                <span className="text-3xl font-bold tracking-tight">
                  <span className="text-gradient-premium">NRI</span>
                  <span className="text-white ml-1">Solutions</span>
                </span>
              </Link>

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-500/60 -mt-1">
                {SITE_TAGLINE}
              </p>

              <p className="text-navy-300 text-sm leading-relaxed max-w-sm">
                Premium property verification, home maintenance, paperwork assistance, and dedicated local representation for NRIs worldwide.
              </p>

              {/* Trust badge */}
              <div className="card-premium-dark p-4 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-5 w-5 text-gold-500" />
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-white block">ISO 27001 Certified</span>
                    <span className="text-[11px] text-navy-400">Safe, verified, and legally compliant.</span>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-navy-400 hover:text-gold-400 hover:border-gold-500/30 hover:bg-gold-500/[0.05] transition-all duration-300"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* ─── Column 2: Quick Links (2 cols) ────────────────── */}
            <div className="lg:col-span-2 space-y-6">
              <h4 className="flex items-center text-sm font-semibold uppercase tracking-wider text-white">
                <span className="w-[3px] h-4 bg-gradient-to-b from-gold-500 to-gold-400 rounded-full mr-3" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-sm text-navy-300 hover:text-white transition-colors duration-200"
                    >
                      <span className="w-1 h-1 rounded-full bg-navy-700 group-hover:bg-gold-500 group-hover:shadow-[0_0_6px_rgba(212,168,83,0.4)] transition-all duration-200 mr-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ─── Column 3: Services (3 cols) ───────────────────── */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="flex items-center text-sm font-semibold uppercase tracking-wider text-white">
                <span className="w-[3px] h-4 bg-gradient-to-b from-gold-500 to-gold-400 rounded-full mr-3" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-sm text-navy-300 hover:text-white transition-colors duration-200"
                    >
                      <span className="w-1 h-1 rounded-full bg-navy-700 group-hover:bg-gold-500 group-hover:shadow-[0_0_6px_rgba(212,168,83,0.4)] transition-all duration-200 mr-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ─── Column 4: Contact (3 cols) ────────────────────── */}
            <div className="lg:col-span-3 space-y-6">
              <h4 className="flex items-center text-sm font-semibold uppercase tracking-wider text-white">
                <span className="w-[3px] h-4 bg-gradient-to-b from-gold-500 to-gold-400 rounded-full mr-3" />
                Get in Touch
              </h4>

              <div className="space-y-3">
                {/* Email card */}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group card-premium-dark p-3.5 flex items-center space-x-3 hover:border-gold-500/20"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold-500/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/15 transition-colors duration-300">
                    <Mail className="h-4 w-4 text-gold-500" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-navy-500 block">Email</span>
                    <span className="text-sm text-navy-200 group-hover:text-white transition-colors duration-200 break-all">{CONTACT_EMAIL}</span>
                  </div>
                </a>

                {/* Phone card */}
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="group card-premium-dark p-3.5 flex items-center space-x-3 hover:border-gold-500/20"
                >
                  <div className="w-9 h-9 rounded-lg bg-gold-500/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/15 transition-colors duration-300">
                    <Phone className="h-4 w-4 text-gold-500" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-navy-500 block">Phone</span>
                    <span className="text-sm text-navy-200 group-hover:text-white transition-colors duration-200">{CONTACT_PHONE}</span>
                  </div>
                </a>

                {/* Location card */}
                <div className="card-premium-dark p-3.5 flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-gold-500/[0.08] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-gold-500" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-navy-500 block">Office</span>
                    <span className="text-sm text-navy-200">Bangalore, Karnataka, India</span>
                  </div>
                </div>

                {/* WhatsApp button */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center bg-green-600/90 hover:bg-green-500 text-white font-medium px-4 py-3 rounded-xl text-sm transition-all duration-300 w-full shadow-lg shadow-green-600/10 hover:shadow-green-500/20 mt-4"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Instant WhatsApp Chat
                  <ExternalLink className="h-3 w-3 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom Bar with Animated Gradient Border ──────────── */}
        <div className="relative">
          {/* Animated gradient top border */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent animate-gradient-shift" style={{ backgroundSize: "300% 100%" }} />

          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-[12px] text-navy-500">
                © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <Link href="/privacy" className="text-[12px] text-navy-500 hover:text-gold-400/80 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-[12px] text-navy-500 hover:text-gold-400/80 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/dashboard/login" className="text-[12px] text-navy-500 hover:text-gold-400/80 transition-colors duration-200">
                  Partner Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
