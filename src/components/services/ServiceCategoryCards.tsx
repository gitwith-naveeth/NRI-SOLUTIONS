'use client';

import type { ServiceCategory } from '@/types';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Building2,
  Wrench,
  HeartHandshake,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

const categoryIconMap: Record<string, LucideIcon> = {
  Building2,
  Wrench,
  HeartHandshake,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as any },
  },
};

export function ServiceCategoryCards({
  categories,
}: {
  categories: ServiceCategory[];
}) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-8 md:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {categories.map((category) => {
        const Icon = categoryIconMap[category.icon] || Building2;

        return (
          <motion.div key={category.id} variants={cardVariants}>
            <Link
              href={`/services/${category.slug}`}
              className="group flex h-full flex-col rounded-xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50 transition-colors duration-300 group-hover:bg-gold-50">
                <Icon className="h-7 w-7 text-navy-700 transition-colors duration-300 group-hover:text-gold-600" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-navy-950">
                {category.title}
              </h3>

              {/* Description */}
              <p className="mt-3 flex-1 text-muted-foreground leading-relaxed">
                {category.description}
              </p>

              {/* Service Count Badge */}
              <div className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                {category.services.length} services
              </div>

              {/* CTA */}
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-navy-900 transition-all duration-300 group-hover:gap-3 group-hover:text-gold-600">
                View Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
