"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { clinicData } from "@/data/clinicData";

export default function PreVisitFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-pasien" className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E8E3D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#4D6765] uppercase block mb-2">
            Sebelum Berkunjung
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C2725] leading-tight">
            Pertanyaan yang sering diajukan.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1B3C39]/80 leading-relaxed">
            Informasi mendasar seputar persiapan kunjungan, reservasi jadwal, metode pembayaran, dan kenyamanan penanganan gigi.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {clinicData.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E8E3D9] bg-[#FBF9F5] overflow-hidden transition-spring"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2725]"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-base sm:text-lg font-bold text-[#0C2725] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-white border border-[#E8E3D9] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#0C2725] text-white" : "text-[#4D6765]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#1B3C39] leading-relaxed border-t border-[#E8E3D9] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need More Assistance Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#F5F1EB] border border-[#E8E3D9] text-center space-y-3">
          <h3 className="font-editorial text-lg font-bold text-[#0C2725]">
            Masih Memerlukan Informasi Tambahan?
          </h3>
          <p className="text-xs sm:text-sm text-[#4D6765] max-w-xl mx-auto leading-relaxed">
            Staf administrasi Labuan Dental Clinic siap membantu menjawab pertanyaan seputar jadwal praktik dokter gigi dan rencana tindakan via WhatsApp.
          </p>
          <div className="pt-2">
            <Button
              href={clinicData.contact.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              icon={MessageCircle}
            >
              Hubungi Admin via WhatsApp ({clinicData.contact.phoneDisplay})
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
