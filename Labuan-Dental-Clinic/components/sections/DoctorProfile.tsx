"use client";

import React from "react";
import { ShieldCheck, MessageCircle } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export default function DoctorProfile() {
  const doc = clinicData.doctor;

  return (
    <section id="dokter" className="py-16 sm:py-20 bg-[#F3EFEA] border-b border-[#E7E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead */}
        <div className="max-w-xl mb-10">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#6B7280] uppercase block mb-1.5">
            Tim Dokter
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0F2F2E] leading-tight">
            Kenali tenaga profesional yang tersedia.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
            Hanya profil yang telah terverifikasi resmi oleh Kementerian Kesehatan yang muncul di halaman ini.
          </p>
        </div>

        {/* Clean Minimalist Doctor Card (Fre DentalCare style) */}
        <div className="max-w-3xl rounded-3xl border border-[#E7E3DC] bg-[#FFFFFF] p-5 sm:p-7 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Photo */}
            <div className="sm:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-[#EAE6DF]">
              <img
                src={doc.image}
                alt={`Potret dokter ${doc.name}`}
                className="w-full h-full object-cover img-zoom"
                loading="lazy"
              />
            </div>

            {/* Info */}
            <div className="sm:col-span-7 space-y-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E6F2F0] text-[#0D9488] mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  SIP Praktik Kemenkes Aktif
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-[#0F2F2E]">
                  {doc.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280] mt-0.5">
                  Dokter Gigi Penanggung Jawab Medis (LDC)
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Berpengalaman dalam perawatan gigi preventif, restorasi tambal estetik, dan pendekatan ramah anak tanpa rasa takut.
              </p>

              <div className="pt-2">
                <a
                  href={clinicData.contact.getWhatsappUrl(
                    `Halo drg. Ansali Iklil Raudoh, saya ingin berkonsultasi mengenai keluhan gigi.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#0F2F2E] text-white hover:bg-[#1E4543] active:scale-[0.98] transition-spring"
                >
                  <MessageCircle className="w-4 h-4 text-[#5EEAD4]" aria-hidden="true" />
                  <span>Konsultasi dengan Dokter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
