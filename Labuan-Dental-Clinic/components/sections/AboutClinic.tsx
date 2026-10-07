"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, HeartHandshake, FileText, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { clinicData } from "@/data/clinicData";

export default function AboutClinic() {
  const whatsappUrl = clinicData.contact.getWhatsappUrl();

  const corePillars = [
    {
      icon: ShieldCheck,
      title: "Sterilisasi Medis Autoklaf",
      desc: "Seluruh instrumen tindakan melalui pembersihan dan sterilisasi autoklaf uap bertekanan tinggi sesuai standar Kemenkes RI untuk menjamin keamanan setiap pasien.",
      tag: "Higienis 100%",
    },
    {
      icon: HeartHandshake,
      title: "Pendekatan Ramah Bebas Cemas",
      desc: "Dokter mendengarkan keluhan dengan teliti dan menjelaskan setiap langkah perawatan secara lembut dan bersahabat, sangat cocok untuk anak-anak maupun pasien pemula.",
      tag: "No Dental Anxiety",
    },
    {
      icon: FileText,
      title: "Transparansi Rencana Tindakan",
      desc: "Rencana perawatan dijelaskan secara terbuka dan komprehensif di awal sebelum tindakan dimulai, sehingga Anda dapat mengambil keputusan dengan tenang dan memahami setiap proses medisnya.",
      tag: "Edukasi Terbuka",
    },
  ];

  return (
    <section id="tentang" className="py-16 md:py-24 bg-white border-y border-[#E6E1D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF2F0] text-xs font-bold text-[#2D6A5E]">
            Profil & Nilai Pelayanan
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1F2A28] tracking-tight">
            Klinik Gigi Lokal yang Personal, Hangat dan Mengutamakan Pasien
          </h2>
          <p className="text-base sm:text-lg text-[#243330] leading-relaxed">
            Berbeda dengan konsep korporat yang kaku, Labuan Dental Clinic beroperasi sebagai fasilitas praktik mandiri yang berdedikasi melayani masyarakat Labuan, Pandeglang, dan sekitarnya dengan suasana nyaman layaknya berkunjung ke ruang keluarga.
          </p>
        </div>

        {/* Bento Grid: Story & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          {/* Photo & Quote Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#E6E1D8] shadow-md group">
              <Image
                src="/images/fre-consult.webp"
                alt="Suasana konsultasi ramah dokter gigi dan pasien di Labuan Dental Clinic"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <span className="font-bold block text-sm">Konsultasi Terbuka & Empatik</span>
                <span className="text-white/80">Setiap keluhan didengarkan dengan sabar sebelum tindakan medis dilakukan.</span>
              </div>
            </div>

            {/* Doctor's Philosophy Quote */}
            <div className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#E6E1D8] relative">
              <span className="text-3xl text-[#E8A84C] font-serif leading-none block mb-2">&ldquo;</span>
              <p className="text-sm text-[#1F2A28] italic leading-relaxed mb-3">
                {clinicData.doctor.philosophy}
              </p>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-[#E6E1D8]/60">
                <span className="font-bold text-[#2D6A5E]">{clinicData.doctor.name}</span>
                <span className="text-[#243330]">Penanggung Jawab Medis</span>
              </div>
            </div>
          </div>

          {/* 3 Pillars Column */}
          <div className="lg:col-span-7 space-y-5">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#E6E1D8] hover:border-[#2D6A5E]/40 hover:bg-[#F5F1EB] transition-spring group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#2D6A5E] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-spring">
                      <Icon className="w-6 h-6 text-[#E8A84C]" aria-hidden="true" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <h3 className="font-heading text-lg font-bold text-[#1F2A28]">
                          {pillar.title}
                        </h3>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#EBF2F0] text-[#2D6A5E]">
                          {pillar.tag}
                        </span>
                      </div>
                      <p className="text-sm text-[#243330] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Practical Action Box */}
            <div className="p-5 rounded-2xl bg-[#EBF2F0] border border-[#D1E3DF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <span className="font-bold text-sm text-[#2D6A5E] block">
                  Ingin bertanya mengenai keluhan gigi Anda?
                </span>
                <span className="text-xs text-[#243330]">
                  Tim dokter gigi kami siap memberikan penjelasan awal melalui WhatsApp.
                </span>
              </div>
              <Button
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                icon={WhatsAppIcon}
                className="shrink-0"
              >
                Tanya Dokter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
