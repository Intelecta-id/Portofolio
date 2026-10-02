"use client";

import React from "react";
import {
  ShieldCheck,
  Star,
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { clinicData } from "@/data/clinicData";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-[#F4F8FA] overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B7F8C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines, Trust Proof, Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="verified" icon={ShieldCheck}>
                Kemenkes RI · Praktik Mandiri Dokter Gigi
              </Badge>
              <Badge variant="amber" icon={Star}>
                Rating 5.0 ({clinicData.reputation.totalReviews} Ulasan Pasien)
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2230] leading-[1.12]">
              Kesehatan Gigi Keluarga,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B7F8C] to-[#075E68]">
                Nyaman & Bebas Cemas
              </span>{" "}
              di Labuan
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#1D3546]/85 leading-relaxed max-w-2xl">
              Fasilitas pelayanan gigi modern berizin resmi Kemenkes RI di bawah penanganan{" "}
              <strong className="text-[#0A2230] font-semibold">drg. Ansali Iklil Raudoh</strong>.
              Hadir memberikan perawatan scaling ultrasonik, restorasi tambal estetik, dan pedodonti ramah anak
              tanpa perlu menempuh perjalanan jauh ke Serang atau Cilegon.
            </p>

            {/* Quick Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A2230]">
                <CheckCircle2 className="w-4 h-4 text-[#0B7F8C] shrink-0" aria-hidden="true" />
                <span>Sterilisasi Autoklaf Medis 100%</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A2230]">
                <CheckCircle2 className="w-4 h-4 text-[#0B7F8C] shrink-0" aria-hidden="true" />
                <span>Pendekatan Ramah Anak (No Trauma)</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A2230]">
                <CheckCircle2 className="w-4 h-4 text-[#0B7F8C] shrink-0" aria-hidden="true" />
                <span>Patokan Mudah: Samping Gudang Alfa</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0A2230]">
                <CheckCircle2 className="w-4 h-4 text-[#0B7F8C] shrink-0" aria-hidden="true" />
                <span>Jadwal Terkoordinasi via WhatsApp</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <Button
                href="#reservasi"
                variant="primary"
                size="lg"
                icon={Calendar}
              >
                Cek Jadwal & Slot Kunjungan
              </Button>
              <Button
                href="#layanan-medis"
                variant="outline"
                size="lg"
                iconRight={ArrowRight}
              >
                Lihat Layanan Medis
              </Button>
            </div>

            {/* Location & Notice Snippet */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#4B6375]">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-[#0B7F8C]" aria-hidden="true" />
                Jl. Nasional III No. 26, Ciateul, Labuan
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 font-medium text-[#059669]">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                Konfirmasi Jadwal Harian
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Smooth Zoom */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white border border-[#0B7F8C]/15 p-4 sm:p-5 shadow-elevation transition-spring hover:shadow-elevation-hover group">
              {/* Photo Container with overflow-hidden and img-zoom */}
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#0B7F8C]/10 bg-[#E1F4F6]">
                <img
                  src="/images/hero-clinic.jpg"
                  alt="Interior Ruang Praktik Labuan Dental Clinic Modern & Steril"
                  className="w-full h-full object-cover img-zoom"
                  loading="eager"
                />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <Badge variant="verified" icon={Sparkles}>
                    Ruang Perawatan Steril
                  </Badge>
                </div>

                {/* Floating Rating Pill */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-[#F59E0B]/30 flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" aria-hidden="true" />
                  <span className="text-xs font-bold text-[#0A2230]">5.0 / 5.0</span>
                </div>

                {/* Bottom Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl p-3.5 border border-[#0B7F8C]/20 flex items-center justify-between shadow-sm bg-white/95 backdrop-blur-md text-[#0A2230]">
                  <div>
                    <h3 className="text-sm font-bold text-[#0A2230]">Labuan Dental Clinic (LDC)</h3>
                    <p className="text-xs text-[#4B6375]">drg. Ansali Iklil Raudoh · SIP Aktif</p>
                  </div>
                  <a
                    href={clinicData.contact.getWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#0B7F8C] text-white hover:bg-[#075E68] transition-colors shrink-0"
                  >
                    Tanya Jadwal
                  </a>
                </div>
              </div>

              {/* Bento Quick Highlights below image */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-[#F4F8FA] border border-[#0B7F8C]/10">
                  <span className="text-lg font-black text-[#0B7F8C] block">152+</span>
                  <span className="text-[11px] font-semibold text-[#4B6375]">Ulasan Puas</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F4F8FA] border border-[#0B7F8C]/10">
                  <span className="text-lg font-black text-[#059669] block">100%</span>
                  <span className="text-[11px] font-semibold text-[#4B6375]">Steril Medis</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#F4F8FA] border border-[#0B7F8C]/10">
                  <span className="text-lg font-black text-[#0A2230] block">5 Wilayah</span>
                  <span className="text-[11px] font-semibold text-[#4B6375]">Cakupan Faskes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
