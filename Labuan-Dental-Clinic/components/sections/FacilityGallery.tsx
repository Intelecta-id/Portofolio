"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Sparkles, Eye } from "lucide-react";

export default function FacilityGallery() {
  const facilities = [
    {
      title: "Dental Unit & Ruang Perawatan Modern",
      desc: "Ruang tindakan bersih dengan dental unit terkalibrasi untuk kenyamanan optimal selama pemeriksaan.",
      image: "/images/treatment-primary.jpg",
      tag: "Ruang Tindakan",
      span: "md:col-span-8 md:row-span-2 aspect-[16/10] md:aspect-auto",
    },
    {
      title: "Ruang Tunggu Pasien Ber-AC",
      desc: "Suasana santai dan sejuk untuk keluarga serta anak-anak saat menunggu giliran periksa.",
      image: "/images/real-bento-1.webp",
      tag: "Kenyamanan",
      span: "md:col-span-4 aspect-[4/3]",
    },
    {
      title: "Sterilisasi Autoklaf Bertekanan Tinggi",
      desc: "Setiap set alat medis dibersihkan dan melalui proses sterilisasi autoklaf sebelum dipakai ke pasien.",
      image: "/images/treatment-instruments.jpg",
      tag: "Standar Medis",
      span: "md:col-span-4 aspect-[4/3]",
    },
    {
      title: "Pemeriksaan Lembut & Edukatif",
      desc: "Dokter menjelaskan kondisi gigi dengan bahasa yang mudah dipahami oleh pasien.",
      image: "/images/fre-exam.webp",
      tag: "Edukasi Pasien",
      span: "md:col-span-6 aspect-[16/10]",
    },
    {
      title: "Lokasi Strategis di Ciateul, Labuan",
      desc: "Akses mudah di tepi jalan poros utama, tepat di samping Gudang Alfa dengan area parkir praktis.",
      image: "/images/clinic-exterior.jpg",
      tag: "Akses Praktik",
      span: "md:col-span-6 aspect-[16/10]",
    },
  ];

  return (
    <section id="fasilitas" className="py-16 md:py-24 bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2F0] text-xs font-bold text-[#2D6A5E]">
            Higienitas & Kenyamanan
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1F2A28] tracking-tight">
            Fasilitas Nyata & Standar Kebersihan Klinik
          </h2>
          <p className="text-base sm:text-lg text-[#243330] leading-relaxed">
            Seluruh foto di bawah merupakan dokumentasi fasilitas fisik Labuan Dental Clinic yang selalu dirawat higienis untuk kenyamanan dan keamanan Anda.
          </p>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-10">
          {facilities.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl overflow-hidden border border-[#E6E1D8] shadow-xs group bg-white ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A28]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FAF8F4]/90 backdrop-blur-sm text-[#2D6A5E] border border-[#E6E1D8]">
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm">
                <h3 className="font-heading font-bold text-sm sm:text-base leading-snug mb-1 text-white">
                  {item.title}
                </h3>
                <p className="text-white/80 text-xs line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Hygiene Guarantee Banner */}
        <div className="p-6 rounded-3xl bg-white border border-[#E6E1D8] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF2F0] text-[#2D6A5E] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-0.5 text-center sm:text-left">
              <span className="font-heading font-bold text-sm sm:text-base text-[#1F2A28] block">
                Jaminan Sterilisasi Berlapis Sesuai SOP Kemenkes RI
              </span>
              <span className="text-xs text-[#243330] block">
                Alat periksa sekali pakai untuk bahan disposable dan autoklaf medis untuk instrumen presisi.
              </span>
            </div>
          </div>
          <div className="shrink-0 text-xs font-bold text-[#2D6A5E] bg-[#EBF2F0] px-4 py-2 rounded-xl">
            100% Bebas Kontaminasi Silang
          </div>
        </div>
      </div>
    </section>
  );
}
