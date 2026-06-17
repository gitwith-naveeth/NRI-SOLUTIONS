"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ClipboardList, FileText, Mail, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { mockServiceRequests, mockDocuments, mockMessages } from "@/lib/mock-data";

export default function DashboardOverview() {
  const [user, setUser] = useState({ name: "Client" });

  useEffect(() => {
    const cached = localStorage.getItem("nri_user");
    if (cached) {
      setUser(JSON.parse(cached));
    }
  }, []);

  const stats = [
    { label: "Active Requests", value: mockServiceRequests.filter(r => r.status === "in-progress").length, icon: ClipboardList, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Verified Documents", value: mockDocuments.length, icon: FileText, color: "text-gold-500", bg: "bg-gold-50" },
    { label: "Unread Messages", value: mockMessages.filter(m => !m.read).length, icon: Mail, color: "text-purple-500", bg: "bg-purple-50" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-navy-950 tracking-tight">
          Welcome back, {user.name}
        </h1>
        <p className="text-gray-500 text-xs mt-1">
          Here is your local updates summary for today.
        </p>
      </div>

      {/* Info Card banner */}
      <div className="bg-navy-950 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,168,83,0.05),transparent_50%)]"></div>
        <div className="space-y-2 relative z-10 text-center sm:text-left">
          <span className="inline-flex items-center space-x-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] text-gold-300 font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="h-3.5 w-3.5 text-gold-500" />
            <span>Dedicated Representative Active</span>
          </span>
          <h3 className="text-xl font-bold">Standard Support Subscription</h3>
          <p className="text-navy-300 text-xs font-light max-w-md">
            Next on-ground site visit in Bengaluru scheduled for June 22, 2026.
          </p>
        </div>
        <Link href="/contact" className="relative z-10 w-full sm:w-auto flex-shrink-0">
          <button className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold px-6 py-3 rounded-xl text-xs transition-colors shadow-lg shadow-gold-500/10">
            Request New Service
          </button>
        </Link>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="border border-gray-100 shadow-sm rounded-2xl">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 ${stat.bg} ${stat.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-navy-950 block">{stat.value}</span>
                  <span className="text-xs text-gray-500 font-medium">{stat.label}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Grid: Recent requests & activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Recent Service Requests */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-navy-950">Active Requests</h3>
            <Link href="/dashboard/requests" className="text-xs font-bold text-gold-600 hover:text-gold-500 flex items-center">
              View All <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </div>

          <div className="space-y-4">
            {mockServiceRequests.slice(0, 3).map((req) => (
              <div
                key={req.id}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block mb-1">{req.id}</span>
                  <h4 className="text-sm font-bold text-navy-950">{req.title}</h4>
                  <span className="text-xs text-gray-500 block mt-1">{req.serviceType}</span>
                </div>
                <div className="flex flex-col sm:items-end gap-2">
                  <span
                    className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      req.status === "completed"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : req.status === "in-progress"
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "bg-yellow-50 text-yellow-700 border border-yellow-200"
                    }`}
                  >
                    {req.status}
                  </span>
                  <span className="text-[10px] text-gray-400 flex items-center">
                    <Clock className="h-3.5 w-3.5 mr-1" />
                    Updated: {req.updatedAt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Messages preview */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-navy-950">Recent Updates</h3>
            <Link href="/dashboard/messages" className="text-xs font-bold text-gold-600 hover:text-gold-500 flex items-center">
              Inbox <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm divide-y divide-gray-100 overflow-hidden">
            {mockMessages.slice(0, 3).map((msg) => (
              <Link href="/dashboard/messages" key={msg.id} className="block p-5 hover:bg-gray-50/50 transition-colors">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <span className="font-bold text-xs text-navy-950 block truncate">{msg.sender}</span>
                  {!msg.read && (
                    <span className="h-2 w-2 bg-gold-500 rounded-full flex-shrink-0 mt-1"></span>
                  )}
                </div>
                <h5 className={`text-xs ${!msg.read ? "font-bold text-navy-900" : "text-gray-600"} truncate`}>
                  {msg.subject}
                </h5>
                <p className="text-[11px] text-gray-400 truncate mt-1">{msg.preview}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
