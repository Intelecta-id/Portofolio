"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { brandData } from "@/data/brandData";

export default function StickyWhatsAppButton() {
  return (
    <aside
      aria-label="Aksi Cepat Pesan WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center select-none"
    >

      {/* Main Floating WhatsApp Button: Solid authentic green #25D366, white icon, never transparent */}
      <a
        href={brandData.contact.getWhatsappOrderUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl active:scale-95 transition-spring focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Kirim Pesan WhatsApp untuk Pesan Antar ke Unit atau Lobi"
      >
        {/* Soft pulse ring */}
        <span
          className="absolute -inset-1 rounded-full opacity-60 animate-ping pointer-events-none"
          style={{ backgroundColor: "#25D366" }}
          aria-hidden="true"
        />

        {/* White WhatsApp MessageCircle Icon */}
        <MessageCircle
          className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10 transition-spring group-hover:scale-110 stroke-[2.2]"
          aria-hidden="true"
        />
      </a>
    </aside>
  );
}
