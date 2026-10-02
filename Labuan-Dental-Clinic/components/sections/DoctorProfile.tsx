"use client";

import React from "react";
import {
  Stethoscope,
  Heart,
  Award,
  Calendar,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Smile,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { clinicData } from "@/data/clinicData";

export default function DoctorProfile() {
  const doc = clinicData.doctor;

  return (
    <section id="profil-dokter" className="py-20 lg:py-28 bg-[#F4F8FA] border-b border-[#0B7F8C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Portrait Card with Smooth Zoom */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white border border-[#0B7F8C]/15 p-4 sm:p-5 shadow-elevation transition-spring hover:shadow-elevation-hover group">
              <div className="relative h-96 sm:h-[460px] w-full rounded-2xl overflow-hidden border border-[#0B7F8C]/10 bg-[#E1F4F6]">
                <img
                  src={doc.image}
                  alt={`Potret ${doc.name} di Labuan Dental Clinic`}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="verified" icon={Award}>
                    SIP Praktik Aktif
                  </Badge>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl p-4 border border-[#0B7F8C]/15 bg-white/95 backdrop-blur-md shadow-sm">
                  <h3 className="text-base font-bold text-[#0A2230]">{doc.name}</h3>
                  <p className="text-xs font-semibold text-[#0B7F8C]">{doc.title}</p>
                  <p className="text-[11px] text-[#4B6375] mt-1">
                    Anggota Persatuan Dokter Gigi Indonesia (PDGI)
                  </p>
                </div>
              </div>

              {/* Sub-card quote */}
              <div className="mt-4 p-4 rounded-2xl bg-[#E1F4F6]/50 border border-[#0B7F8C]/15 flex items-start gap-3">
                <Smile className="w-5 h-5 text-[#0B7F8C] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs text-[#1D3546] italic leading-relaxed">
                  &ldquo;{doc.philosophy}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Competencies, and Approach */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="teal" icon={Stethoscope}>
              Dokter Gigi Penanggung Jawab
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A2230] leading-tight">
              Dedikasi Pelayanan Gigi yang Telaten & Ramah
            </h2>

            <p className="text-base sm:text-lg text-[#1D3546]/85 leading-relaxed">
              {doc.clinicalBackground}
            </p>

            {/* Core Competencies Bento List */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B7F8C] block">
                Fokus Penanganan Medis Utama
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doc.specialties.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-[#0B7F8C]/15 shadow-xs flex items-center gap-3 transition-spring hover:border-[#0B7F8C]/40"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#E1F4F6] text-[#0B7F8C] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#0A2230]">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clarification about external schedules */}
            <div className="p-4 rounded-2xl bg-white border border-[#0B7F8C]/20 shadow-xs flex items-start gap-3 text-xs text-[#1D3546]">
              <Calendar className="w-4 h-4 text-[#0B7F8C] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <strong className="text-[#0A2230] font-semibold block mb-0.5">
                  Informasi Jadwal Praktik Mandiri di Labuan:
                </strong>
                <span>
                  drg. Ansali juga memiliki riwayat praktik di Klinik Fafasa23 Cilegon. Jadwal praktik faskes luar
                  tidak menjadi acuan operasional di Labuan. Pastikan untuk selalu konfirmasi slot via WhatsApp sebelum berkunjung.
                </span>
              </div>
            </div>

            {/* Consultation CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href={clinicData.contact.getWhatsappUrl(
                  "Halo drg. Ansali, saya ingin konsultasi keluhan gigi dan menanyakan jadwal praktik di Labuan Dental Clinic."
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="md"
                icon={MessageCircle}
              >
                Konsultasi Langsung dengan Dokter
              </Button>
              <Button
                href="#reservasi"
                variant="outline"
                size="md"
              >
                Lihat Jadwal Harian
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
