"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 md:py-32">
      {/* ── Animated Mesh Gradient Background ────────────────── */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.06, 0.1, 0.06],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_80%,rgba(212,168,83,0.12),transparent_60%)]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]"
        />
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.05, 0.09, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,168,83,0.06),transparent_70%)]"
        />
      </div>

      {/* ── Grid Pattern Overlay ─────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* ── Floating Gold Orb ────────────────────────────────── */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[15%] h-72 w-72 rounded-full bg-gold-500/[0.04] blur-3xl"
      />
      <motion.div
        animate={{
          y: [15, -15, 15],
          x: [8, -8, 8],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-[10%] left-[5%] h-56 w-56 rounded-full bg-blue-500/[0.03] blur-3xl"
      />

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="container-custom relative z-10 mx-auto max-w-4xl text-center">
        {/* Gold Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-gold-400 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Get Started Today
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 text-4xl font-extrabold tracking-tight text-white md:text-6xl md:leading-tight"
        >
          Ready to Secure Your{" "}
          <span className="bg-gradient-to-r from-gold-300 via-gold-500 to-gold-400 bg-clip-text text-transparent">
            Peace of Mind?
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-300 md:text-lg"
        >
          Book a free consultation today. Speak with our experts and let us
          outline a custom support plan for your affairs back home.
        </motion.p>

        {/* Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-8 flex items-center justify-center gap-2"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-gold-500/60" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500/40" />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-10 flex max-w-lg flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Gold Primary Button */}
          <Link href="/contact?type=consultation" className="w-full sm:w-auto">
            <Button className="group/btn w-full rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-10 py-6 text-base font-bold text-navy-950 shadow-[0_0_30px_rgba(212,168,83,0.25)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(212,168,83,0.4)] hover:scale-[1.03] sm:w-auto">
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </Link>

          {/* Glass WhatsApp Button */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button className="w-full rounded-full border border-white/10 bg-white/[0.05] px-10 py-6 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.1] sm:w-auto">
              <MessageSquare className="mr-2 h-5 w-5 text-green-400" />
              Chat on WhatsApp
            </Button>
          </a>
        </motion.div>

        {/* Trust Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-2"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
            <ShieldCheck className="h-3.5 w-3.5 text-gold-400" />
          </div>
          <p className="text-xs font-medium text-navy-400">
            No long-term obligation. Start with a single request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
