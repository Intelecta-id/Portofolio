"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export default function StickyWhatsApp() {
  const whatsappUrl = clinicData.contact.getWhatsappUrl();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Hint */}
      <div className="hidden sm:flex items-center gap-2 bg-white/95 text-[#0A2230] px-4 py-2 rounded-2xl shadow-lg border border-[#0B7F8C]/20 backdrop-blur-md transition-spring hover:scale-105">
        <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
        <span className="text-xs font-semibold">Tanya Dokter via WA</span>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:bg-[#1EBE5D] hover:scale-110 active:scale-95 transition-spring focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Hubungi WhatsApp Labuan Dental Clinic (0831-2355-5554)"
      >
        <MessageCircle className="w-7 h-7 fill-white" aria-hidden="true" />
      </a>
    </div>
  );
}
