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
    <section id="lokasi" className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#E7E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Next Quick Links Grid (Fre DentalCare signature layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          <a
            href="#faq"
            className="group flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-[#FAF9F6] hover:bg-[#F3EFEA] border border-[#E7E3DC] hover:border-[#D5CFC5] transition-spring shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <span className="w-10 h-10 rounded-xl bg-[#E6F2F0] text-[#0D9488] flex items-center justify-center shrink-0">
                <ClipboardList className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <strong className="block text-sm sm:text-base font-bold text-[#0F2F2E]">
                  Sebelum berkunjung
                </strong>
                <small className="block text-xs text-[#6B7280]">
                  Siapkan pertanyaan dan pahami informasi dasar sebelum datang ke klinik.
                </small>
              </div>
            </div>
            <div className="w-7 h-7 text-[#6B7280] group-hover:text-[#0F2F2E] group-hover:translate-x-1 flex items-center justify-center shrink-0 transition-spring">
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </div>
          </a>

          <a
            href={clinicData.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 sm:p-6 rounded-2xl bg-[#FAF9F6] hover:bg-[#F3EFEA] border border-[#E7E3DC] hover:border-[#D5CFC5] transition-spring shadow-xs"
          >
            <div className="flex items-center gap-3.5">
              <span className="w-10 h-10 rounded-xl bg-[#E6F2F0] text-[#0D9488] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <strong className="block text-sm sm:text-base font-bold text-[#0F2F2E]">
                  Lokasi Labuan Dental Clinic
                </strong>
                <small className="block text-xs text-[#6B7280]">
                  Temukan alamat Ciateul samping Gudang Alfa dan buka petunjuk arah saat kamu siap.
                </small>
              </div>
            </div>
            <div className="w-7 h-7 text-[#6B7280] group-hover:text-[#0F2F2E] group-hover:translate-x-1 flex items-center justify-center shrink-0 transition-spring">
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </div>
          </a>
        </div>

        {/* Location Section Lead */}
        <div className="max-w-xl mb-8">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6B7280] uppercase block mb-1.5">
            Petunjuk Arah
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F2F2E] leading-tight">
            Lokasi mudah ditemukan di Ciateul.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#4B5563]">
            Tepat di samping Gudang Alfa, tepi jalan raya nasional poros utama Labuan.
          </p>
        </div>

        {/* Visual Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Exterior Photo Box with Address */}
          <div className="lg:col-span-5 rounded-3xl border border-[#E7E3DC] bg-[#FAF9F6] p-5 flex flex-col justify-between space-y-4">
            <div className="relative h-56 rounded-2xl overflow-hidden bg-[#EAE6DF]">
              <img
                src="/images/clinic-exterior.jpg"
                alt="Tampak depan gedung Labuan Dental Clinic di samping Gudang Alfa Ciateul"
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
              <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 text-white backdrop-blur-xs">
                Ciateul, Samping Gudang Alfa
              </div>
            </div>

            <div className="space-y-1">
              <strong className="block text-sm font-bold text-[#0F2F2E]">
                {clinicData.location.address}
              </strong>
              <p className="text-xs text-[#6B7280]">
                {clinicData.location.altAddress}
              </p>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#FFFFFF] text-[#0F2F2E] border border-[#E7E3DC] hover:bg-[#F3EFEA] transition-spring"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#059669]" aria-hidden="true" />
                    <span>Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#6B7280]" aria-hidden="true" />
                    <span>Salin Alamat</span>
                  </>
                )}
              </button>

              <a
                href={clinicData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0F2F2E] text-white hover:bg-[#1E4543] transition-spring"
              >
                <Navigation className="w-3.5 h-3.5 text-[#5EEAD4]" aria-hidden="true" />
                <span>Buka Maps</span>
                <ExternalLink className="w-3 h-3 text-white/60" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E7E3DC] bg-[#EAE6DF] min-h-[340px]">
            <iframe
              src={clinicData.location.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "340px" }}
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
