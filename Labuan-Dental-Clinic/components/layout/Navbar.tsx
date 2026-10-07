"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { clinicData } from "@/data/clinicData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/#tentang" },
    { label: "Layanan", href: "/#layanan" },
    { label: "Dokter", href: "/#dokter" },
    { label: "Fasilitas", href: "/#fasilitas" },
    { label: "Lokasi", href: "/#lokasi" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F4]/92 backdrop-blur-md border-b border-[#E6E1D8] transition-spring">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A5E] rounded-xl shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#2D6A5E] text-white flex items-center justify-center shadow-xs transition-spring group-hover:scale-105 shrink-0">
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
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading text-base sm:text-lg lg:text-xl font-bold tracking-tight text-[#1F2A28] group-hover:text-[#2D6A5E] transition-spring">
                  {clinicData.name}
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#EBF2F0] text-[#2D6A5E] shrink-0">
                  {clinicData.shortName}
                </span>
              </div>
              <span className="text-[11px] font-medium text-[#243330]">
                Kemenkes RI · Ciateul, Labuan
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (6 Focused Sections) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-[#1F2A28]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#2D6A5E] transition-spring"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href={clinicData.contact.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="sm"
              icon={WhatsAppIcon}
            >
              Chat WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={clinicData.contact.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#25D366] hover:bg-[#EBF2F0] rounded-xl transition-spring"
              aria-label="Chat WhatsApp Admin"
            >
              <WhatsAppIcon className="w-6 h-6" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#1F2A28] hover:text-[#2D6A5E] hover:bg-[#EBF2F0] rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A5E] transition-spring"
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#E6E1D8] bg-[#FAF8F4] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-[#1F2A28] hover:text-[#2D6A5E] hover:bg-[#EBF2F0] transition-spring"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E6E1D8]">
            <Button
              href={clinicData.contact.getWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              icon={WhatsAppIcon}
              className="w-full justify-center"
            >
              Chat WhatsApp (0831-2355-5554)
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
