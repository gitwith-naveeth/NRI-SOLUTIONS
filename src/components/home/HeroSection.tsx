"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-hero pt-28 pb-16 md:pb-24">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Blurred gold/navy accents */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-navy-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

      <div className="container-custom relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 text-sm text-gold-300"
        >
          <ShieldCheck className="h-4 w-4 text-gold-500" />
          <span>Your On-Ground Local Representative</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]"
        >
          Your Trusted Local <br />
          <span className="gradient-text-gold">Representative in India</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-navy-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Property management, home maintenance, paperwork assistance, and local coordination for NRIs. Real-time updates. Real-world trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact?type=consultation" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-6 text-base rounded-xl transition-all shadow-lg hover:shadow-gold-500/25 animate-pulse-gold">
              Book a Free Consultation
            </Button>
          </Link>
          <Link href="/services" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 font-semibold px-8 py-6 text-base rounded-xl transition-all">
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Small trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 max-w-lg mx-auto text-xs text-navy-300 font-medium justify-center items-center"
        >
          <div className="flex items-center justify-center space-x-2">
            <ShieldCheck className="h-4 w-4 text-gold-500 flex-shrink-0" />
            <span>100% Background Checked Staff</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <MapPin className="h-4 w-4 text-gold-500 flex-shrink-0" />
            <span>Active in 15+ Cities</span>
          </div>
          <div className="flex items-center justify-center space-x-2 col-span-2 sm:col-span-1">
            <ShieldCheck className="h-4 w-4 text-gold-500 flex-shrink-0" />
            <span>Real-time Video Validation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
