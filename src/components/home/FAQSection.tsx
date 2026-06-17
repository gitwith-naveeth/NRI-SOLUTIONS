"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/mock-data";

export function FAQSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gold-600 mb-3">
            Questions?
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            Frequently Asked Questions
          </p>
          <div className="h-1 w-12 bg-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`faq-${index}`}
                  className="border border-gray-100 rounded-xl px-6 bg-gray-50/50 data-[state=open]:bg-white data-[state=open]:border-gold-500/30 data-[state=open]:shadow-sm transition-all"
                >
                  <AccordionTrigger className="text-left font-bold text-navy-950 hover:text-gold-600 text-base md:text-lg py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm md:text-base leading-relaxed pb-5 pt-1">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
