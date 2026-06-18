"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { processSteps } from "@/lib/mock-data";

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 md:py-32">
      {/* ── Mesh Gradient Background ─────────────────────────── */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_80%,rgba(212,168,83,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,168,83,0.03),transparent_70%)]" />
      </div>

      {/* ── Subtle Grid Overlay ──────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* ── Premium Header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse-gold" />
            Our Process
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            How NRI Solutions{" "}
            <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold-500/50" />
            <div className="h-1 w-12 rounded-full bg-gold-500" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold-500/50" />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-navy-300">
            We provide local execution with total digital visibility. Here is
            how we bridge the distance.
          </p>
        </motion.div>

        {/* ── Timeline Container ─────────────────────────────── */}
        <div className="relative">
          {/* ── Desktop Horizontal Connector Line ────────────── */}
          <div className="pointer-events-none absolute left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] top-8 z-0 hidden lg:block">
            {/* Track */}
            <div className="h-[2px] w-full rounded-full bg-white/5" />
            {/* Animated shimmer overlay */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 origin-left"
            >
              <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-gold-500/80 via-gold-400 to-gold-500/80" />
              <div className="animate-shimmer absolute inset-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </motion.div>
          </div>

          {/* ── Mobile Vertical Connector Line ───────────────── */}
          <div className="pointer-events-none absolute bottom-0 left-8 top-0 z-0 w-[2px] lg:hidden">
            <div className="h-full w-full rounded-full bg-white/5" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 origin-top"
            >
              <div className="h-full w-[2px] rounded-full bg-gradient-to-b from-gold-500/80 via-gold-400 to-gold-500/80" />
            </motion.div>
          </div>

          {/* ── Steps Grid ───────────────────────────────────── */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, index) => {
              const IconName = step.icon as keyof typeof Icons;
              const Icon = (Icons[IconName] ||
                Icons.HelpCircle) as React.ComponentType<{
                className?: string;
              }>;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex flex-row items-start gap-6 lg:flex-col lg:items-center lg:text-center"
                >
                  {/* ── Step Number Badge ─────────────────────── */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-500/40 bg-gradient-to-br from-gold-500 to-gold-600 text-lg font-extrabold text-navy-950 shadow-lg shadow-gold-500/20 transition-all duration-500 group-hover:shadow-gold-500/40 group-hover:scale-110">
                      {step.step}
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full border border-gold-500/20 animate-ping opacity-0 group-hover:opacity-100" />
                  </div>

                  {/* ── Glass Card ────────────────────────────── */}
                  <div className="flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-gold-500/20 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_40px_rgba(212,168,83,0.08)] lg:mt-8 lg:w-full">
                    {/* Icon Circle */}
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gold-400 transition-all duration-500 group-hover:border-gold-500/30 group-hover:bg-gold-500/10 group-hover:text-gold-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mb-3 text-lg font-bold tracking-tight text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-navy-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
