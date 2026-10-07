import React from "react";
import Link from "next/link";
import {
  MapPin,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { clinicData } from "@/data/clinicData";

export default function Footer() {
  return (
    <footer className="bg-[#1F2A28] text-white pt-16 pb-16 sm:pb-20 border-t border-[#2D6A5E]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2D6A5E]/30">
          {/* Brand Info & Legal Status */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#2D6A5E] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#E8A84C]"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 5.5 2 9 .4 2.8 1.8 5 4 5s3.6-2.2 4-5c.5-3.5 2-6 2-9 0-3.5-2.5-6-6-6Z" />
                  <path d="M9 9c1 1.5 2 2 3 2s2-.5 3-2" />
                </svg>
              </div>
              <div>
                <span className="font-heading text-xl font-bold tracking-tight text-white block">
                  {clinicData.name}
                </span>
                <span className="text-xs font-semibold text-[#A8D5CD] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  {clinicData.legal.classification} · Kemenkes RI
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              Fasilitas Tempat Praktik Mandiri Dokter Gigi resmi Kemenkes RI di Labuan, Pandeglang. Menyediakan pelayanan ramah bebas cemas dengan transparansi tarif sebelum tindakan dimulai.
            </p>

            {/* Address with Direct Maps link */}
            <div className="pt-1">
              <a
                href={clinicData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-xs text-white/80 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#E8A84C] shrink-0 mt-0.5" aria-hidden="true" />
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
                className="flex items-center gap-1.5 font-bold text-[#25D366] hover:underline"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                <span>Chat WhatsApp: {clinicData.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Columns */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A8D5CD] block">
              Jelajahi Halaman
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/#tentang" className="hover:text-white transition-colors">
                  Tentang Klinik
                </a>
              </li>
              <li>
                <a href="/#layanan" className="hover:text-white transition-colors">
                  Layanan Klinis
                </a>
              </li>
              <li>
                <a href="/#dokter" className="hover:text-white transition-colors">
                  Profil Dokter (drg. Ansali)
                </a>
              </li>
              <li>
                <a href="/#fasilitas" className="hover:text-white transition-colors">
                  Fasilitas & Ruang Praktik
                </a>
              </li>
              <li>
                <a href="/#lokasi" className="hover:text-white transition-colors">
                  Lokasi & Petunjuk Arah
                </a>
              </li>
            </ul>
          </div>

          {/* Information & Social Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A8D5CD] block">
              Informasi Pasien
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Pembersihan Karang Gigi (Scaling)
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Penanganan Gigi Anak (Pedodonti)
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#2D6A5E] text-white hover:bg-[#1E4D44] transition-spring"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E8A84C]" aria-hidden="true" />
                <span>Petunjuk Arah Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright, Intelecta credit and Legal links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60 pr-0 md:pr-20">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} {clinicData.name} ({clinicData.shortName}). Faskes Terdaftar Kemenkes RI.
            </p>
            <span className="text-white/30 hidden sm:inline">|</span>
            <p className="text-white/70">
              Designed & Developed by <span className="font-bold text-[#A8D5CD]">Intelecta</span>
            </p>
            <span className="text-white/30 hidden sm:inline">|</span>
            <div className="flex items-center gap-2.5">
              <Link
                href="/privacy-policy"
                target="_self"
                className="text-white/75 hover:text-[#A8D5CD] transition-colors underline-offset-4 hover:underline"
              >
                Kebijakan Privasi
              </Link>
              <span className="text-white/30">·</span>
              <Link
                href="/terms-conditions"
                target="_self"
                className="text-white/75 hover:text-[#A8D5CD] transition-colors underline-offset-4 hover:underline"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
