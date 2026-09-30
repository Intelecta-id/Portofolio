"use client";

import React, { useState, useEffect } from "react";
import { Clock, CheckCircle2, XCircle, MapPin, MessageCircle, ExternalLink, Compass } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { brandData } from "@/data/brandData";

export default function OperationalHours() {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);
  const [currentTimeStr, setCurrentTimeStr] = useState<string>("");

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      // WIB is UTC+7
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const wibDate = new Date(utc + 3600000 * 7);

      const hours = wibDate.getHours();
      const minutes = wibDate.getMinutes();

      // Open from 07:00 to 21:00
      const open = hours >= brandData.operationalHours.openHour && hours < brandData.operationalHours.closeHour;
      setIsOpenNow(open);

      const formattedHours = String(hours).padStart(2, "0");
      const formattedMins = String(minutes).padStart(2, "0");
      setCurrentTimeStr(`${formattedHours}:${formattedMins} WIB`);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="operasional" className="py-20 lg:py-28 bg-cream/40 border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Live Open/Closed Status Card */}
          <div className="lg:col-span-6 bg-espresso text-oat rounded-3xl p-8 sm:p-10 border border-espresso-light/40 shadow-xl relative overflow-hidden">
            <div
              className="absolute -top-20 -right-20 w-60 h-60 bg-crema/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex items-center justify-between border-b border-espresso-light/40 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-crema/20 text-crema flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-oat">Status Operasional Kedai</h3>
                  <span className="text-xs text-oat/60">{currentTimeStr ? `Waktu Server: ${currentTimeStr}` : "WIB"}</span>
                </div>
              </div>

              {/* Dynamic Live Status Badge */}
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border ${
                  isOpenNow
                    ? "bg-sage/20 text-green-300 border-sage/40"
                    : "bg-red-500/20 text-red-300 border-red-500/40"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    isOpenNow ? "bg-green-400" : "bg-red-400"
                  }`}
                  aria-hidden="true"
                />
                <span>{isOpenNow ? "Buka Sekarang" : "Tutup Sementara"}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-oat leading-tight">
                {brandData.operationalHours.scheduleText}
              </h4>
              <p className="text-sm text-oat/75 leading-relaxed">
                Melayani pesanan seduhan kopi segar, sarapan toast, hingga kopi malam untuk teman
                lembur setiap hari dari Senin sampai Minggu.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Button
                  href={brandData.contact.getWhatsappOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  icon={MessageCircle}
                >
                  Pesan via WhatsApp Sekarang
                </Button>
                <Button
                  href={brandData.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                  icon={Compass}
                  className="hover:bg-espresso-card hover:border-crema transition-spring"
                  style={{ color: "#F7F3ED", borderColor: "rgba(247, 243, 237, 0.4)" }}
                >
                  Titik Google Maps
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Daily Schedule Breakdown */}
          <div className="lg:col-span-6 bg-oat rounded-3xl p-8 border border-espresso/10 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-crema block mb-2">
              Jadwal Lengkap Setiap Hari
            </span>
            <h3 className="font-display text-2xl font-bold text-espresso mb-6">
              Jam Pelayanan Harian
            </h3>

            <div className="divide-y divide-espresso/10">
              {brandData.operationalHours.days.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3 flex items-center justify-between text-sm"
                >
                  <span className="font-semibold text-espresso">{item.day}</span>
                  <span className="text-espresso/70 font-medium">{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-espresso/10 flex items-start gap-2.5 text-xs text-espresso/60">
              <MapPin className="w-4 h-4 text-crema shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                Unit RA-03 Lantai Dasar, Apartemen Brooklyn, Jl. Alam Sutera Boulevard Kav. 22 & 26, Serpong Utara
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
