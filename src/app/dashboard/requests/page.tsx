"use client";

import { useState } from "react";
import { ClipboardList, Plus, Search, Calendar, ChevronDown, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockServiceRequests } from "@/lib/mock-data";

export default function DashboardRequests() {
  const [searchTerm, setSearchTerm] = useState("");
  const [requests, setRequests] = useState(mockServiceRequests);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-50 text-green-700 border-green-200";
      case "in-progress":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-50 text-red-700 border-red-200";
      case "high":
        return "bg-orange-50 text-orange-700 border-orange-200";
      default:
        return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  const filteredRequests = requests.filter(req =>
    req.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.serviceType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-navy-950 tracking-tight flex items-center">
            <ClipboardList className="h-7 w-7 text-gold-500 mr-3" />
            Service Requests
          </h1>
          <p className="text-gray-500 text-xs mt-1">
            Track and monitor on-ground execution milestones.
          </p>
        </div>
        <Button className="bg-navy-950 hover:bg-navy-900 text-white rounded-xl">
          <Plus className="h-4 w-4 mr-2" /> New Request
        </Button>
      </div>

      {/* Filter panel */}
      <div className="flex gap-4 items-center max-w-md bg-white border border-gray-100 px-4 py-2.5 rounded-xl shadow-sm">
        <Search className="h-4 w-4 text-gray-400 flex-shrink-0" />
        <Input
          type="text"
          placeholder="Search requests by ID, title, or type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
        />
      </div>

      {/* Request grid list */}
      <div className="space-y-6">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((req) => (
            <div
              key={req.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-6"
            >
              {/* Top Meta */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-50 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 block mb-1">{req.id}</span>
                  <h3 className="text-base font-bold text-navy-950">{req.title}</h3>
                  <span className="text-xs text-gray-500 block mt-1">{req.serviceType}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className={`rounded-full uppercase tracking-wider text-[10px] font-bold px-2.5 py-1 ${getStatusColor(req.status)}`}>
                    {req.status}
                  </Badge>
                  <Badge variant="outline" className={`rounded-full uppercase tracking-wider text-[10px] font-bold px-2.5 py-1 ${getPriorityColor(req.priority)}`}>
                    {req.priority}
                  </Badge>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                {req.description}
              </p>

              {/* Visual Execution timeline (Mock) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-green-50 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-navy-950 block">Request Received</span>
                    <span className="text-[10px] text-gray-400">{req.createdAt}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    req.status !== "pending" ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-400"
                  }`}>
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-navy-950 block">On-Ground Allocated</span>
                    <span className="text-[10px] text-gray-400">
                      {req.status !== "pending" ? req.createdAt : "Pending"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    req.status === "completed" ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-400"
                  }`}>
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-navy-950 block">Verification Audited</span>
                    <span className="text-[10px] text-gray-400">
                      {req.status === "completed" ? req.updatedAt : "In progress"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-50 text-xs">
                <span className="text-gray-400 flex items-center">
                  <Calendar className="h-3.5 w-3.5 mr-1.5" />
                  Created: {req.createdAt}
                </span>
                <Button variant="ghost" className="text-gold-600 hover:text-gold-500 font-bold p-0 text-xs">
                  Request Update Audit
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white border border-gray-100 rounded-3xl p-8">
            <ClipboardList className="h-10 w-10 text-gray-300 mx-auto mb-4" />
            <h4 className="font-bold text-navy-950 mb-1">No requests found</h4>
            <p className="text-gray-400 text-xs max-w-xs mx-auto">
              No service requests match your search filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
