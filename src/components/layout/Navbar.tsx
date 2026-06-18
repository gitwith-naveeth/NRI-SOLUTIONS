"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, MessageSquare, Shield, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDashboard = pathname.startsWith("/dashboard");

  if (isDashboard) return null;

  return (
    <>
      {/* ─── Premium Top Announcement Bar ─────────────────────── */}
      <AnimatePresence>
        {showTopBar && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
          >
            <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border-b border-gold-500/20">
              <div className="container-custom flex items-center justify-center py-1.5 relative">
                <div className="flex items-center space-x-4 text-[11px] tracking-wide text-navy-200">
                  <span className="flex items-center space-x-1.5">
                    <MapPin className="h-3 w-3 text-gold-500" />
                    <span>Serving NRIs in <span className="text-gold-400 font-medium">15+ Indian Cities</span></span>
                  </span>
                  <span className="hidden sm:inline text-navy-600">|</span>
                  <span className="hidden sm:flex items-center space-x-1.5">
                    <Clock className="h-3 w-3 text-gold-500" />
                    <span><span className="text-gold-400 font-medium">24/7</span> Support</span>
                  </span>
                </div>
                <button
                  onClick={() => setShowTopBar(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-navy-400 hover:text-white transition-colors p-0.5 rounded-full hover:bg-white/5 cursor-pointer"
                  aria-label="Close announcement"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Main Navbar ──────────────────────────────────────── */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
          showTopBar ? "top-[30px]" : "top-0"
        }`}
      >
        {/* Frosted glass background with gold bottom line on scroll */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled
              ? "bg-navy-950/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
              : "bg-transparent"
          }`}
        />
        {/* Animated gold bottom border line on scroll */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px]"
          initial={false}
          animate={{
            background: scrolled
              ? "linear-gradient(90deg, transparent 0%, rgba(212,168,83,0.4) 20%, rgba(212,168,83,0.6) 50%, rgba(212,168,83,0.4) 80%, transparent 100%)"
              : "transparent",
          }}
          transition={{ duration: 0.5 }}
        />

        <div className="container-custom relative flex items-center justify-between w-full h-20">
          {/* ─── Logo with Gold Diamond ─────────────────────────── */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Gold diamond/shield icon */}
            <div className="relative flex items-center justify-center">
              <div className="w-9 h-9 bg-gradient-to-br from-gold-500 via-gold-400 to-gold-600 rotate-45 rounded-[5px] flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:shadow-gold-500/40 transition-shadow duration-300">
                <Shield className="h-4 w-4 text-navy-950 -rotate-45" />
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-gradient-premium">NRI</span>
              <span className="text-white ml-1">Solutions</span>
            </span>
          </Link>

          {/* ─── Desktop Nav Links ──────────────────────────────── */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label} className="relative group px-4 py-2">
                    <button className="flex items-center text-[13px] font-medium text-navy-200 hover:text-white transition-colors duration-300 tracking-wide uppercase">
                      {link.label}
                      <ChevronDown className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 text-navy-400 group-hover:text-gold-500" />
                    </button>
                    {/* Animated underline */}
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-gold-500 to-gold-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                    {/* Dropdown with glass morphism */}
                    <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="w-64 rounded-2xl bg-navy-900/90 backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)] py-2 overflow-hidden">
                        {/* Subtle top gradient line */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
                        {link.children.map((subLink) => (
                          <Link
                            key={subLink.label}
                            href={subLink.href}
                            className="group/item relative flex items-center px-5 py-3 text-sm text-navy-200 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
                          >
                            {/* Gold left border on hover */}
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-gold-500 rounded-full group-hover/item:h-5 transition-all duration-200" />
                            <span className="ml-1">{subLink.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 ${
                      isActive ? "text-gold-400" : "text-navy-200 group-hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Animated underline - slides from left */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-gold-500 to-gold-400 rounded-full transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ─── Desktop CTA ────────────────────────────────────── */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[13px] text-navy-300 hover:text-green-400 transition-colors duration-300 px-3 py-2 rounded-full hover:bg-white/[0.04]"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
            <Link href="/contact?type=consultation">
              <Button className="bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-navy-950 font-semibold rounded-full px-6 py-2.5 text-sm tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(212,168,83,0.2)] hover:shadow-[0_0_30px_rgba(212,168,83,0.4)] hover:scale-[1.03] active:scale-[0.98]">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* ─── Mobile Navigation Toggle ───────────────────────── */}
          <div className="flex lg:hidden items-center space-x-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="text-white hover:bg-white/[0.06] p-2.5 rounded-xl transition-all duration-300 cursor-pointer">
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-navy-950/95 backdrop-blur-2xl border-l border-white/[0.06] text-white p-0 w-[320px] overflow-y-auto"
              >
                {/* Mobile header */}
                <div className="p-6 pb-0">
                  <SheetTitle className="text-left text-xl font-bold tracking-tight text-white mb-2 flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-gold-500 via-gold-400 to-gold-600 rotate-45 rounded-[4px] flex items-center justify-center shadow-lg shadow-gold-500/20">
                      <Shield className="h-3.5 w-3.5 text-navy-950 -rotate-45" />
                    </div>
                    <span>
                      <span className="text-gradient-premium">NRI</span>
                      <span className="text-white ml-1">Solutions</span>
                    </span>
                  </SheetTitle>
                  <p className="text-[11px] text-navy-400 tracking-wide uppercase mb-6">Your Trusted Presence in India</p>
                  <div className="h-[1px] bg-gradient-to-r from-gold-500/30 via-gold-500/10 to-transparent" />
                </div>

                {/* Mobile links with staggered animations */}
                <div className="flex flex-col p-6 pt-4">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.07, duration: 0.3, ease: "easeOut" }}
                      className="flex flex-col"
                    >
                      {link.children ? (
                        <div className="mb-4">
                          <span className="text-[10px] font-semibold text-gold-500/70 uppercase tracking-[0.2em] mb-3 block">
                            {link.label}
                          </span>
                          {link.children.map((subLink, subIndex) => (
                            <motion.div
                              key={subLink.label}
                              initial={{ opacity: 0, x: 15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.07 + subIndex * 0.05 + 0.1, duration: 0.25 }}
                            >
                              <Link
                                href={subLink.href}
                                onClick={() => setIsOpen(false)}
                                className="group flex items-center pl-4 py-2.5 text-[15px] font-medium text-navy-300 hover:text-white border-l border-white/[0.06] hover:border-gold-500/50 transition-all duration-200"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-navy-600 group-hover:bg-gold-500 transition-colors duration-200 mr-3" />
                                {subLink.label}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center py-3 text-[17px] font-medium transition-all duration-200 ${
                            pathname === link.href
                              ? "text-gold-400"
                              : "text-navy-100 hover:text-white"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mr-3 transition-all duration-200 ${
                              pathname === link.href
                                ? "bg-gold-500 shadow-[0_0_6px_rgba(212,168,83,0.5)]"
                                : "bg-navy-700 group-hover:bg-gold-500/50"
                            }`}
                          />
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}

                  {/* Mobile CTA section */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="pt-6 mt-4 border-t border-white/[0.06] flex flex-col space-y-3"
                  >
                    <Link href="/contact?type=consultation" onClick={() => setIsOpen(false)} className="w-full">
                      <Button className="w-full bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-navy-950 font-semibold rounded-full py-3 text-sm shadow-[0_0_20px_rgba(212,168,83,0.15)] transition-all duration-300">
                        Book Free Consultation
                      </Button>
                    </Link>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full border-white/[0.08] text-white hover:bg-white/[0.04] hover:border-green-500/30 rounded-full py-3 text-sm transition-all duration-300">
                        <MessageSquare className="mr-2 h-4 w-4 text-green-400" />
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </motion.div>

                  {/* Mobile footer info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="pt-6 mt-4 border-t border-white/[0.06]"
                  >
                    <div className="flex items-center space-x-2 text-[11px] text-navy-500">
                      <Shield className="h-3.5 w-3.5 text-gold-500/50" />
                      <span>Trusted by 500+ NRI families</span>
                    </div>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
