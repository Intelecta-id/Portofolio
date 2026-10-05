"use client";

import React, { useState } from "react";
import {
  HeartHandshake,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { clinicData, ClinicalServiceItem } from "@/data/clinicData";

export default function ClinicalServices() {
  const [activeFilter, setActiveFilter] = useState<"all" | "active" | "confirmation">("all");

  const filteredServices = clinicData.services.filter((item) => {
    if (activeFilter === "all") return true;
    return item.statusType === activeFilter;
  });

  return (
    <section id="layanan-tarif" className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead with Top Action (Fre DentalCare style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-1.5">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6B7280] uppercase block">
              Layanan Klinik
            </span>
            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-[#111827] leading-tight">
              Informasi layanan sesuai kebutuhanmu.
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Daftar ini hanya menampilkan layanan aktif dan estimasi tarif yang dipublikasikan oleh tim klinik.
            </p>
          </div>

          <a
            href={clinicData.contact.getWhatsappUrl(
              "Halo Labuan Dental Clinic, saya ingin bertanya mengenai rincian layanan dan estimasi biaya tindakan gigi."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0D9488] hover:text-[#111827] transition-colors shrink-0"
          >
            <span>Tanya detail tarif via WhatsApp</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Minimalist Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#EAE6DF]">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-spring ${
              activeFilter === "all"
                ? "bg-[#111827] text-white shadow-xs"
                : "bg-[#FAF8F5] text-[#374151] hover:bg-[#F5F1EB] border border-[#EAE6DF]"
            }`}
          >
            Semua Layanan ({clinicData.services.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("active")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-spring flex items-center gap-1.5 ${
              activeFilter === "active"
                ? "bg-[#059669] text-white shadow-xs"
                : "bg-[#FAF8F5] text-[#059669] hover:bg-[#ECFDF5] border border-[#EAE6DF]"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
            Tindakan Harian Aktif (4)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("confirmation")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-spring flex items-center gap-1.5 ${
              activeFilter === "confirmation"
                ? "bg-[#D97706] text-white shadow-xs"
                : "bg-[#FAF8F5] text-[#B45309] hover:bg-[#FEF3C7] border border-[#EAE6DF]"
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
            Perlu Konfirmasi (4)
          </button>
        </div>

        {/* Service Cards Grid (Fre DentalCare Pure Minimalist Format) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredServices.map((item: ClinicalServiceItem) => (
            <article
              key={item.id}
              className="rounded-3xl border border-[#EAE6DF] bg-[#FAF8F5] overflow-hidden flex flex-col justify-between transition-spring hover:shadow-card-hover hover:border-[#D8D2C5] group"
            >
              <div>
                {/* Photo with caption pill "Foto ilustrasi" */}
                <figure className="relative h-52 w-full overflow-hidden bg-[#F5F1EB] m-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover img-zoom"
                    loading="lazy"
                  />
                  <figcaption className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 text-white backdrop-blur-xs">
                    Foto ilustrasi
                  </figcaption>
                </figure>

                {/* Minimal Body: Title, Price, Tariff Source */}
                <div className="p-5 space-y-2.5">
                  <h3 className="font-editorial text-lg font-bold text-[#111827] leading-snug group-hover:text-[#0D9488] transition-colors">
                    {item.name}
                  </h3>

                  <strong className="text-base sm:text-lg font-bold text-[#111827] block pt-1">
                    {item.priceRange}
                  </strong>

                  <small className="text-[11px] text-[#6B7280] block leading-tight">
                    {item.tariffSource}
                  </small>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <a
                  href={clinicData.contact.getWhatsappUrl(
                    `Halo Labuan Dental Clinic, saya ingin menanyakan estimasi tindakan: ${item.name}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold bg-[#FFFFFF] text-[#111827] border border-[#EAE6DF] hover:bg-[#111827] hover:text-white transition-spring shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Konsultasi Tindakan</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Clinical Note Callout Banner (Fre DentalCare Signature) */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#F5F1EB] border border-[#EAE6DF] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          <div className="w-11 h-11 rounded-2xl bg-[#E6F2F0] text-[#0D9488] flex items-center justify-center shrink-0">
            <HeartHandshake className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="text-xs sm:text-sm text-[#374151] leading-relaxed">
            <strong className="text-[#111827] font-bold">
              Perawatan tetap dimulai dari pemeriksaan.
            </strong>{" "}
            Informasi di halaman ini membantu persiapan kunjungan dan bukan penetapan diagnosis atau tindakan mandiri untuk kondisi tertentu.
          </div>
        </div>
      </div>
    </section>
  );
}
