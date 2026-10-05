"use client";

import React from "react";
import { ShieldCheck, Stethoscope, UserRound, ArrowRight } from "lucide-react";

export default function SignalBar() {
  const signals = [
    {
      icon: ShieldCheck,
      title: "Kenali ruang klinik",
      subtitle: "Visual disempurnakan dari foto fasilitas asli.",
      href: "#suasana-ruang",
    },
    {
      icon: Stethoscope,
      title: "Informasi layanan",
      subtitle: "Lihat layanan dan estimasi tarif.",
      href: "#layanan-tarif",
    },
    {
      icon: UserRound,
      title: "Tim dokter",
      subtitle: "Profil resmi terdaftar Kemenkes RI.",
      href: "#profil-dokter",
    },
  ];

  return (
    <section className="bg-[#FFFFFF] border-b border-[#EAE6DF] py-4" aria-label="Informasi utama klinik">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {signals.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] hover:bg-[#F5F1EB] border border-[#EAE6DF] hover:border-[#D8D2C5] transition-spring shadow-xs"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F2F0] text-[#0D9488] group-hover:bg-[#111827] group-hover:text-white flex items-center justify-center shrink-0 transition-spring">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <strong className="block text-sm font-bold text-[#111827] group-hover:text-[#0D9488] transition-colors truncate">
                      {item.title}
                    </strong>
                    <small className="block text-xs text-[#6B7280] truncate">
                      {item.subtitle}
                    </small>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-lg text-[#9CA3AF] group-hover:text-[#111827] group-hover:translate-x-1 flex items-center justify-center shrink-0 transition-spring">
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
