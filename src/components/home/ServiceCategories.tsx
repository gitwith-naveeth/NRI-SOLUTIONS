"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { serviceCategories } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as any,
    },
  },
};

export function ServiceCategories() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #0a1628 25%, transparent 25%), linear-gradient(225deg, #0a1628 25%, transparent 25%), linear-gradient(315deg, #0a1628 25%, transparent 25%), linear-gradient(45deg, #0a1628 25%, transparent 25%)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0",
        }}
      />

      {/* Decorative gradient orbs */}
      <div className="absolute top-40 -left-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute top-60 -right-32 w-80 h-80 bg-navy-950/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-gold-500/3 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* ── Premium Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-gold-600 mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Tailored Assistance for Every Need
          </h2>

          {/* Decorative gradient accent line */}
          <div className="flex items-center justify-center mt-6 gap-1.5">
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-gold-400 rounded-full" />
            <div className="h-[3px] w-16 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 rounded-full" />
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-gold-400 rounded-full" />
          </div>

          <p className="text-gray-500 text-sm md:text-base mt-6 max-w-xl mx-auto leading-relaxed">
            We operate across three core domains to provide full coverage for
            properties, homes, and families.
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {serviceCategories.map((category) => {
            const IconName = category.icon as keyof typeof Icons;
            const Icon = (Icons[IconName] || Icons.Building2) as React.ComponentType<{ className?: string }>;

            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                className="group relative"
              >
                {/* Card outer glow on hover */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-gold-400/0 via-transparent to-navy-800/0 group-hover:from-gold-400/10 group-hover:to-navy-800/10 blur-sm transition-all duration-500 opacity-0 group-hover:opacity-100" />

                <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] overflow-hidden flex flex-col h-full">
                  {/* ── Gradient Navy Header Strip ── */}
                  <div className="relative bg-gradient-to-r from-navy-950 to-navy-800 px-8 py-7 rounded-t-2xl overflow-hidden">
                    {/* Subtle diagonal shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />

                    <div className="relative flex items-center gap-4">
                      <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/10">
                        <Icon className="h-6 w-6 text-gold-500" />
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* ── Card Body ── */}
                  <div className="px-8 pt-6 pb-8 flex flex-col flex-1">
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Service list items with gold check */}
                    <ul className="space-y-3.5 mb-6 flex-1">
                      {category.services.slice(0, 4).map((service) => (
                        <li
                          key={service.id}
                          className="flex items-center gap-3 text-sm text-navy-950 font-medium"
                        >
                          <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/10 flex items-center justify-center">
                            <Icons.Check className="h-3 w-3 text-gold-600" />
                          </span>
                          <span>{service.title}</span>
                        </li>
                      ))}
                      {category.services.length > 4 && (
                        <li className="flex items-center gap-3 text-sm font-semibold text-gold-600 pl-0">
                          <span className="flex-shrink-0 h-5 w-5 rounded-full bg-gold-500/10 flex items-center justify-center">
                            <Icons.Plus className="h-3 w-3 text-gold-600" />
                          </span>
                          <span>
                            {category.services.length - 4} more services
                          </span>
                        </li>
                      )}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href={`/services/${category.slug}`}
                      className="block mt-auto w-full"
                    >
                      <Button className="w-full bg-navy-950 hover:bg-navy-900 text-white rounded-xl py-3 h-12 font-semibold text-sm group/btn relative overflow-hidden transition-all duration-300 border border-navy-800 hover:border-gold-500/30 hover:shadow-lg hover:shadow-gold-500/5">
                        {/* Gold accent underline on hover */}
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover/btn:w-3/4 bg-gradient-to-r from-transparent via-gold-500 to-transparent transition-all duration-500" />
                        <span className="relative flex items-center justify-center gap-2">
                          Explore Details
                          <Icons.ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
