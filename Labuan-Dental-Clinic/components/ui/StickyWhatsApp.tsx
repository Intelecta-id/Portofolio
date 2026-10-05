"use client";

import React from "react";
import { clinicData } from "@/data/clinicData";

export default function StickyWhatsApp() {
  const whatsappUrl = clinicData.contact.getWhatsappUrl();

  return (
    <aside
      aria-label="Aksi Cepat WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
    >
      {/* Tooltip / Hint */}
      <div className="hidden sm:flex items-center gap-2 bg-[#FFFFFF]/95 text-[#0C2725] px-4 py-2 rounded-2xl shadow-md border border-[#E8E3D9] backdrop-blur-md transition-spring hover:scale-105">
        <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
        <span className="text-xs font-bold">Chat WhatsApp Admin</span>
      </div>

      {/* Floating Button with Official WhatsApp Brand Logo */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.4)] hover:bg-[#20BD5A] hover:scale-105 active:scale-95 transition-spring focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 group"
        aria-label="Hubungi WhatsApp Labuan Dental Clinic (0831-2355-5554)"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:scale-105 transition-transform"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.98.537 1.83.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766m3.393 8.163c-.144.405-.837.774-1.17.822-.312.045-.698.064-2.143-.532-1.849-.763-3.037-2.656-3.13-2.78-.093-.124-.746-.994-.746-1.897 0-.902.473-1.347.641-1.531.168-.184.368-.23.491-.23.123 0 .246.001.353.006.113.005.263-.043.411.314.154.37.525 1.28.571 1.373.046.092.077.2.015.324-.061.123-.092.2-.184.308-.093.108-.195.24-.278.324-.093.093-.189.194-.081.379.108.185.479.79 1.028 1.278.707.628 1.303.823 1.488.916.185.092.293.077.401-.047.108-.123.462-.538.585-.723.123-.185.246-.154.416-.092.169.062 1.077.508 1.262.6.185.093.308.139.354.216.046.077.046.446-.098.851zM12.036 0C5.397 0 .011 5.386 0 12.025c0 2.118.553 4.186 1.606 6.009L0 24l6.155-1.614a11.97 11.97 0 0 0 5.881 1.547h.005c6.638 0 12.023-5.386 12.024-12.026C24.065 5.385 18.675 0 12.036 0zm0 21.921h-.004a9.873 9.873 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.264c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.886 9.885z" />
        </svg>
      </a>
    </aside>
  );
}
