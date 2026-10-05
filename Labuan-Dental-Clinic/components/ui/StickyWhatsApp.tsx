"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export default function StickyWhatsApp() {
  const whatsappUrl = clinicData.contact.getWhatsappUrl();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Hint */}
      <div className="hidden sm:flex items-center gap-2 bg-[#FFFFFF]/95 text-[#0C2725] px-4 py-2 rounded-2xl shadow-md border border-[#E8E3D9] backdrop-blur-md transition-spring hover:scale-105">
        <span className="w-2.5 h-2.5 rounded-full bg-[#107C41] animate-pulse" />
        <span className="text-xs font-bold">Chat WhatsApp Admin</span>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#107C41] text-white flex items-center justify-center shadow-lg hover:bg-[#0B6634] hover:scale-105 active:scale-95 transition-spring focus:outline-none focus-visible:ring-4 focus-visible:ring-[#107C41]/30"
        aria-label="Hubungi WhatsApp Labuan Dental Clinic (0831-2355-5554)"
      >
        <MessageCircle className="w-7 h-7 fill-white" aria-hidden="true" />
      </a>
    </div>
  );
}
