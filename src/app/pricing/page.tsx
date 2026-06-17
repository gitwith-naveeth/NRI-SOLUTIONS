"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/lib/mock-data";
import { FAQSection } from "@/components/home/FAQSection";

export default function PricingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative gradient-hero pt-32 pb-16 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <div className="container-custom relative z-10 max-w-3xl">
          <div className="flex justify-center items-center space-x-2 text-xs font-semibold text-gold-400 uppercase tracking-wider mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Pricing</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Simple, Transparent Plans
          </h1>
          <p className="text-navy-150 text-sm md:text-base font-light leading-relaxed">
            No lock-ins. No hidden fees. Pay as you go or choose a dedicated representative plan for ongoing support.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {pricingTiers.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gold-50 border-2 border-gold-500 shadow-xl lg:scale-105 z-10"
                    : "bg-white border border-gray-100 shadow-sm hover:shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-navy-950 mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-6 h-12">
                    {plan.description}
                  </p>
                  
                  <div className="flex items-baseline mb-6 border-b border-gray-100 pb-6">
                    <span className="text-xs text-gray-500 font-semibold mr-1">Starting at</span>
                    <span className="text-4xl font-extrabold text-navy-950">{plan.price}</span>
                    <span className="text-sm text-gray-500 font-medium ml-1">{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs font-medium">
                        {feature.included ? (
                          <Check className="h-4.5 w-4.5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="h-4.5 w-4.5 text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={`/contact?plan=${plan.id}`} className="block w-full mt-auto">
                  <Button
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                      plan.highlighted
                        ? "bg-gold-500 hover:bg-gold-600 text-navy-950 shadow-md hover:shadow-gold-500/20"
                        : "bg-navy-950 hover:bg-navy-900 text-white"
                    }`}
                  >
                    {plan.ctaText}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16 max-w-lg mx-auto bg-gray-50 border border-gray-100 p-6 rounded-2xl">
            <h4 className="font-bold text-navy-950 text-sm mb-2">Need a Custom Arrangement?</h4>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              We configure tailormade packages for commercial properties, large agricultural holdings, or special healthcare needs.
            </p>
            <Link href="/contact" className="text-xs font-bold text-gold-600 hover:text-gold-500 flex items-center justify-center">
              Request Custom Quote <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <div className="border-t border-gray-100">
        <FAQSection />
      </div>
    </div>
  );
}
