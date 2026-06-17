"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck } from "lucide-react";
import { testimonials } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export default function TestimonialsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative gradient-hero pt-32 pb-16 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <div className="container-custom relative z-10 max-w-3xl">
          <div className="flex justify-center items-center space-x-2 text-xs font-semibold text-gold-400 uppercase tracking-wider mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Testimonials</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Verified Client Success
          </h1>
          <p className="text-navy-150 text-sm md:text-base font-light leading-relaxed">
            Read stories from Non-Resident Indians who rely on NRI Solutions as their trusted local representative back home in India.
          </p>
        </div>
      </section>

      {/* Grid listing */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <Quote className="h-10 w-10 text-gold-500/10 absolute top-6 right-8 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < t.rating ? "fill-gold-500 text-gold-500" : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-8 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-50 flex items-center space-x-4">
                  {/* Initials avatar placeholder */}
                  <div className="h-10 w-10 bg-navy-950 text-gold-500 font-bold rounded-full text-xs flex items-center justify-center flex-shrink-0">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-950 text-sm">{t.name}</h4>
                    <p className="text-xs text-gray-500">
                      {t.role} • {t.location}, {t.country}
                    </p>
                    <span className="inline-block bg-navy-50 text-navy-800 text-[10px] font-semibold px-2 py-0.5 rounded-full mt-1">
                      {t.service}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 bg-navy-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,168,83,0.05),transparent_50%)]"></div>
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-4 text-xs text-gold-300">
                <ShieldCheck className="h-3.5 w-3.5 text-gold-500" />
                <span>100% Genuine Reviews</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">
                Ready to Experience the Difference?
              </h3>
              <p className="text-navy-200 text-xs font-light leading-relaxed">
                Connect with our managers, explore past case audits, or request reference checks from current clients in your country.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <Link href="/contact">
                <Button className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-5 rounded-xl">
                  Secure Your Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
