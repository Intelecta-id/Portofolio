"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle, Phone } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { clinicData } from "@/data/clinicData";

export default function PreVisitFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-[#0B7F8C]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="teal" icon={HelpCircle} className="mb-3">
            Tanya Jawab Pasien (FAQ)
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A2230]">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1D3546]/80 leading-relaxed">
            Informasi penting seputar reservasi, metode pembayaran, persiapan kunjungan, dan etika perawatan gigi.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {clinicData.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#0B7F8C]/15 bg-[#F4F8FA] overflow-hidden transition-spring"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B7F8C]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0A2230] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl bg-white border border-[#0B7F8C]/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#0B7F8C] text-white" : "text-[#0B7F8C]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#1D3546]/90 leading-relaxed border-t border-[#0B7F8C]/10 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need More Assistance Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#E1F4F6]/50 border border-[#0B7F8C]/20 text-center space-y-3">
          <h3 className="text-lg font-bold text-[#0A2230]">
            Masih Memiliki Pertanyaan Lain?
          </h3>
          <p className="text-sm text-[#1D3546]/80 max-w-xl mx-auto leading-relaxed">
            Staf administrasi dan tim Labuan Dental Clinic siap membantu menjelaskan rincian tindakan,
            estimasi tarif, dan ketersediaan jadwal dokter melalui WhatsApp.
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
              Hubungi Admin via WhatsApp (0831-2355-5554)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
