"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function PhotoMosaic() {
  return (
    <section id="suasana-ruang" className="py-16 sm:py-20 bg-[#F5F1EB] border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead (Fre DentalCare style) */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6B7280] uppercase block mb-1.5">
            Ruang Labuan Dental Clinic
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-[#111827] leading-tight">
            Lihat suasana klinik sebelum datang.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            Galeri ini dibuat dari foto fasilitas asli dengan pencahayaan bersih dan suasana terawat. Visual tidak menggambarkan rekam medis atau data pribadi pasien.
          </p>
        </div>

        {/* 3-Photo Bento Mosaic (Fre DentalCare signature layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 mb-8">
          {/* Mosaic Primary: Large Dental Operatory */}
          <div className="md:col-span-7 relative h-72 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden border border-[#EAE6DF] bg-[#FFFFFF] shadow-xs group">
            <img
              src="/images/treatment-primary.jpg"
              alt="Visual ruang perawatan dental chair Labuan Dental Clinic berdasarkan fasilitas asli"
              className="w-full h-full object-cover img-zoom"
              loading="lazy"
            />
            <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EAE6DF] flex items-center justify-between text-xs">
              <span className="font-bold text-[#111827]">
                Ruang Perawatan Utama & Dental Chair Modern
              </span>
              <span className="text-[11px] font-semibold text-[#0D9488] bg-[#E6F2F0] px-2.5 py-0.5 rounded-full">
                Standar Higienis
              </span>
            </div>
          </div>

          {/* Mosaic Tall & Detail Column */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 sm:gap-5">
            {/* Mosaic Tall: Macro Dental Instruments */}
            <div className="relative h-60 sm:h-64 md:h-[230px] rounded-3xl overflow-hidden border border-[#EAE6DF] bg-[#FFFFFF] shadow-xs group">
              <img
                src="/images/treatment-instruments.jpg"
                alt="Visual instrumen dental steril berbahan stainless steel"
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#EAE6DF] text-xs">
                <span className="font-bold text-[#111827] block">
                  Instrumen Sterilisasi Medis
                </span>
                <span className="text-[11px] text-[#6B7280]">
                  Peralatan autoklaf standar Kemenkes RI
                </span>
              </div>
            </div>

            {/* Mosaic Detail: Consultation Lounge */}
            <div className="relative h-60 sm:h-64 md:h-[230px] rounded-3xl overflow-hidden border border-[#EAE6DF] bg-[#FFFFFF] shadow-xs group">
              <img
                src="/images/service-konsultasi.jpg"
                alt="Ruang konsultasi dan edukasi kesehatan gigi"
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#EAE6DF] text-xs">
                <span className="font-bold text-[#111827] block">
                  Area Konsultasi & Diskusi Perawatan
                </span>
                <span className="text-[11px] text-[#6B7280]">
                  Percakapan terbuka bersama dokter gigi
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Action Button */}
        <div className="pt-1">
          <Button
            href="#layanan-tarif"
            variant="secondary"
            size="md"
            iconRight={ArrowRight}
          >
            Lihat fasilitas dan estimasi tarif
          </Button>
        </div>
      </div>
    </section>
  );
}
