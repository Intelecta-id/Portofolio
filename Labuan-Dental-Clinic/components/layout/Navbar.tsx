"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Phone,
  ShieldCheck,
  MapPin,
  Calendar,
  MessageCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { clinicData } from "@/data/clinicData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E8E3D9] transition-spring">
      {/* Top Banner: Legalitas Kemenkes & Hotline */}
      <div className="bg-[#0C2725] text-white text-xs py-2 px-4 border-b border-[#1A3D3A]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E6F2F0]/15 text-[#6EE7B7] font-semibold text-[11px] border border-[#059669]/40">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              Faskes Resmi Kemenkes RI
            </span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/80 text-[11px]">
              Tempat Praktik Mandiri Dokter Gigi, SIP drg. Ansali Iklil Raudoh
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-white/90">
            <a
              href={clinicData.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#5EEAD4] transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#5EEAD4]" aria-hidden="true" />
              <span>Ciateul, Labuan (Samping Gudang Alfa)</span>
            </a>
            <span className="hidden sm:inline text-white/30">·</span>
            <a
              href={clinicData.contact.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-bold text-[#6EE7B7] hover:underline"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
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
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0C2725] rounded-xl shrink-0"
          >
            {/* Elegant Clinic Emblem (No emoji, crisp SVG) */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#0C2725] text-white flex items-center justify-center shadow-xs transition-spring group-hover:scale-105 border border-[#2B4B48] shrink-0">
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
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-[#0C2725] group-hover:text-[#0D9488] transition-spring">
                  {clinicData.name}
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#E6F2F0] text-[#09736A] shrink-0">
                  {clinicData.shortName}
                </span>
              </div>
              <span className="text-[11px] font-medium text-[#4D6765]">
                Kemenkes RI · Kec. Labuan, Pandeglang
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Fre DentalCare style) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs sm:text-sm font-semibold text-[#1B3C39]">
            <a
              href="#"
              className="hover:text-[#0C2725] transition-spring"
            >
              Beranda
            </a>
            <a
              href="#suasana-ruang"
              className="hover:text-[#0C2725] transition-spring"
            >
              Suasana Ruang
            </a>
            <a
              href="#layanan-tarif"
              className="hover:text-[#0C2725] transition-spring"
            >
              Layanan & Tarif
            </a>
            <a
              href="#profil-dokter"
              className="hover:text-[#0C2725] transition-spring"
            >
              Tim Dokter
            </a>
            <a
              href="#reservasi"
              className="hover:text-[#0C2725] transition-spring"
            >
              Cek Jadwal
            </a>
            <a
              href="#lokasi-rute"
              className="hover:text-[#0C2725] transition-spring"
            >
              Lokasi & Rute
            </a>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href={clinicData.contact.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="sm"
              icon={MessageCircle}
            >
              Chat WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-[#0C2725] hover:bg-[#F5F1EB] transition-spring border border-[#E8E3D9]"
              aria-label={isOpen ? "Tutup menu" : "Buka menu navigasi"}
            >
              {isOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#FBF9F5] border-t border-[#E8E3D9] px-4 pt-4 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-[#1B3C39]">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#F5F1EB] transition-colors"
            >
              Beranda
            </a>
            <a
              href="#suasana-ruang"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#F5F1EB] transition-colors"
            >
              Suasana Ruang Klinik
            </a>
            <a
              href="#layanan-tarif"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#F5F1EB] transition-colors"
            >
              Informasi Layanan & Tarif
            </a>
            <a
              href="#profil-dokter"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#F5F1EB] transition-colors"
            >
              Tim Dokter Praktik
            </a>
            <a
              href="#reservasi"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#F5F1EB] transition-colors"
            >
              Cek Jadwal & Slot
            </a>
            <a
              href="#lokasi-rute"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-xl hover:bg-[#F5F1EB] transition-colors"
            >
              Lokasi & Petunjuk Arah
            </a>
          </nav>

          <div className="pt-3 border-t border-[#E8E3D9] flex flex-col gap-2">
            <Button
              href={clinicData.contact.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              icon={MessageCircle}
              className="w-full"
            >
              Chat WhatsApp Resmi
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
