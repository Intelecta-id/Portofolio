"use client";

import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { clinicData } from "@/data/clinicData";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-[#FAF8F5] border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Minimalist Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6B7280] uppercase block">
              {clinicData.name} · Labuan, Pandeglang
            </span>

            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-[3.4rem] font-bold text-[#111827] leading-[1.15] tracking-tight">
              Ruang klinik yang tenang, informasi yang jelas.
            </h1>

            <p className="text-base sm:text-lg text-[#374151] leading-relaxed max-w-xl">
              Kenali layanan, dokter, suasana ruang, dan lokasi Labuan Dental Clinic dengan lebih nyaman sebelum kunjunganmu.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                href="#lokasi-rute"
                variant="primary"
                size="lg"
                icon={MapPin}
              >
                Lihat lokasi klinik
              </Button>
              <Button
                href="#layanan-tarif"
                variant="secondary"
                size="lg"
                iconRight={ArrowRight}
              >
                Jelajahi layanan
              </Button>
            </div>

            {/* Address Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DF] text-[#111827] shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-[#E6F2F0] text-[#0D9488] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="text-xs sm:text-sm leading-snug">
                  <strong className="block font-bold text-[#111827]">
                    Ciateul, Labuan (Samping Gudang Alfa)
                  </strong>
                  <span className="text-[#6B7280]">
                    Jl. Nasional III No. 26, Labuan, Pandeglang, Banten
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Focal Photography */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#EAE6DF] bg-[#FFFFFF] p-2.5 shadow-subtle group">
              <div className="relative h-80 sm:h-96 lg:h-[460px] w-full rounded-2xl overflow-hidden bg-[#F5F1EB]">
                <img
                  src="/images/hero-clinic.jpg"
                  alt="Area penerimaan dan ruang tunggu Labuan Dental Clinic"
                  className="w-full h-full object-cover img-zoom"
                  loading="eager"
                />
              </div>

              {/* Minimal Caption Box */}
              <div className="py-3 px-3 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#111827] block">
                    {clinicData.name}
                  </span>
                  <p className="text-[#6B7280]">
                    Area penerimaan dan ruang tunggu klinik
                  </p>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#E6F2F0] text-[#0D9488]">
                  Foto Fasilitas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
