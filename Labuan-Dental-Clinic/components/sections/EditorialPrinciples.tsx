"use client";

import React from "react";

export default function EditorialPrinciples() {
  const principles = [
    {
      number: "01",
      title: "Pahami kebutuhanmu",
      description:
        "Mulailah dari keluhan, tujuan, atau informasi yang ingin kamu tanyakan.",
    },
    {
      number: "02",
      title: "Kenali pilihannya",
      description:
        "Informasi layanan membantu persiapan, sedangkan keputusan tetap mengikuti pemeriksaan dokter.",
    },
    {
      number: "03",
      title: "Jaga informasi pribadi",
      description:
        "Profil publik tidak menampilkan rekam medis atau informasi pribadi pasien.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#E7E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Section Lead */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6B7280] uppercase block">
              Tentang Labuan Dental Clinic
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F2F2E] leading-tight">
              Persiapan kunjungan yang terasa lebih terarah.
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Setiap kebutuhan perawatan perlu dimulai dari percakapan dan pemeriksaan langsung. Halaman ini membantu kamu mengenali informasi klinik sebelum langkah tersebut dilakukan.
            </p>
          </div>

          {/* 3 Minimal Principles */}
          <div className="lg:col-span-7 space-y-3">
            {principles.map((item, idx) => (
              <article
                key={idx}
                className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] border border-[#E7E3DC] shadow-xs"
              >
                <span className="font-editorial text-lg font-bold text-[#0D9488] bg-[#E6F2F0] w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                  {item.number}
                </span>
                <div className="space-y-0.5">
                  <strong className="block text-sm font-bold text-[#0F2F2E]">
                    {item.title}
                  </strong>
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
