"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Target, HeartHandshake, Eye, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/lib/mock-data";

export default function AboutPage() {
  const trustPillars = [
    {
      title: "Verified Professionals",
      description: "Every coordinator undergoes reference vetting and police checks.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Billing",
      description: "No hidden local kickbacks or commissions. Standardized, upfront rates.",
      icon: Award,
    },
    {
      title: "Documented Audits",
      description: "Detailed photo/video verification for every completed task.",
      icon: Eye,
    },
    {
      title: "Insured Protection",
      description: "Professional indemnity coverage matching global standards.",
      icon: HeartHandshake,
    },
  ];

  const steps = [
    {
      title: "Identity Check",
      desc: "Aadhaar, PAN, and passport verification matching database records.",
    },
    {
      title: "Police Vetting",
      desc: "Full verification check by state department authorities locally.",
    },
    {
      title: "Previous Audits",
      desc: "Checking work history, previous landlord, and client reviews.",
    },
    {
      title: "Skill Verification",
      desc: "Verifying technical and specialized credentials for tasks.",
    },
    {
      title: "Continuous Evaluation",
      desc: "NPS ratings, client feedback surveys, and monthly performance reviews.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative gradient-hero pt-32 pb-16 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <div className="container-custom relative z-10 max-w-3xl">
          <div className="flex justify-center items-center space-x-2 text-xs font-semibold text-gold-400 uppercase tracking-wider mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Trust is Our Foundation
          </h1>
          <p className="text-navy-150 text-sm md:text-base font-light leading-relaxed">
            NRI Solutions was founded to solve a singular problem: bridging the physical distance between Non-Resident Indians and their local affairs back home with absolute transparency.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-l-4 border-gold-500 border-t border-r border-b border-gray-100 rounded-r-2xl p-8 shadow-sm"
            >
              <div className="h-10 w-10 bg-navy-50 rounded-xl flex items-center justify-center text-gold-500 mb-6">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-3">Our Mission</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                To be the most trusted local partner for NRIs, providing reliable, transparent, and professional services that bridge the distance between NRIs and their interests in India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-l-4 border-navy-900 border-t border-r border-b border-gray-100 rounded-r-2xl p-8 shadow-sm"
            >
              <div className="h-10 w-10 bg-navy-50 rounded-xl flex items-center justify-center text-navy-900 mb-6">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-3">Our Vision</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A world where every NRI has a dependable presence in India — someone they can trust to manage their property, support their family, and handle their local affairs with the same care and diligence as they would themselves.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Trust Matters */}
      <section className="section-padding bg-navy-950 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.03),transparent_60%)]"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gold-500 mb-3">Core Pillars</h2>
            <p className="text-3xl md:text-4xl font-extrabold tracking-tight">Why Trust Matters to Us</p>
            <div className="h-1 w-12 bg-gold-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-navy-900/50 border border-white/5 p-6 rounded-2xl text-center flex flex-col items-center"
                >
                  <div className="h-12 w-12 bg-navy-800 rounded-xl flex items-center justify-center text-gold-500 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                  <p className="text-navy-200 text-xs leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gold-600 mb-3">Compliance</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">Our Verification Process</p>
            <div className="h-1 w-12 bg-gold-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-500 text-xs mt-4">We maintain rigorous background checks on every team member on-ground.</p>
          </div>

          <div className="relative border-l-2 border-gold-500/20 pl-8 ml-4 md:ml-32 space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Bullet */}
                <div className="absolute -left-[41px] top-0.5 h-6 w-6 bg-navy-950 border-2 border-gold-500 rounded-full flex items-center justify-center text-[10px] font-bold text-gold-500">
                  {idx + 1}
                </div>
                <h4 className="text-base font-bold text-navy-950 mb-1">{step.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed max-w-xl">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gold-600 mb-3">Leadership</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">Our Executive Team</p>
            <div className="h-1 w-12 bg-gold-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Initials avatar placeholder */}
                <div className="h-24 w-24 bg-gradient-to-br from-navy-900 to-navy-800 text-gold-500 font-extrabold text-2xl rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-2 border-gold-500/10">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h4 className="text-lg font-bold text-navy-950 mb-1">{member.name}</h4>
                <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider block mb-4">
                  {member.role}
                </span>
                <p className="text-gray-500 text-xs leading-relaxed font-light">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-950 text-white text-center">
        <div className="container-custom max-w-xl">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Work with a Team You Can Trust</h2>
          <p className="text-navy-200 text-xs leading-relaxed mb-8">
            Learn more about how we screen our staff and handle confidentiality. Set up a consultation call with one of our managers.
          </p>
          <Link href="/contact">
            <Button className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-8 py-5 rounded-xl">
              Book Call
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
