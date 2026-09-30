import React from "react";
import Image from "next/image";
import {
  MapPin,
  Building2,
  Compass,
  ExternalLink,
  MessageCircle,
  Coffee,
  CheckCircle2,
  Sparkles,
  ArrowDown,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { brandData } from "@/data/brandData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-oat pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-espresso/10">
      {/* Ambient warm glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-crema/5 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Contextual Narrative & 2 Real CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="outline" icon={MapPin}>
                Unit RA-03 Ground Floor
              </Badge>
              <Badge variant="outline" icon={Building2}>
                Apartemen Brooklyn Alam Sutera
              </Badge>
              <Badge variant="outline" icon={CheckCircle2}>
                Seduhan Segar Harian
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-espresso leading-[1.15]">
              Ngopi Tanpa Repot di Bawah Menara Brooklyn
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-espresso/80 leading-relaxed font-normal max-w-2xl">
              Hadir di Lantai Dasar Apartemen Brooklyn. Seduhan segar setiap hari untuk teman kerja,
              kuliah, dan santai bagi penghuni maupun tamu.
            </p>

            {/* Micro details bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2 w-full max-w-xl">
              <div className="bg-cream/80 border border-espresso/10 rounded-2xl p-3.5 flex flex-col">
                <span className="text-xs text-espresso/60 font-medium">Posisi Kedai</span>
                <span className="text-sm font-bold text-espresso mt-0.5">Unit RA-03 Ritel</span>
              </div>
              <div className="bg-cream/80 border border-espresso/10 rounded-2xl p-3.5 flex flex-col">
                <span className="text-xs text-espresso/60 font-medium">Layanan Praktis</span>
                <span className="text-sm font-bold text-espresso mt-0.5">Dine-in, Takeaway & Drop</span>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-cream/80 border border-espresso/10 rounded-2xl p-3.5 flex flex-col">
                <span className="text-xs text-espresso/60 font-medium">Jam Operasional</span>
                <span className="text-sm font-bold text-espresso mt-0.5">07.00 – 21.00 WIB</span>
              </div>
            </div>

            {/* 2 Primary CTAs as instructed */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                href={brandData.contact.getWhatsappOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                icon={MessageCircle}
                className="bg-crema hover:bg-crema-hover text-white shadow-lg hover:shadow-xl"
              >
                Pesan Antar ke Unit / Lobi
              </Button>
              <Button
                href="#menu"
                variant="outline"
                size="lg"
                iconRight={ArrowDown}
              >
                Lihat Menu Hari Ini
              </Button>
            </div>
          </div>

          {/* Right Column: Real Featured Product Photo Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-cream border border-espresso/15 p-4 sm:p-5 shadow-sm overflow-hidden transition-spring hover:shadow-elevation group">
              {/* Product Photo with Clean Framing */}
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-espresso/10 bg-oat">
                <img
                  src="/images/hero-coffee.jpg"
                  alt="Es Kopi Susu Signature Kopi 3 Sekawan"
                  className="w-full h-full object-cover transition-spring group-hover:scale-105"
                  loading="eager"
                />

                {/* Overlay Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="stone" icon={Sparkles}>
                    Produk Andalan
                  </Badge>
                </div>

                <div
                  className="absolute bottom-4 left-4 right-4 rounded-xl p-3.5 border border-espresso/15 flex items-center justify-between shadow-sm bg-cream/95 backdrop-blur-md text-espresso"
                >
                  <div>
                    <h3 className="text-sm font-bold text-espresso">Es Kopi Susu 3 Sekawan</h3>
                    <p className="text-xs text-espresso/70">Espresso house blend + gula aren murni</p>
                  </div>
                  <span
                    className="text-sm font-extrabold px-3 py-1 rounded-lg border bg-crema-light text-crema border-crema/30"
                  >
                    Rp 22.000
                  </span>
                </div>
              </div>

              {/* Quick Info bar below image */}
              <div className="mt-4 px-2 flex items-center justify-between text-xs text-espresso/70">
                <span className="flex items-center gap-1.5 font-medium">
                  <Coffee className="w-4 h-4 text-crema" aria-hidden="true" />
                  Biji Kopi Pilihan Berkualitas
                </span>
                <a
                  href="#akses"
                  className="inline-flex items-center gap-1 text-crema hover:underline font-semibold"
                >
                  <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                  Petunjuk RA-03
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
