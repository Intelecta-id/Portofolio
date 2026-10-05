"use client";

import React from "react";
import { Star, MessageSquare } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export default function PatientReviews() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F1EB] border-b border-[#E8E3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#4D6765] uppercase block mb-2">
            Reputasi Publik & Ulasan Pasien
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C2725] leading-tight">
            Dipercaya oleh ratusan pasien dan keluarga.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1B3C39]/80 leading-relaxed">
            Mencatatkan skor sempurna 5,0 dari 152 ulasan pasien terverifikasi di Labuan dan sekitarnya. Bukti nyata pelayanan yang teliti, higienis, dan mengutamakan rasa nyaman.
          </p>
        </div>

        {/* Testimonials 3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {clinicData.patientReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E8E3D9] shadow-xs flex flex-col justify-between transition-spring hover:shadow-card-hover group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#D97706]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D97706]" aria-hidden="true" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-[#0C2725]">5.0</span>
                </div>

                <p className="text-xs sm:text-sm text-[#1B3C39] leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author & Treatment */}
              <div className="pt-4 mt-6 border-t border-[#E8E3D9] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0C2725]">{rev.name}</h4>
                  <p className="text-xs text-[#4D6765]">{rev.location}</p>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#E6F2F0] text-[#09736A] max-w-[130px] truncate text-right">
                  {rev.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Link Banner */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border border-[#E8E3D9] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-editorial text-base sm:text-lg font-bold text-[#0C2725]">
              Edukasi Kesehatan Gigi di Media Sosial Resmi
            </h3>
            <p className="text-xs text-[#4D6765]">
              Simak tips merawat gigi anak, pencegahan karies, dan dokumentasi klinik di Instagram & Facebook.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={clinicData.location.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#FBF9F5] text-[#0C2725] border border-[#E8E3D9] hover:bg-[#0C2725] hover:text-white transition-spring"
            >
              <span>Instagram @labuandentalclinic</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
