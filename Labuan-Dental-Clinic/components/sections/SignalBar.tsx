"use client";

import React from "react";
import { ShieldCheck, Stethoscope, UserRound, ArrowRight } from "lucide-react";

export default function SignalBar() {
  const signals = [
    {
      icon: ShieldCheck,
      title: "Kenali ruang klinik",
      subtitle: "Visual disempurnakan dari foto fasilitas asli.",
      href: "#fasilitas",
    },
    {
      icon: Stethoscope,
      title: "Informasi layanan",
      subtitle: "Lihat layanan yang sudah dipublikasikan.",
      href: "#layanan",
    },
    {
      icon: UserRound,
      title: "Tim dokter",
      subtitle: "Profil yang telah disetujui untuk publik.",
      href: "#dokter",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] border-b border-[#E7E3DC] py-4" aria-label="Informasi utama klinik">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {signals.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                className="group flex items-center justify-between p-4 rounded-2xl bg-[#FAF9F6] hover:bg-[#F3EFEA] border border-[#E7E3DC] hover:border-[#D5CFC5] transition-spring"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-10 h-10 rounded-xl bg-[#E6F2F0] text-[#0D9488] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <strong className="block text-sm font-bold text-[#0F2F2E] truncate">
                      {item.title}
                    </strong>
                    <small className="block text-xs text-[#6B7280] truncate">
                      {item.subtitle}
                    </small>
                  </div>
                </div>

                <div className="w-7 h-7 text-[#6B7280] group-hover:text-[#0F2F2E] group-hover:translate-x-1 flex items-center justify-center shrink-0 transition-spring">
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
