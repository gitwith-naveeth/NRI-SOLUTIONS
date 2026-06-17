"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { processSteps } from "@/lib/mock-data";

export function HowItWorks() {
  return (
    <section className="section-padding bg-navy-950 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.05),transparent_60%)]"></div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gold-500 mb-3">
            Our Process
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            How NRI Solutions Works
          </p>
          <div className="h-1 w-12 bg-gold-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-navy-200 text-sm mt-4">
            We provide local execution with total digital visibility. Here is how we bridge the distance.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-white/10 -translate-y-12 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const IconName = step.icon as keyof typeof Icons;
              const Icon = (Icons[IconName] || Icons.HelpCircle) as React.ComponentType<{ className?: string }>;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number Circle */}
                  <div className="relative mb-6">
                    <div className="h-16 w-16 bg-navy-900 border border-gold-500/30 rounded-2xl flex items-center justify-center text-gold-500 text-xl font-bold group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="absolute -top-3 -right-3 h-7 w-7 bg-gold-500 text-navy-950 font-bold rounded-full text-xs flex items-center justify-center border-2 border-navy-950">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-navy-200 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
