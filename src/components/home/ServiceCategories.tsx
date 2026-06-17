"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { serviceCategories } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export function ServiceCategories() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gold-600 mb-3">
            Our Services
          </h2>
          <p className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">
            Tailored Assistance for Every Need
          </p>
          <div className="h-1 w-12 bg-gold-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 text-sm mt-4">
            We operate across three core domains to provide full coverage for properties, homes, and families.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => {
            const IconName = category.icon as keyof typeof Icons;
            const Icon = (Icons[IconName] || Icons.Building2) as React.ComponentType<{ className?: string }>;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 bg-navy-900 rounded-xl flex items-center justify-center text-gold-500 mb-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-950 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                  
                  {/* Quick preview of service items */}
                  <ul className="space-y-3 mb-8">
                    {category.services.slice(0, 4).map((service) => (
                      <li key={service.id} className="flex items-center text-xs text-navy-950 font-medium">
                        <Icons.Check className="h-4 w-4 text-gold-500 mr-2 flex-shrink-0" />
                        <span>{service.title}</span>
                      </li>
                    ))}
                    {category.services.length > 4 && (
                      <li className="text-xs text-gold-600 font-semibold pl-6">
                        + {category.services.length - 4} more services
                      </li>
                    )}
                  </ul>
                </div>

                <Link href={`/services/${category.slug}`} className="block mt-auto w-full">
                  <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white rounded-xl py-3 font-semibold text-sm">
                    Explore Details
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
