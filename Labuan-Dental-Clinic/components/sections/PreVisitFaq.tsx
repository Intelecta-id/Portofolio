"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export default function PreVisitFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const essentialFaqs = [
    {
      q: "Apakah Labuan Dental Clinic (LDC) terdaftar resmi di Kemenkes?",
      a: "Ya. Labuan Dental Clinic tercatat resmi dalam basis data Faskes Kemenkes RI sebagai Tempat Praktik Mandiri Dokter Gigi dengan penanggung jawab drg. Ansali Iklil Raudoh.",
    },
    {
      q: "Bagaimana patokan navigasi menuju klinik?",
      a: "Klinik berlokasi di Jl. Nasional III No. 26 Labuan. Patokan utama lapangan adalah Ciateul, tepat di samping Gudang Alfa, dengan area parkir motor dan mobil langsung di depan klinik.",
    },
    {
      q: "Apakah sebaiknya reservasi terlebih dahulu sebelum datang?",
      a: "Ya, sangat dianjurkan. Mengingat jam praktik dokter gigi terjadwal per sesi, reservasi via WhatsApp memastikan Anda mendapatkan nomor antrean dan slot tindakan tanpa menunggu lama.",
    },
    {
      q: "Metode pembayaran apa saja yang diterima?",
      a: "Klinik melayani pembayaran tunai, transfer bank, dan QRIS. Informasi kerja sama penjaminan asuransi dapat ditanyakan langsung kepada petugas via WhatsApp.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#E7E3DC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6B7280] uppercase block mb-1.5">
            Sebelum Berkunjung
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F2F2E] leading-tight">
            Pertanyaan yang sering diajukan.
          </h2>
        </div>

        {/* Minimal Accordion List */}
        <div className="space-y-3 mb-8">
          {essentialFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E7E3DC] bg-[#FAF9F6] overflow-hidden transition-spring"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-sm sm:text-base font-bold text-[#0F2F2E]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#6B7280] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#0F2F2E]" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-[#E7E3DC] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Pill */}
        <div className="text-center">
          <a
            href={clinicData.contact.getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0D9488] hover:text-[#0F2F2E] transition-colors"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Ada pertanyaan lain? Chat admin WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
