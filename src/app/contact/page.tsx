"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MessageSquare, Clock, MapPin, CheckCircle2, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  COUNTRIES,
  SERVICE_TYPES,
  TIMEZONES,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  WHATSAPP_LINK,
} from "@/lib/constants";

function ContactPageContent() {
  const searchParams = useSearchParams();
  
  const [activeTab, setActiveTab] = useState<"inquiry" | "consultation">("inquiry");
  const [submitted, setSubmitted] = useState(false);
  
  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [message, setMessage] = useState("");
  
  // Booking-specific States
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    const type = searchParams.get("type");
    const plan = searchParams.get("plan");
    const service = searchParams.get("service");

    if (type === "consultation") {
      setActiveTab("consultation");
    }

    if (plan) {
      const planName = plan.charAt(0).toUpperCase() + plan.slice(1);
      setMessage(`Interested in subscribing to the ${planName} Plan.`);
    }

    if (service) {
      setServiceType(service);
      setMessage(`Interested in requesting the service: ${service}.`);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would hit /api/inquiries or /api/consultations
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setServiceType("");
    setMessage("");
    setPreferredDate("");
    setPreferredTime("");
    setTimezone("");
    setSubmitted(false);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative gradient-hero pt-32 pb-16 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <div className="container-custom relative z-10 max-w-3xl">
          <div className="flex justify-center items-center space-x-2 text-xs font-semibold text-gold-400 uppercase tracking-wider mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-navy-150 text-sm md:text-base font-light leading-relaxed">
            Have questions about managing assets or coordination back in India? Connect with our team. We're here to serve.
          </p>
        </div>
      </section>

      {/* Main Content split */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            {/* Form Section */}
            <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="h-16 w-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-950">Thank You!</h3>
                  <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                    Your {activeTab === "inquiry" ? "service inquiry" : "consultation request"} has been successfully recorded. An NRI Solutions representative will contact you via WhatsApp and email within 4 business hours.
                  </p>
                  <Button onClick={handleReset} className="bg-navy-950 hover:bg-navy-900 text-white rounded-xl">
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <div>
                  {/* Tab Selector */}
                  <div className="flex space-x-4 mb-8 border-b border-gray-100 pb-4">
                    <button
                      type="button"
                      onClick={() => setActiveTab("inquiry")}
                      className={`text-sm font-bold pb-2 transition-all relative ${
                        activeTab === "inquiry"
                          ? "text-navy-950 border-b-2 border-gold-500"
                          : "text-gray-400 hover:text-navy-950"
                      }`}
                    >
                      General Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("consultation")}
                      className={`text-sm font-bold pb-2 transition-all relative ${
                        activeTab === "consultation"
                          ? "text-navy-950 border-b-2 border-gold-500"
                          : "text-gray-400 hover:text-navy-950"
                      }`}
                    >
                      Book Consultation Call
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* General Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Rajesh Sharma"
                          className="rounded-xl border-gray-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="rajesh@example.com"
                          className="rounded-xl border-gray-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                          Phone Number (with Country Code)
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+1 (555) 019-2834"
                          className="rounded-xl border-gray-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                          Residing Country
                        </Label>
                        <Select onValueChange={(val: string | null) => setCountry(val || "")} required>
                          <SelectTrigger className="rounded-xl border-gray-200 bg-white">
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            {COUNTRIES.map((c) => (
                              <SelectItem key={c} value={c} className="hover:bg-gray-50">
                                {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                        Primary Service Interest
                      </Label>
                      <Select onValueChange={(val: string | null) => setServiceType(val || "")}>
                        <SelectTrigger className="rounded-xl border-gray-200 bg-white">
                          <SelectValue placeholder="Select Service Category" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          {SERVICE_TYPES.map((s) => (
                            <SelectItem key={s} value={s} className="hover:bg-gray-50">
                              {s}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Consultation-specific Fields */}
                    {activeTab === "consultation" && (
                      <div className="space-y-6 border-t border-gray-100 pt-6">
                        <h4 className="text-sm font-bold text-navy-950 flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gold-500" />
                          Schedule Details
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="date" className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                              Preferred Date
                            </Label>
                            <Input
                              id="date"
                              type="date"
                              required
                              value={preferredDate}
                              onChange={(e) => setPreferredDate(e.target.value)}
                              className="rounded-xl border-gray-200"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="time" className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                              Preferred Time
                            </Label>
                            <Input
                              id="time"
                              type="time"
                              required
                              value={preferredTime}
                              onChange={(e) => setPreferredTime(e.target.value)}
                              className="rounded-xl border-gray-200"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                              Your Timezone
                            </Label>
                            <Select onValueChange={(val: string | null) => setTimezone(val || "")} required>
                              <SelectTrigger className="rounded-xl border-gray-200 bg-white">
                                <SelectValue placeholder="Select Timezone" />
                              </SelectTrigger>
                              <SelectContent className="bg-white">
                                {TIMEZONES.map((tz) => (
                                  <SelectItem key={tz} value={tz} className="hover:bg-gray-50">
                                    {tz}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                        {activeTab === "inquiry" ? "Tell us about your requirement" : "Additional Notes for our team"}
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please include details such as cities, timelines, or specific concerns."
                        className="rounded-xl border-gray-200 min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold py-4 rounded-xl shadow-lg hover:shadow-gold-500/10 text-sm">
                      {activeTab === "inquiry" ? "Send Service Inquiry" : "Book Call Appointment"}
                    </Button>
                  </form>
                </div>
              )}
            </div>

            {/* Sidebar Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              {/* Contact Info Card */}
              <div className="bg-navy-950 text-white rounded-3xl p-8 space-y-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,168,83,0.05),transparent_50%)]"></div>
                
                <h3 className="text-xl font-bold text-white relative z-10">Direct Channels</h3>
                <div className="h-0.5 w-8 bg-gold-500 relative z-10"></div>

                <div className="space-y-6 relative z-10 text-sm">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-gold-500 mr-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-navy-300 font-semibold block mb-1">Email support</span>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold-400 transition-colors font-medium">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gold-500 mr-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-navy-300 font-semibold block mb-1">Phone inquiries</span>
                      <a href={`tel:${CONTACT_PHONE}`} className="hover:text-gold-400 transition-colors font-medium">
                        {CONTACT_PHONE}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gold-500 mr-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-navy-300 font-semibold block mb-1">Response Guarantee</span>
                      <span className="font-light text-navy-100">Within 4 business hours</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors w-full shadow-lg shadow-green-600/10"
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Consultation Info Block */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-4">
                <h4 className="font-bold text-navy-950 text-base">What happens next?</h4>
                <ol className="space-y-4 text-xs text-gray-500 list-decimal list-inside pl-1">
                  <li className="leading-relaxed">
                    <span className="font-bold text-gray-700">Receive Confirmation:</span> You will get an email confirmation with meeting coordinates.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-bold text-gray-700">Initial Assessment:</span> We assign a local operational coordinator specializing in your service category.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-bold text-gray-700">Custom Action Plan:</span> During the call, we outline costs, city coverage, and timelines.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white text-navy-950">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-500 mx-auto"></div>
            <p className="text-xs text-gray-500">Loading form details...</p>
          </div>
        </div>
      }
    >
      <ContactPageContent />
    </Suspense>
  );
}
