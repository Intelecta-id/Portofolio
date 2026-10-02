"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  RefreshCw,
  PhoneCall,
  User,
  MessageSquare,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { clinicData } from "@/data/clinicData";

export default function InteractiveBooking() {
  // Appointment Form States
  const [selectedService, setSelectedService] = useState("Scaling & Pembersihan Karang Gigi");
  const [patientName, setPatientName] = useState("");
  const [patientOrigin, setPatientOrigin] = useState("Labuan");
  const [preferredDay, setPreferredDay] = useState("Senin (15.00 - 20.30 WIB)");
  const [complaintNote, setComplaintNote] = useState("");

  // 6-Month Routine Recall Calculator States
  const [lastScalingMonthsAgo, setLastScalingMonthsAgo] = useState<number>(7);

  // Generate formatted WhatsApp message
  const generateWhatsAppMessage = () => {
    let msg = `*DRAF PENDAFTARAN & RESERVASI JADWAL LDC*\n`;
    msg += `----------------------------------------\n`;
    msg += `Nama Pasien: ${patientName.trim() || "[Nama Belum Diisi]"}\n`;
    msg += `Asal Wilayah: ${patientOrigin}\n`;
    msg += `Rencana Tindakan: ${selectedService}\n`;
    msg += `Preferensi Waktu: ${preferredDay}\n`;
    if (complaintNote.trim()) {
      msg += `Keluhan / Catatan: ${complaintNote.trim()}\n`;
    }
    msg += `----------------------------------------\n`;
    msg += `Mohon konfirmasi ketersediaan slot antrean & dokter bertugas di Labuan Dental Clinic. Terima kasih.`;
    return msg;
  };

  const isDueForRecall = lastScalingMonthsAgo >= 6;

  return (
    <section id="reservasi" className="py-20 lg:py-28 bg-[#F4F8FA] border-b border-[#0B7F8C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="teal" icon={Calendar} className="mb-3">
            Sistem Reservasi & Pengingat Pasien
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A2230]">
            Cek Jadwal & Susun Draf Reservasi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1D3546]/80 leading-relaxed">
            Solusi praktis dari <strong>Intelecta</strong> untuk menghindari antrean lama.
            Pilih rencana tindakan, isi data singkat, dan kirimkan draf rapi langsung ke WhatsApp admin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Appointment Builder (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#0B7F8C]/15 shadow-elevation space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#0B7F8C]/10">
              <div>
                <h3 className="text-xl font-bold text-[#0A2230]">
                  Formulir Draf Reservasi Digital
                </h3>
                <p className="text-xs text-[#4B6375] mt-0.5">
                  Terkoneksi langsung ke WhatsApp resmi 0831-2355-5554
                </p>
              </div>
              <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-bold bg-[#ECFDF5] text-[#059669]">
                Respon Cepat
              </span>
            </div>

            {/* Step 1: Pilih Tindakan Medis */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0A2230] block">
                1. Pilih Jenis Tindakan / Keluhan
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#F4F8FA] border border-[#0B7F8C]/20 text-sm font-semibold text-[#0A2230] focus:outline-none focus:ring-2 focus:ring-[#0B7F8C] transition-spring"
              >
                <optgroup label="Tindakan Rutin (Terkonfirmasi Aktif)">
                  <option value="Scaling & Pembersihan Karang Gigi">Scaling & Pembersihan Karang Gigi (Ultrasonik)</option>
                  <option value="Tambal Gigi Estetik (Restorasi Komposit)">Tambal Gigi Estetik (Restorasi Komposit)</option>
                  <option value="Perawatan Gigi Anak (Pedodonti)">Perawatan Gigi Anak (Pedodonti Bersahabat)</option>
                  <option value="Konsultasi & Pemeriksaan Rongga Mulut">Konsultasi & Pemeriksaan Rongga Mulut</option>
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
                <label className="text-xs font-bold uppercase tracking-wider text-[#0A2230] block">
                  2. Nama Pasien
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#0B7F8C] absolute left-4 top-3.5" aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Contoh: Ibu Rina / Ananda Fikri"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#F4F8FA] border border-[#0B7F8C]/20 text-sm text-[#0A2230] placeholder-[#4B6375]/60 focus:outline-none focus:ring-2 focus:ring-[#0B7F8C] transition-spring"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0A2230] block">
                  Asal Wilayah
                </label>
                <select
                  value={patientOrigin}
                  onChange={(e) => setPatientOrigin(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[#F4F8FA] border border-[#0B7F8C]/20 text-sm font-semibold text-[#0A2230] focus:outline-none focus:ring-2 focus:ring-[#0B7F8C] transition-spring"
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
              <label className="text-xs font-bold uppercase tracking-wider text-[#0A2230] block">
                3. Preferensi Hari & Jam Kunjungan
              </label>
              <select
                value={preferredDay}
                onChange={(e) => setPreferredDay(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-[#F4F8FA] border border-[#0B7F8C]/20 text-sm font-semibold text-[#0A2230] focus:outline-none focus:ring-2 focus:ring-[#0B7F8C] transition-spring"
              >
                <option value="Senin (15.00 - 20.30 WIB)">Senin (Sore / Malam: 15.00 – 20.30 WIB)</option>
                <option value="Selasa (11.00 - 17.00 WIB)">Selasa (Siang / Sore: 11.00 – 17.00 WIB)</option>
                <option value="Rabu (10.00 - 20.00 WIB)">Rabu (Pagi – Malam: 10.00 – 20.00 WIB)</option>
                <option value="Kamis (09.00 - 12.00 WIB)">Kamis (Pagi Saja: 09.00 – 12.00 WIB)</option>
                <option value="Sabtu / Minggu (Perjanjian Khusus)">Sabtu / Minggu (Khusus Konfirmasi WhatsApp)</option>
              </select>
              <span className="text-[11px] text-[#4B6375] block">
                *Jadwal harian dapat disesuaikan dengan kehadiran dokter bertugas.
              </span>
            </div>

            {/* Optional note */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#0A2230] block">
                Catatan Tambahan / Gejala Keluhan (Opsional)
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-[#0B7F8C] absolute left-4 top-3.5" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Misal: Gigi geraham kiri bawah ngilu saat minum dingin"
                  value={complaintNote}
                  onChange={(e) => setComplaintNote(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#F4F8FA] border border-[#0B7F8C]/20 text-sm text-[#0A2230] placeholder-[#4B6375]/60 focus:outline-none focus:ring-2 focus:ring-[#0B7F8C] transition-spring"
                />
              </div>
            </div>

            {/* WhatsApp Send Action Button */}
            <div className="pt-2">
              <a
                href={clinicData.contact.getWhatsappUrl(generateWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-sm sm:text-base font-bold bg-[#25D366] text-white hover:bg-[#1EBE5D] active:scale-[0.98] shadow-md hover:shadow-lg transition-spring"
              >
                <Send className="w-5 h-5 fill-white" aria-hidden="true" />
                <span>Kirim Draf Pendaftaran ke WhatsApp (0831-2355-5554)</span>
              </a>
              <p className="text-[11px] text-center text-[#4B6375] mt-2">
                Tidak ada biaya registrasi online. Anda akan langsung tersambung dengan admin LDC.
              </p>
            </div>
          </div>

          {/* Right Column: 6-Month Routine Recall Calculator & Schedule Table (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Intelecta Special Feature: 6-Month Patient Recall Module */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#0B7F8C]/15 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-[#0B7F8C]">
                <RefreshCw className="w-5 h-5" aria-hidden="true" />
                <h4 className="text-base font-bold text-[#0A2230]">
                  Kalkulator Kontrol Rutin (Scaling 6 Bulan)
                </h4>
              </div>

              <p className="text-xs text-[#1D3546]/80 leading-relaxed">
                Kemenkes menyarankan pembersihan karang gigi setiap 6 bulan sekali. Hitung apakah gigi Anda
                sudah saatnya dibersihkan kembali:
              </p>

              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs font-bold text-[#0A2230]">
                  <span>Terakhir Scaling:</span>
                  <span className="text-[#0B7F8C]">{lastScalingMonthsAgo} bulan yang lalu</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={lastScalingMonthsAgo}
                  onChange={(e) => setLastScalingMonthsAgo(Number(e.target.value))}
                  className="w-full h-2 bg-[#E1F4F6] rounded-lg appearance-none cursor-pointer accent-[#0B7F8C]"
                />
                <div className="flex justify-between text-[10px] text-[#4B6375]">
                  <span>1 Bulan</span>
                  <span>6 Bulan (Batas Medis)</span>
                  <span>24 Bulan+</span>
                </div>
              </div>

              {/* Status Indicator Result */}
              <div
                className={`p-4 rounded-2xl border text-xs leading-relaxed flex items-start gap-3 transition-spring ${
                  isDueForRecall
                    ? "bg-[#FEF2F0] border-[#E26D5C]/30 text-[#991B1B]"
                    : "bg-[#ECFDF5] border-[#059669]/30 text-[#065F46]"
                }`}
              >
                {isDueForRecall ? (
                  <AlertCircle className="w-5 h-5 text-[#E26D5C] shrink-0 mt-0.5" aria-hidden="true" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" aria-hidden="true" />
                )}
                <div>
                  <strong className="block text-sm font-bold mb-0.5">
                    {isDueForRecall
                      ? "Sudah Waktunya Pembersihan Karang Gigi!"
                      : "Kondisi Masih Terjaga Baik"}
                  </strong>
                  <span>
                    {isDueForRecall
                      ? `Sudah ${lastScalingMonthsAgo} bulan sejak scaling terakhir. Karang gigi subgingiva berisiko menyebabkan radang gusi atau bau mulut.`
                      : `Baru ${lastScalingMonthsAgo} bulan. Tetap jaga kebersihan dengan sikat gigi 2x sehari dan lakukan kontrol saat genap 6 bulan.`}
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
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#0B7F8C]/15 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#0A2230]">
                <Clock className="w-5 h-5 text-[#0B7F8C]" aria-hidden="true" />
                <h4 className="text-base font-bold text-[#0A2230]">
                  Ringkasan Estimasi Jam Operasional
                </h4>
              </div>

              <div className="divide-y divide-[#0B7F8C]/10 text-xs">
                {clinicData.operationalSchedule.scheduleEstimate.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between">
                    <span className="font-bold text-[#0A2230]">{item.day}</span>
                    <span className="text-[#4B6375] font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-[#E1F4F6]/60 border border-[#0B7F8C]/15 text-[11px] text-[#075E68] leading-relaxed">
                <strong>Catatan Penting:</strong> Jam praktik dokter dapat mengalami penyesuaian
                dinamis. Pasien sangat disarankan konfirmasi ketersediaan via WhatsApp sebelum menuju ke lokasi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
