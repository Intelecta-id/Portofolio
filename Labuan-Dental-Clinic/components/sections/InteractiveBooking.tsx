"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  User,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { clinicData } from "@/data/clinicData";

export default function InteractiveBooking() {
  // Appointment Form States
  const [selectedService, setSelectedService] = useState("Scaling Ultrasonik & Polishing Karang Gigi");
  const [patientName, setPatientName] = useState("");
  const [patientOrigin, setPatientOrigin] = useState("Labuan (Sekitar Ciateul / Pasar)");
  const [preferredDay, setPreferredDay] = useState("Senin (Sore: 15.00 - 20.30 WIB)");
  const [complaintNote, setComplaintNote] = useState("");

  // 6-Month Routine Recall Calculator States
  const [lastScalingMonthsAgo, setLastScalingMonthsAgo] = useState<number>(7);

  // Generate formatted WhatsApp message (solves clinic receptionist load)
  const generateWhatsAppMessage = () => {
    let msg = `*DRAF RESERVASI JADWAL LABUAN DENTAL CLINIC*\n`;
    msg += `----------------------------------------\n`;
    msg += `Nama Pasien: ${patientName.trim() || "[Nama Pasien]"}\n`;
    msg += `Asal Wilayah: ${patientOrigin}\n`;
    msg += `Rencana Tindakan: ${selectedService}\n`;
    msg += `Preferensi Waktu: ${preferredDay}\n`;
    if (complaintNote.trim()) {
      msg += `Keluhan / Gejala: ${complaintNote.trim()}\n`;
    }
    msg += `----------------------------------------\n`;
    msg += `Mohon konfirmasi ketersediaan slot antrean dan kehadiran dokter gigi di klinik. Terima kasih.`;
    return msg;
  };

  const isDueForRecall = lastScalingMonthsAgo >= 6;

  return (
    <section id="reservasi" className="py-16 sm:py-20 lg:py-24 bg-[#FBF9F5] border-b border-[#E8E3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Lead */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#4D6765] uppercase block mb-2">
            Reservasi Terarah & Pengingat Pasien
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C2725] leading-tight">
            Cek jadwal praktik dan susun draf kunjungan.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1B3C39]/80 leading-relaxed">
            Menghindari antrean lama atau datang saat klinik tutup. Pilih rencana tindakan, lengkapi data singkat, dan kirimkan draf terstruktur langsung ke WhatsApp staf klinik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Interactive Appointment Builder (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E8E3D9] shadow-subtle space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E3D9]">
              <div>
                <h3 className="font-editorial text-xl font-bold text-[#0C2725]">
                  Formulir Draf Reservasi
                </h3>
                <p className="text-xs text-[#4D6765] mt-0.5">
                  Tersambung langsung ke WhatsApp resmi {clinicData.contact.phoneDisplay}
                </p>
              </div>
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F2F0] text-[#09736A]">
                Konfirmasi Cepat
              </span>
            </div>

            {/* Step 1: Pilih Tindakan Medis */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0C2725] block">
                1. Pilih Jenis Tindakan atau Keluhan
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#FBF9F5] border border-[#E8E3D9] text-sm font-semibold text-[#0C2725] focus:outline-none focus:ring-2 focus:ring-[#0C2725] transition-spring"
              >
                <optgroup label="Tindakan Harian Aktif">
                  <option value="Konsultasi & Pemeriksaan Rongga Mulut">Konsultasi & Pemeriksaan Rongga Mulut</option>
                  <option value="Scaling Ultrasonik & Polishing Karang Gigi">Scaling Ultrasonik & Polishing Karang Gigi</option>
                  <option value="Tambal Gigi Estetik (Restorasi Komposit)">Tambal Gigi Estetik (Restorasi Komposit)</option>
                  <option value="Perawatan Gigi Anak (Pedodonti Bersahabat)">Perawatan Gigi Anak (Pedodonti Bersahabat)</option>
                </optgroup>
                <optgroup label="Tindakan Lanjutan (Perlu Konfirmasi)">
                  <option value="Konsultasi Kawat Gigi (Ortodonti / Behel)">Konsultasi Kawat Gigi (Ortodonti / Behel)</option>
                  <option value="Pemutihan Gigi (Bleaching Estetik)">Pemutihan Gigi (Bleaching Estetik)</option>
                  <option value="Perawatan Saluran Akar (Endodontik)">Perawatan Saluran Akar (Endodontik)</option>
                  <option value="Konsultasi Gigi Bungsu (Odontektomi)">Konsultasi Gigi Bungsu (Odontektomi)</option>
                </optgroup>
              </select>
            </div>

            {/* Step 2: Nama & Asal Pasien */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0C2725] block">
                  2. Nama Pasien
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#09736A] absolute left-4 top-3.5" aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Contoh: Ibu Rina / Bpk. Fikri"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FBF9F5] border border-[#E8E3D9] text-sm text-[#0C2725] placeholder-[#4D6765]/60 focus:outline-none focus:ring-2 focus:ring-[#0C2725] transition-spring"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0C2725] block">
                  Asal Wilayah
                </label>
                <select
                  value={patientOrigin}
                  onChange={(e) => setPatientOrigin(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FBF9F5] border border-[#E8E3D9] text-sm font-semibold text-[#0C2725] focus:outline-none focus:ring-2 focus:ring-[#0C2725] transition-spring"
                >
                  <option value="Labuan (Sekitar Ciateul / Pasar)">Labuan (Sekitar Ciateul / Pasar)</option>
                  <option value="Carita (Pesisir Utara)">Carita (Pesisir Utara)</option>
                  <option value="Pagelaran (Selatan)">Pagelaran (Selatan)</option>
                  <option value="Menes (Pusat Edukasi)">Menes (Pusat Edukasi)</option>
                  <option value="Panimbang / Tanjung Lesung">Panimbang / Tanjung Lesung</option>
                  <option value="Luar Pandeglang / Lainnya">Luar Pandeglang / Lainnya</option>
                </select>
              </div>
            </div>

            {/* Step 3: Preferensi Jadwal */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0C2725] block">
                3. Preferensi Hari & Jam Kunjungan
              </label>
              <select
                value={preferredDay}
                onChange={(e) => setPreferredDay(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#FBF9F5] border border-[#E8E3D9] text-sm font-semibold text-[#0C2725] focus:outline-none focus:ring-2 focus:ring-[#0C2725] transition-spring"
              >
                <option value="Senin (Sore: 15.00 - 20.30 WIB)">Senin (Sesi Sore: 15.00 sampai 20.30 WIB)</option>
                <option value="Selasa (Siang: 11.00 - 17.00 WIB)">Selasa (Sesi Siang: 11.00 sampai 17.00 WIB)</option>
                <option value="Rabu (Pagi sampai Malam: 10.00 - 20.00 WIB)">Rabu (Sesi Panjang: 10.00 sampai 20.00 WIB)</option>
                <option value="Kamis (Pagi: 09.00 - 12.00 WIB)">Kamis (Sesi Pagi: 09.00 sampai 12.00 WIB)</option>
                <option value="Sabtu / Minggu (Perjanjian Khusus)">Sabtu / Minggu (Khusus Konfirmasi WhatsApp)</option>
              </select>
              <span className="text-[11px] text-[#4D6765] block">
                *Jadwal harian dapat disesuaikan dengan kehadiran dokter bertugas.
              </span>
            </div>

            {/* Optional note */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0C2725] block">
                Catatan Tambahan atau Keluhan (Opsional)
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-[#09736A] absolute left-4 top-3.5" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Misal: Gigi geraham kiri bawah terasa ngilu saat minum dingin"
                  value={complaintNote}
                  onChange={(e) => setComplaintNote(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FBF9F5] border border-[#E8E3D9] text-sm text-[#0C2725] placeholder-[#4D6765]/60 focus:outline-none focus:ring-2 focus:ring-[#0C2725] transition-spring"
                />
              </div>
            </div>

            {/* WhatsApp Send Action Button */}
            <div className="pt-2">
              <a
                href={clinicData.contact.getWhatsappUrl(generateWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-sm font-bold bg-[#107C41] text-white hover:bg-[#0B6634] active:scale-[0.98] shadow-sm hover:shadow-md transition-spring"
              >
                <Send className="w-4 h-4 fill-white" aria-hidden="true" />
                <span>Kirim Draf Pendaftaran ke WhatsApp ({clinicData.contact.phoneDisplay})</span>
              </a>
              <p className="text-[11px] text-center text-[#4D6765] mt-2">
                Tidak ada biaya registrasi online. Anda akan langsung terhubung dengan staf admin klinik.
              </p>
            </div>
          </div>

          {/* Right Column: 6-Month Scaling Recall Calculator & Schedule Table (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* 6-Month Routine Recall Calculator (Owner retention & prevention tool) */}
            <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E8E3D9] shadow-subtle space-y-4">
              <div className="flex items-center gap-2.5 text-[#09736A]">
                <RefreshCw className="w-5 h-5" aria-hidden="true" />
                <h4 className="font-editorial text-base font-bold text-[#0C2725]">
                  Kalkulator Kontrol Rutin (Scaling 6 Bulan)
                </h4>
              </div>

              <p className="text-xs text-[#1B3C39]/80 leading-relaxed">
                Kemenkes menyarankan pembersihan karang gigi secara berkala tiap 6 bulan sekali. Hitung apakah gigi Anda sudah saatnya dibersihkan kembali:
              </p>

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs font-bold text-[#0C2725]">
                  <span>Terakhir Scaling:</span>
                  <span className="text-[#09736A] font-extrabold">{lastScalingMonthsAgo} bulan lalu</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={lastScalingMonthsAgo}
                  onChange={(e) => setLastScalingMonthsAgo(Number(e.target.value))}
                  className="w-full h-2 bg-[#E8E3D9] rounded-lg appearance-none cursor-pointer accent-[#0C2725]"
                />
                <div className="flex justify-between text-[10px] text-[#4D6765]">
                  <span>1 Bulan</span>
                  <span>6 Bulan (Batas Anjuran)</span>
                  <span>24 Bulan+</span>
                </div>
              </div>

              {/* Status Indicator Result */}
              <div
                className={`p-4 rounded-2xl border text-xs leading-relaxed flex items-start gap-3 transition-spring ${
                  isDueForRecall
                    ? "bg-[#FDF1EE] border-[#C85A46]/30 text-[#9C3826]"
                    : "bg-[#ECFDF5] border-[#059669]/30 text-[#065F46]"
                }`}
              >
                {isDueForRecall ? (
                  <AlertCircle className="w-5 h-5 text-[#C85A46] shrink-0 mt-0.5" aria-hidden="true" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" aria-hidden="true" />
                )}
                <div>
                  <strong className="block text-sm font-bold mb-0.5">
                    {isDueForRecall
                      ? "Sudah Saatnya Pembersihan Karang Gigi!"
                      : "Kondisi Masih Terjaga Baik"}
                  </strong>
                  <span>
                    {isDueForRecall
                      ? `Sudah ${lastScalingMonthsAgo} bulan sejak scaling terakhir. Karang gigi yang menumpuk berisiko memicu radang gusi dan penurunan tulang gigi.`
                      : `Baru ${lastScalingMonthsAgo} bulan. Terus jaga kebersihan dengan sikat gigi 2x sehari dan lakukan pembersihan saat genap 6 bulan.`}
                  </span>
                </div>
              </div>

              {isDueForRecall && (
                <Button
                  href={clinicData.contact.getWhatsappUrl(
                    `Halo Labuan Dental Clinic, saya sudah ${lastScalingMonthsAgo} bulan belum scaling gigi. Saya ingin reservasi jadwal scaling gigi ultrasonik.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="sm"
                  className="w-full justify-center"
                >
                  Jadwalkan Scaling Sekarang
                </Button>
              )}
            </div>

            {/* Schedule Reference Card */}
            <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E8E3D9] shadow-subtle space-y-4">
              <div className="flex items-center gap-2 text-[#0C2725]">
                <Clock className="w-5 h-5 text-[#09736A]" aria-hidden="true" />
                <h4 className="font-editorial text-base font-bold text-[#0C2725]">
                  Ringkasan Estimasi Jam Operasional
                </h4>
              </div>

              <div className="divide-y divide-[#E8E3D9] text-xs">
                {clinicData.operationalSchedule.scheduleEstimate.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between">
                    <span className="font-bold text-[#0C2725]">{item.day}</span>
                    <span className="text-[#4D6765] font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F5F1EB] border border-[#E8E3D9] text-[11px] text-[#4D6765] leading-relaxed">
                <strong className="text-[#0C2725]">Catatan Jadwal:</strong> Jam operasional dokter dapat mengalami penyesuaian. Pasien sangat disarankan konfirmasi ketersediaan via WhatsApp sebelum berangkat ke lokasi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
