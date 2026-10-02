import React from "react";
import { Star, MessageSquare, Heart, Quote, ExternalLink } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { clinicData } from "@/data/clinicData";

export default function PatientReviews() {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F8FA] border-b border-[#0B7F8C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="amber" icon={Star} className="mb-3">
            Reputasi Publik & Kepuasan Pasien
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A2230]">
            Dipercaya Oleh Ratusan Pasien & Keluarga
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1D3546]/80 leading-relaxed">
            Terindeks dengan skor sempurna <strong>5,0 dari 152 ulasan</strong> pada direktori publik.
            Mencerminkan kenyamanan ruang tindakan, ketelitian dokter, dan kepuasan pasien.
          </p>
        </div>

        {/* 3 Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {clinicData.patientReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#0B7F8C]/15 shadow-sm flex flex-col justify-between transition-spring hover:shadow-elevation hover:border-[#0B7F8C]/40 group"
            >
              <div>
                {/* 5 Stars Row */}
                <div className="flex items-center gap-1 mb-4 text-[#F59E0B]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B]" aria-hidden="true" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-[#0A2230]">5.0</span>
                </div>

                {/* Comment */}
                <p className="text-sm text-[#1D3546] leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author & Treatment */}
              <div className="pt-4 mt-6 border-t border-[#0B7F8C]/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0A2230]">{rev.name}</h4>
                  <p className="text-xs text-[#4B6375]">{rev.location}</p>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-[#E1F4F6] text-[#075E68] max-w-[140px] truncate text-right">
                  {rev.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Community Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#0B7F8C]/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-[#0A2230]">
              Ikuti Edukasi Kesehatan Gigi di Media Sosial Resmi
            </h3>
            <p className="text-xs sm:text-sm text-[#4B6375]">
              Simak tips merawat gigi anak, pencegahan karies, dan dokumentasi klinik di Instagram & Facebook.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={clinicData.location.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border-2 border-[#0B7F8C]/30 text-[#075E68] bg-transparent hover:border-[#0B7F8C] hover:bg-[#E1F4F6] transition-spring"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram @labuandentalclinic</span>
            </a>
            <a
              href={clinicData.location.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border-2 border-[#0B7F8C]/30 text-[#075E68] bg-transparent hover:border-[#0B7F8C] hover:bg-[#E1F4F6] transition-spring"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook LDC</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
