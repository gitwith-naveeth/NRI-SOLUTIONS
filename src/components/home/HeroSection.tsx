"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, MapPin, ChevronDown, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* ── Animated Mesh Gradient Background ─────────────────────── */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,168,83,0.08) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(42,82,152,0.12) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -25, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[30%] right-[20%] w-[50%] h-[50%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,168,83,0.05) 0%, transparent 60%)",
          }}
          animate={{
            x: [0, 30, -40, 0],
            y: [0, -40, 30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[15%] w-[40%] h-[40%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(30,63,115,0.1) 0%, transparent 65%)",
          }}
          animate={{
            x: [0, -20, 50, 0],
            y: [0, 35, -15, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Subtle Grid Overlay ───────────────────────────────────── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem]" />

      {/* ── Floating Orbs ─────────────────────────────────────────── */}
      <motion.div
        className="absolute top-[15%] left-[8%] w-3 h-3 rounded-full bg-gold-500/30 blur-[1px]"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[25%] right-[12%] w-5 h-5 rounded-full bg-gold-400/20 blur-[2px]"
        animate={{ y: [0, -30, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[15%] w-4 h-4 rounded-full bg-navy-400/25 blur-[1px]"
        animate={{ y: [0, 25, 0], x: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-[40%] right-[25%] w-2 h-2 rounded-full bg-gold-300/35 blur-[0.5px]"
        animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[8%] w-6 h-6 rounded-full bg-navy-300/15 blur-[3px]"
        animate={{ y: [0, -35, 0], x: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute top-[60%] left-[30%] w-2.5 h-2.5 rounded-full bg-gold-500/25 blur-[1px]"
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="absolute top-[10%] left-[50%] w-3.5 h-3.5 rounded-full bg-navy-400/20 blur-[2px]"
        animate={{ y: [0, -22, 0], x: [0, 14, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="absolute bottom-[40%] right-[35%] w-4 h-4 rounded-full bg-gold-400/15 blur-[2px]"
        animate={{ y: [0, 28, 0], x: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />

      {/* ── Main Content ──────────────────────────────────────────── */}
      <div className="container-custom relative z-10 text-center max-w-5xl pt-28 pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-flex items-center space-x-3 glass rounded-full px-5 py-2.5 mb-10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-500" />
          </span>
          <span className="text-sm font-medium tracking-wide text-gold-300">
            Your On-Ground Local Representative
          </span>
          <Sparkles className="h-3.5 w-3.5 text-gold-400/60" />
        </motion.div>

        {/* Title Line 1 */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-3 leading-[1.1]"
        >
          Your Trusted Local
        </motion.h1>

        {/* Title Line 2 — Gold Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight gradient-text-gold mb-8 leading-[1.1]"
        >
          Representative in India
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="text-lg md:text-xl text-navy-100 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Property management, home maintenance, paperwork assistance, and local
          coordination for NRIs. Real-time updates. Real-world trust.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <Link href="/contact?type=consultation" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-10 py-7 text-base rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(212,168,83,0.3)] hover:shadow-[0_0_50px_rgba(212,168,83,0.45)] animate-pulse-gold cursor-pointer">
              Book a Free Consultation
              <ArrowRight className="ml-2.5 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/services" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto glass text-white hover:bg-white/10 font-semibold px-10 py-7 text-base rounded-full transition-all duration-300 border-white/20 hover:border-white/30 cursor-pointer">
              <Play className="mr-2.5 h-4 w-4 text-gold-400" />
              Explore Services
            </Button>
          </Link>
        </motion.div>

        {/* ── Trust Badges ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: "easeOut" }}
          className="mt-16"
        >
          <div className="inline-flex items-center glass rounded-2xl px-8 py-5 gap-6 md:gap-8">
            {/* Badge 1 */}
            <div className="flex items-center space-x-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gold-500/10">
                <ShieldCheck className="h-4 w-4 text-gold-400" />
              </div>
              <span className="text-sm text-navy-100 font-medium whitespace-nowrap">
                100% Background Checked
              </span>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            {/* Badge 2 */}
            <div className="hidden md:flex items-center space-x-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gold-500/10">
                <MapPin className="h-4 w-4 text-gold-400" />
              </div>
              <span className="text-sm text-navy-100 font-medium whitespace-nowrap">
                Active in 15+ Cities
              </span>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            {/* Badge 3 */}
            <div className="hidden md:flex items-center space-x-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gold-500/10">
                <Sparkles className="h-4 w-4 text-gold-400" />
              </div>
              <span className="text-sm text-navy-100 font-medium whitespace-nowrap">
                Real-time Video Validation
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ──────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] text-navy-300 font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-navy-300" />
        </motion.div>
      </motion.div>

      {/* ── Bottom Gradient Fade ───────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
}
