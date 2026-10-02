import React from "react";
import {
  MapPin,
  Phone,
  ShieldCheck,
  ExternalLink,
  ArrowUp,
  Clock,
  Heart,
} from "lucide-react";
import { clinicData } from "@/data/clinicData";

export default function Footer() {
  return (
    <footer className="bg-[#0A2230] text-white pt-16 pb-12 border-t border-[#1D3546]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1D3546]">
          {/* Brand Info & Legal Status */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0B7F8C] to-[#075E68] text-white flex items-center justify-center font-bold text-xl shadow-md border border-[#E1F4F6]/20">
                🦷
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-white block">
                  {clinicData.name}
                </span>
                <span className="text-xs font-semibold text-[#34D399] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  {clinicData.legal.classification} · Kemenkes RI
                </span>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Fasilitas pelayanan medis gigi dan mulut terpercaya untuk masyarakat Labuan,
              Carita, Menes, Pagelaran, hingga Panimbang. Mengutamakan higienitas sterilisasi
              medis dan kenyamanan tanpa rasa cemas.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={clinicData.location.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1D3546] text-white border border-[#0B7F8C]/30 flex items-center justify-center hover:text-[#38BDF8] hover:border-[#38BDF8] transition-spring"
                aria-label="Instagram Labuan Dental Clinic"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={clinicData.location.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1D3546] text-white border border-[#0B7F8C]/30 flex items-center justify-center hover:text-[#38BDF8] hover:border-[#38BDF8] transition-spring"
                aria-label="Facebook Labuan Dental Clinic"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={clinicData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1D3546] text-white border border-[#0B7F8C]/30 flex items-center justify-center hover:text-[#38BDF8] hover:border-[#38BDF8] transition-spring"
                aria-label="Google Maps Labuan Dental Clinic"
              >
                <MapPin className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] block">
              Navigasi Cepat
            </span>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#profil-dokter" className="hover:text-[#38BDF8] transition-spring">
                  Profil Dokter (drg. Ansali)
                </a>
              </li>
              <li>
                <a href="#layanan-medis" className="hover:text-[#38BDF8] transition-spring">
                  Layanan Klinis & Edukasi
                </a>
              </li>
              <li>
                <a href="#reservasi" className="hover:text-[#38BDF8] transition-spring">
                  Cek Jadwal & Slot WhatsApp
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-[#38BDF8] transition-spring">
                  Rute & Titik Gudang Alfa
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#38BDF8] transition-spring">
                  Tanya Jawab Pasien (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] block">
              Informasi Fasilitas & Kontak
            </span>
            <div className="flex items-start gap-2.5 text-sm text-white/80 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-1" aria-hidden="true" />
              <span>
                {clinicData.location.address}
                <br />
                <strong className="text-white font-semibold">
                  Patokan: {clinicData.location.landmark}
                </strong>
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-sm text-white/80 pt-1">
              <Phone className="w-4 h-4 text-[#34D399] shrink-0" aria-hidden="true" />
              <span>
                WhatsApp:{" "}
                <a
                  href={clinicData.contact.getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#34D399] hover:underline"
                >
                  {clinicData.contact.phoneDisplay}
                </a>
              </span>
            </div>

            <div className="pt-2">
              <a
                href={clinicData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38BDF8] hover:underline"
              >
                <span>Buka Rute di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Intelecta Branding & Back to Top Button */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/60 pr-0 md:pr-20">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} {clinicData.name} ({clinicData.shortName}).
              Faskes Terdaftar Kemenkes RI.
            </p>
            <span className="hidden sm:inline text-white/30">·</span>
            <p className="text-[#38BDF8] font-medium">
              Designed & Developed by <span className="font-bold text-white">Intelecta</span>
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#1D3546] text-white border border-[#0B7F8C]/40 hover:bg-[#0B7F8C] hover:text-white transition-spring shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] group shrink-0"
            aria-label="Kembali ke atas halaman"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp
              className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
