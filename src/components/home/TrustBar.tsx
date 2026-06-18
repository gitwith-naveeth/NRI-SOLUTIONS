"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { trustStats } from "@/lib/mock-data";

function parseStatValue(value: string): { numericPart: number; suffix: string } {
  const match = value.match(/^([\d]+)(.*)/);
  if (match) {
    return { numericPart: parseInt(match[1], 10), suffix: match[2] };
  }
  return { numericPart: 0, suffix: value };
}

function AnimatedStat({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayNumber, setDisplayNumber] = useState(0);

  const { numericPart, suffix } = parseStatValue(value);
  const hasNumber = numericPart > 0;

  useEffect(() => {
    if (!isInView || !hasNumber) return;

    const duration = 2000;
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + (numericPart - startValue) * eased);
      setDisplayNumber(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericPart, hasNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="text-center flex flex-col justify-center items-center py-4 md:py-0"
    >
      <span className="text-4xl md:text-5xl font-extrabold text-navy-950 block mb-2 tabular-nums">
        {hasNumber ? (
          <>
            {isInView ? displayNumber : 0}
            <span className="gradient-text-gold">{suffix}</span>
          </>
        ) : (
          <>
            <span className="text-navy-950">24</span>
            <span className="gradient-text-gold">/</span>
            <span className="text-navy-950">7</span>
          </>
        )}
      </span>
      <span className="text-xs text-gray-500 font-semibold tracking-[0.15em] uppercase">
        {label}
      </span>
    </motion.div>
  );
}

export function TrustBar() {
  return (
    <section className="relative z-30 -mt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
      >
        {/* Outer glow wrapper */}
        <div className="relative">
          {/* Subtle gold gradient border glow */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-gold-500/20 via-gold-400/10 to-gold-500/20 blur-[1px]" />

          {/* Card */}
          <div className="relative bg-white rounded-3xl shadow-2xl shadow-navy-950/10 border border-gray-100/80 px-6 md:px-12 py-8 md:py-10 overflow-hidden">
            {/* Decorative gold dots */}
            <div className="absolute top-4 left-6 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500/40" />
              <div className="w-1 h-1 rounded-full bg-gold-400/25" />
              <div className="w-0.5 h-0.5 rounded-full bg-gold-300/20" />
            </div>
            <div className="absolute top-4 right-6 flex items-center gap-1.5">
              <div className="w-0.5 h-0.5 rounded-full bg-gold-300/20" />
              <div className="w-1 h-1 rounded-full bg-gold-400/25" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500/40" />
            </div>

            {/* Subtle top gold line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {trustStats.map((stat, index) => (
                <div key={stat.label} className="relative flex items-center justify-center">
                  <AnimatedStat
                    value={stat.value}
                    label={stat.label}
                    index={index}
                  />

                  {/* Gold gradient vertical divider — hide after last item */}
                  {index < trustStats.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-14">
                      <div className="w-full h-full bg-gradient-to-b from-transparent via-gold-400/30 to-transparent" />
                    </div>
                  )}

                  {/* Mobile horizontal divider for first row */}
                  {index < 2 && (
                    <div className="block md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-16">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
