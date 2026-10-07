"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Heart, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { clinicData } from "@/data/clinicData";

export default function DoctorProfile() {
  const whatsappUrl = clinicData.contact.getWhatsappUrl(
    "Halo drg. Ansali, saya ingin konsultasi mengenai perawatan gigi di Labuan Dental Clinic."
  );

  return (
    <section id="dokter" className="py-16 md:py-24 bg-white border-y border-[#E6E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Doctor Portrait Photo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-[#E6E1D8] shadow-md bg-[#FAF8F4] group">
                <Image
                  src={clinicData.doctor.image}
                  alt={clinicData.doctor.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A28]/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#E6E1D8] text-xs">
                  <div className="flex items-center gap-2 text-[#2D6A5E] font-bold mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{clinicData.doctor.licenseStatus}</span>
                  </div>
                  <span className="text-[#243330] block">
                    {clinicData.doctor.regulator}
                  </span>
                </div>
              </div>

              {/* Decorative Accent Badge */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-[#E8A84C] text-[#1F2A28] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs">
                Dokter Gigi Penanggung Jawab
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF2F0] text-xs font-bold text-[#2D6A5E]">
                Profil Dokter Gigi
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1F2A28] tracking-tight">
                {clinicData.doctor.name}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#2D6A5E]">
                {clinicData.doctor.title} · Penanggung Jawab Medis LDC
              </p>
            </div>

            {/* Background Story */}
            <p className="text-sm sm:text-base text-[#243330] leading-relaxed">
              {clinicData.doctor.clinicalBackground}
            </p>

            {/* Philosophy Box */}
            <div className="p-5 rounded-2xl bg-[#FAF8F4] border border-[#E6E1D8] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2D6A5E]">
                <Heart className="w-4 h-4 text-[#E8A84C]" />
                <span>Pendekatan Klinis & Filosofi Praktik:</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1F2A28] italic leading-relaxed">
                &ldquo;{clinicData.doctor.philosophy}&rdquo;
              </p>
            </div>

            {/* Specialties Checklist */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F2A28] block">
                Fokus Penanganan Medis:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {clinicData.doctor.specialties.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#1F2A28]">
                    <CheckCircle2 className="w-4 h-4 text-[#2D6A5E] shrink-0 mt-0.5" />
                    <span className="leading-tight">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="md"
                icon={WhatsAppIcon}
              >
                Konsultasi dengan drg. Ansali
              </Button>

              <Button
                href="#layanan"
                variant="secondary"
                size="md"
              >
                Lihat Layanan Gigi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
