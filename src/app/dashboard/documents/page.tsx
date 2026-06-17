"use client";

import { useState } from "react";
import { FileText, Download, Upload, Search, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockDocuments } from "@/lib/mock-data";

export default function DashboardDocuments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [docs] = useState(mockDocuments);

  const filteredDocs = docs.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownload = (name: string) => {
    alert(`Downloading document: ${name} (Mock Action)`);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-navy-950 tracking-tight flex items-center">
            <FileText className="h-7 w-7 text-gold-500 mr-3" />
            Documents Chamber
          </h1>
          <p className="text-gray-500 text-xs mt-1">
            Access certified deeds, receipts, and verified inspect reports.
          </p>
        </div>
        <Button className="bg-navy-950 hover:bg-navy-900 text-white rounded-xl">
          <Upload className="h-4 w-4 mr-2" /> Upload Document
        </Button>
      </div>

      {/* Filter panel */}
      <div className="flex gap-4 items-center max-w-md bg-white border border-gray-100 px-4 py-2.5 rounded-xl shadow-sm">
        <Search className="h-4 w-4 text-gray-400 flex-shrink-0" />
        <Input
          type="text"
          placeholder="Search documents by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
        />
      </div>

      {/* Documents Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDocs.length > 0 ? (
          filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start justify-between gap-4"
            >
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-navy-50 text-navy-950 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-gold-600 bg-gold-50 px-2 py-0.5 rounded-full uppercase tracking-wider block w-fit mb-2">
                    {doc.category}
                  </span>
                  <h4 className="text-sm font-bold text-navy-950 leading-snug">{doc.name}</h4>
                  <p className="text-[11px] text-gray-400 mt-2 font-medium">
                    {doc.type} • {doc.size} • Uploaded: {doc.uploadedAt}
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => handleDownload(doc.name)}
                className="border-gray-200 hover:bg-navy-50 hover:text-navy-950 rounded-xl h-10 w-10 flex-shrink-0"
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12 bg-white border border-gray-100 rounded-3xl p-8">
            <FileDown className="h-10 w-10 text-gray-300 mx-auto mb-4" />
            <h4 className="font-bold text-navy-950 mb-1">No documents found</h4>
            <p className="text-gray-400 text-xs max-w-xs mx-auto">
              No files match your search criteria in the chamber.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
