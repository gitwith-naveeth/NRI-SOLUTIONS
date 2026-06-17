"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { NAV_LINKS, WHATSAPP_LINK } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDashboard = pathname.startsWith("/dashboard");

  if (isDashboard) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-gold-500">NRI</span>
            <span className="text-white"> Solutions</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => {
            if (link.children) {
              return (
                <div key={link.label} className="relative group py-2">
                  <button className="flex items-center text-sm font-medium text-navy-100 hover:text-gold-400 transition-colors">
                    {link.label}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 top-full mt-1 w-56 rounded-xl bg-navy-900 border border-white/10 shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.children.map((subLink) => (
                      <Link
                        key={subLink.label}
                        href={subLink.href}
                        className="block px-4 py-2 text-sm text-navy-100 hover:bg-navy-800 hover:text-gold-400 transition-colors"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                  isActive ? "text-gold-500" : "text-navy-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/contact?type=consultation">
            <Button className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-xl px-5 py-2.5 transition-all shadow-md hover:shadow-gold-500/20">
              Book Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="text-white hover:bg-white/10 p-2 rounded-xl transition-colors cursor-pointer">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-navy-950 border-l border-white/10 text-white p-6 w-80">
              <SheetTitle className="text-left text-xl font-bold tracking-tight text-white mb-8 border-b border-white/10 pb-4">
                <span className="text-gold-500">NRI</span> Solutions
              </SheetTitle>
              <div className="flex flex-col space-y-6">
                {NAV_LINKS.map((link) => (
                  <div key={link.label} className="flex flex-col space-y-2">
                    {link.children ? (
                      <>
                        <span className="text-xs font-semibold text-gold-500 uppercase tracking-wider">
                          {link.label}
                        </span>
                        {link.children.map((subLink) => (
                          <Link
                            key={subLink.label}
                            href={subLink.href}
                            onClick={() => setIsOpen(false)}
                            className="block pl-4 py-2 text-base font-medium text-navy-200 hover:text-gold-400 border-l border-white/10"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium hover:text-gold-400 transition-colors ${
                          pathname === link.href ? "text-gold-500" : "text-navy-100"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-8 border-t border-white/10 flex flex-col space-y-4">
                  <Link href="/contact?type=consultation" onClick={() => setIsOpen(false)} className="w-full">
                    <Button className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold rounded-xl py-3">
                      Book Consultation
                    </Button>
                  </Link>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/5 rounded-xl py-3">
                      <MessageSquare className="mr-2 h-4 w-4 text-green-400" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
