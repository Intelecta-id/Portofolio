"use client";

import React, { useState } from "react";
import {
  Compass,
  MapPin,
  Car,
  Footprints,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Bike,
  ShieldCheck,
  Info,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { brandData } from "@/data/brandData";

export default function WayfindingGuide() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(brandData.location.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const iconMap: Record<string, React.ElementType> = {
    Compass,
    Car,
    Footprints,
    Sparkles,
  };

  return (
    <section id="akses" className="py-20 lg:py-28 bg-oat border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" icon={MapPin} className="mb-3">
            Panduan Rute & Akses Lokasi
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso leading-tight">
            Menemukan Unit RA-03 dengan Mudah
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso/75 leading-relaxed">
            Berada di lantai dasar ritel Apartemen Brooklyn. Ikuti petunjuk rute dan informasi parkir
            berikut untuk kunjungan yang nyaman bagi penghuni maupun pengunjung umum.
          </p>
        </div>

        {/* Visual Route Grid: Left Photo + Right Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Visual Photo of Entrance/Lobby */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-sm border border-espresso/10 bg-cream min-h-[320px] group">
            <img
              src={brandData.wayfinding.image}
              alt="Pintu masuk dan lobi ritel Apartemen Brooklyn Alam Sutera"
              className="w-full h-full object-cover img-zoom"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-bold uppercase tracking-wider text-crema px-2.5 py-1 rounded-md bg-espresso/80 backdrop-blur-sm border border-crema/20 inline-block mb-2">
                Titik Masuk Ritel
              </span>
              <h3 className="text-lg font-bold text-oat leading-snug">
                Lobi Ritel & Drop-Off Lobi Utara Apartemen Brooklyn
              </h3>
              <p className="text-xs text-oat/75 mt-1">
                Akses langsung ke koridor komersial tanpa perlu kartu akses residen
              </p>
            </div>
          </div>

          {/* Step by Step list */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {brandData.wayfinding.steps.map((item) => {
              const Icon = iconMap[item.icon] || Compass;
              return (
                <div
                  key={item.num}
                  className="bg-cream/75 rounded-2xl p-5 border border-espresso/10 flex flex-col justify-between transition-spring hover:bg-cream hover:shadow-elevation"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-bold text-crema">
                        {item.num}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-espresso text-oat flex items-center justify-center">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-espresso leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs text-espresso/70 leading-relaxed">
                      {item.instruction}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Parking Info for Non-Residents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div className="bg-cream/60 rounded-3xl p-6 sm:p-7 border border-espresso/10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-espresso text-oat flex items-center justify-center shrink-0">
              <Bike className="w-6 h-6 text-crema" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-bold text-espresso">Parkir Motor Pengunjung</h3>
              <p className="text-xs sm:text-sm text-espresso/75 mt-1.5 leading-relaxed">
                {brandData.wayfinding.parkingInfo.motor}
              </p>
            </div>
          </div>

          <div className="bg-cream/60 rounded-3xl p-6 sm:p-7 border border-espresso/10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-espresso text-oat flex items-center justify-center shrink-0">
              <Car className="w-6 h-6 text-crema" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-bold text-espresso">Parkir Mobil Pengunjung</h3>
              <p className="text-xs sm:text-sm text-espresso/75 mt-1.5 leading-relaxed">
                {brandData.wayfinding.parkingInfo.mobil}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Google Maps Embed with Pin at Brooklyn RA-03 */}
        <div className="rounded-3xl overflow-hidden border border-espresso/15 shadow-xl bg-espresso-card mb-8">
          <div className="p-4 sm:p-5 bg-espresso text-oat flex flex-wrap items-center justify-between gap-4 border-b border-espresso-light/40">
            <div className="flex items-center gap-2.5">
              <Compass className="w-5 h-5 text-crema" aria-hidden="true" />
              <div>
                <span className="text-sm font-bold text-oat block">Peta Interaktif Google Maps</span>
                <span className="text-xs text-oat/60">Apartemen Brooklyn, Serpong Utara</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-espresso-card text-oat border border-espresso-light/40 hover:bg-espresso-light transition-spring"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-sage" aria-hidden="true" />
                    <span>Tersalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-crema" aria-hidden="true" />
                    <span>Salin Alamat</span>
                  </>
                )}
              </button>
              <Button
                href={brandData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                iconRight={ExternalLink}
              >
                Buka di App Maps
              </Button>
            </div>
          </div>

          {/* Iframe */}
          <div className="relative w-full h-80 sm:h-96">
            <iframe
              src={brandData.location.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kopi 3 Sekawan Apartemen Brooklyn"
              className="w-full h-full grayscale-[25%] contrast-[105%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
