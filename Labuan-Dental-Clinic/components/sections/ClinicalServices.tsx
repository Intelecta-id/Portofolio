"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, CheckCircle2, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { clinicData } from "@/data/clinicData";

export default function ClinicalServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>("semua");

  const categories = [
    { id: "semua", label: "Semua Layanan" },
    { id: "pencegahan", label: "Pencegahan & Scaling" },
    { id: "kuratif", label: "Tambal & Restorasi" },
    { id: "pedodonti", label: "Gigi Anak" },
    { id: "konsultasi", label: "Pemeriksaan Medis" },
  ];

  const filteredServices =
    selectedCategory === "semua"
      ? clinicData.services
      : clinicData.services.filter((s) => s.category === selectedCategory);

  return (
    <section id="layanan" className="py-16 md:py-24 bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2F0] text-xs font-bold text-[#2D6A5E]">
            Layanan Medis Gigi
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1F2A28] tracking-tight">
            Pilihan Layanan Perawatan Gigi Keluarga
          </h2>
          <p className="text-base sm:text-lg text-[#243330] leading-relaxed">
            Pelayanan kesehatan gigi lengkap dengan standar higienis tinggi dan penanganan ramah bebas cemas oleh dokter gigi berlisensi.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-spring focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A5E] ${
                selectedCategory === cat.id
                  ? "bg-[#2D6A5E] text-white shadow-xs"
                  : "bg-white text-[#243330] border border-[#E6E1D8] hover:border-[#2D6A5E]/40 hover:text-[#1F2A28]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredServices.map((service) => {
            const serviceWhatsappUrl = clinicData.contact.getWhatsappUrl(
              `Halo Labuan Dental Clinic (LDC), saya ingin konsultasi dan menanyakan ketersediaan jadwal untuk tindakan: ${service.name}.`
            );

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl border border-[#E6E1D8] overflow-hidden shadow-xs hover:shadow-md hover:border-[#2D6A5E]/40 transition-spring flex flex-col group"
              >
                {/* Photo Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF8F4]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover img-zoom"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#FAF8F4]/90 backdrop-blur-sm text-[#2D6A5E] border border-[#E6E1D8]">
                      {service.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="font-heading text-lg font-bold text-[#1F2A28] leading-snug group-hover:text-[#2D6A5E] transition-spring">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#243330] leading-relaxed line-clamp-3">
                      {service.summary}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-1.5 pt-1 text-xs text-[#1F2A28]">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A5E] shrink-0 mt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Duration, Action & Direct WhatsApp */}
                  <div className="pt-4 border-t border-[#E6E1D8]/70 space-y-4">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-1.5 text-[#243330]">
                        <Clock className="w-4 h-4 text-[#2D6A5E]" />
                        <span>Estimasi: <strong className="text-[#1F2A28]">30-45 menit</strong></span>
                      </div>
                      <span className="text-[11px] font-semibold text-[#2D6A5E] bg-[#EBF2F0] px-2.5 py-1 rounded-lg">
                        Konsultasi Dokter
                      </span>
                    </div>

                    <Button
                      href={serviceWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="sm"
                      icon={WhatsAppIcon}
                      className="w-full justify-center"
                    >
                      Konsultasi & Buat Janji
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Note */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-[#E6E1D8] flex items-start gap-3.5 shadow-xs">
          <AlertCircle className="w-5 h-5 text-[#E8A84C] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs text-[#243330] space-y-1">
            <span className="font-bold text-[#1F2A28] block">Informasi Rencana Perawatan Medis:</span>
            <p className="leading-relaxed">
              Rencana tindakan dan rincian perawatan akan diinformasikan secara jelas dan transparan oleh dokter gigi setelah pemeriksaan klinis kondisi rongga mulut Anda dilakukan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
