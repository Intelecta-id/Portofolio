"use client";

import React from "react";
import {
  Calendar,
  MessageCircle,
  ShieldCheck,
  Heart,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { clinicData } from "@/data/clinicData";

export default function DoctorProfile() {
  const doc = clinicData.doctor;

  return (
    <section id="profil-dokter" className="py-16 sm:py-20 bg-[#F5F1EB] border-b border-[#EAE6DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#EAE6DF] bg-[#FFFFFF] p-2.5 shadow-subtle group">
              <div className="relative h-96 sm:h-[450px] w-full rounded-2xl overflow-hidden bg-[#EAE6DF]">
                <img
                  src={doc.image}
                  alt={`Potret profesional ${doc.name} di Labuan Dental Clinic`}
                  className="w-full h-full object-cover img-zoom"
                  loading="lazy"
                />

                {/* Verified SIP badge */}
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#EAE6DF] flex items-center gap-1.5 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[#059669]" aria-hidden="true" />
                  <span className="text-xs font-semibold text-[#111827]">
                    SIP & STR Kemenkes Aktif
                  </span>
                </div>
              </div>

              {/* Minimal Caption Box */}
              <div className="pt-3.5 px-2 space-y-0.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-editorial text-lg font-bold text-[#111827]">
                    {doc.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-[#0D9488] bg-[#E6F2F0] px-2.5 py-0.5 rounded-full">
                    Penanggung Jawab Medis
                  </span>
                </div>
                <p className="text-xs text-[#6B7280]">
                  Persatuan Dokter Gigi Indonesia (PDGI) Wilayah Banten
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Approach */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6B7280] uppercase block">
              Tim Dokter Praktik
            </span>

            <h2 className="font-editorial text-2xl sm:text-4xl font-bold text-[#111827] leading-tight">
              Dedikasi pelayanan gigi yang telaten, humanis, dan ramah.
            </h2>

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              {doc.clinicalBackground}
            </p>

            {/* Philosophy quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] border border-[#EAE6DF] flex items-start gap-3 shadow-xs">
              <Heart className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs sm:text-sm text-[#374151] italic leading-relaxed">
                &ldquo;{doc.philosophy}&rdquo;
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                href="#reservasi"
                variant="primary"
                size="md"
                icon={Calendar}
              >
                Cek Jadwal Praktik Dokter
              </Button>
              <Button
                href={clinicData.contact.getWhatsappUrl(
                  `Halo drg. Ansali Iklil Raudoh, saya ingin konsultasi mengenai keluhan gigi saya.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
                icon={MessageCircle}
              >
                Konsultasi WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
