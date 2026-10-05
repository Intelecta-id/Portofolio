"use client";

import React from "react";

export default function EditorialPrinciples() {
  const principles = [
    {
      number: "01",
      title: "Pahami kebutuhanmu",
      description:
        "Mulailah dari keluhan rasa ngilu, kebutuhan estetika gigi, atau informasi yang ingin kamu tanyakan.",
    },
    {
      number: "02",
      title: "Kenali pilihannya",
      description:
        "Informasi layanan membantu persiapan awal, sedangkan keputusan tindakan tetap mengikuti pemeriksaan dokter.",
    },
    {
      number: "03",
      title: "Transparansi & privasi",
      description:
        "Pemeriksaan satu per satu secara tenang di ruang tindakan dengan privasi rekam medis yang terjaga penuh.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Lead */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6B7280] uppercase block">
              Tentang Labuan Dental Clinic
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-[#111827] leading-tight">
              Persiapan kunjungan yang terasa lebih terarah.
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Setiap kebutuhan perawatan perlu dimulai dari percakapan dan pemeriksaan langsung. Halaman ini membantu kamu mengenali informasi klinik sebelum langkah tersebut dilakukan.
            </p>
          </div>

          {/* Right Column: 3 Minimalist Articles (Fre DentalCare style) */}
          <div className="lg:col-span-7 space-y-3.5">
            {principles.map((item, idx) => (
              <article
                key={idx}
                className="flex items-start gap-5 p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DF] shadow-xs transition-spring hover:border-[#D8D2C5]"
              >
                <span className="font-editorial text-xl font-bold text-[#0D9488] bg-[#E6F2F0] w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
                  {item.number}
                </span>
                <div className="space-y-1">
                  <strong className="block text-base font-bold text-[#111827]">
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
