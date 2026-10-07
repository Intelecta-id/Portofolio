"use client";

import React from "react";
import { MapPin, Clock, Phone, ExternalLink, Navigation, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { clinicData } from "@/data/clinicData";

export default function LocationWayfinding() {
  const whatsappUrl = clinicData.contact.getWhatsappUrl(
    "Halo Labuan Dental Clinic, saya ingin konfirmasi jadwal praktik dan membuat janji temu hari ini."
  );

  return (
    <section id="lokasi" className="py-16 md:py-24 bg-white border-t border-[#E6E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2F0] text-xs font-bold text-[#2D6A5E]">
            Akses, Jadwal & Kontak
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1F2A28] tracking-tight">
            Lokasi Praktik & Jam Operasional
          </h2>
          <p className="text-base sm:text-lg text-[#243330] leading-relaxed">
            Terletak strategis di jalur utama Ciateul, tepat di samping Gudang Alfa. Silakan konfirmasi jadwal terlebih dahulu via WhatsApp sebelum kedatangan.
          </p>
        </div>

        {/* 2 Columns: Address & Schedule on left, Map & Route on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address, Schedule, and WhatsApp Action */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF8F4] border border-[#E6E1D8] space-y-4 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#2D6A5E] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#E8A84C]" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A5E] block">
                    Alamat Lengkap Praktik
                  </span>
                  <p className="font-heading font-bold text-base text-[#1F2A28] leading-snug">
                    {clinicData.location.address}
                  </p>
                  <p className="text-xs sm:text-sm text-[#243330]">
                    Patokan: <span className="font-semibold text-[#1F2A28]">{clinicData.location.landmark}</span>
                  </p>
                </div>
              </div>

              {/* Wayfinding guidance */}
              <div className="pt-3 border-t border-[#E6E1D8] text-xs text-[#243330] space-y-2">
                <span className="font-bold text-[#1F2A28] block">Petunjuk Akses Transportasi:</span>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Dari arah Pasar Labuan: Menuju selatan arah Ciateul sekitar 3-5 menit berkendara.</li>
                  <li>Dari arah Carita: Mengikuti jalan pesisir menuju pusat Labuan, belok ke jalan utama Ciateul.</li>
                  <li>Dari arah Menes / Pandeglang: Berada di sisi jalan poros utama sebelum pusat pertokoan Labuan.</li>
                </ul>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF8F4] border border-[#E6E1D8] space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#2D6A5E]" />
                  <h3 className="font-heading font-bold text-base text-[#1F2A28]">
                    Estimasi Jam Praktik Dokter
                  </h3>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#E8A84C]/20 text-[#8F590F]">
                  Wajib Reservasi
                </span>
              </div>

              <div className="divide-y divide-[#E6E1D8] text-xs sm:text-sm">
                {clinicData.operationalSchedule.scheduleEstimate.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between gap-4">
                    <span className="font-semibold text-[#1F2A28]">{item.day}</span>
                    <div className="text-right">
                      <span className="text-[#2D6A5E] font-bold block">{item.hours.replace(/–/g, "-")}</span>
                      <span className="text-[11px] text-[#243330]">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#E6E1D8] text-xs text-[#243330] space-y-1">
                <span className="font-bold text-[#1F2A28] block">Catatan Konfirmasi Slot:</span>
                <p className="leading-relaxed">
                  Jam praktik dokter dapat mengalami penyesuaian harian. Pasien sangat disarankan melakukan reservasi atau konfirmasi ketersediaan slot melalui WhatsApp sebelum kedatangan.
                </p>
              </div>

              {/* Action Button */}
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="md"
                icon={WhatsAppIcon}
                className="w-full justify-center"
              >
                Chat WhatsApp & Reservasi Slot Sekarang
              </Button>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Interactive Directions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl border border-[#E6E1D8] overflow-hidden shadow-xs bg-[#FAF8F4] flex flex-col">
              {/* Responsive Maps Embed */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full bg-[#E6E1D8]">
                <iframe
                  title="Peta Lokasi Labuan Dental Clinic di Google Maps"
                  src={clinicData.location.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Footer Action */}
              <div className="p-5 bg-white border-t border-[#E6E1D8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-center sm:text-left">
                  <span className="font-bold text-[#1F2A28] block">Koordinat Terdaftar di Google Maps</span>
                  <span className="text-[#243330]">Navigasi akurat langsung ke depan pintu klinik</span>
                </div>
                <Button
                  href={clinicData.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  icon={Navigation}
                  className="shrink-0"
                >
                  Buka Petunjuk Arah
                </Button>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 rounded-3xl bg-[#EBF2F0] border border-[#D1E3DF] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A5E] block">
                Saluran Komunikasi Resmi
              </span>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
                <div>
                  <span className="text-[#243330] block">Nomor WhatsApp:</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#2D6A5E] hover:underline"
                  >
                    {clinicData.contact.phoneDisplay}
                  </a>
                </div>
                <div>
                  <span className="text-[#243330] block">Instagram Resmi:</span>
                  <a
                    href={clinicData.location.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#2D6A5E] hover:underline flex items-center gap-1"
                  >
                    <span>{clinicData.location.instagramHandle}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
