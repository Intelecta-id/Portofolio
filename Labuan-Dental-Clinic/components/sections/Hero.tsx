"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, MapPin, Star, Clock, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { clinicData } from "@/data/clinicData";

export default function Hero() {
  const whatsappUrl = clinicData.contact.getWhatsappUrl();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Background soft ambient warm gradient */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-[#EBF2F0]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-[450px] h-[450px] bg-[#FDF6EB]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Signal Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2F0] border border-[#D1E3DF] text-xs font-semibold text-[#2D6A5E]">
              <ShieldCheck className="w-4 h-4 text-[#2D6A5E]" aria-hidden="true" />
              <span>{clinicData.legal.classification} · Terdaftar Kemenkes RI</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1F2A28] leading-[1.15] tracking-tight">
              Kesehatan Gigi Keluarga yang Nyaman, Higienis & Terpercaya di Labuan
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#243330] leading-relaxed max-w-2xl">
              Pelayanan dokter gigi berlisensi dengan pendekatan ramah bebas rasa cemas, sterilisasi medis autoklaf tekanan tinggi, serta rencana perawatan yang jelas dan terpercaya untuk seluruh keluarga.
            </p>

            {/* Highlight Badges / Quick Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 pb-2">
              <div className="p-3.5 rounded-2xl bg-white border border-[#E6E1D8] shadow-xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EBF2F0] text-[#2D6A5E] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-[#1F2A28] block">Ciateul, Labuan</span>
                  <span className="text-[#243330]">Samping Gudang Alfa</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#E6E1D8] shadow-xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FDF6EB] text-[#E8A84C] flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-[#1F2A28] block">Rating 5.0 Sempurna</span>
                  <span className="text-[#243330]">152 Ulasan Pasien</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#E6E1D8] shadow-xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EBF2F0] text-[#2D6A5E] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-[#1F2A28] block">Jadwal Fleksibel</span>
                  <span className="text-[#243330]">Reservasi via WhatsApp</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                icon={WhatsAppIcon}
                className="shadow-sm hover:shadow-md"
              >
                Chat WhatsApp & Reservasi
              </Button>

              <Button
                href="#layanan"
                variant="secondary"
                size="lg"
                iconRight={ArrowRight}
              >
                Lihat Layanan Gigi
              </Button>
            </div>

            {/* Direct Contact Phone Copy */}
            <p className="text-xs text-[#243330]">
              Konsultasi WhatsApp resmi: <span className="font-semibold text-[#1F2A28]">{clinicData.contact.phoneDisplay}</span> (drg. Ansali Iklil Raudoh & tim).
            </p>
          </div>

          {/* Right Column: Authentic Clinic Bento Visuals */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Clinic Photo */}
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-3xl overflow-hidden border border-[#E6E1D8] shadow-md bg-white group">
                <Image
                  src="/images/treatment-primary.jpg"
                  alt="Ruang perawatan dan fasilitas dental unit modern Labuan Dental Clinic"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                {/* Top-Left Trust Badge (Safe from bottom doctor card) */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-[#E6E1D8] text-xs font-semibold text-[#1F2A28] shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Ruang Praktik Steril · Standar Kemenkes</span>
                </div>
              </div>

              {/* Floating Doctor Profile Card (Cleanly positioned at bottom-left without collision) */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 z-20 bg-white p-3.5 sm:p-4 rounded-2xl border border-[#E6E1D8] shadow-lg max-w-[270px] flex items-center gap-3 transition-spring hover:-translate-y-1">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#D1E3DF]">
                  <Image
                    src="/images/doctor-portrait.jpg"
                    alt="drg. Ansali Iklil Raudoh"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="text-xs">
                  <span className="font-heading font-bold text-[#1F2A28] block leading-tight">
                    drg. Ansali Iklil R.
                  </span>
                  <span className="text-[11px] text-[#2D6A5E] font-medium block">
                    Penanggung Jawab Medis
                  </span>
                  <span className="text-[10px] text-[#243330] block">
                    SIP Terdaftar Aktif
                  </span>
                </div>
              </div>

              {/* Decorative Accent Pill on Top Right */}
              <div className="absolute -top-3 -right-2 sm:-right-4 z-20 bg-[#E8A84C] text-[#1F2A28] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs">
                Pelayanan Ramah Anak
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
