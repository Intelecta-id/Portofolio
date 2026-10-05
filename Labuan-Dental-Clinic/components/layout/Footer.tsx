import React from "react";
import {
  MapPin,
  Phone,
  ShieldCheck,
  ExternalLink,
  ArrowUp,
  MessageCircle,
} from "lucide-react";
import { clinicData } from "@/data/clinicData";

export default function Footer() {
  return (
    <footer className="bg-[#0C2725] text-white pt-16 pb-16 sm:pb-20 border-t border-[#1C3D3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1C3D3A]">
          {/* Brand Info & Legal Status (Fre DentalCare style) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#153E3B] text-white flex items-center justify-center font-bold text-lg shadow-sm border border-[#2B4B48]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#5EEAD4]"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5.5 2 9 .4 2.8 1.8 5 4 5s3.6-2.2 4-5c.5-3.5 2-6 2-9 0-3.5-2.5-6-6-6Z" />
                  <path d="M9 9c1 1.5 2 2 3 2s2-.5 3-2" />
                </svg>
              </div>
              <div>
                <span className="font-editorial text-xl font-bold tracking-tight text-white block">
                  {clinicData.name}
                </span>
                <span className="text-xs font-semibold text-[#6EE7B7] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  {clinicData.legal.classification} · Kemenkes RI
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              Fasilitas Tempat Praktik Mandiri Dokter Gigi resmi Kemenkes RI di Labuan, Pandeglang dengan informasi layanan yang disampaikan secara jelas, transparan, dan mudah dipahami.
            </p>

            {/* Address with Direct Maps link */}
            <div className="pt-1">
              <a
                href={clinicData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-xs text-white/80 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#5EEAD4] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {clinicData.location.address} (Patokan: {clinicData.location.landmark})
                </span>
              </a>
            </div>

            {/* Contact links */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/80 pt-1">
              <a
                href={clinicData.contact.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-bold text-[#6EE7B7] hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Chat WhatsApp: {clinicData.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Columns */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4] block">
              Jelajahi Klinik
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#suasana-ruang" className="hover:text-white transition-colors">
                  Suasana Ruang Klinik
                </a>
              </li>
              <li>
                <a href="#layanan-tarif" className="hover:text-white transition-colors">
                  Layanan & Estimasi Tarif
                </a>
              </li>
              <li>
                <a href="#profil-dokter" className="hover:text-white transition-colors">
                  Profil Dokter (drg. Ansali)
                </a>
              </li>
              <li>
                <a href="#reservasi" className="hover:text-white transition-colors">
                  Cek Jadwal & Slot
                </a>
              </li>
              <li>
                <a href="#lokasi-rute" className="hover:text-white transition-colors">
                  Lokasi & Petunjuk Arah
                </a>
              </li>
            </ul>
          </div>

          {/* Information Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#5EEAD4] block">
              Informasi Pasien
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              <li>
                <a href="#faq-pasien" className="hover:text-white transition-colors">
                  Sebelum Berkunjung (FAQ)
                </a>
              </li>
              <li>
                <a href="#reservasi" className="hover:text-white transition-colors">
                  Kalkulator Scaling 6 Bulan
                </a>
              </li>
              <li>
                <a
                  href={clinicData.location.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram @labuandentalclinic</span>
                  <ExternalLink className="w-3 h-3 text-white/50" aria-hidden="true" />
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href={clinicData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#153E3B] text-white hover:bg-[#1E524E] border border-[#2B4B48] transition-spring"
              >
                <MapPin className="w-3.5 h-3.5 text-[#5EEAD4]" aria-hidden="true" />
                <span>Petunjuk Arah Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright, Intelecta credit & Back to Top button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 pr-0 md:pr-20">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} {clinicData.name} ({clinicData.shortName}). Faskes Terdaftar Kemenkes RI.
            </p>
            <span className="text-white/30 hidden sm:inline">|</span>
            <p className="text-white/70">
              Designed & Developed by <span className="font-bold text-[#5EEAD4]">Intelecta</span>
            </p>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#153E3B] text-white hover:bg-[#1E524E] border border-[#2B4B48] transition-spring group"
              aria-label="Kembali ke atas halaman"
            >
              <span>Kembali Keatas</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
