"use client";

import React from "react";
import { HeartHandshake, ArrowRight, MessageCircle } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export default function ClinicalServices() {
  const primaryServices = [
    {
      title: "Konsultasi (Tanpa Tindakan)",
      price: "Rp50.000 sampai Rp100.000",
      source: "Buku Tarif Tindakan Klinik LDC 2025",
      image: "/images/service-consult.jpg",
      alt: "Foto ilustrasi dokter menjelaskan radiografi gigi kepada pasien",
    },
    {
      title: "Scaling Stain Remover & Polishing",
      price: "Rp150.000 sampai Rp350.000",
      source: "Buku Tarif Tindakan Klinik LDC 2025",
      image: "/images/service-scaling-real.jpg",
      alt: "Foto ilustrasi pembersihan karang gigi dengan scaler ultrasonik",
    },
    {
      title: "Tambal Gigi Estetik Komposit",
      price: "Rp150.000 sampai Rp400.000",
      source: "Buku Tarif Tindakan Klinik LDC 2025",
      image: "/images/service-exam-real.webp",
      alt: "Foto ilustrasi pemeriksaan gigi dengan cermin dan instrumen dental",
    },
    {
      title: "Pemeriksaan Gigi Anak & Pencegahan",
      price: "Rp100.000 sampai Rp250.000",
      source: "Buku Tarif Tindakan Klinik LDC 2025",
      image: "/images/service-smile-real.jpg",
      alt: "Foto ilustrasi perawatan gigi anak dan estetika senyum",
    },
  ];

  return (
    <section id="layanan" className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#E7E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead with Text Link (Fre DentalCare style) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6B7280] uppercase block mb-1.5">
              Layanan Klinik
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F2F2E] leading-tight">
              Informasi layanan sesuai kebutuhanmu.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
              Daftar ini hanya menampilkan layanan aktif yang sudah dipublikasikan oleh tim klinik.
            </p>
          </div>

          <a
            href={clinicData.contact.getWhatsappUrl(
              "Halo Labuan Dental Clinic, saya ingin bertanya mengenai ketersediaan jadwal layanan."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0D9488] hover:text-[#0F2F2E] transition-colors shrink-0"
          >
            <span>Tanya semua layanan</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* 4 Clean Minimal Cards Grid (Fre DentalCare layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {primaryServices.map((item, idx) => (
            <article
              key={idx}
              className="rounded-3xl border border-[#E7E3DC] bg-[#FAF9F6] overflow-hidden flex flex-col justify-between transition-spring hover:shadow-card-hover hover:border-[#D5CFC5] group"
            >
              <div>
                <figure className="relative h-48 w-full overflow-hidden bg-[#EAE6DF] m-0">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover img-zoom"
                    loading="lazy"
                  />
                  <figcaption className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 text-white backdrop-blur-xs">
                    Foto ilustrasi
                  </figcaption>
                </figure>

                <div className="p-5 space-y-2">
                  <h3 className="font-editorial text-base sm:text-lg font-bold text-[#0F2F2E] leading-snug">
                    {item.title}
                  </h3>

                  <strong className="text-base font-bold text-[#0F2F2E] block">
                    {item.price}
                  </strong>

                  <small className="text-[11px] text-[#6B7280] block leading-tight">
                    {item.source}
                  </small>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={clinicData.contact.getWhatsappUrl(
                    `Halo Labuan Dental Clinic, saya ingin konsultasi mengenai: ${item.title}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-[#FFFFFF] text-[#0F2F2E] border border-[#E7E3DC] hover:bg-[#0F2F2E] hover:text-white transition-spring"
                >
                  <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Konsultasi Tindakan</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Clinical Note Callout Banner (Fre DentalCare signature) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#F3EFEA] border border-[#E7E3DC] flex items-start sm:items-center gap-4 text-xs sm:text-sm text-[#2C4A48] leading-relaxed">
          <div className="w-10 h-10 rounded-xl bg-[#E6F2F0] text-[#0D9488] flex items-center justify-center shrink-0">
            <HeartHandshake className="w-5 h-5" aria-hidden="true" />
          </div>
          <p>
            <strong className="text-[#0F2F2E] font-bold">Perawatan tetap dimulai dari pemeriksaan.</strong> Informasi di halaman ini membantu persiapan kunjungan dan bukan penetapan diagnosis atau tindakan untuk kondisi tertentu.
          </p>
        </div>
      </div>
    </section>
  );
}
