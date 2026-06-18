"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { whyChooseUs } from "@/lib/mock-data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};

export function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle gradient background: white → navy-50 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-navy-50/60" />

      {/* Decorative dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0a1628 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle decorative gradient orbs */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-navy-950/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600 mb-4">
            Why NRIs Trust Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Your Dedicated Local Partner in India
          </h2>

          {/* Decorative gradient accent line */}
          <div className="flex items-center justify-center mt-6 gap-1.5">
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-gold-400 rounded-full" />
            <div className="h-[3px] w-16 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 rounded-full" />
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-gold-400 rounded-full" />
          </div>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {whyChooseUs.map((item, index) => {
            const IconName = item.icon as keyof typeof Icons;
            const Icon = (Icons[IconName] || Icons.HelpCircle) as React.ComponentType<{ className?: string }>;
            const padNumber = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group relative"
              >
                {/* Gradient border wrapper — reveals on hover */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-gold-400/0 via-gold-500/0 to-navy-800/0 group-hover:from-gold-400/40 group-hover:via-gold-500/20 group-hover:to-navy-800/30 transition-all duration-500 opacity-0 group-hover:opacity-100" />

                <div className="relative bg-white rounded-2xl p-8 shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 flex flex-col items-center text-center h-full border border-gray-100/80 group-hover:border-transparent">
                  {/* Numbered badge */}
                  <span className="absolute top-5 right-6 text-[52px] font-black leading-none text-gray-100/70 select-none pointer-events-none group-hover:text-gold-500/10 transition-colors duration-500">
                    {padNumber}
                  </span>

                  {/* Icon circle with gradient background + gold glow on hover */}
                  <div className="relative mb-7">
                    {/* Gold glow ring — appears on hover */}
                    <div className="absolute -inset-2 rounded-full bg-gold-500/0 group-hover:bg-gold-500/15 blur-md transition-all duration-500" />

                    <div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-navy-950 to-navy-800 flex items-center justify-center ring-2 ring-transparent group-hover:ring-gold-500/30 transition-all duration-500">
                      <Icon className="h-7 w-7 text-gold-500" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-navy-950 mb-3 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
