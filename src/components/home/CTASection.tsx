"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="section-padding bg-navy-950 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,168,83,0.08),transparent_50%)]"></div>

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Ready to Secure Your Peace of Mind?
          </h2>
          <p className="text-navy-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Book a free consultation today. Speak with our experts and let us outline a custom support plan for your affairs back home.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link href="/contact?type=consultation" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-6 text-base rounded-xl transition-all shadow-lg hover:shadow-gold-500/25">
                Book Consultation
              </Button>
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 font-semibold px-8 py-6 text-base rounded-xl transition-all">
                <MessageSquare className="h-5 w-5 mr-2 text-green-400" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>

          <p className="text-xs text-navy-300 pt-4 font-medium">
            No long-term obligation. Start with a single request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
