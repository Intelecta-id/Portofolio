"use client";

import React from "react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { brandData } from "@/data/brandData";

export default function StickyWhatsAppButton() {
  return (
    <aside
      aria-label="Aksi Cepat Pesan WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center select-none"
    >
      <a
        href={brandData.contact.getWhatsappOrderUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-wa-ring group flex items-center bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 p-0 overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Kirim Pesan WhatsApp untuk Pesan Antar ke Unit atau Lobi"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
          <WhatsAppIcon
            className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-transform group-hover:scale-105"
            aria-hidden="true"
          />
        </div>
        <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pr-5 group-focus-visible:max-w-[200px] group-focus-visible:opacity-100 group-focus-visible:pr-5 text-sm font-bold text-white transition-all duration-300 ease-in-out">
          Pesan via WhatsApp
        </span>
      </a>
    </aside>
  );
}
