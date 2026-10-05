"use client";

import React, { useState } from "react";
import {
  MapPin,
  ClipboardList,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  Navigation,
} from "lucide-react";
import { clinicData } from "@/data/clinicData";

export default function LocationWayfinding() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${clinicData.location.address} (Patokan: ${clinicData.location.landmark})`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="lokasi-rute" className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Next Quick Links Grid (Fre DentalCare signature layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-14">
          <a
            href="#faq-pasien"
            className="group flex items-center justify-between p-6 sm:p-7 rounded-3xl bg-[#FAF8F5] hover:bg-[#F5F1EB] border border-[#EAE6DF] hover:border-[#D8D2C5] transition-spring shadow-xs"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E6F2F0] text-[#0D9488] group-hover:bg-[#111827] group-hover:text-white flex items-center justify-center shrink-0 transition-spring">
                <ClipboardList className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-0.5">
                <strong className="block text-base font-bold text-[#111827] group-hover:text-[#0D9488] transition-colors">
                  Sebelum berkunjung
                </strong>
                <small className="block text-xs sm:text-sm text-[#6B7280]">
                  Siapkan pertanyaan dan pahami informasi dasar sebelum datang ke klinik.
                </small>
              </div>
            </div>
            <div className="w-8 h-8 rounded-xl text-[#9CA3AF] group-hover:text-[#111827] group-hover:translate-x-1 flex items-center justify-center shrink-0 transition-spring">
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </div>
          </a>

          <a
            href={clinicData.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 sm:p-7 rounded-3xl bg-[#FAF8F5] hover:bg-[#F5F1EB] border border-[#EAE6DF] hover:border-[#D8D2C5] transition-spring shadow-xs"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E6F2F0] text-[#0D9488] group-hover:bg-[#111827] group-hover:text-white flex items-center justify-center shrink-0 transition-spring">
                <MapPin className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-0.5">
                <strong className="block text-base font-bold text-[#111827] group-hover:text-[#0D9488] transition-colors">
                  Lokasi Labuan Dental Clinic
                </strong>
                <small className="block text-xs sm:text-sm text-[#6B7280]">
                  Temukan patokan Ciateul samping Gudang Alfa dan buka petunjuk arah saat kamu siap.
                </small>
              </div>
            </div>
            <div className="w-8 h-8 rounded-xl text-[#9CA3AF] group-hover:text-[#111827] group-hover:translate-x-1 flex items-center justify-center shrink-0 transition-spring">
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </div>
          </a>
        </div>

        {/* Section Lead */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6B7280] uppercase block mb-1.5">
            Panduan Akses & Navigasi
          </span>
          <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-[#111827] leading-tight">
            Mudah ditemukan di jalur utama Labuan.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            Berada di tepi jalan raya utama dengan patokan fisik yang sangat dikenal warga lokal di Ciateul, memudahkan kedatangan dari Carita, Menes, maupun Panimbang.
          </p>
        </div>

        {/* Visual Route Grid: Exterior Photo + Address Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-10">
          {/* Exterior Photo Card */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[#EAE6DF] bg-[#FFFFFF] shadow-subtle min-h-[340px] group">
            <img
              src="/images/clinic-exterior.jpg"
              alt="Tampak depan gedung Labuan Dental Clinic di samping Gudang Alfa Ciateul"
              className="w-full h-full object-cover img-zoom"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/30 to-transparent pointer-events-none" />

            <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5EEAD4] px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-xs inline-block">
                Patokan Nyata Lapangan
              </span>
              <h3 className="font-editorial text-lg sm:text-xl font-bold text-white">
                Ciateul, Tepat di Samping Gudang Alfa
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Akses mudah di tepi jalan raya dengan area parkir motor dan mobil langsung di depan klinik.
              </p>
            </div>
          </div>

          {/* Right Column: Address & Direct Action */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#EAE6DF] shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                  Alamat Administratif Resmi
                </span>
                <span className="text-[11px] font-semibold text-[#6B7280]">
                  Kecamatan Labuan, Pandeglang
                </span>
              </div>

              <p className="text-base sm:text-lg font-bold text-[#111827] leading-snug">
                {clinicData.location.address}
              </p>
              <p className="text-xs text-[#6B7280]">
                {clinicData.location.altAddress}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#FFFFFF] text-[#111827] border border-[#EAE6DF] hover:bg-[#F5F1EB] transition-spring shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#059669]" aria-hidden="true" />
                      <span>Alamat Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#6B7280]" aria-hidden="true" />
                      <span>Salin Alamat & Patokan</span>
                    </>
                  )}
                </button>

                <a
                  href={clinicData.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#111827] text-white hover:bg-[#1F2937] transition-spring shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#5EEAD4]" aria-hidden="true" />
                  <span>Buka Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-white/60 ml-0.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Regional Transport Hints */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#EAE6DF] shadow-xs space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] block">
                Panduan Rute Pasien
              </span>
              <p className="text-xs text-[#374151] leading-relaxed">
                Dari arah <strong>Carita</strong> atau <strong>Menes/Pandeglang</strong>, ikuti jalan poros utama menuju Ciateul Labuan. Klinik terletak persis di samping Gudang Alfa dengan plang nama yang terlihat jelas.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Google Maps Frame */}
        <div className="rounded-3xl overflow-hidden border border-[#EAE6DF] shadow-subtle bg-[#FFFFFF] p-2">
          <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-[#F5F1EB]">
            <iframe
              src={clinicData.location.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Google Maps Labuan Dental Clinic"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
