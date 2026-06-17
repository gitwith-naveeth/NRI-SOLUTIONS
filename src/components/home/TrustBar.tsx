"use client";

import { motion } from "framer-motion";
import { trustStats } from "@/lib/mock-data";

export function TrustBar() {
  return (
    <section className="relative z-25 -mt-8 px-4">
      <div className="max-w-6xl mx-auto bg-white border border-gray-100 shadow-xl rounded-2xl p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {trustStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-center flex flex-col justify-center items-center ${
                index > 1 ? "pt-6 md:pt-0" : index === 1 ? "pt-0 md:pt-0" : ""
              }`}
            >
              <span className="text-3xl md:text-4xl font-extrabold text-navy-950 block mb-1">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500 font-medium tracking-wide uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
