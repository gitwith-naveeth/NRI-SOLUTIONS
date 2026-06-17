"use client";

import { useState } from "react";
import { Mail, Search, MessageSquare, Clock, ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { mockMessages } from "@/lib/mock-data";

export default function DashboardMessages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState(mockMessages);
  const [selectedMessage, setSelectedMessage] = useState<typeof mockMessages[0] | null>(null);
  const [replyText, setReplyText] = useState("");

  const filteredMessages = messages.filter(msg =>
    msg.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.preview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (msg: typeof mockMessages[0]) => {
    setSelectedMessage(msg);
    // Mark as read
    setMessages(prev =>
      prev.map(m => (m.id === msg.id ? { ...m, read: true } : m))
    );
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    alert(`Reply sent: "${replyText}" (Mock Action)`);
    setReplyText("");
  };

  return (
    <div className="space-y-8 animate-fade-in h-full flex flex-col">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-navy-950 tracking-tight flex items-center">
          <Mail className="h-7 w-7 text-gold-500 mr-3" />
          Support Inbox
        </h1>
        <p className="text-gray-500 text-xs mt-1">
          Direct communication line with your dedicated operational rep.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch min-h-[500px]">
        {/* Left pane: Messages List */}
        <div className={`lg:col-span-5 space-y-4 ${selectedMessage ? "hidden lg:block" : "block"}`}>
          <div className="flex gap-4 items-center bg-white border border-gray-100 px-4 py-2.5 rounded-xl shadow-sm mb-4">
            <Search className="h-4 w-4 text-gray-400 flex-shrink-0" />
            <Input
              type="text"
              placeholder="Search inbox..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
            />
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm divide-y divide-gray-100 overflow-hidden">
            {filteredMessages.length > 0 ? (
              filteredMessages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => handleSelect(msg)}
                  className={`w-full text-left p-5 hover:bg-gray-50/50 transition-colors flex justify-between items-start gap-4 ${
                    selectedMessage?.id === msg.id ? "bg-navy-50/50 border-r-4 border-gold-500" : ""
                  }`}
                >
                  <div className="overflow-hidden space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-xs text-navy-950 block truncate">{msg.sender}</span>
                      {!msg.read && (
                        <span className="h-2 w-2 bg-gold-500 rounded-full flex-shrink-0"></span>
                      )}
                    </div>
                    <h5 className={`text-xs ${!msg.read ? "font-bold text-navy-900" : "text-gray-600"} truncate`}>
                      {msg.subject}
                    </h5>
                    <p className="text-[11px] text-gray-400 truncate">{msg.preview}</p>
                  </div>
                  <span className="text-[9px] text-gray-400 flex-shrink-0 whitespace-nowrap">
                    {msg.timestamp.split("T")[0]}
                  </span>
                </button>
              ))
            ) : (
              <div className="text-center py-12 p-8">
                <Mail className="h-10 w-10 text-gray-300 mx-auto mb-4" />
                <h4 className="font-bold text-navy-950 mb-1">Inbox empty</h4>
                <p className="text-gray-400 text-xs max-w-xs mx-auto">
                  No support updates match your filter.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right pane: Message details or empty state */}
        <div className={`lg:col-span-7 ${!selectedMessage ? "hidden lg:flex" : "flex"} flex-col`}>
          {selectedMessage ? (
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col h-full justify-between">
              <div>
                {/* Back button for mobile view */}
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="lg:hidden flex items-center text-xs font-semibold text-gold-600 hover:text-gold-500 mb-6"
                >
                  <ArrowLeft className="h-4 w-4 mr-1.5" /> Back to Inbox
                </button>

                {/* Subject / Sender */}
                <div className="border-b border-gray-100 pb-5 mb-6">
                  <span className="text-[10px] font-mono text-gray-400 block mb-2">{selectedMessage.id}</span>
                  <h3 className="text-lg font-bold text-navy-950 leading-snug mb-3">{selectedMessage.subject}</h3>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span className="font-semibold text-navy-900">From: {selectedMessage.sender}</span>
                    <span className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      {selectedMessage.timestamp.replace("T", " ")}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="text-sm text-gray-600 leading-relaxed font-light space-y-4">
                  <p>{selectedMessage.preview}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id lorem eros. Cras sed ipsum interdum, egestas risus tincidunt, sodales lorem. Curabitur sed tempor sem. Aliquam convallis finibus feugiat. Sed et convallis nunc.
                  </p>
                </div>
              </div>

              {/* Reply Form */}
              <form onSubmit={handleSendReply} className="border-t border-gray-100 pt-6 mt-8 space-y-4">
                <Textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type a message to reply..."
                  className="rounded-xl border-gray-200 min-h-[80px] text-xs"
                />
                <div className="flex justify-end">
                  <Button type="submit" className="bg-navy-950 hover:bg-navy-900 text-white rounded-xl text-xs py-2 px-5 font-semibold flex items-center">
                    Send Reply <Send className="h-3.5 w-3.5 ml-2" />
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col justify-center items-center text-center p-12 h-full">
              <MessageSquare className="h-12 w-12 text-gray-300 mb-4 animate-float" />
              <h3 className="font-bold text-navy-950 mb-1">Select a Message</h3>
              <p className="text-gray-400 text-xs max-w-xs mx-auto leading-relaxed">
                Click on any update in the left list to read details and correspond directly with our managers.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
