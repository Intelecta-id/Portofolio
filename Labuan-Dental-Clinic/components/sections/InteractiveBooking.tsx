"use client";

import React, { useState } from "react";
import {
  Calendar,
  Send,
  RefreshCw,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { clinicData } from "@/data/clinicData";

export default function InteractiveBooking() {
  const [selectedService, setSelectedService] = useState("Scaling Stain Remover & Polishing");
  const [preferredDay, setPreferredDay] = useState("Senin (Sesi Sore)");
  const [lastScalingMonthsAgo, setLastScalingMonthsAgo] = useState<number>(6);

  const getBookingMessage = () => {
    return `Halo Labuan Dental Clinic, saya ingin reservasi jadwal:\n- Rencana Tindakan: ${selectedService}\n- Waktu: ${preferredDay}\nMohon konfirmasi ketersediaan slot. Terima kasih.`;
  };

  const isDue = lastScalingMonthsAgo >= 6;

  return (
    <section id="reservasi" className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-[#E7E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Minimalist Booking Banner (Fre DentalCare style) */}
          <div className="rounded-3xl border border-[#E7E3DC] bg-[#FFFFFF] p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6 pb-6 border-b border-[#E7E3DC]">
              <div className="space-y-1">
                <span className="text-xs font-semibold tracking-wider text-[#6B7280] uppercase block">
                  Reservasi Jadwal
                </span>
                <h2 className="font-editorial text-xl sm:text-2xl font-bold text-[#0F2F2E]">
                  Konfirmasi kedatangan tanpa antre lama.
                </h2>
                <p className="text-xs sm:text-sm text-[#4B5563]">
                  Pilih rencana tindakan dan preferensi waktu, lalu kirim draf langsung ke WhatsApp admin.
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F2F0] text-[#0D9488] shrink-0">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                Respon Cepat
              </span>
            </div>

            {/* Compact Selector Form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0F2F2E] block">
                  Rencana Tindakan
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E7E3DC] text-xs sm:text-sm font-semibold text-[#0F2F2E] focus:outline-none focus:ring-2 focus:ring-[#0F2F2E]"
                >
                  <option value="Konsultasi & Pemeriksaan Rongga Mulut">Konsultasi & Pemeriksaan Rongga Mulut</option>
                  <option value="Scaling Stain Remover & Polishing">Scaling Stain Remover & Polishing</option>
                  <option value="Tambal Gigi Estetik Komposit">Tambal Gigi Estetik Komposit</option>
                  <option value="Pemeriksaan Gigi Anak & Pencegahan">Pemeriksaan Gigi Anak & Pencegahan</option>
                  <option value="Konsultasi Kawat Gigi / Ortodonti">Konsultasi Kawat Gigi / Ortodonti</option>
                  <option value="Tindakan Lanjutan Lainnya">Tindakan Lanjutan Lainnya</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0F2F2E] block">
                  Preferensi Hari Kunjungan
                </label>
                <select
                  value={preferredDay}
                  onChange={(e) => setPreferredDay(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] border border-[#E7E3DC] text-xs sm:text-sm font-semibold text-[#0F2F2E] focus:outline-none focus:ring-2 focus:ring-[#0F2F2E]"
                >
                  <option value="Senin (Sesi Sore)">Senin (Sesi Sore: 15.00 sampai 20.30 WIB)</option>
                  <option value="Selasa (Sesi Siang)">Selasa (Sesi Siang: 11.00 sampai 17.00 WIB)</option>
                  <option value="Rabu (Sesi Panjang)">Rabu (Sesi Panjang: 10.00 sampai 20.00 WIB)</option>
                  <option value="Kamis (Sesi Pagi)">Kamis (Sesi Pagi: 09.00 sampai 12.00 WIB)</option>
                  <option value="Sabtu / Minggu (Perjanjian Khusus)">Sabtu / Minggu (Perjanjian Khusus)</option>
                </select>
              </div>
            </div>

            <a
              href={clinicData.contact.getWhatsappUrl(getBookingMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold bg-[#107C41] text-white hover:bg-[#0B6634] active:scale-[0.98] transition-spring"
            >
              <Send className="w-4 h-4 fill-white" aria-hidden="true" />
              <span>Kirim Reservasi ke WhatsApp ({clinicData.contact.phoneDisplay})</span>
            </a>
          </div>

          {/* Compact 6-Month Recall Simulator */}
          <div className="rounded-3xl border border-[#E7E3DC] bg-[#FFFFFF] p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488] block">
                Kalkulator Scaling Rutin 6 Bulan
              </span>
              <h3 className="font-editorial text-base sm:text-lg font-bold text-[#0F2F2E]">
                Terakhir kali pembersihan karang gigi: <span className="text-[#0D9488]">{lastScalingMonthsAgo} bulan lalu</span>
              </h3>
              <p className="text-xs text-[#6B7280]">
                {isDue
                  ? "Sudah melewati anjuran 6 bulan. Disarankan melakukan scaling berkala."
                  : "Kondisi masih dalam rentang pemantauan rutin."}
              </p>
            </div>

            <div className="w-full sm:w-60 shrink-0 space-y-2">
              <input
                type="range"
                min="1"
                max="18"
                value={lastScalingMonthsAgo}
                onChange={(e) => setLastScalingMonthsAgo(Number(e.target.value))}
                className="w-full h-1.5 bg-[#E7E3DC] rounded-lg appearance-none cursor-pointer accent-[#0F2F2E]"
                aria-label="Bulan sejak scaling terakhir"
              />
              <div className="flex justify-between text-[10px] text-[#6B7280]">
                <span>1 Bulan</span>
                <span>6 Bulan (Batas Medis)</span>
                <span>18 Bulan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
