"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle } from "lucide-react";

export function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 md:py-32">
      {/* ── Mesh Gradient Background ─────────────────────────── */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_10%_90%,rgba(212,168,83,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_90%_10%,rgba(59,130,246,0.04),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,168,83,0.02),transparent_70%)]" />
      </div>

      {/* ── Subtle Grid ──────────────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* ── Premium Header (Mobile) ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center lg:hidden"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse-gold" />
            Questions?
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </motion.div>

        {/* ── Split Layout ───────────────────────────────────── */}
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
          {/* ── Left Panel (40%) ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden w-full flex-shrink-0 lg:block lg:w-[38%]"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-400">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse-gold" />
              Questions?
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
              Have{" "}
              <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-300 bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>

            <div className="mt-6 flex items-center gap-2">
              <div className="h-1 w-12 rounded-full bg-gold-500" />
              <div className="h-px w-8 bg-gradient-to-r from-gold-500/50 to-transparent" />
            </div>

            <p className="mt-6 max-w-md text-base leading-relaxed text-navy-300">
              We understand managing affairs in India from abroad can raise many
              questions. Find answers to the most common ones here, or reach out
              to us directly.
            </p>

            {/* Decorative icon */}
            <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl">
              <HelpCircle className="h-7 w-7 text-gold-400/60" />
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link href="/contact">
                <Button className="group/btn rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-5 text-sm font-bold text-navy-950 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40 hover:scale-[1.02]">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>

            <p className="mt-4 text-xs text-navy-400">
              Typically responds within 2 hours
            </p>
          </motion.div>

          {/* ── Right Panel — Accordion (60%) ─────────────────── */}
          <div className="w-full lg:w-[62%]">
            <Accordion className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <AccordionItem
                    value={`faq-${index}`}
                    className="group/item overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl transition-all duration-300 data-[state=open]:border-l-2 data-[state=open]:border-l-gold-500 data-[state=open]:border-t-white/[0.08] data-[state=open]:border-r-white/[0.08] data-[state=open]:border-b-white/[0.08] data-[state=open]:bg-white/[0.06] data-[state=open]:shadow-[0_0_30px_rgba(212,168,83,0.05)]"
                  >
                    <AccordionTrigger className="px-6 py-5 text-left text-[15px] font-bold tracking-tight text-white transition-colors duration-200 hover:text-gold-400 hover:no-underline md:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-0 text-sm leading-relaxed text-navy-300 md:text-[15px]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 text-center lg:hidden"
            >
              <p className="mb-4 text-sm text-navy-300">
                Can&apos;t find what you&apos;re looking for?
              </p>
              <Link href="/contact">
                <Button className="group/btn rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-8 py-5 text-sm font-bold text-navy-950 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:shadow-gold-500/40">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
