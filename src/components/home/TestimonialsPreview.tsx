"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export function TestimonialsPreview() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gold-600 mb-3">
            Testimonials
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            Trusted by NRIs Worldwide
          </p>
          <div className="h-1 w-12 bg-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between relative"
            >
              <div>
                <Quote className="h-10 w-10 text-gold-500/10 absolute top-6 right-8" />
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-gray-50 flex items-center space-x-4">
                {/* Initials Avatar */}
                <div className="h-10 w-10 bg-navy-900 text-gold-500 font-bold rounded-full text-xs flex items-center justify-center flex-shrink-0">
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

        <div className="text-center mt-12">
          <Link href="/testimonials">
            <Button variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white rounded-xl px-6 py-5 font-semibold text-sm">
              Read All Testimonials
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
