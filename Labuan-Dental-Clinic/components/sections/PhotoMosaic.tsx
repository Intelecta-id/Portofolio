"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function PhotoMosaic() {
  return (
    <section id="fasilitas" className="py-16 sm:py-20 bg-[#F3EFEA] border-b border-[#E7E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6B7280] uppercase block mb-1.5">
            Ruang Labuan Dental Clinic
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F2F2E] leading-tight">
            Lihat suasana klinik sebelum datang.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
            Galeri ini dibuat dari foto fasilitas asli dengan pencahayaan dan warna yang disempurnakan. Visual tidak menggambarkan pasien, hasil perawatan, atau bukti klinis.
          </p>
        </div>

        {/* 3-Photo Bento Mosaic (Fre DentalCare layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 mb-6">
          {/* Mosaic Primary (Large) */}
          <div className="md:col-span-7 relative h-72 sm:h-88 lg:h-[420px] rounded-3xl overflow-hidden border border-[#E7E3DC] bg-[#FFFFFF] shadow-xs group">
            <img
              src="/images/real-bento-1.webp"
              alt="Visual ruang perawatan Labuan Dental Clinic berdasarkan fasilitas asli"
              className="w-full h-full object-cover img-zoom"
              loading="lazy"
            />
          </div>

          {/* Mosaic Tall & Detail */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3.5 sm:gap-4">
            <div className="relative h-52 sm:h-60 md:h-[200px] rounded-3xl overflow-hidden border border-[#E7E3DC] bg-[#FFFFFF] shadow-xs group">
              <img
                src="/images/real-bento-2.webp"
                alt="Visual sudut ruang perawatan Labuan Dental Clinic berdasarkan fasilitas asli"
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
            </div>

            <div className="relative h-52 sm:h-60 md:h-[200px] rounded-3xl overflow-hidden border border-[#E7E3DC] bg-[#FFFFFF] shadow-xs group">
              <img
                src="/images/real-bento-3.jpg"
                alt="Visual peralatan dan area perawatan Labuan Dental Clinic berdasarkan fasilitas asli"
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Section Action */}
        <div>
          <a
            href="#layanan"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold bg-[#FFFFFF] text-[#0F2F2E] border border-[#E7E3DC] hover:bg-[#FAF9F6] hover:border-[#D5CFC5] transition-spring"
          >
            <span>Jelajahi pilihan layanan</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
