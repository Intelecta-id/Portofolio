import React from "react";
import {
  ShieldCheck,
  Award,
  FileCheck2,
  Stethoscope,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import { clinicData } from "@/data/clinicData";

export default function CredentialsLegal() {
  const credentials = [
    {
      icon: ShieldCheck,
      title: "Klasifikasi Faskes Resmi Kemenkes",
      subtitle: clinicData.legal.classification,
      desc: "Tercatat secara sah dalam basis data Kementerian Kesehatan RI sebagai Tempat Praktik Mandiri Dokter Gigi resmi untuk wilayah Kabupaten Pandeglang.",
      badge: "Kemenkes Terdaftar",
      badgeColor: "verified" as const,
    },
    {
      icon: FileCheck2,
      title: "Izin Praktik Dokter Gigi (SIP)",
      subtitle: "drg. Ansali Iklil Raudoh",
      desc: "Memiliki Surat Izin Praktik aktif di bawah pembinaan Persatuan Dokter Gigi Indonesia (PDGI) dan Dinas Kesehatan Kabupaten Pandeglang.",
      badge: "SIP Terverifikasi",
      badgeColor: "teal" as const,
    },
    {
      icon: Sparkles,
      title: "Protokol Sterilisasi Standar RS",
      subtitle: "Autoklaf Tekanan & Suhu Tinggi",
      desc: "Setiap instrumen dental dibungkus individual dan disterilisasi menggunakan autoklaf medis untuk mencegah transmisi silang mikroba.",
      badge: "100% Higienis",
      badgeColor: "verified" as const,
    },
    {
      icon: Stethoscope,
      title: "Rujukan Utama Pesisir Barat",
      subtitle: "Fasilitas Perawatan Gigi Modern",
      desc: "Menjadi rujukan terpercaya di Labuan, Carita, Menes, Pagelaran, hingga Panimbang dengan fasilitas modern tanpa perlu jauh ke kota besar.",
      badge: "5.0 Bintang",
      badgeColor: "amber" as const,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#0B7F8C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="verified" icon={ShieldCheck} className="mb-3">
            Legalitas & Standar Medis
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A2230]">
            Fasilitas Pelayanan Gigi Resmi & Berizin Kemenkes RI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1D3546]/80 leading-relaxed">
            Keamanan dan ketenangan pasien adalah prioritas mutlak. Seluruh prosedur, peralatan medis,
            dan perizinan dokter gigi di Labuan Dental Clinic (LDC) beroperasi secara patuh hukum dan higienis.
          </p>
        </div>

        {/* 4 Bento Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#F4F8FA] rounded-3xl p-6 sm:p-7 border border-[#0B7F8C]/15 shadow-sm flex flex-col justify-between transition-spring hover:shadow-elevation hover:border-[#0B7F8C]/40 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#0B7F8C] border border-[#0B7F8C]/20 flex items-center justify-center shadow-xs group-hover:bg-[#0B7F8C] group-hover:text-white transition-spring">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <Badge variant={item.badgeColor}>{item.badge}</Badge>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A2230] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-[#0B7F8C] mt-1">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-[#1D3546]/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#0B7F8C]/10 flex items-center gap-1.5 text-xs font-semibold text-[#059669]">
                  <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Kepatuhan Medis Terverifikasi</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
