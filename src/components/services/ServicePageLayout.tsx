"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { ServiceCategory } from "@/types";
import { Button } from "@/components/ui/button";

interface ServicePageLayoutProps {
  category: ServiceCategory;
}

export function ServicePageLayout({ category }: ServicePageLayoutProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header Banner */}
      <section className="relative gradient-hero pt-32 pb-16 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <div className="container-custom relative z-10 max-w-3xl">
          <div className="flex justify-center items-center space-x-2 text-xs font-semibold text-gold-400 uppercase tracking-wider mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{category.title}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            {category.title}
          </h1>
          <p className="text-navy-150 text-sm md:text-base font-light leading-relaxed">
            {category.description}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {category.services.map((service, index) => {
              const IconName = service.icon as keyof typeof Icons;
              const Icon = (Icons[IconName] || Icons.HelpCircle) as React.ComponentType<{ className?: string }>;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header info */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="h-12 w-12 bg-navy-950 rounded-xl flex items-center justify-center text-gold-500">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-950">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Benefits Section */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3">
                        Key Benefits
                      </h4>
                      <ul className="space-y-2.5">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start text-xs text-gray-600">
                            <Icons.CheckCircle2 className="h-4 w-4 text-green-500 mr-2.5 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use cases Section */}
                    <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100/50">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gold-600 flex items-center mb-2">
                        <Icons.Lightbulb className="h-4 w-4 mr-1.5" />
                        Typical Use Case
                      </h4>
                      <ul className="space-y-1.5 list-disc list-inside text-xs text-gray-500">
                        {service.useCases.map((useCase, uIdx) => (
                          <li key={uIdx} className="leading-relaxed">
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="block w-full">
                    <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white rounded-xl py-3 font-semibold text-sm">
                      Request Service
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-950 mb-4">
            Need a Custom Support Plan?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Tell us about your requirements. We can tailor our on-ground activities to fit your exact specifications.
          </p>
          <Link href="/contact">
            <Button className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-5 rounded-xl">
              Get custom proposal
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
