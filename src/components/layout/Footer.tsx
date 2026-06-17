"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Phone, MessageSquare, ShieldCheck, MapPin } from "lucide-react";
import { SITE_NAME, SITE_TAGLINE, CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_LINK } from "@/lib/constants";

export function Footer() {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  if (isDashboard) return null;

  return (
    <footer className="bg-navy-950 text-white border-t border-white/5">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-gold-500">NRI</span> Solutions
              </span>
            </Link>
            <p className="text-navy-200 text-sm leading-relaxed max-w-sm">
              {SITE_TAGLINE}. We provide premium property verification, home maintenance, paperwork assistance, and dedicated local representation.
            </p>
            <div className="flex items-center space-x-3 bg-navy-900 border border-white/10 rounded-xl p-4 max-w-xs">
              <ShieldCheck className="h-6 w-6 text-gold-500 flex-shrink-0" />
              <div className="text-xs text-navy-200">
                <span className="font-semibold block text-white">ISO 27001 Certified Process</span>
                Safe, verified, and legally compliant.
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-500">Quick Links</h4>
            <ul className="space-y-4 text-sm text-navy-200">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-gold-400 transition-colors">Pricing & Plans</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-gold-400 transition-colors">Client Testimonials</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-500">Our Services</h4>
            <ul className="space-y-4 text-sm text-navy-200">
              <li>
                <Link href="/services/property-land" className="hover:text-gold-400 transition-colors">Property & Land Services</Link>
              </li>
              <li>
                <Link href="/services/house-help" className="hover:text-gold-400 transition-colors">House Help Services</Link>
              </li>
              <li>
                <Link href="/services/personal-assistance" className="hover:text-gold-400 transition-colors">Personal Assistance</Link>
              </li>
              <li>
                <Link href="/dashboard/login" className="hover:text-gold-400 transition-colors">Client Portal Login</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold-500">Direct Contact</h4>
            <ul className="space-y-4 text-sm text-navy-200">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold-400 transition-colors break-all">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                <a href={`tel:${CONTACT_PHONE}`} className="hover:text-gold-400 transition-colors">
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Executive Office: Bangalore, Karnataka, India</span>
              </li>
              <li className="pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-medium px-4 py-2.5 rounded-xl text-sm transition-colors w-full shadow-lg shadow-green-600/10"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Instant WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-navy-300">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
            <Link href="/dashboard/login" className="hover:text-gold-400 transition-colors">Partner Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
