"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { whyChooseUs } from "@/lib/mock-data";

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gold-600 mb-3">
            Why NRIs Trust Us
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            Your Dedicated Local Partner in India
          </p>
          <div className="h-1 w-12 bg-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => {
            // Dynamically resolve lucide icons
            const IconName = item.icon as keyof typeof Icons;
            const Icon = (Icons[IconName] || Icons.HelpCircle) as React.ComponentType<{ className?: string }>;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center"
              >
                <div className="h-14 w-14 bg-navy-50 rounded-xl flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
