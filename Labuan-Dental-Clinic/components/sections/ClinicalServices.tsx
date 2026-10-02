"use client";

import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  Clock,
  MessageCircle,
  HelpCircle,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { clinicData, ClinicalServiceItem } from "@/data/clinicData";

export default function ClinicalServices() {
  const [activeFilter, setActiveFilter] = useState<"all" | "active" | "confirmation">("all");

  const filteredServices = clinicData.services.filter((item) => {
    if (activeFilter === "all") return true;
    return item.statusType === activeFilter;
  });

  return (
    <section id="layanan-medis" className="py-20 lg:py-28 bg-white border-b border-[#0B7F8C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="teal" icon={Sparkles} className="mb-3">
            Matriks Layanan Klinis & Edukasi
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A2230]">
            Perawatan Gigi Preventif, Kuratif & Estetika
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1D3546]/80 leading-relaxed">
            Secara transparan membedakan antara tindakan harian yang terkonfirmasi aktif dengan
            layanan lanjutan yang memerlukan konfirmasi jadwal dokter khusus terlebih dahulu.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-spring ${
              activeFilter === "all"
                ? "bg-[#0B7F8C] text-white shadow-md scale-105"
                : "bg-[#F4F8FA] text-[#0A2230] hover:bg-[#E1F4F6] border border-[#0B7F8C]/20"
            }`}
          >
            Semua Tindakan ({clinicData.services.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("active")}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-spring flex items-center gap-1.5 ${
              activeFilter === "active"
                ? "bg-[#059669] text-white shadow-md scale-105"
                : "bg-[#ECFDF5] text-[#059669] hover:bg-[#D1FAE5] border border-[#059669]/30"
            }`}
          >
            <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
            Terkonfirmasi Aktif (4)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("confirmation")}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-spring flex items-center gap-1.5 ${
              activeFilter === "confirmation"
                ? "bg-[#D97706] text-white shadow-md scale-105"
                : "bg-[#FEF3C7] text-[#B45309] hover:bg-[#FDE68A] border border-[#F59E0B]/30"
            }`}
          >
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            Perlu Konfirmasi Khusus (4)
          </button>
        </div>

        {/* Services Grid with Real Photos & img-zoom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((item: ClinicalServiceItem) => {
            const isConfirmed = item.statusType === "active";
            return (
              <div
                key={item.id}
                className="bg-[#F4F8FA] rounded-3xl overflow-hidden border border-[#0B7F8C]/15 shadow-sm flex flex-col justify-between transition-spring hover:shadow-elevation hover:border-[#0B7F8C]/40 group"
              >
                <div>
                  {/* Photo Container with overflow-hidden and img-zoom */}
                  <div className="relative h-52 w-full overflow-hidden bg-[#E1F4F6]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover img-zoom"
                      loading="lazy"
                    />

                    {/* Status Badge Overlay */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold shadow-md backdrop-blur-md ${
                          isConfirmed
                            ? "bg-[#059669] text-white"
                            : "bg-[#D97706] text-white"
                        }`}
                      >
                        {isConfirmed ? (
                          <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                        ) : (
                          <HelpCircle className="w-3 h-3" aria-hidden="true" />
                        )}
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B7F8C] block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold text-[#0A2230] leading-snug group-hover:text-[#0B7F8C] transition-spring">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#1D3546]/80 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Key features checklist */}
                    <div className="mt-3.5 space-y-1.5 pt-3 border-t border-[#0B7F8C]/10">
                      {item.features.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1.5 text-xs text-[#1D3546]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0B7F8C] shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer of Card: Interval & Action Button */}
                <div className="p-5 pt-0">
                  {item.recommendedInterval && (
                    <div className="mb-3 px-3 py-1.5 rounded-xl bg-white border border-[#0B7F8C]/15 flex items-center gap-1.5 text-[11px] text-[#4B6375]">
                      <Clock className="w-3.5 h-3.5 text-[#0B7F8C] shrink-0" aria-hidden="true" />
                      <span className="font-semibold text-[#0A2230]">Anjuran:</span>
                      <span className="truncate">{item.recommendedInterval}</span>
                    </div>
                  )}

                  <a
                    href={clinicData.contact.getWhatsappUrl(
                      `Halo Labuan Dental Clinic, saya ingin konsultasi dan menanyakan ketersediaan tindakan: ${item.name}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold bg-white text-[#0B7F8C] border border-[#0B7F8C]/30 hover:bg-[#0B7F8C] hover:text-white transition-spring shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Konsultasi Tindakan Ini</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Disclaimer Box */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FEF3C7]/40 border border-[#F59E0B]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-xs sm:text-sm text-[#78350F] leading-relaxed">
              <strong>Transparansi Layanan Lanjutan:</strong> Tindakan seperti pemasangan behel,
              bleaching, perawatan saluran akar, dan odontektomi (bedah gigi bungsu) memerlukan
              evaluasi diagnosa mendalam dan konfirmasi ketersediaan alat/bahan melalui WhatsApp
              sebelum pelaksanaan tindakan.
            </p>
          </div>
          <Button
            href={clinicData.contact.getWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="sm"
            className="shrink-0"
          >
            Tanya Admin via WA
          </Button>
        </div>
      </div>
    </section>
  );
}
