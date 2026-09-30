import React from "react";
import { Coffee, MapPin, Camera, Compass, ExternalLink, ArrowUp } from "lucide-react";
import { brandData } from "@/data/brandData";

export default function Footer() {
  return (
    <footer className="bg-espresso text-oat pt-16 pb-12 border-t border-espresso-light/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-espresso-light/30">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-crema text-white flex items-center justify-center font-bold">
                <Coffee className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-oat">
                {brandData.name}
              </span>
            </div>
            <p className="text-sm text-oat/70 leading-relaxed max-w-sm">
              Kedai kopi lingkungan di lantai dasar Apartemen Brooklyn, Jl. Alam Sutera Boulevard.
              Menyediakan ruang rehat nyaman bagi penghuni, mahasiswa, dan profesional.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={brandData.location.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-espresso-card text-oat border border-espresso-light/40 flex items-center justify-center hover:text-crema hover:border-crema transition-spring"
                aria-label="Instagram Kopi 3 Sekawan"
              >
                <Camera className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={brandData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-espresso-card text-oat border border-espresso-light/40 flex items-center justify-center hover:text-crema hover:border-crema transition-spring"
                aria-label="Google Maps Kopi 3 Sekawan"
              >
                <Compass className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-crema block">
              Navigasi Halaman
            </span>
            <ul className="space-y-2 text-sm text-oat/80">
              <li>
                <a href="#akses" className="hover:text-crema transition-spring">
                  Rute & Panduan Akses
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-crema transition-spring">
                  Digital Menu & Rekomendasi
                </a>
              </li>
              <li>
                <a href="#suasana" className="hover:text-crema transition-spring">
                  Suasana & Fasilitas WFC
                </a>
              </li>
              <li>
                <a href="#operasional" className="hover:text-crema transition-spring">
                  Jam Operasional Terkini
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Corridor */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-crema block">
              Lokasi Fisik Terkonfirmasi
            </span>
            <div className="flex items-start gap-2.5 text-sm text-oat/80 leading-relaxed">
              <MapPin className="w-4 h-4 text-crema shrink-0 mt-1" aria-hidden="true" />
              <span>
                Unit RA-03, Retail Area Apartemen Brooklyn, Jl. Alam Sutera Boulevard No. Kav. 22 & 26,
                Pakualam, Kec. Serpong Utara, Tangerang Selatan, Banten 15320
              </span>
            </div>
            <div className="pt-2">
              <a
                href={brandData.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-crema hover:underline"
              >
                <span>Buka Titik Peta Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-oat/50">
          <p>
            &copy; {new Date().getFullYear()} {brandData.name} · Unit RA-03 Apartemen Brooklyn. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-oat/40">Company Profile Terintegrasi</span>
            <a
              href="#"
              className="inline-flex items-center gap-1 hover:text-crema transition-spring"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
