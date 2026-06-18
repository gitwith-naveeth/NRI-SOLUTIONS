"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export function TestimonialsPreview() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* ── Subtle Light Gradient Background ─────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(212,168,83,0.04),transparent_60%)]" />

      <div className="container-custom relative z-10">
        {/* ── Premium Header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-600">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse-gold" />
            Testimonials
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-navy-950 md:text-5xl">
            Trusted by NRIs{" "}
            <span className="bg-gradient-to-r from-gold-500 via-gold-600 to-gold-400 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold-500/50" />
            <div className="h-1 w-12 rounded-full bg-gold-500" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold-500/50" />
          </div>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-navy-600">
            Real stories from NRIs who trust us to manage their affairs in India
            with care and transparency.
          </p>
        </motion.div>

        {/* ── Testimonial Cards ──────────────────────────────── */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featured.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100/80 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-navy-950/5"
            >
              {/* Gold Top Border Gradient */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Card Content */}
              <div className="relative p-8 pb-4">
                {/* Large Quote Mark */}
                <div className="absolute right-6 top-4">
                  <Quote className="h-14 w-14 text-gold-500/[0.08] transition-colors duration-500 group-hover:text-gold-500/[0.15]" />
                </div>

                {/* Star Rating */}
                <div className="mb-5 flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.15 + i * 0.06,
                      }}
                    >
                      <Star className="h-4 w-4 fill-gold-500 text-gold-500" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-base font-light italic leading-relaxed text-navy-800">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* ── Divider + Author ─────────────────────────── */}
              <div className="mt-auto border-t border-gray-100 bg-gray-50/40 px-8 py-5">
                <div className="flex items-center gap-4">
                  {/* Gold-Gradient Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 text-sm font-bold text-navy-950 shadow-md shadow-gold-500/20">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    {/* Ring on hover */}
                    <div className="absolute -inset-0.5 rounded-full border border-gold-500/0 transition-all duration-500 group-hover:border-gold-500/30" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-bold text-navy-950">
                      {t.name}
                    </h4>
                    <p className="truncate text-xs text-navy-500">
                      {t.role} · {t.location}, {t.country}
                    </p>
                    <span className="mt-1.5 inline-flex items-center rounded-full bg-gradient-to-r from-gold-500/10 to-gold-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-gold-700 ring-1 ring-gold-500/15">
                      {t.service}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTA Button ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <Link href="/testimonials">
            <Button
              variant="outline"
              className="group/btn rounded-full border-navy-900/20 bg-transparent px-8 py-5 text-sm font-semibold text-navy-900 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500/5 hover:text-gold-700"
            >
              Read All Testimonials
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
