"use client";

import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 bg-[#FAF9F6] border-b border-[#E7E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Minimalist Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6B7280] uppercase block">
              {clinicData.name} · Labuan, Pandeglang
            </span>

            <h1 className="font-editorial text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-[#0F2F2E] leading-[1.18] tracking-tight">
              Ruang klinik yang tenang, informasi yang jelas.
            </h1>

            <p className="text-base sm:text-lg text-[#2C4A48] leading-relaxed max-w-xl">
              Kenali layanan, dokter, suasana ruang, dan lokasi Labuan Dental Clinic dengan lebih nyaman sebelum kunjunganmu.
            </p>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#lokasi"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold bg-[#0F2F2E] text-white hover:bg-[#1E4543] active:scale-[0.98] transition-spring shadow-xs"
              >
                <span>Lihat lokasi klinik</span>
                <MapPin className="w-4 h-4 text-[#5EEAD4]" aria-hidden="true" />
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold bg-[#FFFFFF] text-[#0F2F2E] border border-[#E7E3DC] hover:bg-[#F3EFEA] hover:border-[#D5CFC5] active:scale-[0.98] transition-spring shadow-xs"
              >
                <span>Jelajahi layanan</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Address Badge with Pin */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFFFFF] border border-[#E7E3DC] shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-[#E6F2F0] text-[#0D9488] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="text-xs sm:text-sm leading-snug">
                  <strong className="block font-bold text-[#0F2F2E]">
                    Ciateul, Samping Gudang Alfa
                  </strong>
                  <span className="text-[#6B7280]">
                    Jl. Nasional III No. 26, Labuan, Pandeglang
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Photographic Card with Minimalist Caption */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#E7E3DC] bg-[#FFFFFF] p-2.5 sm:p-3 shadow-xs group">
              <div className="relative h-80 sm:h-96 lg:h-[430px] w-full rounded-2xl overflow-hidden bg-[#EAE6DF]">
                <img
                  src="/images/real-hero.jpg"
                  alt="Visual area ruang perawatan Labuan Dental Clinic berdasarkan fasilitas asli"
                  className="w-full h-full object-cover img-zoom"
                  loading="eager"
                />
              </div>

              {/* Minimal Caption Box below image (Fre DentalCare signature) */}
              <div className="pt-3 px-2 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#0F2F2E] block">
                    {clinicData.name}
                  </span>
                  <p className="text-[#6B7280]">
                    Area ruang perawatan gigi modern dan higienis
                  </p>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#E6F2F0] text-[#0D9488]">
                  Foto Fasilitas Asli
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
