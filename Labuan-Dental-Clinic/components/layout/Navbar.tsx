"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Calendar,
  ShieldCheck,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { clinicData } from "@/data/clinicData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#0B7F8C]/15 transition-spring">
      {/* Top Banner: Legalitas Kemenkes & Hotline */}
      <div className="bg-[#0A2230] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#059669]/20 text-[#34D399] font-semibold text-[11px] border border-[#059669]/30">
              <ShieldCheck className="w-3 h-3" aria-hidden="true" />
              Faskes Resmi Kemenkes RI
            </span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/80">
              Tempat Praktik Mandiri Dokter Gigi · SIP drg. Ansali Iklil Raudoh
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-white/90">
            <a
              href={clinicData.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#38BDF8] transition-colors"
            >
              <MapPin className="w-3 h-3 text-[#38BDF8]" aria-hidden="true" />
              <span>Ciateul, Labuan (Samping Gudang Alfa)</span>
            </a>
            <span className="hidden sm:inline text-white/30">·</span>
            <a
              href={clinicData.contact.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-bold text-[#34D399] hover:underline"
            >
              <Phone className="w-3 h-3" aria-hidden="true" />
              <span>WA: {clinicData.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B7F8C] rounded-lg shrink-0"
          >
            {/* Custom Circular Icon */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-[#0B7F8C] to-[#075E68] text-white flex items-center justify-center shadow-md transition-spring group-hover:scale-105 border border-[#E1F4F6]/50 shrink-0">
              <span className="text-lg sm:text-xl" role="img" aria-label="Gigi">
                🦷
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg lg:text-xl font-extrabold tracking-tight text-[#0A2230] group-hover:text-[#0B7F8C] transition-spring">
                  {clinicData.name}
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#E1F4F6] text-[#075E68] shrink-0">
                  {clinicData.shortName}
                </span>
              </div>
              <span className="text-[11px] font-medium text-[#4B6375] flex items-center gap-1">
                Kemenkes RI · Kec. Labuan, Pandeglang
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs sm:text-sm font-semibold text-[#1D3546]">
            <a
              href="#profil-dokter"
              className="hover:text-[#0B7F8C] transition-spring focus-visible:outline-none focus-visible:text-[#0B7F8C]"
            >
              Profil Dokter
            </a>
            <a
              href="#layanan-medis"
              className="hover:text-[#0B7F8C] transition-spring focus-visible:outline-none focus-visible:text-[#0B7F8C]"
            >
              Layanan Klinis
            </a>
            <a
              href="#reservasi"
              className="hover:text-[#0B7F8C] transition-spring focus-visible:outline-none focus-visible:text-[#0B7F8C]"
            >
              Cek Jadwal & Slot
            </a>
            <a
              href="#lokasi"
              className="hover:text-[#0B7F8C] transition-spring focus-visible:outline-none focus-visible:text-[#0B7F8C]"
            >
              Rute & Lokasi
            </a>
            <a
              href="#faq"
              className="hover:text-[#0B7F8C] transition-spring focus-visible:outline-none focus-visible:text-[#0B7F8C]"
            >
              FAQ Pasien
            </a>
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href={clinicData.contact.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              icon={Phone}
            >
              Reservasi WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-[#0A2230] hover:bg-[#E1F4F6] transition-spring focus:outline-none focus:ring-2 focus:ring-[#0B7F8C]"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-[#0B7F8C]/15 px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-[#1D3546]">
            <a
              href="#profil-dokter"
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-lg hover:bg-[#E1F4F6] hover:text-[#0B7F8C] transition-spring"
            >
              Profil Dokter (drg. Ansali)
            </a>
            <a
              href="#layanan-medis"
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-lg hover:bg-[#E1F4F6] hover:text-[#0B7F8C] transition-spring"
            >
              Layanan Klinis & Edukasi
            </a>
            <a
              href="#reservasi"
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-lg hover:bg-[#E1F4F6] hover:text-[#0B7F8C] transition-spring"
            >
              Cek Jadwal & Draf Reservasi
            </a>
            <a
              href="#lokasi"
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-lg hover:bg-[#E1F4F6] hover:text-[#0B7F8C] transition-spring"
            >
              Rute & Patokan Gudang Alfa
            </a>
            <a
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-lg hover:bg-[#E1F4F6] hover:text-[#0B7F8C] transition-spring"
            >
              FAQ & Informasi Pasien
            </a>
          </nav>

          <div className="pt-2 border-t border-[#0B7F8C]/15 flex flex-col gap-2.5">
            <Button
              href={clinicData.contact.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              icon={Phone}
              className="w-full justify-center"
            >
              Chat WhatsApp (0831-2355-5554)
            </Button>
            <Button
              href={clinicData.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              iconRight={ExternalLink}
              className="w-full justify-center"
            >
              Buka Google Maps
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
