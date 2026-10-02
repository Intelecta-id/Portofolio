"use client";

import React, { useState } from "react";
import {
  Compass,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Building2,
  Navigation,
  Car,
  Bike,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
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
    <section id="lokasi" className="py-20 lg:py-28 bg-white border-b border-[#0B7F8C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="teal" icon={MapPin} className="mb-3">
            Panduan Akses & Navigasi Lokasi
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A2230]">
            Mudah Dijangkau di Poros Utama Labuan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1D3546]/80 leading-relaxed">
            Terletak tepat di pinggir jalan raya nasional dengan patokan visual jelas di area Ciateul,
            memudahkan pasien dari berbagai penjuru pesisir barat Banten.
          </p>
        </div>

        {/* Visual Route Grid: Left Exterior Photo + Right Landmarks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Visual Photo Card */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-sm border border-[#0B7F8C]/15 bg-[#E1F4F6] min-h-[360px] group">
            <img
              src="/images/clinic-exterior.jpg"
              alt="Tampak Depan Gedung Labuan Dental Clinic di Samping Gudang Alfa Ciateul"
              className="w-full h-full object-cover img-zoom"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2230] via-[#0A2230]/40 to-transparent pointer-events-none" />

            {/* Overlay Info */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] px-2.5 py-1 rounded-md bg-[#0A2230]/80 backdrop-blur-sm border border-[#38BDF8]/30 inline-block mb-2">
                Patokan Utama Lapangan
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Ciateul · Tepat di Samping Gudang Alfa
              </h3>
              <p className="text-xs text-white/80 mt-1 leading-relaxed">
                Akses langsung pinggir jalan raya dengan area parkir motor & mobil di depan klinik.
              </p>
            </div>
          </div>

          {/* Right Column: Directional Information Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {/* Address Card */}
            <div className="bg-[#F4F8FA] rounded-3xl p-6 sm:p-7 border border-[#0B7F8C]/15 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B7F8C]">
                  Alamat Administratif Resmi
                </span>
                <span className="text-[11px] font-semibold text-[#4B6375]">
                  Kecamatan Labuan, Pandeglang
                </span>
              </div>
              <p className="text-base sm:text-lg font-bold text-[#0A2230] leading-snug">
                {clinicData.location.address}
              </p>
              <p className="text-xs text-[#4B6375]">
                {clinicData.location.altAddress}
              </p>

              {/* Action Buttons: Copy Address & Open Maps */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-[#0A2230] border border-[#0B7F8C]/25 hover:bg-[#E1F4F6] transition-spring shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#059669]" aria-hidden="true" />
                      <span>Alamat Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#0B7F8C]" aria-hidden="true" />
                      <span>Salin Alamat Lengkap</span>
                    </>
                  )}
                </button>
                <Button
                  href={clinicData.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  iconRight={ExternalLink}
                >
                  Buka Titik di Google Maps
                </Button>
              </div>
            </div>

            {/* Service Areas Coverage Bento */}
            <div className="bg-[#F4F8FA] rounded-3xl p-6 sm:p-7 border border-[#0B7F8C]/15 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B7F8C] block">
                Wilayah Jangkauan Layanan Rujukan
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {clinicData.location.serviceAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white border border-[#0B7F8C]/15 text-xs font-semibold text-[#0A2230] flex items-center gap-2"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#0B7F8C] shrink-0" aria-hidden="true" />
                    <span className="truncate">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Google Maps Embed */}
        <div className="rounded-3xl overflow-hidden border border-[#0B7F8C]/20 shadow-elevation bg-[#0A2230]">
          <div className="p-4 sm:p-5 bg-[#0A2230] text-white flex flex-wrap items-center justify-between gap-4 border-b border-[#1D3546]">
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-[#38BDF8]" aria-hidden="true" />
              <div>
                <span className="text-sm font-bold text-white block">Peta Digital Google Maps</span>
                <span className="text-xs text-white/70">Labuan Dental Clinic · Ciateul, Labuan</span>
              </div>
            </div>

            <Button
              href={clinicData.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="sm"
              iconRight={ExternalLink}
            >
              Navigasi Google Maps
            </Button>
          </div>

          <div className="relative w-full h-80 sm:h-96">
            <iframe
              src={clinicData.location.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Labuan Dental Clinic di Google Maps"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
